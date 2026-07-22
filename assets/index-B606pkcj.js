(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var lh={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Ny(){if(Q_)return Il;Q_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Il.Fragment=e,Il.jsx=i,Il.jsxs=i,Il}var J_;function Uy(){return J_||(J_=1,lh.exports=Ny()),lh.exports}var D=Uy(),ch={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Oy(){if($_)return _t;$_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(I,K,Se){this.props=I,this.context=K,this.refs=y,this.updater=Se||E}S.prototype.isReactComponent={},S.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=S.prototype;function P(I,K,Se){this.props=I,this.context=K,this.refs=y,this.updater=Se||E}var A=P.prototype=new O;A.constructor=P,C(A,S.prototype),A.isPureReactComponent=!0;var L=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(I,K,Se){var Ne=Se.ref;return{$$typeof:a,type:I,key:K,ref:Ne!==void 0?Ne:null,props:Se}}function k(I,K){return U(I.type,K,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function q(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Se){return K[Se]})}var fe=/\/+/g;function ue(I,K){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):K.toString(36)}function X(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,K,Se,Ne,we){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var be=!1;if(I===null)be=!0;else switch(ne){case"bigint":case"string":case"number":be=!0;break;case"object":switch(I.$$typeof){case a:case e:be=!0;break;case g:return be=I._init,z(be(I._payload),K,Se,Ne,we)}}if(be)return we=we(I),be=Ne===""?"."+ue(I,0):Ne,L(we)?(Se="",be!=null&&(Se=be.replace(fe,"$&/")+"/"),z(we,K,Se,"",function(nt){return nt})):we!=null&&(G(we)&&(we=k(we,Se+(we.key==null||I&&I.key===we.key?"":(""+we.key).replace(fe,"$&/")+"/")+be)),K.push(we)),1;be=0;var ve=Ne===""?".":Ne+":";if(L(I))for(var Ie=0;Ie<I.length;Ie++)Ne=I[Ie],ne=ve+ue(Ne,Ie),be+=z(Ne,K,Se,ne,we);else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Ie=0;!(Ne=I.next()).done;)Ne=Ne.value,ne=ve+ue(Ne,Ie++),be+=z(Ne,K,Se,ne,we);else if(ne==="object"){if(typeof I.then=="function")return z(X(I),K,Se,Ne,we);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(I,K,Se){if(I==null)return I;var Ne=[],we=0;return z(I,Ne,"","",function(ne){return K.call(Se,ne,we++)}),Ne}function $(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(Se){(I._status===0||I._status===-1)&&(I._status=1,I._result=Se)},function(Se){(I._status===0||I._status===-1)&&(I._status=2,I._result=Se)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var me=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ye={map:H,forEach:function(I,K,Se){H(I,function(){K.apply(this,arguments)},Se)},count:function(I){var K=0;return H(I,function(){K++}),K},toArray:function(I){return H(I,function(K){return K})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return _t.Activity=_,_t.Children=ye,_t.Component=S,_t.Fragment=i,_t.Profiler=o,_t.PureComponent=P,_t.StrictMode=r,_t.Suspense=m,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,_t.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},_t.cache=function(I){return function(){return I.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(I,K,Se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ne=C({},I.props),we=I.key;if(K!=null)for(ne in K.key!==void 0&&(we=""+K.key),K)!T.call(K,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&K.ref===void 0||(Ne[ne]=K[ne]);var ne=arguments.length-2;if(ne===1)Ne.children=Se;else if(1<ne){for(var be=Array(ne),ve=0;ve<ne;ve++)be[ve]=arguments[ve+2];Ne.children=be}return U(I.type,we,Ne)},_t.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},_t.createElement=function(I,K,Se){var Ne,we={},ne=null;if(K!=null)for(Ne in K.key!==void 0&&(ne=""+K.key),K)T.call(K,Ne)&&Ne!=="key"&&Ne!=="__self"&&Ne!=="__source"&&(we[Ne]=K[Ne]);var be=arguments.length-2;if(be===1)we.children=Se;else if(1<be){for(var ve=Array(be),Ie=0;Ie<be;Ie++)ve[Ie]=arguments[Ie+2];we.children=ve}if(I&&I.defaultProps)for(Ne in be=I.defaultProps,be)we[Ne]===void 0&&(we[Ne]=be[Ne]);return U(I,ne,we)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:d,render:I}},_t.isValidElement=G,_t.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:$}},_t.memo=function(I,K){return{$$typeof:h,type:I,compare:K===void 0?null:K}},_t.startTransition=function(I){var K=F.T,Se={};F.T=Se;try{var Ne=I(),we=F.S;we!==null&&we(Se,Ne),typeof Ne=="object"&&Ne!==null&&typeof Ne.then=="function"&&Ne.then(N,me)}catch(ne){me(ne)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),F.T=K}},_t.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},_t.use=function(I){return F.H.use(I)},_t.useActionState=function(I,K,Se){return F.H.useActionState(I,K,Se)},_t.useCallback=function(I,K){return F.H.useCallback(I,K)},_t.useContext=function(I){return F.H.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I,K){return F.H.useDeferredValue(I,K)},_t.useEffect=function(I,K){return F.H.useEffect(I,K)},_t.useEffectEvent=function(I){return F.H.useEffectEvent(I)},_t.useId=function(){return F.H.useId()},_t.useImperativeHandle=function(I,K,Se){return F.H.useImperativeHandle(I,K,Se)},_t.useInsertionEffect=function(I,K){return F.H.useInsertionEffect(I,K)},_t.useLayoutEffect=function(I,K){return F.H.useLayoutEffect(I,K)},_t.useMemo=function(I,K){return F.H.useMemo(I,K)},_t.useOptimistic=function(I,K){return F.H.useOptimistic(I,K)},_t.useReducer=function(I,K,Se){return F.H.useReducer(I,K,Se)},_t.useRef=function(I){return F.H.useRef(I)},_t.useState=function(I){return F.H.useState(I)},_t.useSyncExternalStore=function(I,K,Se){return F.H.useSyncExternalStore(I,K,Se)},_t.useTransition=function(){return F.H.useTransition()},_t.version="19.2.7",_t}var ev;function Jp(){return ev||(ev=1,ch.exports=Oy()),ch.exports}var ke=Jp(),uh={exports:{}},Bl={},fh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function Py(){return tv||(tv=1,(function(a){function e(z,H){var $=z.length;z.push(H);e:for(;0<$;){var me=$-1>>>1,ye=z[me];if(0<o(ye,H))z[me]=H,z[$]=ye,$=me;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],$=z.pop();if($!==H){z[0]=$;e:for(var me=0,ye=z.length,I=ye>>>1;me<I;){var K=2*(me+1)-1,Se=z[K],Ne=K+1,we=z[Ne];if(0>o(Se,$))Ne<ye&&0>o(we,Se)?(z[me]=we,z[Ne]=$,me=Ne):(z[me]=Se,z[K]=$,me=K);else if(Ne<ye&&0>o(we,$))z[me]=we,z[Ne]=$,me=Ne;else break e}}return H}function o(z,H){var $=z.sortIndex-H.sortIndex;return $!==0?$:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,_=null,v=3,x=!1,E=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function A(z){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=z)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function L(z){if(C=!1,A(z),!E)if(i(m)!==null)E=!0,N||(N=!0,q());else{var H=i(h);H!==null&&X(L,H.startTime-z)}}var N=!1,F=-1,T=5,U=-1;function k(){return y?!0:!(a.unstable_now()-U<T)}function G(){if(y=!1,N){var z=a.unstable_now();U=z;var H=!0;try{e:{E=!1,C&&(C=!1,O(F),F=-1),x=!0;var $=v;try{t:{for(A(z),_=i(m);_!==null&&!(_.expirationTime>z&&k());){var me=_.callback;if(typeof me=="function"){_.callback=null,v=_.priorityLevel;var ye=me(_.expirationTime<=z);if(z=a.unstable_now(),typeof ye=="function"){_.callback=ye,A(z),H=!0;break t}_===i(m)&&r(m),A(z)}else r(m);_=i(m)}if(_!==null)H=!0;else{var I=i(h);I!==null&&X(L,I.startTime-z),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?q():N=!1}}}var q;if(typeof P=="function")q=function(){P(G)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ue=fe.port2;fe.port1.onmessage=G,q=function(){ue.postMessage(null)}}else q=function(){S(G,0)};function X(z,H){F=S(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return z()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=v;v=z;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(z,H,$){var me=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,z={id:g++,callback:H,priorityLevel:z,startTime:$,expirationTime:ye,sortIndex:-1},$>me?(z.sortIndex=$,e(h,z),i(m)===null&&z===i(h)&&(C?(O(F),F=-1):C=!0,X(L,$-me))):(z.sortIndex=ye,e(m,z),E||x||(E=!0,N||(N=!0,q()))),z},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(z){var H=v;return function(){var $=v;v=H;try{return z.apply(this,arguments)}finally{v=$}}}})(dh)),dh}var nv;function Iy(){return nv||(nv=1,fh.exports=Py()),fh.exports}var hh={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function By(){if(iv)return $n;iv=1;var a=Jp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,$n.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},$n.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},$n.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},$n.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},$n.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},$n.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},$n.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},$n.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},$n.requestFormReset=function(m){r.d.r(m)},$n.unstable_batchedUpdates=function(m,h){return m(h)},$n.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},$n.useFormStatus=function(){return u.H.useHostTransitionStatus()},$n.version="19.2.7",$n}var av;function Vx(){if(av)return hh.exports;av=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),hh.exports=By(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function Fy(){if(sv)return Bl;sv=1;var a=Iy(),e=Jp(),i=Vx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,w=f.child;w;){if(w===s){M=!0,s=f,l=p;break}if(w===l){M=!0,l=f,s=p;break}w=w.sibling}if(!M){for(w=p.child;w;){if(w===s){M=!0,s=p,l=f;break}if(w===l){M=!0,l=p,s=f;break}w=w.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var X=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],ye=-1;function I(t){return{current:t}}function K(t){0>ye||(t.current=me[ye],me[ye]=null,ye--)}function Se(t,n){ye++,me[ye]=t.current,t.current=n}var Ne=I(null),we=I(null),ne=I(null),be=I(null);function ve(t,n){switch(Se(ne,n),Se(we,t),Se(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?S_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=S_(n),t=M_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ne),Se(Ne,t)}function Ie(){K(Ne),K(we),K(ne)}function nt(t){t.memoizedState!==null&&Se(be,t);var n=Ne.current,s=M_(n,t.type);n!==s&&(Se(we,t),Se(Ne,s))}function Xe(t){we.current===t&&(K(Ne),K(we)),be.current===t&&(K(be),Nl._currentValue=$)}var yt,ut;function dt(t){if(yt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ut}var ht=!1;function pt(t,n){if(!t||ht)return"";ht=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(he){var le=he}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(he){le=he}t.call(Ae.prototype)}}else{try{throw Error()}catch(he){le=he}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],w=p[1];if(M&&w){var V=M.split(`
`),re=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===re.length)for(l=V.length-1,f=re.length-1;1<=l&&0<=f&&V[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==re[f]){var xe=`
`+V[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{ht=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?dt(s):""}function Ft(t,n){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return dt("Activity");default:return""}}function ln(t){try{var n="",s=null;do n+=Ft(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zt=Object.prototype.hasOwnProperty,gn=a.unstable_scheduleCallback,Yt=a.unstable_cancelCallback,dn=a.unstable_shouldYield,j=a.unstable_requestPaint,qt=a.unstable_now,It=a.unstable_getCurrentPriorityLevel,B=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,ee=a.unstable_LowPriority,de=a.unstable_IdlePriority,De=a.log,Fe=a.unstable_setDisableYieldValue,pe=null,ge=null;function Oe(t){if(typeof De=="function"&&Fe(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(pe,t)}catch{}}var Ye=Math.clz32?Math.clz32:it,He=Math.log,Be=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(He(t)/Be|0)|0}var Qe=256,lt=262144,Y=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=Ue(l):(M&=w,M!==0?f=Ue(M):s||(s=w&~t,s!==0&&(f=Ue(s))))):(w=l&~p,w!==0?f=Ue(w):M!==0?f=Ue(M):s||(s=l&~t,s!==0&&(f=Ue(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ce(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dt(t,n,s,l,f,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(s=M&~s;0<s;){var xe=31-Ye(s),Ae=1<<xe;w[xe]=0,V[xe]=-1;var le=re[xe];if(le!==null)for(re[xe]=null,xe=0;xe<le.length;xe++){var he=le[xe];he!==null&&(he.lane&=-536870913)}s&=~Ae}l!==0&&Tt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function Tt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ye(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function An(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ye(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Hn(t,n){var s=n&-n;return s=(s&42)!==0?1:$i(s),(s&(t.suspendedLanes|n))!==0?0:s}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Si(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:X_(t.type))}function Oa(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var ai=Math.random().toString(36).slice(2),vn="__reactFiber$"+ai,Rn="__reactProps$"+ai,Gn="__reactContainer$"+ai,Cn="__reactEvents$"+ai,ci="__reactListeners$"+ai,Pn="__reactHandles$"+ai,Pa="__reactResources$"+ai,pa="__reactMarker$"+ai;function Ui(t){delete t[vn],delete t[Rn],delete t[Cn],delete t[ci],delete t[Pn]}function ea(t){var n=t[vn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Gn]||s[vn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=C_(t);t!==null;){if(s=t[vn])return s;t=C_(t)}return n}t=s,s=t.parentNode}return null}function ui(t){if(t=t[vn]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Oi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Pi(t){var n=t[Pa];return n||(n=t[Pa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(t){t[pa]=!0}var nr=new Set,R={};function Z(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)nr.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Ve={};function Ze(t){return Zt.call(Ve,t)?!0:Zt.call(ae,t)?!1:ie.test(t)?Ve[t]=!0:(ae[t]=!0,!1)}function ze(t,n,s){if(Ze(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Je(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ke(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function ce(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=ft(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Me(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Le=/[\n"\\]/g;function Ge(t){return t.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Re(t,n,s,l,f,p,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?rt(t,M,at(n)):s!=null?rt(t,M,at(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+at(w):t.removeAttribute("name")}function mt(t,n,s,l,f,p,M,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Ut(t);return}s=s!=null?""+at(s):"",n=n!=null?""+at(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Ut(t)}function rt(t,n,s){n==="number"&&Me(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function zt(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+at(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function sn(t,n,s){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+at(s):""}function Bt(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(X(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=at(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ut(t)}function nn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function St(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||gt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function hn(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&St(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&St(t,p,n[p])}function Et(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ta=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(t){return ta.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var ds=null;function ir(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ma=null,Ia=null;function Ur(t){var n=ui(t);if(n&&(t=n.stateNode)){var s=t[Rn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Re(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Rn]||null;if(!f)throw Error(r(90));Re(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&ce(l)}break e;case"textarea":sn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&zt(t,!!s.multiple,n,!1)}}}var Or=!1;function hs(t,n,s){if(Or)return t(n,s);Or=!0;try{var l=t(n);return l}finally{if(Or=!1,(ma!==null||Ia!==null)&&(Wc(),ma&&(n=ma,t=Ia,Ia=ma=null,Ur(n),t)))for(n=0;n<t.length;n++)Ur(t[n])}}function di(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Rn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=!1;if(Bi)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Zo=!1}var Ba=null,ga=null,Pr=null;function rc(){if(Pr)return Pr;var t,n=ga,s=n.length,l,f="value"in Ba?Ba.value:Ba.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===f[p-l];l++);return Pr=f.slice(t,1<l?1-l:void 0)}function ps(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ms(){return!0}function oc(){return!1}function Wn(t){function n(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ms:oc,this.isPropagationStopped=oc,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),n}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ir=Wn(_a),va=_({},_a,{view:0,detail:0}),Br=Wn(va),Ko,Qo,Fr,sr=_({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(Ko=t.screenX-Fr.screenX,Qo=t.screenY-Fr.screenY):Qo=Ko=0,Fr=t),Ko)},movementY:function(t){return"movementY"in t?t.movementY:Qo}}),zr=Wn(sr),ff=_({},sr,{dataTransfer:0}),df=Wn(ff),hf=_({},va,{relatedTarget:0}),Hr=Wn(hf),lc=_({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),At=Wn(lc),Vn=_({},_a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fi=Wn(Vn),In=_({},_a,{data:0}),Mi=Wn(In),Jn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ia={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gs(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Gr[t])?!!n[t]:!1}function xa(){return gs}var Jo=_({},va,{key:function(t){if(t.key){var n=Jn[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ps(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ia[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(t){return t.type==="keypress"?ps(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ps(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cc=Wn(Jo),WS=_({},sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Wn(WS),YS=_({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),qS=Wn(YS),jS=_({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=Wn(jS),KS=_({},sr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=Wn(KS),JS=_({},_a,{newState:0,oldState:0}),$S=Wn(JS),eM=[9,13,27,32],pf=Bi&&"CompositionEvent"in window,$o=null;Bi&&"documentMode"in document&&($o=document.documentMode);var tM=Bi&&"TextEvent"in window&&!$o,Am=Bi&&(!pf||$o&&8<$o&&11>=$o),Rm=" ",Cm=!1;function wm(t,n){switch(t){case"keyup":return eM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function nM(t,n){switch(t){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return t=n.data,t===Rm&&Cm?null:t;default:return null}}function iM(t,n){if(Vr)return t==="compositionend"||!pf&&wm(t,n)?(t=rc(),Pr=ga=Ba=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Am&&n.locale!=="ko"?null:n.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!aM[t.type]:n==="textarea"}function Nm(t,n,s,l){ma?Ia?Ia.push(l):Ia=[l]:ma=l,n=Jc(n,"onChange"),0<n.length&&(s=new Ir("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var el=null,tl=null;function sM(t){p_(t,0)}function uc(t){var n=Oi(t);if(ce(n))return t}function Um(t,n){if(t==="change")return n}var Om=!1;if(Bi){var mf;if(Bi){var gf="oninput"in document;if(!gf){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),gf=typeof Pm.oninput=="function"}mf=gf}else mf=!1;Om=mf&&(!document.documentMode||9<document.documentMode)}function Im(){el&&(el.detachEvent("onpropertychange",Bm),tl=el=null)}function Bm(t){if(t.propertyName==="value"&&uc(tl)){var n=[];Nm(n,tl,t,ir(t)),hs(sM,n)}}function rM(t,n,s){t==="focusin"?(Im(),el=n,tl=s,el.attachEvent("onpropertychange",Bm)):t==="focusout"&&Im()}function oM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(tl)}function lM(t,n){if(t==="click")return uc(n)}function cM(t,n){if(t==="input"||t==="change")return uc(n)}function uM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var yi=typeof Object.is=="function"?Object.is:uM;function nl(t,n){if(yi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Zt.call(n,f)||!yi(t[f],n[f]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,n){var s=Fm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Fm(s)}}function Hm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Me(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Me(t.document)}return n}function _f(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fM=Bi&&"documentMode"in document&&11>=document.documentMode,kr=null,vf=null,il=null,xf=!1;function Vm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xf||kr==null||kr!==Me(l)||(l=kr,"selectionStart"in l&&_f(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),il&&nl(il,l)||(il=l,l=Jc(vf,"onSelect"),0<l.length&&(n=new Ir("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=kr)))}function rr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Xr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},Sf={},km={};Bi&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function or(t){if(Sf[t])return Sf[t];if(!Xr[t])return t;var n=Xr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in km)return Sf[t]=n[s];return t}var Xm=or("animationend"),Wm=or("animationiteration"),Ym=or("animationstart"),dM=or("transitionrun"),hM=or("transitionstart"),pM=or("transitioncancel"),qm=or("transitionend"),jm=new Map,Mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mf.push("scrollEnd");function aa(t,n){jm.set(t,n),Z(n,[t])}var fc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},zi=[],Wr=0,yf=0;function dc(){for(var t=Wr,n=yf=Wr=0;n<t;){var s=zi[n];zi[n++]=null;var l=zi[n];zi[n++]=null;var f=zi[n];zi[n++]=null;var p=zi[n];if(zi[n++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&Zm(s,f,p)}}function hc(t,n,s,l){zi[Wr++]=t,zi[Wr++]=n,zi[Wr++]=s,zi[Wr++]=l,yf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ef(t,n,s,l){return hc(t,n,s,l),pc(t)}function lr(t,n){return hc(t,null,null,n),pc(t)}function Zm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ye(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function pc(t){if(50<Tl)throw Tl=0,Nd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function mM(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,n,s,l){return new mM(t,n,s,l)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fa(t,n){var s=t.alternate;return s===null?(s=Ei(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Km(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function mc(t,n,s,l,f,p){var M=0;if(l=t,typeof t=="function")bf(t)&&(M=1);else if(typeof t=="string")M=Sy(t,s,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Ei(31,s,n,f),t.elementType=U,t.lanes=p,t;case C:return cr(s.children,f,p,n);case y:M=8,f|=24;break;case S:return t=Ei(12,s,n,f|2),t.elementType=S,t.lanes=p,t;case L:return t=Ei(13,s,n,f),t.elementType=L,t.lanes=p,t;case N:return t=Ei(19,s,n,f),t.elementType=N,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:M=10;break e;case O:M=9;break e;case A:M=11;break e;case F:M=14;break e;case T:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Ei(M,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function cr(t,n,s,l){return t=Ei(7,t,l,n),t.lanes=s,t}function Tf(t,n,s){return t=Ei(6,t,null,n),t.lanes=s,t}function Qm(t){var n=Ei(18,null,null,0);return n.stateNode=t,n}function Af(t,n,s){return n=Ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Jm=new WeakMap;function Hi(t,n){if(typeof t=="object"&&t!==null){var s=Jm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:ln(n)},Jm.set(t,n),n)}return{value:t,source:n,stack:ln(n)}}var qr=[],jr=0,gc=null,al=0,Gi=[],Vi=0,_s=null,Sa=1,Ma="";function za(t,n){qr[jr++]=al,qr[jr++]=gc,gc=t,al=n}function $m(t,n,s){Gi[Vi++]=Sa,Gi[Vi++]=Ma,Gi[Vi++]=_s,_s=t;var l=Sa;t=Ma;var f=32-Ye(l)-1;l&=~(1<<f),s+=1;var p=32-Ye(n)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Sa=1<<32-Ye(n)+f|s<<f|l,Ma=p+t}else Sa=1<<p|s<<f|l,Ma=t}function Rf(t){t.return!==null&&(za(t,1),$m(t,1,0))}function Cf(t){for(;t===gc;)gc=qr[--jr],qr[jr]=null,al=qr[--jr],qr[jr]=null;for(;t===_s;)_s=Gi[--Vi],Gi[Vi]=null,Ma=Gi[--Vi],Gi[Vi]=null,Sa=Gi[--Vi],Gi[Vi]=null}function e0(t,n){Gi[Vi++]=Sa,Gi[Vi++]=Ma,Gi[Vi++]=_s,Sa=n.id,Ma=n.overflow,_s=t}var Yn=null,cn=null,Ot=!1,vs=null,ki=!1,wf=Error(r(519));function xs(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(Hi(n,t)),wf}function t0(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[vn]=t,n[Rn]=l,s){case"dialog":wt("cancel",n),wt("close",n);break;case"iframe":case"object":case"embed":wt("load",n);break;case"video":case"audio":for(s=0;s<Rl.length;s++)wt(Rl[s],n);break;case"source":wt("error",n);break;case"img":case"image":case"link":wt("error",n),wt("load",n);break;case"details":wt("toggle",n);break;case"input":wt("invalid",n),mt(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":wt("invalid",n);break;case"textarea":wt("invalid",n),Bt(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||v_(n.textContent,s)?(l.popover!=null&&(wt("beforetoggle",n),wt("toggle",n)),l.onScroll!=null&&wt("scroll",n),l.onScrollEnd!=null&&wt("scrollend",n),l.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||xs(t,!0)}function n0(t){for(Yn=t.return;Yn;)switch(Yn.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Yn=Yn.return}}function Zr(t){if(t!==Yn)return!1;if(!Ot)return n0(t),Ot=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||qd(t.type,t.memoizedProps)),s=!s),s&&cn&&xs(t),n0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));cn=R_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));cn=R_(t)}else n===27?(n=cn,Us(t.type)?(t=Jd,Jd=null,cn=t):cn=n):cn=Yn?Wi(t.stateNode.nextSibling):null;return!0}function ur(){cn=Yn=null,Ot=!1}function Df(){var t=vs;return t!==null&&(gi===null?gi=t:gi.push.apply(gi,t),vs=null),t}function sl(t){vs===null?vs=[t]:vs.push(t)}var Lf=I(null),fr=null,Ha=null;function Ss(t,n,s){Se(Lf,n._currentValue),n._currentValue=s}function Ga(t){t._currentValue=Lf.current,K(Lf)}function Nf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Uf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var V=0;V<n.length;V++)if(w.context===n[V]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),Nf(p.return,s,t),l||(M=null);break e}p=w.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),Nf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Kr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var w=f.type;yi(f.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(f===be.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}f=f.return}t!==null&&Uf(n,t,s,l),n.flags|=262144}function _c(t){for(t=t.firstContext;t!==null;){if(!yi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){fr=t,Ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qn(t){return i0(fr,t)}function vc(t,n){return fr===null&&dr(t),i0(t,n)}function i0(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ha===null){if(t===null)throw Error(r(308));Ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ha=Ha.next=n;return s}var gM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},_M=a.unstable_scheduleCallback,vM=a.unstable_NormalPriority,wn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Of(){return{controller:new gM,data:new Map,refCount:0}}function rl(t){t.refCount--,t.refCount===0&&_M(vM,function(){t.controller.abort()})}var ol=null,Pf=0,Qr=0,Jr=null;function xM(t,n){if(ol===null){var s=ol=[];Pf=0,Qr=Fd(),Jr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Pf++,n.then(a0,a0),n}function a0(){if(--Pf===0&&ol!==null){Jr!==null&&(Jr.status="fulfilled");var t=ol;ol=null,Qr=0,Jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function SM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var s0=z.S;z.S=function(t,n){Vg=qt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xM(t,n),s0!==null&&s0(t,n)};var hr=I(null);function If(){var t=hr.current;return t!==null?t:an.pooledCache}function xc(t,n){n===null?Se(hr,hr.current):Se(hr,n.pool)}function r0(){var t=If();return t===null?null:{parent:wn._currentValue,pool:t}}var $r=Error(r(460)),Bf=Error(r(474)),Sc=Error(r(542)),Mc={then:function(){}};function o0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function l0(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Ii,Ii),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,u0(t),t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=an,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,u0(t),t}throw mr=n,$r}}function pr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(mr=s,$r):s}}var mr=null;function c0(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function u0(t){if(t===$r||t===Sc)throw Error(r(483))}var eo=null,ll=0;function yc(t){var n=ll;return ll+=1,eo===null&&(eo=[]),l0(eo,t,n)}function cl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ec(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function f0(t){function n(Q,W){if(t){var se=Q.deletions;se===null?(Q.deletions=[W],Q.flags|=16):se.push(W)}}function s(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function l(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function f(Q,W){return Q=Fa(Q,W),Q.index=0,Q.sibling=null,Q}function p(Q,W,se){return Q.index=se,t?(se=Q.alternate,se!==null?(se=se.index,se<W?(Q.flags|=67108866,W):se):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function M(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,W,se,Ee){return W===null||W.tag!==6?(W=Tf(se,Q.mode,Ee),W.return=Q,W):(W=f(W,se),W.return=Q,W)}function V(Q,W,se,Ee){var st=se.type;return st===C?xe(Q,W,se.props.children,Ee,se.key):W!==null&&(W.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===T&&pr(st)===W.type)?(W=f(W,se.props),cl(W,se),W.return=Q,W):(W=mc(se.type,se.key,se.props,null,Q.mode,Ee),cl(W,se),W.return=Q,W)}function re(Q,W,se,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Af(se,Q.mode,Ee),W.return=Q,W):(W=f(W,se.children||[]),W.return=Q,W)}function xe(Q,W,se,Ee,st){return W===null||W.tag!==7?(W=cr(se,Q.mode,Ee,st),W.return=Q,W):(W=f(W,se),W.return=Q,W)}function Ae(Q,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Tf(""+W,Q.mode,se),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return se=mc(W.type,W.key,W.props,null,Q.mode,se),cl(se,W),se.return=Q,se;case E:return W=Af(W,Q.mode,se),W.return=Q,W;case T:return W=pr(W),Ae(Q,W,se)}if(X(W)||q(W))return W=cr(W,Q.mode,se,null),W.return=Q,W;if(typeof W.then=="function")return Ae(Q,yc(W),se);if(W.$$typeof===P)return Ae(Q,vc(Q,W),se);Ec(Q,W)}return null}function le(Q,W,se,Ee){var st=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return st!==null?null:w(Q,W,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===st?V(Q,W,se,Ee):null;case E:return se.key===st?re(Q,W,se,Ee):null;case T:return se=pr(se),le(Q,W,se,Ee)}if(X(se)||q(se))return st!==null?null:xe(Q,W,se,Ee,null);if(typeof se.then=="function")return le(Q,W,yc(se),Ee);if(se.$$typeof===P)return le(Q,W,vc(Q,se),Ee);Ec(Q,se)}return null}function he(Q,W,se,Ee,st){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return Q=Q.get(se)||null,w(W,Q,""+Ee,st);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case x:return Q=Q.get(Ee.key===null?se:Ee.key)||null,V(W,Q,Ee,st);case E:return Q=Q.get(Ee.key===null?se:Ee.key)||null,re(W,Q,Ee,st);case T:return Ee=pr(Ee),he(Q,W,se,Ee,st)}if(X(Ee)||q(Ee))return Q=Q.get(se)||null,xe(W,Q,Ee,st,null);if(typeof Ee.then=="function")return he(Q,W,se,yc(Ee),st);if(Ee.$$typeof===P)return he(Q,W,se,vc(W,Ee),st);Ec(W,Ee)}return null}function $e(Q,W,se,Ee){for(var st=null,Vt=null,tt=W,Mt=W=0,Nt=null;tt!==null&&Mt<se.length;Mt++){tt.index>Mt?(Nt=tt,tt=null):Nt=tt.sibling;var kt=le(Q,tt,se[Mt],Ee);if(kt===null){tt===null&&(tt=Nt);break}t&&tt&&kt.alternate===null&&n(Q,tt),W=p(kt,W,Mt),Vt===null?st=kt:Vt.sibling=kt,Vt=kt,tt=Nt}if(Mt===se.length)return s(Q,tt),Ot&&za(Q,Mt),st;if(tt===null){for(;Mt<se.length;Mt++)tt=Ae(Q,se[Mt],Ee),tt!==null&&(W=p(tt,W,Mt),Vt===null?st=tt:Vt.sibling=tt,Vt=tt);return Ot&&za(Q,Mt),st}for(tt=l(tt);Mt<se.length;Mt++)Nt=he(tt,Q,Mt,se[Mt],Ee),Nt!==null&&(t&&Nt.alternate!==null&&tt.delete(Nt.key===null?Mt:Nt.key),W=p(Nt,W,Mt),Vt===null?st=Nt:Vt.sibling=Nt,Vt=Nt);return t&&tt.forEach(function(Fs){return n(Q,Fs)}),Ot&&za(Q,Mt),st}function ot(Q,W,se,Ee){if(se==null)throw Error(r(151));for(var st=null,Vt=null,tt=W,Mt=W=0,Nt=null,kt=se.next();tt!==null&&!kt.done;Mt++,kt=se.next()){tt.index>Mt?(Nt=tt,tt=null):Nt=tt.sibling;var Fs=le(Q,tt,kt.value,Ee);if(Fs===null){tt===null&&(tt=Nt);break}t&&tt&&Fs.alternate===null&&n(Q,tt),W=p(Fs,W,Mt),Vt===null?st=Fs:Vt.sibling=Fs,Vt=Fs,tt=Nt}if(kt.done)return s(Q,tt),Ot&&za(Q,Mt),st;if(tt===null){for(;!kt.done;Mt++,kt=se.next())kt=Ae(Q,kt.value,Ee),kt!==null&&(W=p(kt,W,Mt),Vt===null?st=kt:Vt.sibling=kt,Vt=kt);return Ot&&za(Q,Mt),st}for(tt=l(tt);!kt.done;Mt++,kt=se.next())kt=he(tt,Q,Mt,kt.value,Ee),kt!==null&&(t&&kt.alternate!==null&&tt.delete(kt.key===null?Mt:kt.key),W=p(kt,W,Mt),Vt===null?st=kt:Vt.sibling=kt,Vt=kt);return t&&tt.forEach(function(Ly){return n(Q,Ly)}),Ot&&za(Q,Mt),st}function tn(Q,W,se,Ee){if(typeof se=="object"&&se!==null&&se.type===C&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var st=se.key;W!==null;){if(W.key===st){if(st=se.type,st===C){if(W.tag===7){s(Q,W.sibling),Ee=f(W,se.props.children),Ee.return=Q,Q=Ee;break e}}else if(W.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===T&&pr(st)===W.type){s(Q,W.sibling),Ee=f(W,se.props),cl(Ee,se),Ee.return=Q,Q=Ee;break e}s(Q,W);break}else n(Q,W);W=W.sibling}se.type===C?(Ee=cr(se.props.children,Q.mode,Ee,se.key),Ee.return=Q,Q=Ee):(Ee=mc(se.type,se.key,se.props,null,Q.mode,Ee),cl(Ee,se),Ee.return=Q,Q=Ee)}return M(Q);case E:e:{for(st=se.key;W!==null;){if(W.key===st)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){s(Q,W.sibling),Ee=f(W,se.children||[]),Ee.return=Q,Q=Ee;break e}else{s(Q,W);break}else n(Q,W);W=W.sibling}Ee=Af(se,Q.mode,Ee),Ee.return=Q,Q=Ee}return M(Q);case T:return se=pr(se),tn(Q,W,se,Ee)}if(X(se))return $e(Q,W,se,Ee);if(q(se)){if(st=q(se),typeof st!="function")throw Error(r(150));return se=st.call(se),ot(Q,W,se,Ee)}if(typeof se.then=="function")return tn(Q,W,yc(se),Ee);if(se.$$typeof===P)return tn(Q,W,vc(Q,se),Ee);Ec(Q,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(s(Q,W.sibling),Ee=f(W,se),Ee.return=Q,Q=Ee):(s(Q,W),Ee=Tf(se,Q.mode,Ee),Ee.return=Q,Q=Ee),M(Q)):s(Q,W)}return function(Q,W,se,Ee){try{ll=0;var st=tn(Q,W,se,Ee);return eo=null,st}catch(tt){if(tt===$r||tt===Sc)throw tt;var Vt=Ei(29,tt,null,Q.mode);return Vt.lanes=Ee,Vt.return=Q,Vt}finally{}}}var gr=f0(!0),d0=f0(!1),Ms=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ys(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Es(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Wt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=pc(t),Zm(t,null,s),n}return hc(t,l,n,s),pc(t)}function ul(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,An(t,s)}}function Hf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Gf=!1;function fl(){if(Gf){var t=Jr;if(t!==null)throw t}}function dl(t,n,s,l){Gf=!1;var f=t.updateQueue;Ms=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,re=V.next;V.next=null,M===null?p=re:M.next=re,M=V;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,w=xe.lastBaseUpdate,w!==M&&(w===null?xe.firstBaseUpdate=re:w.next=re,xe.lastBaseUpdate=V))}if(p!==null){var Ae=f.baseState;M=0,xe=re=V=null,w=p;do{var le=w.lane&-536870913,he=le!==w.lane;if(he?(Lt&le)===le:(l&le)===le){le!==0&&le===Qr&&(Gf=!0),xe!==null&&(xe=xe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var $e=t,ot=w;le=n;var tn=s;switch(ot.tag){case 1:if($e=ot.payload,typeof $e=="function"){Ae=$e.call(tn,Ae,le);break e}Ae=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=ot.payload,le=typeof $e=="function"?$e.call(tn,Ae,le):$e,le==null)break e;Ae=_({},Ae,le);break e;case 2:Ms=!0}}le=w.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=f.callbacks,he===null?f.callbacks=[le]:he.push(le))}else he={lane:le,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xe===null?(re=xe=he,V=Ae):xe=xe.next=he,M|=le;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;he=w,w=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);xe===null&&(V=Ae),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=xe,p===null&&(f.shared.lanes=0),Cs|=M,t.lanes=M,t.memoizedState=Ae}}function h0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function p0(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)h0(s[t],n)}var to=I(null),bc=I(0);function m0(t,n){t=Ka,Se(bc,t),Se(to,n),Ka=t|n.baseLanes}function Vf(){Se(bc,Ka),Se(to,to.current)}function kf(){Ka=bc.current,K(to),K(bc)}var bi=I(null),Xi=null;function bs(t){var n=t.alternate;Se(En,En.current&1),Se(bi,t),Xi===null&&(n===null||to.current!==null||n.memoizedState!==null)&&(Xi=t)}function Xf(t){Se(En,En.current),Se(bi,t),Xi===null&&(Xi=t)}function g0(t){t.tag===22?(Se(En,En.current),Se(bi,t),Xi===null&&(Xi=t)):Ts()}function Ts(){Se(En,En.current),Se(bi,bi.current)}function Ti(t){K(bi),Xi===t&&(Xi=null),K(En)}var En=I(0);function Tc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Kd(s)||Qd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Va=0,xt=null,$t=null,Dn=null,Ac=!1,no=!1,_r=!1,Rc=0,hl=0,io=null,MM=0;function xn(){throw Error(r(321))}function Wf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!yi(t[s],n[s]))return!1;return!0}function Yf(t,n,s,l,f,p){return Va=p,xt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?$0:od,_r=!1,p=s(l,f),_r=!1,no&&(p=v0(n,s,l,f)),_0(t),p}function _0(t){z.H=gl;var n=$t!==null&&$t.next!==null;if(Va=0,Dn=$t=xt=null,Ac=!1,hl=0,io=null,n)throw Error(r(300));t===null||Ln||(t=t.dependencies,t!==null&&_c(t)&&(Ln=!0))}function v0(t,n,s,l){xt=t;var f=0;do{if(no&&(io=null),hl=0,no=!1,25<=f)throw Error(r(301));if(f+=1,Dn=$t=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=eg,p=n(s,l)}while(no);return p}function yM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?pl(n):n,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(xt.flags|=1024),n}function qf(){var t=Rc!==0;return Rc=0,t}function jf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Zf(t){if(Ac){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ac=!1}Va=0,Dn=$t=xt=null,no=!1,hl=Rc=0,io=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?xt.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function bn(){if($t===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var n=Dn===null?xt.memoizedState:Dn.next;if(n!==null)Dn=n,$t=t;else{if(t===null)throw xt.alternate===null?Error(r(467)):Error(r(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Dn===null?xt.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function Cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(t){var n=hl;return hl+=1,io===null&&(io=[]),t=l0(io,t,n),n=xt,(Dn===null?n.memoizedState:Dn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?$0:od),t}function wc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pl(t);if(t.$$typeof===P)return qn(t)}throw Error(r(438,String(t)))}function Kf(t){var n=null,s=xt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=xt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Cc(),xt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=k;return n.index++,s}function ka(t,n){return typeof n=="function"?n(t):n}function Dc(t){var n=bn();return Qf(n,$t,t)}function Qf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=M=null,V=null,re=n,xe=!1;do{var Ae=re.lane&-536870913;if(Ae!==re.lane?(Lt&Ae)===Ae:(Va&Ae)===Ae){var le=re.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ae===Qr&&(xe=!0);else if((Va&le)===le){re=re.next,le===Qr&&(xe=!0);continue}else Ae={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=Ae,M=p):V=V.next=Ae,xt.lanes|=le,Cs|=le;Ae=re.action,_r&&s(p,Ae),p=re.hasEagerState?re.eagerState:s(p,Ae)}else le={lane:Ae,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=le,M=p):V=V.next=le,xt.lanes|=Ae,Cs|=Ae;re=re.next}while(re!==null&&re!==n);if(V===null?M=p:V.next=w,!yi(p,t.memoizedState)&&(Ln=!0,xe&&(s=Jr,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Jf(t){var n=bn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);yi(p,n.memoizedState)||(Ln=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function x0(t,n,s){var l=xt,f=bn(),p=Ot;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!yi(($t||f).memoizedState,s);if(M&&(f.memoizedState=s,Ln=!0),f=f.queue,td(y0.bind(null,l,f,t),[t]),f.getSnapshot!==n||M||Dn!==null&&Dn.memoizedState.tag&1){if(l.flags|=2048,ao(9,{destroy:void 0},M0.bind(null,l,f,s,n),null),an===null)throw Error(r(349));p||(Va&127)!==0||S0(l,n,s)}return s}function S0(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=xt.updateQueue,n===null?(n=Cc(),xt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function M0(t,n,s,l){n.value=s,n.getSnapshot=l,E0(n)&&b0(t)}function y0(t,n,s){return s(function(){E0(n)&&b0(t)})}function E0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!yi(t,s)}catch{return!0}}function b0(t){var n=lr(t,2);n!==null&&_i(n,t,2)}function $f(t){var n=si();if(typeof t=="function"){var s=t;if(t=s(),_r){Oe(!0);try{s()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},n}function T0(t,n,s,l){return t.baseState=s,Qf(t,$t,typeof l=="function"?l:ka)}function EM(t,n,s,l,f){if(Uc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,A0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function A0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,M={};z.T=M;try{var w=s(f,l),V=z.S;V!==null&&V(M,w),R0(t,n,w)}catch(re){ed(t,n,re)}finally{p!==null&&M.types!==null&&(p.types=M.types),z.T=p}}else try{p=s(f,l),R0(t,n,p)}catch(re){ed(t,n,re)}}function R0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){C0(t,n,l)},function(l){return ed(t,n,l)}):C0(t,n,s)}function C0(t,n,s){n.status="fulfilled",n.value=s,w0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,A0(t,s)))}function ed(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,w0(n),n=n.next;while(n!==l)}t.action=null}function w0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function D0(t,n){return n}function L0(t,n){if(Ot){var s=an.formState;if(s!==null){e:{var l=xt;if(Ot){if(cn){t:{for(var f=cn,p=ki;f.nodeType!==8;){if(!p){f=null;break t}if(f=Wi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){cn=Wi(f.nextSibling),l=f.data==="F!";break e}}xs(l)}l=!1}l&&(n=s[0])}}return s=si(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:n},s.queue=l,s=K0.bind(null,xt,l),l.dispatch=s,l=$f(!1),p=rd.bind(null,xt,!1,l.queue),l=si(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=EM.bind(null,xt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function N0(t){var n=bn();return U0(n,$t,t)}function U0(t,n,s){if(n=Qf(t,n,D0)[0],t=Dc(ka)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=pl(n)}catch(M){throw M===$r?Sc:M}else l=n;n=bn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(xt.flags|=2048,ao(9,{destroy:void 0},bM.bind(null,f,s),null)),[l,p,t]}function bM(t,n){t.action=n}function O0(t){var n=bn(),s=$t;if(s!==null)return U0(n,s,t);bn(),n=n.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function ao(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=xt.updateQueue,n===null&&(n=Cc(),xt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function P0(){return bn().memoizedState}function Lc(t,n,s,l){var f=si();xt.flags|=t,f.memoizedState=ao(1|n,{destroy:void 0},s,l===void 0?null:l)}function Nc(t,n,s,l){var f=bn();l=l===void 0?null:l;var p=f.memoizedState.inst;$t!==null&&l!==null&&Wf(l,$t.memoizedState.deps)?f.memoizedState=ao(n,p,s,l):(xt.flags|=t,f.memoizedState=ao(1|n,p,s,l))}function I0(t,n){Lc(8390656,8,t,n)}function td(t,n){Nc(2048,8,t,n)}function TM(t){xt.flags|=4;var n=xt.updateQueue;if(n===null)n=Cc(),xt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function B0(t){var n=bn().memoizedState;return TM({ref:n,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function F0(t,n){return Nc(4,2,t,n)}function z0(t,n){return Nc(4,4,t,n)}function H0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function G0(t,n,s){s=s!=null?s.concat([t]):null,Nc(4,4,H0.bind(null,n,t),s)}function nd(){}function V0(t,n){var s=bn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Wf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function k0(t,n){var s=bn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Wf(n,l[1]))return l[0];if(l=t(),_r){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[l,n],l}function id(t,n,s){return s===void 0||(Va&1073741824)!==0&&(Lt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Xg(),xt.lanes|=t,Cs|=t,s)}function X0(t,n,s,l){return yi(s,n)?s:to.current!==null?(t=id(t,s,l),yi(t,n)||(Ln=!0),t):(Va&42)===0||(Va&1073741824)!==0&&(Lt&261930)===0?(Ln=!0,t.memoizedState=s):(t=Xg(),xt.lanes|=t,Cs|=t,n)}function W0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var M=z.T,w={};z.T=w,rd(t,!1,n,s);try{var V=f(),re=z.S;if(re!==null&&re(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var xe=SM(V,l);ml(t,n,xe,Ci(t))}else ml(t,n,l,Ci(t))}catch(Ae){ml(t,n,{then:function(){},status:"rejected",reason:Ae},Ci())}finally{H.p=p,M!==null&&w.types!==null&&(M.types=w.types),z.T=M}}function AM(){}function ad(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=Y0(t).queue;W0(t,f,n,$,s===null?AM:function(){return q0(t),s(l)})}function Y0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function q0(t){var n=Y0(t);n.next===null&&(n=t.alternate.memoizedState),ml(t,n.next.queue,{},Ci())}function sd(){return qn(Nl)}function j0(){return bn().memoizedState}function Z0(){return bn().memoizedState}function RM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ci();t=ys(s);var l=Es(n,t,s);l!==null&&(_i(l,n,s),ul(l,n,s)),n={cache:Of()},t.payload=n;return}n=n.return}}function CM(t,n,s){var l=Ci();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Uc(t)?Q0(n,s):(s=Ef(t,n,s,l),s!==null&&(_i(s,t,l),J0(s,n,l)))}function K0(t,n,s){var l=Ci();ml(t,n,s,l)}function ml(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Uc(t))Q0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,w=p(M,s);if(f.hasEagerState=!0,f.eagerState=w,yi(w,M))return hc(t,n,f,0),an===null&&dc(),!1}catch{}finally{}if(s=Ef(t,n,f,l),s!==null)return _i(s,t,l),J0(s,n,l),!0}return!1}function rd(t,n,s,l){if(l={lane:2,revertLane:Fd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Uc(t)){if(n)throw Error(r(479))}else n=Ef(t,s,l,2),n!==null&&_i(n,t,2)}function Uc(t){var n=t.alternate;return t===xt||n!==null&&n===xt}function Q0(t,n){no=Ac=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function J0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,An(t,s)}}var gl={readContext:qn,use:wc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};gl.useEffectEvent=xn;var $0={readContext:qn,use:wc,useCallback:function(t,n){return si().memoizedState=[t,n===void 0?null:n],t},useContext:qn,useEffect:I0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Lc(4194308,4,H0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Lc(4194308,4,t,n)},useInsertionEffect:function(t,n){Lc(4,2,t,n)},useMemo:function(t,n){var s=si();n=n===void 0?null:n;var l=t();if(_r){Oe(!0);try{t()}finally{Oe(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=si();if(s!==void 0){var f=s(n);if(_r){Oe(!0);try{s(n)}finally{Oe(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=CM.bind(null,xt,t),[l.memoizedState,t]},useRef:function(t){var n=si();return t={current:t},n.memoizedState=t},useState:function(t){t=$f(t);var n=t.queue,s=K0.bind(null,xt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:nd,useDeferredValue:function(t,n){var s=si();return id(s,t,n)},useTransition:function(){var t=$f(!1);return t=W0.bind(null,xt,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=xt,f=si();if(Ot){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),an===null)throw Error(r(349));(Lt&127)!==0||S0(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,I0(y0.bind(null,l,p,t),[t]),l.flags|=2048,ao(9,{destroy:void 0},M0.bind(null,l,p,s,n),null),s},useId:function(){var t=si(),n=an.identifierPrefix;if(Ot){var s=Ma,l=Sa;s=(l&~(1<<32-Ye(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Rc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=MM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sd,useFormState:L0,useActionState:L0,useOptimistic:function(t){var n=si();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=rd.bind(null,xt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Kf,useCacheRefresh:function(){return si().memoizedState=RM.bind(null,xt)},useEffectEvent:function(t){var n=si(),s={impl:t};return n.memoizedState=s,function(){if((Wt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},od={readContext:qn,use:wc,useCallback:V0,useContext:qn,useEffect:td,useImperativeHandle:G0,useInsertionEffect:F0,useLayoutEffect:z0,useMemo:k0,useReducer:Dc,useRef:P0,useState:function(){return Dc(ka)},useDebugValue:nd,useDeferredValue:function(t,n){var s=bn();return X0(s,$t.memoizedState,t,n)},useTransition:function(){var t=Dc(ka)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:pl(t),n]},useSyncExternalStore:x0,useId:j0,useHostTransitionStatus:sd,useFormState:N0,useActionState:N0,useOptimistic:function(t,n){var s=bn();return T0(s,$t,t,n)},useMemoCache:Kf,useCacheRefresh:Z0};od.useEffectEvent=B0;var eg={readContext:qn,use:wc,useCallback:V0,useContext:qn,useEffect:td,useImperativeHandle:G0,useInsertionEffect:F0,useLayoutEffect:z0,useMemo:k0,useReducer:Jf,useRef:P0,useState:function(){return Jf(ka)},useDebugValue:nd,useDeferredValue:function(t,n){var s=bn();return $t===null?id(s,t,n):X0(s,$t.memoizedState,t,n)},useTransition:function(){var t=Jf(ka)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:pl(t),n]},useSyncExternalStore:x0,useId:j0,useHostTransitionStatus:sd,useFormState:O0,useActionState:O0,useOptimistic:function(t,n){var s=bn();return $t!==null?T0(s,$t,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:Z0};eg.useEffectEvent=B0;function ld(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var cd={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ci(),f=ys(l);f.payload=n,s!=null&&(f.callback=s),n=Es(t,f,l),n!==null&&(_i(n,t,l),ul(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ci(),f=ys(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Es(t,f,l),n!==null&&(_i(n,t,l),ul(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ci(),l=ys(s);l.tag=2,n!=null&&(l.callback=n),n=Es(t,l,s),n!==null&&(_i(n,t,s),ul(n,t,s))}};function tg(t,n,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!nl(s,l)||!nl(f,p):!0}function ng(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&cd.enqueueReplaceState(n,n.state,null)}function vr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function ig(t){fc(t)}function ag(t){console.error(t)}function sg(t){fc(t)}function Oc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function rg(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ud(t,n,s){return s=ys(s),s.tag=3,s.payload={element:null},s.callback=function(){Oc(t,n)},s}function og(t){return t=ys(t),t.tag=3,t}function lg(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){rg(n,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){rg(n,s,l),typeof f!="function"&&(ws===null?ws=new Set([this]):ws.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function wM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Kr(n,s,f,!0),s=bi.current,s!==null){switch(s.tag){case 31:case 13:return Xi===null?Yc():s.alternate===null&&Sn===0&&(Sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Pd(t,l,f)),!1;case 22:return s.flags|=65536,l===Mc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Pd(t,l,f)),!1}throw Error(r(435,s.tag))}return Pd(t,l,f),Yc(),!1}if(Ot)return n=bi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==wf&&(t=Error(r(422),{cause:l}),sl(Hi(t,s)))):(l!==wf&&(n=Error(r(423),{cause:l}),sl(Hi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Hi(l,s),f=ud(t.stateNode,l,f),Hf(t,f),Sn!==4&&(Sn=2)),!1;var p=Error(r(520),{cause:l});if(p=Hi(p,s),bl===null?bl=[p]:bl.push(p),Sn!==4&&(Sn=2),n===null)return!0;l=Hi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=ud(s.stateNode,l,t),Hf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ws===null||!ws.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=og(f),lg(f,t,s,l),Hf(s,f),!1}s=s.return}while(s!==null);return!1}var fd=Error(r(461)),Ln=!1;function jn(t,n,s,l){n.child=t===null?d0(n,null,s,l):gr(n,t.child,s,l)}function cg(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return dr(n),l=Yf(t,n,s,M,p,f),w=qf(),t!==null&&!Ln?(jf(t,n,f),Xa(t,n,f)):(Ot&&w&&Rf(n),n.flags|=1,jn(t,n,l,f),n.child)}function ug(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!bf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,fg(t,n,p,l,f)):(t=mc(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!xd(t,f)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:nl,s(M,l)&&t.ref===n.ref)return Xa(t,n,f)}return n.flags|=1,t=Fa(p,l),t.ref=n.ref,t.return=n,n.child=t}function fg(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(nl(p,l)&&t.ref===n.ref)if(Ln=!1,n.pendingProps=l=p,xd(t,f))(t.flags&131072)!==0&&(Ln=!0);else return n.lanes=t.lanes,Xa(t,n,f)}return dd(t,n,s,l,f)}function dg(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return hg(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xc(n,p!==null?p.cachePool:null),p!==null?m0(n,p):Vf(),g0(n);else return l=n.lanes=536870912,hg(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(xc(n,p.cachePool),m0(n,p),Ts(),n.memoizedState=null):(t!==null&&xc(n,null),Vf(),Ts());return jn(t,n,f,s),n.child}function _l(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hg(t,n,s,l,f){var p=If();return p=p===null?null:{parent:wn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&xc(n,null),Vf(),g0(n),t!==null&&Kr(t,n,l,!0),n.childLanes=f,null}function Pc(t,n){return n=Bc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function pg(t,n,s){return gr(n,t.child,null,s),t=Pc(n,n.pendingProps),t.flags|=2,Ti(n),n.memoizedState=null,t}function DM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ot){if(l.mode==="hidden")return t=Pc(n,l),n.lanes=536870912,_l(null,t);if(Xf(n),(t=cn)?(t=A_(t,ki),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_s!==null?{id:Sa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},s=Qm(t),s.return=n,n.child=s,Yn=n,cn=null)):t=null,t===null)throw xs(n);return n.lanes=536870912,null}return Pc(n,l)}var p=t.memoizedState;if(p!==null){var M=p.dehydrated;if(Xf(n),f)if(n.flags&256)n.flags&=-257,n=pg(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ln||Kr(t,n,s,!1),f=(s&t.childLanes)!==0,Ln||f){if(l=an,l!==null&&(M=Hn(l,s),M!==0&&M!==p.retryLane))throw p.retryLane=M,lr(t,M),_i(l,t,M),fd;Yc(),n=pg(t,n,s)}else t=p.treeContext,cn=Wi(M.nextSibling),Yn=n,Ot=!0,vs=null,ki=!1,t!==null&&e0(n,t),n=Pc(n,l),n.flags|=4096;return n}return t=Fa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ic(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function dd(t,n,s,l,f){return dr(n),s=Yf(t,n,s,l,void 0,f),l=qf(),t!==null&&!Ln?(jf(t,n,f),Xa(t,n,f)):(Ot&&l&&Rf(n),n.flags|=1,jn(t,n,s,f),n.child)}function mg(t,n,s,l,f,p){return dr(n),n.updateQueue=null,s=v0(n,l,s,f),_0(t),l=qf(),t!==null&&!Ln?(jf(t,n,p),Xa(t,n,p)):(Ot&&l&&Rf(n),n.flags|=1,jn(t,n,s,p),n.child)}function gg(t,n,s,l,f){if(dr(n),n.stateNode===null){var p=Yr,M=s.contextType;typeof M=="object"&&M!==null&&(p=qn(M)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=cd,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},Ff(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?qn(M):Yr,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(ld(n,s,M,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&cd.enqueueReplaceState(p,p.state,null),dl(n,l,p,f),fl(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,V=vr(s,w);p.props=V;var re=p.context,xe=s.contextType;M=Yr,typeof xe=="object"&&xe!==null&&(M=qn(xe));var Ae=s.getDerivedStateFromProps;xe=typeof Ae=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xe||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||re!==M)&&ng(n,p,l,M),Ms=!1;var le=n.memoizedState;p.state=le,dl(n,l,p,f),fl(),re=n.memoizedState,w||le!==re||Ms?(typeof Ae=="function"&&(ld(n,s,Ae,l),re=n.memoizedState),(V=Ms||tg(n,s,V,l,le,re,M))?(xe||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=M,l=V):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,zf(t,n),M=n.memoizedProps,xe=vr(s,M),p.props=xe,Ae=n.pendingProps,le=p.context,re=s.contextType,V=Yr,typeof re=="object"&&re!==null&&(V=qn(re)),w=s.getDerivedStateFromProps,(re=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Ae||le!==V)&&ng(n,p,l,V),Ms=!1,le=n.memoizedState,p.state=le,dl(n,l,p,f),fl();var he=n.memoizedState;M!==Ae||le!==he||Ms||t!==null&&t.dependencies!==null&&_c(t.dependencies)?(typeof w=="function"&&(ld(n,s,w,l),he=n.memoizedState),(xe=Ms||tg(n,s,xe,l,le,he,V)||t!==null&&t.dependencies!==null&&_c(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,he,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,he,V)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=he),p.props=l,p.state=he,p.context=V,l=xe):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Ic(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=gr(n,t.child,null,f),n.child=gr(n,null,s,f)):jn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Xa(t,n,f),t}function _g(t,n,s,l){return ur(),n.flags|=256,jn(t,n,s,l),n.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(t){return{baseLanes:t,cachePool:r0()}}function md(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ri),t}function vg(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(En.current&2)!==0),M&&(f=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ot){if(f?bs(n):Ts(),(t=cn)?(t=A_(t,ki),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_s!==null?{id:Sa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},s=Qm(t),s.return=n,n.child=s,Yn=n,cn=null)):t=null,t===null)throw xs(n);return Qd(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ts(),f=n.mode,w=Bc({mode:"hidden",children:w},f),l=cr(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=pd(s),l.childLanes=md(t,M,s),n.memoizedState=hd,_l(null,l)):(bs(n),gd(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(p)n.flags&256?(bs(n),n.flags&=-257,n=_d(t,n,s)):n.memoizedState!==null?(Ts(),n.child=t.child,n.flags|=128,n=null):(Ts(),w=l.fallback,f=n.mode,l=Bc({mode:"visible",children:l.children},f),w=cr(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,gr(n,t.child,null,s),l=n.child,l.memoizedState=pd(s),l.childLanes=md(t,M,s),n.memoizedState=hd,n=_l(null,l));else if(bs(n),Qd(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var re=M.dgst;M=re,l=Error(r(419)),l.stack="",l.digest=M,sl({value:l,source:null,stack:null}),n=_d(t,n,s)}else if(Ln||Kr(t,n,s,!1),M=(s&t.childLanes)!==0,Ln||M){if(M=an,M!==null&&(l=Hn(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,lr(t,l),_i(M,t,l),fd;Kd(w)||Yc(),n=_d(t,n,s)}else Kd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,cn=Wi(w.nextSibling),Yn=n,Ot=!0,vs=null,ki=!1,t!==null&&e0(n,t),n=gd(n,l.children),n.flags|=4096);return n}return f?(Ts(),w=l.fallback,f=n.mode,V=t.child,re=V.sibling,l=Fa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,re!==null?w=Fa(re,w):(w=cr(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,_l(null,l),l=n.child,w=t.child.memoizedState,w===null?w=pd(s):(f=w.cachePool,f!==null?(V=wn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=r0(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=md(t,M,s),n.memoizedState=hd,_l(t.child,l)):(bs(n),s=t.child,t=s.sibling,s=Fa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function gd(t,n){return n=Bc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bc(t,n){return t=Ei(22,t,null,n),t.lanes=0,t}function _d(t,n,s){return gr(n,t.child,null,s),t=gd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xg(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Nf(t.return,n,s)}function vd(t,n,s,l,f,p){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=p)}function Sg(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=En.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,Se(En,M),jn(t,n,l,s),l=Ot?al:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,s,n);else if(t.tag===19)xg(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Tc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),vd(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Tc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}vd(n,!0,s,null,p,l);break;case"together":vd(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Xa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Cs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Kr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Fa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Fa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function xd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_c(t)))}function LM(t,n,s){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),Ss(n,wn,t.memoizedState.cache),ur();break;case 27:case 5:nt(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:Ss(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(bs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?vg(t,n,s):(bs(n),t=Xa(t,n,s),t!==null?t.sibling:null);bs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Kr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return Sg(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(En,En.current),l)break;return null;case 22:return n.lanes=0,dg(t,n,s,n.pendingProps);case 24:Ss(n,wn,t.memoizedState.cache)}return Xa(t,n,s)}function Mg(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ln=!0;else{if(!xd(t,s)&&(n.flags&128)===0)return Ln=!1,LM(t,n,s);Ln=(t.flags&131072)!==0}else Ln=!1,Ot&&(n.flags&1048576)!==0&&$m(n,al,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")bf(t)?(l=vr(t,l),n.tag=1,n=gg(null,n,t,l,s)):(n.tag=0,n=dd(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===A){n.tag=11,n=cg(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=ug(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return dd(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=vr(l,n.pendingProps),gg(t,n,l,f,s);case 3:e:{if(ve(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,zf(t,n),dl(n,l,null,s);var M=n.memoizedState;if(l=M.cache,Ss(n,wn,l),l!==p.cache&&Uf(n,[wn],s,!0),fl(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=_g(t,n,l,s);break e}else if(l!==f){f=Hi(Error(r(424)),n),sl(f),n=_g(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(cn=Wi(t.firstChild),Yn=n,Ot=!0,vs=null,ki=!0,s=d0(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ur(),l===f){n=Xa(t,n,s);break e}jn(t,n,l,s)}n=n.child}return n;case 26:return Ic(t,n),t===null?(s=N_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ot||(s=n.type,t=n.pendingProps,l=$c(ne.current).createElement(s),l[vn]=n,l[Rn]=t,Zn(l,s,t),_n(l),n.stateNode=l):n.memoizedState=N_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Ot&&(l=n.stateNode=w_(n.type,n.pendingProps,ne.current),Yn=n,ki=!0,f=cn,Us(n.type)?(Jd=f,cn=Wi(l.firstChild)):cn=f),jn(t,n,n.pendingProps.children,s),Ic(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ot&&((f=l=cn)&&(l=oy(l,n.type,n.pendingProps,ki),l!==null?(n.stateNode=l,Yn=n,cn=Wi(l.firstChild),ki=!1,f=!0):f=!1),f||xs(n)),nt(n),f=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,qd(f,p)?l=null:M!==null&&qd(f,M)&&(n.flags|=32),n.memoizedState!==null&&(f=Yf(t,n,yM,null,null,s),Nl._currentValue=f),Ic(t,n),jn(t,n,l,s),n.child;case 6:return t===null&&Ot&&((t=s=cn)&&(s=ly(s,n.pendingProps,ki),s!==null?(n.stateNode=s,Yn=n,cn=null,t=!0):t=!1),t||xs(n)),null;case 13:return vg(t,n,s);case 4:return ve(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=gr(n,null,l,s):jn(t,n,l,s),n.child;case 11:return cg(t,n,n.type,n.pendingProps,s);case 7:return jn(t,n,n.pendingProps,s),n.child;case 8:return jn(t,n,n.pendingProps.children,s),n.child;case 12:return jn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ss(n,n.type,l.value),jn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,dr(n),f=qn(f),l=l(f),n.flags|=1,jn(t,n,l,s),n.child;case 14:return ug(t,n,n.type,n.pendingProps,s);case 15:return fg(t,n,n.type,n.pendingProps,s);case 19:return Sg(t,n,s);case 31:return DM(t,n,s);case 22:return dg(t,n,s,n.pendingProps);case 24:return dr(n),l=qn(wn),t===null?(f=If(),f===null&&(f=an,p=Of(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},Ff(n),Ss(n,wn,f)):((t.lanes&s)!==0&&(zf(t,n),dl(n,null,null,s),fl()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ss(n,wn,l)):(l=p.cache,Ss(n,wn,l),l!==f.cache&&Uf(n,[wn],s,!0))),jn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wa(t){t.flags|=4}function Sd(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(jg())t.flags|=8192;else throw mr=Mc,Bf}else t.flags&=-16777217}function yg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!B_(n))if(jg())t.flags|=8192;else throw mr=Mc,Bf}function Fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,lo|=n)}function vl(t,n){if(!Ot)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function NM(t,n,s){var l=n.pendingProps;switch(Cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ga(wn),Ie(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Zr(n)?Wa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Df())),un(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Wa(n),p!==null?(un(n),yg(n,p)):(un(n),Sd(n,f,null,l,s))):p?p!==t.memoizedState?(Wa(n),un(n),yg(n,p)):(un(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Wa(n),un(n),Sd(n,f,t,l,s)),null;case 27:if(Xe(n),s=ne.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Wa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return un(n),null}t=Ne.current,Zr(n)?t0(n):(t=w_(f,l,s),n.stateNode=t,Wa(n))}return un(n),null;case 5:if(Xe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Wa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return un(n),null}if(p=Ne.current,Zr(n))t0(n);else{var M=$c(ne.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[vn]=n,p[Rn]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;e:switch(Zn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wa(n)}}return un(n),Sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Wa(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,Zr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Yn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[vn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||v_(t.nodeValue,s)),t||xs(n,!0)}else t=$c(t).createTextNode(l),t[vn]=n,n.stateNode=t}return un(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Zr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[vn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),t=!1}else s=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Ti(n),n):(Ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return un(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Zr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[vn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),f=!1}else f=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Ti(n),n):(Ti(n),null)}return Ti(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Fc(n,n.updateQueue),un(n),null);case 4:return Ie(),t===null&&Vd(n.stateNode.containerInfo),un(n),null;case 10:return Ga(n.type),un(n),null;case 19:if(K(En),l=n.memoizedState,l===null)return un(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)vl(l,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=Tc(t),p!==null){for(n.flags|=128,vl(l,!1),t=p.updateQueue,n.updateQueue=t,Fc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Km(s,t),s=s.sibling;return Se(En,En.current&1|2),Ot&&za(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&qt()>kc&&(n.flags|=128,f=!0,vl(l,!1),n.lanes=4194304)}else{if(!f)if(t=Tc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Fc(n,t),vl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ot)return un(n),null}else 2*qt()-l.renderingStartTime>kc&&s!==536870912&&(n.flags|=128,f=!0,vl(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=qt(),t.sibling=null,s=En.current,Se(En,f?s&1|2:s&1),Ot&&za(n,l.treeForkCount),t):(un(n),null);case 22:case 23:return Ti(n),kf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),s=n.updateQueue,s!==null&&Fc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(hr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ga(wn),un(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function UM(t,n){switch(Cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ga(wn),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Ti(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(En),null;case 4:return Ie(),null;case 10:return Ga(n.type),null;case 22:case 23:return Ti(n),kf(),t!==null&&K(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ga(wn),null;case 25:return null;default:return null}}function Eg(t,n){switch(Cf(n),n.tag){case 3:Ga(wn),Ie();break;case 26:case 27:case 5:Xe(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Ti(n);break;case 13:Ti(n);break;case 19:K(En);break;case 10:Ga(n.type);break;case 22:case 23:Ti(n),kf(),t!==null&&K(hr);break;case 24:Ga(wn)}}function xl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==f)}}catch(w){Qt(n,n.return,w)}}function As(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,f=n;var V=s,re=w;try{re()}catch(xe){Qt(f,V,xe)}}}l=l.next}while(l!==p)}}catch(xe){Qt(n,n.return,xe)}}function bg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{p0(n,s)}catch(l){Qt(t,t.return,l)}}}function Tg(t,n,s){s.props=vr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Qt(t,n,l)}}function Sl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Qt(t,n,f)}}function ya(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Qt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Qt(t,n,f)}else s.current=null}function Ag(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Qt(t,t.return,f)}}function Md(t,n,s){try{var l=t.stateNode;ty(l,t.type,s,n),l[Rn]=n}catch(f){Qt(t,t.return,f)}}function Rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Us(t.type)||t.tag===4}function yd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Ii));else if(l!==4&&(l===27&&Us(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Ed(t,n,s),t=t.sibling;t!==null;)Ed(t,n,s),t=t.sibling}function zc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Us(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(zc(t,n,s),t=t.sibling;t!==null;)zc(t,n,s),t=t.sibling}function Cg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Zn(n,l,s),n[vn]=t,n[Rn]=s}catch(p){Qt(t,t.return,p)}}var Ya=!1,Nn=!1,bd=!1,wg=typeof WeakSet=="function"?WeakSet:Set,kn=null;function OM(t,n){if(t=t.containerInfo,Wd=ru,t=Gm(t),_f(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,w=-1,V=-1,re=0,xe=0,Ae=t,le=null;t:for(;;){for(var he;Ae!==s||f!==0&&Ae.nodeType!==3||(w=M+f),Ae!==p||l!==0&&Ae.nodeType!==3||(V=M+l),Ae.nodeType===3&&(M+=Ae.nodeValue.length),(he=Ae.firstChild)!==null;)le=Ae,Ae=he;for(;;){if(Ae===t)break t;if(le===s&&++re===f&&(w=M),le===p&&++xe===l&&(V=M),(he=Ae.nextSibling)!==null)break;Ae=le,le=Ae.parentNode}Ae=he}s=w===-1||V===-1?null:{start:w,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yd={focusedElem:t,selectionRange:s},ru=!1,kn=n;kn!==null;)if(n=kn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,kn=t;else for(;kn!==null;){switch(n=kn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var $e=vr(s.type,f);t=l.getSnapshotBeforeUpdate($e,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Qt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Zd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,kn=t;break}kn=n.return}}function Dg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ja(t,s),l&4&&xl(5,s);break;case 1:if(ja(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){Qt(s,s.return,M)}else{var f=vr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Qt(s,s.return,M)}}l&64&&bg(s),l&512&&Sl(s,s.return);break;case 3:if(ja(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{p0(t,n)}catch(M){Qt(s,s.return,M)}}break;case 27:n===null&&l&4&&Cg(s);case 26:case 5:ja(t,s),n===null&&l&4&&Ag(s),l&512&&Sl(s,s.return);break;case 12:ja(t,s);break;case 31:ja(t,s),l&4&&Ug(t,s);break;case 13:ja(t,s),l&4&&Og(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=kM.bind(null,s),cy(t,s))));break;case 22:if(l=s.memoizedState!==null||Ya,!l){n=n!==null&&n.memoizedState!==null||Nn,f=Ya;var p=Nn;Ya=l,(Nn=n)&&!p?Za(t,s,(s.subtreeFlags&8772)!==0):ja(t,s),Ya=f,Nn=p}break;case 30:break;default:ja(t,s)}}function Lg(t){var n=t.alternate;n!==null&&(t.alternate=null,Lg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ui(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,hi=!1;function qa(t,n,s){for(s=s.child;s!==null;)Ng(t,n,s),s=s.sibling}function Ng(t,n,s){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:Nn||ya(s,n),qa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Nn||ya(s,n);var l=pn,f=hi;Us(s.type)&&(pn=s.stateNode,hi=!1),qa(t,n,s),wl(s.stateNode),pn=l,hi=f;break;case 5:Nn||ya(s,n);case 6:if(l=pn,f=hi,pn=null,qa(t,n,s),pn=l,hi=f,pn!==null)if(hi)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(s.stateNode)}catch(p){Qt(s,n,p)}else try{pn.removeChild(s.stateNode)}catch(p){Qt(s,n,p)}break;case 18:pn!==null&&(hi?(t=pn,b_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),_o(t)):b_(pn,s.stateNode));break;case 4:l=pn,f=hi,pn=s.stateNode.containerInfo,hi=!0,qa(t,n,s),pn=l,hi=f;break;case 0:case 11:case 14:case 15:As(2,s,n),Nn||As(4,s,n),qa(t,n,s);break;case 1:Nn||(ya(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Tg(s,n,l)),qa(t,n,s);break;case 21:qa(t,n,s);break;case 22:Nn=(l=Nn)||s.memoizedState!==null,qa(t,n,s),Nn=l;break;default:qa(t,n,s)}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_o(t)}catch(s){Qt(n,n.return,s)}}}function Og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_o(t)}catch(s){Qt(n,n.return,s)}}function PM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wg),n;default:throw Error(r(435,t.tag))}}function Hc(t,n){var s=PM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=XM.bind(null,t,l);l.then(f,f)}})}function pi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,M=n,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(Us(w.type)){pn=w.stateNode,hi=!1;break e}break;case 5:pn=w.stateNode,hi=!1;break e;case 3:case 4:pn=w.stateNode.containerInfo,hi=!0;break e}w=w.return}if(pn===null)throw Error(r(160));Ng(p,M,f),pn=null,hi=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Pg(n,t),n=n.sibling}var sa=null;function Pg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pi(n,t),mi(t),l&4&&(As(3,t,t.return),xl(3,t),As(5,t,t.return));break;case 1:pi(n,t),mi(t),l&512&&(Nn||s===null||ya(s,s.return)),l&64&&Ya&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=sa;if(pi(n,t),mi(t),l&512&&(Nn||s===null||ya(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[pa]||p[vn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Zn(p,l,s),p[vn]=t,_n(p),l=p;break e;case"link":var M=P_("link","href",f).get(l+(s.href||""));if(M){for(var w=0;w<M.length;w++)if(p=M[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(w,1);break t}}p=f.createElement(l),Zn(p,l,s),f.head.appendChild(p);break;case"meta":if(M=P_("meta","content",f).get(l+(s.content||""))){for(w=0;w<M.length;w++)if(p=M[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(w,1);break t}}p=f.createElement(l),Zn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[vn]=t,_n(p),l=p}t.stateNode=l}else I_(f,t.type,t.stateNode);else t.stateNode=O_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?I_(f,t.type,t.stateNode):O_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Md(t,t.memoizedProps,s.memoizedProps)}break;case 27:pi(n,t),mi(t),l&512&&(Nn||s===null||ya(s,s.return)),s!==null&&l&4&&Md(t,t.memoizedProps,s.memoizedProps);break;case 5:if(pi(n,t),mi(t),l&512&&(Nn||s===null||ya(s,s.return)),t.flags&32){f=t.stateNode;try{nn(f,"")}catch($e){Qt(t,t.return,$e)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Md(t,f,s!==null?s.memoizedProps:f)),l&1024&&(bd=!0);break;case 6:if(pi(n,t),mi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch($e){Qt(t,t.return,$e)}}break;case 3:if(nu=null,f=sa,sa=eu(n.containerInfo),pi(n,t),sa=f,mi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch($e){Qt(t,t.return,$e)}bd&&(bd=!1,Ig(t));break;case 4:l=sa,sa=eu(t.stateNode.containerInfo),pi(n,t),mi(t),sa=l;break;case 12:pi(n,t),mi(t);break;case 31:pi(n,t),mi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Hc(t,l)));break;case 13:pi(n,t),mi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vc=qt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Hc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,re=Ya,xe=Nn;if(Ya=re||f,Nn=xe||V,pi(n,t),Nn=xe,Ya=re,mi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Ya||Nn||xr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(p=V.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=V.stateNode;var Ae=V.memoizedProps.style,le=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;w.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch($e){Qt(V,V.return,$e)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch($e){Qt(V,V.return,$e)}}}else if(n.tag===18){if(s===null){V=n;try{var he=V.stateNode;f?T_(he,!0):T_(V.stateNode,!1)}catch($e){Qt(V,V.return,$e)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Hc(t,s))));break;case 19:pi(n,t),mi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Hc(t,l)));break;case 30:break;case 21:break;default:pi(n,t),mi(t)}}function mi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(Rg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=yd(t);zc(t,p,f);break;case 5:var M=s.stateNode;s.flags&32&&(nn(M,""),s.flags&=-33);var w=yd(t);zc(t,w,M);break;case 3:case 4:var V=s.stateNode.containerInfo,re=yd(t);Ed(t,re,V);break;default:throw Error(r(161))}}catch(xe){Qt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ig(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ja(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:As(4,n,n.return),xr(n);break;case 1:ya(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Tg(n,n.return,s),xr(n);break;case 27:wl(n.stateNode);case 26:case 5:ya(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function Za(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:Za(f,p,s),xl(4,p);break;case 1:if(Za(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Qt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)h0(V[f],w)}catch(re){Qt(l,l.return,re)}}s&&M&64&&bg(p),Sl(p,p.return);break;case 27:Cg(p);case 26:case 5:Za(f,p,s),s&&l===null&&M&4&&Ag(p),Sl(p,p.return);break;case 12:Za(f,p,s);break;case 31:Za(f,p,s),s&&M&4&&Ug(f,p);break;case 13:Za(f,p,s),s&&M&4&&Og(f,p);break;case 22:p.memoizedState===null&&Za(f,p,s),Sl(p,p.return);break;case 30:break;default:Za(f,p,s)}n=n.sibling}}function Td(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&rl(s))}function Ad(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t))}function ra(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(t,n,s,l),n=n.sibling}function Bg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ra(t,n,s,l),f&2048&&xl(9,n);break;case 1:ra(t,n,s,l);break;case 3:ra(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&rl(t)));break;case 12:if(f&2048){ra(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,w=p.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Qt(n,n.return,V)}}else ra(t,n,s,l);break;case 31:ra(t,n,s,l);break;case 13:ra(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?ra(t,n,s,l):Ml(t,n):p._visibility&2?ra(t,n,s,l):(p._visibility|=2,so(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Td(M,n);break;case 24:ra(t,n,s,l),f&2048&&Ad(n.alternate,n);break;default:ra(t,n,s,l)}}function so(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,M=n,w=s,V=l,re=M.flags;switch(M.tag){case 0:case 11:case 15:so(p,M,w,V,f),xl(8,M);break;case 23:break;case 22:var xe=M.stateNode;M.memoizedState!==null?xe._visibility&2?so(p,M,w,V,f):Ml(p,M):(xe._visibility|=2,so(p,M,w,V,f)),f&&re&2048&&Td(M.alternate,M);break;case 24:so(p,M,w,V,f),f&&re&2048&&Ad(M.alternate,M);break;default:so(p,M,w,V,f)}n=n.sibling}}function Ml(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Ml(s,l),f&2048&&Td(l.alternate,l);break;case 24:Ml(s,l),f&2048&&Ad(l.alternate,l);break;default:Ml(s,l)}n=n.sibling}}var yl=8192;function ro(t,n,s){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)Fg(t,n,s),t=t.sibling}function Fg(t,n,s){switch(t.tag){case 26:ro(t,n,s),t.flags&yl&&t.memoizedState!==null&&My(s,sa,t.memoizedState,t.memoizedProps);break;case 5:ro(t,n,s);break;case 3:case 4:var l=sa;sa=eu(t.stateNode.containerInfo),ro(t,n,s),sa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=yl,yl=16777216,ro(t,n,s),yl=l):ro(t,n,s));break;default:ro(t,n,s)}}function zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function El(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kn=l,Gg(l,t)}zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hg(t),t=t.sibling}function Hg(t){switch(t.tag){case 0:case 11:case 15:El(t),t.flags&2048&&As(9,t,t.return);break;case 3:El(t);break;case 12:El(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gc(t)):El(t);break;default:El(t)}}function Gc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kn=l,Gg(l,t)}zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:As(8,n,n.return),Gc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Gc(n));break;default:Gc(n)}t=t.sibling}}function Gg(t,n){for(;kn!==null;){var s=kn;switch(s.tag){case 0:case 11:case 15:As(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:rl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,kn=l;else e:for(s=t;kn!==null;){l=kn;var f=l.sibling,p=l.return;if(Lg(l),l===s){kn=null;break e}if(f!==null){f.return=p,kn=f;break e}kn=p}}}var IM={getCacheForType:function(t){var n=qn(wn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return qn(wn).controller.signal}},BM=typeof WeakMap=="function"?WeakMap:Map,Wt=0,an=null,Ct=null,Lt=0,Kt=0,Ai=null,Rs=!1,oo=!1,Rd=!1,Ka=0,Sn=0,Cs=0,Sr=0,Cd=0,Ri=0,lo=0,bl=null,gi=null,wd=!1,Vc=0,Vg=0,kc=1/0,Xc=null,ws=null,Bn=0,Ds=null,co=null,Qa=0,Dd=0,Ld=null,kg=null,Tl=0,Nd=null;function Ci(){return(Wt&2)!==0&&Lt!==0?Lt&-Lt:z.T!==null?Fd():fs()}function Xg(){if(Ri===0)if((Lt&536870912)===0||Ot){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Ri=t}else Ri=536870912;return t=bi.current,t!==null&&(t.flags|=32),Ri}function _i(t,n,s){(t===an&&(Kt===2||Kt===9)||t.cancelPendingCommit!==null)&&(uo(t,0),Ls(t,Lt,Ri,!1)),qe(t,s),((Wt&2)===0||t!==an)&&(t===an&&((Wt&2)===0&&(Sr|=s),Sn===4&&Ls(t,Lt,Ri,!1)),Ea(t))}function Wg(t,n,s){if((Wt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),f=l?HM(t,n):Od(t,n,!0),p=l;do{if(f===0){oo&&!l&&Ls(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!FM(s)){f=Od(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var w=t;f=bl;var V=w.current.memoizedState.isDehydrated;if(V&&(uo(w,M).flags|=256),M=Od(w,M,!1),M!==2){if(Rd&&!V){w.errorRecoveryDisabledLanes|=p,Sr|=p,f=4;break e}p=gi,gi=f,p!==null&&(gi===null?gi=p:gi.push.apply(gi,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){uo(t,0),Ls(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ls(l,n,Ri,!Rs);break e;case 2:gi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Vc+300-qt(),10<f)){if(Ls(l,n,Ri,!Rs),_e(l,0,!0)!==0)break e;Qa=n,l.timeoutHandle=y_(Yg.bind(null,l,s,gi,Xc,wd,n,Ri,Sr,lo,Rs,p,"Throttled",-0,0),f);break e}Yg(l,s,gi,Xc,wd,n,Ri,Sr,lo,Rs,p,null,-0,0)}}break}while(!0);Ea(t)}function Yg(t,n,s,l,f,p,M,w,V,re,xe,Ae,le,he){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Fg(n,p,Ae);var $e=(p&62914560)===p?Vc-qt():(p&4194048)===p?Vg-qt():0;if($e=yy(Ae,$e),$e!==null){Qa=p,t.cancelPendingCommit=$e(e_.bind(null,t,n,p,s,l,f,M,w,V,xe,Ae,null,le,he)),Ls(t,p,M,!re);return}}e_(t,n,p,s,l,f,M,w,V)}function FM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!yi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ls(t,n,s,l){n&=~Cd,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ye(f),M=1<<p;l[p]=-1,f&=~M}s!==0&&Tt(t,s,n)}function Wc(){return(Wt&6)===0?(Al(0),!1):!0}function Ud(){if(Ct!==null){if(Kt===0)var t=Ct.return;else t=Ct,Ha=fr=null,Zf(t),eo=null,ll=0,t=Ct;for(;t!==null;)Eg(t.alternate,t),t=t.return;Ct=null}}function uo(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ay(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Qa=0,Ud(),an=t,Ct=s=Fa(t.current,null),Lt=n,Kt=0,Ai=null,Rs=!1,oo=Pe(t,n),Rd=!1,lo=Ri=Cd=Sr=Cs=Sn=0,gi=bl=null,wd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ye(l),p=1<<f;n|=t[f],l&=~p}return Ka=n,dc(),s}function qg(t,n){xt=null,z.H=gl,n===$r||n===Sc?(n=c0(),Kt=3):n===Bf?(n=c0(),Kt=4):Kt=n===fd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ai=n,Ct===null&&(Sn=1,Oc(t,Hi(n,t.current)))}function jg(){var t=bi.current;return t===null?!0:(Lt&4194048)===Lt?Xi===null:(Lt&62914560)===Lt||(Lt&536870912)!==0?t===Xi:!1}function Zg(){var t=z.H;return z.H=gl,t===null?gl:t}function Kg(){var t=z.A;return z.A=IM,t}function Yc(){Sn=4,Rs||(Lt&4194048)!==Lt&&bi.current!==null||(oo=!0),(Cs&134217727)===0&&(Sr&134217727)===0||an===null||Ls(an,Lt,Ri,!1)}function Od(t,n,s){var l=Wt;Wt|=2;var f=Zg(),p=Kg();(an!==t||Lt!==n)&&(Xc=null,uo(t,n)),n=!1;var M=Sn;e:do try{if(Kt!==0&&Ct!==null){var w=Ct,V=Ai;switch(Kt){case 8:Ud(),M=6;break e;case 3:case 2:case 9:case 6:bi.current===null&&(n=!0);var re=Kt;if(Kt=0,Ai=null,fo(t,w,V,re),s&&oo){M=0;break e}break;default:re=Kt,Kt=0,Ai=null,fo(t,w,V,re)}}zM(),M=Sn;break}catch(xe){qg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,Ha=fr=null,Wt=l,z.H=f,z.A=p,Ct===null&&(an=null,Lt=0,dc()),M}function zM(){for(;Ct!==null;)Qg(Ct)}function HM(t,n){var s=Wt;Wt|=2;var l=Zg(),f=Kg();an!==t||Lt!==n?(Xc=null,kc=qt()+500,uo(t,n)):oo=Pe(t,n);e:do try{if(Kt!==0&&Ct!==null){n=Ct;var p=Ai;t:switch(Kt){case 1:Kt=0,Ai=null,fo(t,n,p,1);break;case 2:case 9:if(o0(p)){Kt=0,Ai=null,Jg(n);break}n=function(){Kt!==2&&Kt!==9||an!==t||(Kt=7),Ea(t)},p.then(n,n);break e;case 3:Kt=7;break e;case 4:Kt=5;break e;case 7:o0(p)?(Kt=0,Ai=null,Jg(n)):(Kt=0,Ai=null,fo(t,n,p,7));break;case 5:var M=null;switch(Ct.tag){case 26:M=Ct.memoizedState;case 5:case 27:var w=Ct;if(M?B_(M):w.stateNode.complete){Kt=0,Ai=null;var V=w.sibling;if(V!==null)Ct=V;else{var re=w.return;re!==null?(Ct=re,qc(re)):Ct=null}break t}}Kt=0,Ai=null,fo(t,n,p,5);break;case 6:Kt=0,Ai=null,fo(t,n,p,6);break;case 8:Ud(),Sn=6;break e;default:throw Error(r(462))}}GM();break}catch(xe){qg(t,xe)}while(!0);return Ha=fr=null,z.H=l,z.A=f,Wt=s,Ct!==null?0:(an=null,Lt=0,dc(),Sn)}function GM(){for(;Ct!==null&&!dn();)Qg(Ct)}function Qg(t){var n=Mg(t.alternate,t,Ka);t.memoizedProps=t.pendingProps,n===null?qc(t):Ct=n}function Jg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=mg(s,n,n.pendingProps,n.type,void 0,Lt);break;case 11:n=mg(s,n,n.pendingProps,n.type.render,n.ref,Lt);break;case 5:Zf(n);default:Eg(s,n),n=Ct=Km(n,Ka),n=Mg(s,n,Ka)}t.memoizedProps=t.pendingProps,n===null?qc(t):Ct=n}function fo(t,n,s,l){Ha=fr=null,Zf(n),eo=null,ll=0;var f=n.return;try{if(wM(t,f,n,s,Lt)){Sn=1,Oc(t,Hi(s,t.current)),Ct=null;return}}catch(p){if(f!==null)throw Ct=f,p;Sn=1,Oc(t,Hi(s,t.current)),Ct=null;return}n.flags&32768?(Ot||l===1?t=!0:oo||(Lt&536870912)!==0?t=!1:(Rs=t=!0,(l===2||l===9||l===3||l===6)&&(l=bi.current,l!==null&&l.tag===13&&(l.flags|=16384))),$g(n,t)):qc(n)}function qc(t){var n=t;do{if((n.flags&32768)!==0){$g(n,Rs);return}t=n.return;var s=NM(n.alternate,n,Ka);if(s!==null){Ct=s;return}if(n=n.sibling,n!==null){Ct=n;return}Ct=n=t}while(n!==null);Sn===0&&(Sn=5)}function $g(t,n){do{var s=UM(t.alternate,t);if(s!==null){s.flags&=32767,Ct=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Ct=t;return}Ct=t=s}while(t!==null);Sn=6,Ct=null}function e_(t,n,s,l,f,p,M,w,V){t.cancelPendingCommit=null;do jc();while(Bn!==0);if((Wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=yf,Dt(t,s,p,M,w,V),t===an&&(Ct=an=null,Lt=0),co=n,Ds=t,Qa=s,Dd=p,Ld=f,kg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,WM(J,function(){return s_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=H.p,H.p=2,M=Wt,Wt|=4;try{OM(t,n,s)}finally{Wt=M,H.p=f,z.T=l}}Bn=1,t_(),n_(),i_()}}function t_(){if(Bn===1){Bn=0;var t=Ds,n=co,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Wt;Wt|=4;try{Pg(n,t);var p=Yd,M=Gm(t.containerInfo),w=p.focusedElem,V=p.selectionRange;if(M!==w&&w&&w.ownerDocument&&Hm(w.ownerDocument.documentElement,w)){if(V!==null&&_f(w)){var re=V.start,xe=V.end;if(xe===void 0&&(xe=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(xe,w.value.length);else{var Ae=w.ownerDocument||document,le=Ae&&Ae.defaultView||window;if(le.getSelection){var he=le.getSelection(),$e=w.textContent.length,ot=Math.min(V.start,$e),tn=V.end===void 0?ot:Math.min(V.end,$e);!he.extend&&ot>tn&&(M=tn,tn=ot,ot=M);var Q=zm(w,ot),W=zm(w,tn);if(Q&&W&&(he.rangeCount!==1||he.anchorNode!==Q.node||he.anchorOffset!==Q.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var se=Ae.createRange();se.setStart(Q.node,Q.offset),he.removeAllRanges(),ot>tn?(he.addRange(se),he.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),he.addRange(se))}}}}for(Ae=[],he=w;he=he.parentNode;)he.nodeType===1&&Ae.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ae.length;w++){var Ee=Ae[w];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}ru=!!Wd,Yd=Wd=null}finally{Wt=f,H.p=l,z.T=s}}t.current=n,Bn=2}}function n_(){if(Bn===2){Bn=0;var t=Ds,n=co,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Wt;Wt|=4;try{Dg(t,n.alternate,n)}finally{Wt=f,H.p=l,z.T=s}}Bn=3}}function i_(){if(Bn===4||Bn===3){Bn=0,j();var t=Ds,n=co,s=Qa,l=kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Bn=5:(Bn=0,co=Ds=null,a_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ws=null),Si(s),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=H.p,H.p=2,z.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var w=l[M];p(w.value,{componentStack:w.stack})}}finally{z.T=n,H.p=f}}(Qa&3)!==0&&jc(),Ea(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Nd?Tl++:(Tl=0,Nd=t):Tl=0,Al(0)}}function a_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,rl(n)))}function jc(){return t_(),n_(),i_(),s_()}function s_(){if(Bn!==5)return!1;var t=Ds,n=Dd;Dd=0;var s=Si(Qa),l=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=Ld,Ld=null;var p=Ds,M=Qa;if(Bn=0,co=Ds=null,Qa=0,(Wt&6)!==0)throw Error(r(331));var w=Wt;if(Wt|=4,Hg(p.current),Bg(p,p.current,M,s),Wt=w,Al(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(pe,p)}catch{}return!0}finally{H.p=f,z.T=l,a_(t,n)}}function r_(t,n,s){n=Hi(s,n),n=ud(t.stateNode,n,2),t=Es(t,n,2),t!==null&&(qe(t,2),Ea(t))}function Qt(t,n,s){if(t.tag===3)r_(t,t,s);else for(;n!==null;){if(n.tag===3){r_(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ws===null||!ws.has(l))){t=Hi(s,t),s=og(2),l=Es(n,s,2),l!==null&&(lg(s,l,n,t),qe(l,2),Ea(l));break}}n=n.return}}function Pd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new BM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Rd=!0,f.add(s),t=VM.bind(null,t,n,s),n.then(t,t))}function VM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,an===t&&(Lt&s)===s&&(Sn===4||Sn===3&&(Lt&62914560)===Lt&&300>qt()-Vc?(Wt&2)===0&&uo(t,0):Cd|=s,lo===Lt&&(lo=0)),Ea(t)}function o_(t,n){n===0&&(n=Te()),t=lr(t,n),t!==null&&(qe(t,n),Ea(t))}function kM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),o_(t,s)}function XM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),o_(t,s)}function WM(t,n){return gn(t,n)}var Zc=null,ho=null,Id=!1,Kc=!1,Bd=!1,Ns=0;function Ea(t){t!==ho&&t.next===null&&(ho===null?Zc=ho=t:ho=ho.next=t),Kc=!0,Id||(Id=!0,qM())}function Al(t,n){if(!Bd&&Kc){Bd=!0;do for(var s=!1,l=Zc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Ye(42|t)+1)-1,p&=f&~(M&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,f_(l,p))}else p=Lt,p=_e(l,l===an?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Pe(l,p)||(s=!0,f_(l,p));l=l.next}while(s);Bd=!1}}function YM(){l_()}function l_(){Kc=Id=!1;var t=0;Ns!==0&&iy()&&(t=Ns);for(var n=qt(),s=null,l=Zc;l!==null;){var f=l.next,p=c_(l,n);p===0?(l.next=null,s===null?Zc=f:s.next=f,f===null&&(ho=s)):(s=l,(t!==0||(p&3)!==0)&&(Kc=!0)),l=f}Bn!==0&&Bn!==5||Al(t),Ns!==0&&(Ns=0)}function c_(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ye(p),w=1<<M,V=f[M];V===-1?((w&s)===0||(w&l)!==0)&&(f[M]=Ce(w,n)):V<=n&&(t.expiredLanes|=w),p&=~w}if(n=an,s=Lt,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Kt===2||Kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Yt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Pe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Yt(l),Si(s)){case 2:case 8:s=b;break;case 32:s=J;break;case 268435456:s=de;break;default:s=J}return l=u_.bind(null,t),s=gn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Yt(l),t.callbackPriority=2,t.callbackNode=null,2}function u_(t,n){if(Bn!==0&&Bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(jc()&&t.callbackNode!==s)return null;var l=Lt;return l=_e(t,t===an?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Wg(t,l,n),c_(t,qt()),t.callbackNode!=null&&t.callbackNode===s?u_.bind(null,t):null)}function f_(t,n){if(jc())return null;Wg(t,n,!0)}function qM(){sy(function(){(Wt&6)!==0?gn(B,YM):l_()})}function Fd(){if(Ns===0){var t=Qr;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Ns=t}return Ns}function d_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:na(""+t)}function h_(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function jM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=d_((f[Rn]||null).action),M=l.submitter;M&&(n=(n=M[Rn]||null)?d_(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var w=new Ir("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ns!==0){var V=M?h_(f,M):new FormData(f);ad(s,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(w.preventDefault(),V=M?h_(f,M):new FormData(f),ad(s,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var zd=0;zd<Mf.length;zd++){var Hd=Mf[zd],ZM=Hd.toLowerCase(),KM=Hd[0].toUpperCase()+Hd.slice(1);aa(ZM,"on"+KM)}aa(Xm,"onAnimationEnd"),aa(Wm,"onAnimationIteration"),aa(Ym,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(dM,"onTransitionRun"),aa(hM,"onTransitionStart"),aa(pM,"onTransitionCancel"),aa(qm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function p_(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var w=l[M],V=w.instance,re=w.currentTarget;if(w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(xe){fc(xe)}f.currentTarget=null,p=V}else for(M=0;M<l.length;M++){if(w=l[M],V=w.instance,re=w.currentTarget,w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(xe){fc(xe)}f.currentTarget=null,p=V}}}}function wt(t,n){var s=n[Cn];s===void 0&&(s=n[Cn]=new Set);var l=t+"__bubble";s.has(l)||(m_(n,t,2,!1),s.add(l))}function Gd(t,n,s){var l=0;n&&(l|=4),m_(s,t,l,n)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Qc]){t[Qc]=!0,nr.forEach(function(s){s!=="selectionchange"&&(QM.has(s)||Gd(s,!1,t),Gd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Qc]||(n[Qc]=!0,Gd("selectionchange",!1,n))}}function m_(t,n,s,l){switch(X_(n)){case 2:var f=Ty;break;case 8:f=Ay;break;default:f=ih}s=f.bind(null,n,s,t),f=void 0,!Zo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function kd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;w!==null;){if(M=ea(w),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=p=M;continue e}w=w.parentNode}}l=l.return}hs(function(){var re=p,xe=ir(s),Ae=[];e:{var le=jm.get(t);if(le!==void 0){var he=Ir,$e=t;switch(t){case"keypress":if(ps(s)===0)break e;case"keydown":case"keyup":he=cc;break;case"focusin":$e="focus",he=Hr;break;case"focusout":$e="blur",he=Hr;break;case"beforeblur":case"afterblur":he=Hr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=zr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=qS;break;case Xm:case Wm:case Ym:he=At;break;case qm:he=ZS;break;case"scroll":case"scrollend":he=Br;break;case"wheel":he=QS;break;case"copy":case"cut":case"paste":he=Fi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Tm;break;case"toggle":case"beforetoggle":he=$S}var ot=(n&4)!==0,tn=!ot&&(t==="scroll"||t==="scrollend"),Q=ot?le!==null?le+"Capture":null:le;ot=[];for(var W=re,se;W!==null;){var Ee=W;if(se=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||se===null||Q===null||(Ee=di(W,Q),Ee!=null&&ot.push(Cl(W,Ee,se))),tn)break;W=W.return}0<ot.length&&(le=new he(le,$e,null,s,xe),Ae.push({event:le,listeners:ot}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&s!==ds&&($e=s.relatedTarget||s.fromElement)&&(ea($e)||$e[Gn]))break e;if((he||le)&&(le=xe.window===xe?xe:(le=xe.ownerDocument)?le.defaultView||le.parentWindow:window,he?($e=s.relatedTarget||s.toElement,he=re,$e=$e?ea($e):null,$e!==null&&(tn=c($e),ot=$e.tag,$e!==tn||ot!==5&&ot!==27&&ot!==6)&&($e=null)):(he=null,$e=re),he!==$e)){if(ot=zr,Ee="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Tm,Ee="onPointerLeave",Q="onPointerEnter",W="pointer"),tn=he==null?le:Oi(he),se=$e==null?le:Oi($e),le=new ot(Ee,W+"leave",he,s,xe),le.target=tn,le.relatedTarget=se,Ee=null,ea(xe)===re&&(ot=new ot(Q,W+"enter",$e,s,xe),ot.target=se,ot.relatedTarget=tn,Ee=ot),tn=Ee,he&&$e)t:{for(ot=JM,Q=he,W=$e,se=0,Ee=Q;Ee;Ee=ot(Ee))se++;Ee=0;for(var st=W;st;st=ot(st))Ee++;for(;0<se-Ee;)Q=ot(Q),se--;for(;0<Ee-se;)W=ot(W),Ee--;for(;se--;){if(Q===W||W!==null&&Q===W.alternate){ot=Q;break t}Q=ot(Q),W=ot(W)}ot=null}else ot=null;he!==null&&g_(Ae,le,he,ot,!1),$e!==null&&tn!==null&&g_(Ae,tn,$e,ot,!0)}}e:{if(le=re?Oi(re):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var Vt=Um;else if(Lm(le))if(Om)Vt=cM;else{Vt=oM;var tt=rM}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&Et(re.elementType)&&(Vt=Um):Vt=lM;if(Vt&&(Vt=Vt(t,re))){Nm(Ae,Vt,s,xe);break e}tt&&tt(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&rt(le,"number",le.value)}switch(tt=re?Oi(re):window,t){case"focusin":(Lm(tt)||tt.contentEditable==="true")&&(kr=tt,vf=re,il=null);break;case"focusout":il=vf=kr=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,Vm(Ae,s,xe);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":Vm(Ae,s,xe)}var Mt;if(pf)e:{switch(t){case"compositionstart":var Nt="onCompositionStart";break e;case"compositionend":Nt="onCompositionEnd";break e;case"compositionupdate":Nt="onCompositionUpdate";break e}Nt=void 0}else Vr?wm(t,s)&&(Nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Nt="onCompositionStart");Nt&&(Am&&s.locale!=="ko"&&(Vr||Nt!=="onCompositionStart"?Nt==="onCompositionEnd"&&Vr&&(Mt=rc()):(Ba=xe,ga="value"in Ba?Ba.value:Ba.textContent,Vr=!0)),tt=Jc(re,Nt),0<tt.length&&(Nt=new Mi(Nt,t,null,s,xe),Ae.push({event:Nt,listeners:tt}),Mt?Nt.data=Mt:(Mt=Dm(s),Mt!==null&&(Nt.data=Mt)))),(Mt=tM?nM(t,s):iM(t,s))&&(Nt=Jc(re,"onBeforeInput"),0<Nt.length&&(tt=new Mi("onBeforeInput","beforeinput",null,s,xe),Ae.push({event:tt,listeners:Nt}),tt.data=Mt)),jM(Ae,t,re,s,xe)}p_(Ae,n)})}function Cl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Jc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=di(t,s),f!=null&&l.unshift(Cl(t,f,p)),f=di(t,n),f!=null&&l.push(Cl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function JM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g_(t,n,s,l,f){for(var p=n._reactName,M=[];s!==null&&s!==l;){var w=s,V=w.alternate,re=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||re===null||(V=re,f?(re=di(s,p),re!=null&&M.unshift(Cl(s,re,V))):f||(re=di(s,p),re!=null&&M.push(Cl(s,re,V)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var $M=/\r\n?/g,ey=/\u0000|\uFFFD/g;function __(t){return(typeof t=="string"?t:""+t).replace($M,`
`).replace(ey,"")}function v_(t,n){return n=__(n),__(t)===n}function en(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||nn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&nn(t,""+l);break;case"className":Je(t,"class",l);break;case"tabIndex":Je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,s,l);break;case"style":hn(t,l,p);break;case"data":if(n!=="object"){Je(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=na(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&en(t,n,"name",f.name,f,null),en(t,n,"formEncType",f.formEncType,f,null),en(t,n,"formMethod",f.formMethod,f,null),en(t,n,"formTarget",f.formTarget,f,null)):(en(t,n,"encType",f.encType,f,null),en(t,n,"method",f.method,f,null),en(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=na(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ii);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=na(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":wt("beforetoggle",t),wt("toggle",t),ze(t,"popover",l);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ze(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fi.get(s)||s,ze(t,s,l))}}function Xd(t,n,s,l,f,p){switch(s){case"style":hn(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?nn(t,l):(typeof l=="number"||typeof l=="bigint")&&nn(t,""+l);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Rn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ze(t,s,l)}}}function Zn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(t,n,p,M,s,null)}}f&&en(t,n,"srcSet",s.srcSet,s,null),l&&en(t,n,"src",s.src,s,null);return;case"input":wt("invalid",t);var w=p=M=f=null,V=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":M=xe;break;case"checked":V=xe;break;case"defaultChecked":re=xe;break;case"value":p=xe;break;case"defaultValue":w=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,n));break;default:en(t,n,l,xe,s,null)}}mt(t,p,w,V,re,M,f,!1);return;case"select":wt("invalid",t),l=M=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:en(t,n,f,w,s,null)}n=p,s=M,t.multiple=!!l,n!=null?zt(t,!!l,n,!1):s!=null&&zt(t,!!l,s,!0);return;case"textarea":wt("invalid",t),p=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(w=s[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:en(t,n,M,w,s,null)}Bt(t,l,f,p);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:en(t,n,V,l,s,null)}return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(l=0;l<Rl.length;l++)wt(Rl[l],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:en(t,n,re,l,s,null)}return;default:if(Et(n)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&Xd(t,n,xe,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&en(t,n,w,l,s,null))}function ty(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,w=null,V=null,re=null,xe=null;for(he in s){var Ae=s[he];if(s.hasOwnProperty(he)&&Ae!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=Ae;default:l.hasOwnProperty(he)||en(t,n,he,null,l,Ae)}}for(var le in l){var he=l[le];if(Ae=s[le],l.hasOwnProperty(le)&&(he!=null||Ae!=null))switch(le){case"type":p=he;break;case"name":f=he;break;case"checked":re=he;break;case"defaultChecked":xe=he;break;case"value":M=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Ae&&en(t,n,le,he,l,Ae)}}Re(t,M,w,V,re,xe,p,f);return;case"select":he=M=w=le=null;for(p in s)if(V=s[p],s.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":he=V;default:l.hasOwnProperty(p)||en(t,n,p,null,l,V)}for(f in l)if(p=l[f],V=s[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":le=p;break;case"defaultValue":w=p;break;case"multiple":M=p;default:p!==V&&en(t,n,f,p,l,V)}n=w,s=M,l=he,le!=null?zt(t,!!s,le,!1):!!l!=!!s&&(n!=null?zt(t,!!s,n,!0):zt(t,!!s,s?[]:"",!1));return;case"textarea":he=le=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:en(t,n,w,null,l,f)}for(M in l)if(f=l[M],p=s[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":le=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&en(t,n,M,f,l,p)}sn(t,le,he);return;case"option":for(var $e in s)if(le=s[$e],s.hasOwnProperty($e)&&le!=null&&!l.hasOwnProperty($e))switch($e){case"selected":t.selected=!1;break;default:en(t,n,$e,null,l,le)}for(V in l)if(le=l[V],he=s[V],l.hasOwnProperty(V)&&le!==he&&(le!=null||he!=null))switch(V){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:en(t,n,V,le,l,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)le=s[ot],s.hasOwnProperty(ot)&&le!=null&&!l.hasOwnProperty(ot)&&en(t,n,ot,null,l,le);for(re in l)if(le=l[re],he=s[re],l.hasOwnProperty(re)&&le!==he&&(le!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:en(t,n,re,le,l,he)}return;default:if(Et(n)){for(var tn in s)le=s[tn],s.hasOwnProperty(tn)&&le!==void 0&&!l.hasOwnProperty(tn)&&Xd(t,n,tn,void 0,l,le);for(xe in l)le=l[xe],he=s[xe],!l.hasOwnProperty(xe)||le===he||le===void 0&&he===void 0||Xd(t,n,xe,le,l,he);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!l.hasOwnProperty(Q)&&en(t,n,Q,null,l,le);for(Ae in l)le=l[Ae],he=s[Ae],!l.hasOwnProperty(Ae)||le===he||le==null&&he==null||en(t,n,Ae,le,l,he)}function x_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,M=f.initiatorType,w=f.duration;if(p&&w&&x_(M)){for(M=0,w=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],re=V.startTime;if(re>w)break;var xe=V.transferSize,Ae=V.initiatorType;xe&&x_(Ae)&&(V=V.responseEnd,M+=xe*(V<w?1:(w-re)/(V-re)))}if(--l,n+=8*(p+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wd=null,Yd=null;function $c(t){return t.nodeType===9?t:t.ownerDocument}function S_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jd=null;function iy(){var t=window.event;return t&&t.type==="popstate"?t===jd?!1:(jd=t,!0):(jd=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(ry)}:y_;function ry(t){setTimeout(function(){throw t})}function Us(t){return t==="head"}function b_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),_o(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")wl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,wl(s);for(var p=s.firstChild;p;){var M=p.nextSibling,w=p.nodeName;p[pa]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=M}}else s==="body"&&wl(t.ownerDocument.body);s=f}while(s);_o(n)}function T_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Zd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Zd(s),Ui(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function oy(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[pa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function ly(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wi(t.nextSibling),t===null))return null;return t}function A_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Wi(t.nextSibling),t===null))return null;return t}function Kd(t){return t.data==="$?"||t.data==="$~"}function Qd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cy(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jd=null;function R_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Wi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function C_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function w_(t,n,s){switch(n=$c(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ui(t)}var Yi=new Map,D_=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ja=H.d;H.d={f:uy,r:fy,D:dy,C:hy,L:py,m:my,X:_y,S:gy,M:vy};function uy(){var t=Ja.f(),n=Wc();return t||n}function fy(t){var n=ui(t);n!==null&&n.tag===5&&n.type==="form"?q0(n):Ja.r(t)}var po=typeof document>"u"?null:document;function L_(t,n,s){var l=po;if(l&&typeof n=="string"&&n){var f=Ge(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),D_.has(f)||(D_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Zn(n,"link",t),_n(n),l.head.appendChild(n)))}}function dy(t){Ja.D(t),L_("dns-prefetch",t,null)}function hy(t,n){Ja.C(t,n),L_("preconnect",t,n)}function py(t,n,s){Ja.L(t,n,s);var l=po;if(l&&t&&n){var f='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ge(s.imageSizes)+'"]')):f+='[href="'+Ge(t)+'"]';var p=f;switch(n){case"style":p=mo(t);break;case"script":p=go(t)}Yi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Yi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Dl(p))||n==="script"&&l.querySelector(Ll(p))||(n=l.createElement("link"),Zn(n,"link",t),_n(n),l.head.appendChild(n)))}}function my(t,n){Ja.m(t,n);var s=po;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Ge(l)+'"][href="'+Ge(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=go(t)}if(!Yi.has(p)&&(t=_({rel:"modulepreload",href:t},n),Yi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ll(p)))return}l=s.createElement("link"),Zn(l,"link",t),_n(l),s.head.appendChild(l)}}}function gy(t,n,s){Ja.S(t,n,s);var l=po;if(l&&t){var f=Pi(l).hoistableStyles,p=mo(t);n=n||"default";var M=f.get(p);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(Dl(p)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Yi.get(p))&&$d(t,s);var V=M=l.createElement("link");_n(V),Zn(V,"link",t),V._p=new Promise(function(re,xe){V.onload=re,V.onerror=xe}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,tu(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:w},f.set(p,M)}}}function _y(t,n){Ja.X(t,n);var s=po;if(s&&t){var l=Pi(s).hoistableScripts,f=go(t),p=l.get(f);p||(p=s.querySelector(Ll(f)),p||(t=_({src:t,async:!0},n),(n=Yi.get(f))&&eh(t,n),p=s.createElement("script"),_n(p),Zn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function vy(t,n){Ja.M(t,n);var s=po;if(s&&t){var l=Pi(s).hoistableScripts,f=go(t),p=l.get(f);p||(p=s.querySelector(Ll(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Yi.get(f))&&eh(t,n),p=s.createElement("script"),_n(p),Zn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function N_(t,n,s,l){var f=(f=ne.current)?eu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=mo(s.href),s=Pi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=mo(s.href);var p=Pi(f).hoistableStyles,M=p.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=f.querySelector(Dl(t)))&&!p._p&&(M.instance=p,M.state.loading=5),Yi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Yi.set(t,s),p||xy(f,t,s,M.state))),n&&l===null)throw Error(r(528,""));return M}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=go(s),s=Pi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function mo(t){return'href="'+Ge(t)+'"'}function Dl(t){return'link[rel="stylesheet"]['+t+"]"}function U_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function xy(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Zn(n,"link",s),_n(n),t.head.appendChild(n))}function go(t){return'[src="'+Ge(t)+'"]'}function Ll(t){return"script[async]"+t}function O_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ge(s.href)+'"]');if(l)return n.instance=l,_n(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_n(l),Zn(l,"style",f),tu(l,s.precedence,t),n.instance=l;case"stylesheet":f=mo(s.href);var p=t.querySelector(Dl(f));if(p)return n.state.loading|=4,n.instance=p,_n(p),p;l=U_(s),(f=Yi.get(f))&&$d(l,f),p=(t.ownerDocument||t).createElement("link"),_n(p);var M=p;return M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),Zn(p,"link",l),n.state.loading|=4,tu(p,s.precedence,t),n.instance=p;case"script":return p=go(s.src),(f=t.querySelector(Ll(p)))?(n.instance=f,_n(f),f):(l=s,(f=Yi.get(p))&&(l=_({},s),eh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Zn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,tu(l,s.precedence,t));return n.instance}function tu(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function $d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nu=null;function P_(t,n,s){if(nu===null){var l=new Map,f=nu=new Map;f.set(s,l)}else f=nu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[pa]||p[vn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var w=l.get(M);w?w.push(p):l.set(M,[p])}}return l}function I_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function Sy(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function My(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=mo(l.href),p=n.querySelector(Dl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=iu.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,_n(p);return}p=n.ownerDocument||n,l=U_(l),(f=Yi.get(f))&&$d(l,f),p=p.createElement("link"),_n(p);var M=p;M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),Zn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=iu.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var th=0;function yy(t,n){return t.stylesheets&&t.count===0&&su(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&su(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&th===0&&(th=62500*ny());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&su(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>th?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var au=null;function su(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,au=new Map,n.forEach(Ey,t),au=null,iu.call(t))}function Ey(t,n){if(!(n.state.loading&4)){var s=au.get(t);if(s)var l=s.get(null);else{s=new Map,au.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=n.instance,M=f.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,f),s.set(M,f),this.count++,l=iu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Nl={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function by(t,n,s,l,f,p,M,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function F_(t,n,s,l,f,p,M,w,V,re,xe,Ae){return t=new by(t,n,s,M,V,re,xe,Ae,w),n=1,p===!0&&(n|=24),p=Ei(3,null,null,n),t.current=p,p.stateNode=t,n=Of(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},Ff(p),t}function z_(t){return t?(t=Yr,t):Yr}function H_(t,n,s,l,f,p){f=z_(f),l.context===null?l.context=f:l.pendingContext=f,l=ys(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Es(t,l,n),s!==null&&(_i(s,t,n),ul(s,t,n))}function G_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function nh(t,n){G_(t,n),(t=t.alternate)&&G_(t,n)}function V_(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&_i(n,t,67108864),nh(t,67108864)}}function k_(t){if(t.tag===13||t.tag===31){var n=Ci();n=$i(n);var s=lr(t,n);s!==null&&_i(s,t,n),nh(t,n)}}var ru=!0;function Ty(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=2,ih(t,n,s,l)}finally{H.p=p,z.T=f}}function Ay(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=8,ih(t,n,s,l)}finally{H.p=p,z.T=f}}function ih(t,n,s,l){if(ru){var f=ah(l);if(f===null)kd(t,n,l,ou,s),W_(t,l);else if(Cy(f,t,n,s,l))l.stopPropagation();else if(W_(t,l),n&4&&-1<Ry.indexOf(t)){for(;f!==null;){var p=ui(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Ue(p.pendingLanes);if(M!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var V=1<<31-Ye(M);w.entanglements[1]|=V,M&=~V}Ea(p),(Wt&6)===0&&(kc=qt()+500,Al(0))}}break;case 31:case 13:w=lr(p,2),w!==null&&_i(w,p,2),Wc(),nh(p,2)}if(p=ah(l),p===null&&kd(t,n,l,ou,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else kd(t,n,l,null,s)}}function ah(t){return t=ir(t),sh(t)}var ou=null;function sh(t){if(ou=null,t=ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ou=t,null}function X_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(It()){case B:return 2;case b:return 8;case J:case ee:return 32;case de:return 268435456;default:return 32}default:return 32}}var rh=!1,Os=null,Ps=null,Is=null,Ul=new Map,Ol=new Map,Bs=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W_(t,n){switch(t){case"focusin":case"focusout":Os=null;break;case"dragenter":case"dragleave":Ps=null;break;case"mouseover":case"mouseout":Is=null;break;case"pointerover":case"pointerout":Ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(n.pointerId)}}function Pl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=ui(n),n!==null&&V_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function Cy(t,n,s,l,f){switch(n){case"focusin":return Os=Pl(Os,t,n,s,l,f),!0;case"dragenter":return Ps=Pl(Ps,t,n,s,l,f),!0;case"mouseover":return Is=Pl(Is,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return Ul.set(p,Pl(Ul.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Ol.set(p,Pl(Ol.get(p)||null,t,n,s,l,f)),!0}return!1}function Y_(t){var n=ea(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Oa(t.priority,function(){k_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,Oa(t.priority,function(){k_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=ah(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);ds=l,s.target.dispatchEvent(l),ds=null}else return n=ui(s),n!==null&&V_(n),t.blockedOn=s,!1;n.shift()}return!0}function q_(t,n,s){lu(t)&&s.delete(n)}function wy(){rh=!1,Os!==null&&lu(Os)&&(Os=null),Ps!==null&&lu(Ps)&&(Ps=null),Is!==null&&lu(Is)&&(Is=null),Ul.forEach(q_),Ol.forEach(q_)}function cu(t,n){t.blockedOn===n&&(t.blockedOn=null,rh||(rh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wy)))}var uu=null;function j_(t){uu!==t&&(uu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){uu===t&&(uu=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(sh(l||s)===null)continue;break}var p=ui(s);p!==null&&(t.splice(n,3),n-=3,ad(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function _o(t){function n(V){return cu(V,t)}Os!==null&&cu(Os,t),Ps!==null&&cu(Ps,t),Is!==null&&cu(Is,t),Ul.forEach(n),Ol.forEach(n);for(var s=0;s<Bs.length;s++){var l=Bs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Bs.length&&(s=Bs[0],s.blockedOn===null);)Y_(s),s.blockedOn===null&&Bs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],M=f[Rn]||null;if(typeof p=="function")M||j_(s);else if(M){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[Rn]||null)w=M.formAction;else if(sh(f)!==null)continue}else w=M.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),j_(s)}}}function Z_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function oh(t){this._internalRoot=t}fu.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ci();H_(s,l,t,n,null,null)},fu.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;H_(t.current,2,null,t,null,null),Wc(),n[Gn]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=fs();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Bs.length&&n!==0&&n<Bs[s].priority;s++);Bs.splice(s,0,t),s===0&&Y_(t)}};var K_=e.version;if(K_!=="19.2.7")throw Error(r(527,K_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{pe=du.inject(Dy),ge=du}catch{}}return Bl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=ig,p=ag,M=sg;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=F_(t,1,!1,null,null,s,l,null,f,p,M,Z_),t[Gn]=n.current,Vd(t),new oh(n)},Bl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=ig,M=ag,w=sg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=F_(t,1,!0,n,s??null,l,f,V,p,M,w,Z_),n.context=z_(null),s=n.current,l=Ci(),l=$i(l),f=ys(l),f.callback=null,Es(s,f,l),s=l,n.current.lanes=s,qe(n,s),Ea(n),t[Gn]=n.current,Vd(t),new fu(n)},Bl.version="19.2.7",Bl}var rv;function zy(){if(rv)return uh.exports;rv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),uh.exports=Fy(),uh.exports}var Hy=zy();const Gy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},vo=(a,e="#")=>{var i;return((i=Gy[a])==null?void 0:i.trim())||e},On={app:vo("VITE_APP_URL","https://demo.morpheum.io"),docs:vo("VITE_DOCS_URL"),manifesto:vo("VITE_MANIFESTO_URL"),discord:vo("VITE_DISCORD_URL"),x:vo("VITE_X_URL"),tutorialVideo:vo("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Fu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],ph={text:"> The agent-native L1 DEX, for faster and safer trades.",href:On.manifesto},zs={eyebrow:{label:"A manifesto for verifiable agents",href:On.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:On.app},secondaryCta:{label:"Explore agents",href:On.explore}},ov={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},lv=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],sp={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},mh={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:On.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:On.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:On.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Hs={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},xo={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},hu={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:On.app},social:[{label:"Join Discord",href:On.discord},{label:"Join X",href:On.x}]},cv={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Ho({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function Vy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:hu.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Ho,{href:hu.primaryCta.href,variant:"primary",children:hu.primaryCta.label}),hu.social.map(a=>D.jsx(Ho,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function ky(){const[a,e]=ke.useState(!1),i=!!On.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:sp.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:On.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:sp.videoCaption})]})]})})}const Xy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function gh({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Xy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Wy(){const a=xo.cards[0],e=xo.cards[1],i=xo.cards[2],r=xo.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:xo.kicker}),D.jsx("h2",{className:"section-title explore__title",children:xo.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(gh,{type:"verified"}),D.jsx(gh,{type:"riskScore",value:o.risk}),D.jsx(gh,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="185",Yy=0,uv=1,qy=2,zu=1,jy=2,Xl=3,ls=0,xi=1,Ra=2,rs=0,Io=1,rp=2,fv=3,dv=4,Zy=5,Ar=100,Ky=101,Qy=102,Jy=103,$y=104,eE=200,tE=201,nE=202,iE=203,op=204,lp=205,aE=206,sE=207,rE=208,oE=209,lE=210,cE=211,uE=212,fE=213,dE=214,cp=0,up=1,fp=2,Go=3,dp=4,hp=5,pp=6,mp=7,kx=0,hE=1,pE=2,Da=0,Xx=1,Wx=2,Yx=3,qx=4,jx=5,Zx=6,Kx=7,Qx=300,wr=301,Vo=302,_h=303,vh=304,nf=306,gp=1e3,da=1001,_p=1002,Qn=1003,mE=1004,pu=1005,yn=1006,xh=1007,Ks=1008,Zi=1009,Jx=1010,$x=1011,$l=1012,em=1013,Ua=1014,Ca=1015,cs=1016,tm=1017,nm=1018,ec=1020,eS=35902,tS=35899,nS=1021,iS=1022,ha=1023,us=1026,Cr=1027,aS=1028,im=1029,Dr=1030,am=1031,sm=1033,Hu=33776,Gu=33777,Vu=33778,ku=33779,vp=35840,xp=35841,Sp=35842,Mp=35843,yp=36196,Ep=37492,bp=37496,Tp=37488,Ap=37489,Wu=37490,Rp=37491,Cp=37808,wp=37809,Dp=37810,Lp=37811,Np=37812,Up=37813,Op=37814,Pp=37815,Ip=37816,Bp=37817,Fp=37818,zp=37819,Hp=37820,Gp=37821,Vp=36492,kp=36494,Xp=36495,Wp=36283,Yp=36284,Yu=36285,qp=36286,gE=3200,hv=0,_E=1,Zs="",ni="srgb",qu="srgb-linear",ju="linear",Jt="srgb",So=7680,pv=519,vE=512,xE=513,SE=514,rm=515,ME=516,yE=517,om=518,EE=519,mv=35044,gv="300 es",wa=2e3,Zu=2001;function bE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ku(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function TE(){const a=Ku("canvas");return a.style.display="block",a}const _v={};function vv(...a){const e="THREE."+a.shift();console.log(e,...a)}function sS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=sS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Gt(...a){a=sS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Bo(...a){const e=a.join(" ");e in _v||(_v[e]=!0,ct(...a))}function AE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const RE={[cp]:up,[fp]:pp,[dp]:mp,[Go]:hp,[up]:cp,[pp]:fp,[mp]:dp,[hp]:Go};class Nr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xv=1234567;const Zl=Math.PI/180,tc=180/Math.PI;function Yo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ei[a&255]+ei[a>>8&255]+ei[a>>16&255]+ei[a>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[i&63|128]+ei[i>>8&255]+"-"+ei[i>>16&255]+ei[i>>24&255]+ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]).toLowerCase()}function Rt(a,e,i){return Math.max(e,Math.min(i,a))}function lm(a,e){return(a%e+e)%e}function CE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function wE(a,e,i){return a!==e?(i-a)/(e-a):0}function Kl(a,e,i){return(1-i)*a+i*e}function DE(a,e,i,r){return Kl(a,e,1-Math.exp(-i*r))}function LE(a,e=1){return e-Math.abs(lm(a,e*2)-e)}function NE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function UE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function OE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function PE(a,e){return a+Math.random()*(e-a)}function IE(a){return a*(.5-Math.random())}function BE(a){a!==void 0&&(xv=a);let e=xv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FE(a){return a*Zl}function zE(a){return a*tc}function HE(a){return(a&a-1)===0&&a!==0}function GE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function VE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function kE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*_,m*v,d*h);break;case"YZY":a.set(m*v,d*g,m*_,d*h);break;case"ZXZ":a.set(m*_,m*v,d*g,d*h);break;case"XZX":a.set(d*g,m*E,m*x,d*h);break;case"YXY":a.set(m*x,d*g,m*E,d*h);break;case"ZYZ":a.set(m*E,m*x,d*g,d*h);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Oo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ht={DEG2RAD:Zl,RAD2DEG:tc,generateUUID:Yo,clamp:Rt,euclideanModulo:lm,mapLinear:CE,inverseLerp:wE,lerp:Kl,damp:DE,pingpong:LE,smoothstep:NE,smootherstep:UE,randInt:OE,randFloat:PE,randFloatSpread:IE,seededRandom:BE,degToRad:FE,radToDeg:zE,isPowerOfTwo:HE,ceilPowerOfTwo:GE,floorPowerOfTwo:VE,setQuaternionFromProperEuler:kE,normalize:ri,denormalize:Oo},Sm=class Sm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sm.prototype.isVector2=!0;let Xt=Sm;class qo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],E=c[u+2],C=c[u+3];if(_!==C||m!==v||h!==x||g!==E){let y=m*v+h*x+g*E+_*C;y<0&&(v=-v,x=-x,E=-E,C=-C,y=-y);let S=1-d;if(y<.9995){const O=Math.acos(y),P=Math.sin(O);S=Math.sin(S*O)/P,d=Math.sin(d*O)/P,m=m*S+v*d,h=h*S+x*d,g=g*S+E*d,_=_*S+C*d}else{m=m*S+v*d,h=h*S+x*d,g=g*S+E*d,_=_*S+C*d;const O=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=O,h*=O,g*=O,_*=O}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[i]=d*E+g*_+m*x-h*v,e[i+1]=m*E+g*v+h*_-d*x,e[i+2]=h*E+g*x+d*v-m*_,e[i+3]=g*E-d*_-m*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),_=d(c/2),v=m(r/2),x=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+h*x*E,this._y=h*x*_-v*g*E,this._z=h*g*E+v*x*_,this._w=h*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+h*x*E,this._y=h*x*_-v*g*E,this._z=h*g*E-v*x*_,this._w=h*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-h*x*E,this._y=h*x*_+v*g*E,this._z=h*g*E+v*x*_,this._w=h*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-h*x*E,this._y=h*x*_+v*g*E,this._z=h*g*E-v*x*_,this._w=h*g*_+v*x*E;break;case"YZX":this._x=v*g*_+h*x*E,this._y=h*x*_+v*g*E,this._z=h*g*E-v*x*_,this._w=h*g*_-v*x*E;break;case"XZY":this._x=v*g*_-h*x*E,this._y=h*x*_-v*g*E,this._z=h*g*E+v*x*_,this._w=h*g*_+v*x*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-h)*x,this._z=(u-o)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+h)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(c-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(u-o)/x,this._x=(c+h)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mm=class Mm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Sv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Sv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),_=2*(c*r-u*i);return this.x=i+m*h+u*_-d*g,this.y=r+m*g+d*h-c*_,this.z=o+m*_+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mm.prototype.isVector3=!0;let te=Mm;const Sh=new te,Sv=new qo,ym=class ym{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],_=r[7],v=r[2],x=r[5],E=r[8],C=o[0],y=o[3],S=o[6],O=o[1],P=o[4],A=o[7],L=o[2],N=o[5],F=o[8];return c[0]=u*C+d*O+m*L,c[3]=u*y+d*P+m*N,c[6]=u*S+d*A+m*F,c[1]=h*C+g*O+_*L,c[4]=h*y+g*P+_*N,c[7]=h*S+g*A+_*F,c[2]=v*C+x*O+E*L,c[5]=v*y+x*P+E*N,c[8]=v*S+x*A+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=g*u-d*h,v=d*m-g*c,x=h*c-u*m,E=i*_+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(o*h-g*r)*C,e[2]=(d*r-o*u)*C,e[3]=v*C,e[4]=(g*i-o*m)*C,e[5]=(o*c-d*i)*C,e[6]=x*C,e[7]=(r*m-h*i)*C,e[8]=(u*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,i)),this}rotate(e){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,i){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ym.prototype.isMatrix3=!0;let vt=ym;const Mh=new vt,Mv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const a={enabled:!0,workingColorSpace:qu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Jt&&(o.r=os(o.r),o.g=os(o.g),o.b=os(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Jt&&(o.r=Fo(o.r),o.g=Fo(o.g),o.b=Fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Zs?ju:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[qu]:{primaries:e,whitePoint:r,transfer:ju,toXYZ:Mv,fromXYZ:yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Jt,toXYZ:Mv,fromXYZ:yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),a}const Pt=XE();function os(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Mo;class WE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Mo===void 0&&(Mo=Ku("canvas")),Mo.width=e.width,Mo.height=e.height;const o=Mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Mo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ku("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=os(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(os(i[r]/255)*255):i[r]=os(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YE=0;class cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(yh(o[u].image)):c.push(yh(o[u]))}else c=yh(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function yh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?WE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let qE=0;const Eh=new te;class ii extends Nr{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,r=da,o=da,c=yn,u=Ks,d=ha,m=Zi,h=ii.DEFAULT_ANISOTROPY,g=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Yo(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case da:e.x=e.x<0?0:1;break;case _p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case da:e.y=e.y<0?0:1;break;case _p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Qx;ii.DEFAULT_ANISOTROPY=1;const Em=class Em{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+C)<.1&&Math.abs(E+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,A=(x+1)/2,L=(S+1)/2,N=(g+v)/4,F=(_+C)/4,T=(E+y)/4;return P>A&&P>L?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=N/r,c=F/r):A>L?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=N/o,c=T/o):L<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),r=F/c,o=T/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(_-C)*(_-C)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(_-C)/O,this.z=(v-g)/O,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Em.prototype.isVector4=!0;let Mn=Em;class jE extends Nr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Mn(0,0,e,i),this.scissorTest=!1,this.viewport=new Mn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new ii(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new cm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class La extends jE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class rS extends ii{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends ii{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tf=class tf{constructor(e,i,r,o,c,u,d,m,h,g,_,v,x,E,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,_,v,x,E,C,y)}set(e,i,r,o,c,u,d,m,h,g,_,v,x,E,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=h,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=E,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tf().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/yo.setFromMatrixColumn(e,0).length(),c=1/yo.setFromMatrixColumn(e,1).length(),u=1/yo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=x+E*h,i[5]=v-C*h,i[9]=-d*m,i[2]=C-v*h,i[6]=E+x*h,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,E=h*g,C=h*_;i[0]=v+C*d,i[4]=E*d-x,i[8]=u*h,i[1]=u*_,i[5]=u*g,i[9]=-d,i[2]=x*d-E,i[6]=C+v*d,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,E=h*g,C=h*_;i[0]=v-C*d,i[4]=-u*_,i[8]=E+x*d,i[1]=x+E*d,i[5]=u*g,i[9]=C-v*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=d*g,C=d*_;i[0]=m*g,i[4]=E*h-x,i[8]=v*h+C,i[1]=m*_,i[5]=C*h+v,i[9]=x*h-E,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*h,E=d*m,C=d*h;i[0]=m*g,i[4]=C-v*_,i[8]=E*_+x,i[1]=_,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=x*_+E,i[10]=v-C*_}else if(e.order==="XZY"){const v=u*m,x=u*h,E=d*m,C=d*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=v*_+C,i[5]=u*g,i[9]=x*_-E,i[2]=E*_-x,i[6]=d*g,i[10]=C*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,QE)}lookAt(e,i,r){const o=this.elements;return wi.subVectors(e,i),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Gs.crossVectors(r,wi),Gs.lengthSq()===0&&(Math.abs(r.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Gs.crossVectors(r,wi)),Gs.normalize(),mu.crossVectors(wi,Gs),o[0]=Gs.x,o[4]=mu.x,o[8]=wi.x,o[1]=Gs.y,o[5]=mu.y,o[9]=wi.y,o[2]=Gs.z,o[6]=mu.z,o[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],_=r[5],v=r[9],x=r[13],E=r[2],C=r[6],y=r[10],S=r[14],O=r[3],P=r[7],A=r[11],L=r[15],N=o[0],F=o[4],T=o[8],U=o[12],k=o[1],G=o[5],q=o[9],fe=o[13],ue=o[2],X=o[6],z=o[10],H=o[14],$=o[3],me=o[7],ye=o[11],I=o[15];return c[0]=u*N+d*k+m*ue+h*$,c[4]=u*F+d*G+m*X+h*me,c[8]=u*T+d*q+m*z+h*ye,c[12]=u*U+d*fe+m*H+h*I,c[1]=g*N+_*k+v*ue+x*$,c[5]=g*F+_*G+v*X+x*me,c[9]=g*T+_*q+v*z+x*ye,c[13]=g*U+_*fe+v*H+x*I,c[2]=E*N+C*k+y*ue+S*$,c[6]=E*F+C*G+y*X+S*me,c[10]=E*T+C*q+y*z+S*ye,c[14]=E*U+C*fe+y*H+S*I,c[3]=O*N+P*k+A*ue+L*$,c[7]=O*F+P*G+A*X+L*me,c[11]=O*T+P*q+A*z+L*ye,c[15]=O*U+P*fe+A*H+L*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],C=e[7],y=e[11],S=e[15],O=m*x-h*v,P=d*x-h*_,A=d*v-m*_,L=u*x-h*g,N=u*v-m*g,F=u*_-d*g;return i*(C*O-y*P+S*A)-r*(E*O-y*L+S*N)+o*(E*P-C*L+S*F)-c*(E*A-C*N+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],C=e[13],y=e[14],S=e[15],O=i*d-r*u,P=i*m-o*u,A=i*h-c*u,L=r*m-o*d,N=r*h-c*d,F=o*h-c*m,T=g*C-_*E,U=g*y-v*E,k=g*S-x*E,G=_*y-v*C,q=_*S-x*C,fe=v*S-x*y,ue=O*fe-P*q+A*G+L*k-N*U+F*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ue;return e[0]=(d*fe-m*q+h*G)*X,e[1]=(o*q-r*fe-c*G)*X,e[2]=(C*F-y*N+S*L)*X,e[3]=(v*N-_*F-x*L)*X,e[4]=(m*k-u*fe-h*U)*X,e[5]=(i*fe-o*k+c*U)*X,e[6]=(y*A-E*F-S*P)*X,e[7]=(g*F-v*A+x*P)*X,e[8]=(u*q-d*k+h*T)*X,e[9]=(r*k-i*q-c*T)*X,e[10]=(E*N-C*A+S*O)*X,e[11]=(_*A-g*N-x*O)*X,e[12]=(d*U-u*G-m*T)*X,e[13]=(i*G-r*U+o*T)*X,e[14]=(C*P-E*L-y*O)*X,e[15]=(g*L-_*P+v*O)*X,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,_=d+d,v=c*h,x=c*g,E=c*_,C=u*g,y=u*_,S=d*_,O=m*h,P=m*g,A=m*_,L=r.x,N=r.y,F=r.z;return o[0]=(1-(C+S))*L,o[1]=(x+A)*L,o[2]=(E-P)*L,o[3]=0,o[4]=(x-A)*N,o[5]=(1-(v+S))*N,o[6]=(y+O)*N,o[7]=0,o[8]=(E+P)*F,o[9]=(y-O)*F,o[10]=(1-(v+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=yo.set(o[0],o[1],o[2]).length();const d=yo.set(o[4],o[5],o[6]).length(),m=yo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),oa.copy(this);const h=1/u,g=1/d,_=1/m;return oa.elements[0]*=h,oa.elements[1]*=h,oa.elements[2]*=h,oa.elements[4]*=g,oa.elements[5]*=g,oa.elements[6]*=g,oa.elements[8]*=_,oa.elements[9]*=_,oa.elements[10]*=_,i.setFromRotationMatrix(oa),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=wa,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let E,C;if(m)E=c/(u-c),C=u*c/(u-c);else if(d===wa)E=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===Zu)E=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=wa,m=!1){const h=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let E,C;if(m)E=1/(u-c),C=u/(u-c);else if(d===wa)E=-2/(u-c),C=-(u+c)/(u-c);else if(d===Zu)E=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};tf.prototype.isMatrix4=!0;let Tn=tf;const yo=new te,oa=new Tn,KE=new te(0,0,0),QE=new te(1,1,1),Gs=new te,mu=new te,wi=new te,Ev=new Tn,bv=new qo;class Lr{constructor(e=0,i=0,r=0,o=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class oS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JE=0;const Tv=new te,Eo=new qo,$a=new Tn,gu=new te,Fl=new te,$E=new te,eb=new qo,Av=new te(1,0,0),Rv=new te(0,1,0),Cv=new te(0,0,1),wv={type:"added"},tb={type:"removed"},bo={type:"childadded",child:null},bh={type:"childremoved",child:null};class Ni extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ni.DEFAULT_UP.clone();const e=new te,i=new Lr,r=new qo,o=new te(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tn},normalMatrix:{value:new vt}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=Ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Eo.setFromAxisAngle(e,i),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(e,i){return Eo.setFromAxisAngle(e,i),this.quaternion.premultiply(Eo),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,i){return Tv.copy(e).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gu.copy(e):gu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$a.lookAt(Fl,gu,this.up):$a.lookAt(gu,Fl,this.up),this.quaternion.setFromRotationMatrix($a),o&&($a.extractRotation(o.matrixWorld),Eo.setFromRotationMatrix($a),this.quaternion.premultiply(Eo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),bo.child=e,this.dispatchEvent(bo),bo.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(tb),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$a.multiply(e.parent.matrixWorld)),e.applyMatrix4($a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ni.DEFAULT_UP=new te(0,1,0);Ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wl extends Ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Wl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const lS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Ah(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class jt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Pt.workingColorSpace){if(e=lm(e,1),i=Rt(i,0,1),r=Rt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Ah(u,c,e+1/3),this.g=Ah(u,c,e),this.b=Ah(u,c,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,i=ni){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){const r=lS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Pt.workingToColorSpace(ti.copy(this),e),Math.round(Rt(ti.r*255,0,255))*65536+Math.round(Rt(ti.g*255,0,255))*256+Math.round(Rt(ti.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(ti.copy(this),i);const r=ti.r,o=ti.g,c=ti.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const _=u-d;switch(h=g<=.5?_/(u+d):_/(2-u-d),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(ti.copy(this),i),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=ni){Pt.workingToColorSpace(ti.copy(this),e);const i=ti.r,r=ti.g,o=ti.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Vs),this.setHSL(Vs.h+e,Vs.s+i,Vs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Vs),e.getHSL(_u);const r=Kl(Vs.h,_u.h,i),o=Kl(Vs.s,_u.s,i),c=Kl(Vs.l,_u.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new jt;jt.NAMES=lS;class ib extends Ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const la=new te,es=new te,Rh=new te,ts=new te,To=new te,Ao=new te,Dv=new te,Ch=new te,wh=new te,Dh=new te,Lh=new Mn,Nh=new Mn,Uh=new Mn;class fa{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),la.subVectors(e,i),o.cross(la);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){la.subVectors(o,i),es.subVectors(r,i),Rh.subVectors(e,i);const u=la.dot(la),d=la.dot(es),m=la.dot(Rh),h=es.dot(es),g=es.dot(Rh),_=u*h-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(h*m-d*g)*v,E=(u*g-d*m)*v;return c.set(1-x-E,E,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,ts)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ts.x),m.addScaledVector(u,ts.y),m.addScaledVector(d,ts.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return Lh.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Lh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,r),Uh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Lh,c.x),u.addScaledVector(Nh,c.y),u.addScaledVector(Uh,c.z),u}static isFrontFacing(e,i,r,o){return la.subVectors(r,i),es.subVectors(e,i),la.cross(es).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return la.subVectors(this.c,this.b),es.subVectors(this.a,this.b),la.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return fa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return fa.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return fa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;To.subVectors(o,r),Ao.subVectors(c,r),Ch.subVectors(e,r);const m=To.dot(Ch),h=Ao.dot(Ch);if(m<=0&&h<=0)return i.copy(r);wh.subVectors(e,o);const g=To.dot(wh),_=Ao.dot(wh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*h;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(To,u);Dh.subVectors(e,c);const x=To.dot(Dh),E=Ao.dot(Dh);if(E>=0&&x<=E)return i.copy(c);const C=x*h-m*E;if(C<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(r).addScaledVector(Ao,d);const y=g*E-x*_;if(y<=0&&_-g>=0&&x-E>=0)return Dv.subVectors(c,o),d=(_-g)/(_-g+(x-E)),i.copy(o).addScaledVector(Dv,d);const S=1/(y+C+v);return u=C*S,d=v*S,i.copy(r).addScaledVector(To,u).addScaledVector(Ao,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ac{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ca.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ca.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ca.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ca):ca.fromBufferAttribute(c,u),ca.applyMatrix4(e.matrixWorld),this.expandByPoint(ca);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vu.copy(r.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ca),ca.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zl),xu.subVectors(this.max,zl),Ro.subVectors(e.a,zl),Co.subVectors(e.b,zl),wo.subVectors(e.c,zl),ks.subVectors(Co,Ro),Xs.subVectors(wo,Co),Mr.subVectors(Ro,wo);let i=[0,-ks.z,ks.y,0,-Xs.z,Xs.y,0,-Mr.z,Mr.y,ks.z,0,-ks.x,Xs.z,0,-Xs.x,Mr.z,0,-Mr.x,-ks.y,ks.x,0,-Xs.y,Xs.x,0,-Mr.y,Mr.x,0];return!Oh(i,Ro,Co,wo,xu)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,Ro,Co,wo,xu))?!1:(Su.crossVectors(ks,Xs),i=[Su.x,Su.y,Su.z],Oh(i,Ro,Co,wo,xu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ca).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ca).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ns=[new te,new te,new te,new te,new te,new te,new te,new te],ca=new te,vu=new ac,Ro=new te,Co=new te,wo=new te,ks=new te,Xs=new te,Mr=new te,zl=new te,xu=new te,Su=new te,yr=new te;function Oh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){yr.fromArray(a,c);const d=o.x*Math.abs(yr.x)+o.y*Math.abs(yr.y)+o.z*Math.abs(yr.z),m=e.dot(yr),h=i.dot(yr),g=r.dot(yr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Un=new te,Mu=new Xt;let ab=0;class Na extends Nr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=mv,this.updateRanges=[],this.gpuType=Ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(e),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix3(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix4(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.applyNormalMatrix(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.transformDirection(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ri(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),o=ri(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),o=ri(o,this.array),c=ri(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class cS extends Na{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class uS extends Na{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ki extends Na{constructor(e,i,r){super(new Float32Array(e),i,r)}}const sb=new ac,Hl=new te,Ph=new te;class um{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):sb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hl.subVectors(e,this.center);const i=Hl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Hl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hl.copy(e.center).add(Ph)),this.expandByPoint(Hl.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rb=0;const qi=new Tn,Ih=new Ni,Do=new te,Di=new ac,Gl=new ac,Xn=new te;class Qi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bE(e)?uS:cS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,i,r){return qi.makeTranslation(e,i,r),this.applyMatrix4(qi),this}scale(e,i,r){return qi.makeScale(e,i,r),this.applyMatrix4(qi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ki(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ac);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Di.setFromBufferAttribute(c),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new um);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];Gl.setFromBufferAttribute(d),this.morphTargetsRelative?(Xn.addVectors(Di.min,Gl.min),Di.expandByPoint(Xn),Xn.addVectors(Di.max,Gl.max),Di.expandByPoint(Xn)):(Di.expandByPoint(Gl.min),Di.expandByPoint(Gl.max))}Di.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Xn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Xn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Xn.fromBufferAttribute(d,h),m&&(Do.fromBufferAttribute(e,h),Xn.add(Do)),o=Math.max(o,r.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Na(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new te,m[T]=new te;const h=new te,g=new te,_=new te,v=new Xt,x=new Xt,E=new Xt,C=new te,y=new te;function S(T,U,k){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,k),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),E.fromBufferAttribute(c,k),g.sub(h),_.sub(h),x.sub(v),E.sub(v);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(G),d[T].add(C),d[U].add(C),d[k].add(C),m[T].add(y),m[U].add(y),m[k].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,U=O.length;T<U;++T){const k=O[T],G=k.start,q=k.count;for(let fe=G,ue=G+q;fe<ue;fe+=3)S(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const P=new te,A=new te,L=new te,N=new te;function F(T){L.fromBufferAttribute(o,T),N.copy(L);const U=d[T];P.copy(U),P.sub(L.multiplyScalar(L.dot(U))).normalize(),A.crossVectors(N,U);const G=A.dot(m[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,G)}for(let T=0,U=O.length;T<U;++T){const k=O[T],G=k.start,q=k.count;for(let fe=G,ue=G+q;fe<ue;fe+=3)F(e.getX(fe+0)),F(e.getX(fe+1)),F(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Na(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new te,c=new te,u=new te,d=new te,m=new te,h=new te,g=new te,_=new te;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Xn.fromBufferAttribute(e,i),Xn.normalize(),e.setXYZ(i,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(m.length*g);let x=0,E=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?x=m[C]*d.data.stride+d.offset:x=m[C]*g;for(let S=0;S<g;S++)v[E++]=h[x++]}return new Na(v,g,_)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],x=e(v,r);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ob=0;class af extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Io,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(r.blending=this.blending),this.side!==ls&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==op&&(r.blendSrc=this.blendSrc),this.blendDst!==lp&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(r.stencilFail=this.stencilFail),this.stencilZFail!==So&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const is=new te,Bh=new te,yu=new te,Ws=new te,Fh=new te,Eu=new te,zh=new te;class lb{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=is.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,i),is.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Bh.copy(e).add(i).multiplyScalar(.5),yu.copy(i).sub(e).normalize(),Ws.copy(this.origin).sub(Bh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(yu),d=Ws.dot(this.direction),m=-Ws.dot(yu),h=Ws.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*m-d,v=u*d-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const C=1/g;_*=C,v*=C,x=_*(_+u*v+2*d)+v*(u*_+v+2*m)+h}else v=c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;else v=-c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;else v<=-E?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+h):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+h):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+h);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Bh).addScaledVector(yu,v),x}intersectSphere(e,i){is.subVectors(e.center,this.origin);const r=is.dot(this.direction),o=is.dot(is)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,i,r,o,c){Fh.subVectors(i,e),Eu.subVectors(r,e),zh.crossVectors(Fh,Eu);let u=this.direction.dot(zh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ws.subVectors(this.origin,e);const m=d*this.direction.dot(Eu.crossVectors(Ws,Eu));if(m<0)return null;const h=d*this.direction.dot(Fh.cross(Ws));if(h<0||m+h>u)return null;const g=-d*Ws.dot(zh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qu extends af{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lv=new Tn,Er=new lb,bu=new um,Nv=new te,Tu=new te,Au=new te,Ru=new te,Hh=new te,Cu=new te,Uv=new te,wu=new te;class Li extends Ni{constructor(e=new Qi,i=new Qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],_=c[m];g!==0&&(Hh.fromBufferAttribute(_,e),u?Cu.addScaledVector(Hh,g):Cu.addScaledVector(Hh.sub(i),g))}i.add(Cu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(bu.containsPoint(Er.origin)===!1&&(Er.intersectSphere(bu,Nv)===null||Er.origin.distanceToSquared(Nv)>(e.far-e.near)**2))&&(Lv.copy(c).invert(),Er.copy(e.ray).applyMatrix4(Lv),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,C=v.length;E<C;E++){const y=v[E],S=u[y.materialIndex],O=Math.max(y.start,x.start),P=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let A=O,L=P;A<L;A+=3){const N=d.getX(A),F=d.getX(A+1),T=d.getX(A+2);o=Du(this,S,e,r,h,g,_,N,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),C=Math.min(d.count,x.start+x.count);for(let y=E,S=C;y<S;y+=3){const O=d.getX(y),P=d.getX(y+1),A=d.getX(y+2);o=Du(this,u,e,r,h,g,_,O,P,A),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=v.length;E<C;E++){const y=v[E],S=u[y.materialIndex],O=Math.max(y.start,x.start),P=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let A=O,L=P;A<L;A+=3){const N=A,F=A+1,T=A+2;o=Du(this,S,e,r,h,g,_,N,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),C=Math.min(m.count,x.start+x.count);for(let y=E,S=C;y<S;y+=3){const O=y,P=y+1,A=y+2;o=Du(this,u,e,r,h,g,_,O,P,A),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function cb(a,e,i,r,o,c,u,d){let m;if(e.side===xi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===ls,d),m===null)return null;wu.copy(d),wu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(wu);return h<i.near||h>i.far?null:{distance:h,point:wu.clone(),object:a}}function Du(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,Tu),a.getVertexPosition(m,Au),a.getVertexPosition(h,Ru);const g=cb(a,e,i,r,Tu,Au,Ru,Uv);if(g){const _=new te;fa.getBarycoord(Uv,Tu,Au,Ru,_),o&&(g.uv=fa.getInterpolatedAttribute(o,d,m,h,_,new Xt)),c&&(g.uv1=fa.getInterpolatedAttribute(c,d,m,h,_,new Xt)),u&&(g.normal=fa.getInterpolatedAttribute(u,d,m,h,_,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:h,normal:new te,materialIndex:0};fa.getNormal(Tu,Au,Ru,v.normal),g.face=v,g.barycoord=_}return g}class ub extends ii{constructor(e=null,i=1,r=1,o,c,u,d,m,h=Qn,g=Qn,_,v){super(null,u,d,m,h,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new te,fb=new te,db=new vt;class Tr{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Gh.subVectors(r,i).cross(fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Gh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||db.getNormalMatrix(e),o=this.coplanarPoint(Gh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new um,hb=new Xt(.5,.5),Lu=new te;class fS{constructor(e=new Tr,i=new Tr,r=new Tr,o=new Tr,c=new Tr,u=new Tr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=wa,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],C=c[9],y=c[10],S=c[11],O=c[12],P=c[13],A=c[14],L=c[15];if(o[0].setComponents(h-u,x-g,S-E,L-O).normalize(),o[1].setComponents(h+u,x+g,S+E,L+O).normalize(),o[2].setComponents(h+d,x+_,S+C,L+P).normalize(),o[3].setComponents(h-d,x-_,S-C,L-P).normalize(),r)o[4].setComponents(m,v,y,A).normalize(),o[5].setComponents(h-m,x-v,S-y,L-A).normalize();else if(o[4].setComponents(h-m,x-v,S-y,L-A).normalize(),i===wa)o[5].setComponents(h+m,x+v,S+y,L+A).normalize();else if(i===Zu)o[5].setComponents(m,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const i=hb.distanceTo(e.center);return br.radius=.7071067811865476+i,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Lu.x=o.normal.x>0?e.max.x:e.min.x,Lu.y=o.normal.y>0?e.max.y:e.min.y,Lu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dS extends ii{constructor(e=[],i=wr,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fm extends ii{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends ii{constructor(e,i,r=Ua,o,c,u,d=Qn,m=Qn,h,g=us,_=1){if(g!==us&&g!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pb extends ko{constructor(e,i=Ua,r=wr,o,c,u=Qn,d=Qn,m,h=us){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hS extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sc extends Qi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Ki(h,3)),this.setAttribute("normal",new Ki(g,3)),this.setAttribute("uv",new Ki(_,2));function E(C,y,S,O,P,A,L,N,F,T,U){const k=A/F,G=L/T,q=A/2,fe=L/2,ue=N/2,X=F+1,z=T+1;let H=0,$=0;const me=new te;for(let ye=0;ye<z;ye++){const I=ye*G-fe;for(let K=0;K<X;K++){const Se=K*k-q;me[C]=Se*O,me[y]=I*P,me[S]=ue,h.push(me.x,me.y,me.z),me[C]=0,me[y]=0,me[S]=N>0?1:-1,g.push(me.x,me.y,me.z),_.push(K/F),_.push(1-ye/T),H+=1}}for(let ye=0;ye<T;ye++)for(let I=0;I<F;I++){const K=v+I+X*ye,Se=v+I+X*(ye+1),Ne=v+(I+1)+X*(ye+1),we=v+(I+1)+X*ye;m.push(K,Se,we),m.push(Se,Ne,we),$+=6}d.addGroup(x,$,U),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new Xt:new te);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new te,o=[],c=[],u=[],d=new te,m=new Tn;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new te)}c[0]=new te,u[0]=new te;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),v<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Rt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(d,E))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(Rt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(x=-x);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function dm(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,_){let v=(u-c)/h-(d-c)/(h+g)+(d-u)/g,x=(d-u)/g-(m-u)/(g+_)+(m-d)/_;v*=g,x*=g,o(u,d,v,x)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const Ov=new te,Pv=new te,Vh=new dm,kh=new dm,Xh=new dm;class gb extends mb{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new te){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(Pv.subVectors(o[0],o[1]).add(o[0]),h=Pv);const _=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(Ov.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Ov),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(h.distanceToSquared(_),x),C=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);C<1e-4&&(C=1),E<1e-4&&(E=C),y<1e-4&&(y=C),Vh.initNonuniformCatmullRom(h.x,_.x,v.x,g.x,E,C,y),kh.initNonuniformCatmullRom(h.y,_.y,v.y,g.y,E,C,y),Xh.initNonuniformCatmullRom(h.z,_.z,v.z,g.z,E,C,y)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(h.x,_.x,v.x,g.x,this.tension),kh.initCatmullRom(h.y,_.y,v.y,g.y,this.tension),Xh.initCatmullRom(h.z,_.z,v.z,g.z,this.tension));return r.set(Vh.calc(m),kh.calc(m),Xh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qs extends Qi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,_=e/d,v=i/m,x=[],E=[],C=[],y=[];for(let S=0;S<g;S++){const O=S*v-u;for(let P=0;P<h;P++){const A=P*_-c;E.push(A,-O,0),C.push(0,0,1),y.push(P/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<d;O++){const P=O+h*S,A=O+h*(S+1),L=O+1+h*(S+1),N=O+1+h*S;x.push(P,A,N),x.push(A,L,N)}this.setIndex(x),this.setAttribute("position",new Ki(E,3)),this.setAttribute("normal",new Ki(C,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(Iv(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Iv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function oi(a){const e={};for(let i=0;i<a.length;i++){const r=Xo(a[i]);for(const o in r)e[o]=r[o]}return e}function Iv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _b(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function pS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const vb={clone:Xo,merge:oi};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends af{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=_b(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new jt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Mn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mb extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yb extends af{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends af{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nu=new te,Uu=new qo,ba=new te;class mS extends Ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=wa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nu,Uu,ba),ba.x===1&&ba.y===1&&ba.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nu,Uu,ba.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Nu,Uu,ba),ba.x===1&&ba.y===1&&ba.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nu,Uu,ba.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ys=new te,Bv=new Xt,Fv=new Xt;class ji extends mS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z),Ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z)}getViewSize(e,i){return this.getViewBounds(e,Bv,Fv),i.subVectors(Fv,Bv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class gS extends mS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Lo=-90,No=1;class bb extends Ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ji(Lo,No,e,i);o.layers=this.layers,this.add(o);const c=new ji(Lo,No,e,i);c.layers=this.layers,this.add(c);const u=new ji(Lo,No,e,i);u.layers=this.layers,this.add(u);const d=new ji(Lo,No,e,i);d.layers=this.layers,this.add(d);const m=new ji(Lo,No,e,i);m.layers=this.layers,this.add(m);const h=new ji(Lo,No,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===wa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Tb extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bm=class bm{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};bm.prototype.isMatrix2=!0;let zv=bm;function Hv(a,e,i,r){const o=Ab(r);switch(i){case nS:return a*e;case aS:return a*e/o.components*o.byteLength;case im:return a*e/o.components*o.byteLength;case Dr:return a*e*2/o.components*o.byteLength;case am:return a*e*2/o.components*o.byteLength;case iS:return a*e*3/o.components*o.byteLength;case ha:return a*e*4/o.components*o.byteLength;case sm:return a*e*4/o.components*o.byteLength;case Hu:case Gu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Vu:case ku:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xp:case Mp:return Math.max(a,16)*Math.max(e,8)/4;case vp:case Sp:return Math.max(a,8)*Math.max(e,8)/2;case yp:case Ep:case Tp:case Ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bp:case Wu:case Rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Np:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Up:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Op:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Vp:case kp:case Xp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Wp:case Yp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Yu:case qp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ab(a){switch(a){case Zi:case Jx:return{byteLength:1,components:1};case $l:case $x:case cs:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case Ua:case em:case Ca:return{byteLength:4,components:1};case eS:case tS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _S(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Rb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,_=h.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=a.SHORT;else if(h instanceof Uint32Array)x=a.UNSIGNED_INT;else if(h instanceof Int32Array)x=a.INT;else if(h instanceof Int8Array)x=a.BYTE;else if(h instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const g=m.array,_=m.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],C=_[x];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,_[v]=C)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const C=_[x];a.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var Cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
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
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
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
#endif`,Pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
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
#endif`,Bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
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
#endif`,Vb=`#ifdef USE_BUMPMAP
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qb=`#define PI 3.141592653589793
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
} // validated`,Jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$b=`vec3 transformedNormal = objectNormal;
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
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
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
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,S1=`#ifdef USE_ENVMAP
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
#endif`,M1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T1=`PhysicalMaterial material;
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
#endif`,A1=`uniform sampler2D dfgLUT;
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
}`,R1=`
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F1=`#if defined( USE_POINTS_UV )
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
#endif`,z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
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
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hT=`float getShadowMask() {
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
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ST=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#ifdef USE_TRANSMISSION
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
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
}`,PT=`#if DEPTH_PACKING == 3200
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
}`,IT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`uniform float scale;
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,kT=`uniform vec3 diffuse;
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
}`,XT=`#define LAMBERT
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
}`,WT=`#define LAMBERT
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
}`,YT=`#define MATCAP
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
}`,qT=`#define MATCAP
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
}`,jT=`#define NORMAL
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
}`,ZT=`#define NORMAL
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
}`,KT=`#define PHONG
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
}`,QT=`#define PHONG
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
}`,JT=`#define STANDARD
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
}`,$T=`#define STANDARD
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
}`,eA=`#define TOON
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
}`,tA=`#define TOON
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
}`,nA=`uniform float size;
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,sA=`uniform vec3 color;
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
}`,rA=`uniform float rotation;
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
}`,oA=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:Cb,alphahash_pars_fragment:wb,alphamap_fragment:Db,alphamap_pars_fragment:Lb,alphatest_fragment:Nb,alphatest_pars_fragment:Ub,aomap_fragment:Ob,aomap_pars_fragment:Pb,batching_pars_vertex:Ib,batching_vertex:Bb,begin_vertex:Fb,beginnormal_vertex:zb,bsdfs:Hb,iridescence_fragment:Gb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:Yb,color_fragment:qb,color_pars_fragment:jb,color_pars_vertex:Zb,color_vertex:Kb,common:Qb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:$b,displacementmap_pars_vertex:e1,displacementmap_vertex:t1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:a1,colorspace_pars_fragment:s1,envmap_fragment:r1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:S1,envmap_vertex:u1,fog_vertex:f1,fog_pars_vertex:d1,fog_fragment:h1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:M1,lights_toon_pars_fragment:y1,lights_phong_fragment:E1,lights_phong_pars_fragment:b1,lights_physical_fragment:T1,lights_physical_pars_fragment:A1,lights_fragment_begin:R1,lights_fragment_maps:C1,lights_fragment_end:w1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:O1,map_fragment:P1,map_pars_fragment:I1,map_particle_fragment:B1,map_particle_pars_fragment:F1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:H1,morphinstance_vertex:G1,morphcolor_vertex:V1,morphnormal_vertex:k1,morphtarget_pars_vertex:X1,morphtarget_vertex:W1,normal_fragment_begin:Y1,normal_fragment_maps:q1,normal_pars_fragment:j1,normal_pars_vertex:Z1,normal_vertex:K1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:aT,project_vertex:sT,dithering_fragment:rT,dithering_pars_fragment:oT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:fT,shadowmap_vertex:dT,shadowmask_pars_fragment:hT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:ST,tonemapping_pars_fragment:MT,transmission_fragment:yT,transmission_pars_fragment:ET,uv_pars_fragment:bT,uv_pars_vertex:TT,uv_vertex:AT,worldpos_vertex:RT,background_vert:CT,background_frag:wT,backgroundCube_vert:DT,backgroundCube_frag:LT,cube_vert:NT,cube_frag:UT,depth_vert:OT,depth_frag:PT,distance_vert:IT,distance_frag:BT,equirect_vert:FT,equirect_frag:zT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:VT,meshbasic_frag:kT,meshlambert_vert:XT,meshlambert_frag:WT,meshmatcap_vert:YT,meshmatcap_frag:qT,meshnormal_vert:jT,meshnormal_frag:ZT,meshphong_vert:KT,meshphong_frag:QT,meshphysical_vert:JT,meshphysical_frag:$T,meshtoon_vert:eA,meshtoon_frag:tA,points_vert:nA,points_frag:iA,shadow_vert:aA,shadow_frag:sA,sprite_vert:rA,sprite_frag:oA},We={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Aa={basic:{uniforms:oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:oi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:oi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new jt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:oi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:oi([We.points,We.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:oi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:oi([We.common,We.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:oi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:oi([We.sprite,We.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:oi([We.common,We.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:oi([We.lights,We.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Aa.physical={uniforms:oi([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Ou={r:0,b:0,g:0},lA=new Tn,vS=new vt;vS.set(-1,0,0,0,1,0,0,0,1);function cA(a,e,i,r,o,c){const u=new jt(0);let d=o===!0?0:1,m,h,g=null,_=0,v=null;function x(O){let P=O.isScene===!0?O.background:null;if(P&&P.isTexture){const A=O.backgroundBlurriness>0;P=e.get(P,A)}return P}function E(O){let P=!1;const A=x(O);A===null?y(u,d):A&&A.isColor&&(y(A,1),P=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(O,P){const A=x(P);A&&(A.isCubeTexture||A.mapping===nf)?(h===void 0&&(h=new Li(new sc(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Xo(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lA.makeRotationFromEuler(P.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(vS),h.material.toneMapped=Pt.getTransfer(A.colorSpace)!==Jt,(g!==A||_!==A.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,g=A,_=A.version,v=a.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Li(new Qs(2,2),new Ji({name:"BackgroundMaterial",uniforms:Xo(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(A.colorSpace)!==Jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,v=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,P){O.getRGB(Ou,pS(a)),i.buffers.color.setClear(Ou.r,Ou.g,Ou.b,P,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,P=1){u.set(O),d=P,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,y(u,d)},render:E,addToRenderList:C,dispose:S}}function uA(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(G,q,fe,ue,X){let z=!1;const H=_(G,ue,fe,q);c!==H&&(c=H,h(c.object)),z=x(G,ue,fe,X),z&&E(G,ue,fe,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,A(G,q,fe,ue),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return a.createVertexArray()}function h(G){return a.bindVertexArray(G)}function g(G){return a.deleteVertexArray(G)}function _(G,q,fe,ue){const X=ue.wireframe===!0;let z=r[q.id];z===void 0&&(z={},r[q.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let $=z[H];$===void 0&&($={},z[H]=$);let me=$[fe.id];me===void 0&&(me={},$[fe.id]=me);let ye=me[X];return ye===void 0&&(ye=v(m()),me[X]=ye),ye}function v(G){const q=[],fe=[],ue=[];for(let X=0;X<i;X++)q[X]=0,fe[X]=0,ue[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:fe,attributeDivisors:ue,object:G,attributes:{},index:null}}function x(G,q,fe,ue){const X=c.attributes,z=q.attributes;let H=0;const $=fe.getAttributes();for(const me in $)if($[me].location>=0){const I=X[me];let K=z[me];if(K===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function E(G,q,fe,ue){const X={},z=q.attributes;let H=0;const $=fe.getAttributes();for(const me in $)if($[me].location>=0){let I=z[me];I===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),X[me]=K,H++}c.attributes=X,c.attributesNum=H,c.index=ue}function C(){const G=c.newAttributes;for(let q=0,fe=G.length;q<fe;q++)G[q]=0}function y(G){S(G,0)}function S(G,q){const fe=c.newAttributes,ue=c.enabledAttributes,X=c.attributeDivisors;fe[G]=1,ue[G]===0&&(a.enableVertexAttribArray(G),ue[G]=1),X[G]!==q&&(a.vertexAttribDivisor(G,q),X[G]=q)}function O(){const G=c.newAttributes,q=c.enabledAttributes;for(let fe=0,ue=q.length;fe<ue;fe++)q[fe]!==G[fe]&&(a.disableVertexAttribArray(fe),q[fe]=0)}function P(G,q,fe,ue,X,z,H){H===!0?a.vertexAttribIPointer(G,q,fe,X,z):a.vertexAttribPointer(G,q,fe,ue,X,z)}function A(G,q,fe,ue){C();const X=ue.attributes,z=fe.getAttributes(),H=q.defaultAttributeValues;for(const $ in z){const me=z[$];if(me.location>=0){let ye=X[$];if(ye===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(ye=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(ye=G.instanceColor)),ye!==void 0){const I=ye.normalized,K=ye.itemSize,Se=e.get(ye);if(Se===void 0)continue;const Ne=Se.buffer,we=Se.type,ne=Se.bytesPerElement,be=we===a.INT||we===a.UNSIGNED_INT||ye.gpuType===em;if(ye.isInterleavedBufferAttribute){const ve=ye.data,Ie=ve.stride,nt=ye.offset;if(ve.isInstancedInterleavedBuffer){for(let Xe=0;Xe<me.locationSize;Xe++)S(me.location+Xe,ve.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Xe=0;Xe<me.locationSize;Xe++)y(me.location+Xe);a.bindBuffer(a.ARRAY_BUFFER,Ne);for(let Xe=0;Xe<me.locationSize;Xe++)P(me.location+Xe,K/me.locationSize,we,I,Ie*ne,(nt+K/me.locationSize*Xe)*ne,be)}else{if(ye.isInstancedBufferAttribute){for(let ve=0;ve<me.locationSize;ve++)S(me.location+ve,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ve=0;ve<me.locationSize;ve++)y(me.location+ve);a.bindBuffer(a.ARRAY_BUFFER,Ne);for(let ve=0;ve<me.locationSize;ve++)P(me.location+ve,K/me.locationSize,we,I,K*ne,K/me.locationSize*ve*ne,be)}}else if(H!==void 0){const I=H[$];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(me.location,I);break;case 3:a.vertexAttrib3fv(me.location,I);break;case 4:a.vertexAttrib4fv(me.location,I);break;default:a.vertexAttrib1fv(me.location,I)}}}}O()}function L(){U();for(const G in r){const q=r[G];for(const fe in q){const ue=q[fe];for(const X in ue){const z=ue[X];for(const H in z)g(z[H].object),delete z[H];delete ue[X]}}delete r[G]}}function N(G){if(r[G.id]===void 0)return;const q=r[G.id];for(const fe in q){const ue=q[fe];for(const X in ue){const z=ue[X];for(const H in z)g(z[H].object),delete z[H];delete ue[X]}}delete r[G.id]}function F(G){for(const q in r){const fe=r[q];for(const ue in fe){const X=fe[ue];if(X[G.id]===void 0)continue;const z=X[G.id];for(const H in z)g(z[H].object),delete z[H];delete X[G.id]}}}function T(G){for(const q in r){const fe=r[q],ue=G.isInstancedMesh===!0?G.id:0,X=fe[ue];if(X!==void 0){for(const z in X){const H=X[z];for(const $ in H)g(H[$].object),delete H[$];delete X[z]}delete fe[ue],Object.keys(fe).length===0&&delete r[q]}}}function U(){k(),u=!0,c!==o&&(c=o,h(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:O}}function fA(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function dA(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==ha&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Zi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ca&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ct("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:A,maxSamples:L,samples:N}}function hA(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Tr,d=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,S=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):h();else{const O=c?0:r,P=O*4;let A=S.clippingState||null;m.value=A,A=g(E,v,P,x);for(let L=0;L!==P;++L)A[L]=i[L];S.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,E){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const S=x+C*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,A=x;P!==C;++P,A+=4)u.copy(_[P]).applyMatrix4(O,d),u.normal.toArray(y,A),y[A+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Js=4,Gv=[.125,.215,.35,.446,.526,.582],Rr=20,pA=256,Vl=new gS,Vv=new jt;let Wh=null,Yh=0,qh=0,jh=!1;const mA=new te;class kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=mA}=c;Wh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Yh,qh),this._renderer.xr.enabled=jh,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:cs,format:ha,colorSpace:qu,depthBuffer:!1},o=Xv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gA(c)),this._blurMaterial=vA(c,e,i),this._ggxMaterial=_A(c,e,i)}return o}_compileMaterial(e){const i=new Li(new Qi,e);this._renderer.compile(i,Vl)}_sceneToCubeUV(e,i,r,o,c){const m=new ji(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Vv),_.toneMapping=Da,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new sc,new Qu({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,S=!0):(y.color.copy(Vv),S=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):A===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const L=this._cubeSize;Uo(o,A*L,P>2?L:0,L,L),_.setRenderTarget(o),S&&_.render(C,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===wr||e.mapping===Vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Uo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Vl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,x=_*v,{_lodMax:E}=this,C=this._sizeLods[r],y=3*C*(r>E-Js?r-E+Js:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=E-i,Uo(c,y,S,3*C,2*C),o.setRenderTarget(c),o.render(d,Vl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Uo(e,y,S,3*C,2*C),o.setRenderTarget(e),o.render(d,Vl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Rr-1),C=c/E,y=isFinite(c)?1+Math.floor(g*C):Rr;y>Rr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const S=[];let O=0;for(let F=0;F<Rr;++F){const T=F/C,U=Math.exp(-T*T/2);S.push(U),F===0?O+=U:F<y&&(O+=2*U)}for(let F=0;F<S.length;F++)S[F]=S[F]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-r;const A=this._sizeLods[o],L=3*A*(o>P-Js?o-P+Js:0),N=4*(this._cubeSize-A);Uo(i,L,N,3*A,2*A),m.setRenderTarget(i),m.render(_,Vl)}}function gA(a){const e=[],i=[],r=[];let o=a;const c=a-Js+1+Gv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-Js?m=Gv[u-a+Js-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,C=3,y=2,S=1,O=new Float32Array(C*E*x),P=new Float32Array(y*E*x),A=new Float32Array(S*E*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,T=N>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];O.set(U,C*E*N),P.set(v,y*E*N);const k=[N,N,N,N,N,N];A.set(k,S*E*N)}const L=new Qi;L.setAttribute("position",new Na(O,C)),L.setAttribute("uv",new Na(P,y)),L.setAttribute("faceIndex",new Na(A,S)),r.push(new Li(L,null)),o>Js&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Xv(a,e,i){const r=new La(a,e,i);return r.texture.mapping=nf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Uo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function _A(a,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sf(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function vA(a,e,i){const r=new Float32Array(Rr),o=new te(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sf(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Wv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Yv(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function sf(){return`

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
	`}class xS extends La{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new dS(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sc(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xi,blending:rs});c.uniforms.tEquirect.value=i;const u=new Li(o,c),d=i.minFilter;return i.minFilter===Ks&&(i.minFilter=yn),new bb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function xA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===_h||x===vh)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const C=new xS(E.height);return C.fromEquirectangularTexture(a,v),e.set(v,C),v.addEventListener("dispose",h),d(C.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===_h||x===vh,C=x===wr||x===Vo;if(E||C){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new kv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const O=v.image;return E&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new kv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,x){return x===_h?v.mapping=wr:x===vh&&(v.mapping=Vo),v}function m(v){let x=0;const E=6;for(let C=0;C<E;C++)v[C]!==void 0&&x++;return x===E}function h(v){const x=v.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function SA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Bo("WebGLRenderer: "+r+" extension not supported."),o}}}function MA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(x!==null){const O=x.array;C=x.version;for(let P=0,A=O.length;P<A;P+=3){const L=O[P+0],N=O[P+1],F=O[P+2];v.push(L,N,N,F,F,L)}}else{const O=E.array;C=E.version;for(let P=0,A=O.length/3-1;P<A;P+=3){const L=P+0,N=P+1,F=P+2;v.push(L,N,N,F,F,L)}}const y=new(E.count>=65535?uS:cS)(v,1);y.version=C;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function yA(a,e,i){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function h(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let C=0;for(let y=0;y<x;y++)C+=v[y];i.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function EA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Gt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function bA(a,e,i){const r=new WeakMap,o=new Mn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let k=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var x=k;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let A=0;E===!0&&(A=1),C===!0&&(A=2),y===!0&&(A=3);let L=d.attributes.position.count*A,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*N*4*_),T=new rS(F,L,N,_);T.type=Ca,T.needsUpdate=!0;const U=A*4;for(let G=0;G<_;G++){const q=S[G],fe=O[G],ue=P[G],X=L*N*4*G;for(let z=0;z<q.count;z++){const H=z*U;E===!0&&(o.fromBufferAttribute(q,z),F[X+H+0]=o.x,F[X+H+1]=o.y,F[X+H+2]=o.z,F[X+H+3]=0),C===!0&&(o.fromBufferAttribute(fe,z),F[X+H+4]=o.x,F[X+H+5]=o.y,F[X+H+6]=o.z,F[X+H+7]=0),y===!0&&(o.fromBufferAttribute(ue,z),F[X+H+8]=o.x,F[X+H+9]=o.y,F[X+H+10]=o.z,F[X+H+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Xt(L,N)},r.set(d,v),d.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function TA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,_=h.geometry,v=e.get(h,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const AA={[Xx]:"LINEAR_TONE_MAPPING",[Wx]:"REINHARD_TONE_MAPPING",[Yx]:"CINEON_TONE_MAPPING",[qx]:"ACES_FILMIC_TONE_MAPPING",[Zx]:"AGX_TONE_MAPPING",[Kx]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function RA(a,e,i,r,o,c){const u=new La(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new ko(e,i):void 0}),d=new La(e,i,{type:cs,depthBuffer:!1,stencilBuffer:!1}),m=new Qi;m.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const h=new Mb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Li(m,h),_=new gS(-1,1,1,-1,0,1);let v=null,x=null,E=!1,C,y=null,S=[],O=!1;this.setSize=function(P,A){u.setSize(P,A),d.setSize(P,A);for(let L=0;L<S.length;L++){const N=S[L];N.setSize&&N.setSize(P,A)}},this.setEffects=function(P){S=P,O=S.length>0&&S[0].isRenderPass===!0;const A=u.width,L=u.height;for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(A,L)}},this.begin=function(P,A){if(E||P.toneMapping===Da&&S.length===0)return!1;if(y=A,A!==null){const L=A.width,N=A.height;(u.width!==L||u.height!==N)&&this.setSize(L,N)}return O===!1&&P.setRenderTarget(u),C=P.toneMapping,P.toneMapping=Da,!0},this.hasRenderPass=function(){return O},this.end=function(P,A){P.toneMapping=C,E=!0;let L=u,N=d;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(P,N,L,A),T.needsSwap!==!1)){const U=L;L=N,N=U}}if(v!==P.outputColorSpace||x!==P.toneMapping){v=P.outputColorSpace,x=P.toneMapping,h.defines={},Pt.getTransfer(v)===Jt&&(h.defines.SRGB_TRANSFER="");const F=AA[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(y),P.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const SS=new ii,jp=new ko(1,1),MS=new rS,yS=new ZE,ES=new dS,qv=[],jv=[],Zv=new Float32Array(16),Kv=new Float32Array(9),Qv=new Float32Array(4);function jo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=qv[o];if(c===void 0&&(c=new Float32Array(o),qv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function Fn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function zn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function rf(a,e){let i=jv[e];i===void 0&&(i=new Int32Array(e),jv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function CA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function wA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2fv(this.addr,e),zn(i,e)}}function DA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Fn(i,e))return;a.uniform3fv(this.addr,e),zn(i,e)}}function LA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4fv(this.addr,e),zn(i,e)}}function NA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Fn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,r))return;Qv.set(r),a.uniformMatrix2fv(this.addr,!1,Qv),zn(i,r)}}function UA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Fn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,r))return;Kv.set(r),a.uniformMatrix3fv(this.addr,!1,Kv),zn(i,r)}}function OA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Fn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,r))return;Zv.set(r),a.uniformMatrix4fv(this.addr,!1,Zv),zn(i,r)}}function PA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function IA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2iv(this.addr,e),zn(i,e)}}function BA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3iv(this.addr,e),zn(i,e)}}function FA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4iv(this.addr,e),zn(i,e)}}function zA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function HA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2uiv(this.addr,e),zn(i,e)}}function GA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3uiv(this.addr,e),zn(i,e)}}function VA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4uiv(this.addr,e),zn(i,e)}}function kA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(jp.compareFunction=i.isReversedDepthBuffer()?om:rm,c=jp):c=SS,i.setTexture2D(e||c,o)}function XA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||yS,o)}function WA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||ES,o)}function YA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||MS,o)}function qA(a){switch(a){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return LA;case 35674:return NA;case 35675:return UA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return IA;case 35668:case 35672:return BA;case 35669:case 35673:return FA;case 5125:return zA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return YA}}function jA(a,e){a.uniform1fv(this.addr,e)}function ZA(a,e){const i=jo(e,this.size,2);a.uniform2fv(this.addr,i)}function KA(a,e){const i=jo(e,this.size,3);a.uniform3fv(this.addr,i)}function QA(a,e){const i=jo(e,this.size,4);a.uniform4fv(this.addr,i)}function JA(a,e){const i=jo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function $A(a,e){const i=jo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function e2(a,e){const i=jo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function t2(a,e){a.uniform1iv(this.addr,e)}function n2(a,e){a.uniform2iv(this.addr,e)}function i2(a,e){a.uniform3iv(this.addr,e)}function a2(a,e){a.uniform4iv(this.addr,e)}function s2(a,e){a.uniform1uiv(this.addr,e)}function r2(a,e){a.uniform2uiv(this.addr,e)}function o2(a,e){a.uniform3uiv(this.addr,e)}function l2(a,e){a.uniform4uiv(this.addr,e)}function c2(a,e,i){const r=this.cache,o=e.length,c=rf(i,o);Fn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=jp:u=SS;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function u2(a,e,i){const r=this.cache,o=e.length,c=rf(i,o);Fn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||yS,c[u])}function f2(a,e,i){const r=this.cache,o=e.length,c=rf(i,o);Fn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||ES,c[u])}function d2(a,e,i){const r=this.cache,o=e.length,c=rf(i,o);Fn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||MS,c[u])}function h2(a){switch(a){case 5126:return jA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return a2;case 5125:return s2;case 36294:return r2;case 36295:return o2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}class p2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qA(i.type)}}class m2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h2(i.type)}}class g2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function Jv(a,e){a.seq.push(e),a.map[e.id]=e}function _2(a,e,i){const r=a.name,o=r.length;for(Zh.lastIndex=0;;){const c=Zh.exec(r),u=Zh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Jv(i,h===void 0?new p2(d,a,e):new m2(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new g2(d),Jv(i,_)),i=_}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);_2(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function $v(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const v2=37297;let x2=0;function S2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const ex=new vt;function M2(a){Pt._getMatrix(ex,Pt.workingColorSpace,a);const e=`mat3( ${ex.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(a)){case ju:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function tx(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+S2(a.getShaderSource(e),d)}else return c}function y2(a,e){const i=M2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const E2={[Xx]:"Linear",[Wx]:"Reinhard",[Yx]:"Cineon",[qx]:"ACESFilmic",[Zx]:"AgX",[Kx]:"Neutral",[jx]:"Custom"};function b2(a,e){const i=E2[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pu=new te;function T2(){Pt.getLuminanceCoefficients(Pu);const a=Pu.x.toFixed(4),e=Pu.y.toFixed(4),i=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yl).join(`
`)}function R2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function C2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function Yl(a){return a!==""}function nx(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ix(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(a){return a.replace(w2,L2)}const D2=new Map;function L2(a,e){let i=bt[e];if(i===void 0){const r=D2.get(e);if(r!==void 0)i=bt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zp(i)}const N2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(a){return a.replace(N2,U2)}function U2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function sx(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const O2={[zu]:"SHADOWMAP_TYPE_PCF",[Xl]:"SHADOWMAP_TYPE_VSM"};function P2(a){return O2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const I2={[wr]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[nf]:"ENVMAP_TYPE_CUBE_UV"};function B2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":I2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const F2={[Vo]:"ENVMAP_MODE_REFRACTION"};function z2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H2={[kx]:"ENVMAP_BLENDING_MULTIPLY",[hE]:"ENVMAP_BLENDING_MIX",[pE]:"ENVMAP_BLENDING_ADD"};function G2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":H2[a.combine]||"ENVMAP_BLENDING_NONE"}function V2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=P2(i),h=B2(i),g=z2(i),_=G2(i),v=V2(i),x=A2(i),E=R2(c),C=o.createProgram();let y,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yl).join(`
`),S.length>0&&(S+=`
`)):(y=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yl).join(`
`),S=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Da?"#define TONE_MAPPING":"",i.toneMapping!==Da?bt.tonemapping_pars_fragment:"",i.toneMapping!==Da?b2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,y2("linearToOutputTexel",i.outputColorSpace),T2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yl).join(`
`)),u=Zp(u),u=nx(u,i),u=ix(u,i),d=Zp(d),d=nx(d,i),d=ix(d,i),u=ax(u),d=ax(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=O+y+u,A=O+S+d,L=$v(o,o.VERTEX_SHADER,P),N=$v(o,o.FRAGMENT_SHADER,A);o.attachShader(C,L),o.attachShader(C,N),i.index0AttributeName!==void 0?o.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(G){if(a.debug.checkShaderErrors){const q=o.getProgramInfoLog(C)||"",fe=o.getShaderInfoLog(L)||"",ue=o.getShaderInfoLog(N)||"",X=q.trim(),z=fe.trim(),H=ue.trim();let $=!0,me=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,L,N);else{const ye=tx(o,L,"vertex"),I=tx(o,N,"fragment");Gt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+ye+`
`+I)}else X!==""?ct("WebGLProgram: Program Info Log:",X):(z===""||H==="")&&(me=!1);me&&(G.diagnostics={runnable:$,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:S}})}o.deleteShader(L),o.deleteShader(N),T=new Xu(o,C),U=C2(o,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(C,v2)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=N,this}let X2=0;class W2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Y2(e),i.set(e,r)),r}}class Y2{constructor(e){this.id=X2++,this.code=e,this.usedTimes=0}}function q2(a){return a===Dr||a===Wu||a===Yu}function j2(a,e,i,r,o,c){const u=new oS,d=new W2,m=new Set,h=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,U,k,G,q,fe){const ue=G.fog,X=q.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||z,H),me=$&&$.mapping===nf?$.image.height:null,ye=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=I!==void 0?I.length:0;let Se=0;X.morphAttributes.position!==void 0&&(Se=1),X.morphAttributes.normal!==void 0&&(Se=2),X.morphAttributes.color!==void 0&&(Se=3);let Ne,we,ne,be;if(ye){const qe=Aa[ye];Ne=qe.vertexShader,we=qe.fragmentShader}else{Ne=T.vertexShader,we=T.fragmentShader;const qe=d.getVertexShaderStage(T),Dt=d.getFragmentShaderStage(T);d.update(T,qe,Dt),ne=qe.id,be=Dt.id}const ve=a.getRenderTarget(),Ie=a.state.buffers.depth.getReversed(),nt=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,yt=!!T.map,ut=!!T.matcap,dt=!!$,ht=!!T.aoMap,pt=!!T.lightMap,Ft=!!T.bumpMap&&T.wireframe===!1,ln=!!T.normalMap,Zt=!!T.displacementMap,gn=!!T.emissiveMap,Yt=!!T.metalnessMap,dn=!!T.roughnessMap,j=T.anisotropy>0,qt=T.clearcoat>0,It=T.dispersion>0,B=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,ee=j&&!!T.anisotropyMap,de=qt&&!!T.clearcoatMap,De=qt&&!!T.clearcoatNormalMap,Fe=qt&&!!T.clearcoatRoughnessMap,pe=B&&!!T.iridescenceMap,ge=B&&!!T.iridescenceThicknessMap,Oe=b&&!!T.sheenColorMap,Ye=b&&!!T.sheenRoughnessMap,He=!!T.specularMap,Be=!!T.specularColorMap,it=!!T.specularIntensityMap,Qe=J&&!!T.transmissionMap,lt=J&&!!T.thicknessMap,Y=!!T.gradientMap,Ue=!!T.alphaMap,_e=T.alphaTest>0,Pe=!!T.alphaHash,Ce=!!T.extensions;let Te=Da;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Te=a.toneMapping);const je={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:Ne,fragmentShader:we,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:nt,instancingColor:nt&&q.instanceColor!==null,instancingMorph:nt&&q.morphTexture!==null,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:ut,envMap:dt,envMapMode:dt&&$.mapping,envMapCubeUVHeight:me,aoMap:ht,lightMap:pt,bumpMap:Ft,normalMap:ln,displacementMap:Zt,emissiveMap:gn,normalMapObjectSpace:ln&&T.normalMapType===_E,normalMapTangentSpace:ln&&T.normalMapType===hv,packedNormalMap:ln&&T.normalMapType===hv&&q2(T.normalMap.format),metalnessMap:Yt,roughnessMap:dn,anisotropy:j,anisotropyMap:ee,clearcoat:qt,clearcoatMap:de,clearcoatNormalMap:De,clearcoatRoughnessMap:Fe,dispersion:It,iridescence:B,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:b,sheenColorMap:Oe,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:Be,specularIntensityMap:it,transmission:J,transmissionMap:Qe,thicknessMap:lt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Io&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:_e,alphaHash:Pe,combine:T.combine,mapUv:yt&&E(T.map.channel),aoMapUv:ht&&E(T.aoMap.channel),lightMapUv:pt&&E(T.lightMap.channel),bumpMapUv:Ft&&E(T.bumpMap.channel),normalMapUv:ln&&E(T.normalMap.channel),displacementMapUv:Zt&&E(T.displacementMap.channel),emissiveMapUv:gn&&E(T.emissiveMap.channel),metalnessMapUv:Yt&&E(T.metalnessMap.channel),roughnessMapUv:dn&&E(T.roughnessMap.channel),anisotropyMapUv:ee&&E(T.anisotropyMap.channel),clearcoatMapUv:de&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(T.sheenRoughnessMap.channel),specularMapUv:He&&E(T.specularMap.channel),specularColorMapUv:Be&&E(T.specularColorMap.channel),specularIntensityMapUv:it&&E(T.specularIntensityMap.channel),transmissionMapUv:Qe&&E(T.transmissionMap.channel),thicknessMapUv:lt&&E(T.thicknessMap.channel),alphaMapUv:Ue&&E(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ln||j),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(yt||Ue),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&ln===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Te,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===Jt,decodeVideoTextureEmissive:gn&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===Jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ra,flipSided:T.side===xi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ce&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&T.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)U.push(k),U.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(U,T),O(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function O(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function P(T){const U=x[T.type];let k;if(U){const G=Aa[U];k=vb.clone(G.uniforms)}else k=T.uniforms;return k}function A(T,U){let k=g.get(U);return k!==void 0?++k.usedTimes:(k=new k2(a,U,T,o),h.push(k),g.set(U,k)),k}function L(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:P,acquireProgram:A,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:F}}function Z2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function K2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function rx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ox(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,E,C,y,S){let O=a[e];return O===void 0?(O={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:S},a[e]=O):(O.id=v.id,O.object=v,O.geometry=x,O.material=E,O.materialVariant=u(v),O.groupOrder=C,O.renderOrder=v.renderOrder,O.z=y,O.group=S),e++,O}function m(v,x,E,C,y,S){const O=d(v,x,E,C,y,S);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):i.push(O)}function h(v,x,E,C,y,S){const O=d(v,x,E,C,y,S);E.transmission>0?r.unshift(O):E.transparent===!0?o.unshift(O):i.unshift(O)}function g(v,x,E){i.length>1&&i.sort(v||K2),r.length>1&&r.sort(x||rx),o.length>1&&o.sort(x||rx),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:_,sort:g}}function Q2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new ox,a.set(r,[u])):o>=c.length?(u=new ox,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function J2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new jt};break;case"SpotLight":i={position:new te,direction:new te,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new jt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":i={color:new jt,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=i,i}}}function $2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let eR=0;function tR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function nR(a){const e=new J2,i=$2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new Tn,u=new Tn;function d(h){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,E=0,C=0,y=0,S=0,O=0,P=0,A=0,L=0,N=0,F=0;h.sort(tR);for(let U=0,k=h.length;U<k;U++){const G=h[U],q=G.color,fe=G.intensity,ue=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Dr?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=q.r*fe,_+=q.g*fe,v+=q.b*fe;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],fe);F++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=G.shadow.matrix,O++}r.directional[x]=z,x++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(q).multiplyScalar(fe),z.distance=ue,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[C]=z;const H=G.shadow;if(G.map&&(r.spotLightMap[L]=G.map,L++,H.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[C]=H.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=X,A++}C++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(q).multiplyScalar(fe),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=X,r.pointShadowMatrix[E]=G.shadow.matrix,P++}r.point[E]=z,E++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(fe),z.groundColor.copy(G.groundColor).multiplyScalar(fe),r.hemi[S]=z,S++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==O||T.numPointShadows!==P||T.numSpotShadows!==A||T.numSpotMaps!==L||T.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=C,r.rectArea.length=y,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,T.directionalLength=x,T.pointLength=E,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=O,T.numPointShadows=P,T.numSpotShadows=A,T.numSpotMaps=L,T.numLightProbes=F,r.version=eR++)}function m(h,g){let _=0,v=0,x=0,E=0,C=0;const y=g.matrixWorldInverse;for(let S=0,O=h.length;S<O;S++){const P=h[S];if(P.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),_++}else if(P.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),x++}else if(P.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),u.identity(),c.copy(P.matrixWorld),c.premultiply(y),u.extractRotation(c),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function lx(a){const e=new nR(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function m(v){o.push(v)}function h(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function iR(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new lx(a),e.set(o,[d])):c>=u.length?(d=new lx(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const aR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
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
}`,rR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],oR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],cx=new Tn,kl=new te,Kh=new te;function lR(a,e,i){let r=new fS;const o=new Xt,c=new Xt,u=new Mn,d=new yb,m=new Eb,h={},g=i.maxTextureSize,_={[ls]:xi,[xi]:ls,[Ra]:Ra},v=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:aR,fragmentShader:sR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Qi;E.setAttribute("position",new Na(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Li(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let S=this.type;this.render=function(N,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===jy&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zu);const U=a.getRenderTarget(),k=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),q=a.state;q.setBlending(rs),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const fe=S!==this.type;fe&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(X=>X.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,X=N.length;ue<X;ue++){const z=N[ue],H=z.shadow;if(H===void 0){ct("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||fe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xl){if(z.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new La(o.x,o.y,{format:Dr,type:cs,minFilter:yn,magFilter:yn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new ko(o.x,o.y,Ca),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=us,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Qn,H.map.depthTexture.magFilter=Qn}else z.isPointLight?(H.map=new xS(o.x),H.map.depthTexture=new pb(o.x,Ua)):(H.map=new La(o.x,o.y),H.map.depthTexture=new ko(o.x,o.y,Ua)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=us,this.type===zu?(H.map.depthTexture.compareFunction=me?om:rm,H.map.depthTexture.minFilter=yn,H.map.depthTexture.magFilter=yn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Qn,H.map.depthTexture.magFilter=Qn);H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ye;I++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,I),a.clear();else{I===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(I);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),q.viewport(u)}if(z.isPointLight){const K=H.camera,Se=H.matrix,Ne=z.distance||K.far;Ne!==K.far&&(K.far=Ne,K.updateProjectionMatrix()),kl.setFromMatrixPosition(z.matrixWorld),K.position.copy(kl),Kh.copy(K.position),Kh.add(rR[I]),K.up.copy(oR[I]),K.lookAt(Kh),K.updateMatrixWorld(),Se.makeTranslation(-kl.x,-kl.y,-kl.z),cx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(cx,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),A(F,T,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Xl&&O(H,T),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,a.setRenderTarget(U,k,G)};function O(N,F){const T=e.update(C);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new La(o.x,o.y,{format:Dr,type:cs})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(F,null,T,v,C,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(F,null,T,x,C,null)}function P(N,F,T,U){let k=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?m:d,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=k.uuid,fe=F.uuid;let ue=h[q];ue===void 0&&(ue={},h[q]=ue);let X=ue[fe];X===void 0&&(X=k.clone(),ue[fe]=X,F.addEventListener("dispose",L)),k=X}if(k.visible=F.visible,k.wireframe=F.wireframe,U===Xl?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:_[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=a.properties.get(k);q.light=T}return k}function A(N,F,T,U,k){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===Xl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const fe=e.update(N),ue=N.material;if(Array.isArray(ue)){const X=fe.groups;for(let z=0,H=X.length;z<H;z++){const $=X[z],me=ue[$.materialIndex];if(me&&me.visible){const ye=P(N,me,U,k);N.onBeforeShadow(a,N,F,T,fe,ye,$),a.renderBufferDirect(T,null,fe,ye,N,$),N.onAfterShadow(a,N,F,T,fe,ye,$)}}}else if(ue.visible){const X=P(N,ue,U,k);N.onBeforeShadow(a,N,F,T,fe,X,null),a.renderBufferDirect(T,null,fe,X,N,null),N.onAfterShadow(a,N,F,T,fe,X,null)}}const q=N.children;for(let fe=0,ue=q.length;fe<ue;fe++)A(q[fe],F,T,U,k)}function L(N){N.target.removeEventListener("dispose",L);for(const T in h){const U=h[T],k=N.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function cR(a,e){function i(){let Y=!1;const Ue=new Mn;let _e=null;const Pe=new Mn(0,0,0,0);return{setMask:function(Ce){_e!==Ce&&!Y&&(a.colorMask(Ce,Ce,Ce,Ce),_e=Ce)},setLocked:function(Ce){Y=Ce},setClear:function(Ce,Te,je,qe,Dt){Dt===!0&&(Ce*=qe,Te*=qe,je*=qe),Ue.set(Ce,Te,je,qe),Pe.equals(Ue)===!1&&(a.clearColor(Ce,Te,je,qe),Pe.copy(Ue))},reset:function(){Y=!1,_e=null,Pe.set(-1,0,0,0)}}}function r(){let Y=!1,Ue=!1,_e=null,Pe=null,Ce=null;return{setReversed:function(Te){if(Ue!==Te){const je=e.get("EXT_clip_control");Te?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ue=Te;const qe=Ce;Ce=null,this.setClear(qe)}},getReversed:function(){return Ue},setTest:function(Te){Te?ve(a.DEPTH_TEST):Ie(a.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!Y&&(a.depthMask(Te),_e=Te)},setFunc:function(Te){if(Ue&&(Te=RE[Te]),Pe!==Te){switch(Te){case cp:a.depthFunc(a.NEVER);break;case up:a.depthFunc(a.ALWAYS);break;case fp:a.depthFunc(a.LESS);break;case Go:a.depthFunc(a.LEQUAL);break;case dp:a.depthFunc(a.EQUAL);break;case hp:a.depthFunc(a.GEQUAL);break;case pp:a.depthFunc(a.GREATER);break;case mp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Pe=Te}},setLocked:function(Te){Y=Te},setClear:function(Te){Ce!==Te&&(Ce=Te,Ue&&(Te=1-Te),a.clearDepth(Te))},reset:function(){Y=!1,_e=null,Pe=null,Ce=null,Ue=!1}}}function o(){let Y=!1,Ue=null,_e=null,Pe=null,Ce=null,Te=null,je=null,qe=null,Dt=null;return{setTest:function(Tt){Y||(Tt?ve(a.STENCIL_TEST):Ie(a.STENCIL_TEST))},setMask:function(Tt){Ue!==Tt&&!Y&&(a.stencilMask(Tt),Ue=Tt)},setFunc:function(Tt,An,Hn){(_e!==Tt||Pe!==An||Ce!==Hn)&&(a.stencilFunc(Tt,An,Hn),_e=Tt,Pe=An,Ce=Hn)},setOp:function(Tt,An,Hn){(Te!==Tt||je!==An||qe!==Hn)&&(a.stencilOp(Tt,An,Hn),Te=Tt,je=An,qe=Hn)},setLocked:function(Tt){Y=Tt},setClear:function(Tt){Dt!==Tt&&(a.clearStencil(Tt),Dt=Tt)},reset:function(){Y=!1,Ue=null,_e=null,Pe=null,Ce=null,Te=null,je=null,qe=null,Dt=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},_={},v={},x=new WeakMap,E=[],C=null,y=!1,S=null,O=null,P=null,A=null,L=null,N=null,F=null,T=new jt(0,0,0),U=0,k=!1,G=null,q=null,fe=null,ue=null,X=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=$>=1):me.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=$>=2);let ye=null,I={};const K=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),Ne=new Mn().fromArray(K),we=new Mn().fromArray(Se);function ne(Y,Ue,_e,Pe){const Ce=new Uint8Array(4),Te=a.createTexture();a.bindTexture(Y,Te),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let je=0;je<_e;je++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Ue,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,Ce):a.texImage2D(Ue+je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ce);return Te}const be={};be[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(a.DEPTH_TEST),u.setFunc(Go),Ft(!1),ln(uv),ve(a.CULL_FACE),ht(rs);function ve(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function Ie(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function nt(Y,Ue){return v[Y]!==Ue?(a.bindFramebuffer(Y,Ue),v[Y]=Ue,Y===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ue),Y===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Xe(Y,Ue){let _e=E,Pe=!1;if(Y){_e=x.get(Ue),_e===void 0&&(_e=[],x.set(Ue,_e));const Ce=Y.textures;if(_e.length!==Ce.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let Te=0,je=Ce.length;Te<je;Te++)_e[Te]=a.COLOR_ATTACHMENT0+Te;_e.length=Ce.length,Pe=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Pe=!0);Pe&&a.drawBuffers(_e)}function yt(Y){return C!==Y?(a.useProgram(Y),C=Y,!0):!1}const ut={[Ar]:a.FUNC_ADD,[Ky]:a.FUNC_SUBTRACT,[Qy]:a.FUNC_REVERSE_SUBTRACT};ut[Jy]=a.MIN,ut[$y]=a.MAX;const dt={[eE]:a.ZERO,[tE]:a.ONE,[nE]:a.SRC_COLOR,[op]:a.SRC_ALPHA,[lE]:a.SRC_ALPHA_SATURATE,[rE]:a.DST_COLOR,[aE]:a.DST_ALPHA,[iE]:a.ONE_MINUS_SRC_COLOR,[lp]:a.ONE_MINUS_SRC_ALPHA,[oE]:a.ONE_MINUS_DST_COLOR,[sE]:a.ONE_MINUS_DST_ALPHA,[cE]:a.CONSTANT_COLOR,[uE]:a.ONE_MINUS_CONSTANT_COLOR,[fE]:a.CONSTANT_ALPHA,[dE]:a.ONE_MINUS_CONSTANT_ALPHA};function ht(Y,Ue,_e,Pe,Ce,Te,je,qe,Dt,Tt){if(Y===rs){y===!0&&(Ie(a.BLEND),y=!1);return}if(y===!1&&(ve(a.BLEND),y=!0),Y!==Zy){if(Y!==S||Tt!==k){if((O!==Ar||L!==Ar)&&(a.blendEquation(a.FUNC_ADD),O=Ar,L=Ar),Tt)switch(Y){case Io:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case rp:a.blendFunc(a.ONE,a.ONE);break;case fv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case dv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Gt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Io:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case rp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case fv:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dv:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",Y);break}P=null,A=null,N=null,F=null,T.set(0,0,0),U=0,S=Y,k=Tt}return}Ce=Ce||Ue,Te=Te||_e,je=je||Pe,(Ue!==O||Ce!==L)&&(a.blendEquationSeparate(ut[Ue],ut[Ce]),O=Ue,L=Ce),(_e!==P||Pe!==A||Te!==N||je!==F)&&(a.blendFuncSeparate(dt[_e],dt[Pe],dt[Te],dt[je]),P=_e,A=Pe,N=Te,F=je),(qe.equals(T)===!1||Dt!==U)&&(a.blendColor(qe.r,qe.g,qe.b,Dt),T.copy(qe),U=Dt),S=Y,k=!1}function pt(Y,Ue){Y.side===Ra?Ie(a.CULL_FACE):ve(a.CULL_FACE);let _e=Y.side===xi;Ue&&(_e=!_e),Ft(_e),Y.blending===Io&&Y.transparent===!1?ht(rs):ht(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Pe=Y.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),gn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):Ie(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(Y){G!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),G=Y)}function ln(Y){Y!==Yy?(ve(a.CULL_FACE),Y!==q&&(Y===uv?a.cullFace(a.BACK):Y===qy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ie(a.CULL_FACE),q=Y}function Zt(Y){Y!==fe&&(H&&a.lineWidth(Y),fe=Y)}function gn(Y,Ue,_e){Y?(ve(a.POLYGON_OFFSET_FILL),(ue!==Ue||X!==_e)&&(ue=Ue,X=_e,u.getReversed()&&(Ue=-Ue),a.polygonOffset(Ue,_e))):Ie(a.POLYGON_OFFSET_FILL)}function Yt(Y){Y?ve(a.SCISSOR_TEST):Ie(a.SCISSOR_TEST)}function dn(Y){Y===void 0&&(Y=a.TEXTURE0+z-1),ye!==Y&&(a.activeTexture(Y),ye=Y)}function j(Y,Ue,_e){_e===void 0&&(ye===null?_e=a.TEXTURE0+z-1:_e=ye);let Pe=I[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},I[_e]=Pe),(Pe.type!==Y||Pe.texture!==Ue)&&(ye!==_e&&(a.activeTexture(_e),ye=_e),a.bindTexture(Y,Ue||be[Y]),Pe.type=Y,Pe.texture=Ue)}function qt(){const Y=I[ye];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function It(){try{a.compressedTexImage2D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function B(){try{a.compressedTexImage3D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function b(){try{a.texSubImage2D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function J(){try{a.texSubImage3D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function ee(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function de(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function De(){try{a.texStorage2D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function Fe(){try{a.texStorage3D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function pe(){try{a.texImage2D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function ge(){try{a.texImage3D(...arguments)}catch(Y){Gt("WebGLState:",Y)}}function Oe(Y){return _[Y]!==void 0?_[Y]:a.getParameter(Y)}function Ye(Y,Ue){_[Y]!==Ue&&(a.pixelStorei(Y,Ue),_[Y]=Ue)}function He(Y){Ne.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Ne.copy(Y))}function Be(Y){we.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function it(Y,Ue){let _e=h.get(Ue);_e===void 0&&(_e=new WeakMap,h.set(Ue,_e));let Pe=_e.get(Y);Pe===void 0&&(Pe=a.getUniformBlockIndex(Ue,Y.name),_e.set(Y,Pe))}function Qe(Y,Ue){const Pe=h.get(Ue).get(Y);m.get(Ue)!==Pe&&(a.uniformBlockBinding(Ue,Pe,Y.__bindingPointIndex),m.set(Ue,Pe))}function lt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},ye=null,I={},v={},x=new WeakMap,E=[],C=null,y=!1,S=null,O=null,P=null,A=null,L=null,N=null,F=null,T=new jt(0,0,0),U=0,k=!1,G=null,q=null,fe=null,ue=null,X=null,Ne.set(0,0,a.canvas.width,a.canvas.height),we.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ve,disable:Ie,bindFramebuffer:nt,drawBuffers:Xe,useProgram:yt,setBlending:ht,setMaterial:pt,setFlipSided:Ft,setCullFace:ln,setLineWidth:Zt,setPolygonOffset:gn,setScissorTest:Yt,activeTexture:dn,bindTexture:j,unbindTexture:qt,compressedTexImage2D:It,compressedTexImage3D:B,texImage2D:pe,texImage3D:ge,pixelStorei:Ye,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:Qe,texStorage2D:De,texStorage3D:Fe,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:ee,compressedTexSubImage3D:de,scissor:He,viewport:Be,reset:lt}}function uR(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(B,b){return E?new OffscreenCanvas(B,b):Ku("canvas")}function y(B,b,J){let ee=1;const de=It(B);if((de.width>J||de.height>J)&&(ee=J/Math.max(de.width,de.height)),ee<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const De=Math.floor(ee*de.width),Fe=Math.floor(ee*de.height);v===void 0&&(v=C(De,Fe));const pe=b?C(De,Fe):v;return pe.width=De,pe.height=Fe,pe.getContext("2d").drawImage(B,0,0,De,Fe),ct("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+De+"x"+Fe+")."),pe}else return"data"in B&&ct("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),B;return B}function S(B){return B.generateMipmaps}function O(B){a.generateMipmap(B)}function P(B){return B.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?a.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(B,b,J,ee,de,De=!1){if(B!==null){if(a[B]!==void 0)return a[B];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Fe;ee&&(Fe=e.get("EXT_texture_norm16"),Fe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===a.RED&&(J===a.FLOAT&&(pe=a.R32F),J===a.HALF_FLOAT&&(pe=a.R16F),J===a.UNSIGNED_BYTE&&(pe=a.R8),J===a.UNSIGNED_SHORT&&Fe&&(pe=Fe.R16_EXT),J===a.SHORT&&Fe&&(pe=Fe.R16_SNORM_EXT)),b===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.R8UI),J===a.UNSIGNED_SHORT&&(pe=a.R16UI),J===a.UNSIGNED_INT&&(pe=a.R32UI),J===a.BYTE&&(pe=a.R8I),J===a.SHORT&&(pe=a.R16I),J===a.INT&&(pe=a.R32I)),b===a.RG&&(J===a.FLOAT&&(pe=a.RG32F),J===a.HALF_FLOAT&&(pe=a.RG16F),J===a.UNSIGNED_BYTE&&(pe=a.RG8),J===a.UNSIGNED_SHORT&&Fe&&(pe=Fe.RG16_EXT),J===a.SHORT&&Fe&&(pe=Fe.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RG8UI),J===a.UNSIGNED_SHORT&&(pe=a.RG16UI),J===a.UNSIGNED_INT&&(pe=a.RG32UI),J===a.BYTE&&(pe=a.RG8I),J===a.SHORT&&(pe=a.RG16I),J===a.INT&&(pe=a.RG32I)),b===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),J===a.UNSIGNED_INT&&(pe=a.RGB32UI),J===a.BYTE&&(pe=a.RGB8I),J===a.SHORT&&(pe=a.RGB16I),J===a.INT&&(pe=a.RGB32I)),b===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),J===a.UNSIGNED_INT&&(pe=a.RGBA32UI),J===a.BYTE&&(pe=a.RGBA8I),J===a.SHORT&&(pe=a.RGBA16I),J===a.INT&&(pe=a.RGBA32I)),b===a.RGB&&(J===a.UNSIGNED_SHORT&&Fe&&(pe=Fe.RGB16_EXT),J===a.SHORT&&Fe&&(pe=Fe.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),b===a.RGBA){const ge=De?ju:Pt.getTransfer(de);J===a.FLOAT&&(pe=a.RGBA32F),J===a.HALF_FLOAT&&(pe=a.RGBA16F),J===a.UNSIGNED_BYTE&&(pe=ge===Jt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Fe&&(pe=Fe.RGBA16_EXT),J===a.SHORT&&Fe&&(pe=Fe.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(B,b){let J;return B?b===null||b===Ua||b===ec?J=a.DEPTH24_STENCIL8:b===Ca?J=a.DEPTH32F_STENCIL8:b===$l&&(J=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ua||b===ec?J=a.DEPTH_COMPONENT24:b===Ca?J=a.DEPTH_COMPONENT32F:b===$l&&(J=a.DEPTH_COMPONENT16),J}function N(B,b){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Qn&&B.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function F(B){const b=B.target;b.removeEventListener("dispose",F),U(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(B){const b=B.target;b.removeEventListener("dispose",T),G(b)}function U(B){const b=r.get(B);if(b.__webglInit===void 0)return;const J=B.source,ee=x.get(J);if(ee){const de=ee[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&k(B),Object.keys(ee).length===0&&x.delete(J)}r.remove(B)}function k(B){const b=r.get(B);a.deleteTexture(b.__webglTexture);const J=B.source,ee=x.get(J);delete ee[b.__cacheKey],u.memory.textures--}function G(B){const b=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let de=0;de<b.__webglFramebuffer[ee].length;de++)a.deleteFramebuffer(b.__webglFramebuffer[ee][de]);else a.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)a.deleteFramebuffer(b.__webglFramebuffer[ee]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=B.textures;for(let ee=0,de=J.length;ee<de;ee++){const De=r.get(J[ee]);De.__webglTexture&&(a.deleteTexture(De.__webglTexture),u.memory.textures--),r.remove(J[ee])}r.remove(B)}let q=0;function fe(){q=0}function ue(){return q}function X(B){q=B}function z(){const B=q;return B>=o.maxTextures&&ct("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),q+=1,B}function H(B){const b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function $(B,b){const J=r.get(B);if(B.isVideoTexture&&j(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){const ee=B.image;if(ee===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(J,B,b);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+b)}function me(B,b){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Ie(J,B,b);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+b)}function ye(B,b){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Ie(J,B,b);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+b)}function I(B,b){const J=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){nt(J,B,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+b)}const K={[gp]:a.REPEAT,[da]:a.CLAMP_TO_EDGE,[_p]:a.MIRRORED_REPEAT},Se={[Qn]:a.NEAREST,[mE]:a.NEAREST_MIPMAP_NEAREST,[pu]:a.NEAREST_MIPMAP_LINEAR,[yn]:a.LINEAR,[xh]:a.LINEAR_MIPMAP_NEAREST,[Ks]:a.LINEAR_MIPMAP_LINEAR},Ne={[vE]:a.NEVER,[EE]:a.ALWAYS,[xE]:a.LESS,[rm]:a.LEQUAL,[SE]:a.EQUAL,[om]:a.GEQUAL,[ME]:a.GREATER,[yE]:a.NOTEQUAL};function we(B,b){if(b.type===Ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===xh||b.magFilter===pu||b.magFilter===Ks||b.minFilter===yn||b.minFilter===xh||b.minFilter===pu||b.minFilter===Ks)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(B,a.TEXTURE_WRAP_S,K[b.wrapS]),a.texParameteri(B,a.TEXTURE_WRAP_T,K[b.wrapT]),(B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY)&&a.texParameteri(B,a.TEXTURE_WRAP_R,K[b.wrapR]),a.texParameteri(B,a.TEXTURE_MAG_FILTER,Se[b.magFilter]),a.texParameteri(B,a.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(a.texParameteri(B,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(B,a.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qn||b.minFilter!==pu&&b.minFilter!==Ks||b.type===Ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ne(B,b){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",F));const ee=b.source;let de=x.get(ee);de===void 0&&(de={},x.set(ee,de));const De=H(b);if(De!==B.__cacheKey){de[De]===void 0&&(de[De]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),de[De].usedTimes++;const Fe=de[B.__cacheKey];Fe!==void 0&&(de[B.__cacheKey].usedTimes--,Fe.usedTimes===0&&k(b)),B.__cacheKey=De,B.__webglTexture=de[De].texture}return J}function be(B,b,J){return Math.floor(Math.floor(B/J)/b)}function ve(B,b,J,ee){const De=B.updateRanges;if(De.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,J,ee,b.data);else{De.sort((Ye,He)=>Ye.start-He.start);let Fe=0;for(let Ye=1;Ye<De.length;Ye++){const He=De[Fe],Be=De[Ye],it=He.start+He.count,Qe=be(Be.start,b.width,4),lt=be(He.start,b.width,4);Be.start<=it+1&&Qe===lt&&be(Be.start+Be.count-1,b.width,4)===Qe?He.count=Math.max(He.count,Be.start+Be.count-He.start):(++Fe,De[Fe]=Be)}De.length=Fe+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),ge=i.getParameter(a.UNPACK_SKIP_PIXELS),Oe=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Ye=0,He=De.length;Ye<He;Ye++){const Be=De[Ye],it=Math.floor(Be.start/4),Qe=Math.ceil(Be.count/4),lt=it%b.width,Y=Math.floor(it/b.width),Ue=Qe,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,lt,Y,Ue,_e,J,ee,b.data)}B.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(a.UNPACK_SKIP_ROWS,Oe)}}function Ie(B,b,J){let ee=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=a.TEXTURE_3D);const de=ne(B,b),De=b.source;i.bindTexture(ee,B.__webglTexture,a.TEXTURE0+J);const Fe=r.get(De);if(De.version!==Fe.__version||de===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=Pt.getPrimaries(Pt.workingColorSpace),Pe=b.colorSpace===Zs?null:Pt.getPrimaries(b.colorSpace),Ce=b.colorSpace===Zs||_e===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let ge=y(b.image,!1,o.maxTextureSize);ge=qt(b,ge);const Oe=c.convert(b.format,b.colorSpace),Ye=c.convert(b.type);let He=A(b.internalFormat,Oe,Ye,b.normalized,b.colorSpace,b.isVideoTexture);we(ee,b);let Be;const it=b.mipmaps,Qe=b.isVideoTexture!==!0,lt=Fe.__version===void 0||de===!0,Y=De.dataReady,Ue=N(b,ge);if(b.isDepthTexture)He=L(b.format===Cr,b.type),lt&&(Qe?i.texStorage2D(a.TEXTURE_2D,1,He,ge.width,ge.height):i.texImage2D(a.TEXTURE_2D,0,He,ge.width,ge.height,0,Oe,Ye,null));else if(b.isDataTexture)if(it.length>0){Qe&&lt&&i.texStorage2D(a.TEXTURE_2D,Ue,He,it[0].width,it[0].height);for(let _e=0,Pe=it.length;_e<Pe;_e++)Be=it[_e],Qe?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Be.width,Be.height,Oe,Ye,Be.data):i.texImage2D(a.TEXTURE_2D,_e,He,Be.width,Be.height,0,Oe,Ye,Be.data);b.generateMipmaps=!1}else Qe?(lt&&i.texStorage2D(a.TEXTURE_2D,Ue,He,ge.width,ge.height),Y&&ve(b,ge,Oe,Ye)):i.texImage2D(a.TEXTURE_2D,0,He,ge.width,ge.height,0,Oe,Ye,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&lt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,He,it[0].width,it[0].height,ge.depth);for(let _e=0,Pe=it.length;_e<Pe;_e++)if(Be=it[_e],b.format!==ha)if(Oe!==null)if(Qe){if(Y)if(b.layerUpdates.size>0){const Ce=Hv(Be.width,Be.height,b.format,b.type);for(const Te of b.layerUpdates){const je=Be.data.subarray(Te*Ce/Be.data.BYTES_PER_ELEMENT,(Te+1)*Ce/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Te,Be.width,Be.height,1,Oe,je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Be.width,Be.height,ge.depth,Oe,Be.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,He,Be.width,Be.height,ge.depth,0,Be.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?Y&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Be.width,Be.height,ge.depth,Oe,Ye,Be.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,He,Be.width,Be.height,ge.depth,0,Oe,Ye,Be.data)}else{Qe&&lt&&i.texStorage2D(a.TEXTURE_2D,Ue,He,it[0].width,it[0].height);for(let _e=0,Pe=it.length;_e<Pe;_e++)Be=it[_e],b.format!==ha?Oe!==null?Qe?Y&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Be.width,Be.height,Oe,Be.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,He,Be.width,Be.height,0,Be.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Be.width,Be.height,Oe,Ye,Be.data):i.texImage2D(a.TEXTURE_2D,_e,He,Be.width,Be.height,0,Oe,Ye,Be.data)}else if(b.isDataArrayTexture)if(Qe){if(lt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,He,ge.width,ge.height,ge.depth),Y)if(b.layerUpdates.size>0){const _e=Hv(ge.width,ge.height,b.format,b.type);for(const Pe of b.layerUpdates){const Ce=ge.data.subarray(Pe*_e/ge.data.BYTES_PER_ELEMENT,(Pe+1)*_e/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,Oe,Ye,Ce)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Oe,Ye,ge.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,He,ge.width,ge.height,ge.depth,0,Oe,Ye,ge.data);else if(b.isData3DTexture)Qe?(lt&&i.texStorage3D(a.TEXTURE_3D,Ue,He,ge.width,ge.height,ge.depth),Y&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Oe,Ye,ge.data)):i.texImage3D(a.TEXTURE_3D,0,He,ge.width,ge.height,ge.depth,0,Oe,Ye,ge.data);else if(b.isFramebufferTexture){if(lt)if(Qe)i.texStorage2D(a.TEXTURE_2D,Ue,He,ge.width,ge.height);else{let _e=ge.width,Pe=ge.height;for(let Ce=0;Ce<Ue;Ce++)i.texImage2D(a.TEXTURE_2D,Ce,He,_e,Pe,0,Oe,Ye,null),_e>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),_.add(b),_e.onpaint=Pe=>{const Ce=Pe.changedElements;for(const Te of _)Ce.includes(Te.image)&&(Te.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ge);else{const Ce=a.RGBA,Te=a.RGBA,je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ce,Te,je,ge)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(it.length>0){if(Qe&&lt){const _e=It(it[0]);i.texStorage2D(a.TEXTURE_2D,Ue,He,_e.width,_e.height)}for(let _e=0,Pe=it.length;_e<Pe;_e++)Be=it[_e],Qe?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Oe,Ye,Be):i.texImage2D(a.TEXTURE_2D,_e,He,Oe,Ye,Be);b.generateMipmaps=!1}else if(Qe){if(lt){const _e=It(ge);i.texStorage2D(a.TEXTURE_2D,Ue,He,_e.width,_e.height)}Y&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Oe,Ye,ge)}else i.texImage2D(a.TEXTURE_2D,0,He,Oe,Ye,ge);S(b)&&O(ee),Fe.__version=De.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function nt(B,b,J){if(b.image.length!==6)return;const ee=ne(B,b),de=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+J);const De=r.get(de);if(de.version!==De.__version||ee===!0){i.activeTexture(a.TEXTURE0+J);const Fe=Pt.getPrimaries(Pt.workingColorSpace),pe=b.colorSpace===Zs?null:Pt.getPrimaries(b.colorSpace),ge=b.colorSpace===Zs||Fe===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ye=b.image[0]&&b.image[0].isDataTexture,He=[];for(let Te=0;Te<6;Te++)!Oe&&!Ye?He[Te]=y(b.image[Te],!0,o.maxCubemapSize):He[Te]=Ye?b.image[Te].image:b.image[Te],He[Te]=qt(b,He[Te]);const Be=He[0],it=c.convert(b.format,b.colorSpace),Qe=c.convert(b.type),lt=A(b.internalFormat,it,Qe,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,Ue=De.__version===void 0||ee===!0,_e=de.dataReady;let Pe=N(b,Be);we(a.TEXTURE_CUBE_MAP,b);let Ce;if(Oe){Y&&Ue&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,lt,Be.width,Be.height);for(let Te=0;Te<6;Te++){Ce=He[Te].mipmaps;for(let je=0;je<Ce.length;je++){const qe=Ce[je];b.format!==ha?it!==null?Y?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,0,0,qe.width,qe.height,it,qe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,lt,qe.width,qe.height,0,qe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,0,0,qe.width,qe.height,it,Qe,qe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,lt,qe.width,qe.height,0,it,Qe,qe.data)}}}else{if(Ce=b.mipmaps,Y&&Ue){Ce.length>0&&Pe++;const Te=It(He[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,lt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ye){Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,He[Te].width,He[Te].height,it,Qe,He[Te].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,lt,He[Te].width,He[Te].height,0,it,Qe,He[Te].data);for(let je=0;je<Ce.length;je++){const Dt=Ce[je].image[Te].image;Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,0,0,Dt.width,Dt.height,it,Qe,Dt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,lt,Dt.width,Dt.height,0,it,Qe,Dt.data)}}else{Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,it,Qe,He[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,lt,it,Qe,He[Te]);for(let je=0;je<Ce.length;je++){const qe=Ce[je];Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,0,0,it,Qe,qe.image[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,lt,it,Qe,qe.image[Te])}}}S(b)&&O(a.TEXTURE_CUBE_MAP),De.__version=de.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Xe(B,b,J,ee,de,De){const Fe=c.convert(J.format,J.colorSpace),pe=c.convert(J.type),ge=A(J.internalFormat,Fe,pe,J.normalized,J.colorSpace),Oe=r.get(b),Ye=r.get(J);if(Ye.__renderTarget=b,!Oe.__hasExternalTextures){const He=Math.max(1,b.width>>De),Be=Math.max(1,b.height>>De);de===a.TEXTURE_3D||de===a.TEXTURE_2D_ARRAY?i.texImage3D(de,De,ge,He,Be,b.depth,0,Fe,pe,null):i.texImage2D(de,De,ge,He,Be,0,Fe,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,B),dn(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,de,Ye.__webglTexture,0,Yt(b)):(de===a.TEXTURE_2D||de>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ee,de,Ye.__webglTexture,De),i.bindFramebuffer(a.FRAMEBUFFER,null)}function yt(B,b,J){if(a.bindRenderbuffer(a.RENDERBUFFER,B),b.depthBuffer){const ee=b.depthTexture,de=ee&&ee.isDepthTexture?ee.type:null,De=L(b.stencilBuffer,de),Fe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;dn(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Yt(b),De,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt(b),De,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,De,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Fe,a.RENDERBUFFER,B)}else{const ee=b.textures;for(let de=0;de<ee.length;de++){const De=ee[de],Fe=c.convert(De.format,De.colorSpace),pe=c.convert(De.type),ge=A(De.internalFormat,Fe,pe,De.normalized,De.colorSpace);dn(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Yt(b),ge,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt(b),ge,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ge,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(B,b,J){const ee=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(b.depthTexture);if(de.__renderTarget=b,(!de.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee){if(de.__webglInit===void 0&&(de.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),we(a.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=c.convert(b.depthTexture.format),Ye=c.convert(b.depthTexture.type);let He;b.depthTexture.format===us?He=a.DEPTH_COMPONENT24:b.depthTexture.format===Cr&&(He=a.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,He,b.width,b.height,0,Oe,Ye,null)}}else $(b.depthTexture,0);const De=de.__webglTexture,Fe=Yt(b),pe=ee?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,ge=b.depthTexture.format===Cr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===us)dn(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,De,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,De,0);else if(b.depthTexture.format===Cr)dn(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,De,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(B){const b=r.get(B),J=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){const ee=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",de)};ee.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=ee}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let ee=0;ee<6;ee++)ut(b.__webglFramebuffer[ee],B,ee);else{const ee=B.texture.mipmaps;ee&&ee.length>0?ut(b.__webglFramebuffer[0],B,0):ut(b.__webglFramebuffer,B,0)}else if(J){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=a.createRenderbuffer(),yt(b.__webglDepthbuffer[ee],B,!1);else{const de=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer[ee];a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,De)}}else{const ee=B.texture.mipmaps;if(ee&&ee.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),yt(b.__webglDepthbuffer,B,!1);else{const de=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,De),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,De)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function ht(B,b,J){const ee=r.get(B);b!==void 0&&Xe(ee.__webglFramebuffer,B,B.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&dt(B)}function pt(B){const b=B.texture,J=r.get(B),ee=r.get(b);B.addEventListener("dispose",T);const de=B.textures,De=B.isWebGLCubeRenderTarget===!0,Fe=de.length>1;if(Fe||(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=b.version,u.memory.textures++),De){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ge=0;ge<b.mipmaps.length;ge++)J.__webglFramebuffer[pe][ge]=a.createFramebuffer()}else J.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)J.__webglFramebuffer[pe]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Fe)for(let pe=0,ge=de.length;pe<ge;pe++){const Oe=r.get(de[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=a.createTexture(),u.memory.textures++)}if(B.samples>0&&dn(B)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const ge=de[pe];J.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Oe=c.convert(ge.format,ge.colorSpace),Ye=c.convert(ge.type),He=A(ge.internalFormat,Oe,Ye,ge.normalized,ge.colorSpace,B.isXRRenderTarget===!0),Be=Yt(B);a.renderbufferStorageMultisample(a.RENDERBUFFER,Be,He,B.width,B.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),yt(J.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(De){i.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture),we(a.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Xe(J.__webglFramebuffer[pe][ge],B,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Xe(J.__webglFramebuffer[pe],B,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(b)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let pe=0,ge=de.length;pe<ge;pe++){const Oe=de[pe],Ye=r.get(Oe);let He=a.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(He=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(He,Ye.__webglTexture),we(He,Oe),Xe(J.__webglFramebuffer,B,Oe,a.COLOR_ATTACHMENT0+pe,He,0),S(Oe)&&O(He)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(pe=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,ee.__webglTexture),we(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Xe(J.__webglFramebuffer[ge],B,b,a.COLOR_ATTACHMENT0,pe,ge);else Xe(J.__webglFramebuffer,B,b,a.COLOR_ATTACHMENT0,pe,0);S(b)&&O(pe),i.unbindTexture()}B.depthBuffer&&dt(B)}function Ft(B){const b=B.textures;for(let J=0,ee=b.length;J<ee;J++){const de=b[J];if(S(de)){const De=P(B),Fe=r.get(de).__webglTexture;i.bindTexture(De,Fe),O(De),i.unbindTexture()}}}const ln=[],Zt=[];function gn(B){if(B.samples>0){if(dn(B)===!1){const b=B.textures,J=B.width,ee=B.height;let de=a.COLOR_BUFFER_BIT;const De=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Fe=r.get(B),pe=b.length>1;if(pe)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ge=B.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(de|=a.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(de|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const Ye=r.get(b[Oe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ye,0)}a.blitFramebuffer(0,0,J,ee,0,0,J,ee,de,a.NEAREST),m===!0&&(ln.length=0,Zt.length=0,ln.push(a.COLOR_ATTACHMENT0+Oe),B.depthBuffer&&B.resolveDepthBuffer===!1&&(ln.push(De),Zt.push(De),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Zt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ln))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const Ye=r.get(b[Oe]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.TEXTURE_2D,Ye,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const b=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Yt(B){return Math.min(o.maxSamples,B.samples)}function dn(B){const b=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(B){const b=u.render.frame;g.get(B)!==b&&(g.set(B,b),B.update())}function qt(B,b){const J=B.colorSpace,ee=B.format,de=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==qu&&J!==Zs&&(Pt.getTransfer(J)===Jt?(ee!==ha||de!==Zi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",J)),b}function It(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=fe,this.getTextureUnits=ue,this.setTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=me,this.setTexture3D=ye,this.setTextureCube=I,this.rebindTextures=ht,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=dn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fR(a,e){function i(r,o=Zs){let c;const u=Pt.getTransfer(o);if(r===Zi)return a.UNSIGNED_BYTE;if(r===tm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===nm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===eS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===tS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jx)return a.BYTE;if(r===$x)return a.SHORT;if(r===$l)return a.UNSIGNED_SHORT;if(r===em)return a.INT;if(r===Ua)return a.UNSIGNED_INT;if(r===Ca)return a.FLOAT;if(r===cs)return a.HALF_FLOAT;if(r===nS)return a.ALPHA;if(r===iS)return a.RGB;if(r===ha)return a.RGBA;if(r===us)return a.DEPTH_COMPONENT;if(r===Cr)return a.DEPTH_STENCIL;if(r===aS)return a.RED;if(r===im)return a.RED_INTEGER;if(r===Dr)return a.RG;if(r===am)return a.RG_INTEGER;if(r===sm)return a.RGBA_INTEGER;if(r===Hu||r===Gu||r===Vu||r===ku)if(u===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ku)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vp||r===xp||r===Sp||r===Mp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yp||r===Ep||r===bp||r===Tp||r===Ap||r===Wu||r===Rp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yp||r===Ep)return u===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Tp)return c.COMPRESSED_R11_EAC;if(r===Ap)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Wu)return c.COMPRESSED_RG11_EAC;if(r===Rp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cp||r===wp||r===Dp||r===Lp||r===Np||r===Up||r===Op||r===Pp||r===Ip||r===Bp||r===Fp||r===zp||r===Hp||r===Gp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Np)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Up)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Op)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ip)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gp)return u===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vp||r===kp||r===Xp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Vp)return u===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wp||r===Yp||r===Yu||r===qp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ec?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new hS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ji({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new Qs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Nr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,_=null,v=null,x=null,E=null;const C=typeof XRWebGLBinding<"u",y=new pR,S={},O=i.getContextAttributes();let P=null,A=null;const L=[],N=[],F=new Xt;let T=null;const U=new ji;U.viewport=new Mn;const k=new ji;k.viewport=new Mn;const G=[U,k],q=new Tb;let fe=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let be=L[ne];return be===void 0&&(be=new Th,L[ne]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ne){let be=L[ne];return be===void 0&&(be=new Th,L[ne]=be),be.getGripSpace()},this.getHand=function(ne){let be=L[ne];return be===void 0&&(be=new Th,L[ne]=be),be.getHandSpace()};function X(ne){const be=N.indexOf(ne.inputSource);if(be===-1)return;const ve=L[be];ve!==void 0&&(ve.update(ne.inputSource,ne.frame,h||u),ve.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let ne=0;ne<L.length;ne++){const be=N[ne];be!==null&&(N[ne]=null,L[ne].disconnect(be))}fe=null,ue=null,y.reset();for(const ne in S)delete S[ne];e.setRenderTarget(P),x=null,v=null,_=null,o=null,A=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,nt=null;O.depth&&(nt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=O.stencil?Cr:us,Ie=O.stencil?ec:Ua);const Xe={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Xe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new La(v.textureWidth,v.textureHeight,{format:ha,type:Zi,depthTexture:new ko(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,ve),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new La(x.framebufferWidth,x.framebufferHeight,{format:ha,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),we.setContext(o),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ne){for(let be=0;be<ne.removed.length;be++){const ve=ne.removed[be],Ie=N.indexOf(ve);Ie>=0&&(N[Ie]=null,L[Ie].disconnect(ve))}for(let be=0;be<ne.added.length;be++){const ve=ne.added[be];let Ie=N.indexOf(ve);if(Ie===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=N.length){N.push(ve),Ie=Xe;break}else if(N[Xe]===null){N[Xe]=ve,Ie=Xe;break}if(Ie===-1)break}const nt=L[Ie];nt&&nt.connect(ve)}}const $=new te,me=new te;function ye(ne,be,ve){$.setFromMatrixPosition(be.matrixWorld),me.setFromMatrixPosition(ve.matrixWorld);const Ie=$.distanceTo(me),nt=be.projectionMatrix.elements,Xe=ve.projectionMatrix.elements,yt=nt[14]/(nt[10]-1),ut=nt[14]/(nt[10]+1),dt=(nt[9]+1)/nt[5],ht=(nt[9]-1)/nt[5],pt=(nt[8]-1)/nt[0],Ft=(Xe[8]+1)/Xe[0],ln=yt*pt,Zt=yt*Ft,gn=Ie/(-pt+Ft),Yt=gn*-pt;if(be.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Yt),ne.translateZ(gn),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),nt[10]===-1)ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const dn=yt+gn,j=ut+gn,qt=ln-Yt,It=Zt+(Ie-Yt),B=dt*ut/j*dn,b=ht*ut/j*dn;ne.projectionMatrix.makePerspective(qt,It,B,b,dn,j),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function I(ne,be){be===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(be.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let be=ne.near,ve=ne.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),q.near=k.near=U.near=be,q.far=k.far=U.far=ve,(fe!==q.near||ue!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),fe=q.near,ue=q.far),q.layers.mask=ne.layers.mask|6,U.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const Ie=ne.parent,nt=q.cameras;I(q,Ie);for(let Xe=0;Xe<nt.length;Xe++)I(nt[Xe],Ie);nt.length===2?ye(q,U,k):q.projectionMatrix.copy(U.projectionMatrix),K(ne,q,Ie)};function K(ne,be,ve){ve===null?ne.matrix.copy(be.matrixWorld):(ne.matrix.copy(ve.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(be.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=tc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ne){m=ne,v!==null&&(v.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ne){return S[ne]};let Se=null;function Ne(ne,be){if(g=be.getViewerPose(h||u),E=be,g!==null){const ve=g.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ie=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,Ie=!0);for(let ut=0;ut<ve.length;ut++){const dt=ve[ut];let ht=null;if(x!==null)ht=x.getViewport(dt);else{const Ft=_.getViewSubImage(v,dt);ht=Ft.viewport,ut===0&&(e.setRenderTargetTextures(A,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(A))}let pt=G[ut];pt===void 0&&(pt=new ji,pt.layers.enable(ut),pt.viewport=new Mn,G[ut]=pt),pt.matrix.fromArray(dt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(dt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ht.x,ht.y,ht.width,ht.height),ut===0&&(q.matrix.copy(pt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ie===!0&&q.cameras.push(pt)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ut=_.getDepthInformation(ve[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,o.renderState)}if(nt&&nt.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<ve.length;ut++){const dt=ve[ut].camera;if(dt){let ht=S[dt];ht||(ht=new hS,S[dt]=ht);const pt=_.getCameraImage(dt);ht.sourceTexture=pt}}}}for(let ve=0;ve<L.length;ve++){const Ie=N[ve],nt=L[ve];Ie!==null&&nt!==void 0&&nt.update(Ie,be,h||u)}Se&&Se(ne,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),E=null}const we=new _S;we.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const gR=new Tn,bS=new vt;bS.set(-1,0,0,0,1,0,0,0,1);function _R(a,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,pS(a)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,O,P,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,A)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,O,P):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===xi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===xi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const O=e.get(S),P=O.envMap,A=O.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(A)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(bS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,O,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*O,y.scale.value=P*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,O){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===xi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const O=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function vR(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,L){const N=L.program;r.uniformBlockBinding(A,N)}function h(A,L){let N=o[A.id];N===void 0&&(y(A),N=g(A),o[A.id]=N,A.addEventListener("dispose",O));const F=L.program;r.updateUBOMapping(A,F);const T=e.render.frame;c[A.id]!==T&&(v(A),c[A.id]=T)}function g(A){const L=_();A.__bindingPointIndex=L;const N=a.createBuffer(),F=A.__size,T=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,N),N}function _(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const L=o[A.id],N=A.uniforms,F=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let T=0,U=N.length;T<U;T++){const k=N[T];if(Array.isArray(k))for(let G=0,q=k.length;G<q;G++)x(k[G],T,G,F);else x(k,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(A,L,N,F){if(C(A,L,N,F)===!0){const T=A.__offset,U=A.value;if(Array.isArray(U)){let k=0;for(let G=0;G<U.length;G++){const q=U[G],fe=S(q);E(q,A.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,A.__data)}}function E(A,L,N){typeof A=="number"||typeof A=="boolean"?L[0]=A:A.isMatrix3?(L[0]=A.elements[0],L[1]=A.elements[1],L[2]=A.elements[2],L[3]=0,L[4]=A.elements[3],L[5]=A.elements[4],L[6]=A.elements[5],L[7]=0,L[8]=A.elements[6],L[9]=A.elements[7],L[10]=A.elements[8],L[11]=0):ArrayBuffer.isView(A)?L.set(new A.constructor(A.buffer,A.byteOffset,L.length)):A.toArray(L,N)}function C(A,L,N,F){const T=A.value,U=L+"_"+N;if(F[U]===void 0)return typeof T=="number"||typeof T=="boolean"?F[U]=T:ArrayBuffer.isView(T)?F[U]=T.slice():F[U]=T.clone(),!0;{const k=F[U];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return F[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(A){const L=A.uniforms;let N=0;const F=16;for(let U=0,k=L.length;U<k;U++){const G=Array.isArray(L[U])?L[U]:[L[U]];for(let q=0,fe=G.length;q<fe;q++){const ue=G[q],X=Array.isArray(ue.value)?ue.value:[ue.value];for(let z=0,H=X.length;z<H;z++){const $=X[z],me=S($),ye=N%F,I=ye%me.boundary,K=ye+I;N+=I,K!==0&&F-K<me.storage&&(N+=F-K),ue.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=N,N+=me.storage}}}const T=N%F;return T>0&&(N+=F-T),A.__size=N,A.__cache={},this}function S(A){const L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(L.boundary=16,L.storage=A.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",A),L}function O(A){const L=A.target;L.removeEventListener("dispose",O);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function P(){for(const A in o)a.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:h,dispose:P}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ta=null;function SR(){return Ta===null&&(Ta=new ub(xR,16,16,Dr,cs),Ta.name="DFG_LUT",Ta.minFilter=yn,Ta.magFilter=yn,Ta.wrapS=da,Ta.wrapT=da,Ta.generateMipmaps=!1,Ta.needsUpdate=!0),Ta}class MR{constructor(e={}){const{canvas:i=TE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Zi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=x,y=new Set([sm,am,im]),S=new Set([Zi,Ua,$l,ec,tm,nm]),O=new Uint32Array(4),P=new Int32Array(4),A=new te;let L=null,N=null;const F=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,q=null,fe=null,ue=null,X=null;this._outputColorSpace=ni;let z=0,H=0,$=null,me=-1,ye=null;const I=new Mn,K=new Mn;let Se=null;const Ne=new jt(0);let we=0,ne=i.width,be=i.height,ve=1,Ie=null,nt=null;const Xe=new Mn(0,0,ne,be),yt=new Mn(0,0,ne,be);let ut=!1;const dt=new fS;let ht=!1,pt=!1;const Ft=new Tn,ln=new te,Zt=new Mn,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function dn(){return $===null?ve:1}let j=r;function qt(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$p}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Tt,!1),i.addEventListener("webglcontextcreationerror",An,!1),j===null){const Z="webgl2";if(j=qt(Z,R),j===null)throw qt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Gt("WebGLRenderer: "+R.message),R}let It,B,b,J,ee,de,De,Fe,pe,ge,Oe,Ye,He,Be,it,Qe,lt,Y,Ue,_e,Pe,Ce,Te;function je(){It=new SA(j),It.init(),Pe=new fR(j,It),B=new dA(j,It,e,Pe),b=new cR(j,It),B.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),fe=j.createFramebuffer(),ue=j.createFramebuffer(),X=j.createFramebuffer(),J=new EA(j),ee=new Z2,de=new uR(j,It,b,ee,B,Pe,J),De=new xA(k),Fe=new Rb(j),Ce=new uA(j,Fe),pe=new MA(j,Fe,J,Ce),ge=new TA(j,pe,Fe,Ce,J),Y=new bA(j,B,de),it=new hA(ee),Oe=new j2(k,De,It,B,Ce,it),Ye=new _R(k,ee),He=new Q2,Be=new iR(It),lt=new cA(k,De,b,ge,E,m),Qe=new lR(k,ge,B),Te=new vR(j,J,B,b),Ue=new fA(j,It,J),_e=new yA(j,It,J),J.programs=Oe.programs,k.capabilities=B,k.extensions=It,k.properties=ee,k.renderLists=He,k.shadowMap=Qe,k.state=b,k.info=J}je(),C!==Zi&&(U=new RA(C,i.width,i.height,d,o,c));const qe=new mR(k,j);this.xr=qe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=It.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=It.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(ne,be,!1))},this.getSize=function(R){return R.set(ne,be)},this.setSize=function(R,Z,oe=!0){if(qe.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,be=Z,i.width=Math.floor(R*ve),i.height=Math.floor(Z*ve),oe===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(ne*ve,be*ve).floor()},this.setDrawingBufferSize=function(R,Z,oe){ne=R,be=Z,ve=oe,i.width=Math.floor(R*oe),i.height=Math.floor(Z*oe),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(C===Zi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Xe)},this.setViewport=function(R,Z,oe,ie){R.isVector4?Xe.set(R.x,R.y,R.z,R.w):Xe.set(R,Z,oe,ie),b.viewport(I.copy(Xe).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Z,oe,ie){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Z,oe,ie),b.scissor(K.copy(yt).multiplyScalar(ve).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){b.setScissorTest(ut=R)},this.setOpaqueSort=function(R){Ie=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,oe=!0){let ie=0;if(R){let ae=!1;if($!==null){const Ve=$.texture.format;ae=y.has(Ve)}if(ae){const Ve=$.texture.type,Ze=S.has(Ve),ze=lt.getClearColor(),Je=lt.getClearAlpha(),Ke=ze.r,at=ze.g,ft=ze.b;Ze?(O[0]=Ke,O[1]=at,O[2]=ft,O[3]=Je,j.clearBufferuiv(j.COLOR,0,O)):(P[0]=Ke,P[1]=at,P[2]=ft,P[3]=Je,j.clearBufferiv(j.COLOR,0,P))}else ie|=j.COLOR_BUFFER_BIT}Z&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Tt,!1),i.removeEventListener("webglcontextcreationerror",An,!1),lt.dispose(),He.dispose(),Be.dispose(),ee.dispose(),De.dispose(),ge.dispose(),Ce.dispose(),Te.dispose(),Oe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",vn),qe.removeEventListener("sessionend",Rn),Gn.stop()};function Dt(R){R.preventDefault(),vv("WebGLRenderer: Context Lost."),G=!0}function Tt(){vv("WebGLRenderer: Context Restored."),G=!1;const R=J.autoReset,Z=Qe.enabled,oe=Qe.autoUpdate,ie=Qe.needsUpdate,ae=Qe.type;je(),J.autoReset=R,Qe.enabled=Z,Qe.autoUpdate=oe,Qe.needsUpdate=ie,Qe.type=ae}function An(R){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Hn(R){const Z=R.target;Z.removeEventListener("dispose",Hn),$i(Z)}function $i(R){Si(R),ee.remove(R)}function Si(R){const Z=ee.get(R).programs;Z!==void 0&&(Z.forEach(function(oe){Oe.releaseProgram(oe)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,oe,ie,ae,Ve){Z===null&&(Z=gn);const Ze=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,ze=Pi(R,Z,oe,ie,ae);b.setMaterial(ie,Ze);let Je=oe.index,Ke=1;if(ie.wireframe===!0){if(Je=pe.getWireframeAttribute(oe),Je===void 0)return;Ke=2}const at=oe.drawRange,ft=oe.attributes.position;let et=at.start*Ke,Ut=(at.start+at.count)*Ke;Ve!==null&&(et=Math.max(et,Ve.start*Ke),Ut=Math.min(Ut,(Ve.start+Ve.count)*Ke)),Je!==null?(et=Math.max(et,0),Ut=Math.min(Ut,Je.count)):ft!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,ft.count));const ce=Ut-et;if(ce<0||ce===1/0)return;Ce.setup(ae,ie,ze,oe,Je);let Me,Le=Ue;if(Je!==null&&(Me=Fe.get(Je),Le=_e,Le.setIndex(Me)),ae.isMesh)ie.wireframe===!0?(b.setLineWidth(ie.wireframeLinewidth*dn()),Le.setMode(j.LINES)):Le.setMode(j.TRIANGLES);else if(ae.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),b.setLineWidth(Ge*dn()),ae.isLineSegments?Le.setMode(j.LINES):ae.isLineLoop?Le.setMode(j.LINE_LOOP):Le.setMode(j.LINE_STRIP)}else ae.isPoints?Le.setMode(j.POINTS):ae.isSprite&&Le.setMode(j.TRIANGLES);if(ae.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Le.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ge=ae._multiDrawStarts,Re=ae._multiDrawCounts,mt=ae._multiDrawCount,rt=Je?Fe.get(Je).bytesPerElement:1,zt=ee.get(ie).currentProgram.getUniforms();for(let sn=0;sn<mt;sn++)zt.setValue(j,"_gl_DrawID",sn),Le.render(Ge[sn]/rt,Re[sn])}else if(ae.isInstancedMesh)Le.renderInstances(et,ce,ae.count);else if(oe.isInstancedBufferGeometry){const Ge=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Re=Math.min(oe.instanceCount,Ge);Le.renderInstances(et,ce,Re)}else Le.render(et,ce)};function fs(R,Z,oe){R.transparent===!0&&R.side===Ra&&R.forceSinglePass===!1?(R.side=xi,R.needsUpdate=!0,Ui(R,Z,oe),R.side=ls,R.needsUpdate=!0,Ui(R,Z,oe),R.side=Ra):Ui(R,Z,oe)}this.compile=function(R,Z,oe=null){oe===null&&(oe=R),N=Be.get(oe),N.init(Z),T.push(N),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),R!==oe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),N.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ve=ae.material;if(Ve)if(Array.isArray(Ve))for(let Ze=0;Ze<Ve.length;Ze++){const ze=Ve[Ze];fs(ze,oe,ae),ie.add(ze)}else fs(Ve,oe,ae),ie.add(Ve)}),N=T.pop(),ie},this.compileAsync=function(R,Z,oe=null){const ie=this.compile(R,Z,oe);return new Promise(ae=>{function Ve(){if(ie.forEach(function(Ze){ee.get(Ze).currentProgram.isReady()&&ie.delete(Ze)}),ie.size===0){ae(R);return}setTimeout(Ve,10)}It.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Oa=null;function ai(R){Oa&&Oa(R)}function vn(){Gn.stop()}function Rn(){Gn.start()}const Gn=new _S;Gn.setAnimationLoop(ai),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(R){Oa=R,qe.setAnimationLoop(R),R===null?Gn.stop():Gn.start()},qe.addEventListener("sessionstart",vn),qe.addEventListener("sessionend",Rn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(R,Z);const oe=qe.enabled===!0&&qe.isPresenting===!0,ie=U!==null&&($===null||oe)&&U.begin(k,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Z),Z=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Z,$),N=Be.get(R,T.length),N.init(Z),N.state.textureUnits=de.getTextureUnits(),T.push(N),Ft.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),dt.setFromProjectionMatrix(Ft,wa,Z.reversedDepth),pt=this.localClippingEnabled,ht=it.init(this.clippingPlanes,pt),L=He.get(R,F.length),L.init(),F.push(L),qe.enabled===!0&&qe.isPresenting===!0){const Ze=k.xr.getDepthSensingMesh();Ze!==null&&Cn(Ze,Z,-1/0,k.sortObjects)}Cn(R,Z,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(Ie,nt,Z.reversedDepth),Yt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Yt&&lt.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&it.beginShadows();const ae=N.state.shadowsArray;if(Qe.render(ae,R,Z),ht===!0&&it.endShadows(),(ie&&U.hasRenderPass())===!1){const Ze=L.opaque,ze=L.transmissive;if(N.setupLights(),Z.isArrayCamera){const Je=Z.cameras;if(ze.length>0)for(let Ke=0,at=Je.length;Ke<at;Ke++){const ft=Je[Ke];Pn(Ze,ze,R,ft)}Yt&&lt.render(R);for(let Ke=0,at=Je.length;Ke<at;Ke++){const ft=Je[Ke];ci(L,R,ft,ft.viewport)}}else ze.length>0&&Pn(Ze,ze,R,Z),Yt&&lt.render(R),ci(L,R,Z)}$!==null&&H===0&&(de.updateMultisampleRenderTarget($),de.updateRenderTargetMipmap($)),ie&&U.end(k),R.isScene===!0&&R.onAfterRender(k,R,Z),Ce.resetDefaultState(),me=-1,ye=null,T.pop(),T.length>0?(N=T[T.length-1],de.setTextureUnits(N.state.textureUnits),ht===!0&&it.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,q!==null&&q.renderEnd()};function Cn(R,Z,oe,ie){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||dt.intersectsSprite(R)){ie&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const Ze=ge.update(R),ze=R.material;ze.visible&&L.push(R,Ze,ze,oe,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||dt.intersectsObject(R))){const Ze=ge.update(R),ze=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Zt.copy(Ze.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(ze)){const Je=Ze.groups;for(let Ke=0,at=Je.length;Ke<at;Ke++){const ft=Je[Ke],et=ze[ft.materialIndex];et&&et.visible&&L.push(R,Ze,et,oe,Zt.z,ft)}}else ze.visible&&L.push(R,Ze,ze,oe,Zt.z,null)}}const Ve=R.children;for(let Ze=0,ze=Ve.length;Ze<ze;Ze++)Cn(Ve[Ze],Z,oe,ie)}function ci(R,Z,oe,ie){const{opaque:ae,transmissive:Ve,transparent:Ze}=R;N.setupLightsView(oe),ht===!0&&it.setGlobalState(k.clippingPlanes,oe),ie&&b.viewport(I.copy(ie)),ae.length>0&&Pa(ae,Z,oe),Ve.length>0&&Pa(Ve,Z,oe),Ze.length>0&&Pa(Ze,Z,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Pn(R,Z,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const et=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new La(1,1,{generateMipmaps:!0,type:et?cs:Zi,minFilter:Ks,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ve=N.state.transmissionRenderTarget[ie.id],Ze=ie.viewport||I;Ve.setSize(Ze.z*k.transmissionResolutionScale,Ze.w*k.transmissionResolutionScale);const ze=k.getRenderTarget(),Je=k.getActiveCubeFace(),Ke=k.getActiveMipmapLevel();k.setRenderTarget(Ve),k.getClearColor(Ne),we=k.getClearAlpha(),we<1&&k.setClearColor(16777215,.5),k.clear(),Yt&&lt.render(oe);const at=k.toneMapping;k.toneMapping=Da;const ft=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),ht===!0&&it.setGlobalState(k.clippingPlanes,ie),Pa(R,oe,ie),de.updateMultisampleRenderTarget(Ve),de.updateRenderTargetMipmap(Ve),It.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,ce=Z.length;Ut<ce;Ut++){const Me=Z[Ut],{object:Le,geometry:Ge,material:Re,group:mt}=Me;if(Re.side===Ra&&Le.layers.test(ie.layers)){const rt=Re.side;Re.side=xi,Re.needsUpdate=!0,pa(Le,oe,ie,Ge,Re,mt),Re.side=rt,Re.needsUpdate=!0,et=!0}}et===!0&&(de.updateMultisampleRenderTarget(Ve),de.updateRenderTargetMipmap(Ve))}k.setRenderTarget(ze,Je,Ke),k.setClearColor(Ne,we),ft!==void 0&&(ie.viewport=ft),k.toneMapping=at}function Pa(R,Z,oe){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Ve=R.length;ae<Ve;ae++){const Ze=R[ae],{object:ze,geometry:Je,group:Ke}=Ze;let at=Ze.material;at.allowOverride===!0&&ie!==null&&(at=ie),ze.layers.test(oe.layers)&&pa(ze,Z,oe,Je,at,Ke)}}function pa(R,Z,oe,ie,ae,Ve){R.onBeforeRender(k,Z,oe,ie,ae,Ve),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(k,Z,oe,ie,R,Ve),ae.transparent===!0&&ae.side===Ra&&ae.forceSinglePass===!1?(ae.side=xi,ae.needsUpdate=!0,k.renderBufferDirect(oe,Z,ie,ae,R,Ve),ae.side=ls,ae.needsUpdate=!0,k.renderBufferDirect(oe,Z,ie,ae,R,Ve),ae.side=Ra):k.renderBufferDirect(oe,Z,ie,ae,R,Ve),R.onAfterRender(k,Z,oe,ie,ae,Ve)}function Ui(R,Z,oe){Z.isScene!==!0&&(Z=gn);const ie=ee.get(R),ae=N.state.lights,Ve=N.state.shadowsArray,Ze=ae.state.version,ze=Oe.getParameters(R,ae.state,Ve,Z,oe,N.state.lightProbeGridArray),Je=Oe.getProgramCacheKey(ze);let Ke=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;const at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=De.get(R.envMap||ie.environment,at),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",Hn),Ke=new Map,ie.programs=Ke);let ft=Ke.get(Je);if(ft!==void 0){if(ie.currentProgram===ft&&ie.lightsStateVersion===Ze)return ui(R,ze),ft}else ze.uniforms=Oe.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,oe,ze),R.onBeforeCompile(ze,k),ft=Oe.acquireProgram(ze,Je),Ke.set(Je,ft),ie.uniforms=ze.uniforms;const et=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=it.uniform),ui(R,ze),ie.needsLights=nr(R),ie.lightsStateVersion=Ze,ie.needsLights&&(et.ambientLightColor.value=ae.state.ambient,et.lightProbe.value=ae.state.probe,et.directionalLights.value=ae.state.directional,et.directionalLightShadows.value=ae.state.directionalShadow,et.spotLights.value=ae.state.spot,et.spotLightShadows.value=ae.state.spotShadow,et.rectAreaLights.value=ae.state.rectArea,et.ltc_1.value=ae.state.rectAreaLTC1,et.ltc_2.value=ae.state.rectAreaLTC2,et.pointLights.value=ae.state.point,et.pointLightShadows.value=ae.state.pointShadow,et.hemisphereLights.value=ae.state.hemi,et.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,et.spotLightMatrix.value=ae.state.spotLightMatrix,et.spotLightMap.value=ae.state.spotLightMap,et.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=ft,ie.uniformsList=null,ft}function ea(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Xu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ui(R,Z){const oe=ee.get(R);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function Oi(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(Z.matrixWorld);for(let oe=0,ie=R.length;oe<ie;oe++){const ae=R[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(A))return ae}return null}function Pi(R,Z,oe,ie,ae){Z.isScene!==!0&&(Z=gn),de.resetTextureUnits();const Ve=Z.fog,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,ze=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Pt.workingColorSpace,Je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ke=De.get(ie.envMap||Ze,Je),at=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),et=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,ce=!!oe.morphAttributes.color;let Me=Da;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Me=k.toneMapping);const Le=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ge=Le!==void 0?Le.length:0,Re=ee.get(ie),mt=N.state.lights;if(ht===!0&&(pt===!0||R!==ye)){const Et=R===ye&&ie.id===me;it.setState(ie,R,Et)}let rt=!1;ie.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==mt.state.version||Re.outputColorSpace!==ze||ae.isBatchedMesh&&Re.batching===!1||!ae.isBatchedMesh&&Re.batching===!0||ae.isBatchedMesh&&Re.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Re.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Re.instancing===!1||!ae.isInstancedMesh&&Re.instancing===!0||ae.isSkinnedMesh&&Re.skinning===!1||!ae.isSkinnedMesh&&Re.skinning===!0||ae.isInstancedMesh&&Re.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Re.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Re.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Re.instancingMorph===!1&&ae.morphTexture!==null||Re.envMap!==Ke||ie.fog===!0&&Re.fog!==Ve||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==it.numPlanes||Re.numIntersection!==it.numIntersection)||Re.vertexAlphas!==at||Re.vertexTangents!==ft||Re.morphTargets!==et||Re.morphNormals!==Ut||Re.morphColors!==ce||Re.toneMapping!==Me||Re.morphTargetsCount!==Ge||!!Re.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Re.__version=ie.version);let zt=Re.currentProgram;rt===!0&&(zt=Ui(ie,Z,ae),q&&ie.isNodeMaterial&&q.onUpdateProgram(ie,zt,Re));let sn=!1,Bt=!1,nn=!1;const gt=zt.getUniforms(),St=Re.uniforms;if(b.useProgram(zt.program)&&(sn=!0,Bt=!0,nn=!0),ie.id!==me&&(me=ie.id,Bt=!0),Re.needsLights){const Et=Oi(N.state.lightProbeGridArray,ae);Re.lightProbeGrid!==Et&&(Re.lightProbeGrid=Et,Bt=!0)}if(sn||ye!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),gt.setValue(j,"projectionMatrix",R.projectionMatrix),gt.setValue(j,"viewMatrix",R.matrixWorldInverse);const fi=gt.map.cameraPosition;fi!==void 0&&fi.setValue(j,ln.setFromMatrixPosition(R.matrixWorld)),B.logarithmicDepthBuffer&&gt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&gt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),ye!==R&&(ye=R,Bt=!0,nn=!0)}if(Re.needsLights&&(mt.state.directionalShadowMap.length>0&&gt.setValue(j,"directionalShadowMap",mt.state.directionalShadowMap,de),mt.state.spotShadowMap.length>0&&gt.setValue(j,"spotShadowMap",mt.state.spotShadowMap,de),mt.state.pointShadowMap.length>0&&gt.setValue(j,"pointShadowMap",mt.state.pointShadowMap,de)),ae.isSkinnedMesh){gt.setOptional(j,ae,"bindMatrix"),gt.setOptional(j,ae,"bindMatrixInverse");const Et=ae.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),gt.setValue(j,"boneTexture",Et.boneTexture,de))}ae.isBatchedMesh&&(gt.setOptional(j,ae,"batchingTexture"),gt.setValue(j,"batchingTexture",ae._matricesTexture,de),gt.setOptional(j,ae,"batchingIdTexture"),gt.setValue(j,"batchingIdTexture",ae._indirectTexture,de),gt.setOptional(j,ae,"batchingColorTexture"),ae._colorsTexture!==null&&gt.setValue(j,"batchingColorTexture",ae._colorsTexture,de));const hn=oe.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Y.update(ae,oe,zt),(Bt||Re.receiveShadow!==ae.receiveShadow)&&(Re.receiveShadow=ae.receiveShadow,gt.setValue(j,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(St.envMapIntensity.value=Z.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=SR()),Bt){if(gt.setValue(j,"toneMappingExposure",k.toneMappingExposure),Re.needsLights&&_n(St,nn),Ve&&ie.fog===!0&&Ye.refreshFogUniforms(St,Ve),Ye.refreshMaterialUniforms(St,ie,ve,be,N.state.transmissionRenderTarget[R.id]),Re.needsLights&&Re.lightProbeGrid){const Et=Re.lightProbeGrid;St.probesSH.value=Et.texture,St.probesMin.value.copy(Et.boundingBox.min),St.probesMax.value.copy(Et.boundingBox.max),St.probesResolution.value.copy(Et.resolution)}Xu.upload(j,ea(Re),St,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Xu.upload(j,ea(Re),St,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&gt.setValue(j,"center",ae.center),gt.setValue(j,"modelViewMatrix",ae.modelViewMatrix),gt.setValue(j,"normalMatrix",ae.normalMatrix),gt.setValue(j,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Et=ie.uniformsGroups;for(let fi=0,ta=Et.length;fi<ta;fi++){const na=Et[fi];Te.update(na,zt),Te.bind(na,zt)}}return zt}function _n(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function nr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,Z,oe){const ie=ee.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ee.get(R.texture).__webglTexture=Z,ee.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const oe=ee.get(R);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,oe=0){$=R,z=Z,H=oe;let ie=null,ae=!1,Ve=!1;if(R){const ze=ee.get(R);if(ze.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,ze.__webglFramebuffer),I.copy(R.viewport),K.copy(R.scissor),Se=R.scissorTest,b.viewport(I),b.scissor(K),b.setScissorTest(Se),me=-1;return}else if(ze.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(ze.__hasExternalTextures)de.rebindTextures(R,ee.get(R.texture).__webglTexture,ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const at=R.depthTexture;if(ze.__boundDepthTexture!==at){if(at!==null&&ee.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ve=!0);const Ke=ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?ie=Ke[Z][oe]:ie=Ke[Z],ae=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?ie=ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[oe]:ie=Ke,I.copy(R.viewport),K.copy(R.scissor),Se=R.scissorTest}else I.copy(Xe).multiplyScalar(ve).floor(),K.copy(yt).multiplyScalar(ve).floor(),Se=ut;if(oe!==0&&(ie=fe),b.bindFramebuffer(j.FRAMEBUFFER,ie)&&b.drawBuffers(R,ie),b.viewport(I),b.scissor(K),b.setScissorTest(Se),ae){const ze=ee.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ze.__webglTexture,oe)}else if(Ve){const ze=Z;for(let Je=0;Je<R.textures.length;Je++){const Ke=ee.get(R.textures[Je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,oe,ze)}}else if(R!==null&&oe!==0){const ze=ee.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ze.__webglTexture,oe)}me=-1},this.readRenderTargetPixels=function(R,Z,oe,ie,ae,Ve,Ze,ze=0){if(!(R&&R.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(Je=Je[Ze]),Je){b.bindFramebuffer(j.FRAMEBUFFER,Je);try{const Ke=R.textures[ze],at=Ke.format,ft=Ke.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ze),!B.textureFormatReadable(at)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(ft)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ie&&oe>=0&&oe<=R.height-ae&&j.readPixels(Z,oe,ie,ae,Pe.convert(at),Pe.convert(ft),Ve)}finally{const Ke=$!==null?ee.get($).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,Z,oe,ie,ae,Ve,Ze,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(Je=Je[Ze]),Je)if(Z>=0&&Z<=R.width-ie&&oe>=0&&oe<=R.height-ae){b.bindFramebuffer(j.FRAMEBUFFER,Je);const Ke=R.textures[ze],at=Ke.format,ft=Ke.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ze),!B.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.bufferData(j.PIXEL_PACK_BUFFER,Ve.byteLength,j.STREAM_READ),j.readPixels(Z,oe,ie,ae,Pe.convert(at),Pe.convert(ft),0);const Ut=$!==null?ee.get($).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Ut);const ce=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await AE(j,ce,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ve),j.deleteBuffer(et),j.deleteSync(ce),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(R.image.width*ie),Ve=Math.floor(R.image.height*ie),Ze=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;de.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,oe,0,0,Ze,ze,ae,Ve),b.unbindTexture()},this.copyTextureToTexture=function(R,Z,oe=null,ie=null,ae=0,Ve=0){let Ze,ze,Je,Ke,at,ft,et,Ut,ce;const Me=R.isCompressedTexture?R.mipmaps[Ve]:R.image;if(oe!==null)Ze=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Je=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,at=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const St=Math.pow(2,-ae);Ze=Math.floor(Me.width*St),ze=Math.floor(Me.height*St),R.isDataArrayTexture?Je=Me.depth:R.isData3DTexture?Je=Math.floor(Me.depth*St):Je=1,Ke=0,at=0,ft=0}ie!==null?(et=ie.x,Ut=ie.y,ce=ie.z):(et=0,Ut=0,ce=0);const Le=Pe.convert(Z.format),Ge=Pe.convert(Z.type);let Re;Z.isData3DTexture?(de.setTexture3D(Z,0),Re=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(de.setTexture2DArray(Z,0),Re=j.TEXTURE_2D_ARRAY):(de.setTexture2D(Z,0),Re=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const mt=b.getParameter(j.UNPACK_ROW_LENGTH),rt=b.getParameter(j.UNPACK_IMAGE_HEIGHT),zt=b.getParameter(j.UNPACK_SKIP_PIXELS),sn=b.getParameter(j.UNPACK_SKIP_ROWS),Bt=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,Me.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Me.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Ke),b.pixelStorei(j.UNPACK_SKIP_ROWS,at),b.pixelStorei(j.UNPACK_SKIP_IMAGES,ft);const nn=R.isDataArrayTexture||R.isData3DTexture,gt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const St=ee.get(R),hn=ee.get(Z),Et=ee.get(St.__renderTarget),fi=ee.get(hn.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,Et.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let ta=0;ta<Je;ta++)nn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ee.get(R).__webglTexture,ae,ft+ta),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ee.get(Z).__webglTexture,Ve,ce+ta)),j.blitFramebuffer(Ke,at,Ze,ze,et,Ut,Ze,ze,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||ee.has(R)){const St=ee.get(R),hn=ee.get(Z);b.bindFramebuffer(j.READ_FRAMEBUFFER,ue),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,X);for(let Et=0;Et<Je;Et++)nn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,St.__webglTexture,ae,ft+Et):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,St.__webglTexture,ae),gt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,hn.__webglTexture,Ve,ce+Et):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,hn.__webglTexture,Ve),ae!==0?j.blitFramebuffer(Ke,at,Ze,ze,et,Ut,Ze,ze,j.COLOR_BUFFER_BIT,j.NEAREST):gt?j.copyTexSubImage3D(Re,Ve,et,Ut,ce+Et,Ke,at,Ze,ze):j.copyTexSubImage2D(Re,Ve,et,Ut,Ke,at,Ze,ze);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else gt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Re,Ve,et,Ut,ce,Ze,ze,Je,Le,Ge,Me.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Re,Ve,et,Ut,ce,Ze,ze,Je,Le,Me.data):j.texSubImage3D(Re,Ve,et,Ut,ce,Ze,ze,Je,Le,Ge,Me):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ve,et,Ut,Ze,ze,Le,Ge,Me.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ve,et,Ut,Me.width,Me.height,Le,Me.data):j.texSubImage2D(j.TEXTURE_2D,Ve,et,Ut,Ze,ze,Le,Ge,Me);b.pixelStorei(j.UNPACK_ROW_LENGTH,mt),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(j.UNPACK_SKIP_PIXELS,zt),b.pixelStorei(j.UNPACK_SKIP_ROWS,sn),b.pixelStorei(j.UNPACK_SKIP_IMAGES,Bt),Ve===0&&Z.generateMipmaps&&j.generateMipmap(Re),b.unbindTexture()},this.initRenderTarget=function(R){ee.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){z=0,H=0,$=null,b.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}const yR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",ER="/assets/Reckk-MediumItalic-D_uyfX4p.otf",bR="/assets/CXLMediumItalic-DYSp-DoC.otf",ux=4,fx=5,ss={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function TS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function TR(a){return TS(a)}function AR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}const Qh=2048,RR=1.1;function CR(a,e){const i=Math.max(240,a);let r=Math.round(i*e*RR),o=Math.round(r*fx/ux);if(r>Qh||o>Qh){const c=Qh/Math.max(r,o);r=Math.max(280,Math.round(r*c)),o=Math.round(r*fx/ux)}return{W:r,H:o,layoutDpr:r/i}}function AS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function on(a,e,i,r,o,c,u){AS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function mn(a,e,i,r,o,c,u,d){AS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function of(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));on(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),mn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function nc(a,e,i,r,o,c,u){if(r<2||o<2)return;const d=8*c,m=a.createLinearGradient(e,i+o,e+r,i);if(m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),on(a,e,i,r,o,d,m),mn(a,e,i,r,o,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*c)),(u==null?void 0:u.innerStroke)!==!1){const h=2.5*c;mn(a,e+h,i+h,r-h*2,o-h*2,Math.max(2,d-1.5*c),"rgba(200,245,168,0.35)",Math.max(1,c))}}const er="rgba(255,255,255,0.08)",tr="rgba(255,255,255,0.14)";function lf(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return mn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function RS(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*h,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+h/2,i+14*d),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function wR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function DR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;on(a,e,m,r,h,6*u,er),mn(a,e,m,r,h,6*u,tr,1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+h/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),d+6*u+h}function LR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;on(a,e,u,r,d,8*o,"#050508"),mn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),on(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function NR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;mn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return on(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),mn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function hm(a,e,i,r,o){const c=44*o;on(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),mn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return on(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ss.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${ss.role} · ${ss.didShort}`,e+8*o+u+8*o,i+32*o),c}function UR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),on(a,e,i,r,c,d,m),mn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),mn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ss.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ss.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${ss.role} · ${ss.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(ss.didShort,e+u,h);const g=28*o;return on(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),mn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function OR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),on(a,e,i,r,c,d,m),mn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,_=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ss.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function PR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);on(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);on(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function IR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(d+u);on(a,x,h,d,m,6*o,er),mn(a,x,h,d,m,6*o,_.active?_.tone:tr,_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,h+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,x+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function BR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;on(a,e,i,r,u,8*o,er),mn(a,e,i,r,u,8*o,tr,1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return on(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),on(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const ql=2,zo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function dx(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);on(a,x,i,m,h,6*c,er),mn(a,x,i,m,h,6*c,tr,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",h}function FR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:zo.riskScore},{label:"Rep",value:zo.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(h+x>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":er,C=g.brand?"rgba(200,245,168,0.35)":tr;on(a,h,i,x,d,4*o,E),mn(a,h,i,x,d,4*o,C,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let S=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),S,i+d*.68),S+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,S,i+d*.68)),h+=x+u}return a.textAlign="left",d}function zR(a,e,i,r,o){const c=zo.receipts,u=22*o,d=14*o+c.length*u;return on(a,e,i,r,d,6*o,er),mn(a,e,i,r,d,6*o,tr,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function HR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),on(a,e,i,r,c,d,m),mn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),mn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,_=e+r-u-h,v=i+u-1*o;return on(a,_,v,h,g,8*o,"rgba(200,245,168,0.14)"),mn(a,_,v,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+h/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function GR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return on(a,e,i,r,d,6*o,er),mn(a,e,i,r,d,6*o,tr,1),c.forEach(([m,h,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",d}function VR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%ql+ql)%ql,_=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];of(a,e,i,r,o,h,u);let v=lf(a,e,i,r,m,_.header,d);v=wR(a,e,v,r,m,_.segment,g+1,ql,d);const x=i+o-m,E=e+m,C=v,y=r-m*2,S=Math.max(48*d,x-v),O=10*d;nc(a,E,C,y,S,d);const P=E+O,A=y-O*2;let L=C+O;const N=C+S-O;if(g===0){L+=hm(a,P,L,A,d)+8*d,L+22*d<=N&&(L+=FR(a,P,L,A,d)+8*d);const T=[["SHARPE",zo.sharpe],["ROI",zo.roi],["RISK",zo.riskScore]];L+36*d<=N&&(L+=dx(a,P,L,A,T,d)+8*d),L+70*d<=N&&zR(a,P,L,A,d);return}L+=HR(a,P,L,A,d)+8*d,L+78*d<=N&&(L+=GR(a,P,L,A,d)+8*d);const F=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];L+36*d<=N&&dx(a,P,L,A,F,d)}function kR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;of(a,e,i,r,o,h,u);let g=lf(a,e,i,r,m,"COPY TRADE",d);g=RS(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const _=40*d,v=i+o-m-_,x=v-10*d;if(c%2===0){const C=6*d,y=r-m*2;let S=(y-C)/2,O=Math.min(S*190/316,S*.58);const P=Math.max(64*d,x-g-28*d);O>P&&(S=S*(P/O),O=P);const A=d*(S/((y-C)/2)),L=e+m+(y-(S*2+C))/2;OR(a,L,g,S,A),UR(a,L+S+C,g,S,A),g+=O+10*d;const N=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],F=5*d,T=(r-m*2-F*2)/3,U=32*d;if(g+U<=x){const k=6*d;nc(a,e+m,g-k,r-m*2,U+k*2,d,{innerStroke:!1}),N.forEach(([G,q],fe)=>{const ue=e+m+fe*(T+F);on(a,ue,g,T,U,6*d,er),mn(a,ue,g,T,U,6*d,tr,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(G,ue+T/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(q,ue+T/2,g+24*d)}),a.textAlign="left"}}else{const C=e+m,y=g,S=r-m*2,O=Math.max(48*d,x-g),P=10*d;nc(a,C,y,S,O,d);const A=C+P,L=S-P*2;let N=y+P;const F=y+O-P;N+=hm(a,A,N,L,d)+10*d,N+36*d<F&&(N+=PR(a,A,N,L,d,25)+10*d),N+50*d<F&&IR(a,A,N,L,d)}BR(a,e+m,v,r-m*2,d)}const XR=2,WR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function YR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function qR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;of(a,e,i,r,o,m,c);let h=lf(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,_=e+d,v=h,x=r-d*2,E=Math.max(48*u,g-h),C=10*u;nc(a,_,v,x,E,u);const y=58*u,S=10*u,O=6*u,P=_+C+y+O+S+O,A=_+x-C-P,L=_+C+y+O+S/2,N=_+C;h=v+C;const F=v+E-C,T=WR,U=4*u;T.forEach((k,G)=>{if(h>=F-8*u)return;const q=G===0,fe=G===T.length-1,ue=YR(k.status),X=8*u,z=6*u,H=7*u,$=8*u,me=k.showActions?22*u:0,ye=k.showActions?5*u:0,K=Math.max(X+2*u+z,H+4*u+$)+ye+me+U;if(h+Math.min(K,28*u)>F)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(k.agent,N+y,h+X),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${z}px "DM Mono", ui-monospace, monospace`,a.fillText(k.timeLabel,N+y,h+X+2*u+z),a.textAlign="left",fe||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(L,h+6*u),a.lineTo(L,h+K),a.stroke());const Se=2.4*u;a.beginPath(),a.arc(L,h+5*u,Se,0,Math.PI*2),a.fillStyle=q?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),q&&(a.beginPath(),a.arc(L,h+5*u,Se+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const Ne=4*u,we=2*u;a.font=`700 ${H}px "DM Mono", ui-monospace, monospace`;const ne=k.statusLabel.toUpperCase(),be=a.measureText(ne).width+Ne*2,ve=H+we*2;on(a,P,h,be,ve,3*u,ue.bg),a.fillStyle=ue.fg,a.fillText(ne,P+Ne,h+H+we*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${$}px "DM Mono", ui-monospace, monospace`;const Ie=h+ve+3*u+$;let nt=k.action;if(k.pnl){const Xe=`${k.action} · `;a.fillText(Xe,P,Ie);const yt=a.measureText(Xe).width;a.fillStyle=k.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${$}px "DM Mono", ui-monospace, monospace`,a.fillText(k.pnl.text,P+yt,Ie)}else{for(;nt.length>8&&a.measureText(nt).width>A;)nt=`${nt.slice(0,-2)}…`;a.fillText(nt,P,Ie)}if(k.showActions&&h+ve+3*u+$+ye+me<=F){const Xe=h+ve+3*u+$+ye,yt=(A-5*u)/2;mn(a,P,Xe,yt,me,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",P+yt/2,Xe+me*.68),on(a,P+yt+5*u,Xe,yt,me,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",P+yt+5*u+yt/2,Xe+me*.68),a.textAlign="left"}h+=K})}function jR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;of(a,e,i,r,o,m,c);let h=lf(a,e,i,r,d,"FUND BUCKET",u);h=RS(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u);const g=10*u+36*u,_=e+d,v=h,x=r-d*2,E=Math.max(48*u,i+o-d-g-8*u-h),C=10*u;nc(a,_,v,x,E,u);const y=_+C,S=x-C*2;let O=v+C;O+=hm(a,y,O,S,u)+8*u,O+=DR(a,y,O,S,"FROM","Select source bucket",u)+8*u,v+E-C-O>70*u&&LR(a,y,O,S,u),NR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function CS(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":VR(a,i,r,o,c,u,d);break;case"copy":kR(a,i,r,o,c,u,d);break;case"supervise":qR(a,i,r,o,c,d);break;case"isolate":jR(a,i,r,o,c,d);break}}function ZR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),CS(a,e,0,0,i,r,o,c)}function KR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m,layoutDpr:h}=CR(r,i),g=document.createElement("canvas");g.width=d,g.height=m;const _=g.getContext("2d"),v=Math.min(1,Math.max(0,c)),x=_.createLinearGradient(0,0,0,m);x.addColorStop(0,`rgba(8, 10, 14, ${v})`),x.addColorStop(.55,`rgba(5, 7, 13, ${v})`),x.addColorStop(1,`rgba(3, 4, 6, ${v})`),_.fillStyle=x,_.fillRect(0,0,d,m);const E=Math.round(22*h),C=Math.round(.05*m),y=Math.round(.045*m),S=d-E*2,O=10*h,P=20*h,A=Math.min(34*h,d*.095);_.fillStyle="rgba(255,255,255,0.94)",_.font=`normal 400 ${A}px ${o}`,_.textBaseline="alphabetic";const L=_.measureText(a.verb),N=Math.abs(L.actualBoundingBoxAscent??A*.8),F=Math.abs(L.actualBoundingBoxDescent??A*.2),T=C+N;_.shadowColor="rgba(10, 14, 23, 0.55)",_.shadowBlur=Math.max(8,12*h),_.shadowOffsetX=0,_.shadowOffsetY=Math.max(1,1.5*h),_.fillText(a.verb,E,T),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0;const U=Math.min(13*h,d*.036);_.fillStyle="rgba(255,255,255,0.94)",_.font=`400 ${U}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const G=AR(_,a.description,S)[0]??a.description,q=_.measureText(G),fe=Math.abs(q.actualBoundingBoxAscent??U*.75),ue=T+F+O+fe;_.shadowColor="rgba(10, 14, 23, 0.45)",_.shadowBlur=Math.max(4,6*h),_.shadowOffsetY=Math.max(.5,1*h),_.fillText(G,E,ue),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0;const X=Math.round(ue+P),z=E,H=X,$=S,me=Math.max(80*h,m-X-y);CS(_,TR(e),z,H,$,me,0,u);const ye=new fm(g);return ye.colorSpace=ni,ye.minFilter=Ks,ye.generateMipmaps=!0,ye}const Kp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],QR="0 0 58 35",JR=58,$R=35;function e3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,JR+r*2,$R+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Kp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const t3={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function pm({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=t3[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(e3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const hx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",n3=80,Ql=820,Jh=160,px=168;function i3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a3(){return hx[Math.floor(Math.random()*hx.length)]??"?"}function mx(a){return Array.from(a).map(e=>{const i=Math.random()*(Ql-Jh),r=Jh+Math.random()*(Ql-i-Jh),o=Math.min(Ql,i+r);return{original:e,start:i,end:o}})}function gx(a){return Math.min(1,Math.max(0,a))}function s3({text:a,className:e,scrollerRef:i,effect:r="matrix"}){const o=ke.useRef(null),c=ke.useRef(mx(a)),u=i3();return ke.useEffect(()=>{c.current=mx(a)},[a]),ke.useEffect(()=>{if(u)return;const d=o.current;if(!d)return;let m=0,h=!0,g=-1;const _=()=>{const x=i.current;if(!x)return;const E=Math.max(0,-x.getBoundingClientRect().top),C=Math.min(Ql,Math.max(0,E-n3));if(C===g&&g>=0)return;g=C;const y=c.current,S=d.querySelectorAll(".scroll-dissolve__glyph");let O=y.length>0;if(r==="fadeout"){const P=gx(C/Ql);O=P>=1;for(let A=0;A<y.length;A++){const L=y[A],N=S[A];N&&(N.textContent=L.original===" "?" ":L.original,N.style.transform="translateY(0)",N.style.opacity="1",N.style.visibility="visible")}d.style.opacity=String(1-P),d.style.visibility=O?"hidden":"visible",d.style.display=O?"none":"block";return}for(let P=0;P<y.length;P++){const A=y[P],L=S[P];if(!L)continue;const N=Math.max(.001,A.end-A.start),F=gx((C-A.start)/N);if(F<1&&(O=!1),F<=0){L.textContent=A.original===" "?" ":A.original,L.style.transform="translateY(0)",L.style.opacity="1",L.style.visibility="visible";continue}if(F>=1){L.textContent=A.original===" "?" ":A.original,L.style.transform=`translateY(${-px}px)`,L.style.opacity="0",L.style.visibility="hidden";continue}L.textContent=a3(),L.style.transform=`translateY(${-F*px}px)`,L.style.opacity=String(1-F),L.style.visibility="visible"}d.style.opacity="1",d.style.visibility=O?"hidden":"visible",d.style.display=O?"none":"block"},v=()=>{h&&(_(),m=requestAnimationFrame(v))};return m=requestAnimationFrame(v),()=>{h=!1,cancelAnimationFrame(m)}},[u,i,a,r]),u?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:o,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((d,m)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:d===" "?" ":d},`${m}-${d}`))})}const r3="Enter the agentic economy →",jl=sp.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),rn=jl.length,ua=2.95,$s=6.9,Wo=32,mm=4,gm=5,Ju=2.05,o3=1,wS=ua*.55,DS=.28,LS=.35,_x=DS+LS,$h=.85,vx=300,l3=35,xx=l3/60*1e3,c3=.1;function NS(a){return a<520?{mode:"mobile",canvasAspect:1280/320,fontRefH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasAspect:1600/360,fontRefH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasAspect:1920/420,fontRefH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const ep=4096,Sx=1.15;function u3(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.35,Math.min(i,r)*1.25),3.5)}function f3(){const a=-(rn-1)*ua,e=-.1*ua,r=a+$s+e-wS,o=a+.05;return Math.max(.5,r-o)}function d3(a,e,i){const{w:r,h:o}=Qp(a,e,i),c=uf(a,e),u=f3(),d=a/Math.max(1,e),m=Wo*Math.PI/180,h=2*u*Math.tan(m/2),g=h*d;return{w:r*c/Math.max(1e-6,g)*a,h:o*c/Math.max(1e-6,h)*e}}const h3=1.35,p3=.72,m3=.62,g3=.2,_3=14,v3=.42,x3=128,S3=12,M3=.002,y3=.0011,Mx=.12,E3=.88,US=4,b3=32,T3=40,A3=US-1,yx=50,R3=-10,Ex=28,C3={dir:"/intro-frames",w:960,h:540},w3={dir:"/intro-frames-mobile",w:720,h:1280},D3=900,OS=12,Jl=121,L3=1,N3=10;function bx(a){return a<D3?w3:C3}function Iu(){const a=window.devicePixelRatio||1,e=window.innerWidth<900,i=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;return Math.min(a,e||i?1.5:2)}const $u=(Jl-1)/OS,PS=[0,2,4,6,8,$u],U3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function O3(a,e){const i=L3+e;return`${a.dir}/frame_${String(i).padStart(3,"0")}.webp`}function P3(a){const e=Jl-1,i=Ht.clamp(a,0,$u);return Ht.clamp(Math.round(i*OS),0,e)}function I3(a,e){const i=U3[a]??{in:2,out:2},r=Ht.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function Tx(a,e,i,r,o){const c=Math.max(1,rn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=PS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],_=u[h+1],v=_>g?Ht.clamp((a-g)/(_-g),0,1):1;return Ht.lerp(d[h],d[h+1],I3(h,v))}function Ax(a,e){let i=!1;const r=new Array(Jl).fill(null);async function o(u){if(i)return;const d=new Image;d.decoding="async",d.src=O3(a,u),await new Promise(m=>{d.onload=()=>m(),d.onerror=()=>m()}),!(i||!d.complete||d.naturalWidth<1)&&(r[u]=d,e==null||e(u,d))}const c=(async()=>{await o(0);let u=1;for(;u<Jl&&!i;){const d=[];for(let m=0;m<N3&&u<Jl;m+=1,u+=1)d.push(o(u));await Promise.all(d)}})();return{frames:r,cancel:()=>{i=!0},ready:c}}const B3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,F3=`
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
`,z3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,H3=`
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
`,G3='"Reckk Heading", Georgia, "Times New Roman", serif',IS="Morpheum Wordmark",ic=`"${IS}"`,V3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function k3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(IS,`url(${bR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${ic}`);const e=document.fonts.check(`normal 152px ${ic}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function X3(){if(!(typeof document>"u"||!document.fonts))try{await k3();const a=new FontFace("Reckk Title",`url(${ER})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${yR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${ic}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const qs="flow-intro-hide-chrome",W3=72,Y3=120,tp=80;function q3(a){return a<=W3}const j3=280,np=.42;function js(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function ip(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;js(e)}function Rx(){document.body.classList.remove(qs),ip(),requestAnimationFrame(()=>{ip(),requestAnimationFrame(()=>{ip()})})}function as(a){const e=Ht.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Po(a){const e=Math.max(1,a),i=Math.max(1,rn*e*o3),r=Math.max(1,i/Math.max(1,rn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const Z3=900,K3=1100,Q3=1300,J3=1500,$3=6,eC=36,tC=50,nC=.5,iC=1024,aC=.75,cf=.8;function _m(a){return a>=iC}function sC(a){return _m(a)?Z3:K3}function rC(a){return _m(a)?Q3:J3}function BS(a){return Math.max(2,Math.max(1,a)*.004)}function oC(a,e){const{cardPx:i,titlePx:r}=Po(e),o=Math.max(1,rn-1),c=Ht.clamp(Math.round(a),0,rn-1);return r+c/o*i}function lC(a){return a.offsetTop}function cC(a,e,i){return a.offsetTop+oC(e,i)}function Bu(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function uC(a){const e=rn-1;return Ht.clamp(Math.round(a),0,e)}function ap(a,e,i,r){const o=BS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:uC(i)}}function fC(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,rn-1),m=r+d*nC;return!(a>m||c<u*.5)}function uf(a,e){const i=a/Math.max(1,e),r=Wo*Math.PI/180,o=2*$s*Math.tan(r/2),c=o*i,u=Ju*mm/gm,d=.992,m=d*o/Ju,h=d*c/u;return Ht.clamp(Math.min(m,h),.52,2.35)}function FS(a,e,i=cf){const r=uf(a,e);return(_m(a)?r*aC:r)*i}function dC(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.25,Math.min(i,r)),3)}function hC(a,e,i=cf){const r=FS(a,e,i),o=Ju*r,c=o*mm/gm,u=a/Math.max(1,e),d=Wo*Math.PI/180,m=2*$s*Math.tan(d/2),h=m*u;return{w:c/Math.max(1e-6,h)*a,h:o/Math.max(1e-6,m)*e}}function Qp(a,e,i){const r=NS(a),o=uf(a,e),c=a/Math.max(1,e),u=Wo*Math.PI/180,m=2*$s*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function pC(a,e){const i=a/Math.max(1,rn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function mC(a,e){const i=Math.min(Math.max(1,e*.55),Math.max(1,a*.52));return a<=i+.001?0:1-i/a}function gC(a,e){const i=Ht.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=as(Ht.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function _C(a,e,i,r=0){const o=rn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Ht.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=as(Ht.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function vC(a){return new Ji({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:c3}},vertexShader:z3,fragmentShader:H3,transparent:!0,depthWrite:!0,depthTest:!0,side:ls})}function xC(a,e){return a>1.5&&a<e-.5}function SC(a){return Ht.clamp(540/Math.max(a,340),.2,.55)}function MC(a,e,i){const r=[],o=_3;for(let c=0;c<o;c++){const u=Ht.clamp(a-c/Math.max(1,o-1)*v3,-.08,1.08),d=Math.sin(u*Math.PI*2*h3)*m3*i,m=Math.sin(u*Math.PI*2*p3)*g3,h=Mx+c/Math.max(1,o-1)*(E3-Mx),g=e-h;r.push(new te(d,m,g))}return r}function yC(a,e,i,r){const o=a.length;if(o<2)return new Qi;const c=[],u=[],d=[],m=[],h=new te,g=new te,_=new te,v=new te(0,1,0),x=e+1;for(let C=0;C<o;C++){C===0?h.subVectors(a[1],a[0]).normalize():C===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[C+1],a[C-1]).normalize(),g.copy(v).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),_.crossVectors(h,g).normalize();const y=o===1?0:C/(o-1),S=i+(r-i)*Math.pow(y,1.5);for(let O=0;O<=e;O++){const P=O/e*Math.PI*2,A=Math.cos(P),L=Math.sin(P),N=a[C];c.push(N.x+(A*g.x+L*_.x)*S,N.y+(A*g.y+L*_.y)*S,N.z+(A*g.z+L*_.z)*S),u.push(A*g.x+L*_.x,A*g.y+L*_.y,A*g.z+L*_.z),d.push(o===1?0:C/(o-1),O/e)}}for(let C=0;C<o-1;C++)for(let y=0;y<e;y++){const S=C*x+y,O=S+1,P=S+x,A=P+1;m.push(S,P,O,O,P,A)}const E=new Qi;return E.setAttribute("position",new Ki(c,3)),E.setAttribute("normal",new Ki(u,3)),E.setAttribute("uv",new Ki(d,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Cx(a,e,i,r,o,c,u,d=cf){const m={verb:a.verb,description:a.description},h=hC(r,o,d),g=dC(i,r);return KR(m,e,g,h.w,G3,c,u)}function wx(a,e,i){const r=NS(e),o=u3(a,e),c=d3(e,i,1/r.canvasAspect);let u=Math.round(Math.max(256,c.w*o*Sx)),d=Math.round(Math.max(64,c.h*o*Sx));const m=Math.round(u/r.canvasAspect);if(Math.abs(m-d)/Math.max(d,1)>.08&&(d=Math.max(64,m)),u>ep||d>ep){const k=ep/Math.max(u,d);u=Math.max(256,Math.round(u*k)),d=Math.max(64,Math.round(d*k))}const h=document.createElement("canvas");h.width=u,h.height=d;const g=h.getContext("2d");g.clearRect(0,0,u,d);const _="Morpheum",v=d/o;let x=r.fontPx*(v/r.fontRefH);g.textAlign="left",g.textBaseline="alphabetic";const E=()=>{g.font=`normal ${x*o}px ${ic}`};E();const C=k=>{g.font=`normal ${k*o}px ${ic}`;const G=g.measureText(_),q=Math.abs(G.actualBoundingBoxLeft??0),fe=Math.abs(G.actualBoundingBoxRight??G.width),ue=Math.abs(G.actualBoundingBoxAscent??k*o*.8),X=Math.abs(G.actualBoundingBoxDescent??k*o*.25);return{left:q,right:fe,width:q+fe,ascent:ue,descent:X}},y=Math.max(1.25,1.85*o)*2,S=64*o+y,O=40*o+y,P=k=>{const G=C(k);return G.width+S*2<=u&&G.ascent+G.descent+O*2<=d},A=x+24;for(;!P(x)&&x>48;)x-=2;for(;P(x+2)&&x<A;)x+=2;E();const L=C(x),N=(u-L.width)/2+L.left,F=d/2+(L.ascent-L.descent)/2,T=g.createLinearGradient(N-L.left,F-L.ascent,N+L.right,F+L.descent);V3.forEach(k=>T.addColorStop(k.t,k.c)),g.lineJoin="round",g.miterLimit=2,g.lineWidth=Math.max(1.25,1.85*o),g.strokeStyle="rgba(8,12,10,0.22)",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(10,16*o),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,2*o),g.strokeText(_,N,F),g.fillStyle=T,g.fillText(_,N,F),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0;const U=new fm(h);return U.colorSpace=ni,U.minFilter=yn,U.magFilter=yn,U.generateMipmaps=!1,U}function Dx(a,e){a.generateMipmaps=!1,a.minFilter=yn,a.magFilter=yn,a.wrapS=da,a.wrapT=da;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function EC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=cf,skipAnimationSpeed:r=1,subtitleFadeEffect:o="matrix"}){const c=ke.useRef(null),u=ke.useRef(null),d=ke.useRef(null),m=ke.useRef(null),h=ke.useRef(!1),g=ke.useRef(!1),_=ke.useRef(null),v=ke.useRef(null),x=ke.useRef(a);x.current=Math.min(1,Math.max(0,a));const E=ke.useRef(e);E.current=Math.min(1,Math.max(0,e));const C=ke.useRef(i);C.current=Math.max(.1,i);const y=ke.useRef(r);y.current=Math.max(.1,r);const S=ke.useCallback(()=>{var L;if(h.current)return;h.current=!0,g.current=!1,(L=_.current)==null||L.call(_);const O=()=>{const N=u.current;N==null||N.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{Rx(),window.setTimeout(()=>{h.current=!1},100)},j3)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!v.current){O();return}v.current()||O()},[]);return ke.useLayoutEffect(()=>{const O=window.matchMedia("(prefers-reduced-motion: reduce)").matches,P=window.location.hash.replace(/^#/,"");return O||P!==""&&P!=="flow"&&P!=="hero"||document.body.classList.add(qs),()=>{document.body.classList.remove(qs)}},[]),ke.useEffect(()=>{const O=P=>{if(P.key!=="Escape")return;const A=document.getElementById("hero");A&&A.getBoundingClientRect().top>8&&(P.preventDefault(),S())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[S]),ke.useEffect(()=>{const O=window.location.hash.replace(/^#/,"");O&&O!=="flow"&&O!=="hero"&&requestAnimationFrame(()=>{var P;(P=document.getElementById(O))==null||P.scrollIntoView({block:"start"})})},[]),ke.useEffect(()=>{const O=d.current,P=c.current;if(!O||!P)return;const A=O,L=P;let N=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(qs);const U=m.current;U&&(U.style.height="0px");return}let T;return(async()=>{if(await X3(),N)return;const U=Iu(),k=Math.max(320,A.clientWidth||window.innerWidth),G=Math.max(1,A.clientHeight||window.innerHeight),q=[],fe=[],ue=[],X=new Float64Array(rn).fill(-1);jl.forEach((ce,Me)=>{const Le=rn-1-Me,Ge=jl[Le],Re=Cx(Ge,Le,U,k,G,x.current,E.current,C.current);ue.push(Re);const mt=vC(Re);q.push(mt);const rt=Ju,zt=rt*mm/gm,sn=new Li(new Qs(zt,rt),mt);sn.position.set(0,0,-Me*ua),sn.renderOrder=Me,fe.push(sn)});const z=wx(U,k,G),H=new Qu({map:z,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Ra}),$=z.image.height/z.image.width,{w:me,h:ye}=Qp(k,G,$),I=new Li(new Qs(me,ye),H);I.position.set(0,0,-(rn-1)*ua+.05),I.renderOrder=T3;const K=new ib,Se=new ji(Wo,1,.08,120),Ne=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,we=new MR({antialias:!Ne,alpha:!1,powerPreference:"high-performance"});we.setPixelRatio(Iu()),we.outputColorSpace=ni,we.sortObjects=!0,A.appendChild(we.domElement),Dx(z,we);const ne=new Wl;fe.forEach(ce=>ne.add(ce)),ne.add(I),K.add(ne);const be=new Ji({uniforms:{uStrength:{value:0}},vertexShader:B3,fragmentShader:F3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:rp}),ve=new Li(new Qi,be);ve.frustumCulled=!1,ve.renderOrder=yx,ve.visible=!1,K.add(ve);let Ie=null,nt=null,Xe=null,yt=-1,ut=bx(window.innerWidth),dt=ut.w,ht=ut.h;const pt=document.createElement("canvas");pt.width=dt,pt.height=ht;const Ft=pt.getContext("2d",{alpha:!1,desynchronized:!0});function ln(ce,Me){N||!Ft||!Ie||ce===0&&yt<0&&(Ft.drawImage(Me,0,0,dt,ht),Ie.needsUpdate=!0,yt=0)}let Zt=Ax(ut,ln);function gn(ce){const Me=Zt.frames[ce];if(Me)return Me;for(let Le=1;Le<12;Le+=1){const Ge=Zt.frames[ce-Le];if(Ge)return Ge;const Re=Zt.frames[ce+Le];if(Re)return Re}return null}function Yt(ce){if(!Ft||!Ie)return;const Me=P3(ce);if(Me===yt)return;const Le=gn(Me);Le&&(Ft.drawImage(Le,0,0,dt,ht),Ie.needsUpdate=!0,yt=Me)}function dn(ce){const Me=bx(ce);Me.dir!==ut.dir&&(Zt.cancel(),ut=Me,dt=Me.w,ht=Me.h,pt.width=dt,pt.height=ht,yt=-1,Ft&&(Ft.fillStyle="#000",Ft.fillRect(0,0,dt,ht),Ie&&(Ie.needsUpdate=!0)),Zt=Ax(ut,ln),j())}Ft&&(Ft.fillStyle="#000",Ft.fillRect(0,0,dt,ht),Ie=new fm(pt),Ie.colorSpace=ni,Ie.minFilter=yn,Ie.magFilter=yn,Ie.generateMipmaps=!1,nt=new Qu({map:Ie,depthTest:!1,depthWrite:!1,toneMapped:!1}),Xe=new Li(new Qs(1,1),nt),Xe.frustumCulled=!1,Xe.renderOrder=R3,Xe.position.set(0,0,-Ex),Se.add(Xe),K.add(Se),Yt(PS[0]));function j(){if(!Xe)return;const ce=Ex,Me=Wo*Math.PI/180,Le=2*Math.tan(Me/2)*ce,Ge=Le*Se.aspect,Re=dt/ht;Ge/Math.max(1e-6,Le)>Re?Xe.scale.set(Ge,Ge/Re,1):Xe.scale.set(Le*Re,Le,1)}const qt=-(rn-1)*ua,It=-.1*ua,B=qt+$s+It,b=B-wS;function J(ce){const Me=rn-1,Le=Ht.clamp(ce,0,Me);return-(Me-Le)*ua+$s+It}let ee=Math.max(1,A.clientHeight||window.innerHeight),de=!1,De=window.innerWidth,Fe=!1,pe=!1;function ge(){return Math.max(1,window.innerHeight)}function Oe(ce){return Fe?ce>Y3&&(Fe=!1):q3(ce)&&(Fe=!0),Fe}function Ye(){const ce=m.current;if(!ce)return;const{totalPx:Me}=Po(ee),Le=ee*_x,Re=`${Math.max(Math.ceil(Me+Le+ee*$h+32-vx),Math.ceil(ee*1.08))}px`;ce.style.height!==Re&&(ce.style.height=Re)}function He(){var zt;const ce=Math.max(320,A.clientWidth||window.innerWidth),Me=Math.max(1,A.clientHeight||ee),Le=Iu();ue.forEach((sn,Bt)=>{sn.dispose();const nn=rn-1-Bt,gt=Cx(jl[nn],nn,Le,ce,Me,x.current,E.current,C.current);ue[Bt]=gt,q[Bt].uniforms.uMap.value=gt}),(zt=H.map)==null||zt.dispose();const Ge=wx(Le,ce,Me);H.map=Ge,H.needsUpdate=!0,Dx(Ge,we);const Re=Ge.image.height/Ge.image.width,{w:mt,h:rt}=Qp(ce,Me,Re);I.geometry.dispose(),I.geometry=new Qs(mt,rt)}function Be(){const ce=A.clientWidth,Me=A.clientHeight;ce<2||Me<2||(dn(window.innerWidth),Se.aspect=ce/Me,Se.updateProjectionMatrix(),we.setPixelRatio(Iu()),we.setSize(ce,Me,!1),j(),He(),de||Ye())}function it(){de=!1,ee=ge(),De=window.innerWidth,Be()}Be(),requestAnimationFrame(()=>{N||He()});let Qe=null;function lt(){if(N||Qe)return!1;const ce=Math.max(1,ee),{cardPx:Me,titlePx:Le,totalPx:Ge}=Po(ce),Re=L.getBoundingClientRect(),mt=Math.max(1,L.offsetHeight-ce),rt=Ht.clamp(-Re.top,0,mt),zt=ce*_x,sn=Ge+zt,Bt=Tx(rt,Le,Me,Ge,sn),nn=Math.max(.08,$u-Bt),gt=Bu()??L.offsetTop+mt,St=Math.max(.1,y.current);Qe={startMs:performance.now(),startBgSec:Bt,startScrollY:window.scrollY,endScrollY:gt,durationMs:nn/St*1e3,camZ:Se.position.z};const hn=u.current;return hn&&(hn.style.setProperty("--intro-ui-opacity","0"),hn.classList.contains("flow-intro__sticky--exit")&&(hn.style.transition="none",hn.classList.remove("flow-intro__sticky--exit"),hn.offsetWidth,hn.style.transition="")),!0}v.current=lt;let Y=0;function Ue(){var Hr,lc;if(N)return;if(Y=requestAnimationFrame(Ue),Qe){const At=Qe,Vn=Math.min(1,(performance.now()-At.startMs)/At.durationMs),Fi=as(Vn);Yt(Ht.lerp(At.startBgSec,$u,Vn)),j(),Se.position.set(0,0,At.camZ),Se.lookAt(0,0,At.camZ-$s),fe.forEach((Mi,Jn)=>{const ia=q[Jn];ia.uniforms.uOpacity.value=0,ia.uniforms.uWipe.value=1,Mi.visible=!1}),H.opacity=0,I.visible=!1,ve.visible=!1,be.uniforms.uStrength.value=0,js(Ht.lerp(At.startScrollY,At.endScrollY,Fi));let In=0;Vn>np&&(In=as((Vn-np)/Math.max(1e-6,1-np))),u.current&&(u.current.style.setProperty("--intro-ui-opacity","0"),u.current.style.setProperty("--intro-tagline-opacity","0")),we.domElement.style.opacity=String(1-In),document.body.classList.add(qs),we.render(K,Se),Vn>=1&&(Qe=null,Rx(),window.setTimeout(()=>{h.current=!1},100));return}const ce=ge(),Me=document.getElementById("hero"),Le=Me?Me.getBoundingClientRect().top:0,Ge=Me?Oe(Le):!0,{totalPx:Re}=Po(ee),mt=L.getBoundingClientRect(),rt=Math.max(1,L.offsetHeight-ee),zt=Ht.clamp(-mt.top,0,rt);!Ge&&zt<=Re?(de=!1,Math.abs(ce-ee)>tp&&(ee=ce,Ye())):de=!0;const Bt=ee,{cardPx:nn,titlePx:gt,totalPx:St}=Po(Bt),hn=Math.max(1,L.offsetHeight-Bt),Et=Ht.clamp(-mt.top,0,hn),fi=Math.min(Et,St),ta=Math.max(1,St),na=Bt*DS,Ii=Bt*LS,ds=na+Ii,ir=Et-St,ma=as(Ht.clamp(ir/Math.max(1,na),0,1)),Ia=as(Ht.clamp((ir-na)/Math.max(1,Ii),0,1)),Ur=A.clientWidth,Or=A.clientHeight,hs=Math.max(1,gt),di=fi<hs,Bi=di?Ht.clamp(fi/hs,0,1):0,Zo=Math.max(0,fi-hs),ar=Math.max(1,nn),ga=Ht.clamp(Zo/ar,0,1)*(rn-1),Pr=uf(Ur,Or),rc=FS(Ur,Or,C.current),ps=di?Ht.lerp(b,B,Bi):J(ga),ms=pC(nn,Bt),oc=mC(hs,Bt),Wn=gC(Bi,oc),_a=rn-1,Ir=St+ds;Yt(Tx(Et,hs,nn,St,Ir)),j(),Se.position.set(0,0,ps),Se.lookAt(0,0,ps-$s);const va=St+ds;let Br=0;if(hn>va&&Et>=va){const At=Math.max(1,hn-va);Br=as(Ht.clamp((Et-va)/At,0,1))}const Ko=Math.max(1,ds+Bt*$h),Qo=Et<=ta?Ht.clamp(Et/ta,0,1):1+Ht.clamp(ir/Ko,0,1)*.45;if(xC(Et,hn)){const At=MC(Qo,ps,SC(Ur)),Fi=new gb(At,!1,"centripetal").getSpacedPoints(x3);if(Fi.length>=2){const In=yC(Fi,S3,M3,y3),Mi=ve.geometry.getAttribute("position"),Jn=In.getAttribute("position");if(Mi&&Jn&&Mi.count===Jn.count&&((Hr=ve.geometry.getIndex())==null?void 0:Hr.count)===((lc=In.getIndex())==null?void 0:lc.count)&&Mi&&Jn){Mi.array.set(Jn.array),Mi.needsUpdate=!0;const gs=ve.geometry.getAttribute("normal"),xa=In.getAttribute("normal");gs&&xa&&(gs.array.set(xa.array),gs.needsUpdate=!0);const Jo=ve.geometry.getAttribute("uv"),cc=In.getAttribute("uv");Jo&&cc&&(Jo.array.set(cc.array),Jo.needsUpdate=!0),In.dispose()}else ve.geometry.dispose(),ve.geometry=In;ve.visible=!0;const Gr=di||ga<Ht.clamp(ms,0,.999);ve.renderOrder=Gr?A3:yx,be.uniforms.uStrength.value=.36*(1-Br*.92)}else ve.visible=!1,be.uniforms.uStrength.value=0}else ve.visible=!1,be.uniforms.uStrength.value=0;const sr=Math.floor((rn-1)/2),zr=performance.now(),ff=Ht.clamp(ms,0,.999);for(let At=0;At<rn;At++){if(di||ga<=At+1e-5||ga<At+ff){X[At]=-1;continue}X[At]<0&&(ga>=At+1-1e-5?X[At]=zr-xx:X[At]=zr)}if(fe.forEach((At,Vn)=>{const Fi=-Vn*ua,In=rn-1-Vn,Mi=X[In];let Jn=Mi<0?0:as(Ht.clamp((zr-Mi)/xx,0,1));!di&&In===rn-1&&Ia>0&&(Jn=Math.max(Jn,Ia));let{opacity:ia}=_C(ga,In,ms,Jn);di&&Vn===_a&&(ia*=Wn.lastCardOp,Jn=0);let Gr=1,gs=0;!di&&In===rn-1&&ia>.02&&ma>0&&(Gr=1-.28*ma,gs=-ua*.32*ma),At.position.set(0,0,Fi+gs),At.scale.setScalar(rc*Gr);const xa=q[Vn];xa.uniforms.uOpacity.value=ia,xa.uniforms.uWipe.value=Jn,xa.depthWrite=ia>=.995&&Jn<.02,At.visible=ia>.003&&Jn<.997,At.renderOrder=Vn<=sr?US+Vn:b3+(Vn-sr-1)}),I.position.set(0,0,-_a*ua+.05),I.scale.setScalar(Pr),H.opacity=di?Wn.titleOp:0,I.visible=H.opacity>.003,!h.current){g.current?pe=!1:Ge?pe=!0:pe&&Et<St-Bt*.25&&(pe=!1),document.body.classList.toggle(qs,!pe);const At=u.current;At!=null&&At.classList.contains("flow-intro__sticky--exit")&&!Ge&&(At.style.transition="none",At.classList.remove("flow-intro__sticky--exit"),At.offsetWidth,At.style.transition="")}if(!de){const At=ds+Bt*$h+32-vx,Vn=Math.max(Math.ceil(St+At),Math.ceil(Bt*1.08)),Fi=m.current;if(Fi){const In=`${Vn}px`;Fi.style.height!==In&&(Fi.style.height=In)}}const df=1-Br*.96;u.current&&(u.current.style.setProperty("--intro-ui-opacity",String(df)),u.current.style.setProperty("--intro-tagline-opacity","1"));const hf=String(1-Br);we.domElement.style.opacity=hf,we.render(K,Se)}Ue();let _e=0,Pe=0,Ce=!1,Te="page",je=!1,qe=!1,Dt=!1,Tt=0,An=0,Hn=0,$i=!1,Si=!1,fs=0,Oa=window.scrollY,ai={kind:"title"};const vn=8;function Rn(){Pe&&(window.clearTimeout(Pe),Pe=0)}function Gn(){_e&&(cancelAnimationFrame(_e),_e=0),Ce=!1,Te="page",g.current=!1}function Cn(){Gn(),Rn(),je=!1}_.current=Cn;function ci(){var St;const ce=Math.max(1,ee),{cardPx:Me,titlePx:Le,totalPx:Ge}=Po(ce),Re=L.getBoundingClientRect(),mt=Math.max(1,L.offsetHeight-ce),rt=Ht.clamp(-Re.top,0,mt),zt=document.getElementById("hero"),sn=zt?Oe(zt.getBoundingClientRect().top):!0,Bt=((St=u.current)==null?void 0:St.getBoundingClientRect().bottom)??ce,gt=Math.max(0,Math.min(rt,Ge)-Le)/Math.max(1,Me)*(rn-1);return{innerH:ce,cardPx:Me,titlePx:Le,totalPx:Ge,scrolledPx:rt,landed:sn,stickyBottom:Bt,depthT:gt}}function Pn(ce=ci()){return fC(ce.scrolledPx,ce.titlePx,ce.cardPx,ce.totalPx,ce.landed,ce.stickyBottom,ce.innerH)}function Pa(){return Ce||Pn()}function pa(ce){let Me=ce.deltaY;return ce.deltaMode===1?Me*=16:ce.deltaMode===2&&(Me*=window.innerHeight),Me}function Ui(){Rn(),je=!0,Pe=window.setTimeout(()=>{Pe=0,je=!1},tC)}function ea(ce,Me){return ce.kind==="title"?lC(L):ce.kind==="card"?cC(L,ce.idx,Me.innerH):Bu()}function ui(ce){if(N||h.current||Ce)return;const Me=ci(),Le=ce.kind==="hero";if(!Le&&!Pn(Me))return;const Ge=ea(ce,Me);if(Ge==null)return;const Re=window.scrollY,mt=Ge-Re;if(ai=ce.kind==="hero"?{kind:"card",idx:rn-1}:ce,Math.abs(mt)<BS(Me.innerH)){js(Ge),Ui();return}Ce=!0,Te=Le?"exit":"page",g.current=Le,je=!0;const rt=Le?rC(window.innerWidth):sC(window.innerWidth),zt=performance.now(),sn=nn=>{if(js(nn),Ce=!1,Te="page",_e=0,!Le){g.current=!1,Ui();return}g.current=!1,requestAnimationFrame(()=>{const gt=Bu();gt!=null&&js(gt),requestAnimationFrame(()=>{const St=Bu();St!=null&&js(St),Ui()})})},Bt=nn=>{if(N||h.current){Ce=!1,Te="page",_e=0,g.current=!1;return}if(Te==="page"&&!Pn(ci())){Gn(),je=!1;return}const gt=Math.min(1,(nn-zt)/rt);js(Re+mt*as(gt)),gt<1?_e=requestAnimationFrame(Bt):sn(Ge)};_e=requestAnimationFrame(Bt)}function Oi(ce,Me){const Le=rn-1,Ge=Me>0?1:-1,Re=ap(ce.scrolledPx,ce.titlePx,ce.depthT,ce.innerH);if(Re.kind==="title")return Ge<0?null:{kind:"card",idx:0};const mt=Re.idx+Ge;return mt<0?{kind:"title"}:mt>Le?Ge>0?{kind:"hero"}:{kind:"card",idx:Le}:{kind:"card",idx:mt}}function Pi(ce){const Me=ci();if(!Pn(Me)&&!(Ce&&Te==="exit"))return!1;const Le=Oi(Me,ce);return Le===null?!1:(ui(Le),!0)}function _n(ce,Me){return Oi(ce,Me)===null}function nr(ce){if(h.current||Qe){ce.preventDefault();return}if(!Pa())return;const Me=pa(ce),Le=ci();if(!Pn(Le)&&Te!=="exit")return;const Ge=Oi(Le,Me>0?1:-1);if(Ge===null){(Ce||je)&&Cn();return}if(Ce||je){ce.preventDefault();return}if(Math.abs(Me)<$3){ce.preventDefault();return}ce.preventDefault(),ui(Ge)}function R(ce){var Me;if(!(h.current||Qe)&&(An=((Me=ce.touches[0])==null?void 0:Me.clientY)??An,Tt=An,Hn=window.scrollY,qe=!1,Dt=Ce||Pn(),Dt&&!Ce)){const Le=ci();ai=ap(Le.scrolledPx,Le.titlePx,Le.depthT,Le.innerH)}}function Z(ce){var Le;if(h.current||Qe){ce.preventDefault();return}const Me=((Le=ce.touches[0])==null?void 0:Le.clientY)??Tt;if(!qe){if(!Dt&&(Ce||Pn())&&(Dt=!0,An=Me,Tt=Me,Hn=window.scrollY),!Dt)return;const Ge=An-Me;if(Math.abs(Ge)<vn){Tt=Me;return}const Re=Ge>0?1:-1,mt=ci();if(!Ce&&!Pn(mt)){Dt=!1,Tt=Me;return}if(_n(mt,Re)){Dt=!1,Cn(),Tt=Me;return}Ce&&Cn(),qe=!0,Dt=!1,Hn=window.scrollY,ai=ap(mt.scrolledPx,mt.titlePx,mt.depthT,mt.innerH)}ce.preventDefault(),Tt=Me,Ce||js(Hn)}function oe(){if(h.current||Qe){qe=!1,Dt=!1;return}const ce=qe,Me=Dt,Le=An-Tt;if(qe=!1,Dt=!1,Ce)return;if(!ce){Me&&Cn();return}if(!Pn())return;if(Math.abs(Le)<eC){ui(ai);return}const Ge=Le>0?1:-1,Re=ci();if(_n(Re,Ge)){Cn();return}Pi(Ge)}function ie(ce){ce.pointerType!=="touch"&&ce.button===0&&($i=!0,Si=!1,fs=window.scrollY,Pn()&&Gn())}function ae(ce){if(ce.pointerType==="touch"||!$i)return;if($i=!1,!Si||!Pn()){Si=!1;return}const Me=ci(),Le=window.scrollY>=fs?1:-1,Ge=Oi(Me,Le);if(Si=!1,Ge===null){Cn();return}ui(Ge)}function Ve(ce){ce.pointerType!=="touch"&&($i=!1,Si=!1)}function Ze(ce){ce.button===0&&(h.current||Qe||Si||Ce||je||Pn()&&(ce.preventDefault(),Pi(1)))}function ze(ce){var Re;const Me=ce.target;if((Re=Me==null?void 0:Me.closest)!=null&&Re.call(Me,"input, textarea, select, [contenteditable=true]"))return;if(h.current||Qe){(ce.key==="ArrowDown"||ce.key==="ArrowRight"||ce.key==="ArrowUp"||ce.key==="ArrowLeft"||ce.key==="Enter"||ce.key===" ")&&ce.preventDefault();return}const Le=ce.key==="ArrowDown"||ce.key==="ArrowRight"||ce.key==="Enter"||ce.key===" ",Ge=ce.key==="ArrowUp"||ce.key==="ArrowLeft";if(!(!Le&&!Ge)){if(Ce||je){ce.preventDefault();return}Pn()&&(ce.preventDefault(),Pi(Le?1:-1))}}function Je(){const ce=window.scrollY,Me=ce-Oa;Oa=ce,$i&&Math.abs(Me)>.5&&(Si=!0),Ce&&Te==="page"&&!Pn()&&Cn()}function Ke(){Cn(),it()}function at(){Cn();const ce=ge(),Me=window.innerWidth,Le=Math.abs(ce-ee),Ge=Math.abs(Me-De)>1;if(de){Le>tp||Ge?it():Be();return}ee=ce,De=Me,Be()}function ft(){Cn();const ce=ge();Math.abs(ce-ee)<=tp||(de?it():(ee=ce,De=window.innerWidth,Be()))}window.addEventListener("wheel",nr,{passive:!1}),window.addEventListener("touchstart",R,{passive:!0}),window.addEventListener("touchmove",Z,{passive:!1}),window.addEventListener("touchend",oe,{passive:!0}),window.addEventListener("touchcancel",oe,{passive:!0}),window.addEventListener("pointerdown",ie,{passive:!0}),window.addEventListener("pointerup",ae,{passive:!0}),window.addEventListener("pointercancel",Ve,{passive:!0}),window.addEventListener("scroll",Je,{passive:!0}),window.addEventListener("resize",at,{passive:!0}),window.addEventListener("orientationchange",Ke,{passive:!0}),A.addEventListener("click",Ze),window.addEventListener("keydown",ze);const et=window.visualViewport;et&&et.addEventListener("resize",ft);const Ut=new ResizeObserver(Be);Ut.observe(A),T=()=>{var ce;Cn(),_.current=null,v.current=null,Qe=null,cancelAnimationFrame(Y),document.body.classList.remove(qs),window.removeEventListener("wheel",nr),window.removeEventListener("touchstart",R),window.removeEventListener("touchmove",Z),window.removeEventListener("touchend",oe),window.removeEventListener("touchcancel",oe),window.removeEventListener("pointerdown",ie),window.removeEventListener("pointerup",ae),window.removeEventListener("pointercancel",Ve),window.removeEventListener("scroll",Je),window.removeEventListener("resize",at),window.removeEventListener("orientationchange",Ke),A.removeEventListener("click",Ze),window.removeEventListener("keydown",ze),et&&et.removeEventListener("resize",ft),Ut.disconnect(),q.forEach(Me=>{Me.dispose()}),ue.forEach(Me=>Me.dispose()),(ce=H.map)==null||ce.dispose(),H.dispose(),fe.forEach(Me=>Me.geometry.dispose()),I.geometry.dispose(),ve.geometry.dispose(),be.dispose(),K.remove(ve),Xe&&(Se.remove(Xe),Xe.geometry.dispose()),nt==null||nt.dispose(),Ie==null||Ie.dispose(),Zt.cancel(),we.dispose(),A.contains(we.domElement)&&A.removeChild(we.domElement)},N&&T()})(),()=>{var U;N=!0,(U=_.current)==null||U.call(_),_.current=null,v.current=null,document.body.classList.remove(qs),T==null||T()}},[]),D.jsxs("section",{ref:c,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:u,className:"flow-intro__sticky",children:[D.jsx("div",{ref:d,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(pm,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:S,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(s3,{text:r3,className:"flow-intro__tagline",scrollerRef:c,effect:o})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:jl.map((O,P)=>D.jsxs("p",{children:["Step ",String(P+1).padStart(2,"0"),": ",O.verb,". ",O.description]},O.verb))})]}),D.jsx("div",{ref:m,className:"flow-intro__spacer","aria-hidden":!0})]})}const bC=280,TC=5/4,AC=3800,RC={discover:ql,copy:XR};function CC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function wC({stepIndex:a,kind:e,className:i,width:r=bC}){const o=ke.useRef(null),c=e??TS(a),u=Math.round(r*TC);return ke.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*x),C=Math.round(u*x);(d.width!==E||d.height!==C)&&(d.width=E,d.height=C);const y=d.getContext("2d");y&&ZR(y,c,E,C,m)};g();const _=RC[c];_&&_>1&&!CC()&&(h=setInterval(()=>{m=(m+1)%_,g()},AC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Lx=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function DC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Lx.map((a,e)=>{const i=e===Lx.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const LC=/^(action)$/i;function NC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>LC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function zS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:NC(e)})]})}var UC=Vx();function OC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function PC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,OC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Nx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=PC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let _=1;_<=a.length;_++){d.setStart(c,0),d.setEnd(c,_);const v=d.getClientRects().length;v>g&&g>0&&(m.push(a.slice(h,_-1)),h=_-1),g=v}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const IC=40,BC=5,FC="typewriter-reveal",Ux=1e3,zC=4e3;function Ox(){return Ux+Math.random()*(zC-Ux)}function HS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function HC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),_=ke.useRef(null),v=ke.useRef(null),x=ke.useRef(null),E=ke.useRef("idle"),[C,y]=ke.useState("idle");g.current=m;const S=ke.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),O=ke.useCallback(()=>{var U;S(),v.current=null,x.current=null,E.current="complete",y("complete"),(U=g.current)==null||U.call(g)},[S]),P=ke.useCallback(U=>{S(),v.current=Date.now()+U,_.current=setTimeout(O,U)},[S,O]);ke.useLayoutEffect(()=>{E.current="idle",y("idle"),x.current=null,v.current=null,S()},[a,i,r,S]),ke.useLayoutEffect(()=>{var H,$,me;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(S(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const ye=x.current??Ox();x.current=null,P(ye);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(HS()){(H=g.current)==null||H.call(g);return}const U=h.current;if(!U||!a){($=g.current)==null||$.call(g);return}U.style.width="",U.offsetWidth;const k=Math.max(a.length/i*1e3,120),G=Math.max(a.length,1),q=U.closest(".typewriter-block"),fe=(q==null?void 0:q.clientWidth)??((me=U.parentElement)==null?void 0:me.clientWidth)??0;U.style.whiteSpace="nowrap",U.style.width="auto";const ue=U.scrollWidth,X=fe>0?Math.min(ue,fe):ue;U.style.width="0",U.style.setProperty("--tw-duration",`${k}ms`),U.style.setProperty("--tw-target-width",`${X}px`),U.style.setProperty("--tw-steps",String(G)),U.style.setProperty("--tw-cursor-width",`${r}px`),U.offsetWidth,E.current="animating",y("animating");const z=ye=>{if(ye.animationName===FC){if(d){U.style.width=`${X}px`,E.current="cursor-hold",y("cursor-hold"),P(Ox());return}U.style.width="",O()}};return U.addEventListener("animationend",z),()=>{U.removeEventListener("animationend",z)}},[o,u,O,d,P,i,a,c,S,r]);const A=C==="animating",L=C==="cursor-hold",N=C==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",A?"is-animating":"",L?"is-cursor-hold":"",u||N?"is-complete":"",!o&&!c&&!u&&!N&&(A||L)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:T,children:e??a})}function vm({text:a,children:e,className:i,speed:r=IC,cursorWidth:o=BC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),[_,v]=ke.useState([]),[x,E]=ke.useState(0),[C,y]=ke.useState(0),[S,O]=ke.useState(!1),[P,A]=ke.useState(!1),L=HS();g.current=m;const N=ke.useCallback(()=>{const ue=h.current;if(!ue||!a)return v([]),E(0),A(!0),!0;const X=ue.clientWidth;if(X<1)return!1;const H=(c==="auto"||c===!0)&&!L,{lines:$,blockHeight:me}=Nx(a,X,ue,H);let ye=me;if(!H){const I=Nx(a,X,ue,!0);ye=Math.max(me,I.blockHeight)}return v($),E(ye),A(!0),!0},[a,c,L]);ke.useLayoutEffect(()=>{var ue,X;if(y(0),O(!1),A(!1),v([]),E(0),L){(ue=g.current)==null||ue.call(g),A(!0);return}if(!a){(X=g.current)==null||X.call(g),A(!0);return}if(!N()){const z=new ResizeObserver(()=>{N()&&z.disconnect()});return h.current&&z.observe(h.current),()=>z.disconnect()}},[a,c,N,L]);const F=ke.useCallback(ue=>{var z;const X=ue>=_.length-1;UC.flushSync(()=>{if(!X){y(ue+1);return}O(!0)}),X&&((z=g.current)==null||z.call(g))},[_]),U=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",S?"is-complete":"",P?"":"is-measuring",L?"is-static":""].filter(Boolean).join(" "),k={...!S&&!L&&x>0?{height:x,minHeight:x}:void 0},G=e??a;if(!P)return D.jsx("span",{ref:h,className:U,style:k,children:G});if(L||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:G});if(S)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:G});const q=_.length>0?_:[a],fe=!!e&&q.length<=1;return D.jsxs("span",{ref:h,className:U,style:k,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:G}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:q.map((ue,X)=>D.jsx(HC,{text:ue,content:fe?e:void 0,speed:r,cursorWidth:o,waiting:X>C,active:u&&X===C,completed:X<C,holdCursor:d&&X===q.length-1,onComplete:X===C?()=>F(X):void 0},`${X}-${ue}`))})]})}function GC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xm(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=ke.useState(!1);return ke.useLayoutEffect(()=>{if(r)return;if(GC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function VC(a){return String(a).padStart(2,"0")}function ef(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const kC=1600,XC=1500,Px=5e3,WC=7e3;function YC(){return Px+Math.random()*(WC-Px)}function qC({text:a,active:e}){const[i,r]=ke.useState(!1),[o,c]=ke.useState(0),u=ke.useRef(null),d=`> ${a}`,m=ke.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);ke.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(ef()){r(!0);return}const g=window.setTimeout(()=>r(!0),XC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=ke.useCallback(()=>{ef()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},YC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(vm,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function jC(){const[a,e]=ke.useState(()=>new Set),[i,r]=ke.useState(!1),o=ke.useRef(new Map),c=ke.useRef(null),u=xm(c,{amount:.35}),d=Hs.steps.every(_=>a.has(`step-${_.n}`));ke.useLayoutEffect(()=>{if(ef()){e(new Set(Hs.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const E=new Set(x);for(const C of v){const y=C.target.dataset.flowKey;y&&C.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),ke.useLayoutEffect(()=>{if(ef())return;if(!d){r(!1);return}const _=window.setTimeout(()=>{r(!0)},kC);return()=>window.clearTimeout(_)},[d]);const m=ke.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),h=ke.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Hs.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Hs.title}),D.jsx("div",{className:"flow__chips",children:Hs.chips.map(_=>D.jsx(zS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Hs.steps.map((_,v)=>{const x=`step-${_.n}`,E=a.has(x);return D.jsxs("article",{ref:C=>m(x,C),"data-flow-key":x,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(x),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",VC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(qC,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:On.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(DC,{}):D.jsx(wC,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(vm,{text:Hs.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Hs.outcome})})]})})}function ZC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(pm,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:cv.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Fu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:On.docs,children:"Docs"}),D.jsx("a",{href:On.manifesto,children:"Manifesto"}),D.jsx("a",{href:On.discord,children:"Discord"}),D.jsx("a",{href:On.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:cv.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const Ix="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",GS=50,Bx=3500,Fx=4e3,KC=1400,QC=1200,JC=4500;function VS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zx(a){return/[A-Za-z0-9]/.test(a)}function $C(){return Ix[Math.floor(Math.random()*Ix.length)]??"?"}function ew(a){return Math.random()<.5?$C():a}function kS(a,e,i){const r=[];for(let h=0;h<a.length;h++)zx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!zx(g)||d.has(h)?m+=g:m+=ew(g)}return m}function tw(a){return typeof a=="boolean"?{enabled:a,decryptMs:Bx,pauseMs:Fx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Bx,pauseMs:a.pauseMs??Fx}}function Kn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=tw(e),c=r+o,[u,d]=ke.useState(a);return ke.useEffect(()=>{if(!i||VS()){d(a);return}let m=Date.now();const h=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),d(kS(a,v,r))};h();const g=setInterval(h,GS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function Hx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??KC,o=e.stepDecryptMs??QC,c=e.holdMs??JC,u=a.join("\0"),[d,m]=ke.useState(a),[h,g]=ke.useState(()=>a.map(()=>!1));return ke.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||VS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let E=Date.now();const C=()=>{const S=Date.now();let O=S-E;O>=x&&(E=S,O=0);const P=[],A=[];for(let L=0;L<_.length;L++){const N=_[L]??"",F=L*r,T=O>=F;if(A.push(T),!T){P.push(N);continue}const U=O-F;P.push(kS(N,U,o))}m(P),g(A)};C();const y=setInterval(C,GS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function nw(){const a=[...lv,...lv];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(zS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function iw({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=zs.headline,c=Kn(zs.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:QR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Kp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Kp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:zs.eyebrow.href,"aria-label":`${zs.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Ho,{href:zs.primaryCta.href,variant:"primary",children:zs.primaryCta.label}),D.jsx(Ho,{href:zs.secondaryCta.href,variant:"secondary",children:zs.secondaryCta.label})]})]}),D.jsx(nw,{})]})}function aw(){const a=Kn(ph.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:ph.href,"aria-label":ph.text,children:a})})}const li={decryptMs:2800,pauseMs:5200},Gx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function XS(a){return String(a+1).padStart(2,"0")}function sw(a,e,i,r){return`${XS(a)}  ${e}  ·  ${i}  ·  ${r}`}function rw(a,e,i){return`${XS(a)}  ${e}  ·  ${i}`}function ow(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function vi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function fn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function lw({meta:a}){const e=Kn(a.name,li),i=Kn(a.tx,li),r=Kn(a.hash,li),o=Kn(a.chain,li),c=Kn(a.verified,li),u=Kn(a.rep,li),d=Kn(a.portable,li),m=Kn(a.next,li),h=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,E=`hash ${r}`,C=`chain ${a.chain}`,y=`chain ${o}`,S=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,O=`verified ${c} · rep ${u} · portable ${d}`,P=`next ${a.next}`,A=`next ${m}`,L=`rep ${a.rep} · portable ${a.portable}`,N=`rep ${u} · portable ${d}`,F=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(vi,{label:"tx",value:a.tx,display:i}),D.jsx(vi,{label:"hash",value:a.hash,display:r}),D.jsx(vi,{label:"chain",value:a.chain,display:o}),D.jsx(vi,{label:"verified",value:a.verified,display:c}),D.jsx(vi,{label:"rep",value:a.rep,display:u}),D.jsx(vi,{label:"portable",value:a.portable,display:d}),D.jsx(vi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(fn,{value:h,display:g}),D.jsx(fn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(fn,{value:x,display:E}),D.jsx(fn,{value:C,display:y}),D.jsx(fn,{value:S,display:O}),D.jsx(fn,{value:P,display:A})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(fn,{value:h,display:g}),D.jsx(fn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(fn,{value:x,display:E}),D.jsx(fn,{value:C,display:y}),D.jsx(fn,{value:F,display:T}),D.jsx(fn,{value:L,display:N}),D.jsx(fn,{value:P,display:A})]})]})}function cw({meta:a}){const e=Kn(a.tx,li),i=Kn(a.from,li),r=Kn(a.to,li),o=Kn(a.asset,li),c=Kn(a.amt,li),u=Kn(a.chain,li),d=Kn(a.status,li),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,C=`${o} ${c}`,y=`status ${a.status}`,S=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(vi,{label:"tx",value:a.tx,display:e}),D.jsx(vi,{label:"from",value:a.from,display:i}),D.jsx(vi,{label:"to",value:a.to,display:r}),D.jsx(vi,{label:"asset",value:a.asset,display:o}),D.jsx(vi,{label:"amt",value:a.amt,display:c}),D.jsx(vi,{label:"chain",value:a.chain,display:u}),D.jsx(vi,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(fn,{value:g,display:_}),D.jsx(fn,{value:m,display:h}),D.jsx(fn,{value:v,display:x}),D.jsx(fn,{value:y,display:S})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(fn,{value:g,display:_}),D.jsx(fn,{value:m,display:h}),D.jsx(fn,{value:E,display:C}),D.jsx(fn,{value:a.chain,display:u}),D.jsx(fn,{value:y,display:S})]})]})}function uw({meta:a}){const e=ke.useRef(null),i=xm(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?ow(r):null,c=ke.useMemo(()=>{const h=a.steps.map((g,_)=>sw(_,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=ke.useMemo(()=>{const h=a.steps.map((g,_)=>rw(_,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=Hx(c,{...Gx,enabled:i}),m=Hx(u,{...Gx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(fn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(fn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(fn,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function fw({meta:a}){return a.kind==="identity"?D.jsx(lw,{meta:a}):a.kind==="chain"?D.jsx(uw,{meta:a}):D.jsx(cw,{meta:a})}function dw({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Ho,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(fw,{meta:a.meta})]})}function hw(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:mh.kicker}),D.jsx("h2",{className:"section-title personas__title",children:mh.title}),D.jsx("div",{className:"personas__grid",children:mh.items.map(a=>D.jsx(dw,{persona:a},a.title))})]})})}function pw(){const[a,e]=ke.useState(!1),[i,r]=ke.useState(!1),[o,c]=ke.useState("");return ke.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),ke.useEffect(()=>{const u=Fu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),ke.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(pm,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Fu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:On.docs,children:"Docs"}),D.jsx(Ho,{href:On.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Fu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:On.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function mw(){const a=ke.useRef(null),e=xm(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(vm,{text:ov.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:ov.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function gw(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(aw,{}),D.jsx(pw,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(EC,{cardAlpha:0,modalChassisAlpha:.8,cardSize:.8,subtitleFadeEffect:"fadeout",skipAnimationSpeed:1.2}),D.jsx(iw,{contentOffsetY:0,maskAlpha:.5}),D.jsx(mw,{}),D.jsx(ky,{}),D.jsx(hw,{}),D.jsx(jC,{}),D.jsx(Wy,{}),D.jsx(Vy,{})]}),D.jsx(ZC,{})]})}Hy.createRoot(document.getElementById("root")).render(D.jsx(ke.StrictMode,{children:D.jsx(gw,{})}));
