(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Vd={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function dy(){if(C_)return Tl;C_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Tl.Fragment=e,Tl.jsx=i,Tl.jsxs=i,Tl}var w_;function hy(){return w_||(w_=1,Vd.exports=dy()),Vd.exports}var D=hy(),kd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function py(){if(D_)return ct;D_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function M(O,K,ge){this.props=O,this.context=K,this.refs=y,this.updater=ge||E}M.prototype.isReactComponent={},M.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function F(){}F.prototype=M.prototype;function H(O,K,ge){this.props=O,this.context=K,this.refs=y,this.updater=ge||E}var C=H.prototype=new F;C.constructor=H,R(C,M.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(O,K,ge){var Ae=ge.ref;return{$$typeof:a,type:O,key:K,ref:Ae!==void 0?Ae:null,props:ge}}function Z(O,K){return N(O.type,K,O.props)}function X(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function Q(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return K[ge]})}var me=/\/+/g;function he(O,K){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):K.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(U,U):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,K,ge,Ae,Pe){var ie=typeof O;(ie==="undefined"||ie==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(ie){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case a:case e:ye=!0;break;case g:return ye=O._init,z(ye(O._payload),K,ge,Ae,Pe)}}if(ye)return Pe=Pe(O),ye=Ae===""?"."+he(O,0):Ae,I(Pe)?(ge="",ye!=null&&(ge=ye.replace(me,"$&/")+"/"),z(Pe,K,ge,"",function(at){return at})):Pe!=null&&(X(Pe)&&(Pe=Z(Pe,ge+(Pe.key==null||O&&O.key===Pe.key?"":(""+Pe.key).replace(me,"$&/")+"/")+ye)),K.push(Pe)),1;ye=0;var be=Ae===""?".":Ae+":";if(I(O))for(var qe=0;qe<O.length;qe++)Ae=O[qe],ie=be+he(Ae,qe),ye+=z(Ae,K,ge,ie,Pe);else if(qe=x(O),typeof qe=="function")for(O=qe.call(O),qe=0;!(Ae=O.next()).done;)Ae=Ae.value,ie=be+he(Ae,qe++),ye+=z(Ae,K,ge,ie,Pe);else if(ie==="object"){if(typeof O.then=="function")return z(J(O),K,ge,Ae,Pe);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(O,K,ge){if(O==null)return O;var Ae=[],Pe=0;return z(O,Ae,"","",function(ie){return K.call(ge,ie,Pe++)}),Ae}function ne(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var ue=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Se={map:G,forEach:function(O,K,ge){G(O,function(){K.apply(this,arguments)},ge)},count:function(O){var K=0;return G(O,function(){K++}),K},toArray:function(O){return G(O,function(K){return K})||[]},only:function(O){if(!X(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ct.Activity=_,ct.Children=Se,ct.Component=M,ct.Fragment=i,ct.Profiler=o,ct.PureComponent=H,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ct.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},ct.cache=function(O){return function(){return O.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(O,K,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ae=R({},O.props),Pe=O.key;if(K!=null)for(ie in K.key!==void 0&&(Pe=""+K.key),K)!T.call(K,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&K.ref===void 0||(Ae[ie]=K[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=ge;else if(1<ie){for(var ye=Array(ie),be=0;be<ie;be++)ye[be]=arguments[be+2];Ae.children=ye}return N(O.type,Pe,Ae)},ct.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ct.createElement=function(O,K,ge){var Ae,Pe={},ie=null;if(K!=null)for(Ae in K.key!==void 0&&(ie=""+K.key),K)T.call(K,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=K[Ae]);var ye=arguments.length-2;if(ye===1)Pe.children=ge;else if(1<ye){for(var be=Array(ye),qe=0;qe<ye;qe++)be[qe]=arguments[qe+2];Pe.children=be}if(O&&O.defaultProps)for(Ae in ye=O.defaultProps,ye)Pe[Ae]===void 0&&(Pe[Ae]=ye[Ae]);return N(O,ie,Pe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(O){return{$$typeof:h,render:O}},ct.isValidElement=X,ct.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ne}},ct.memo=function(O,K){return{$$typeof:d,type:O,compare:K===void 0?null:K}},ct.startTransition=function(O){var K=B.T,ge={};B.T=ge;try{var Ae=O(),Pe=B.S;Pe!==null&&Pe(ge,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(U,ue)}catch(ie){ue(ie)}finally{K!==null&&ge.types!==null&&(K.types=ge.types),B.T=K}},ct.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ct.use=function(O){return B.H.use(O)},ct.useActionState=function(O,K,ge){return B.H.useActionState(O,K,ge)},ct.useCallback=function(O,K){return B.H.useCallback(O,K)},ct.useContext=function(O){return B.H.useContext(O)},ct.useDebugValue=function(){},ct.useDeferredValue=function(O,K){return B.H.useDeferredValue(O,K)},ct.useEffect=function(O,K){return B.H.useEffect(O,K)},ct.useEffectEvent=function(O){return B.H.useEffectEvent(O)},ct.useId=function(){return B.H.useId()},ct.useImperativeHandle=function(O,K,ge){return B.H.useImperativeHandle(O,K,ge)},ct.useInsertionEffect=function(O,K){return B.H.useInsertionEffect(O,K)},ct.useLayoutEffect=function(O,K){return B.H.useLayoutEffect(O,K)},ct.useMemo=function(O,K){return B.H.useMemo(O,K)},ct.useOptimistic=function(O,K){return B.H.useOptimistic(O,K)},ct.useReducer=function(O,K,ge){return B.H.useReducer(O,K,ge)},ct.useRef=function(O){return B.H.useRef(O)},ct.useState=function(O){return B.H.useState(O)},ct.useSyncExternalStore=function(O,K,ge){return B.H.useSyncExternalStore(O,K,ge)},ct.useTransition=function(){return B.H.useTransition()},ct.version="19.2.7",ct}var L_;function Dp(){return L_||(L_=1,kd.exports=py()),kd.exports}var Ve=Dp(),Xd={exports:{}},Al={},Wd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function my(){return N_||(N_=1,(function(a){function e(z,G){var ne=z.length;z.push(G);e:for(;0<ne;){var ue=ne-1>>>1,Se=z[ue];if(0<o(Se,G))z[ue]=G,z[ne]=Se,ne=ue;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],ne=z.pop();if(ne!==G){z[0]=ne;e:for(var ue=0,Se=z.length,O=Se>>>1;ue<O;){var K=2*(ue+1)-1,ge=z[K],Ae=K+1,Pe=z[Ae];if(0>o(ge,ne))Ae<Se&&0>o(Pe,ge)?(z[ue]=Pe,z[Ae]=ne,ue=Ae):(z[ue]=ge,z[K]=ne,ue=K);else if(Ae<Se&&0>o(Pe,ne))z[ue]=Pe,z[Ae]=ne,ue=Ae;else break e}}return G}function o(z,G){var ne=z.sortIndex-G.sortIndex;return ne!==0?ne:z.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,E=!1,R=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var G=i(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(d)}}function I(z){if(R=!1,C(z),!E)if(i(m)!==null)E=!0,U||(U=!0,Q());else{var G=i(d);G!==null&&J(I,G.startTime-z)}}var U=!1,B=-1,T=5,N=-1;function Z(){return y?!0:!(a.unstable_now()-N<T)}function X(){if(y=!1,U){var z=a.unstable_now();N=z;var G=!0;try{e:{E=!1,R&&(R=!1,F(B),B=-1),x=!0;var ne=v;try{t:{for(C(z),_=i(m);_!==null&&!(_.expirationTime>z&&Z());){var ue=_.callback;if(typeof ue=="function"){_.callback=null,v=_.priorityLevel;var Se=ue(_.expirationTime<=z);if(z=a.unstable_now(),typeof Se=="function"){_.callback=Se,C(z),G=!0;break t}_===i(m)&&r(m),C(z)}else r(m);_=i(m)}if(_!==null)G=!0;else{var O=i(d);O!==null&&J(I,O.startTime-z),G=!1}}break e}finally{_=null,v=ne,x=!1}G=void 0}}finally{G?Q():U=!1}}}var Q;if(typeof H=="function")Q=function(){H(X)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,he=me.port2;me.port1.onmessage=X,Q=function(){he.postMessage(null)}}else Q=function(){M(X,0)};function J(z,G){B=M(function(){z(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ne=v;v=G;try{return z()}finally{v=ne}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=v;v=z;try{return G()}finally{v=ne}},a.unstable_scheduleCallback=function(z,G,ne){var ue=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ue+ne:ue):ne=ue,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ne+Se,z={id:g++,callback:G,priorityLevel:z,startTime:ne,expirationTime:Se,sortIndex:-1},ne>ue?(z.sortIndex=ne,e(d,z),i(m)===null&&z===i(d)&&(R?(F(B),B=-1):R=!0,J(I,ne-ue))):(z.sortIndex=Se,e(m,z),E||x||(E=!0,U||(U=!0,Q()))),z},a.unstable_shouldYield=Z,a.unstable_wrapCallback=function(z){var G=v;return function(){var ne=v;v=G;try{return z.apply(this,arguments)}finally{v=ne}}}})(Yd)),Yd}var U_;function gy(){return U_||(U_=1,Wd.exports=my()),Wd.exports}var qd={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function _y(){if(O_)return qn;O_=1;var a=Dp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,qn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},qn.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},qn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},qn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},qn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},qn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},qn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},qn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},qn.requestFormReset=function(m){r.d.r(m)},qn.unstable_batchedUpdates=function(m,d){return m(d)},qn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},qn.version="19.2.7",qn}var P_;function dx(){if(P_)return qd.exports;P_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),qd.exports=_y(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function vy(){if(I_)return Al;I_=1;var a=gy(),e=Dp(),i=dx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,l=p;break}if(w===l){S=!0,l=f,s=p;break}w=w.sibling}if(!S){for(w=p.child;w;){if(w===s){S=!0,s=p,l=f;break}if(w===l){S=!0,l=p,s=f;break}w=w.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),H=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case H:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var J=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ue=[],Se=-1;function O(t){return{current:t}}function K(t){0>Se||(t.current=ue[Se],ue[Se]=null,Se--)}function ge(t,n){Se++,ue[Se]=t.current,t.current=n}var Ae=O(null),Pe=O(null),ie=O(null),ye=O(null);function be(t,n){switch(ge(ie,n),ge(Pe,t),ge(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qg(n),t=Jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ae),ge(Ae,t)}function qe(){K(Ae),K(Pe),K(ie)}function at(t){t.memoizedState!==null&&ge(ye,t);var n=Ae.current,s=Jg(n,t.type);n!==s&&(ge(Pe,t),ge(Ae,s))}function $e(t){Pe.current===t&&(K(Ae),K(Pe)),ye.current===t&&(K(ye),Ml._currentValue=ne)}var Kt,dt;function nt(t){if(Kt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",dt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+t+dt}var ft=!1;function ht(t,n){if(!t||ft)return"";ft=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(de){var ce=de}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(de){ce=de}t.call(Me.prototype)}}else{try{throw Error()}catch(de){ce=de}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],w=p[1];if(S&&w){var k=S.split(`
`),re=w.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===re.length)for(l=k.length-1,f=re.length-1;1<=l&&0<=f&&k[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==re[f]){var ve=`
`+k[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{ft=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?nt(s):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return t.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return nt("Activity");default:return""}}function Yt(t){try{var n="",s=null;do n+=Qt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Jt=Object.prototype.hasOwnProperty,on=a.unstable_scheduleCallback,Gt=a.unstable_cancelCallback,tn=a.unstable_shouldYield,$=a.unstable_requestPaint,wt=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,oe=a.unstable_LowPriority,pe=a.unstable_IdlePriority,we=a.log,Ie=a.unstable_setDisableYieldValue,le=null,fe=null;function Ce(t){if(typeof we=="function"&&Ie(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(le,t)}catch{}}var He=Math.clz32?Math.clz32:Ke,Ne=Math.log,Ue=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Ne(t)/Ue|0)|0}var Je=256,it=262144,Y=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=Le(l):(S&=w,S!==0?f=Le(S):s||(s=w&~t,s!==0&&(f=Le(s))))):(w=l&~p,w!==0?f=Le(w):S!==0?f=Le(S):s||(s=l&~t,s!==0&&(f=Le(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Fe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dt(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,k=t.expirationTimes,re=t.hiddenUpdates;for(s=S&~s;0<s;){var ve=31-He(s),Me=1<<ve;w[ve]=0,k[ve]=-1;var ce=re[ve];if(ce!==null)for(re[ve]=null,ve=0;ve<ce.length;ve++){var de=ce[ve];de!==null&&(de.lane&=-536870913)}s&=~Me}l!==0&&lt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function lt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Qn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Jn(t,n){var s=n&-n;return s=(s&42)!==0?1:Ca(s),(s&(t.suspendedLanes|n))!==0?0:s}function Ca(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ra(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:M_(t.type))}function Yi(t,n){var s=G.p;try{return G.p=t,n()}finally{G.p=s}}var ai=Math.random().toString(36).slice(2),fn="__reactFiber$"+ai,Mn="__reactProps$"+ai,In="__reactContainer$"+ai,oa="__reactEvents$"+ai,wa="__reactListeners$"+ai,js="__reactHandles$"+ai,la="__reactResources$"+ai,qi="__reactMarker$"+ai;function ji(t){delete t[fn],delete t[Mn],delete t[oa],delete t[wa],delete t[js]}function Ri(t){var n=t[fn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[In]||s[fn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=s_(t);t!==null;){if(s=t[fn])return s;t=s_(t)}return n}t=s,s=t.parentNode}return null}function Ci(t){if(t=t[fn]||t[In]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ca(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Zi(t){var n=t[la];return n||(n=t[la]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[qi]=!0}var Da=new Set,A={};function L(t,n){V(t,n),V(t+"Capture",n)}function V(t,n){for(A[t]=n,t=0;t<n.length;t++)Da.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),j={},Te={};function De(t){return Jt.call(Te,t)?!0:Jt.call(j,t)?!1:W.test(t)?Te[t]=!0:(j[t]=!0,!1)}function Re(t,n,s){if(De(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Be(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function et(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ot(t){if(!t._valueTracker){var n=et(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Vt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=et(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Mt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var At=/[\n"\\]/g;function Lt(t){return t.replace(At,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(t,n,s,l,f,p,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ke(n)):t.value!==""+ke(n)&&(t.value=""+ke(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?pt(t,S,ke(n)):s!=null?pt(t,S,ke(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ke(w):t.removeAttribute("name")}function wn(t,n,s,l,f,p,S,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){ot(t);return}s=s!=null?""+ke(s):"",n=n!=null?""+ke(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),ot(t)}function pt(t,n,s){n==="number"&&Mt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function hn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ke(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function Fn(t,n,s){if(n!=null&&(n=""+ke(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+ke(s):""}function si(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(J(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=ke(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),ot(t)}function Wn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ut=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $t(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Ut.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Dn(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&$t(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&$t(t,p,n[p])}function vt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function La(t){return ua.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var Na=null;function Fo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,Di=null;function Cr(t){var n=Ci(t);if(n&&(t=n.stateNode)){var s=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Lt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Mn]||null;if(!f)throw Error(r(90));Xe(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Vt(l)}break e;case"textarea":Fn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&hn(t,!!s.multiple,n,!1)}}}var Bo=!1;function zo(t,n,s){if(Bo)return t(n,s);Bo=!0;try{var l=t(n);return l}finally{if(Bo=!1,(os!==null||Di!==null)&&(Dc(),os&&(n=os,t=Di,Di=os=null,Cr(n),t)))for(n=0;n<t.length;n++)Cr(t[n])}}function ls(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Mn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=!1;if(Ki)try{var da={};Object.defineProperty(da,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Zs=!1}var pi=null,Ho=null,wr=null;function Wu(){if(wr)return wr;var t,n=Ho,s=n.length,l,f="value"in pi?pi.value:pi.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return wr=f.slice(t,1<l?1-l:void 0)}function Ks(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cs(){return!0}function ql(){return!1}function Yn(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?cs:ql,this.isPropagationStopped=ql,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),n}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Yn(Ua),us=_({},Ua,{view:0,detail:0}),Nt=Yn(us),ri,Li,yn,mi=_({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yn&&(yn&&t.type==="mousemove"?(ri=t.screenX-yn.screenX,Li=t.screenY-yn.screenY):Li=ri=0,yn=t),ri)},movementY:function(t){return"movementY"in t?t.movementY:Li}}),$n=Yn(mi),fs=_({},mi,{dataTransfer:0}),Dr=Yn(fs),ds=_({},us,{relatedTarget:0}),ha=Yn(ds),Go=_({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),jl=Yn(Go),gS=_({},Ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=Yn(gS),vS=_({},Ua,{data:0}),tm=Yn(vS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=MS[t])?!!n[t]:!1}function Yu(){return yS}var ES=_({},us,{key:function(t){if(t.key){var n=xS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ks(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?Ks(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ks(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=Yn(ES),TS=_({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Yn(TS),AS=_({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),RS=Yn(AS),CS=_({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=Yn(CS),DS=_({},mi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=Yn(DS),NS=_({},Ua,{newState:0,oldState:0}),US=Yn(NS),OS=[9,13,27,32],qu=Ki&&"CompositionEvent"in window,Vo=null;Ki&&"documentMode"in document&&(Vo=document.documentMode);var PS=Ki&&"TextEvent"in window&&!Vo,im=Ki&&(!qu||Vo&&8<Vo&&11>=Vo),am=" ",sm=!1;function rm(t,n){switch(t){case"keyup":return OS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function IS(t,n){switch(t){case"compositionend":return om(n);case"keypress":return n.which!==32?null:(sm=!0,am);case"textInput":return t=n.data,t===am&&sm?null:t;default:return null}}function FS(t,n){if(Lr)return t==="compositionend"||!qu&&rm(t,n)?(t=Wu(),wr=Ho=pi=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return im&&n.locale!=="ko"?null:n.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!BS[t.type]:n==="textarea"}function cm(t,n,s,l){os?Di?Di.push(l):Di=[l]:os=l,n=Fc(n,"onChange"),0<n.length&&(s=new Qs("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var ko=null,Xo=null;function zS(t){Wg(t,0)}function Zl(t){var n=ca(t);if(Vt(n))return t}function um(t,n){if(t==="change")return n}var fm=!1;if(Ki){var ju;if(Ki){var Zu="oninput"in document;if(!Zu){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Zu=typeof dm.oninput=="function"}ju=Zu}else ju=!1;fm=ju&&(!document.documentMode||9<document.documentMode)}function hm(){ko&&(ko.detachEvent("onpropertychange",pm),Xo=ko=null)}function pm(t){if(t.propertyName==="value"&&Zl(Xo)){var n=[];cm(n,Xo,t,Fo(t)),zo(zS,n)}}function HS(t,n,s){t==="focusin"?(hm(),ko=n,Xo=s,ko.attachEvent("onpropertychange",pm)):t==="focusout"&&hm()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(Xo)}function VS(t,n){if(t==="click")return Zl(n)}function kS(t,n){if(t==="input"||t==="change")return Zl(n)}function XS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var gi=typeof Object.is=="function"?Object.is:XS;function Wo(t,n){if(gi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Jt.call(n,f)||!gi(t[f],n[f]))return!1}return!0}function mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,n){var s=mm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=mm(s)}}function _m(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_m(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function vm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Mt(t.document)}return n}function Ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var WS=Ki&&"documentMode"in document&&11>=document.documentMode,Nr=null,Qu=null,Yo=null,Ju=!1;function xm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ju||Nr==null||Nr!==Mt(l)||(l=Nr,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&Wo(Yo,l)||(Yo=l,l=Fc(Qu,"onSelect"),0<l.length&&(n=new Qs("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Nr)))}function Js(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Ur={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionrun:Js("Transition","TransitionRun"),transitionstart:Js("Transition","TransitionStart"),transitioncancel:Js("Transition","TransitionCancel"),transitionend:Js("Transition","TransitionEnd")},$u={},Sm={};Ki&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function $s(t){if($u[t])return $u[t];if(!Ur[t])return t;var n=Ur[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Sm)return $u[t]=n[s];return t}var Mm=$s("animationend"),ym=$s("animationiteration"),Em=$s("animationstart"),YS=$s("transitionrun"),qS=$s("transitionstart"),jS=$s("transitioncancel"),bm=$s("transitionend"),Tm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Qi(t,n){Tm.set(t,n),L(n,[t])}var Kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ni=[],Or=0,tf=0;function Ql(){for(var t=Or,n=tf=Or=0;n<t;){var s=Ni[n];Ni[n++]=null;var l=Ni[n];Ni[n++]=null;var f=Ni[n];Ni[n++]=null;var p=Ni[n];if(Ni[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&Am(s,f,p)}}function Jl(t,n,s,l){Ni[Or++]=t,Ni[Or++]=n,Ni[Or++]=s,Ni[Or++]=l,tf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function nf(t,n,s,l){return Jl(t,n,s,l),$l(t)}function er(t,n){return Jl(t,null,null,n),$l(t)}function Am(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-He(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function $l(t){if(50<pl)throw pl=0,dd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function ZS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,n,s,l){return new ZS(t,n,s,l)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oa(t,n){var s=t.alternate;return s===null?(s=_i(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Rm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ec(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")af(t)&&(S=1);else if(typeof t=="string")S=ey(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=_i(31,s,n,f),t.elementType=N,t.lanes=p,t;case R:return tr(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=_i(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case I:return t=_i(13,s,n,f),t.elementType=I,t.lanes=p,t;case U:return t=_i(19,s,n,f),t.elementType=U,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:S=10;break e;case F:S=9;break e;case C:S=11;break e;case B:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=_i(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function tr(t,n,s,l){return t=_i(7,t,l,n),t.lanes=s,t}function sf(t,n,s){return t=_i(6,t,null,n),t.lanes=s,t}function Cm(t){var n=_i(18,null,null,0);return n.stateNode=t,n}function rf(t,n,s){return n=_i(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wm=new WeakMap;function Ui(t,n){if(typeof t=="object"&&t!==null){var s=wm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Yt(n)},wm.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var Ir=[],Fr=0,tc=null,qo=0,Oi=[],Pi=0,hs=null,pa=1,ma="";function Pa(t,n){Ir[Fr++]=qo,Ir[Fr++]=tc,tc=t,qo=n}function Dm(t,n,s){Oi[Pi++]=pa,Oi[Pi++]=ma,Oi[Pi++]=hs,hs=t;var l=pa;t=ma;var f=32-He(l)-1;l&=~(1<<f),s+=1;var p=32-He(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,pa=1<<32-He(n)+f|s<<f|l,ma=p+t}else pa=1<<p|s<<f|l,ma=t}function of(t){t.return!==null&&(Pa(t,1),Dm(t,1,0))}function lf(t){for(;t===tc;)tc=Ir[--Fr],Ir[Fr]=null,qo=Ir[--Fr],Ir[Fr]=null;for(;t===hs;)hs=Oi[--Pi],Oi[Pi]=null,ma=Oi[--Pi],Oi[Pi]=null,pa=Oi[--Pi],Oi[Pi]=null}function Lm(t,n){Oi[Pi++]=pa,Oi[Pi++]=ma,Oi[Pi++]=hs,pa=n.id,ma=n.overflow,hs=t}var Bn=null,nn=null,Rt=!1,ps=null,Ii=!1,cf=Error(r(519));function ms(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Ui(n,t)),cf}function Nm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[fn]=t,n[Mn]=l,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<gl.length;s++)Et(gl[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),wn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),si(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Zg(n.textContent,s)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=fa),n=!0):n=!1,n||ms(t,!0)}function Um(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Bn=Bn.return}}function Br(t){if(t!==Bn)return!1;if(!Rt)return Um(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Rd(t.type,t.memoizedProps)),s=!s),s&&nn&&ms(t),Um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=a_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=a_(t)}else n===27?(n=nn,ws(t.type)?(t=Nd,Nd=null,nn=t):nn=n):nn=Bn?Bi(t.stateNode.nextSibling):null;return!0}function nr(){nn=Bn=null,Rt=!1}function uf(){var t=ps;return t!==null&&(ui===null?ui=t:ui.push.apply(ui,t),ps=null),t}function jo(t){ps===null?ps=[t]:ps.push(t)}var ff=O(null),ir=null,Ia=null;function gs(t,n,s){ge(ff,n._currentValue),n._currentValue=s}function Fa(t){t._currentValue=ff.current,K(ff)}function df(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function hf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var k=0;k<n.length;k++)if(w.context===n[k]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),df(p.return,s,t),l||(S=null);break e}p=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),df(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function zr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=f.type;gi(f.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ml):t=[Ml])}f=f.return}t!==null&&hf(n,t,s,l),n.flags|=262144}function nc(t){for(t=t.firstContext;t!==null;){if(!gi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return Om(ir,t)}function ic(t,n){return ir===null&&ar(t),Om(t,n)}function Om(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ia===null){if(t===null)throw Error(r(308));Ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ia=Ia.next=n;return s}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},QS=a.unstable_scheduleCallback,JS=a.unstable_NormalPriority,En={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new KS,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&QS(JS,function(){t.controller.abort()})}var Ko=null,mf=0,Hr=0,Gr=null;function $S(t,n){if(Ko===null){var s=Ko=[];mf=0,Hr=vd(),Gr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return mf++,n.then(Pm,Pm),n}function Pm(){if(--mf===0&&Ko!==null){Gr!==null&&(Gr.status="fulfilled");var t=Ko;Ko=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function eM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Im=z.S;z.S=function(t,n){xg=wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$S(t,n),Im!==null&&Im(t,n)};var sr=O(null);function gf(){var t=sr.current;return t!==null?t:en.pooledCache}function ac(t,n){n===null?ge(sr,sr.current):ge(sr,n.pool)}function Fm(){var t=gf();return t===null?null:{parent:En._currentValue,pool:t}}var Vr=Error(r(460)),_f=Error(r(474)),sc=Error(r(542)),rc={then:function(){}};function Bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(fa,fa),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gm(t),t;default:if(typeof n.status=="string")n.then(fa,fa);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gm(t),t}throw or=n,Vr}}function rr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(or=s,Vr):s}}var or=null;function Hm(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function Gm(t){if(t===Vr||t===sc)throw Error(r(483))}var kr=null,Qo=0;function oc(t){var n=Qo;return Qo+=1,kr===null&&(kr=[]),zm(kr,t,n)}function Jo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function lc(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Vm(t){function n(te,q){if(t){var se=te.deletions;se===null?(te.deletions=[q],te.flags|=16):se.push(q)}}function s(te,q){if(!t)return null;for(;q!==null;)n(te,q),q=q.sibling;return null}function l(te){for(var q=new Map;te!==null;)te.key!==null?q.set(te.key,te):q.set(te.index,te),te=te.sibling;return q}function f(te,q){return te=Oa(te,q),te.index=0,te.sibling=null,te}function p(te,q,se){return te.index=se,t?(se=te.alternate,se!==null?(se=se.index,se<q?(te.flags|=67108866,q):se):(te.flags|=67108866,q)):(te.flags|=1048576,q)}function S(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function w(te,q,se,xe){return q===null||q.tag!==6?(q=sf(se,te.mode,xe),q.return=te,q):(q=f(q,se),q.return=te,q)}function k(te,q,se,xe){var tt=se.type;return tt===R?ve(te,q,se.props.children,xe,se.key):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&rr(tt)===q.type)?(q=f(q,se.props),Jo(q,se),q.return=te,q):(q=ec(se.type,se.key,se.props,null,te.mode,xe),Jo(q,se),q.return=te,q)}function re(te,q,se,xe){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=rf(se,te.mode,xe),q.return=te,q):(q=f(q,se.children||[]),q.return=te,q)}function ve(te,q,se,xe,tt){return q===null||q.tag!==7?(q=tr(se,te.mode,xe,tt),q.return=te,q):(q=f(q,se),q.return=te,q)}function Me(te,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=sf(""+q,te.mode,se),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return se=ec(q.type,q.key,q.props,null,te.mode,se),Jo(se,q),se.return=te,se;case E:return q=rf(q,te.mode,se),q.return=te,q;case T:return q=rr(q),Me(te,q,se)}if(J(q)||Q(q))return q=tr(q,te.mode,se,null),q.return=te,q;if(typeof q.then=="function")return Me(te,oc(q),se);if(q.$$typeof===H)return Me(te,ic(te,q),se);lc(te,q)}return null}function ce(te,q,se,xe){var tt=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return tt!==null?null:w(te,q,""+se,xe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===tt?k(te,q,se,xe):null;case E:return se.key===tt?re(te,q,se,xe):null;case T:return se=rr(se),ce(te,q,se,xe)}if(J(se)||Q(se))return tt!==null?null:ve(te,q,se,xe,null);if(typeof se.then=="function")return ce(te,q,oc(se),xe);if(se.$$typeof===H)return ce(te,q,ic(te,se),xe);lc(te,se)}return null}function de(te,q,se,xe,tt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return te=te.get(se)||null,w(q,te,""+xe,tt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case x:return te=te.get(xe.key===null?se:xe.key)||null,k(q,te,xe,tt);case E:return te=te.get(xe.key===null?se:xe.key)||null,re(q,te,xe,tt);case T:return xe=rr(xe),de(te,q,se,xe,tt)}if(J(xe)||Q(xe))return te=te.get(se)||null,ve(q,te,xe,tt,null);if(typeof xe.then=="function")return de(te,q,se,oc(xe),tt);if(xe.$$typeof===H)return de(te,q,se,ic(q,xe),tt);lc(q,xe)}return null}function Ze(te,q,se,xe){for(var tt=null,Pt=null,Qe=q,gt=q=0,Tt=null;Qe!==null&&gt<se.length;gt++){Qe.index>gt?(Tt=Qe,Qe=null):Tt=Qe.sibling;var It=ce(te,Qe,se[gt],xe);if(It===null){Qe===null&&(Qe=Tt);break}t&&Qe&&It.alternate===null&&n(te,Qe),q=p(It,q,gt),Pt===null?tt=It:Pt.sibling=It,Pt=It,Qe=Tt}if(gt===se.length)return s(te,Qe),Rt&&Pa(te,gt),tt;if(Qe===null){for(;gt<se.length;gt++)Qe=Me(te,se[gt],xe),Qe!==null&&(q=p(Qe,q,gt),Pt===null?tt=Qe:Pt.sibling=Qe,Pt=Qe);return Rt&&Pa(te,gt),tt}for(Qe=l(Qe);gt<se.length;gt++)Tt=de(Qe,te,gt,se[gt],xe),Tt!==null&&(t&&Tt.alternate!==null&&Qe.delete(Tt.key===null?gt:Tt.key),q=p(Tt,q,gt),Pt===null?tt=Tt:Pt.sibling=Tt,Pt=Tt);return t&&Qe.forEach(function(Os){return n(te,Os)}),Rt&&Pa(te,gt),tt}function st(te,q,se,xe){if(se==null)throw Error(r(151));for(var tt=null,Pt=null,Qe=q,gt=q=0,Tt=null,It=se.next();Qe!==null&&!It.done;gt++,It=se.next()){Qe.index>gt?(Tt=Qe,Qe=null):Tt=Qe.sibling;var Os=ce(te,Qe,It.value,xe);if(Os===null){Qe===null&&(Qe=Tt);break}t&&Qe&&Os.alternate===null&&n(te,Qe),q=p(Os,q,gt),Pt===null?tt=Os:Pt.sibling=Os,Pt=Os,Qe=Tt}if(It.done)return s(te,Qe),Rt&&Pa(te,gt),tt;if(Qe===null){for(;!It.done;gt++,It=se.next())It=Me(te,It.value,xe),It!==null&&(q=p(It,q,gt),Pt===null?tt=It:Pt.sibling=It,Pt=It);return Rt&&Pa(te,gt),tt}for(Qe=l(Qe);!It.done;gt++,It=se.next())It=de(Qe,te,gt,It.value,xe),It!==null&&(t&&It.alternate!==null&&Qe.delete(It.key===null?gt:It.key),q=p(It,q,gt),Pt===null?tt=It:Pt.sibling=It,Pt=It);return t&&Qe.forEach(function(fy){return n(te,fy)}),Rt&&Pa(te,gt),tt}function Zt(te,q,se,xe){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var tt=se.key;q!==null;){if(q.key===tt){if(tt=se.type,tt===R){if(q.tag===7){s(te,q.sibling),xe=f(q,se.props.children),xe.return=te,te=xe;break e}}else if(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&rr(tt)===q.type){s(te,q.sibling),xe=f(q,se.props),Jo(xe,se),xe.return=te,te=xe;break e}s(te,q);break}else n(te,q);q=q.sibling}se.type===R?(xe=tr(se.props.children,te.mode,xe,se.key),xe.return=te,te=xe):(xe=ec(se.type,se.key,se.props,null,te.mode,xe),Jo(xe,se),xe.return=te,te=xe)}return S(te);case E:e:{for(tt=se.key;q!==null;){if(q.key===tt)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){s(te,q.sibling),xe=f(q,se.children||[]),xe.return=te,te=xe;break e}else{s(te,q);break}else n(te,q);q=q.sibling}xe=rf(se,te.mode,xe),xe.return=te,te=xe}return S(te);case T:return se=rr(se),Zt(te,q,se,xe)}if(J(se))return Ze(te,q,se,xe);if(Q(se)){if(tt=Q(se),typeof tt!="function")throw Error(r(150));return se=tt.call(se),st(te,q,se,xe)}if(typeof se.then=="function")return Zt(te,q,oc(se),xe);if(se.$$typeof===H)return Zt(te,q,ic(te,se),xe);lc(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,q!==null&&q.tag===6?(s(te,q.sibling),xe=f(q,se),xe.return=te,te=xe):(s(te,q),xe=sf(se,te.mode,xe),xe.return=te,te=xe),S(te)):s(te,q)}return function(te,q,se,xe){try{Qo=0;var tt=Zt(te,q,se,xe);return kr=null,tt}catch(Qe){if(Qe===Vr||Qe===sc)throw Qe;var Pt=_i(29,Qe,null,te.mode);return Pt.lanes=xe,Pt.return=te,Pt}finally{}}}var lr=Vm(!0),km=Vm(!1),_s=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xs(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=$l(t),Am(t,null,s),n}return Jl(t,l,n,s),$l(t)}function $o(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Qn(t,s)}}function Sf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Mf=!1;function el(){if(Mf){var t=Gr;if(t!==null)throw t}}function tl(t,n,s,l){Mf=!1;var f=t.updateQueue;_s=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var k=w,re=k.next;k.next=null,S===null?p=re:S.next=re,S=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==S&&(w===null?ve.firstBaseUpdate=re:w.next=re,ve.lastBaseUpdate=k))}if(p!==null){var Me=f.baseState;S=0,ve=re=k=null,w=p;do{var ce=w.lane&-536870913,de=ce!==w.lane;if(de?(bt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Hr&&(Mf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ze=t,st=w;ce=n;var Zt=s;switch(st.tag){case 1:if(Ze=st.payload,typeof Ze=="function"){Me=Ze.call(Zt,Me,ce);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=st.payload,ce=typeof Ze=="function"?Ze.call(Zt,Me,ce):Ze,ce==null)break e;Me=_({},Me,ce);break e;case 2:_s=!0}}ce=w.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(re=ve=de,k=Me):ve=ve.next=de,S|=ce;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;de=w,w=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ve===null&&(k=Me),f.baseState=k,f.firstBaseUpdate=re,f.lastBaseUpdate=ve,p===null&&(f.shared.lanes=0),bs|=S,t.lanes=S,t.memoizedState=Me}}function Xm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Wm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Xm(s[t],n)}var Xr=O(null),cc=O(0);function Ym(t,n){t=Ya,ge(cc,t),ge(Xr,n),Ya=t|n.baseLanes}function yf(){ge(cc,Ya),ge(Xr,Xr.current)}function Ef(){Ya=cc.current,K(Xr),K(cc)}var vi=O(null),Fi=null;function Ss(t){var n=t.alternate;ge(vn,vn.current&1),ge(vi,t),Fi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Fi=t)}function bf(t){ge(vn,vn.current),ge(vi,t),Fi===null&&(Fi=t)}function qm(t){t.tag===22?(ge(vn,vn.current),ge(vi,t),Fi===null&&(Fi=t)):Ms()}function Ms(){ge(vn,vn.current),ge(vi,vi.current)}function xi(t){K(vi),Fi===t&&(Fi=null),K(vn)}var vn=O(0);function uc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Dd(s)||Ld(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ba=0,mt=null,qt=null,bn=null,fc=!1,Wr=!1,cr=!1,dc=0,nl=0,Yr=null,tM=0;function pn(){throw Error(r(321))}function Tf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!gi(t[s],n[s]))return!1;return!0}function Af(t,n,s,l,f,p){return Ba=p,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?D0:Gf,cr=!1,p=s(l,f),cr=!1,Wr&&(p=Zm(n,s,l,f)),jm(t),p}function jm(t){z.H=sl;var n=qt!==null&&qt.next!==null;if(Ba=0,bn=qt=mt=null,fc=!1,nl=0,Yr=null,n)throw Error(r(300));t===null||Tn||(t=t.dependencies,t!==null&&nc(t)&&(Tn=!0))}function Zm(t,n,s,l){mt=t;var f=0;do{if(Wr&&(Yr=null),nl=0,Wr=!1,25<=f)throw Error(r(301));if(f+=1,bn=qt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=L0,p=n(s,l)}while(Wr);return p}function nM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?il(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(mt.flags|=1024),n}function Rf(){var t=dc!==0;return dc=0,t}function Cf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function wf(t){if(fc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fc=!1}Ba=0,bn=qt=mt=null,Wr=!1,nl=dc=0,Yr=null}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?mt.memoizedState=bn=t:bn=bn.next=t,bn}function xn(){if(qt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=bn===null?mt.memoizedState:bn.next;if(n!==null)bn=n,qt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},bn===null?mt.memoizedState=bn=t:bn=bn.next=t}return bn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(t){var n=nl;return nl+=1,Yr===null&&(Yr=[]),t=zm(Yr,t,n),n=mt,(bn===null?n.memoizedState:bn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?D0:Gf),t}function pc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return il(t);if(t.$$typeof===H)return zn(t)}throw Error(r(438,String(t)))}function Df(t){var n=null,s=mt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=hc(),mt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=Z;return n.index++,s}function za(t,n){return typeof n=="function"?n(t):n}function mc(t){var n=xn();return Lf(n,qt,t)}function Lf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=S=null,k=null,re=n,ve=!1;do{var Me=re.lane&-536870913;if(Me!==re.lane?(bt&Me)===Me:(Ba&Me)===Me){var ce=re.revertLane;if(ce===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Me===Hr&&(ve=!0);else if((Ba&ce)===ce){re=re.next,ce===Hr&&(ve=!0);continue}else Me={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(w=k=Me,S=p):k=k.next=Me,mt.lanes|=ce,bs|=ce;Me=re.action,cr&&s(p,Me),p=re.hasEagerState?re.eagerState:s(p,Me)}else ce={lane:Me,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(w=k=ce,S=p):k=k.next=ce,mt.lanes|=Me,bs|=Me;re=re.next}while(re!==null&&re!==n);if(k===null?S=p:k.next=w,!gi(p,t.memoizedState)&&(Tn=!0,ve&&(s=Gr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=k,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Nf(t){var n=xn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);gi(p,n.memoizedState)||(Tn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Km(t,n,s){var l=mt,f=xn(),p=Rt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!gi((qt||f).memoizedState,s);if(S&&(f.memoizedState=s,Tn=!0),f=f.queue,Pf($m.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||bn!==null&&bn.memoizedState.tag&1){if(l.flags|=2048,qr(9,{destroy:void 0},Jm.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Ba&127)!==0||Qm(l,n,s)}return s}function Qm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=mt.updateQueue,n===null?(n=hc(),mt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Jm(t,n,s,l){n.value=s,n.getSnapshot=l,e0(n)&&t0(t)}function $m(t,n,s){return s(function(){e0(n)&&t0(t)})}function e0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!gi(t,s)}catch{return!0}}function t0(t){var n=er(t,2);n!==null&&fi(n,t,2)}function Uf(t){var n=ei();if(typeof t=="function"){var s=t;if(t=s(),cr){Ce(!0);try{s()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},n}function n0(t,n,s,l){return t.baseState=s,Lf(t,qt,typeof l=="function"?l:za)}function iM(t,n,s,l,f){if(vc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,i0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function i0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,S={};z.T=S;try{var w=s(f,l),k=z.S;k!==null&&k(S,w),a0(t,n,w)}catch(re){Of(t,n,re)}finally{p!==null&&S.types!==null&&(p.types=S.types),z.T=p}}else try{p=s(f,l),a0(t,n,p)}catch(re){Of(t,n,re)}}function a0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){s0(t,n,l)},function(l){return Of(t,n,l)}):s0(t,n,s)}function s0(t,n,s){n.status="fulfilled",n.value=s,r0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,i0(t,s)))}function Of(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,r0(n),n=n.next;while(n!==l)}t.action=null}function r0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function o0(t,n){return n}function l0(t,n){if(Rt){var s=en.formState;if(s!==null){e:{var l=mt;if(Rt){if(nn){t:{for(var f=nn,p=Ii;f.nodeType!==8;){if(!p){f=null;break t}if(f=Bi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){nn=Bi(f.nextSibling),l=f.data==="F!";break e}}ms(l)}l=!1}l&&(n=s[0])}}return s=ei(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o0,lastRenderedState:n},s.queue=l,s=R0.bind(null,mt,l),l.dispatch=s,l=Uf(!1),p=Hf.bind(null,mt,!1,l.queue),l=ei(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=iM.bind(null,mt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function c0(t){var n=xn();return u0(n,qt,t)}function u0(t,n,s){if(n=Lf(t,n,o0)[0],t=mc(za)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=il(n)}catch(S){throw S===Vr?sc:S}else l=n;n=xn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(mt.flags|=2048,qr(9,{destroy:void 0},aM.bind(null,f,s),null)),[l,p,t]}function aM(t,n){t.action=n}function f0(t){var n=xn(),s=qt;if(s!==null)return u0(n,s,t);xn(),n=n.memoizedState,s=xn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function qr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=mt.updateQueue,n===null&&(n=hc(),mt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function d0(){return xn().memoizedState}function gc(t,n,s,l){var f=ei();mt.flags|=t,f.memoizedState=qr(1|n,{destroy:void 0},s,l===void 0?null:l)}function _c(t,n,s,l){var f=xn();l=l===void 0?null:l;var p=f.memoizedState.inst;qt!==null&&l!==null&&Tf(l,qt.memoizedState.deps)?f.memoizedState=qr(n,p,s,l):(mt.flags|=t,f.memoizedState=qr(1|n,p,s,l))}function h0(t,n){gc(8390656,8,t,n)}function Pf(t,n){_c(2048,8,t,n)}function sM(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=hc(),mt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function p0(t){var n=xn().memoizedState;return sM({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function m0(t,n){return _c(4,2,t,n)}function g0(t,n){return _c(4,4,t,n)}function _0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function v0(t,n,s){s=s!=null?s.concat([t]):null,_c(4,4,_0.bind(null,n,t),s)}function If(){}function x0(t,n){var s=xn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Tf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function S0(t,n){var s=xn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Tf(n,l[1]))return l[0];if(l=t(),cr){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,n],l}function Ff(t,n,s){return s===void 0||(Ba&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Mg(),mt.lanes|=t,bs|=t,s)}function M0(t,n,s,l){return gi(s,n)?s:Xr.current!==null?(t=Ff(t,s,l),gi(t,n)||(Tn=!0),t):(Ba&42)===0||(Ba&1073741824)!==0&&(bt&261930)===0?(Tn=!0,t.memoizedState=s):(t=Mg(),mt.lanes|=t,bs|=t,n)}function y0(t,n,s,l,f){var p=G.p;G.p=p!==0&&8>p?p:8;var S=z.T,w={};z.T=w,Hf(t,!1,n,s);try{var k=f(),re=z.S;if(re!==null&&re(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ve=eM(k,l);al(t,n,ve,yi(t))}else al(t,n,l,yi(t))}catch(Me){al(t,n,{then:function(){},status:"rejected",reason:Me},yi())}finally{G.p=p,S!==null&&w.types!==null&&(S.types=w.types),z.T=S}}function rM(){}function Bf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=E0(t).queue;y0(t,f,n,ne,s===null?rM:function(){return b0(t),s(l)})}function E0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:ne},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function b0(t){var n=E0(t);n.next===null&&(n=t.alternate.memoizedState),al(t,n.next.queue,{},yi())}function zf(){return zn(Ml)}function T0(){return xn().memoizedState}function A0(){return xn().memoizedState}function oM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=yi();t=vs(s);var l=xs(n,t,s);l!==null&&(fi(l,n,s),$o(l,n,s)),n={cache:pf()},t.payload=n;return}n=n.return}}function lM(t,n,s){var l=yi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(t)?C0(n,s):(s=nf(t,n,s,l),s!==null&&(fi(s,t,l),w0(s,n,l)))}function R0(t,n,s){var l=yi();al(t,n,s,l)}function al(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(t))C0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,w=p(S,s);if(f.hasEagerState=!0,f.eagerState=w,gi(w,S))return Jl(t,n,f,0),en===null&&Ql(),!1}catch{}finally{}if(s=nf(t,n,f,l),s!==null)return fi(s,t,l),w0(s,n,l),!0}return!1}function Hf(t,n,s,l){if(l={lane:2,revertLane:vd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vc(t)){if(n)throw Error(r(479))}else n=nf(t,s,l,2),n!==null&&fi(n,t,2)}function vc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function C0(t,n){Wr=fc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function w0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Qn(t,s)}}var sl={readContext:zn,use:pc,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};sl.useEffectEvent=pn;var D0={readContext:zn,use:pc,useCallback:function(t,n){return ei().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:h0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,gc(4194308,4,_0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return gc(4194308,4,t,n)},useInsertionEffect:function(t,n){gc(4,2,t,n)},useMemo:function(t,n){var s=ei();n=n===void 0?null:n;var l=t();if(cr){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ei();if(s!==void 0){var f=s(n);if(cr){Ce(!0);try{s(n)}finally{Ce(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=lM.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var n=ei();return t={current:t},n.memoizedState=t},useState:function(t){t=Uf(t);var n=t.queue,s=R0.bind(null,mt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:If,useDeferredValue:function(t,n){var s=ei();return Ff(s,t,n)},useTransition:function(){var t=Uf(!1);return t=y0.bind(null,mt,t.queue,!0,!1),ei().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=mt,f=ei();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(bt&127)!==0||Qm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,h0($m.bind(null,l,p,t),[t]),l.flags|=2048,qr(9,{destroy:void 0},Jm.bind(null,l,p,s,n),null),s},useId:function(){var t=ei(),n=en.identifierPrefix;if(Rt){var s=ma,l=pa;s=(l&~(1<<32-He(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=dc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=tM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zf,useFormState:l0,useActionState:l0,useOptimistic:function(t){var n=ei();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Hf.bind(null,mt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Df,useCacheRefresh:function(){return ei().memoizedState=oM.bind(null,mt)},useEffectEvent:function(t){var n=ei(),s={impl:t};return n.memoizedState=s,function(){if((Bt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Gf={readContext:zn,use:pc,useCallback:x0,useContext:zn,useEffect:Pf,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:mc,useRef:d0,useState:function(){return mc(za)},useDebugValue:If,useDeferredValue:function(t,n){var s=xn();return M0(s,qt.memoizedState,t,n)},useTransition:function(){var t=mc(za)[0],n=xn().memoizedState;return[typeof t=="boolean"?t:il(t),n]},useSyncExternalStore:Km,useId:T0,useHostTransitionStatus:zf,useFormState:c0,useActionState:c0,useOptimistic:function(t,n){var s=xn();return n0(s,qt,t,n)},useMemoCache:Df,useCacheRefresh:A0};Gf.useEffectEvent=p0;var L0={readContext:zn,use:pc,useCallback:x0,useContext:zn,useEffect:Pf,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:Nf,useRef:d0,useState:function(){return Nf(za)},useDebugValue:If,useDeferredValue:function(t,n){var s=xn();return qt===null?Ff(s,t,n):M0(s,qt.memoizedState,t,n)},useTransition:function(){var t=Nf(za)[0],n=xn().memoizedState;return[typeof t=="boolean"?t:il(t),n]},useSyncExternalStore:Km,useId:T0,useHostTransitionStatus:zf,useFormState:f0,useActionState:f0,useOptimistic:function(t,n){var s=xn();return qt!==null?n0(s,qt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Df,useCacheRefresh:A0};L0.useEffectEvent=p0;function Vf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var kf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=yi(),f=vs(l);f.payload=n,s!=null&&(f.callback=s),n=xs(t,f,l),n!==null&&(fi(n,t,l),$o(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=yi(),f=vs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=xs(t,f,l),n!==null&&(fi(n,t,l),$o(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=yi(),l=vs(s);l.tag=2,n!=null&&(l.callback=n),n=xs(t,l,s),n!==null&&(fi(n,t,s),$o(n,t,s))}};function N0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Wo(s,l)||!Wo(f,p):!0}function U0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function ur(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function O0(t){Kl(t)}function P0(t){console.error(t)}function I0(t){Kl(t)}function xc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function F0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xf(t,n,s){return s=vs(s),s.tag=3,s.payload={element:null},s.callback=function(){xc(t,n)},s}function B0(t){return t=vs(t),t.tag=3,t}function z0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){F0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){F0(n,s,l),typeof f!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function cM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&zr(n,s,f,!0),s=vi.current,s!==null){switch(s.tag){case 31:case 13:return Fi===null?Lc():s.alternate===null&&mn===0&&(mn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===rc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),md(t,l,f)),!1;case 22:return s.flags|=65536,l===rc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),md(t,l,f)),!1}throw Error(r(435,s.tag))}return md(t,l,f),Lc(),!1}if(Rt)return n=vi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==cf&&(t=Error(r(422),{cause:l}),jo(Ui(t,s)))):(l!==cf&&(n=Error(r(423),{cause:l}),jo(Ui(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ui(l,s),f=Xf(t.stateNode,l,f),Sf(t,f),mn!==4&&(mn=2)),!1;var p=Error(r(520),{cause:l});if(p=Ui(p,s),hl===null?hl=[p]:hl.push(p),mn!==4&&(mn=2),n===null)return!0;l=Ui(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Xf(s.stateNode,l,t),Sf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ts===null||!Ts.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=B0(f),z0(f,t,s,l),Sf(s,f),!1}s=s.return}while(s!==null);return!1}var Wf=Error(r(461)),Tn=!1;function Hn(t,n,s,l){n.child=t===null?km(n,null,s,l):lr(n,t.child,s,l)}function H0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return ar(n),l=Af(t,n,s,S,p,f),w=Rf(),t!==null&&!Tn?(Cf(t,n,f),Ha(t,n,f)):(Rt&&w&&of(n),n.flags|=1,Hn(t,n,l,f),n.child)}function G0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!af(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,V0(t,n,p,l,f)):(t=ec(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!$f(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Wo,s(S,l)&&t.ref===n.ref)return Ha(t,n,f)}return n.flags|=1,t=Oa(p,l),t.ref=n.ref,t.return=n,n.child=t}function V0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Wo(p,l)&&t.ref===n.ref)if(Tn=!1,n.pendingProps=l=p,$f(t,f))(t.flags&131072)!==0&&(Tn=!0);else return n.lanes=t.lanes,Ha(t,n,f)}return Yf(t,n,s,l,f)}function k0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return X0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ac(n,p!==null?p.cachePool:null),p!==null?Ym(n,p):yf(),qm(n);else return l=n.lanes=536870912,X0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(ac(n,p.cachePool),Ym(n,p),Ms(),n.memoizedState=null):(t!==null&&ac(n,null),yf(),Ms());return Hn(t,n,f,s),n.child}function rl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function X0(t,n,s,l,f){var p=gf();return p=p===null?null:{parent:En._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&ac(n,null),yf(),qm(n),t!==null&&zr(t,n,l,!0),n.childLanes=f,null}function Sc(t,n){return n=yc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function W0(t,n,s){return lr(n,t.child,null,s),t=Sc(n,n.pendingProps),t.flags|=2,xi(n),n.memoizedState=null,t}function uM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=Sc(n,l),n.lanes=536870912,rl(null,t);if(bf(n),(t=nn)?(t=i_(t,Ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:hs!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},s=Cm(t),s.return=n,n.child=s,Bn=n,nn=null)):t=null,t===null)throw ms(n);return n.lanes=536870912,null}return Sc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(bf(n),f)if(n.flags&256)n.flags&=-257,n=W0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Tn||zr(t,n,s,!1),f=(s&t.childLanes)!==0,Tn||f){if(l=en,l!==null&&(S=Jn(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,er(t,S),fi(l,t,S),Wf;Lc(),n=W0(t,n,s)}else t=p.treeContext,nn=Bi(S.nextSibling),Bn=n,Rt=!0,ps=null,Ii=!1,t!==null&&Lm(n,t),n=Sc(n,l),n.flags|=4096;return n}return t=Oa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Mc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Yf(t,n,s,l,f){return ar(n),s=Af(t,n,s,l,void 0,f),l=Rf(),t!==null&&!Tn?(Cf(t,n,f),Ha(t,n,f)):(Rt&&l&&of(n),n.flags|=1,Hn(t,n,s,f),n.child)}function Y0(t,n,s,l,f,p){return ar(n),n.updateQueue=null,s=Zm(n,l,s,f),jm(t),l=Rf(),t!==null&&!Tn?(Cf(t,n,p),Ha(t,n,p)):(Rt&&l&&of(n),n.flags|=1,Hn(t,n,s,p),n.child)}function q0(t,n,s,l,f){if(ar(n),n.stateNode===null){var p=Pr,S=s.contextType;typeof S=="object"&&S!==null&&(p=zn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=kf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},vf(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?zn(S):Pr,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Vf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&kf.enqueueReplaceState(p,p.state,null),tl(n,l,p,f),el(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,k=ur(s,w);p.props=k;var re=p.context,ve=s.contextType;S=Pr,typeof ve=="object"&&ve!==null&&(S=zn(ve));var Me=s.getDerivedStateFromProps;ve=typeof Me=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||re!==S)&&U0(n,p,l,S),_s=!1;var ce=n.memoizedState;p.state=ce,tl(n,l,p,f),el(),re=n.memoizedState,w||ce!==re||_s?(typeof Me=="function"&&(Vf(n,s,Me,l),re=n.memoizedState),(k=_s||N0(n,s,k,l,ce,re,S))?(ve||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=S,l=k):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,xf(t,n),S=n.memoizedProps,ve=ur(s,S),p.props=ve,Me=n.pendingProps,ce=p.context,re=s.contextType,k=Pr,typeof re=="object"&&re!==null&&(k=zn(re)),w=s.getDerivedStateFromProps,(re=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Me||ce!==k)&&U0(n,p,l,k),_s=!1,ce=n.memoizedState,p.state=ce,tl(n,l,p,f),el();var de=n.memoizedState;S!==Me||ce!==de||_s||t!==null&&t.dependencies!==null&&nc(t.dependencies)?(typeof w=="function"&&(Vf(n,s,w,l),de=n.memoizedState),(ve=_s||N0(n,s,ve,l,ce,de,k)||t!==null&&t.dependencies!==null&&nc(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,k)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),p.props=l,p.state=de,p.context=k,l=ve):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Mc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=lr(n,t.child,null,f),n.child=lr(n,null,s,f)):Hn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Ha(t,n,f),t}function j0(t,n,s,l){return nr(),n.flags|=256,Hn(t,n,s,l),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(t){return{baseLanes:t,cachePool:Fm()}}function Zf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Mi),t}function Z0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(vn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?Ss(n):Ms(),(t=nn)?(t=i_(t,Ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:hs!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},s=Cm(t),s.return=n,n.child=s,Bn=n,nn=null)):t=null,t===null)throw ms(n);return Ld(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ms(),f=n.mode,w=yc({mode:"hidden",children:w},f),l=tr(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=jf(s),l.childLanes=Zf(t,S,s),n.memoizedState=qf,rl(null,l)):(Ss(n),Kf(n,w))}var k=t.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(p)n.flags&256?(Ss(n),n.flags&=-257,n=Qf(t,n,s)):n.memoizedState!==null?(Ms(),n.child=t.child,n.flags|=128,n=null):(Ms(),w=l.fallback,f=n.mode,l=yc({mode:"visible",children:l.children},f),w=tr(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,lr(n,t.child,null,s),l=n.child,l.memoizedState=jf(s),l.childLanes=Zf(t,S,s),n.memoizedState=qf,n=rl(null,l));else if(Ss(n),Ld(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var re=S.dgst;S=re,l=Error(r(419)),l.stack="",l.digest=S,jo({value:l,source:null,stack:null}),n=Qf(t,n,s)}else if(Tn||zr(t,n,s,!1),S=(s&t.childLanes)!==0,Tn||S){if(S=en,S!==null&&(l=Jn(S,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,er(t,l),fi(S,t,l),Wf;Dd(w)||Lc(),n=Qf(t,n,s)}else Dd(w)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,nn=Bi(w.nextSibling),Bn=n,Rt=!0,ps=null,Ii=!1,t!==null&&Lm(n,t),n=Kf(n,l.children),n.flags|=4096);return n}return f?(Ms(),w=l.fallback,f=n.mode,k=t.child,re=k.sibling,l=Oa(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,re!==null?w=Oa(re,w):(w=tr(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,rl(null,l),l=n.child,w=t.child.memoizedState,w===null?w=jf(s):(f=w.cachePool,f!==null?(k=En._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=Fm(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=Zf(t,S,s),n.memoizedState=qf,rl(t.child,l)):(Ss(n),s=t.child,t=s.sibling,s=Oa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Kf(t,n){return n=yc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yc(t,n){return t=_i(22,t,null,n),t.lanes=0,t}function Qf(t,n,s){return lr(n,t.child,null,s),t=Kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function K0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),df(t.return,n,s)}function Jf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function Q0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=vn.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ge(vn,S),Hn(t,n,l,s),l=Rt?qo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K0(t,s,n);else if(t.tag===19)K0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&uc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Jf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&uc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Jf(n,!0,s,null,p,l);break;case"together":Jf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ha(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),bs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(zr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Oa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Oa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function $f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nc(t)))}function fM(t,n,s){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),gs(n,En,t.memoizedState.cache),nr();break;case 27:case 5:at(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:gs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ss(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Z0(t,n,s):(Ss(n),t=Ha(t,n,s),t!==null?t.sibling:null);Ss(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(zr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return Q0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ge(vn,vn.current),l)break;return null;case 22:return n.lanes=0,k0(t,n,s,n.pendingProps);case 24:gs(n,En,t.memoizedState.cache)}return Ha(t,n,s)}function J0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Tn=!0;else{if(!$f(t,s)&&(n.flags&128)===0)return Tn=!1,fM(t,n,s);Tn=(t.flags&131072)!==0}else Tn=!1,Rt&&(n.flags&1048576)!==0&&Dm(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=rr(n.elementType),n.type=t,typeof t=="function")af(t)?(l=ur(t,l),n.tag=1,n=q0(null,n,t,l,s)):(n.tag=0,n=Yf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=H0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=G0(null,n,t,l,s);break e}}throw n=he(t)||t,Error(r(306,n,""))}}return n;case 0:return Yf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=ur(l,n.pendingProps),q0(t,n,l,f,s);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,xf(t,n),tl(n,l,null,s);var S=n.memoizedState;if(l=S.cache,gs(n,En,l),l!==p.cache&&hf(n,[En],s,!0),el(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=j0(t,n,l,s);break e}else if(l!==f){f=Ui(Error(r(424)),n),jo(f),n=j0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=Bi(t.firstChild),Bn=n,Rt=!0,ps=null,Ii=!0,s=km(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(nr(),l===f){n=Ha(t,n,s);break e}Hn(t,n,l,s)}n=n.child}return n;case 26:return Mc(t,n),t===null?(s=c_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=Bc(ie.current).createElement(s),l[fn]=n,l[Mn]=t,Gn(l,s,t),dn(l),n.stateNode=l):n.memoizedState=c_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&Rt&&(l=n.stateNode=r_(n.type,n.pendingProps,ie.current),Bn=n,Ii=!0,f=nn,ws(n.type)?(Nd=f,nn=Bi(l.firstChild)):nn=f),Hn(t,n,n.pendingProps.children,s),Mc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=nn)&&(l=GM(l,n.type,n.pendingProps,Ii),l!==null?(n.stateNode=l,Bn=n,nn=Bi(l.firstChild),Ii=!1,f=!0):f=!1),f||ms(n)),at(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,Rd(f,p)?l=null:S!==null&&Rd(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Af(t,n,nM,null,null,s),Ml._currentValue=f),Mc(t,n),Hn(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=nn)&&(s=VM(s,n.pendingProps,Ii),s!==null?(n.stateNode=s,Bn=n,nn=null,t=!0):t=!1),t||ms(n)),null;case 13:return Z0(t,n,s);case 4:return be(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=lr(n,null,l,s):Hn(t,n,l,s),n.child;case 11:return H0(t,n,n.type,n.pendingProps,s);case 7:return Hn(t,n,n.pendingProps,s),n.child;case 8:return Hn(t,n,n.pendingProps.children,s),n.child;case 12:return Hn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,gs(n,n.type,l.value),Hn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,ar(n),f=zn(f),l=l(f),n.flags|=1,Hn(t,n,l,s),n.child;case 14:return G0(t,n,n.type,n.pendingProps,s);case 15:return V0(t,n,n.type,n.pendingProps,s);case 19:return Q0(t,n,s);case 31:return uM(t,n,s);case 22:return k0(t,n,s,n.pendingProps);case 24:return ar(n),l=zn(En),t===null?(f=gf(),f===null&&(f=en,p=pf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},vf(n),gs(n,En,f)):((t.lanes&s)!==0&&(xf(t,n),tl(n,null,null,s),el()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),gs(n,En,l)):(l=p.cache,gs(n,En,l),l!==f.cache&&hf(n,[En],s,!0))),Hn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ga(t){t.flags|=4}function ed(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Tg())t.flags|=8192;else throw or=rc,_f}else t.flags&=-16777217}function $0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p_(n))if(Tg())t.flags|=8192;else throw or=rc,_f}function Ec(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,Qr|=n)}function ol(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function dM(t,n,s){var l=n.pendingProps;switch(lf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Fa(En),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Br(n)?Ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uf())),an(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ga(n),p!==null?(an(n),$0(n,p)):(an(n),ed(n,f,null,l,s))):p?p!==t.memoizedState?(Ga(n),an(n),$0(n,p)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ga(n),an(n),ed(n,f,t,l,s)),null;case 27:if($e(n),s=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ga(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return an(n),null}t=Ae.current,Br(n)?Nm(n):(t=r_(f,l,s),n.stateNode=t,Ga(n))}return an(n),null;case 5:if($e(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ga(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return an(n),null}if(p=Ae.current,Br(n))Nm(n);else{var S=Bc(ie.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[fn]=n,p[Mn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(Gn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ga(n)}}return an(n),ed(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ga(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Br(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[fn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Zg(t.nodeValue,s)),t||ms(n,!0)}else t=Bc(t).createTextNode(l),t[fn]=n,n.stateNode=t}return an(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Br(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else s=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(xi(n),n):(xi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Br(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[fn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),f=!1}else f=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(xi(n),n):(xi(n),null)}return xi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Ec(n,n.updateQueue),an(n),null);case 4:return qe(),t===null&&yd(n.stateNode.containerInfo),an(n),null;case 10:return Fa(n.type),an(n),null;case 19:if(K(vn),l=n.memoizedState,l===null)return an(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)ol(l,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=uc(t),p!==null){for(n.flags|=128,ol(l,!1),t=p.updateQueue,n.updateQueue=t,Ec(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Rm(s,t),s=s.sibling;return ge(vn,vn.current&1|2),Rt&&Pa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&wt()>Cc&&(n.flags|=128,f=!0,ol(l,!1),n.lanes=4194304)}else{if(!f)if(t=uc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Ec(n,t),ol(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Rt)return an(n),null}else 2*wt()-l.renderingStartTime>Cc&&s!==536870912&&(n.flags|=128,f=!0,ol(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=wt(),t.sibling=null,s=vn.current,ge(vn,f?s&1|2:s&1),Rt&&Pa(n,l.treeForkCount),t):(an(n),null);case 22:case 23:return xi(n),Ef(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),s=n.updateQueue,s!==null&&Ec(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(sr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fa(En),an(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hM(t,n){switch(lf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fa(En),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(xi(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(vn),null;case 4:return qe(),null;case 10:return Fa(n.type),null;case 22:case 23:return xi(n),Ef(),t!==null&&K(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fa(En),null;case 25:return null;default:return null}}function eg(t,n){switch(lf(n),n.tag){case 3:Fa(En),qe();break;case 26:case 27:case 5:$e(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&xi(n);break;case 13:xi(n);break;case 19:K(vn);break;case 10:Fa(n.type);break;case 22:case 23:xi(n),Ef(),t!==null&&K(sr);break;case 24:Fa(En)}}function ll(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(w){Xt(n,n.return,w)}}function ys(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=n;var k=s,re=w;try{re()}catch(ve){Xt(f,k,ve)}}}l=l.next}while(l!==p)}}catch(ve){Xt(n,n.return,ve)}}function tg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Wm(n,s)}catch(l){Xt(t,t.return,l)}}}function ng(t,n,s){s.props=ur(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xt(t,n,l)}}function cl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Xt(t,n,f)}}function ga(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xt(t,n,f)}else s.current=null}function ig(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xt(t,t.return,f)}}function td(t,n,s){try{var l=t.stateNode;PM(l,t.type,s,n),l[Mn]=n}catch(f){Xt(t,t.return,f)}}function ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ws(t.type)||t.tag===4}function nd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ws(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=fa));else if(l!==4&&(l===27&&ws(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(id(t,n,s),t=t.sibling;t!==null;)id(t,n,s),t=t.sibling}function bc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&ws(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(bc(t,n,s),t=t.sibling;t!==null;)bc(t,n,s),t=t.sibling}function sg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Gn(n,l,s),n[fn]=t,n[Mn]=s}catch(p){Xt(t,t.return,p)}}var Va=!1,An=!1,ad=!1,rg=typeof WeakSet=="function"?WeakSet:Set,On=null;function pM(t,n){if(t=t.containerInfo,Td=Wc,t=vm(t),Ku(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,w=-1,k=-1,re=0,ve=0,Me=t,ce=null;t:for(;;){for(var de;Me!==s||f!==0&&Me.nodeType!==3||(w=S+f),Me!==p||l!==0&&Me.nodeType!==3||(k=S+l),Me.nodeType===3&&(S+=Me.nodeValue.length),(de=Me.firstChild)!==null;)ce=Me,Me=de;for(;;){if(Me===t)break t;if(ce===s&&++re===f&&(w=S),ce===p&&++ve===l&&(k=S),(de=Me.nextSibling)!==null)break;Me=ce,ce=Me.parentNode}Me=de}s=w===-1||k===-1?null:{start:w,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ad={focusedElem:t,selectionRange:s},Wc=!1,On=n;On!==null;)if(n=On,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,On=t;else for(;On!==null;){switch(n=On,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ze=ur(s.type,f);t=l.getSnapshotBeforeUpdate(Ze,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){Xt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)wd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,On=t;break}On=n.return}}function og(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Xa(t,s),l&4&&ll(5,s);break;case 1:if(Xa(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Xt(s,s.return,S)}else{var f=ur(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Xt(s,s.return,S)}}l&64&&tg(s),l&512&&cl(s,s.return);break;case 3:if(Xa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Wm(t,n)}catch(S){Xt(s,s.return,S)}}break;case 27:n===null&&l&4&&sg(s);case 26:case 5:Xa(t,s),n===null&&l&4&&ig(s),l&512&&cl(s,s.return);break;case 12:Xa(t,s);break;case 31:Xa(t,s),l&4&&ug(t,s);break;case 13:Xa(t,s),l&4&&fg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=EM.bind(null,s),kM(t,s))));break;case 22:if(l=s.memoizedState!==null||Va,!l){n=n!==null&&n.memoizedState!==null||An,f=Va;var p=An;Va=l,(An=n)&&!p?Wa(t,s,(s.subtreeFlags&8772)!==0):Xa(t,s),Va=f,An=p}break;case 30:break;default:Xa(t,s)}}function lg(t){var n=t.alternate;n!==null&&(t.alternate=null,lg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ji(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,oi=!1;function ka(t,n,s){for(s=s.child;s!==null;)cg(t,n,s),s=s.sibling}function cg(t,n,s){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(le,s)}catch{}switch(s.tag){case 26:An||ga(s,n),ka(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:An||ga(s,n);var l=ln,f=oi;ws(s.type)&&(ln=s.stateNode,oi=!1),ka(t,n,s),vl(s.stateNode),ln=l,oi=f;break;case 5:An||ga(s,n);case 6:if(l=ln,f=oi,ln=null,ka(t,n,s),ln=l,oi=f,ln!==null)if(oi)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(p){Xt(s,n,p)}else try{ln.removeChild(s.stateNode)}catch(p){Xt(s,n,p)}break;case 18:ln!==null&&(oi?(t=ln,t_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),so(t)):t_(ln,s.stateNode));break;case 4:l=ln,f=oi,ln=s.stateNode.containerInfo,oi=!0,ka(t,n,s),ln=l,oi=f;break;case 0:case 11:case 14:case 15:ys(2,s,n),An||ys(4,s,n),ka(t,n,s);break;case 1:An||(ga(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ng(s,n,l)),ka(t,n,s);break;case 21:ka(t,n,s);break;case 22:An=(l=An)||s.memoizedState!==null,ka(t,n,s),An=l;break;default:ka(t,n,s)}}function ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{so(t)}catch(s){Xt(n,n.return,s)}}}function fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{so(t)}catch(s){Xt(n,n.return,s)}}function mM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new rg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new rg),n;default:throw Error(r(435,t.tag))}}function Tc(t,n){var s=mM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=bM.bind(null,t,l);l.then(f,f)}})}function li(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(ws(w.type)){ln=w.stateNode,oi=!1;break e}break;case 5:ln=w.stateNode,oi=!1;break e;case 3:case 4:ln=w.stateNode.containerInfo,oi=!0;break e}w=w.return}if(ln===null)throw Error(r(160));cg(p,S,f),ln=null,oi=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)dg(n,t),n=n.sibling}var Ji=null;function dg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:li(n,t),ci(t),l&4&&(ys(3,t,t.return),ll(3,t),ys(5,t,t.return));break;case 1:li(n,t),ci(t),l&512&&(An||s===null||ga(s,s.return)),l&64&&Va&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ji;if(li(n,t),ci(t),l&512&&(An||s===null||ga(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[qi]||p[fn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Gn(p,l,s),p[fn]=t,dn(p),l=p;break e;case"link":var S=d_("link","href",f).get(l+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(p=S[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}p=f.createElement(l),Gn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=d_("meta","content",f).get(l+(s.content||""))){for(w=0;w<S.length;w++)if(p=S[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}p=f.createElement(l),Gn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[fn]=t,dn(p),l=p}t.stateNode=l}else h_(f,t.type,t.stateNode);else t.stateNode=f_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?h_(f,t.type,t.stateNode):f_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&td(t,t.memoizedProps,s.memoizedProps)}break;case 27:li(n,t),ci(t),l&512&&(An||s===null||ga(s,s.return)),s!==null&&l&4&&td(t,t.memoizedProps,s.memoizedProps);break;case 5:if(li(n,t),ci(t),l&512&&(An||s===null||ga(s,s.return)),t.flags&32){f=t.stateNode;try{Wn(f,"")}catch(Ze){Xt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,td(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ad=!0);break;case 6:if(li(n,t),ci(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ze){Xt(t,t.return,Ze)}}break;case 3:if(Gc=null,f=Ji,Ji=zc(n.containerInfo),li(n,t),Ji=f,ci(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{so(n.containerInfo)}catch(Ze){Xt(t,t.return,Ze)}ad&&(ad=!1,hg(t));break;case 4:l=Ji,Ji=zc(t.stateNode.containerInfo),li(n,t),ci(t),Ji=l;break;case 12:li(n,t),ci(t);break;case 31:li(n,t),ci(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 13:li(n,t),ci(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=wt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 22:f=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,re=Va,ve=An;if(Va=re||f,An=ve||k,li(n,t),An=ve,Va=re,ci(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||k||Va||An||fr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){k=s=n;try{if(p=k.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=k.stateNode;var Me=k.memoizedProps.style,ce=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Ze){Xt(k,k.return,Ze)}}}else if(n.tag===6){if(s===null){k=n;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(Ze){Xt(k,k.return,Ze)}}}else if(n.tag===18){if(s===null){k=n;try{var de=k.stateNode;f?n_(de,!0):n_(k.stateNode,!1)}catch(Ze){Xt(k,k.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Tc(t,s))));break;case 19:li(n,t),ci(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 30:break;case 21:break;default:li(n,t),ci(t)}}function ci(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(ag(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=nd(t);bc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(Wn(S,""),s.flags&=-33);var w=nd(t);bc(t,w,S);break;case 3:case 4:var k=s.stateNode.containerInfo,re=nd(t);id(t,re,k);break;default:throw Error(r(161))}}catch(ve){Xt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ys(4,n,n.return),fr(n);break;case 1:ga(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ng(n,n.return,s),fr(n);break;case 27:vl(n.stateNode);case 26:case 5:ga(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function Wa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Wa(f,p,s),ll(4,p);break;case 1:if(Wa(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Xt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Xm(k[f],w)}catch(re){Xt(l,l.return,re)}}s&&S&64&&tg(p),cl(p,p.return);break;case 27:sg(p);case 26:case 5:Wa(f,p,s),s&&l===null&&S&4&&ig(p),cl(p,p.return);break;case 12:Wa(f,p,s);break;case 31:Wa(f,p,s),s&&S&4&&ug(f,p);break;case 13:Wa(f,p,s),s&&S&4&&fg(f,p);break;case 22:p.memoizedState===null&&Wa(f,p,s),cl(p,p.return);break;case 30:break;default:Wa(f,p,s)}n=n.sibling}}function sd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Zo(s))}function rd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zo(t))}function $i(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pg(t,n,s,l),n=n.sibling}function pg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:$i(t,n,s,l),f&2048&&ll(9,n);break;case 1:$i(t,n,s,l);break;case 3:$i(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zo(t)));break;case 12:if(f&2048){$i(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,w=p.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Xt(n,n.return,k)}}else $i(t,n,s,l);break;case 31:$i(t,n,s,l);break;case 13:$i(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?$i(t,n,s,l):ul(t,n):p._visibility&2?$i(t,n,s,l):(p._visibility|=2,jr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&sd(S,n);break;case 24:$i(t,n,s,l),f&2048&&rd(n.alternate,n);break;default:$i(t,n,s,l)}}function jr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,w=s,k=l,re=S.flags;switch(S.tag){case 0:case 11:case 15:jr(p,S,w,k,f),ll(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?jr(p,S,w,k,f):ul(p,S):(ve._visibility|=2,jr(p,S,w,k,f)),f&&re&2048&&sd(S.alternate,S);break;case 24:jr(p,S,w,k,f),f&&re&2048&&rd(S.alternate,S);break;default:jr(p,S,w,k,f)}n=n.sibling}}function ul(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:ul(s,l),f&2048&&sd(l.alternate,l);break;case 24:ul(s,l),f&2048&&rd(l.alternate,l);break;default:ul(s,l)}n=n.sibling}}var fl=8192;function Zr(t,n,s){if(t.subtreeFlags&fl)for(t=t.child;t!==null;)mg(t,n,s),t=t.sibling}function mg(t,n,s){switch(t.tag){case 26:Zr(t,n,s),t.flags&fl&&t.memoizedState!==null&&ty(s,Ji,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,s);break;case 3:case 4:var l=Ji;Ji=zc(t.stateNode.containerInfo),Zr(t,n,s),Ji=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=fl,fl=16777216,Zr(t,n,s),fl=l):Zr(t,n,s));break;default:Zr(t,n,s)}}function gg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];On=l,vg(l,t)}gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_g(t),t=t.sibling}function _g(t){switch(t.tag){case 0:case 11:case 15:dl(t),t.flags&2048&&ys(9,t,t.return);break;case 3:dl(t);break;case 12:dl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ac(t)):dl(t);break;default:dl(t)}}function Ac(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];On=l,vg(l,t)}gg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ys(8,n,n.return),Ac(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Ac(n));break;default:Ac(n)}t=t.sibling}}function vg(t,n){for(;On!==null;){var s=On;switch(s.tag){case 0:case 11:case 15:ys(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,On=l;else e:for(s=t;On!==null;){l=On;var f=l.sibling,p=l.return;if(lg(l),l===s){On=null;break e}if(f!==null){f.return=p,On=f;break e}On=p}}}var gM={getCacheForType:function(t){var n=zn(En),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return zn(En).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,Bt=0,en=null,yt=null,bt=0,kt=0,Si=null,Es=!1,Kr=!1,od=!1,Ya=0,mn=0,bs=0,dr=0,ld=0,Mi=0,Qr=0,hl=null,ui=null,cd=!1,Rc=0,xg=0,Cc=1/0,wc=null,Ts=null,Ln=0,As=null,Jr=null,qa=0,ud=0,fd=null,Sg=null,pl=0,dd=null;function yi(){return(Bt&2)!==0&&bt!==0?bt&-bt:z.T!==null?vd():ra()}function Mg(){if(Mi===0)if((bt&536870912)===0||Rt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),Mi=t}else Mi=536870912;return t=vi.current,t!==null&&(t.flags|=32),Mi}function fi(t,n,s){(t===en&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&($r(t,0),Rs(t,bt,Mi,!1)),Fe(t,s),((Bt&2)===0||t!==en)&&(t===en&&((Bt&2)===0&&(dr|=s),mn===4&&Rs(t,bt,Mi,!1)),_a(t))}function yg(t,n,s){if((Bt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),f=l?SM(t,n):pd(t,n,!0),p=l;do{if(f===0){Kr&&!l&&Rs(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!vM(s)){f=pd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;f=hl;var k=w.current.memoizedState.isDehydrated;if(k&&($r(w,S).flags|=256),S=pd(w,S,!1),S!==2){if(od&&!k){w.errorRecoveryDisabledLanes|=p,dr|=p,f=4;break e}p=ui,ui=f,p!==null&&(ui===null?ui=p:ui.push.apply(ui,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){$r(t,0),Rs(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Rs(l,n,Mi,!Es);break e;case 2:ui=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Rc+300-wt(),10<f)){if(Rs(l,n,Mi,!Es),_e(l,0,!0)!==0)break e;qa=n,l.timeoutHandle=$g(Eg.bind(null,l,s,ui,wc,cd,n,Mi,dr,Qr,Es,p,"Throttled",-0,0),f);break e}Eg(l,s,ui,wc,cd,n,Mi,dr,Qr,Es,p,null,-0,0)}}break}while(!0);_a(t)}function Eg(t,n,s,l,f,p,S,w,k,re,ve,Me,ce,de){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},mg(n,p,Me);var Ze=(p&62914560)===p?Rc-wt():(p&4194048)===p?xg-wt():0;if(Ze=ny(Me,Ze),Ze!==null){qa=p,t.cancelPendingCommit=Ze(Lg.bind(null,t,n,p,s,l,f,S,w,k,ve,Me,null,ce,de)),Rs(t,p,S,!re);return}}Lg(t,n,p,s,l,f,S,w,k)}function vM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!gi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rs(t,n,s,l){n&=~ld,n&=~dr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-He(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&lt(t,s,n)}function Dc(){return(Bt&6)===0?(ml(0),!1):!0}function hd(){if(yt!==null){if(kt===0)var t=yt.return;else t=yt,Ia=ir=null,wf(t),kr=null,Qo=0,t=yt;for(;t!==null;)eg(t.alternate,t),t=t.return;yt=null}}function $r(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,BM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),qa=0,hd(),en=t,yt=s=Oa(t.current,null),bt=n,kt=0,Si=null,Es=!1,Kr=Oe(t,n),od=!1,Qr=Mi=ld=dr=bs=mn=0,ui=hl=null,cd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-He(l),p=1<<f;n|=t[f],l&=~p}return Ya=n,Ql(),s}function bg(t,n){mt=null,z.H=sl,n===Vr||n===sc?(n=Hm(),kt=3):n===_f?(n=Hm(),kt=4):kt=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Si=n,yt===null&&(mn=1,xc(t,Ui(n,t.current)))}function Tg(){var t=vi.current;return t===null?!0:(bt&4194048)===bt?Fi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Fi:!1}function Ag(){var t=z.H;return z.H=sl,t===null?sl:t}function Rg(){var t=z.A;return z.A=gM,t}function Lc(){mn=4,Es||(bt&4194048)!==bt&&vi.current!==null||(Kr=!0),(bs&134217727)===0&&(dr&134217727)===0||en===null||Rs(en,bt,Mi,!1)}function pd(t,n,s){var l=Bt;Bt|=2;var f=Ag(),p=Rg();(en!==t||bt!==n)&&(wc=null,$r(t,n)),n=!1;var S=mn;e:do try{if(kt!==0&&yt!==null){var w=yt,k=Si;switch(kt){case 8:hd(),S=6;break e;case 3:case 2:case 9:case 6:vi.current===null&&(n=!0);var re=kt;if(kt=0,Si=null,eo(t,w,k,re),s&&Kr){S=0;break e}break;default:re=kt,kt=0,Si=null,eo(t,w,k,re)}}xM(),S=mn;break}catch(ve){bg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,Ia=ir=null,Bt=l,z.H=f,z.A=p,yt===null&&(en=null,bt=0,Ql()),S}function xM(){for(;yt!==null;)Cg(yt)}function SM(t,n){var s=Bt;Bt|=2;var l=Ag(),f=Rg();en!==t||bt!==n?(wc=null,Cc=wt()+500,$r(t,n)):Kr=Oe(t,n);e:do try{if(kt!==0&&yt!==null){n=yt;var p=Si;t:switch(kt){case 1:kt=0,Si=null,eo(t,n,p,1);break;case 2:case 9:if(Bm(p)){kt=0,Si=null,wg(n);break}n=function(){kt!==2&&kt!==9||en!==t||(kt=7),_a(t)},p.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Bm(p)?(kt=0,Si=null,wg(n)):(kt=0,Si=null,eo(t,n,p,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var w=yt;if(S?p_(S):w.stateNode.complete){kt=0,Si=null;var k=w.sibling;if(k!==null)yt=k;else{var re=w.return;re!==null?(yt=re,Nc(re)):yt=null}break t}}kt=0,Si=null,eo(t,n,p,5);break;case 6:kt=0,Si=null,eo(t,n,p,6);break;case 8:hd(),mn=6;break e;default:throw Error(r(462))}}MM();break}catch(ve){bg(t,ve)}while(!0);return Ia=ir=null,z.H=l,z.A=f,Bt=s,yt!==null?0:(en=null,bt=0,Ql(),mn)}function MM(){for(;yt!==null&&!tn();)Cg(yt)}function Cg(t){var n=J0(t.alternate,t,Ya);t.memoizedProps=t.pendingProps,n===null?Nc(t):yt=n}function wg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=Y0(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=Y0(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:wf(n);default:eg(s,n),n=yt=Rm(n,Ya),n=J0(s,n,Ya)}t.memoizedProps=t.pendingProps,n===null?Nc(t):yt=n}function eo(t,n,s,l){Ia=ir=null,wf(n),kr=null,Qo=0;var f=n.return;try{if(cM(t,f,n,s,bt)){mn=1,xc(t,Ui(s,t.current)),yt=null;return}}catch(p){if(f!==null)throw yt=f,p;mn=1,xc(t,Ui(s,t.current)),yt=null;return}n.flags&32768?(Rt||l===1?t=!0:Kr||(bt&536870912)!==0?t=!1:(Es=t=!0,(l===2||l===9||l===3||l===6)&&(l=vi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dg(n,t)):Nc(n)}function Nc(t){var n=t;do{if((n.flags&32768)!==0){Dg(n,Es);return}t=n.return;var s=dM(n.alternate,n,Ya);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);mn===0&&(mn=5)}function Dg(t,n){do{var s=hM(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);mn=6,yt=null}function Lg(t,n,s,l,f,p,S,w,k){t.cancelPendingCommit=null;do Uc();while(Ln!==0);if((Bt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=tf,Dt(t,s,p,S,w,k),t===en&&(yt=en=null,bt=0),Jr=n,As=t,qa=s,ud=p,fd=f,Sg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,TM(ee,function(){return Ig(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=G.p,G.p=2,S=Bt,Bt|=4;try{pM(t,n,s)}finally{Bt=S,G.p=f,z.T=l}}Ln=1,Ng(),Ug(),Og()}}function Ng(){if(Ln===1){Ln=0;var t=As,n=Jr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var f=Bt;Bt|=4;try{dg(n,t);var p=Ad,S=vm(t.containerInfo),w=p.focusedElem,k=p.selectionRange;if(S!==w&&w&&w.ownerDocument&&_m(w.ownerDocument.documentElement,w)){if(k!==null&&Ku(w)){var re=k.start,ve=k.end;if(ve===void 0&&(ve=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ve,w.value.length);else{var Me=w.ownerDocument||document,ce=Me&&Me.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),Ze=w.textContent.length,st=Math.min(k.start,Ze),Zt=k.end===void 0?st:Math.min(k.end,Ze);!de.extend&&st>Zt&&(S=Zt,Zt=st,st=S);var te=gm(w,st),q=gm(w,Zt);if(te&&q&&(de.rangeCount!==1||de.anchorNode!==te.node||de.anchorOffset!==te.offset||de.focusNode!==q.node||de.focusOffset!==q.offset)){var se=Me.createRange();se.setStart(te.node,te.offset),de.removeAllRanges(),st>Zt?(de.addRange(se),de.extend(q.node,q.offset)):(se.setEnd(q.node,q.offset),de.addRange(se))}}}}for(Me=[],de=w;de=de.parentNode;)de.nodeType===1&&Me.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Me.length;w++){var xe=Me[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Wc=!!Td,Ad=Td=null}finally{Bt=f,G.p=l,z.T=s}}t.current=n,Ln=2}}function Ug(){if(Ln===2){Ln=0;var t=As,n=Jr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var f=Bt;Bt|=4;try{og(t,n.alternate,n)}finally{Bt=f,G.p=l,z.T=s}}Ln=3}}function Og(){if(Ln===4||Ln===3){Ln=0,$();var t=As,n=Jr,s=qa,l=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ln=5:(Ln=0,Jr=As=null,Pg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ts=null),qs(s),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=G.p,G.p=2,z.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var w=l[S];p(w.value,{componentStack:w.stack})}}finally{z.T=n,G.p=f}}(qa&3)!==0&&Uc(),_a(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===dd?pl++:(pl=0,dd=t):pl=0,ml(0)}}function Pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zo(n)))}function Uc(){return Ng(),Ug(),Og(),Ig()}function Ig(){if(Ln!==5)return!1;var t=As,n=ud;ud=0;var s=qs(qa),l=z.T,f=G.p;try{G.p=32>s?32:s,z.T=null,s=fd,fd=null;var p=As,S=qa;if(Ln=0,Jr=As=null,qa=0,(Bt&6)!==0)throw Error(r(331));var w=Bt;if(Bt|=4,_g(p.current),pg(p,p.current,S,s),Bt=w,ml(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(le,p)}catch{}return!0}finally{G.p=f,z.T=l,Pg(t,n)}}function Fg(t,n,s){n=Ui(s,n),n=Xf(t.stateNode,n,2),t=xs(t,n,2),t!==null&&(Fe(t,2),_a(t))}function Xt(t,n,s){if(t.tag===3)Fg(t,t,s);else for(;n!==null;){if(n.tag===3){Fg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ts===null||!Ts.has(l))){t=Ui(s,t),s=B0(2),l=xs(n,s,2),l!==null&&(z0(s,l,n,t),Fe(l,2),_a(l));break}}n=n.return}}function md(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new _M;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(od=!0,f.add(s),t=yM.bind(null,t,n,s),n.then(t,t))}function yM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(bt&s)===s&&(mn===4||mn===3&&(bt&62914560)===bt&&300>wt()-Rc?(Bt&2)===0&&$r(t,0):ld|=s,Qr===bt&&(Qr=0)),_a(t)}function Bg(t,n){n===0&&(n=Ee()),t=er(t,n),t!==null&&(Fe(t,n),_a(t))}function EM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Bg(t,s)}function bM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Bg(t,s)}function TM(t,n){return on(t,n)}var Oc=null,to=null,gd=!1,Pc=!1,_d=!1,Cs=0;function _a(t){t!==to&&t.next===null&&(to===null?Oc=to=t:to=to.next=t),Pc=!0,gd||(gd=!0,RM())}function ml(t,n){if(!_d&&Pc){_d=!0;do for(var s=!1,l=Oc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-He(42|t)+1)-1,p&=f&~(S&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Vg(l,p))}else p=bt,p=_e(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Oe(l,p)||(s=!0,Vg(l,p));l=l.next}while(s);_d=!1}}function AM(){zg()}function zg(){Pc=gd=!1;var t=0;Cs!==0&&FM()&&(t=Cs);for(var n=wt(),s=null,l=Oc;l!==null;){var f=l.next,p=Hg(l,n);p===0?(l.next=null,s===null?Oc=f:s.next=f,f===null&&(to=s)):(s=l,(t!==0||(p&3)!==0)&&(Pc=!0)),l=f}Ln!==0&&Ln!==5||ml(t),Cs!==0&&(Cs=0)}function Hg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-He(p),w=1<<S,k=f[S];k===-1?((w&s)===0||(w&l)!==0)&&(f[S]=Ge(w,n)):k<=n&&(t.expiredLanes|=w),p&=~w}if(n=en,s=bt,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Gt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Gt(l),qs(s)){case 2:case 8:s=b;break;case 32:s=ee;break;case 268435456:s=pe;break;default:s=ee}return l=Gg.bind(null,t),s=on(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Gt(l),t.callbackPriority=2,t.callbackNode=null,2}function Gg(t,n){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Uc()&&t.callbackNode!==s)return null;var l=bt;return l=_e(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(yg(t,l,n),Hg(t,wt()),t.callbackNode!=null&&t.callbackNode===s?Gg.bind(null,t):null)}function Vg(t,n){if(Uc())return null;yg(t,n,!0)}function RM(){zM(function(){(Bt&6)!==0?on(P,AM):zg()})}function vd(){if(Cs===0){var t=Hr;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),Cs=t}return Cs}function kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:La(""+t)}function Xg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function CM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=kg((f[Mn]||null).action),S=l.submitter;S&&(n=(n=S[Mn]||null)?kg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var w=new Qs("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Cs!==0){var k=S?Xg(f,S):new FormData(f);Bf(s,{pending:!0,data:k,method:f.method,action:p},null,k)}}else typeof p=="function"&&(w.preventDefault(),k=S?Xg(f,S):new FormData(f),Bf(s,{pending:!0,data:k,method:f.method,action:p},p,k))},currentTarget:f}]})}}for(var xd=0;xd<ef.length;xd++){var Sd=ef[xd],wM=Sd.toLowerCase(),DM=Sd[0].toUpperCase()+Sd.slice(1);Qi(wM,"on"+DM)}Qi(Mm,"onAnimationEnd"),Qi(ym,"onAnimationIteration"),Qi(Em,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(YS,"onTransitionRun"),Qi(qS,"onTransitionStart"),Qi(jS,"onTransitionCancel"),Qi(bm,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),L("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),L("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),L("onBeforeInput",["compositionend","keypress","textInput","paste"]),L("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function Wg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var w=l[S],k=w.instance,re=w.currentTarget;if(w=w.listener,k!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(ve){Kl(ve)}f.currentTarget=null,p=k}else for(S=0;S<l.length;S++){if(w=l[S],k=w.instance,re=w.currentTarget,w=w.listener,k!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(ve){Kl(ve)}f.currentTarget=null,p=k}}}}function Et(t,n){var s=n[oa];s===void 0&&(s=n[oa]=new Set);var l=t+"__bubble";s.has(l)||(Yg(n,t,2,!1),s.add(l))}function Md(t,n,s){var l=0;n&&(l|=4),Yg(s,t,l,n)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function yd(t){if(!t[Ic]){t[Ic]=!0,Da.forEach(function(s){s!=="selectionchange"&&(LM.has(s)||Md(s,!1,t),Md(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ic]||(n[Ic]=!0,Md("selectionchange",!1,n))}}function Yg(t,n,s,l){switch(M_(n)){case 2:var f=sy;break;case 8:f=ry;break;default:f=Fd}s=f.bind(null,n,s,t),f=void 0,!Zs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Ed(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=l.return;S!==null;){var k=S.tag;if((k===3||k===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=Ri(w),S===null)return;if(k=S.tag,k===5||k===6||k===26||k===27){l=p=S;continue e}w=w.parentNode}}l=l.return}zo(function(){var re=p,ve=Fo(s),Me=[];e:{var ce=Tm.get(t);if(ce!==void 0){var de=Qs,Ze=t;switch(t){case"keypress":if(Ks(s)===0)break e;case"keydown":case"keyup":de=bS;break;case"focusin":Ze="focus",de=ha;break;case"focusout":Ze="blur",de=ha;break;case"beforeblur":case"afterblur":de=ha;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=$n;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Dr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=RS;break;case Mm:case ym:case Em:de=jl;break;case bm:de=wS;break;case"scroll":case"scrollend":de=Nt;break;case"wheel":de=LS;break;case"copy":case"cut":case"paste":de=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=nm;break;case"toggle":case"beforetoggle":de=US}var st=(n&4)!==0,Zt=!st&&(t==="scroll"||t==="scrollend"),te=st?ce!==null?ce+"Capture":null:ce;st=[];for(var q=re,se;q!==null;){var xe=q;if(se=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||se===null||te===null||(xe=ls(q,te),xe!=null&&st.push(_l(q,xe,se))),Zt)break;q=q.return}0<st.length&&(ce=new de(ce,Ze,null,s,ve),Me.push({event:ce,listeners:st}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Na&&(Ze=s.relatedTarget||s.fromElement)&&(Ri(Ze)||Ze[In]))break e;if((de||ce)&&(ce=ve.window===ve?ve:(ce=ve.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(Ze=s.relatedTarget||s.toElement,de=re,Ze=Ze?Ri(Ze):null,Ze!==null&&(Zt=c(Ze),st=Ze.tag,Ze!==Zt||st!==5&&st!==27&&st!==6)&&(Ze=null)):(de=null,Ze=re),de!==Ze)){if(st=$n,xe="onMouseLeave",te="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(st=nm,xe="onPointerLeave",te="onPointerEnter",q="pointer"),Zt=de==null?ce:ca(de),se=Ze==null?ce:ca(Ze),ce=new st(xe,q+"leave",de,s,ve),ce.target=Zt,ce.relatedTarget=se,xe=null,Ri(ve)===re&&(st=new st(te,q+"enter",Ze,s,ve),st.target=se,st.relatedTarget=Zt,xe=st),Zt=xe,de&&Ze)t:{for(st=NM,te=de,q=Ze,se=0,xe=te;xe;xe=st(xe))se++;xe=0;for(var tt=q;tt;tt=st(tt))xe++;for(;0<se-xe;)te=st(te),se--;for(;0<xe-se;)q=st(q),xe--;for(;se--;){if(te===q||q!==null&&te===q.alternate){st=te;break t}te=st(te),q=st(q)}st=null}else st=null;de!==null&&qg(Me,ce,de,st,!1),Ze!==null&&Zt!==null&&qg(Me,Zt,Ze,st,!0)}}e:{if(ce=re?ca(re):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Pt=um;else if(lm(ce))if(fm)Pt=kS;else{Pt=GS;var Qe=HS}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&vt(re.elementType)&&(Pt=um):Pt=VS;if(Pt&&(Pt=Pt(t,re))){cm(Me,Pt,s,ve);break e}Qe&&Qe(t,ce,re),t==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&pt(ce,"number",ce.value)}switch(Qe=re?ca(re):window,t){case"focusin":(lm(Qe)||Qe.contentEditable==="true")&&(Nr=Qe,Qu=re,Yo=null);break;case"focusout":Yo=Qu=Nr=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,xm(Me,s,ve);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":xm(Me,s,ve)}var gt;if(qu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Lr?rm(t,s)&&(Tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Tt="onCompositionStart");Tt&&(im&&s.locale!=="ko"&&(Lr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Lr&&(gt=Wu()):(pi=ve,Ho="value"in pi?pi.value:pi.textContent,Lr=!0)),Qe=Fc(re,Tt),0<Qe.length&&(Tt=new tm(Tt,t,null,s,ve),Me.push({event:Tt,listeners:Qe}),gt?Tt.data=gt:(gt=om(s),gt!==null&&(Tt.data=gt)))),(gt=PS?IS(t,s):FS(t,s))&&(Tt=Fc(re,"onBeforeInput"),0<Tt.length&&(Qe=new tm("onBeforeInput","beforeinput",null,s,ve),Me.push({event:Qe,listeners:Tt}),Qe.data=gt)),CM(Me,t,re,s,ve)}Wg(Me,n)})}function _l(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Fc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=ls(t,s),f!=null&&l.unshift(_l(t,f,p)),f=ls(t,n),f!=null&&l.push(_l(t,f,p))),t.tag===3)return l;t=t.return}return[]}function NM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var w=s,k=w.alternate,re=w.stateNode;if(w=w.tag,k!==null&&k===l)break;w!==5&&w!==26&&w!==27||re===null||(k=re,f?(re=ls(s,p),re!=null&&S.unshift(_l(s,re,k))):f||(re=ls(s,p),re!=null&&S.push(_l(s,re,k)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var UM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(UM,`
`).replace(OM,"")}function Zg(t,n){return n=jg(n),jg(t)===n}function jt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Wn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Wn(t,""+l);break;case"className":Be(t,"class",l);break;case"tabIndex":Be(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(t,s,l);break;case"style":Dn(t,l,p);break;case"data":if(n!=="object"){Be(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=La(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&jt(t,n,"name",f.name,f,null),jt(t,n,"formEncType",f.formEncType,f,null),jt(t,n,"formMethod",f.formMethod,f,null),jt(t,n,"formTarget",f.formTarget,f,null)):(jt(t,n,"encType",f.encType,f,null),jt(t,n,"method",f.method,f,null),jt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=La(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=fa);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=La(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Re(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Re(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=wi.get(s)||s,Re(t,s,l))}}function bd(t,n,s,l,f,p){switch(s){case"style":Dn(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Wn(t,l):(typeof l=="number"||typeof l=="bigint")&&Wn(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Mn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Re(t,s,l)}}}function Gn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,p,S,s,null)}}f&&jt(t,n,"srcSet",s.srcSet,s,null),l&&jt(t,n,"src",s.src,s,null);return;case"input":Et("invalid",t);var w=p=S=f=null,k=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":S=ve;break;case"checked":k=ve;break;case"defaultChecked":re=ve;break;case"value":p=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:jt(t,n,l,ve,s,null)}}wn(t,p,w,k,re,S,f,!1);return;case"select":Et("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:jt(t,n,f,w,s,null)}n=p,s=S,t.multiple=!!l,n!=null?hn(t,!!l,n,!1):s!=null&&hn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:jt(t,n,S,w,s,null)}si(t,l,f,p);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:jt(t,n,k,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<gl.length;l++)Et(gl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,re,l,s,null)}return;default:if(vt(n)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&bd(t,n,ve,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&jt(t,n,w,l,s,null))}function PM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,w=null,k=null,re=null,ve=null;for(de in s){var Me=s[de];if(s.hasOwnProperty(de)&&Me!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":k=Me;default:l.hasOwnProperty(de)||jt(t,n,de,null,l,Me)}}for(var ce in l){var de=l[ce];if(Me=s[ce],l.hasOwnProperty(ce)&&(de!=null||Me!=null))switch(ce){case"type":p=de;break;case"name":f=de;break;case"checked":re=de;break;case"defaultChecked":ve=de;break;case"value":S=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==Me&&jt(t,n,ce,de,l,Me)}}Xe(t,S,w,k,re,ve,p,f);return;case"select":de=S=w=ce=null;for(p in s)if(k=s[p],s.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":de=k;default:l.hasOwnProperty(p)||jt(t,n,p,null,l,k)}for(f in l)if(p=l[f],k=s[f],l.hasOwnProperty(f)&&(p!=null||k!=null))switch(f){case"value":ce=p;break;case"defaultValue":w=p;break;case"multiple":S=p;default:p!==k&&jt(t,n,f,p,l,k)}n=w,s=S,l=de,ce!=null?hn(t,!!s,ce,!1):!!l!=!!s&&(n!=null?hn(t,!!s,n,!0):hn(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:jt(t,n,w,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":ce=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&jt(t,n,S,f,l,p)}Fn(t,ce,de);return;case"option":for(var Ze in s)if(ce=s[Ze],s.hasOwnProperty(Ze)&&ce!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:jt(t,n,Ze,null,l,ce)}for(k in l)if(ce=l[k],de=s[k],l.hasOwnProperty(k)&&ce!==de&&(ce!=null||de!=null))switch(k){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:jt(t,n,k,ce,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)ce=s[st],s.hasOwnProperty(st)&&ce!=null&&!l.hasOwnProperty(st)&&jt(t,n,st,null,l,ce);for(re in l)if(ce=l[re],de=s[re],l.hasOwnProperty(re)&&ce!==de&&(ce!=null||de!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:jt(t,n,re,ce,l,de)}return;default:if(vt(n)){for(var Zt in s)ce=s[Zt],s.hasOwnProperty(Zt)&&ce!==void 0&&!l.hasOwnProperty(Zt)&&bd(t,n,Zt,void 0,l,ce);for(ve in l)ce=l[ve],de=s[ve],!l.hasOwnProperty(ve)||ce===de||ce===void 0&&de===void 0||bd(t,n,ve,ce,l,de);return}}for(var te in s)ce=s[te],s.hasOwnProperty(te)&&ce!=null&&!l.hasOwnProperty(te)&&jt(t,n,te,null,l,ce);for(Me in l)ce=l[Me],de=s[Me],!l.hasOwnProperty(Me)||ce===de||ce==null&&de==null||jt(t,n,Me,ce,l,de)}function Kg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,w=f.duration;if(p&&w&&Kg(S)){for(S=0,w=f.responseEnd,l+=1;l<s.length;l++){var k=s[l],re=k.startTime;if(re>w)break;var ve=k.transferSize,Me=k.initiatorType;ve&&Kg(Me)&&(k=k.responseEnd,S+=ve*(k<w?1:(w-re)/(k-re)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Td=null,Ad=null;function Bc(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Rd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cd=null;function FM(){var t=window.event;return t&&t.type==="popstate"?t===Cd?!1:(Cd=t,!0):(Cd=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,zM=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(t){return e_.resolve(null).then(t).catch(HM)}:$g;function HM(t){setTimeout(function(){throw t})}function ws(t){return t==="head"}function t_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),so(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")vl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,vl(s);for(var p=s.firstChild;p;){var S=p.nextSibling,w=p.nodeName;p[qi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&vl(t.ownerDocument.body);s=f}while(s);so(n)}function n_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function wd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":wd(s),ji(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function GM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[qi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Bi(t.nextSibling),t===null)break}return null}function VM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Bi(t.nextSibling),t===null))return null;return t}function i_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Bi(t.nextSibling),t===null))return null;return t}function Dd(t){return t.data==="$?"||t.data==="$~"}function Ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Nd=null;function a_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Bi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function s_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function r_(t,n,s){switch(n=Bc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ji(t)}var zi=new Map,o_=new Set;function zc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ja=G.d;G.d={f:XM,r:WM,D:YM,C:qM,L:jM,m:ZM,X:QM,S:KM,M:JM};function XM(){var t=ja.f(),n=Dc();return t||n}function WM(t){var n=Ci(t);n!==null&&n.tag===5&&n.type==="form"?b0(n):ja.r(t)}var no=typeof document>"u"?null:document;function l_(t,n,s){var l=no;if(l&&typeof n=="string"&&n){var f=Lt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),o_.has(f)||(o_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Gn(n,"link",t),dn(n),l.head.appendChild(n)))}}function YM(t){ja.D(t),l_("dns-prefetch",t,null)}function qM(t,n){ja.C(t,n),l_("preconnect",t,n)}function jM(t,n,s){ja.L(t,n,s);var l=no;if(l&&t&&n){var f='link[rel="preload"][as="'+Lt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Lt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Lt(s.imageSizes)+'"]')):f+='[href="'+Lt(t)+'"]';var p=f;switch(n){case"style":p=io(t);break;case"script":p=ao(t)}zi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),zi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(xl(p))||n==="script"&&l.querySelector(Sl(p))||(n=l.createElement("link"),Gn(n,"link",t),dn(n),l.head.appendChild(n)))}}function ZM(t,n){ja.m(t,n);var s=no;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Lt(l)+'"][href="'+Lt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ao(t)}if(!zi.has(p)&&(t=_({rel:"modulepreload",href:t},n),zi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(p)))return}l=s.createElement("link"),Gn(l,"link",t),dn(l),s.head.appendChild(l)}}}function KM(t,n,s){ja.S(t,n,s);var l=no;if(l&&t){var f=Zi(l).hoistableStyles,p=io(t);n=n||"default";var S=f.get(p);if(!S){var w={loading:0,preload:null};if(S=l.querySelector(xl(p)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=zi.get(p))&&Ud(t,s);var k=S=l.createElement("link");dn(k),Gn(k,"link",t),k._p=new Promise(function(re,ve){k.onload=re,k.onerror=ve}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Hc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(p,S)}}}function QM(t,n){ja.X(t,n);var s=no;if(s&&t){var l=Zi(s).hoistableScripts,f=ao(t),p=l.get(f);p||(p=s.querySelector(Sl(f)),p||(t=_({src:t,async:!0},n),(n=zi.get(f))&&Od(t,n),p=s.createElement("script"),dn(p),Gn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function JM(t,n){ja.M(t,n);var s=no;if(s&&t){var l=Zi(s).hoistableScripts,f=ao(t),p=l.get(f);p||(p=s.querySelector(Sl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=zi.get(f))&&Od(t,n),p=s.createElement("script"),dn(p),Gn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function c_(t,n,s,l){var f=(f=ie.current)?zc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=io(s.href),s=Zi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=io(s.href);var p=Zi(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(xl(t)))&&!p._p&&(S.instance=p,S.state.loading=5),zi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},zi.set(t,s),p||$M(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ao(s),s=Zi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function io(t){return'href="'+Lt(t)+'"'}function xl(t){return'link[rel="stylesheet"]['+t+"]"}function u_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function $M(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Gn(n,"link",s),dn(n),t.head.appendChild(n))}function ao(t){return'[src="'+Lt(t)+'"]'}function Sl(t){return"script[async]"+t}function f_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Lt(s.href)+'"]');if(l)return n.instance=l,dn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),dn(l),Gn(l,"style",f),Hc(l,s.precedence,t),n.instance=l;case"stylesheet":f=io(s.href);var p=t.querySelector(xl(f));if(p)return n.state.loading|=4,n.instance=p,dn(p),p;l=u_(s),(f=zi.get(f))&&Ud(l,f),p=(t.ownerDocument||t).createElement("link"),dn(p);var S=p;return S._p=new Promise(function(w,k){S.onload=w,S.onerror=k}),Gn(p,"link",l),n.state.loading|=4,Hc(p,s.precedence,t),n.instance=p;case"script":return p=ao(s.src),(f=t.querySelector(Sl(p)))?(n.instance=f,dn(f),f):(l=s,(f=zi.get(p))&&(l=_({},s),Od(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),dn(f),Gn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Hc(l,s.precedence,t));return n.instance}function Hc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gc=null;function d_(t,n,s){if(Gc===null){var l=new Map,f=Gc=new Map;f.set(s,l)}else f=Gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[qi]||p[fn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var w=l.get(S);w?w.push(p):l.set(S,[p])}}return l}function h_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function ey(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ty(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=io(l.href),p=n.querySelector(xl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,dn(p);return}p=n.ownerDocument||n,l=u_(l),(f=zi.get(f))&&Ud(l,f),p=p.createElement("link"),dn(p);var S=p;S._p=new Promise(function(w,k){S.onload=w,S.onerror=k}),Gn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Vc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Pd=0;function ny(t,n){return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Pd===0&&(Pd=62500*IM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Pd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kc=null;function Xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kc=new Map,n.forEach(iy,t),kc=null,Vc.call(t))}function iy(t,n){if(!(n.state.loading&4)){var s=kc.get(t);if(s)var l=s.get(null);else{s=new Map,kc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Ml={$$typeof:H,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function ay(t,n,s,l,f,p,S,w,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function m_(t,n,s,l,f,p,S,w,k,re,ve,Me){return t=new ay(t,n,s,S,k,re,ve,Me,w),n=1,p===!0&&(n|=24),p=_i(3,null,null,n),t.current=p,p.stateNode=t,n=pf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},vf(p),t}function g_(t){return t?(t=Pr,t):Pr}function __(t,n,s,l,f,p){f=g_(f),l.context===null?l.context=f:l.pendingContext=f,l=vs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=xs(t,l,n),s!==null&&(fi(s,t,n),$o(s,t,n))}function v_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Id(t,n){v_(t,n),(t=t.alternate)&&v_(t,n)}function x_(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&fi(n,t,67108864),Id(t,67108864)}}function S_(t){if(t.tag===13||t.tag===31){var n=yi();n=Ca(n);var s=er(t,n);s!==null&&fi(s,t,n),Id(t,n)}}var Wc=!0;function sy(t,n,s,l){var f=z.T;z.T=null;var p=G.p;try{G.p=2,Fd(t,n,s,l)}finally{G.p=p,z.T=f}}function ry(t,n,s,l){var f=z.T;z.T=null;var p=G.p;try{G.p=8,Fd(t,n,s,l)}finally{G.p=p,z.T=f}}function Fd(t,n,s,l){if(Wc){var f=Bd(l);if(f===null)Ed(t,n,l,Yc,s),y_(t,l);else if(ly(f,t,n,s,l))l.stopPropagation();else if(y_(t,l),n&4&&-1<oy.indexOf(t)){for(;f!==null;){var p=Ci(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Le(p.pendingLanes);if(S!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var k=1<<31-He(S);w.entanglements[1]|=k,S&=~k}_a(p),(Bt&6)===0&&(Cc=wt()+500,ml(0))}}break;case 31:case 13:w=er(p,2),w!==null&&fi(w,p,2),Dc(),Id(p,2)}if(p=Bd(l),p===null&&Ed(t,n,l,Yc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Ed(t,n,l,null,s)}}function Bd(t){return t=Fo(t),zd(t)}var Yc=null;function zd(t){if(Yc=null,t=Ri(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yc=t,null}function M_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case P:return 2;case b:return 8;case ee:case oe:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Hd=!1,Ds=null,Ls=null,Ns=null,yl=new Map,El=new Map,Us=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(t,n){switch(t){case"focusin":case"focusout":Ds=null;break;case"dragenter":case"dragleave":Ls=null;break;case"mouseover":case"mouseout":Ns=null;break;case"pointerover":case"pointerout":yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(n.pointerId)}}function bl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Ci(n),n!==null&&x_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function ly(t,n,s,l,f){switch(n){case"focusin":return Ds=bl(Ds,t,n,s,l,f),!0;case"dragenter":return Ls=bl(Ls,t,n,s,l,f),!0;case"mouseover":return Ns=bl(Ns,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return yl.set(p,bl(yl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,El.set(p,bl(El.get(p)||null,t,n,s,l,f)),!0}return!1}function E_(t){var n=Ri(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Yi(t.priority,function(){S_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Yi(t.priority,function(){S_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Bd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Na=l,s.target.dispatchEvent(l),Na=null}else return n=Ci(s),n!==null&&x_(n),t.blockedOn=s,!1;n.shift()}return!0}function b_(t,n,s){qc(t)&&s.delete(n)}function cy(){Hd=!1,Ds!==null&&qc(Ds)&&(Ds=null),Ls!==null&&qc(Ls)&&(Ls=null),Ns!==null&&qc(Ns)&&(Ns=null),yl.forEach(b_),El.forEach(b_)}function jc(t,n){t.blockedOn===n&&(t.blockedOn=null,Hd||(Hd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,cy)))}var Zc=null;function T_(t){Zc!==t&&(Zc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zc===t&&(Zc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(zd(l||s)===null)continue;break}var p=Ci(s);p!==null&&(t.splice(n,3),n-=3,Bf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function so(t){function n(k){return jc(k,t)}Ds!==null&&jc(Ds,t),Ls!==null&&jc(Ls,t),Ns!==null&&jc(Ns,t),yl.forEach(n),El.forEach(n);for(var s=0;s<Us.length;s++){var l=Us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Us.length&&(s=Us[0],s.blockedOn===null);)E_(s),s.blockedOn===null&&Us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[Mn]||null;if(typeof p=="function")S||T_(s);else if(S){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Mn]||null)w=S.formAction;else if(zd(f)!==null)continue}else w=S.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),T_(s)}}}function A_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Gd(t){this._internalRoot=t}Kc.prototype.render=Gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=yi();__(s,l,t,n,null,null)},Kc.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;__(t.current,2,null,t,null,null),Dc(),n[In]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ra();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Us.length&&n!==0&&n<Us[s].priority;s++);Us.splice(s,0,t),s===0&&E_(t)}};var R_=e.version;if(R_!=="19.2.7")throw Error(r(527,R_,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var uy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{le=Qc.inject(uy),fe=Qc}catch{}}return Al.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=O0,p=P0,S=I0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=m_(t,1,!1,null,null,s,l,null,f,p,S,A_),t[In]=n.current,yd(t),new Gd(n)},Al.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=O0,S=P0,w=I0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),n=m_(t,1,!0,n,s??null,l,f,k,p,S,w,A_),n.context=g_(null),s=n.current,l=yi(),l=Ca(l),f=vs(l),f.callback=null,xs(s,f,l),s=l,n.current.lanes=s,Fe(n,s),_a(n),t[In]=n.current,yd(t),new Kc(n)},Al.version="19.2.7",Al}var F_;function xy(){if(F_)return Xd.exports;F_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Xd.exports=vy(),Xd.exports}var Sy=xy();const My={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},ro=(a,e="#")=>{var i;return((i=My[a])==null?void 0:i.trim())||e},Cn={app:ro("VITE_APP_URL","https://demo.morpheum.io"),docs:ro("VITE_DOCS_URL"),manifesto:ro("VITE_MANIFESTO_URL"),discord:ro("VITE_DISCORD_URL"),x:ro("VITE_X_URL"),tutorialVideo:ro("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Mu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],jd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Cn.manifesto},Ps={eyebrow:{label:"A manifesto for verifiable agents",href:Cn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Cn.app},secondaryCta:{label:"Explore agents",href:Cn.explore}},B_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},z_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Fh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Zd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Cn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Cn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Cn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Is={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},oo={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Jc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Cn.app},social:[{label:"Join Discord",href:Cn.discord},{label:"Join X",href:Cn.x}]},H_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function wo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function yy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Jc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(wo,{href:Jc.primaryCta.href,variant:"primary",children:Jc.primaryCta.label}),Jc.social.map(a=>D.jsx(wo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function Ey(){const[a,e]=Ve.useState(!1),i=!!Cn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Fh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Cn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Fh.videoCaption})]})]})})}const by={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Kd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:by[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Ty(){const a=oo.cards[0],e=oo.cards[1],i=oo.cards[2],r=oo.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:oo.kicker}),D.jsx("h2",{className:"section-title explore__title",children:oo.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Kd,{type:"verified"}),D.jsx(Kd,{type:"riskScore",value:o.risk}),D.jsx(Kd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="185",Ay=0,G_=1,Ry=2,yu=1,Cy=2,Ul=3,as=0,hi=1,Ma=2,ns=0,To=1,Bh=2,V_=3,k_=4,wy=5,Sr=100,Dy=101,Ly=102,Ny=103,Uy=104,Oy=200,Py=201,Iy=202,Fy=203,zh=204,Hh=205,By=206,zy=207,Hy=208,Gy=209,Vy=210,ky=211,Xy=212,Wy=213,Yy=214,Gh=0,Vh=1,kh=2,Do=3,Xh=4,Wh=5,Yh=6,qh=7,hx=0,qy=1,jy=2,ba=0,px=1,mx=2,gx=3,_x=4,vx=5,xx=6,Sx=7,Mx=300,br=301,Lo=302,Qd=303,Jd=304,zu=306,jh=1e3,aa=1001,Zh=1002,kn=1003,Zy=1004,$c=1005,un=1006,$d=1007,Xs=1008,Vi=1009,yx=1010,Ex=1011,Gl=1012,Np=1013,Ra=1014,ya=1015,ss=1016,Up=1017,Op=1018,Vl=1020,bx=35902,Tx=35899,Ax=1021,Rx=1022,sa=1023,rs=1026,Er=1027,Cx=1028,Pp=1029,Tr=1030,Ip=1031,Fp=1033,Eu=33776,bu=33777,Tu=33778,Au=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,ep=36196,tp=37492,np=37496,ip=37488,ap=37489,wu=37490,sp=37491,rp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,Sp=36492,Mp=36494,yp=36495,Ep=36283,bp=36284,Du=36285,Tp=36286,Ky=3200,X_=0,Qy=1,ks="",Kn="srgb",Lu="srgb-linear",Nu="linear",Wt="srgb",lo=7680,W_=519,Jy=512,$y=513,eE=514,Bp=515,tE=516,nE=517,zp=518,iE=519,Y_=35044,q_="300 es",Ea=2e3,Uu=2001;function aE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ou(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sE(){const a=Ou("canvas");return a.style.display="block",a}const j_={};function Z_(...a){const e="THREE."+a.shift();console.log(e,...a)}function wx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=wx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Ot(...a){a=wx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Ao(...a){const e=a.join(" ");e in j_||(j_[e]=!0,rt(...a))}function rE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const oE={[Gh]:Vh,[kh]:Yh,[Xh]:qh,[Do]:Wh,[Vh]:Gh,[Yh]:kh,[qh]:Xh,[Wh]:Do};class Rr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let K_=1234567;const Bl=Math.PI/180,kl=180/Math.PI;function Oo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[a&255]+jn[a>>8&255]+jn[a>>16&255]+jn[a>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function xt(a,e,i){return Math.max(e,Math.min(i,a))}function Hp(a,e){return(a%e+e)%e}function lE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function cE(a,e,i){return a!==e?(i-a)/(e-a):0}function zl(a,e,i){return(1-i)*a+i*e}function uE(a,e,i,r){return zl(a,e,1-Math.exp(-i*r))}function fE(a,e=1){return e-Math.abs(Hp(a,e*2)-e)}function dE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function hE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function pE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mE(a,e){return a+Math.random()*(e-a)}function gE(a){return a*(.5-Math.random())}function _E(a){a!==void 0&&(K_=a);let e=K_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vE(a){return a*Bl}function xE(a){return a*kl}function SE(a){return(a&a-1)===0&&a!==0}function ME(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function yE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function EE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*E,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*E,h*d);break;case"ZYZ":a.set(m*E,m*x,h*g,h*d);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Eo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zt={DEG2RAD:Bl,RAD2DEG:kl,generateUUID:Oo,clamp:xt,euclideanModulo:Hp,mapLinear:lE,inverseLerp:cE,lerp:zl,damp:uE,pingpong:fE,smoothstep:dE,smootherstep:hE,randInt:pE,randFloat:mE,randFloatSpread:gE,seededRandom:_E,degToRad:vE,radToDeg:xE,isPowerOfTwo:SE,ceilPowerOfTwo:ME,floorPowerOfTwo:yE,setQuaternionFromProperEuler:EE,normalize:ti,denormalize:Eo},Kp=class Kp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kp.prototype.isVector2=!0;let Ft=Kp;class Po{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],E=c[u+2],R=c[u+3];if(_!==R||m!==v||d!==x||g!==E){let y=m*v+d*x+g*E+_*R;y<0&&(v=-v,x=-x,E=-E,R=-R,y=-y);let M=1-h;if(y<.9995){const F=Math.acos(y),H=Math.sin(F);M=Math.sin(M*F)/H,h=Math.sin(h*F)/H,m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+R*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+R*h;const F=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=F,d*=F,g*=F,_*=F}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[i]=h*E+g*_+m*x-d*v,e[i+1]=m*E+g*v+d*_-h*x,e[i+2]=d*E+g*x+h*v-m*_,e[i+3]=g*E-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"YZX":this._x=v*g*_+d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_-v*x*E;break;case"XZY":this._x=v*g*_-d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_+v*x*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qp=class Qp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Q_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Q_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qp.prototype.isVector3=!0;let ae=Qp;const eh=new ae,Q_=new Po,Jp=class Jp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],E=r[8],R=o[0],y=o[3],M=o[6],F=o[1],H=o[4],C=o[7],I=o[2],U=o[5],B=o[8];return c[0]=u*R+h*F+m*I,c[3]=u*y+h*H+m*U,c[6]=u*M+h*C+m*B,c[1]=d*R+g*F+_*I,c[4]=d*y+g*H+_*U,c[7]=d*M+g*C+_*B,c[2]=v*R+x*F+E*I,c[5]=v*y+x*H+E*U,c[8]=v*M+x*C+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,E=i*_+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(o*d-g*r)*R,e[2]=(h*r-o*u)*R,e[3]=v*R,e[4]=(g*i-o*m)*R,e[5]=(o*c-h*i)*R,e[6]=x*R,e[7]=(r*m-d*i)*R,e[8]=(u*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return Ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(th.makeScale(e,i)),this}rotate(e){return Ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(th.makeRotation(-e)),this}translate(e,i){return Ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let ut=Jp;const th=new ut,J_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const a={enabled:!0,workingColorSpace:Lu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Wt&&(o.r=is(o.r),o.g=is(o.g),o.b=is(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(o.r=Ro(o.r),o.g=Ro(o.g),o.b=Ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ks?Nu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Lu]:{primaries:e,whitePoint:r,transfer:Nu,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),a}const Ct=bE();function is(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ro(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let co;class TE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{co===void 0&&(co=Ou("canvas")),co.width=e.width,co.height=e.height;const o=co.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=co}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=is(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(is(i[r]/255)*255):i[r]=is(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(nh(o[u].image)):c.push(nh(o[u]))}else c=nh(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function nh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?TE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let RE=0;const ih=new ae;class Xn extends Rr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=aa,o=aa,c=un,u=Xs,h=sa,m=Vi,d=Xn.DEFAULT_ANISOTROPY,g=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Oo(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case aa:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case aa:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Mx;Xn.DEFAULT_ANISOTROPY=1;const $p=class $p{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],R=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,C=(x+1)/2,I=(M+1)/2,U=(g+v)/4,B=(_+R)/4,T=(E+y)/4;return H>C&&H>I?H<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(H),o=U/r,c=B/r):C>I?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=U/o,c=T/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=B/c,o=T/c),this.set(r,o,c,i),this}let F=Math.sqrt((y-E)*(y-E)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(F)<.001&&(F=1),this.x=(y-E)/F,this.y=(_-R)/F,this.z=(v-g)/F,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;let gn=$p;class CE extends Rr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new gn(0,0,e,i),this.scissorTest=!1,this.viewport=new gn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Xn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Gp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ta extends CE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Dx extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=class Bu{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,E,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,R,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,R,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=E,M[11]=R,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/uo.setFromMatrixColumn(e,0).length(),c=1/uo.setFromMatrixColumn(e,1).length(),u=1/uo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=h*g,R=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+E*d,i[5]=v-R*d,i[9]=-h*m,i[2]=R-v*d,i[6]=E+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,E=d*g,R=d*_;i[0]=v+R*h,i[4]=E*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-E,i[6]=R+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,E=d*g,R=d*_;i[0]=v-R*h,i[4]=-u*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=u*g,i[9]=R-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=h*g,R=h*_;i[0]=m*g,i[4]=E*d-x,i[8]=v*d+R,i[1]=m*_,i[5]=R*d+v,i[9]=x*d-E,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,E=h*m,R=h*d;i[0]=m*g,i[4]=R-v*_,i[8]=E*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+E,i[10]=v-R*_}else if(e.order==="XZY"){const v=u*m,x=u*d,E=h*m,R=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+R,i[5]=u*g,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*g,i[10]=R*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DE,e,LE)}lookAt(e,i,r){const o=this.elements;return Ei.subVectors(e,i),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Fs.crossVectors(r,Ei),Fs.lengthSq()===0&&(Math.abs(r.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Fs.crossVectors(r,Ei)),Fs.normalize(),eu.crossVectors(Ei,Fs),o[0]=Fs.x,o[4]=eu.x,o[8]=Ei.x,o[1]=Fs.y,o[5]=eu.y,o[9]=Ei.y,o[2]=Fs.z,o[6]=eu.z,o[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],E=r[2],R=r[6],y=r[10],M=r[14],F=r[3],H=r[7],C=r[11],I=r[15],U=o[0],B=o[4],T=o[8],N=o[12],Z=o[1],X=o[5],Q=o[9],me=o[13],he=o[2],J=o[6],z=o[10],G=o[14],ne=o[3],ue=o[7],Se=o[11],O=o[15];return c[0]=u*U+h*Z+m*he+d*ne,c[4]=u*B+h*X+m*J+d*ue,c[8]=u*T+h*Q+m*z+d*Se,c[12]=u*N+h*me+m*G+d*O,c[1]=g*U+_*Z+v*he+x*ne,c[5]=g*B+_*X+v*J+x*ue,c[9]=g*T+_*Q+v*z+x*Se,c[13]=g*N+_*me+v*G+x*O,c[2]=E*U+R*Z+y*he+M*ne,c[6]=E*B+R*X+y*J+M*ue,c[10]=E*T+R*Q+y*z+M*Se,c[14]=E*N+R*me+y*G+M*O,c[3]=F*U+H*Z+C*he+I*ne,c[7]=F*B+H*X+C*J+I*ue,c[11]=F*T+H*Q+C*z+I*Se,c[15]=F*N+H*me+C*G+I*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],R=e[7],y=e[11],M=e[15],F=m*x-d*v,H=h*x-d*_,C=h*v-m*_,I=u*x-d*g,U=u*v-m*g,B=u*_-h*g;return i*(R*F-y*H+M*C)-r*(E*F-y*I+M*U)+o*(E*H-R*I+M*B)-c*(E*C-R*U+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],R=e[13],y=e[14],M=e[15],F=i*h-r*u,H=i*m-o*u,C=i*d-c*u,I=r*m-o*h,U=r*d-c*h,B=o*d-c*m,T=g*R-_*E,N=g*y-v*E,Z=g*M-x*E,X=_*y-v*R,Q=_*M-x*R,me=v*M-x*y,he=F*me-H*Q+C*X+I*Z-U*N+B*T;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/he;return e[0]=(h*me-m*Q+d*X)*J,e[1]=(o*Q-r*me-c*X)*J,e[2]=(R*B-y*U+M*I)*J,e[3]=(v*U-_*B-x*I)*J,e[4]=(m*Z-u*me-d*N)*J,e[5]=(i*me-o*Z+c*N)*J,e[6]=(y*C-E*B-M*H)*J,e[7]=(g*B-v*C+x*H)*J,e[8]=(u*Q-h*Z+d*T)*J,e[9]=(r*Z-i*Q-c*T)*J,e[10]=(E*U-R*C+M*F)*J,e[11]=(_*C-g*U-x*F)*J,e[12]=(h*N-u*X-m*T)*J,e[13]=(i*X-r*N+o*T)*J,e[14]=(R*H-E*I-y*F)*J,e[15]=(g*I-_*H+v*F)*J,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,E=c*_,R=u*g,y=u*_,M=h*_,F=m*d,H=m*g,C=m*_,I=r.x,U=r.y,B=r.z;return o[0]=(1-(R+M))*I,o[1]=(x+C)*I,o[2]=(E-H)*I,o[3]=0,o[4]=(x-C)*U,o[5]=(1-(v+M))*U,o[6]=(y+F)*U,o[7]=0,o[8]=(E+H)*B,o[9]=(y-F)*B,o[10]=(1-(v+R))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=uo.set(o[0],o[1],o[2]).length();const h=uo.set(o[4],o[5],o[6]).length(),m=uo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ea.copy(this);const d=1/u,g=1/h,_=1/m;return ea.elements[0]*=d,ea.elements[1]*=d,ea.elements[2]*=d,ea.elements[4]*=g,ea.elements[5]*=g,ea.elements[6]*=g,ea.elements[8]*=_,ea.elements[9]*=_,ea.elements[10]*=_,i.setFromRotationMatrix(ea),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=Ea,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let E,R;if(m)E=c/(u-c),R=u*c/(u-c);else if(h===Ea)E=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===Uu)E=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=Ea,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let E,R;if(m)E=1/(u-c),R=u/(u-c);else if(h===Ea)E=-2/(u-c),R=-(u+c)/(u-c);else if(h===Uu)E=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Bu.prototype.isMatrix4=!0;let Sn=Bu;const uo=new ae,ea=new Sn,DE=new ae(0,0,0),LE=new ae(1,1,1),Fs=new ae,eu=new ae,Ei=new ae,ev=new Sn,tv=new Po;class Ar{constructor(e=0,i=0,r=0,o=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ev,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return tv.setFromEuler(this),this.setFromQuaternion(tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class Lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NE=0;const nv=new ae,fo=new Po,Za=new Sn,tu=new ae,Rl=new ae,UE=new ae,OE=new Po,iv=new ae(1,0,0),av=new ae(0,1,0),sv=new ae(0,0,1),rv={type:"added"},PE={type:"removed"},ho={type:"childadded",child:null},ah={type:"childremoved",child:null};class Ai extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const e=new ae,i=new Ar,r=new Po,o=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Sn},normalMatrix:{value:new ut}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fo.setFromAxisAngle(e,i),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,i){return fo.setFromAxisAngle(e,i),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(iv,e)}rotateY(e){return this.rotateOnAxis(av,e)}rotateZ(e){return this.rotateOnAxis(sv,e)}translateOnAxis(e,i){return nv.copy(e).applyQuaternion(this.quaternion),this.position.add(nv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(iv,e)}translateY(e){return this.translateOnAxis(av,e)}translateZ(e){return this.translateOnAxis(sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Za.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tu.copy(e):tu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Za.lookAt(Rl,tu,this.up):Za.lookAt(tu,Rl,this.up),this.quaternion.setFromRotationMatrix(Za),o&&(Za.extractRotation(o.matrixWorld),fo.setFromRotationMatrix(Za),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rv),ho.child=e,this.dispatchEvent(ho),ho.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(PE),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Za.multiply(e.parent.matrixWorld)),e.applyMatrix4(Za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rv),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ai.DEFAULT_UP=new ae(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ol extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IE={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),M=this._getHandJoint(d,R);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(IE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ol;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},nu={h:0,s:0,l:0};function rh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Ht{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=Hp(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=rh(u,c,e+1/3),this.g=rh(u,c,e),this.b=rh(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const r=Nx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Ct.workingToColorSpace(Zn.copy(this),e),Math.round(xt(Zn.r*255,0,255))*65536+Math.round(xt(Zn.g*255,0,255))*256+Math.round(xt(Zn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Zn.copy(this),i);const r=Zn.r,o=Zn.g,c=Zn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Zn.copy(this),i),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Kn){Ct.workingToColorSpace(Zn.copy(this),e);const i=Zn.r,r=Zn.g,o=Zn.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+i,Bs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Bs),e.getHSL(nu);const r=zl(Bs.h,nu.h,i),o=zl(Bs.s,nu.s,i),c=zl(Bs.l,nu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Ht;Ht.NAMES=Nx;class FE extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ta=new ae,Ka=new ae,oh=new ae,Qa=new ae,po=new ae,mo=new ae,ov=new ae,lh=new ae,ch=new ae,uh=new ae,fh=new gn,dh=new gn,hh=new gn;class ia{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ta.subVectors(e,i),o.cross(ta);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ta.subVectors(o,i),Ka.subVectors(r,i),oh.subVectors(e,i);const u=ta.dot(ta),h=ta.dot(Ka),m=ta.dot(oh),d=Ka.dot(Ka),g=Ka.dot(oh),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-x-E,E,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Qa)===null?!1:Qa.x>=0&&Qa.y>=0&&Qa.x+Qa.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Qa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qa.x),m.addScaledVector(u,Qa.y),m.addScaledVector(h,Qa.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return fh.setScalar(0),dh.setScalar(0),hh.setScalar(0),fh.fromBufferAttribute(e,i),dh.fromBufferAttribute(e,r),hh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(fh,c.x),u.addScaledVector(dh,c.y),u.addScaledVector(hh,c.z),u}static isFrontFacing(e,i,r,o){return ta.subVectors(r,i),Ka.subVectors(e,i),ta.cross(Ka).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ta.subVectors(this.c,this.b),Ka.subVectors(this.a,this.b),ta.cross(Ka).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ia.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ia.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;po.subVectors(o,r),mo.subVectors(c,r),lh.subVectors(e,r);const m=po.dot(lh),d=mo.dot(lh);if(m<=0&&d<=0)return i.copy(r);ch.subVectors(e,o);const g=po.dot(ch),_=mo.dot(ch);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(po,u);uh.subVectors(e,c);const x=po.dot(uh),E=mo.dot(uh);if(E>=0&&x<=E)return i.copy(c);const R=x*d-m*E;if(R<=0&&d>=0&&E<=0)return h=d/(d-E),i.copy(r).addScaledVector(mo,h);const y=g*E-x*_;if(y<=0&&_-g>=0&&x-E>=0)return ov.subVectors(c,o),h=(_-g)/(_-g+(x-E)),i.copy(o).addScaledVector(ov,h);const M=1/(y+R+v);return u=R*M,h=v*M,i.copy(r).addScaledVector(po,u).addScaledVector(mo,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(na.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(na.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=na.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,na):na.fromBufferAttribute(c,u),na.applyMatrix4(e.matrixWorld),this.expandByPoint(na);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),iu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),iu.copy(r.boundingBox)),iu.applyMatrix4(e.matrixWorld),this.union(iu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,na),na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),au.subVectors(this.max,Cl),go.subVectors(e.a,Cl),_o.subVectors(e.b,Cl),vo.subVectors(e.c,Cl),zs.subVectors(_o,go),Hs.subVectors(vo,_o),hr.subVectors(go,vo);let i=[0,-zs.z,zs.y,0,-Hs.z,Hs.y,0,-hr.z,hr.y,zs.z,0,-zs.x,Hs.z,0,-Hs.x,hr.z,0,-hr.x,-zs.y,zs.x,0,-Hs.y,Hs.x,0,-hr.y,hr.x,0];return!ph(i,go,_o,vo,au)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,go,_o,vo,au))?!1:(su.crossVectors(zs,Hs),i=[su.x,su.y,su.z],ph(i,go,_o,vo,au))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ja),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ja=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],na=new ae,iu=new Wl,go=new ae,_o=new ae,vo=new ae,zs=new ae,Hs=new ae,hr=new ae,Cl=new ae,au=new ae,su=new ae,pr=new ae;function ph(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){pr.fromArray(a,c);const h=o.x*Math.abs(pr.x)+o.y*Math.abs(pr.y)+o.z*Math.abs(pr.z),m=e.dot(pr),d=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const Rn=new ae,ru=new Ft;let BE=0;class Aa extends Rr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Y_,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ru.fromBufferAttribute(this,i),ru.applyMatrix3(e),this.setXY(i,ru.x,ru.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ti(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array),o=ti(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array),o=ti(o,this.array),c=ti(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ux extends Aa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ox extends Aa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ki extends Aa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const zE=new Wl,wl=new ae,mh=new ae;class Vp{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):zE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(wl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(mh)),this.expandByPoint(wl.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HE=0;const Hi=new Sn,gh=new Ai,xo=new ae,bi=new Wl,Dl=new Wl,Pn=new ae;class Xi extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aE(e)?Ox:Ux)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,i,r){return Hi.makeTranslation(e,i,r),this.applyMatrix4(Hi),this}scale(e,i,r){return Hi.makeScale(e,i,r),this.applyMatrix4(Hi),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];bi.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];Dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Pn.addVectors(bi.min,Dl.min),bi.expandByPoint(Pn),Pn.addVectors(bi.max,Dl.max),bi.expandByPoint(Pn)):(bi.expandByPoint(Dl.min),bi.expandByPoint(Dl.max))}bi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Pn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Pn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Pn.fromBufferAttribute(h,d),m&&(xo.fromBufferAttribute(e,d),Pn.add(xo)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Aa(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ae,m[T]=new ae;const d=new ae,g=new ae,_=new ae,v=new Ft,x=new Ft,E=new Ft,R=new ae,y=new ae;function M(T,N,Z){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,Z),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,Z),g.sub(d),_.sub(d),x.sub(v),E.sub(v);const X=1/(x.x*E.y-E.x*x.y);isFinite(X)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(X),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(X),h[T].add(R),h[N].add(R),h[Z].add(R),m[T].add(y),m[N].add(y),m[Z].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let T=0,N=F.length;T<N;++T){const Z=F[T],X=Z.start,Q=Z.count;for(let me=X,he=X+Q;me<he;me+=3)M(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const H=new ae,C=new ae,I=new ae,U=new ae;function B(T){I.fromBufferAttribute(o,T),U.copy(I);const N=h[T];H.copy(N),H.sub(I.multiplyScalar(I.dot(N))).normalize(),C.crossVectors(U,N);const X=C.dot(m[T])<0?-1:1;u.setXYZW(T,H.x,H.y,H.z,X)}for(let T=0,N=F.length;T<N;++T){const Z=F[T],X=Z.start,Q=Z.count;for(let me=X,he=X+Q;me<he;me+=3)B(e.getX(me+0)),B(e.getX(me+1)),B(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Aa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ae,c=new ae,u=new ae,h=new ae,m=new ae,d=new ae,g=new ae,_=new ae;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Pn.fromBufferAttribute(e,i),Pn.normalize(),e.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,E=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?x=m[R]*h.data.stride+h.offset:x=m[R]*g;for(let M=0;M<g;M++)v[E++]=d[x++]}return new Aa(v,g,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GE=0;class Hu extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=To,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Hh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $a=new ae,_h=new ae,ou=new ae,Gs=new ae,vh=new ae,lu=new ae,xh=new ae;class VE{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($a.copy(this.origin).addScaledVector(this.direction,i),$a.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){_h.copy(e).add(i).multiplyScalar(.5),ou.copy(i).sub(e).normalize(),Gs.copy(this.origin).sub(_h);const c=e.distanceTo(i)*.5,u=-this.direction.dot(ou),h=Gs.dot(this.direction),m=-Gs.dot(ou),d=Gs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*m-h,v=u*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const R=1/g;_*=R,v*=R,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(_h).addScaledVector(ou,v),x}intersectSphere(e,i){$a.subVectors(e.center,this.origin);const r=$a.dot(this.direction),o=$a.dot($a)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,$a)!==null}intersectTriangle(e,i,r,o,c){vh.subVectors(i,e),lu.subVectors(r,e),xh.crossVectors(vh,lu);let u=this.direction.dot(xh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Gs.subVectors(this.origin,e);const m=h*this.direction.dot(lu.crossVectors(Gs,lu));if(m<0)return null;const d=h*this.direction.dot(vh.cross(Gs));if(d<0||m+d>u)return null;const g=-h*Gs.dot(xh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pu extends Hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lv=new Sn,mr=new VE,cu=new Vp,cv=new ae,uu=new ae,fu=new ae,du=new ae,Sh=new ae,hu=new ae,uv=new ae,pu=new ae;class Ti extends Ai{constructor(e=new Xi,i=new Pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){hu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(Sh.fromBufferAttribute(_,e),u?hu.addScaledVector(Sh,g):hu.addScaledVector(Sh.sub(i),g))}i.add(hu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(c),mr.copy(e.ray).recast(e.near),!(cu.containsPoint(mr.origin)===!1&&(mr.intersectSphere(cu,cv)===null||mr.origin.distanceToSquared(cv)>(e.far-e.near)**2))&&(lv.copy(c).invert(),mr.copy(e.ray).applyMatrix4(lv),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,R=v.length;E<R;E++){const y=v[E],M=u[y.materialIndex],F=Math.max(y.start,x.start),H=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=F,I=H;C<I;C+=3){const U=h.getX(C),B=h.getX(C+1),T=h.getX(C+2);o=mu(this,M,e,r,d,g,_,U,B,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let y=E,M=R;y<M;y+=3){const F=h.getX(y),H=h.getX(y+1),C=h.getX(y+2);o=mu(this,u,e,r,d,g,_,F,H,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,R=v.length;E<R;E++){const y=v[E],M=u[y.materialIndex],F=Math.max(y.start,x.start),H=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let C=F,I=H;C<I;C+=3){const U=C,B=C+1,T=C+2;o=mu(this,M,e,r,d,g,_,U,B,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let y=E,M=R;y<M;y+=3){const F=y,H=y+1,C=y+2;o=mu(this,u,e,r,d,g,_,F,H,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function kE(a,e,i,r,o,c,u,h){let m;if(e.side===hi?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===as,h),m===null)return null;pu.copy(h),pu.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(pu);return d<i.near||d>i.far?null:{distance:d,point:pu.clone(),object:a}}function mu(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,uu),a.getVertexPosition(m,fu),a.getVertexPosition(d,du);const g=kE(a,e,i,r,uu,fu,du,uv);if(g){const _=new ae;ia.getBarycoord(uv,uu,fu,du,_),o&&(g.uv=ia.getInterpolatedAttribute(o,h,m,d,_,new Ft)),c&&(g.uv1=ia.getInterpolatedAttribute(c,h,m,d,_,new Ft)),u&&(g.normal=ia.getInterpolatedAttribute(u,h,m,d,_,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new ae,materialIndex:0};ia.getNormal(uu,fu,du,v.normal),g.face=v,g.barycoord=_}return g}class XE extends Xn{constructor(e=null,i=1,r=1,o,c,u,h,m,d=kn,g=kn,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=new ae,WE=new ae,YE=new ut;class vr{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Mh.subVectors(r,i).cross(WE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Mh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||YE.getNormalMatrix(e),o=this.coplanarPoint(Mh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Vp,qE=new Ft(.5,.5),gu=new ae;class Px{constructor(e=new vr,i=new vr,r=new vr,o=new vr,c=new vr,u=new vr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ea,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],R=c[9],y=c[10],M=c[11],F=c[12],H=c[13],C=c[14],I=c[15];if(o[0].setComponents(d-u,x-g,M-E,I-F).normalize(),o[1].setComponents(d+u,x+g,M+E,I+F).normalize(),o[2].setComponents(d+h,x+_,M+R,I+H).normalize(),o[3].setComponents(d-h,x-_,M-R,I-H).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(d-m,x-v,M-y,I-C).normalize();else if(o[4].setComponents(d-m,x-v,M-y,I-C).normalize(),i===Ea)o[5].setComponents(d+m,x+v,M+y,I+C).normalize();else if(i===Uu)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=qE.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jE extends Xn{constructor(e,i,r,o,c=un,u=un,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ix extends Xn{constructor(e=[],i=br,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fx extends Xn{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class No extends Xn{constructor(e,i,r=Ra,o,c,u,h=kn,m=kn,d,g=rs,_=1){if(g!==rs&&g!==Er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZE extends No{constructor(e,i=Ra,r=br,o,c,u=kn,h=kn,m,d=rs){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends Xi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new ki(d,3)),this.setAttribute("normal",new ki(g,3)),this.setAttribute("uv",new ki(_,2));function E(R,y,M,F,H,C,I,U,B,T,N){const Z=C/B,X=I/T,Q=C/2,me=I/2,he=U/2,J=B+1,z=T+1;let G=0,ne=0;const ue=new ae;for(let Se=0;Se<z;Se++){const O=Se*X-me;for(let K=0;K<J;K++){const ge=K*Z-Q;ue[R]=ge*F,ue[y]=O*H,ue[M]=he,d.push(ue.x,ue.y,ue.z),ue[R]=0,ue[y]=0,ue[M]=U>0?1:-1,g.push(ue.x,ue.y,ue.z),_.push(K/B),_.push(1-Se/T),G+=1}}for(let Se=0;Se<T;Se++)for(let O=0;O<B;O++){const K=v+O+J*Se,ge=v+O+J*(Se+1),Ae=v+(O+1)+J*(Se+1),Pe=v+(O+1)+J*Se;m.push(K,ge,Pe),m.push(ge,Ae,Pe),ne+=6}h.addGroup(x,ne,N),x+=ne,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class KE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new Ft:new ae);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ae,o=[],c=[],u=[],h=new ae,m=new Sn;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new ae)}c[0]=new ae,u[0]=new ae;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(xt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(xt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function kp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const fv=new ae,dv=new ae,yh=new kp,Eh=new kp,bh=new kp;class QE extends KE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ae){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(dv.subVectors(o[0],o[1]).add(o[0]),d=dv);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(fv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=fv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),x),R=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);R<1e-4&&(R=1),E<1e-4&&(E=R),y<1e-4&&(y=R),yh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,R,y),Eh.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,R,y),bh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,R,y)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),Eh.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),bh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(yh.calc(m),Eh.calc(m),bh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ae().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Ws extends Xi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],E=[],R=[],y=[];for(let M=0;M<g;M++){const F=M*v-u;for(let H=0;H<d;H++){const C=H*_-c;E.push(C,-F,0),R.push(0,0,1),y.push(H/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let F=0;F<h;F++){const H=F+d*M,C=F+d*(M+1),I=F+1+d*(M+1),U=F+1+d*M;x.push(H,C,U),x.push(C,I,U)}this.setIndex(x),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(R,3)),this.setAttribute("uv",new ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}function Uo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(hv(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(hv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ni(a){const e={};for(let i=0;i<a.length;i++){const r=Uo(a[i]);for(const o in r)e[o]=r[o]}return e}function hv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function JE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function zx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const $E={clone:Uo,merge:ni};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Ht().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(o.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Sn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nb extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ib extends Hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _u=new ae,vu=new Po,va=new ae;class Hx extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=Ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_u,vu,va),va.x===1&&va.y===1&&va.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,va.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(_u,vu,va),va.x===1&&va.y===1&&va.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,va.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new ae,pv=new Ft,mv=new Ft;class Gi extends Hx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=kl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,i){return this.getViewBounds(e,pv,mv),i.subVectors(mv,pv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Gx extends Hx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const So=-90,Mo=1;class sb extends Ai{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gi(So,Mo,e,i);o.layers=this.layers,this.add(o);const c=new Gi(So,Mo,e,i);c.layers=this.layers,this.add(c);const u=new Gi(So,Mo,e,i);u.layers=this.layers,this.add(u);const h=new Gi(So,Mo,e,i);h.layers=this.layers,this.add(h);const m=new Gi(So,Mo,e,i);m.layers=this.layers,this.add(m);const d=new Gi(So,Mo,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===Ea)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Uu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class rb extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const em=class em{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};em.prototype.isMatrix2=!0;let gv=em;function _v(a,e,i,r){const o=ob(r);switch(i){case Ax:return a*e;case Cx:return a*e/o.components*o.byteLength;case Pp:return a*e/o.components*o.byteLength;case Tr:return a*e*2/o.components*o.byteLength;case Ip:return a*e*2/o.components*o.byteLength;case Rx:return a*e*3/o.components*o.byteLength;case sa:return a*e*4/o.components*o.byteLength;case Fp:return a*e*4/o.components*o.byteLength;case Eu:case bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qh:case $h:return Math.max(a,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(a,8)*Math.max(e,8)/2;case ep:case tp:case ip:case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case np:case wu:case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Sp:case Mp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ep:case bp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Du:case Tp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ob(a){switch(a){case Vi:case yx:return{byteLength:1,components:1};case Gl:case Ex:case ss:return{byteLength:2,components:1};case Up:case Op:return{byteLength:2,components:4};case Ra:case Np:case ya:return{byteLength:4,components:1};case bx:case Tx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function lb(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],R=_[x];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,_[v]=R)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const R=_[x];a.bufferSubData(d,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var cb=`#ifdef USE_ALPHAHASH
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
}`,_t={alphahash_fragment:cb,alphahash_pars_fragment:ub,alphamap_fragment:fb,alphamap_pars_fragment:db,alphatest_fragment:hb,alphatest_pars_fragment:pb,aomap_fragment:mb,aomap_pars_fragment:gb,batching_pars_vertex:_b,batching_vertex:vb,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:yb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:wb,color_pars_vertex:Db,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Gb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:kb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:t1,envmap_vertex:Wb,fog_vertex:Yb,fog_pars_vertex:qb,fog_fragment:jb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:$b,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:a1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,lightprobes_pars_fragment:f1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:_1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:y1,morphcolor_vertex:E1,morphnormal_vertex:b1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:w1,normal_pars_vertex:D1,normal_vertex:L1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:I1,opaque_fragment:F1,packing:B1,premultiplied_alpha_fragment:z1,project_vertex:H1,dithering_fragment:G1,dithering_pars_fragment:V1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:j1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:Q1,skinnormal_vertex:J1,specularmap_fragment:$1,specularmap_pars_fragment:eT,tonemapping_fragment:tT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:dT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:_T,distance_frag:vT,equirect_vert:xT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:yT,meshbasic_vert:ET,meshbasic_frag:bT,meshlambert_vert:TT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:DT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:UT,meshphysical_frag:OT,meshtoon_vert:PT,meshtoon_frag:IT,points_vert:FT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},We={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Sa={basic:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:ni([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:ni([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ht(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:ni([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:ni([We.points,We.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:ni([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:ni([We.common,We.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:ni([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:ni([We.sprite,We.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:ni([We.common,We.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:ni([We.lights,We.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Sa.physical={uniforms:ni([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const xu={r:0,b:0,g:0},kT=new Sn,kx=new ut;kx.set(-1,0,0,0,1,0,0,0,1);function XT(a,e,i,r,o,c){const u=new Ht(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(F){let H=F.isScene===!0?F.background:null;if(H&&H.isTexture){const C=F.backgroundBlurriness>0;H=e.get(H,C)}return H}function E(F){let H=!1;const C=x(F);C===null?y(u,h):C&&C.isColor&&(y(C,1),H=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function R(F,H){const C=x(H);C&&(C.isCubeTexture||C.mapping===zu)?(d===void 0&&(d=new Ti(new Yl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Uo(Sa.backgroundCube.uniforms),vertexShader:Sa.backgroundCube.vertexShader,fragmentShader:Sa.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(kx),d.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Wt,(g!==C||_!==C.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ti(new Ws(2,2),new Wi({name:"BackgroundMaterial",uniforms:Uo(Sa.background.uniforms),vertexShader:Sa.background.vertexShader,fragmentShader:Sa.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Wt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function y(F,H){F.getRGB(xu,zx(a)),i.buffers.color.setClear(xu.r,xu.g,xu.b,H,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,H=1){u.set(F),h=H,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,y(u,h)},render:E,addToRenderList:R,dispose:M}}function WT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(X,Q,me,he,J){let z=!1;const G=_(X,he,me,Q);c!==G&&(c=G,d(c.object)),z=x(X,he,me,J),z&&E(X,he,me,J),J!==null&&e.update(J,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,C(X,Q,me,he),J!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return a.createVertexArray()}function d(X){return a.bindVertexArray(X)}function g(X){return a.deleteVertexArray(X)}function _(X,Q,me,he){const J=he.wireframe===!0;let z=r[Q.id];z===void 0&&(z={},r[Q.id]=z);const G=X.isInstancedMesh===!0?X.id:0;let ne=z[G];ne===void 0&&(ne={},z[G]=ne);let ue=ne[me.id];ue===void 0&&(ue={},ne[me.id]=ue);let Se=ue[J];return Se===void 0&&(Se=v(m()),ue[J]=Se),Se}function v(X){const Q=[],me=[],he=[];for(let J=0;J<i;J++)Q[J]=0,me[J]=0,he[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:me,attributeDivisors:he,object:X,attributes:{},index:null}}function x(X,Q,me,he){const J=c.attributes,z=Q.attributes;let G=0;const ne=me.getAttributes();for(const ue in ne)if(ne[ue].location>=0){const O=J[ue];let K=z[ue];if(K===void 0&&(ue==="instanceMatrix"&&X.instanceMatrix&&(K=X.instanceMatrix),ue==="instanceColor"&&X.instanceColor&&(K=X.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;G++}return c.attributesNum!==G||c.index!==he}function E(X,Q,me,he){const J={},z=Q.attributes;let G=0;const ne=me.getAttributes();for(const ue in ne)if(ne[ue].location>=0){let O=z[ue];O===void 0&&(ue==="instanceMatrix"&&X.instanceMatrix&&(O=X.instanceMatrix),ue==="instanceColor"&&X.instanceColor&&(O=X.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),J[ue]=K,G++}c.attributes=J,c.attributesNum=G,c.index=he}function R(){const X=c.newAttributes;for(let Q=0,me=X.length;Q<me;Q++)X[Q]=0}function y(X){M(X,0)}function M(X,Q){const me=c.newAttributes,he=c.enabledAttributes,J=c.attributeDivisors;me[X]=1,he[X]===0&&(a.enableVertexAttribArray(X),he[X]=1),J[X]!==Q&&(a.vertexAttribDivisor(X,Q),J[X]=Q)}function F(){const X=c.newAttributes,Q=c.enabledAttributes;for(let me=0,he=Q.length;me<he;me++)Q[me]!==X[me]&&(a.disableVertexAttribArray(me),Q[me]=0)}function H(X,Q,me,he,J,z,G){G===!0?a.vertexAttribIPointer(X,Q,me,J,z):a.vertexAttribPointer(X,Q,me,he,J,z)}function C(X,Q,me,he){R();const J=he.attributes,z=me.getAttributes(),G=Q.defaultAttributeValues;for(const ne in z){const ue=z[ne];if(ue.location>=0){let Se=J[ne];if(Se===void 0&&(ne==="instanceMatrix"&&X.instanceMatrix&&(Se=X.instanceMatrix),ne==="instanceColor"&&X.instanceColor&&(Se=X.instanceColor)),Se!==void 0){const O=Se.normalized,K=Se.itemSize,ge=e.get(Se);if(ge===void 0)continue;const Ae=ge.buffer,Pe=ge.type,ie=ge.bytesPerElement,ye=Pe===a.INT||Pe===a.UNSIGNED_INT||Se.gpuType===Np;if(Se.isInterleavedBufferAttribute){const be=Se.data,qe=be.stride,at=Se.offset;if(be.isInstancedInterleavedBuffer){for(let $e=0;$e<ue.locationSize;$e++)M(ue.location+$e,be.meshPerAttribute);X.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $e=0;$e<ue.locationSize;$e++)y(ue.location+$e);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let $e=0;$e<ue.locationSize;$e++)H(ue.location+$e,K/ue.locationSize,Pe,O,qe*ie,(at+K/ue.locationSize*$e)*ie,ye)}else{if(Se.isInstancedBufferAttribute){for(let be=0;be<ue.locationSize;be++)M(ue.location+be,Se.meshPerAttribute);X.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let be=0;be<ue.locationSize;be++)y(ue.location+be);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let be=0;be<ue.locationSize;be++)H(ue.location+be,K/ue.locationSize,Pe,O,K*ie,K/ue.locationSize*be*ie,ye)}}else if(G!==void 0){const O=G[ne];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ue.location,O);break;case 3:a.vertexAttrib3fv(ue.location,O);break;case 4:a.vertexAttrib4fv(ue.location,O);break;default:a.vertexAttrib1fv(ue.location,O)}}}}F()}function I(){N();for(const X in r){const Q=r[X];for(const me in Q){const he=Q[me];for(const J in he){const z=he[J];for(const G in z)g(z[G].object),delete z[G];delete he[J]}}delete r[X]}}function U(X){if(r[X.id]===void 0)return;const Q=r[X.id];for(const me in Q){const he=Q[me];for(const J in he){const z=he[J];for(const G in z)g(z[G].object),delete z[G];delete he[J]}}delete r[X.id]}function B(X){for(const Q in r){const me=r[Q];for(const he in me){const J=me[he];if(J[X.id]===void 0)continue;const z=J[X.id];for(const G in z)g(z[G].object),delete z[G];delete J[X.id]}}}function T(X){for(const Q in r){const me=r[Q],he=X.isInstancedMesh===!0?X.id:0,J=me[he];if(J!==void 0){for(const z in J){const G=J[z];for(const ne in G)g(G[ne].object),delete G[ne];delete J[z]}delete me[he],Object.keys(me).length===0&&delete r[Q]}}}function N(){Z(),u=!0,c!==o&&(c=o,d(c.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Z,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function YT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function qT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==sa&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Vi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ya&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(rt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),F=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),H=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),U=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:F,maxVaryings:H,maxFragmentUniforms:C,maxSamples:I,samples:U}}function jT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new vr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):d();else{const F=c?0:r,H=F*4;let C=M.clippingState||null;m.value=C,C=g(E,v,H,x);for(let I=0;I!==H;++I)C[I]=i[I];M.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,E){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const M=x+R*4,F=v.matrixWorldInverse;h.getNormalMatrix(F),(y===null||y.length<M)&&(y=new Float32Array(M));for(let H=0,C=x;H!==R;++H,C+=4)u.copy(_[H]).applyMatrix4(F,h),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const Ys=4,vv=[.125,.215,.35,.446,.526,.582],Mr=20,ZT=256,Ll=new Gx,xv=new Ht;let Th=null,Ah=0,Rh=0,Ch=!1;const KT=new ae;class Sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=KT}=c;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:un,minFilter:un,generateMipmaps:!1,type:ss,format:sa,colorSpace:Lu,depthBuffer:!1},o=Mv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,e,i),this._ggxMaterial=JT(c,e,i)}return o}_compileMaterial(e){const i=new Ti(new Xi,e);this._renderer.compile(i,Ll)}_sceneToCubeUV(e,i,r,o,c){const m=new Gi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(xv),_.toneMapping=ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ti(new Yl,new Pu({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let M=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,M=!0):(y.color.copy(xv),M=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[H],c.y,c.z)):C===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[H]));const I=this._cubeSize;yo(o,C*I,H>2?I:0,I,I),_.setRenderTarget(o),M&&_.render(R,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===br||e.mapping===Lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;yo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Ll)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:E}=this,R=this._sizeLods[r],y=3*R*(r>E-Ys?r-E+Ys:0),M=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=E-i,yo(c,y,M,3*R,2*R),o.setRenderTarget(c),o.render(h,Ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,yo(e,y,M,3*R,2*R),o.setRenderTarget(e),o.render(h,Ll)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Mr-1),R=c/E,y=isFinite(c)?1+Math.floor(g*R):Mr;y>Mr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const M=[];let F=0;for(let B=0;B<Mr;++B){const T=B/R,N=Math.exp(-T*T/2);M.push(N),B===0?F+=N:B<y&&(F+=2*N)}for(let B=0;B<M.length;B++)M[B]=M[B]/F;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:H}=this;v.dTheta.value=E,v.mipInt.value=H-r;const C=this._sizeLods[o],I=3*C*(o>H-Ys?o-H+Ys:0),U=4*(this._cubeSize-C);yo(i,I,U,3*C,2*C),m.setRenderTarget(i),m.render(_,Ll)}}function QT(a){const e=[],i=[],r=[];let o=a;const c=a-Ys+1+vv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Ys?m=vv[u-a+Ys-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,R=3,y=2,M=1,F=new Float32Array(R*E*x),H=new Float32Array(y*E*x),C=new Float32Array(M*E*x);for(let U=0;U<x;U++){const B=U%3*2/3-1,T=U>2?0:-1,N=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];F.set(N,R*E*U),H.set(v,y*E*U);const Z=[U,U,U,U,U,U];C.set(Z,M*E*U)}const I=new Xi;I.setAttribute("position",new Aa(F,R)),I.setAttribute("uv",new Aa(H,y)),I.setAttribute("faceIndex",new Aa(C,M)),r.push(new Ti(I,null)),o>Ys&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Mv(a,e,i){const r=new Ta(a,e,i);return r.texture.mapping=zu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function JT(a,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function $T(a,e,i){const r=new Float32Array(Mr),o=new ae(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function yv(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ev(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Gu(){return`

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
	`}class Xx extends Ta{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ix(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Yl(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hi,blending:ns});c.uniforms.tEquirect.value=i;const u=new Ti(o,c),h=i.minFilter;return i.minFilter===Xs&&(i.minFilter=un),new sb(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function eA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Qd||x===Jd)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const R=new Xx(E.height);return R.fromEquirectangularTexture(a,v),e.set(v,R),v.addEventListener("dispose",d),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===Qd||x===Jd,R=x===br||x===Lo;if(E||R){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new Sv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const F=v.image;return E&&F&&F.height>0||R&&F&&m(F)?(r===null&&(r=new Sv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Qd?v.mapping=br:x===Jd&&(v.mapping=Lo),v}function m(v){let x=0;const E=6;for(let R=0;R<E;R++)v[R]!==void 0&&x++;return x===E}function d(v){const x=v.target;x.removeEventListener("dispose",d);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function tA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Ao("WebGLRenderer: "+r+" extension not supported."),o}}}function nA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,E=_.attributes.position;let R=0;if(E===void 0)return;if(x!==null){const F=x.array;R=x.version;for(let H=0,C=F.length;H<C;H+=3){const I=F[H+0],U=F[H+1],B=F[H+2];v.push(I,U,U,B,B,I)}}else{const F=E.array;R=E.version;for(let H=0,C=F.length/3-1;H<C;H+=3){const I=H+0,U=H+1,B=H+2;v.push(I,U,U,B,B,I)}}const y=new(E.count>=65535?Ox:Ux)(v,1);y.version=R;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function iA(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let R=0;for(let y=0;y<x;y++)R+=v[y];i.update(R,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function aA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function sA(a,e,i){const r=new WeakMap,o=new gn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let Z=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",Z)};var x=Z;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let I=h.attributes.position.count*C,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*U*4*_),T=new Dx(B,I,U,_);T.type=ya,T.needsUpdate=!0;const N=C*4;for(let X=0;X<_;X++){const Q=M[X],me=F[X],he=H[X],J=I*U*4*X;for(let z=0;z<Q.count;z++){const G=z*N;E===!0&&(o.fromBufferAttribute(Q,z),B[J+G+0]=o.x,B[J+G+1]=o.y,B[J+G+2]=o.z,B[J+G+3]=0),R===!0&&(o.fromBufferAttribute(me,z),B[J+G+4]=o.x,B[J+G+5]=o.y,B[J+G+6]=o.z,B[J+G+7]=0),y===!0&&(o.fromBufferAttribute(he,z),B[J+G+8]=o.x,B[J+G+9]=o.y,B[J+G+10]=o.z,B[J+G+11]=he.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Ft(I,U)},r.set(h,v),h.addEventListener("dispose",Z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",R),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function rA(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const oA={[px]:"LINEAR_TONE_MAPPING",[mx]:"REINHARD_TONE_MAPPING",[gx]:"CINEON_TONE_MAPPING",[_x]:"ACES_FILMIC_TONE_MAPPING",[xx]:"AGX_TONE_MAPPING",[Sx]:"NEUTRAL_TONE_MAPPING",[vx]:"CUSTOM_TONE_MAPPING"};function lA(a,e,i,r,o,c){const u=new Ta(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new No(e,i):void 0}),h=new Ta(e,i,{type:ss,depthBuffer:!1,stencilBuffer:!1}),m=new Xi;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const d=new nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ti(m,d),_=new Gx(-1,1,1,-1,0,1);let v=null,x=null,E=!1,R,y=null,M=[],F=!1;this.setSize=function(H,C){u.setSize(H,C),h.setSize(H,C);for(let I=0;I<M.length;I++){const U=M[I];U.setSize&&U.setSize(H,C)}},this.setEffects=function(H){M=H,F=M.length>0&&M[0].isRenderPass===!0;const C=u.width,I=u.height;for(let U=0;U<M.length;U++){const B=M[U];B.setSize&&B.setSize(C,I)}},this.begin=function(H,C){if(E||H.toneMapping===ba&&M.length===0)return!1;if(y=C,C!==null){const I=C.width,U=C.height;(u.width!==I||u.height!==U)&&this.setSize(I,U)}return F===!1&&H.setRenderTarget(u),R=H.toneMapping,H.toneMapping=ba,!0},this.hasRenderPass=function(){return F},this.end=function(H,C){H.toneMapping=R,E=!0;let I=u,U=h;for(let B=0;B<M.length;B++){const T=M[B];if(T.enabled!==!1&&(T.render(H,U,I,C),T.needsSwap!==!1)){const N=I;I=U,U=N}}if(v!==H.outputColorSpace||x!==H.toneMapping){v=H.outputColorSpace,x=H.toneMapping,d.defines={},Ct.getTransfer(v)===Wt&&(d.defines.SRGB_TRANSFER="");const B=oA[x];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(y),H.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const Wx=new Xn,Ap=new No(1,1),Yx=new Dx,qx=new wE,jx=new Ix,bv=[],Tv=[],Av=new Float32Array(16),Rv=new Float32Array(9),Cv=new Float32Array(4);function Io(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=bv[o];if(c===void 0&&(c=new Float32Array(o),bv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Nn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Un(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Vu(a,e){let i=Tv[e];i===void 0&&(i=new Int32Array(e),Tv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function cA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2fv(this.addr,e),Un(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Nn(i,e))return;a.uniform3fv(this.addr,e),Un(i,e)}}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4fv(this.addr,e),Un(i,e)}}function hA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Cv.set(r),a.uniformMatrix2fv(this.addr,!1,Cv),Un(i,r)}}function pA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Rv.set(r),a.uniformMatrix3fv(this.addr,!1,Rv),Un(i,r)}}function mA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Av.set(r),a.uniformMatrix4fv(this.addr,!1,Av),Un(i,r)}}function gA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2iv(this.addr,e),Un(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;a.uniform3iv(this.addr,e),Un(i,e)}}function xA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4iv(this.addr,e),Un(i,e)}}function SA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function MA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2uiv(this.addr,e),Un(i,e)}}function yA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;a.uniform3uiv(this.addr,e),Un(i,e)}}function EA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4uiv(this.addr,e),Un(i,e)}}function bA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Ap.compareFunction=i.isReversedDepthBuffer()?zp:Bp,c=Ap):c=Wx,i.setTexture2D(e||c,o)}function TA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||qx,o)}function AA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||jx,o)}function RA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Yx,o)}function CA(a){switch(a){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return MA;case 36295:return yA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(a,e){a.uniform1fv(this.addr,e)}function DA(a,e){const i=Io(e,this.size,2);a.uniform2fv(this.addr,i)}function LA(a,e){const i=Io(e,this.size,3);a.uniform3fv(this.addr,i)}function NA(a,e){const i=Io(e,this.size,4);a.uniform4fv(this.addr,i)}function UA(a,e){const i=Io(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function OA(a,e){const i=Io(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function PA(a,e){const i=Io(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function IA(a,e){a.uniform1iv(this.addr,e)}function FA(a,e){a.uniform2iv(this.addr,e)}function BA(a,e){a.uniform3iv(this.addr,e)}function zA(a,e){a.uniform4iv(this.addr,e)}function HA(a,e){a.uniform1uiv(this.addr,e)}function GA(a,e){a.uniform2uiv(this.addr,e)}function VA(a,e){a.uniform3uiv(this.addr,e)}function kA(a,e){a.uniform4uiv(this.addr,e)}function XA(a,e,i){const r=this.cache,o=e.length,c=Vu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Ap:u=Wx;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function WA(a,e,i){const r=this.cache,o=e.length,c=Vu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||qx,c[u])}function YA(a,e,i){const r=this.cache,o=e.length,c=Vu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||jx,c[u])}function qA(a,e,i){const r=this.cache,o=e.length,c=Vu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Yx,c[u])}function jA(a){switch(a){case 5126:return wA;case 35664:return DA;case 35665:return LA;case 35666:return NA;case 35674:return UA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return FA;case 35668:case 35672:return BA;case 35669:case 35673:return zA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function wv(a,e){a.seq.push(e),a.map[e.id]=e}function JA(a,e,i){const r=a.name,o=r.length;for(wh.lastIndex=0;;){const c=wh.exec(r),u=wh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){wv(i,d===void 0?new ZA(h,a,e):new KA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new QA(h),wv(i,_)),i=_}}}class Ru{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);JA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Dv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const $A=37297;let e2=0;function t2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const Lv=new ut;function n2(a){Ct._getMatrix(Lv,Ct.workingColorSpace,a);const e=`mat3( ${Lv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case Nu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Nv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+t2(a.getShaderSource(e),h)}else return c}function i2(a,e){const i=n2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const a2={[px]:"Linear",[mx]:"Reinhard",[gx]:"Cineon",[_x]:"ACESFilmic",[xx]:"AgX",[Sx]:"Neutral",[vx]:"Custom"};function s2(a,e){const i=a2[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new ae;function r2(){Ct.getLuminanceCoefficients(Su);const a=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function l2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function c2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function Pl(a){return a!==""}function Uv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ov(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rp(a){return a.replace(u2,d2)}const f2=new Map;function d2(a,e){let i=_t[e];if(i===void 0){const r=f2.get(e);if(r!==void 0)i=_t[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rp(i)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(a){return a.replace(h2,p2)}function p2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Iv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const m2={[yu]:"SHADOWMAP_TYPE_PCF",[Ul]:"SHADOWMAP_TYPE_VSM"};function g2(a){return m2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _2={[br]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE",[zu]:"ENVMAP_TYPE_CUBE_UV"};function v2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":_2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const x2={[Lo]:"ENVMAP_MODE_REFRACTION"};function S2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":x2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M2={[hx]:"ENVMAP_BLENDING_MULTIPLY",[qy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function y2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":M2[a.combine]||"ENVMAP_BLENDING_NONE"}function E2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=g2(i),d=v2(i),g=S2(i),_=y2(i),v=E2(i),x=o2(i),E=l2(c),R=o.createProgram();let y,M,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Pl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Pl).join(`
`),M.length>0&&(M+=`
`)):(y=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),M=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ba?"#define TONE_MAPPING":"",i.toneMapping!==ba?_t.tonemapping_pars_fragment:"",i.toneMapping!==ba?s2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,i2("linearToOutputTexel",i.outputColorSpace),r2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),u=Rp(u),u=Uv(u,i),u=Ov(u,i),h=Rp(h),h=Uv(h,i),h=Ov(h,i),u=Pv(u),h=Pv(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const H=F+y+u,C=F+M+h,I=Dv(o,o.VERTEX_SHADER,H),U=Dv(o,o.FRAGMENT_SHADER,C);o.attachShader(R,I),o.attachShader(R,U),i.index0AttributeName!==void 0?o.bindAttribLocation(R,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function B(X){if(a.debug.checkShaderErrors){const Q=o.getProgramInfoLog(R)||"",me=o.getShaderInfoLog(I)||"",he=o.getShaderInfoLog(U)||"",J=Q.trim(),z=me.trim(),G=he.trim();let ne=!0,ue=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(ne=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,R,I,U);else{const Se=Nv(o,I,"vertex"),O=Nv(o,U,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+J+`
`+Se+`
`+O)}else J!==""?rt("WebGLProgram: Program Info Log:",J):(z===""||G==="")&&(ue=!1);ue&&(X.diagnostics={runnable:ne,programLog:J,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:M}})}o.deleteShader(I),o.deleteShader(U),T=new Ru(o,R),N=c2(o,R)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(R,$A)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=e2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=U,this}let T2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new R2(e),i.set(e,r)),r}}class R2{constructor(e){this.id=T2++,this.code=e,this.usedTimes=0}}function C2(a){return a===Tr||a===wu||a===Du}function w2(a,e,i,r,o,c){const u=new Lx,h=new A2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,N,Z,X,Q,me){const he=X.fog,J=Q.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ne=e.get(T.envMap||z,G),ue=ne&&ne.mapping===zu?ne.image.height:null,Se=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const O=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,K=O!==void 0?O.length:0;let ge=0;J.morphAttributes.position!==void 0&&(ge=1),J.morphAttributes.normal!==void 0&&(ge=2),J.morphAttributes.color!==void 0&&(ge=3);let Ae,Pe,ie,ye;if(Se){const Fe=Sa[Se];Ae=Fe.vertexShader,Pe=Fe.fragmentShader}else{Ae=T.vertexShader,Pe=T.fragmentShader;const Fe=h.getVertexShaderStage(T),Dt=h.getFragmentShaderStage(T);h.update(T,Fe,Dt),ie=Fe.id,ye=Dt.id}const be=a.getRenderTarget(),qe=a.state.buffers.depth.getReversed(),at=Q.isInstancedMesh===!0,$e=Q.isBatchedMesh===!0,Kt=!!T.map,dt=!!T.matcap,nt=!!ne,ft=!!T.aoMap,ht=!!T.lightMap,Qt=!!T.bumpMap&&T.wireframe===!1,Yt=!!T.normalMap,Jt=!!T.displacementMap,on=!!T.emissiveMap,Gt=!!T.metalnessMap,tn=!!T.roughnessMap,$=T.anisotropy>0,wt=T.clearcoat>0,St=T.dispersion>0,P=T.iridescence>0,b=T.sheen>0,ee=T.transmission>0,oe=$&&!!T.anisotropyMap,pe=wt&&!!T.clearcoatMap,we=wt&&!!T.clearcoatNormalMap,Ie=wt&&!!T.clearcoatRoughnessMap,le=P&&!!T.iridescenceMap,fe=P&&!!T.iridescenceThicknessMap,Ce=b&&!!T.sheenColorMap,He=b&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,Ue=!!T.specularColorMap,Ke=!!T.specularIntensityMap,Je=ee&&!!T.transmissionMap,it=ee&&!!T.thicknessMap,Y=!!T.gradientMap,Le=!!T.alphaMap,_e=T.alphaTest>0,Oe=!!T.alphaHash,Ge=!!T.extensions;let Ee=ba;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const je={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Pe,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:$e,batchingColor:$e&&Q._colorsTexture!==null,instancing:at,instancingColor:at&&Q.instanceColor!==null,instancingMorph:at&&Q.morphTexture!==null,outputColorSpace:be===null?a.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Kt,matcap:dt,envMap:nt,envMapMode:nt&&ne.mapping,envMapCubeUVHeight:ue,aoMap:ft,lightMap:ht,bumpMap:Qt,normalMap:Yt,displacementMap:Jt,emissiveMap:on,normalMapObjectSpace:Yt&&T.normalMapType===Qy,normalMapTangentSpace:Yt&&T.normalMapType===X_,packedNormalMap:Yt&&T.normalMapType===X_&&C2(T.normalMap.format),metalnessMap:Gt,roughnessMap:tn,anisotropy:$,anisotropyMap:oe,clearcoat:wt,clearcoatMap:pe,clearcoatNormalMap:we,clearcoatRoughnessMap:Ie,dispersion:St,iridescence:P,iridescenceMap:le,iridescenceThicknessMap:fe,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:Ke,transmission:ee,transmissionMap:Je,thicknessMap:it,gradientMap:Y,opaque:T.transparent===!1&&T.blending===To&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:Oe,combine:T.combine,mapUv:Kt&&E(T.map.channel),aoMapUv:ft&&E(T.aoMap.channel),lightMapUv:ht&&E(T.lightMap.channel),bumpMapUv:Qt&&E(T.bumpMap.channel),normalMapUv:Yt&&E(T.normalMap.channel),displacementMapUv:Jt&&E(T.displacementMap.channel),emissiveMapUv:on&&E(T.emissiveMap.channel),metalnessMapUv:Gt&&E(T.metalnessMap.channel),roughnessMapUv:tn&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:pe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(T.sheenRoughnessMap.channel),specularMapUv:Ne&&E(T.specularMap.channel),specularColorMapUv:Ue&&E(T.specularColorMap.channel),specularIntensityMapUv:Ke&&E(T.specularIntensityMap.channel),transmissionMapUv:Je&&E(T.transmissionMap.channel),thicknessMapUv:it&&E(T.thicknessMap.channel),alphaMapUv:Le&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||$),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Kt||Le),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:qe,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ge,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&Z.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Kt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Wt,decodeVideoTextureEmissive:on&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===hi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)N.push(Z),N.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(M(N,T),F(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function F(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function H(T){const N=x[T.type];let Z;if(N){const X=Sa[N];Z=$E.clone(X.uniforms)}else Z=T.uniforms;return Z}function C(T,N){let Z=g.get(N);return Z!==void 0?++Z.usedTimes:(Z=new b2(a,N,T,o),d.push(Z),g.set(N,Z)),Z}function I(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function B(){h.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:H,acquireProgram:C,releaseProgram:I,releaseShaderCache:U,programs:d,dispose:B}}function D2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function L2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Fv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Bv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,E,R,y,M){let F=a[e];return F===void 0?(F={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:M},a[e]=F):(F.id=v.id,F.object=v,F.geometry=x,F.material=E,F.materialVariant=u(v),F.groupOrder=R,F.renderOrder=v.renderOrder,F.z=y,F.group=M),e++,F}function m(v,x,E,R,y,M){const F=h(v,x,E,R,y,M);E.transmission>0?r.push(F):E.transparent===!0?o.push(F):i.push(F)}function d(v,x,E,R,y,M){const F=h(v,x,E,R,y,M);E.transmission>0?r.unshift(F):E.transparent===!0?o.unshift(F):i.unshift(F)}function g(v,x,E){i.length>1&&i.sort(v||L2),r.length>1&&r.sort(x||Fv),o.length>1&&o.sort(x||Fv),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function N2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Bv,a.set(r,[u])):o>=c.length?(u=new Bv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function U2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Ht};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":i={color:new Ht,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=i,i}}}function O2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let P2=0;function I2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function F2(a){const e=new U2,i=O2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ae);const o=new ae,c=new Sn,u=new Sn;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,E=0,R=0,y=0,M=0,F=0,H=0,C=0,I=0,U=0,B=0;d.sort(I2);for(let N=0,Z=d.length;N<Z;N++){const X=d[N],Q=X.color,me=X.intensity,he=X.distance;let J=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Tr?J=X.shadow.map.texture:J=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=Q.r*me,_+=Q.g*me,v+=Q.b*me;else if(X.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(X.sh.coefficients[z],me);B++}else if(X.isDirectionalLight){const z=e.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,ne=i.get(X);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[x]=ne,r.directionalShadowMap[x]=J,r.directionalShadowMatrix[x]=X.shadow.matrix,F++}r.directional[x]=z,x++}else if(X.isSpotLight){const z=e.get(X);z.position.setFromMatrixPosition(X.matrixWorld),z.color.copy(Q).multiplyScalar(me),z.distance=he,z.coneCos=Math.cos(X.angle),z.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),z.decay=X.decay,r.spot[R]=z;const G=X.shadow;if(X.map&&(r.spotLightMap[I]=X.map,I++,G.updateMatrices(X),X.castShadow&&U++),r.spotLightMatrix[R]=G.matrix,X.castShadow){const ne=i.get(X);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[R]=ne,r.spotShadowMap[R]=J,C++}R++}else if(X.isRectAreaLight){const z=e.get(X);z.color.copy(Q).multiplyScalar(me),z.halfWidth.set(X.width*.5,0,0),z.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=z,y++}else if(X.isPointLight){const z=e.get(X);if(z.color.copy(X.color).multiplyScalar(X.intensity),z.distance=X.distance,z.decay=X.decay,X.castShadow){const G=X.shadow,ne=i.get(X);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=J,r.pointShadowMatrix[E]=X.shadow.matrix,H++}r.point[E]=z,E++}else if(X.isHemisphereLight){const z=e.get(X);z.skyColor.copy(X.color).multiplyScalar(me),z.groundColor.copy(X.groundColor).multiplyScalar(me),r.hemi[M]=z,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==R||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==F||T.numPointShadows!==H||T.numSpotShadows!==C||T.numSpotMaps!==I||T.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=R,r.rectArea.length=y,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=C+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=B,T.directionalLength=x,T.pointLength=E,T.spotLength=R,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=F,T.numPointShadows=H,T.numSpotShadows=C,T.numSpotMaps=I,T.numLightProbes=B,r.version=P2++)}function m(d,g){let _=0,v=0,x=0,E=0,R=0;const y=g.matrixWorldInverse;for(let M=0,F=d.length;M<F;M++){const H=d[M];if(H.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(H.matrixWorld),o.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(H.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(H.matrixWorld),o.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),x++}else if(H.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(H.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(H.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(y),v++}else if(H.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(H.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function zv(a){const e=new F2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function B2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new zv(a),e.set(o,[h])):c>=u.length?(h=new zv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const z2=`void main() {
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
}`,G2=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],V2=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Hv=new Sn,Nl=new ae,Dh=new ae;function k2(a,e,i){let r=new Px;const o=new Ft,c=new Ft,u=new gn,h=new ib,m=new ab,d={},g=i.maxTextureSize,_={[as]:hi,[hi]:as,[Ma]:Ma},v=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:z2,fragmentShader:H2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Xi;E.setAttribute("position",new Aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ti(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let M=this.type;this.render=function(U,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===Cy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yu);const N=a.getRenderTarget(),Z=a.getActiveCubeFace(),X=a.getActiveMipmapLevel(),Q=a.state;Q.setBlending(ns),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const me=M!==this.type;me&&B.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(J=>J.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,J=U.length;he<J;he++){const z=U[he],G=z.shadow;if(G===void 0){rt("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ne=G.getFrameExtents();o.multiply(ne),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ne.x),o.x=c.x*ne.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ne.y),o.y=c.y*ne.y,G.mapSize.y=c.y));const ue=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ue,G.map===null||me===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ul){if(z.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ta(o.x,o.y,{format:Tr,type:ss,minFilter:un,magFilter:un,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new No(o.x,o.y,ya),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=rs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn}else z.isPointLight?(G.map=new Xx(o.x),G.map.depthTexture=new ZE(o.x,Ra)):(G.map=new Ta(o.x,o.y),G.map.depthTexture=new No(o.x,o.y,Ra)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=rs,this.type===yu?(G.map.depthTexture.compareFunction=ue?zp:Bp,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn);G.camera.updateProjectionMatrix()}const Se=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Se;O++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,O),a.clear();else{O===0&&(a.setRenderTarget(G.map),a.clear());const K=G.getViewport(O);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Q.viewport(u)}if(z.isPointLight){const K=G.camera,ge=G.matrix,Ae=z.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),Nl.setFromMatrixPosition(z.matrixWorld),K.position.copy(Nl),Dh.copy(K.position),Dh.add(G2[O]),K.up.copy(V2[O]),K.lookAt(Dh),K.updateMatrixWorld(),ge.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Hv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hv,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(z);r=G.getFrustum(),C(B,T,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Ul&&F(G,T),G.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,Z,X)};function F(U,B){const T=e.update(R);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ta(o.x,o.y,{format:Tr,type:ss})),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,a.setRenderTarget(U.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,R,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,a.setRenderTarget(U.map),a.clear(),a.renderBufferDirect(B,null,T,x,R,null)}function H(U,B,T,N){let Z=null;const X=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(X!==void 0)Z=X;else if(Z=T.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=Z.uuid,me=B.uuid;let he=d[Q];he===void 0&&(he={},d[Q]=he);let J=he[me];J===void 0&&(J=Z.clone(),he[me]=J,B.addEventListener("dispose",I)),Z=J}if(Z.visible=B.visible,Z.wireframe=B.wireframe,N===Ul?Z.side=B.shadowSide!==null?B.shadowSide:B.side:Z.side=B.shadowSide!==null?B.shadowSide:_[B.side],Z.alphaMap=B.alphaMap,Z.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Z.map=B.map,Z.clipShadows=B.clipShadows,Z.clippingPlanes=B.clippingPlanes,Z.clipIntersection=B.clipIntersection,Z.displacementMap=B.displacementMap,Z.displacementScale=B.displacementScale,Z.displacementBias=B.displacementBias,Z.wireframeLinewidth=B.wireframeLinewidth,Z.linewidth=B.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Q=a.properties.get(Z);Q.light=T}return Z}function C(U,B,T,N,Z){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Z===Ul)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const me=e.update(U),he=U.material;if(Array.isArray(he)){const J=me.groups;for(let z=0,G=J.length;z<G;z++){const ne=J[z],ue=he[ne.materialIndex];if(ue&&ue.visible){const Se=H(U,ue,N,Z);U.onBeforeShadow(a,U,B,T,me,Se,ne),a.renderBufferDirect(T,null,me,Se,U,ne),U.onAfterShadow(a,U,B,T,me,Se,ne)}}}else if(he.visible){const J=H(U,he,N,Z);U.onBeforeShadow(a,U,B,T,me,J,null),a.renderBufferDirect(T,null,me,J,U,null),U.onAfterShadow(a,U,B,T,me,J,null)}}const Q=U.children;for(let me=0,he=Q.length;me<he;me++)C(Q[me],B,T,N,Z)}function I(U){U.target.removeEventListener("dispose",I);for(const T in d){const N=d[T],Z=U.target.uuid;Z in N&&(N[Z].dispose(),delete N[Z])}}}function X2(a,e){function i(){let Y=!1;const Le=new gn;let _e=null;const Oe=new gn(0,0,0,0);return{setMask:function(Ge){_e!==Ge&&!Y&&(a.colorMask(Ge,Ge,Ge,Ge),_e=Ge)},setLocked:function(Ge){Y=Ge},setClear:function(Ge,Ee,je,Fe,Dt){Dt===!0&&(Ge*=Fe,Ee*=Fe,je*=Fe),Le.set(Ge,Ee,je,Fe),Oe.equals(Le)===!1&&(a.clearColor(Ge,Ee,je,Fe),Oe.copy(Le))},reset:function(){Y=!1,_e=null,Oe.set(-1,0,0,0)}}}function r(){let Y=!1,Le=!1,_e=null,Oe=null,Ge=null;return{setReversed:function(Ee){if(Le!==Ee){const je=e.get("EXT_clip_control");Ee?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Le=Ee;const Fe=Ge;Ge=null,this.setClear(Fe)}},getReversed:function(){return Le},setTest:function(Ee){Ee?be(a.DEPTH_TEST):qe(a.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!Y&&(a.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(Le&&(Ee=oE[Ee]),Oe!==Ee){switch(Ee){case Gh:a.depthFunc(a.NEVER);break;case Vh:a.depthFunc(a.ALWAYS);break;case kh:a.depthFunc(a.LESS);break;case Do:a.depthFunc(a.LEQUAL);break;case Xh:a.depthFunc(a.EQUAL);break;case Wh:a.depthFunc(a.GEQUAL);break;case Yh:a.depthFunc(a.GREATER);break;case qh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Oe=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){Ge!==Ee&&(Ge=Ee,Le&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){Y=!1,_e=null,Oe=null,Ge=null,Le=!1}}}function o(){let Y=!1,Le=null,_e=null,Oe=null,Ge=null,Ee=null,je=null,Fe=null,Dt=null;return{setTest:function(lt){Y||(lt?be(a.STENCIL_TEST):qe(a.STENCIL_TEST))},setMask:function(lt){Le!==lt&&!Y&&(a.stencilMask(lt),Le=lt)},setFunc:function(lt,Qn,Jn){(_e!==lt||Oe!==Qn||Ge!==Jn)&&(a.stencilFunc(lt,Qn,Jn),_e=lt,Oe=Qn,Ge=Jn)},setOp:function(lt,Qn,Jn){(Ee!==lt||je!==Qn||Fe!==Jn)&&(a.stencilOp(lt,Qn,Jn),Ee=lt,je=Qn,Fe=Jn)},setLocked:function(lt){Y=lt},setClear:function(lt){Dt!==lt&&(a.clearStencil(lt),Dt=lt)},reset:function(){Y=!1,Le=null,_e=null,Oe=null,Ge=null,Ee=null,je=null,Fe=null,Dt=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,E=[],R=null,y=!1,M=null,F=null,H=null,C=null,I=null,U=null,B=null,T=new Ht(0,0,0),N=0,Z=!1,X=null,Q=null,me=null,he=null,J=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const ue=a.getParameter(a.VERSION);ue.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ue)[1]),G=ne>=1):ue.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),G=ne>=2);let Se=null,O={};const K=a.getParameter(a.SCISSOR_BOX),ge=a.getParameter(a.VIEWPORT),Ae=new gn().fromArray(K),Pe=new gn().fromArray(ge);function ie(Y,Le,_e,Oe){const Ge=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(Y,Ee),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let je=0;je<_e;je++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Oe,0,a.RGBA,a.UNSIGNED_BYTE,Ge):a.texImage2D(Le+je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ge);return Ee}const ye={};ye[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),be(a.DEPTH_TEST),u.setFunc(Do),Qt(!1),Yt(G_),be(a.CULL_FACE),ft(ns);function be(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function qe(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function at(Y,Le){return v[Y]!==Le?(a.bindFramebuffer(Y,Le),v[Y]=Le,Y===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Le),Y===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function $e(Y,Le){let _e=E,Oe=!1;if(Y){_e=x.get(Le),_e===void 0&&(_e=[],x.set(Le,_e));const Ge=Y.textures;if(_e.length!==Ge.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,je=Ge.length;Ee<je;Ee++)_e[Ee]=a.COLOR_ATTACHMENT0+Ee;_e.length=Ge.length,Oe=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Oe=!0);Oe&&a.drawBuffers(_e)}function Kt(Y){return R!==Y?(a.useProgram(Y),R=Y,!0):!1}const dt={[Sr]:a.FUNC_ADD,[Dy]:a.FUNC_SUBTRACT,[Ly]:a.FUNC_REVERSE_SUBTRACT};dt[Ny]=a.MIN,dt[Uy]=a.MAX;const nt={[Oy]:a.ZERO,[Py]:a.ONE,[Iy]:a.SRC_COLOR,[zh]:a.SRC_ALPHA,[Vy]:a.SRC_ALPHA_SATURATE,[Hy]:a.DST_COLOR,[By]:a.DST_ALPHA,[Fy]:a.ONE_MINUS_SRC_COLOR,[Hh]:a.ONE_MINUS_SRC_ALPHA,[Gy]:a.ONE_MINUS_DST_COLOR,[zy]:a.ONE_MINUS_DST_ALPHA,[ky]:a.CONSTANT_COLOR,[Xy]:a.ONE_MINUS_CONSTANT_COLOR,[Wy]:a.CONSTANT_ALPHA,[Yy]:a.ONE_MINUS_CONSTANT_ALPHA};function ft(Y,Le,_e,Oe,Ge,Ee,je,Fe,Dt,lt){if(Y===ns){y===!0&&(qe(a.BLEND),y=!1);return}if(y===!1&&(be(a.BLEND),y=!0),Y!==wy){if(Y!==M||lt!==Z){if((F!==Sr||I!==Sr)&&(a.blendEquation(a.FUNC_ADD),F=Sr,I=Sr),lt)switch(Y){case To:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Bh:a.blendFunc(a.ONE,a.ONE);break;case V_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case k_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ot("WebGLState: Invalid blending: ",Y);break}else switch(Y){case To:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Bh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case V_:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k_:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",Y);break}H=null,C=null,U=null,B=null,T.set(0,0,0),N=0,M=Y,Z=lt}return}Ge=Ge||Le,Ee=Ee||_e,je=je||Oe,(Le!==F||Ge!==I)&&(a.blendEquationSeparate(dt[Le],dt[Ge]),F=Le,I=Ge),(_e!==H||Oe!==C||Ee!==U||je!==B)&&(a.blendFuncSeparate(nt[_e],nt[Oe],nt[Ee],nt[je]),H=_e,C=Oe,U=Ee,B=je),(Fe.equals(T)===!1||Dt!==N)&&(a.blendColor(Fe.r,Fe.g,Fe.b,Dt),T.copy(Fe),N=Dt),M=Y,Z=!1}function ht(Y,Le){Y.side===Ma?qe(a.CULL_FACE):be(a.CULL_FACE);let _e=Y.side===hi;Le&&(_e=!_e),Qt(_e),Y.blending===To&&Y.transparent===!1?ft(ns):ft(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Oe=Y.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),on(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):qe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(Y){X!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),X=Y)}function Yt(Y){Y!==Ay?(be(a.CULL_FACE),Y!==Q&&(Y===G_?a.cullFace(a.BACK):Y===Ry?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):qe(a.CULL_FACE),Q=Y}function Jt(Y){Y!==me&&(G&&a.lineWidth(Y),me=Y)}function on(Y,Le,_e){Y?(be(a.POLYGON_OFFSET_FILL),(he!==Le||J!==_e)&&(he=Le,J=_e,u.getReversed()&&(Le=-Le),a.polygonOffset(Le,_e))):qe(a.POLYGON_OFFSET_FILL)}function Gt(Y){Y?be(a.SCISSOR_TEST):qe(a.SCISSOR_TEST)}function tn(Y){Y===void 0&&(Y=a.TEXTURE0+z-1),Se!==Y&&(a.activeTexture(Y),Se=Y)}function $(Y,Le,_e){_e===void 0&&(Se===null?_e=a.TEXTURE0+z-1:_e=Se);let Oe=O[_e];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[_e]=Oe),(Oe.type!==Y||Oe.texture!==Le)&&(Se!==_e&&(a.activeTexture(_e),Se=_e),a.bindTexture(Y,Le||ye[Y]),Oe.type=Y,Oe.texture=Le)}function wt(){const Y=O[Se];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function St(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function b(){try{a.texSubImage2D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function ee(){try{a.texSubImage3D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function pe(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function we(){try{a.texStorage2D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function Ie(){try{a.texStorage3D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function le(){try{a.texImage2D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function fe(){try{a.texImage3D(...arguments)}catch(Y){Ot("WebGLState:",Y)}}function Ce(Y){return _[Y]!==void 0?_[Y]:a.getParameter(Y)}function He(Y,Le){_[Y]!==Le&&(a.pixelStorei(Y,Le),_[Y]=Le)}function Ne(Y){Ae.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Ae.copy(Y))}function Ue(Y){Pe.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Pe.copy(Y))}function Ke(Y,Le){let _e=d.get(Le);_e===void 0&&(_e=new WeakMap,d.set(Le,_e));let Oe=_e.get(Y);Oe===void 0&&(Oe=a.getUniformBlockIndex(Le,Y.name),_e.set(Y,Oe))}function Je(Y,Le){const Oe=d.get(Le).get(Y);m.get(Le)!==Oe&&(a.uniformBlockBinding(Le,Oe,Y.__bindingPointIndex),m.set(Le,Oe))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},Se=null,O={},v={},x=new WeakMap,E=[],R=null,y=!1,M=null,F=null,H=null,C=null,I=null,U=null,B=null,T=new Ht(0,0,0),N=0,Z=!1,X=null,Q=null,me=null,he=null,J=null,Ae.set(0,0,a.canvas.width,a.canvas.height),Pe.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:be,disable:qe,bindFramebuffer:at,drawBuffers:$e,useProgram:Kt,setBlending:ft,setMaterial:ht,setFlipSided:Qt,setCullFace:Yt,setLineWidth:Jt,setPolygonOffset:on,setScissorTest:Gt,activeTexture:tn,bindTexture:$,unbindTexture:wt,compressedTexImage2D:St,compressedTexImage3D:P,texImage2D:le,texImage3D:fe,pixelStorei:He,getParameter:Ce,updateUBOMapping:Ke,uniformBlockBinding:Je,texStorage2D:we,texStorage3D:Ie,texSubImage2D:b,texSubImage3D:ee,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Ne,viewport:Ue,reset:it}}function W2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ft,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,b){return E?new OffscreenCanvas(P,b):Ou("canvas")}function y(P,b,ee){let oe=1;const pe=St(P);if((pe.width>ee||pe.height>ee)&&(oe=ee/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const we=Math.floor(oe*pe.width),Ie=Math.floor(oe*pe.height);v===void 0&&(v=R(we,Ie));const le=b?R(we,Ie):v;return le.width=we,le.height=Ie,le.getContext("2d").drawImage(P,0,0,we,Ie),rt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+we+"x"+Ie+")."),le}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function M(P){return P.generateMipmaps}function F(P){a.generateMipmap(P)}function H(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(P,b,ee,oe,pe,we=!1){if(P!==null){if(a[P]!==void 0)return a[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ie;oe&&(Ie=e.get("EXT_texture_norm16"),Ie||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=b;if(b===a.RED&&(ee===a.FLOAT&&(le=a.R32F),ee===a.HALF_FLOAT&&(le=a.R16F),ee===a.UNSIGNED_BYTE&&(le=a.R8),ee===a.UNSIGNED_SHORT&&Ie&&(le=Ie.R16_EXT),ee===a.SHORT&&Ie&&(le=Ie.R16_SNORM_EXT)),b===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(le=a.R8UI),ee===a.UNSIGNED_SHORT&&(le=a.R16UI),ee===a.UNSIGNED_INT&&(le=a.R32UI),ee===a.BYTE&&(le=a.R8I),ee===a.SHORT&&(le=a.R16I),ee===a.INT&&(le=a.R32I)),b===a.RG&&(ee===a.FLOAT&&(le=a.RG32F),ee===a.HALF_FLOAT&&(le=a.RG16F),ee===a.UNSIGNED_BYTE&&(le=a.RG8),ee===a.UNSIGNED_SHORT&&Ie&&(le=Ie.RG16_EXT),ee===a.SHORT&&Ie&&(le=Ie.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(le=a.RG8UI),ee===a.UNSIGNED_SHORT&&(le=a.RG16UI),ee===a.UNSIGNED_INT&&(le=a.RG32UI),ee===a.BYTE&&(le=a.RG8I),ee===a.SHORT&&(le=a.RG16I),ee===a.INT&&(le=a.RG32I)),b===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(le=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(le=a.RGB16UI),ee===a.UNSIGNED_INT&&(le=a.RGB32UI),ee===a.BYTE&&(le=a.RGB8I),ee===a.SHORT&&(le=a.RGB16I),ee===a.INT&&(le=a.RGB32I)),b===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(le=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(le=a.RGBA16UI),ee===a.UNSIGNED_INT&&(le=a.RGBA32UI),ee===a.BYTE&&(le=a.RGBA8I),ee===a.SHORT&&(le=a.RGBA16I),ee===a.INT&&(le=a.RGBA32I)),b===a.RGB&&(ee===a.UNSIGNED_SHORT&&Ie&&(le=Ie.RGB16_EXT),ee===a.SHORT&&Ie&&(le=Ie.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(le=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(le=a.R11F_G11F_B10F)),b===a.RGBA){const fe=we?Nu:Ct.getTransfer(pe);ee===a.FLOAT&&(le=a.RGBA32F),ee===a.HALF_FLOAT&&(le=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(le=fe===Wt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Ie&&(le=Ie.RGBA16_EXT),ee===a.SHORT&&Ie&&(le=Ie.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(le=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(le=a.RGB5_A1)}return(le===a.R16F||le===a.R32F||le===a.RG16F||le===a.RG32F||le===a.RGBA16F||le===a.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function I(P,b){let ee;return P?b===null||b===Ra||b===Vl?ee=a.DEPTH24_STENCIL8:b===ya?ee=a.DEPTH32F_STENCIL8:b===Gl&&(ee=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ra||b===Vl?ee=a.DEPTH_COMPONENT24:b===ya?ee=a.DEPTH_COMPONENT32F:b===Gl&&(ee=a.DEPTH_COMPONENT16),ee}function U(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==kn&&P.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function B(P){const b=P.target;b.removeEventListener("dispose",B),N(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(P){const b=P.target;b.removeEventListener("dispose",T),X(b)}function N(P){const b=r.get(P);if(b.__webglInit===void 0)return;const ee=P.source,oe=x.get(ee);if(oe){const pe=oe[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&Z(P),Object.keys(oe).length===0&&x.delete(ee)}r.remove(P)}function Z(P){const b=r.get(P);a.deleteTexture(b.__webglTexture);const ee=P.source,oe=x.get(ee);delete oe[b.__cacheKey],u.memory.textures--}function X(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let pe=0;pe<b.__webglFramebuffer[oe].length;pe++)a.deleteFramebuffer(b.__webglFramebuffer[oe][pe]);else a.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)a.deleteFramebuffer(b.__webglFramebuffer[oe]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=P.textures;for(let oe=0,pe=ee.length;oe<pe;oe++){const we=r.get(ee[oe]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(ee[oe])}r.remove(P)}let Q=0;function me(){Q=0}function he(){return Q}function J(P){Q=P}function z(){const P=Q;return P>=o.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),Q+=1,P}function G(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ne(P,b){const ee=r.get(P);if(P.isVideoTexture&&$(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ee.__version!==P.version){const oe=P.image;if(oe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(ee,P,b);return}}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+b)}function ue(P,b){const ee=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){qe(ee,P,b);return}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+b)}function Se(P,b){const ee=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){qe(ee,P,b);return}i.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+b)}function O(P,b){const ee=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&ee.__version!==P.version){at(ee,P,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+b)}const K={[jh]:a.REPEAT,[aa]:a.CLAMP_TO_EDGE,[Zh]:a.MIRRORED_REPEAT},ge={[kn]:a.NEAREST,[Zy]:a.NEAREST_MIPMAP_NEAREST,[$c]:a.NEAREST_MIPMAP_LINEAR,[un]:a.LINEAR,[$d]:a.LINEAR_MIPMAP_NEAREST,[Xs]:a.LINEAR_MIPMAP_LINEAR},Ae={[Jy]:a.NEVER,[iE]:a.ALWAYS,[$y]:a.LESS,[Bp]:a.LEQUAL,[eE]:a.EQUAL,[zp]:a.GEQUAL,[tE]:a.GREATER,[nE]:a.NOTEQUAL};function Pe(P,b){if(b.type===ya&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===$d||b.magFilter===$c||b.magFilter===Xs||b.minFilter===un||b.minFilter===$d||b.minFilter===$c||b.minFilter===Xs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,K[b.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,K[b.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,K[b.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ge[b.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kn||b.minFilter!==$c&&b.minFilter!==Xs||b.type===ya&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ie(P,b){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",B));const oe=b.source;let pe=x.get(oe);pe===void 0&&(pe={},x.set(oe,pe));const we=G(b);if(we!==P.__cacheKey){pe[we]===void 0&&(pe[we]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),pe[we].usedTimes++;const Ie=pe[P.__cacheKey];Ie!==void 0&&(pe[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&Z(b)),P.__cacheKey=we,P.__webglTexture=pe[we].texture}return ee}function ye(P,b,ee){return Math.floor(Math.floor(P/ee)/b)}function be(P,b,ee,oe){const we=P.updateRanges;if(we.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,ee,oe,b.data);else{we.sort((He,Ne)=>He.start-Ne.start);let Ie=0;for(let He=1;He<we.length;He++){const Ne=we[Ie],Ue=we[He],Ke=Ne.start+Ne.count,Je=ye(Ue.start,b.width,4),it=ye(Ne.start,b.width,4);Ue.start<=Ke+1&&Je===it&&ye(Ue.start+Ue.count-1,b.width,4)===Je?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++Ie,we[Ie]=Ue)}we.length=Ie+1;const le=i.getParameter(a.UNPACK_ROW_LENGTH),fe=i.getParameter(a.UNPACK_SKIP_PIXELS),Ce=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let He=0,Ne=we.length;He<Ne;He++){const Ue=we[He],Ke=Math.floor(Ue.start/4),Je=Math.ceil(Ue.count/4),it=Ke%b.width,Y=Math.floor(Ke/b.width),Le=Je,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,it),i.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,it,Y,Le,_e,ee,oe,b.data)}P.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,le),i.pixelStorei(a.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ce)}}function qe(P,b,ee){let oe=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=a.TEXTURE_3D);const pe=ie(P,b),we=b.source;i.bindTexture(oe,P.__webglTexture,a.TEXTURE0+ee);const Ie=r.get(we);if(we.version!==Ie.__version||pe===!0){if(i.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=Ct.getPrimaries(Ct.workingColorSpace),Oe=b.colorSpace===ks?null:Ct.getPrimaries(b.colorSpace),Ge=b.colorSpace===ks||_e===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let fe=y(b.image,!1,o.maxTextureSize);fe=wt(b,fe);const Ce=c.convert(b.format,b.colorSpace),He=c.convert(b.type);let Ne=C(b.internalFormat,Ce,He,b.normalized,b.colorSpace,b.isVideoTexture);Pe(oe,b);let Ue;const Ke=b.mipmaps,Je=b.isVideoTexture!==!0,it=Ie.__version===void 0||pe===!0,Y=we.dataReady,Le=U(b,fe);if(b.isDepthTexture)Ne=I(b.format===Er,b.type),it&&(Je?i.texStorage2D(a.TEXTURE_2D,1,Ne,fe.width,fe.height):i.texImage2D(a.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ce,He,null));else if(b.isDataTexture)if(Ke.length>0){Je&&it&&i.texStorage2D(a.TEXTURE_2D,Le,Ne,Ke[0].width,Ke[0].height);for(let _e=0,Oe=Ke.length;_e<Oe;_e++)Ue=Ke[_e],Je?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,Ce,He,Ue.data):i.texImage2D(a.TEXTURE_2D,_e,Ne,Ue.width,Ue.height,0,Ce,He,Ue.data);b.generateMipmaps=!1}else Je?(it&&i.texStorage2D(a.TEXTURE_2D,Le,Ne,fe.width,fe.height),Y&&be(b,fe,Ce,He)):i.texImage2D(a.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ce,He,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&it&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ne,Ke[0].width,Ke[0].height,fe.depth);for(let _e=0,Oe=Ke.length;_e<Oe;_e++)if(Ue=Ke[_e],b.format!==sa)if(Ce!==null)if(Je){if(Y)if(b.layerUpdates.size>0){const Ge=_v(Ue.width,Ue.height,b.format,b.type);for(const Ee of b.layerUpdates){const je=Ue.data.subarray(Ee*Ge/Ue.data.BYTES_PER_ELEMENT,(Ee+1)*Ge/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Ee,Ue.width,Ue.height,1,Ce,je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Ue.width,Ue.height,fe.depth,Ce,Ue.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Ne,Ue.width,Ue.height,fe.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?Y&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Ue.width,Ue.height,fe.depth,Ce,He,Ue.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,Ne,Ue.width,Ue.height,fe.depth,0,Ce,He,Ue.data)}else{Je&&it&&i.texStorage2D(a.TEXTURE_2D,Le,Ne,Ke[0].width,Ke[0].height);for(let _e=0,Oe=Ke.length;_e<Oe;_e++)Ue=Ke[_e],b.format!==sa?Ce!==null?Je?Y&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,Ne,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,Ce,He,Ue.data):i.texImage2D(a.TEXTURE_2D,_e,Ne,Ue.width,Ue.height,0,Ce,He,Ue.data)}else if(b.isDataArrayTexture)if(Je){if(it&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ne,fe.width,fe.height,fe.depth),Y)if(b.layerUpdates.size>0){const _e=_v(fe.width,fe.height,b.format,b.type);for(const Oe of b.layerUpdates){const Ge=fe.data.subarray(Oe*_e/fe.data.BYTES_PER_ELEMENT,(Oe+1)*_e/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Oe,fe.width,fe.height,1,Ce,He,Ge)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,He,fe.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Ce,He,fe.data);else if(b.isData3DTexture)Je?(it&&i.texStorage3D(a.TEXTURE_3D,Le,Ne,fe.width,fe.height,fe.depth),Y&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,He,fe.data)):i.texImage3D(a.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Ce,He,fe.data);else if(b.isFramebufferTexture){if(it)if(Je)i.texStorage2D(a.TEXTURE_2D,Le,Ne,fe.width,fe.height);else{let _e=fe.width,Oe=fe.height;for(let Ge=0;Ge<Le;Ge++)i.texImage2D(a.TEXTURE_2D,Ge,Ne,_e,Oe,0,Ce,He,null),_e>>=1,Oe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),fe.parentNode!==_e){_e.appendChild(fe),_.add(b),_e.onpaint=Oe=>{const Ge=Oe.changedElements;for(const Ee of _)Ge.includes(Ee.image)&&(Ee.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,fe);else{const Ge=a.RGBA,Ee=a.RGBA,je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ge,Ee,je,fe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Je&&it){const _e=St(Ke[0]);i.texStorage2D(a.TEXTURE_2D,Le,Ne,_e.width,_e.height)}for(let _e=0,Oe=Ke.length;_e<Oe;_e++)Ue=Ke[_e],Je?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Ce,He,Ue):i.texImage2D(a.TEXTURE_2D,_e,Ne,Ce,He,Ue);b.generateMipmaps=!1}else if(Je){if(it){const _e=St(fe);i.texStorage2D(a.TEXTURE_2D,Le,Ne,_e.width,_e.height)}Y&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,He,fe)}else i.texImage2D(a.TEXTURE_2D,0,Ne,Ce,He,fe);M(b)&&F(oe),Ie.__version=we.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function at(P,b,ee){if(b.image.length!==6)return;const oe=ie(P,b),pe=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+ee);const we=r.get(pe);if(pe.version!==we.__version||oe===!0){i.activeTexture(a.TEXTURE0+ee);const Ie=Ct.getPrimaries(Ct.workingColorSpace),le=b.colorSpace===ks?null:Ct.getPrimaries(b.colorSpace),fe=b.colorSpace===ks||Ie===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let Ee=0;Ee<6;Ee++)!Ce&&!He?Ne[Ee]=y(b.image[Ee],!0,o.maxCubemapSize):Ne[Ee]=He?b.image[Ee].image:b.image[Ee],Ne[Ee]=wt(b,Ne[Ee]);const Ue=Ne[0],Ke=c.convert(b.format,b.colorSpace),Je=c.convert(b.type),it=C(b.internalFormat,Ke,Je,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,Le=we.__version===void 0||oe===!0,_e=pe.dataReady;let Oe=U(b,Ue);Pe(a.TEXTURE_CUBE_MAP,b);let Ge;if(Ce){Y&&Le&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,it,Ue.width,Ue.height);for(let Ee=0;Ee<6;Ee++){Ge=Ne[Ee].mipmaps;for(let je=0;je<Ge.length;je++){const Fe=Ge[je];b.format!==sa?Ke!==null?Y?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,0,0,Fe.width,Fe.height,Ke,Fe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,it,Fe.width,Fe.height,0,Fe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,0,0,Fe.width,Fe.height,Ke,Je,Fe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,it,Fe.width,Fe.height,0,Ke,Je,Fe.data)}}}else{if(Ge=b.mipmaps,Y&&Le){Ge.length>0&&Oe++;const Ee=St(Ne[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,it,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(He){Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ne[Ee].width,Ne[Ee].height,Ke,Je,Ne[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,it,Ne[Ee].width,Ne[Ee].height,0,Ke,Je,Ne[Ee].data);for(let je=0;je<Ge.length;je++){const Dt=Ge[je].image[Ee].image;Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,0,0,Dt.width,Dt.height,Ke,Je,Dt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,it,Dt.width,Dt.height,0,Ke,Je,Dt.data)}}else{Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ke,Je,Ne[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,it,Ke,Je,Ne[Ee]);for(let je=0;je<Ge.length;je++){const Fe=Ge[je];Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,0,0,Ke,Je,Fe.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,it,Ke,Je,Fe.image[Ee])}}}M(b)&&F(a.TEXTURE_CUBE_MAP),we.__version=pe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function $e(P,b,ee,oe,pe,we){const Ie=c.convert(ee.format,ee.colorSpace),le=c.convert(ee.type),fe=C(ee.internalFormat,Ie,le,ee.normalized,ee.colorSpace),Ce=r.get(b),He=r.get(ee);if(He.__renderTarget=b,!Ce.__hasExternalTextures){const Ne=Math.max(1,b.width>>we),Ue=Math.max(1,b.height>>we);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?i.texImage3D(pe,we,fe,Ne,Ue,b.depth,0,Ie,le,null):i.texImage2D(pe,we,fe,Ne,Ue,0,Ie,le,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),tn(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,pe,He.__webglTexture,0,Gt(b)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,pe,He.__webglTexture,we),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Kt(P,b,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,P),b.depthBuffer){const oe=b.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,we=I(b.stencilBuffer,pe),Ie=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;tn(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Gt(b),we,b.width,b.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Gt(b),we,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,we,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,P)}else{const oe=b.textures;for(let pe=0;pe<oe.length;pe++){const we=oe[pe],Ie=c.convert(we.format,we.colorSpace),le=c.convert(we.type),fe=C(we.internalFormat,Ie,le,we.normalized,we.colorSpace);tn(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Gt(b),fe,b.width,b.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Gt(b),fe,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,fe,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function dt(P,b,ee){const oe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(b.depthTexture);if(pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),Pe(a.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),He=c.convert(b.depthTexture.type);let Ne;b.depthTexture.format===rs?Ne=a.DEPTH_COMPONENT24:b.depthTexture.format===Er&&(Ne=a.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,b.width,b.height,0,Ce,He,null)}}else ne(b.depthTexture,0);const we=pe.__webglTexture,Ie=Gt(b),le=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,fe=b.depthTexture.format===Er?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===rs)tn(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,le,we,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,fe,le,we,0);else if(b.depthTexture.format===Er)tn(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,le,we,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,fe,le,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(P){const b=r.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=oe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(ee)for(let oe=0;oe<6;oe++)dt(b.__webglFramebuffer[oe],P,oe);else{const oe=P.texture.mipmaps;oe&&oe.length>0?dt(b.__webglFramebuffer[0],P,0):dt(b.__webglFramebuffer,P,0)}else if(ee){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=a.createRenderbuffer(),Kt(b.__webglDepthbuffer[oe],P,!1);else{const pe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,we)}}else{const oe=P.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Kt(b.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,we)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function ft(P,b,ee){const oe=r.get(P);b!==void 0&&$e(oe.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&nt(P)}function ht(P){const b=P.texture,ee=r.get(P),oe=r.get(b);P.addEventListener("dispose",T);const pe=P.textures,we=P.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=b.version,u.memory.textures++),we){ee.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[le]=[];for(let fe=0;fe<b.mipmaps.length;fe++)ee.__webglFramebuffer[le][fe]=a.createFramebuffer()}else ee.__webglFramebuffer[le]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)ee.__webglFramebuffer[le]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let le=0,fe=pe.length;le<fe;le++){const Ce=r.get(pe[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&tn(P)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let le=0;le<pe.length;le++){const fe=pe[le];ee.__webglColorRenderbuffer[le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[le]);const Ce=c.convert(fe.format,fe.colorSpace),He=c.convert(fe.type),Ne=C(fe.internalFormat,Ce,He,fe.normalized,fe.colorSpace,P.isXRRenderTarget===!0),Ue=Gt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Ne,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,ee.__webglColorRenderbuffer[le])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),Kt(ee.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){i.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),Pe(a.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)$e(ee.__webglFramebuffer[le][fe],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else $e(ee.__webglFramebuffer[le],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);M(b)&&F(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let le=0,fe=pe.length;le<fe;le++){const Ce=pe[le],He=r.get(Ce);let Ne=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ne,He.__webglTexture),Pe(Ne,Ce),$e(ee.__webglFramebuffer,P,Ce,a.COLOR_ATTACHMENT0+le,Ne,0),M(Ce)&&F(Ne)}i.unbindTexture()}else{let le=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(le,oe.__webglTexture),Pe(le,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)$e(ee.__webglFramebuffer[fe],P,b,a.COLOR_ATTACHMENT0,le,fe);else $e(ee.__webglFramebuffer,P,b,a.COLOR_ATTACHMENT0,le,0);M(b)&&F(le),i.unbindTexture()}P.depthBuffer&&nt(P)}function Qt(P){const b=P.textures;for(let ee=0,oe=b.length;ee<oe;ee++){const pe=b[ee];if(M(pe)){const we=H(P),Ie=r.get(pe).__webglTexture;i.bindTexture(we,Ie),F(we),i.unbindTexture()}}}const Yt=[],Jt=[];function on(P){if(P.samples>0){if(tn(P)===!1){const b=P.textures,ee=P.width,oe=P.height;let pe=a.COLOR_BUFFER_BIT;const we=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=r.get(P),le=b.length>1;if(le)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const fe=P.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),le){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const He=r.get(b[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,pe,a.NEAREST),m===!0&&(Yt.length=0,Jt.length=0,Yt.push(a.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Yt.push(we),Jt.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Jt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const He=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,He,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Gt(P){return Math.min(o.maxSamples,P.samples)}function tn(P){const b=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(P){const b=u.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function wt(P,b){const ee=P.colorSpace,oe=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==Lu&&ee!==ks&&(Ct.getTransfer(ee)===Wt?(oe!==sa||pe!==Vi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",ee)),b}function St(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=me,this.getTextureUnits=he,this.setTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=ue,this.setTexture3D=Se,this.setTextureCube=O,this.rebindTextures=ft,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Y2(a,e){function i(r,o=ks){let c;const u=Ct.getTransfer(o);if(r===Vi)return a.UNSIGNED_BYTE;if(r===Up)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Op)return a.UNSIGNED_SHORT_5_5_5_1;if(r===bx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Tx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===yx)return a.BYTE;if(r===Ex)return a.SHORT;if(r===Gl)return a.UNSIGNED_SHORT;if(r===Np)return a.INT;if(r===Ra)return a.UNSIGNED_INT;if(r===ya)return a.FLOAT;if(r===ss)return a.HALF_FLOAT;if(r===Ax)return a.ALPHA;if(r===Rx)return a.RGB;if(r===sa)return a.RGBA;if(r===rs)return a.DEPTH_COMPONENT;if(r===Er)return a.DEPTH_STENCIL;if(r===Cx)return a.RED;if(r===Pp)return a.RED_INTEGER;if(r===Tr)return a.RG;if(r===Ip)return a.RG_INTEGER;if(r===Fp)return a.RGBA_INTEGER;if(r===Eu||r===bu||r===Tu||r===Au)if(u===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===Qh||r===Jh||r===$h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ep||r===tp||r===np||r===ip||r===ap||r===wu||r===sp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ep||r===tp)return u===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===np)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ip)return c.COMPRESSED_R11_EAC;if(r===ap)return c.COMPRESSED_SIGNED_R11_EAC;if(r===wu)return c.COMPRESSED_RG11_EAC;if(r===sp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===op)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===up)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_p)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sp||r===Mp||r===yp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Sp)return u===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ep||r===bp||r===Du||r===Tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ep)return c.COMPRESSED_RED_RGTC1_EXT;if(r===bp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Du)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const q2=`
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

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Bx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wi({vertexShader:q2,fragmentShader:j2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new Ws(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K2 extends Rr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,E=null;const R=typeof XRWebGLBinding<"u",y=new Z2,M={},F=i.getContextAttributes();let H=null,C=null;const I=[],U=[],B=new Ft;let T=null;const N=new Gi;N.viewport=new gn;const Z=new Gi;Z.viewport=new gn;const X=[N,Z],Q=new rb;let me=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=I[ie];return ye===void 0&&(ye=new sh,I[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=I[ie];return ye===void 0&&(ye=new sh,I[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=I[ie];return ye===void 0&&(ye=new sh,I[ie]=ye),ye.getHandSpace()};function J(ie){const ye=U.indexOf(ie.inputSource);if(ye===-1)return;const be=I[ye];be!==void 0&&(be.update(ie.inputSource,ie.frame,d||u),be.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",G);for(let ie=0;ie<I.length;ie++){const ye=U[ie];ye!==null&&(U[ie]=null,I[ie].disconnect(ye))}me=null,he=null,y.reset();for(const ie in M)delete M[ie];e.setRenderTarget(H),x=null,v=null,_=null,o=null,C=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(H=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",z),o.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,qe=null,at=null;F.depth&&(at=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=F.stencil?Er:rs,qe=F.stencil?Vl:Ra);const $e={colorFormat:i.RGBA8,depthFormat:at,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($e),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Ta(v.textureWidth,v.textureHeight,{format:sa,type:Vi,depthTexture:new No(v.textureWidth,v.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,be),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Ta(x.framebufferWidth,x.framebufferHeight,{format:sa,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ie){for(let ye=0;ye<ie.removed.length;ye++){const be=ie.removed[ye],qe=U.indexOf(be);qe>=0&&(U[qe]=null,I[qe].disconnect(be))}for(let ye=0;ye<ie.added.length;ye++){const be=ie.added[ye];let qe=U.indexOf(be);if(qe===-1){for(let $e=0;$e<I.length;$e++)if($e>=U.length){U.push(be),qe=$e;break}else if(U[$e]===null){U[$e]=be,qe=$e;break}if(qe===-1)break}const at=I[qe];at&&at.connect(be)}}const ne=new ae,ue=new ae;function Se(ie,ye,be){ne.setFromMatrixPosition(ye.matrixWorld),ue.setFromMatrixPosition(be.matrixWorld);const qe=ne.distanceTo(ue),at=ye.projectionMatrix.elements,$e=be.projectionMatrix.elements,Kt=at[14]/(at[10]-1),dt=at[14]/(at[10]+1),nt=(at[9]+1)/at[5],ft=(at[9]-1)/at[5],ht=(at[8]-1)/at[0],Qt=($e[8]+1)/$e[0],Yt=Kt*ht,Jt=Kt*Qt,on=qe/(-ht+Qt),Gt=on*-ht;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Gt),ie.translateZ(on),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),at[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const tn=Kt+on,$=dt+on,wt=Yt-Gt,St=Jt+(qe-Gt),P=nt*dt/$*tn,b=ft*dt/$*tn;ie.projectionMatrix.makePerspective(wt,St,P,b,tn,$),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function O(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ye=ie.near,be=ie.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(be=y.depthFar)),Q.near=Z.near=N.near=ye,Q.far=Z.far=N.far=be,(me!==Q.near||he!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),me=Q.near,he=Q.far),Q.layers.mask=ie.layers.mask|6,N.layers.mask=Q.layers.mask&-5,Z.layers.mask=Q.layers.mask&-3;const qe=ie.parent,at=Q.cameras;O(Q,qe);for(let $e=0;$e<at.length;$e++)O(at[$e],qe);at.length===2?Se(Q,N,Z):Q.projectionMatrix.copy(N.projectionMatrix),K(ie,Q,qe)};function K(ie,ye,be){be===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(be.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=kl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ie){m=ie,v!==null&&(v.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ie){return M[ie]};let ge=null;function Ae(ie,ye){if(g=ye.getViewerPose(d||u),E=ye,g!==null){const be=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let qe=!1;be.length!==Q.cameras.length&&(Q.cameras.length=0,qe=!0);for(let dt=0;dt<be.length;dt++){const nt=be[dt];let ft=null;if(x!==null)ft=x.getViewport(nt);else{const Qt=_.getViewSubImage(v,nt);ft=Qt.viewport,dt===0&&(e.setRenderTargetTextures(C,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(C))}let ht=X[dt];ht===void 0&&(ht=new Gi,ht.layers.enable(dt),ht.viewport=new gn,X[dt]=ht),ht.matrix.fromArray(nt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(nt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ft.x,ft.y,ft.width,ft.height),dt===0&&(Q.matrix.copy(ht.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),qe===!0&&Q.cameras.push(ht)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const dt=_.getDepthInformation(be[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(at&&at.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<be.length;dt++){const nt=be[dt].camera;if(nt){let ft=M[nt];ft||(ft=new Bx,M[nt]=ft);const ht=_.getCameraImage(nt);ft.sourceTexture=ht}}}}for(let be=0;be<I.length;be++){const qe=U[be],at=I[be];qe!==null&&at!==void 0&&at.update(qe,ye,d||u)}ge&&ge(ie,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Pe=new Vx;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}const Q2=new Sn,Zx=new ut;Zx.set(-1,0,0,0,1,0,0,0,1);function J2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,zx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,F,H,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),R(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,F,H):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===hi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===hi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const F=e.get(M),H=F.envMap,C=F.envMapRotation;H&&(y.envMap.value=H,y.envMapRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Zx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,F,H){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*F,y.scale.value=H*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,F){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===hi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function R(y,M){const F=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const U=I.program;r.uniformBlockBinding(C,U)}function d(C,I){let U=o[C.id];U===void 0&&(y(C),U=g(C),o[C.id]=U,C.addEventListener("dispose",F));const B=I.program;r.updateUBOMapping(C,B);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const I=_();C.__bindingPointIndex=I;const U=a.createBuffer(),B=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,U),U}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const I=o[C.id],U=C.uniforms,B=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let T=0,N=U.length;T<N;T++){const Z=U[T];if(Array.isArray(Z))for(let X=0,Q=Z.length;X<Q;X++)x(Z[X],T,X,B);else x(Z,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,I,U,B){if(R(C,I,U,B)===!0){const T=C.__offset,N=C.value;if(Array.isArray(N)){let Z=0;for(let X=0;X<N.length;X++){const Q=N[X],me=M(Q);E(Q,C.__data,Z),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(Z+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function E(C,I,U){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,U)}function R(C,I,U,B){const T=C.value,N=I+"_"+U;if(B[N]===void 0)return typeof T=="number"||typeof T=="boolean"?B[N]=T:ArrayBuffer.isView(T)?B[N]=T.slice():B[N]=T.clone(),!0;{const Z=B[N];if(typeof T=="number"||typeof T=="boolean"){if(Z!==T)return B[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Z.equals(T)===!1)return Z.copy(T),!0}}return!1}function y(C){const I=C.uniforms;let U=0;const B=16;for(let N=0,Z=I.length;N<Z;N++){const X=Array.isArray(I[N])?I[N]:[I[N]];for(let Q=0,me=X.length;Q<me;Q++){const he=X[Q],J=Array.isArray(he.value)?he.value:[he.value];for(let z=0,G=J.length;z<G;z++){const ne=J[z],ue=M(ne),Se=U%B,O=Se%ue.boundary,K=Se+O;U+=O,K!==0&&B-K<ue.storage&&(U+=B-K),he.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=U,U+=ue.storage}}}const T=U%B;return T>0&&(U+=B-T),C.__size=U,C.__cache={},this}function M(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),I}function F(C){const I=C.target;I.removeEventListener("dispose",F);const U=u.indexOf(I.__bindingPointIndex);u.splice(U,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function H(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:d,dispose:H}}const eR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xa=null;function tR(){return xa===null&&(xa=new XE(eR,16,16,Tr,ss),xa.name="DFG_LUT",xa.minFilter=un,xa.magFilter=un,xa.wrapS=aa,xa.wrapT=aa,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class nR{constructor(e={}){const{canvas:i=sE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Vi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=x,y=new Set([Fp,Ip,Pp]),M=new Set([Vi,Ra,Gl,Vl,Up,Op]),F=new Uint32Array(4),H=new Int32Array(4),C=new ae;let I=null,U=null;const B=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let X=!1,Q=null,me=null,he=null,J=null;this._outputColorSpace=Kn;let z=0,G=0,ne=null,ue=-1,Se=null;const O=new gn,K=new gn;let ge=null;const Ae=new Ht(0);let Pe=0,ie=i.width,ye=i.height,be=1,qe=null,at=null;const $e=new gn(0,0,ie,ye),Kt=new gn(0,0,ie,ye);let dt=!1;const nt=new Px;let ft=!1,ht=!1;const Qt=new Sn,Yt=new ae,Jt=new gn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function tn(){return ne===null?be:1}let $=r;function wt(A,L){return i.getContext(A,L)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",lt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),$===null){const L="webgl2";if($=wt(L,A),$===null)throw wt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let St,P,b,ee,oe,pe,we,Ie,le,fe,Ce,He,Ne,Ue,Ke,Je,it,Y,Le,_e,Oe,Ge,Ee;function je(){St=new tA($),St.init(),Oe=new Y2($,St),P=new qT($,St,e,Oe),b=new X2($,St),P.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),me=$.createFramebuffer(),he=$.createFramebuffer(),J=$.createFramebuffer(),ee=new aA($),oe=new D2,pe=new W2($,St,b,oe,P,Oe,ee),we=new eA(Z),Ie=new lb($),Ge=new WT($,Ie),le=new nA($,Ie,ee,Ge),fe=new rA($,le,Ie,Ge,ee),Y=new sA($,P,pe),Ke=new jT(oe),Ce=new w2(Z,we,St,P,Ge,Ke),He=new J2(Z,oe),Ne=new N2,Ue=new B2(St),it=new XT(Z,we,b,fe,E,m),Je=new k2(Z,fe,P),Ee=new $2($,ee,P,b),Le=new YT($,St,ee),_e=new iA($,St,ee),ee.programs=Ce.programs,Z.capabilities=P,Z.extensions=St,Z.properties=oe,Z.renderLists=Ne,Z.shadowMap=Je,Z.state=b,Z.info=ee}je(),R!==Vi&&(N=new lA(R,i.width,i.height,h,o,c));const Fe=new K2(Z,$);this.xr=Fe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(ie,ye,!1))},this.getSize=function(A){return A.set(ie,ye)},this.setSize=function(A,L,V=!0){if(Fe.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ye=L,i.width=Math.floor(A*be),i.height=Math.floor(L*be),V===!0&&(i.style.width=A+"px",i.style.height=L+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,L)},this.getDrawingBufferSize=function(A){return A.set(ie*be,ye*be).floor()},this.setDrawingBufferSize=function(A,L,V){ie=A,ye=L,be=V,i.width=Math.floor(A*V),i.height=Math.floor(L*V),this.setViewport(0,0,A,L)},this.setEffects=function(A){if(R===Vi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let L=0;L<A.length;L++)if(A[L].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,L,V,W){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,L,V,W),b.viewport(O.copy($e).multiplyScalar(be).round())},this.getScissor=function(A){return A.copy(Kt)},this.setScissor=function(A,L,V,W){A.isVector4?Kt.set(A.x,A.y,A.z,A.w):Kt.set(A,L,V,W),b.scissor(K.copy(Kt).multiplyScalar(be).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){b.setScissorTest(dt=A)},this.setOpaqueSort=function(A){qe=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,L=!0,V=!0){let W=0;if(A){let j=!1;if(ne!==null){const Te=ne.texture.format;j=y.has(Te)}if(j){const Te=ne.texture.type,De=M.has(Te),Re=it.getClearColor(),Be=it.getClearAlpha(),ze=Re.r,ke=Re.g,et=Re.b;De?(F[0]=ze,F[1]=ke,F[2]=et,F[3]=Be,$.clearBufferuiv($.COLOR,0,F)):(H[0]=ze,H[1]=ke,H[2]=et,H[3]=Be,$.clearBufferiv($.COLOR,0,H))}else W|=$.COLOR_BUFFER_BIT}L&&(W|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(W|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&$.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",lt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),it.dispose(),Ne.dispose(),Ue.dispose(),oe.dispose(),we.dispose(),fe.dispose(),Ge.dispose(),Ee.dispose(),Ce.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",fn),Fe.removeEventListener("sessionend",Mn),In.stop()};function Dt(A){A.preventDefault(),Z_("WebGLRenderer: Context Lost."),X=!0}function lt(){Z_("WebGLRenderer: Context Restored."),X=!1;const A=ee.autoReset,L=Je.enabled,V=Je.autoUpdate,W=Je.needsUpdate,j=Je.type;je(),ee.autoReset=A,Je.enabled=L,Je.autoUpdate=V,Je.needsUpdate=W,Je.type=j}function Qn(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const L=A.target;L.removeEventListener("dispose",Jn),Ca(L)}function Ca(A){qs(A),oe.remove(A)}function qs(A){const L=oe.get(A).programs;L!==void 0&&(L.forEach(function(V){Ce.releaseProgram(V)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,L,V,W,j,Te){L===null&&(L=on);const De=j.isMesh&&j.matrixWorld.determinantAffine()<0,Re=Zi(A,L,V,W,j);b.setMaterial(W,De);let Be=V.index,ze=1;if(W.wireframe===!0){if(Be=le.getWireframeAttribute(V),Be===void 0)return;ze=2}const ke=V.drawRange,et=V.attributes.position;let Ye=ke.start*ze,ot=(ke.start+ke.count)*ze;Te!==null&&(Ye=Math.max(Ye,Te.start*ze),ot=Math.min(ot,(Te.start+Te.count)*ze)),Be!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,Be.count)):et!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,et.count));const Vt=ot-Ye;if(Vt<0||Vt===1/0)return;Ge.setup(j,W,Re,V,Be);let Mt,At=Le;if(Be!==null&&(Mt=Ie.get(Be),At=_e,At.setIndex(Mt)),j.isMesh)W.wireframe===!0?(b.setLineWidth(W.wireframeLinewidth*tn()),At.setMode($.LINES)):At.setMode($.TRIANGLES);else if(j.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),b.setLineWidth(Lt*tn()),j.isLineSegments?At.setMode($.LINES):j.isLineLoop?At.setMode($.LINE_LOOP):At.setMode($.LINE_STRIP)}else j.isPoints?At.setMode($.POINTS):j.isSprite&&At.setMode($.TRIANGLES);if(j.isBatchedMesh)if(St.get("WEBGL_multi_draw"))At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Lt=j._multiDrawStarts,Xe=j._multiDrawCounts,wn=j._multiDrawCount,pt=Be?Ie.get(Be).bytesPerElement:1,hn=oe.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<wn;Fn++)hn.setValue($,"_gl_DrawID",Fn),At.render(Lt[Fn]/pt,Xe[Fn])}else if(j.isInstancedMesh)At.renderInstances(Ye,Vt,j.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xe=Math.min(V.instanceCount,Lt);At.renderInstances(Ye,Vt,Xe)}else At.render(Ye,Vt)};function ra(A,L,V){A.transparent===!0&&A.side===Ma&&A.forceSinglePass===!1?(A.side=hi,A.needsUpdate=!0,ji(A,L,V),A.side=as,A.needsUpdate=!0,ji(A,L,V),A.side=Ma):ji(A,L,V)}this.compile=function(A,L,V=null){V===null&&(V=A),U=Ue.get(V),U.init(L),T.push(U),V.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),A!==V&&A.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),U.setupLights();const W=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Re=Te[De];ra(Re,V,j),W.add(Re)}else ra(Te,V,j),W.add(Te)}),U=T.pop(),W},this.compileAsync=function(A,L,V=null){const W=this.compile(A,L,V);return new Promise(j=>{function Te(){if(W.forEach(function(De){oe.get(De).currentProgram.isReady()&&W.delete(De)}),W.size===0){j(A);return}setTimeout(Te,10)}St.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Yi=null;function ai(A){Yi&&Yi(A)}function fn(){In.stop()}function Mn(){In.start()}const In=new Vx;In.setAnimationLoop(ai),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Yi=A,Fe.setAnimationLoop(A),A===null?In.stop():In.start()},Fe.addEventListener("sessionstart",fn),Fe.addEventListener("sessionend",Mn),this.render=function(A,L){if(L!==void 0&&L.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Q!==null&&Q.renderStart(A,L);const V=Fe.enabled===!0&&Fe.isPresenting===!0,W=N!==null&&(ne===null||V)&&N.begin(Z,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(L),L=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,L,ne),U=Ue.get(A,T.length),U.init(L),U.state.textureUnits=pe.getTextureUnits(),T.push(U),Qt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),nt.setFromProjectionMatrix(Qt,Ea,L.reversedDepth),ht=this.localClippingEnabled,ft=Ke.init(this.clippingPlanes,ht),I=Ne.get(A,B.length),I.init(),B.push(I),Fe.enabled===!0&&Fe.isPresenting===!0){const De=Z.xr.getDepthSensingMesh();De!==null&&oa(De,L,-1/0,Z.sortObjects)}oa(A,L,0,Z.sortObjects),I.finish(),Z.sortObjects===!0&&I.sort(qe,at,L.reversedDepth),Gt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Gt&&it.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Ke.beginShadows();const j=U.state.shadowsArray;if(Je.render(j,A,L),ft===!0&&Ke.endShadows(),(W&&N.hasRenderPass())===!1){const De=I.opaque,Re=I.transmissive;if(U.setupLights(),L.isArrayCamera){const Be=L.cameras;if(Re.length>0)for(let ze=0,ke=Be.length;ze<ke;ze++){const et=Be[ze];js(De,Re,A,et)}Gt&&it.render(A);for(let ze=0,ke=Be.length;ze<ke;ze++){const et=Be[ze];wa(I,A,et,et.viewport)}}else Re.length>0&&js(De,Re,A,L),Gt&&it.render(A),wa(I,A,L)}ne!==null&&G===0&&(pe.updateMultisampleRenderTarget(ne),pe.updateRenderTargetMipmap(ne)),W&&N.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,L),Ge.resetDefaultState(),ue=-1,Se=null,T.pop(),T.length>0?(U=T[T.length-1],pe.setTextureUnits(U.state.textureUnits),ft===!0&&Ke.setGlobalState(Z.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,Q!==null&&Q.renderEnd()};function oa(A,L,V,W){if(A.visible===!1)return;if(A.layers.test(L.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(L);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){W&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qt);const De=fe.update(A),Re=A.material;Re.visible&&I.push(A,De,Re,V,Jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){const De=fe.update(A),Re=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Jt.copy(De.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Qt)),Array.isArray(Re)){const Be=De.groups;for(let ze=0,ke=Be.length;ze<ke;ze++){const et=Be[ze],Ye=Re[et.materialIndex];Ye&&Ye.visible&&I.push(A,De,Ye,V,Jt.z,et)}}else Re.visible&&I.push(A,De,Re,V,Jt.z,null)}}const Te=A.children;for(let De=0,Re=Te.length;De<Re;De++)oa(Te[De],L,V,W)}function wa(A,L,V,W){const{opaque:j,transmissive:Te,transparent:De}=A;U.setupLightsView(V),ft===!0&&Ke.setGlobalState(Z.clippingPlanes,V),W&&b.viewport(O.copy(W)),j.length>0&&la(j,L,V),Te.length>0&&la(Te,L,V),De.length>0&&la(De,L,V),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function js(A,L,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[W.id]===void 0){const Ye=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[W.id]=new Ta(1,1,{generateMipmaps:!0,type:Ye?ss:Vi,minFilter:Xs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Te=U.state.transmissionRenderTarget[W.id],De=W.viewport||O;Te.setSize(De.z*Z.transmissionResolutionScale,De.w*Z.transmissionResolutionScale);const Re=Z.getRenderTarget(),Be=Z.getActiveCubeFace(),ze=Z.getActiveMipmapLevel();Z.setRenderTarget(Te),Z.getClearColor(Ae),Pe=Z.getClearAlpha(),Pe<1&&Z.setClearColor(16777215,.5),Z.clear(),Gt&&it.render(V);const ke=Z.toneMapping;Z.toneMapping=ba;const et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),U.setupLightsView(W),ft===!0&&Ke.setGlobalState(Z.clippingPlanes,W),la(A,V,W),pe.updateMultisampleRenderTarget(Te),pe.updateRenderTargetMipmap(Te),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ot=0,Vt=L.length;ot<Vt;ot++){const Mt=L[ot],{object:At,geometry:Lt,material:Xe,group:wn}=Mt;if(Xe.side===Ma&&At.layers.test(W.layers)){const pt=Xe.side;Xe.side=hi,Xe.needsUpdate=!0,qi(At,V,W,Lt,Xe,wn),Xe.side=pt,Xe.needsUpdate=!0,Ye=!0}}Ye===!0&&(pe.updateMultisampleRenderTarget(Te),pe.updateRenderTargetMipmap(Te))}Z.setRenderTarget(Re,Be,ze),Z.setClearColor(Ae,Pe),et!==void 0&&(W.viewport=et),Z.toneMapping=ke}function la(A,L,V){const W=L.isScene===!0?L.overrideMaterial:null;for(let j=0,Te=A.length;j<Te;j++){const De=A[j],{object:Re,geometry:Be,group:ze}=De;let ke=De.material;ke.allowOverride===!0&&W!==null&&(ke=W),Re.layers.test(V.layers)&&qi(Re,L,V,Be,ke,ze)}}function qi(A,L,V,W,j,Te){A.onBeforeRender(Z,L,V,W,j,Te),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(Z,L,V,W,A,Te),j.transparent===!0&&j.side===Ma&&j.forceSinglePass===!1?(j.side=hi,j.needsUpdate=!0,Z.renderBufferDirect(V,L,W,j,A,Te),j.side=as,j.needsUpdate=!0,Z.renderBufferDirect(V,L,W,j,A,Te),j.side=Ma):Z.renderBufferDirect(V,L,W,j,A,Te),A.onAfterRender(Z,L,V,W,j,Te)}function ji(A,L,V){L.isScene!==!0&&(L=on);const W=oe.get(A),j=U.state.lights,Te=U.state.shadowsArray,De=j.state.version,Re=Ce.getParameters(A,j.state,Te,L,V,U.state.lightProbeGridArray),Be=Ce.getProgramCacheKey(Re);let ze=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?L.environment:null,W.fog=L.fog;const ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=we.get(A.envMap||W.environment,ke),W.envMapRotation=W.environment!==null&&A.envMap===null?L.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Jn),ze=new Map,W.programs=ze);let et=ze.get(Be);if(et!==void 0){if(W.currentProgram===et&&W.lightsStateVersion===De)return Ci(A,Re),et}else Re.uniforms=Ce.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,V,Re),A.onBeforeCompile(Re,Z),et=Ce.acquireProgram(Re,Be),ze.set(Be,et),W.uniforms=Re.uniforms;const Ye=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Ke.uniform),Ci(A,Re),W.needsLights=Da(A),W.lightsStateVersion=De,W.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=U.state.lightProbeGridArray.length>0,W.currentProgram=et,W.uniformsList=null,et}function Ri(A){if(A.uniformsList===null){const L=A.currentProgram.getUniforms();A.uniformsList=Ru.seqWithValue(L.seq,A.uniforms)}return A.uniformsList}function Ci(A,L){const V=oe.get(A);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function ca(A,L){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(L.matrixWorld);for(let V=0,W=A.length;V<W;V++){const j=A[V];if(j.texture!==null&&j.boundingBox.containsPoint(C))return j}return null}function Zi(A,L,V,W,j){L.isScene!==!0&&(L=on),pe.resetTextureUnits();const Te=L.fog,De=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?L.environment:null,Re=ne===null?Z.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ct.workingColorSpace,Be=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ze=we.get(W.envMap||De,Be),ke=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,et=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ye=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,Vt=!!V.morphAttributes.color;let Mt=ba;W.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=Z.toneMapping);const At=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=At!==void 0?At.length:0,Xe=oe.get(W),wn=U.state.lights;if(ft===!0&&(ht===!0||A!==Se)){const vt=A===Se&&W.id===ue;Ke.setState(W,A,vt)}let pt=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==wn.state.version||Xe.outputColorSpace!==Re||j.isBatchedMesh&&Xe.batching===!1||!j.isBatchedMesh&&Xe.batching===!0||j.isBatchedMesh&&Xe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Xe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Xe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Xe.instancingMorph===!1&&j.morphTexture!==null||Xe.envMap!==ze||W.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ke.numPlanes||Xe.numIntersection!==Ke.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==et||Xe.morphTargets!==Ye||Xe.morphNormals!==ot||Xe.morphColors!==Vt||Xe.toneMapping!==Mt||Xe.morphTargetsCount!==Lt||!!Xe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Xe.__version=W.version);let hn=Xe.currentProgram;pt===!0&&(hn=ji(W,L,j),Q&&W.isNodeMaterial&&Q.onUpdateProgram(W,hn,Xe));let Fn=!1,si=!1,Wn=!1;const Ut=hn.getUniforms(),$t=Xe.uniforms;if(b.useProgram(hn.program)&&(Fn=!0,si=!0,Wn=!0),W.id!==ue&&(ue=W.id,si=!0),Xe.needsLights){const vt=ca(U.state.lightProbeGridArray,j);Xe.lightProbeGrid!==vt&&(Xe.lightProbeGrid=vt,si=!0)}if(Fn||Se!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ut.setValue($,"projectionMatrix",A.projectionMatrix),Ut.setValue($,"viewMatrix",A.matrixWorldInverse);const wi=Ut.map.cameraPosition;wi!==void 0&&wi.setValue($,Yt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ut.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue($,"isOrthographic",A.isOrthographicCamera===!0),Se!==A&&(Se=A,si=!0,Wn=!0)}if(Xe.needsLights&&(wn.state.directionalShadowMap.length>0&&Ut.setValue($,"directionalShadowMap",wn.state.directionalShadowMap,pe),wn.state.spotShadowMap.length>0&&Ut.setValue($,"spotShadowMap",wn.state.spotShadowMap,pe),wn.state.pointShadowMap.length>0&&Ut.setValue($,"pointShadowMap",wn.state.pointShadowMap,pe)),j.isSkinnedMesh){Ut.setOptional($,j,"bindMatrix"),Ut.setOptional($,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Ut.setValue($,"boneTexture",vt.boneTexture,pe))}j.isBatchedMesh&&(Ut.setOptional($,j,"batchingTexture"),Ut.setValue($,"batchingTexture",j._matricesTexture,pe),Ut.setOptional($,j,"batchingIdTexture"),Ut.setValue($,"batchingIdTexture",j._indirectTexture,pe),Ut.setOptional($,j,"batchingColorTexture"),j._colorsTexture!==null&&Ut.setValue($,"batchingColorTexture",j._colorsTexture,pe));const Dn=V.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Y.update(j,V,hn),(si||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Ut.setValue($,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&L.environment!==null&&($t.envMapIntensity.value=L.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=tR()),si){if(Ut.setValue($,"toneMappingExposure",Z.toneMappingExposure),Xe.needsLights&&dn($t,Wn),Te&&W.fog===!0&&He.refreshFogUniforms($t,Te),He.refreshMaterialUniforms($t,W,be,ye,U.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){const vt=Xe.lightProbeGrid;$t.probesSH.value=vt.texture,$t.probesMin.value.copy(vt.boundingBox.min),$t.probesMax.value.copy(vt.boundingBox.max),$t.probesResolution.value.copy(vt.resolution)}Ru.upload($,Ri(Xe),$t,pe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ru.upload($,Ri(Xe),$t,pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue($,"center",j.center),Ut.setValue($,"modelViewMatrix",j.modelViewMatrix),Ut.setValue($,"normalMatrix",j.normalMatrix),Ut.setValue($,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let wi=0,ua=vt.length;wi<ua;wi++){const La=vt[wi];Ee.update(La,hn),Ee.bind(La,hn)}}return hn}function dn(A,L){A.ambientLightColor.needsUpdate=L,A.lightProbe.needsUpdate=L,A.directionalLights.needsUpdate=L,A.directionalLightShadows.needsUpdate=L,A.pointLights.needsUpdate=L,A.pointLightShadows.needsUpdate=L,A.spotLights.needsUpdate=L,A.spotLightShadows.needsUpdate=L,A.rectAreaLights.needsUpdate=L,A.hemisphereLights.needsUpdate=L}function Da(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,L,V){const W=oe.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=L,oe.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,L){const V=oe.get(A);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(A,L=0,V=0){ne=A,z=L,G=V;let W=null,j=!1,Te=!1;if(A){const Re=oe.get(A);if(Re.__useDefaultFramebuffer!==void 0){b.bindFramebuffer($.FRAMEBUFFER,Re.__webglFramebuffer),O.copy(A.viewport),K.copy(A.scissor),ge=A.scissorTest,b.viewport(O),b.scissor(K),b.setScissorTest(ge),ue=-1;return}else if(Re.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Re.__hasExternalTextures)pe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&oe.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ze=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[L])?W=ze[L][V]:W=ze[L],j=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?W=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[V]:W=ze,O.copy(A.viewport),K.copy(A.scissor),ge=A.scissorTest}else O.copy($e).multiplyScalar(be).floor(),K.copy(Kt).multiplyScalar(be).floor(),ge=dt;if(V!==0&&(W=me),b.bindFramebuffer($.FRAMEBUFFER,W)&&b.drawBuffers(A,W),b.viewport(O),b.scissor(K),b.setScissorTest(ge),j){const Re=oe.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+L,Re.__webglTexture,V)}else if(Te){const Re=L;for(let Be=0;Be<A.textures.length;Be++){const ze=oe.get(A.textures[Be]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Be,ze.__webglTexture,V,Re)}}else if(A!==null&&V!==0){const Re=oe.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Re.__webglTexture,V)}ue=-1},this.readRenderTargetPixels=function(A,L,V,W,j,Te,De,Re=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){b.bindFramebuffer($.FRAMEBUFFER,Be);try{const ze=A.textures[Re],ke=ze.format,et=ze.type;if(A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Re),!P.textureFormatReadable(ke)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(et)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=A.width-W&&V>=0&&V<=A.height-j&&$.readPixels(L,V,W,j,Oe.convert(ke),Oe.convert(et),Te)}finally{const ze=ne!==null?oe.get(ne).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,L,V,W,j,Te,De,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(L>=0&&L<=A.width-W&&V>=0&&V<=A.height-j){b.bindFramebuffer($.FRAMEBUFFER,Be);const ze=A.textures[Re],ke=ze.format,et=ze.type;if(A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Re),!P.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ye),$.bufferData($.PIXEL_PACK_BUFFER,Te.byteLength,$.STREAM_READ),$.readPixels(L,V,W,j,Oe.convert(ke),Oe.convert(et),0);const ot=ne!==null?oe.get(ne).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,ot);const Vt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await rE($,Vt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ye),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Te),$.deleteBuffer(Ye),$.deleteSync(Vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,L=null,V=0){const W=Math.pow(2,-V),j=Math.floor(A.image.width*W),Te=Math.floor(A.image.height*W),De=L!==null?L.x:0,Re=L!==null?L.y:0;pe.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,V,0,0,De,Re,j,Te),b.unbindTexture()},this.copyTextureToTexture=function(A,L,V=null,W=null,j=0,Te=0){let De,Re,Be,ze,ke,et,Ye,ot,Vt;const Mt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(V!==null)De=V.max.x-V.min.x,Re=V.max.y-V.min.y,Be=V.isBox3?V.max.z-V.min.z:1,ze=V.min.x,ke=V.min.y,et=V.isBox3?V.min.z:0;else{const $t=Math.pow(2,-j);De=Math.floor(Mt.width*$t),Re=Math.floor(Mt.height*$t),A.isDataArrayTexture?Be=Mt.depth:A.isData3DTexture?Be=Math.floor(Mt.depth*$t):Be=1,ze=0,ke=0,et=0}W!==null?(Ye=W.x,ot=W.y,Vt=W.z):(Ye=0,ot=0,Vt=0);const At=Oe.convert(L.format),Lt=Oe.convert(L.type);let Xe;L.isData3DTexture?(pe.setTexture3D(L,0),Xe=$.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(pe.setTexture2DArray(L,0),Xe=$.TEXTURE_2D_ARRAY):(pe.setTexture2D(L,0),Xe=$.TEXTURE_2D),b.activeTexture($.TEXTURE0),b.pixelStorei($.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei($.UNPACK_ALIGNMENT,L.unpackAlignment);const wn=b.getParameter($.UNPACK_ROW_LENGTH),pt=b.getParameter($.UNPACK_IMAGE_HEIGHT),hn=b.getParameter($.UNPACK_SKIP_PIXELS),Fn=b.getParameter($.UNPACK_SKIP_ROWS),si=b.getParameter($.UNPACK_SKIP_IMAGES);b.pixelStorei($.UNPACK_ROW_LENGTH,Mt.width),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,Mt.height),b.pixelStorei($.UNPACK_SKIP_PIXELS,ze),b.pixelStorei($.UNPACK_SKIP_ROWS,ke),b.pixelStorei($.UNPACK_SKIP_IMAGES,et);const Wn=A.isDataArrayTexture||A.isData3DTexture,Ut=L.isDataArrayTexture||L.isData3DTexture;if(A.isDepthTexture){const $t=oe.get(A),Dn=oe.get(L),vt=oe.get($t.__renderTarget),wi=oe.get(Dn.__renderTarget);b.bindFramebuffer($.READ_FRAMEBUFFER,vt.__webglFramebuffer),b.bindFramebuffer($.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let ua=0;ua<Be;ua++)Wn&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,j,et+ua),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(L).__webglTexture,Te,Vt+ua)),$.blitFramebuffer(ze,ke,De,Re,Ye,ot,De,Re,$.DEPTH_BUFFER_BIT,$.NEAREST);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||oe.has(A)){const $t=oe.get(A),Dn=oe.get(L);b.bindFramebuffer($.READ_FRAMEBUFFER,he),b.bindFramebuffer($.DRAW_FRAMEBUFFER,J);for(let vt=0;vt<Be;vt++)Wn?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$t.__webglTexture,j,et+vt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,$t.__webglTexture,j),Ut?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Dn.__webglTexture,Te,Vt+vt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Dn.__webglTexture,Te),j!==0?$.blitFramebuffer(ze,ke,De,Re,Ye,ot,De,Re,$.COLOR_BUFFER_BIT,$.NEAREST):Ut?$.copyTexSubImage3D(Xe,Te,Ye,ot,Vt+vt,ze,ke,De,Re):$.copyTexSubImage2D(Xe,Te,Ye,ot,ze,ke,De,Re);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ut?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(Xe,Te,Ye,ot,Vt,De,Re,Be,At,Lt,Mt.data):L.isCompressedArrayTexture?$.compressedTexSubImage3D(Xe,Te,Ye,ot,Vt,De,Re,Be,At,Mt.data):$.texSubImage3D(Xe,Te,Ye,ot,Vt,De,Re,Be,At,Lt,Mt):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Te,Ye,ot,De,Re,At,Lt,Mt.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Te,Ye,ot,Mt.width,Mt.height,At,Mt.data):$.texSubImage2D($.TEXTURE_2D,Te,Ye,ot,De,Re,At,Lt,Mt);b.pixelStorei($.UNPACK_ROW_LENGTH,wn),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei($.UNPACK_SKIP_PIXELS,hn),b.pixelStorei($.UNPACK_SKIP_ROWS,Fn),b.pixelStorei($.UNPACK_SKIP_IMAGES,si),Te===0&&L.generateMipmaps&&$.generateMipmap(Xe),b.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){z=0,G=0,ne=null,b.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const iR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",aR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",sR="/assets/CXLMediumItalic-DYSp-DoC.otf",rR=4,oR=5,ts={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Kx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function lR(a){return Kx(a)}function cR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function uR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*oR/rR);return{W:o,H:c}}function Qx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function rn(a,e,i,r,o,c,u){Qx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function _n(a,e,i,r,o,c,u,h){Qx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function ku(a,e,i,r,o,c){rn(a,e,i,r,o,c,"#0c0e12"),_n(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Xu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return _n(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function Jx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function fR(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function dR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;rn(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),_n(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function hR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;rn(a,e,u,r,h,8*o,"#050508"),_n(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),rn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function pR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;_n(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return rn(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),_n(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function Xp(a,e,i,r,o){const c=44*o;rn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),_n(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return rn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${ts.role} · ${ts.didShort}`,e+8*o+u+8*o,i+32*o),c}function mR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),rn(a,e,i,r,c,h,m),_n(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),_n(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${ts.role} · ${ts.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(ts.didShort,e+u,d);const g=28*o;return rn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),_n(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function gR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),rn(a,e,i,r,c,h,m),_n(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function _R(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);rn(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);rn(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function vR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);rn(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),_n(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function xR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;rn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),_n(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return rn(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),rn(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const Il=2,Co={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Gv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);rn(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),_n(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function SR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Co.riskScore},{label:"Rep",value:Co.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",R=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";rn(a,d,i,x,h,4*o,E),_n(a,d,i,x,h,4*o,R,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function MR(a,e,i,r,o){const c=Co.receipts,u=22*o,h=14*o+c.length*u;return rn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),_n(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function yR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),rn(a,e,i,r,c,h,m),_n(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),_n(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return rn(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),_n(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function ER(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return rn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),_n(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function bR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%Il+Il)%Il,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];ku(a,e,i,r,o,m);let _=Xu(a,e,i,r,h,g.header,u);_=fR(a,e,_,r,h,g.segment,d+1,Il,u);const v=i+o-h;if(d===0){_+=Xp(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=SR(a,e+h,_,r-h*2,u)+8*u);const E=[["SHARPE",Co.sharpe],["ROI",Co.roi],["RISK",Co.riskScore]];_+36*u<=v&&(_+=Gv(a,e+h,_,r-h*2,E,u)+8*u),_+70*u<=v&&MR(a,e+h,_,r-h*2,u);return}_+=yR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=ER(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Gv(a,e+h,_,r-h*2,x,u)}function TR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;ku(a,e,i,r,o,m);let d=Xu(a,e,i,r,h,"COPY TRADE",u);d=Jx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const E=6*u,R=r-h*2;let y=(R-E)/2,M=Math.min(y*190/316,y*.58);const F=Math.max(64*u,v-d-28*u);M>F&&(y=y*(F/M),M=F);const H=u*(y/((R-E)/2)),C=e+h+(R-(y*2+E))/2;gR(a,C,d,y,H),mR(a,C+y+E,d,y,H),d+=M+10*u;const I=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],U=5*u,B=(r-h*2-U*2)/3,T=32*u;d+T<=v&&(I.forEach(([N,Z],X)=>{const Q=e+h+X*(B+U);rn(a,Q,d,B,T,6*u,"rgba(255,255,255,0.04)"),_n(a,Q,d,B,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,Q+B/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(Z,Q+B/2,d+24*u)}),a.textAlign="left")}else d+=Xp(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=_R(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&vR(a,e+h,d,r-h*2,u);xR(a,e+h,_,r-h*2,u)}const AR=2,RR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function CR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function wR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;ku(a,e,i,r,o,h);let m=Xu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,E=e+r-u-x,R=e+u+g+v+_/2,y=RR,M=4*c;y.forEach((F,H)=>{if(m>=d-8*c)return;const C=H===0,I=H===y.length-1,U=CR(F.status),B=8*c,T=6*c,N=7*c,Z=8*c,X=F.showActions?22*c:0,Q=F.showActions?5*c:0,he=Math.max(B+2*c+T,N+4*c+Z)+Q+X+M;if(m+Math.min(he,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${B}px "DM Mono", ui-monospace, monospace`,a.fillText(F.agent,e+u+g,m+B),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(F.timeLabel,e+u+g,m+B+2*c+T),a.textAlign="left",I||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(R,m+6*c),a.lineTo(R,m+he),a.stroke());const J=2.4*c;a.beginPath(),a.arc(R,m+5*c,J,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(R,m+5*c,J+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const z=4*c,G=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const ne=F.statusLabel.toUpperCase(),ue=a.measureText(ne).width+z*2,Se=N+G*2;rn(a,x,m,ue,Se,3*c,U.bg),a.fillStyle=U.fg,a.fillText(ne,x+z,m+N+G*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${Z}px "DM Mono", ui-monospace, monospace`;const O=m+Se+3*c+Z;let K=F.action;if(F.pnl){const ge=`${F.action} · `;a.fillText(ge,x,O);const Ae=a.measureText(ge).width;a.fillStyle=F.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${Z}px "DM Mono", ui-monospace, monospace`,a.fillText(F.pnl.text,x+Ae,O)}else{for(;K.length>8&&a.measureText(K).width>E;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,O)}if(F.showActions&&m+Se+3*c+Z+Q+X<=d){const ge=m+Se+3*c+Z+Q,Ae=(E-5*c)/2;_n(a,x,ge,Ae,X,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Ae/2,ge+X*.68),rn(a,x+Ae+5*c,ge,Ae,X,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Ae+5*c+Ae/2,ge+X*.68),a.textAlign="left"}m+=he})}function DR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;ku(a,e,i,r,o,h);let m=Xu(a,e,i,r,u,"FUND BUCKET",c);m=Jx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Xp(a,e+u,m,r-u*2,c)+8*c,m+=dR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=hR(a,e+u,m,r-u*2,c)+6*c),pR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function $x(a,e,i,r,o,c,u=0){switch(e){case"discover":bR(a,i,r,o,c,u);break;case"copy":TR(a,i,r,o,c,u);break;case"supervise":wR(a,i,r,o,c);break;case"isolate":DR(a,i,r,o,c);break}}function LR(a,e,i,r,o=0){a.clearRect(0,0,i,r),$x(a,e,0,0,i,r,o)}function NR(a,e,i,r,o,c=.8){const{W:u,H:h}=uR(i,r),m=document.createElement("canvas");m.width=u,m.height=h;const d=m.getContext("2d"),g=Math.min(1,Math.max(0,c)),_=d.createLinearGradient(0,0,0,h);_.addColorStop(0,`rgba(8, 10, 14, ${g})`),_.addColorStop(.55,`rgba(5, 7, 13, ${g})`),_.addColorStop(1,`rgba(3, 4, 6, ${g})`),d.fillStyle=_,d.fillRect(0,0,u,h);const v=Math.round(22*i),x=Math.round(.05*h),E=Math.round(.045*h),R=u-v*2;let y=x;const M=Math.min(34*i,u*.095);d.fillStyle="rgba(255,255,255,0.94)",d.font=`normal 400 ${M}px ${o}`,d.textBaseline="alphabetic",d.shadowColor="rgba(10, 14, 23, 0.55)",d.shadowBlur=Math.max(8,12*i),d.shadowOffsetX=0,d.shadowOffsetY=Math.max(1,1.5*i),d.fillText(a.verb,v,y+M*.85),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0,y+=Math.round(.09*h);const F=Math.min(13*i,u*.036);d.fillStyle="rgba(255,255,255,0.94)",d.font=`400 ${F}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const H=cR(d,a.description,R),C=y+F;d.shadowColor="rgba(10, 14, 23, 0.45)",d.shadowBlur=Math.max(4,6*i),d.shadowOffsetY=Math.max(.5,1*i),d.fillText(H[0]??a.description,v,C),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0,y=Math.round(C+20*i);const I=v,U=y,B=R,T=Math.max(80*i,h-y-E);$x(d,lR(e),I,U,B,T);const N=new Fx(m);return N.colorSpace=Kn,N.minFilter=Xs,N.generateMipmaps=!0,N}const Cp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],UR="0 0 58 35",OR=58,PR=35;function IR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,OR+r*2,PR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Cp.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const FR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Wp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=FR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(IR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Vv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",BR=50,Cu=500,Lh=100,kv=168;function zR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function HR(){return Vv[Math.floor(Math.random()*Vv.length)]??"?"}function Xv(a){return Array.from(a).map(e=>{const i=Math.random()*(Cu-Lh),r=Lh+Math.random()*(Cu-i-Lh),o=Math.min(Cu,i+r);return{original:e,start:i,end:o}})}function GR(a){return Math.min(1,Math.max(0,a))}function VR({text:a,className:e,scrollerRef:i}){const r=Ve.useRef(null),o=Ve.useRef(Xv(a)),c=zR();return Ve.useEffect(()=>{o.current=Xv(a)},[a]),Ve.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(Cu,Math.max(0,x-BR));if(E===d&&d>=0)return;d=E;const R=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=R.length>0;for(let F=0;F<R.length;F++){const H=R[F],C=y[F];if(!C)continue;const I=Math.max(.001,H.end-H.start),U=GR((E-H.start)/I);if(U<1&&(M=!1),U<=0){C.textContent=H.original===" "?" ":H.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(U>=1){C.textContent=H.original===" "?" ":H.original,C.style.transform=`translateY(${-kv}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=HR(),C.style.transform=`translateY(${-U*kv}px)`,C.style.opacity=String(1-U),C.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const kR="Enter the agentic economy →",Fl=Fh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),cn=Fl.length,es=2.95,Hl=6.9,Iu=32,eS=4,tS=5,wp=2.05,XR=1,WR=es*.55,nS=.28,iS=.35,YR=nS+iS,Nh=.85,Wv=300,qR=35,Yv=qR/60*1e3,jR=.1;function aS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const ZR=1.35,KR=.72,QR=.62,JR=.2,$R=14,e3=.42,t3=128,n3=12,i3=.002,a3=.0011,qv=.12,s3=.88,sS=4,r3=32,o3=40,l3=sS-1,jv=50,c3=-10,Zv=28,u3="/Morm_IntroAnimation_1.mp4",f3=10,rS=[0,2,4,6,8,10],d3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function h3(a,e){const i=d3[a]??{in:2,out:2},r=zt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function p3(a,e,i,r,o){const c=Math.max(1,cn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],h=rS,m=u.length-1;if(a<=u[0])return h[0];if(a>=u[m])return h[m];let d=0;for(;d<m-1&&a>=u[d+1];)d+=1;const g=u[d],_=u[d+1],v=_>g?zt.clamp((a-g)/(_-g),0,1):1;return zt.lerp(h[d],h[d+1],h3(d,v))}function Kv(a,e){const i=Number.isFinite(a.duration)&&a.duration>0?a.duration:f3,r=zt.clamp(e,0,Math.max(0,i-.04));if(!(Math.abs(a.currentTime-r)<1/48))try{a.currentTime=r}catch{}}const m3=`
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
`,x3='"Reckk Heading", Georgia, "Times New Roman", serif',oS="Morpheum Wordmark",Xl=`"${oS}"`,S3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function M3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(oS,`url(${sR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Xl}`);const e=document.fonts.check(`normal 152px ${Xl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function y3(){if(!(typeof document>"u"||!document.fonts))try{await M3();const a=new FontFace("Reckk Title",`url(${aR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${iR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Xl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const _r="flow-intro-hide-chrome",E3=72,b3=120,Uh=80;function T3(a){return a<=E3}const A3=280;function xr(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Oh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;xr(e)}function yr(a){const e=zt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function bo(a){const e=Math.max(1,a),i=Math.max(1,cn*e*XR),r=Math.max(1,i/Math.max(1,cn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const R3=900,C3=1100,w3=1300,D3=1500,L3=6,N3=36,U3=50,O3=.5,P3=1024,I3=.75,lS=.8;function Yp(a){return a>=P3}function F3(a){return Yp(a)?R3:C3}function B3(a){return Yp(a)?w3:D3}function cS(a){return Math.max(2,Math.max(1,a)*.004)}function z3(a,e){const{cardPx:i,titlePx:r}=bo(e),o=Math.max(1,cn-1),c=zt.clamp(Math.round(a),0,cn-1);return r+c/o*i}function H3(a){return a.offsetTop}function G3(a,e,i){return a.offsetTop+z3(e,i)}function Ph(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function V3(a){const e=cn-1;return zt.clamp(Math.round(a),0,e)}function Ih(a,e,i,r){const o=cS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:V3(i)}}function k3(a,e,i,r,o,c,u){if(o)return!1;const h=i/Math.max(1,cn-1),m=r+h*O3;return!(a>m||c<u*.5)}function qp(a,e){const i=a/Math.max(1,e),r=Iu*Math.PI/180,o=2*Hl*Math.tan(r/2),c=o*i,u=wp*eS/tS,h=.992,m=h*o/wp,d=h*c/u;return zt.clamp(Math.min(m,d),.52,2.35)}function X3(a,e,i=lS){const r=qp(a,e);return(Yp(a)?r*I3:r)*i}function Qv(a,e,i){const r=aS(a),o=qp(a,e),c=a/Math.max(1,e),u=Iu*Math.PI/180,m=2*Hl*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function W3(a,e){const i=a/Math.max(1,cn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function Y3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function q3(a,e){const i=zt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=yr(zt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function j3(a,e,i,r=0){const o=cn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=zt.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=yr(zt.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function Z3(a){return new Wi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:jR}},vertexShader:_3,fragmentShader:v3,transparent:!0,depthWrite:!0,depthTest:!0,side:as})}function K3(a,e){return a>1.5&&a<e-.5}function Q3(a){return zt.clamp(540/Math.max(a,340),.2,.55)}function J3(a,e,i){const r=[],o=$R;for(let c=0;c<o;c++){const u=zt.clamp(a-c/Math.max(1,o-1)*e3,-.08,1.08),h=Math.sin(u*Math.PI*2*ZR)*QR*i,m=Math.sin(u*Math.PI*2*KR)*JR,d=qv+c/Math.max(1,o-1)*(s3-qv),g=e-d;r.push(new ae(h,m,g))}return r}function $3(a,e,i,r){const o=a.length;if(o<2)return new Xi;const c=[],u=[],h=[],m=[],d=new ae,g=new ae,_=new ae,v=new ae(0,1,0),x=e+1;for(let R=0;R<o;R++){R===0?d.subVectors(a[1],a[0]).normalize():R===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[R+1],a[R-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:R/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let F=0;F<=e;F++){const H=F/e*Math.PI*2,C=Math.cos(H),I=Math.sin(H),U=a[R];c.push(U.x+(C*g.x+I*_.x)*M,U.y+(C*g.y+I*_.y)*M,U.z+(C*g.z+I*_.z)*M),u.push(C*g.x+I*_.x,C*g.y+I*_.y,C*g.z+I*_.z),h.push(o===1?0:R/(o-1),F/e)}}for(let R=0;R<o-1;R++)for(let y=0;y<e;y++){const M=R*x+y,F=M+1,H=M+x,C=H+1;m.push(M,H,F,F,H,C)}const E=new Xi;return E.setAttribute("position",new ki(c,3)),E.setAttribute("normal",new ki(u,3)),E.setAttribute("uv",new ki(h,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Jv(a,e,i,r,o){const c={verb:a.verb,description:a.description};return NR(c,e,i,r,x3,o)}function $v(a,e){const i=aS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${Xl}`};g();const _=I=>{h.font=`normal ${I*r}px ${Xl}`;const U=h.measureText(m),B=Math.abs(U.actualBoundingBoxLeft??0),T=Math.abs(U.actualBoundingBoxRight??U.width),N=Math.abs(U.actualBoundingBoxAscent??I*r*.8),Z=Math.abs(U.actualBoundingBoxDescent??I*r*.25);return{left:B,right:T,width:B+T,ascent:N,descent:Z}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,E=40*r+v,R=I=>{const U=_(I);return U.width+x*2<=o&&U.ascent+U.descent+E*2<=c};for(;!R(d)&&d>64;)d-=2;for(;R(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,F=c/2+(y.ascent-y.descent)/2,H=h.createLinearGradient(M-y.left,F-y.ascent,M+y.right,F+y.descent);S3.forEach(I=>H.addColorStop(I.t,I.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.shadowColor="rgba(10, 14, 23, 0.55)",h.shadowBlur=Math.max(10,16*r),h.shadowOffsetX=0,h.shadowOffsetY=Math.max(1,2*r),h.strokeText(m,M,F),h.fillStyle=H,h.fillText(m,M,F),h.shadowColor="transparent",h.shadowBlur=0,h.shadowOffsetY=0;const C=new Fx(u);return C.colorSpace=Kn,C.minFilter=un,C.magFilter=un,C.generateMipmaps=!1,C}function ex(a,e){a.generateMipmaps=!1,a.minFilter=un,a.magFilter=un,a.wrapS=aa,a.wrapT=aa;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function eC({cardAlpha:a=.8,cardSize:e=lS}){const i=Ve.useRef(null),r=Ve.useRef(null),o=Ve.useRef(null),c=Ve.useRef(null),u=Ve.useRef(null),h=Ve.useRef(!1),m=Ve.useRef(!1),d=Ve.useRef(null),g=Ve.useRef(a);g.current=Math.min(1,Math.max(0,a));const _=Ve.useRef(e);_.current=Math.max(.1,e);const v=Ve.useCallback(()=>{var E;if(h.current)return;h.current=!0,m.current=!1,(E=d.current)==null||E.call(d);const x=r.current;x==null||x.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(_r),Oh(),requestAnimationFrame(()=>{Oh(),requestAnimationFrame(()=>{Oh(),window.setTimeout(()=>{h.current=!1},100)})})},A3)},[]);return Ve.useLayoutEffect(()=>{const x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,E=window.location.hash.replace(/^#/,"");return x||E!==""&&E!=="flow"&&E!=="hero"||document.body.classList.add(_r),()=>{document.body.classList.remove(_r)}},[]),Ve.useEffect(()=>{const x=E=>{if(E.key!=="Escape")return;const R=document.getElementById("hero");R&&R.getBoundingClientRect().top>8&&(E.preventDefault(),v())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[v]),Ve.useEffect(()=>{const x=window.location.hash.replace(/^#/,"");x&&x!=="flow"&&x!=="hero"&&requestAnimationFrame(()=>{var E;(E=document.getElementById(x))==null||E.scrollIntoView({block:"start"})})},[]),Ve.useEffect(()=>{const x=o.current,E=i.current;if(!x||!E)return;const R=x,y=E;let M=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(_r);const C=u.current;C&&(C.style.height="0px");return}let H;return(async()=>{if(await y3(),M)return;const C=Math.min(window.devicePixelRatio,2),I=Math.max(320,R.clientWidth||window.innerWidth),U=Math.max(1,R.clientHeight||window.innerHeight),B=[],T=[],N=[],Z=new Float64Array(cn).fill(-1);Fl.forEach((L,V)=>{const W=cn-1-V,j=Fl[W],Te=Jv(j,W,C,I,g.current);N.push(Te);const De=Z3(Te);B.push(De);const Re=wp,Be=Re*eS/tS,ze=new Ti(new Ws(Be,Re),De);ze.position.set(0,0,-V*es),ze.renderOrder=V,T.push(ze)});const X=$v(C,I),Q=new Pu({map:X,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Ma}),me=X.image.height/X.image.width,{w:he,h:J}=Qv(I,U,me),z=new Ti(new Ws(he,J),Q);z.position.set(0,0,-(cn-1)*es+.05),z.renderOrder=o3;const G=new FE,ne=new Gi(Iu,1,.08,120),ue=new nR({antialias:!0,alpha:!1,powerPreference:"high-performance"});ue.setPixelRatio(Math.min(window.devicePixelRatio,2)),ue.outputColorSpace=Kn,ue.sortObjects=!0,R.appendChild(ue.domElement),ex(X,ue);const Se=new Ol;T.forEach(L=>Se.add(L)),Se.add(z),G.add(Se);const O=new Wi({uniforms:{uStrength:{value:0}},vertexShader:m3,fragmentShader:g3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Bh}),K=new Ti(new Xi,O);K.frustumCulled=!1,K.renderOrder=jv,K.visible=!1,G.add(K);let ge=null,Ae=null,Pe=null;const ie=c.current;if(ie){ie.muted=!0,ie.defaultMuted=!0,ie.playsInline=!0,ie.preload="auto",ie.pause(),ge=new jE(ie),ge.colorSpace=Kn,ge.minFilter=un,ge.magFilter=un,ge.generateMipmaps=!1,Ae=new Pu({map:ge,depthTest:!1,depthWrite:!1,toneMapped:!1}),Pe=new Ti(new Ws(1,1),Ae),Pe.frustumCulled=!1,Pe.renderOrder=c3,Pe.position.set(0,0,-Zv),ne.add(Pe),G.add(ne);const L=()=>{Kv(ie,rS[0]),ge.needsUpdate=!0};ie.readyState>=1?L():ie.addEventListener("loadedmetadata",L,{once:!0})}function ye(){if(!Pe)return;const L=Zv,V=Iu*Math.PI/180,W=2*Math.tan(V/2)*L,j=W*ne.aspect,Te=(ie==null?void 0:ie.videoWidth)||1280,De=(ie==null?void 0:ie.videoHeight)||720,Re=Te/Math.max(1,De);j/Math.max(1e-6,W)>Re?Pe.scale.set(j,j/Re,1):Pe.scale.set(W*Re,W,1)}const be=0,qe=-(cn-1)*es,at=Hl,$e=-.1*es,Kt=.1*es;function dt(L,V){const W=L+Hl;return(at-W)/V}let nt=Math.max(1,R.clientHeight||window.innerHeight),ft=!1,ht=window.innerWidth,Qt=!1,Yt=!1;function Jt(){return Math.max(1,window.innerHeight)}function on(L){return Qt?L>b3&&(Qt=!1):T3(L)&&(Qt=!0),Qt}function Gt(){const L=u.current;if(!L)return;const{totalPx:V}=bo(nt),W=nt*YR,Te=`${Math.max(Math.ceil(V+W+nt*Nh+32-Wv),Math.ceil(nt*1.08))}px`;L.style.height!==Te&&(L.style.height=Te)}function tn(){const L=Math.max(1,nt),{totalPx:V}=bo(L),W=Math.max(1,V),j=be+$e,Te=qe+Kt-WR,Re=(j-Te)/W,Be=dt(j,Re),ze=dt(Te,Re);return{ih:L,totalPx:W,scrollToWorldFactor:Re,minScroll:Be,maxScroll:ze}}let{scrollToWorldFactor:$,minScroll:wt,maxScroll:St}=tn();function P(){var Be;const L=Math.max(320,R.clientWidth||window.innerWidth),V=Math.min(window.devicePixelRatio,2);N.forEach((ze,ke)=>{ze.dispose();const et=cn-1-ke,Ye=Jv(Fl[et],et,V,L,g.current);N[ke]=Ye,B[ke].uniforms.uMap.value=Ye}),(Be=Q.map)==null||Be.dispose();const W=$v(V,L);Q.map=W,Q.needsUpdate=!0,ex(W,ue);const j=W.image.height/W.image.width,Te=Math.max(1,R.clientHeight||nt),{w:De,h:Re}=Qv(L,Te,j);z.geometry.dispose(),z.geometry=new Ws(De,Re)}function b(){const L=R.clientWidth,V=R.clientHeight;if(L<2||V<2)return;ne.aspect=L/V,ne.updateProjectionMatrix(),ue.setSize(L,V,!1),ye(),P();const W=tn();$=W.scrollToWorldFactor,wt=W.minScroll,St=W.maxScroll,ft||Gt()}function ee(){ft=!1,nt=Jt(),ht=window.innerWidth,b()}b(),requestAnimationFrame(()=>{M||P()});let oe=0;function pe(){var Qs,us;if(M)return;oe=requestAnimationFrame(pe);const L=Jt(),V=document.getElementById("hero"),W=V?V.getBoundingClientRect().top:0,j=V?on(W):!0,{totalPx:Te}=bo(nt),De=y.getBoundingClientRect(),Re=Math.max(1,y.offsetHeight-nt),Be=zt.clamp(-De.top,0,Re);if(!j&&Be<=Te){if(ft=!1,Math.abs(L-nt)>Uh){nt=L,Gt();const Nt=tn();$=Nt.scrollToWorldFactor,wt=Nt.minScroll,St=Nt.maxScroll}}else ft=!0;const ke=nt,{cardPx:et,titlePx:Ye,totalPx:ot}=bo(ke),Vt=Math.max(1,y.offsetHeight-ke),Mt=zt.clamp(-De.top,0,Vt),At=Math.min(Mt,ot),Lt=Math.max(1,ot),Xe=ke*nS,wn=ke*iS,pt=Xe+wn,hn=Mt-ot,Fn=yr(zt.clamp(hn/Math.max(1,Xe),0,1)),si=yr(zt.clamp((hn-Xe)/Math.max(1,wn),0,1)),Wn=zt.mapLinear(et,0,Lt,wt,St),Ut=R.clientWidth,$t=R.clientHeight,Dn=Math.max(1,Ye),vt=At<Dn,wi=vt?zt.clamp(At/Dn,0,1):0,ua=Math.max(0,At-Dn),La=Math.max(1,et),Na=zt.clamp(ua/La,0,1)*(cn-1),Fo=qp(Ut,$t),os=X3(Ut,$t,_.current);let Di;vt?Di=zt.mapLinear(At,0,Dn,St,Wn):Di=zt.mapLinear(At,Dn,Lt,Wn,wt),Di=zt.clamp(Di,wt,St);const Cr=W3(et,ke),Bo=Y3(Dn,ke),zo=q3(wi,Bo),ls=cn-1,Ki=ot+pt;ie&&(Kv(ie,p3(Mt,Dn,et,ot,Ki)),ge&&(ge.needsUpdate=!0)),ye();const Zs=at-Di*$;ne.position.set(0,0,Zs),ne.lookAt(0,0,Zs-Hl);const da=ot+pt;let pi=0;if(Vt>da&&Mt>=da){const Nt=Math.max(1,Vt-da);pi=yr(zt.clamp((Mt-da)/Nt,0,1))}const Ho=Math.max(1,pt+ke*Nh),wr=Mt<=Lt?zt.clamp(Mt/Lt,0,1):1+zt.clamp(hn/Ho,0,1)*.45;if(K3(Mt,Vt)){const Nt=J3(wr,Zs,Q3(Ut)),Li=new QE(Nt,!1,"centripetal").getSpacedPoints(t3);if(Li.length>=2){const yn=$3(Li,n3,i3,a3),mi=K.geometry.getAttribute("position"),$n=yn.getAttribute("position");if(mi&&$n&&mi.count===$n.count&&((Qs=K.geometry.getIndex())==null?void 0:Qs.count)===((us=yn.getIndex())==null?void 0:us.count)&&mi&&$n){mi.array.set($n.array),mi.needsUpdate=!0;const ds=K.geometry.getAttribute("normal"),ha=yn.getAttribute("normal");ds&&ha&&(ds.array.set(ha.array),ds.needsUpdate=!0);const Go=K.geometry.getAttribute("uv"),jl=yn.getAttribute("uv");Go&&jl&&(Go.array.set(jl.array),Go.needsUpdate=!0),yn.dispose()}else K.geometry.dispose(),K.geometry=yn;K.visible=!0;const Dr=vt||Na<zt.clamp(Cr,0,.999);K.renderOrder=Dr?l3:jv,O.uniforms.uStrength.value=.36*(1-pi*.92)}else K.visible=!1,O.uniforms.uStrength.value=0}else K.visible=!1,O.uniforms.uStrength.value=0;const Ks=Math.floor((cn-1)/2),cs=performance.now(),ql=zt.clamp(Cr,0,.999);for(let Nt=0;Nt<cn;Nt++){if(vt||Na<=Nt+1e-5||Na<Nt+ql){Z[Nt]=-1;continue}Z[Nt]<0&&(Na>=Nt+1-1e-5?Z[Nt]=cs-Yv:Z[Nt]=cs)}if(T.forEach((Nt,ri)=>{const Li=-ri*es,yn=cn-1-ri,mi=Z[yn];let $n=mi<0?0:yr(zt.clamp((cs-mi)/Yv,0,1));!vt&&yn===cn-1&&si>0&&($n=Math.max($n,si));let{opacity:fs}=j3(Na,yn,Cr,$n);vt&&ri===ls&&(fs*=zo.lastCardOp,$n=0);let Dr=1,ds=0;!vt&&yn===cn-1&&fs>.02&&Fn>0&&(Dr=1-.28*Fn,ds=-es*.32*Fn),Nt.position.set(0,0,Li+ds),Nt.scale.setScalar(os*Dr);const ha=B[ri];ha.uniforms.uOpacity.value=fs,ha.uniforms.uWipe.value=$n,ha.depthWrite=fs>=.995&&$n<.02,Nt.visible=fs>.003&&$n<.997,Nt.renderOrder=ri<=Ks?sS+ri:r3+(ri-Ks-1)}),z.position.set(0,0,-ls*es+.05),z.scale.setScalar(Fo),Q.opacity=vt?zo.titleOp:0,z.visible=Q.opacity>.003,!h.current){m.current?Yt=!1:j?Yt=!0:Yt&&Mt<ot-ke*.25&&(Yt=!1),document.body.classList.toggle(_r,!Yt);const Nt=r.current;Nt!=null&&Nt.classList.contains("flow-intro__sticky--exit")&&!j&&(Nt.style.transition="none",Nt.classList.remove("flow-intro__sticky--exit"),Nt.offsetWidth,Nt.style.transition="")}if(!ft){const Nt=pt+ke*Nh+32-Wv,ri=Math.max(Math.ceil(ot+Nt),Math.ceil(ke*1.08)),Li=u.current;if(Li){const yn=`${ri}px`;Li.style.height!==yn&&(Li.style.height=yn)}}const Yn=1-pi*.96;r.current&&(r.current.style.setProperty("--intro-ui-opacity",String(Yn)),r.current.style.setProperty("--intro-tagline-opacity","1"));const Ua=String(1-pi);ue.domElement.style.opacity=Ua,ue.render(G,ne)}pe();let we=0,Ie=0,le=!1,fe="page",Ce=!1,He=!1,Ne=!1,Ue=0,Ke=0,Je=0,it=!1,Y=!1,Le=0,_e=window.scrollY,Oe={kind:"title"};const Ge=8;function Ee(){Ie&&(window.clearTimeout(Ie),Ie=0)}function je(){we&&(cancelAnimationFrame(we),we=0),le=!1,fe="page",m.current=!1}function Fe(){je(),Ee(),Ce=!1}d.current=Fe;function Dt(){var ot;const L=Math.max(1,nt),{cardPx:V,titlePx:W,totalPx:j}=bo(L),Te=y.getBoundingClientRect(),De=Math.max(1,y.offsetHeight-L),Re=zt.clamp(-Te.top,0,De),Be=document.getElementById("hero"),ze=Be?on(Be.getBoundingClientRect().top):!0,ke=((ot=r.current)==null?void 0:ot.getBoundingClientRect().bottom)??L,Ye=Math.max(0,Math.min(Re,j)-W)/Math.max(1,V)*(cn-1);return{innerH:L,cardPx:V,titlePx:W,totalPx:j,scrolledPx:Re,landed:ze,stickyBottom:ke,depthT:Ye}}function lt(L=Dt()){return k3(L.scrolledPx,L.titlePx,L.cardPx,L.totalPx,L.landed,L.stickyBottom,L.innerH)}function Qn(){return le||lt()}function Jn(L){let V=L.deltaY;return L.deltaMode===1?V*=16:L.deltaMode===2&&(V*=window.innerHeight),V}function Ca(){Ee(),Ce=!0,Ie=window.setTimeout(()=>{Ie=0,Ce=!1},U3)}function qs(L,V){return L.kind==="title"?H3(y):L.kind==="card"?G3(y,L.idx,V.innerH):Ph()}function ra(L){if(M||h.current||le)return;const V=Dt(),W=L.kind==="hero";if(!W&&!lt(V))return;const j=qs(L,V);if(j==null)return;const Te=window.scrollY,De=j-Te;if(Oe=L.kind==="hero"?{kind:"card",idx:cn-1}:L,Math.abs(De)<cS(V.innerH)){xr(j),Ca();return}le=!0,fe=W?"exit":"page",m.current=W,Ce=!0;const Re=W?B3(window.innerWidth):F3(window.innerWidth),Be=performance.now(),ze=et=>{if(xr(et),le=!1,fe="page",we=0,!W){m.current=!1,Ca();return}m.current=!1,requestAnimationFrame(()=>{const Ye=Ph();Ye!=null&&xr(Ye),requestAnimationFrame(()=>{const ot=Ph();ot!=null&&xr(ot),Ca()})})},ke=et=>{if(M||h.current){le=!1,fe="page",we=0,m.current=!1;return}if(fe==="page"&&!lt(Dt())){je(),Ce=!1;return}const Ye=Math.min(1,(et-Be)/Re);xr(Te+De*yr(Ye)),Ye<1?we=requestAnimationFrame(ke):ze(j)};we=requestAnimationFrame(ke)}function Yi(L,V){const W=cn-1,j=V>0?1:-1,Te=Ih(L.scrolledPx,L.titlePx,L.depthT,L.innerH);if(Te.kind==="title")return j<0?null:{kind:"card",idx:0};const De=Te.idx+j;return De<0?{kind:"title"}:De>W?j>0?{kind:"hero"}:{kind:"card",idx:W}:{kind:"card",idx:De}}function ai(L){const V=Dt();if(!lt(V)&&!(le&&fe==="exit"))return!1;const W=Yi(V,L);return W===null?!1:(ra(W),!0)}function fn(L,V){return Yi(L,V)===null}function Mn(L){if(!Qn())return;const V=Jn(L),W=Dt();if(!lt(W)&&fe!=="exit")return;const j=Yi(W,V>0?1:-1);if(j===null){(le||Ce)&&Fe();return}if(le||Ce){L.preventDefault();return}if(Math.abs(V)<L3){L.preventDefault();return}L.preventDefault(),ra(j)}function In(L){var V;if(Ke=((V=L.touches[0])==null?void 0:V.clientY)??Ke,Ue=Ke,Je=window.scrollY,He=!1,Ne=le||lt(),Ne&&!le){const W=Dt();Oe=Ih(W.scrolledPx,W.titlePx,W.depthT,W.innerH)}}function oa(L){var W;const V=((W=L.touches[0])==null?void 0:W.clientY)??Ue;if(!He){if(!Ne&&(le||lt())&&(Ne=!0,Ke=V,Ue=V,Je=window.scrollY),!Ne)return;const j=Ke-V;if(Math.abs(j)<Ge){Ue=V;return}const Te=j>0?1:-1,De=Dt();if(!le&&!lt(De)){Ne=!1,Ue=V;return}if(fn(De,Te)){Ne=!1,Fe(),Ue=V;return}le&&Fe(),He=!0,Ne=!1,Je=window.scrollY,Oe=Ih(De.scrolledPx,De.titlePx,De.depthT,De.innerH)}L.preventDefault(),Ue=V,le||xr(Je)}function wa(){const L=He,V=Ne,W=Ke-Ue;if(He=!1,Ne=!1,le)return;if(!L){V&&Fe();return}if(!lt())return;if(Math.abs(W)<N3){ra(Oe);return}const j=W>0?1:-1,Te=Dt();if(fn(Te,j)){Fe();return}ai(j)}function js(L){L.pointerType!=="touch"&&L.button===0&&(it=!0,Y=!1,Le=window.scrollY,lt()&&je())}function la(L){if(L.pointerType==="touch"||!it)return;if(it=!1,!Y||!lt()){Y=!1;return}const V=Dt(),W=window.scrollY>=Le?1:-1,j=Yi(V,W);if(Y=!1,j===null){Fe();return}ra(j)}function qi(L){L.pointerType!=="touch"&&(it=!1,Y=!1)}function ji(L){L.button===0&&(Y||le||Ce||lt()&&(L.preventDefault(),ai(1)))}function Ri(L){var Te;const V=L.target;if((Te=V==null?void 0:V.closest)!=null&&Te.call(V,"input, textarea, select, [contenteditable=true]"))return;const W=L.key==="ArrowDown"||L.key==="ArrowRight"||L.key==="Enter"||L.key===" ",j=L.key==="ArrowUp"||L.key==="ArrowLeft";if(!(!W&&!j)){if(le||Ce){L.preventDefault();return}lt()&&(L.preventDefault(),ai(W?1:-1))}}function Ci(){const L=window.scrollY,V=L-_e;_e=L,it&&Math.abs(V)>.5&&(Y=!0),le&&fe==="page"&&!lt()&&Fe()}function ca(){Fe(),ee()}function Zi(){Fe();const L=Jt(),V=window.innerWidth,W=Math.abs(L-nt),j=Math.abs(V-ht)>1;if(ft){W>Uh||j?ee():b();return}nt=L,ht=V,b()}function dn(){Fe();const L=Jt();Math.abs(L-nt)<=Uh||(ft?ee():(nt=L,ht=window.innerWidth,b()))}window.addEventListener("wheel",Mn,{passive:!1}),window.addEventListener("touchstart",In,{passive:!0}),window.addEventListener("touchmove",oa,{passive:!1}),window.addEventListener("touchend",wa,{passive:!0}),window.addEventListener("touchcancel",wa,{passive:!0}),window.addEventListener("pointerdown",js,{passive:!0}),window.addEventListener("pointerup",la,{passive:!0}),window.addEventListener("pointercancel",qi,{passive:!0}),window.addEventListener("scroll",Ci,{passive:!0}),window.addEventListener("resize",Zi,{passive:!0}),window.addEventListener("orientationchange",ca,{passive:!0}),R.addEventListener("click",ji),window.addEventListener("keydown",Ri);const Da=window.visualViewport;Da&&Da.addEventListener("resize",dn);const A=new ResizeObserver(b);A.observe(R),H=()=>{var L;Fe(),d.current=null,cancelAnimationFrame(oe),document.body.classList.remove(_r),window.removeEventListener("wheel",Mn),window.removeEventListener("touchstart",In),window.removeEventListener("touchmove",oa),window.removeEventListener("touchend",wa),window.removeEventListener("touchcancel",wa),window.removeEventListener("pointerdown",js),window.removeEventListener("pointerup",la),window.removeEventListener("pointercancel",qi),window.removeEventListener("scroll",Ci),window.removeEventListener("resize",Zi),window.removeEventListener("orientationchange",ca),R.removeEventListener("click",ji),window.removeEventListener("keydown",Ri),Da&&Da.removeEventListener("resize",dn),A.disconnect(),B.forEach(V=>{V.dispose()}),N.forEach(V=>V.dispose()),(L=Q.map)==null||L.dispose(),Q.dispose(),T.forEach(V=>V.geometry.dispose()),z.geometry.dispose(),K.geometry.dispose(),O.dispose(),G.remove(K),Pe&&(ne.remove(Pe),Pe.geometry.dispose()),Ae==null||Ae.dispose(),ge==null||ge.dispose(),ie&&ie.pause(),ue.dispose(),R.contains(ue.domElement)&&R.removeChild(ue.domElement)},M&&H()})(),()=>{var C;M=!0,(C=d.current)==null||C.call(d),d.current=null,document.body.classList.remove(_r),H==null||H()}},[]),D.jsxs("section",{ref:i,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:r,className:"flow-intro__sticky",children:[D.jsx("video",{ref:c,className:"flow-intro__bg-video",src:u3,muted:!0,playsInline:!0,preload:"auto","aria-hidden":!0}),D.jsx("div",{ref:o,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Wp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:v,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(VR,{text:kR,className:"flow-intro__tagline",scrollerRef:i})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Fl.map((x,E)=>D.jsxs("p",{children:["Step ",String(E+1).padStart(2,"0"),": ",x.verb,". ",x.description]},x.verb))})]}),D.jsx("div",{ref:u,className:"flow-intro__spacer","aria-hidden":!0})]})}const tC=280,nC=5/4,iC=3800,aC={discover:Il,copy:AR};function sC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rC({stepIndex:a,kind:e,className:i,width:r=tC}){const o=Ve.useRef(null),c=e??Kx(a),u=Math.round(r*nC);return Ve.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*x),R=Math.round(u*x);(h.width!==E||h.height!==R)&&(h.width=E,h.height=R);const y=h.getContext("2d");y&&LR(y,c,E,R,m)};g();const _=aC[c];_&&_>1&&!sC()&&(d=setInterval(()=>{m=(m+1)%_,g()},iC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const tx=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function oC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:tx.map((a,e)=>{const i=e===tx.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const lC=/^(action)$/i;function cC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>lC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function uS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:cC(e)})]})}var uC=dx();function fC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function dC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,fC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function nx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=dC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const hC=40,pC=5,mC="typewriter-reveal",ix=1e3,gC=4e3;function ax(){return ix+Math.random()*(gC-ix)}function fS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _C({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=Ve.useRef(null),g=Ve.useRef(m),_=Ve.useRef(null),v=Ve.useRef(null),x=Ve.useRef(null),E=Ve.useRef("idle"),[R,y]=Ve.useState("idle");g.current=m;const M=Ve.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),F=Ve.useCallback(()=>{var N;M(),v.current=null,x.current=null,E.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),H=Ve.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(F,N)},[M,F]);Ve.useLayoutEffect(()=>{E.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),Ve.useLayoutEffect(()=>{var G,ne,ue;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const Se=x.current??ax();x.current=null,H(Se);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(fS()){(G=g.current)==null||G.call(g);return}const N=d.current;if(!N||!a){(ne=g.current)==null||ne.call(g);return}N.style.width="",N.offsetWidth;const Z=Math.max(a.length/i*1e3,120),X=Math.max(a.length,1),Q=N.closest(".typewriter-block"),me=(Q==null?void 0:Q.clientWidth)??((ue=N.parentElement)==null?void 0:ue.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const he=N.scrollWidth,J=me>0?Math.min(he,me):he;N.style.width="0",N.style.setProperty("--tw-duration",`${Z}ms`),N.style.setProperty("--tw-target-width",`${J}px`),N.style.setProperty("--tw-steps",String(X)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,E.current="animating",y("animating");const z=Se=>{if(Se.animationName===mC){if(h){N.style.width=`${J}px`,E.current="cursor-hold",y("cursor-hold"),H(ax());return}N.style.width="",F()}};return N.addEventListener("animationend",z),()=>{N.removeEventListener("animationend",z)}},[o,u,F,h,H,i,a,c,M,r]);const C=R==="animating",I=R==="cursor-hold",U=R==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",I?"is-cursor-hold":"",u||U?"is-complete":"",!o&&!c&&!u&&!U&&(C||I)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function jp({text:a,children:e,className:i,speed:r=hC,cursorWidth:o=pC,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=Ve.useRef(null),g=Ve.useRef(m),[_,v]=Ve.useState([]),[x,E]=Ve.useState(0),[R,y]=Ve.useState(0),[M,F]=Ve.useState(!1),[H,C]=Ve.useState(!1),I=fS();g.current=m;const U=Ve.useCallback(()=>{const he=d.current;if(!he||!a)return v([]),E(0),C(!0),!0;const J=he.clientWidth;if(J<1)return!1;const G=(c==="auto"||c===!0)&&!I,{lines:ne,blockHeight:ue}=nx(a,J,he,G);let Se=ue;if(!G){const O=nx(a,J,he,!0);Se=Math.max(ue,O.blockHeight)}return v(ne),E(Se),C(!0),!0},[a,c,I]);Ve.useLayoutEffect(()=>{var he,J;if(y(0),F(!1),C(!1),v([]),E(0),I){(he=g.current)==null||he.call(g),C(!0);return}if(!a){(J=g.current)==null||J.call(g),C(!0);return}if(!U()){const z=new ResizeObserver(()=>{U()&&z.disconnect()});return d.current&&z.observe(d.current),()=>z.disconnect()}},[a,c,U,I]);const B=Ve.useCallback(he=>{var z;const J=he>=_.length-1;uC.flushSync(()=>{if(!J){y(he+1);return}F(!0)}),J&&((z=g.current)==null||z.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",H?"":"is-measuring",I?"is-static":""].filter(Boolean).join(" "),Z={...!M&&!I&&x>0?{height:x,minHeight:x}:void 0},X=e??a;if(!H)return D.jsx("span",{ref:d,className:N,style:Z,children:X});if(I||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:X});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:X});const Q=_.length>0?_:[a],me=!!e&&Q.length<=1;return D.jsxs("span",{ref:d,className:N,style:Z,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:X}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Q.map((he,J)=>D.jsx(_C,{text:he,content:me?e:void 0,speed:r,cursorWidth:o,waiting:J>R,active:u&&J===R,completed:J<R,holdCursor:h&&J===Q.length-1,onComplete:J===R?()=>B(J):void 0},`${J}-${he}`))})]})}function vC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Ve.useState(!1);return Ve.useLayoutEffect(()=>{if(r)return;if(vC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function xC(a){return String(a).padStart(2,"0")}function Fu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const SC=1600,MC=1500,sx=5e3,yC=7e3;function EC(){return sx+Math.random()*(yC-sx)}function bC({text:a,active:e}){const[i,r]=Ve.useState(!1),[o,c]=Ve.useState(0),u=Ve.useRef(null),h=`> ${a}`,m=Ve.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Ve.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Fu()){r(!0);return}const g=window.setTimeout(()=>r(!0),MC);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=Ve.useCallback(()=>{Fu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},EC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(jp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function TC(){const[a,e]=Ve.useState(()=>new Set),[i,r]=Ve.useState(!1),o=Ve.useRef(new Map),c=Ve.useRef(null),u=Zp(c,{amount:.35}),h=Is.steps.every(_=>a.has(`step-${_.n}`));Ve.useLayoutEffect(()=>{if(Fu()){e(new Set(Is.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const E=new Set(x);for(const R of v){const y=R.target.dataset.flowKey;y&&R.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),Ve.useLayoutEffect(()=>{if(Fu())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},SC);return()=>window.clearTimeout(_)},[h]);const m=Ve.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=Ve.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Is.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Is.title}),D.jsx("div",{className:"flow__chips",children:Is.chips.map(_=>D.jsx(uS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Is.steps.map((_,v)=>{const x=`step-${_.n}`,E=a.has(x);return D.jsxs("article",{ref:R=>m(x,R),"data-flow-key":x,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",xC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(bC,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Cn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(oC,{}):D.jsx(rC,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(jp,{text:Is.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Is.outcome})})]})})}function AC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Wp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:H_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Mu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Cn.docs,children:"Docs"}),D.jsx("a",{href:Cn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Cn.discord,children:"Discord"}),D.jsx("a",{href:Cn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:H_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const rx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",dS=50,ox=3500,lx=4e3,RC=1400,CC=1200,wC=4500;function hS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cx(a){return/[A-Za-z0-9]/.test(a)}function DC(){return rx[Math.floor(Math.random()*rx.length)]??"?"}function LC(a){return Math.random()<.5?DC():a}function pS(a,e,i){const r=[];for(let d=0;d<a.length;d++)cx(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!cx(g)||h.has(d)?m+=g:m+=LC(g)}return m}function NC(a){return typeof a=="boolean"?{enabled:a,decryptMs:ox,pauseMs:lx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??ox,pauseMs:a.pauseMs??lx}}function Vn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=NC(e),c=r+o,[u,h]=Ve.useState(a);return Ve.useEffect(()=>{if(!i||hS()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(pS(a,v,r))};d();const g=setInterval(d,dS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function ux(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??RC,o=e.stepDecryptMs??CC,c=e.holdMs??wC,u=a.join("\0"),[h,m]=Ve.useState(a),[d,g]=Ve.useState(()=>a.map(()=>!1));return Ve.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||hS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let E=Date.now();const R=()=>{const M=Date.now();let F=M-E;F>=x&&(E=M,F=0);const H=[],C=[];for(let I=0;I<_.length;I++){const U=_[I]??"",B=I*r,T=F>=B;if(C.push(T),!T){H.push(U);continue}const N=F-B;H.push(pS(U,N,o))}m(H),g(C)};R();const y=setInterval(R,dS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function UC(){const a=[...z_,...z_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(uS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function OC({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Ps.headline,c=Vn(Ps.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:UR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Cp.map(h=>D.jsx("path",{d:h,fill:"#C8F5A8"},`ghost-${h.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Cp.map(h=>D.jsx("path",{d:h,fill:"#C8F5A8"},`fill-${h.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ps.eyebrow.href,"aria-label":`${Ps.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(wo,{href:Ps.primaryCta.href,variant:"primary",children:Ps.primaryCta.label}),D.jsx(wo,{href:Ps.secondaryCta.href,variant:"secondary",children:Ps.secondaryCta.label})]})]}),D.jsx(UC,{})]})}function PC(){const a=Vn(jd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:jd.href,"aria-label":jd.text,children:a})})}const ii={decryptMs:2800,pauseMs:5200},fx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function mS(a){return String(a+1).padStart(2,"0")}function IC(a,e,i,r){return`${mS(a)}  ${e}  ·  ${i}  ·  ${r}`}function FC(a,e,i){return`${mS(a)}  ${e}  ·  ${i}`}function BC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function di({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function sn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function zC({meta:a}){const e=Vn(a.name,ii),i=Vn(a.tx,ii),r=Vn(a.hash,ii),o=Vn(a.chain,ii),c=Vn(a.verified,ii),u=Vn(a.rep,ii),h=Vn(a.portable,ii),m=Vn(a.next,ii),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,E=`hash ${r}`,R=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,F=`verified ${c} · rep ${u} · portable ${h}`,H=`next ${a.next}`,C=`next ${m}`,I=`rep ${a.rep} · portable ${a.portable}`,U=`rep ${u} · portable ${h}`,B=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(di,{label:"tx",value:a.tx,display:i}),D.jsx(di,{label:"hash",value:a.hash,display:r}),D.jsx(di,{label:"chain",value:a.chain,display:o}),D.jsx(di,{label:"verified",value:a.verified,display:c}),D.jsx(di,{label:"rep",value:a.rep,display:u}),D.jsx(di,{label:"portable",value:a.portable,display:h}),D.jsx(di,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(sn,{value:d,display:g}),D.jsx(sn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(sn,{value:x,display:E}),D.jsx(sn,{value:R,display:y}),D.jsx(sn,{value:M,display:F}),D.jsx(sn,{value:H,display:C})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(sn,{value:d,display:g}),D.jsx(sn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(sn,{value:x,display:E}),D.jsx(sn,{value:R,display:y}),D.jsx(sn,{value:B,display:T}),D.jsx(sn,{value:I,display:U}),D.jsx(sn,{value:H,display:C})]})]})}function HC({meta:a}){const e=Vn(a.tx,ii),i=Vn(a.from,ii),r=Vn(a.to,ii),o=Vn(a.asset,ii),c=Vn(a.amt,ii),u=Vn(a.chain,ii),h=Vn(a.status,ii),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,R=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(di,{label:"tx",value:a.tx,display:e}),D.jsx(di,{label:"from",value:a.from,display:i}),D.jsx(di,{label:"to",value:a.to,display:r}),D.jsx(di,{label:"asset",value:a.asset,display:o}),D.jsx(di,{label:"amt",value:a.amt,display:c}),D.jsx(di,{label:"chain",value:a.chain,display:u}),D.jsx(di,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(sn,{value:g,display:_}),D.jsx(sn,{value:m,display:d}),D.jsx(sn,{value:v,display:x}),D.jsx(sn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(sn,{value:g,display:_}),D.jsx(sn,{value:m,display:d}),D.jsx(sn,{value:E,display:R}),D.jsx(sn,{value:a.chain,display:u}),D.jsx(sn,{value:y,display:M})]})]})}function GC({meta:a}){const e=Ve.useRef(null),i=Zp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?BC(r):null,c=Ve.useMemo(()=>{const d=a.steps.map((g,_)=>IC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=Ve.useMemo(()=>{const d=a.steps.map((g,_)=>FC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=ux(c,{...fx,enabled:i}),m=ux(u,{...fx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(sn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(sn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(sn,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function VC({meta:a}){return a.kind==="identity"?D.jsx(zC,{meta:a}):a.kind==="chain"?D.jsx(GC,{meta:a}):D.jsx(HC,{meta:a})}function kC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(wo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(VC,{meta:a.meta})]})}function XC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Zd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Zd.title}),D.jsx("div",{className:"personas__grid",children:Zd.items.map(a=>D.jsx(kC,{persona:a},a.title))})]})})}function WC(){const[a,e]=Ve.useState(!1),[i,r]=Ve.useState(!1),[o,c]=Ve.useState("");return Ve.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Ve.useEffect(()=>{const u=Mu.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),Ve.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Wp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Mu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Cn.docs,children:"Docs"}),D.jsx(wo,{href:Cn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Mu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Cn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function YC(){const a=Ve.useRef(null),e=Zp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(jp,{text:B_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:B_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function qC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(PC,{}),D.jsx(WC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(eC,{cardAlpha:0,cardSize:.88}),D.jsx(OC,{contentOffsetY:-70,maskAlpha:.6}),D.jsx(YC,{}),D.jsx(Ey,{}),D.jsx(XC,{}),D.jsx(TC,{}),D.jsx(Ty,{}),D.jsx(yy,{})]}),D.jsx(AC,{})]})}Sy.createRoot(document.getElementById("root")).render(D.jsx(Ve.StrictMode,{children:D.jsx(qC,{})}));
