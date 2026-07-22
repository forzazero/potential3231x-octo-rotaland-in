(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var rh={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function Ny(){if(Z_)return Pl;Z_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Pl.Fragment=e,Pl.jsx=i,Pl.jsxs=i,Pl}var K_;function Uy(){return K_||(K_=1,rh.exports=Ny()),rh.exports}var D=Uy(),oh={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Oy(){if(Q_)return ft;Q_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(I,Q,Me){this.props=I,this.context=Q,this.refs=y,this.updater=Me||b}S.prototype.isReactComponent={},S.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=S.prototype;function P(I,Q,Me){this.props=I,this.context=Q,this.refs=y,this.updater=Me||b}var A=P.prototype=new O;A.constructor=P,C(A,S.prototype),A.isPureReactComponent=!0;var L=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(I,Q,Me){var Oe=Me.ref;return{$$typeof:a,type:I,key:Q,ref:Oe!==void 0?Oe:null,props:Me}}function k(I,Q){return U(I.type,Q,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function q(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Me){return Q[Me]})}var de=/\/+/g;function ue(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):Q.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,Q,Me,Oe,Ue){var ne=typeof I;(ne==="undefined"||ne==="boolean")&&(I=null);var be=!1;if(I===null)be=!0;else switch(ne){case"bigint":case"string":case"number":be=!0;break;case"object":switch(I.$$typeof){case a:case e:be=!0;break;case g:return be=I._init,z(be(I._payload),Q,Me,Oe,Ue)}}if(be)return Ue=Ue(I),be=Oe===""?"."+ue(I,0):Oe,L(Ue)?(Me="",be!=null&&(Me=be.replace(de,"$&/")+"/"),z(Ue,Q,Me,"",function(it){return it})):Ue!=null&&(G(Ue)&&(Ue=k(Ue,Me+(Ue.key==null||I&&I.key===Ue.key?"":(""+Ue.key).replace(de,"$&/")+"/")+be)),Q.push(Ue)),1;be=0;var xe=Oe===""?".":Oe+":";if(L(I))for(var Ie=0;Ie<I.length;Ie++)Oe=I[Ie],ne=xe+ue(Oe,Ie),be+=z(Oe,Q,Me,ne,Ue);else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Ie=0;!(Oe=I.next()).done;)Oe=Oe.value,ne=xe+ue(Oe,Ie++),be+=z(Oe,Q,Me,ne,Ue);else if(ne==="object"){if(typeof I.then=="function")return z(W(I),Q,Me,Oe,Ue);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(I,Q,Me){if(I==null)return I;var Oe=[],Ue=0;return z(I,Oe,"","",function(ne){return Q.call(Me,ne,Ue++)}),Oe}function ee(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Me){(I._status===0||I._status===-1)&&(I._status=1,I._result=Me)},function(Me){(I._status===0||I._status===-1)&&(I._status=2,I._result=Me)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var me=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ye={map:H,forEach:function(I,Q,Me){H(I,function(){Q.apply(this,arguments)},Me)},count:function(I){var Q=0;return H(I,function(){Q++}),Q},toArray:function(I){return H(I,function(Q){return Q})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ft.Activity=_,ft.Children=ye,ft.Component=S,ft.Fragment=i,ft.Profiler=o,ft.PureComponent=P,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ft.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},ft.cache=function(I){return function(){return I.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(I,Q,Me){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Oe=C({},I.props),Ue=I.key;if(Q!=null)for(ne in Q.key!==void 0&&(Ue=""+Q.key),Q)!T.call(Q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Q.ref===void 0||(Oe[ne]=Q[ne]);var ne=arguments.length-2;if(ne===1)Oe.children=Me;else if(1<ne){for(var be=Array(ne),xe=0;xe<ne;xe++)be[xe]=arguments[xe+2];Oe.children=be}return U(I.type,Ue,Oe)},ft.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ft.createElement=function(I,Q,Me){var Oe,Ue={},ne=null;if(Q!=null)for(Oe in Q.key!==void 0&&(ne=""+Q.key),Q)T.call(Q,Oe)&&Oe!=="key"&&Oe!=="__self"&&Oe!=="__source"&&(Ue[Oe]=Q[Oe]);var be=arguments.length-2;if(be===1)Ue.children=Me;else if(1<be){for(var xe=Array(be),Ie=0;Ie<be;Ie++)xe[Ie]=arguments[Ie+2];Ue.children=xe}if(I&&I.defaultProps)for(Oe in be=I.defaultProps,be)Ue[Oe]===void 0&&(Ue[Oe]=be[Oe]);return U(I,ne,Ue)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=G,ft.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ee}},ft.memo=function(I,Q){return{$$typeof:h,type:I,compare:Q===void 0?null:Q}},ft.startTransition=function(I){var Q=F.T,Me={};F.T=Me;try{var Oe=I(),Ue=F.S;Ue!==null&&Ue(Me,Oe),typeof Oe=="object"&&Oe!==null&&typeof Oe.then=="function"&&Oe.then(N,me)}catch(ne){me(ne)}finally{Q!==null&&Me.types!==null&&(Q.types=Me.types),F.T=Q}},ft.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ft.use=function(I){return F.H.use(I)},ft.useActionState=function(I,Q,Me){return F.H.useActionState(I,Q,Me)},ft.useCallback=function(I,Q){return F.H.useCallback(I,Q)},ft.useContext=function(I){return F.H.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I,Q){return F.H.useDeferredValue(I,Q)},ft.useEffect=function(I,Q){return F.H.useEffect(I,Q)},ft.useEffectEvent=function(I){return F.H.useEffectEvent(I)},ft.useId=function(){return F.H.useId()},ft.useImperativeHandle=function(I,Q,Me){return F.H.useImperativeHandle(I,Q,Me)},ft.useInsertionEffect=function(I,Q){return F.H.useInsertionEffect(I,Q)},ft.useLayoutEffect=function(I,Q){return F.H.useLayoutEffect(I,Q)},ft.useMemo=function(I,Q){return F.H.useMemo(I,Q)},ft.useOptimistic=function(I,Q){return F.H.useOptimistic(I,Q)},ft.useReducer=function(I,Q,Me){return F.H.useReducer(I,Q,Me)},ft.useRef=function(I){return F.H.useRef(I)},ft.useState=function(I){return F.H.useState(I)},ft.useSyncExternalStore=function(I,Q,Me){return F.H.useSyncExternalStore(I,Q,Me)},ft.useTransition=function(){return F.H.useTransition()},ft.version="19.2.7",ft}var J_;function Kp(){return J_||(J_=1,oh.exports=Oy()),oh.exports}var ke=Kp(),lh={exports:{}},Il={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Py(){return $_||($_=1,(function(a){function e(z,H){var ee=z.length;z.push(H);e:for(;0<ee;){var me=ee-1>>>1,ye=z[me];if(0<o(ye,H))z[me]=H,z[ee]=ye,ee=me;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],ee=z.pop();if(ee!==H){z[0]=ee;e:for(var me=0,ye=z.length,I=ye>>>1;me<I;){var Q=2*(me+1)-1,Me=z[Q],Oe=Q+1,Ue=z[Oe];if(0>o(Me,ee))Oe<ye&&0>o(Ue,Me)?(z[me]=Ue,z[Oe]=ee,me=Oe):(z[me]=Me,z[Q]=ee,me=Q);else if(Oe<ye&&0>o(Ue,ee))z[me]=Ue,z[Oe]=ee,me=Oe;else break e}}return H}function o(z,H){var ee=z.sortIndex-H.sortIndex;return ee!==0?ee:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,_=null,v=3,x=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function A(z){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=z)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function L(z){if(C=!1,A(z),!b)if(i(m)!==null)b=!0,N||(N=!0,q());else{var H=i(h);H!==null&&W(L,H.startTime-z)}}var N=!1,F=-1,T=5,U=-1;function k(){return y?!0:!(a.unstable_now()-U<T)}function G(){if(y=!1,N){var z=a.unstable_now();U=z;var H=!0;try{e:{b=!1,C&&(C=!1,O(F),F=-1),x=!0;var ee=v;try{t:{for(A(z),_=i(m);_!==null&&!(_.expirationTime>z&&k());){var me=_.callback;if(typeof me=="function"){_.callback=null,v=_.priorityLevel;var ye=me(_.expirationTime<=z);if(z=a.unstable_now(),typeof ye=="function"){_.callback=ye,A(z),H=!0;break t}_===i(m)&&r(m),A(z)}else r(m);_=i(m)}if(_!==null)H=!0;else{var I=i(h);I!==null&&W(L,I.startTime-z),H=!1}}break e}finally{_=null,v=ee,x=!1}H=void 0}}finally{H?q():N=!1}}}var q;if(typeof P=="function")q=function(){P(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=G,q=function(){ue.postMessage(null)}}else q=function(){S(G,0)};function W(z,H){F=S(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ee=v;v=H;try{return z()}finally{v=ee}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=v;v=z;try{return H()}finally{v=ee}},a.unstable_scheduleCallback=function(z,H,ee){var me=a.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?me+ee:me):ee=me,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ee+ye,z={id:g++,callback:H,priorityLevel:z,startTime:ee,expirationTime:ye,sortIndex:-1},ee>me?(z.sortIndex=ee,e(h,z),i(m)===null&&z===i(h)&&(C?(O(F),F=-1):C=!0,W(L,ee-me))):(z.sortIndex=ye,e(m,z),b||x||(b=!0,N||(N=!0,q()))),z},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(z){var H=v;return function(){var ee=v;v=H;try{return z.apply(this,arguments)}finally{v=ee}}}})(uh)),uh}var ev;function Iy(){return ev||(ev=1,ch.exports=Py()),ch.exports}var fh={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function By(){if(tv)return Jn;tv=1;var a=Kp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Jn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Jn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},Jn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Jn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Jn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Jn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Jn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Jn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Jn.requestFormReset=function(m){r.d.r(m)},Jn.unstable_batchedUpdates=function(m,h){return m(h)},Jn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},Jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Jn.version="19.2.7",Jn}var nv;function Fx(){if(nv)return fh.exports;nv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),fh.exports=By(),fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function Fy(){if(iv)return Il;iv=1;var a=Iy(),e=Kp(),i=Fx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,w=f.child;w;){if(w===s){M=!0,s=f,l=p;break}if(w===l){M=!0,l=f,s=p;break}w=w.sibling}if(!M){for(w=p.child;w;){if(w===s){M=!0,s=p,l=f;break}if(w===l){M=!0,l=p,s=f;break}w=w.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var W=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},me=[],ye=-1;function I(t){return{current:t}}function Q(t){0>ye||(t.current=me[ye],me[ye]=null,ye--)}function Me(t,n){ye++,me[ye]=t.current,t.current=n}var Oe=I(null),Ue=I(null),ne=I(null),be=I(null);function xe(t,n){switch(Me(ne,n),Me(Ue,t),Me(Oe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?v_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=v_(n),t=x_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Oe),Me(Oe,t)}function Ie(){Q(Oe),Q(Ue),Q(ne)}function it(t){t.memoizedState!==null&&Me(be,t);var n=Oe.current,s=x_(n,t.type);n!==s&&(Me(Ue,t),Me(Oe,s))}function Xe(t){Ue.current===t&&(Q(Oe),Q(Ue)),be.current===t&&(Q(be),Ll._currentValue=ee)}var Mt,ut;function ht(t){if(Mt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+ut}var xt=!1;function yt(t,n){if(!t||xt)return"";xt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(pe){var ce=pe}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(pe){ce=pe}t.call(Ae.prototype)}}else{try{throw Error()}catch(pe){ce=pe}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(pe){if(pe&&ce&&typeof pe.stack=="string")return[pe.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],w=p[1];if(M&&w){var V=M.split(`
`),re=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===re.length)for(l=V.length-1,f=re.length-1;1<=l&&0<=f&&V[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==re[f]){var Se=`
`+V[l].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=l&&0<=f);break}}}finally{xt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ht(s):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return ht("Activity");default:return""}}function nn(t){try{var n="",s=null;do n+=tn(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var un=Object.prototype.hasOwnProperty,fn=a.unstable_scheduleCallback,Yt=a.unstable_cancelCallback,dn=a.unstable_shouldYield,K=a.unstable_requestPaint,ct=a.unstable_now,Et=a.unstable_getCurrentPriorityLevel,B=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,oe=a.unstable_LowPriority,ge=a.unstable_IdlePriority,Pe=a.log,Fe=a.unstable_setDisableYieldValue,he=null,_e=null;function we(t){if(typeof Pe=="function"&&Fe(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(he,t)}catch{}}var Ye=Math.clz32?Math.clz32:et,Ge=Math.log,He=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ge(t)/He|0)|0}var tt=256,Ke=262144,X=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=De(l):(M&=w,M!==0?f=De(M):s||(s=w&~t,s!==0&&(f=De(s))))):(w=l&~p,w!==0?f=De(w):M!==0?f=De(M):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Qe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bt(t,n,s,l,f,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(s=M&~s;0<s;){var Se=31-Ye(s),Ae=1<<Se;w[Se]=0,V[Se]=-1;var ce=re[Se];if(ce!==null)for(re[Se]=null,Se=0;Se<ce.length;Se++){var pe=ce[Se];pe!==null&&(pe.lane&=-536870913)}s&=~Ae}l!==0&&Ft(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function Ft(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ye(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function jn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ye(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Bn(t,n){var s=n&-n;return s=(s&42)!==0?1:Js(s),(s&(t.suspendedLanes|n))!==0?0:s}function Js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function us(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wa(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:V_(t.type))}function Nn(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var Tn=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Tn,Un="__reactProps$"+Tn,Zn="__reactContainer$"+Tn,$i="__reactEvents$"+Tn,Lr="__reactListeners$"+Tn,Da="__reactHandles$"+Tn,Di="__reactResources$"+Tn,Li="__reactMarker$"+Tn;function ea(t){delete t[Lt],delete t[Un],delete t[$i],delete t[Lr],delete t[Da]}function Ni(t){var n=t[Lt];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Zn]||s[Lt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=A_(t);t!==null;){if(s=t[Lt])return s;t=A_(t)}return n}t=s,s=t.parentNode}return null}function Ui(t){if(t=t[Lt]||t[Zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ha(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function _i(t){var n=t[Di];return n||(n=t[Di]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[Li]=!0}var $s=new Set,R={};function j(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(R[t]=n,t=0;t<n.length;t++)$s.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Ve={};function je(t){return un.call(Ve,t)?!0:un.call(ae,t)?!1:ie.test(t)?Ve[t]=!0:(ae[t]=!0,!1)}function Be(t,n,s){if(je(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ze(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Z(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Je(t){if(!t._valueTracker){var n=Ce(t)?"checked":"value";t._valueTracker=Re(t,n,""+t[n])}}function st(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=Ce(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function _t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pt=/[\n"\\]/g;function mt(t){return t.replace(pt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ne(t,n,s,l,f,p,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?rt(t,M,fe(n)):s!=null?rt(t,M,fe(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+fe(w):t.removeAttribute("name")}function Xt(t,n,s,l,f,p,M,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Je(t);return}s=s!=null?""+fe(s):"",n=n!=null?""+fe(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Je(t)}function rt(t,n,s){n==="number"&&_t(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ct(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+fe(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function an(t,n,s){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+fe(s):""}function Sn(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(W(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=fe(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Je(t)}function Gn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kt(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||zt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function li(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&Kt(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&Kt(t,p,n[p])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pa(t){return Oi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function vi(){}var Nr=null;function La(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ii=null,Na=null;function oc(t){var n=Ui(t);if(n&&(t=n.stateNode)){var s=t[Un]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ne(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+mt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Un]||null;if(!f)throw Error(r(90));Ne(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&st(l)}break e;case"textarea":an(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Ct(t,!!s.multiple,n,!1)}}}var Vo=!1;function uf(t,n,s){if(Vo)return t(n,s);Vo=!0;try{var l=t(n);return l}finally{if(Vo=!1,(ii!==null||Na!==null)&&(Xc(),ii&&(n=ii,t=Na,Na=ii=null,oc(n),t)))for(n=0;n<t.length;n++)oc(t[n])}}function Pi(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Un]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ko=!1;if(ta)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){ko=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{ko=!1}var Ii=null,Xo=null,er=null;function Wo(){if(er)return er;var t,n=Xo,s=n.length,l,f="value"in Ii?Ii.value:Ii.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===f[p-l];l++);return er=f.slice(t,1<l?1-l:void 0)}function Ur(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function tr(){return!1}function Kn(t){function n(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Oa:tr,this.isPropagationStopped=tr,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Kn(Pa),fs=_({},Pa,{view:0,detail:0}),qo=Kn(fs),jo,Zo,nr,ir=_({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nr&&(nr&&t.type==="mousemove"?(jo=t.screenX-nr.screenX,Zo=t.screenY-nr.screenY):Zo=jo=0,nr=t),jo)},movementY:function(t){return"movementY"in t?t.movementY:Zo}}),Ko=Kn(ir),bt=_({},ir,{dataTransfer:0}),Fn=Kn(bt),Bi=_({},fs,{relatedTarget:0}),Mn=Kn(Bi),Fi=_({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Qn=Kn(Fi),na=_({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Or=Kn(na),ds=_({},Pa,{data:0}),Ia=Kn(ds),Qo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=GS[t])?!!n[t]:!1}function ff(){return VS}var kS=_({},fs,{key:function(t){if(t.key){var n=Qo[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ur(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Ur(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ur(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XS=Kn(kS),WS=_({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Em=Kn(WS),YS=_({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),qS=Kn(YS),jS=_({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=Kn(jS),KS=_({},ir,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=Kn(KS),JS=_({},Pa,{newState:0,oldState:0}),$S=Kn(JS),eM=[9,13,27,32],df=ta&&"CompositionEvent"in window,Jo=null;ta&&"documentMode"in document&&(Jo=document.documentMode);var tM=ta&&"TextEvent"in window&&!Jo,bm=ta&&(!df||Jo&&8<Jo&&11>=Jo),Tm=" ",Am=!1;function Rm(t,n){switch(t){case"keyup":return eM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function nM(t,n){switch(t){case"compositionend":return Cm(n);case"keypress":return n.which!==32?null:(Am=!0,Tm);case"textInput":return t=n.data,t===Tm&&Am?null:t;default:return null}}function iM(t,n){if(Pr)return t==="compositionend"||!df&&Rm(t,n)?(t=Wo(),er=Xo=Ii=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bm&&n.locale!=="ko"?null:n.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!aM[t.type]:n==="textarea"}function Dm(t,n,s,l){ii?Na?Na.push(l):Na=[l]:ii=l,n=Qc(n,"onChange"),0<n.length&&(s=new Yo("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var $o=null,el=null;function sM(t){d_(t,0)}function cc(t){var n=ha(t);if(st(n))return t}function Lm(t,n){if(t==="change")return n}var Nm=!1;if(ta){var hf;if(ta){var pf="oninput"in document;if(!pf){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),pf=typeof Um.oninput=="function"}hf=pf}else hf=!1;Nm=hf&&(!document.documentMode||9<document.documentMode)}function Om(){$o&&($o.detachEvent("onpropertychange",Pm),el=$o=null)}function Pm(t){if(t.propertyName==="value"&&cc(el)){var n=[];Dm(n,el,t,La(t)),uf(sM,n)}}function rM(t,n,s){t==="focusin"?(Om(),$o=n,el=s,$o.attachEvent("onpropertychange",Pm)):t==="focusout"&&Om()}function oM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(el)}function lM(t,n){if(t==="click")return cc(n)}function cM(t,n){if(t==="input"||t==="change")return cc(n)}function uM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var xi=typeof Object.is=="function"?Object.is:uM;function tl(t,n){if(xi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!un.call(n,f)||!xi(t[f],n[f]))return!1}return!0}function Im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bm(t,n){var s=Im(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Im(s)}}function Fm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_t(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=_t(t.document)}return n}function mf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fM=ta&&"documentMode"in document&&11>=document.documentMode,Ir=null,gf=null,nl=null,_f=!1;function Hm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_f||Ir==null||Ir!==_t(l)||(l=Ir,"selectionStart"in l&&mf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nl&&tl(nl,l)||(nl=l,l=Qc(gf,"onSelect"),0<l.length&&(n=new Yo("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Ir)))}function ar(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Br={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},vf={},Gm={};ta&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function sr(t){if(vf[t])return vf[t];if(!Br[t])return t;var n=Br[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Gm)return vf[t]=n[s];return t}var Vm=sr("animationend"),km=sr("animationiteration"),Xm=sr("animationstart"),dM=sr("transitionrun"),hM=sr("transitionstart"),pM=sr("transitioncancel"),Wm=sr("transitionend"),Ym=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function ia(t,n){Ym.set(t,n),j(n,[t])}var uc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},zi=[],Fr=0,Sf=0;function fc(){for(var t=Fr,n=Sf=Fr=0;n<t;){var s=zi[n];zi[n++]=null;var l=zi[n];zi[n++]=null;var f=zi[n];zi[n++]=null;var p=zi[n];if(zi[n++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&qm(s,f,p)}}function dc(t,n,s,l){zi[Fr++]=t,zi[Fr++]=n,zi[Fr++]=s,zi[Fr++]=l,Sf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Mf(t,n,s,l){return dc(t,n,s,l),hc(t)}function rr(t,n){return dc(t,null,null,n),hc(t)}function qm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ye(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function hc(t){if(50<bl)throw bl=0,Dd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var zr={};function mM(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,n,s,l){return new mM(t,n,s,l)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ba(t,n){var s=t.alternate;return s===null?(s=Si(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function jm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pc(t,n,s,l,f,p){var M=0;if(l=t,typeof t=="function")yf(t)&&(M=1);else if(typeof t=="string")M=Sy(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Si(31,s,n,f),t.elementType=U,t.lanes=p,t;case C:return or(s.children,f,p,n);case y:M=8,f|=24;break;case S:return t=Si(12,s,n,f|2),t.elementType=S,t.lanes=p,t;case L:return t=Si(13,s,n,f),t.elementType=L,t.lanes=p,t;case N:return t=Si(19,s,n,f),t.elementType=N,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:M=10;break e;case O:M=9;break e;case A:M=11;break e;case F:M=14;break e;case T:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Si(M,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function or(t,n,s,l){return t=Si(7,t,l,n),t.lanes=s,t}function Ef(t,n,s){return t=Si(6,t,null,n),t.lanes=s,t}function Zm(t){var n=Si(18,null,null,0);return n.stateNode=t,n}function bf(t,n,s){return n=Si(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Km=new WeakMap;function Hi(t,n){if(typeof t=="object"&&t!==null){var s=Km.get(t);return s!==void 0?s:(n={value:t,source:n,stack:nn(n)},Km.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var Hr=[],Gr=0,mc=null,il=0,Gi=[],Vi=0,hs=null,ma=1,ga="";function Fa(t,n){Hr[Gr++]=il,Hr[Gr++]=mc,mc=t,il=n}function Qm(t,n,s){Gi[Vi++]=ma,Gi[Vi++]=ga,Gi[Vi++]=hs,hs=t;var l=ma;t=ga;var f=32-Ye(l)-1;l&=~(1<<f),s+=1;var p=32-Ye(n)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ma=1<<32-Ye(n)+f|s<<f|l,ga=p+t}else ma=1<<p|s<<f|l,ga=t}function Tf(t){t.return!==null&&(Fa(t,1),Qm(t,1,0))}function Af(t){for(;t===mc;)mc=Hr[--Gr],Hr[Gr]=null,il=Hr[--Gr],Hr[Gr]=null;for(;t===hs;)hs=Gi[--Vi],Gi[Vi]=null,ga=Gi[--Vi],Gi[Vi]=null,ma=Gi[--Vi],Gi[Vi]=null}function Jm(t,n){Gi[Vi++]=ma,Gi[Vi++]=ga,Gi[Vi++]=hs,ma=n.id,ga=n.overflow,hs=t}var Vn=null,on=null,Ut=!1,ps=null,ki=!1,Rf=Error(r(519));function ms(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw al(Hi(n,t)),Rf}function $m(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[Lt]=t,n[Un]=l,s){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(s=0;s<Al.length;s++)Rt(Al[s],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),Xt(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),Sn(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||g_(n.textContent,s)?(l.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),l.onScroll!=null&&Rt("scroll",n),l.onScrollEnd!=null&&Rt("scrollend",n),l.onClick!=null&&(n.onclick=vi),n=!0):n=!1,n||ms(t,!0)}function e0(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Vn=Vn.return}}function Vr(t){if(t!==Vn)return!1;if(!Ut)return e0(t),Ut=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Wd(t.type,t.memoizedProps)),s=!s),s&&on&&ms(t),e0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=T_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=T_(t)}else n===27?(n=on,ws(t.type)?(t=Kd,Kd=null,on=t):on=n):on=Vn?Wi(t.stateNode.nextSibling):null;return!0}function lr(){on=Vn=null,Ut=!1}function Cf(){var t=ps;return t!==null&&(hi===null?hi=t:hi.push.apply(hi,t),ps=null),t}function al(t){ps===null?ps=[t]:ps.push(t)}var wf=I(null),cr=null,za=null;function gs(t,n,s){Me(wf,n._currentValue),n._currentValue=s}function Ha(t){t._currentValue=wf.current,Q(wf)}function Df(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Lf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var V=0;V<n.length;V++)if(w.context===n[V]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),Df(p.return,s,t),l||(M=null);break e}p=w.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),Df(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function kr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var w=f.type;xi(f.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(f===be.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ll):t=[Ll])}f=f.return}t!==null&&Lf(n,t,s,l),n.flags|=262144}function gc(t){for(t=t.firstContext;t!==null;){if(!xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){cr=t,za=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return t0(cr,t)}function _c(t,n){return cr===null&&ur(t),t0(t,n)}function t0(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},za===null){if(t===null)throw Error(r(308));za=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else za=za.next=n;return s}var gM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},_M=a.unstable_scheduleCallback,vM=a.unstable_NormalPriority,An={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nf(){return{controller:new gM,data:new Map,refCount:0}}function sl(t){t.refCount--,t.refCount===0&&_M(vM,function(){t.controller.abort()})}var rl=null,Uf=0,Xr=0,Wr=null;function xM(t,n){if(rl===null){var s=rl=[];Uf=0,Xr=Id(),Wr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Uf++,n.then(n0,n0),n}function n0(){if(--Uf===0&&rl!==null){Wr!==null&&(Wr.status="fulfilled");var t=rl;rl=null,Xr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function SM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var i0=z.S;z.S=function(t,n){Hg=ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xM(t,n),i0!==null&&i0(t,n)};var fr=I(null);function Of(){var t=fr.current;return t!==null?t:en.pooledCache}function vc(t,n){n===null?Me(fr,fr.current):Me(fr,n.pool)}function a0(){var t=Of();return t===null?null:{parent:An._currentValue,pool:t}}var Yr=Error(r(460)),Pf=Error(r(474)),xc=Error(r(542)),Sc={then:function(){}};function s0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function r0(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(vi,vi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,l0(t),t;default:if(typeof n.status=="string")n.then(vi,vi);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,l0(t),t}throw hr=n,Yr}}function dr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(hr=s,Yr):s}}var hr=null;function o0(){if(hr===null)throw Error(r(459));var t=hr;return hr=null,t}function l0(t){if(t===Yr||t===xc)throw Error(r(483))}var qr=null,ol=0;function Mc(t){var n=ol;return ol+=1,qr===null&&(qr=[]),r0(qr,t,n)}function ll(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yc(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function c0(t){function n($,Y){if(t){var se=$.deletions;se===null?($.deletions=[Y],$.flags|=16):se.push(Y)}}function s($,Y){if(!t)return null;for(;Y!==null;)n($,Y),Y=Y.sibling;return null}function l($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function f($,Y){return $=Ba($,Y),$.index=0,$.sibling=null,$}function p($,Y,se){return $.index=se,t?(se=$.alternate,se!==null?(se=se.index,se<Y?($.flags|=67108866,Y):se):($.flags|=67108866,Y)):($.flags|=1048576,Y)}function M($){return t&&$.alternate===null&&($.flags|=67108866),$}function w($,Y,se,Ee){return Y===null||Y.tag!==6?(Y=Ef(se,$.mode,Ee),Y.return=$,Y):(Y=f(Y,se),Y.return=$,Y)}function V($,Y,se,Ee){var at=se.type;return at===C?Se($,Y,se.props.children,Ee,se.key):Y!==null&&(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&dr(at)===Y.type)?(Y=f(Y,se.props),ll(Y,se),Y.return=$,Y):(Y=pc(se.type,se.key,se.props,null,$.mode,Ee),ll(Y,se),Y.return=$,Y)}function re($,Y,se,Ee){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=bf(se,$.mode,Ee),Y.return=$,Y):(Y=f(Y,se.children||[]),Y.return=$,Y)}function Se($,Y,se,Ee,at){return Y===null||Y.tag!==7?(Y=or(se,$.mode,Ee,at),Y.return=$,Y):(Y=f(Y,se),Y.return=$,Y)}function Ae($,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Ef(""+Y,$.mode,se),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return se=pc(Y.type,Y.key,Y.props,null,$.mode,se),ll(se,Y),se.return=$,se;case b:return Y=bf(Y,$.mode,se),Y.return=$,Y;case T:return Y=dr(Y),Ae($,Y,se)}if(W(Y)||q(Y))return Y=or(Y,$.mode,se,null),Y.return=$,Y;if(typeof Y.then=="function")return Ae($,Mc(Y),se);if(Y.$$typeof===P)return Ae($,_c($,Y),se);yc($,Y)}return null}function ce($,Y,se,Ee){var at=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return at!==null?null:w($,Y,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===at?V($,Y,se,Ee):null;case b:return se.key===at?re($,Y,se,Ee):null;case T:return se=dr(se),ce($,Y,se,Ee)}if(W(se)||q(se))return at!==null?null:Se($,Y,se,Ee,null);if(typeof se.then=="function")return ce($,Y,Mc(se),Ee);if(se.$$typeof===P)return ce($,Y,_c($,se),Ee);yc($,se)}return null}function pe($,Y,se,Ee,at){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return $=$.get(se)||null,w(Y,$,""+Ee,at);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case x:return $=$.get(Ee.key===null?se:Ee.key)||null,V(Y,$,Ee,at);case b:return $=$.get(Ee.key===null?se:Ee.key)||null,re(Y,$,Ee,at);case T:return Ee=dr(Ee),pe($,Y,se,Ee,at)}if(W(Ee)||q(Ee))return $=$.get(se)||null,Se(Y,$,Ee,at,null);if(typeof Ee.then=="function")return pe($,Y,se,Mc(Ee),at);if(Ee.$$typeof===P)return pe($,Y,se,_c(Y,Ee),at);yc(Y,Ee)}return null}function $e($,Y,se,Ee){for(var at=null,Ht=null,nt=Y,vt=Y=0,Dt=null;nt!==null&&vt<se.length;vt++){nt.index>vt?(Dt=nt,nt=null):Dt=nt.sibling;var Gt=ce($,nt,se[vt],Ee);if(Gt===null){nt===null&&(nt=Dt);break}t&&nt&&Gt.alternate===null&&n($,nt),Y=p(Gt,Y,vt),Ht===null?at=Gt:Ht.sibling=Gt,Ht=Gt,nt=Dt}if(vt===se.length)return s($,nt),Ut&&Fa($,vt),at;if(nt===null){for(;vt<se.length;vt++)nt=Ae($,se[vt],Ee),nt!==null&&(Y=p(nt,Y,vt),Ht===null?at=nt:Ht.sibling=nt,Ht=nt);return Ut&&Fa($,vt),at}for(nt=l(nt);vt<se.length;vt++)Dt=pe(nt,$,vt,se[vt],Ee),Dt!==null&&(t&&Dt.alternate!==null&&nt.delete(Dt.key===null?vt:Dt.key),Y=p(Dt,Y,vt),Ht===null?at=Dt:Ht.sibling=Dt,Ht=Dt);return t&&nt.forEach(function(Os){return n($,Os)}),Ut&&Fa($,vt),at}function ot($,Y,se,Ee){if(se==null)throw Error(r(151));for(var at=null,Ht=null,nt=Y,vt=Y=0,Dt=null,Gt=se.next();nt!==null&&!Gt.done;vt++,Gt=se.next()){nt.index>vt?(Dt=nt,nt=null):Dt=nt.sibling;var Os=ce($,nt,Gt.value,Ee);if(Os===null){nt===null&&(nt=Dt);break}t&&nt&&Os.alternate===null&&n($,nt),Y=p(Os,Y,vt),Ht===null?at=Os:Ht.sibling=Os,Ht=Os,nt=Dt}if(Gt.done)return s($,nt),Ut&&Fa($,vt),at;if(nt===null){for(;!Gt.done;vt++,Gt=se.next())Gt=Ae($,Gt.value,Ee),Gt!==null&&(Y=p(Gt,Y,vt),Ht===null?at=Gt:Ht.sibling=Gt,Ht=Gt);return Ut&&Fa($,vt),at}for(nt=l(nt);!Gt.done;vt++,Gt=se.next())Gt=pe(nt,$,vt,Gt.value,Ee),Gt!==null&&(t&&Gt.alternate!==null&&nt.delete(Gt.key===null?vt:Gt.key),Y=p(Gt,Y,vt),Ht===null?at=Gt:Ht.sibling=Gt,Ht=Gt);return t&&nt.forEach(function(Ly){return n($,Ly)}),Ut&&Fa($,vt),at}function $t($,Y,se,Ee){if(typeof se=="object"&&se!==null&&se.type===C&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var at=se.key;Y!==null;){if(Y.key===at){if(at=se.type,at===C){if(Y.tag===7){s($,Y.sibling),Ee=f(Y,se.props.children),Ee.return=$,$=Ee;break e}}else if(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&dr(at)===Y.type){s($,Y.sibling),Ee=f(Y,se.props),ll(Ee,se),Ee.return=$,$=Ee;break e}s($,Y);break}else n($,Y);Y=Y.sibling}se.type===C?(Ee=or(se.props.children,$.mode,Ee,se.key),Ee.return=$,$=Ee):(Ee=pc(se.type,se.key,se.props,null,$.mode,Ee),ll(Ee,se),Ee.return=$,$=Ee)}return M($);case b:e:{for(at=se.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){s($,Y.sibling),Ee=f(Y,se.children||[]),Ee.return=$,$=Ee;break e}else{s($,Y);break}else n($,Y);Y=Y.sibling}Ee=bf(se,$.mode,Ee),Ee.return=$,$=Ee}return M($);case T:return se=dr(se),$t($,Y,se,Ee)}if(W(se))return $e($,Y,se,Ee);if(q(se)){if(at=q(se),typeof at!="function")throw Error(r(150));return se=at.call(se),ot($,Y,se,Ee)}if(typeof se.then=="function")return $t($,Y,Mc(se),Ee);if(se.$$typeof===P)return $t($,Y,_c($,se),Ee);yc($,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,Y!==null&&Y.tag===6?(s($,Y.sibling),Ee=f(Y,se),Ee.return=$,$=Ee):(s($,Y),Ee=Ef(se,$.mode,Ee),Ee.return=$,$=Ee),M($)):s($,Y)}return function($,Y,se,Ee){try{ol=0;var at=$t($,Y,se,Ee);return qr=null,at}catch(nt){if(nt===Yr||nt===xc)throw nt;var Ht=Si(29,nt,null,$.mode);return Ht.lanes=Ee,Ht.return=$,Ht}finally{}}}var pr=c0(!0),u0=c0(!1),_s=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xs(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(kt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=hc(t),qm(t,null,s),n}return dc(t,l,n,s),hc(t)}function cl(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,jn(t,s)}}function Ff(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var zf=!1;function ul(){if(zf){var t=Wr;if(t!==null)throw t}}function fl(t,n,s,l){zf=!1;var f=t.updateQueue;_s=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,re=V.next;V.next=null,M===null?p=re:M.next=re,M=V;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,w=Se.lastBaseUpdate,w!==M&&(w===null?Se.firstBaseUpdate=re:w.next=re,Se.lastBaseUpdate=V))}if(p!==null){var Ae=f.baseState;M=0,Se=re=V=null,w=p;do{var ce=w.lane&-536870913,pe=ce!==w.lane;if(pe?(wt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Xr&&(zf=!0),Se!==null&&(Se=Se.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var $e=t,ot=w;ce=n;var $t=s;switch(ot.tag){case 1:if($e=ot.payload,typeof $e=="function"){Ae=$e.call($t,Ae,ce);break e}Ae=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=ot.payload,ce=typeof $e=="function"?$e.call($t,Ae,ce):$e,ce==null)break e;Ae=_({},Ae,ce);break e;case 2:_s=!0}}ce=w.callback,ce!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[ce]:pe.push(ce))}else pe={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Se===null?(re=Se=pe,V=Ae):Se=Se.next=pe,M|=ce;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);Se===null&&(V=Ae),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=Se,p===null&&(f.shared.lanes=0),bs|=M,t.lanes=M,t.memoizedState=Ae}}function f0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function d0(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)f0(s[t],n)}var jr=I(null),Ec=I(0);function h0(t,n){t=Za,Me(Ec,t),Me(jr,n),Za=t|n.baseLanes}function Hf(){Me(Ec,Za),Me(jr,jr.current)}function Gf(){Za=Ec.current,Q(jr),Q(Ec)}var Mi=I(null),Xi=null;function Ss(t){var n=t.alternate;Me(yn,yn.current&1),Me(Mi,t),Xi===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(Xi=t)}function Vf(t){Me(yn,yn.current),Me(Mi,t),Xi===null&&(Xi=t)}function p0(t){t.tag===22?(Me(yn,yn.current),Me(Mi,t),Xi===null&&(Xi=t)):Ms()}function Ms(){Me(yn,yn.current),Me(Mi,Mi.current)}function yi(t){Q(Mi),Xi===t&&(Xi=null),Q(yn)}var yn=I(0);function bc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||jd(s)||Zd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ga=0,gt=null,Qt=null,Rn=null,Tc=!1,Zr=!1,mr=!1,Ac=0,dl=0,Kr=null,MM=0;function gn(){throw Error(r(321))}function kf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!xi(t[s],n[s]))return!1;return!0}function Xf(t,n,s,l,f,p){return Ga=p,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Q0:sd,mr=!1,p=s(l,f),mr=!1,Zr&&(p=g0(n,s,l,f)),m0(t),p}function m0(t){z.H=ml;var n=Qt!==null&&Qt.next!==null;if(Ga=0,Rn=Qt=gt=null,Tc=!1,dl=0,Kr=null,n)throw Error(r(300));t===null||Cn||(t=t.dependencies,t!==null&&gc(t)&&(Cn=!0))}function g0(t,n,s,l){gt=t;var f=0;do{if(Zr&&(Kr=null),dl=0,Zr=!1,25<=f)throw Error(r(301));if(f+=1,Rn=Qt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=J0,p=n(s,l)}while(Zr);return p}function yM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?hl(n):n,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(gt.flags|=1024),n}function Wf(){var t=Ac!==0;return Ac=0,t}function Yf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function qf(t){if(Tc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tc=!1}Ga=0,Rn=Qt=gt=null,Zr=!1,dl=Ac=0,Kr=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?gt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function En(){if(Qt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var n=Rn===null?gt.memoizedState:Rn.next;if(n!==null)Rn=n,Qt=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Rn===null?gt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function Rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(t){var n=dl;return dl+=1,Kr===null&&(Kr=[]),t=r0(Kr,t,n),n=gt,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Q0:sd),t}function Cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hl(t);if(t.$$typeof===P)return kn(t)}throw Error(r(438,String(t)))}function jf(t){var n=null,s=gt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=gt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Rc(),gt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=k;return n.index++,s}function Va(t,n){return typeof n=="function"?n(t):n}function wc(t){var n=En();return Zf(n,Qt,t)}function Zf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=M=null,V=null,re=n,Se=!1;do{var Ae=re.lane&-536870913;if(Ae!==re.lane?(wt&Ae)===Ae:(Ga&Ae)===Ae){var ce=re.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ae===Xr&&(Se=!0);else if((Ga&ce)===ce){re=re.next,ce===Xr&&(Se=!0);continue}else Ae={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=Ae,M=p):V=V.next=Ae,gt.lanes|=ce,bs|=ce;Ae=re.action,mr&&s(p,Ae),p=re.hasEagerState?re.eagerState:s(p,Ae)}else ce={lane:Ae,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(w=V=ce,M=p):V=V.next=ce,gt.lanes|=Ae,bs|=Ae;re=re.next}while(re!==null&&re!==n);if(V===null?M=p:V.next=w,!xi(p,t.memoizedState)&&(Cn=!0,Se&&(s=Wr,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Kf(t){var n=En(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);xi(p,n.memoizedState)||(Cn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function _0(t,n,s){var l=gt,f=En(),p=Ut;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!xi((Qt||f).memoizedState,s);if(M&&(f.memoizedState=s,Cn=!0),f=f.queue,$f(S0.bind(null,l,f,t),[t]),f.getSnapshot!==n||M||Rn!==null&&Rn.memoizedState.tag&1){if(l.flags|=2048,Qr(9,{destroy:void 0},x0.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Ga&127)!==0||v0(l,n,s)}return s}function v0(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=gt.updateQueue,n===null?(n=Rc(),gt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function x0(t,n,s,l){n.value=s,n.getSnapshot=l,M0(n)&&y0(t)}function S0(t,n,s){return s(function(){M0(n)&&y0(t)})}function M0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!xi(t,s)}catch{return!0}}function y0(t){var n=rr(t,2);n!==null&&pi(n,t,2)}function Qf(t){var n=ai();if(typeof t=="function"){var s=t;if(t=s(),mr){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},n}function E0(t,n,s,l){return t.baseState=s,Zf(t,Qt,typeof l=="function"?l:Va)}function EM(t,n,s,l,f){if(Nc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,b0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function b0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,M={};z.T=M;try{var w=s(f,l),V=z.S;V!==null&&V(M,w),T0(t,n,w)}catch(re){Jf(t,n,re)}finally{p!==null&&M.types!==null&&(p.types=M.types),z.T=p}}else try{p=s(f,l),T0(t,n,p)}catch(re){Jf(t,n,re)}}function T0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){A0(t,n,l)},function(l){return Jf(t,n,l)}):A0(t,n,s)}function A0(t,n,s){n.status="fulfilled",n.value=s,R0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,b0(t,s)))}function Jf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,R0(n),n=n.next;while(n!==l)}t.action=null}function R0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function C0(t,n){return n}function w0(t,n){if(Ut){var s=en.formState;if(s!==null){e:{var l=gt;if(Ut){if(on){t:{for(var f=on,p=ki;f.nodeType!==8;){if(!p){f=null;break t}if(f=Wi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){on=Wi(f.nextSibling),l=f.data==="F!";break e}}ms(l)}l=!1}l&&(n=s[0])}}return s=ai(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:C0,lastRenderedState:n},s.queue=l,s=j0.bind(null,gt,l),l.dispatch=s,l=Qf(!1),p=ad.bind(null,gt,!1,l.queue),l=ai(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=EM.bind(null,gt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function D0(t){var n=En();return L0(n,Qt,t)}function L0(t,n,s){if(n=Zf(t,n,C0)[0],t=wc(Va)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=hl(n)}catch(M){throw M===Yr?xc:M}else l=n;n=En();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(gt.flags|=2048,Qr(9,{destroy:void 0},bM.bind(null,f,s),null)),[l,p,t]}function bM(t,n){t.action=n}function N0(t){var n=En(),s=Qt;if(s!==null)return L0(n,s,t);En(),n=n.memoizedState,s=En();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Qr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=gt.updateQueue,n===null&&(n=Rc(),gt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function U0(){return En().memoizedState}function Dc(t,n,s,l){var f=ai();gt.flags|=t,f.memoizedState=Qr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Lc(t,n,s,l){var f=En();l=l===void 0?null:l;var p=f.memoizedState.inst;Qt!==null&&l!==null&&kf(l,Qt.memoizedState.deps)?f.memoizedState=Qr(n,p,s,l):(gt.flags|=t,f.memoizedState=Qr(1|n,p,s,l))}function O0(t,n){Dc(8390656,8,t,n)}function $f(t,n){Lc(2048,8,t,n)}function TM(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=Rc(),gt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function P0(t){var n=En().memoizedState;return TM({ref:n,nextImpl:t}),function(){if((kt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function I0(t,n){return Lc(4,2,t,n)}function B0(t,n){return Lc(4,4,t,n)}function F0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function z0(t,n,s){s=s!=null?s.concat([t]):null,Lc(4,4,F0.bind(null,n,t),s)}function ed(){}function H0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&kf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function G0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&kf(n,l[1]))return l[0];if(l=t(),mr){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l}function td(t,n,s){return s===void 0||(Ga&1073741824)!==0&&(wt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Vg(),gt.lanes|=t,bs|=t,s)}function V0(t,n,s,l){return xi(s,n)?s:jr.current!==null?(t=td(t,s,l),xi(t,n)||(Cn=!0),t):(Ga&42)===0||(Ga&1073741824)!==0&&(wt&261930)===0?(Cn=!0,t.memoizedState=s):(t=Vg(),gt.lanes|=t,bs|=t,n)}function k0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var M=z.T,w={};z.T=w,ad(t,!1,n,s);try{var V=f(),re=z.S;if(re!==null&&re(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Se=SM(V,l);pl(t,n,Se,Ti(t))}else pl(t,n,l,Ti(t))}catch(Ae){pl(t,n,{then:function(){},status:"rejected",reason:Ae},Ti())}finally{H.p=p,M!==null&&w.types!==null&&(M.types=w.types),z.T=M}}function AM(){}function nd(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=X0(t).queue;k0(t,f,n,ee,s===null?AM:function(){return W0(t),s(l)})}function X0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:ee},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function W0(t){var n=X0(t);n.next===null&&(n=t.alternate.memoizedState),pl(t,n.next.queue,{},Ti())}function id(){return kn(Ll)}function Y0(){return En().memoizedState}function q0(){return En().memoizedState}function RM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ti();t=vs(s);var l=xs(n,t,s);l!==null&&(pi(l,n,s),cl(l,n,s)),n={cache:Nf()},t.payload=n;return}n=n.return}}function CM(t,n,s){var l=Ti();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nc(t)?Z0(n,s):(s=Mf(t,n,s,l),s!==null&&(pi(s,t,l),K0(s,n,l)))}function j0(t,n,s){var l=Ti();pl(t,n,s,l)}function pl(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nc(t))Z0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,w=p(M,s);if(f.hasEagerState=!0,f.eagerState=w,xi(w,M))return dc(t,n,f,0),en===null&&fc(),!1}catch{}finally{}if(s=Mf(t,n,f,l),s!==null)return pi(s,t,l),K0(s,n,l),!0}return!1}function ad(t,n,s,l){if(l={lane:2,revertLane:Id(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Nc(t)){if(n)throw Error(r(479))}else n=Mf(t,s,l,2),n!==null&&pi(n,t,2)}function Nc(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function Z0(t,n){Zr=Tc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function K0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,jn(t,s)}}var ml={readContext:kn,use:Cc,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};ml.useEffectEvent=gn;var Q0={readContext:kn,use:Cc,useCallback:function(t,n){return ai().memoizedState=[t,n===void 0?null:n],t},useContext:kn,useEffect:O0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Dc(4194308,4,F0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Dc(4194308,4,t,n)},useInsertionEffect:function(t,n){Dc(4,2,t,n)},useMemo:function(t,n){var s=ai();n=n===void 0?null:n;var l=t();if(mr){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ai();if(s!==void 0){var f=s(n);if(mr){we(!0);try{s(n)}finally{we(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=CM.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var n=ai();return t={current:t},n.memoizedState=t},useState:function(t){t=Qf(t);var n=t.queue,s=j0.bind(null,gt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:ed,useDeferredValue:function(t,n){var s=ai();return td(s,t,n)},useTransition:function(){var t=Qf(!1);return t=k0.bind(null,gt,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=gt,f=ai();if(Ut){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(wt&127)!==0||v0(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,O0(S0.bind(null,l,p,t),[t]),l.flags|=2048,Qr(9,{destroy:void 0},x0.bind(null,l,p,s,n),null),s},useId:function(){var t=ai(),n=en.identifierPrefix;if(Ut){var s=ga,l=ma;s=(l&~(1<<32-Ye(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Ac++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=MM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:id,useFormState:w0,useActionState:w0,useOptimistic:function(t){var n=ai();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ad.bind(null,gt,!0,s),s.dispatch=n,[t,n]},useMemoCache:jf,useCacheRefresh:function(){return ai().memoizedState=RM.bind(null,gt)},useEffectEvent:function(t){var n=ai(),s={impl:t};return n.memoizedState=s,function(){if((kt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},sd={readContext:kn,use:Cc,useCallback:H0,useContext:kn,useEffect:$f,useImperativeHandle:z0,useInsertionEffect:I0,useLayoutEffect:B0,useMemo:G0,useReducer:wc,useRef:U0,useState:function(){return wc(Va)},useDebugValue:ed,useDeferredValue:function(t,n){var s=En();return V0(s,Qt.memoizedState,t,n)},useTransition:function(){var t=wc(Va)[0],n=En().memoizedState;return[typeof t=="boolean"?t:hl(t),n]},useSyncExternalStore:_0,useId:Y0,useHostTransitionStatus:id,useFormState:D0,useActionState:D0,useOptimistic:function(t,n){var s=En();return E0(s,Qt,t,n)},useMemoCache:jf,useCacheRefresh:q0};sd.useEffectEvent=P0;var J0={readContext:kn,use:Cc,useCallback:H0,useContext:kn,useEffect:$f,useImperativeHandle:z0,useInsertionEffect:I0,useLayoutEffect:B0,useMemo:G0,useReducer:Kf,useRef:U0,useState:function(){return Kf(Va)},useDebugValue:ed,useDeferredValue:function(t,n){var s=En();return Qt===null?td(s,t,n):V0(s,Qt.memoizedState,t,n)},useTransition:function(){var t=Kf(Va)[0],n=En().memoizedState;return[typeof t=="boolean"?t:hl(t),n]},useSyncExternalStore:_0,useId:Y0,useHostTransitionStatus:id,useFormState:N0,useActionState:N0,useOptimistic:function(t,n){var s=En();return Qt!==null?E0(s,Qt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:jf,useCacheRefresh:q0};J0.useEffectEvent=P0;function rd(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var od={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ti(),f=vs(l);f.payload=n,s!=null&&(f.callback=s),n=xs(t,f,l),n!==null&&(pi(n,t,l),cl(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ti(),f=vs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=xs(t,f,l),n!==null&&(pi(n,t,l),cl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ti(),l=vs(s);l.tag=2,n!=null&&(l.callback=n),n=xs(t,l,s),n!==null&&(pi(n,t,s),cl(n,t,s))}};function $0(t,n,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!tl(s,l)||!tl(f,p):!0}function eg(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&od.enqueueReplaceState(n,n.state,null)}function gr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function tg(t){uc(t)}function ng(t){console.error(t)}function ig(t){uc(t)}function Uc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function ag(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ld(t,n,s){return s=vs(s),s.tag=3,s.payload={element:null},s.callback=function(){Uc(t,n)},s}function sg(t){return t=vs(t),t.tag=3,t}function rg(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){ag(n,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){ag(n,s,l),typeof f!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function wM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&kr(n,s,f,!0),s=Mi.current,s!==null){switch(s.tag){case 31:case 13:return Xi===null?Wc():s.alternate===null&&_n===0&&(_n=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Sc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Ud(t,l,f)),!1;case 22:return s.flags|=65536,l===Sc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Ud(t,l,f)),!1}throw Error(r(435,s.tag))}return Ud(t,l,f),Wc(),!1}if(Ut)return n=Mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==Rf&&(t=Error(r(422),{cause:l}),al(Hi(t,s)))):(l!==Rf&&(n=Error(r(423),{cause:l}),al(Hi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Hi(l,s),f=ld(t.stateNode,l,f),Ff(t,f),_n!==4&&(_n=2)),!1;var p=Error(r(520),{cause:l});if(p=Hi(p,s),El===null?El=[p]:El.push(p),_n!==4&&(_n=2),n===null)return!0;l=Hi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=ld(s.stateNode,l,t),Ff(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ts===null||!Ts.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=sg(f),rg(f,t,s,l),Ff(s,f),!1}s=s.return}while(s!==null);return!1}var cd=Error(r(461)),Cn=!1;function Xn(t,n,s,l){n.child=t===null?u0(n,null,s,l):pr(n,t.child,s,l)}function og(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return ur(n),l=Xf(t,n,s,M,p,f),w=Wf(),t!==null&&!Cn?(Yf(t,n,f),ka(t,n,f)):(Ut&&w&&Tf(n),n.flags|=1,Xn(t,n,l,f),n.child)}function lg(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!yf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,cg(t,n,p,l,f)):(t=pc(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!_d(t,f)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:tl,s(M,l)&&t.ref===n.ref)return ka(t,n,f)}return n.flags|=1,t=Ba(p,l),t.ref=n.ref,t.return=n,n.child=t}function cg(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(tl(p,l)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=l=p,_d(t,f))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,ka(t,n,f)}return ud(t,n,s,l,f)}function ug(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return fg(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vc(n,p!==null?p.cachePool:null),p!==null?h0(n,p):Hf(),p0(n);else return l=n.lanes=536870912,fg(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(vc(n,p.cachePool),h0(n,p),Ms(),n.memoizedState=null):(t!==null&&vc(n,null),Hf(),Ms());return Xn(t,n,f,s),n.child}function gl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fg(t,n,s,l,f){var p=Of();return p=p===null?null:{parent:An._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&vc(n,null),Hf(),p0(n),t!==null&&kr(t,n,l,!0),n.childLanes=f,null}function Oc(t,n){return n=Ic({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function dg(t,n,s){return pr(n,t.child,null,s),t=Oc(n,n.pendingProps),t.flags|=2,yi(n),n.memoizedState=null,t}function DM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ut){if(l.mode==="hidden")return t=Oc(n,l),n.lanes=536870912,gl(null,t);if(Vf(n),(t=on)?(t=b_(t,ki),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:hs!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=Zm(t),s.return=n,n.child=s,Vn=n,on=null)):t=null,t===null)throw ms(n);return n.lanes=536870912,null}return Oc(n,l)}var p=t.memoizedState;if(p!==null){var M=p.dehydrated;if(Vf(n),f)if(n.flags&256)n.flags&=-257,n=dg(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Cn||kr(t,n,s,!1),f=(s&t.childLanes)!==0,Cn||f){if(l=en,l!==null&&(M=Bn(l,s),M!==0&&M!==p.retryLane))throw p.retryLane=M,rr(t,M),pi(l,t,M),cd;Wc(),n=dg(t,n,s)}else t=p.treeContext,on=Wi(M.nextSibling),Vn=n,Ut=!0,ps=null,ki=!1,t!==null&&Jm(n,t),n=Oc(n,l),n.flags|=4096;return n}return t=Ba(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function ud(t,n,s,l,f){return ur(n),s=Xf(t,n,s,l,void 0,f),l=Wf(),t!==null&&!Cn?(Yf(t,n,f),ka(t,n,f)):(Ut&&l&&Tf(n),n.flags|=1,Xn(t,n,s,f),n.child)}function hg(t,n,s,l,f,p){return ur(n),n.updateQueue=null,s=g0(n,l,s,f),m0(t),l=Wf(),t!==null&&!Cn?(Yf(t,n,p),ka(t,n,p)):(Ut&&l&&Tf(n),n.flags|=1,Xn(t,n,s,p),n.child)}function pg(t,n,s,l,f){if(ur(n),n.stateNode===null){var p=zr,M=s.contextType;typeof M=="object"&&M!==null&&(p=kn(M)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=od,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},If(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?kn(M):zr,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(rd(n,s,M,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&od.enqueueReplaceState(p,p.state,null),fl(n,l,p,f),ul(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,V=gr(s,w);p.props=V;var re=p.context,Se=s.contextType;M=zr,typeof Se=="object"&&Se!==null&&(M=kn(Se));var Ae=s.getDerivedStateFromProps;Se=typeof Ae=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Se||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||re!==M)&&eg(n,p,l,M),_s=!1;var ce=n.memoizedState;p.state=ce,fl(n,l,p,f),ul(),re=n.memoizedState,w||ce!==re||_s?(typeof Ae=="function"&&(rd(n,s,Ae,l),re=n.memoizedState),(V=_s||$0(n,s,V,l,ce,re,M))?(Se||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=M,l=V):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,Bf(t,n),M=n.memoizedProps,Se=gr(s,M),p.props=Se,Ae=n.pendingProps,ce=p.context,re=s.contextType,V=zr,typeof re=="object"&&re!==null&&(V=kn(re)),w=s.getDerivedStateFromProps,(re=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Ae||ce!==V)&&eg(n,p,l,V),_s=!1,ce=n.memoizedState,p.state=ce,fl(n,l,p,f),ul();var pe=n.memoizedState;M!==Ae||ce!==pe||_s||t!==null&&t.dependencies!==null&&gc(t.dependencies)?(typeof w=="function"&&(rd(n,s,w,l),pe=n.memoizedState),(Se=_s||$0(n,s,Se,l,ce,pe,V)||t!==null&&t.dependencies!==null&&gc(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,pe,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,pe,V)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=pe),p.props=l,p.state=pe,p.context=V,l=Se):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Pc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=pr(n,t.child,null,f),n.child=pr(n,null,s,f)):Xn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=ka(t,n,f),t}function mg(t,n,s,l){return lr(),n.flags|=256,Xn(t,n,s,l),n.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(t){return{baseLanes:t,cachePool:a0()}}function hd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=bi),t}function gg(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),M&&(f=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(f?Ss(n):Ms(),(t=on)?(t=b_(t,ki),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:hs!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=Zm(t),s.return=n,n.child=s,Vn=n,on=null)):t=null,t===null)throw ms(n);return Zd(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ms(),f=n.mode,w=Ic({mode:"hidden",children:w},f),l=or(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=dd(s),l.childLanes=hd(t,M,s),n.memoizedState=fd,gl(null,l)):(Ss(n),pd(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(p)n.flags&256?(Ss(n),n.flags&=-257,n=md(t,n,s)):n.memoizedState!==null?(Ms(),n.child=t.child,n.flags|=128,n=null):(Ms(),w=l.fallback,f=n.mode,l=Ic({mode:"visible",children:l.children},f),w=or(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,pr(n,t.child,null,s),l=n.child,l.memoizedState=dd(s),l.childLanes=hd(t,M,s),n.memoizedState=fd,n=gl(null,l));else if(Ss(n),Zd(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var re=M.dgst;M=re,l=Error(r(419)),l.stack="",l.digest=M,al({value:l,source:null,stack:null}),n=md(t,n,s)}else if(Cn||kr(t,n,s,!1),M=(s&t.childLanes)!==0,Cn||M){if(M=en,M!==null&&(l=Bn(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,rr(t,l),pi(M,t,l),cd;jd(w)||Wc(),n=md(t,n,s)}else jd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,on=Wi(w.nextSibling),Vn=n,Ut=!0,ps=null,ki=!1,t!==null&&Jm(n,t),n=pd(n,l.children),n.flags|=4096);return n}return f?(Ms(),w=l.fallback,f=n.mode,V=t.child,re=V.sibling,l=Ba(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,re!==null?w=Ba(re,w):(w=or(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,gl(null,l),l=n.child,w=t.child.memoizedState,w===null?w=dd(s):(f=w.cachePool,f!==null?(V=An._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=a0(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=hd(t,M,s),n.memoizedState=fd,gl(t.child,l)):(Ss(n),s=t.child,t=s.sibling,s=Ba(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function pd(t,n){return n=Ic({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ic(t,n){return t=Si(22,t,null,n),t.lanes=0,t}function md(t,n,s){return pr(n,t.child,null,s),t=pd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _g(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Df(t.return,n,s)}function gd(t,n,s,l,f,p){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=p)}function vg(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=yn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,Me(yn,M),Xn(t,n,l,s),l=Ut?il:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,s,n);else if(t.tag===19)_g(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&bc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),gd(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&bc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}gd(n,!0,s,null,p,l);break;case"together":gd(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ka(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),bs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(kr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Ba(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Ba(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function _d(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gc(t)))}function LM(t,n,s){switch(n.tag){case 3:xe(n,n.stateNode.containerInfo),gs(n,An,t.memoizedState.cache),lr();break;case 27:case 5:it(n);break;case 4:xe(n,n.stateNode.containerInfo);break;case 10:gs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ss(n),n.flags|=128,null):(s&n.child.childLanes)!==0?gg(t,n,s):(Ss(n),t=ka(t,n,s),t!==null?t.sibling:null);Ss(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(kr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return vg(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Me(yn,yn.current),l)break;return null;case 22:return n.lanes=0,ug(t,n,s,n.pendingProps);case 24:gs(n,An,t.memoizedState.cache)}return ka(t,n,s)}function xg(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!_d(t,s)&&(n.flags&128)===0)return Cn=!1,LM(t,n,s);Cn=(t.flags&131072)!==0}else Cn=!1,Ut&&(n.flags&1048576)!==0&&Qm(n,il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=dr(n.elementType),n.type=t,typeof t=="function")yf(t)?(l=gr(t,l),n.tag=1,n=pg(null,n,t,l,s)):(n.tag=0,n=ud(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===A){n.tag=11,n=og(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=lg(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return ud(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=gr(l,n.pendingProps),pg(t,n,l,f,s);case 3:e:{if(xe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,Bf(t,n),fl(n,l,null,s);var M=n.memoizedState;if(l=M.cache,gs(n,An,l),l!==p.cache&&Lf(n,[An],s,!0),ul(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=mg(t,n,l,s);break e}else if(l!==f){f=Hi(Error(r(424)),n),al(f),n=mg(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Wi(t.firstChild),Vn=n,Ut=!0,ps=null,ki=!0,s=u0(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(lr(),l===f){n=ka(t,n,s);break e}Xn(t,n,l,s)}n=n.child}return n;case 26:return Pc(t,n),t===null?(s=D_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ut||(s=n.type,t=n.pendingProps,l=Jc(ne.current).createElement(s),l[Lt]=n,l[Un]=t,Wn(l,s,t),mn(l),n.stateNode=l):n.memoizedState=D_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Ut&&(l=n.stateNode=R_(n.type,n.pendingProps,ne.current),Vn=n,ki=!0,f=on,ws(n.type)?(Kd=f,on=Wi(l.firstChild)):on=f),Xn(t,n,n.pendingProps.children,s),Pc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((f=l=on)&&(l=oy(l,n.type,n.pendingProps,ki),l!==null?(n.stateNode=l,Vn=n,on=Wi(l.firstChild),ki=!1,f=!0):f=!1),f||ms(n)),it(n),f=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,Wd(f,p)?l=null:M!==null&&Wd(f,M)&&(n.flags|=32),n.memoizedState!==null&&(f=Xf(t,n,yM,null,null,s),Ll._currentValue=f),Pc(t,n),Xn(t,n,l,s),n.child;case 6:return t===null&&Ut&&((t=s=on)&&(s=ly(s,n.pendingProps,ki),s!==null?(n.stateNode=s,Vn=n,on=null,t=!0):t=!1),t||ms(n)),null;case 13:return gg(t,n,s);case 4:return xe(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=pr(n,null,l,s):Xn(t,n,l,s),n.child;case 11:return og(t,n,n.type,n.pendingProps,s);case 7:return Xn(t,n,n.pendingProps,s),n.child;case 8:return Xn(t,n,n.pendingProps.children,s),n.child;case 12:return Xn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,gs(n,n.type,l.value),Xn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,ur(n),f=kn(f),l=l(f),n.flags|=1,Xn(t,n,l,s),n.child;case 14:return lg(t,n,n.type,n.pendingProps,s);case 15:return cg(t,n,n.type,n.pendingProps,s);case 19:return vg(t,n,s);case 31:return DM(t,n,s);case 22:return ug(t,n,s,n.pendingProps);case 24:return ur(n),l=kn(An),t===null?(f=Of(),f===null&&(f=en,p=Nf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},If(n),gs(n,An,f)):((t.lanes&s)!==0&&(Bf(t,n),fl(n,null,null,s),ul()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),gs(n,An,l)):(l=p.cache,gs(n,An,l),l!==f.cache&&Lf(n,[An],s,!0))),Xn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xa(t){t.flags|=4}function vd(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Yg())t.flags|=8192;else throw hr=Sc,Pf}else t.flags&=-16777217}function Sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P_(n))if(Yg())t.flags|=8192;else throw hr=Sc,Pf}function Bc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,to|=n)}function _l(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function NM(t,n,s){var l=n.pendingProps;switch(Af(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ha(An),Ie(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Vr(n)?Xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cf())),ln(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Xa(n),p!==null?(ln(n),Sg(n,p)):(ln(n),vd(n,f,null,l,s))):p?p!==t.memoizedState?(Xa(n),ln(n),Sg(n,p)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Xa(n),ln(n),vd(n,f,t,l,s)),null;case 27:if(Xe(n),s=ne.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Xa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ln(n),null}t=Oe.current,Vr(n)?$m(n):(t=R_(f,l,s),n.stateNode=t,Xa(n))}return ln(n),null;case 5:if(Xe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Xa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ln(n),null}if(p=Oe.current,Vr(n))$m(n);else{var M=Jc(ne.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[Lt]=n,p[Un]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;e:switch(Wn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xa(n)}}return ln(n),vd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Xa(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,Vr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||g_(t.nodeValue,s)),t||ms(n,!0)}else t=Jc(t).createTextNode(l),t[Lt]=n,n.stateNode=t}return ln(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Vr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Lt]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else s=Cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(yi(n),n):(yi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ln(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Vr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Lt]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),f=!1}else f=Cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(yi(n),n):(yi(n),null)}return yi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Bc(n,n.updateQueue),ln(n),null);case 4:return Ie(),t===null&&Hd(n.stateNode.containerInfo),ln(n),null;case 10:return Ha(n.type),ln(n),null;case 19:if(Q(yn),l=n.memoizedState,l===null)return ln(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)_l(l,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=bc(t),p!==null){for(n.flags|=128,_l(l,!1),t=p.updateQueue,n.updateQueue=t,Bc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)jm(s,t),s=s.sibling;return Me(yn,yn.current&1|2),Ut&&Fa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&ct()>Vc&&(n.flags|=128,f=!0,_l(l,!1),n.lanes=4194304)}else{if(!f)if(t=bc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Bc(n,t),_l(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ut)return ln(n),null}else 2*ct()-l.renderingStartTime>Vc&&s!==536870912&&(n.flags|=128,f=!0,_l(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,s=yn.current,Me(yn,f?s&1|2:s&1),Ut&&Fa(n,l.treeForkCount),t):(ln(n),null);case 22:case 23:return yi(n),Gf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),s=n.updateQueue,s!==null&&Bc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&Q(fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ha(An),ln(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function UM(t,n){switch(Af(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ha(An),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(yi(n),n.alternate===null)throw Error(r(340));lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(yi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(yn),null;case 4:return Ie(),null;case 10:return Ha(n.type),null;case 22:case 23:return yi(n),Gf(),t!==null&&Q(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ha(An),null;case 25:return null;default:return null}}function Mg(t,n){switch(Af(n),n.tag){case 3:Ha(An),Ie();break;case 26:case 27:case 5:Xe(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&yi(n);break;case 13:yi(n);break;case 19:Q(yn);break;case 10:Ha(n.type);break;case 22:case 23:yi(n),Gf(),t!==null&&Q(fr);break;case 24:Ha(An)}}function vl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==f)}}catch(w){jt(n,n.return,w)}}function ys(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,f=n;var V=s,re=w;try{re()}catch(Se){jt(f,V,Se)}}}l=l.next}while(l!==p)}}catch(Se){jt(n,n.return,Se)}}function yg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{d0(n,s)}catch(l){jt(t,t.return,l)}}}function Eg(t,n,s){s.props=gr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){jt(t,n,l)}}function xl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){jt(t,n,f)}}function _a(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){jt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){jt(t,n,f)}else s.current=null}function bg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){jt(t,t.return,f)}}function xd(t,n,s){try{var l=t.stateNode;ty(l,t.type,s,n),l[Un]=n}catch(f){jt(t,t.return,f)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ws(t.type)||t.tag===4}function Sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ws(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=vi));else if(l!==4&&(l===27&&ws(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Md(t,n,s),t=t.sibling;t!==null;)Md(t,n,s),t=t.sibling}function Fc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&ws(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Fc(t,n,s),t=t.sibling;t!==null;)Fc(t,n,s),t=t.sibling}function Ag(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Wn(n,l,s),n[Lt]=t,n[Un]=s}catch(p){jt(t,t.return,p)}}var Wa=!1,wn=!1,yd=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,zn=null;function OM(t,n){if(t=t.containerInfo,kd=su,t=zm(t),mf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,w=-1,V=-1,re=0,Se=0,Ae=t,ce=null;t:for(;;){for(var pe;Ae!==s||f!==0&&Ae.nodeType!==3||(w=M+f),Ae!==p||l!==0&&Ae.nodeType!==3||(V=M+l),Ae.nodeType===3&&(M+=Ae.nodeValue.length),(pe=Ae.firstChild)!==null;)ce=Ae,Ae=pe;for(;;){if(Ae===t)break t;if(ce===s&&++re===f&&(w=M),ce===p&&++Se===l&&(V=M),(pe=Ae.nextSibling)!==null)break;Ae=ce,ce=Ae.parentNode}Ae=pe}s=w===-1||V===-1?null:{start:w,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xd={focusedElem:t,selectionRange:s},su=!1,zn=n;zn!==null;)if(n=zn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,zn=t;else for(;zn!==null;){switch(n=zn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var $e=gr(s.type,f);t=l.getSnapshotBeforeUpdate($e,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(ot){jt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)qd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,zn=t;break}zn=n.return}}function Cg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:qa(t,s),l&4&&vl(5,s);break;case 1:if(qa(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){jt(s,s.return,M)}else{var f=gr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){jt(s,s.return,M)}}l&64&&yg(s),l&512&&xl(s,s.return);break;case 3:if(qa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{d0(t,n)}catch(M){jt(s,s.return,M)}}break;case 27:n===null&&l&4&&Ag(s);case 26:case 5:qa(t,s),n===null&&l&4&&bg(s),l&512&&xl(s,s.return);break;case 12:qa(t,s);break;case 31:qa(t,s),l&4&&Lg(t,s);break;case 13:qa(t,s),l&4&&Ng(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=kM.bind(null,s),cy(t,s))));break;case 22:if(l=s.memoizedState!==null||Wa,!l){n=n!==null&&n.memoizedState!==null||wn,f=Wa;var p=wn;Wa=l,(wn=n)&&!p?ja(t,s,(s.subtreeFlags&8772)!==0):qa(t,s),Wa=f,wn=p}break;case 30:break;default:qa(t,s)}}function wg(t){var n=t.alternate;n!==null&&(t.alternate=null,wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ea(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,ui=!1;function Ya(t,n,s){for(s=s.child;s!==null;)Dg(t,n,s),s=s.sibling}function Dg(t,n,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:wn||_a(s,n),Ya(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wn||_a(s,n);var l=hn,f=ui;ws(s.type)&&(hn=s.stateNode,ui=!1),Ya(t,n,s),Cl(s.stateNode),hn=l,ui=f;break;case 5:wn||_a(s,n);case 6:if(l=hn,f=ui,hn=null,Ya(t,n,s),hn=l,ui=f,hn!==null)if(ui)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(s.stateNode)}catch(p){jt(s,n,p)}else try{hn.removeChild(s.stateNode)}catch(p){jt(s,n,p)}break;case 18:hn!==null&&(ui?(t=hn,y_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),co(t)):y_(hn,s.stateNode));break;case 4:l=hn,f=ui,hn=s.stateNode.containerInfo,ui=!0,Ya(t,n,s),hn=l,ui=f;break;case 0:case 11:case 14:case 15:ys(2,s,n),wn||ys(4,s,n),Ya(t,n,s);break;case 1:wn||(_a(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Eg(s,n,l)),Ya(t,n,s);break;case 21:Ya(t,n,s);break;case 22:wn=(l=wn)||s.memoizedState!==null,Ya(t,n,s),wn=l;break;default:Ya(t,n,s)}}function Lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{co(t)}catch(s){jt(n,n.return,s)}}}function Ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{co(t)}catch(s){jt(n,n.return,s)}}function PM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rg),n;default:throw Error(r(435,t.tag))}}function zc(t,n){var s=PM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=XM.bind(null,t,l);l.then(f,f)}})}function fi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,M=n,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(ws(w.type)){hn=w.stateNode,ui=!1;break e}break;case 5:hn=w.stateNode,ui=!1;break e;case 3:case 4:hn=w.stateNode.containerInfo,ui=!0;break e}w=w.return}if(hn===null)throw Error(r(160));Dg(p,M,f),hn=null,ui=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ug(n,t),n=n.sibling}var aa=null;function Ug(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fi(n,t),di(t),l&4&&(ys(3,t,t.return),vl(3,t),ys(5,t,t.return));break;case 1:fi(n,t),di(t),l&512&&(wn||s===null||_a(s,s.return)),l&64&&Wa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=aa;if(fi(n,t),di(t),l&512&&(wn||s===null||_a(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Li]||p[Lt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Wn(p,l,s),p[Lt]=t,mn(p),l=p;break e;case"link":var M=U_("link","href",f).get(l+(s.href||""));if(M){for(var w=0;w<M.length;w++)if(p=M[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(w,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;case"meta":if(M=U_("meta","content",f).get(l+(s.content||""))){for(w=0;w<M.length;w++)if(p=M[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(w,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[Lt]=t,mn(p),l=p}t.stateNode=l}else O_(f,t.type,t.stateNode);else t.stateNode=N_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?O_(f,t.type,t.stateNode):N_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&xd(t,t.memoizedProps,s.memoizedProps)}break;case 27:fi(n,t),di(t),l&512&&(wn||s===null||_a(s,s.return)),s!==null&&l&4&&xd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(fi(n,t),di(t),l&512&&(wn||s===null||_a(s,s.return)),t.flags&32){f=t.stateNode;try{Gn(f,"")}catch($e){jt(t,t.return,$e)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,xd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(yd=!0);break;case 6:if(fi(n,t),di(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch($e){jt(t,t.return,$e)}}break;case 3:if(tu=null,f=aa,aa=$c(n.containerInfo),fi(n,t),aa=f,di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{co(n.containerInfo)}catch($e){jt(t,t.return,$e)}yd&&(yd=!1,Og(t));break;case 4:l=aa,aa=$c(t.stateNode.containerInfo),fi(n,t),di(t),aa=l;break;case 12:fi(n,t),di(t);break;case 31:fi(n,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zc(t,l)));break;case 13:fi(n,t),di(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Gc=ct()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,re=Wa,Se=wn;if(Wa=re||f,wn=Se||V,fi(n,t),wn=Se,Wa=re,di(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Wa||wn||_r(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(p=V.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=V.stateNode;var Ae=V.memoizedProps.style,ce=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch($e){jt(V,V.return,$e)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch($e){jt(V,V.return,$e)}}}else if(n.tag===18){if(s===null){V=n;try{var pe=V.stateNode;f?E_(pe,!0):E_(V.stateNode,!1)}catch($e){jt(V,V.return,$e)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,zc(t,s))));break;case 19:fi(n,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zc(t,l)));break;case 30:break;case 21:break;default:fi(n,t),di(t)}}function di(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(Tg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=Sd(t);Fc(t,p,f);break;case 5:var M=s.stateNode;s.flags&32&&(Gn(M,""),s.flags&=-33);var w=Sd(t);Fc(t,w,M);break;case 3:case 4:var V=s.stateNode.containerInfo,re=Sd(t);Md(t,re,V);break;default:throw Error(r(161))}}catch(Se){jt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function _r(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ys(4,n,n.return),_r(n);break;case 1:_a(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Eg(n,n.return,s),_r(n);break;case 27:Cl(n.stateNode);case 26:case 5:_a(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}t=t.sibling}}function ja(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:ja(f,p,s),vl(4,p);break;case 1:if(ja(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){jt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)f0(V[f],w)}catch(re){jt(l,l.return,re)}}s&&M&64&&yg(p),xl(p,p.return);break;case 27:Ag(p);case 26:case 5:ja(f,p,s),s&&l===null&&M&4&&bg(p),xl(p,p.return);break;case 12:ja(f,p,s);break;case 31:ja(f,p,s),s&&M&4&&Lg(f,p);break;case 13:ja(f,p,s),s&&M&4&&Ng(f,p);break;case 22:p.memoizedState===null&&ja(f,p,s),xl(p,p.return);break;case 30:break;default:ja(f,p,s)}n=n.sibling}}function Ed(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&sl(s))}function bd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&sl(t))}function sa(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(t,n,s,l),n=n.sibling}function Pg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:sa(t,n,s,l),f&2048&&vl(9,n);break;case 1:sa(t,n,s,l);break;case 3:sa(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&sl(t)));break;case 12:if(f&2048){sa(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,w=p.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){jt(n,n.return,V)}}else sa(t,n,s,l);break;case 31:sa(t,n,s,l);break;case 13:sa(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?sa(t,n,s,l):Sl(t,n):p._visibility&2?sa(t,n,s,l):(p._visibility|=2,Jr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Ed(M,n);break;case 24:sa(t,n,s,l),f&2048&&bd(n.alternate,n);break;default:sa(t,n,s,l)}}function Jr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,M=n,w=s,V=l,re=M.flags;switch(M.tag){case 0:case 11:case 15:Jr(p,M,w,V,f),vl(8,M);break;case 23:break;case 22:var Se=M.stateNode;M.memoizedState!==null?Se._visibility&2?Jr(p,M,w,V,f):Sl(p,M):(Se._visibility|=2,Jr(p,M,w,V,f)),f&&re&2048&&Ed(M.alternate,M);break;case 24:Jr(p,M,w,V,f),f&&re&2048&&bd(M.alternate,M);break;default:Jr(p,M,w,V,f)}n=n.sibling}}function Sl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Sl(s,l),f&2048&&Ed(l.alternate,l);break;case 24:Sl(s,l),f&2048&&bd(l.alternate,l);break;default:Sl(s,l)}n=n.sibling}}var Ml=8192;function $r(t,n,s){if(t.subtreeFlags&Ml)for(t=t.child;t!==null;)Ig(t,n,s),t=t.sibling}function Ig(t,n,s){switch(t.tag){case 26:$r(t,n,s),t.flags&Ml&&t.memoizedState!==null&&My(s,aa,t.memoizedState,t.memoizedProps);break;case 5:$r(t,n,s);break;case 3:case 4:var l=aa;aa=$c(t.stateNode.containerInfo),$r(t,n,s),aa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ml,Ml=16777216,$r(t,n,s),Ml=l):$r(t,n,s));break;default:$r(t,n,s)}}function Bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];zn=l,zg(l,t)}Bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 0:case 11:case 15:yl(t),t.flags&2048&&ys(9,t,t.return);break;case 3:yl(t);break;case 12:yl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hc(t)):yl(t);break;default:yl(t)}}function Hc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];zn=l,zg(l,t)}Bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ys(8,n,n.return),Hc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Hc(n));break;default:Hc(n)}t=t.sibling}}function zg(t,n){for(;zn!==null;){var s=zn;switch(s.tag){case 0:case 11:case 15:ys(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,zn=l;else e:for(s=t;zn!==null;){l=zn;var f=l.sibling,p=l.return;if(wg(l),l===s){zn=null;break e}if(f!==null){f.return=p,zn=f;break e}zn=p}}}var IM={getCacheForType:function(t){var n=kn(An),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return kn(An).controller.signal}},BM=typeof WeakMap=="function"?WeakMap:Map,kt=0,en=null,At=null,wt=0,qt=0,Ei=null,Es=!1,eo=!1,Td=!1,Za=0,_n=0,bs=0,vr=0,Ad=0,bi=0,to=0,El=null,hi=null,Rd=!1,Gc=0,Hg=0,Vc=1/0,kc=null,Ts=null,On=0,As=null,no=null,Ka=0,Cd=0,wd=null,Gg=null,bl=0,Dd=null;function Ti(){return(kt&2)!==0&&wt!==0?wt&-wt:z.T!==null?Id():wa()}function Vg(){if(bi===0)if((wt&536870912)===0||Ut){var t=Ke;Ke<<=1,(Ke&3932160)===0&&(Ke=262144),bi=t}else bi=536870912;return t=Mi.current,t!==null&&(t.flags|=32),bi}function pi(t,n,s){(t===en&&(qt===2||qt===9)||t.cancelPendingCommit!==null)&&(io(t,0),Rs(t,wt,bi,!1)),qe(t,s),((kt&2)===0||t!==en)&&(t===en&&((kt&2)===0&&(vr|=s),_n===4&&Rs(t,wt,bi,!1)),va(t))}function kg(t,n,s){if((kt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),f=l?HM(t,n):Nd(t,n,!0),p=l;do{if(f===0){eo&&!l&&Rs(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!FM(s)){f=Nd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var w=t;f=El;var V=w.current.memoizedState.isDehydrated;if(V&&(io(w,M).flags|=256),M=Nd(w,M,!1),M!==2){if(Td&&!V){w.errorRecoveryDisabledLanes|=p,vr|=p,f=4;break e}p=hi,hi=f,p!==null&&(hi===null?hi=p:hi.push.apply(hi,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){io(t,0),Rs(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Rs(l,n,bi,!Es);break e;case 2:hi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Gc+300-ct(),10<f)){if(Rs(l,n,bi,!Es),ve(l,0,!0)!==0)break e;Ka=n,l.timeoutHandle=S_(Xg.bind(null,l,s,hi,kc,Rd,n,bi,vr,to,Es,p,"Throttled",-0,0),f);break e}Xg(l,s,hi,kc,Rd,n,bi,vr,to,Es,p,null,-0,0)}}break}while(!0);va(t)}function Xg(t,n,s,l,f,p,M,w,V,re,Se,Ae,ce,pe){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},Ig(n,p,Ae);var $e=(p&62914560)===p?Gc-ct():(p&4194048)===p?Hg-ct():0;if($e=yy(Ae,$e),$e!==null){Ka=p,t.cancelPendingCommit=$e(Jg.bind(null,t,n,p,s,l,f,M,w,V,Se,Ae,null,ce,pe)),Rs(t,p,M,!re);return}}Jg(t,n,p,s,l,f,M,w,V)}function FM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!xi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rs(t,n,s,l){n&=~Ad,n&=~vr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ye(f),M=1<<p;l[p]=-1,f&=~M}s!==0&&Ft(t,s,n)}function Xc(){return(kt&6)===0?(Tl(0),!1):!0}function Ld(){if(At!==null){if(qt===0)var t=At.return;else t=At,za=cr=null,qf(t),qr=null,ol=0,t=At;for(;t!==null;)Mg(t.alternate,t),t=t.return;At=null}}function io(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ay(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ka=0,Ld(),en=t,At=s=Ba(t.current,null),wt=n,qt=0,Ei=null,Es=!1,eo=Le(t,n),Td=!1,to=bi=Ad=vr=bs=_n=0,hi=El=null,Rd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ye(l),p=1<<f;n|=t[f],l&=~p}return Za=n,fc(),s}function Wg(t,n){gt=null,z.H=ml,n===Yr||n===xc?(n=o0(),qt=3):n===Pf?(n=o0(),qt=4):qt=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ei=n,At===null&&(_n=1,Uc(t,Hi(n,t.current)))}function Yg(){var t=Mi.current;return t===null?!0:(wt&4194048)===wt?Xi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===Xi:!1}function qg(){var t=z.H;return z.H=ml,t===null?ml:t}function jg(){var t=z.A;return z.A=IM,t}function Wc(){_n=4,Es||(wt&4194048)!==wt&&Mi.current!==null||(eo=!0),(bs&134217727)===0&&(vr&134217727)===0||en===null||Rs(en,wt,bi,!1)}function Nd(t,n,s){var l=kt;kt|=2;var f=qg(),p=jg();(en!==t||wt!==n)&&(kc=null,io(t,n)),n=!1;var M=_n;e:do try{if(qt!==0&&At!==null){var w=At,V=Ei;switch(qt){case 8:Ld(),M=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(n=!0);var re=qt;if(qt=0,Ei=null,ao(t,w,V,re),s&&eo){M=0;break e}break;default:re=qt,qt=0,Ei=null,ao(t,w,V,re)}}zM(),M=_n;break}catch(Se){Wg(t,Se)}while(!0);return n&&t.shellSuspendCounter++,za=cr=null,kt=l,z.H=f,z.A=p,At===null&&(en=null,wt=0,fc()),M}function zM(){for(;At!==null;)Zg(At)}function HM(t,n){var s=kt;kt|=2;var l=qg(),f=jg();en!==t||wt!==n?(kc=null,Vc=ct()+500,io(t,n)):eo=Le(t,n);e:do try{if(qt!==0&&At!==null){n=At;var p=Ei;t:switch(qt){case 1:qt=0,Ei=null,ao(t,n,p,1);break;case 2:case 9:if(s0(p)){qt=0,Ei=null,Kg(n);break}n=function(){qt!==2&&qt!==9||en!==t||(qt=7),va(t)},p.then(n,n);break e;case 3:qt=7;break e;case 4:qt=5;break e;case 7:s0(p)?(qt=0,Ei=null,Kg(n)):(qt=0,Ei=null,ao(t,n,p,7));break;case 5:var M=null;switch(At.tag){case 26:M=At.memoizedState;case 5:case 27:var w=At;if(M?P_(M):w.stateNode.complete){qt=0,Ei=null;var V=w.sibling;if(V!==null)At=V;else{var re=w.return;re!==null?(At=re,Yc(re)):At=null}break t}}qt=0,Ei=null,ao(t,n,p,5);break;case 6:qt=0,Ei=null,ao(t,n,p,6);break;case 8:Ld(),_n=6;break e;default:throw Error(r(462))}}GM();break}catch(Se){Wg(t,Se)}while(!0);return za=cr=null,z.H=l,z.A=f,kt=s,At!==null?0:(en=null,wt=0,fc(),_n)}function GM(){for(;At!==null&&!dn();)Zg(At)}function Zg(t){var n=xg(t.alternate,t,Za);t.memoizedProps=t.pendingProps,n===null?Yc(t):At=n}function Kg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=hg(s,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=hg(s,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:qf(n);default:Mg(s,n),n=At=jm(n,Za),n=xg(s,n,Za)}t.memoizedProps=t.pendingProps,n===null?Yc(t):At=n}function ao(t,n,s,l){za=cr=null,qf(n),qr=null,ol=0;var f=n.return;try{if(wM(t,f,n,s,wt)){_n=1,Uc(t,Hi(s,t.current)),At=null;return}}catch(p){if(f!==null)throw At=f,p;_n=1,Uc(t,Hi(s,t.current)),At=null;return}n.flags&32768?(Ut||l===1?t=!0:eo||(wt&536870912)!==0?t=!1:(Es=t=!0,(l===2||l===9||l===3||l===6)&&(l=Mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qg(n,t)):Yc(n)}function Yc(t){var n=t;do{if((n.flags&32768)!==0){Qg(n,Es);return}t=n.return;var s=NM(n.alternate,n,Za);if(s!==null){At=s;return}if(n=n.sibling,n!==null){At=n;return}At=n=t}while(n!==null);_n===0&&(_n=5)}function Qg(t,n){do{var s=UM(t.alternate,t);if(s!==null){s.flags&=32767,At=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){At=t;return}At=t=s}while(t!==null);_n=6,At=null}function Jg(t,n,s,l,f,p,M,w,V){t.cancelPendingCommit=null;do qc();while(On!==0);if((kt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Sf,Bt(t,s,p,M,w,V),t===en&&(At=en=null,wt=0),no=n,As=t,Ka=s,Cd=p,wd=f,Gg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,WM(J,function(){return i_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=H.p,H.p=2,M=kt,kt|=4;try{OM(t,n,s)}finally{kt=M,H.p=f,z.T=l}}On=1,$g(),e_(),t_()}}function $g(){if(On===1){On=0;var t=As,n=no,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=kt;kt|=4;try{Ug(n,t);var p=Xd,M=zm(t.containerInfo),w=p.focusedElem,V=p.selectionRange;if(M!==w&&w&&w.ownerDocument&&Fm(w.ownerDocument.documentElement,w)){if(V!==null&&mf(w)){var re=V.start,Se=V.end;if(Se===void 0&&(Se=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(Se,w.value.length);else{var Ae=w.ownerDocument||document,ce=Ae&&Ae.defaultView||window;if(ce.getSelection){var pe=ce.getSelection(),$e=w.textContent.length,ot=Math.min(V.start,$e),$t=V.end===void 0?ot:Math.min(V.end,$e);!pe.extend&&ot>$t&&(M=$t,$t=ot,ot=M);var $=Bm(w,ot),Y=Bm(w,$t);if($&&Y&&(pe.rangeCount!==1||pe.anchorNode!==$.node||pe.anchorOffset!==$.offset||pe.focusNode!==Y.node||pe.focusOffset!==Y.offset)){var se=Ae.createRange();se.setStart($.node,$.offset),pe.removeAllRanges(),ot>$t?(pe.addRange(se),pe.extend(Y.node,Y.offset)):(se.setEnd(Y.node,Y.offset),pe.addRange(se))}}}}for(Ae=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&Ae.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ae.length;w++){var Ee=Ae[w];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}su=!!kd,Xd=kd=null}finally{kt=f,H.p=l,z.T=s}}t.current=n,On=2}}function e_(){if(On===2){On=0;var t=As,n=no,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=kt;kt|=4;try{Cg(t,n.alternate,n)}finally{kt=f,H.p=l,z.T=s}}On=3}}function t_(){if(On===4||On===3){On=0,K();var t=As,n=no,s=Ka,l=Gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,no=As=null,n_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ts=null),us(s),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=H.p,H.p=2,z.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var w=l[M];p(w.value,{componentStack:w.stack})}}finally{z.T=n,H.p=f}}(Ka&3)!==0&&qc(),va(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Dd?bl++:(bl=0,Dd=t):bl=0,Tl(0)}}function n_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,sl(n)))}function qc(){return $g(),e_(),t_(),i_()}function i_(){if(On!==5)return!1;var t=As,n=Cd;Cd=0;var s=us(Ka),l=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=wd,wd=null;var p=As,M=Ka;if(On=0,no=As=null,Ka=0,(kt&6)!==0)throw Error(r(331));var w=kt;if(kt|=4,Fg(p.current),Pg(p,p.current,M,s),kt=w,Tl(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(he,p)}catch{}return!0}finally{H.p=f,z.T=l,n_(t,n)}}function a_(t,n,s){n=Hi(s,n),n=ld(t.stateNode,n,2),t=xs(t,n,2),t!==null&&(qe(t,2),va(t))}function jt(t,n,s){if(t.tag===3)a_(t,t,s);else for(;n!==null;){if(n.tag===3){a_(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ts===null||!Ts.has(l))){t=Hi(s,t),s=sg(2),l=xs(n,s,2),l!==null&&(rg(s,l,n,t),qe(l,2),va(l));break}}n=n.return}}function Ud(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new BM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Td=!0,f.add(s),t=VM.bind(null,t,n,s),n.then(t,t))}function VM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(wt&s)===s&&(_n===4||_n===3&&(wt&62914560)===wt&&300>ct()-Gc?(kt&2)===0&&io(t,0):Ad|=s,to===wt&&(to=0)),va(t)}function s_(t,n){n===0&&(n=Te()),t=rr(t,n),t!==null&&(qe(t,n),va(t))}function kM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),s_(t,s)}function XM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),s_(t,s)}function WM(t,n){return fn(t,n)}var jc=null,so=null,Od=!1,Zc=!1,Pd=!1,Cs=0;function va(t){t!==so&&t.next===null&&(so===null?jc=so=t:so=so.next=t),Zc=!0,Od||(Od=!0,qM())}function Tl(t,n){if(!Pd&&Zc){Pd=!0;do for(var s=!1,l=jc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Ye(42|t)+1)-1,p&=f&~(M&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,c_(l,p))}else p=wt,p=ve(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Le(l,p)||(s=!0,c_(l,p));l=l.next}while(s);Pd=!1}}function YM(){r_()}function r_(){Zc=Od=!1;var t=0;Cs!==0&&iy()&&(t=Cs);for(var n=ct(),s=null,l=jc;l!==null;){var f=l.next,p=o_(l,n);p===0?(l.next=null,s===null?jc=f:s.next=f,f===null&&(so=s)):(s=l,(t!==0||(p&3)!==0)&&(Zc=!0)),l=f}On!==0&&On!==5||Tl(t),Cs!==0&&(Cs=0)}function o_(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ye(p),w=1<<M,V=f[M];V===-1?((w&s)===0||(w&l)!==0)&&(f[M]=ze(w,n)):V<=n&&(t.expiredLanes|=w),p&=~w}if(n=en,s=wt,s=ve(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(qt===2||qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Yt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Le(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Yt(l),us(s)){case 2:case 8:s=E;break;case 32:s=J;break;case 268435456:s=ge;break;default:s=J}return l=l_.bind(null,t),s=fn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Yt(l),t.callbackPriority=2,t.callbackNode=null,2}function l_(t,n){if(On!==0&&On!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(qc()&&t.callbackNode!==s)return null;var l=wt;return l=ve(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(kg(t,l,n),o_(t,ct()),t.callbackNode!=null&&t.callbackNode===s?l_.bind(null,t):null)}function c_(t,n){if(qc())return null;kg(t,n,!0)}function qM(){sy(function(){(kt&6)!==0?fn(B,YM):r_()})}function Id(){if(Cs===0){var t=Xr;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Cs=t}return Cs}function u_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pa(""+t)}function f_(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function jM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=u_((f[Un]||null).action),M=l.submitter;M&&(n=(n=M[Un]||null)?u_(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var w=new Yo("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Cs!==0){var V=M?f_(f,M):new FormData(f);nd(s,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(w.preventDefault(),V=M?f_(f,M):new FormData(f),nd(s,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var Bd=0;Bd<xf.length;Bd++){var Fd=xf[Bd],ZM=Fd.toLowerCase(),KM=Fd[0].toUpperCase()+Fd.slice(1);ia(ZM,"on"+KM)}ia(Vm,"onAnimationEnd"),ia(km,"onAnimationIteration"),ia(Xm,"onAnimationStart"),ia("dblclick","onDoubleClick"),ia("focusin","onFocus"),ia("focusout","onBlur"),ia(dM,"onTransitionRun"),ia(hM,"onTransitionStart"),ia(pM,"onTransitionCancel"),ia(Wm,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function d_(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var w=l[M],V=w.instance,re=w.currentTarget;if(w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(Se){uc(Se)}f.currentTarget=null,p=V}else for(M=0;M<l.length;M++){if(w=l[M],V=w.instance,re=w.currentTarget,w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(Se){uc(Se)}f.currentTarget=null,p=V}}}}function Rt(t,n){var s=n[$i];s===void 0&&(s=n[$i]=new Set);var l=t+"__bubble";s.has(l)||(h_(n,t,2,!1),s.add(l))}function zd(t,n,s){var l=0;n&&(l|=4),h_(s,t,l,n)}var Kc="_reactListening"+Math.random().toString(36).slice(2);function Hd(t){if(!t[Kc]){t[Kc]=!0,$s.forEach(function(s){s!=="selectionchange"&&(QM.has(s)||zd(s,!1,t),zd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kc]||(n[Kc]=!0,zd("selectionchange",!1,n))}}function h_(t,n,s,l){switch(V_(n)){case 2:var f=Ty;break;case 8:f=Ay;break;default:f=th}s=f.bind(null,n,s,t),f=void 0,!ko||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Gd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;w!==null;){if(M=Ni(w),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=p=M;continue e}w=w.parentNode}}l=l.return}uf(function(){var re=p,Se=La(s),Ae=[];e:{var ce=Ym.get(t);if(ce!==void 0){var pe=Yo,$e=t;switch(t){case"keypress":if(Ur(s)===0)break e;case"keydown":case"keyup":pe=XS;break;case"focusin":$e="focus",pe=Mn;break;case"focusout":$e="blur",pe=Mn;break;case"beforeblur":case"afterblur":pe=Mn;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=qS;break;case Vm:case km:case Xm:pe=Qn;break;case Wm:pe=ZS;break;case"scroll":case"scrollend":pe=qo;break;case"wheel":pe=QS;break;case"copy":case"cut":case"paste":pe=Or;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Em;break;case"toggle":case"beforetoggle":pe=$S}var ot=(n&4)!==0,$t=!ot&&(t==="scroll"||t==="scrollend"),$=ot?ce!==null?ce+"Capture":null:ce;ot=[];for(var Y=re,se;Y!==null;){var Ee=Y;if(se=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||se===null||$===null||(Ee=Pi(Y,$),Ee!=null&&ot.push(Rl(Y,Ee,se))),$t)break;Y=Y.return}0<ot.length&&(ce=new pe(ce,$e,null,s,Se),Ae.push({event:ce,listeners:ot}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ce&&s!==Nr&&($e=s.relatedTarget||s.fromElement)&&(Ni($e)||$e[Zn]))break e;if((pe||ce)&&(ce=Se.window===Se?Se:(ce=Se.ownerDocument)?ce.defaultView||ce.parentWindow:window,pe?($e=s.relatedTarget||s.toElement,pe=re,$e=$e?Ni($e):null,$e!==null&&($t=c($e),ot=$e.tag,$e!==$t||ot!==5&&ot!==27&&ot!==6)&&($e=null)):(pe=null,$e=re),pe!==$e)){if(ot=Ko,Ee="onMouseLeave",$="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Em,Ee="onPointerLeave",$="onPointerEnter",Y="pointer"),$t=pe==null?ce:ha(pe),se=$e==null?ce:ha($e),ce=new ot(Ee,Y+"leave",pe,s,Se),ce.target=$t,ce.relatedTarget=se,Ee=null,Ni(Se)===re&&(ot=new ot($,Y+"enter",$e,s,Se),ot.target=se,ot.relatedTarget=$t,Ee=ot),$t=Ee,pe&&$e)t:{for(ot=JM,$=pe,Y=$e,se=0,Ee=$;Ee;Ee=ot(Ee))se++;Ee=0;for(var at=Y;at;at=ot(at))Ee++;for(;0<se-Ee;)$=ot($),se--;for(;0<Ee-se;)Y=ot(Y),Ee--;for(;se--;){if($===Y||Y!==null&&$===Y.alternate){ot=$;break t}$=ot($),Y=ot(Y)}ot=null}else ot=null;pe!==null&&p_(Ae,ce,pe,ot,!1),$e!==null&&$t!==null&&p_(Ae,$t,$e,ot,!0)}}e:{if(ce=re?ha(re):window,pe=ce.nodeName&&ce.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ce.type==="file")var Ht=Lm;else if(wm(ce))if(Nm)Ht=cM;else{Ht=oM;var nt=rM}else pe=ce.nodeName,!pe||pe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&Nt(re.elementType)&&(Ht=Lm):Ht=lM;if(Ht&&(Ht=Ht(t,re))){Dm(Ae,Ht,s,Se);break e}nt&&nt(t,ce,re),t==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&rt(ce,"number",ce.value)}switch(nt=re?ha(re):window,t){case"focusin":(wm(nt)||nt.contentEditable==="true")&&(Ir=nt,gf=re,nl=null);break;case"focusout":nl=gf=Ir=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Hm(Ae,s,Se);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":Hm(Ae,s,Se)}var vt;if(df)e:{switch(t){case"compositionstart":var Dt="onCompositionStart";break e;case"compositionend":Dt="onCompositionEnd";break e;case"compositionupdate":Dt="onCompositionUpdate";break e}Dt=void 0}else Pr?Rm(t,s)&&(Dt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Dt="onCompositionStart");Dt&&(bm&&s.locale!=="ko"&&(Pr||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&Pr&&(vt=Wo()):(Ii=Se,Xo="value"in Ii?Ii.value:Ii.textContent,Pr=!0)),nt=Qc(re,Dt),0<nt.length&&(Dt=new Ia(Dt,t,null,s,Se),Ae.push({event:Dt,listeners:nt}),vt?Dt.data=vt:(vt=Cm(s),vt!==null&&(Dt.data=vt)))),(vt=tM?nM(t,s):iM(t,s))&&(Dt=Qc(re,"onBeforeInput"),0<Dt.length&&(nt=new Ia("onBeforeInput","beforeinput",null,s,Se),Ae.push({event:nt,listeners:Dt}),nt.data=vt)),jM(Ae,t,re,s,Se)}d_(Ae,n)})}function Rl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Qc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Pi(t,s),f!=null&&l.unshift(Rl(t,f,p)),f=Pi(t,n),f!=null&&l.push(Rl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function JM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function p_(t,n,s,l,f){for(var p=n._reactName,M=[];s!==null&&s!==l;){var w=s,V=w.alternate,re=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||re===null||(V=re,f?(re=Pi(s,p),re!=null&&M.unshift(Rl(s,re,V))):f||(re=Pi(s,p),re!=null&&M.push(Rl(s,re,V)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var $M=/\r\n?/g,ey=/\u0000|\uFFFD/g;function m_(t){return(typeof t=="string"?t:""+t).replace($M,`
`).replace(ey,"")}function g_(t,n){return n=m_(n),m_(t)===n}function Jt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Gn(t,""+l);break;case"className":Ze(t,"class",l);break;case"tabIndex":Ze(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,s,l);break;case"style":li(t,l,p);break;case"data":if(n!=="object"){Ze(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=pa(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Jt(t,n,"name",f.name,f,null),Jt(t,n,"formEncType",f.formEncType,f,null),Jt(t,n,"formMethod",f.formMethod,f,null),Jt(t,n,"formTarget",f.formTarget,f,null)):(Jt(t,n,"encType",f.encType,f,null),Jt(t,n,"method",f.method,f,null),Jt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=pa(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=vi);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=pa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),Be(t,"popover",l);break;case"xlinkActuate":Z(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Z(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Z(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Z(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Z(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Z(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Z(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Z(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Z(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Be(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ci.get(s)||s,Be(t,s,l))}}function Vd(t,n,s,l,f,p){switch(s){case"style":li(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&Gn(t,""+l);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Un]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Be(t,s,l)}}}function Wn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Jt(t,n,p,M,s,null)}}f&&Jt(t,n,"srcSet",s.srcSet,s,null),l&&Jt(t,n,"src",s.src,s,null);return;case"input":Rt("invalid",t);var w=p=M=f=null,V=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var Se=s[l];if(Se!=null)switch(l){case"name":f=Se;break;case"type":M=Se;break;case"checked":V=Se;break;case"defaultChecked":re=Se;break;case"value":p=Se;break;case"defaultValue":w=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(r(137,n));break;default:Jt(t,n,l,Se,s,null)}}Xt(t,p,w,V,re,M,f,!1);return;case"select":Rt("invalid",t),l=M=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:Jt(t,n,f,w,s,null)}n=p,s=M,t.multiple=!!l,n!=null?Ct(t,!!l,n,!1):s!=null&&Ct(t,!!l,s,!0);return;case"textarea":Rt("invalid",t),p=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(w=s[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Jt(t,n,M,w,s,null)}Sn(t,l,f,p);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(t,n,V,l,s,null)}return;case"dialog":Rt("beforetoggle",t),Rt("toggle",t),Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(l=0;l<Al.length;l++)Rt(Al[l],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Jt(t,n,re,l,s,null)}return;default:if(Nt(n)){for(Se in s)s.hasOwnProperty(Se)&&(l=s[Se],l!==void 0&&Vd(t,n,Se,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Jt(t,n,w,l,s,null))}function ty(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,w=null,V=null,re=null,Se=null;for(pe in s){var Ae=s[pe];if(s.hasOwnProperty(pe)&&Ae!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=Ae;default:l.hasOwnProperty(pe)||Jt(t,n,pe,null,l,Ae)}}for(var ce in l){var pe=l[ce];if(Ae=s[ce],l.hasOwnProperty(ce)&&(pe!=null||Ae!=null))switch(ce){case"type":p=pe;break;case"name":f=pe;break;case"checked":re=pe;break;case"defaultChecked":Se=pe;break;case"value":M=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:pe!==Ae&&Jt(t,n,ce,pe,l,Ae)}}Ne(t,M,w,V,re,Se,p,f);return;case"select":pe=M=w=ce=null;for(p in s)if(V=s[p],s.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":pe=V;default:l.hasOwnProperty(p)||Jt(t,n,p,null,l,V)}for(f in l)if(p=l[f],V=s[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":ce=p;break;case"defaultValue":w=p;break;case"multiple":M=p;default:p!==V&&Jt(t,n,f,p,l,V)}n=w,s=M,l=pe,ce!=null?Ct(t,!!s,ce,!1):!!l!=!!s&&(n!=null?Ct(t,!!s,n,!0):Ct(t,!!s,s?[]:"",!1));return;case"textarea":pe=ce=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Jt(t,n,w,null,l,f)}for(M in l)if(f=l[M],p=s[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":ce=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Jt(t,n,M,f,l,p)}an(t,ce,pe);return;case"option":for(var $e in s)if(ce=s[$e],s.hasOwnProperty($e)&&ce!=null&&!l.hasOwnProperty($e))switch($e){case"selected":t.selected=!1;break;default:Jt(t,n,$e,null,l,ce)}for(V in l)if(ce=l[V],pe=s[V],l.hasOwnProperty(V)&&ce!==pe&&(ce!=null||pe!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Jt(t,n,V,ce,l,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)ce=s[ot],s.hasOwnProperty(ot)&&ce!=null&&!l.hasOwnProperty(ot)&&Jt(t,n,ot,null,l,ce);for(re in l)if(ce=l[re],pe=s[re],l.hasOwnProperty(re)&&ce!==pe&&(ce!=null||pe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Jt(t,n,re,ce,l,pe)}return;default:if(Nt(n)){for(var $t in s)ce=s[$t],s.hasOwnProperty($t)&&ce!==void 0&&!l.hasOwnProperty($t)&&Vd(t,n,$t,void 0,l,ce);for(Se in l)ce=l[Se],pe=s[Se],!l.hasOwnProperty(Se)||ce===pe||ce===void 0&&pe===void 0||Vd(t,n,Se,ce,l,pe);return}}for(var $ in s)ce=s[$],s.hasOwnProperty($)&&ce!=null&&!l.hasOwnProperty($)&&Jt(t,n,$,null,l,ce);for(Ae in l)ce=l[Ae],pe=s[Ae],!l.hasOwnProperty(Ae)||ce===pe||ce==null&&pe==null||Jt(t,n,Ae,ce,l,pe)}function __(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,M=f.initiatorType,w=f.duration;if(p&&w&&__(M)){for(M=0,w=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],re=V.startTime;if(re>w)break;var Se=V.transferSize,Ae=V.initiatorType;Se&&__(Ae)&&(V=V.responseEnd,M+=Se*(V<w?1:(w-re)/(V-re)))}if(--l,n+=8*(p+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kd=null,Xd=null;function Jc(t){return t.nodeType===9?t:t.ownerDocument}function v_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function iy(){var t=window.event;return t&&t.type==="popstate"?t===Yd?!1:(Yd=t,!0):(Yd=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(t){return M_.resolve(null).then(t).catch(ry)}:S_;function ry(t){setTimeout(function(){throw t})}function ws(t){return t==="head"}function y_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),co(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Cl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Cl(s);for(var p=s.firstChild;p;){var M=p.nextSibling,w=p.nodeName;p[Li]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=M}}else s==="body"&&Cl(t.ownerDocument.body);s=f}while(s);co(n)}function E_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function qd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":qd(s),ea(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function oy(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Li])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function ly(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wi(t.nextSibling),t===null))return null;return t}function b_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Wi(t.nextSibling),t===null))return null;return t}function jd(t){return t.data==="$?"||t.data==="$~"}function Zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cy(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kd=null;function T_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Wi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function A_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function R_(t,n,s){switch(n=Jc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Cl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ea(t)}var Yi=new Map,C_=new Set;function $c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qa=H.d;H.d={f:uy,r:fy,D:dy,C:hy,L:py,m:my,X:_y,S:gy,M:vy};function uy(){var t=Qa.f(),n=Xc();return t||n}function fy(t){var n=Ui(t);n!==null&&n.tag===5&&n.type==="form"?W0(n):Qa.r(t)}var ro=typeof document>"u"?null:document;function w_(t,n,s){var l=ro;if(l&&typeof n=="string"&&n){var f=mt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),C_.has(f)||(C_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Wn(n,"link",t),mn(n),l.head.appendChild(n)))}}function dy(t){Qa.D(t),w_("dns-prefetch",t,null)}function hy(t,n){Qa.C(t,n),w_("preconnect",t,n)}function py(t,n,s){Qa.L(t,n,s);var l=ro;if(l&&t&&n){var f='link[rel="preload"][as="'+mt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+mt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+mt(s.imageSizes)+'"]')):f+='[href="'+mt(t)+'"]';var p=f;switch(n){case"style":p=oo(t);break;case"script":p=lo(t)}Yi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Yi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(wl(p))||n==="script"&&l.querySelector(Dl(p))||(n=l.createElement("link"),Wn(n,"link",t),mn(n),l.head.appendChild(n)))}}function my(t,n){Qa.m(t,n);var s=ro;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=lo(t)}if(!Yi.has(p)&&(t=_({rel:"modulepreload",href:t},n),Yi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Dl(p)))return}l=s.createElement("link"),Wn(l,"link",t),mn(l),s.head.appendChild(l)}}}function gy(t,n,s){Qa.S(t,n,s);var l=ro;if(l&&t){var f=_i(l).hoistableStyles,p=oo(t);n=n||"default";var M=f.get(p);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(wl(p)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Yi.get(p))&&Qd(t,s);var V=M=l.createElement("link");mn(V),Wn(V,"link",t),V._p=new Promise(function(re,Se){V.onload=re,V.onerror=Se}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,eu(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:w},f.set(p,M)}}}function _y(t,n){Qa.X(t,n);var s=ro;if(s&&t){var l=_i(s).hoistableScripts,f=lo(t),p=l.get(f);p||(p=s.querySelector(Dl(f)),p||(t=_({src:t,async:!0},n),(n=Yi.get(f))&&Jd(t,n),p=s.createElement("script"),mn(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function vy(t,n){Qa.M(t,n);var s=ro;if(s&&t){var l=_i(s).hoistableScripts,f=lo(t),p=l.get(f);p||(p=s.querySelector(Dl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Yi.get(f))&&Jd(t,n),p=s.createElement("script"),mn(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function D_(t,n,s,l){var f=(f=ne.current)?$c(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=oo(s.href),s=_i(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=oo(s.href);var p=_i(f).hoistableStyles,M=p.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=f.querySelector(wl(t)))&&!p._p&&(M.instance=p,M.state.loading=5),Yi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Yi.set(t,s),p||xy(f,t,s,M.state))),n&&l===null)throw Error(r(528,""));return M}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=lo(s),s=_i(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function oo(t){return'href="'+mt(t)+'"'}function wl(t){return'link[rel="stylesheet"]['+t+"]"}function L_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function xy(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Wn(n,"link",s),mn(n),t.head.appendChild(n))}function lo(t){return'[src="'+mt(t)+'"]'}function Dl(t){return"script[async]"+t}function N_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+mt(s.href)+'"]');if(l)return n.instance=l,mn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),mn(l),Wn(l,"style",f),eu(l,s.precedence,t),n.instance=l;case"stylesheet":f=oo(s.href);var p=t.querySelector(wl(f));if(p)return n.state.loading|=4,n.instance=p,mn(p),p;l=L_(s),(f=Yi.get(f))&&Qd(l,f),p=(t.ownerDocument||t).createElement("link"),mn(p);var M=p;return M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),Wn(p,"link",l),n.state.loading|=4,eu(p,s.precedence,t),n.instance=p;case"script":return p=lo(s.src),(f=t.querySelector(Dl(p)))?(n.instance=f,mn(f),f):(l=s,(f=Yi.get(p))&&(l=_({},s),Jd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),mn(f),Wn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,eu(l,s.precedence,t));return n.instance}function eu(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Qd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tu=null;function U_(t,n,s){if(tu===null){var l=new Map,f=tu=new Map;f.set(s,l)}else f=tu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Li]||p[Lt]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var w=l.get(M);w?w.push(p):l.set(M,[p])}}return l}function O_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function Sy(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function My(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=oo(l.href),p=n.querySelector(wl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nu.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,mn(p);return}p=n.ownerDocument||n,l=L_(l),(f=Yi.get(f))&&Qd(l,f),p=p.createElement("link"),mn(p);var M=p;M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),Wn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=nu.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var $d=0;function yy(t,n){return t.stylesheets&&t.count===0&&au(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&au(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&$d===0&&($d=62500*ny());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&au(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>$d?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var iu=null;function au(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,iu=new Map,n.forEach(Ey,t),iu=null,nu.call(t))}function Ey(t,n){if(!(n.state.loading&4)){var s=iu.get(t);if(s)var l=s.get(null);else{s=new Map,iu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=n.instance,M=f.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,f),s.set(M,f),this.count++,l=nu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Ll={$$typeof:P,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function by(t,n,s,l,f,p,M,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function I_(t,n,s,l,f,p,M,w,V,re,Se,Ae){return t=new by(t,n,s,M,V,re,Se,Ae,w),n=1,p===!0&&(n|=24),p=Si(3,null,null,n),t.current=p,p.stateNode=t,n=Nf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},If(p),t}function B_(t){return t?(t=zr,t):zr}function F_(t,n,s,l,f,p){f=B_(f),l.context===null?l.context=f:l.pendingContext=f,l=vs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=xs(t,l,n),s!==null&&(pi(s,t,n),cl(s,t,n))}function z_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function eh(t,n){z_(t,n),(t=t.alternate)&&z_(t,n)}function H_(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&pi(n,t,67108864),eh(t,67108864)}}function G_(t){if(t.tag===13||t.tag===31){var n=Ti();n=Js(n);var s=rr(t,n);s!==null&&pi(s,t,n),eh(t,n)}}var su=!0;function Ty(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=2,th(t,n,s,l)}finally{H.p=p,z.T=f}}function Ay(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=8,th(t,n,s,l)}finally{H.p=p,z.T=f}}function th(t,n,s,l){if(su){var f=nh(l);if(f===null)Gd(t,n,l,ru,s),k_(t,l);else if(Cy(f,t,n,s,l))l.stopPropagation();else if(k_(t,l),n&4&&-1<Ry.indexOf(t)){for(;f!==null;){var p=Ui(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=De(p.pendingLanes);if(M!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var V=1<<31-Ye(M);w.entanglements[1]|=V,M&=~V}va(p),(kt&6)===0&&(Vc=ct()+500,Tl(0))}}break;case 31:case 13:w=rr(p,2),w!==null&&pi(w,p,2),Xc(),eh(p,2)}if(p=nh(l),p===null&&Gd(t,n,l,ru,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Gd(t,n,l,null,s)}}function nh(t){return t=La(t),ih(t)}var ru=null;function ih(t){if(ru=null,t=Ni(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ru=t,null}function V_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case B:return 2;case E:return 8;case J:case oe:return 32;case ge:return 268435456;default:return 32}default:return 32}}var ah=!1,Ds=null,Ls=null,Ns=null,Nl=new Map,Ul=new Map,Us=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(t,n){switch(t){case"focusin":case"focusout":Ds=null;break;case"dragenter":case"dragleave":Ls=null;break;case"mouseover":case"mouseout":Ns=null;break;case"pointerover":case"pointerout":Nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(n.pointerId)}}function Ol(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Ui(n),n!==null&&H_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function Cy(t,n,s,l,f){switch(n){case"focusin":return Ds=Ol(Ds,t,n,s,l,f),!0;case"dragenter":return Ls=Ol(Ls,t,n,s,l,f),!0;case"mouseover":return Ns=Ol(Ns,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return Nl.set(p,Ol(Nl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Ul.set(p,Ol(Ul.get(p)||null,t,n,s,l,f)),!0}return!1}function X_(t){var n=Ni(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Nn(t.priority,function(){G_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,Nn(t.priority,function(){G_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=nh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Nr=l,s.target.dispatchEvent(l),Nr=null}else return n=Ui(s),n!==null&&H_(n),t.blockedOn=s,!1;n.shift()}return!0}function W_(t,n,s){ou(t)&&s.delete(n)}function wy(){ah=!1,Ds!==null&&ou(Ds)&&(Ds=null),Ls!==null&&ou(Ls)&&(Ls=null),Ns!==null&&ou(Ns)&&(Ns=null),Nl.forEach(W_),Ul.forEach(W_)}function lu(t,n){t.blockedOn===n&&(t.blockedOn=null,ah||(ah=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wy)))}var cu=null;function Y_(t){cu!==t&&(cu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){cu===t&&(cu=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(ih(l||s)===null)continue;break}var p=Ui(s);p!==null&&(t.splice(n,3),n-=3,nd(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function co(t){function n(V){return lu(V,t)}Ds!==null&&lu(Ds,t),Ls!==null&&lu(Ls,t),Ns!==null&&lu(Ns,t),Nl.forEach(n),Ul.forEach(n);for(var s=0;s<Us.length;s++){var l=Us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Us.length&&(s=Us[0],s.blockedOn===null);)X_(s),s.blockedOn===null&&Us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],M=f[Un]||null;if(typeof p=="function")M||Y_(s);else if(M){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[Un]||null)w=M.formAction;else if(ih(f)!==null)continue}else w=M.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),Y_(s)}}}function q_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function sh(t){this._internalRoot=t}uu.prototype.render=sh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ti();F_(s,l,t,n,null,null)},uu.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;F_(t.current,2,null,t,null,null),Xc(),n[Zn]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var n=wa();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Us.length&&n!==0&&n<Us[s].priority;s++);Us.splice(s,0,t),s===0&&X_(t)}};var j_=e.version;if(j_!=="19.2.7")throw Error(r(527,j_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{he=fu.inject(Dy),_e=fu}catch{}}return Il.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=tg,p=ng,M=ig;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=I_(t,1,!1,null,null,s,l,null,f,p,M,q_),t[Zn]=n.current,Hd(t),new sh(n)},Il.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=tg,M=ng,w=ig,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=I_(t,1,!0,n,s??null,l,f,V,p,M,w,q_),n.context=B_(null),s=n.current,l=Ti(),l=Js(l),f=vs(l),f.callback=null,xs(s,f,l),s=l,n.current.lanes=s,qe(n,s),va(n),t[Zn]=n.current,Hd(t),new uu(n)},Il.version="19.2.7",Il}var av;function zy(){if(av)return lh.exports;av=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),lh.exports=Fy(),lh.exports}var Hy=zy();const Gy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},uo=(a,e="#")=>{var i;return((i=Gy[a])==null?void 0:i.trim())||e},Ln={app:uo("VITE_APP_URL","https://demo.morpheum.io"),docs:uo("VITE_DOCS_URL"),manifesto:uo("VITE_MANIFESTO_URL"),discord:uo("VITE_DISCORD_URL"),x:uo("VITE_X_URL"),tutorialVideo:uo("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Bu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],dh={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Ln.manifesto},Ps={eyebrow:{label:"A manifesto for verifiable agents",href:Ln.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Ln.app},secondaryCta:{label:"Explore agents",href:Ln.explore}},sv={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},rv=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],ip={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},hh={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Ln.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Ln.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Ln.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Is={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},fo={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},du={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Ln.app},social:[{label:"Join Discord",href:Ln.discord},{label:"Join X",href:Ln.x}]},ov={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Uo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function Vy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:du.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Uo,{href:du.primaryCta.href,variant:"primary",children:du.primaryCta.label}),du.social.map(a=>D.jsx(Uo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function ky(){const[a,e]=ke.useState(!1),i=!!Ln.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ip.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Ln.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:ip.videoCaption})]})]})})}const Xy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function ph({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Xy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Wy(){const a=fo.cards[0],e=fo.cards[1],i=fo.cards[2],r=fo.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:fo.kicker}),D.jsx("h2",{className:"section-title explore__title",children:fo.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(ph,{type:"verified"}),D.jsx(ph,{type:"riskScore",value:o.risk}),D.jsx(ph,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="185",Yy=0,lv=1,qy=2,Fu=1,jy=2,Wl=3,os=0,gi=1,ya=2,ss=0,wo=1,ap=2,cv=3,uv=4,Zy=5,br=100,Ky=101,Qy=102,Jy=103,$y=104,eE=200,tE=201,nE=202,iE=203,sp=204,rp=205,aE=206,sE=207,rE=208,oE=209,lE=210,cE=211,uE=212,fE=213,dE=214,op=0,lp=1,cp=2,Oo=3,up=4,fp=5,dp=6,hp=7,zx=0,hE=1,pE=2,Ta=0,Hx=1,Gx=2,Vx=3,kx=4,Xx=5,Wx=6,Yx=7,qx=300,Rr=301,Po=302,mh=303,gh=304,tf=306,pp=1e3,fa=1001,mp=1002,qn=1003,mE=1004,hu=1005,xn=1006,_h=1007,Ys=1008,Zi=1009,jx=1010,Zx=1011,ec=1012,Jp=1013,Ca=1014,Ea=1015,ls=1016,$p=1017,em=1018,tc=1020,Kx=35902,Qx=35899,Jx=1021,$x=1022,da=1023,cs=1026,Ar=1027,eS=1028,tm=1029,Cr=1030,nm=1031,im=1033,zu=33776,Hu=33777,Gu=33778,Vu=33779,gp=35840,_p=35841,vp=35842,xp=35843,Sp=36196,Mp=37492,yp=37496,Ep=37488,bp=37489,Xu=37490,Tp=37491,Ap=37808,Rp=37809,Cp=37810,wp=37811,Dp=37812,Lp=37813,Np=37814,Up=37815,Op=37816,Pp=37817,Ip=37818,Bp=37819,Fp=37820,zp=37821,Hp=36492,Gp=36494,Vp=36495,kp=36283,Xp=36284,Wu=36285,Wp=36286,gE=3200,fv=0,_E=1,Ws="",ti="srgb",Yu="srgb-linear",qu="linear",Zt="srgb",ho=7680,dv=519,vE=512,xE=513,SE=514,am=515,ME=516,yE=517,sm=518,EE=519,hv=35044,pv="300 es",ba=2e3,ju=2001;function bE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Zu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function TE(){const a=Zu("canvas");return a.style.display="block",a}const mv={};function gv(...a){const e="THREE."+a.shift();console.log(e,...a)}function tS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function lt(...a){a=tS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function It(...a){a=tS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Do(...a){const e=a.join(" ");e in mv||(mv[e]=!0,lt(...a))}function AE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const RE={[op]:lp,[cp]:dp,[up]:hp,[Oo]:fp,[lp]:op,[dp]:cp,[hp]:up,[fp]:Oo};class Dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _v=1234567;const Kl=Math.PI/180,nc=180/Math.PI;function zo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($n[a&255]+$n[a>>8&255]+$n[a>>16&255]+$n[a>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[i&63|128]+$n[i>>8&255]+"-"+$n[i>>16&255]+$n[i>>24&255]+$n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]).toLowerCase()}function Tt(a,e,i){return Math.max(e,Math.min(i,a))}function rm(a,e){return(a%e+e)%e}function CE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function wE(a,e,i){return a!==e?(i-a)/(e-a):0}function Ql(a,e,i){return(1-i)*a+i*e}function DE(a,e,i,r){return Ql(a,e,1-Math.exp(-i*r))}function LE(a,e=1){return e-Math.abs(rm(a,e*2)-e)}function NE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function UE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function OE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function PE(a,e){return a+Math.random()*(e-a)}function IE(a){return a*(.5-Math.random())}function BE(a){a!==void 0&&(_v=a);let e=_v+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FE(a){return a*Kl}function zE(a){return a*nc}function HE(a){return(a&a-1)===0&&a!==0}function GE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function VE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function kE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*_,m*v,d*h);break;case"YZY":a.set(m*v,d*g,m*_,d*h);break;case"ZXZ":a.set(m*_,m*v,d*g,d*h);break;case"XZX":a.set(d*g,m*b,m*x,d*h);break;case"YXY":a.set(m*x,d*g,m*b,d*h);break;case"ZYZ":a.set(m*b,m*x,d*g,d*h);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ro(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pt={DEG2RAD:Kl,RAD2DEG:nc,generateUUID:zo,clamp:Tt,euclideanModulo:rm,mapLinear:CE,inverseLerp:wE,lerp:Ql,damp:DE,pingpong:LE,smoothstep:NE,smootherstep:UE,randInt:OE,randFloat:PE,randFloatSpread:IE,seededRandom:BE,degToRad:FE,radToDeg:zE,isPowerOfTwo:HE,ceilPowerOfTwo:GE,floorPowerOfTwo:VE,setQuaternionFromProperEuler:kE,normalize:si,denormalize:Ro},vm=class vm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vm.prototype.isVector2=!0;let Vt=vm;class Ho{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],b=c[u+2],C=c[u+3];if(_!==C||m!==v||h!==x||g!==b){let y=m*v+h*x+g*b+_*C;y<0&&(v=-v,x=-x,b=-b,C=-C,y=-y);let S=1-d;if(y<.9995){const O=Math.acos(y),P=Math.sin(O);S=Math.sin(S*O)/P,d=Math.sin(d*O)/P,m=m*S+v*d,h=h*S+x*d,g=g*S+b*d,_=_*S+C*d}else{m=m*S+v*d,h=h*S+x*d,g=g*S+b*d,_=_*S+C*d;const O=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=O,h*=O,g*=O,_*=O}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[i]=d*b+g*_+m*x-h*v,e[i+1]=m*b+g*v+h*_-d*x,e[i+2]=h*b+g*x+d*v-m*_,e[i+3]=g*b-d*_-m*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),_=d(c/2),v=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_+v*x*b;break;case"YZX":this._x=v*g*_+h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_-v*x*b;break;case"XZY":this._x=v*g*_-h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_+v*x*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-h)*x,this._z=(u-o)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+h)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(c-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(u-o)/x,this._x=(c+h)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xm=class xm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(vv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),_=2*(c*r-u*i);return this.x=i+m*h+u*_-d*g,this.y=r+m*g+d*h-c*_,this.z=o+m*_+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xm.prototype.isVector3=!0;let te=xm;const vh=new te,vv=new Ho,Sm=class Sm{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],_=r[7],v=r[2],x=r[5],b=r[8],C=o[0],y=o[3],S=o[6],O=o[1],P=o[4],A=o[7],L=o[2],N=o[5],F=o[8];return c[0]=u*C+d*O+m*L,c[3]=u*y+d*P+m*N,c[6]=u*S+d*A+m*F,c[1]=h*C+g*O+_*L,c[4]=h*y+g*P+_*N,c[7]=h*S+g*A+_*F,c[2]=v*C+x*O+b*L,c[5]=v*y+x*P+b*N,c[8]=v*S+x*A+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=g*u-d*h,v=d*m-g*c,x=h*c-u*m,b=i*_+r*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(o*h-g*r)*C,e[2]=(d*r-o*u)*C,e[3]=v*C,e[4]=(g*i-o*m)*C,e[5]=(o*c-d*i)*C,e[6]=x*C,e[7]=(r*m-h*i)*C,e[8]=(u*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return Do("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(e,i)),this}rotate(e){return Do("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-e)),this}translate(e,i){return Do("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sm.prototype.isMatrix3=!0;let dt=Sm;const xh=new dt,xv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const a={enabled:!0,workingColorSpace:Yu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Zt&&(o.r=rs(o.r),o.g=rs(o.g),o.b=rs(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ws?qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Do("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Do("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Yu]:{primaries:e,whitePoint:r,transfer:qu,toXYZ:xv,fromXYZ:Sv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:xv,fromXYZ:Sv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),a}const Ot=XE();function rs(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Lo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let po;class WE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=Zu("canvas")),po.width=e.width,po.height=e.height;const o=po.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=rs(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(rs(i[r]/255)*255):i[r]=rs(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YE=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Sh(o[u].image)):c.push(Sh(o[u]))}else c=Sh(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Sh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?WE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let qE=0;const Mh=new te;class ni extends Dr{constructor(e=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,r=fa,o=fa,c=xn,u=Ys,d=da,m=Zi,h=ni.DEFAULT_ANISOTROPY,g=Ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=zo(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pp:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pp:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=qx;ni.DEFAULT_ANISOTROPY=1;const Mm=class Mm{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+C)<.1&&Math.abs(b+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,A=(x+1)/2,L=(S+1)/2,N=(g+v)/4,F=(_+C)/4,T=(b+y)/4;return P>A&&P>L?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=N/r,c=F/r):A>L?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=N/o,c=T/o):L<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),r=F/c,o=T/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-b)*(y-b)+(_-C)*(_-C)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(_-C)/O,this.z=(v-g)/O,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mm.prototype.isVector4=!0;let vn=Mm;class jE extends Dr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new ni(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new om(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Aa extends jE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class nS extends ni{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends ni{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=class ef{constructor(e,i,r,o,c,u,d,m,h,g,_,v,x,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,_,v,x,b,C,y)}set(e,i,r,o,c,u,d,m,h,g,_,v,x,b,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=h,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ef().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/mo.setFromMatrixColumn(e,0).length(),c=1/mo.setFromMatrixColumn(e,1).length(),u=1/mo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=x+b*h,i[5]=v-C*h,i[9]=-d*m,i[2]=C-v*h,i[6]=b+x*h,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=h*g,C=h*_;i[0]=v+C*d,i[4]=b*d-x,i[8]=u*h,i[1]=u*_,i[5]=u*g,i[9]=-d,i[2]=x*d-b,i[6]=C+v*d,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=h*g,C=h*_;i[0]=v-C*d,i[4]=-u*_,i[8]=b+x*d,i[1]=x+b*d,i[5]=u*g,i[9]=C-v*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=d*g,C=d*_;i[0]=m*g,i[4]=b*h-x,i[8]=v*h+C,i[1]=m*_,i[5]=C*h+v,i[9]=x*h-b,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*h,b=d*m,C=d*h;i[0]=m*g,i[4]=C-v*_,i[8]=b*_+x,i[1]=_,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=x*_+b,i[10]=v-C*_}else if(e.order==="XZY"){const v=u*m,x=u*h,b=d*m,C=d*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=v*_+C,i[5]=u*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=d*g,i[10]=C*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,QE)}lookAt(e,i,r){const o=this.elements;return Ai.subVectors(e,i),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),Bs.crossVectors(r,Ai),Bs.lengthSq()===0&&(Math.abs(r.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),Bs.crossVectors(r,Ai)),Bs.normalize(),pu.crossVectors(Ai,Bs),o[0]=Bs.x,o[4]=pu.x,o[8]=Ai.x,o[1]=Bs.y,o[5]=pu.y,o[9]=Ai.y,o[2]=Bs.z,o[6]=pu.z,o[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],_=r[5],v=r[9],x=r[13],b=r[2],C=r[6],y=r[10],S=r[14],O=r[3],P=r[7],A=r[11],L=r[15],N=o[0],F=o[4],T=o[8],U=o[12],k=o[1],G=o[5],q=o[9],de=o[13],ue=o[2],W=o[6],z=o[10],H=o[14],ee=o[3],me=o[7],ye=o[11],I=o[15];return c[0]=u*N+d*k+m*ue+h*ee,c[4]=u*F+d*G+m*W+h*me,c[8]=u*T+d*q+m*z+h*ye,c[12]=u*U+d*de+m*H+h*I,c[1]=g*N+_*k+v*ue+x*ee,c[5]=g*F+_*G+v*W+x*me,c[9]=g*T+_*q+v*z+x*ye,c[13]=g*U+_*de+v*H+x*I,c[2]=b*N+C*k+y*ue+S*ee,c[6]=b*F+C*G+y*W+S*me,c[10]=b*T+C*q+y*z+S*ye,c[14]=b*U+C*de+y*H+S*I,c[3]=O*N+P*k+A*ue+L*ee,c[7]=O*F+P*G+A*W+L*me,c[11]=O*T+P*q+A*z+L*ye,c[15]=O*U+P*de+A*H+L*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],C=e[7],y=e[11],S=e[15],O=m*x-h*v,P=d*x-h*_,A=d*v-m*_,L=u*x-h*g,N=u*v-m*g,F=u*_-d*g;return i*(C*O-y*P+S*A)-r*(b*O-y*L+S*N)+o*(b*P-C*L+S*F)-c*(b*A-C*N+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],C=e[13],y=e[14],S=e[15],O=i*d-r*u,P=i*m-o*u,A=i*h-c*u,L=r*m-o*d,N=r*h-c*d,F=o*h-c*m,T=g*C-_*b,U=g*y-v*b,k=g*S-x*b,G=_*y-v*C,q=_*S-x*C,de=v*S-x*y,ue=O*de-P*q+A*G+L*k-N*U+F*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ue;return e[0]=(d*de-m*q+h*G)*W,e[1]=(o*q-r*de-c*G)*W,e[2]=(C*F-y*N+S*L)*W,e[3]=(v*N-_*F-x*L)*W,e[4]=(m*k-u*de-h*U)*W,e[5]=(i*de-o*k+c*U)*W,e[6]=(y*A-b*F-S*P)*W,e[7]=(g*F-v*A+x*P)*W,e[8]=(u*q-d*k+h*T)*W,e[9]=(r*k-i*q-c*T)*W,e[10]=(b*N-C*A+S*O)*W,e[11]=(_*A-g*N-x*O)*W,e[12]=(d*U-u*G-m*T)*W,e[13]=(i*G-r*U+o*T)*W,e[14]=(C*P-b*L-y*O)*W,e[15]=(g*L-_*P+v*O)*W,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,_=d+d,v=c*h,x=c*g,b=c*_,C=u*g,y=u*_,S=d*_,O=m*h,P=m*g,A=m*_,L=r.x,N=r.y,F=r.z;return o[0]=(1-(C+S))*L,o[1]=(x+A)*L,o[2]=(b-P)*L,o[3]=0,o[4]=(x-A)*N,o[5]=(1-(v+S))*N,o[6]=(y+O)*N,o[7]=0,o[8]=(b+P)*F,o[9]=(y-O)*F,o[10]=(1-(v+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=mo.set(o[0],o[1],o[2]).length();const d=mo.set(o[4],o[5],o[6]).length(),m=mo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ra.copy(this);const h=1/u,g=1/d,_=1/m;return ra.elements[0]*=h,ra.elements[1]*=h,ra.elements[2]*=h,ra.elements[4]*=g,ra.elements[5]*=g,ra.elements[6]*=g,ra.elements[8]*=_,ra.elements[9]*=_,ra.elements[10]*=_,i.setFromRotationMatrix(ra),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=ba,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let b,C;if(m)b=c/(u-c),C=u*c/(u-c);else if(d===ba)b=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===ju)b=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=ba,m=!1){const h=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,C;if(m)b=1/(u-c),C=u/(u-c);else if(d===ba)b=-2/(u-c),C=-(u+c)/(u-c);else if(d===ju)b=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};ef.prototype.isMatrix4=!0;let bn=ef;const mo=new te,ra=new bn,KE=new te(0,0,0),QE=new te(1,1,1),Bs=new te,pu=new te,Ai=new te,Mv=new bn,yv=new Ho;class wr{constructor(e=0,i=0,r=0,o=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return yv.setFromEuler(this),this.setFromQuaternion(yv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class iS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JE=0;const Ev=new te,go=new Ho,Ja=new bn,mu=new te,Bl=new te,$E=new te,eb=new Ho,bv=new te(1,0,0),Tv=new te(0,1,0),Av=new te(0,0,1),Rv={type:"added"},tb={type:"removed"},_o={type:"childadded",child:null},yh={type:"childremoved",child:null};class wi extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const e=new te,i=new wr,r=new Ho,o=new te(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bn},normalMatrix:{value:new dt}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return go.setFromAxisAngle(e,i),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,i){return go.setFromAxisAngle(e,i),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Tv,e)}rotateZ(e){return this.rotateOnAxis(Av,e)}translateOnAxis(e,i){return Ev.copy(e).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Tv,e)}translateZ(e){return this.translateOnAxis(Av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ja.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mu.copy(e):mu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ja.lookAt(Bl,mu,this.up):Ja.lookAt(mu,Bl,this.up),this.quaternion.setFromRotationMatrix(Ja),o&&(Ja.extractRotation(o.matrixWorld),go.setFromRotationMatrix(Ja),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rv),_o.child=e,this.dispatchEvent(_o),_o.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(tb),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ja.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ja.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ja),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rv),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bl,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bl,eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wi.DEFAULT_UP=new te(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yl extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;h.inputState.pinching&&v>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},gu={h:0,s:0,l:0};function bh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ot.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ot.workingColorSpace){if(e=rm(e,1),i=Tt(i,0,1),r=Tt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=bh(u,c,e+1/3),this.g=bh(u,c,e),this.b=bh(u,c,e-1/3)}return Ot.colorSpaceToWorking(this,o),this}setStyle(e,i=ti){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const r=aS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ot.workingToColorSpace(ei.copy(this),e),Math.round(Tt(ei.r*255,0,255))*65536+Math.round(Tt(ei.g*255,0,255))*256+Math.round(Tt(ei.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(ei.copy(this),i);const r=ei.r,o=ei.g,c=ei.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const _=u-d;switch(h=g<=.5?_/(u+d):_/(2-u-d),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(ei.copy(this),i),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=ti){Ot.workingToColorSpace(ei.copy(this),e);const i=ei.r,r=ei.g,o=ei.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+i,Fs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Fs),e.getHSL(gu);const r=Ql(Fs.h,gu.h,i),o=Ql(Fs.s,gu.s,i),c=Ql(Fs.l,gu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new Wt;Wt.NAMES=aS;class ib extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const oa=new te,$a=new te,Th=new te,es=new te,vo=new te,xo=new te,Cv=new te,Ah=new te,Rh=new te,Ch=new te,wh=new vn,Dh=new vn,Lh=new vn;class ua{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),oa.subVectors(e,i),o.cross(oa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){oa.subVectors(o,i),$a.subVectors(r,i),Th.subVectors(e,i);const u=oa.dot(oa),d=oa.dot($a),m=oa.dot(Th),h=$a.dot($a),g=$a.dot(Th),_=u*h-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(h*m-d*g)*v,b=(u*g-d*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,es)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,es.x),m.addScaledVector(u,es.y),m.addScaledVector(d,es.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return wh.setScalar(0),Dh.setScalar(0),Lh.setScalar(0),wh.fromBufferAttribute(e,i),Dh.fromBufferAttribute(e,r),Lh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(wh,c.x),u.addScaledVector(Dh,c.y),u.addScaledVector(Lh,c.z),u}static isFrontFacing(e,i,r,o){return oa.subVectors(r,i),$a.subVectors(e,i),oa.cross($a).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oa.subVectors(this.c,this.b),$a.subVectors(this.a,this.b),oa.cross($a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ua.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ua.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ua.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ua.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ua.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;vo.subVectors(o,r),xo.subVectors(c,r),Ah.subVectors(e,r);const m=vo.dot(Ah),h=xo.dot(Ah);if(m<=0&&h<=0)return i.copy(r);Rh.subVectors(e,o);const g=vo.dot(Rh),_=xo.dot(Rh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*h;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(vo,u);Ch.subVectors(e,c);const x=vo.dot(Ch),b=xo.dot(Ch);if(b>=0&&x<=b)return i.copy(c);const C=x*h-m*b;if(C<=0&&h>=0&&b<=0)return d=h/(h-b),i.copy(r).addScaledVector(xo,d);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return Cv.subVectors(c,o),d=(_-g)/(_-g+(x-b)),i.copy(o).addScaledVector(Cv,d);const S=1/(y+C+v);return u=C*S,d=v*S,i.copy(r).addScaledVector(vo,u).addScaledVector(xo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sc{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(la.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(la.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=la.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,la):la.fromBufferAttribute(c,u),la.applyMatrix4(e.matrixWorld),this.expandByPoint(la);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_u.copy(r.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,la),la.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fl),vu.subVectors(this.max,Fl),So.subVectors(e.a,Fl),Mo.subVectors(e.b,Fl),yo.subVectors(e.c,Fl),zs.subVectors(Mo,So),Hs.subVectors(yo,Mo),xr.subVectors(So,yo);let i=[0,-zs.z,zs.y,0,-Hs.z,Hs.y,0,-xr.z,xr.y,zs.z,0,-zs.x,Hs.z,0,-Hs.x,xr.z,0,-xr.x,-zs.y,zs.x,0,-Hs.y,Hs.x,0,-xr.y,xr.x,0];return!Nh(i,So,Mo,yo,vu)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,So,Mo,yo,vu))?!1:(xu.crossVectors(zs,Hs),i=[xu.x,xu.y,xu.z],Nh(i,So,Mo,yo,vu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,la).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(la).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ts=[new te,new te,new te,new te,new te,new te,new te,new te],la=new te,_u=new sc,So=new te,Mo=new te,yo=new te,zs=new te,Hs=new te,xr=new te,Fl=new te,vu=new te,xu=new te,Sr=new te;function Nh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Sr.fromArray(a,c);const d=o.x*Math.abs(Sr.x)+o.y*Math.abs(Sr.y)+o.z*Math.abs(Sr.z),m=e.dot(Sr),h=i.dot(Sr),g=r.dot(Sr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Dn=new te,Su=new Vt;let ab=0;class Ra extends Dr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=hv,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(e),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),o=si(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),o=si(o,this.array),c=si(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sS extends Ra{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class rS extends Ra{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ki extends Ra{constructor(e,i,r){super(new Float32Array(e),i,r)}}const sb=new sc,zl=new te,Uh=new te;class lm{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):sb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zl.subVectors(e,this.center);const i=zl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(zl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zl.copy(e.center).add(Uh)),this.expandByPoint(zl.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rb=0;const qi=new bn,Oh=new wi,Eo=new te,Ri=new sc,Hl=new sc,Hn=new te;class Qi extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bE(e)?rS:sS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,i,r){return qi.makeTranslation(e,i,r),this.applyMatrix4(qi),this}scale(e,i,r){return qi.makeScale(e,i,r),this.applyMatrix4(qi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ki(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];Hl.setFromBufferAttribute(d),this.morphTargetsRelative?(Hn.addVectors(Ri.min,Hl.min),Ri.expandByPoint(Hn),Hn.addVectors(Ri.max,Hl.max),Ri.expandByPoint(Hn)):(Ri.expandByPoint(Hl.min),Ri.expandByPoint(Hl.max))}Ri.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Hn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Hn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Hn.fromBufferAttribute(d,h),m&&(Eo.fromBufferAttribute(e,h),Hn.add(Eo)),o=Math.max(o,r.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ra(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new te,m[T]=new te;const h=new te,g=new te,_=new te,v=new Vt,x=new Vt,b=new Vt,C=new te,y=new te;function S(T,U,k){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,k),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),b.fromBufferAttribute(c,k),g.sub(h),_.sub(h),x.sub(v),b.sub(v);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(G),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),d[T].add(C),d[U].add(C),d[k].add(C),m[T].add(y),m[U].add(y),m[k].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,U=O.length;T<U;++T){const k=O[T],G=k.start,q=k.count;for(let de=G,ue=G+q;de<ue;de+=3)S(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const P=new te,A=new te,L=new te,N=new te;function F(T){L.fromBufferAttribute(o,T),N.copy(L);const U=d[T];P.copy(U),P.sub(L.multiplyScalar(L.dot(U))).normalize(),A.crossVectors(N,U);const G=A.dot(m[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,G)}for(let T=0,U=O.length;T<U;++T){const k=O[T],G=k.start,q=k.count;for(let de=G,ue=G+q;de<ue;de+=3)F(e.getX(de+0)),F(e.getX(de+1)),F(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ra(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new te,c=new te,u=new te,d=new te,m=new te,h=new te,g=new te,_=new te;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Hn.fromBufferAttribute(e,i),Hn.normalize(),e.setXYZ(i,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(m.length*g);let x=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?x=m[C]*d.data.stride+d.offset:x=m[C]*g;for(let S=0;S<g;S++)v[b++]=h[x++]}return new Ra(v,g,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],x=e(v,r);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ob=0;class nf extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=wo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=rp,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(r.blending=this.blending),this.side!==os&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sp&&(r.blendSrc=this.blendSrc),this.blendDst!==rp&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Vt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ns=new te,Ph=new te,Mu=new te,Gs=new te,Ih=new te,yu=new te,Bh=new te;class lb{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ns.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,i),ns.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Ph.copy(e).add(i).multiplyScalar(.5),Mu.copy(i).sub(e).normalize(),Gs.copy(this.origin).sub(Ph);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Mu),d=Gs.dot(this.direction),m=-Gs.dot(Mu),h=Gs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-d,v=u*d-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const C=1/g;_*=C,v*=C,x=_*(_+u*v+2*d)+v*(u*_+v+2*m)+h}else v=c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;else v=-c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;else v<=-b?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+h):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+h):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+h);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ph).addScaledVector(Mu,v),x}intersectSphere(e,i){ns.subVectors(e.center,this.origin);const r=ns.dot(this.direction),o=ns.dot(ns)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,i,r,o,c){Ih.subVectors(i,e),yu.subVectors(r,e),Bh.crossVectors(Ih,yu);let u=this.direction.dot(Bh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Gs.subVectors(this.origin,e);const m=d*this.direction.dot(yu.crossVectors(Gs,yu));if(m<0)return null;const h=d*this.direction.dot(Ih.cross(Gs));if(h<0||m+h>u)return null;const g=-d*Gs.dot(Bh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ku extends nf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wv=new bn,Mr=new lb,Eu=new lm,Dv=new te,bu=new te,Tu=new te,Au=new te,Fh=new te,Ru=new te,Lv=new te,Cu=new te;class Ci extends wi{constructor(e=new Qi,i=new Ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Ru.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],_=c[m];g!==0&&(Fh.fromBufferAttribute(_,e),u?Ru.addScaledVector(Fh,g):Ru.addScaledVector(Fh.sub(i),g))}i.add(Ru)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(c),Mr.copy(e.ray).recast(e.near),!(Eu.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Eu,Dv)===null||Mr.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(wv.copy(c).invert(),Mr.copy(e.ray).applyMatrix4(wv),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Mr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,C=v.length;b<C;b++){const y=v[b],S=u[y.materialIndex],O=Math.max(y.start,x.start),P=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let A=O,L=P;A<L;A+=3){const N=d.getX(A),F=d.getX(A+1),T=d.getX(A+2);o=wu(this,S,e,r,h,g,_,N,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),C=Math.min(d.count,x.start+x.count);for(let y=b,S=C;y<S;y+=3){const O=d.getX(y),P=d.getX(y+1),A=d.getX(y+2);o=wu(this,u,e,r,h,g,_,O,P,A),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,C=v.length;b<C;b++){const y=v[b],S=u[y.materialIndex],O=Math.max(y.start,x.start),P=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let A=O,L=P;A<L;A+=3){const N=A,F=A+1,T=A+2;o=wu(this,S,e,r,h,g,_,N,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),C=Math.min(m.count,x.start+x.count);for(let y=b,S=C;y<S;y+=3){const O=y,P=y+1,A=y+2;o=wu(this,u,e,r,h,g,_,O,P,A),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function cb(a,e,i,r,o,c,u,d){let m;if(e.side===gi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===os,d),m===null)return null;Cu.copy(d),Cu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(Cu);return h<i.near||h>i.far?null:{distance:h,point:Cu.clone(),object:a}}function wu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,bu),a.getVertexPosition(m,Tu),a.getVertexPosition(h,Au);const g=cb(a,e,i,r,bu,Tu,Au,Lv);if(g){const _=new te;ua.getBarycoord(Lv,bu,Tu,Au,_),o&&(g.uv=ua.getInterpolatedAttribute(o,d,m,h,_,new Vt)),c&&(g.uv1=ua.getInterpolatedAttribute(c,d,m,h,_,new Vt)),u&&(g.normal=ua.getInterpolatedAttribute(u,d,m,h,_,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:h,normal:new te,materialIndex:0};ua.getNormal(bu,Tu,Au,v.normal),g.face=v,g.barycoord=_}return g}class ub extends ni{constructor(e=null,i=1,r=1,o,c,u,d,m,h=qn,g=qn,_,v){super(null,u,d,m,h,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new te,fb=new te,db=new dt;class Er{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=zh.subVectors(r,i).cross(fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(zh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||db.getNormalMatrix(e),o=this.coplanarPoint(zh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new lm,hb=new Vt(.5,.5),Du=new te;class oS{constructor(e=new Er,i=new Er,r=new Er,o=new Er,c=new Er,u=new Er){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ba,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],C=c[9],y=c[10],S=c[11],O=c[12],P=c[13],A=c[14],L=c[15];if(o[0].setComponents(h-u,x-g,S-b,L-O).normalize(),o[1].setComponents(h+u,x+g,S+b,L+O).normalize(),o[2].setComponents(h+d,x+_,S+C,L+P).normalize(),o[3].setComponents(h-d,x-_,S-C,L-P).normalize(),r)o[4].setComponents(m,v,y,A).normalize(),o[5].setComponents(h-m,x-v,S-y,L-A).normalize();else if(o[4].setComponents(h-m,x-v,S-y,L-A).normalize(),i===ba)o[5].setComponents(h+m,x+v,S+y,L+A).normalize();else if(i===ju)o[5].setComponents(m,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const i=hb.distanceTo(e.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Du.x=o.normal.x>0?e.max.x:e.min.x,Du.y=o.normal.y>0?e.max.y:e.min.y,Du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lS extends ni{constructor(e=[],i=Rr,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cm extends ni{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Io extends ni{constructor(e,i,r=Ca,o,c,u,d=qn,m=qn,h,g=cs,_=1){if(g!==cs&&g!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pb extends Io{constructor(e,i=Ca,r=Rr,o,c,u=qn,d=qn,m,h=cs){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cS extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rc extends Qi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Ki(h,3)),this.setAttribute("normal",new Ki(g,3)),this.setAttribute("uv",new Ki(_,2));function b(C,y,S,O,P,A,L,N,F,T,U){const k=A/F,G=L/T,q=A/2,de=L/2,ue=N/2,W=F+1,z=T+1;let H=0,ee=0;const me=new te;for(let ye=0;ye<z;ye++){const I=ye*G-de;for(let Q=0;Q<W;Q++){const Me=Q*k-q;me[C]=Me*O,me[y]=I*P,me[S]=ue,h.push(me.x,me.y,me.z),me[C]=0,me[y]=0,me[S]=N>0?1:-1,g.push(me.x,me.y,me.z),_.push(Q/F),_.push(1-ye/T),H+=1}}for(let ye=0;ye<T;ye++)for(let I=0;I<F;I++){const Q=v+I+W*ye,Me=v+I+W*(ye+1),Oe=v+(I+1)+W*(ye+1),Ue=v+(I+1)+W*ye;m.push(Q,Me,Ue),m.push(Me,Oe,Ue),ee+=6}d.addGroup(x,ee,U),x+=ee,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new Vt:new te);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new te,o=[],c=[],u=[],d=new te,m=new bn;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new te)}c[0]=new te,u[0]=new te;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),v<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(Tt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(d,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(Tt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function um(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,_){let v=(u-c)/h-(d-c)/(h+g)+(d-u)/g,x=(d-u)/g-(m-u)/(g+_)+(m-d)/_;v*=g,x*=g,o(u,d,v,x)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const Nv=new te,Uv=new te,Hh=new um,Gh=new um,Vh=new um;class gb extends mb{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new te){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(Uv.subVectors(o[0],o[1]).add(o[0]),h=Uv);const _=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(Nv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Nv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(h.distanceToSquared(_),x),C=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);C<1e-4&&(C=1),b<1e-4&&(b=C),y<1e-4&&(y=C),Hh.initNonuniformCatmullRom(h.x,_.x,v.x,g.x,b,C,y),Gh.initNonuniformCatmullRom(h.y,_.y,v.y,g.y,b,C,y),Vh.initNonuniformCatmullRom(h.z,_.z,v.z,g.z,b,C,y)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(h.x,_.x,v.x,g.x,this.tension),Gh.initCatmullRom(h.y,_.y,v.y,g.y,this.tension),Vh.initCatmullRom(h.z,_.z,v.z,g.z,this.tension));return r.set(Hh.calc(m),Gh.calc(m),Vh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class qs extends Qi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,_=e/d,v=i/m,x=[],b=[],C=[],y=[];for(let S=0;S<g;S++){const O=S*v-u;for(let P=0;P<h;P++){const A=P*_-c;b.push(A,-O,0),C.push(0,0,1),y.push(P/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<d;O++){const P=O+h*S,A=O+h*(S+1),L=O+1+h*(S+1),N=O+1+h*S;x.push(P,A,N),x.push(A,L,N)}this.setIndex(x),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(C,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Bo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(Ov(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Ov(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ri(a){const e={};for(let i=0;i<a.length;i++){const r=Bo(a[i]);for(const o in r)e[o]=r[o]}return e}function Ov(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _b(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function uS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const vb={clone:Bo,merge:ri};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends nf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=_b(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Wt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Vt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new bn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mb extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yb extends nf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends nf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lu=new te,Nu=new Ho,xa=new te;class fS extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lu,Nu,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Nu,xa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Lu,Nu,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Nu,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new te,Pv=new Vt,Iv=new Vt;class ji extends fS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,i){return this.getViewBounds(e,Pv,Iv),i.subVectors(Iv,Pv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class dS extends fS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const bo=-90,To=1;class bb extends wi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ji(bo,To,e,i);o.layers=this.layers,this.add(o);const c=new ji(bo,To,e,i);c.layers=this.layers,this.add(c);const u=new ji(bo,To,e,i);u.layers=this.layers,this.add(u);const d=new ji(bo,To,e,i);d.layers=this.layers,this.add(d);const m=new ji(bo,To,e,i);m.layers=this.layers,this.add(m);const h=new ji(bo,To,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===ba)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Tb extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ym=class ym{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};ym.prototype.isMatrix2=!0;let Bv=ym;function Fv(a,e,i,r){const o=Ab(r);switch(i){case Jx:return a*e;case eS:return a*e/o.components*o.byteLength;case tm:return a*e/o.components*o.byteLength;case Cr:return a*e*2/o.components*o.byteLength;case nm:return a*e*2/o.components*o.byteLength;case $x:return a*e*3/o.components*o.byteLength;case da:return a*e*4/o.components*o.byteLength;case im:return a*e*4/o.components*o.byteLength;case zu:case Hu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Gu:case Vu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case _p:case xp:return Math.max(a,16)*Math.max(e,8)/4;case gp:case vp:return Math.max(a,8)*Math.max(e,8)/2;case Sp:case Mp:case Ep:case bp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case yp:case Xu:case Tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Np:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Op:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case zp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Hp:case Gp:case Vp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case kp:case Xp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Wu:case Wp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ab(a){switch(a){case Zi:case jx:return{byteLength:1,components:1};case ec:case Zx:case ls:return{byteLength:2,components:1};case $p:case em:return{byteLength:2,components:4};case Ca:case Jp:case Ea:return{byteLength:4,components:1};case Kx:case Qx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hS(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Rb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,_=h.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=a.SHORT;else if(h instanceof Uint32Array)x=a.UNSIGNED_INT;else if(h instanceof Int32Array)x=a.INT;else if(h instanceof Int8Array)x=a.BYTE;else if(h instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const g=m.array,_=m.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],C=_[x];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,_[v]=C)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const C=_[x];a.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var Cb=`#ifdef USE_ALPHAHASH
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
}`,St={alphahash_fragment:Cb,alphahash_pars_fragment:wb,alphamap_fragment:Db,alphamap_pars_fragment:Lb,alphatest_fragment:Nb,alphatest_pars_fragment:Ub,aomap_fragment:Ob,aomap_pars_fragment:Pb,batching_pars_vertex:Ib,batching_vertex:Bb,begin_vertex:Fb,beginnormal_vertex:zb,bsdfs:Hb,iridescence_fragment:Gb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:Yb,color_fragment:qb,color_pars_fragment:jb,color_pars_vertex:Zb,color_vertex:Kb,common:Qb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:$b,displacementmap_pars_vertex:e1,displacementmap_vertex:t1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:a1,colorspace_pars_fragment:s1,envmap_fragment:r1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:S1,envmap_vertex:u1,fog_vertex:f1,fog_pars_vertex:d1,fog_fragment:h1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:M1,lights_toon_pars_fragment:y1,lights_phong_fragment:E1,lights_phong_pars_fragment:b1,lights_physical_fragment:T1,lights_physical_pars_fragment:A1,lights_fragment_begin:R1,lights_fragment_maps:C1,lights_fragment_end:w1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:O1,map_fragment:P1,map_pars_fragment:I1,map_particle_fragment:B1,map_particle_pars_fragment:F1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:H1,morphinstance_vertex:G1,morphcolor_vertex:V1,morphnormal_vertex:k1,morphtarget_pars_vertex:X1,morphtarget_vertex:W1,normal_fragment_begin:Y1,normal_fragment_maps:q1,normal_pars_fragment:j1,normal_pars_vertex:Z1,normal_vertex:K1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:aT,project_vertex:sT,dithering_fragment:rT,dithering_pars_fragment:oT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:fT,shadowmap_vertex:dT,shadowmask_pars_fragment:hT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:ST,tonemapping_pars_fragment:MT,transmission_fragment:yT,transmission_pars_fragment:ET,uv_pars_fragment:bT,uv_pars_vertex:TT,uv_vertex:AT,worldpos_vertex:RT,background_vert:CT,background_frag:wT,backgroundCube_vert:DT,backgroundCube_frag:LT,cube_vert:NT,cube_frag:UT,depth_vert:OT,depth_frag:PT,distance_vert:IT,distance_frag:BT,equirect_vert:FT,equirect_frag:zT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:VT,meshbasic_frag:kT,meshlambert_vert:XT,meshlambert_frag:WT,meshmatcap_vert:YT,meshmatcap_frag:qT,meshnormal_vert:jT,meshnormal_frag:ZT,meshphong_vert:KT,meshphong_frag:QT,meshphysical_vert:JT,meshphysical_frag:$T,meshtoon_vert:eA,meshtoon_frag:tA,points_vert:nA,points_frag:iA,shadow_vert:aA,shadow_frag:sA,sprite_vert:rA,sprite_frag:oA},We={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ma={basic:{uniforms:ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:ri([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:ri([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Wt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:ri([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:ri([We.points,We.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:ri([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:ri([We.common,We.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:ri([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:ri([We.sprite,We.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:ri([We.common,We.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:ri([We.lights,We.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ma.physical={uniforms:ri([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Uu={r:0,b:0,g:0},lA=new bn,pS=new dt;pS.set(-1,0,0,0,1,0,0,0,1);function cA(a,e,i,r,o,c){const u=new Wt(0);let d=o===!0?0:1,m,h,g=null,_=0,v=null;function x(O){let P=O.isScene===!0?O.background:null;if(P&&P.isTexture){const A=O.backgroundBlurriness>0;P=e.get(P,A)}return P}function b(O){let P=!1;const A=x(O);A===null?y(u,d):A&&A.isColor&&(y(A,1),P=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(O,P){const A=x(P);A&&(A.isCubeTexture||A.mapping===tf)?(h===void 0&&(h=new Ci(new rc(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Bo(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lA.makeRotationFromEuler(P.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(pS),h.material.toneMapped=Ot.getTransfer(A.colorSpace)!==Zt,(g!==A||_!==A.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,g=A,_=A.version,v=a.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Ci(new qs(2,2),new Ji({name:"BackgroundMaterial",uniforms:Bo(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(A.colorSpace)!==Zt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,v=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,P){O.getRGB(Uu,uS(a)),i.buffers.color.setClear(Uu.r,Uu.g,Uu.b,P,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,P=1){u.set(O),d=P,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,y(u,d)},render:b,addToRenderList:C,dispose:S}}function uA(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(G,q,de,ue,W){let z=!1;const H=_(G,ue,de,q);c!==H&&(c=H,h(c.object)),z=x(G,ue,de,W),z&&b(G,ue,de,W),W!==null&&e.update(W,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,A(G,q,de,ue),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return a.createVertexArray()}function h(G){return a.bindVertexArray(G)}function g(G){return a.deleteVertexArray(G)}function _(G,q,de,ue){const W=ue.wireframe===!0;let z=r[q.id];z===void 0&&(z={},r[q.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let ee=z[H];ee===void 0&&(ee={},z[H]=ee);let me=ee[de.id];me===void 0&&(me={},ee[de.id]=me);let ye=me[W];return ye===void 0&&(ye=v(m()),me[W]=ye),ye}function v(G){const q=[],de=[],ue=[];for(let W=0;W<i;W++)q[W]=0,de[W]=0,ue[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:de,attributeDivisors:ue,object:G,attributes:{},index:null}}function x(G,q,de,ue){const W=c.attributes,z=q.attributes;let H=0;const ee=de.getAttributes();for(const me in ee)if(ee[me].location>=0){const I=W[me];let Q=z[me];if(Q===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function b(G,q,de,ue){const W={},z=q.attributes;let H=0;const ee=de.getAttributes();for(const me in ee)if(ee[me].location>=0){let I=z[me];I===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),W[me]=Q,H++}c.attributes=W,c.attributesNum=H,c.index=ue}function C(){const G=c.newAttributes;for(let q=0,de=G.length;q<de;q++)G[q]=0}function y(G){S(G,0)}function S(G,q){const de=c.newAttributes,ue=c.enabledAttributes,W=c.attributeDivisors;de[G]=1,ue[G]===0&&(a.enableVertexAttribArray(G),ue[G]=1),W[G]!==q&&(a.vertexAttribDivisor(G,q),W[G]=q)}function O(){const G=c.newAttributes,q=c.enabledAttributes;for(let de=0,ue=q.length;de<ue;de++)q[de]!==G[de]&&(a.disableVertexAttribArray(de),q[de]=0)}function P(G,q,de,ue,W,z,H){H===!0?a.vertexAttribIPointer(G,q,de,W,z):a.vertexAttribPointer(G,q,de,ue,W,z)}function A(G,q,de,ue){C();const W=ue.attributes,z=de.getAttributes(),H=q.defaultAttributeValues;for(const ee in z){const me=z[ee];if(me.location>=0){let ye=W[ee];if(ye===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(ye=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(ye=G.instanceColor)),ye!==void 0){const I=ye.normalized,Q=ye.itemSize,Me=e.get(ye);if(Me===void 0)continue;const Oe=Me.buffer,Ue=Me.type,ne=Me.bytesPerElement,be=Ue===a.INT||Ue===a.UNSIGNED_INT||ye.gpuType===Jp;if(ye.isInterleavedBufferAttribute){const xe=ye.data,Ie=xe.stride,it=ye.offset;if(xe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<me.locationSize;Xe++)S(me.location+Xe,xe.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<me.locationSize;Xe++)y(me.location+Xe);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let Xe=0;Xe<me.locationSize;Xe++)P(me.location+Xe,Q/me.locationSize,Ue,I,Ie*ne,(it+Q/me.locationSize*Xe)*ne,be)}else{if(ye.isInstancedBufferAttribute){for(let xe=0;xe<me.locationSize;xe++)S(me.location+xe,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let xe=0;xe<me.locationSize;xe++)y(me.location+xe);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let xe=0;xe<me.locationSize;xe++)P(me.location+xe,Q/me.locationSize,Ue,I,Q*ne,Q/me.locationSize*xe*ne,be)}}else if(H!==void 0){const I=H[ee];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(me.location,I);break;case 3:a.vertexAttrib3fv(me.location,I);break;case 4:a.vertexAttrib4fv(me.location,I);break;default:a.vertexAttrib1fv(me.location,I)}}}}O()}function L(){U();for(const G in r){const q=r[G];for(const de in q){const ue=q[de];for(const W in ue){const z=ue[W];for(const H in z)g(z[H].object),delete z[H];delete ue[W]}}delete r[G]}}function N(G){if(r[G.id]===void 0)return;const q=r[G.id];for(const de in q){const ue=q[de];for(const W in ue){const z=ue[W];for(const H in z)g(z[H].object),delete z[H];delete ue[W]}}delete r[G.id]}function F(G){for(const q in r){const de=r[q];for(const ue in de){const W=de[ue];if(W[G.id]===void 0)continue;const z=W[G.id];for(const H in z)g(z[H].object),delete z[H];delete W[G.id]}}}function T(G){for(const q in r){const de=r[q],ue=G.isInstancedMesh===!0?G.id:0,W=de[ue];if(W!==void 0){for(const z in W){const H=W[z];for(const ee in H)g(H[ee].object),delete H[ee];delete W[z]}delete de[ue],Object.keys(de).length===0&&delete r[q]}}}function U(){k(),u=!0,c!==o&&(c=o,h(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:O}}function fA(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function dA(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==da&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Zi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ea&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(lt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:A,maxSamples:L,samples:N}}function hA(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Er,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,S=a.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):h();else{const O=c?0:r,P=O*4;let A=S.clippingState||null;m.value=A,A=g(b,v,P,x);for(let L=0;L!==P;++L)A[L]=i[L];S.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,b){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const S=x+C*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,A=x;P!==C;++P,A+=4)u.copy(_[P]).applyMatrix4(O,d),u.normal.toArray(y,A),y[A+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const js=4,zv=[.125,.215,.35,.446,.526,.582],Tr=20,pA=256,Gl=new dS,Hv=new Wt;let kh=null,Xh=0,Wh=0,Yh=!1;const mA=new te;class Gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=mA}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Rr||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ls,format:da,colorSpace:Yu,depthBuffer:!1},o=Vv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gA(c)),this._blurMaterial=vA(c,e,i),this._ggxMaterial=_A(c,e,i)}return o}_compileMaterial(e){const i=new Ci(new Qi,e);this._renderer.compile(i,Gl)}_sceneToCubeUV(e,i,r,o,c){const m=new ji(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Hv),_.toneMapping=Ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new rc,new Ku({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,S=!0):(y.color.copy(Hv),S=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):A===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const L=this._cubeSize;Ao(o,A*L,P>2?L:0,L,L),_.setRenderTarget(o),S&&_.render(C,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Rr||e.mapping===Po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ao(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Gl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,x=_*v,{_lodMax:b}=this,C=this._sizeLods[r],y=3*C*(r>b-js?r-b+js:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,Ao(c,y,S,3*C,2*C),o.setRenderTarget(c),o.render(d,Gl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Ao(e,y,S,3*C,2*C),o.setRenderTarget(e),o.render(d,Gl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Tr-1),C=c/b,y=isFinite(c)?1+Math.floor(g*C):Tr;y>Tr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);const S=[];let O=0;for(let F=0;F<Tr;++F){const T=F/C,U=Math.exp(-T*T/2);S.push(U),F===0?O+=U:F<y&&(O+=2*U)}for(let F=0;F<S.length;F++)S[F]=S[F]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-r;const A=this._sizeLods[o],L=3*A*(o>P-js?o-P+js:0),N=4*(this._cubeSize-A);Ao(i,L,N,3*A,2*A),m.setRenderTarget(i),m.render(_,Gl)}}function gA(a){const e=[],i=[],r=[];let o=a;const c=a-js+1+zv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-js?m=zv[u-a+js-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,C=3,y=2,S=1,O=new Float32Array(C*b*x),P=new Float32Array(y*b*x),A=new Float32Array(S*b*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,T=N>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];O.set(U,C*b*N),P.set(v,y*b*N);const k=[N,N,N,N,N,N];A.set(k,S*b*N)}const L=new Qi;L.setAttribute("position",new Ra(O,C)),L.setAttribute("uv",new Ra(P,y)),L.setAttribute("faceIndex",new Ra(A,S)),r.push(new Ci(L,null)),o>js&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Vv(a,e,i){const r=new Aa(a,e,i);return r.texture.mapping=tf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ao(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function _A(a,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:af(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function vA(a,e,i){const r=new Float32Array(Tr),o=new te(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:af(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function kv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Xv(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function af(){return`

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
	`}class mS extends Aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new lS(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new rc(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:ss});c.uniforms.tEquirect.value=i;const u=new Ci(o,c),d=i.minFilter;return i.minFilter===Ys&&(i.minFilter=xn),new bb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function xA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===mh||x===gh)if(e.has(v)){const b=e.get(v).texture;return d(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new mS(b.height);return C.fromEquirectangularTexture(a,v),e.set(v,C),v.addEventListener("dispose",h),d(C.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===mh||x===gh,C=x===Rr||x===Po;if(b||C){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Gv(a)),y=b?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const O=v.image;return b&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new Gv(a)),y=b?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,x){return x===mh?v.mapping=Rr:x===gh&&(v.mapping=Po),v}function m(v){let x=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&x++;return x===b}function h(v){const x=v.target;x.removeEventListener("dispose",h);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function SA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Do("WebGLRenderer: "+r+" extension not supported."),o}}}function MA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,b=_.attributes.position;let C=0;if(b===void 0)return;if(x!==null){const O=x.array;C=x.version;for(let P=0,A=O.length;P<A;P+=3){const L=O[P+0],N=O[P+1],F=O[P+2];v.push(L,N,N,F,F,L)}}else{const O=b.array;C=b.version;for(let P=0,A=O.length/3-1;P<A;P+=3){const L=P+0,N=P+1,F=P+2;v.push(L,N,N,F,F,L)}}const y=new(b.count>=65535?rS:sS)(v,1);y.version=C;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function yA(a,e,i){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function h(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let C=0;for(let y=0;y<x;y++)C+=v[y];i.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function EA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function bA(a,e,i){const r=new WeakMap,o=new vn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let k=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var x=k;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),y===!0&&(A=3);let L=d.attributes.position.count*A,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*N*4*_),T=new nS(F,L,N,_);T.type=Ea,T.needsUpdate=!0;const U=A*4;for(let G=0;G<_;G++){const q=S[G],de=O[G],ue=P[G],W=L*N*4*G;for(let z=0;z<q.count;z++){const H=z*U;b===!0&&(o.fromBufferAttribute(q,z),F[W+H+0]=o.x,F[W+H+1]=o.y,F[W+H+2]=o.z,F[W+H+3]=0),C===!0&&(o.fromBufferAttribute(de,z),F[W+H+4]=o.x,F[W+H+5]=o.y,F[W+H+6]=o.z,F[W+H+7]=0),y===!0&&(o.fromBufferAttribute(ue,z),F[W+H+8]=o.x,F[W+H+9]=o.y,F[W+H+10]=o.z,F[W+H+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Vt(L,N)},r.set(d,v),d.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function TA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,_=h.geometry,v=e.get(h,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const AA={[Hx]:"LINEAR_TONE_MAPPING",[Gx]:"REINHARD_TONE_MAPPING",[Vx]:"CINEON_TONE_MAPPING",[kx]:"ACES_FILMIC_TONE_MAPPING",[Wx]:"AGX_TONE_MAPPING",[Yx]:"NEUTRAL_TONE_MAPPING",[Xx]:"CUSTOM_TONE_MAPPING"};function RA(a,e,i,r,o,c){const u=new Aa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Io(e,i):void 0}),d=new Aa(e,i,{type:ls,depthBuffer:!1,stencilBuffer:!1}),m=new Qi;m.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const h=new Mb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ci(m,h),_=new dS(-1,1,1,-1,0,1);let v=null,x=null,b=!1,C,y=null,S=[],O=!1;this.setSize=function(P,A){u.setSize(P,A),d.setSize(P,A);for(let L=0;L<S.length;L++){const N=S[L];N.setSize&&N.setSize(P,A)}},this.setEffects=function(P){S=P,O=S.length>0&&S[0].isRenderPass===!0;const A=u.width,L=u.height;for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(A,L)}},this.begin=function(P,A){if(b||P.toneMapping===Ta&&S.length===0)return!1;if(y=A,A!==null){const L=A.width,N=A.height;(u.width!==L||u.height!==N)&&this.setSize(L,N)}return O===!1&&P.setRenderTarget(u),C=P.toneMapping,P.toneMapping=Ta,!0},this.hasRenderPass=function(){return O},this.end=function(P,A){P.toneMapping=C,b=!0;let L=u,N=d;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(P,N,L,A),T.needsSwap!==!1)){const U=L;L=N,N=U}}if(v!==P.outputColorSpace||x!==P.toneMapping){v=P.outputColorSpace,x=P.toneMapping,h.defines={},Ot.getTransfer(v)===Zt&&(h.defines.SRGB_TRANSFER="");const F=AA[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(y),P.render(g,_),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const gS=new ni,Yp=new Io(1,1),_S=new nS,vS=new ZE,xS=new lS,Wv=[],Yv=[],qv=new Float32Array(16),jv=new Float32Array(9),Zv=new Float32Array(4);function Go(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Wv[o];if(c===void 0&&(c=new Float32Array(o),Wv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function Pn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function In(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function sf(a,e){let i=Yv[e];i===void 0&&(i=new Int32Array(e),Yv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function CA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function wA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Pn(i,e))return;a.uniform2fv(this.addr,e),In(i,e)}}function DA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Pn(i,e))return;a.uniform3fv(this.addr,e),In(i,e)}}function LA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Pn(i,e))return;a.uniform4fv(this.addr,e),In(i,e)}}function NA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Pn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),In(i,e)}else{if(Pn(i,r))return;Zv.set(r),a.uniformMatrix2fv(this.addr,!1,Zv),In(i,r)}}function UA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Pn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),In(i,e)}else{if(Pn(i,r))return;jv.set(r),a.uniformMatrix3fv(this.addr,!1,jv),In(i,r)}}function OA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Pn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),In(i,e)}else{if(Pn(i,r))return;qv.set(r),a.uniformMatrix4fv(this.addr,!1,qv),In(i,r)}}function PA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function IA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Pn(i,e))return;a.uniform2iv(this.addr,e),In(i,e)}}function BA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Pn(i,e))return;a.uniform3iv(this.addr,e),In(i,e)}}function FA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Pn(i,e))return;a.uniform4iv(this.addr,e),In(i,e)}}function zA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function HA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Pn(i,e))return;a.uniform2uiv(this.addr,e),In(i,e)}}function GA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Pn(i,e))return;a.uniform3uiv(this.addr,e),In(i,e)}}function VA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Pn(i,e))return;a.uniform4uiv(this.addr,e),In(i,e)}}function kA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Yp.compareFunction=i.isReversedDepthBuffer()?sm:am,c=Yp):c=gS,i.setTexture2D(e||c,o)}function XA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||vS,o)}function WA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||xS,o)}function YA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||_S,o)}function qA(a){switch(a){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return LA;case 35674:return NA;case 35675:return UA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return IA;case 35668:case 35672:return BA;case 35669:case 35673:return FA;case 5125:return zA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return YA}}function jA(a,e){a.uniform1fv(this.addr,e)}function ZA(a,e){const i=Go(e,this.size,2);a.uniform2fv(this.addr,i)}function KA(a,e){const i=Go(e,this.size,3);a.uniform3fv(this.addr,i)}function QA(a,e){const i=Go(e,this.size,4);a.uniform4fv(this.addr,i)}function JA(a,e){const i=Go(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function $A(a,e){const i=Go(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function e2(a,e){const i=Go(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function t2(a,e){a.uniform1iv(this.addr,e)}function n2(a,e){a.uniform2iv(this.addr,e)}function i2(a,e){a.uniform3iv(this.addr,e)}function a2(a,e){a.uniform4iv(this.addr,e)}function s2(a,e){a.uniform1uiv(this.addr,e)}function r2(a,e){a.uniform2uiv(this.addr,e)}function o2(a,e){a.uniform3uiv(this.addr,e)}function l2(a,e){a.uniform4uiv(this.addr,e)}function c2(a,e,i){const r=this.cache,o=e.length,c=sf(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Yp:u=gS;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function u2(a,e,i){const r=this.cache,o=e.length,c=sf(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||vS,c[u])}function f2(a,e,i){const r=this.cache,o=e.length,c=sf(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||xS,c[u])}function d2(a,e,i){const r=this.cache,o=e.length,c=sf(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||_S,c[u])}function h2(a){switch(a){case 5126:return jA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return a2;case 5125:return s2;case 36294:return r2;case 36295:return o2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}class p2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qA(i.type)}}class m2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h2(i.type)}}class g2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function Kv(a,e){a.seq.push(e),a.map[e.id]=e}function _2(a,e,i){const r=a.name,o=r.length;for(qh.lastIndex=0;;){const c=qh.exec(r),u=qh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Kv(i,h===void 0?new p2(d,a,e):new m2(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new g2(d),Kv(i,_)),i=_}}}class ku{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);_2(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Qv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const v2=37297;let x2=0;function S2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const Jv=new dt;function M2(a){Ot._getMatrix(Jv,Ot.workingColorSpace,a);const e=`mat3( ${Jv.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(a)){case qu:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function $v(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+S2(a.getShaderSource(e),d)}else return c}function y2(a,e){const i=M2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const E2={[Hx]:"Linear",[Gx]:"Reinhard",[Vx]:"Cineon",[kx]:"ACESFilmic",[Wx]:"AgX",[Yx]:"Neutral",[Xx]:"Custom"};function b2(a,e){const i=E2[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new te;function T2(){Ot.getLuminanceCoefficients(Ou);const a=Ou.x.toFixed(4),e=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function R2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function C2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function ql(a){return a!==""}function ex(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tx(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qp(a){return a.replace(w2,L2)}const D2=new Map;function L2(a,e){let i=St[e];if(i===void 0){const r=D2.get(e);if(r!==void 0)i=St[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return qp(i)}const N2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(a){return a.replace(N2,U2)}function U2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ix(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const O2={[Fu]:"SHADOWMAP_TYPE_PCF",[Wl]:"SHADOWMAP_TYPE_VSM"};function P2(a){return O2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const I2={[Rr]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE",[tf]:"ENVMAP_TYPE_CUBE_UV"};function B2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":I2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const F2={[Po]:"ENVMAP_MODE_REFRACTION"};function z2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H2={[zx]:"ENVMAP_BLENDING_MULTIPLY",[hE]:"ENVMAP_BLENDING_MIX",[pE]:"ENVMAP_BLENDING_ADD"};function G2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":H2[a.combine]||"ENVMAP_BLENDING_NONE"}function V2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=P2(i),h=B2(i),g=z2(i),_=G2(i),v=V2(i),x=A2(i),b=R2(c),C=o.createProgram();let y,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ql).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ql).join(`
`),S.length>0&&(S+=`
`)):(y=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),S=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ta?"#define TONE_MAPPING":"",i.toneMapping!==Ta?St.tonemapping_pars_fragment:"",i.toneMapping!==Ta?b2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,y2("linearToOutputTexel",i.outputColorSpace),T2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ql).join(`
`)),u=qp(u),u=ex(u,i),u=tx(u,i),d=qp(d),d=ex(d,i),d=tx(d,i),u=nx(u),d=nx(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=O+y+u,A=O+S+d,L=Qv(o,o.VERTEX_SHADER,P),N=Qv(o,o.FRAGMENT_SHADER,A);o.attachShader(C,L),o.attachShader(C,N),i.index0AttributeName!==void 0?o.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(G){if(a.debug.checkShaderErrors){const q=o.getProgramInfoLog(C)||"",de=o.getShaderInfoLog(L)||"",ue=o.getShaderInfoLog(N)||"",W=q.trim(),z=de.trim(),H=ue.trim();let ee=!0,me=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(ee=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,L,N);else{const ye=$v(o,L,"vertex"),I=$v(o,N,"fragment");It("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+ye+`
`+I)}else W!==""?lt("WebGLProgram: Program Info Log:",W):(z===""||H==="")&&(me=!1);me&&(G.diagnostics={runnable:ee,programLog:W,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:S}})}o.deleteShader(L),o.deleteShader(N),T=new ku(o,C),U=C2(o,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(C,v2)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=N,this}let X2=0;class W2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Y2(e),i.set(e,r)),r}}class Y2{constructor(e){this.id=X2++,this.code=e,this.usedTimes=0}}function q2(a){return a===Cr||a===Xu||a===Wu}function j2(a,e,i,r,o,c){const u=new iS,d=new W2,m=new Set,h=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,U,k,G,q,de){const ue=G.fog,W=q.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||z,H),me=ee&&ee.mapping===tf?ee.image.height:null,ye=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const I=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=I!==void 0?I.length:0;let Me=0;W.morphAttributes.position!==void 0&&(Me=1),W.morphAttributes.normal!==void 0&&(Me=2),W.morphAttributes.color!==void 0&&(Me=3);let Oe,Ue,ne,be;if(ye){const qe=Ma[ye];Oe=qe.vertexShader,Ue=qe.fragmentShader}else{Oe=T.vertexShader,Ue=T.fragmentShader;const qe=d.getVertexShaderStage(T),Bt=d.getFragmentShaderStage(T);d.update(T,qe,Bt),ne=qe.id,be=Bt.id}const xe=a.getRenderTarget(),Ie=a.state.buffers.depth.getReversed(),it=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,Mt=!!T.map,ut=!!T.matcap,ht=!!ee,xt=!!T.aoMap,yt=!!T.lightMap,tn=!!T.bumpMap&&T.wireframe===!1,nn=!!T.normalMap,un=!!T.displacementMap,fn=!!T.emissiveMap,Yt=!!T.metalnessMap,dn=!!T.roughnessMap,K=T.anisotropy>0,ct=T.clearcoat>0,Et=T.dispersion>0,B=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,oe=K&&!!T.anisotropyMap,ge=ct&&!!T.clearcoatMap,Pe=ct&&!!T.clearcoatNormalMap,Fe=ct&&!!T.clearcoatRoughnessMap,he=B&&!!T.iridescenceMap,_e=B&&!!T.iridescenceThicknessMap,we=E&&!!T.sheenColorMap,Ye=E&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,He=!!T.specularColorMap,et=!!T.specularIntensityMap,tt=J&&!!T.transmissionMap,Ke=J&&!!T.thicknessMap,X=!!T.gradientMap,De=!!T.alphaMap,ve=T.alphaTest>0,Le=!!T.alphaHash,ze=!!T.extensions;let Te=Ta;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Te=a.toneMapping);const Qe={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:Ue,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:it,instancingColor:it&&q.instanceColor!==null,instancingMorph:it&&q.morphTexture!==null,outputColorSpace:xe===null?a.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Mt,matcap:ut,envMap:ht,envMapMode:ht&&ee.mapping,envMapCubeUVHeight:me,aoMap:xt,lightMap:yt,bumpMap:tn,normalMap:nn,displacementMap:un,emissiveMap:fn,normalMapObjectSpace:nn&&T.normalMapType===_E,normalMapTangentSpace:nn&&T.normalMapType===fv,packedNormalMap:nn&&T.normalMapType===fv&&q2(T.normalMap.format),metalnessMap:Yt,roughnessMap:dn,anisotropy:K,anisotropyMap:oe,clearcoat:ct,clearcoatMap:ge,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Fe,dispersion:Et,iridescence:B,iridescenceMap:he,iridescenceThicknessMap:_e,sheen:E,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:Ge,specularColorMap:He,specularIntensityMap:et,transmission:J,transmissionMap:tt,thicknessMap:Ke,gradientMap:X,opaque:T.transparent===!1&&T.blending===wo&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:Le,combine:T.combine,mapUv:Mt&&b(T.map.channel),aoMapUv:xt&&b(T.aoMap.channel),lightMapUv:yt&&b(T.lightMap.channel),bumpMapUv:tn&&b(T.bumpMap.channel),normalMapUv:nn&&b(T.normalMap.channel),displacementMapUv:un&&b(T.displacementMap.channel),emissiveMapUv:fn&&b(T.emissiveMap.channel),metalnessMapUv:Yt&&b(T.metalnessMap.channel),roughnessMapUv:dn&&b(T.roughnessMap.channel),anisotropyMapUv:oe&&b(T.anisotropyMap.channel),clearcoatMapUv:ge&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&b(T.sheenRoughnessMap.channel),specularMapUv:Ge&&b(T.specularMap.channel),specularColorMapUv:He&&b(T.specularColorMap.channel),specularIntensityMapUv:et&&b(T.specularIntensityMap.channel),transmissionMapUv:tt&&b(T.transmissionMap.channel),thicknessMapUv:Ke&&b(T.thicknessMap.channel),alphaMapUv:De&&b(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(nn||K),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Mt||De),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&nn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Me,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Te,decodeVideoTexture:Mt&&T.map.isVideoTexture===!0&&Ot.getTransfer(T.map.colorSpace)===Zt,decodeVideoTextureEmissive:fn&&T.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(T.emissiveMap.colorSpace)===Zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ya,flipSided:T.side===gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)U.push(k),U.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(U,T),O(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function O(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function P(T){const U=x[T.type];let k;if(U){const G=Ma[U];k=vb.clone(G.uniforms)}else k=T.uniforms;return k}function A(T,U){let k=g.get(U);return k!==void 0?++k.usedTimes:(k=new k2(a,U,T,o),h.push(k),g.set(U,k)),k}function L(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:P,acquireProgram:A,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:F}}function Z2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function K2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function ax(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function sx(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,b,C,y,S){let O=a[e];return O===void 0?(O={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:S},a[e]=O):(O.id=v.id,O.object=v,O.geometry=x,O.material=b,O.materialVariant=u(v),O.groupOrder=C,O.renderOrder=v.renderOrder,O.z=y,O.group=S),e++,O}function m(v,x,b,C,y,S){const O=d(v,x,b,C,y,S);b.transmission>0?r.push(O):b.transparent===!0?o.push(O):i.push(O)}function h(v,x,b,C,y,S){const O=d(v,x,b,C,y,S);b.transmission>0?r.unshift(O):b.transparent===!0?o.unshift(O):i.unshift(O)}function g(v,x,b){i.length>1&&i.sort(v||K2),r.length>1&&r.sort(x||ax),o.length>1&&o.sort(x||ax),b&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:_,sort:g}}function Q2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new sx,a.set(r,[u])):o>=c.length?(u=new sx,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function J2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Wt};break;case"SpotLight":i={position:new te,direction:new te,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":i={color:new Wt,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=i,i}}}function $2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let eR=0;function tR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function nR(a){const e=new J2,i=$2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new bn,u=new bn;function d(h){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let x=0,b=0,C=0,y=0,S=0,O=0,P=0,A=0,L=0,N=0,F=0;h.sort(tR);for(let U=0,k=h.length;U<k;U++){const G=h[U],q=G.color,de=G.intensity,ue=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Cr?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=q.r*de,_+=q.g*de,v+=q.b*de;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],de);F++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.directionalShadow[x]=ee,r.directionalShadowMap[x]=W,r.directionalShadowMatrix[x]=G.shadow.matrix,O++}r.directional[x]=z,x++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(q).multiplyScalar(de),z.distance=ue,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[C]=z;const H=G.shadow;if(G.map&&(r.spotLightMap[L]=G.map,L++,H.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[C]=H.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.spotShadow[C]=ee,r.spotShadowMap[C]=W,A++}C++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(q).multiplyScalar(de),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,r.pointShadow[b]=ee,r.pointShadowMap[b]=W,r.pointShadowMatrix[b]=G.shadow.matrix,P++}r.point[b]=z,b++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(de),z.groundColor.copy(G.groundColor).multiplyScalar(de),r.hemi[S]=z,S++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==O||T.numPointShadows!==P||T.numSpotShadows!==A||T.numSpotMaps!==L||T.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,T.directionalLength=x,T.pointLength=b,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=O,T.numPointShadows=P,T.numSpotShadows=A,T.numSpotMaps=L,T.numLightProbes=F,r.version=eR++)}function m(h,g){let _=0,v=0,x=0,b=0,C=0;const y=g.matrixWorldInverse;for(let S=0,O=h.length;S<O;S++){const P=h[S];if(P.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),_++}else if(P.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),x++}else if(P.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),u.identity(),c.copy(P.matrixWorld),c.premultiply(y),u.extractRotation(c),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),b++}else if(P.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function rx(a){const e=new nR(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function m(v){o.push(v)}function h(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function iR(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new rx(a),e.set(o,[d])):c>=u.length?(d=new rx(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const aR=`void main() {
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
}`,rR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],oR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],ox=new bn,Vl=new te,jh=new te;function lR(a,e,i){let r=new oS;const o=new Vt,c=new Vt,u=new vn,d=new yb,m=new Eb,h={},g=i.maxTextureSize,_={[os]:gi,[gi]:os,[ya]:ya},v=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:aR,fragmentShader:sR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new Qi;b.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ci(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let S=this.type;this.render=function(N,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===jy&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fu);const U=a.getRenderTarget(),k=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),q=a.state;q.setBlending(ss),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const de=S!==this.type;de&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(W=>W.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,W=N.length;ue<W;ue++){const z=N[ue],H=z.shadow;if(H===void 0){lt("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ee=H.getFrameExtents();o.multiply(ee),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ee.x),o.x=c.x*ee.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ee.y),o.y=c.y*ee.y,H.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||de===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wl){if(z.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Aa(o.x,o.y,{format:Cr,type:ls,minFilter:xn,magFilter:xn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Io(o.x,o.y,Ea),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=cs,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn}else z.isPointLight?(H.map=new mS(o.x),H.map.depthTexture=new pb(o.x,Ca)):(H.map=new Aa(o.x,o.y),H.map.depthTexture=new Io(o.x,o.y,Ca)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=cs,this.type===Fu?(H.map.depthTexture.compareFunction=me?sm:am,H.map.depthTexture.minFilter=xn,H.map.depthTexture.magFilter=xn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn);H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ye;I++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,I),a.clear();else{I===0&&(a.setRenderTarget(H.map),a.clear());const Q=H.getViewport(I);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),q.viewport(u)}if(z.isPointLight){const Q=H.camera,Me=H.matrix,Oe=z.distance||Q.far;Oe!==Q.far&&(Q.far=Oe,Q.updateProjectionMatrix()),Vl.setFromMatrixPosition(z.matrixWorld),Q.position.copy(Vl),jh.copy(Q.position),jh.add(rR[I]),Q.up.copy(oR[I]),Q.lookAt(jh),Q.updateMatrixWorld(),Me.makeTranslation(-Vl.x,-Vl.y,-Vl.z),ox.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ox,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),A(F,T,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Wl&&O(H,T),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,a.setRenderTarget(U,k,G)};function O(N,F){const T=e.update(C);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Aa(o.x,o.y,{format:Cr,type:ls})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(F,null,T,v,C,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(F,null,T,x,C,null)}function P(N,F,T,U){let k=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?m:d,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=k.uuid,de=F.uuid;let ue=h[q];ue===void 0&&(ue={},h[q]=ue);let W=ue[de];W===void 0&&(W=k.clone(),ue[de]=W,F.addEventListener("dispose",L)),k=W}if(k.visible=F.visible,k.wireframe=F.wireframe,U===Wl?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:_[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=a.properties.get(k);q.light=T}return k}function A(N,F,T,U,k){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===Wl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const de=e.update(N),ue=N.material;if(Array.isArray(ue)){const W=de.groups;for(let z=0,H=W.length;z<H;z++){const ee=W[z],me=ue[ee.materialIndex];if(me&&me.visible){const ye=P(N,me,U,k);N.onBeforeShadow(a,N,F,T,de,ye,ee),a.renderBufferDirect(T,null,de,ye,N,ee),N.onAfterShadow(a,N,F,T,de,ye,ee)}}}else if(ue.visible){const W=P(N,ue,U,k);N.onBeforeShadow(a,N,F,T,de,W,null),a.renderBufferDirect(T,null,de,W,N,null),N.onAfterShadow(a,N,F,T,de,W,null)}}const q=N.children;for(let de=0,ue=q.length;de<ue;de++)A(q[de],F,T,U,k)}function L(N){N.target.removeEventListener("dispose",L);for(const T in h){const U=h[T],k=N.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function cR(a,e){function i(){let X=!1;const De=new vn;let ve=null;const Le=new vn(0,0,0,0);return{setMask:function(ze){ve!==ze&&!X&&(a.colorMask(ze,ze,ze,ze),ve=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Te,Qe,qe,Bt){Bt===!0&&(ze*=qe,Te*=qe,Qe*=qe),De.set(ze,Te,Qe,qe),Le.equals(De)===!1&&(a.clearColor(ze,Te,Qe,qe),Le.copy(De))},reset:function(){X=!1,ve=null,Le.set(-1,0,0,0)}}}function r(){let X=!1,De=!1,ve=null,Le=null,ze=null;return{setReversed:function(Te){if(De!==Te){const Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),De=Te;const qe=ze;ze=null,this.setClear(qe)}},getReversed:function(){return De},setTest:function(Te){Te?xe(a.DEPTH_TEST):Ie(a.DEPTH_TEST)},setMask:function(Te){ve!==Te&&!X&&(a.depthMask(Te),ve=Te)},setFunc:function(Te){if(De&&(Te=RE[Te]),Le!==Te){switch(Te){case op:a.depthFunc(a.NEVER);break;case lp:a.depthFunc(a.ALWAYS);break;case cp:a.depthFunc(a.LESS);break;case Oo:a.depthFunc(a.LEQUAL);break;case up:a.depthFunc(a.EQUAL);break;case fp:a.depthFunc(a.GEQUAL);break;case dp:a.depthFunc(a.GREATER);break;case hp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=Te}},setLocked:function(Te){X=Te},setClear:function(Te){ze!==Te&&(ze=Te,De&&(Te=1-Te),a.clearDepth(Te))},reset:function(){X=!1,ve=null,Le=null,ze=null,De=!1}}}function o(){let X=!1,De=null,ve=null,Le=null,ze=null,Te=null,Qe=null,qe=null,Bt=null;return{setTest:function(Ft){X||(Ft?xe(a.STENCIL_TEST):Ie(a.STENCIL_TEST))},setMask:function(Ft){De!==Ft&&!X&&(a.stencilMask(Ft),De=Ft)},setFunc:function(Ft,jn,Bn){(ve!==Ft||Le!==jn||ze!==Bn)&&(a.stencilFunc(Ft,jn,Bn),ve=Ft,Le=jn,ze=Bn)},setOp:function(Ft,jn,Bn){(Te!==Ft||Qe!==jn||qe!==Bn)&&(a.stencilOp(Ft,jn,Bn),Te=Ft,Qe=jn,qe=Bn)},setLocked:function(Ft){X=Ft},setClear:function(Ft){Bt!==Ft&&(a.clearStencil(Ft),Bt=Ft)},reset:function(){X=!1,De=null,ve=null,Le=null,ze=null,Te=null,Qe=null,qe=null,Bt=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],C=null,y=!1,S=null,O=null,P=null,A=null,L=null,N=null,F=null,T=new Wt(0,0,0),U=0,k=!1,G=null,q=null,de=null,ue=null,W=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=ee>=1):me.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=ee>=2);let ye=null,I={};const Q=a.getParameter(a.SCISSOR_BOX),Me=a.getParameter(a.VIEWPORT),Oe=new vn().fromArray(Q),Ue=new vn().fromArray(Me);function ne(X,De,ve,Le){const ze=new Uint8Array(4),Te=a.createTexture();a.bindTexture(X,Te),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<ve;Qe++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Le,0,a.RGBA,a.UNSIGNED_BYTE,ze):a.texImage2D(De+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ze);return Te}const be={};be[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(a.DEPTH_TEST),u.setFunc(Oo),tn(!1),nn(lv),xe(a.CULL_FACE),xt(ss);function xe(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Ie(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function it(X,De){return v[X]!==De?(a.bindFramebuffer(X,De),v[X]=De,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=De),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Xe(X,De){let ve=b,Le=!1;if(X){ve=x.get(De),ve===void 0&&(ve=[],x.set(De,ve));const ze=X.textures;if(ve.length!==ze.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Te=0,Qe=ze.length;Te<Qe;Te++)ve[Te]=a.COLOR_ATTACHMENT0+Te;ve.length=ze.length,Le=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Le=!0);Le&&a.drawBuffers(ve)}function Mt(X){return C!==X?(a.useProgram(X),C=X,!0):!1}const ut={[br]:a.FUNC_ADD,[Ky]:a.FUNC_SUBTRACT,[Qy]:a.FUNC_REVERSE_SUBTRACT};ut[Jy]=a.MIN,ut[$y]=a.MAX;const ht={[eE]:a.ZERO,[tE]:a.ONE,[nE]:a.SRC_COLOR,[sp]:a.SRC_ALPHA,[lE]:a.SRC_ALPHA_SATURATE,[rE]:a.DST_COLOR,[aE]:a.DST_ALPHA,[iE]:a.ONE_MINUS_SRC_COLOR,[rp]:a.ONE_MINUS_SRC_ALPHA,[oE]:a.ONE_MINUS_DST_COLOR,[sE]:a.ONE_MINUS_DST_ALPHA,[cE]:a.CONSTANT_COLOR,[uE]:a.ONE_MINUS_CONSTANT_COLOR,[fE]:a.CONSTANT_ALPHA,[dE]:a.ONE_MINUS_CONSTANT_ALPHA};function xt(X,De,ve,Le,ze,Te,Qe,qe,Bt,Ft){if(X===ss){y===!0&&(Ie(a.BLEND),y=!1);return}if(y===!1&&(xe(a.BLEND),y=!0),X!==Zy){if(X!==S||Ft!==k){if((O!==br||L!==br)&&(a.blendEquation(a.FUNC_ADD),O=br,L=br),Ft)switch(X){case wo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ap:a.blendFunc(a.ONE,a.ONE);break;case cv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:It("WebGLState: Invalid blending: ",X);break}else switch(X){case wo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ap:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case cv:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uv:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",X);break}P=null,A=null,N=null,F=null,T.set(0,0,0),U=0,S=X,k=Ft}return}ze=ze||De,Te=Te||ve,Qe=Qe||Le,(De!==O||ze!==L)&&(a.blendEquationSeparate(ut[De],ut[ze]),O=De,L=ze),(ve!==P||Le!==A||Te!==N||Qe!==F)&&(a.blendFuncSeparate(ht[ve],ht[Le],ht[Te],ht[Qe]),P=ve,A=Le,N=Te,F=Qe),(qe.equals(T)===!1||Bt!==U)&&(a.blendColor(qe.r,qe.g,qe.b,Bt),T.copy(qe),U=Bt),S=X,k=!1}function yt(X,De){X.side===ya?Ie(a.CULL_FACE):xe(a.CULL_FACE);let ve=X.side===gi;De&&(ve=!ve),tn(ve),X.blending===wo&&X.transparent===!1?xt(ss):xt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Le=X.stencilWrite;d.setTest(Le),Le&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),fn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(a.SAMPLE_ALPHA_TO_COVERAGE):Ie(a.SAMPLE_ALPHA_TO_COVERAGE)}function tn(X){G!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),G=X)}function nn(X){X!==Yy?(xe(a.CULL_FACE),X!==q&&(X===lv?a.cullFace(a.BACK):X===qy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ie(a.CULL_FACE),q=X}function un(X){X!==de&&(H&&a.lineWidth(X),de=X)}function fn(X,De,ve){X?(xe(a.POLYGON_OFFSET_FILL),(ue!==De||W!==ve)&&(ue=De,W=ve,u.getReversed()&&(De=-De),a.polygonOffset(De,ve))):Ie(a.POLYGON_OFFSET_FILL)}function Yt(X){X?xe(a.SCISSOR_TEST):Ie(a.SCISSOR_TEST)}function dn(X){X===void 0&&(X=a.TEXTURE0+z-1),ye!==X&&(a.activeTexture(X),ye=X)}function K(X,De,ve){ve===void 0&&(ye===null?ve=a.TEXTURE0+z-1:ve=ye);let Le=I[ve];Le===void 0&&(Le={type:void 0,texture:void 0},I[ve]=Le),(Le.type!==X||Le.texture!==De)&&(ye!==ve&&(a.activeTexture(ve),ye=ve),a.bindTexture(X,De||be[X]),Le.type=X,Le.texture=De)}function ct(){const X=I[ye];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Et(){try{a.compressedTexImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function B(){try{a.compressedTexImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function E(){try{a.texSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function J(){try{a.texSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function ge(){try{a.compressedTexSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Pe(){try{a.texStorage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Fe(){try{a.texStorage3D(...arguments)}catch(X){It("WebGLState:",X)}}function he(){try{a.texImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function _e(){try{a.texImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function we(X){return _[X]!==void 0?_[X]:a.getParameter(X)}function Ye(X,De){_[X]!==De&&(a.pixelStorei(X,De),_[X]=De)}function Ge(X){Oe.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Oe.copy(X))}function He(X){Ue.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function et(X,De){let ve=h.get(De);ve===void 0&&(ve=new WeakMap,h.set(De,ve));let Le=ve.get(X);Le===void 0&&(Le=a.getUniformBlockIndex(De,X.name),ve.set(X,Le))}function tt(X,De){const Le=h.get(De).get(X);m.get(De)!==Le&&(a.uniformBlockBinding(De,Le,X.__bindingPointIndex),m.set(De,Le))}function Ke(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},ye=null,I={},v={},x=new WeakMap,b=[],C=null,y=!1,S=null,O=null,P=null,A=null,L=null,N=null,F=null,T=new Wt(0,0,0),U=0,k=!1,G=null,q=null,de=null,ue=null,W=null,Oe.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:xe,disable:Ie,bindFramebuffer:it,drawBuffers:Xe,useProgram:Mt,setBlending:xt,setMaterial:yt,setFlipSided:tn,setCullFace:nn,setLineWidth:un,setPolygonOffset:fn,setScissorTest:Yt,activeTexture:dn,bindTexture:K,unbindTexture:ct,compressedTexImage2D:Et,compressedTexImage3D:B,texImage2D:he,texImage3D:_e,pixelStorei:Ye,getParameter:we,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:oe,compressedTexSubImage3D:ge,scissor:Ge,viewport:He,reset:Ke}}function uR(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(B,E){return b?new OffscreenCanvas(B,E):Zu("canvas")}function y(B,E,J){let oe=1;const ge=Et(B);if((ge.width>J||ge.height>J)&&(oe=J/Math.max(ge.width,ge.height)),oe<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Pe=Math.floor(oe*ge.width),Fe=Math.floor(oe*ge.height);v===void 0&&(v=C(Pe,Fe));const he=E?C(Pe,Fe):v;return he.width=Pe,he.height=Fe,he.getContext("2d").drawImage(B,0,0,Pe,Fe),lt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Pe+"x"+Fe+")."),he}else return"data"in B&&lt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),B;return B}function S(B){return B.generateMipmaps}function O(B){a.generateMipmap(B)}function P(B){return B.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?a.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(B,E,J,oe,ge,Pe=!1){if(B!==null){if(a[B]!==void 0)return a[B];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Fe;oe&&(Fe=e.get("EXT_texture_norm16"),Fe||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===a.RED&&(J===a.FLOAT&&(he=a.R32F),J===a.HALF_FLOAT&&(he=a.R16F),J===a.UNSIGNED_BYTE&&(he=a.R8),J===a.UNSIGNED_SHORT&&Fe&&(he=Fe.R16_EXT),J===a.SHORT&&Fe&&(he=Fe.R16_SNORM_EXT)),E===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.R8UI),J===a.UNSIGNED_SHORT&&(he=a.R16UI),J===a.UNSIGNED_INT&&(he=a.R32UI),J===a.BYTE&&(he=a.R8I),J===a.SHORT&&(he=a.R16I),J===a.INT&&(he=a.R32I)),E===a.RG&&(J===a.FLOAT&&(he=a.RG32F),J===a.HALF_FLOAT&&(he=a.RG16F),J===a.UNSIGNED_BYTE&&(he=a.RG8),J===a.UNSIGNED_SHORT&&Fe&&(he=Fe.RG16_EXT),J===a.SHORT&&Fe&&(he=Fe.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RG8UI),J===a.UNSIGNED_SHORT&&(he=a.RG16UI),J===a.UNSIGNED_INT&&(he=a.RG32UI),J===a.BYTE&&(he=a.RG8I),J===a.SHORT&&(he=a.RG16I),J===a.INT&&(he=a.RG32I)),E===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGB8UI),J===a.UNSIGNED_SHORT&&(he=a.RGB16UI),J===a.UNSIGNED_INT&&(he=a.RGB32UI),J===a.BYTE&&(he=a.RGB8I),J===a.SHORT&&(he=a.RGB16I),J===a.INT&&(he=a.RGB32I)),E===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),J===a.UNSIGNED_INT&&(he=a.RGBA32UI),J===a.BYTE&&(he=a.RGBA8I),J===a.SHORT&&(he=a.RGBA16I),J===a.INT&&(he=a.RGBA32I)),E===a.RGB&&(J===a.UNSIGNED_SHORT&&Fe&&(he=Fe.RGB16_EXT),J===a.SHORT&&Fe&&(he=Fe.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),E===a.RGBA){const _e=Pe?qu:Ot.getTransfer(ge);J===a.FLOAT&&(he=a.RGBA32F),J===a.HALF_FLOAT&&(he=a.RGBA16F),J===a.UNSIGNED_BYTE&&(he=_e===Zt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Fe&&(he=Fe.RGBA16_EXT),J===a.SHORT&&Fe&&(he=Fe.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function L(B,E){let J;return B?E===null||E===Ca||E===tc?J=a.DEPTH24_STENCIL8:E===Ea?J=a.DEPTH32F_STENCIL8:E===ec&&(J=a.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ca||E===tc?J=a.DEPTH_COMPONENT24:E===Ea?J=a.DEPTH_COMPONENT32F:E===ec&&(J=a.DEPTH_COMPONENT16),J}function N(B,E){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==qn&&B.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function F(B){const E=B.target;E.removeEventListener("dispose",F),U(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(B){const E=B.target;E.removeEventListener("dispose",T),G(E)}function U(B){const E=r.get(B);if(E.__webglInit===void 0)return;const J=B.source,oe=x.get(J);if(oe){const ge=oe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&k(B),Object.keys(oe).length===0&&x.delete(J)}r.remove(B)}function k(B){const E=r.get(B);a.deleteTexture(E.__webglTexture);const J=B.source,oe=x.get(J);delete oe[E.__cacheKey],u.memory.textures--}function G(B){const E=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let ge=0;ge<E.__webglFramebuffer[oe].length;ge++)a.deleteFramebuffer(E.__webglFramebuffer[oe][ge]);else a.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)a.deleteFramebuffer(E.__webglFramebuffer[oe]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=B.textures;for(let oe=0,ge=J.length;oe<ge;oe++){const Pe=r.get(J[oe]);Pe.__webglTexture&&(a.deleteTexture(Pe.__webglTexture),u.memory.textures--),r.remove(J[oe])}r.remove(B)}let q=0;function de(){q=0}function ue(){return q}function W(B){q=B}function z(){const B=q;return B>=o.maxTextures&&lt("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),q+=1,B}function H(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function ee(B,E){const J=r.get(B);if(B.isVideoTexture&&K(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){const oe=B.image;if(oe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(J,B,E);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+E)}function me(B,E){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Ie(J,B,E);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+E)}function ye(B,E){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Ie(J,B,E);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+E)}function I(B,E){const J=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){it(J,B,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+E)}const Q={[pp]:a.REPEAT,[fa]:a.CLAMP_TO_EDGE,[mp]:a.MIRRORED_REPEAT},Me={[qn]:a.NEAREST,[mE]:a.NEAREST_MIPMAP_NEAREST,[hu]:a.NEAREST_MIPMAP_LINEAR,[xn]:a.LINEAR,[_h]:a.LINEAR_MIPMAP_NEAREST,[Ys]:a.LINEAR_MIPMAP_LINEAR},Oe={[vE]:a.NEVER,[EE]:a.ALWAYS,[xE]:a.LESS,[am]:a.LEQUAL,[SE]:a.EQUAL,[sm]:a.GEQUAL,[ME]:a.GREATER,[yE]:a.NOTEQUAL};function Ue(B,E){if(E.type===Ea&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===_h||E.magFilter===hu||E.magFilter===Ys||E.minFilter===xn||E.minFilter===_h||E.minFilter===hu||E.minFilter===Ys)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(B,a.TEXTURE_WRAP_S,Q[E.wrapS]),a.texParameteri(B,a.TEXTURE_WRAP_T,Q[E.wrapT]),(B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY)&&a.texParameteri(B,a.TEXTURE_WRAP_R,Q[E.wrapR]),a.texParameteri(B,a.TEXTURE_MAG_FILTER,Me[E.magFilter]),a.texParameteri(B,a.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(a.texParameteri(B,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(B,a.TEXTURE_COMPARE_FUNC,Oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==hu&&E.minFilter!==Ys||E.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ne(B,E){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",F));const oe=E.source;let ge=x.get(oe);ge===void 0&&(ge={},x.set(oe,ge));const Pe=H(E);if(Pe!==B.__cacheKey){ge[Pe]===void 0&&(ge[Pe]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ge[Pe].usedTimes++;const Fe=ge[B.__cacheKey];Fe!==void 0&&(ge[B.__cacheKey].usedTimes--,Fe.usedTimes===0&&k(E)),B.__cacheKey=Pe,B.__webglTexture=ge[Pe].texture}return J}function be(B,E,J){return Math.floor(Math.floor(B/J)/E)}function xe(B,E,J,oe){const Pe=B.updateRanges;if(Pe.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,J,oe,E.data);else{Pe.sort((Ye,Ge)=>Ye.start-Ge.start);let Fe=0;for(let Ye=1;Ye<Pe.length;Ye++){const Ge=Pe[Fe],He=Pe[Ye],et=Ge.start+Ge.count,tt=be(He.start,E.width,4),Ke=be(Ge.start,E.width,4);He.start<=et+1&&tt===Ke&&be(He.start+He.count-1,E.width,4)===tt?Ge.count=Math.max(Ge.count,He.start+He.count-Ge.start):(++Fe,Pe[Fe]=He)}Pe.length=Fe+1;const he=i.getParameter(a.UNPACK_ROW_LENGTH),_e=i.getParameter(a.UNPACK_SKIP_PIXELS),we=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,Ge=Pe.length;Ye<Ge;Ye++){const He=Pe[Ye],et=Math.floor(He.start/4),tt=Math.ceil(He.count/4),Ke=et%E.width,X=Math.floor(et/E.width),De=tt,ve=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,Ke,X,De,ve,J,oe,E.data)}B.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,he),i.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function Ie(B,E,J){let oe=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=a.TEXTURE_3D);const ge=ne(B,E),Pe=E.source;i.bindTexture(oe,B.__webglTexture,a.TEXTURE0+J);const Fe=r.get(Pe);if(Pe.version!==Fe.__version||ge===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Ot.getPrimaries(Ot.workingColorSpace),Le=E.colorSpace===Ws?null:Ot.getPrimaries(E.colorSpace),ze=E.colorSpace===Ws||ve===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=y(E.image,!1,o.maxTextureSize);_e=ct(E,_e);const we=c.convert(E.format,E.colorSpace),Ye=c.convert(E.type);let Ge=A(E.internalFormat,we,Ye,E.normalized,E.colorSpace,E.isVideoTexture);Ue(oe,E);let He;const et=E.mipmaps,tt=E.isVideoTexture!==!0,Ke=Fe.__version===void 0||ge===!0,X=Pe.dataReady,De=N(E,_e);if(E.isDepthTexture)Ge=L(E.format===Ar,E.type),Ke&&(tt?i.texStorage2D(a.TEXTURE_2D,1,Ge,_e.width,_e.height):i.texImage2D(a.TEXTURE_2D,0,Ge,_e.width,_e.height,0,we,Ye,null));else if(E.isDataTexture)if(et.length>0){tt&&Ke&&i.texStorage2D(a.TEXTURE_2D,De,Ge,et[0].width,et[0].height);for(let ve=0,Le=et.length;ve<Le;ve++)He=et[ve],tt?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,He.width,He.height,we,Ye,He.data):i.texImage2D(a.TEXTURE_2D,ve,Ge,He.width,He.height,0,we,Ye,He.data);E.generateMipmaps=!1}else tt?(Ke&&i.texStorage2D(a.TEXTURE_2D,De,Ge,_e.width,_e.height),X&&xe(E,_e,we,Ye)):i.texImage2D(a.TEXTURE_2D,0,Ge,_e.width,_e.height,0,we,Ye,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&Ke&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ge,et[0].width,et[0].height,_e.depth);for(let ve=0,Le=et.length;ve<Le;ve++)if(He=et[ve],E.format!==da)if(we!==null)if(tt){if(X)if(E.layerUpdates.size>0){const ze=Fv(He.width,He.height,E.format,E.type);for(const Te of E.layerUpdates){const Qe=He.data.subarray(Te*ze/He.data.BYTES_PER_ELEMENT,(Te+1)*ze/He.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Te,He.width,He.height,1,we,Qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,He.width,He.height,_e.depth,we,He.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Ge,He.width,He.height,_e.depth,0,He.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?X&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,He.width,He.height,_e.depth,we,Ye,He.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ve,Ge,He.width,He.height,_e.depth,0,we,Ye,He.data)}else{tt&&Ke&&i.texStorage2D(a.TEXTURE_2D,De,Ge,et[0].width,et[0].height);for(let ve=0,Le=et.length;ve<Le;ve++)He=et[ve],E.format!==da?we!==null?tt?X&&i.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,He.width,He.height,we,He.data):i.compressedTexImage2D(a.TEXTURE_2D,ve,Ge,He.width,He.height,0,He.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,He.width,He.height,we,Ye,He.data):i.texImage2D(a.TEXTURE_2D,ve,Ge,He.width,He.height,0,we,Ye,He.data)}else if(E.isDataArrayTexture)if(tt){if(Ke&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Ge,_e.width,_e.height,_e.depth),X)if(E.layerUpdates.size>0){const ve=Fv(_e.width,_e.height,E.format,E.type);for(const Le of E.layerUpdates){const ze=_e.data.subarray(Le*ve/_e.data.BYTES_PER_ELEMENT,(Le+1)*ve/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Le,_e.width,_e.height,1,we,Ye,ze)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,we,Ye,_e.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ge,_e.width,_e.height,_e.depth,0,we,Ye,_e.data);else if(E.isData3DTexture)tt?(Ke&&i.texStorage3D(a.TEXTURE_3D,De,Ge,_e.width,_e.height,_e.depth),X&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,we,Ye,_e.data)):i.texImage3D(a.TEXTURE_3D,0,Ge,_e.width,_e.height,_e.depth,0,we,Ye,_e.data);else if(E.isFramebufferTexture){if(Ke)if(tt)i.texStorage2D(a.TEXTURE_2D,De,Ge,_e.width,_e.height);else{let ve=_e.width,Le=_e.height;for(let ze=0;ze<De;ze++)i.texImage2D(a.TEXTURE_2D,ze,Ge,ve,Le,0,we,Ye,null),ve>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),_.add(E),ve.onpaint=Le=>{const ze=Le.changedElements;for(const Te of _)ze.includes(Te.image)&&(Te.needsUpdate=!0)},ve.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,_e);else{const ze=a.RGBA,Te=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ze,Te,Qe,_e)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(et.length>0){if(tt&&Ke){const ve=Et(et[0]);i.texStorage2D(a.TEXTURE_2D,De,Ge,ve.width,ve.height)}for(let ve=0,Le=et.length;ve<Le;ve++)He=et[ve],tt?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,we,Ye,He):i.texImage2D(a.TEXTURE_2D,ve,Ge,we,Ye,He);E.generateMipmaps=!1}else if(tt){if(Ke){const ve=Et(_e);i.texStorage2D(a.TEXTURE_2D,De,Ge,ve.width,ve.height)}X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ye,_e)}else i.texImage2D(a.TEXTURE_2D,0,Ge,we,Ye,_e);S(E)&&O(oe),Fe.__version=Pe.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function it(B,E,J){if(E.image.length!==6)return;const oe=ne(B,E),ge=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+J);const Pe=r.get(ge);if(ge.version!==Pe.__version||oe===!0){i.activeTexture(a.TEXTURE0+J);const Fe=Ot.getPrimaries(Ot.workingColorSpace),he=E.colorSpace===Ws?null:Ot.getPrimaries(E.colorSpace),_e=E.colorSpace===Ws||Fe===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,Ge=[];for(let Te=0;Te<6;Te++)!we&&!Ye?Ge[Te]=y(E.image[Te],!0,o.maxCubemapSize):Ge[Te]=Ye?E.image[Te].image:E.image[Te],Ge[Te]=ct(E,Ge[Te]);const He=Ge[0],et=c.convert(E.format,E.colorSpace),tt=c.convert(E.type),Ke=A(E.internalFormat,et,tt,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,De=Pe.__version===void 0||oe===!0,ve=ge.dataReady;let Le=N(E,He);Ue(a.TEXTURE_CUBE_MAP,E);let ze;if(we){X&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,Ke,He.width,He.height);for(let Te=0;Te<6;Te++){ze=Ge[Te].mipmaps;for(let Qe=0;Qe<ze.length;Qe++){const qe=ze[Qe];E.format!==da?et!==null?X?ve&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,qe.width,qe.height,et,qe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,Ke,qe.width,qe.height,0,qe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,qe.width,qe.height,et,tt,qe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,Ke,qe.width,qe.height,0,et,tt,qe.data)}}}else{if(ze=E.mipmaps,X&&De){ze.length>0&&Le++;const Te=Et(Ge[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,Ke,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ye){X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ge[Te].width,Ge[Te].height,et,tt,Ge[Te].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ke,Ge[Te].width,Ge[Te].height,0,et,tt,Ge[Te].data);for(let Qe=0;Qe<ze.length;Qe++){const Bt=ze[Qe].image[Te].image;X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,Bt.width,Bt.height,et,tt,Bt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,Ke,Bt.width,Bt.height,0,et,tt,Bt.data)}}else{X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,et,tt,Ge[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ke,et,tt,Ge[Te]);for(let Qe=0;Qe<ze.length;Qe++){const qe=ze[Qe];X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,et,tt,qe.image[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,Ke,et,tt,qe.image[Te])}}}S(E)&&O(a.TEXTURE_CUBE_MAP),Pe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function Xe(B,E,J,oe,ge,Pe){const Fe=c.convert(J.format,J.colorSpace),he=c.convert(J.type),_e=A(J.internalFormat,Fe,he,J.normalized,J.colorSpace),we=r.get(E),Ye=r.get(J);if(Ye.__renderTarget=E,!we.__hasExternalTextures){const Ge=Math.max(1,E.width>>Pe),He=Math.max(1,E.height>>Pe);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?i.texImage3D(ge,Pe,_e,Ge,He,E.depth,0,Fe,he,null):i.texImage2D(ge,Pe,_e,Ge,He,0,Fe,he,null)}i.bindFramebuffer(a.FRAMEBUFFER,B),dn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,ge,Ye.__webglTexture,0,Yt(E)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,ge,Ye.__webglTexture,Pe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Mt(B,E,J){if(a.bindRenderbuffer(a.RENDERBUFFER,B),E.depthBuffer){const oe=E.depthTexture,ge=oe&&oe.isDepthTexture?oe.type:null,Pe=L(E.stencilBuffer,ge),Fe=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;dn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Yt(E),Pe,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt(E),Pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Pe,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Fe,a.RENDERBUFFER,B)}else{const oe=E.textures;for(let ge=0;ge<oe.length;ge++){const Pe=oe[ge],Fe=c.convert(Pe.format,Pe.colorSpace),he=c.convert(Pe.type),_e=A(Pe.internalFormat,Fe,he,Pe.normalized,Pe.colorSpace);dn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Yt(E),_e,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt(E),_e,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,_e,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(B,E,J){const oe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),oe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Ye=c.convert(E.depthTexture.type);let Ge;E.depthTexture.format===cs?Ge=a.DEPTH_COMPONENT24:E.depthTexture.format===Ar&&(Ge=a.DEPTH24_STENCIL8);for(let He=0;He<6;He++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ge,E.width,E.height,0,we,Ye,null)}}else ee(E.depthTexture,0);const Pe=ge.__webglTexture,Fe=Yt(E),he=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,_e=E.depthTexture.format===Ar?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===cs)dn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,he,Pe,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,he,Pe,0);else if(E.depthTexture.format===Ar)dn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,he,Pe,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,he,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(B){const E=r.get(B),J=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){const oe=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",ge)};oe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=oe}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let oe=0;oe<6;oe++)ut(E.__webglFramebuffer[oe],B,oe);else{const oe=B.texture.mipmaps;oe&&oe.length>0?ut(E.__webglFramebuffer[0],B,0):ut(E.__webglFramebuffer,B,0)}else if(J){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=a.createRenderbuffer(),Mt(E.__webglDepthbuffer[oe],B,!1);else{const ge=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=E.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,Pe)}}else{const oe=B.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Mt(E.__webglDepthbuffer,B,!1);else{const ge=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,Pe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(B,E,J){const oe=r.get(B);E!==void 0&&Xe(oe.__webglFramebuffer,B,B.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&ht(B)}function yt(B){const E=B.texture,J=r.get(B),oe=r.get(E);B.addEventListener("dispose",T);const ge=B.textures,Pe=B.isWebGLCubeRenderTarget===!0,Fe=ge.length>1;if(Fe||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=E.version,u.memory.textures++),Pe){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let _e=0;_e<E.mipmaps.length;_e++)J.__webglFramebuffer[he][_e]=a.createFramebuffer()}else J.__webglFramebuffer[he]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[he]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Fe)for(let he=0,_e=ge.length;he<_e;he++){const we=r.get(ge[he]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(B.samples>0&&dn(B)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<ge.length;he++){const _e=ge[he];J.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const we=c.convert(_e.format,_e.colorSpace),Ye=c.convert(_e.type),Ge=A(_e.internalFormat,we,Ye,_e.normalized,_e.colorSpace,B.isXRRenderTarget===!0),He=Yt(B);a.renderbufferStorageMultisample(a.RENDERBUFFER,He,Ge,B.width,B.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,J.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),Mt(J.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Pe){i.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Xe(J.__webglFramebuffer[he][_e],B,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else Xe(J.__webglFramebuffer[he],B,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(E)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let he=0,_e=ge.length;he<_e;he++){const we=ge[he],Ye=r.get(we);let Ge=a.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ge=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ge,Ye.__webglTexture),Ue(Ge,we),Xe(J.__webglFramebuffer,B,we,a.COLOR_ATTACHMENT0+he,Ge,0),S(we)&&O(Ge)}i.unbindTexture()}else{let he=a.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(he=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(he,oe.__webglTexture),Ue(he,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Xe(J.__webglFramebuffer[_e],B,E,a.COLOR_ATTACHMENT0,he,_e);else Xe(J.__webglFramebuffer,B,E,a.COLOR_ATTACHMENT0,he,0);S(E)&&O(he),i.unbindTexture()}B.depthBuffer&&ht(B)}function tn(B){const E=B.textures;for(let J=0,oe=E.length;J<oe;J++){const ge=E[J];if(S(ge)){const Pe=P(B),Fe=r.get(ge).__webglTexture;i.bindTexture(Pe,Fe),O(Pe),i.unbindTexture()}}}const nn=[],un=[];function fn(B){if(B.samples>0){if(dn(B)===!1){const E=B.textures,J=B.width,oe=B.height;let ge=a.COLOR_BUFFER_BIT;const Pe=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Fe=r.get(B),he=E.length>1;if(he)for(let we=0;we<E.length;we++)i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const _e=B.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let we=0;we<E.length;we++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);const Ye=r.get(E[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ye,0)}a.blitFramebuffer(0,0,J,oe,0,0,J,oe,ge,a.NEAREST),m===!0&&(nn.length=0,un.length=0,nn.push(a.COLOR_ATTACHMENT0+we),B.depthBuffer&&B.resolveDepthBuffer===!1&&(nn.push(Pe),un.push(Pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,un)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<E.length;we++){i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);const Ye=r.get(E[we]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,Ye,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const E=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Yt(B){return Math.min(o.maxSamples,B.samples)}function dn(B){const E=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(B){const E=u.render.frame;g.get(B)!==E&&(g.set(B,E),B.update())}function ct(B,E){const J=B.colorSpace,oe=B.format,ge=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==Yu&&J!==Ws&&(Ot.getTransfer(J)===Zt?(oe!==da||ge!==Zi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",J)),E}function Et(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=de,this.getTextureUnits=ue,this.setTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=me,this.setTexture3D=ye,this.setTextureCube=I,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=dn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fR(a,e){function i(r,o=Ws){let c;const u=Ot.getTransfer(o);if(r===Zi)return a.UNSIGNED_BYTE;if(r===$p)return a.UNSIGNED_SHORT_4_4_4_4;if(r===em)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Kx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Qx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===jx)return a.BYTE;if(r===Zx)return a.SHORT;if(r===ec)return a.UNSIGNED_SHORT;if(r===Jp)return a.INT;if(r===Ca)return a.UNSIGNED_INT;if(r===Ea)return a.FLOAT;if(r===ls)return a.HALF_FLOAT;if(r===Jx)return a.ALPHA;if(r===$x)return a.RGB;if(r===da)return a.RGBA;if(r===cs)return a.DEPTH_COMPONENT;if(r===Ar)return a.DEPTH_STENCIL;if(r===eS)return a.RED;if(r===tm)return a.RED_INTEGER;if(r===Cr)return a.RG;if(r===nm)return a.RG_INTEGER;if(r===im)return a.RGBA_INTEGER;if(r===zu||r===Hu||r===Gu||r===Vu)if(u===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gp||r===_p||r===vp||r===xp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_p)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sp||r===Mp||r===yp||r===Ep||r===bp||r===Xu||r===Tp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Sp||r===Mp)return u===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===yp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ep)return c.COMPRESSED_R11_EAC;if(r===bp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Xu)return c.COMPRESSED_RG11_EAC;if(r===Tp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Lp||r===Np||r===Up||r===Op||r===Pp||r===Ip||r===Bp||r===Fp||r===zp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ap)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Np)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Up)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Op)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ip)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hp||r===Gp||r===Vp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Hp)return u===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kp||r===Xp||r===Wu||r===Wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===kp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Xp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tc?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const dR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new cS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ji({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new qs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Dr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,_=null,v=null,x=null,b=null;const C=typeof XRWebGLBinding<"u",y=new pR,S={},O=i.getContextAttributes();let P=null,A=null;const L=[],N=[],F=new Vt;let T=null;const U=new ji;U.viewport=new vn;const k=new ji;k.viewport=new vn;const G=[U,k],q=new Tb;let de=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let be=L[ne];return be===void 0&&(be=new Eh,L[ne]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ne){let be=L[ne];return be===void 0&&(be=new Eh,L[ne]=be),be.getGripSpace()},this.getHand=function(ne){let be=L[ne];return be===void 0&&(be=new Eh,L[ne]=be),be.getHandSpace()};function W(ne){const be=N.indexOf(ne.inputSource);if(be===-1)return;const xe=L[be];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,h||u),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let ne=0;ne<L.length;ne++){const be=N[ne];be!==null&&(N[ne]=null,L[ne].disconnect(be))}de=null,ue=null,y.reset();for(const ne in S)delete S[ne];e.setRenderTarget(P),x=null,v=null,_=null,o=null,A=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ie=null,it=null;O.depth&&(it=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xe=O.stencil?Ar:cs,Ie=O.stencil?tc:Ca);const Xe={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Xe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Aa(v.textureWidth,v.textureHeight,{format:da,type:Zi,depthTexture:new Io(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const xe={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,xe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Aa(x.framebufferWidth,x.framebufferHeight,{format:da,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ne){for(let be=0;be<ne.removed.length;be++){const xe=ne.removed[be],Ie=N.indexOf(xe);Ie>=0&&(N[Ie]=null,L[Ie].disconnect(xe))}for(let be=0;be<ne.added.length;be++){const xe=ne.added[be];let Ie=N.indexOf(xe);if(Ie===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=N.length){N.push(xe),Ie=Xe;break}else if(N[Xe]===null){N[Xe]=xe,Ie=Xe;break}if(Ie===-1)break}const it=L[Ie];it&&it.connect(xe)}}const ee=new te,me=new te;function ye(ne,be,xe){ee.setFromMatrixPosition(be.matrixWorld),me.setFromMatrixPosition(xe.matrixWorld);const Ie=ee.distanceTo(me),it=be.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,Mt=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),ht=(it[9]+1)/it[5],xt=(it[9]-1)/it[5],yt=(it[8]-1)/it[0],tn=(Xe[8]+1)/Xe[0],nn=Mt*yt,un=Mt*tn,fn=Ie/(-yt+tn),Yt=fn*-yt;if(be.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Yt),ne.translateZ(fn),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),it[10]===-1)ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const dn=Mt+fn,K=ut+fn,ct=nn-Yt,Et=un+(Ie-Yt),B=ht*ut/K*dn,E=xt*ut/K*dn;ne.projectionMatrix.makePerspective(ct,Et,B,E,dn,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function I(ne,be){be===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(be.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let be=ne.near,xe=ne.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),q.near=k.near=U.near=be,q.far=k.far=U.far=xe,(de!==q.near||ue!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),de=q.near,ue=q.far),q.layers.mask=ne.layers.mask|6,U.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const Ie=ne.parent,it=q.cameras;I(q,Ie);for(let Xe=0;Xe<it.length;Xe++)I(it[Xe],Ie);it.length===2?ye(q,U,k):q.projectionMatrix.copy(U.projectionMatrix),Q(ne,q,Ie)};function Q(ne,be,xe){xe===null?ne.matrix.copy(be.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(be.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=nc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ne){m=ne,v!==null&&(v.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ne){return S[ne]};let Me=null;function Oe(ne,be){if(g=be.getViewerPose(h||u),b=be,g!==null){const xe=g.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ie=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Ie=!0);for(let ut=0;ut<xe.length;ut++){const ht=xe[ut];let xt=null;if(x!==null)xt=x.getViewport(ht);else{const tn=_.getViewSubImage(v,ht);xt=tn.viewport,ut===0&&(e.setRenderTargetTextures(A,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(A))}let yt=G[ut];yt===void 0&&(yt=new ji,yt.layers.enable(ut),yt.viewport=new vn,G[ut]=yt),yt.matrix.fromArray(ht.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ht.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(xt.x,xt.y,xt.width,xt.height),ut===0&&(q.matrix.copy(yt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ie===!0&&q.cameras.push(yt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ut=_.getDepthInformation(xe[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,o.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<xe.length;ut++){const ht=xe[ut].camera;if(ht){let xt=S[ht];xt||(xt=new cS,S[ht]=xt);const yt=_.getCameraImage(ht);xt.sourceTexture=yt}}}}for(let xe=0;xe<L.length;xe++){const Ie=N[xe],it=L[xe];Ie!==null&&it!==void 0&&it.update(Ie,be,h||u)}Me&&Me(ne,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),b=null}const Ue=new hS;Ue.setAnimationLoop(Oe),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const gR=new bn,SS=new dt;SS.set(-1,0,0,0,1,0,0,0,1);function _R(a,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,uS(a)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,O,P,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,A)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,O,P):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===gi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===gi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const O=e.get(S),P=O.envMap,A=O.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(A)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(SS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,O,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*O,y.scale.value=P*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,O){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===gi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const O=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function vR(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,L){const N=L.program;r.uniformBlockBinding(A,N)}function h(A,L){let N=o[A.id];N===void 0&&(y(A),N=g(A),o[A.id]=N,A.addEventListener("dispose",O));const F=L.program;r.updateUBOMapping(A,F);const T=e.render.frame;c[A.id]!==T&&(v(A),c[A.id]=T)}function g(A){const L=_();A.__bindingPointIndex=L;const N=a.createBuffer(),F=A.__size,T=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,N),N}function _(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const L=o[A.id],N=A.uniforms,F=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let T=0,U=N.length;T<U;T++){const k=N[T];if(Array.isArray(k))for(let G=0,q=k.length;G<q;G++)x(k[G],T,G,F);else x(k,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(A,L,N,F){if(C(A,L,N,F)===!0){const T=A.__offset,U=A.value;if(Array.isArray(U)){let k=0;for(let G=0;G<U.length;G++){const q=U[G],de=S(q);b(q,A.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,A.__data)}}function b(A,L,N){typeof A=="number"||typeof A=="boolean"?L[0]=A:A.isMatrix3?(L[0]=A.elements[0],L[1]=A.elements[1],L[2]=A.elements[2],L[3]=0,L[4]=A.elements[3],L[5]=A.elements[4],L[6]=A.elements[5],L[7]=0,L[8]=A.elements[6],L[9]=A.elements[7],L[10]=A.elements[8],L[11]=0):ArrayBuffer.isView(A)?L.set(new A.constructor(A.buffer,A.byteOffset,L.length)):A.toArray(L,N)}function C(A,L,N,F){const T=A.value,U=L+"_"+N;if(F[U]===void 0)return typeof T=="number"||typeof T=="boolean"?F[U]=T:ArrayBuffer.isView(T)?F[U]=T.slice():F[U]=T.clone(),!0;{const k=F[U];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return F[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(A){const L=A.uniforms;let N=0;const F=16;for(let U=0,k=L.length;U<k;U++){const G=Array.isArray(L[U])?L[U]:[L[U]];for(let q=0,de=G.length;q<de;q++){const ue=G[q],W=Array.isArray(ue.value)?ue.value:[ue.value];for(let z=0,H=W.length;z<H;z++){const ee=W[z],me=S(ee),ye=N%F,I=ye%me.boundary,Q=ye+I;N+=I,Q!==0&&F-Q<me.storage&&(N+=F-Q),ue.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=N,N+=me.storage}}}const T=N%F;return T>0&&(N+=F-T),A.__size=N,A.__cache={},this}function S(A){const L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(L.boundary=16,L.storage=A.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",A),L}function O(A){const L=A.target;L.removeEventListener("dispose",O);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function P(){for(const A in o)a.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:h,dispose:P}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function SR(){return Sa===null&&(Sa=new ub(xR,16,16,Cr,ls),Sa.name="DFG_LUT",Sa.minFilter=xn,Sa.magFilter=xn,Sa.wrapS=fa,Sa.wrapT=fa,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class MR{constructor(e={}){const{canvas:i=TE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Zi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const C=x,y=new Set([im,nm,tm]),S=new Set([Zi,Ca,ec,tc,$p,em]),O=new Uint32Array(4),P=new Int32Array(4),A=new te;let L=null,N=null;const F=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,q=null,de=null,ue=null,W=null;this._outputColorSpace=ti;let z=0,H=0,ee=null,me=-1,ye=null;const I=new vn,Q=new vn;let Me=null;const Oe=new Wt(0);let Ue=0,ne=i.width,be=i.height,xe=1,Ie=null,it=null;const Xe=new vn(0,0,ne,be),Mt=new vn(0,0,ne,be);let ut=!1;const ht=new oS;let xt=!1,yt=!1;const tn=new bn,nn=new te,un=new vn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function dn(){return ee===null?xe:1}let K=r;function ct(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qp}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",jn,!1),K===null){const j="webgl2";if(K=ct(j,R),K===null)throw ct(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw It("WebGLRenderer: "+R.message),R}let Et,B,E,J,oe,ge,Pe,Fe,he,_e,we,Ye,Ge,He,et,tt,Ke,X,De,ve,Le,ze,Te;function Qe(){Et=new SA(K),Et.init(),Le=new fR(K,Et),B=new dA(K,Et,e,Le),E=new cR(K,Et),B.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),de=K.createFramebuffer(),ue=K.createFramebuffer(),W=K.createFramebuffer(),J=new EA(K),oe=new Z2,ge=new uR(K,Et,E,oe,B,Le,J),Pe=new xA(k),Fe=new Rb(K),ze=new uA(K,Fe),he=new MA(K,Fe,J,ze),_e=new TA(K,he,Fe,ze,J),X=new bA(K,B,ge),et=new hA(oe),we=new j2(k,Pe,Et,B,ze,et),Ye=new _R(k,oe),Ge=new Q2,He=new iR(Et),Ke=new cA(k,Pe,E,_e,b,m),tt=new lR(k,_e,B),Te=new vR(K,J,B,E),De=new fA(K,Et,J),ve=new yA(K,Et,J),J.programs=we.programs,k.capabilities=B,k.extensions=Et,k.properties=oe,k.renderLists=Ge,k.shadowMap=tt,k.state=E,k.info=J}Qe(),C!==Zi&&(U=new RA(C,i.width,i.height,d,o,c));const qe=new mR(k,K);this.xr=qe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(ne,be,!1))},this.getSize=function(R){return R.set(ne,be)},this.setSize=function(R,j,le=!0){if(qe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,be=j,i.width=Math.floor(R*xe),i.height=Math.floor(j*xe),le===!0&&(i.style.width=R+"px",i.style.height=j+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ne*xe,be*xe).floor()},this.setDrawingBufferSize=function(R,j,le){ne=R,be=j,xe=le,i.width=Math.floor(R*le),i.height=Math.floor(j*le),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(C===Zi){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Xe)},this.setViewport=function(R,j,le,ie){R.isVector4?Xe.set(R.x,R.y,R.z,R.w):Xe.set(R,j,le,ie),E.viewport(I.copy(Xe).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,j,le,ie){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,j,le,ie),E.scissor(Q.copy(Mt).multiplyScalar(xe).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){E.setScissorTest(ut=R)},this.setOpaqueSort=function(R){Ie=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,le=!0){let ie=0;if(R){let ae=!1;if(ee!==null){const Ve=ee.texture.format;ae=y.has(Ve)}if(ae){const Ve=ee.texture.type,je=S.has(Ve),Be=Ke.getClearColor(),Ze=Ke.getClearAlpha(),Z=Be.r,fe=Be.g,Ce=Be.b;je?(O[0]=Z,O[1]=fe,O[2]=Ce,O[3]=Ze,K.clearBufferuiv(K.COLOR,0,O)):(P[0]=Z,P[1]=fe,P[2]=Ce,P[3]=Ze,K.clearBufferiv(K.COLOR,0,P))}else ie|=K.COLOR_BUFFER_BIT}j&&(ie|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&K.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),Ke.dispose(),Ge.dispose(),He.dispose(),oe.dispose(),Pe.dispose(),_e.dispose(),ze.dispose(),Te.dispose(),we.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Lt),qe.removeEventListener("sessionend",Un),Zn.stop()};function Bt(R){R.preventDefault(),gv("WebGLRenderer: Context Lost."),G=!0}function Ft(){gv("WebGLRenderer: Context Restored."),G=!1;const R=J.autoReset,j=tt.enabled,le=tt.autoUpdate,ie=tt.needsUpdate,ae=tt.type;Qe(),J.autoReset=R,tt.enabled=j,tt.autoUpdate=le,tt.needsUpdate=ie,tt.type=ae}function jn(R){It("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bn(R){const j=R.target;j.removeEventListener("dispose",Bn),Js(j)}function Js(R){us(R),oe.remove(R)}function us(R){const j=oe.get(R).programs;j!==void 0&&(j.forEach(function(le){we.releaseProgram(le)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,le,ie,ae,Ve){j===null&&(j=fn);const je=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Be=_i(R,j,le,ie,ae);E.setMaterial(ie,je);let Ze=le.index,Z=1;if(ie.wireframe===!0){if(Ze=he.getWireframeAttribute(le),Ze===void 0)return;Z=2}const fe=le.drawRange,Ce=le.attributes.position;let Re=fe.start*Z,Je=(fe.start+fe.count)*Z;Ve!==null&&(Re=Math.max(Re,Ve.start*Z),Je=Math.min(Je,(Ve.start+Ve.count)*Z)),Ze!==null?(Re=Math.max(Re,0),Je=Math.min(Je,Ze.count)):Ce!=null&&(Re=Math.max(Re,0),Je=Math.min(Je,Ce.count));const st=Je-Re;if(st<0||st===1/0)return;ze.setup(ae,ie,Be,le,Ze);let _t,pt=De;if(Ze!==null&&(_t=Fe.get(Ze),pt=ve,pt.setIndex(_t)),ae.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*dn()),pt.setMode(K.LINES)):pt.setMode(K.TRIANGLES);else if(ae.isLine){let mt=ie.linewidth;mt===void 0&&(mt=1),E.setLineWidth(mt*dn()),ae.isLineSegments?pt.setMode(K.LINES):ae.isLineLoop?pt.setMode(K.LINE_LOOP):pt.setMode(K.LINE_STRIP)}else ae.isPoints?pt.setMode(K.POINTS):ae.isSprite&&pt.setMode(K.TRIANGLES);if(ae.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))pt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const mt=ae._multiDrawStarts,Ne=ae._multiDrawCounts,Xt=ae._multiDrawCount,rt=Ze?Fe.get(Ze).bytesPerElement:1,Ct=oe.get(ie).currentProgram.getUniforms();for(let an=0;an<Xt;an++)Ct.setValue(K,"_gl_DrawID",an),pt.render(mt[an]/rt,Ne[an])}else if(ae.isInstancedMesh)pt.renderInstances(Re,st,ae.count);else if(le.isInstancedBufferGeometry){const mt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ne=Math.min(le.instanceCount,mt);pt.renderInstances(Re,st,Ne)}else pt.render(Re,st)};function wa(R,j,le){R.transparent===!0&&R.side===ya&&R.forceSinglePass===!1?(R.side=gi,R.needsUpdate=!0,ea(R,j,le),R.side=os,R.needsUpdate=!0,ea(R,j,le),R.side=ya):ea(R,j,le)}this.compile=function(R,j,le=null){le===null&&(le=R),N=He.get(le),N.init(j),T.push(N),le.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),R!==le&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),N.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ve=ae.material;if(Ve)if(Array.isArray(Ve))for(let je=0;je<Ve.length;je++){const Be=Ve[je];wa(Be,le,ae),ie.add(Be)}else wa(Ve,le,ae),ie.add(Ve)}),N=T.pop(),ie},this.compileAsync=function(R,j,le=null){const ie=this.compile(R,j,le);return new Promise(ae=>{function Ve(){if(ie.forEach(function(je){oe.get(je).currentProgram.isReady()&&ie.delete(je)}),ie.size===0){ae(R);return}setTimeout(Ve,10)}Et.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Nn=null;function Tn(R){Nn&&Nn(R)}function Lt(){Zn.stop()}function Un(){Zn.start()}const Zn=new hS;Zn.setAnimationLoop(Tn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(R){Nn=R,qe.setAnimationLoop(R),R===null?Zn.stop():Zn.start()},qe.addEventListener("sessionstart",Lt),qe.addEventListener("sessionend",Un),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(R,j);const le=qe.enabled===!0&&qe.isPresenting===!0,ie=U!==null&&(ee===null||le)&&U.begin(k,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(j),j=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,j,ee),N=He.get(R,T.length),N.init(j),N.state.textureUnits=ge.getTextureUnits(),T.push(N),tn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ht.setFromProjectionMatrix(tn,ba,j.reversedDepth),yt=this.localClippingEnabled,xt=et.init(this.clippingPlanes,yt),L=Ge.get(R,F.length),L.init(),F.push(L),qe.enabled===!0&&qe.isPresenting===!0){const je=k.xr.getDepthSensingMesh();je!==null&&$i(je,j,-1/0,k.sortObjects)}$i(R,j,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(Ie,it,j.reversedDepth),Yt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Yt&&Ke.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&et.beginShadows();const ae=N.state.shadowsArray;if(tt.render(ae,R,j),xt===!0&&et.endShadows(),(ie&&U.hasRenderPass())===!1){const je=L.opaque,Be=L.transmissive;if(N.setupLights(),j.isArrayCamera){const Ze=j.cameras;if(Be.length>0)for(let Z=0,fe=Ze.length;Z<fe;Z++){const Ce=Ze[Z];Da(je,Be,R,Ce)}Yt&&Ke.render(R);for(let Z=0,fe=Ze.length;Z<fe;Z++){const Ce=Ze[Z];Lr(L,R,Ce,Ce.viewport)}}else Be.length>0&&Da(je,Be,R,j),Yt&&Ke.render(R),Lr(L,R,j)}ee!==null&&H===0&&(ge.updateMultisampleRenderTarget(ee),ge.updateRenderTargetMipmap(ee)),ie&&U.end(k),R.isScene===!0&&R.onAfterRender(k,R,j),ze.resetDefaultState(),me=-1,ye=null,T.pop(),T.length>0?(N=T[T.length-1],ge.setTextureUnits(N.state.textureUnits),xt===!0&&et.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,q!==null&&q.renderEnd()};function $i(R,j,le,ie){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){ie&&un.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tn);const je=_e.update(R),Be=R.material;Be.visible&&L.push(R,je,Be,le,un.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const je=_e.update(R),Be=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),un.copy(R.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),un.copy(je.boundingSphere.center)),un.applyMatrix4(R.matrixWorld).applyMatrix4(tn)),Array.isArray(Be)){const Ze=je.groups;for(let Z=0,fe=Ze.length;Z<fe;Z++){const Ce=Ze[Z],Re=Be[Ce.materialIndex];Re&&Re.visible&&L.push(R,je,Re,le,un.z,Ce)}}else Be.visible&&L.push(R,je,Be,le,un.z,null)}}const Ve=R.children;for(let je=0,Be=Ve.length;je<Be;je++)$i(Ve[je],j,le,ie)}function Lr(R,j,le,ie){const{opaque:ae,transmissive:Ve,transparent:je}=R;N.setupLightsView(le),xt===!0&&et.setGlobalState(k.clippingPlanes,le),ie&&E.viewport(I.copy(ie)),ae.length>0&&Di(ae,j,le),Ve.length>0&&Di(Ve,j,le),je.length>0&&Di(je,j,le),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Da(R,j,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const Re=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new Aa(1,1,{generateMipmaps:!0,type:Re?ls:Zi,minFilter:Ys,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Ve=N.state.transmissionRenderTarget[ie.id],je=ie.viewport||I;Ve.setSize(je.z*k.transmissionResolutionScale,je.w*k.transmissionResolutionScale);const Be=k.getRenderTarget(),Ze=k.getActiveCubeFace(),Z=k.getActiveMipmapLevel();k.setRenderTarget(Ve),k.getClearColor(Oe),Ue=k.getClearAlpha(),Ue<1&&k.setClearColor(16777215,.5),k.clear(),Yt&&Ke.render(le);const fe=k.toneMapping;k.toneMapping=Ta;const Ce=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),xt===!0&&et.setGlobalState(k.clippingPlanes,ie),Di(R,le,ie),ge.updateMultisampleRenderTarget(Ve),ge.updateRenderTargetMipmap(Ve),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Je=0,st=j.length;Je<st;Je++){const _t=j[Je],{object:pt,geometry:mt,material:Ne,group:Xt}=_t;if(Ne.side===ya&&pt.layers.test(ie.layers)){const rt=Ne.side;Ne.side=gi,Ne.needsUpdate=!0,Li(pt,le,ie,mt,Ne,Xt),Ne.side=rt,Ne.needsUpdate=!0,Re=!0}}Re===!0&&(ge.updateMultisampleRenderTarget(Ve),ge.updateRenderTargetMipmap(Ve))}k.setRenderTarget(Be,Ze,Z),k.setClearColor(Oe,Ue),Ce!==void 0&&(ie.viewport=Ce),k.toneMapping=fe}function Di(R,j,le){const ie=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Ve=R.length;ae<Ve;ae++){const je=R[ae],{object:Be,geometry:Ze,group:Z}=je;let fe=je.material;fe.allowOverride===!0&&ie!==null&&(fe=ie),Be.layers.test(le.layers)&&Li(Be,j,le,Ze,fe,Z)}}function Li(R,j,le,ie,ae,Ve){R.onBeforeRender(k,j,le,ie,ae,Ve),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(k,j,le,ie,R,Ve),ae.transparent===!0&&ae.side===ya&&ae.forceSinglePass===!1?(ae.side=gi,ae.needsUpdate=!0,k.renderBufferDirect(le,j,ie,ae,R,Ve),ae.side=os,ae.needsUpdate=!0,k.renderBufferDirect(le,j,ie,ae,R,Ve),ae.side=ya):k.renderBufferDirect(le,j,ie,ae,R,Ve),R.onAfterRender(k,j,le,ie,ae,Ve)}function ea(R,j,le){j.isScene!==!0&&(j=fn);const ie=oe.get(R),ae=N.state.lights,Ve=N.state.shadowsArray,je=ae.state.version,Be=we.getParameters(R,ae.state,Ve,j,le,N.state.lightProbeGridArray),Ze=we.getProgramCacheKey(Be);let Z=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,ie.fog=j.fog;const fe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Pe.get(R.envMap||ie.environment,fe),ie.envMapRotation=ie.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Z===void 0&&(R.addEventListener("dispose",Bn),Z=new Map,ie.programs=Z);let Ce=Z.get(Ze);if(Ce!==void 0){if(ie.currentProgram===Ce&&ie.lightsStateVersion===je)return Ui(R,Be),Ce}else Be.uniforms=we.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,le,Be),R.onBeforeCompile(Be,k),Ce=we.acquireProgram(Be,Ze),Z.set(Ze,Ce),ie.uniforms=Be.uniforms;const Re=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=et.uniform),Ui(R,Be),ie.needsLights=$s(R),ie.lightsStateVersion=je,ie.needsLights&&(Re.ambientLightColor.value=ae.state.ambient,Re.lightProbe.value=ae.state.probe,Re.directionalLights.value=ae.state.directional,Re.directionalLightShadows.value=ae.state.directionalShadow,Re.spotLights.value=ae.state.spot,Re.spotLightShadows.value=ae.state.spotShadow,Re.rectAreaLights.value=ae.state.rectArea,Re.ltc_1.value=ae.state.rectAreaLTC1,Re.ltc_2.value=ae.state.rectAreaLTC2,Re.pointLights.value=ae.state.point,Re.pointLightShadows.value=ae.state.pointShadow,Re.hemisphereLights.value=ae.state.hemi,Re.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Re.spotLightMatrix.value=ae.state.spotLightMatrix,Re.spotLightMap.value=ae.state.spotLightMap,Re.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=Ce,ie.uniformsList=null,Ce}function Ni(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ku.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ui(R,j){const le=oe.get(R);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function ha(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(j.matrixWorld);for(let le=0,ie=R.length;le<ie;le++){const ae=R[le];if(ae.texture!==null&&ae.boundingBox.containsPoint(A))return ae}return null}function _i(R,j,le,ie,ae){j.isScene!==!0&&(j=fn),ge.resetTextureUnits();const Ve=j.fog,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?j.environment:null,Be=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ot.workingColorSpace,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Z=Pe.get(ie.envMap||je,Ze),fe=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ce=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Re=!!le.morphAttributes.position,Je=!!le.morphAttributes.normal,st=!!le.morphAttributes.color;let _t=Ta;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(_t=k.toneMapping);const pt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,mt=pt!==void 0?pt.length:0,Ne=oe.get(ie),Xt=N.state.lights;if(xt===!0&&(yt===!0||R!==ye)){const Nt=R===ye&&ie.id===me;et.setState(ie,R,Nt)}let rt=!1;ie.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Xt.state.version||Ne.outputColorSpace!==Be||ae.isBatchedMesh&&Ne.batching===!1||!ae.isBatchedMesh&&Ne.batching===!0||ae.isBatchedMesh&&Ne.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ne.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ne.instancing===!1||!ae.isInstancedMesh&&Ne.instancing===!0||ae.isSkinnedMesh&&Ne.skinning===!1||!ae.isSkinnedMesh&&Ne.skinning===!0||ae.isInstancedMesh&&Ne.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ne.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ne.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ne.instancingMorph===!1&&ae.morphTexture!==null||Ne.envMap!==Z||ie.fog===!0&&Ne.fog!==Ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==et.numPlanes||Ne.numIntersection!==et.numIntersection)||Ne.vertexAlphas!==fe||Ne.vertexTangents!==Ce||Ne.morphTargets!==Re||Ne.morphNormals!==Je||Ne.morphColors!==st||Ne.toneMapping!==_t||Ne.morphTargetsCount!==mt||!!Ne.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ne.__version=ie.version);let Ct=Ne.currentProgram;rt===!0&&(Ct=ea(ie,j,ae),q&&ie.isNodeMaterial&&q.onUpdateProgram(ie,Ct,Ne));let an=!1,Sn=!1,Gn=!1;const zt=Ct.getUniforms(),Kt=Ne.uniforms;if(E.useProgram(Ct.program)&&(an=!0,Sn=!0,Gn=!0),ie.id!==me&&(me=ie.id,Sn=!0),Ne.needsLights){const Nt=ha(N.state.lightProbeGridArray,ae);Ne.lightProbeGrid!==Nt&&(Ne.lightProbeGrid=Nt,Sn=!0)}if(an||ye!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(K,"projectionMatrix",R.projectionMatrix),zt.setValue(K,"viewMatrix",R.matrixWorldInverse);const ci=zt.map.cameraPosition;ci!==void 0&&ci.setValue(K,nn.setFromMatrixPosition(R.matrixWorld)),B.logarithmicDepthBuffer&&zt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),ye!==R&&(ye=R,Sn=!0,Gn=!0)}if(Ne.needsLights&&(Xt.state.directionalShadowMap.length>0&&zt.setValue(K,"directionalShadowMap",Xt.state.directionalShadowMap,ge),Xt.state.spotShadowMap.length>0&&zt.setValue(K,"spotShadowMap",Xt.state.spotShadowMap,ge),Xt.state.pointShadowMap.length>0&&zt.setValue(K,"pointShadowMap",Xt.state.pointShadowMap,ge)),ae.isSkinnedMesh){zt.setOptional(K,ae,"bindMatrix"),zt.setOptional(K,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),zt.setValue(K,"boneTexture",Nt.boneTexture,ge))}ae.isBatchedMesh&&(zt.setOptional(K,ae,"batchingTexture"),zt.setValue(K,"batchingTexture",ae._matricesTexture,ge),zt.setOptional(K,ae,"batchingIdTexture"),zt.setValue(K,"batchingIdTexture",ae._indirectTexture,ge),zt.setOptional(K,ae,"batchingColorTexture"),ae._colorsTexture!==null&&zt.setValue(K,"batchingColorTexture",ae._colorsTexture,ge));const li=le.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&X.update(ae,le,Ct),(Sn||Ne.receiveShadow!==ae.receiveShadow)&&(Ne.receiveShadow=ae.receiveShadow,zt.setValue(K,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&j.environment!==null&&(Kt.envMapIntensity.value=j.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=SR()),Sn){if(zt.setValue(K,"toneMappingExposure",k.toneMappingExposure),Ne.needsLights&&mn(Kt,Gn),Ve&&ie.fog===!0&&Ye.refreshFogUniforms(Kt,Ve),Ye.refreshMaterialUniforms(Kt,ie,xe,be,N.state.transmissionRenderTarget[R.id]),Ne.needsLights&&Ne.lightProbeGrid){const Nt=Ne.lightProbeGrid;Kt.probesSH.value=Nt.texture,Kt.probesMin.value.copy(Nt.boundingBox.min),Kt.probesMax.value.copy(Nt.boundingBox.max),Kt.probesResolution.value.copy(Nt.resolution)}ku.upload(K,Ni(Ne),Kt,ge)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ku.upload(K,Ni(Ne),Kt,ge),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(K,"center",ae.center),zt.setValue(K,"modelViewMatrix",ae.modelViewMatrix),zt.setValue(K,"normalMatrix",ae.normalMatrix),zt.setValue(K,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let ci=0,Oi=Nt.length;ci<Oi;ci++){const pa=Nt[ci];Te.update(pa,Ct),Te.bind(pa,Ct)}}return Ct}function mn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function $s(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,j,le){const ie=oe.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),oe.get(R.texture).__webglTexture=j,oe.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const le=oe.get(R);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,le=0){ee=R,z=j,H=le;let ie=null,ae=!1,Ve=!1;if(R){const Be=oe.get(R);if(Be.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(K.FRAMEBUFFER,Be.__webglFramebuffer),I.copy(R.viewport),Q.copy(R.scissor),Me=R.scissorTest,E.viewport(I),E.scissor(Q),E.setScissorTest(Me),me=-1;return}else if(Be.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Be.__hasExternalTextures)ge.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const fe=R.depthTexture;if(Be.__boundDepthTexture!==fe){if(fe!==null&&oe.has(fe)&&(R.width!==fe.image.width||R.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ve=!0);const Z=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Z[j])?ie=Z[j][le]:ie=Z[j],ae=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?ie=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(Z)?ie=Z[le]:ie=Z,I.copy(R.viewport),Q.copy(R.scissor),Me=R.scissorTest}else I.copy(Xe).multiplyScalar(xe).floor(),Q.copy(Mt).multiplyScalar(xe).floor(),Me=ut;if(le!==0&&(ie=de),E.bindFramebuffer(K.FRAMEBUFFER,ie)&&E.drawBuffers(R,ie),E.viewport(I),E.scissor(Q),E.setScissorTest(Me),ae){const Be=oe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,le)}else if(Ve){const Be=j;for(let Ze=0;Ze<R.textures.length;Ze++){const Z=oe.get(R.textures[Ze]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ze,Z.__webglTexture,le,Be)}}else if(R!==null&&le!==0){const Be=oe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Be.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(R,j,le,ie,ae,Ve,je,Be=0){if(!(R&&R.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(Ze=Ze[je]),Ze){E.bindFramebuffer(K.FRAMEBUFFER,Ze);try{const Z=R.textures[Be],fe=Z.format,Ce=Z.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Be),!B.textureFormatReadable(fe)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Ce)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ie&&le>=0&&le<=R.height-ae&&K.readPixels(j,le,ie,ae,Le.convert(fe),Le.convert(Ce),Ve)}finally{const Z=ee!==null?oe.get(ee).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(R,j,le,ie,ae,Ve,je,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(Ze=Ze[je]),Ze)if(j>=0&&j<=R.width-ie&&le>=0&&le<=R.height-ae){E.bindFramebuffer(K.FRAMEBUFFER,Ze);const Z=R.textures[Be],fe=Z.format,Ce=Z.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Be),!B.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Re),K.bufferData(K.PIXEL_PACK_BUFFER,Ve.byteLength,K.STREAM_READ),K.readPixels(j,le,ie,ae,Le.convert(fe),Le.convert(Ce),0);const Je=ee!==null?oe.get(ee).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Je);const st=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await AE(K,st,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Re),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ve),K.deleteBuffer(Re),K.deleteSync(st),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,le=0){const ie=Math.pow(2,-le),ae=Math.floor(R.image.width*ie),Ve=Math.floor(R.image.height*ie),je=j!==null?j.x:0,Be=j!==null?j.y:0;ge.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,le,0,0,je,Be,ae,Ve),E.unbindTexture()},this.copyTextureToTexture=function(R,j,le=null,ie=null,ae=0,Ve=0){let je,Be,Ze,Z,fe,Ce,Re,Je,st;const _t=R.isCompressedTexture?R.mipmaps[Ve]:R.image;if(le!==null)je=le.max.x-le.min.x,Be=le.max.y-le.min.y,Ze=le.isBox3?le.max.z-le.min.z:1,Z=le.min.x,fe=le.min.y,Ce=le.isBox3?le.min.z:0;else{const Kt=Math.pow(2,-ae);je=Math.floor(_t.width*Kt),Be=Math.floor(_t.height*Kt),R.isDataArrayTexture?Ze=_t.depth:R.isData3DTexture?Ze=Math.floor(_t.depth*Kt):Ze=1,Z=0,fe=0,Ce=0}ie!==null?(Re=ie.x,Je=ie.y,st=ie.z):(Re=0,Je=0,st=0);const pt=Le.convert(j.format),mt=Le.convert(j.type);let Ne;j.isData3DTexture?(ge.setTexture3D(j,0),Ne=K.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ge.setTexture2DArray(j,0),Ne=K.TEXTURE_2D_ARRAY):(ge.setTexture2D(j,0),Ne=K.TEXTURE_2D),E.activeTexture(K.TEXTURE0),E.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(K.UNPACK_ALIGNMENT,j.unpackAlignment);const Xt=E.getParameter(K.UNPACK_ROW_LENGTH),rt=E.getParameter(K.UNPACK_IMAGE_HEIGHT),Ct=E.getParameter(K.UNPACK_SKIP_PIXELS),an=E.getParameter(K.UNPACK_SKIP_ROWS),Sn=E.getParameter(K.UNPACK_SKIP_IMAGES);E.pixelStorei(K.UNPACK_ROW_LENGTH,_t.width),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,_t.height),E.pixelStorei(K.UNPACK_SKIP_PIXELS,Z),E.pixelStorei(K.UNPACK_SKIP_ROWS,fe),E.pixelStorei(K.UNPACK_SKIP_IMAGES,Ce);const Gn=R.isDataArrayTexture||R.isData3DTexture,zt=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Kt=oe.get(R),li=oe.get(j),Nt=oe.get(Kt.__renderTarget),ci=oe.get(li.__renderTarget);E.bindFramebuffer(K.READ_FRAMEBUFFER,Nt.__webglFramebuffer),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Oi=0;Oi<Ze;Oi++)Gn&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,ae,Ce+Oi),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,oe.get(j).__webglTexture,Ve,st+Oi)),K.blitFramebuffer(Z,fe,je,Be,Re,Je,je,Be,K.DEPTH_BUFFER_BIT,K.NEAREST);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||oe.has(R)){const Kt=oe.get(R),li=oe.get(j);E.bindFramebuffer(K.READ_FRAMEBUFFER,ue),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,W);for(let Nt=0;Nt<Ze;Nt++)Gn?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Kt.__webglTexture,ae,Ce+Nt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Kt.__webglTexture,ae),zt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,li.__webglTexture,Ve,st+Nt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,li.__webglTexture,Ve),ae!==0?K.blitFramebuffer(Z,fe,je,Be,Re,Je,je,Be,K.COLOR_BUFFER_BIT,K.NEAREST):zt?K.copyTexSubImage3D(Ne,Ve,Re,Je,st+Nt,Z,fe,je,Be):K.copyTexSubImage2D(Ne,Ve,Re,Je,Z,fe,je,Be);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(Ne,Ve,Re,Je,st,je,Be,Ze,pt,mt,_t.data):j.isCompressedArrayTexture?K.compressedTexSubImage3D(Ne,Ve,Re,Je,st,je,Be,Ze,pt,_t.data):K.texSubImage3D(Ne,Ve,Re,Je,st,je,Be,Ze,pt,mt,_t):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ve,Re,Je,je,Be,pt,mt,_t.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ve,Re,Je,_t.width,_t.height,pt,_t.data):K.texSubImage2D(K.TEXTURE_2D,Ve,Re,Je,je,Be,pt,mt,_t);E.pixelStorei(K.UNPACK_ROW_LENGTH,Xt),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,rt),E.pixelStorei(K.UNPACK_SKIP_PIXELS,Ct),E.pixelStorei(K.UNPACK_SKIP_ROWS,an),E.pixelStorei(K.UNPACK_SKIP_IMAGES,Sn),Ve===0&&j.generateMipmaps&&K.generateMipmap(Ne),E.unbindTexture()},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){z=0,H=0,ee=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const yR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",ER="/assets/Reckk-MediumItalic-D_uyfX4p.otf",bR="/assets/CXLMediumItalic-DYSp-DoC.otf",lx=4,cx=5,as={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function MS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function TR(a){return MS(a)}function AR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}const Zh=2048,RR=1.1;function CR(a,e){const i=Math.max(240,a);let r=Math.round(i*e*RR),o=Math.round(r*cx/lx);if(r>Zh||o>Zh){const c=Zh/Math.max(r,o);r=Math.max(280,Math.round(r*c)),o=Math.round(r*cx/lx)}return{W:r,H:o,layoutDpr:r/i}}function yS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function rn(a,e,i,r,o,c,u){yS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function pn(a,e,i,r,o,c,u,d){yS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function rf(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));rn(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),pn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function ic(a,e,i,r,o,c,u){if(r<2||o<2)return;const d=8*c,m=a.createLinearGradient(e,i+o,e+r,i);if(m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),rn(a,e,i,r,o,d,m),pn(a,e,i,r,o,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*c)),(u==null?void 0:u.innerStroke)!==!1){const h=2.5*c;pn(a,e+h,i+h,r-h*2,o-h*2,Math.max(2,d-1.5*c),"rgba(200,245,168,0.35)",Math.max(1,c))}}const Ks="rgba(255,255,255,0.08)",Qs="rgba(255,255,255,0.14)";function of(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return pn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function ES(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*h,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+h/2,i+14*d),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function wR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function DR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;rn(a,e,m,r,h,6*u,Ks),pn(a,e,m,r,h,6*u,Qs,1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+h/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),d+6*u+h}function LR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;rn(a,e,u,r,d,8*o,"#050508"),pn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),rn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function NR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;pn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return rn(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),pn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function fm(a,e,i,r,o){const c=44*o;rn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),pn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return rn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(as.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${as.role} · ${as.didShort}`,e+8*o+u+8*o,i+32*o),c}function UR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),rn(a,e,i,r,c,d,m),pn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),pn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(as.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(as.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${as.role} · ${as.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(as.didShort,e+u,h);const g=28*o;return rn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),pn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function OR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),rn(a,e,i,r,c,d,m),pn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,_=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(as.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function PR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);rn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);rn(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function IR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(d+u);rn(a,x,h,d,m,6*o,Ks),pn(a,x,h,d,m,6*o,_.active?_.tone:Qs,_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,h+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(b,x+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function BR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;rn(a,e,i,r,u,8*o,Ks),pn(a,e,i,r,u,8*o,Qs,1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return rn(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),rn(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const jl=2,No={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function ux(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);rn(a,x,i,m,h,6*c,Ks),pn(a,x,i,m,h,6*c,Qs,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",h}function FR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:No.riskScore},{label:"Rep",value:No.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(h+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":Ks,C=g.brand?"rgba(200,245,168,0.35)":Qs;rn(a,h,i,x,d,4*o,b),pn(a,h,i,x,d,4*o,C,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let S=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),S,i+d*.68),S+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,S,i+d*.68)),h+=x+u}return a.textAlign="left",d}function zR(a,e,i,r,o){const c=No.receipts,u=22*o,d=14*o+c.length*u;return rn(a,e,i,r,d,6*o,Ks),pn(a,e,i,r,d,6*o,Qs,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function HR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),rn(a,e,i,r,c,d,m),pn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),pn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,_=e+r-u-h,v=i+u-1*o;return rn(a,_,v,h,g,8*o,"rgba(200,245,168,0.14)"),pn(a,_,v,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+h/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function GR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return rn(a,e,i,r,d,6*o,Ks),pn(a,e,i,r,d,6*o,Qs,1),c.forEach(([m,h,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",d}function VR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%jl+jl)%jl,_=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];rf(a,e,i,r,o,h,u);let v=of(a,e,i,r,m,_.header,d);v=wR(a,e,v,r,m,_.segment,g+1,jl,d);const x=i+o-m,b=e+m,C=v,y=r-m*2,S=Math.max(48*d,x-v),O=10*d;ic(a,b,C,y,S,d);const P=b+O,A=y-O*2;let L=C+O;const N=C+S-O;if(g===0){L+=fm(a,P,L,A,d)+8*d,L+22*d<=N&&(L+=FR(a,P,L,A,d)+8*d);const T=[["SHARPE",No.sharpe],["ROI",No.roi],["RISK",No.riskScore]];L+36*d<=N&&(L+=ux(a,P,L,A,T,d)+8*d),L+70*d<=N&&zR(a,P,L,A,d);return}L+=HR(a,P,L,A,d)+8*d,L+78*d<=N&&(L+=GR(a,P,L,A,d)+8*d);const F=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];L+36*d<=N&&ux(a,P,L,A,F,d)}function kR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;rf(a,e,i,r,o,h,u);let g=of(a,e,i,r,m,"COPY TRADE",d);g=ES(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const _=40*d,v=i+o-m-_,x=v-10*d;if(c%2===0){const C=6*d,y=r-m*2;let S=(y-C)/2,O=Math.min(S*190/316,S*.58);const P=Math.max(64*d,x-g-28*d);O>P&&(S=S*(P/O),O=P);const A=d*(S/((y-C)/2)),L=e+m+(y-(S*2+C))/2;OR(a,L,g,S,A),UR(a,L+S+C,g,S,A),g+=O+10*d;const N=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],F=5*d,T=(r-m*2-F*2)/3,U=32*d;if(g+U<=x){const k=6*d;ic(a,e+m,g-k,r-m*2,U+k*2,d,{innerStroke:!1}),N.forEach(([G,q],de)=>{const ue=e+m+de*(T+F);rn(a,ue,g,T,U,6*d,Ks),pn(a,ue,g,T,U,6*d,Qs,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(G,ue+T/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(q,ue+T/2,g+24*d)}),a.textAlign="left"}}else{const C=e+m,y=g,S=r-m*2,O=Math.max(48*d,x-g),P=10*d;ic(a,C,y,S,O,d);const A=C+P,L=S-P*2;let N=y+P;const F=y+O-P;N+=fm(a,A,N,L,d)+10*d,N+36*d<F&&(N+=PR(a,A,N,L,d,25)+10*d),N+50*d<F&&IR(a,A,N,L,d)}BR(a,e+m,v,r-m*2,d)}const XR=2,WR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function YR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function qR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;rf(a,e,i,r,o,m,c);let h=of(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,_=e+d,v=h,x=r-d*2,b=Math.max(48*u,g-h),C=10*u;ic(a,_,v,x,b,u);const y=58*u,S=10*u,O=6*u,P=_+C+y+O+S+O,A=_+x-C-P,L=_+C+y+O+S/2,N=_+C;h=v+C;const F=v+b-C,T=WR,U=4*u;T.forEach((k,G)=>{if(h>=F-8*u)return;const q=G===0,de=G===T.length-1,ue=YR(k.status),W=8*u,z=6*u,H=7*u,ee=8*u,me=k.showActions?22*u:0,ye=k.showActions?5*u:0,Q=Math.max(W+2*u+z,H+4*u+ee)+ye+me+U;if(h+Math.min(Q,28*u)>F)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${W}px "DM Mono", ui-monospace, monospace`,a.fillText(k.agent,N+y,h+W),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${z}px "DM Mono", ui-monospace, monospace`,a.fillText(k.timeLabel,N+y,h+W+2*u+z),a.textAlign="left",de||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(L,h+6*u),a.lineTo(L,h+Q),a.stroke());const Me=2.4*u;a.beginPath(),a.arc(L,h+5*u,Me,0,Math.PI*2),a.fillStyle=q?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),q&&(a.beginPath(),a.arc(L,h+5*u,Me+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const Oe=4*u,Ue=2*u;a.font=`700 ${H}px "DM Mono", ui-monospace, monospace`;const ne=k.statusLabel.toUpperCase(),be=a.measureText(ne).width+Oe*2,xe=H+Ue*2;rn(a,P,h,be,xe,3*u,ue.bg),a.fillStyle=ue.fg,a.fillText(ne,P+Oe,h+H+Ue*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${ee}px "DM Mono", ui-monospace, monospace`;const Ie=h+xe+3*u+ee;let it=k.action;if(k.pnl){const Xe=`${k.action} · `;a.fillText(Xe,P,Ie);const Mt=a.measureText(Xe).width;a.fillStyle=k.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${ee}px "DM Mono", ui-monospace, monospace`,a.fillText(k.pnl.text,P+Mt,Ie)}else{for(;it.length>8&&a.measureText(it).width>A;)it=`${it.slice(0,-2)}…`;a.fillText(it,P,Ie)}if(k.showActions&&h+xe+3*u+ee+ye+me<=F){const Xe=h+xe+3*u+ee+ye,Mt=(A-5*u)/2;pn(a,P,Xe,Mt,me,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",P+Mt/2,Xe+me*.68),rn(a,P+Mt+5*u,Xe,Mt,me,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",P+Mt+5*u+Mt/2,Xe+me*.68),a.textAlign="left"}h+=Q})}function jR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;rf(a,e,i,r,o,m,c);let h=of(a,e,i,r,d,"FUND BUCKET",u);h=ES(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u);const g=10*u+36*u,_=e+d,v=h,x=r-d*2,b=Math.max(48*u,i+o-d-g-8*u-h),C=10*u;ic(a,_,v,x,b,u);const y=_+C,S=x-C*2;let O=v+C;O+=fm(a,y,O,S,u)+8*u,O+=DR(a,y,O,S,"FROM","Select source bucket",u)+8*u,v+b-C-O>70*u&&LR(a,y,O,S,u),NR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function bS(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":VR(a,i,r,o,c,u,d);break;case"copy":kR(a,i,r,o,c,u,d);break;case"supervise":qR(a,i,r,o,c,d);break;case"isolate":jR(a,i,r,o,c,d);break}}function ZR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),bS(a,e,0,0,i,r,o,c)}function KR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m,layoutDpr:h}=CR(r,i),g=document.createElement("canvas");g.width=d,g.height=m;const _=g.getContext("2d"),v=Math.min(1,Math.max(0,c)),x=_.createLinearGradient(0,0,0,m);x.addColorStop(0,`rgba(8, 10, 14, ${v})`),x.addColorStop(.55,`rgba(5, 7, 13, ${v})`),x.addColorStop(1,`rgba(3, 4, 6, ${v})`),_.fillStyle=x,_.fillRect(0,0,d,m);const b=Math.round(22*h),C=Math.round(.05*m),y=Math.round(.045*m),S=d-b*2,O=10*h,P=20*h,A=Math.min(34*h,d*.095);_.fillStyle="rgba(255,255,255,0.94)",_.font=`normal 400 ${A}px ${o}`,_.textBaseline="alphabetic";const L=_.measureText(a.verb),N=Math.abs(L.actualBoundingBoxAscent??A*.8),F=Math.abs(L.actualBoundingBoxDescent??A*.2),T=C+N;_.shadowColor="rgba(10, 14, 23, 0.55)",_.shadowBlur=Math.max(8,12*h),_.shadowOffsetX=0,_.shadowOffsetY=Math.max(1,1.5*h),_.fillText(a.verb,b,T),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0;const U=Math.min(13*h,d*.036);_.fillStyle="rgba(255,255,255,0.94)",_.font=`400 ${U}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const G=AR(_,a.description,S)[0]??a.description,q=_.measureText(G),de=Math.abs(q.actualBoundingBoxAscent??U*.75),ue=T+F+O+de;_.shadowColor="rgba(10, 14, 23, 0.45)",_.shadowBlur=Math.max(4,6*h),_.shadowOffsetY=Math.max(.5,1*h),_.fillText(G,b,ue),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0;const W=Math.round(ue+P),z=b,H=W,ee=S,me=Math.max(80*h,m-W-y);bS(_,TR(e),z,H,ee,me,0,u);const ye=new cm(g);return ye.colorSpace=ti,ye.minFilter=Ys,ye.generateMipmaps=!0,ye}const jp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],QR="0 0 58 35",JR=58,$R=35;function e3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,JR+r*2,$R+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:jp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const t3={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function dm({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=t3[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(e3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const fx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",n3=50,Jl=500,Kh=100,dx=168;function i3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a3(){return fx[Math.floor(Math.random()*fx.length)]??"?"}function hx(a){return Array.from(a).map(e=>{const i=Math.random()*(Jl-Kh),r=Kh+Math.random()*(Jl-i-Kh),o=Math.min(Jl,i+r);return{original:e,start:i,end:o}})}function px(a){return Math.min(1,Math.max(0,a))}function s3({text:a,className:e,scrollerRef:i,effect:r="matrix"}){const o=ke.useRef(null),c=ke.useRef(hx(a)),u=i3();return ke.useEffect(()=>{c.current=hx(a)},[a]),ke.useEffect(()=>{if(u)return;const d=o.current;if(!d)return;let m=0,h=!0,g=-1;const _=()=>{const x=i.current;if(!x)return;const b=Math.max(0,-x.getBoundingClientRect().top),C=Math.min(Jl,Math.max(0,b-n3));if(C===g&&g>=0)return;g=C;const y=c.current,S=d.querySelectorAll(".scroll-dissolve__glyph");let O=y.length>0;if(r==="fadeout"){const P=px(C/Jl);O=P>=1;for(let A=0;A<y.length;A++){const L=y[A],N=S[A];N&&(N.textContent=L.original===" "?" ":L.original,N.style.transform="translateY(0)",N.style.opacity="1",N.style.visibility="visible")}d.style.opacity=String(1-P),d.style.visibility=O?"hidden":"visible",d.style.display=O?"none":"block";return}for(let P=0;P<y.length;P++){const A=y[P],L=S[P];if(!L)continue;const N=Math.max(.001,A.end-A.start),F=px((C-A.start)/N);if(F<1&&(O=!1),F<=0){L.textContent=A.original===" "?" ":A.original,L.style.transform="translateY(0)",L.style.opacity="1",L.style.visibility="visible";continue}if(F>=1){L.textContent=A.original===" "?" ":A.original,L.style.transform=`translateY(${-dx}px)`,L.style.opacity="0",L.style.visibility="hidden";continue}L.textContent=a3(),L.style.transform=`translateY(${-F*dx}px)`,L.style.opacity=String(1-F),L.style.visibility="visible"}d.style.opacity="1",d.style.visibility=O?"hidden":"visible",d.style.display=O?"none":"block"},v=()=>{h&&(_(),m=requestAnimationFrame(v))};return m=requestAnimationFrame(v),()=>{h=!1,cancelAnimationFrame(m)}},[u,i,a,r]),u?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:o,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((d,m)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:d===" "?" ":d},`${m}-${d}`))})}const r3="Enter the agentic economy →",Zl=ip.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),sn=Zl.length,ca=2.95,Zs=6.9,Fo=32,hm=4,pm=5,Qu=2.05,o3=1,TS=ca*.55,AS=.28,RS=.35,mx=AS+RS,Qh=.85,gx=300,l3=35,_x=l3/60*1e3,c3=.1;function CS(a){return a<520?{mode:"mobile",canvasAspect:1280/320,fontRefH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasAspect:1600/360,fontRefH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasAspect:1920/420,fontRefH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const Jh=4096,vx=1.15;function u3(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.35,Math.min(i,r)*1.25),3.5)}function f3(){const a=-(sn-1)*ca,e=-.1*ca,r=a+Zs+e-TS,o=a+.05;return Math.max(.5,r-o)}function d3(a,e,i){const{w:r,h:o}=Zp(a,e,i),c=cf(a,e),u=f3(),d=a/Math.max(1,e),m=Fo*Math.PI/180,h=2*u*Math.tan(m/2),g=h*d;return{w:r*c/Math.max(1e-6,g)*a,h:o*c/Math.max(1e-6,h)*e}}const h3=1.35,p3=.72,m3=.62,g3=.2,_3=14,v3=.42,x3=128,S3=12,M3=.002,y3=.0011,xx=.12,E3=.88,wS=4,b3=32,T3=40,A3=wS-1,Sx=50,R3=-10,Mx=28,C3="/intro-frames",DS=12,$l=121,w3=1,kl=960,Xl=540,D3=10;function Pu(){const a=window.devicePixelRatio||1,e=window.innerWidth<900,i=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;return Math.min(a,e||i?1.5:2)}const Ju=($l-1)/DS,LS=[0,2,4,6,8,Ju],L3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function N3(a){const e=w3+a;return`${C3}/frame_${String(e).padStart(3,"0")}.webp`}function U3(a){const e=$l-1,i=Pt.clamp(a,0,Ju);return Pt.clamp(Math.round(i*DS),0,e)}function O3(a,e){const i=L3[a]??{in:2,out:2},r=Pt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function yx(a,e,i,r,o){const c=Math.max(1,sn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=LS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],_=u[h+1],v=_>g?Pt.clamp((a-g)/(_-g),0,1):1;return Pt.lerp(d[h],d[h+1],O3(h,v))}function P3(a){let e=!1;const i=new Array($l).fill(null);async function r(c){if(e)return;const u=new Image;u.decoding="async",u.src=N3(c),await new Promise(d=>{u.onload=()=>d(),u.onerror=()=>d()}),!(e||!u.complete||u.naturalWidth<1)&&(i[c]=u,a==null||a(c,u))}const o=(async()=>{await r(0);let c=1;for(;c<$l&&!e;){const u=[];for(let d=0;d<D3&&c<$l;d+=1,c+=1)u.push(r(c));await Promise.all(u)}})();return{frames:i,cancel:()=>{e=!0},ready:o}}const I3=`
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
`,H3='"Reckk Heading", Georgia, "Times New Roman", serif',NS="Morpheum Wordmark",ac=`"${NS}"`,G3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function V3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(NS,`url(${bR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${ac}`);const e=document.fonts.check(`normal 152px ${ac}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function k3(){if(!(typeof document>"u"||!document.fonts))try{await V3();const a=new FontFace("Reckk Title",`url(${ER})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${yR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${ac}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const ks="flow-intro-hide-chrome",X3=72,W3=120,$h=80;function Y3(a){return a<=X3}const q3=280,ep=.42;function Xs(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function tp(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;Xs(e)}function Ex(){document.body.classList.remove(ks),tp(),requestAnimationFrame(()=>{tp(),requestAnimationFrame(()=>{tp()})})}function is(a){const e=Pt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Co(a){const e=Math.max(1,a),i=Math.max(1,sn*e*o3),r=Math.max(1,i/Math.max(1,sn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const j3=900,Z3=1100,K3=1300,Q3=1500,J3=6,$3=36,eC=50,tC=.5,nC=1024,iC=.75,lf=.8;function mm(a){return a>=nC}function aC(a){return mm(a)?j3:Z3}function sC(a){return mm(a)?K3:Q3}function US(a){return Math.max(2,Math.max(1,a)*.004)}function rC(a,e){const{cardPx:i,titlePx:r}=Co(e),o=Math.max(1,sn-1),c=Pt.clamp(Math.round(a),0,sn-1);return r+c/o*i}function oC(a){return a.offsetTop}function lC(a,e,i){return a.offsetTop+rC(e,i)}function Iu(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function cC(a){const e=sn-1;return Pt.clamp(Math.round(a),0,e)}function np(a,e,i,r){const o=US(r);return a<e-o?{kind:"title"}:{kind:"card",idx:cC(i)}}function uC(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,sn-1),m=r+d*tC;return!(a>m||c<u*.5)}function cf(a,e){const i=a/Math.max(1,e),r=Fo*Math.PI/180,o=2*Zs*Math.tan(r/2),c=o*i,u=Qu*hm/pm,d=.992,m=d*o/Qu,h=d*c/u;return Pt.clamp(Math.min(m,h),.52,2.35)}function OS(a,e,i=lf){const r=cf(a,e);return(mm(a)?r*iC:r)*i}function fC(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.25,Math.min(i,r)),3)}function dC(a,e,i=lf){const r=OS(a,e,i),o=Qu*r,c=o*hm/pm,u=a/Math.max(1,e),d=Fo*Math.PI/180,m=2*Zs*Math.tan(d/2),h=m*u;return{w:c/Math.max(1e-6,h)*a,h:o/Math.max(1e-6,m)*e}}function Zp(a,e,i){const r=CS(a),o=cf(a,e),c=a/Math.max(1,e),u=Fo*Math.PI/180,m=2*Zs*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function hC(a,e){const i=a/Math.max(1,sn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function pC(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function mC(a,e){const i=Pt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=is(Pt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function gC(a,e,i,r=0){const o=sn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Pt.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=is(Pt.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function _C(a){return new Ji({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:c3}},vertexShader:F3,fragmentShader:z3,transparent:!0,depthWrite:!0,depthTest:!0,side:os})}function vC(a,e){return a>1.5&&a<e-.5}function xC(a){return Pt.clamp(540/Math.max(a,340),.2,.55)}function SC(a,e,i){const r=[],o=_3;for(let c=0;c<o;c++){const u=Pt.clamp(a-c/Math.max(1,o-1)*v3,-.08,1.08),d=Math.sin(u*Math.PI*2*h3)*m3*i,m=Math.sin(u*Math.PI*2*p3)*g3,h=xx+c/Math.max(1,o-1)*(E3-xx),g=e-h;r.push(new te(d,m,g))}return r}function MC(a,e,i,r){const o=a.length;if(o<2)return new Qi;const c=[],u=[],d=[],m=[],h=new te,g=new te,_=new te,v=new te(0,1,0),x=e+1;for(let C=0;C<o;C++){C===0?h.subVectors(a[1],a[0]).normalize():C===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[C+1],a[C-1]).normalize(),g.copy(v).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),_.crossVectors(h,g).normalize();const y=o===1?0:C/(o-1),S=i+(r-i)*Math.pow(y,1.5);for(let O=0;O<=e;O++){const P=O/e*Math.PI*2,A=Math.cos(P),L=Math.sin(P),N=a[C];c.push(N.x+(A*g.x+L*_.x)*S,N.y+(A*g.y+L*_.y)*S,N.z+(A*g.z+L*_.z)*S),u.push(A*g.x+L*_.x,A*g.y+L*_.y,A*g.z+L*_.z),d.push(o===1?0:C/(o-1),O/e)}}for(let C=0;C<o-1;C++)for(let y=0;y<e;y++){const S=C*x+y,O=S+1,P=S+x,A=P+1;m.push(S,P,O,O,P,A)}const b=new Qi;return b.setAttribute("position",new Ki(c,3)),b.setAttribute("normal",new Ki(u,3)),b.setAttribute("uv",new Ki(d,2)),b.setIndex(m),b.computeBoundingSphere(),b}function bx(a,e,i,r,o,c,u,d=lf){const m={verb:a.verb,description:a.description},h=dC(r,o,d),g=fC(i,r);return KR(m,e,g,h.w,H3,c,u)}function Tx(a,e,i){const r=CS(e),o=u3(a,e),c=d3(e,i,1/r.canvasAspect);let u=Math.round(Math.max(256,c.w*o*vx)),d=Math.round(Math.max(64,c.h*o*vx));const m=Math.round(u/r.canvasAspect);if(Math.abs(m-d)/Math.max(d,1)>.08&&(d=Math.max(64,m)),u>Jh||d>Jh){const k=Jh/Math.max(u,d);u=Math.max(256,Math.round(u*k)),d=Math.max(64,Math.round(d*k))}const h=document.createElement("canvas");h.width=u,h.height=d;const g=h.getContext("2d");g.clearRect(0,0,u,d);const _="Morpheum",v=d/o;let x=r.fontPx*(v/r.fontRefH);g.textAlign="left",g.textBaseline="alphabetic";const b=()=>{g.font=`normal ${x*o}px ${ac}`};b();const C=k=>{g.font=`normal ${k*o}px ${ac}`;const G=g.measureText(_),q=Math.abs(G.actualBoundingBoxLeft??0),de=Math.abs(G.actualBoundingBoxRight??G.width),ue=Math.abs(G.actualBoundingBoxAscent??k*o*.8),W=Math.abs(G.actualBoundingBoxDescent??k*o*.25);return{left:q,right:de,width:q+de,ascent:ue,descent:W}},y=Math.max(1.25,1.85*o)*2,S=64*o+y,O=40*o+y,P=k=>{const G=C(k);return G.width+S*2<=u&&G.ascent+G.descent+O*2<=d},A=x+24;for(;!P(x)&&x>48;)x-=2;for(;P(x+2)&&x<A;)x+=2;b();const L=C(x),N=(u-L.width)/2+L.left,F=d/2+(L.ascent-L.descent)/2,T=g.createLinearGradient(N-L.left,F-L.ascent,N+L.right,F+L.descent);G3.forEach(k=>T.addColorStop(k.t,k.c)),g.lineJoin="round",g.miterLimit=2,g.lineWidth=Math.max(1.25,1.85*o),g.strokeStyle="rgba(8,12,10,0.22)",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(10,16*o),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,2*o),g.strokeText(_,N,F),g.fillStyle=T,g.fillText(_,N,F),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0;const U=new cm(h);return U.colorSpace=ti,U.minFilter=xn,U.magFilter=xn,U.generateMipmaps=!1,U}function Ax(a,e){a.generateMipmaps=!1,a.minFilter=xn,a.magFilter=xn,a.wrapS=fa,a.wrapT=fa;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function yC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=lf,skipAnimationSpeed:r=1,subtitleFadeEffect:o="matrix"}){const c=ke.useRef(null),u=ke.useRef(null),d=ke.useRef(null),m=ke.useRef(null),h=ke.useRef(!1),g=ke.useRef(!1),_=ke.useRef(null),v=ke.useRef(null),x=ke.useRef(a);x.current=Math.min(1,Math.max(0,a));const b=ke.useRef(e);b.current=Math.min(1,Math.max(0,e));const C=ke.useRef(i);C.current=Math.max(.1,i);const y=ke.useRef(r);y.current=Math.max(.1,r);const S=ke.useCallback(()=>{var L;if(h.current)return;h.current=!0,g.current=!1,(L=_.current)==null||L.call(_);const O=()=>{const N=u.current;N==null||N.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{Ex(),window.setTimeout(()=>{h.current=!1},100)},q3)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!v.current){O();return}v.current()||O()},[]);return ke.useLayoutEffect(()=>{const O=window.matchMedia("(prefers-reduced-motion: reduce)").matches,P=window.location.hash.replace(/^#/,"");return O||P!==""&&P!=="flow"&&P!=="hero"||document.body.classList.add(ks),()=>{document.body.classList.remove(ks)}},[]),ke.useEffect(()=>{const O=P=>{if(P.key!=="Escape")return;const A=document.getElementById("hero");A&&A.getBoundingClientRect().top>8&&(P.preventDefault(),S())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[S]),ke.useEffect(()=>{const O=window.location.hash.replace(/^#/,"");O&&O!=="flow"&&O!=="hero"&&requestAnimationFrame(()=>{var P;(P=document.getElementById(O))==null||P.scrollIntoView({block:"start"})})},[]),ke.useEffect(()=>{const O=d.current,P=c.current;if(!O||!P)return;const A=O,L=P;let N=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(ks);const U=m.current;U&&(U.style.height="0px");return}let T;return(async()=>{if(await k3(),N)return;const U=Pu(),k=Math.max(320,A.clientWidth||window.innerWidth),G=Math.max(1,A.clientHeight||window.innerHeight),q=[],de=[],ue=[],W=new Float64Array(sn).fill(-1);Zl.forEach((Z,fe)=>{const Ce=sn-1-fe,Re=Zl[Ce],Je=bx(Re,Ce,U,k,G,x.current,b.current,C.current);ue.push(Je);const st=_C(Je);q.push(st);const _t=Qu,pt=_t*hm/pm,mt=new Ci(new qs(pt,_t),st);mt.position.set(0,0,-fe*ca),mt.renderOrder=fe,de.push(mt)});const z=Tx(U,k,G),H=new Ku({map:z,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:ya}),ee=z.image.height/z.image.width,{w:me,h:ye}=Zp(k,G,ee),I=new Ci(new qs(me,ye),H);I.position.set(0,0,-(sn-1)*ca+.05),I.renderOrder=T3;const Q=new ib,Me=new ji(Fo,1,.08,120),Oe=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,Ue=new MR({antialias:!Oe,alpha:!1,powerPreference:"high-performance"});Ue.setPixelRatio(Pu()),Ue.outputColorSpace=ti,Ue.sortObjects=!0,A.appendChild(Ue.domElement),Ax(z,Ue);const ne=new Yl;de.forEach(Z=>ne.add(Z)),ne.add(I),Q.add(ne);const be=new Ji({uniforms:{uStrength:{value:0}},vertexShader:I3,fragmentShader:B3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:ap}),xe=new Ci(new Qi,be);xe.frustumCulled=!1,xe.renderOrder=Sx,xe.visible=!1,Q.add(xe);let Ie=null,it=null,Xe=null,Mt=-1;const ut=document.createElement("canvas");ut.width=kl,ut.height=Xl;const ht=ut.getContext("2d",{alpha:!1,desynchronized:!0}),xt=P3((Z,fe)=>{N||!ht||!Ie||Z===0&&Mt<0&&(ht.drawImage(fe,0,0,kl,Xl),Ie.needsUpdate=!0,Mt=0)});function yt(Z){const fe=xt.frames[Z];if(fe)return fe;for(let Ce=1;Ce<12;Ce+=1){const Re=xt.frames[Z-Ce];if(Re)return Re;const Je=xt.frames[Z+Ce];if(Je)return Je}return null}function tn(Z){if(!ht||!Ie)return;const fe=U3(Z);if(fe===Mt)return;const Ce=yt(fe);Ce&&(ht.drawImage(Ce,0,0,kl,Xl),Ie.needsUpdate=!0,Mt=fe)}ht&&(ht.fillStyle="#000",ht.fillRect(0,0,kl,Xl),Ie=new cm(ut),Ie.colorSpace=ti,Ie.minFilter=xn,Ie.magFilter=xn,Ie.generateMipmaps=!1,it=new Ku({map:Ie,depthTest:!1,depthWrite:!1,toneMapped:!1}),Xe=new Ci(new qs(1,1),it),Xe.frustumCulled=!1,Xe.renderOrder=R3,Xe.position.set(0,0,-Mx),Me.add(Xe),Q.add(Me),tn(LS[0]));function nn(){if(!Xe)return;const Z=Mx,fe=Fo*Math.PI/180,Ce=2*Math.tan(fe/2)*Z,Re=Ce*Me.aspect,Je=kl/Xl;Re/Math.max(1e-6,Ce)>Je?Xe.scale.set(Re,Re/Je,1):Xe.scale.set(Ce*Je,Ce,1)}const un=-(sn-1)*ca,fn=-.1*ca,Yt=un+Zs+fn,dn=Yt-TS;function K(Z){const fe=sn-1,Ce=Pt.clamp(Z,0,fe);return-(fe-Ce)*ca+Zs+fn}let ct=Math.max(1,A.clientHeight||window.innerHeight),Et=!1,B=window.innerWidth,E=!1,J=!1;function oe(){return Math.max(1,window.innerHeight)}function ge(Z){return E?Z>W3&&(E=!1):Y3(Z)&&(E=!0),E}function Pe(){const Z=m.current;if(!Z)return;const{totalPx:fe}=Co(ct),Ce=ct*mx,Je=`${Math.max(Math.ceil(fe+Ce+ct*Qh+32-gx),Math.ceil(ct*1.08))}px`;Z.style.height!==Je&&(Z.style.height=Je)}function Fe(){var pt;const Z=Math.max(320,A.clientWidth||window.innerWidth),fe=Math.max(1,A.clientHeight||ct),Ce=Pu();ue.forEach((mt,Ne)=>{mt.dispose();const Xt=sn-1-Ne,rt=bx(Zl[Xt],Xt,Ce,Z,fe,x.current,b.current,C.current);ue[Ne]=rt,q[Ne].uniforms.uMap.value=rt}),(pt=H.map)==null||pt.dispose();const Re=Tx(Ce,Z,fe);H.map=Re,H.needsUpdate=!0,Ax(Re,Ue);const Je=Re.image.height/Re.image.width,{w:st,h:_t}=Zp(Z,fe,Je);I.geometry.dispose(),I.geometry=new qs(st,_t)}function he(){const Z=A.clientWidth,fe=A.clientHeight;Z<2||fe<2||(Me.aspect=Z/fe,Me.updateProjectionMatrix(),Ue.setPixelRatio(Pu()),Ue.setSize(Z,fe,!1),nn(),Fe(),Et||Pe())}function _e(){Et=!1,ct=oe(),B=window.innerWidth,he()}he(),requestAnimationFrame(()=>{N||Fe()});let we=null;function Ye(){if(N||we)return!1;const Z=Math.max(1,ct),{cardPx:fe,titlePx:Ce,totalPx:Re}=Co(Z),Je=L.getBoundingClientRect(),st=Math.max(1,L.offsetHeight-Z),_t=Pt.clamp(-Je.top,0,st),pt=Z*mx,mt=Re+pt,Ne=yx(_t,Ce,fe,Re,mt),Xt=Math.max(.08,Ju-Ne),rt=Iu()??L.offsetTop+st,Ct=Math.max(.1,y.current);we={startMs:performance.now(),startBgSec:Ne,startScrollY:window.scrollY,endScrollY:rt,durationMs:Xt/Ct*1e3,camZ:Me.position.z};const an=u.current;return an&&(an.style.setProperty("--intro-ui-opacity","0"),an.classList.contains("flow-intro__sticky--exit")&&(an.style.transition="none",an.classList.remove("flow-intro__sticky--exit"),an.offsetWidth,an.style.transition="")),!0}v.current=Ye;let Ge=0;function He(){var ir,Ko;if(N)return;if(Ge=requestAnimationFrame(He),we){const bt=we,Fn=Math.min(1,(performance.now()-bt.startMs)/bt.durationMs),Bi=is(Fn);tn(Pt.lerp(bt.startBgSec,Ju,Fn)),nn(),Me.position.set(0,0,bt.camZ),Me.lookAt(0,0,bt.camZ-Zs),de.forEach((Fi,Qn)=>{const na=q[Qn];na.uniforms.uOpacity.value=0,na.uniforms.uWipe.value=1,Fi.visible=!1}),H.opacity=0,I.visible=!1,xe.visible=!1,be.uniforms.uStrength.value=0,Xs(Pt.lerp(bt.startScrollY,bt.endScrollY,Bi));let Mn=0;Fn>ep&&(Mn=is((Fn-ep)/Math.max(1e-6,1-ep))),u.current&&(u.current.style.setProperty("--intro-ui-opacity","0"),u.current.style.setProperty("--intro-tagline-opacity","0")),Ue.domElement.style.opacity=String(1-Mn),document.body.classList.add(ks),Ue.render(Q,Me),Fn>=1&&(we=null,Ex(),window.setTimeout(()=>{h.current=!1},100));return}const Z=oe(),fe=document.getElementById("hero"),Ce=fe?fe.getBoundingClientRect().top:0,Re=fe?ge(Ce):!0,{totalPx:Je}=Co(ct),st=L.getBoundingClientRect(),_t=Math.max(1,L.offsetHeight-ct),pt=Pt.clamp(-st.top,0,_t);!Re&&pt<=Je?(Et=!1,Math.abs(Z-ct)>$h&&(ct=Z,Pe())):Et=!0;const Ne=ct,{cardPx:Xt,titlePx:rt,totalPx:Ct}=Co(Ne),an=Math.max(1,L.offsetHeight-Ne),Sn=Pt.clamp(-st.top,0,an),Gn=Math.min(Sn,Ct),zt=Math.max(1,Ct),Kt=Ne*AS,li=Ne*RS,Nt=Kt+li,ci=Sn-Ct,Oi=is(Pt.clamp(ci/Math.max(1,Kt),0,1)),pa=is(Pt.clamp((ci-Kt)/Math.max(1,li),0,1)),vi=A.clientWidth,Nr=A.clientHeight,La=Math.max(1,rt),ii=Gn<La,Na=ii?Pt.clamp(Gn/La,0,1):0,oc=Math.max(0,Gn-La),Vo=Math.max(1,Xt),Pi=Pt.clamp(oc/Vo,0,1)*(sn-1),ta=cf(vi,Nr),ko=OS(vi,Nr,C.current),Ua=ii?Pt.lerp(dn,Yt,Na):K(Pi),Ii=hC(Xt,Ne),Xo=pC(La,Ne),er=mC(Na,Xo),Wo=sn-1,Ur=Ct+Nt;tn(yx(Sn,La,Xt,Ct,Ur)),nn(),Me.position.set(0,0,Ua),Me.lookAt(0,0,Ua-Zs);const Oa=Ct+Nt;let tr=0;if(an>Oa&&Sn>=Oa){const bt=Math.max(1,an-Oa);tr=is(Pt.clamp((Sn-Oa)/bt,0,1))}const Kn=Math.max(1,Nt+Ne*Qh),Pa=Sn<=zt?Pt.clamp(Sn/zt,0,1):1+Pt.clamp(ci/Kn,0,1)*.45;if(vC(Sn,an)){const bt=SC(Pa,Ua,xC(vi)),Bi=new gb(bt,!1,"centripetal").getSpacedPoints(x3);if(Bi.length>=2){const Mn=MC(Bi,S3,M3,y3),Fi=xe.geometry.getAttribute("position"),Qn=Mn.getAttribute("position");if(Fi&&Qn&&Fi.count===Qn.count&&((ir=xe.geometry.getIndex())==null?void 0:ir.count)===((Ko=Mn.getIndex())==null?void 0:Ko.count)&&Fi&&Qn){Fi.array.set(Qn.array),Fi.needsUpdate=!0;const ds=xe.geometry.getAttribute("normal"),Ia=Mn.getAttribute("normal");ds&&Ia&&(ds.array.set(Ia.array),ds.needsUpdate=!0);const Qo=xe.geometry.getAttribute("uv"),lc=Mn.getAttribute("uv");Qo&&lc&&(Qo.array.set(lc.array),Qo.needsUpdate=!0),Mn.dispose()}else xe.geometry.dispose(),xe.geometry=Mn;xe.visible=!0;const Or=ii||Pi<Pt.clamp(Ii,0,.999);xe.renderOrder=Or?A3:Sx,be.uniforms.uStrength.value=.36*(1-tr*.92)}else xe.visible=!1,be.uniforms.uStrength.value=0}else xe.visible=!1,be.uniforms.uStrength.value=0;const fs=Math.floor((sn-1)/2),qo=performance.now(),jo=Pt.clamp(Ii,0,.999);for(let bt=0;bt<sn;bt++){if(ii||Pi<=bt+1e-5||Pi<bt+jo){W[bt]=-1;continue}W[bt]<0&&(Pi>=bt+1-1e-5?W[bt]=qo-_x:W[bt]=qo)}if(de.forEach((bt,Fn)=>{const Bi=-Fn*ca,Mn=sn-1-Fn,Fi=W[Mn];let Qn=Fi<0?0:is(Pt.clamp((qo-Fi)/_x,0,1));!ii&&Mn===sn-1&&pa>0&&(Qn=Math.max(Qn,pa));let{opacity:na}=gC(Pi,Mn,Ii,Qn);ii&&Fn===Wo&&(na*=er.lastCardOp,Qn=0);let Or=1,ds=0;!ii&&Mn===sn-1&&na>.02&&Oi>0&&(Or=1-.28*Oi,ds=-ca*.32*Oi),bt.position.set(0,0,Bi+ds),bt.scale.setScalar(ko*Or);const Ia=q[Fn];Ia.uniforms.uOpacity.value=na,Ia.uniforms.uWipe.value=Qn,Ia.depthWrite=na>=.995&&Qn<.02,bt.visible=na>.003&&Qn<.997,bt.renderOrder=Fn<=fs?wS+Fn:b3+(Fn-fs-1)}),I.position.set(0,0,-Wo*ca+.05),I.scale.setScalar(ta),H.opacity=ii?er.titleOp:0,I.visible=H.opacity>.003,!h.current){g.current?J=!1:Re?J=!0:J&&Sn<Ct-Ne*.25&&(J=!1),document.body.classList.toggle(ks,!J);const bt=u.current;bt!=null&&bt.classList.contains("flow-intro__sticky--exit")&&!Re&&(bt.style.transition="none",bt.classList.remove("flow-intro__sticky--exit"),bt.offsetWidth,bt.style.transition="")}if(!Et){const bt=Nt+Ne*Qh+32-gx,Fn=Math.max(Math.ceil(Ct+bt),Math.ceil(Ne*1.08)),Bi=m.current;if(Bi){const Mn=`${Fn}px`;Bi.style.height!==Mn&&(Bi.style.height=Mn)}}const Zo=1-tr*.96;u.current&&(u.current.style.setProperty("--intro-ui-opacity",String(Zo)),u.current.style.setProperty("--intro-tagline-opacity","1"));const nr=String(1-tr);Ue.domElement.style.opacity=nr,Ue.render(Q,Me)}He();let et=0,tt=0,Ke=!1,X="page",De=!1,ve=!1,Le=!1,ze=0,Te=0,Qe=0,qe=!1,Bt=!1,Ft=0,jn=window.scrollY,Bn={kind:"title"};const Js=8;function us(){tt&&(window.clearTimeout(tt),tt=0)}function wa(){et&&(cancelAnimationFrame(et),et=0),Ke=!1,X="page",g.current=!1}function Nn(){wa(),us(),De=!1}_.current=Nn;function Tn(){var Ct;const Z=Math.max(1,ct),{cardPx:fe,titlePx:Ce,totalPx:Re}=Co(Z),Je=L.getBoundingClientRect(),st=Math.max(1,L.offsetHeight-Z),_t=Pt.clamp(-Je.top,0,st),pt=document.getElementById("hero"),mt=pt?ge(pt.getBoundingClientRect().top):!0,Ne=((Ct=u.current)==null?void 0:Ct.getBoundingClientRect().bottom)??Z,rt=Math.max(0,Math.min(_t,Re)-Ce)/Math.max(1,fe)*(sn-1);return{innerH:Z,cardPx:fe,titlePx:Ce,totalPx:Re,scrolledPx:_t,landed:mt,stickyBottom:Ne,depthT:rt}}function Lt(Z=Tn()){return uC(Z.scrolledPx,Z.titlePx,Z.cardPx,Z.totalPx,Z.landed,Z.stickyBottom,Z.innerH)}function Un(){return Ke||Lt()}function Zn(Z){let fe=Z.deltaY;return Z.deltaMode===1?fe*=16:Z.deltaMode===2&&(fe*=window.innerHeight),fe}function $i(){us(),De=!0,tt=window.setTimeout(()=>{tt=0,De=!1},eC)}function Lr(Z,fe){return Z.kind==="title"?oC(L):Z.kind==="card"?lC(L,Z.idx,fe.innerH):Iu()}function Da(Z){if(N||h.current||Ke)return;const fe=Tn(),Ce=Z.kind==="hero";if(!Ce&&!Lt(fe))return;const Re=Lr(Z,fe);if(Re==null)return;const Je=window.scrollY,st=Re-Je;if(Bn=Z.kind==="hero"?{kind:"card",idx:sn-1}:Z,Math.abs(st)<US(fe.innerH)){Xs(Re),$i();return}Ke=!0,X=Ce?"exit":"page",g.current=Ce,De=!0;const _t=Ce?sC(window.innerWidth):aC(window.innerWidth),pt=performance.now(),mt=Xt=>{if(Xs(Xt),Ke=!1,X="page",et=0,!Ce){g.current=!1,$i();return}g.current=!1,requestAnimationFrame(()=>{const rt=Iu();rt!=null&&Xs(rt),requestAnimationFrame(()=>{const Ct=Iu();Ct!=null&&Xs(Ct),$i()})})},Ne=Xt=>{if(N||h.current){Ke=!1,X="page",et=0,g.current=!1;return}if(X==="page"&&!Lt(Tn())){wa(),De=!1;return}const rt=Math.min(1,(Xt-pt)/_t);Xs(Je+st*is(rt)),rt<1?et=requestAnimationFrame(Ne):mt(Re)};et=requestAnimationFrame(Ne)}function Di(Z,fe){const Ce=sn-1,Re=fe>0?1:-1,Je=np(Z.scrolledPx,Z.titlePx,Z.depthT,Z.innerH);if(Je.kind==="title")return Re<0?null:{kind:"card",idx:0};const st=Je.idx+Re;return st<0?{kind:"title"}:st>Ce?Re>0?{kind:"hero"}:{kind:"card",idx:Ce}:{kind:"card",idx:st}}function Li(Z){const fe=Tn();if(!Lt(fe)&&!(Ke&&X==="exit"))return!1;const Ce=Di(fe,Z);return Ce===null?!1:(Da(Ce),!0)}function ea(Z,fe){return Di(Z,fe)===null}function Ni(Z){if(h.current||we){Z.preventDefault();return}if(!Un())return;const fe=Zn(Z),Ce=Tn();if(!Lt(Ce)&&X!=="exit")return;const Re=Di(Ce,fe>0?1:-1);if(Re===null){(Ke||De)&&Nn();return}if(Ke||De){Z.preventDefault();return}if(Math.abs(fe)<J3){Z.preventDefault();return}Z.preventDefault(),Da(Re)}function Ui(Z){var fe;if(!(h.current||we)&&(Te=((fe=Z.touches[0])==null?void 0:fe.clientY)??Te,ze=Te,Qe=window.scrollY,ve=!1,Le=Ke||Lt(),Le&&!Ke)){const Ce=Tn();Bn=np(Ce.scrolledPx,Ce.titlePx,Ce.depthT,Ce.innerH)}}function ha(Z){var Ce;if(h.current||we){Z.preventDefault();return}const fe=((Ce=Z.touches[0])==null?void 0:Ce.clientY)??ze;if(!ve){if(!Le&&(Ke||Lt())&&(Le=!0,Te=fe,ze=fe,Qe=window.scrollY),!Le)return;const Re=Te-fe;if(Math.abs(Re)<Js){ze=fe;return}const Je=Re>0?1:-1,st=Tn();if(!Ke&&!Lt(st)){Le=!1,ze=fe;return}if(ea(st,Je)){Le=!1,Nn(),ze=fe;return}Ke&&Nn(),ve=!0,Le=!1,Qe=window.scrollY,Bn=np(st.scrolledPx,st.titlePx,st.depthT,st.innerH)}Z.preventDefault(),ze=fe,Ke||Xs(Qe)}function _i(){if(h.current||we){ve=!1,Le=!1;return}const Z=ve,fe=Le,Ce=Te-ze;if(ve=!1,Le=!1,Ke)return;if(!Z){fe&&Nn();return}if(!Lt())return;if(Math.abs(Ce)<$3){Da(Bn);return}const Re=Ce>0?1:-1,Je=Tn();if(ea(Je,Re)){Nn();return}Li(Re)}function mn(Z){Z.pointerType!=="touch"&&Z.button===0&&(qe=!0,Bt=!1,Ft=window.scrollY,Lt()&&wa())}function $s(Z){if(Z.pointerType==="touch"||!qe)return;if(qe=!1,!Bt||!Lt()){Bt=!1;return}const fe=Tn(),Ce=window.scrollY>=Ft?1:-1,Re=Di(fe,Ce);if(Bt=!1,Re===null){Nn();return}Da(Re)}function R(Z){Z.pointerType!=="touch"&&(qe=!1,Bt=!1)}function j(Z){Z.button===0&&(h.current||we||Bt||Ke||De||Lt()&&(Z.preventDefault(),Li(1)))}function le(Z){var Je;const fe=Z.target;if((Je=fe==null?void 0:fe.closest)!=null&&Je.call(fe,"input, textarea, select, [contenteditable=true]"))return;if(h.current||we){(Z.key==="ArrowDown"||Z.key==="ArrowRight"||Z.key==="ArrowUp"||Z.key==="ArrowLeft"||Z.key==="Enter"||Z.key===" ")&&Z.preventDefault();return}const Ce=Z.key==="ArrowDown"||Z.key==="ArrowRight"||Z.key==="Enter"||Z.key===" ",Re=Z.key==="ArrowUp"||Z.key==="ArrowLeft";if(!(!Ce&&!Re)){if(Ke||De){Z.preventDefault();return}Lt()&&(Z.preventDefault(),Li(Ce?1:-1))}}function ie(){const Z=window.scrollY,fe=Z-jn;jn=Z,qe&&Math.abs(fe)>.5&&(Bt=!0),Ke&&X==="page"&&!Lt()&&Nn()}function ae(){Nn(),_e()}function Ve(){Nn();const Z=oe(),fe=window.innerWidth,Ce=Math.abs(Z-ct),Re=Math.abs(fe-B)>1;if(Et){Ce>$h||Re?_e():he();return}ct=Z,B=fe,he()}function je(){Nn();const Z=oe();Math.abs(Z-ct)<=$h||(Et?_e():(ct=Z,B=window.innerWidth,he()))}window.addEventListener("wheel",Ni,{passive:!1}),window.addEventListener("touchstart",Ui,{passive:!0}),window.addEventListener("touchmove",ha,{passive:!1}),window.addEventListener("touchend",_i,{passive:!0}),window.addEventListener("touchcancel",_i,{passive:!0}),window.addEventListener("pointerdown",mn,{passive:!0}),window.addEventListener("pointerup",$s,{passive:!0}),window.addEventListener("pointercancel",R,{passive:!0}),window.addEventListener("scroll",ie,{passive:!0}),window.addEventListener("resize",Ve,{passive:!0}),window.addEventListener("orientationchange",ae,{passive:!0}),A.addEventListener("click",j),window.addEventListener("keydown",le);const Be=window.visualViewport;Be&&Be.addEventListener("resize",je);const Ze=new ResizeObserver(he);Ze.observe(A),T=()=>{var Z;Nn(),_.current=null,v.current=null,we=null,cancelAnimationFrame(Ge),document.body.classList.remove(ks),window.removeEventListener("wheel",Ni),window.removeEventListener("touchstart",Ui),window.removeEventListener("touchmove",ha),window.removeEventListener("touchend",_i),window.removeEventListener("touchcancel",_i),window.removeEventListener("pointerdown",mn),window.removeEventListener("pointerup",$s),window.removeEventListener("pointercancel",R),window.removeEventListener("scroll",ie),window.removeEventListener("resize",Ve),window.removeEventListener("orientationchange",ae),A.removeEventListener("click",j),window.removeEventListener("keydown",le),Be&&Be.removeEventListener("resize",je),Ze.disconnect(),q.forEach(fe=>{fe.dispose()}),ue.forEach(fe=>fe.dispose()),(Z=H.map)==null||Z.dispose(),H.dispose(),de.forEach(fe=>fe.geometry.dispose()),I.geometry.dispose(),xe.geometry.dispose(),be.dispose(),Q.remove(xe),Xe&&(Me.remove(Xe),Xe.geometry.dispose()),it==null||it.dispose(),Ie==null||Ie.dispose(),xt.cancel(),Ue.dispose(),A.contains(Ue.domElement)&&A.removeChild(Ue.domElement)},N&&T()})(),()=>{var U;N=!0,(U=_.current)==null||U.call(_),_.current=null,v.current=null,document.body.classList.remove(ks),T==null||T()}},[]),D.jsxs("section",{ref:c,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:u,className:"flow-intro__sticky",children:[D.jsx("div",{ref:d,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(dm,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:S,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(s3,{text:r3,className:"flow-intro__tagline",scrollerRef:c,effect:o})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Zl.map((O,P)=>D.jsxs("p",{children:["Step ",String(P+1).padStart(2,"0"),": ",O.verb,". ",O.description]},O.verb))})]}),D.jsx("div",{ref:m,className:"flow-intro__spacer","aria-hidden":!0})]})}const EC=280,bC=5/4,TC=3800,AC={discover:jl,copy:XR};function RC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function CC({stepIndex:a,kind:e,className:i,width:r=EC}){const o=ke.useRef(null),c=e??MS(a),u=Math.round(r*bC);return ke.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),C=Math.round(u*x);(d.width!==b||d.height!==C)&&(d.width=b,d.height=C);const y=d.getContext("2d");y&&ZR(y,c,b,C,m)};g();const _=AC[c];_&&_>1&&!RC()&&(h=setInterval(()=>{m=(m+1)%_,g()},TC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Rx=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function wC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Rx.map((a,e)=>{const i=e===Rx.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const DC=/^(action)$/i;function LC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>DC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function PS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:LC(e)})]})}var NC=Fx();function UC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function OC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,UC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Cx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=OC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let _=1;_<=a.length;_++){d.setStart(c,0),d.setEnd(c,_);const v=d.getClientRects().length;v>g&&g>0&&(m.push(a.slice(h,_-1)),h=_-1),g=v}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const PC=40,IC=5,BC="typewriter-reveal",wx=1e3,FC=4e3;function Dx(){return wx+Math.random()*(FC-wx)}function IS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),_=ke.useRef(null),v=ke.useRef(null),x=ke.useRef(null),b=ke.useRef("idle"),[C,y]=ke.useState("idle");g.current=m;const S=ke.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),O=ke.useCallback(()=>{var U;S(),v.current=null,x.current=null,b.current="complete",y("complete"),(U=g.current)==null||U.call(g)},[S]),P=ke.useCallback(U=>{S(),v.current=Date.now()+U,_.current=setTimeout(O,U)},[S,O]);ke.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,v.current=null,S()},[a,i,r,S]),ke.useLayoutEffect(()=>{var H,ee,me;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&_.current&&v.current!=null&&(S(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(b.current==="cursor-hold"&&!_.current){const ye=x.current??Dx();x.current=null,P(ye);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(IS()){(H=g.current)==null||H.call(g);return}const U=h.current;if(!U||!a){(ee=g.current)==null||ee.call(g);return}U.style.width="",U.offsetWidth;const k=Math.max(a.length/i*1e3,120),G=Math.max(a.length,1),q=U.closest(".typewriter-block"),de=(q==null?void 0:q.clientWidth)??((me=U.parentElement)==null?void 0:me.clientWidth)??0;U.style.whiteSpace="nowrap",U.style.width="auto";const ue=U.scrollWidth,W=de>0?Math.min(ue,de):ue;U.style.width="0",U.style.setProperty("--tw-duration",`${k}ms`),U.style.setProperty("--tw-target-width",`${W}px`),U.style.setProperty("--tw-steps",String(G)),U.style.setProperty("--tw-cursor-width",`${r}px`),U.offsetWidth,b.current="animating",y("animating");const z=ye=>{if(ye.animationName===BC){if(d){U.style.width=`${W}px`,b.current="cursor-hold",y("cursor-hold"),P(Dx());return}U.style.width="",O()}};return U.addEventListener("animationend",z),()=>{U.removeEventListener("animationend",z)}},[o,u,O,d,P,i,a,c,S,r]);const A=C==="animating",L=C==="cursor-hold",N=C==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",A?"is-animating":"",L?"is-cursor-hold":"",u||N?"is-complete":"",!o&&!c&&!u&&!N&&(A||L)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:T,children:e??a})}function gm({text:a,children:e,className:i,speed:r=PC,cursorWidth:o=IC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),[_,v]=ke.useState([]),[x,b]=ke.useState(0),[C,y]=ke.useState(0),[S,O]=ke.useState(!1),[P,A]=ke.useState(!1),L=IS();g.current=m;const N=ke.useCallback(()=>{const ue=h.current;if(!ue||!a)return v([]),b(0),A(!0),!0;const W=ue.clientWidth;if(W<1)return!1;const H=(c==="auto"||c===!0)&&!L,{lines:ee,blockHeight:me}=Cx(a,W,ue,H);let ye=me;if(!H){const I=Cx(a,W,ue,!0);ye=Math.max(me,I.blockHeight)}return v(ee),b(ye),A(!0),!0},[a,c,L]);ke.useLayoutEffect(()=>{var ue,W;if(y(0),O(!1),A(!1),v([]),b(0),L){(ue=g.current)==null||ue.call(g),A(!0);return}if(!a){(W=g.current)==null||W.call(g),A(!0);return}if(!N()){const z=new ResizeObserver(()=>{N()&&z.disconnect()});return h.current&&z.observe(h.current),()=>z.disconnect()}},[a,c,N,L]);const F=ke.useCallback(ue=>{var z;const W=ue>=_.length-1;NC.flushSync(()=>{if(!W){y(ue+1);return}O(!0)}),W&&((z=g.current)==null||z.call(g))},[_]),U=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",S?"is-complete":"",P?"":"is-measuring",L?"is-static":""].filter(Boolean).join(" "),k={...!S&&!L&&x>0?{height:x,minHeight:x}:void 0},G=e??a;if(!P)return D.jsx("span",{ref:h,className:U,style:k,children:G});if(L||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:G});if(S)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:G});const q=_.length>0?_:[a],de=!!e&&q.length<=1;return D.jsxs("span",{ref:h,className:U,style:k,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:G}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:q.map((ue,W)=>D.jsx(zC,{text:ue,content:de?e:void 0,speed:r,cursorWidth:o,waiting:W>C,active:u&&W===C,completed:W<C,holdCursor:d&&W===q.length-1,onComplete:W===C?()=>F(W):void 0},`${W}-${ue}`))})]})}function HC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _m(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=ke.useState(!1);return ke.useLayoutEffect(()=>{if(r)return;if(HC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function GC(a){return String(a).padStart(2,"0")}function $u(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const VC=1600,kC=1500,Lx=5e3,XC=7e3;function WC(){return Lx+Math.random()*(XC-Lx)}function YC({text:a,active:e}){const[i,r]=ke.useState(!1),[o,c]=ke.useState(0),u=ke.useRef(null),d=`> ${a}`,m=ke.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);ke.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if($u()){r(!0);return}const g=window.setTimeout(()=>r(!0),kC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=ke.useCallback(()=>{$u()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},WC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(gm,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function qC(){const[a,e]=ke.useState(()=>new Set),[i,r]=ke.useState(!1),o=ke.useRef(new Map),c=ke.useRef(null),u=_m(c,{amount:.35}),d=Is.steps.every(_=>a.has(`step-${_.n}`));ke.useLayoutEffect(()=>{if($u()){e(new Set(Is.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const b=new Set(x);for(const C of v){const y=C.target.dataset.flowKey;y&&C.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),ke.useLayoutEffect(()=>{if($u())return;if(!d){r(!1);return}const _=window.setTimeout(()=>{r(!0)},VC);return()=>window.clearTimeout(_)},[d]);const m=ke.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),h=ke.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Is.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Is.title}),D.jsx("div",{className:"flow__chips",children:Is.chips.map(_=>D.jsx(PS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Is.steps.map((_,v)=>{const x=`step-${_.n}`,b=a.has(x);return D.jsxs("article",{ref:C=>m(x,C),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(x),"aria-label":b?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",GC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(YC,{text:_.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Ln.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?v===2?D.jsx(wC,{}):D.jsx(CC,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(gm,{text:Is.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Is.outcome})})]})})}function jC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(dm,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:ov.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Bu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Ln.docs,children:"Docs"}),D.jsx("a",{href:Ln.manifesto,children:"Manifesto"}),D.jsx("a",{href:Ln.discord,children:"Discord"}),D.jsx("a",{href:Ln.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:ov.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const Nx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",BS=50,Ux=3500,Ox=4e3,ZC=1400,KC=1200,QC=4500;function FS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Px(a){return/[A-Za-z0-9]/.test(a)}function JC(){return Nx[Math.floor(Math.random()*Nx.length)]??"?"}function $C(a){return Math.random()<.5?JC():a}function zS(a,e,i){const r=[];for(let h=0;h<a.length;h++)Px(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!Px(g)||d.has(h)?m+=g:m+=$C(g)}return m}function ew(a){return typeof a=="boolean"?{enabled:a,decryptMs:Ux,pauseMs:Ox}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Ux,pauseMs:a.pauseMs??Ox}}function Yn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=ew(e),c=r+o,[u,d]=ke.useState(a);return ke.useEffect(()=>{if(!i||FS()){d(a);return}let m=Date.now();const h=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),d(zS(a,v,r))};h();const g=setInterval(h,BS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function Ix(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??ZC,o=e.stepDecryptMs??KC,c=e.holdMs??QC,u=a.join("\0"),[d,m]=ke.useState(a),[h,g]=ke.useState(()=>a.map(()=>!1));return ke.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||FS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let b=Date.now();const C=()=>{const S=Date.now();let O=S-b;O>=x&&(b=S,O=0);const P=[],A=[];for(let L=0;L<_.length;L++){const N=_[L]??"",F=L*r,T=O>=F;if(A.push(T),!T){P.push(N);continue}const U=O-F;P.push(zS(N,U,o))}m(P),g(A)};C();const y=setInterval(C,BS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function tw(){const a=[...rv,...rv];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(PS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function nw({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Ps.headline,c=Yn(Ps.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:QR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:jp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:jp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ps.eyebrow.href,"aria-label":`${Ps.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Uo,{href:Ps.primaryCta.href,variant:"primary",children:Ps.primaryCta.label}),D.jsx(Uo,{href:Ps.secondaryCta.href,variant:"secondary",children:Ps.secondaryCta.label})]})]}),D.jsx(tw,{})]})}function iw(){const a=Yn(dh.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:dh.href,"aria-label":dh.text,children:a})})}const oi={decryptMs:2800,pauseMs:5200},Bx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function HS(a){return String(a+1).padStart(2,"0")}function aw(a,e,i,r){return`${HS(a)}  ${e}  ·  ${i}  ·  ${r}`}function sw(a,e,i){return`${HS(a)}  ${e}  ·  ${i}`}function rw(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function mi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function cn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function ow({meta:a}){const e=Yn(a.name,oi),i=Yn(a.tx,oi),r=Yn(a.hash,oi),o=Yn(a.chain,oi),c=Yn(a.verified,oi),u=Yn(a.rep,oi),d=Yn(a.portable,oi),m=Yn(a.next,oi),h=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,b=`hash ${r}`,C=`chain ${a.chain}`,y=`chain ${o}`,S=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,O=`verified ${c} · rep ${u} · portable ${d}`,P=`next ${a.next}`,A=`next ${m}`,L=`rep ${a.rep} · portable ${a.portable}`,N=`rep ${u} · portable ${d}`,F=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(mi,{label:"tx",value:a.tx,display:i}),D.jsx(mi,{label:"hash",value:a.hash,display:r}),D.jsx(mi,{label:"chain",value:a.chain,display:o}),D.jsx(mi,{label:"verified",value:a.verified,display:c}),D.jsx(mi,{label:"rep",value:a.rep,display:u}),D.jsx(mi,{label:"portable",value:a.portable,display:d}),D.jsx(mi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(cn,{value:h,display:g}),D.jsx(cn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(cn,{value:x,display:b}),D.jsx(cn,{value:C,display:y}),D.jsx(cn,{value:S,display:O}),D.jsx(cn,{value:P,display:A})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(cn,{value:h,display:g}),D.jsx(cn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(cn,{value:x,display:b}),D.jsx(cn,{value:C,display:y}),D.jsx(cn,{value:F,display:T}),D.jsx(cn,{value:L,display:N}),D.jsx(cn,{value:P,display:A})]})]})}function lw({meta:a}){const e=Yn(a.tx,oi),i=Yn(a.from,oi),r=Yn(a.to,oi),o=Yn(a.asset,oi),c=Yn(a.amt,oi),u=Yn(a.chain,oi),d=Yn(a.status,oi),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,C=`${o} ${c}`,y=`status ${a.status}`,S=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(mi,{label:"tx",value:a.tx,display:e}),D.jsx(mi,{label:"from",value:a.from,display:i}),D.jsx(mi,{label:"to",value:a.to,display:r}),D.jsx(mi,{label:"asset",value:a.asset,display:o}),D.jsx(mi,{label:"amt",value:a.amt,display:c}),D.jsx(mi,{label:"chain",value:a.chain,display:u}),D.jsx(mi,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(cn,{value:g,display:_}),D.jsx(cn,{value:m,display:h}),D.jsx(cn,{value:v,display:x}),D.jsx(cn,{value:y,display:S})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(cn,{value:g,display:_}),D.jsx(cn,{value:m,display:h}),D.jsx(cn,{value:b,display:C}),D.jsx(cn,{value:a.chain,display:u}),D.jsx(cn,{value:y,display:S})]})]})}function cw({meta:a}){const e=ke.useRef(null),i=_m(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?rw(r):null,c=ke.useMemo(()=>{const h=a.steps.map((g,_)=>aw(_,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=ke.useMemo(()=>{const h=a.steps.map((g,_)=>sw(_,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=Ix(c,{...Bx,enabled:i}),m=Ix(u,{...Bx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(cn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(cn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(cn,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function uw({meta:a}){return a.kind==="identity"?D.jsx(ow,{meta:a}):a.kind==="chain"?D.jsx(cw,{meta:a}):D.jsx(lw,{meta:a})}function fw({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Uo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(uw,{meta:a.meta})]})}function dw(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:hh.kicker}),D.jsx("h2",{className:"section-title personas__title",children:hh.title}),D.jsx("div",{className:"personas__grid",children:hh.items.map(a=>D.jsx(fw,{persona:a},a.title))})]})})}function hw(){const[a,e]=ke.useState(!1),[i,r]=ke.useState(!1),[o,c]=ke.useState("");return ke.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),ke.useEffect(()=>{const u=Bu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),ke.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(dm,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Bu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Ln.docs,children:"Docs"}),D.jsx(Uo,{href:Ln.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Bu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Ln.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function pw(){const a=ke.useRef(null),e=_m(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(gm,{text:sv.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:sv.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function mw(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(iw,{}),D.jsx(hw,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(yC,{cardAlpha:0,modalChassisAlpha:.8,cardSize:.8,subtitleFadeEffect:"fadeout",skipAnimationSpeed:1.2}),D.jsx(nw,{contentOffsetY:0,maskAlpha:.5}),D.jsx(pw,{}),D.jsx(ky,{}),D.jsx(dw,{}),D.jsx(qC,{}),D.jsx(Wy,{}),D.jsx(Vy,{})]}),D.jsx(jC,{})]})}Hy.createRoot(document.getElementById("root")).render(D.jsx(ke.StrictMode,{children:D.jsx(mw,{})}));
