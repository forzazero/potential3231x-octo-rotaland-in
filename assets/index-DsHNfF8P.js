(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Ud={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function oy(){if(M_)return gl;M_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return gl.Fragment=e,gl.jsx=i,gl.jsxs=i,gl}var y_;function ly(){return y_||(y_=1,Ud.exports=oy()),Ud.exports}var D=ly(),Od={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function cy(){if(E_)return ct;E_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(P,K,Se){this.props=P,this.context=K,this.refs=y,this.updater=Se||b}M.prototype.isReactComponent={},M.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=M.prototype;function z(P,K,Se){this.props=P,this.context=K,this.refs=y,this.updater=Se||b}var R=z.prototype=new I;R.constructor=z,w(R,M.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,K,Se){var Ae=Se.ref;return{$$typeof:a,type:P,key:K,ref:Ae!==void 0?Ae:null,props:Se}}function X(P,K){return N(P.type,K,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function j(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return K[Se]})}var ce=/\/+/g;function fe(P,K){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):K.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,K,Se,Ae,De){var ae=typeof P;(ae==="undefined"||ae==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(ae){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case a:case e:ye=!0;break;case g:return ye=P._init,F(ye(P._payload),K,Se,Ae,De)}}if(ye)return De=De(P),ye=Ae===""?"."+fe(P,0):Ae,O(De)?(Se="",ye!=null&&(Se=ye.replace(ce,"$&/")+"/"),F(De,K,Se,"",function(at){return at})):De!=null&&(V(De)&&(De=X(De,Se+(De.key==null||P&&P.key===De.key?"":(""+De.key).replace(ce,"$&/")+"/")+ye)),K.push(De)),1;ye=0;var Ee=Ae===""?".":Ae+":";if(O(P))for(var ke=0;ke<P.length;ke++)Ae=P[ke],ae=Ee+fe(Ae,ke),ye+=F(Ae,K,Se,ae,De);else if(ke=x(P),typeof ke=="function")for(P=ke.call(P),ke=0;!(Ae=P.next()).done;)Ae=Ae.value,ae=Ee+fe(Ae,ke++),ye+=F(Ae,K,Se,ae,De);else if(ae==="object"){if(typeof P.then=="function")return F(q(P),K,Se,Ae,De);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(P,K,Se){if(P==null)return P;var Ae=[],De=0;return F(P,Ae,"","",function(ae){return K.call(Se,ae,De++)}),Ae}function $(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var ge=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xe={map:H,forEach:function(P,K,Se){H(P,function(){K.apply(this,arguments)},Se)},count:function(P){var K=0;return H(P,function(){K++}),K},toArray:function(P){return H(P,function(K){return K})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ct.Activity=_,ct.Children=xe,ct.Component=M,ct.Fragment=i,ct.Profiler=o,ct.PureComponent=z,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ct.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ct.cache=function(P){return function(){return P.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(P,K,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=w({},P.props),De=P.key;if(K!=null)for(ae in K.key!==void 0&&(De=""+K.key),K)!T.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(Ae[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)Ae.children=Se;else if(1<ae){for(var ye=Array(ae),Ee=0;Ee<ae;Ee++)ye[Ee]=arguments[Ee+2];Ae.children=ye}return N(P.type,De,Ae)},ct.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ct.createElement=function(P,K,Se){var Ae,De={},ae=null;if(K!=null)for(Ae in K.key!==void 0&&(ae=""+K.key),K)T.call(K,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=K[Ae]);var ye=arguments.length-2;if(ye===1)De.children=Se;else if(1<ye){for(var Ee=Array(ye),ke=0;ke<ye;ke++)Ee[ke]=arguments[ke+2];De.children=Ee}if(P&&P.defaultProps)for(Ae in ye=P.defaultProps,ye)De[Ae]===void 0&&(De[Ae]=ye[Ae]);return N(P,ae,De)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(P){return{$$typeof:h,render:P}},ct.isValidElement=V,ct.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:$}},ct.memo=function(P,K){return{$$typeof:d,type:P,compare:K===void 0?null:K}},ct.startTransition=function(P){var K=B.T,Se={};B.T=Se;try{var Ae=P(),De=B.S;De!==null&&De(Se,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,ge)}catch(ae){ge(ae)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),B.T=K}},ct.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ct.use=function(P){return B.H.use(P)},ct.useActionState=function(P,K,Se){return B.H.useActionState(P,K,Se)},ct.useCallback=function(P,K){return B.H.useCallback(P,K)},ct.useContext=function(P){return B.H.useContext(P)},ct.useDebugValue=function(){},ct.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},ct.useEffect=function(P,K){return B.H.useEffect(P,K)},ct.useEffectEvent=function(P){return B.H.useEffectEvent(P)},ct.useId=function(){return B.H.useId()},ct.useImperativeHandle=function(P,K,Se){return B.H.useImperativeHandle(P,K,Se)},ct.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},ct.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},ct.useMemo=function(P,K){return B.H.useMemo(P,K)},ct.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},ct.useReducer=function(P,K,Se){return B.H.useReducer(P,K,Se)},ct.useRef=function(P){return B.H.useRef(P)},ct.useState=function(P){return B.H.useState(P)},ct.useSyncExternalStore=function(P,K,Se){return B.H.useSyncExternalStore(P,K,Se)},ct.useTransition=function(){return B.H.useTransition()},ct.version="19.2.7",ct}var b_;function Mp(){return b_||(b_=1,Od.exports=cy()),Od.exports}var We=Mp(),Pd={exports:{}},_l={},Id={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function uy(){return T_||(T_=1,(function(a){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var ge=$-1>>>1,xe=F[ge];if(0<o(xe,H))F[ge]=H,F[$]=xe,$=ge;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var ge=0,xe=F.length,P=xe>>>1;ge<P;){var K=2*(ge+1)-1,Se=F[K],Ae=K+1,De=F[Ae];if(0>o(Se,$))Ae<xe&&0>o(De,Se)?(F[ge]=De,F[Ae]=$,ge=Ae):(F[ge]=Se,F[K]=$,ge=K);else if(Ae<xe&&0>o(De,$))F[ge]=De,F[Ae]=$,ge=Ae;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=F)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function O(F){if(w=!1,R(F),!b)if(i(m)!==null)b=!0,L||(L=!0,j());else{var H=i(d);H!==null&&q(O,H.startTime-F)}}var L=!1,B=-1,T=5,N=-1;function X(){return y?!0:!(a.unstable_now()-N<T)}function V(){if(y=!1,L){var F=a.unstable_now();N=F;var H=!0;try{e:{b=!1,w&&(w=!1,I(B),B=-1),x=!0;var $=v;try{t:{for(R(F),_=i(m);_!==null&&!(_.expirationTime>F&&X());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,v=_.priorityLevel;var xe=ge(_.expirationTime<=F);if(F=a.unstable_now(),typeof xe=="function"){_.callback=xe,R(F),H=!0;break t}_===i(m)&&r(m),R(F)}else r(m);_=i(m)}if(_!==null)H=!0;else{var P=i(d);P!==null&&q(O,P.startTime-F),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?j():L=!1}}}var j;if(typeof z=="function")j=function(){z(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=V,j=function(){fe.postMessage(null)}}else j=function(){M(V,0)};function q(F,H){B=M(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(F,H,$){var ge=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:xe,sortIndex:-1},$>ge?(F.sortIndex=$,e(d,F),i(m)===null&&F===i(d)&&(w?(I(B),B=-1):w=!0,q(O,$-ge))):(F.sortIndex=xe,e(m,F),b||x||(b=!0,L||(L=!0,j()))),F},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(Fd)),Fd}var A_;function fy(){return A_||(A_=1,Id.exports=uy()),Id.exports}var Bd={exports:{}},ni={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function dy(){if(R_)return ni;R_=1;var a=Mp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ni.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},ni.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},ni.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},ni.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ni.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ni.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},ni.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ni.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},ni.requestFormReset=function(m){r.d.r(m)},ni.unstable_batchedUpdates=function(m,d){return m(d)},ni.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},ni.useFormStatus=function(){return u.H.useHostTransitionStatus()},ni.version="19.2.7",ni}var C_;function ix(){if(C_)return Bd.exports;C_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Bd.exports=dy(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function hy(){if(w_)return _l;w_=1;var a=fy(),e=Mp(),i=ix();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=p;break}if(C===l){S=!0,l=f,s=p;break}C=C.sibling}if(!S){for(C=p.child;C;){if(C===s){S=!0,s=p,l=f;break}if(C===l){S=!0,l=p,s=f;break}C=C.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var q=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],xe=-1;function P(t){return{current:t}}function K(t){0>xe||(t.current=ge[xe],ge[xe]=null,xe--)}function Se(t,n){xe++,ge[xe]=t.current,t.current=n}var Ae=P(null),De=P(null),ae=P(null),ye=P(null);function Ee(t,n){switch(Se(ae,n),Se(De,t),Se(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Xg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Xg(n),t=Wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ae),Se(Ae,t)}function ke(){K(Ae),K(De),K(ae)}function at(t){t.memoizedState!==null&&Se(ye,t);var n=Ae.current,s=Wg(n,t.type);n!==s&&(Se(De,t),Se(Ae,s))}function $e(t){De.current===t&&(K(Ae),K(De)),ye.current===t&&(K(ye),dl._currentValue=$)}var Jt,ft;function xt(t){if(Jt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",ft=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+ft}var gt=!1;function dt(t,n){if(!t||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(de){var le=de}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(de){le=de}t.call(Me.prototype)}}else{try{throw Error()}catch(de){le=de}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],C=p[1];if(S&&C){var G=S.split(`
`),oe=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===oe.length)for(l=G.length-1,f=oe.length-1;1<=l&&0<=f&&G[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==oe[f]){var _e=`
`+G[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?xt(s):""}function cn(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return xt("Activity");default:return""}}function un(t){try{var n="",s=null;do n+=cn(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var rn=Object.prototype.hasOwnProperty,gn=a.unstable_scheduleCallback,Ot=a.unstable_cancelCallback,on=a.unstable_shouldYield,Z=a.unstable_requestPaint,Vt=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,re=a.unstable_LowPriority,ue=a.unstable_IdlePriority,Re=a.log,Le=a.unstable_setDisableYieldValue,he=null,pe=null;function we(t){if(typeof Re=="function"&&Le(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(he,t)}catch{}}var Ge=Math.clz32?Math.clz32:et,Fe=Math.log,Oe=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Fe(t)/Oe|0)|0}var tt=256,st=262144,k=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=Te(l):(S&=C,S!==0?f=Te(S):s||(s=C&~t,s!==0&&(f=Te(s))))):(C=l&~p,C!==0?f=Te(C):S!==0?f=Te(S):s||(s=l&~t,s!==0&&(f=Te(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ln(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,oe=t.hiddenUpdates;for(s=S&~s;0<s;){var _e=31-Ge(s),Me=1<<_e;C[_e]=0,G[_e]=-1;var le=oe[_e];if(le!==null)for(oe[_e]=null,_e=0;_e<le.length;_e++){var de=le[_e];de!==null&&(de.lane&=-536870913)}s&=~Me}l!==0&&It(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function It(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ge(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ei(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function ti(t,n){var s=n&-n;return s=(s&42)!==0?1:ns(s),(s&(t.suspendedLanes|n))!==0?0:s}function ns(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function fa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function is(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function Ra(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var bi=Math.random().toString(36).slice(2),vn="__reactFiber$"+bi,wn="__reactProps$"+bi,Wn="__reactContainer$"+bi,da="__reactEvents$"+bi,Ca="__reactListeners$"+bi,Gs="__reactHandles$"+bi,Ce="__reactResources$"+bi,Be="__reactMarker$"+bi;function it(t){delete t[vn],delete t[wn],delete t[da],delete t[Ca],delete t[Gs]}function ht(t){var n=t[vn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Wn]||s[vn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Jg(t);t!==null;){if(s=t[vn])return s;t=Jg(t)}return n}t=s,s=t.parentNode}return null}function Nt(t){if(t=t[vn]||t[Wn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $t(t){var n=t[Ce];return n||(n=t[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Et(t){t[Be]=!0}var Yn=new Set,A={};function Y(t,n){ne(t,n),ne(t+"Capture",n)}function ne(t,n){for(A[t]=n,t=0;t<n.length;t++)Yn.add(n[t])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Ue={};function Ve(t){return rn.call(Ue,t)?!0:rn.call(ie,t)?!1:ee.test(t)?Ue[t]=!0:(ie[t]=!0,!1)}function Pe(t,n,s){if(Ve(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function qe(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ye(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function At(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(t,n,s,l,f,p,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,S,Je(n)):s!=null?Mt(t,S,Je(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Je(C):t.removeAttribute("name")}function Vn(t,n,s,l,f,p,S,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){wt(t);return}s=s!=null?""+Je(s):"",n=n!=null?""+Je(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),wt(t)}function Mt(t,n,s){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function En(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Je(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function hi(t,n,s){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Je(s):""}function Fn(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Je(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),wt(t)}function ri(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Wt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qt(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Wt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function oi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&qt(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&qt(t,p,n[p])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ji=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(t){return Ji.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pi(){}var as=null;function Do(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,Vs=null;function Lo(t){var n=Nt(t);if(n&&(t=n.stateNode)){var s=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ie(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+At(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[wn]||null;if(!f)throw Error(r(90));Ie(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&an(l)}break e;case"textarea":hi(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&En(t,!!s.multiple,n,!1)}}}var ks=!1;function Bl(t,n,s){if(ks)return t(n,s);ks=!0;try{var l=t(n);return l}finally{if(ks=!1,(ss!==null||Vs!==null)&&(Mc(),ss&&(n=ss,t=Vs,Vs=ss=null,Lo(n),t)))for(n=0;n<t.length;n++)Lo(t[n])}}function Xs(t,n){var s=t.stateNode;if(s===null)return null;var l=s[wn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(Ii)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){yr=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{yr=!1}var bn=null,mi=null,Bn=null;function ea(){if(Bn)return Bn;var t,n=mi,s=n.length,l,f="value"in bn?bn.value:bn.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return Bn=f.slice(t,1<l?1-l:void 0)}function qn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function Ws(){return!1}function Tn(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ta:Ws,this.isPropagationStopped=Ws,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),n}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Tn(gi),os=_({},gi,{view:0,detail:0}),sS=Tn(os),Ou,Pu,No,zl=_({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Ou=t.screenX-No.screenX,Pu=t.screenY-No.screenY):Pu=Ou=0,No=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),qp=Tn(zl),rS=_({},zl,{dataTransfer:0}),oS=Tn(rS),lS=_({},os,{relatedTarget:0}),Iu=Tn(lS),cS=_({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Tn(cS),fS=_({},gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dS=Tn(fS),hS=_({},gi,{data:0}),jp=Tn(hS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gS[t])?!!n[t]:!1}function Fu(){return _S}var vS=_({},os,{key:function(t){if(t.key){var n=pS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?qn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xS=Tn(vS),SS=_({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Tn(SS),MS=_({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),yS=Tn(MS),ES=_({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Tn(ES),TS=_({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AS=Tn(TS),RS=_({},gi,{newState:0,oldState:0}),CS=Tn(RS),wS=[9,13,27,32],Bu=Ii&&"CompositionEvent"in window,Uo=null;Ii&&"documentMode"in document&&(Uo=document.documentMode);var DS=Ii&&"TextEvent"in window&&!Uo,Kp=Ii&&(!Bu||Uo&&8<Uo&&11>=Uo),Qp=" ",Jp=!1;function $p(t,n){switch(t){case"keyup":return wS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function LS(t,n){switch(t){case"compositionend":return em(n);case"keypress":return n.which!==32?null:(Jp=!0,Qp);case"textInput":return t=n.data,t===Qp&&Jp?null:t;default:return null}}function NS(t,n){if(Er)return t==="compositionend"||!Bu&&$p(t,n)?(t=ea(),Bn=mi=bn=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kp&&n.locale!=="ko"?null:n.data;default:return null}}var US={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!US[t.type]:n==="textarea"}function nm(t,n,s,l){ss?Vs?Vs.push(l):Vs=[l]:ss=l,n=Cc(n,"onChange"),0<n.length&&(s=new rs("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Oo=null,Po=null;function OS(t){Bg(t,0)}function Hl(t){var n=kt(t);if(an(n))return t}function im(t,n){if(t==="change")return n}var am=!1;if(Ii){var zu;if(Ii){var Hu="oninput"in document;if(!Hu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Hu=typeof sm.oninput=="function"}zu=Hu}else zu=!1;am=zu&&(!document.documentMode||9<document.documentMode)}function rm(){Oo&&(Oo.detachEvent("onpropertychange",om),Po=Oo=null)}function om(t){if(t.propertyName==="value"&&Hl(Po)){var n=[];nm(n,Po,t,Do(t)),Bl(OS,n)}}function PS(t,n,s){t==="focusin"?(rm(),Oo=n,Po=s,Oo.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function IS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Po)}function FS(t,n){if(t==="click")return Hl(n)}function BS(t,n){if(t==="input"||t==="change")return Hl(n)}function zS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ai=typeof Object.is=="function"?Object.is:zS;function Io(t,n){if(Ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!rn.call(n,f)||!Ai(t[f],n[f]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,n){var s=lm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lm(s)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Xt(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var HS=Ii&&"documentMode"in document&&11>=document.documentMode,br=null,Vu=null,Fo=null,ku=!1;function dm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ku||br==null||br!==Xt(l)||(l=br,"selectionStart"in l&&Gu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fo&&Io(Fo,l)||(Fo=l,l=Cc(Vu,"onSelect"),0<l.length&&(n=new rs("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=br)))}function Ys(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Tr={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionrun:Ys("Transition","TransitionRun"),transitionstart:Ys("Transition","TransitionStart"),transitioncancel:Ys("Transition","TransitionCancel"),transitionend:Ys("Transition","TransitionEnd")},Xu={},hm={};Ii&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function qs(t){if(Xu[t])return Xu[t];if(!Tr[t])return t;var n=Tr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in hm)return Xu[t]=n[s];return t}var pm=qs("animationend"),mm=qs("animationiteration"),gm=qs("animationstart"),GS=qs("transitionrun"),VS=qs("transitionstart"),kS=qs("transitioncancel"),_m=qs("transitionend"),vm=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function na(t,n){vm.set(t,n),Y(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Fi=[],Ar=0,Yu=0;function Vl(){for(var t=Ar,n=Yu=Ar=0;n<t;){var s=Fi[n];Fi[n++]=null;var l=Fi[n];Fi[n++]=null;var f=Fi[n];Fi[n++]=null;var p=Fi[n];if(Fi[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&xm(s,f,p)}}function kl(t,n,s,l){Fi[Ar++]=t,Fi[Ar++]=n,Fi[Ar++]=s,Fi[Ar++]=l,Yu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qu(t,n,s,l){return kl(t,n,s,l),Xl(t)}function js(t,n){return kl(t,null,null,n),Xl(t)}function xm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ge(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Xl(t){if(50<sl)throw sl=0,id=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function XS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(t,n,s,l){return new XS(t,n,s,l)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wa(t,n){var s=t.alternate;return s===null?(s=Ri(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Sm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")ju(t)&&(S=1);else if(typeof t=="string")S=ZM(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Ri(31,s,n,f),t.elementType=N,t.lanes=p,t;case w:return Zs(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=Ri(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case O:return t=Ri(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=Ri(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case I:S=9;break e;case R:S=11;break e;case B:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Ri(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function Zs(t,n,s,l){return t=Ri(7,t,l,n),t.lanes=s,t}function Zu(t,n,s){return t=Ri(6,t,null,n),t.lanes=s,t}function Mm(t){var n=Ri(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,s){return n=Ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ym=new WeakMap;function Bi(t,n){if(typeof t=="object"&&t!==null){var s=ym.get(t);return s!==void 0?s:(n={value:t,source:n,stack:un(n)},ym.set(t,n),n)}return{value:t,source:n,stack:un(n)}}var Cr=[],wr=0,Yl=null,Bo=0,zi=[],Hi=0,ls=null,ha=1,pa="";function Da(t,n){Cr[wr++]=Bo,Cr[wr++]=Yl,Yl=t,Bo=n}function Em(t,n,s){zi[Hi++]=ha,zi[Hi++]=pa,zi[Hi++]=ls,ls=t;var l=ha;t=pa;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var p=32-Ge(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ha=1<<32-Ge(n)+f|s<<f|l,pa=p+t}else ha=1<<p|s<<f|l,pa=t}function Qu(t){t.return!==null&&(Da(t,1),Em(t,1,0))}function Ju(t){for(;t===Yl;)Yl=Cr[--wr],Cr[wr]=null,Bo=Cr[--wr],Cr[wr]=null;for(;t===ls;)ls=zi[--Hi],zi[Hi]=null,pa=zi[--Hi],zi[Hi]=null,ha=zi[--Hi],zi[Hi]=null}function bm(t,n){zi[Hi++]=ha,zi[Hi++]=pa,zi[Hi++]=ls,ha=n.id,pa=n.overflow,ls=t}var jn=null,fn=null,Dt=!1,cs=null,Gi=!1,$u=Error(r(519));function us(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Bi(n,t)),$u}function Tm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[vn]=t,n[wn]=l,s){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(s=0;s<ol.length;s++)Tt(ol[s],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),Vn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),Fn(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Vg(n.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),l.onScroll!=null&&Tt("scroll",n),l.onScrollEnd!=null&&Tt("scrollend",n),l.onClick!=null&&(n.onclick=pi),n=!0):n=!1,n||us(t,!0)}function Am(t){for(jn=t.return;jn;)switch(jn.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:jn=jn.return}}function Dr(t){if(t!==jn)return!1;if(!Dt)return Am(t),Dt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||vd(t.type,t.memoizedProps)),s=!s),s&&fn&&us(t),Am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=Qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=Qg(t)}else n===27?(n=fn,bs(t.type)?(t=Ed,Ed=null,fn=t):fn=n):fn=jn?ki(t.stateNode.nextSibling):null;return!0}function Ks(){fn=jn=null,Dt=!1}function ef(){var t=cs;return t!==null&&(Si===null?Si=t:Si.push.apply(Si,t),cs=null),t}function zo(t){cs===null?cs=[t]:cs.push(t)}var tf=P(null),Qs=null,La=null;function fs(t,n,s){Se(tf,n._currentValue),n._currentValue=s}function Na(t){t._currentValue=tf.current,K(tf)}function nf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function af(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var G=0;G<n.length;G++)if(C.context===n[G]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),nf(p.return,s,t),l||(S=null);break e}p=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),nf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Lr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=f.type;Ai(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(dl):t=[dl])}f=f.return}t!==null&&af(n,t,s,l),n.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!Ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Js(t){Qs=t,La=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return Rm(Qs,t)}function jl(t,n){return Qs===null&&Js(t),Rm(t,n)}function Rm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},La===null){if(t===null)throw Error(r(308));La=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else La=La.next=n;return s}var WS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},YS=a.unstable_scheduleCallback,qS=a.unstable_NormalPriority,Dn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new WS,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&YS(qS,function(){t.controller.abort()})}var Go=null,rf=0,Nr=0,Ur=null;function jS(t,n){if(Go===null){var s=Go=[];rf=0,Nr=cd(),Ur={status:"pending",value:void 0,then:function(l){s.push(l)}}}return rf++,n.then(Cm,Cm),n}function Cm(){if(--rf===0&&Go!==null){Ur!==null&&(Ur.status="fulfilled");var t=Go;Go=null,Nr=0,Ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ZS(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var wm=F.S;F.S=function(t,n){dg=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jS(t,n),wm!==null&&wm(t,n)};var $s=P(null);function of(){var t=$s.current;return t!==null?t:sn.pooledCache}function Zl(t,n){n===null?Se($s,$s.current):Se($s,n.pool)}function Dm(){var t=of();return t===null?null:{parent:Dn._currentValue,pool:t}}var Or=Error(r(460)),lf=Error(r(474)),Kl=Error(r(542)),Ql={then:function(){}};function Lm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(pi,pi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t;default:if(typeof n.status=="string")n.then(pi,pi);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t}throw tr=n,Or}}function er(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(tr=s,Or):s}}var tr=null;function Um(){if(tr===null)throw Error(r(459));var t=tr;return tr=null,t}function Om(t){if(t===Or||t===Kl)throw Error(r(483))}var Pr=null,Vo=0;function Jl(t){var n=Vo;return Vo+=1,Pr===null&&(Pr=[]),Nm(Pr,t,n)}function ko(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){function n(J,W){if(t){var se=J.deletions;se===null?(J.deletions=[W],J.flags|=16):se.push(W)}}function s(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function l(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=wa(J,W),J.index=0,J.sibling=null,J}function p(J,W,se){return J.index=se,t?(se=J.alternate,se!==null?(se=se.index,se<W?(J.flags|=67108866,W):se):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function S(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function C(J,W,se,ve){return W===null||W.tag!==6?(W=Zu(se,J.mode,ve),W.return=J,W):(W=f(W,se),W.return=J,W)}function G(J,W,se,ve){var nt=se.type;return nt===w?_e(J,W,se.props.children,ve,se.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&er(nt)===W.type)?(W=f(W,se.props),ko(W,se),W.return=J,W):(W=Wl(se.type,se.key,se.props,null,J.mode,ve),ko(W,se),W.return=J,W)}function oe(J,W,se,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Ku(se,J.mode,ve),W.return=J,W):(W=f(W,se.children||[]),W.return=J,W)}function _e(J,W,se,ve,nt){return W===null||W.tag!==7?(W=Zs(se,J.mode,ve,nt),W.return=J,W):(W=f(W,se),W.return=J,W)}function Me(J,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Zu(""+W,J.mode,se),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return se=Wl(W.type,W.key,W.props,null,J.mode,se),ko(se,W),se.return=J,se;case b:return W=Ku(W,J.mode,se),W.return=J,W;case T:return W=er(W),Me(J,W,se)}if(q(W)||j(W))return W=Zs(W,J.mode,se,null),W.return=J,W;if(typeof W.then=="function")return Me(J,Jl(W),se);if(W.$$typeof===z)return Me(J,jl(J,W),se);$l(J,W)}return null}function le(J,W,se,ve){var nt=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:C(J,W,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===nt?G(J,W,se,ve):null;case b:return se.key===nt?oe(J,W,se,ve):null;case T:return se=er(se),le(J,W,se,ve)}if(q(se)||j(se))return nt!==null?null:_e(J,W,se,ve,null);if(typeof se.then=="function")return le(J,W,Jl(se),ve);if(se.$$typeof===z)return le(J,W,jl(J,se),ve);$l(J,se)}return null}function de(J,W,se,ve,nt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return J=J.get(se)||null,C(W,J,""+ve,nt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case x:return J=J.get(ve.key===null?se:ve.key)||null,G(W,J,ve,nt);case b:return J=J.get(ve.key===null?se:ve.key)||null,oe(W,J,ve,nt);case T:return ve=er(ve),de(J,W,se,ve,nt)}if(q(ve)||j(ve))return J=J.get(se)||null,_e(W,J,ve,nt,null);if(typeof ve.then=="function")return de(J,W,se,Jl(ve),nt);if(ve.$$typeof===z)return de(J,W,se,jl(W,ve),nt);$l(W,ve)}return null}function Ze(J,W,se,ve){for(var nt=null,zt=null,Qe=W,_t=W=0,Ct=null;Qe!==null&&_t<se.length;_t++){Qe.index>_t?(Ct=Qe,Qe=null):Ct=Qe.sibling;var Ht=le(J,Qe,se[_t],ve);if(Ht===null){Qe===null&&(Qe=Ct);break}t&&Qe&&Ht.alternate===null&&n(J,Qe),W=p(Ht,W,_t),zt===null?nt=Ht:zt.sibling=Ht,zt=Ht,Qe=Ct}if(_t===se.length)return s(J,Qe),Dt&&Da(J,_t),nt;if(Qe===null){for(;_t<se.length;_t++)Qe=Me(J,se[_t],ve),Qe!==null&&(W=p(Qe,W,_t),zt===null?nt=Qe:zt.sibling=Qe,zt=Qe);return Dt&&Da(J,_t),nt}for(Qe=l(Qe);_t<se.length;_t++)Ct=de(Qe,J,_t,se[_t],ve),Ct!==null&&(t&&Ct.alternate!==null&&Qe.delete(Ct.key===null?_t:Ct.key),W=p(Ct,W,_t),zt===null?nt=Ct:zt.sibling=Ct,zt=Ct);return t&&Qe.forEach(function(ws){return n(J,ws)}),Dt&&Da(J,_t),nt}function rt(J,W,se,ve){if(se==null)throw Error(r(151));for(var nt=null,zt=null,Qe=W,_t=W=0,Ct=null,Ht=se.next();Qe!==null&&!Ht.done;_t++,Ht=se.next()){Qe.index>_t?(Ct=Qe,Qe=null):Ct=Qe.sibling;var ws=le(J,Qe,Ht.value,ve);if(ws===null){Qe===null&&(Qe=Ct);break}t&&Qe&&ws.alternate===null&&n(J,Qe),W=p(ws,W,_t),zt===null?nt=ws:zt.sibling=ws,zt=ws,Qe=Ct}if(Ht.done)return s(J,Qe),Dt&&Da(J,_t),nt;if(Qe===null){for(;!Ht.done;_t++,Ht=se.next())Ht=Me(J,Ht.value,ve),Ht!==null&&(W=p(Ht,W,_t),zt===null?nt=Ht:zt.sibling=Ht,zt=Ht);return Dt&&Da(J,_t),nt}for(Qe=l(Qe);!Ht.done;_t++,Ht=se.next())Ht=de(Qe,J,_t,Ht.value,ve),Ht!==null&&(t&&Ht.alternate!==null&&Qe.delete(Ht.key===null?_t:Ht.key),W=p(Ht,W,_t),zt===null?nt=Ht:zt.sibling=Ht,zt=Ht);return t&&Qe.forEach(function(ry){return n(J,ry)}),Dt&&Da(J,_t),nt}function nn(J,W,se,ve){if(typeof se=="object"&&se!==null&&se.type===w&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var nt=se.key;W!==null;){if(W.key===nt){if(nt=se.type,nt===w){if(W.tag===7){s(J,W.sibling),ve=f(W,se.props.children),ve.return=J,J=ve;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&er(nt)===W.type){s(J,W.sibling),ve=f(W,se.props),ko(ve,se),ve.return=J,J=ve;break e}s(J,W);break}else n(J,W);W=W.sibling}se.type===w?(ve=Zs(se.props.children,J.mode,ve,se.key),ve.return=J,J=ve):(ve=Wl(se.type,se.key,se.props,null,J.mode,ve),ko(ve,se),ve.return=J,J=ve)}return S(J);case b:e:{for(nt=se.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){s(J,W.sibling),ve=f(W,se.children||[]),ve.return=J,J=ve;break e}else{s(J,W);break}else n(J,W);W=W.sibling}ve=Ku(se,J.mode,ve),ve.return=J,J=ve}return S(J);case T:return se=er(se),nn(J,W,se,ve)}if(q(se))return Ze(J,W,se,ve);if(j(se)){if(nt=j(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),rt(J,W,se,ve)}if(typeof se.then=="function")return nn(J,W,Jl(se),ve);if(se.$$typeof===z)return nn(J,W,jl(J,se),ve);$l(J,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(s(J,W.sibling),ve=f(W,se),ve.return=J,J=ve):(s(J,W),ve=Zu(se,J.mode,ve),ve.return=J,J=ve),S(J)):s(J,W)}return function(J,W,se,ve){try{Vo=0;var nt=nn(J,W,se,ve);return Pr=null,nt}catch(Qe){if(Qe===Or||Qe===Kl)throw Qe;var zt=Ri(29,Qe,null,J.mode);return zt.lanes=ve,zt.return=J,zt}finally{}}}var nr=Pm(!0),Im=Pm(!1),ds=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Yt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Xl(t),xm(t,null,s),n}return kl(t,l,n,s),Xl(t)}function Xo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ei(t,s)}}function ff(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var df=!1;function Wo(){if(df){var t=Ur;if(t!==null)throw t}}function Yo(t,n,s,l){df=!1;var f=t.updateQueue;ds=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,oe=G.next;G.next=null,S===null?p=oe:S.next=oe,S=G;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,C=_e.lastBaseUpdate,C!==S&&(C===null?_e.firstBaseUpdate=oe:C.next=oe,_e.lastBaseUpdate=G))}if(p!==null){var Me=f.baseState;S=0,_e=oe=G=null,C=p;do{var le=C.lane&-536870913,de=le!==C.lane;if(de?(Rt&le)===le:(l&le)===le){le!==0&&le===Nr&&(df=!0),_e!==null&&(_e=_e.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=t,rt=C;le=n;var nn=s;switch(rt.tag){case 1:if(Ze=rt.payload,typeof Ze=="function"){Me=Ze.call(nn,Me,le);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=rt.payload,le=typeof Ze=="function"?Ze.call(nn,Me,le):Ze,le==null)break e;Me=_({},Me,le);break e;case 2:ds=!0}}le=C.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},_e===null?(oe=_e=de,G=Me):_e=_e.next=de,S|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;de=C,C=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);_e===null&&(G=Me),f.baseState=G,f.firstBaseUpdate=oe,f.lastBaseUpdate=_e,p===null&&(f.shared.lanes=0),xs|=S,t.lanes=S,t.memoizedState=Me}}function Fm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Bm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Fm(s[t],n)}var Ir=P(null),ec=P(0);function zm(t,n){t=Ga,Se(ec,t),Se(Ir,n),Ga=t|n.baseLanes}function hf(){Se(ec,Ga),Se(Ir,Ir.current)}function pf(){Ga=ec.current,K(Ir),K(ec)}var Ci=P(null),Vi=null;function ms(t){var n=t.alternate;Se(An,An.current&1),Se(Ci,t),Vi===null&&(n===null||Ir.current!==null||n.memoizedState!==null)&&(Vi=t)}function mf(t){Se(An,An.current),Se(Ci,t),Vi===null&&(Vi=t)}function Hm(t){t.tag===22?(Se(An,An.current),Se(Ci,t),Vi===null&&(Vi=t)):gs()}function gs(){Se(An,An.current),Se(Ci,Ci.current)}function wi(t){K(Ci),Vi===t&&(Vi=null),K(An)}var An=P(0);function tc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Md(s)||yd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ua=0,mt=null,en=null,Ln=null,nc=!1,Fr=!1,ir=!1,ic=0,qo=0,Br=null,KS=0;function xn(){throw Error(r(321))}function gf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Ai(t[s],n[s]))return!1;return!0}function _f(t,n,s,l,f,p){return Ua=p,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?E0:Nf,ir=!1,p=s(l,f),ir=!1,Fr&&(p=Vm(n,s,l,f)),Gm(t),p}function Gm(t){F.H=Ko;var n=en!==null&&en.next!==null;if(Ua=0,Ln=en=mt=null,nc=!1,qo=0,Br=null,n)throw Error(r(300));t===null||Nn||(t=t.dependencies,t!==null&&ql(t)&&(Nn=!0))}function Vm(t,n,s,l){mt=t;var f=0;do{if(Fr&&(Br=null),qo=0,Fr=!1,25<=f)throw Error(r(301));if(f+=1,Ln=en=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=b0,p=n(s,l)}while(Fr);return p}function QS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?jo(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(mt.flags|=1024),n}function vf(){var t=ic!==0;return ic=0,t}function xf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Sf(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}Ua=0,Ln=en=mt=null,Fr=!1,qo=ic=0,Br=null}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?mt.memoizedState=Ln=t:Ln=Ln.next=t,Ln}function Rn(){if(en===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=Ln===null?mt.memoizedState:Ln.next;if(n!==null)Ln=n,en=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Ln===null?mt.memoizedState=Ln=t:Ln=Ln.next=t}return Ln}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(t){var n=qo;return qo+=1,Br===null&&(Br=[]),t=Nm(Br,t,n),n=mt,(Ln===null?n.memoizedState:Ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?E0:Nf),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jo(t);if(t.$$typeof===z)return Zn(t)}throw Error(r(438,String(t)))}function Mf(t){var n=null,s=mt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=ac(),mt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function Oa(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=Rn();return yf(n,en,t)}function yf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var C=S=null,G=null,oe=n,_e=!1;do{var Me=oe.lane&-536870913;if(Me!==oe.lane?(Rt&Me)===Me:(Ua&Me)===Me){var le=oe.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Me===Nr&&(_e=!0);else if((Ua&le)===le){oe=oe.next,le===Nr&&(_e=!0);continue}else Me={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(C=G=Me,S=p):G=G.next=Me,mt.lanes|=le,xs|=le;Me=oe.action,ir&&s(p,Me),p=oe.hasEagerState?oe.eagerState:s(p,Me)}else le={lane:Me,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(C=G=le,S=p):G=G.next=le,mt.lanes|=Me,xs|=Me;oe=oe.next}while(oe!==null&&oe!==n);if(G===null?S=p:G.next=C,!Ai(p,t.memoizedState)&&(Nn=!0,_e&&(s=Ur,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ef(t){var n=Rn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);Ai(p,n.memoizedState)||(Nn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function km(t,n,s){var l=mt,f=Rn(),p=Dt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!Ai((en||f).memoizedState,s);if(S&&(f.memoizedState=s,Nn=!0),f=f.queue,Af(Ym.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Ln!==null&&Ln.memoizedState.tag&1){if(l.flags|=2048,zr(9,{destroy:void 0},Wm.bind(null,l,f,s,n),null),sn===null)throw Error(r(349));p||(Ua&127)!==0||Xm(l,n,s)}return s}function Xm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=mt.updateQueue,n===null?(n=ac(),mt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Wm(t,n,s,l){n.value=s,n.getSnapshot=l,qm(n)&&jm(t)}function Ym(t,n,s){return s(function(){qm(n)&&jm(t)})}function qm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Ai(t,s)}catch{return!0}}function jm(t){var n=js(t,2);n!==null&&Mi(n,t,2)}function bf(t){var n=li();if(typeof t=="function"){var s=t;if(t=s(),ir){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},n}function Zm(t,n,s,l){return t.baseState=s,yf(t,en,typeof l=="function"?l:Oa)}function JS(t,n,s,l,f){if(cc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};F.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,Km(n,p)):(p.next=s.next,n.pending=s.next=p)}}function Km(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=F.T,S={};F.T=S;try{var C=s(f,l),G=F.S;G!==null&&G(S,C),Qm(t,n,C)}catch(oe){Tf(t,n,oe)}finally{p!==null&&S.types!==null&&(p.types=S.types),F.T=p}}else try{p=s(f,l),Qm(t,n,p)}catch(oe){Tf(t,n,oe)}}function Qm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Jm(t,n,l)},function(l){return Tf(t,n,l)}):Jm(t,n,s)}function Jm(t,n,s){n.status="fulfilled",n.value=s,$m(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Km(t,s)))}function Tf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,$m(n),n=n.next;while(n!==l)}t.action=null}function $m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function e0(t,n){return n}function t0(t,n){if(Dt){var s=sn.formState;if(s!==null){e:{var l=mt;if(Dt){if(fn){t:{for(var f=fn,p=Gi;f.nodeType!==8;){if(!p){f=null;break t}if(f=ki(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){fn=ki(f.nextSibling),l=f.data==="F!";break e}}us(l)}l=!1}l&&(n=s[0])}}return s=li(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:n},s.queue=l,s=S0.bind(null,mt,l),l.dispatch=s,l=bf(!1),p=Lf.bind(null,mt,!1,l.queue),l=li(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=JS.bind(null,mt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function n0(t){var n=Rn();return i0(n,en,t)}function i0(t,n,s){if(n=yf(t,n,e0)[0],t=rc(Oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=jo(n)}catch(S){throw S===Or?Kl:S}else l=n;n=Rn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(mt.flags|=2048,zr(9,{destroy:void 0},$S.bind(null,f,s),null)),[l,p,t]}function $S(t,n){t.action=n}function a0(t){var n=Rn(),s=en;if(s!==null)return i0(n,s,t);Rn(),n=n.memoizedState,s=Rn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function zr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=mt.updateQueue,n===null&&(n=ac(),mt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function s0(){return Rn().memoizedState}function oc(t,n,s,l){var f=li();mt.flags|=t,f.memoizedState=zr(1|n,{destroy:void 0},s,l===void 0?null:l)}function lc(t,n,s,l){var f=Rn();l=l===void 0?null:l;var p=f.memoizedState.inst;en!==null&&l!==null&&gf(l,en.memoizedState.deps)?f.memoizedState=zr(n,p,s,l):(mt.flags|=t,f.memoizedState=zr(1|n,p,s,l))}function r0(t,n){oc(8390656,8,t,n)}function Af(t,n){lc(2048,8,t,n)}function eM(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=ac(),mt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function o0(t){var n=Rn().memoizedState;return eM({ref:n,nextImpl:t}),function(){if((Yt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function l0(t,n){return lc(4,2,t,n)}function c0(t,n){return lc(4,4,t,n)}function u0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function f0(t,n,s){s=s!=null?s.concat([t]):null,lc(4,4,u0.bind(null,n,t),s)}function Rf(){}function d0(t,n){var s=Rn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&gf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function h0(t,n){var s=Rn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&gf(n,l[1]))return l[0];if(l=t(),ir){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l}function Cf(t,n,s){return s===void 0||(Ua&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=pg(),mt.lanes|=t,xs|=t,s)}function p0(t,n,s,l){return Ai(s,n)?s:Ir.current!==null?(t=Cf(t,s,l),Ai(t,n)||(Nn=!0),t):(Ua&42)===0||(Ua&1073741824)!==0&&(Rt&261930)===0?(Nn=!0,t.memoizedState=s):(t=pg(),mt.lanes|=t,xs|=t,n)}function m0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=F.T,C={};F.T=C,Lf(t,!1,n,s);try{var G=f(),oe=F.S;if(oe!==null&&oe(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _e=ZS(G,l);Zo(t,n,_e,Ni(t))}else Zo(t,n,l,Ni(t))}catch(Me){Zo(t,n,{then:function(){},status:"rejected",reason:Me},Ni())}finally{H.p=p,S!==null&&C.types!==null&&(S.types=C.types),F.T=S}}function tM(){}function wf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=g0(t).queue;m0(t,f,n,$,s===null?tM:function(){return _0(t),s(l)})}function g0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _0(t){var n=g0(t);n.next===null&&(n=t.alternate.memoizedState),Zo(t,n.next.queue,{},Ni())}function Df(){return Zn(dl)}function v0(){return Rn().memoizedState}function x0(){return Rn().memoizedState}function nM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ni();t=hs(s);var l=ps(n,t,s);l!==null&&(Mi(l,n,s),Xo(l,n,s)),n={cache:sf()},t.payload=n;return}n=n.return}}function iM(t,n,s){var l=Ni();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(t)?M0(n,s):(s=qu(t,n,s,l),s!==null&&(Mi(s,t,l),y0(s,n,l)))}function S0(t,n,s){var l=Ni();Zo(t,n,s,l)}function Zo(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(cc(t))M0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,C=p(S,s);if(f.hasEagerState=!0,f.eagerState=C,Ai(C,S))return kl(t,n,f,0),sn===null&&Vl(),!1}catch{}finally{}if(s=qu(t,n,f,l),s!==null)return Mi(s,t,l),y0(s,n,l),!0}return!1}function Lf(t,n,s,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(r(479))}else n=qu(t,s,l,2),n!==null&&Mi(n,t,2)}function cc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function M0(t,n){Fr=nc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function y0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ei(t,s)}}var Ko={readContext:Zn,use:sc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};Ko.useEffectEvent=xn;var E0={readContext:Zn,use:sc,useCallback:function(t,n){return li().memoizedState=[t,n===void 0?null:n],t},useContext:Zn,useEffect:r0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,oc(4194308,4,u0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var s=li();n=n===void 0?null:n;var l=t();if(ir){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=li();if(s!==void 0){var f=s(n);if(ir){we(!0);try{s(n)}finally{we(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=iM.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var n=li();return t={current:t},n.memoizedState=t},useState:function(t){t=bf(t);var n=t.queue,s=S0.bind(null,mt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Rf,useDeferredValue:function(t,n){var s=li();return Cf(s,t,n)},useTransition:function(){var t=bf(!1);return t=m0.bind(null,mt,t.queue,!0,!1),li().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=mt,f=li();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),sn===null)throw Error(r(349));(Rt&127)!==0||Xm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,r0(Ym.bind(null,l,p,t),[t]),l.flags|=2048,zr(9,{destroy:void 0},Wm.bind(null,l,p,s,n),null),s},useId:function(){var t=li(),n=sn.identifierPrefix;if(Dt){var s=pa,l=ha;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=ic++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=KS++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Df,useFormState:t0,useActionState:t0,useOptimistic:function(t){var n=li();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Lf.bind(null,mt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Mf,useCacheRefresh:function(){return li().memoizedState=nM.bind(null,mt)},useEffectEvent:function(t){var n=li(),s={impl:t};return n.memoizedState=s,function(){if((Yt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Nf={readContext:Zn,use:sc,useCallback:d0,useContext:Zn,useEffect:Af,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:rc,useRef:s0,useState:function(){return rc(Oa)},useDebugValue:Rf,useDeferredValue:function(t,n){var s=Rn();return p0(s,en.memoizedState,t,n)},useTransition:function(){var t=rc(Oa)[0],n=Rn().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:km,useId:v0,useHostTransitionStatus:Df,useFormState:n0,useActionState:n0,useOptimistic:function(t,n){var s=Rn();return Zm(s,en,t,n)},useMemoCache:Mf,useCacheRefresh:x0};Nf.useEffectEvent=o0;var b0={readContext:Zn,use:sc,useCallback:d0,useContext:Zn,useEffect:Af,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:Ef,useRef:s0,useState:function(){return Ef(Oa)},useDebugValue:Rf,useDeferredValue:function(t,n){var s=Rn();return en===null?Cf(s,t,n):p0(s,en.memoizedState,t,n)},useTransition:function(){var t=Ef(Oa)[0],n=Rn().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:km,useId:v0,useHostTransitionStatus:Df,useFormState:a0,useActionState:a0,useOptimistic:function(t,n){var s=Rn();return en!==null?Zm(s,en,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:x0};b0.useEffectEvent=o0;function Uf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Of={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ni(),f=hs(l);f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(Mi(n,t,l),Xo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ni(),f=hs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(Mi(n,t,l),Xo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ni(),l=hs(s);l.tag=2,n!=null&&(l.callback=n),n=ps(t,l,s),n!==null&&(Mi(n,t,s),Xo(n,t,s))}};function T0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Io(s,l)||!Io(f,p):!0}function A0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Of.enqueueReplaceState(n,n.state,null)}function ar(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function R0(t){Gl(t)}function C0(t){console.error(t)}function w0(t){Gl(t)}function uc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function D0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Pf(t,n,s){return s=hs(s),s.tag=3,s.payload={element:null},s.callback=function(){uc(t,n)},s}function L0(t){return t=hs(t),t.tag=3,t}function N0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){D0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){D0(n,s,l),typeof f!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function aM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Lr(n,s,f,!0),s=Ci.current,s!==null){switch(s.tag){case 31:case 13:return Vi===null?yc():s.alternate===null&&Sn===0&&(Sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ql?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),rd(t,l,f)),!1;case 22:return s.flags|=65536,l===Ql?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),rd(t,l,f)),!1}throw Error(r(435,s.tag))}return rd(t,l,f),yc(),!1}if(Dt)return n=Ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==$u&&(t=Error(r(422),{cause:l}),zo(Bi(t,s)))):(l!==$u&&(n=Error(r(423),{cause:l}),zo(Bi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Bi(l,s),f=Pf(t.stateNode,l,f),ff(t,f),Sn!==4&&(Sn=2)),!1;var p=Error(r(520),{cause:l});if(p=Bi(p,s),al===null?al=[p]:al.push(p),Sn!==4&&(Sn=2),n===null)return!0;l=Bi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Pf(s.stateNode,l,t),ff(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ss===null||!Ss.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=L0(f),N0(f,t,s,l),ff(s,f),!1}s=s.return}while(s!==null);return!1}var If=Error(r(461)),Nn=!1;function Kn(t,n,s,l){n.child=t===null?Im(n,null,s,l):nr(n,t.child,s,l)}function U0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Js(n),l=_f(t,n,s,S,p,f),C=vf(),t!==null&&!Nn?(xf(t,n,f),Pa(t,n,f)):(Dt&&C&&Qu(n),n.flags|=1,Kn(t,n,l,f),n.child)}function O0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!ju(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,P0(t,n,p,l,f)):(t=Wl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Xf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Io,s(S,l)&&t.ref===n.ref)return Pa(t,n,f)}return n.flags|=1,t=wa(p,l),t.ref=n.ref,t.return=n,n.child=t}function P0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Io(p,l)&&t.ref===n.ref)if(Nn=!1,n.pendingProps=l=p,Xf(t,f))(t.flags&131072)!==0&&(Nn=!0);else return n.lanes=t.lanes,Pa(t,n,f)}return Ff(t,n,s,l,f)}function I0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return F0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,p!==null?p.cachePool:null),p!==null?zm(n,p):hf(),Hm(n);else return l=n.lanes=536870912,F0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Zl(n,p.cachePool),zm(n,p),gs(),n.memoizedState=null):(t!==null&&Zl(n,null),hf(),gs());return Kn(t,n,f,s),n.child}function Qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function F0(t,n,s,l,f){var p=of();return p=p===null?null:{parent:Dn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&Zl(n,null),hf(),Hm(n),t!==null&&Lr(t,n,l,!0),n.childLanes=f,null}function fc(t,n){return n=hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function B0(t,n,s){return nr(n,t.child,null,s),t=fc(n,n.pendingProps),t.flags|=2,wi(n),n.memoizedState=null,t}function sM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=fc(n,l),n.lanes=536870912,Qo(null,t);if(mf(n),(t=fn)?(t=Kg(t,Gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Mm(t),s.return=n,n.child=s,jn=n,fn=null)):t=null,t===null)throw us(n);return n.lanes=536870912,null}return fc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(mf(n),f)if(n.flags&256)n.flags&=-257,n=B0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Nn||Lr(t,n,s,!1),f=(s&t.childLanes)!==0,Nn||f){if(l=sn,l!==null&&(S=ti(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,js(t,S),Mi(l,t,S),If;yc(),n=B0(t,n,s)}else t=p.treeContext,fn=ki(S.nextSibling),jn=n,Dt=!0,cs=null,Gi=!1,t!==null&&bm(n,t),n=fc(n,l),n.flags|=4096;return n}return t=wa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Ff(t,n,s,l,f){return Js(n),s=_f(t,n,s,l,void 0,f),l=vf(),t!==null&&!Nn?(xf(t,n,f),Pa(t,n,f)):(Dt&&l&&Qu(n),n.flags|=1,Kn(t,n,s,f),n.child)}function z0(t,n,s,l,f,p){return Js(n),n.updateQueue=null,s=Vm(n,l,s,f),Gm(t),l=vf(),t!==null&&!Nn?(xf(t,n,p),Pa(t,n,p)):(Dt&&l&&Qu(n),n.flags|=1,Kn(t,n,s,p),n.child)}function H0(t,n,s,l,f){if(Js(n),n.stateNode===null){var p=Rr,S=s.contextType;typeof S=="object"&&S!==null&&(p=Zn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Of,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},cf(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?Zn(S):Rr,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Uf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Of.enqueueReplaceState(p,p.state,null),Yo(n,l,p,f),Wo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,G=ar(s,C);p.props=G;var oe=p.context,_e=s.contextType;S=Rr,typeof _e=="object"&&_e!==null&&(S=Zn(_e));var Me=s.getDerivedStateFromProps;_e=typeof Me=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,_e||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||oe!==S)&&A0(n,p,l,S),ds=!1;var le=n.memoizedState;p.state=le,Yo(n,l,p,f),Wo(),oe=n.memoizedState,C||le!==oe||ds?(typeof Me=="function"&&(Uf(n,s,Me,l),oe=n.memoizedState),(G=ds||T0(n,s,G,l,le,oe,S))?(_e||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=oe),p.props=l,p.state=oe,p.context=S,l=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,uf(t,n),S=n.memoizedProps,_e=ar(s,S),p.props=_e,Me=n.pendingProps,le=p.context,oe=s.contextType,G=Rr,typeof oe=="object"&&oe!==null&&(G=Zn(oe)),C=s.getDerivedStateFromProps,(oe=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Me||le!==G)&&A0(n,p,l,G),ds=!1,le=n.memoizedState,p.state=le,Yo(n,l,p,f),Wo();var de=n.memoizedState;S!==Me||le!==de||ds||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof C=="function"&&(Uf(n,s,C,l),de=n.memoizedState),(_e=ds||T0(n,s,_e,l,le,de,G)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(oe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),p.props=l,p.state=de,p.context=G,l=_e):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,dc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=nr(n,t.child,null,f),n.child=nr(n,null,s,f)):Kn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Pa(t,n,f),t}function G0(t,n,s,l){return Ks(),n.flags|=256,Kn(t,n,s,l),n.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(t){return{baseLanes:t,cachePool:Dm()}}function Hf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Li),t}function V0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(f?ms(n):gs(),(t=fn)?(t=Kg(t,Gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Mm(t),s.return=n,n.child=s,jn=n,fn=null)):t=null,t===null)throw us(n);return yd(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(gs(),f=n.mode,C=hc({mode:"hidden",children:C},f),l=Zs(l,f,s,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=zf(s),l.childLanes=Hf(t,S,s),n.memoizedState=Bf,Qo(null,l)):(ms(n),Gf(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(p)n.flags&256?(ms(n),n.flags&=-257,n=Vf(t,n,s)):n.memoizedState!==null?(gs(),n.child=t.child,n.flags|=128,n=null):(gs(),C=l.fallback,f=n.mode,l=hc({mode:"visible",children:l.children},f),C=Zs(C,f,s,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,nr(n,t.child,null,s),l=n.child,l.memoizedState=zf(s),l.childLanes=Hf(t,S,s),n.memoizedState=Bf,n=Qo(null,l));else if(ms(n),yd(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var oe=S.dgst;S=oe,l=Error(r(419)),l.stack="",l.digest=S,zo({value:l,source:null,stack:null}),n=Vf(t,n,s)}else if(Nn||Lr(t,n,s,!1),S=(s&t.childLanes)!==0,Nn||S){if(S=sn,S!==null&&(l=ti(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,js(t,l),Mi(S,t,l),If;Md(C)||yc(),n=Vf(t,n,s)}else Md(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,fn=ki(C.nextSibling),jn=n,Dt=!0,cs=null,Gi=!1,t!==null&&bm(n,t),n=Gf(n,l.children),n.flags|=4096);return n}return f?(gs(),C=l.fallback,f=n.mode,G=t.child,oe=G.sibling,l=wa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,oe!==null?C=wa(oe,C):(C=Zs(C,f,s,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,Qo(null,l),l=n.child,C=t.child.memoizedState,C===null?C=zf(s):(f=C.cachePool,f!==null?(G=Dn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Dm(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Hf(t,S,s),n.memoizedState=Bf,Qo(t.child,l)):(ms(n),s=t.child,t=s.sibling,s=wa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Gf(t,n){return n=hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hc(t,n){return t=Ri(22,t,null,n),t.lanes=0,t}function Vf(t,n,s){return nr(n,t.child,null,s),t=Gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function k0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),nf(t.return,n,s)}function kf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function X0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=An.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,Se(An,S),Kn(t,n,l,s),l=Dt?Bo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k0(t,s,n);else if(t.tag===19)k0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&tc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),kf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&tc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}kf(n,!0,s,null,p,l);break;case"together":kf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Pa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),xs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Lr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=wa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=wa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function rM(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),fs(n,Dn,t.memoizedState.cache),Ks();break;case 27:case 5:at(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:fs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ms(n),n.flags|=128,null):(s&n.child.childLanes)!==0?V0(t,n,s):(ms(n),t=Pa(t,n,s),t!==null?t.sibling:null);ms(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Lr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return X0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(An,An.current),l)break;return null;case 22:return n.lanes=0,I0(t,n,s,n.pendingProps);case 24:fs(n,Dn,t.memoizedState.cache)}return Pa(t,n,s)}function W0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Nn=!0;else{if(!Xf(t,s)&&(n.flags&128)===0)return Nn=!1,rM(t,n,s);Nn=(t.flags&131072)!==0}else Nn=!1,Dt&&(n.flags&1048576)!==0&&Em(n,Bo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=er(n.elementType),n.type=t,typeof t=="function")ju(t)?(l=ar(t,l),n.tag=1,n=H0(null,n,t,l,s)):(n.tag=0,n=Ff(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){n.tag=11,n=U0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=O0(null,n,t,l,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return Ff(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=ar(l,n.pendingProps),H0(t,n,l,f,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,uf(t,n),Yo(n,l,null,s);var S=n.memoizedState;if(l=S.cache,fs(n,Dn,l),l!==p.cache&&af(n,[Dn],s,!0),Wo(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=G0(t,n,l,s);break e}else if(l!==f){f=Bi(Error(r(424)),n),zo(f),n=G0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(fn=ki(t.firstChild),jn=n,Dt=!0,cs=null,Gi=!0,s=Im(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ks(),l===f){n=Pa(t,n,s);break e}Kn(t,n,l,s)}n=n.child}return n;case 26:return dc(t,n),t===null?(s=n_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Dt||(s=n.type,t=n.pendingProps,l=wc(ae.current).createElement(s),l[vn]=n,l[wn]=t,Qn(l,s,t),Et(l),n.stateNode=l):n.memoizedState=n_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&Dt&&(l=n.stateNode=$g(n.type,n.pendingProps,ae.current),jn=n,Gi=!0,f=fn,bs(n.type)?(Ed=f,fn=ki(l.firstChild)):fn=f),Kn(t,n,n.pendingProps.children,s),dc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((f=l=fn)&&(l=IM(l,n.type,n.pendingProps,Gi),l!==null?(n.stateNode=l,jn=n,fn=ki(l.firstChild),Gi=!1,f=!0):f=!1),f||us(n)),at(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,vd(f,p)?l=null:S!==null&&vd(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=_f(t,n,QS,null,null,s),dl._currentValue=f),dc(t,n),Kn(t,n,l,s),n.child;case 6:return t===null&&Dt&&((t=s=fn)&&(s=FM(s,n.pendingProps,Gi),s!==null?(n.stateNode=s,jn=n,fn=null,t=!0):t=!1),t||us(n)),null;case 13:return V0(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=nr(n,null,l,s):Kn(t,n,l,s),n.child;case 11:return U0(t,n,n.type,n.pendingProps,s);case 7:return Kn(t,n,n.pendingProps,s),n.child;case 8:return Kn(t,n,n.pendingProps.children,s),n.child;case 12:return Kn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,fs(n,n.type,l.value),Kn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,Js(n),f=Zn(f),l=l(f),n.flags|=1,Kn(t,n,l,s),n.child;case 14:return O0(t,n,n.type,n.pendingProps,s);case 15:return P0(t,n,n.type,n.pendingProps,s);case 19:return X0(t,n,s);case 31:return sM(t,n,s);case 22:return I0(t,n,s,n.pendingProps);case 24:return Js(n),l=Zn(Dn),t===null?(f=of(),f===null&&(f=sn,p=sf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},cf(n),fs(n,Dn,f)):((t.lanes&s)!==0&&(uf(t,n),Yo(n,null,null,s),Wo()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),fs(n,Dn,l)):(l=p.cache,fs(n,Dn,l),l!==f.cache&&af(n,[Dn],s,!0))),Kn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ia(t){t.flags|=4}function Wf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(vg())t.flags|=8192;else throw tr=Ql,lf}else t.flags&=-16777217}function Y0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o_(n))if(vg())t.flags|=8192;else throw tr=Ql,lf}function pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,kr|=n)}function Jo(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function oM(t,n,s){var l=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return dn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Na(Dn),ke(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Dr(n)?Ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ef())),dn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ia(n),p!==null?(dn(n),Y0(n,p)):(dn(n),Wf(n,f,null,l,s))):p?p!==t.memoizedState?(Ia(n),dn(n),Y0(n,p)):(dn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ia(n),dn(n),Wf(n,f,t,l,s)),null;case 27:if($e(n),s=ae.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return dn(n),null}t=Ae.current,Dr(n)?Tm(n):(t=$g(f,l,s),n.stateNode=t,Ia(n))}return dn(n),null;case 5:if($e(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return dn(n),null}if(p=Ae.current,Dr(n))Tm(n);else{var S=wc(ae.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[vn]=n,p[wn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(Qn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ia(n)}}return dn(n),Wf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Dr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=jn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[vn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Vg(t.nodeValue,s)),t||us(n,!0)}else t=wc(t).createTextNode(l),t[vn]=n,n.stateNode=t}return dn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Dr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[vn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),t=!1}else s=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(wi(n),n):(wi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return dn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Dr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[vn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),f=!1}else f=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(wi(n),n):(wi(n),null)}return wi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),pc(n,n.updateQueue),dn(n),null);case 4:return ke(),t===null&&hd(n.stateNode.containerInfo),dn(n),null;case 10:return Na(n.type),dn(n),null;case 19:if(K(An),l=n.memoizedState,l===null)return dn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)Jo(l,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=tc(t),p!==null){for(n.flags|=128,Jo(l,!1),t=p.updateQueue,n.updateQueue=t,pc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Sm(s,t),s=s.sibling;return Se(An,An.current&1|2),Dt&&Da(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Vt()>xc&&(n.flags|=128,f=!0,Jo(l,!1),n.lanes=4194304)}else{if(!f)if(t=tc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,pc(n,t),Jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Dt)return dn(n),null}else 2*Vt()-l.renderingStartTime>xc&&s!==536870912&&(n.flags|=128,f=!0,Jo(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Vt(),t.sibling=null,s=An.current,Se(An,f?s&1|2:s&1),Dt&&Da(n,l.treeForkCount),t):(dn(n),null);case 22:case 23:return wi(n),pf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),s=n.updateQueue,s!==null&&pc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K($s),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Na(Dn),dn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function lM(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Na(Dn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(wi(n),n.alternate===null)throw Error(r(340));Ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(wi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(An),null;case 4:return ke(),null;case 10:return Na(n.type),null;case 22:case 23:return wi(n),pf(),t!==null&&K($s),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Na(Dn),null;case 25:return null;default:return null}}function q0(t,n){switch(Ju(n),n.tag){case 3:Na(Dn),ke();break;case 26:case 27:case 5:$e(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&wi(n);break;case 13:wi(n);break;case 19:K(An);break;case 10:Na(n.type);break;case 22:case 23:wi(n),pf(),t!==null&&K($s);break;case 24:Na(Dn)}}function $o(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){Kt(n,n.return,C)}}function _s(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=n;var G=s,oe=C;try{oe()}catch(_e){Kt(f,G,_e)}}}l=l.next}while(l!==p)}}catch(_e){Kt(n,n.return,_e)}}function j0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Bm(n,s)}catch(l){Kt(t,t.return,l)}}}function Z0(t,n,s){s.props=ar(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Kt(t,n,l)}}function el(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Kt(t,n,f)}}function ma(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Kt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Kt(t,n,f)}else s.current=null}function K0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Kt(t,t.return,f)}}function Yf(t,n,s){try{var l=t.stateNode;DM(l,t.type,s,n),l[wn]=n}catch(f){Kt(t,t.return,f)}}function Q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bs(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=pi));else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(jf(t,n,s),t=t.sibling;t!==null;)jf(t,n,s),t=t.sibling}function mc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(mc(t,n,s),t=t.sibling;t!==null;)mc(t,n,s),t=t.sibling}function J0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Qn(n,l,s),n[vn]=t,n[wn]=s}catch(p){Kt(t,t.return,p)}}var Fa=!1,Un=!1,Zf=!1,$0=typeof WeakSet=="function"?WeakSet:Set,kn=null;function cM(t,n){if(t=t.containerInfo,gd=Ic,t=fm(t),Gu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,C=-1,G=-1,oe=0,_e=0,Me=t,le=null;t:for(;;){for(var de;Me!==s||f!==0&&Me.nodeType!==3||(C=S+f),Me!==p||l!==0&&Me.nodeType!==3||(G=S+l),Me.nodeType===3&&(S+=Me.nodeValue.length),(de=Me.firstChild)!==null;)le=Me,Me=de;for(;;){if(Me===t)break t;if(le===s&&++oe===f&&(C=S),le===p&&++_e===l&&(G=S),(de=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=de}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(_d={focusedElem:t,selectionRange:s},Ic=!1,kn=n;kn!==null;)if(n=kn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,kn=t;else for(;kn!==null;){switch(n=kn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ze=ar(s.type,f);t=l.getSnapshotBeforeUpdate(Ze,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Kt(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Sd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,kn=t;break}kn=n.return}}function eg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:za(t,s),l&4&&$o(5,s);break;case 1:if(za(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Kt(s,s.return,S)}else{var f=ar(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Kt(s,s.return,S)}}l&64&&j0(s),l&512&&el(s,s.return);break;case 3:if(za(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Bm(t,n)}catch(S){Kt(s,s.return,S)}}break;case 27:n===null&&l&4&&J0(s);case 26:case 5:za(t,s),n===null&&l&4&&K0(s),l&512&&el(s,s.return);break;case 12:za(t,s);break;case 31:za(t,s),l&4&&ig(t,s);break;case 13:za(t,s),l&4&&ag(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=vM.bind(null,s),BM(t,s))));break;case 22:if(l=s.memoizedState!==null||Fa,!l){n=n!==null&&n.memoizedState!==null||Un,f=Fa;var p=Un;Fa=l,(Un=n)&&!p?Ha(t,s,(s.subtreeFlags&8772)!==0):za(t,s),Fa=f,Un=p}break;case 30:break;default:za(t,s)}}function tg(t){var n=t.alternate;n!==null&&(t.alternate=null,tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&it(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _n=null,_i=!1;function Ba(t,n,s){for(s=s.child;s!==null;)ng(t,n,s),s=s.sibling}function ng(t,n,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:Un||ma(s,n),Ba(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Un||ma(s,n);var l=_n,f=_i;bs(s.type)&&(_n=s.stateNode,_i=!1),Ba(t,n,s),cl(s.stateNode),_n=l,_i=f;break;case 5:Un||ma(s,n);case 6:if(l=_n,f=_i,_n=null,Ba(t,n,s),_n=l,_i=f,_n!==null)if(_i)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(s.stateNode)}catch(p){Kt(s,n,p)}else try{_n.removeChild(s.stateNode)}catch(p){Kt(s,n,p)}break;case 18:_n!==null&&(_i?(t=_n,jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Qr(t)):jg(_n,s.stateNode));break;case 4:l=_n,f=_i,_n=s.stateNode.containerInfo,_i=!0,Ba(t,n,s),_n=l,_i=f;break;case 0:case 11:case 14:case 15:_s(2,s,n),Un||_s(4,s,n),Ba(t,n,s);break;case 1:Un||(ma(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Z0(s,n,l)),Ba(t,n,s);break;case 21:Ba(t,n,s);break;case 22:Un=(l=Un)||s.memoizedState!==null,Ba(t,n,s),Un=l;break;default:Ba(t,n,s)}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qr(t)}catch(s){Kt(n,n.return,s)}}}function ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qr(t)}catch(s){Kt(n,n.return,s)}}function uM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $0),n;default:throw Error(r(435,t.tag))}}function gc(t,n){var s=uM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=xM.bind(null,t,l);l.then(f,f)}})}function vi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(bs(C.type)){_n=C.stateNode,_i=!1;break e}break;case 5:_n=C.stateNode,_i=!1;break e;case 3:case 4:_n=C.stateNode.containerInfo,_i=!0;break e}C=C.return}if(_n===null)throw Error(r(160));ng(p,S,f),_n=null,_i=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sg(n,t),n=n.sibling}var ia=null;function sg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:vi(n,t),xi(t),l&4&&(_s(3,t,t.return),$o(3,t),_s(5,t,t.return));break;case 1:vi(n,t),xi(t),l&512&&(Un||s===null||ma(s,s.return)),l&64&&Fa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ia;if(vi(n,t),xi(t),l&512&&(Un||s===null||ma(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Be]||p[vn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Qn(p,l,s),p[vn]=t,Et(p),l=p;break e;case"link":var S=s_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(p=S[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break t}}p=f.createElement(l),Qn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=s_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(p=S[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break t}}p=f.createElement(l),Qn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[vn]=t,Et(p),l=p}t.stateNode=l}else r_(f,t.type,t.stateNode);else t.stateNode=a_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?r_(f,t.type,t.stateNode):a_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,s.memoizedProps)}break;case 27:vi(n,t),xi(t),l&512&&(Un||s===null||ma(s,s.return)),s!==null&&l&4&&Yf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(vi(n,t),xi(t),l&512&&(Un||s===null||ma(s,s.return)),t.flags&32){f=t.stateNode;try{ri(f,"")}catch(Ze){Kt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Yf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Zf=!0);break;case 6:if(vi(n,t),xi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ze){Kt(t,t.return,Ze)}}break;case 3:if(Nc=null,f=ia,ia=Dc(n.containerInfo),vi(n,t),ia=f,xi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(Ze){Kt(t,t.return,Ze)}Zf&&(Zf=!1,rg(t));break;case 4:l=ia,ia=Dc(t.stateNode.containerInfo),vi(n,t),xi(t),ia=l;break;case 12:vi(n,t),xi(t);break;case 31:vi(n,t),xi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 13:vi(n,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(vc=Vt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,oe=Fa,_e=Un;if(Fa=oe||f,Un=_e||G,vi(n,t),Un=_e,Fa=oe,xi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||Fa||Un||sr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(p=G.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Me=G.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){Kt(G,G.return,Ze)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Ze){Kt(G,G.return,Ze)}}}else if(n.tag===18){if(s===null){G=n;try{var de=G.stateNode;f?Zg(de,!0):Zg(G.stateNode,!1)}catch(Ze){Kt(G,G.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,gc(t,s))));break;case 19:vi(n,t),xi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 30:break;case 21:break;default:vi(n,t),xi(t)}}function xi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(Q0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=qf(t);mc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(ri(S,""),s.flags&=-33);var C=qf(t);mc(t,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,oe=qf(t);jf(t,oe,G);break;default:throw Error(r(161))}}catch(_e){Kt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function za(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(t,n.alternate,n),n=n.sibling}function sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_s(4,n,n.return),sr(n);break;case 1:ma(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Z0(n,n.return,s),sr(n);break;case 27:cl(n.stateNode);case 26:case 5:ma(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}t=t.sibling}}function Ha(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Ha(f,p,s),$o(4,p);break;case 1:if(Ha(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Kt(l,l.return,oe)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Fm(G[f],C)}catch(oe){Kt(l,l.return,oe)}}s&&S&64&&j0(p),el(p,p.return);break;case 27:J0(p);case 26:case 5:Ha(f,p,s),s&&l===null&&S&4&&K0(p),el(p,p.return);break;case 12:Ha(f,p,s);break;case 31:Ha(f,p,s),s&&S&4&&ig(f,p);break;case 13:Ha(f,p,s),s&&S&4&&ag(f,p);break;case 22:p.memoizedState===null&&Ha(f,p,s),el(p,p.return);break;case 30:break;default:Ha(f,p,s)}n=n.sibling}}function Kf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ho(s))}function Qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function aa(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(t,n,s,l),n=n.sibling}function og(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:aa(t,n,s,l),f&2048&&$o(9,n);break;case 1:aa(t,n,s,l);break;case 3:aa(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t)));break;case 12:if(f&2048){aa(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,C=p.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Kt(n,n.return,G)}}else aa(t,n,s,l);break;case 31:aa(t,n,s,l);break;case 13:aa(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?aa(t,n,s,l):tl(t,n):p._visibility&2?aa(t,n,s,l):(p._visibility|=2,Hr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Kf(S,n);break;case 24:aa(t,n,s,l),f&2048&&Qf(n.alternate,n);break;default:aa(t,n,s,l)}}function Hr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,C=s,G=l,oe=S.flags;switch(S.tag){case 0:case 11:case 15:Hr(p,S,C,G,f),$o(8,S);break;case 23:break;case 22:var _e=S.stateNode;S.memoizedState!==null?_e._visibility&2?Hr(p,S,C,G,f):tl(p,S):(_e._visibility|=2,Hr(p,S,C,G,f)),f&&oe&2048&&Kf(S.alternate,S);break;case 24:Hr(p,S,C,G,f),f&&oe&2048&&Qf(S.alternate,S);break;default:Hr(p,S,C,G,f)}n=n.sibling}}function tl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:tl(s,l),f&2048&&Kf(l.alternate,l);break;case 24:tl(s,l),f&2048&&Qf(l.alternate,l);break;default:tl(s,l)}n=n.sibling}}var nl=8192;function Gr(t,n,s){if(t.subtreeFlags&nl)for(t=t.child;t!==null;)lg(t,n,s),t=t.sibling}function lg(t,n,s){switch(t.tag){case 26:Gr(t,n,s),t.flags&nl&&t.memoizedState!==null&&KM(s,ia,t.memoizedState,t.memoizedProps);break;case 5:Gr(t,n,s);break;case 3:case 4:var l=ia;ia=Dc(t.stateNode.containerInfo),Gr(t,n,s),ia=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=nl,nl=16777216,Gr(t,n,s),nl=l):Gr(t,n,s));break;default:Gr(t,n,s)}}function cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kn=l,fg(l,t)}cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ug(t),t=t.sibling}function ug(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&_s(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_c(t)):il(t);break;default:il(t)}}function _c(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kn=l,fg(l,t)}cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_s(8,n,n.return),_c(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,_c(n));break;default:_c(n)}t=t.sibling}}function fg(t,n){for(;kn!==null;){var s=kn;switch(s.tag){case 0:case 11:case 15:_s(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,kn=l;else e:for(s=t;kn!==null;){l=kn;var f=l.sibling,p=l.return;if(tg(l),l===s){kn=null;break e}if(f!==null){f.return=p,kn=f;break e}kn=p}}}var fM={getCacheForType:function(t){var n=Zn(Dn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Zn(Dn).controller.signal}},dM=typeof WeakMap=="function"?WeakMap:Map,Yt=0,sn=null,bt=null,Rt=0,Zt=0,Di=null,vs=!1,Vr=!1,Jf=!1,Ga=0,Sn=0,xs=0,rr=0,$f=0,Li=0,kr=0,al=null,Si=null,ed=!1,vc=0,dg=0,xc=1/0,Sc=null,Ss=null,zn=0,Ms=null,Xr=null,Va=0,td=0,nd=null,hg=null,sl=0,id=null;function Ni(){return(Yt&2)!==0&&Rt!==0?Rt&-Rt:F.T!==null?cd():is()}function pg(){if(Li===0)if((Rt&536870912)===0||Dt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),Li=t}else Li=536870912;return t=Ci.current,t!==null&&(t.flags|=32),Li}function Mi(t,n,s){(t===sn&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),ys(t,Rt,Li,!1)),Xe(t,s),((Yt&2)===0||t!==sn)&&(t===sn&&((Yt&2)===0&&(rr|=s),Sn===4&&ys(t,Rt,Li,!1)),ga(t))}function mg(t,n,s){if((Yt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),f=l?mM(t,n):sd(t,n,!0),p=l;do{if(f===0){Vr&&!l&&ys(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!hM(s)){f=sd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;f=al;var G=C.current.memoizedState.isDehydrated;if(G&&(Wr(C,S).flags|=256),S=sd(C,S,!1),S!==2){if(Jf&&!G){C.errorRecoveryDisabledLanes|=p,rr|=p,f=4;break e}p=Si,Si=f,p!==null&&(Si===null?Si=p:Si.push.apply(Si,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Wr(t,0),ys(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ys(l,n,Li,!vs);break e;case 2:Si=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=vc+300-Vt(),10<f)){if(ys(l,n,Li,!vs),me(l,0,!0)!==0)break e;Va=n,l.timeoutHandle=Yg(gg.bind(null,l,s,Si,Sc,ed,n,Li,rr,kr,vs,p,"Throttled",-0,0),f);break e}gg(l,s,Si,Sc,ed,n,Li,rr,kr,vs,p,null,-0,0)}}break}while(!0);ga(t)}function gg(t,n,s,l,f,p,S,C,G,oe,_e,Me,le,de){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pi},lg(n,p,Me);var Ze=(p&62914560)===p?vc-Vt():(p&4194048)===p?dg-Vt():0;if(Ze=QM(Me,Ze),Ze!==null){Va=p,t.cancelPendingCommit=Ze(bg.bind(null,t,n,p,s,l,f,S,C,G,_e,Me,null,le,de)),ys(t,p,S,!oe);return}}bg(t,n,p,s,l,f,S,C,G)}function hM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!Ai(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ys(t,n,s,l){n&=~$f,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ge(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&It(t,s,n)}function Mc(){return(Yt&6)===0?(rl(0),!1):!0}function ad(){if(bt!==null){if(Zt===0)var t=bt.return;else t=bt,La=Qs=null,Sf(t),Pr=null,Vo=0,t=bt;for(;t!==null;)q0(t.alternate,t),t=t.return;bt=null}}function Wr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,UM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Va=0,ad(),sn=t,bt=s=wa(t.current,null),Rt=n,Zt=0,Di=null,vs=!1,Vr=Ne(t,n),Jf=!1,kr=Li=$f=rr=xs=Sn=0,Si=al=null,ed=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ge(l),p=1<<f;n|=t[f],l&=~p}return Ga=n,Vl(),s}function _g(t,n){mt=null,F.H=Ko,n===Or||n===Kl?(n=Um(),Zt=3):n===lf?(n=Um(),Zt=4):Zt=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Di=n,bt===null&&(Sn=1,uc(t,Bi(n,t.current)))}function vg(){var t=Ci.current;return t===null?!0:(Rt&4194048)===Rt?Vi===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===Vi:!1}function xg(){var t=F.H;return F.H=Ko,t===null?Ko:t}function Sg(){var t=F.A;return F.A=fM,t}function yc(){Sn=4,vs||(Rt&4194048)!==Rt&&Ci.current!==null||(Vr=!0),(xs&134217727)===0&&(rr&134217727)===0||sn===null||ys(sn,Rt,Li,!1)}function sd(t,n,s){var l=Yt;Yt|=2;var f=xg(),p=Sg();(sn!==t||Rt!==n)&&(Sc=null,Wr(t,n)),n=!1;var S=Sn;e:do try{if(Zt!==0&&bt!==null){var C=bt,G=Di;switch(Zt){case 8:ad(),S=6;break e;case 3:case 2:case 9:case 6:Ci.current===null&&(n=!0);var oe=Zt;if(Zt=0,Di=null,Yr(t,C,G,oe),s&&Vr){S=0;break e}break;default:oe=Zt,Zt=0,Di=null,Yr(t,C,G,oe)}}pM(),S=Sn;break}catch(_e){_g(t,_e)}while(!0);return n&&t.shellSuspendCounter++,La=Qs=null,Yt=l,F.H=f,F.A=p,bt===null&&(sn=null,Rt=0,Vl()),S}function pM(){for(;bt!==null;)Mg(bt)}function mM(t,n){var s=Yt;Yt|=2;var l=xg(),f=Sg();sn!==t||Rt!==n?(Sc=null,xc=Vt()+500,Wr(t,n)):Vr=Ne(t,n);e:do try{if(Zt!==0&&bt!==null){n=bt;var p=Di;t:switch(Zt){case 1:Zt=0,Di=null,Yr(t,n,p,1);break;case 2:case 9:if(Lm(p)){Zt=0,Di=null,yg(n);break}n=function(){Zt!==2&&Zt!==9||sn!==t||(Zt=7),ga(t)},p.then(n,n);break e;case 3:Zt=7;break e;case 4:Zt=5;break e;case 7:Lm(p)?(Zt=0,Di=null,yg(n)):(Zt=0,Di=null,Yr(t,n,p,7));break;case 5:var S=null;switch(bt.tag){case 26:S=bt.memoizedState;case 5:case 27:var C=bt;if(S?o_(S):C.stateNode.complete){Zt=0,Di=null;var G=C.sibling;if(G!==null)bt=G;else{var oe=C.return;oe!==null?(bt=oe,Ec(oe)):bt=null}break t}}Zt=0,Di=null,Yr(t,n,p,5);break;case 6:Zt=0,Di=null,Yr(t,n,p,6);break;case 8:ad(),Sn=6;break e;default:throw Error(r(462))}}gM();break}catch(_e){_g(t,_e)}while(!0);return La=Qs=null,F.H=l,F.A=f,Yt=s,bt!==null?0:(sn=null,Rt=0,Vl(),Sn)}function gM(){for(;bt!==null&&!on();)Mg(bt)}function Mg(t){var n=W0(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,n===null?Ec(t):bt=n}function yg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=z0(s,n,n.pendingProps,n.type,void 0,Rt);break;case 11:n=z0(s,n,n.pendingProps,n.type.render,n.ref,Rt);break;case 5:Sf(n);default:q0(s,n),n=bt=Sm(n,Ga),n=W0(s,n,Ga)}t.memoizedProps=t.pendingProps,n===null?Ec(t):bt=n}function Yr(t,n,s,l){La=Qs=null,Sf(n),Pr=null,Vo=0;var f=n.return;try{if(aM(t,f,n,s,Rt)){Sn=1,uc(t,Bi(s,t.current)),bt=null;return}}catch(p){if(f!==null)throw bt=f,p;Sn=1,uc(t,Bi(s,t.current)),bt=null;return}n.flags&32768?(Dt||l===1?t=!0:Vr||(Rt&536870912)!==0?t=!1:(vs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Eg(n,t)):Ec(n)}function Ec(t){var n=t;do{if((n.flags&32768)!==0){Eg(n,vs);return}t=n.return;var s=oM(n.alternate,n,Ga);if(s!==null){bt=s;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);Sn===0&&(Sn=5)}function Eg(t,n){do{var s=lM(t.alternate,t);if(s!==null){s.flags&=32767,bt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=s}while(t!==null);Sn=6,bt=null}function bg(t,n,s,l,f,p,S,C,G){t.cancelPendingCommit=null;do bc();while(zn!==0);if((Yt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Yu,ln(t,s,p,S,C,G),t===sn&&(bt=sn=null,Rt=0),Xr=n,Ms=t,Va=s,td=p,nd=f,hg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,SM(Q,function(){return wg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Yt,Yt|=4;try{cM(t,n,s)}finally{Yt=S,H.p=f,F.T=l}}zn=1,Tg(),Ag(),Rg()}}function Tg(){if(zn===1){zn=0;var t=Ms,n=Xr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Yt;Yt|=4;try{sg(n,t);var p=_d,S=fm(t.containerInfo),C=p.focusedElem,G=p.selectionRange;if(S!==C&&C&&C.ownerDocument&&um(C.ownerDocument.documentElement,C)){if(G!==null&&Gu(C)){var oe=G.start,_e=G.end;if(_e===void 0&&(_e=oe),"selectionStart"in C)C.selectionStart=oe,C.selectionEnd=Math.min(_e,C.value.length);else{var Me=C.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var de=le.getSelection(),Ze=C.textContent.length,rt=Math.min(G.start,Ze),nn=G.end===void 0?rt:Math.min(G.end,Ze);!de.extend&&rt>nn&&(S=nn,nn=rt,rt=S);var J=cm(C,rt),W=cm(C,nn);if(J&&W&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var se=Me.createRange();se.setStart(J.node,J.offset),de.removeAllRanges(),rt>nn?(de.addRange(se),de.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),de.addRange(se))}}}}for(Me=[],de=C;de=de.parentNode;)de.nodeType===1&&Me.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Me.length;C++){var ve=Me[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Ic=!!gd,_d=gd=null}finally{Yt=f,H.p=l,F.T=s}}t.current=n,zn=2}}function Ag(){if(zn===2){zn=0;var t=Ms,n=Xr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Yt;Yt|=4;try{eg(t,n.alternate,n)}finally{Yt=f,H.p=l,F.T=s}}zn=3}}function Rg(){if(zn===4||zn===3){zn=0,Z();var t=Ms,n=Xr,s=Va,l=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?zn=5:(zn=0,Xr=Ms=null,Cg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ss=null),fa(s),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,f=H.p,H.p=2,F.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];p(C.value,{componentStack:C.stack})}}finally{F.T=n,H.p=f}}(Va&3)!==0&&bc(),ga(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===id?sl++:(sl=0,id=t):sl=0,rl(0)}}function Cg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function bc(){return Tg(),Ag(),Rg(),wg()}function wg(){if(zn!==5)return!1;var t=Ms,n=td;td=0;var s=fa(Va),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=nd,nd=null;var p=Ms,S=Va;if(zn=0,Xr=Ms=null,Va=0,(Yt&6)!==0)throw Error(r(331));var C=Yt;if(Yt|=4,ug(p.current),og(p,p.current,S,s),Yt=C,rl(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(he,p)}catch{}return!0}finally{H.p=f,F.T=l,Cg(t,n)}}function Dg(t,n,s){n=Bi(s,n),n=Pf(t.stateNode,n,2),t=ps(t,n,2),t!==null&&(Xe(t,2),ga(t))}function Kt(t,n,s){if(t.tag===3)Dg(t,t,s);else for(;n!==null;){if(n.tag===3){Dg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ss===null||!Ss.has(l))){t=Bi(s,t),s=L0(2),l=ps(n,s,2),l!==null&&(N0(s,l,n,t),Xe(l,2),ga(l));break}}n=n.return}}function rd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new dM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Jf=!0,f.add(s),t=_M.bind(null,t,n,s),n.then(t,t))}function _M(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,sn===t&&(Rt&s)===s&&(Sn===4||Sn===3&&(Rt&62914560)===Rt&&300>Vt()-vc?(Yt&2)===0&&Wr(t,0):$f|=s,kr===Rt&&(kr=0)),ga(t)}function Lg(t,n){n===0&&(n=be()),t=js(t,n),t!==null&&(Xe(t,n),ga(t))}function vM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Lg(t,s)}function xM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Lg(t,s)}function SM(t,n){return gn(t,n)}var Tc=null,qr=null,od=!1,Ac=!1,ld=!1,Es=0;function ga(t){t!==qr&&t.next===null&&(qr===null?Tc=qr=t:qr=qr.next=t),Ac=!0,od||(od=!0,yM())}function rl(t,n){if(!ld&&Ac){ld=!0;do for(var s=!1,l=Tc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-Ge(42|t)+1)-1,p&=f&~(S&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Pg(l,p))}else p=Rt,p=me(l,l===sn?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ne(l,p)||(s=!0,Pg(l,p));l=l.next}while(s);ld=!1}}function MM(){Ng()}function Ng(){Ac=od=!1;var t=0;Es!==0&&NM()&&(t=Es);for(var n=Vt(),s=null,l=Tc;l!==null;){var f=l.next,p=Ug(l,n);p===0?(l.next=null,s===null?Tc=f:s.next=f,f===null&&(qr=s)):(s=l,(t!==0||(p&3)!==0)&&(Ac=!0)),l=f}zn!==0&&zn!==5||rl(t),Es!==0&&(Es=0)}function Ug(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-Ge(p),C=1<<S,G=f[S];G===-1?((C&s)===0||(C&l)!==0)&&(f[S]=ze(C,n)):G<=n&&(t.expiredLanes|=C),p&=~C}if(n=sn,s=Rt,s=me(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ne(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Ot(l),fa(s)){case 2:case 8:s=E;break;case 32:s=Q;break;case 268435456:s=ue;break;default:s=Q}return l=Og.bind(null,t),s=gn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Ot(l),t.callbackPriority=2,t.callbackNode=null,2}function Og(t,n){if(zn!==0&&zn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(bc()&&t.callbackNode!==s)return null;var l=Rt;return l=me(t,t===sn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(mg(t,l,n),Ug(t,Vt()),t.callbackNode!=null&&t.callbackNode===s?Og.bind(null,t):null)}function Pg(t,n){if(bc())return null;mg(t,n,!0)}function yM(){OM(function(){(Yt&6)!==0?gn(U,MM):Ng()})}function cd(){if(Es===0){var t=Nr;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Es=t}return Es}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$i(""+t)}function Fg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function EM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Ig((f[wn]||null).action),S=l.submitter;S&&(n=(n=S[wn]||null)?Ig(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var C=new rs("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Es!==0){var G=S?Fg(f,S):new FormData(f);wf(s,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=S?Fg(f,S):new FormData(f),wf(s,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var ud=0;ud<Wu.length;ud++){var fd=Wu[ud],bM=fd.toLowerCase(),TM=fd[0].toUpperCase()+fd.slice(1);na(bM,"on"+TM)}na(pm,"onAnimationEnd"),na(mm,"onAnimationIteration"),na(gm,"onAnimationStart"),na("dblclick","onDoubleClick"),na("focusin","onFocus"),na("focusout","onBlur"),na(GS,"onTransitionRun"),na(VS,"onTransitionStart"),na(kS,"onTransitionCancel"),na(_m,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Bg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,oe=C.currentTarget;if(C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=oe;try{p(f)}catch(_e){Gl(_e)}f.currentTarget=null,p=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,oe=C.currentTarget,C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=oe;try{p(f)}catch(_e){Gl(_e)}f.currentTarget=null,p=G}}}}function Tt(t,n){var s=n[da];s===void 0&&(s=n[da]=new Set);var l=t+"__bubble";s.has(l)||(zg(n,t,2,!1),s.add(l))}function dd(t,n,s){var l=0;n&&(l|=4),zg(s,t,l,n)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function hd(t){if(!t[Rc]){t[Rc]=!0,Yn.forEach(function(s){s!=="selectionchange"&&(AM.has(s)||dd(s,!1,t),dd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rc]||(n[Rc]=!0,dd("selectionchange",!1,n))}}function zg(t,n,s,l){switch(p_(n)){case 2:var f=ey;break;case 8:f=ty;break;default:f=Cd}s=f.bind(null,n,s,t),f=void 0,!yr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function pd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=ht(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=p=S;continue e}C=C.parentNode}}l=l.return}Bl(function(){var oe=p,_e=Do(s),Me=[];e:{var le=vm.get(t);if(le!==void 0){var de=rs,Ze=t;switch(t){case"keypress":if(qn(s)===0)break e;case"keydown":case"keyup":de=xS;break;case"focusin":Ze="focus",de=Iu;break;case"focusout":Ze="blur",de=Iu;break;case"beforeblur":case"afterblur":de=Iu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=yS;break;case pm:case mm:case gm:de=uS;break;case _m:de=bS;break;case"scroll":case"scrollend":de=sS;break;case"wheel":de=AS;break;case"copy":case"cut":case"paste":de=dS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Zp;break;case"toggle":case"beforetoggle":de=CS}var rt=(n&4)!==0,nn=!rt&&(t==="scroll"||t==="scrollend"),J=rt?le!==null?le+"Capture":null:le;rt=[];for(var W=oe,se;W!==null;){var ve=W;if(se=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||se===null||J===null||(ve=Xs(W,J),ve!=null&&rt.push(ll(W,ve,se))),nn)break;W=W.return}0<rt.length&&(le=new de(le,Ze,null,s,_e),Me.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==as&&(Ze=s.relatedTarget||s.fromElement)&&(ht(Ze)||Ze[Wn]))break e;if((de||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,de?(Ze=s.relatedTarget||s.toElement,de=oe,Ze=Ze?ht(Ze):null,Ze!==null&&(nn=c(Ze),rt=Ze.tag,Ze!==nn||rt!==5&&rt!==27&&rt!==6)&&(Ze=null)):(de=null,Ze=oe),de!==Ze)){if(rt=qp,ve="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Zp,ve="onPointerLeave",J="onPointerEnter",W="pointer"),nn=de==null?le:kt(de),se=Ze==null?le:kt(Ze),le=new rt(ve,W+"leave",de,s,_e),le.target=nn,le.relatedTarget=se,ve=null,ht(_e)===oe&&(rt=new rt(J,W+"enter",Ze,s,_e),rt.target=se,rt.relatedTarget=nn,ve=rt),nn=ve,de&&Ze)t:{for(rt=RM,J=de,W=Ze,se=0,ve=J;ve;ve=rt(ve))se++;ve=0;for(var nt=W;nt;nt=rt(nt))ve++;for(;0<se-ve;)J=rt(J),se--;for(;0<ve-se;)W=rt(W),ve--;for(;se--;){if(J===W||W!==null&&J===W.alternate){rt=J;break t}J=rt(J),W=rt(W)}rt=null}else rt=null;de!==null&&Hg(Me,le,de,rt,!1),Ze!==null&&nn!==null&&Hg(Me,nn,Ze,rt,!0)}}e:{if(le=oe?kt(oe):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var zt=im;else if(tm(le))if(am)zt=BS;else{zt=IS;var Qe=PS}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?oe&&Bt(oe.elementType)&&(zt=im):zt=FS;if(zt&&(zt=zt(t,oe))){nm(Me,zt,s,_e);break e}Qe&&Qe(t,le,oe),t==="focusout"&&oe&&le.type==="number"&&oe.memoizedProps.value!=null&&Mt(le,"number",le.value)}switch(Qe=oe?kt(oe):window,t){case"focusin":(tm(Qe)||Qe.contentEditable==="true")&&(br=Qe,Vu=oe,Fo=null);break;case"focusout":Fo=Vu=br=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,dm(Me,s,_e);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":dm(Me,s,_e)}var _t;if(Bu)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Er?$p(t,s)&&(Ct="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ct="onCompositionStart");Ct&&(Kp&&s.locale!=="ko"&&(Er||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Er&&(_t=ea()):(bn=_e,mi="value"in bn?bn.value:bn.textContent,Er=!0)),Qe=Cc(oe,Ct),0<Qe.length&&(Ct=new jp(Ct,t,null,s,_e),Me.push({event:Ct,listeners:Qe}),_t?Ct.data=_t:(_t=em(s),_t!==null&&(Ct.data=_t)))),(_t=DS?LS(t,s):NS(t,s))&&(Ct=Cc(oe,"onBeforeInput"),0<Ct.length&&(Qe=new jp("onBeforeInput","beforeinput",null,s,_e),Me.push({event:Qe,listeners:Ct}),Qe.data=_t)),EM(Me,t,oe,s,_e)}Bg(Me,n)})}function ll(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Cc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Xs(t,s),f!=null&&l.unshift(ll(t,f,p)),f=Xs(t,n),f!=null&&l.push(ll(t,f,p))),t.tag===3)return l;t=t.return}return[]}function RM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var C=s,G=C.alternate,oe=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||oe===null||(G=oe,f?(oe=Xs(s,p),oe!=null&&S.unshift(ll(s,oe,G))):f||(oe=Xs(s,p),oe!=null&&S.push(ll(s,oe,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var CM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(CM,`
`).replace(wM,"")}function Vg(t,n){return n=Gg(n),Gg(t)===n}function tn(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ri(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ri(t,""+l);break;case"className":qe(t,"class",l);break;case"tabIndex":qe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,s,l);break;case"style":oi(t,l,p);break;case"data":if(n!=="object"){qe(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=$i(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&tn(t,n,"name",f.name,f,null),tn(t,n,"formEncType",f.formEncType,f,null),tn(t,n,"formMethod",f.formMethod,f,null),tn(t,n,"formTarget",f.formTarget,f,null)):(tn(t,n,"encType",f.encType,f,null),tn(t,n,"method",f.method,f,null),tn(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=$i(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=pi);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=$i(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Pe(t,"popover",l);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ti.get(s)||s,Pe(t,s,l))}}function md(t,n,s,l,f,p){switch(s){case"style":oi(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ri(t,l):(typeof l=="number"||typeof l=="bigint")&&ri(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[wn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Pe(t,s,l)}}}function Qn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(t,n,p,S,s,null)}}f&&tn(t,n,"srcSet",s.srcSet,s,null),l&&tn(t,n,"src",s.src,s,null);return;case"input":Tt("invalid",t);var C=p=S=f=null,G=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":S=_e;break;case"checked":G=_e;break;case"defaultChecked":oe=_e;break;case"value":p=_e;break;case"defaultValue":C=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:tn(t,n,l,_e,s,null)}}Vn(t,p,C,G,oe,S,f,!1);return;case"select":Tt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:tn(t,n,f,C,s,null)}n=p,s=S,t.multiple=!!l,n!=null?En(t,!!l,n,!1):s!=null&&En(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:tn(t,n,S,C,s,null)}Fn(t,l,f,p);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tn(t,n,G,l,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<ol.length;l++)Tt(ol[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(t,n,oe,l,s,null)}return;default:if(Bt(n)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&md(t,n,_e,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&tn(t,n,C,l,s,null))}function DM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,C=null,G=null,oe=null,_e=null;for(de in s){var Me=s[de];if(s.hasOwnProperty(de)&&Me!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=Me;default:l.hasOwnProperty(de)||tn(t,n,de,null,l,Me)}}for(var le in l){var de=l[le];if(Me=s[le],l.hasOwnProperty(le)&&(de!=null||Me!=null))switch(le){case"type":p=de;break;case"name":f=de;break;case"checked":oe=de;break;case"defaultChecked":_e=de;break;case"value":S=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==Me&&tn(t,n,le,de,l,Me)}}Ie(t,S,C,G,oe,_e,p,f);return;case"select":de=S=C=le=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(p)||tn(t,n,p,null,l,G)}for(f in l)if(p=l[f],G=s[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":le=p;break;case"defaultValue":C=p;break;case"multiple":S=p;default:p!==G&&tn(t,n,f,p,l,G)}n=C,s=S,l=de,le!=null?En(t,!!s,le,!1):!!l!=!!s&&(n!=null?En(t,!!s,n,!0):En(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:tn(t,n,C,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&tn(t,n,S,f,l,p)}hi(t,le,de);return;case"option":for(var Ze in s)if(le=s[Ze],s.hasOwnProperty(Ze)&&le!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:tn(t,n,Ze,null,l,le)}for(G in l)if(le=l[G],de=s[G],l.hasOwnProperty(G)&&le!==de&&(le!=null||de!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:tn(t,n,G,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)le=s[rt],s.hasOwnProperty(rt)&&le!=null&&!l.hasOwnProperty(rt)&&tn(t,n,rt,null,l,le);for(oe in l)if(le=l[oe],de=s[oe],l.hasOwnProperty(oe)&&le!==de&&(le!=null||de!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:tn(t,n,oe,le,l,de)}return;default:if(Bt(n)){for(var nn in s)le=s[nn],s.hasOwnProperty(nn)&&le!==void 0&&!l.hasOwnProperty(nn)&&md(t,n,nn,void 0,l,le);for(_e in l)le=l[_e],de=s[_e],!l.hasOwnProperty(_e)||le===de||le===void 0&&de===void 0||md(t,n,_e,le,l,de);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&tn(t,n,J,null,l,le);for(Me in l)le=l[Me],de=s[Me],!l.hasOwnProperty(Me)||le===de||le==null&&de==null||tn(t,n,Me,le,l,de)}function kg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,C=f.duration;if(p&&C&&kg(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],oe=G.startTime;if(oe>C)break;var _e=G.transferSize,Me=G.initiatorType;_e&&kg(Me)&&(G=G.responseEnd,S+=_e*(G<C?1:(C-oe)/(G-oe)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gd=null,_d=null;function wc(t){return t.nodeType===9?t:t.ownerDocument}function Xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function NM(){var t=window.event;return t&&t.type==="popstate"?t===xd?!1:(xd=t,!0):(xd=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,OM=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(PM)}:Yg;function PM(t){setTimeout(function(){throw t})}function bs(t){return t==="head"}function jg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Qr(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")cl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,cl(s);for(var p=s.firstChild;p;){var S=p.nextSibling,C=p.nodeName;p[Be]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&cl(t.ownerDocument.body);s=f}while(s);Qr(n)}function Zg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Sd(s),it(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function IM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Be])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=ki(t.nextSibling),t===null)break}return null}function FM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=ki(t.nextSibling),t===null))return null;return t}function Kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ki(t.nextSibling),t===null))return null;return t}function Md(t){return t.data==="$?"||t.data==="$~"}function yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function BM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ki(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ed=null;function Qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return ki(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function $g(t,n,s){switch(n=wc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function cl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);it(t)}var Xi=new Map,e_=new Set;function Dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ka=H.d;H.d={f:zM,r:HM,D:GM,C:VM,L:kM,m:XM,X:YM,S:WM,M:qM};function zM(){var t=ka.f(),n=Mc();return t||n}function HM(t){var n=Nt(t);n!==null&&n.tag===5&&n.type==="form"?_0(n):ka.r(t)}var jr=typeof document>"u"?null:document;function t_(t,n,s){var l=jr;if(l&&typeof n=="string"&&n){var f=At(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),e_.has(f)||(e_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Qn(n,"link",t),Et(n),l.head.appendChild(n)))}}function GM(t){ka.D(t),t_("dns-prefetch",t,null)}function VM(t,n){ka.C(t,n),t_("preconnect",t,n)}function kM(t,n,s){ka.L(t,n,s);var l=jr;if(l&&t&&n){var f='link[rel="preload"][as="'+At(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+At(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+At(s.imageSizes)+'"]')):f+='[href="'+At(t)+'"]';var p=f;switch(n){case"style":p=Zr(t);break;case"script":p=Kr(t)}Xi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Xi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(ul(p))||n==="script"&&l.querySelector(fl(p))||(n=l.createElement("link"),Qn(n,"link",t),Et(n),l.head.appendChild(n)))}}function XM(t,n){ka.m(t,n);var s=jr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Kr(t)}if(!Xi.has(p)&&(t=_({rel:"modulepreload",href:t},n),Xi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(fl(p)))return}l=s.createElement("link"),Qn(l,"link",t),Et(l),s.head.appendChild(l)}}}function WM(t,n,s){ka.S(t,n,s);var l=jr;if(l&&t){var f=$t(l).hoistableStyles,p=Zr(t);n=n||"default";var S=f.get(p);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(ul(p)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Xi.get(p))&&bd(t,s);var G=S=l.createElement("link");Et(G),Qn(G,"link",t),G._p=new Promise(function(oe,_e){G.onload=oe,G.onerror=_e}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Lc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(p,S)}}}function YM(t,n){ka.X(t,n);var s=jr;if(s&&t){var l=$t(s).hoistableScripts,f=Kr(t),p=l.get(f);p||(p=s.querySelector(fl(f)),p||(t=_({src:t,async:!0},n),(n=Xi.get(f))&&Td(t,n),p=s.createElement("script"),Et(p),Qn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function qM(t,n){ka.M(t,n);var s=jr;if(s&&t){var l=$t(s).hoistableScripts,f=Kr(t),p=l.get(f);p||(p=s.querySelector(fl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Xi.get(f))&&Td(t,n),p=s.createElement("script"),Et(p),Qn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function n_(t,n,s,l){var f=(f=ae.current)?Dc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Zr(s.href),s=$t(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Zr(s.href);var p=$t(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(ul(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Xi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Xi.set(t,s),p||jM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(s),s=$t(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zr(t){return'href="'+At(t)+'"'}function ul(t){return'link[rel="stylesheet"]['+t+"]"}function i_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function jM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Qn(n,"link",s),Et(n),t.head.appendChild(n))}function Kr(t){return'[src="'+At(t)+'"]'}function fl(t){return"script[async]"+t}function a_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+At(s.href)+'"]');if(l)return n.instance=l,Et(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Et(l),Qn(l,"style",f),Lc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Zr(s.href);var p=t.querySelector(ul(f));if(p)return n.state.loading|=4,n.instance=p,Et(p),p;l=i_(s),(f=Xi.get(f))&&bd(l,f),p=(t.ownerDocument||t).createElement("link"),Et(p);var S=p;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Qn(p,"link",l),n.state.loading|=4,Lc(p,s.precedence,t),n.instance=p;case"script":return p=Kr(s.src),(f=t.querySelector(fl(p)))?(n.instance=f,Et(f),f):(l=s,(f=Xi.get(p))&&(l=_({},s),Td(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Et(f),Qn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Lc(l,s.precedence,t));return n.instance}function Lc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nc=null;function s_(t,n,s){if(Nc===null){var l=new Map,f=Nc=new Map;f.set(s,l)}else f=Nc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Be]||p[vn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var C=l.get(S);C?C.push(p):l.set(S,[p])}}return l}function r_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function ZM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function KM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Zr(l.href),p=n.querySelector(ul(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Uc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,Et(p);return}p=n.ownerDocument||n,l=i_(l),(f=Xi.get(f))&&bd(l,f),p=p.createElement("link"),Et(p);var S=p;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Qn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Uc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Ad=0;function QM(t,n){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Ad===0&&(Ad=62500*LM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Ad?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oc=null;function Pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,n.forEach(JM,t),Oc=null,Uc.call(t))}function JM(t,n){if(!(n.state.loading&4)){var s=Oc.get(t);if(s)var l=s.get(null);else{s=new Map,Oc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Uc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var dl={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function $M(t,n,s,l,f,p,S,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function l_(t,n,s,l,f,p,S,C,G,oe,_e,Me){return t=new $M(t,n,s,S,G,oe,_e,Me,C),n=1,p===!0&&(n|=24),p=Ri(3,null,null,n),t.current=p,p.stateNode=t,n=sf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},cf(p),t}function c_(t){return t?(t=Rr,t):Rr}function u_(t,n,s,l,f,p){f=c_(f),l.context===null?l.context=f:l.pendingContext=f,l=hs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ps(t,l,n),s!==null&&(Mi(s,t,n),Xo(s,t,n))}function f_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Rd(t,n){f_(t,n),(t=t.alternate)&&f_(t,n)}function d_(t){if(t.tag===13||t.tag===31){var n=js(t,67108864);n!==null&&Mi(n,t,67108864),Rd(t,67108864)}}function h_(t){if(t.tag===13||t.tag===31){var n=Ni();n=ns(n);var s=js(t,n);s!==null&&Mi(s,t,n),Rd(t,n)}}var Ic=!0;function ey(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=2,Cd(t,n,s,l)}finally{H.p=p,F.T=f}}function ty(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=8,Cd(t,n,s,l)}finally{H.p=p,F.T=f}}function Cd(t,n,s,l){if(Ic){var f=wd(l);if(f===null)pd(t,n,l,Fc,s),m_(t,l);else if(iy(f,t,n,s,l))l.stopPropagation();else if(m_(t,l),n&4&&-1<ny.indexOf(t)){for(;f!==null;){var p=Nt(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Te(p.pendingLanes);if(S!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-Ge(S);C.entanglements[1]|=G,S&=~G}ga(p),(Yt&6)===0&&(xc=Vt()+500,rl(0))}}break;case 31:case 13:C=js(p,2),C!==null&&Mi(C,p,2),Mc(),Rd(p,2)}if(p=wd(l),p===null&&pd(t,n,l,Fc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else pd(t,n,l,null,s)}}function wd(t){return t=Do(t),Dd(t)}var Fc=null;function Dd(t){if(Fc=null,t=ht(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fc=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case U:return 2;case E:return 8;case Q:case re:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Ld=!1,Ts=null,As=null,Rs=null,hl=new Map,pl=new Map,Cs=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,n){switch(t){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":hl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(n.pointerId)}}function ml(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Nt(n),n!==null&&d_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function iy(t,n,s,l,f){switch(n){case"focusin":return Ts=ml(Ts,t,n,s,l,f),!0;case"dragenter":return As=ml(As,t,n,s,l,f),!0;case"mouseover":return Rs=ml(Rs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return hl.set(p,ml(hl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,pl.set(p,ml(pl.get(p)||null,t,n,s,l,f)),!0}return!1}function g_(t){var n=ht(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Ra(t.priority,function(){h_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Ra(t.priority,function(){h_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=wd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);as=l,s.target.dispatchEvent(l),as=null}else return n=Nt(s),n!==null&&d_(n),t.blockedOn=s,!1;n.shift()}return!0}function __(t,n,s){Bc(t)&&s.delete(n)}function ay(){Ld=!1,Ts!==null&&Bc(Ts)&&(Ts=null),As!==null&&Bc(As)&&(As=null),Rs!==null&&Bc(Rs)&&(Rs=null),hl.forEach(__),pl.forEach(__)}function zc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ld||(Ld=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ay)))}var Hc=null;function v_(t){Hc!==t&&(Hc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Dd(l||s)===null)continue;break}var p=Nt(s);p!==null&&(t.splice(n,3),n-=3,wf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Qr(t){function n(G){return zc(G,t)}Ts!==null&&zc(Ts,t),As!==null&&zc(As,t),Rs!==null&&zc(Rs,t),hl.forEach(n),pl.forEach(n);for(var s=0;s<Cs.length;s++){var l=Cs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)g_(s),s.blockedOn===null&&Cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[wn]||null;if(typeof p=="function")S||v_(s);else if(S){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[wn]||null)C=S.formAction;else if(Dd(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),v_(s)}}}function x_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Nd(t){this._internalRoot=t}Gc.prototype.render=Nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ni();u_(s,l,t,n,null,null)},Gc.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;u_(t.current,2,null,t,null,null),Mc(),n[Wn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=is();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Cs.length&&n!==0&&n<Cs[s].priority;s++);Cs.splice(s,0,t),s===0&&g_(t)}};var S_=e.version;if(S_!=="19.2.7")throw Error(r(527,S_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var sy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{he=Vc.inject(sy),pe=Vc}catch{}}return _l.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=R0,p=C0,S=w0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=l_(t,1,!1,null,null,s,l,null,f,p,S,x_),t[Wn]=n.current,hd(t),new Nd(n)},_l.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=R0,S=C0,C=w0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=l_(t,1,!0,n,s??null,l,f,G,p,S,C,x_),n.context=c_(null),s=n.current,l=Ni(),l=ns(l),f=hs(l),f.callback=null,ps(s,f,l),s=l,n.current.lanes=s,Xe(n,s),ga(n),t[Wn]=n.current,hd(t),new Gc(n)},_l.version="19.2.7",_l}var D_;function py(){if(D_)return Pd.exports;D_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Pd.exports=hy(),Pd.exports}var my=py();const gy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Jr=(a,e="#")=>{var i;return((i=gy[a])==null?void 0:i.trim())||e},Pn={app:Jr("VITE_APP_URL","https://demo.morpheum.io"),docs:Jr("VITE_DOCS_URL"),manifesto:Jr("VITE_MANIFESTO_URL"),discord:Jr("VITE_DISCORD_URL"),x:Jr("VITE_X_URL"),tutorialVideo:Jr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},du=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],zd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Pn.manifesto},Ds={eyebrow:{label:"A manifesto for verifiable agents",href:Pn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Pn.app},secondaryCta:{label:"Explore agents",href:Pn.explore}},L_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},N_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Ch={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Hd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Pn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Pn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Pn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ls={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},$r={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},kc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Pn.app},social:[{label:"Join Discord",href:Pn.discord},{label:"Join X",href:Pn.x}]},U_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function yo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function _y(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:kc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(yo,{href:kc.primaryCta.href,variant:"primary",children:kc.primaryCta.label}),kc.social.map(a=>D.jsx(yo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function vy(){const[a,e]=We.useState(!1),i=!!Pn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ch.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Pn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Ch.videoCaption})]})]})})}const xy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Gd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:xy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Sy(){const a=$r.cards[0],e=$r.cards[1],i=$r.cards[2],r=$r.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:$r.kicker}),D.jsx("h2",{className:"section-title explore__title",children:$r.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Gd,{type:"verified"}),D.jsx(Gd,{type:"riskScore",value:o.risk}),D.jsx(Gd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yp="185",My=0,O_=1,yy=2,hu=1,Ey=2,bl=3,$a=0,Ei=1,Sa=2,Qa=0,vo=1,wh=2,P_=3,I_=4,by=5,hr=100,Ty=101,Ay=102,Ry=103,Cy=104,wy=200,Dy=201,Ly=202,Ny=203,Dh=204,Lh=205,Uy=206,Oy=207,Py=208,Iy=209,Fy=210,By=211,zy=212,Hy=213,Gy=214,Nh=0,Uh=1,Oh=2,Eo=3,Ph=4,Ih=5,Fh=6,Bh=7,ax=0,Vy=1,ky=2,Ea=0,sx=1,rx=2,ox=3,lx=4,cx=5,ux=6,fx=7,dx=300,vr=301,bo=302,Vd=303,kd=304,Cu=306,zh=1e3,ca=1001,Hh=1002,$n=1003,Xy=1004,Xc=1005,In=1006,Xd=1007,zs=1008,qi=1009,hx=1010,px=1011,Nl=1012,Ep=1013,Aa=1014,Ma=1015,es=1016,bp=1017,Tp=1018,Ul=1020,mx=35902,gx=35899,_x=1021,vx=1022,ua=1023,ts=1026,gr=1027,xx=1028,Ap=1029,xr=1030,Rp=1031,Cp=1033,pu=33776,mu=33777,gu=33778,_u=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,Yh=37492,qh=37496,jh=37488,Zh=37489,Su=37490,Kh=37491,Qh=37808,Jh=37809,$h=37810,ep=37811,tp=37812,np=37813,ip=37814,ap=37815,sp=37816,rp=37817,op=37818,lp=37819,cp=37820,up=37821,fp=36492,dp=36494,hp=36495,pp=36283,mp=36284,Mu=36285,gp=36286,Wy=3200,F_=0,Yy=1,Bs="",di="srgb",yu="srgb-linear",Eu="linear",Qt="srgb",eo=7680,B_=519,qy=512,jy=513,Zy=514,wp=515,Ky=516,Qy=517,Dp=518,Jy=519,z_=35044,H_="300 es",ya=2e3,bu=2001;function $y(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Tu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function eE(){const a=Tu("canvas");return a.style.display="block",a}const G_={};function V_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Sx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ot(...a){a=Sx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Pt(...a){a=Sx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function xo(...a){const e=a.join(" ");e in G_||(G_[e]=!0,ot(...a))}function tE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const nE={[Nh]:Uh,[Oh]:Fh,[Ph]:Bh,[Eo]:Ih,[Uh]:Nh,[Fh]:Oh,[Bh]:Ph,[Ih]:Eo};class Mr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let k_=1234567;const wl=Math.PI/180,Ol=180/Math.PI;function Ro(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ii[a&255]+ii[a>>8&255]+ii[a>>16&255]+ii[a>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[i&63|128]+ii[i>>8&255]+"-"+ii[i>>16&255]+ii[i>>24&255]+ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]).toLowerCase()}function yt(a,e,i){return Math.max(e,Math.min(i,a))}function Lp(a,e){return(a%e+e)%e}function iE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function aE(a,e,i){return a!==e?(i-a)/(e-a):0}function Dl(a,e,i){return(1-i)*a+i*e}function sE(a,e,i,r){return Dl(a,e,1-Math.exp(-i*r))}function rE(a,e=1){return e-Math.abs(Lp(a,e*2)-e)}function oE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function lE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function cE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function uE(a,e){return a+Math.random()*(e-a)}function fE(a){return a*(.5-Math.random())}function dE(a){a!==void 0&&(k_=a);let e=k_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hE(a){return a*wl}function pE(a){return a*Ol}function mE(a){return(a&a-1)===0&&a!==0}function gE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function _E(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function vE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*b,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*b,h*d);break;case"ZYZ":a.set(m*b,m*x,h*g,h*d);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function mo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ci(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jt={DEG2RAD:wl,RAD2DEG:Ol,generateUUID:Ro,clamp:yt,euclideanModulo:Lp,mapLinear:iE,inverseLerp:aE,lerp:Dl,damp:sE,pingpong:rE,smoothstep:oE,smootherstep:lE,randInt:cE,randFloat:uE,randFloatSpread:fE,seededRandom:dE,degToRad:hE,radToDeg:pE,isPowerOfTwo:mE,ceilPowerOfTwo:gE,floorPowerOfTwo:_E,setQuaternionFromProperEuler:vE,normalize:ci,denormalize:mo},Vp=class Vp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vp.prototype.isVector2=!0;let Gt=Vp;class Co{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==b){let y=m*v+d*x+g*b+_*w;y<0&&(v=-v,x=-x,b=-b,w=-w,y=-y);let M=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);M=Math.sin(M*I)/z,h=Math.sin(h*I)/z,m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h;const I=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=I,d*=I,g*=I,_*=I}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[i]=h*b+g*_+m*x-d*v,e[i+1]=m*b+g*v+d*_-h*x,e[i+2]=d*b+g*x+h*v-m*_,e[i+3]=g*b-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kp=class kp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(X_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(X_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kp.prototype.isVector3=!0;let te=kp;const Wd=new te,X_=new Co,Xp=class Xp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],b=r[8],w=o[0],y=o[3],M=o[6],I=o[1],z=o[4],R=o[7],O=o[2],L=o[5],B=o[8];return c[0]=u*w+h*I+m*O,c[3]=u*y+h*z+m*L,c[6]=u*M+h*R+m*B,c[1]=d*w+g*I+_*O,c[4]=d*y+g*z+_*L,c[7]=d*M+g*R+_*B,c[2]=v*w+x*I+b*O,c[5]=v*y+x*z+b*L,c[8]=v*M+x*R+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,b=i*_+r*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yd.makeScale(e,i)),this}rotate(e){return xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yd.makeRotation(-e)),this}translate(e,i){return xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xp.prototype.isMatrix3=!0;let ut=Xp;const Yd=new ut,W_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xE(){const a={enabled:!0,workingColorSpace:yu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Qt&&(o.r=Ja(o.r),o.g=Ja(o.g),o.b=Ja(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Qt&&(o.r=So(o.r),o.g=So(o.g),o.b=So(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Bs?Eu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[yu]:{primaries:e,whitePoint:r,transfer:Eu,toXYZ:W_,fromXYZ:Y_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Qt,toXYZ:W_,fromXYZ:Y_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),a}const Lt=xE();function Ja(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function So(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let to;class SE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{to===void 0&&(to=Tu("canvas")),to.width=e.width,to.height=e.height;const o=to.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=to}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Tu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ja(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ja(i[r]/255)*255):i[r]=Ja(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(qd(o[u].image)):c.push(qd(o[u]))}else c=qd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function qd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?SE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let yE=0;const jd=new te;class si extends Mr{constructor(e=si.DEFAULT_IMAGE,i=si.DEFAULT_MAPPING,r=ca,o=ca,c=In,u=zs,h=ua,m=qi,d=si.DEFAULT_ANISOTROPY,g=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Ro(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case ca:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case ca:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=dx;si.DEFAULT_ANISOTROPY=1;const Wp=class Wp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,R=(x+1)/2,O=(M+1)/2,L=(g+v)/4,B=(_+w)/4,T=(b+y)/4;return z>R&&z>O?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=B/r):R>O?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=B/c,o=T/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(_-w)/I,this.z=(v-g)/I,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wp.prototype.isVector4=!0;let Mn=Wp;class EE extends Mr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Mn(0,0,e,i),this.scissorTest=!1,this.viewport=new Mn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new si(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Np(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends EE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Mx extends si{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bE extends si{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=class Ru{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=b,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/no.setFromMatrixColumn(e,0).length(),c=1/no.setFromMatrixColumn(e,1).length(),u=1/no.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+b*d,i[5]=v-w*d,i[9]=-h*m,i[2]=w-v*d,i[6]=b+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=d*g,w=d*_;i[0]=v+w*h,i[4]=b*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-b,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=d*g,w=d*_;i[0]=v-w*h,i[4]=-u*_,i[8]=b+x*h,i[1]=x+b*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=b*d-x,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=x*d-b,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,b=h*m,w=h*d;i[0]=m*g,i[4]=w-v*_,i[8]=b*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+b,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*d,b=h*m,w=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,AE)}lookAt(e,i,r){const o=this.elements;return Ui.subVectors(e,i),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),Ns.crossVectors(r,Ui),Ns.lengthSq()===0&&(Math.abs(r.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),Ns.crossVectors(r,Ui)),Ns.normalize(),Wc.crossVectors(Ui,Ns),o[0]=Ns.x,o[4]=Wc.x,o[8]=Ui.x,o[1]=Ns.y,o[5]=Wc.y,o[9]=Ui.y,o[2]=Ns.z,o[6]=Wc.z,o[10]=Ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],b=r[2],w=r[6],y=r[10],M=r[14],I=r[3],z=r[7],R=r[11],O=r[15],L=o[0],B=o[4],T=o[8],N=o[12],X=o[1],V=o[5],j=o[9],ce=o[13],fe=o[2],q=o[6],F=o[10],H=o[14],$=o[3],ge=o[7],xe=o[11],P=o[15];return c[0]=u*L+h*X+m*fe+d*$,c[4]=u*B+h*V+m*q+d*ge,c[8]=u*T+h*j+m*F+d*xe,c[12]=u*N+h*ce+m*H+d*P,c[1]=g*L+_*X+v*fe+x*$,c[5]=g*B+_*V+v*q+x*ge,c[9]=g*T+_*j+v*F+x*xe,c[13]=g*N+_*ce+v*H+x*P,c[2]=b*L+w*X+y*fe+M*$,c[6]=b*B+w*V+y*q+M*ge,c[10]=b*T+w*j+y*F+M*xe,c[14]=b*N+w*ce+y*H+M*P,c[3]=I*L+z*X+R*fe+O*$,c[7]=I*B+z*V+R*q+O*ge,c[11]=I*T+z*j+R*F+O*xe,c[15]=I*N+z*ce+R*H+O*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],w=e[7],y=e[11],M=e[15],I=m*x-d*v,z=h*x-d*_,R=h*v-m*_,O=u*x-d*g,L=u*v-m*g,B=u*_-h*g;return i*(w*I-y*z+M*R)-r*(b*I-y*O+M*L)+o*(b*z-w*O+M*B)-c*(b*R-w*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],w=e[13],y=e[14],M=e[15],I=i*h-r*u,z=i*m-o*u,R=i*d-c*u,O=r*m-o*h,L=r*d-c*h,B=o*d-c*m,T=g*w-_*b,N=g*y-v*b,X=g*M-x*b,V=_*y-v*w,j=_*M-x*w,ce=v*M-x*y,fe=I*ce-z*j+R*V+O*X-L*N+B*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return e[0]=(h*ce-m*j+d*V)*q,e[1]=(o*j-r*ce-c*V)*q,e[2]=(w*B-y*L+M*O)*q,e[3]=(v*L-_*B-x*O)*q,e[4]=(m*X-u*ce-d*N)*q,e[5]=(i*ce-o*X+c*N)*q,e[6]=(y*R-b*B-M*z)*q,e[7]=(g*B-v*R+x*z)*q,e[8]=(u*j-h*X+d*T)*q,e[9]=(r*X-i*j-c*T)*q,e[10]=(b*L-w*R+M*I)*q,e[11]=(_*R-g*L-x*I)*q,e[12]=(h*N-u*V-m*T)*q,e[13]=(i*V-r*N+o*T)*q,e[14]=(w*z-b*O-y*I)*q,e[15]=(g*O-_*z+v*I)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,w=u*g,y=u*_,M=h*_,I=m*d,z=m*g,R=m*_,O=r.x,L=r.y,B=r.z;return o[0]=(1-(w+M))*O,o[1]=(x+R)*O,o[2]=(b-z)*O,o[3]=0,o[4]=(x-R)*L,o[5]=(1-(v+M))*L,o[6]=(y+I)*L,o[7]=0,o[8]=(b+z)*B,o[9]=(y-I)*B,o[10]=(1-(v+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=no.set(o[0],o[1],o[2]).length();const h=no.set(o[4],o[5],o[6]).length(),m=no.set(o[8],o[9],o[10]).length();c<0&&(u=-u),sa.copy(this);const d=1/u,g=1/h,_=1/m;return sa.elements[0]*=d,sa.elements[1]*=d,sa.elements[2]*=d,sa.elements[4]*=g,sa.elements[5]*=g,sa.elements[6]*=g,sa.elements[8]*=_,sa.elements[9]*=_,sa.elements[10]*=_,i.setFromRotationMatrix(sa),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ya,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let b,w;if(m)b=c/(u-c),w=u*c/(u-c);else if(h===ya)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===bu)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ya,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,w;if(m)b=1/(u-c),w=u/(u-c);else if(h===ya)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===bu)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Ru.prototype.isMatrix4=!0;let Cn=Ru;const no=new te,sa=new Cn,TE=new te(0,0,0),AE=new te(1,1,1),Ns=new te,Wc=new te,Ui=new te,q_=new Cn,j_=new Co;class Sr{constructor(e=0,i=0,r=0,o=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return j_.setFromEuler(this),this.setFromQuaternion(j_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RE=0;const Z_=new te,io=new Co,Xa=new Cn,Yc=new te,vl=new te,CE=new te,wE=new Co,K_=new te(1,0,0),Q_=new te(0,1,0),J_=new te(0,0,1),$_={type:"added"},DE={type:"removed"},ao={type:"childadded",child:null},Zd={type:"childremoved",child:null};class Pi extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pi.DEFAULT_UP.clone();const e=new te,i=new Sr,r=new Co,o=new te(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Cn},normalMatrix:{value:new ut}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=Pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return io.setFromAxisAngle(e,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,i){return io.setFromAxisAngle(e,i),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(K_,e)}rotateY(e){return this.rotateOnAxis(Q_,e)}rotateZ(e){return this.rotateOnAxis(J_,e)}translateOnAxis(e,i){return Z_.copy(e).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(K_,e)}translateY(e){return this.translateOnAxis(Q_,e)}translateZ(e){return this.translateOnAxis(J_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Yc.copy(e):Yc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xa.lookAt(vl,Yc,this.up):Xa.lookAt(Yc,vl,this.up),this.quaternion.setFromRotationMatrix(Xa),o&&(Xa.extractRotation(o.matrixWorld),io.setFromRotationMatrix(Xa),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($_),ao.child=e,this.dispatchEvent(ao),ao.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DE),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($_),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,CE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,wE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pi.DEFAULT_UP=new te(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Tl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},qc={h:0,s:0,l:0};function Qd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Lt.workingColorSpace){if(e=Lp(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Qd(u,c,e+1/3),this.g=Qd(u,c,e),this.b=Qd(u,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,i=di){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=Ex[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Lt.workingToColorSpace(ai.copy(this),e),Math.round(yt(ai.r*255,0,255))*65536+Math.round(yt(ai.g*255,0,255))*256+Math.round(yt(ai.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(ai.copy(this),i);const r=ai.r,o=ai.g,c=ai.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(ai.copy(this),i),e.r=ai.r,e.g=ai.g,e.b=ai.b,e}getStyle(e=di){Lt.workingToColorSpace(ai.copy(this),e);const i=ai.r,r=ai.g,o=ai.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+i,Us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Us),e.getHSL(qc);const r=Dl(Us.h,qc.h,i),o=Dl(Us.s,qc.s,i),c=Dl(Us.l,qc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ai=new Ut;Ut.NAMES=Ex;class NE extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ra=new te,Wa=new te,Jd=new te,Ya=new te,so=new te,ro=new te,ev=new te,$d=new te,eh=new te,th=new te,nh=new Mn,ih=new Mn,ah=new Mn;class la{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ra.subVectors(e,i),o.cross(ra);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ra.subVectors(o,i),Wa.subVectors(r,i),Jd.subVectors(e,i);const u=ra.dot(ra),h=ra.dot(Wa),m=ra.dot(Jd),d=Wa.dot(Wa),g=Wa.dot(Jd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ya.x),m.addScaledVector(u,Ya.y),m.addScaledVector(h,Ya.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(nh,c.x),u.addScaledVector(ih,c.y),u.addScaledVector(ah,c.z),u}static isFrontFacing(e,i,r,o){return ra.subVectors(r,i),Wa.subVectors(e,i),ra.cross(Wa).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ra.subVectors(this.c,this.b),Wa.subVectors(this.a,this.b),ra.cross(Wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return la.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return la.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return la.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return la.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return la.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;so.subVectors(o,r),ro.subVectors(c,r),$d.subVectors(e,r);const m=so.dot($d),d=ro.dot($d);if(m<=0&&d<=0)return i.copy(r);eh.subVectors(e,o);const g=so.dot(eh),_=ro.dot(eh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(so,u);th.subVectors(e,c);const x=so.dot(th),b=ro.dot(th);if(b>=0&&x<=b)return i.copy(c);const w=x*d-m*b;if(w<=0&&d>=0&&b<=0)return h=d/(d-b),i.copy(r).addScaledVector(ro,h);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return ev.subVectors(c,o),h=(_-g)/(_-g+(x-b)),i.copy(o).addScaledVector(ev,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(so,u).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Il{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(oa.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(oa.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=oa.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,oa):oa.fromBufferAttribute(c,u),oa.applyMatrix4(e.matrixWorld),this.expandByPoint(oa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oa),oa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),Zc.subVectors(this.max,xl),oo.subVectors(e.a,xl),lo.subVectors(e.b,xl),co.subVectors(e.c,xl),Os.subVectors(lo,oo),Ps.subVectors(co,lo),or.subVectors(oo,co);let i=[0,-Os.z,Os.y,0,-Ps.z,Ps.y,0,-or.z,or.y,Os.z,0,-Os.x,Ps.z,0,-Ps.x,or.z,0,-or.x,-Os.y,Os.x,0,-Ps.y,Ps.x,0,-or.y,or.x,0];return!sh(i,oo,lo,co,Zc)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,oo,lo,co,Zc))?!1:(Kc.crossVectors(Os,Ps),i=[Kc.x,Kc.y,Kc.z],sh(i,oo,lo,co,Zc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qa=[new te,new te,new te,new te,new te,new te,new te,new te],oa=new te,jc=new Il,oo=new te,lo=new te,co=new te,Os=new te,Ps=new te,or=new te,xl=new te,Zc=new te,Kc=new te,lr=new te;function sh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){lr.fromArray(a,c);const h=o.x*Math.abs(lr.x)+o.y*Math.abs(lr.y)+o.z*Math.abs(lr.z),m=e.dot(lr),d=i.dot(lr),g=r.dot(lr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const On=new te,Qc=new Gt;let UE=0;class Ta extends Mr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=z_,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Qc.fromBufferAttribute(this,i),Qc.applyMatrix3(e),this.setXY(i,Qc.x,Qc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyMatrix3(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyMatrix4(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyNormalMatrix(e),this.setXYZ(i,On.x,On.y,On.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.transformDirection(e),this.setXYZ(i,On.x,On.y,On.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=mo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=mo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=mo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=mo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=mo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array),o=ci(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array),o=ci(o,this.array),c=ci(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class bx extends Ta{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Tx extends Ta{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ji extends Ta{constructor(e,i,r){super(new Float32Array(e),i,r)}}const OE=new Il,Sl=new te,rh=new te;class Up{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):OE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const i=Sl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Sl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(rh)),this.expandByPoint(Sl.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PE=0;const Wi=new Cn,oh=new Pi,uo=new te,Oi=new Il,Ml=new Il,Xn=new te;class Ki extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?Tx:bx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,i,r){return Wi.makeTranslation(e,i,r),this.applyMatrix4(Wi),this}scale(e,i,r){return Wi.makeScale(e,i,r),this.applyMatrix4(Wi),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ji(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Oi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];Ml.setFromBufferAttribute(h),this.morphTargetsRelative?(Xn.addVectors(Oi.min,Ml.min),Oi.expandByPoint(Xn),Xn.addVectors(Oi.max,Ml.max),Oi.expandByPoint(Xn)):(Oi.expandByPoint(Ml.min),Oi.expandByPoint(Ml.max))}Oi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Xn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Xn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Xn.fromBufferAttribute(h,d),m&&(uo.fromBufferAttribute(e,d),Xn.add(uo)),o=Math.max(o,r.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ta(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new te,m[T]=new te;const d=new te,g=new te,_=new te,v=new Gt,x=new Gt,b=new Gt,w=new te,y=new te;function M(T,N,X){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,X),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),b.fromBufferAttribute(c,X),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(V),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),h[T].add(w),h[N].add(w),h[X].add(w),m[T].add(y),m[N].add(y),m[X].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,N=I.length;T<N;++T){const X=I[T],V=X.start,j=X.count;for(let ce=V,fe=V+j;ce<fe;ce+=3)M(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const z=new te,R=new te,O=new te,L=new te;function B(T){O.fromBufferAttribute(o,T),L.copy(O);const N=h[T];z.copy(N),z.sub(O.multiplyScalar(O.dot(N))).normalize(),R.crossVectors(L,N);const V=R.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,N=I.length;T<N;++T){const X=I[T],V=X.start,j=X.count;for(let ce=V,fe=V+j;ce<fe;ce+=3)B(e.getX(ce+0)),B(e.getX(ce+1)),B(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ta(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new te,c=new te,u=new te,h=new te,m=new te,d=new te,g=new te,_=new te;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Xn.fromBufferAttribute(e,i),Xn.normalize(),e.setXYZ(i,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[b++]=d[x++]}return new Ta(v,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let IE=0;class wu extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=vo,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Lh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Dh&&(r.blendSrc=this.blendSrc),this.blendDst!==Lh&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Gt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ja=new te,lh=new te,Jc=new te,Is=new te,ch=new te,$c=new te,uh=new te;class FE{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ja.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,i),ja.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){lh.copy(e).add(i).multiplyScalar(.5),Jc.copy(i).sub(e).normalize(),Is.copy(this.origin).sub(lh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Jc),h=Is.dot(this.direction),m=-Is.dot(Jc),d=Is.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(lh).addScaledVector(Jc,v),x}intersectSphere(e,i){ja.subVectors(e.center,this.origin);const r=ja.dot(this.direction),o=ja.dot(ja)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,i,r,o,c){ch.subVectors(i,e),$c.subVectors(r,e),uh.crossVectors(ch,$c);let u=this.direction.dot(uh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Is.subVectors(this.origin,e);const m=h*this.direction.dot($c.crossVectors(Is,$c));if(m<0)return null;const d=h*this.direction.dot(ch.cross(Is));if(d<0||m+d>u)return null;const g=-h*Is.dot(uh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Op extends wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tv=new Cn,cr=new FE,eu=new Up,nv=new te,tu=new te,nu=new te,iu=new te,fh=new te,au=new te,iv=new te,su=new te;class Zi extends Pi{constructor(e=new Ki,i=new Op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){au.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(fh.fromBufferAttribute(_,e),u?au.addScaledVector(fh,g):au.addScaledVector(fh.sub(i),g))}i.add(au)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(c),cr.copy(e.ray).recast(e.near),!(eu.containsPoint(cr.origin)===!1&&(cr.intersectSphere(eu,nv)===null||cr.origin.distanceToSquared(nv)>(e.far-e.near)**2))&&(tv.copy(c).invert(),cr.copy(e.ray).applyMatrix4(tv),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=h.getX(R),B=h.getX(R+1),T=h.getX(R+2);o=ru(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=h.getX(y),z=h.getX(y+1),R=h.getX(y+2);o=ru(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=R,B=R+1,T=R+2;o=ru(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=y,z=y+1,R=y+2;o=ru(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function BE(a,e,i,r,o,c,u,h){let m;if(e.side===Ei?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===$a,h),m===null)return null;su.copy(h),su.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(su);return d<i.near||d>i.far?null:{distance:d,point:su.clone(),object:a}}function ru(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,tu),a.getVertexPosition(m,nu),a.getVertexPosition(d,iu);const g=BE(a,e,i,r,tu,nu,iu,iv);if(g){const _=new te;la.getBarycoord(iv,tu,nu,iu,_),o&&(g.uv=la.getInterpolatedAttribute(o,h,m,d,_,new Gt)),c&&(g.uv1=la.getInterpolatedAttribute(c,h,m,d,_,new Gt)),u&&(g.normal=la.getInterpolatedAttribute(u,h,m,d,_,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new te,materialIndex:0};la.getNormal(tu,nu,iu,v.normal),g.face=v,g.barycoord=_}return g}class zE extends si{constructor(e=null,i=1,r=1,o,c,u,h,m,d=$n,g=$n,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new te,HE=new te,GE=new ut;class dr{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=dh.subVectors(r,i).cross(HE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(dh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||GE.getNormalMatrix(e),o=this.coplanarPoint(dh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Up,VE=new Gt(.5,.5),ou=new te;class Ax{constructor(e=new dr,i=new dr,r=new dr,o=new dr,c=new dr,u=new dr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ya,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],y=c[10],M=c[11],I=c[12],z=c[13],R=c[14],O=c[15];if(o[0].setComponents(d-u,x-g,M-b,O-I).normalize(),o[1].setComponents(d+u,x+g,M+b,O+I).normalize(),o[2].setComponents(d+h,x+_,M+w,O+z).normalize(),o[3].setComponents(d-h,x-_,M-w,O-z).normalize(),r)o[4].setComponents(m,v,y,R).normalize(),o[5].setComponents(d-m,x-v,M-y,O-R).normalize();else if(o[4].setComponents(d-m,x-v,M-y,O-R).normalize(),i===ya)o[5].setComponents(d+m,x+v,M+y,O+R).normalize();else if(i===bu)o[5].setComponents(m,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const i=VE.distanceTo(e.center);return ur.radius=.7071067811865476+i,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(ou.x=o.normal.x>0?e.max.x:e.min.x,ou.y=o.normal.y>0?e.max.y:e.min.y,ou.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rx extends si{constructor(e=[],i=vr,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends si{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class To extends si{constructor(e,i,r=Aa,o,c,u,h=$n,m=$n,d,g=ts,_=1){if(g!==ts&&g!==gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kE extends To{constructor(e,i=Aa,r=vr,o,c,u=$n,h=$n,m,d=ts){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wx extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fl extends Ki{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new ji(d,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(_,2));function b(w,y,M,I,z,R,O,L,B,T,N){const X=R/B,V=O/T,j=R/2,ce=O/2,fe=L/2,q=B+1,F=T+1;let H=0,$=0;const ge=new te;for(let xe=0;xe<F;xe++){const P=xe*V-ce;for(let K=0;K<q;K++){const Se=K*X-j;ge[w]=Se*I,ge[y]=P*z,ge[M]=fe,d.push(ge.x,ge.y,ge.z),ge[w]=0,ge[y]=0,ge[M]=L>0?1:-1,g.push(ge.x,ge.y,ge.z),_.push(K/B),_.push(1-xe/T),H+=1}}for(let xe=0;xe<T;xe++)for(let P=0;P<B;P++){const K=v+P+q*xe,Se=v+P+q*(xe+1),Ae=v+(P+1)+q*(xe+1),De=v+(P+1)+q*xe;m.push(K,Se,De),m.push(Se,Ae,De),$+=6}h.addGroup(x,$,N),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class XE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new Gt:new te);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new te,o=[],c=[],u=[],h=new te,m=new Cn;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new te)}c[0]=new te,u[0]=new te;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(yt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(yt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Pp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const av=new te,sv=new te,hh=new Pp,ph=new Pp,mh=new Pp;class WE extends XE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new te){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(sv.subVectors(o[0],o[1]).add(o[0]),d=sv);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(av.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=av),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),hh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,b,w,y),ph.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,b,w,y),mh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,b,w,y)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),ph.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),mh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(hh.calc(m),ph.calc(m),mh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class _r extends Ki{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],b=[],w=[],y=[];for(let M=0;M<g;M++){const I=M*v-u;for(let z=0;z<d;z++){const R=z*_-c;b.push(R,-I,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let I=0;I<h;I++){const z=I+d*M,R=I+d*(M+1),O=I+1+d*(M+1),L=I+1+d*M;x.push(z,R,L),x.push(R,O,L)}this.setIndex(x),this.setAttribute("position",new ji(b,3)),this.setAttribute("normal",new ji(w,3)),this.setAttribute("uv",new ji(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ao(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(rv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(rv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ui(a){const e={};for(let i=0;i<a.length;i++){const r=Ao(a[i]);for(const o in r)e[o]=r[o]}return e}function rv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function YE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Dx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const qE={clone:Ao,merge:ui};var jE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=YE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[r].value=new Gt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Mn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Cn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class KE extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class QE extends wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JE extends wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lu=new te,cu=new Co,_a=new te;class Lx extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lu,cu,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,_a.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(lu,cu,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fs=new te,ov=new Gt,lv=new Gt;class Yi extends Lx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,i){return this.getViewBounds(e,ov,lv),i.subVectors(lv,ov)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Nx extends Lx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const fo=-90,ho=1;class $E extends Pi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yi(fo,ho,e,i);o.layers=this.layers,this.add(o);const c=new Yi(fo,ho,e,i);c.layers=this.layers,this.add(c);const u=new Yi(fo,ho,e,i);u.layers=this.layers,this.add(u);const h=new Yi(fo,ho,e,i);h.layers=this.layers,this.add(h);const m=new Yi(fo,ho,e,i);m.layers=this.layers,this.add(m);const d=new Yi(fo,ho,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===ya)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class eb extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yp=class Yp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Yp.prototype.isMatrix2=!0;let cv=Yp;function uv(a,e,i,r){const o=tb(r);switch(i){case _x:return a*e;case xx:return a*e/o.components*o.byteLength;case Ap:return a*e/o.components*o.byteLength;case xr:return a*e*2/o.components*o.byteLength;case Rp:return a*e*2/o.components*o.byteLength;case vx:return a*e*3/o.components*o.byteLength;case ua:return a*e*4/o.components*o.byteLength;case Cp:return a*e*4/o.components*o.byteLength;case pu:case mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case gu:case _u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(a,16)*Math.max(e,8)/4;case Gh:case kh:return Math.max(a,8)*Math.max(e,8)/2;case Wh:case Yh:case jh:case Zh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case qh:case Su:case Kh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case ep:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case tp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case np:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ip:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ap:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case sp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case op:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case lp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case cp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case up:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case fp:case dp:case hp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case pp:case mp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Mu:case gp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tb(a){switch(a){case qi:case hx:return{byteLength:1,components:1};case Nl:case px:case es:return{byteLength:2,components:1};case bp:case Tp:return{byteLength:2,components:4};case Aa:case Ep:case Ma:return{byteLength:4,components:1};case mx:case gx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ux(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function nb(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
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
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
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
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
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
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gb=`#ifdef USE_IRIDESCENCE
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
#endif`,_b=`#ifdef USE_BUMPMAP
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
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ab=`#define PI 3.141592653589793
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
} // validated`,Rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cb=`vec3 transformedNormal = objectNormal;
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
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xb=`#ifdef USE_GRADIENTMAP
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
}`,Wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
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
#endif`,t1=`uniform sampler2D dfgLUT;
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V1=`float getShadowMask() {
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
}`,k1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
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
}`,uT=`#if DEPTH_PACKING == 3200
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
}`,fT=`#define DISTANCE
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
}`,dT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,vT=`uniform vec3 diffuse;
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
}`,xT=`#define LAMBERT
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
}`,ST=`#define LAMBERT
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
}`,MT=`#define MATCAP
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
}`,yT=`#define MATCAP
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
}`,ET=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,AT=`#define PHONG
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
}`,RT=`#define STANDARD
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
}`,CT=`#define STANDARD
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
}`,wT=`#define TOON
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
}`,DT=`#define TOON
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
}`,LT=`uniform float size;
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
}`,NT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,OT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,IT=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:ib,alphahash_pars_fragment:ab,alphamap_fragment:sb,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:ub,batching_pars_vertex:fb,batching_vertex:db,begin_vertex:hb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:_b,clipping_planes_fragment:vb,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:Sb,clipping_planes_vertex:Mb,color_fragment:yb,color_pars_fragment:Eb,color_pars_vertex:bb,color_vertex:Tb,common:Ab,cube_uv_reflection_fragment:Rb,defaultnormal_vertex:Cb,displacementmap_pars_vertex:wb,displacementmap_vertex:Db,emissivemap_fragment:Lb,emissivemap_pars_fragment:Nb,colorspace_fragment:Ub,colorspace_pars_fragment:Ob,envmap_fragment:Pb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Fb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Zb,envmap_vertex:zb,fog_vertex:Hb,fog_pars_vertex:Gb,fog_fragment:Vb,fog_pars_fragment:kb,gradientmap_pars_fragment:Xb,lightmap_pars_fragment:Wb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:qb,lights_pars_begin:jb,lights_toon_fragment:Kb,lights_toon_pars_fragment:Qb,lights_phong_fragment:Jb,lights_phong_pars_fragment:$b,lights_physical_fragment:e1,lights_physical_pars_fragment:t1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:a1,lightprobes_pars_fragment:s1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:c1,map_fragment:u1,map_pars_fragment:f1,map_particle_fragment:d1,map_particle_pars_fragment:h1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:_1,morphnormal_vertex:v1,morphtarget_pars_vertex:x1,morphtarget_vertex:S1,normal_fragment_begin:M1,normal_fragment_maps:y1,normal_pars_fragment:E1,normal_pars_vertex:b1,normal_vertex:T1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:D1,opaque_fragment:L1,packing:N1,premultiplied_alpha_fragment:U1,project_vertex:O1,dithering_fragment:P1,dithering_pars_fragment:I1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:H1,shadowmap_vertex:G1,shadowmask_pars_fragment:V1,skinbase_vertex:k1,skinning_pars_vertex:X1,skinning_vertex:W1,skinnormal_vertex:Y1,specularmap_fragment:q1,specularmap_pars_fragment:j1,tonemapping_fragment:Z1,tonemapping_pars_fragment:K1,transmission_fragment:Q1,transmission_pars_fragment:J1,uv_pars_fragment:$1,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:aT,backgroundCube_vert:sT,backgroundCube_frag:rT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distance_vert:fT,distance_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:vT,meshlambert_vert:xT,meshlambert_frag:ST,meshmatcap_vert:MT,meshmatcap_frag:yT,meshnormal_vert:ET,meshnormal_frag:bT,meshphong_vert:TT,meshphong_frag:AT,meshphysical_vert:RT,meshphysical_frag:CT,meshtoon_vert:wT,meshtoon_frag:DT,points_vert:LT,points_frag:NT,shadow_vert:UT,shadow_frag:OT,sprite_vert:PT,sprite_frag:IT},He={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},xa={basic:{uniforms:ui([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:ui([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:ui([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:ui([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:ui([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ut(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:ui([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:ui([He.points,He.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:ui([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:ui([He.common,He.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:ui([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:ui([He.sprite,He.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:ui([He.common,He.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:ui([He.lights,He.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};xa.physical={uniforms:ui([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const uu={r:0,b:0,g:0},FT=new Cn,Ox=new ut;Ox.set(-1,0,0,0,1,0,0,0,1);function BT(a,e,i,r,o,c){const u=new Ut(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const R=I.backgroundBlurriness>0;z=e.get(z,R)}return z}function b(I){let z=!1;const R=x(I);R===null?y(u,h):R&&R.isColor&&(y(R,1),z=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(I,z){const R=x(z);R&&(R.isCubeTexture||R.mapping===Cu)?(d===void 0&&(d=new Zi(new Fl(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ao(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ox),d.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Qt,(g!==R||_!==R.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Zi(new _r(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ao(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,z){I.getRGB(uu,Dx(a)),i.buffers.color.setClear(uu.r,uu.g,uu.b,z,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,z=1){u.set(I),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:b,addToRenderList:w,dispose:M}}function zT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(V,j,ce,fe,q){let F=!1;const H=_(V,fe,ce,j);c!==H&&(c=H,d(c.object)),F=x(V,fe,ce,q),F&&b(V,fe,ce,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,R(V,j,ce,fe),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function d(V){return a.bindVertexArray(V)}function g(V){return a.deleteVertexArray(V)}function _(V,j,ce,fe){const q=fe.wireframe===!0;let F=r[j.id];F===void 0&&(F={},r[j.id]=F);const H=V.isInstancedMesh===!0?V.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let ge=$[ce.id];ge===void 0&&(ge={},$[ce.id]=ge);let xe=ge[q];return xe===void 0&&(xe=v(m()),ge[q]=xe),xe}function v(V){const j=[],ce=[],fe=[];for(let q=0;q<i;q++)j[q]=0,ce[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:fe,object:V,attributes:{},index:null}}function x(V,j,ce,fe){const q=c.attributes,F=j.attributes;let H=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){const P=q[ge];let K=F[ge];if(K===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==fe}function b(V,j,ce,fe){const q={},F=j.attributes;let H=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){let P=F[ge];P===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),q[ge]=K,H++}c.attributes=q,c.attributesNum=H,c.index=fe}function w(){const V=c.newAttributes;for(let j=0,ce=V.length;j<ce;j++)V[j]=0}function y(V){M(V,0)}function M(V,j){const ce=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ce[V]=1,fe[V]===0&&(a.enableVertexAttribArray(V),fe[V]=1),q[V]!==j&&(a.vertexAttribDivisor(V,j),q[V]=j)}function I(){const V=c.newAttributes,j=c.enabledAttributes;for(let ce=0,fe=j.length;ce<fe;ce++)j[ce]!==V[ce]&&(a.disableVertexAttribArray(ce),j[ce]=0)}function z(V,j,ce,fe,q,F,H){H===!0?a.vertexAttribIPointer(V,j,ce,q,F):a.vertexAttribPointer(V,j,ce,fe,q,F)}function R(V,j,ce,fe){w();const q=fe.attributes,F=ce.getAttributes(),H=j.defaultAttributeValues;for(const $ in F){const ge=F[$];if(ge.location>=0){let xe=q[$];if(xe===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor)),xe!==void 0){const P=xe.normalized,K=xe.itemSize,Se=e.get(xe);if(Se===void 0)continue;const Ae=Se.buffer,De=Se.type,ae=Se.bytesPerElement,ye=De===a.INT||De===a.UNSIGNED_INT||xe.gpuType===Ep;if(xe.isInterleavedBufferAttribute){const Ee=xe.data,ke=Ee.stride,at=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let $e=0;$e<ge.locationSize;$e++)M(ge.location+$e,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let $e=0;$e<ge.locationSize;$e++)y(ge.location+$e);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let $e=0;$e<ge.locationSize;$e++)z(ge.location+$e,K/ge.locationSize,De,P,ke*ae,(at+K/ge.locationSize*$e)*ae,ye)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<ge.locationSize;Ee++)M(ge.location+Ee,xe.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<ge.locationSize;Ee++)y(ge.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<ge.locationSize;Ee++)z(ge.location+Ee,K/ge.locationSize,De,P,K*ae,K/ge.locationSize*Ee*ae,ye)}}else if(H!==void 0){const P=H[$];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(ge.location,P);break;case 3:a.vertexAttrib3fv(ge.location,P);break;case 4:a.vertexAttrib4fv(ge.location,P);break;default:a.vertexAttrib1fv(ge.location,P)}}}}I()}function O(){N();for(const V in r){const j=r[V];for(const ce in j){const fe=j[ce];for(const q in fe){const F=fe[q];for(const H in F)g(F[H].object),delete F[H];delete fe[q]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const j=r[V.id];for(const ce in j){const fe=j[ce];for(const q in fe){const F=fe[q];for(const H in F)g(F[H].object),delete F[H];delete fe[q]}}delete r[V.id]}function B(V){for(const j in r){const ce=r[j];for(const fe in ce){const q=ce[fe];if(q[V.id]===void 0)continue;const F=q[V.id];for(const H in F)g(F[H].object),delete F[H];delete q[V.id]}}}function T(V){for(const j in r){const ce=r[j],fe=V.isInstancedMesh===!0?V.id:0,q=ce[fe];if(q!==void 0){for(const F in q){const H=q[F];for(const $ in H)g(H[$].object),delete H[$];delete q[F]}delete ce[fe],Object.keys(ce).length===0&&delete r[j]}}}function N(){X(),u=!0,c!==o&&(c=o,d(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:X,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function HT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function GT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==ua&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==qi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ma&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ot("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:R,maxSamples:O,samples:L}}function VT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new dr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):d();else{const I=c?0:r,z=I*4;let R=M.clippingState||null;m.value=R,R=g(b,v,z,x);for(let O=0;O!==z;++O)R[O]=i[O];M.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const M=x+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,R=x;z!==w;++z,R+=4)u.copy(_[z]).applyMatrix4(I,h),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Hs=4,fv=[.125,.215,.35,.446,.526,.582],pr=20,kT=256,yl=new Nx,dv=new Ut;let gh=null,_h=0,vh=0,xh=!1;const XT=new te;class hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=XT}=c;gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vr||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:es,format:ua,colorSpace:yu,depthBuffer:!1},o=pv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WT(c)),this._blurMaterial=qT(c,e,i),this._ggxMaterial=YT(c,e,i)}return o}_compileMaterial(e){const i=new Zi(new Ki,e);this._renderer.compile(i,yl)}_sceneToCubeUV(e,i,r,o,c){const m=new Yi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(dv),_.toneMapping=Ea,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zi(new Fl,new Op({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,M=!0):(y.color.copy(dv),M=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):R===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const O=this._cubeSize;po(o,R*O,z>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===vr||e.mapping===bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;po(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,yl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-Hs?r-b+Hs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,po(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,yl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,po(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,yl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*pr-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):pr;y>pr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${pr}`);const M=[];let I=0;for(let B=0;B<pr;++B){const T=B/w,N=Math.exp(-T*T/2);M.push(N),B===0?I+=N:B<y&&(I+=2*N)}for(let B=0;B<M.length;B++)M[B]=M[B]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:z}=this;v.dTheta.value=b,v.mipInt.value=z-r;const R=this._sizeLods[o],O=3*R*(o>z-Hs?o-z+Hs:0),L=4*(this._cubeSize-R);po(i,O,L,3*R,2*R),m.setRenderTarget(i),m.render(_,yl)}}function WT(a){const e=[],i=[],r=[];let o=a;const c=a-Hs+1+fv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Hs?m=fv[u-a+Hs-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,w=3,y=2,M=1,I=new Float32Array(w*b*x),z=new Float32Array(y*b*x),R=new Float32Array(M*b*x);for(let L=0;L<x;L++){const B=L%3*2/3-1,T=L>2?0:-1,N=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];I.set(N,w*b*L),z.set(v,y*b*L);const X=[L,L,L,L,L,L];R.set(X,M*b*L)}const O=new Ki;O.setAttribute("position",new Ta(I,w)),O.setAttribute("uv",new Ta(z,y)),O.setAttribute("faceIndex",new Ta(R,M)),r.push(new Zi(O,null)),o>Hs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function pv(a,e,i){const r=new ba(a,e,i);return r.texture.mapping=Cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function po(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function YT(a,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function qT(a,e,i){const r=new Float32Array(pr),o=new te(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function mv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function gv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}class Px extends ba{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Rx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Fl(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ei,blending:Qa});c.uniforms.tEquirect.value=i;const u=new Zi(o,c),h=i.minFilter;return i.minFilter===zs&&(i.minFilter=In),new $E(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function jT(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Vd||x===kd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new Px(b.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===Vd||x===kd,w=x===vr||x===bo;if(b||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new hv(a)),y=b?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return b&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new hv(a)),y=b?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Vd?v.mapping=vr:x===kd&&(v.mapping=bo),v}function m(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function ZT(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&xo("WebGLRenderer: "+r+" extension not supported."),o}}}function KT(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const I=x.array;w=x.version;for(let z=0,R=I.length;z<R;z+=3){const O=I[z+0],L=I[z+1],B=I[z+2];v.push(O,L,L,B,B,O)}}else{const I=b.array;w=b.version;for(let z=0,R=I.length/3-1;z<R;z+=3){const O=z+0,L=z+1,B=z+2;v.push(O,L,L,B,B,O)}}const y=new(b.count>=65535?Tx:bx)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function QT(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function JT(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function $T(a,e,i){const r=new WeakMap,o=new Mn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let X=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var x=X;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let R=0;b===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let O=h.attributes.position.count*R,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*L*4*_),T=new Mx(B,O,L,_);T.type=Ma,T.needsUpdate=!0;const N=R*4;for(let V=0;V<_;V++){const j=M[V],ce=I[V],fe=z[V],q=O*L*4*V;for(let F=0;F<j.count;F++){const H=F*N;b===!0&&(o.fromBufferAttribute(j,F),B[q+H+0]=o.x,B[q+H+1]=o.y,B[q+H+2]=o.z,B[q+H+3]=0),w===!0&&(o.fromBufferAttribute(ce,F),B[q+H+4]=o.x,B[q+H+5]=o.y,B[q+H+6]=o.z,B[q+H+7]=0),y===!0&&(o.fromBufferAttribute(fe,F),B[q+H+8]=o.x,B[q+H+9]=o.y,B[q+H+10]=o.z,B[q+H+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Gt(O,L)},r.set(h,v),h.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function eA(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const tA={[sx]:"LINEAR_TONE_MAPPING",[rx]:"REINHARD_TONE_MAPPING",[ox]:"CINEON_TONE_MAPPING",[lx]:"ACES_FILMIC_TONE_MAPPING",[ux]:"AGX_TONE_MAPPING",[fx]:"NEUTRAL_TONE_MAPPING",[cx]:"CUSTOM_TONE_MAPPING"};function nA(a,e,i,r,o,c){const u=new ba(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new To(e,i):void 0}),h=new ba(e,i,{type:es,depthBuffer:!1,stencilBuffer:!1}),m=new Ki;m.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ji([0,2,0,0,2,0],2));const d=new KE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Zi(m,d),_=new Nx(-1,1,1,-1,0,1);let v=null,x=null,b=!1,w,y=null,M=[],I=!1;this.setSize=function(z,R){u.setSize(z,R),h.setSize(z,R);for(let O=0;O<M.length;O++){const L=M[O];L.setSize&&L.setSize(z,R)}},this.setEffects=function(z){M=z,I=M.length>0&&M[0].isRenderPass===!0;const R=u.width,O=u.height;for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(R,O)}},this.begin=function(z,R){if(b||z.toneMapping===Ea&&M.length===0)return!1;if(y=R,R!==null){const O=R.width,L=R.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return I===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=Ea,!0},this.hasRenderPass=function(){return I},this.end=function(z,R){z.toneMapping=w,b=!0;let O=u,L=h;for(let B=0;B<M.length;B++){const T=M[B];if(T.enabled!==!1&&(T.render(z,L,O,R),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(v!==z.outputColorSpace||x!==z.toneMapping){v=z.outputColorSpace,x=z.toneMapping,d.defines={},Lt.getTransfer(v)===Qt&&(d.defines.SRGB_TRANSFER="");const B=tA[x];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(g,_),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const Ix=new si,_p=new To(1,1),Fx=new Mx,Bx=new bE,zx=new Rx,_v=[],vv=[],xv=new Float32Array(16),Sv=new Float32Array(9),Mv=new Float32Array(4);function wo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=_v[o];if(c===void 0&&(c=new Float32Array(o),_v[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Hn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Gn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Lu(a,e){let i=vv[e];i===void 0&&(i=new Int32Array(e),vv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function iA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function aA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Hn(i,e))return;a.uniform2fv(this.addr,e),Gn(i,e)}}function sA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Hn(i,e))return;a.uniform3fv(this.addr,e),Gn(i,e)}}function rA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Hn(i,e))return;a.uniform4fv(this.addr,e),Gn(i,e)}}function oA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Hn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Gn(i,e)}else{if(Hn(i,r))return;Mv.set(r),a.uniformMatrix2fv(this.addr,!1,Mv),Gn(i,r)}}function lA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Hn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Gn(i,e)}else{if(Hn(i,r))return;Sv.set(r),a.uniformMatrix3fv(this.addr,!1,Sv),Gn(i,r)}}function cA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Hn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Gn(i,e)}else{if(Hn(i,r))return;xv.set(r),a.uniformMatrix4fv(this.addr,!1,xv),Gn(i,r)}}function uA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Hn(i,e))return;a.uniform2iv(this.addr,e),Gn(i,e)}}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Hn(i,e))return;a.uniform3iv(this.addr,e),Gn(i,e)}}function hA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Hn(i,e))return;a.uniform4iv(this.addr,e),Gn(i,e)}}function pA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function mA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Hn(i,e))return;a.uniform2uiv(this.addr,e),Gn(i,e)}}function gA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Hn(i,e))return;a.uniform3uiv(this.addr,e),Gn(i,e)}}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Hn(i,e))return;a.uniform4uiv(this.addr,e),Gn(i,e)}}function vA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(_p.compareFunction=i.isReversedDepthBuffer()?Dp:wp,c=_p):c=Ix,i.setTexture2D(e||c,o)}function xA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Bx,o)}function SA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||zx,o)}function MA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Fx,o)}function yA(a){switch(a){case 5126:return iA;case 35664:return aA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return dA;case 35669:case 35673:return hA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}function EA(a,e){a.uniform1fv(this.addr,e)}function bA(a,e){const i=wo(e,this.size,2);a.uniform2fv(this.addr,i)}function TA(a,e){const i=wo(e,this.size,3);a.uniform3fv(this.addr,i)}function AA(a,e){const i=wo(e,this.size,4);a.uniform4fv(this.addr,i)}function RA(a,e){const i=wo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function CA(a,e){const i=wo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function wA(a,e){const i=wo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function DA(a,e){a.uniform1iv(this.addr,e)}function LA(a,e){a.uniform2iv(this.addr,e)}function NA(a,e){a.uniform3iv(this.addr,e)}function UA(a,e){a.uniform4iv(this.addr,e)}function OA(a,e){a.uniform1uiv(this.addr,e)}function PA(a,e){a.uniform2uiv(this.addr,e)}function IA(a,e){a.uniform3uiv(this.addr,e)}function FA(a,e){a.uniform4uiv(this.addr,e)}function BA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Hn(r,c)||(a.uniform1iv(this.addr,c),Gn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=_p:u=Ix;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function zA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Hn(r,c)||(a.uniform1iv(this.addr,c),Gn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Bx,c[u])}function HA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Hn(r,c)||(a.uniform1iv(this.addr,c),Gn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||zx,c[u])}function GA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Hn(r,c)||(a.uniform1iv(this.addr,c),Gn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Fx,c[u])}function VA(a){switch(a){case 5126:return EA;case 35664:return bA;case 35665:return TA;case 35666:return AA;case 35674:return RA;case 35675:return CA;case 35676:return wA;case 5124:case 35670:return DA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return OA;case 36294:return PA;case 36295:return IA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}class kA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=yA(i.type)}}class XA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VA(i.type)}}class WA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function yv(a,e){a.seq.push(e),a.map[e.id]=e}function YA(a,e,i){const r=a.name,o=r.length;for(Sh.lastIndex=0;;){const c=Sh.exec(r),u=Sh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){yv(i,d===void 0?new kA(h,a,e):new XA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new WA(h),yv(i,_)),i=_}}}class vu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);YA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Ev(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const qA=37297;let jA=0;function ZA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const bv=new ut;function KA(a){Lt._getMatrix(bv,Lt.workingColorSpace,a);const e=`mat3( ${bv.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(a)){case Eu:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Tv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+ZA(a.getShaderSource(e),h)}else return c}function QA(a,e){const i=KA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const JA={[sx]:"Linear",[rx]:"Reinhard",[ox]:"Cineon",[lx]:"ACESFilmic",[ux]:"AgX",[fx]:"Neutral",[cx]:"Custom"};function $A(a,e){const i=JA[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fu=new te;function e2(){Lt.getLuminanceCoefficients(fu);const a=fu.x.toFixed(4),e=fu.y.toFixed(4),i=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function n2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function i2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function Al(a){return a!==""}function Av(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(a){return a.replace(a2,r2)}const s2=new Map;function r2(a,e){let i=vt[e];if(i===void 0){const r=s2.get(e);if(r!==void 0)i=vt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vp(i)}const o2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(a){return a.replace(o2,l2)}function l2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function wv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const c2={[hu]:"SHADOWMAP_TYPE_PCF",[bl]:"SHADOWMAP_TYPE_VSM"};function u2(a){return c2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f2={[vr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function d2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":f2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const h2={[bo]:"ENVMAP_MODE_REFRACTION"};function p2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":h2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m2={[ax]:"ENVMAP_BLENDING_MULTIPLY",[Vy]:"ENVMAP_BLENDING_MIX",[ky]:"ENVMAP_BLENDING_ADD"};function g2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":m2[a.combine]||"ENVMAP_BLENDING_NONE"}function _2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function v2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=u2(i),d=d2(i),g=p2(i),_=g2(i),v=_2(i),x=t2(i),b=n2(c),w=o.createProgram();let y,M,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Al).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Al).join(`
`),M.length>0&&(M+=`
`)):(y=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),M=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ea?"#define TONE_MAPPING":"",i.toneMapping!==Ea?vt.tonemapping_pars_fragment:"",i.toneMapping!==Ea?$A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,QA("linearToOutputTexel",i.outputColorSpace),e2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Al).join(`
`)),u=vp(u),u=Av(u,i),u=Rv(u,i),h=vp(h),h=Av(h,i),h=Rv(h,i),u=Cv(u),h=Cv(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=I+y+u,R=I+M+h,O=Ev(o,o.VERTEX_SHADER,z),L=Ev(o,o.FRAGMENT_SHADER,R);o.attachShader(w,O),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(V){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(O)||"",fe=o.getShaderInfoLog(L)||"",q=j.trim(),F=ce.trim(),H=fe.trim();let $=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,L);else{const xe=Tv(o,O,"vertex"),P=Tv(o,L,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+xe+`
`+P)}else q!==""?ot("WebGLProgram: Program Info Log:",q):(F===""||H==="")&&(ge=!1);ge&&(V.diagnostics={runnable:$,programLog:q,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(L),T=new vu(o,w),N=i2(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(w,qA)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let x2=0;class S2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new M2(e),i.set(e,r)),r}}class M2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function y2(a){return a===xr||a===Su||a===Mu}function E2(a,e,i,r,o,c){const u=new yx,h=new S2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,X,V,j,ce){const fe=V.fog,q=j.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),ge=$&&$.mapping===Cu?$.image.height:null,xe=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=P!==void 0?P.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Ae,De,ae,ye;if(xe){const Xe=xa[xe];Ae=Xe.vertexShader,De=Xe.fragmentShader}else{Ae=T.vertexShader,De=T.fragmentShader;const Xe=h.getVertexShaderStage(T),ln=h.getFragmentShaderStage(T);h.update(T,Xe,ln),ae=Xe.id,ye=ln.id}const Ee=a.getRenderTarget(),ke=a.state.buffers.depth.getReversed(),at=j.isInstancedMesh===!0,$e=j.isBatchedMesh===!0,Jt=!!T.map,ft=!!T.matcap,xt=!!$,gt=!!T.aoMap,dt=!!T.lightMap,cn=!!T.bumpMap&&T.wireframe===!1,un=!!T.normalMap,rn=!!T.displacementMap,gn=!!T.emissiveMap,Ot=!!T.metalnessMap,on=!!T.roughnessMap,Z=T.anisotropy>0,Vt=T.clearcoat>0,St=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,re=Z&&!!T.anisotropyMap,ue=Vt&&!!T.clearcoatMap,Re=Vt&&!!T.clearcoatNormalMap,Le=Vt&&!!T.clearcoatRoughnessMap,he=U&&!!T.iridescenceMap,pe=U&&!!T.iridescenceThicknessMap,we=E&&!!T.sheenColorMap,Ge=E&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Oe=!!T.specularColorMap,et=!!T.specularIntensityMap,tt=Q&&!!T.transmissionMap,st=Q&&!!T.thicknessMap,k=!!T.gradientMap,Te=!!T.alphaMap,me=T.alphaTest>0,Ne=!!T.alphaHash,ze=!!T.extensions;let be=Ea;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=a.toneMapping);const je={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:De,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:$e,batchingColor:$e&&j._colorsTexture!==null,instancing:at,instancingColor:at&&j.instanceColor!==null,instancingMorph:at&&j.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:ft,envMap:xt,envMapMode:xt&&$.mapping,envMapCubeUVHeight:ge,aoMap:gt,lightMap:dt,bumpMap:cn,normalMap:un,displacementMap:rn,emissiveMap:gn,normalMapObjectSpace:un&&T.normalMapType===Yy,normalMapTangentSpace:un&&T.normalMapType===F_,packedNormalMap:un&&T.normalMapType===F_&&y2(T.normalMap.format),metalnessMap:Ot,roughnessMap:on,anisotropy:Z,anisotropyMap:re,clearcoat:Vt,clearcoatMap:ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:Le,dispersion:St,iridescence:U,iridescenceMap:he,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:Oe,specularIntensityMap:et,transmission:Q,transmissionMap:tt,thicknessMap:st,gradientMap:k,opaque:T.transparent===!1&&T.blending===vo&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:me,alphaHash:Ne,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:gt&&b(T.aoMap.channel),lightMapUv:dt&&b(T.lightMap.channel),bumpMapUv:cn&&b(T.bumpMap.channel),normalMapUv:un&&b(T.normalMap.channel),displacementMapUv:rn&&b(T.displacementMap.channel),emissiveMapUv:gn&&b(T.emissiveMap.channel),metalnessMapUv:Ot&&b(T.metalnessMap.channel),roughnessMapUv:on&&b(T.roughnessMap.channel),anisotropyMapUv:re&&b(T.anisotropyMap.channel),clearcoatMapUv:ue&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(T.sheenRoughnessMap.channel),specularMapUv:Fe&&b(T.specularMap.channel),specularColorMapUv:Oe&&b(T.specularColorMap.channel),specularIntensityMapUv:et&&b(T.specularIntensityMap.channel),transmissionMapUv:tt&&b(T.transmissionMap.channel),thicknessMapUv:st&&b(T.thicknessMap.channel),alphaMapUv:Te&&b(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(un||Z),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Jt||Te),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&un===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ke,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Qt,decodeVideoTextureEmissive:gn&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===Ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)N.push(X),N.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(M(N,T),I(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function I(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const N=x[T.type];let X;if(N){const V=xa[N];X=qE.clone(V.uniforms)}else X=T.uniforms;return X}function R(T,N){let X=g.get(N);return X!==void 0?++X.usedTimes:(X=new v2(a,N,T,o),d.push(X),g.set(N,X)),X}function O(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:B}}function b2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function T2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Dv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Lv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,y,M){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=b,I.materialVariant=u(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=y,I.group=M),e++,I}function m(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.push(I):b.transparent===!0?o.push(I):i.push(I)}function d(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.unshift(I):b.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,b){i.length>1&&i.sort(v||T2),r.length>1&&r.sort(x||Dv),o.length>1&&o.sort(x||Dv),b&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function A2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Lv,a.set(r,[u])):o>=c.length?(u=new Lv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function R2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Ut};break;case"SpotLight":i={position:new te,direction:new te,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=i,i}}}function C2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let w2=0;function D2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function L2(a){const e=new R2,i=C2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new te);const o=new te,c=new Cn,u=new Cn;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,b=0,w=0,y=0,M=0,I=0,z=0,R=0,O=0,L=0,B=0;d.sort(D2);for(let N=0,X=d.length;N<X;N++){const V=d[N],j=V.color,ce=V.intensity,fe=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===xr?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=j.r*ce,_+=j.g*ce,v+=j.b*ce;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ce);B++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=V.shadow.matrix,I++}r.directional[x]=F,x++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(j).multiplyScalar(ce),F.distance=fe,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[w]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,H.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=q,R++}w++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(j).multiplyScalar(ce),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=q,r.pointShadowMatrix[b]=V.shadow.matrix,z++}r.point[b]=F,b++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ce),F.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[M]=F,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==I||T.numPointShadows!==z||T.numSpotShadows!==R||T.numSpotMaps!==O||T.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=R+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=I,T.numPointShadows=z,T.numSpotShadows=R,T.numSpotMaps=O,T.numLightProbes=B,r.version=w2++)}function m(d,g){let _=0,v=0,x=0,b=0,w=0;const y=g.matrixWorldInverse;for(let M=0,I=d.length;M<I;M++){const z=d[M];if(z.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(z.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),b++}else if(z.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(z.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Nv(a){const e=new L2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function N2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Nv(a),e.set(o,[h])):c>=u.length?(h=new Nv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const U2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
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
}`,P2=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],I2=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Uv=new Cn,El=new te,Mh=new te;function F2(a,e,i){let r=new Ax;const o=new Gt,c=new Gt,u=new Mn,h=new QE,m=new JE,d={},g=i.maxTextureSize,_={[$a]:Ei,[Ei]:$a,[Sa]:Sa},v=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:U2,fragmentShader:O2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new Ki;b.setAttribute("position",new Ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Zi(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let M=this.type;this.render=function(L,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Ey&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hu);const N=a.getRenderTarget(),X=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Qa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=M!==this.type;ce&&B.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=L.length;fe<q;fe++){const F=L[fe],H=F.shadow;if(H===void 0){ot("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===bl){if(F.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ba(o.x,o.y,{format:xr,type:es,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new To(o.x,o.y,Ma),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=ts,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=$n,H.map.depthTexture.magFilter=$n}else F.isPointLight?(H.map=new Px(o.x),H.map.depthTexture=new kE(o.x,Aa)):(H.map=new ba(o.x,o.y),H.map.depthTexture=new To(o.x,o.y,Aa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=ts,this.type===hu?(H.map.depthTexture.compareFunction=ge?Dp:wp,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=$n,H.map.depthTexture.magFilter=$n);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,P),a.clear();else{P===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(u)}if(F.isPointLight){const K=H.camera,Se=H.matrix,Ae=F.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),El.setFromMatrixPosition(F.matrixWorld),K.position.copy(El),Mh.copy(K.position),Mh.add(P2[P]),K.up.copy(I2[P]),K.lookAt(Mh),K.updateMatrixWorld(),Se.makeTranslation(-El.x,-El.y,-El.z),Uv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Uv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),R(B,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===bl&&I(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,X,V)};function I(L,B){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ba(o.x,o.y,{format:xr,type:es})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,T,x,w,null)}function z(L,B,T,N){let X=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=X.uuid,ce=B.uuid;let fe=d[j];fe===void 0&&(fe={},d[j]=fe);let q=fe[ce];q===void 0&&(q=X.clone(),fe[ce]=q,B.addEventListener("dispose",O)),X=q}if(X.visible=B.visible,X.wireframe=B.wireframe,N===bl?X.side=B.shadowSide!==null?B.shadowSide:B.side:X.side=B.shadowSide!==null?B.shadowSide:_[B.side],X.alphaMap=B.alphaMap,X.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,X.map=B.map,X.clipShadows=B.clipShadows,X.clippingPlanes=B.clippingPlanes,X.clipIntersection=B.clipIntersection,X.displacementMap=B.displacementMap,X.displacementScale=B.displacementScale,X.displacementBias=B.displacementBias,X.wireframeLinewidth=B.wireframeLinewidth,X.linewidth=B.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const j=a.properties.get(X);j.light=T}return X}function R(L,B,T,N,X){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===bl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),fe=L.material;if(Array.isArray(fe)){const q=ce.groups;for(let F=0,H=q.length;F<H;F++){const $=q[F],ge=fe[$.materialIndex];if(ge&&ge.visible){const xe=z(L,ge,N,X);L.onBeforeShadow(a,L,B,T,ce,xe,$),a.renderBufferDirect(T,null,ce,xe,L,$),L.onAfterShadow(a,L,B,T,ce,xe,$)}}}else if(fe.visible){const q=z(L,fe,N,X);L.onBeforeShadow(a,L,B,T,ce,q,null),a.renderBufferDirect(T,null,ce,q,L,null),L.onAfterShadow(a,L,B,T,ce,q,null)}}const j=L.children;for(let ce=0,fe=j.length;ce<fe;ce++)R(j[ce],B,T,N,X)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const N=d[T],X=L.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function B2(a,e){function i(){let k=!1;const Te=new Mn;let me=null;const Ne=new Mn(0,0,0,0);return{setMask:function(ze){me!==ze&&!k&&(a.colorMask(ze,ze,ze,ze),me=ze)},setLocked:function(ze){k=ze},setClear:function(ze,be,je,Xe,ln){ln===!0&&(ze*=Xe,be*=Xe,je*=Xe),Te.set(ze,be,je,Xe),Ne.equals(Te)===!1&&(a.clearColor(ze,be,je,Xe),Ne.copy(Te))},reset:function(){k=!1,me=null,Ne.set(-1,0,0,0)}}}function r(){let k=!1,Te=!1,me=null,Ne=null,ze=null;return{setReversed:function(be){if(Te!==be){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=be;const Xe=ze;ze=null,this.setClear(Xe)}},getReversed:function(){return Te},setTest:function(be){be?Ee(a.DEPTH_TEST):ke(a.DEPTH_TEST)},setMask:function(be){me!==be&&!k&&(a.depthMask(be),me=be)},setFunc:function(be){if(Te&&(be=nE[be]),Ne!==be){switch(be){case Nh:a.depthFunc(a.NEVER);break;case Uh:a.depthFunc(a.ALWAYS);break;case Oh:a.depthFunc(a.LESS);break;case Eo:a.depthFunc(a.LEQUAL);break;case Ph:a.depthFunc(a.EQUAL);break;case Ih:a.depthFunc(a.GEQUAL);break;case Fh:a.depthFunc(a.GREATER);break;case Bh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ne=be}},setLocked:function(be){k=be},setClear:function(be){ze!==be&&(ze=be,Te&&(be=1-be),a.clearDepth(be))},reset:function(){k=!1,me=null,Ne=null,ze=null,Te=!1}}}function o(){let k=!1,Te=null,me=null,Ne=null,ze=null,be=null,je=null,Xe=null,ln=null;return{setTest:function(It){k||(It?Ee(a.STENCIL_TEST):ke(a.STENCIL_TEST))},setMask:function(It){Te!==It&&!k&&(a.stencilMask(It),Te=It)},setFunc:function(It,ei,ti){(me!==It||Ne!==ei||ze!==ti)&&(a.stencilFunc(It,ei,ti),me=It,Ne=ei,ze=ti)},setOp:function(It,ei,ti){(be!==It||je!==ei||Xe!==ti)&&(a.stencilOp(It,ei,ti),be=It,je=ei,Xe=ti)},setLocked:function(It){k=It},setClear:function(It){ln!==It&&(a.clearStencil(It),ln=It)},reset:function(){k=!1,Te=null,me=null,Ne=null,ze=null,be=null,je=null,Xe=null,ln=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new Ut(0,0,0),N=0,X=!1,V=null,j=null,ce=null,fe=null,q=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=$>=2);let xe=null,P={};const K=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),Ae=new Mn().fromArray(K),De=new Mn().fromArray(Se);function ae(k,Te,me,Ne){const ze=new Uint8Array(4),be=a.createTexture();a.bindTexture(k,be),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let je=0;je<me;je++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Te,0,a.RGBA,1,1,Ne,0,a.RGBA,a.UNSIGNED_BYTE,ze):a.texImage2D(Te+je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ze);return be}const ye={};ye[a.TEXTURE_2D]=ae(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=ae(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=ae(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=ae(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(Eo),cn(!1),un(O_),Ee(a.CULL_FACE),gt(Qa);function Ee(k){g[k]!==!0&&(a.enable(k),g[k]=!0)}function ke(k){g[k]!==!1&&(a.disable(k),g[k]=!1)}function at(k,Te){return v[k]!==Te?(a.bindFramebuffer(k,Te),v[k]=Te,k===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Te),k===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Te),!0):!1}function $e(k,Te){let me=b,Ne=!1;if(k){me=x.get(Te),me===void 0&&(me=[],x.set(Te,me));const ze=k.textures;if(me.length!==ze.length||me[0]!==a.COLOR_ATTACHMENT0){for(let be=0,je=ze.length;be<je;be++)me[be]=a.COLOR_ATTACHMENT0+be;me.length=ze.length,Ne=!0}}else me[0]!==a.BACK&&(me[0]=a.BACK,Ne=!0);Ne&&a.drawBuffers(me)}function Jt(k){return w!==k?(a.useProgram(k),w=k,!0):!1}const ft={[hr]:a.FUNC_ADD,[Ty]:a.FUNC_SUBTRACT,[Ay]:a.FUNC_REVERSE_SUBTRACT};ft[Ry]=a.MIN,ft[Cy]=a.MAX;const xt={[wy]:a.ZERO,[Dy]:a.ONE,[Ly]:a.SRC_COLOR,[Dh]:a.SRC_ALPHA,[Fy]:a.SRC_ALPHA_SATURATE,[Py]:a.DST_COLOR,[Uy]:a.DST_ALPHA,[Ny]:a.ONE_MINUS_SRC_COLOR,[Lh]:a.ONE_MINUS_SRC_ALPHA,[Iy]:a.ONE_MINUS_DST_COLOR,[Oy]:a.ONE_MINUS_DST_ALPHA,[By]:a.CONSTANT_COLOR,[zy]:a.ONE_MINUS_CONSTANT_COLOR,[Hy]:a.CONSTANT_ALPHA,[Gy]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(k,Te,me,Ne,ze,be,je,Xe,ln,It){if(k===Qa){y===!0&&(ke(a.BLEND),y=!1);return}if(y===!1&&(Ee(a.BLEND),y=!0),k!==by){if(k!==M||It!==X){if((I!==hr||O!==hr)&&(a.blendEquation(a.FUNC_ADD),I=hr,O=hr),It)switch(k){case vo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wh:a.blendFunc(a.ONE,a.ONE);break;case P_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case I_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Pt("WebGLState: Invalid blending: ",k);break}else switch(k){case vo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case P_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",k);break}z=null,R=null,L=null,B=null,T.set(0,0,0),N=0,M=k,X=It}return}ze=ze||Te,be=be||me,je=je||Ne,(Te!==I||ze!==O)&&(a.blendEquationSeparate(ft[Te],ft[ze]),I=Te,O=ze),(me!==z||Ne!==R||be!==L||je!==B)&&(a.blendFuncSeparate(xt[me],xt[Ne],xt[be],xt[je]),z=me,R=Ne,L=be,B=je),(Xe.equals(T)===!1||ln!==N)&&(a.blendColor(Xe.r,Xe.g,Xe.b,ln),T.copy(Xe),N=ln),M=k,X=!1}function dt(k,Te){k.side===Sa?ke(a.CULL_FACE):Ee(a.CULL_FACE);let me=k.side===Ei;Te&&(me=!me),cn(me),k.blending===vo&&k.transparent===!1?gt(Qa):gt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ne=k.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),gn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):ke(a.SAMPLE_ALPHA_TO_COVERAGE)}function cn(k){V!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),V=k)}function un(k){k!==My?(Ee(a.CULL_FACE),k!==j&&(k===O_?a.cullFace(a.BACK):k===yy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ke(a.CULL_FACE),j=k}function rn(k){k!==ce&&(H&&a.lineWidth(k),ce=k)}function gn(k,Te,me){k?(Ee(a.POLYGON_OFFSET_FILL),(fe!==Te||q!==me)&&(fe=Te,q=me,u.getReversed()&&(Te=-Te),a.polygonOffset(Te,me))):ke(a.POLYGON_OFFSET_FILL)}function Ot(k){k?Ee(a.SCISSOR_TEST):ke(a.SCISSOR_TEST)}function on(k){k===void 0&&(k=a.TEXTURE0+F-1),xe!==k&&(a.activeTexture(k),xe=k)}function Z(k,Te,me){me===void 0&&(xe===null?me=a.TEXTURE0+F-1:me=xe);let Ne=P[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},P[me]=Ne),(Ne.type!==k||Ne.texture!==Te)&&(xe!==me&&(a.activeTexture(me),xe=me),a.bindTexture(k,Te||ye[k]),Ne.type=k,Ne.texture=Te)}function Vt(){const k=P[xe];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function St(){try{a.compressedTexImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function E(){try{a.texSubImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Q(){try{a.texSubImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function re(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function ue(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Re(){try{a.texStorage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function Le(){try{a.texStorage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function he(){try{a.texImage2D(...arguments)}catch(k){Pt("WebGLState:",k)}}function pe(){try{a.texImage3D(...arguments)}catch(k){Pt("WebGLState:",k)}}function we(k){return _[k]!==void 0?_[k]:a.getParameter(k)}function Ge(k,Te){_[k]!==Te&&(a.pixelStorei(k,Te),_[k]=Te)}function Fe(k){Ae.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Oe(k){De.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function et(k,Te){let me=d.get(Te);me===void 0&&(me=new WeakMap,d.set(Te,me));let Ne=me.get(k);Ne===void 0&&(Ne=a.getUniformBlockIndex(Te,k.name),me.set(k,Ne))}function tt(k,Te){const Ne=d.get(Te).get(k);m.get(Te)!==Ne&&(a.uniformBlockBinding(Te,Ne,k.__bindingPointIndex),m.set(Te,Ne))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},xe=null,P={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new Ut(0,0,0),N=0,X=!1,V=null,j=null,ce=null,fe=null,q=null,Ae.set(0,0,a.canvas.width,a.canvas.height),De.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:ke,bindFramebuffer:at,drawBuffers:$e,useProgram:Jt,setBlending:gt,setMaterial:dt,setFlipSided:cn,setCullFace:un,setLineWidth:rn,setPolygonOffset:gn,setScissorTest:Ot,activeTexture:on,bindTexture:Z,unbindTexture:Vt,compressedTexImage2D:St,compressedTexImage3D:U,texImage2D:he,texImage3D:pe,pixelStorei:Ge,getParameter:we,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:Re,texStorage3D:Le,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Fe,viewport:Oe,reset:st}}function z2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Gt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,E){return b?new OffscreenCanvas(U,E):Tu("canvas")}function y(U,E,Q){let re=1;const ue=St(U);if((ue.width>Q||ue.height>Q)&&(re=Q/Math.max(ue.width,ue.height)),re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Re=Math.floor(re*ue.width),Le=Math.floor(re*ue.height);v===void 0&&(v=w(Re,Le));const he=E?w(Re,Le):v;return he.width=Re,he.height=Le,he.getContext("2d").drawImage(U,0,0,Re,Le),ot("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Re+"x"+Le+")."),he}else return"data"in U&&ot("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function M(U){return U.generateMipmaps}function I(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(U,E,Q,re,ue,Re=!1){if(U!==null){if(a[U]!==void 0)return a[U];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Le;re&&(Le=e.get("EXT_texture_norm16"),Le||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===a.RED&&(Q===a.FLOAT&&(he=a.R32F),Q===a.HALF_FLOAT&&(he=a.R16F),Q===a.UNSIGNED_BYTE&&(he=a.R8),Q===a.UNSIGNED_SHORT&&Le&&(he=Le.R16_EXT),Q===a.SHORT&&Le&&(he=Le.R16_SNORM_EXT)),E===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.R8UI),Q===a.UNSIGNED_SHORT&&(he=a.R16UI),Q===a.UNSIGNED_INT&&(he=a.R32UI),Q===a.BYTE&&(he=a.R8I),Q===a.SHORT&&(he=a.R16I),Q===a.INT&&(he=a.R32I)),E===a.RG&&(Q===a.FLOAT&&(he=a.RG32F),Q===a.HALF_FLOAT&&(he=a.RG16F),Q===a.UNSIGNED_BYTE&&(he=a.RG8),Q===a.UNSIGNED_SHORT&&Le&&(he=Le.RG16_EXT),Q===a.SHORT&&Le&&(he=Le.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RG8UI),Q===a.UNSIGNED_SHORT&&(he=a.RG16UI),Q===a.UNSIGNED_INT&&(he=a.RG32UI),Q===a.BYTE&&(he=a.RG8I),Q===a.SHORT&&(he=a.RG16I),Q===a.INT&&(he=a.RG32I)),E===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGB16UI),Q===a.UNSIGNED_INT&&(he=a.RGB32UI),Q===a.BYTE&&(he=a.RGB8I),Q===a.SHORT&&(he=a.RGB16I),Q===a.INT&&(he=a.RGB32I)),E===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),Q===a.UNSIGNED_INT&&(he=a.RGBA32UI),Q===a.BYTE&&(he=a.RGBA8I),Q===a.SHORT&&(he=a.RGBA16I),Q===a.INT&&(he=a.RGBA32I)),E===a.RGB&&(Q===a.UNSIGNED_SHORT&&Le&&(he=Le.RGB16_EXT),Q===a.SHORT&&Le&&(he=Le.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),E===a.RGBA){const pe=Re?Eu:Lt.getTransfer(ue);Q===a.FLOAT&&(he=a.RGBA32F),Q===a.HALF_FLOAT&&(he=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(he=pe===Qt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Le&&(he=Le.RGBA16_EXT),Q===a.SHORT&&Le&&(he=Le.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function O(U,E){let Q;return U?E===null||E===Aa||E===Ul?Q=a.DEPTH24_STENCIL8:E===Ma?Q=a.DEPTH32F_STENCIL8:E===Nl&&(Q=a.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Aa||E===Ul?Q=a.DEPTH_COMPONENT24:E===Ma?Q=a.DEPTH_COMPONENT32F:E===Nl&&(Q=a.DEPTH_COMPONENT16),Q}function L(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==$n&&U.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),N(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),V(E)}function N(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Q=U.source,re=x.get(Q);if(re){const ue=re[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&X(U),Object.keys(re).length===0&&x.delete(Q)}r.remove(U)}function X(U){const E=r.get(U);a.deleteTexture(E.__webglTexture);const Q=U.source,re=x.get(Q);delete re[E.__cacheKey],u.memory.textures--}function V(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let ue=0;ue<E.__webglFramebuffer[re].length;ue++)a.deleteFramebuffer(E.__webglFramebuffer[re][ue]);else a.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)a.deleteFramebuffer(E.__webglFramebuffer[re]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let re=0,ue=Q.length;re<ue;re++){const Re=r.get(Q[re]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(Q[re])}r.remove(U)}let j=0;function ce(){j=0}function fe(){return j}function q(U){j=U}function F(){const U=j;return U>=o.maxTextures&&ot("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function H(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function $(U,E){const Q=r.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const re=U.image;if(re===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Q,U,E);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+E)}function ge(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){ke(Q,U,E);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+E)}function xe(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){ke(Q,U,E);return}i.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+E)}function P(U,E){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){at(Q,U,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+E)}const K={[zh]:a.REPEAT,[ca]:a.CLAMP_TO_EDGE,[Hh]:a.MIRRORED_REPEAT},Se={[$n]:a.NEAREST,[Xy]:a.NEAREST_MIPMAP_NEAREST,[Xc]:a.NEAREST_MIPMAP_LINEAR,[In]:a.LINEAR,[Xd]:a.LINEAR_MIPMAP_NEAREST,[zs]:a.LINEAR_MIPMAP_LINEAR},Ae={[qy]:a.NEVER,[Jy]:a.ALWAYS,[jy]:a.LESS,[wp]:a.LEQUAL,[Zy]:a.EQUAL,[Dp]:a.GEQUAL,[Ky]:a.GREATER,[Qy]:a.NOTEQUAL};function De(U,E){if(E.type===Ma&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Xd||E.magFilter===Xc||E.magFilter===zs||E.minFilter===In||E.minFilter===Xd||E.minFilter===Xc||E.minFilter===zs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,K[E.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,Se[E.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$n||E.minFilter!==Xc&&E.minFilter!==zs||E.type===Ma&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const re=E.source;let ue=x.get(re);ue===void 0&&(ue={},x.set(re,ue));const Re=H(E);if(Re!==U.__cacheKey){ue[Re]===void 0&&(ue[Re]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ue[Re].usedTimes++;const Le=ue[U.__cacheKey];Le!==void 0&&(ue[U.__cacheKey].usedTimes--,Le.usedTimes===0&&X(E)),U.__cacheKey=Re,U.__webglTexture=ue[Re].texture}return Q}function ye(U,E,Q){return Math.floor(Math.floor(U/Q)/E)}function Ee(U,E,Q,re){const Re=U.updateRanges;if(Re.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Q,re,E.data);else{Re.sort((Ge,Fe)=>Ge.start-Fe.start);let Le=0;for(let Ge=1;Ge<Re.length;Ge++){const Fe=Re[Le],Oe=Re[Ge],et=Fe.start+Fe.count,tt=ye(Oe.start,E.width,4),st=ye(Fe.start,E.width,4);Oe.start<=et+1&&tt===st&&ye(Oe.start+Oe.count-1,E.width,4)===tt?Fe.count=Math.max(Fe.count,Oe.start+Oe.count-Fe.start):(++Le,Re[Le]=Oe)}Re.length=Le+1;const he=i.getParameter(a.UNPACK_ROW_LENGTH),pe=i.getParameter(a.UNPACK_SKIP_PIXELS),we=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Fe=Re.length;Ge<Fe;Ge++){const Oe=Re[Ge],et=Math.floor(Oe.start/4),tt=Math.ceil(Oe.count/4),st=et%E.width,k=Math.floor(et/E.width),Te=tt,me=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,st),i.pixelStorei(a.UNPACK_SKIP_ROWS,k),i.texSubImage2D(a.TEXTURE_2D,0,st,k,Te,me,Q,re,E.data)}U.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,he),i.pixelStorei(a.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function ke(U,E,Q){let re=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=a.TEXTURE_3D);const ue=ae(U,E),Re=E.source;i.bindTexture(re,U.__webglTexture,a.TEXTURE0+Q);const Le=r.get(Re);if(Re.version!==Le.__version||ue===!0){if(i.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Lt.getPrimaries(Lt.workingColorSpace),Ne=E.colorSpace===Bs?null:Lt.getPrimaries(E.colorSpace),ze=E.colorSpace===Bs||me===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=y(E.image,!1,o.maxTextureSize);pe=Vt(E,pe);const we=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Fe=R(E.internalFormat,we,Ge,E.normalized,E.colorSpace,E.isVideoTexture);De(re,E);let Oe;const et=E.mipmaps,tt=E.isVideoTexture!==!0,st=Le.__version===void 0||ue===!0,k=Re.dataReady,Te=L(E,pe);if(E.isDepthTexture)Fe=O(E.format===gr,E.type),st&&(tt?i.texStorage2D(a.TEXTURE_2D,1,Fe,pe.width,pe.height):i.texImage2D(a.TEXTURE_2D,0,Fe,pe.width,pe.height,0,we,Ge,null));else if(E.isDataTexture)if(et.length>0){tt&&st&&i.texStorage2D(a.TEXTURE_2D,Te,Fe,et[0].width,et[0].height);for(let me=0,Ne=et.length;me<Ne;me++)Oe=et[me],tt?k&&i.texSubImage2D(a.TEXTURE_2D,me,0,0,Oe.width,Oe.height,we,Ge,Oe.data):i.texImage2D(a.TEXTURE_2D,me,Fe,Oe.width,Oe.height,0,we,Ge,Oe.data);E.generateMipmaps=!1}else tt?(st&&i.texStorage2D(a.TEXTURE_2D,Te,Fe,pe.width,pe.height),k&&Ee(E,pe,we,Ge)):i.texImage2D(a.TEXTURE_2D,0,Fe,pe.width,pe.height,0,we,Ge,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Fe,et[0].width,et[0].height,pe.depth);for(let me=0,Ne=et.length;me<Ne;me++)if(Oe=et[me],E.format!==ua)if(we!==null)if(tt){if(k)if(E.layerUpdates.size>0){const ze=uv(Oe.width,Oe.height,E.format,E.type);for(const be of E.layerUpdates){const je=Oe.data.subarray(be*ze/Oe.data.BYTES_PER_ELEMENT,(be+1)*ze/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,be,Oe.width,Oe.height,1,we,je)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,pe.depth,we,Oe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,me,Fe,Oe.width,Oe.height,pe.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?k&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,pe.depth,we,Ge,Oe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,me,Fe,Oe.width,Oe.height,pe.depth,0,we,Ge,Oe.data)}else{tt&&st&&i.texStorage2D(a.TEXTURE_2D,Te,Fe,et[0].width,et[0].height);for(let me=0,Ne=et.length;me<Ne;me++)Oe=et[me],E.format!==ua?we!==null?tt?k&&i.compressedTexSubImage2D(a.TEXTURE_2D,me,0,0,Oe.width,Oe.height,we,Oe.data):i.compressedTexImage2D(a.TEXTURE_2D,me,Fe,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?k&&i.texSubImage2D(a.TEXTURE_2D,me,0,0,Oe.width,Oe.height,we,Ge,Oe.data):i.texImage2D(a.TEXTURE_2D,me,Fe,Oe.width,Oe.height,0,we,Ge,Oe.data)}else if(E.isDataArrayTexture)if(tt){if(st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Fe,pe.width,pe.height,pe.depth),k)if(E.layerUpdates.size>0){const me=uv(pe.width,pe.height,E.format,E.type);for(const Ne of E.layerUpdates){const ze=pe.data.subarray(Ne*me/pe.data.BYTES_PER_ELEMENT,(Ne+1)*me/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ne,pe.width,pe.height,1,we,Ge,ze)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,we,Ge,pe.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Fe,pe.width,pe.height,pe.depth,0,we,Ge,pe.data);else if(E.isData3DTexture)tt?(st&&i.texStorage3D(a.TEXTURE_3D,Te,Fe,pe.width,pe.height,pe.depth),k&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,we,Ge,pe.data)):i.texImage3D(a.TEXTURE_3D,0,Fe,pe.width,pe.height,pe.depth,0,we,Ge,pe.data);else if(E.isFramebufferTexture){if(st)if(tt)i.texStorage2D(a.TEXTURE_2D,Te,Fe,pe.width,pe.height);else{let me=pe.width,Ne=pe.height;for(let ze=0;ze<Te;ze++)i.texImage2D(a.TEXTURE_2D,ze,Fe,me,Ne,0,we,Ge,null),me>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const me=a.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),pe.parentNode!==me){me.appendChild(pe),_.add(E),me.onpaint=Ne=>{const ze=Ne.changedElements;for(const be of _)ze.includes(be.image)&&(be.needsUpdate=!0)},me.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,pe);else{const ze=a.RGBA,be=a.RGBA,je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ze,be,je,pe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(et.length>0){if(tt&&st){const me=St(et[0]);i.texStorage2D(a.TEXTURE_2D,Te,Fe,me.width,me.height)}for(let me=0,Ne=et.length;me<Ne;me++)Oe=et[me],tt?k&&i.texSubImage2D(a.TEXTURE_2D,me,0,0,we,Ge,Oe):i.texImage2D(a.TEXTURE_2D,me,Fe,we,Ge,Oe);E.generateMipmaps=!1}else if(tt){if(st){const me=St(pe);i.texStorage2D(a.TEXTURE_2D,Te,Fe,me.width,me.height)}k&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ge,pe)}else i.texImage2D(a.TEXTURE_2D,0,Fe,we,Ge,pe);M(E)&&I(re),Le.__version=Re.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function at(U,E,Q){if(E.image.length!==6)return;const re=ae(U,E),ue=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Q);const Re=r.get(ue);if(ue.version!==Re.__version||re===!0){i.activeTexture(a.TEXTURE0+Q);const Le=Lt.getPrimaries(Lt.workingColorSpace),he=E.colorSpace===Bs?null:Lt.getPrimaries(E.colorSpace),pe=E.colorSpace===Bs||Le===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let be=0;be<6;be++)!we&&!Ge?Fe[be]=y(E.image[be],!0,o.maxCubemapSize):Fe[be]=Ge?E.image[be].image:E.image[be],Fe[be]=Vt(E,Fe[be]);const Oe=Fe[0],et=c.convert(E.format,E.colorSpace),tt=c.convert(E.type),st=R(E.internalFormat,et,tt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Te=Re.__version===void 0||re===!0,me=ue.dataReady;let Ne=L(E,Oe);De(a.TEXTURE_CUBE_MAP,E);let ze;if(we){k&&Te&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,st,Oe.width,Oe.height);for(let be=0;be<6;be++){ze=Fe[be].mipmaps;for(let je=0;je<ze.length;je++){const Xe=ze[je];E.format!==ua?et!==null?k?me&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,Xe.width,Xe.height,et,Xe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,st,Xe.width,Xe.height,0,Xe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,Xe.width,Xe.height,et,tt,Xe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,st,Xe.width,Xe.height,0,et,tt,Xe.data)}}}else{if(ze=E.mipmaps,k&&Te){ze.length>0&&Ne++;const be=St(Fe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ne,st,be.width,be.height)}for(let be=0;be<6;be++)if(Ge){k?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Fe[be].width,Fe[be].height,et,tt,Fe[be].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Fe[be].width,Fe[be].height,0,et,tt,Fe[be].data);for(let je=0;je<ze.length;je++){const ln=ze[je].image[be].image;k?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,ln.width,ln.height,et,tt,ln.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,st,ln.width,ln.height,0,et,tt,ln.data)}}else{k?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,et,tt,Fe[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,et,tt,Fe[be]);for(let je=0;je<ze.length;je++){const Xe=ze[je];k?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,et,tt,Xe.image[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,st,et,tt,Xe.image[be])}}}M(E)&&I(a.TEXTURE_CUBE_MAP),Re.__version=ue.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function $e(U,E,Q,re,ue,Re){const Le=c.convert(Q.format,Q.colorSpace),he=c.convert(Q.type),pe=R(Q.internalFormat,Le,he,Q.normalized,Q.colorSpace),we=r.get(E),Ge=r.get(Q);if(Ge.__renderTarget=E,!we.__hasExternalTextures){const Fe=Math.max(1,E.width>>Re),Oe=Math.max(1,E.height>>Re);ue===a.TEXTURE_3D||ue===a.TEXTURE_2D_ARRAY?i.texImage3D(ue,Re,pe,Fe,Oe,E.depth,0,Le,he,null):i.texImage2D(ue,Re,pe,Fe,Oe,0,Le,he,null)}i.bindFramebuffer(a.FRAMEBUFFER,U),on(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,ue,Ge.__webglTexture,0,Ot(E)):(ue===a.TEXTURE_2D||ue>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,re,ue,Ge.__webglTexture,Re),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Jt(U,E,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,U),E.depthBuffer){const re=E.depthTexture,ue=re&&re.isDepthTexture?re.type:null,Re=O(E.stencilBuffer,ue),Le=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;on(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(E),Re,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(E),Re,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Re,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Le,a.RENDERBUFFER,U)}else{const re=E.textures;for(let ue=0;ue<re.length;ue++){const Re=re[ue],Le=c.convert(Re.format,Re.colorSpace),he=c.convert(Re.type),pe=R(Re.internalFormat,Le,he,Re.normalized,Re.colorSpace);on(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(E),pe,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ft(U,E,Q){const re=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(E.depthTexture);if(ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ue.__webglTexture===void 0){ue.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,ue.__webglTexture),De(a.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let Fe;E.depthTexture.format===ts?Fe=a.DEPTH_COMPONENT24:E.depthTexture.format===gr&&(Fe=a.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Fe,E.width,E.height,0,we,Ge,null)}}else $(E.depthTexture,0);const Re=ue.__webglTexture,Le=Ot(E),he=re?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,pe=E.depthTexture.format===gr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===ts)on(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,he,Re,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,pe,he,Re,0);else if(E.depthTexture.format===gr)on(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,he,Re,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,pe,he,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(U){const E=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const re=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",ue)};re.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=re}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)ft(E.__webglFramebuffer[re],U,re);else{const re=U.texture.mipmaps;re&&re.length>0?ft(E.__webglFramebuffer[0],U,0):ft(E.__webglFramebuffer,U,0)}else if(Q){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=a.createRenderbuffer(),Jt(E.__webglDepthbuffer[re],U,!1);else{const ue=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[re];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,ue,a.RENDERBUFFER,Re)}}else{const re=U.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Jt(E.__webglDepthbuffer,U,!1);else{const ue=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,ue,a.RENDERBUFFER,Re)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function gt(U,E,Q){const re=r.get(U);E!==void 0&&$e(re.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&xt(U)}function dt(U){const E=U.texture,Q=r.get(U),re=r.get(E);U.addEventListener("dispose",T);const ue=U.textures,Re=U.isWebGLCubeRenderTarget===!0,Le=ue.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=E.version,u.memory.textures++),Re){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Q.__webglFramebuffer[he][pe]=a.createFramebuffer()}else Q.__webglFramebuffer[he]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Q.__webglFramebuffer[he]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Le)for(let he=0,pe=ue.length;he<pe;he++){const we=r.get(ue[he]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&on(U)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<ue.length;he++){const pe=ue[he];Q.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const we=c.convert(pe.format,pe.colorSpace),Ge=c.convert(pe.type),Fe=R(pe.internalFormat,we,Ge,pe.normalized,pe.colorSpace,U.isXRRenderTarget===!0),Oe=Ot(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Oe,Fe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Jt(Q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){i.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture),De(a.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)$e(Q.__webglFramebuffer[he][pe],U,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else $e(Q.__webglFramebuffer[he],U,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(E)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let he=0,pe=ue.length;he<pe;he++){const we=ue[he],Ge=r.get(we);let Fe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Fe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Fe,Ge.__webglTexture),De(Fe,we),$e(Q.__webglFramebuffer,U,we,a.COLOR_ATTACHMENT0+he,Fe,0),M(we)&&I(Fe)}i.unbindTexture()}else{let he=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(he,re.__webglTexture),De(he,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)$e(Q.__webglFramebuffer[pe],U,E,a.COLOR_ATTACHMENT0,he,pe);else $e(Q.__webglFramebuffer,U,E,a.COLOR_ATTACHMENT0,he,0);M(E)&&I(he),i.unbindTexture()}U.depthBuffer&&xt(U)}function cn(U){const E=U.textures;for(let Q=0,re=E.length;Q<re;Q++){const ue=E[Q];if(M(ue)){const Re=z(U),Le=r.get(ue).__webglTexture;i.bindTexture(Re,Le),I(Re),i.unbindTexture()}}}const un=[],rn=[];function gn(U){if(U.samples>0){if(on(U)===!1){const E=U.textures,Q=U.width,re=U.height;let ue=a.COLOR_BUFFER_BIT;const Re=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=r.get(U),he=E.length>1;if(he)for(let we=0;we<E.length;we++)i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const pe=U.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<E.length;we++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ge=r.get(E[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,Q,re,0,0,Q,re,ue,a.NEAREST),m===!0&&(un.length=0,rn.length=0,un.push(a.COLOR_ATTACHMENT0+we),U.depthBuffer&&U.resolveDepthBuffer===!1&&(un.push(Re),rn.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,rn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,un))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<E.length;we++){i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ge=r.get(E[we]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,Ge,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Ot(U){return Math.min(o.maxSamples,U.samples)}function on(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(U){const E=u.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Vt(U,E){const Q=U.colorSpace,re=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==yu&&Q!==Bs&&(Lt.getTransfer(Q)===Qt?(re!==ua||ue!==qi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",Q)),E}function St(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=xe,this.setTextureCube=P,this.rebindTextures=gt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function H2(a,e){function i(r,o=Bs){let c;const u=Lt.getTransfer(o);if(r===qi)return a.UNSIGNED_BYTE;if(r===bp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Tp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===mx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===gx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===hx)return a.BYTE;if(r===px)return a.SHORT;if(r===Nl)return a.UNSIGNED_SHORT;if(r===Ep)return a.INT;if(r===Aa)return a.UNSIGNED_INT;if(r===Ma)return a.FLOAT;if(r===es)return a.HALF_FLOAT;if(r===_x)return a.ALPHA;if(r===vx)return a.RGB;if(r===ua)return a.RGBA;if(r===ts)return a.DEPTH_COMPONENT;if(r===gr)return a.DEPTH_STENCIL;if(r===xx)return a.RED;if(r===Ap)return a.RED_INTEGER;if(r===xr)return a.RG;if(r===Rp)return a.RG_INTEGER;if(r===Cp)return a.RGBA_INTEGER;if(r===pu||r===mu||r===gu||r===_u)if(u===Qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gh||r===Vh||r===kh||r===Xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wh||r===Yh||r===qh||r===jh||r===Zh||r===Su||r===Kh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Wh||r===Yh)return u===Qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===qh)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===jh)return c.COMPRESSED_R11_EAC;if(r===Zh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Su)return c.COMPRESSED_RG11_EAC;if(r===Kh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Qh)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jh)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$h)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ep)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tp)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===np)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ip)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ap)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sp)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rp)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===op)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lp)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cp)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===up)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fp||r===dp||r===hp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===fp)return u===Qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pp||r===mp||r===Mu||r===gp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===pp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ul?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const G2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V2=`
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

}`;class k2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new wx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Qi({vertexShader:G2,fragmentShader:V2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zi(new _r(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X2 extends Mr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",y=new k2,M={},I=i.getContextAttributes();let z=null,R=null;const O=[],L=[],B=new Gt;let T=null;const N=new Yi;N.viewport=new Mn;const X=new Yi;X.viewport=new Mn;const V=[N,X],j=new eb;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=O[ae];return ye===void 0&&(ye=new Kd,O[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=O[ae];return ye===void 0&&(ye=new Kd,O[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=O[ae];return ye===void 0&&(ye=new Kd,O[ae]=ye),ye.getHandSpace()};function q(ae){const ye=L.indexOf(ae.inputSource);if(ye===-1)return;const Ee=O[ye];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,d||u),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let ae=0;ae<O.length;ae++){const ye=L[ae];ye!==null&&(L[ae]=null,O[ae].disconnect(ye))}ce=null,fe=null,y.reset();for(const ae in M)delete M[ae];e.setRenderTarget(z),x=null,v=null,_=null,o=null,R=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ke=null,at=null;I.depth&&(at=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=I.stencil?gr:ts,ke=I.stencil?Ul:Aa);const $e={colorFormat:i.RGBA8,depthFormat:at,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($e),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new ba(v.textureWidth,v.textureHeight,{format:ua,type:qi,depthTexture:new To(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ba(x.framebufferWidth,x.framebufferHeight,{format:ua,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ae){for(let ye=0;ye<ae.removed.length;ye++){const Ee=ae.removed[ye],ke=L.indexOf(Ee);ke>=0&&(L[ke]=null,O[ke].disconnect(Ee))}for(let ye=0;ye<ae.added.length;ye++){const Ee=ae.added[ye];let ke=L.indexOf(Ee);if(ke===-1){for(let $e=0;$e<O.length;$e++)if($e>=L.length){L.push(Ee),ke=$e;break}else if(L[$e]===null){L[$e]=Ee,ke=$e;break}if(ke===-1)break}const at=O[ke];at&&at.connect(Ee)}}const $=new te,ge=new te;function xe(ae,ye,Ee){$.setFromMatrixPosition(ye.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const ke=$.distanceTo(ge),at=ye.projectionMatrix.elements,$e=Ee.projectionMatrix.elements,Jt=at[14]/(at[10]-1),ft=at[14]/(at[10]+1),xt=(at[9]+1)/at[5],gt=(at[9]-1)/at[5],dt=(at[8]-1)/at[0],cn=($e[8]+1)/$e[0],un=Jt*dt,rn=Jt*cn,gn=ke/(-dt+cn),Ot=gn*-dt;if(ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ot),ae.translateZ(gn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),at[10]===-1)ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const on=Jt+gn,Z=ft+gn,Vt=un-Ot,St=rn+(ke-Ot),U=xt*ft/Z*on,E=gt*ft/Z*on;ae.projectionMatrix.makePerspective(Vt,St,U,E,on,Z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function P(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ye=ae.near,Ee=ae.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),j.near=X.near=N.near=ye,j.far=X.far=N.far=Ee,(ce!==j.near||fe!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,fe=j.far),j.layers.mask=ae.layers.mask|6,N.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const ke=ae.parent,at=j.cameras;P(j,ke);for(let $e=0;$e<at.length;$e++)P(at[$e],ke);at.length===2?xe(j,N,X):j.projectionMatrix.copy(N.projectionMatrix),K(ae,j,ke)};function K(ae,ye,Ee){Ee===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ol*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ae){m=ae,v!==null&&(v.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ae){return M[ae]};let Se=null;function Ae(ae,ye){if(g=ye.getViewerPose(d||u),b=ye,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let ke=!1;Ee.length!==j.cameras.length&&(j.cameras.length=0,ke=!0);for(let ft=0;ft<Ee.length;ft++){const xt=Ee[ft];let gt=null;if(x!==null)gt=x.getViewport(xt);else{const cn=_.getViewSubImage(v,xt);gt=cn.viewport,ft===0&&(e.setRenderTargetTextures(R,cn.colorTexture,cn.depthStencilTexture),e.setRenderTarget(R))}let dt=V[ft];dt===void 0&&(dt=new Yi,dt.layers.enable(ft),dt.viewport=new Mn,V[ft]=dt),dt.matrix.fromArray(xt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(xt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(gt.x,gt.y,gt.width,gt.height),ft===0&&(j.matrix.copy(dt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ke===!0&&j.cameras.push(dt)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ft=_.getDepthInformation(Ee[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(at&&at.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ft=0;ft<Ee.length;ft++){const xt=Ee[ft].camera;if(xt){let gt=M[xt];gt||(gt=new wx,M[xt]=gt);const dt=_.getCameraImage(xt);gt.sourceTexture=dt}}}}for(let Ee=0;Ee<O.length;Ee++){const ke=L[Ee],at=O[Ee];ke!==null&&at!==void 0&&at.update(ke,ye,d||u)}Se&&Se(ae,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),b=null}const De=new Ux;De.setAnimationLoop(Ae),this.setAnimationLoop=function(ae){Se=ae},this.dispose=function(){}}}const W2=new Cn,Hx=new ut;Hx.set(-1,0,0,0,1,0,0,0,1);function Y2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Dx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,I,z,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,R)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,I,z):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Ei&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Ei&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const I=e.get(M),z=I.envMap,R=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Hx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,I,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*I,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,I){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Ei&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const I=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function q2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,O){const L=O.program;r.uniformBlockBinding(R,L)}function d(R,O){let L=o[R.id];L===void 0&&(y(R),L=g(R),o[R.id]=L,R.addEventListener("dispose",I));const B=O.program;r.updateUBOMapping(R,B);const T=e.render.frame;c[R.id]!==T&&(v(R),c[R.id]=T)}function g(R){const O=_();R.__bindingPointIndex=O;const L=a.createBuffer(),B=R.__size,T=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const O=o[R.id],L=R.uniforms,B=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const X=L[T];if(Array.isArray(X))for(let V=0,j=X.length;V<j;V++)x(X[V],T,V,B);else x(X,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(R,O,L,B){if(w(R,O,L,B)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let X=0;for(let V=0;V<N.length;V++){const j=N[V],ce=M(j);b(j,R.__data,X),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,R.__data)}}function b(R,O,L){typeof R=="number"||typeof R=="boolean"?O[0]=R:R.isMatrix3?(O[0]=R.elements[0],O[1]=R.elements[1],O[2]=R.elements[2],O[3]=0,O[4]=R.elements[3],O[5]=R.elements[4],O[6]=R.elements[5],O[7]=0,O[8]=R.elements[6],O[9]=R.elements[7],O[10]=R.elements[8],O[11]=0):ArrayBuffer.isView(R)?O.set(new R.constructor(R.buffer,R.byteOffset,O.length)):R.toArray(O,L)}function w(R,O,L,B){const T=R.value,N=O+"_"+L;if(B[N]===void 0)return typeof T=="number"||typeof T=="boolean"?B[N]=T:ArrayBuffer.isView(T)?B[N]=T.slice():B[N]=T.clone(),!0;{const X=B[N];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return B[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function y(R){const O=R.uniforms;let L=0;const B=16;for(let N=0,X=O.length;N<X;N++){const V=Array.isArray(O[N])?O[N]:[O[N]];for(let j=0,ce=V.length;j<ce;j++){const fe=V[j],q=Array.isArray(fe.value)?fe.value:[fe.value];for(let F=0,H=q.length;F<H;F++){const $=q[F],ge=M($),xe=L%B,P=xe%ge.boundary,K=xe+P;L+=P,K!==0&&B-K<ge.storage&&(L+=B-K),fe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=L,L+=ge.storage}}}const T=L%B;return T>0&&(L+=B-T),R.__size=L,R.__cache={},this}function M(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(O.boundary=16,O.storage=R.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",R),O}function I(R){const O=R.target;O.removeEventListener("dispose",I);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function z(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:d,dispose:z}}const j2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let va=null;function Z2(){return va===null&&(va=new zE(j2,16,16,xr,es),va.name="DFG_LUT",va.minFilter=In,va.magFilter=In,va.wrapS=ca,va.wrapT=ca,va.generateMipmaps=!1,va.needsUpdate=!0),va}class K2{constructor(e={}){const{canvas:i=eE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=qi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=x,y=new Set([Cp,Rp,Ap]),M=new Set([qi,Aa,Nl,Ul,bp,Tp]),I=new Uint32Array(4),z=new Int32Array(4),R=new te;let O=null,L=null;const B=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,j=null,ce=null,fe=null,q=null;this._outputColorSpace=di;let F=0,H=0,$=null,ge=-1,xe=null;const P=new Mn,K=new Mn;let Se=null;const Ae=new Ut(0);let De=0,ae=i.width,ye=i.height,Ee=1,ke=null,at=null;const $e=new Mn(0,0,ae,ye),Jt=new Mn(0,0,ae,ye);let ft=!1;const xt=new Ax;let gt=!1,dt=!1;const cn=new Cn,un=new te,rn=new Mn,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function on(){return $===null?Ee:1}let Z=r;function Vt(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yp}`),i.addEventListener("webglcontextlost",ln,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",ei,!1),Z===null){const Y="webgl2";if(Z=Vt(Y,A),Z===null)throw Vt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Pt("WebGLRenderer: "+A.message),A}let St,U,E,Q,re,ue,Re,Le,he,pe,we,Ge,Fe,Oe,et,tt,st,k,Te,me,Ne,ze,be;function je(){St=new ZT(Z),St.init(),Ne=new H2(Z,St),U=new GT(Z,St,e,Ne),E=new B2(Z,St),U.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),fe=Z.createFramebuffer(),q=Z.createFramebuffer(),Q=new JT(Z),re=new b2,ue=new z2(Z,St,E,re,U,Ne,Q),Re=new jT(X),Le=new nb(Z),ze=new zT(Z,Le),he=new KT(Z,Le,Q,ze),pe=new eA(Z,he,Le,ze,Q),k=new $T(Z,U,ue),et=new VT(re),we=new E2(X,Re,St,U,ze,et),Ge=new Y2(X,re),Fe=new A2,Oe=new N2(St),st=new BT(X,Re,E,pe,b,m),tt=new F2(X,pe,U),be=new q2(Z,Q,U,E),Te=new HT(Z,St,Q),me=new QT(Z,St,Q),Q.programs=we.programs,X.capabilities=U,X.extensions=St,X.properties=re,X.renderLists=Fe,X.shadowMap=tt,X.state=E,X.info=Q}je(),w!==qi&&(N=new nA(w,i.width,i.height,h,o,c));const Xe=new X2(X,Z);this.xr=Xe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ae,ye,!1))},this.getSize=function(A){return A.set(ae,ye)},this.setSize=function(A,Y,ne=!0){if(Xe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ye=Y,i.width=Math.floor(A*Ee),i.height=Math.floor(Y*Ee),ne===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ae*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(A,Y,ne){ae=A,ye=Y,Ee=ne,i.width=Math.floor(A*ne),i.height=Math.floor(Y*ne),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===qi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,Y,ne,ee){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,Y,ne,ee),E.viewport(P.copy($e).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,Y,ne,ee){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,Y,ne,ee),E.scissor(K.copy(Jt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){E.setScissorTest(ft=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ne=!0){let ee=0;if(A){let ie=!1;if($!==null){const Ue=$.texture.format;ie=y.has(Ue)}if(ie){const Ue=$.texture.type,Ve=M.has(Ue),Pe=st.getClearColor(),qe=st.getClearAlpha(),Ye=Pe.r,Je=Pe.g,lt=Pe.b;Ve?(I[0]=Ye,I[1]=Je,I[2]=lt,I[3]=qe,Z.clearBufferuiv(Z.COLOR,0,I)):(z[0]=Ye,z[1]=Je,z[2]=lt,z[3]=qe,Z.clearBufferiv(Z.COLOR,0,z))}else ee|=Z.COLOR_BUFFER_BIT}Y&&(ee|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(ee|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",ln,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),st.dispose(),Fe.dispose(),Oe.dispose(),re.dispose(),Re.dispose(),pe.dispose(),ze.dispose(),be.dispose(),we.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",vn),Xe.removeEventListener("sessionend",wn),Wn.stop()};function ln(A){A.preventDefault(),V_("WebGLRenderer: Context Lost."),V=!0}function It(){V_("WebGLRenderer: Context Restored."),V=!1;const A=Q.autoReset,Y=tt.enabled,ne=tt.autoUpdate,ee=tt.needsUpdate,ie=tt.type;je(),Q.autoReset=A,tt.enabled=Y,tt.autoUpdate=ne,tt.needsUpdate=ee,tt.type=ie}function ei(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ti(A){const Y=A.target;Y.removeEventListener("dispose",ti),ns(Y)}function ns(A){fa(A),re.remove(A)}function fa(A){const Y=re.get(A).programs;Y!==void 0&&(Y.forEach(function(ne){we.releaseProgram(ne)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ne,ee,ie,Ue){Y===null&&(Y=gn);const Ve=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Pe=$t(A,Y,ne,ee,ie);E.setMaterial(ee,Ve);let qe=ne.index,Ye=1;if(ee.wireframe===!0){if(qe=he.getWireframeAttribute(ne),qe===void 0)return;Ye=2}const Je=ne.drawRange,lt=ne.attributes.position;let Ke=Je.start*Ye,wt=(Je.start+Je.count)*Ye;Ue!==null&&(Ke=Math.max(Ke,Ue.start*Ye),wt=Math.min(wt,(Ue.start+Ue.count)*Ye)),qe!==null?(Ke=Math.max(Ke,0),wt=Math.min(wt,qe.count)):lt!=null&&(Ke=Math.max(Ke,0),wt=Math.min(wt,lt.count));const an=wt-Ke;if(an<0||an===1/0)return;ze.setup(ie,ee,Pe,ne,qe);let Xt,Ft=Te;if(qe!==null&&(Xt=Le.get(qe),Ft=me,Ft.setIndex(Xt)),ie.isMesh)ee.wireframe===!0?(E.setLineWidth(ee.wireframeLinewidth*on()),Ft.setMode(Z.LINES)):Ft.setMode(Z.TRIANGLES);else if(ie.isLine){let At=ee.linewidth;At===void 0&&(At=1),E.setLineWidth(At*on()),ie.isLineSegments?Ft.setMode(Z.LINES):ie.isLineLoop?Ft.setMode(Z.LINE_LOOP):Ft.setMode(Z.LINE_STRIP)}else ie.isPoints?Ft.setMode(Z.POINTS):ie.isSprite&&Ft.setMode(Z.TRIANGLES);if(ie.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const At=ie._multiDrawStarts,Ie=ie._multiDrawCounts,Vn=ie._multiDrawCount,Mt=qe?Le.get(qe).bytesPerElement:1,En=re.get(ee).currentProgram.getUniforms();for(let hi=0;hi<Vn;hi++)En.setValue(Z,"_gl_DrawID",hi),Ft.render(At[hi]/Mt,Ie[hi])}else if(ie.isInstancedMesh)Ft.renderInstances(Ke,an,ie.count);else if(ne.isInstancedBufferGeometry){const At=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ie=Math.min(ne.instanceCount,At);Ft.renderInstances(Ke,an,Ie)}else Ft.render(Ke,an)};function is(A,Y,ne){A.transparent===!0&&A.side===Sa&&A.forceSinglePass===!1?(A.side=Ei,A.needsUpdate=!0,it(A,Y,ne),A.side=$a,A.needsUpdate=!0,it(A,Y,ne),A.side=Sa):it(A,Y,ne)}this.compile=function(A,Y,ne=null){ne===null&&(ne=A),L=Oe.get(ne),L.init(Y),T.push(L),ne.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==ne&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const ee=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ue=ie.material;if(Ue)if(Array.isArray(Ue))for(let Ve=0;Ve<Ue.length;Ve++){const Pe=Ue[Ve];is(Pe,ne,ie),ee.add(Pe)}else is(Ue,ne,ie),ee.add(Ue)}),L=T.pop(),ee},this.compileAsync=function(A,Y,ne=null){const ee=this.compile(A,Y,ne);return new Promise(ie=>{function Ue(){if(ee.forEach(function(Ve){re.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){ie(A);return}setTimeout(Ue,10)}St.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ra=null;function bi(A){Ra&&Ra(A)}function vn(){Wn.stop()}function wn(){Wn.start()}const Wn=new Ux;Wn.setAnimationLoop(bi),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(A){Ra=A,Xe.setAnimationLoop(A),A===null?Wn.stop():Wn.start()},Xe.addEventListener("sessionstart",vn),Xe.addEventListener("sessionend",wn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(A,Y);const ne=Xe.enabled===!0&&Xe.isPresenting===!0,ee=N!==null&&($===null||ne)&&N.begin(X,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(Y),Y=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Y,$),L=Oe.get(A,T.length),L.init(Y),L.state.textureUnits=ue.getTextureUnits(),T.push(L),cn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),xt.setFromProjectionMatrix(cn,ya,Y.reversedDepth),dt=this.localClippingEnabled,gt=et.init(this.clippingPlanes,dt),O=Fe.get(A,B.length),O.init(),B.push(O),Xe.enabled===!0&&Xe.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&da(Ve,Y,-1/0,X.sortObjects)}da(A,Y,0,X.sortObjects),O.finish(),X.sortObjects===!0&&O.sort(ke,at,Y.reversedDepth),Ot=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ot&&st.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&et.beginShadows();const ie=L.state.shadowsArray;if(tt.render(ie,A,Y),gt===!0&&et.endShadows(),(ee&&N.hasRenderPass())===!1){const Ve=O.opaque,Pe=O.transmissive;if(L.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Pe.length>0)for(let Ye=0,Je=qe.length;Ye<Je;Ye++){const lt=qe[Ye];Gs(Ve,Pe,A,lt)}Ot&&st.render(A);for(let Ye=0,Je=qe.length;Ye<Je;Ye++){const lt=qe[Ye];Ca(O,A,lt,lt.viewport)}}else Pe.length>0&&Gs(Ve,Pe,A,Y),Ot&&st.render(A),Ca(O,A,Y)}$!==null&&H===0&&(ue.updateMultisampleRenderTarget($),ue.updateRenderTargetMipmap($)),ee&&N.end(X),A.isScene===!0&&A.onAfterRender(X,A,Y),ze.resetDefaultState(),ge=-1,xe=null,T.pop(),T.length>0?(L=T[T.length-1],ue.setTextureUnits(L.state.textureUnits),gt===!0&&et.setGlobalState(X.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,j!==null&&j.renderEnd()};function da(A,Y,ne,ee){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){ee&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(cn);const Ve=pe.update(A),Pe=A.material;Pe.visible&&O.push(A,Ve,Pe,ne,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Ve=pe.update(A),Pe=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),rn.copy(Ve.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(cn)),Array.isArray(Pe)){const qe=Ve.groups;for(let Ye=0,Je=qe.length;Ye<Je;Ye++){const lt=qe[Ye],Ke=Pe[lt.materialIndex];Ke&&Ke.visible&&O.push(A,Ve,Ke,ne,rn.z,lt)}}else Pe.visible&&O.push(A,Ve,Pe,ne,rn.z,null)}}const Ue=A.children;for(let Ve=0,Pe=Ue.length;Ve<Pe;Ve++)da(Ue[Ve],Y,ne,ee)}function Ca(A,Y,ne,ee){const{opaque:ie,transmissive:Ue,transparent:Ve}=A;L.setupLightsView(ne),gt===!0&&et.setGlobalState(X.clippingPlanes,ne),ee&&E.viewport(P.copy(ee)),ie.length>0&&Ce(ie,Y,ne),Ue.length>0&&Ce(Ue,Y,ne),Ve.length>0&&Ce(Ve,Y,ne),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Gs(A,Y,ne,ee){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const Ke=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new ba(1,1,{generateMipmaps:!0,type:Ke?es:qi,minFilter:zs,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||P;Ue.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Pe=X.getRenderTarget(),qe=X.getActiveCubeFace(),Ye=X.getActiveMipmapLevel();X.setRenderTarget(Ue),X.getClearColor(Ae),De=X.getClearAlpha(),De<1&&X.setClearColor(16777215,.5),X.clear(),Ot&&st.render(ne);const Je=X.toneMapping;X.toneMapping=Ea;const lt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),gt===!0&&et.setGlobalState(X.clippingPlanes,ee),Ce(A,ne,ee),ue.updateMultisampleRenderTarget(Ue),ue.updateRenderTargetMipmap(Ue),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let wt=0,an=Y.length;wt<an;wt++){const Xt=Y[wt],{object:Ft,geometry:At,material:Ie,group:Vn}=Xt;if(Ie.side===Sa&&Ft.layers.test(ee.layers)){const Mt=Ie.side;Ie.side=Ei,Ie.needsUpdate=!0,Be(Ft,ne,ee,At,Ie,Vn),Ie.side=Mt,Ie.needsUpdate=!0,Ke=!0}}Ke===!0&&(ue.updateMultisampleRenderTarget(Ue),ue.updateRenderTargetMipmap(Ue))}X.setRenderTarget(Pe,qe,Ye),X.setClearColor(Ae,De),lt!==void 0&&(ee.viewport=lt),X.toneMapping=Je}function Ce(A,Y,ne){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Ue=A.length;ie<Ue;ie++){const Ve=A[ie],{object:Pe,geometry:qe,group:Ye}=Ve;let Je=Ve.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Pe.layers.test(ne.layers)&&Be(Pe,Y,ne,qe,Je,Ye)}}function Be(A,Y,ne,ee,ie,Ue){A.onBeforeRender(X,Y,ne,ee,ie,Ue),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(X,Y,ne,ee,A,Ue),ie.transparent===!0&&ie.side===Sa&&ie.forceSinglePass===!1?(ie.side=Ei,ie.needsUpdate=!0,X.renderBufferDirect(ne,Y,ee,ie,A,Ue),ie.side=$a,ie.needsUpdate=!0,X.renderBufferDirect(ne,Y,ee,ie,A,Ue),ie.side=Sa):X.renderBufferDirect(ne,Y,ee,ie,A,Ue),A.onAfterRender(X,Y,ne,ee,ie,Ue)}function it(A,Y,ne){Y.isScene!==!0&&(Y=gn);const ee=re.get(A),ie=L.state.lights,Ue=L.state.shadowsArray,Ve=ie.state.version,Pe=we.getParameters(A,ie.state,Ue,Y,ne,L.state.lightProbeGridArray),qe=we.getProgramCacheKey(Pe);let Ye=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ee.fog=Y.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=Re.get(A.envMap||ee.environment,Je),ee.envMapRotation=ee.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",ti),Ye=new Map,ee.programs=Ye);let lt=Ye.get(qe);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===Ve)return Nt(A,Pe),lt}else Pe.uniforms=we.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,ne,Pe),A.onBeforeCompile(Pe,X),lt=we.acquireProgram(Pe,qe),Ye.set(qe,lt),ee.uniforms=Pe.uniforms;const Ke=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=et.uniform),Nt(A,Pe),ee.needsLights=Yn(A),ee.lightsStateVersion=Ve,ee.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ie.state.spotLightMatrix,Ke.spotLightMap.value=ie.state.spotLightMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix),ee.lightProbeGrid=L.state.lightProbeGridArray.length>0,ee.currentProgram=lt,ee.uniformsList=null,lt}function ht(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=vu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Nt(A,Y){const ne=re.get(A);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function kt(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let ne=0,ee=A.length;ne<ee;ne++){const ie=A[ne];if(ie.texture!==null&&ie.boundingBox.containsPoint(R))return ie}return null}function $t(A,Y,ne,ee,ie){Y.isScene!==!0&&(Y=gn),ue.resetTextureUnits();const Ue=Y.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Y.environment:null,Pe=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Lt.workingColorSpace,qe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ye=Re.get(ee.envMap||Ve,qe),Je=ee.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,lt=!!ne.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ke=!!ne.morphAttributes.position,wt=!!ne.morphAttributes.normal,an=!!ne.morphAttributes.color;let Xt=Ea;ee.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Xt=X.toneMapping);const Ft=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,At=Ft!==void 0?Ft.length:0,Ie=re.get(ee),Vn=L.state.lights;if(gt===!0&&(dt===!0||A!==xe)){const Bt=A===xe&&ee.id===ge;et.setState(ee,A,Bt)}let Mt=!1;ee.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Vn.state.version||Ie.outputColorSpace!==Pe||ie.isBatchedMesh&&Ie.batching===!1||!ie.isBatchedMesh&&Ie.batching===!0||ie.isBatchedMesh&&Ie.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ie.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ie.instancing===!1||!ie.isInstancedMesh&&Ie.instancing===!0||ie.isSkinnedMesh&&Ie.skinning===!1||!ie.isSkinnedMesh&&Ie.skinning===!0||ie.isInstancedMesh&&Ie.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ie.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ie.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ie.instancingMorph===!1&&ie.morphTexture!==null||Ie.envMap!==Ye||ee.fog===!0&&Ie.fog!==Ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==et.numPlanes||Ie.numIntersection!==et.numIntersection)||Ie.vertexAlphas!==Je||Ie.vertexTangents!==lt||Ie.morphTargets!==Ke||Ie.morphNormals!==wt||Ie.morphColors!==an||Ie.toneMapping!==Xt||Ie.morphTargetsCount!==At||!!Ie.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ie.__version=ee.version);let En=Ie.currentProgram;Mt===!0&&(En=it(ee,Y,ie),j&&ee.isNodeMaterial&&j.onUpdateProgram(ee,En,Ie));let hi=!1,Fn=!1,ri=!1;const Wt=En.getUniforms(),qt=Ie.uniforms;if(E.useProgram(En.program)&&(hi=!0,Fn=!0,ri=!0),ee.id!==ge&&(ge=ee.id,Fn=!0),Ie.needsLights){const Bt=kt(L.state.lightProbeGridArray,ie);Ie.lightProbeGrid!==Bt&&(Ie.lightProbeGrid=Bt,Fn=!0)}if(hi||xe!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Wt.setValue(Z,"projectionMatrix",A.projectionMatrix),Wt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Ti=Wt.map.cameraPosition;Ti!==void 0&&Ti.setValue(Z,un.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Wt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Wt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,Fn=!0,ri=!0)}if(Ie.needsLights&&(Vn.state.directionalShadowMap.length>0&&Wt.setValue(Z,"directionalShadowMap",Vn.state.directionalShadowMap,ue),Vn.state.spotShadowMap.length>0&&Wt.setValue(Z,"spotShadowMap",Vn.state.spotShadowMap,ue),Vn.state.pointShadowMap.length>0&&Wt.setValue(Z,"pointShadowMap",Vn.state.pointShadowMap,ue)),ie.isSkinnedMesh){Wt.setOptional(Z,ie,"bindMatrix"),Wt.setOptional(Z,ie,"bindMatrixInverse");const Bt=ie.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Wt.setValue(Z,"boneTexture",Bt.boneTexture,ue))}ie.isBatchedMesh&&(Wt.setOptional(Z,ie,"batchingTexture"),Wt.setValue(Z,"batchingTexture",ie._matricesTexture,ue),Wt.setOptional(Z,ie,"batchingIdTexture"),Wt.setValue(Z,"batchingIdTexture",ie._indirectTexture,ue),Wt.setOptional(Z,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Wt.setValue(Z,"batchingColorTexture",ie._colorsTexture,ue));const oi=ne.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&k.update(ie,ne,En),(Fn||Ie.receiveShadow!==ie.receiveShadow)&&(Ie.receiveShadow=ie.receiveShadow,Wt.setValue(Z,"receiveShadow",ie.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Y.environment!==null&&(qt.envMapIntensity.value=Y.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Z2()),Fn){if(Wt.setValue(Z,"toneMappingExposure",X.toneMappingExposure),Ie.needsLights&&Et(qt,ri),Ue&&ee.fog===!0&&Ge.refreshFogUniforms(qt,Ue),Ge.refreshMaterialUniforms(qt,ee,Ee,ye,L.state.transmissionRenderTarget[A.id]),Ie.needsLights&&Ie.lightProbeGrid){const Bt=Ie.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}vu.upload(Z,ht(Ie),qt,ue)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(vu.upload(Z,ht(Ie),qt,ue),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Wt.setValue(Z,"center",ie.center),Wt.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),Wt.setValue(Z,"normalMatrix",ie.normalMatrix),Wt.setValue(Z,"modelMatrix",ie.matrixWorld),ee.uniformsGroups!==void 0){const Bt=ee.uniformsGroups;for(let Ti=0,Ji=Bt.length;Ti<Ji;Ti++){const $i=Bt[Ti];be.update($i,En),be.bind($i,En)}}return En}function Et(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Yn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Y,ne){const ee=re.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=Y,re.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ne,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ne=re.get(A);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ne=0){$=A,F=Y,H=ne;let ee=null,ie=!1,Ue=!1;if(A){const Pe=re.get(A);if(Pe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Pe.__webglFramebuffer),P.copy(A.viewport),K.copy(A.scissor),Se=A.scissorTest,E.viewport(P),E.scissor(K),E.setScissorTest(Se),ge=-1;return}else if(Pe.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Pe.__hasExternalTextures)ue.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ye=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?ee=Ye[Y][ne]:ee=Ye[Y],ie=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?ee=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?ee=Ye[ne]:ee=Ye,P.copy(A.viewport),K.copy(A.scissor),Se=A.scissorTest}else P.copy($e).multiplyScalar(Ee).floor(),K.copy(Jt).multiplyScalar(Ee).floor(),Se=ft;if(ne!==0&&(ee=ce),E.bindFramebuffer(Z.FRAMEBUFFER,ee)&&E.drawBuffers(A,ee),E.viewport(P),E.scissor(K),E.setScissorTest(Se),ie){const Pe=re.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,ne)}else if(Ue){const Pe=Y;for(let qe=0;qe<A.textures.length;qe++){const Ye=re.get(A.textures[qe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,ne,Pe)}}else if(A!==null&&ne!==0){const Pe=re.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Pe.__webglTexture,ne)}ge=-1},this.readRenderTargetPixels=function(A,Y,ne,ee,ie,Ue,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){E.bindFramebuffer(Z.FRAMEBUFFER,qe);try{const Ye=A.textures[Pe],Je=Ye.format,lt=Ye.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable(Je)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ee&&ne>=0&&ne<=A.height-ie&&Z.readPixels(Y,ne,ee,ie,Ne.convert(Je),Ne.convert(lt),Ue)}finally{const Ye=$!==null?re.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ne,ee,ie,Ue,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe)if(Y>=0&&Y<=A.width-ee&&ne>=0&&ne<=A.height-ie){E.bindFramebuffer(Z.FRAMEBUFFER,qe);const Ye=A.textures[Pe],Je=Ye.format,lt=Ye.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ue.byteLength,Z.STREAM_READ),Z.readPixels(Y,ne,ee,ie,Ne.convert(Je),Ne.convert(lt),0);const wt=$!==null?re.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,wt);const an=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await tE(Z,an,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ue),Z.deleteBuffer(Ke),Z.deleteSync(an),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ne=0){const ee=Math.pow(2,-ne),ie=Math.floor(A.image.width*ee),Ue=Math.floor(A.image.height*ee),Ve=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;ue.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ne,0,0,Ve,Pe,ie,Ue),E.unbindTexture()},this.copyTextureToTexture=function(A,Y,ne=null,ee=null,ie=0,Ue=0){let Ve,Pe,qe,Ye,Je,lt,Ke,wt,an;const Xt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(ne!==null)Ve=ne.max.x-ne.min.x,Pe=ne.max.y-ne.min.y,qe=ne.isBox3?ne.max.z-ne.min.z:1,Ye=ne.min.x,Je=ne.min.y,lt=ne.isBox3?ne.min.z:0;else{const qt=Math.pow(2,-ie);Ve=Math.floor(Xt.width*qt),Pe=Math.floor(Xt.height*qt),A.isDataArrayTexture?qe=Xt.depth:A.isData3DTexture?qe=Math.floor(Xt.depth*qt):qe=1,Ye=0,Je=0,lt=0}ee!==null?(Ke=ee.x,wt=ee.y,an=ee.z):(Ke=0,wt=0,an=0);const Ft=Ne.convert(Y.format),At=Ne.convert(Y.type);let Ie;Y.isData3DTexture?(ue.setTexture3D(Y,0),Ie=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ue.setTexture2DArray(Y,0),Ie=Z.TEXTURE_2D_ARRAY):(ue.setTexture2D(Y,0),Ie=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Vn=E.getParameter(Z.UNPACK_ROW_LENGTH),Mt=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),En=E.getParameter(Z.UNPACK_SKIP_PIXELS),hi=E.getParameter(Z.UNPACK_SKIP_ROWS),Fn=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Xt.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Xt.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ye),E.pixelStorei(Z.UNPACK_SKIP_ROWS,Je),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,lt);const ri=A.isDataArrayTexture||A.isData3DTexture,Wt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const qt=re.get(A),oi=re.get(Y),Bt=re.get(qt.__renderTarget),Ti=re.get(oi.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ji=0;Ji<qe;Ji++)ri&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ie,lt+Ji),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(Y).__webglTexture,Ue,an+Ji)),Z.blitFramebuffer(Ye,Je,Ve,Pe,Ke,wt,Ve,Pe,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||re.has(A)){const qt=re.get(A),oi=re.get(Y);E.bindFramebuffer(Z.READ_FRAMEBUFFER,fe),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Bt=0;Bt<qe;Bt++)ri?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,qt.__webglTexture,ie,lt+Bt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,qt.__webglTexture,ie),Wt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,oi.__webglTexture,Ue,an+Bt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,oi.__webglTexture,Ue),ie!==0?Z.blitFramebuffer(Ye,Je,Ve,Pe,Ke,wt,Ve,Pe,Z.COLOR_BUFFER_BIT,Z.NEAREST):Wt?Z.copyTexSubImage3D(Ie,Ue,Ke,wt,an+Bt,Ye,Je,Ve,Pe):Z.copyTexSubImage2D(Ie,Ue,Ke,wt,Ye,Je,Ve,Pe);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Wt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Ie,Ue,Ke,wt,an,Ve,Pe,qe,Ft,At,Xt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ie,Ue,Ke,wt,an,Ve,Pe,qe,Ft,Xt.data):Z.texSubImage3D(Ie,Ue,Ke,wt,an,Ve,Pe,qe,Ft,At,Xt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ue,Ke,wt,Ve,Pe,Ft,At,Xt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ue,Ke,wt,Xt.width,Xt.height,Ft,Xt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ue,Ke,wt,Ve,Pe,Ft,At,Xt);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Vn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,En),E.pixelStorei(Z.UNPACK_SKIP_ROWS,hi),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Fn),Ue===0&&Y.generateMipmaps&&Z.generateMipmap(Ie),E.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const Q2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",J2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",$2="/assets/CXLMediumItalic-DYSp-DoC.otf",eR=4,tR=5,Ka={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Gx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function nR(a){return Gx(a)}function iR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function aR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*tR/eR);return{W:o,H:c}}function Vx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function mn(a,e,i,r,o,c,u){Vx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function yn(a,e,i,r,o,c,u,h){Vx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function Nu(a,e,i,r,o,c){mn(a,e,i,r,o,c,"#0c0e12"),yn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Uu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return yn(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function kx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function sR(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function rR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;mn(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),yn(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function oR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;mn(a,e,u,r,h,8*o,"#050508"),yn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),mn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function lR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;yn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return mn(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),yn(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function Ip(a,e,i,r,o){const c=44*o;mn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),yn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return mn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Ka.role} · ${Ka.didShort}`,e+8*o+u+8*o,i+32*o),c}function cR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),mn(a,e,i,r,c,h,m),yn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),yn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Ka.role} · ${Ka.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Ka.didShort,e+u,d);const g=28*o;return mn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),yn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function uR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),mn(a,e,i,r,c,h,m),yn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function fR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);mn(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);mn(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function dR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);mn(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),yn(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(b,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function hR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;mn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),yn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return mn(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),mn(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const Rl=2,Mo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Ov(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);mn(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),yn(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function pR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Mo.riskScore},{label:"Rep",value:Mo.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";mn(a,d,i,x,h,4*o,b),yn(a,d,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function mR(a,e,i,r,o){const c=Mo.receipts,u=22*o,h=14*o+c.length*u;return mn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),yn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function gR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),mn(a,e,i,r,c,h,m),yn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),yn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return mn(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),yn(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function _R(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return mn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),yn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function vR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%Rl+Rl)%Rl,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];Nu(a,e,i,r,o,m);let _=Uu(a,e,i,r,h,g.header,u);_=sR(a,e,_,r,h,g.segment,d+1,Rl,u);const v=i+o-h;if(d===0){_+=Ip(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=pR(a,e+h,_,r-h*2,u)+8*u);const b=[["SHARPE",Mo.sharpe],["ROI",Mo.roi],["RISK",Mo.riskScore]];_+36*u<=v&&(_+=Ov(a,e+h,_,r-h*2,b,u)+8*u),_+70*u<=v&&mR(a,e+h,_,r-h*2,u);return}_+=gR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=_R(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Ov(a,e+h,_,r-h*2,x,u)}function xR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;Nu(a,e,i,r,o,m);let d=Uu(a,e,i,r,h,"COPY TRADE",u);d=kx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const b=6*u,w=r-h*2;let y=(w-b)/2,M=Math.min(y*190/316,y*.58);const I=Math.max(64*u,v-d-28*u);M>I&&(y=y*(I/M),M=I);const z=u*(y/((w-b)/2)),R=e+h+(w-(y*2+b))/2;uR(a,R,d,y,z),cR(a,R+y+b,d,y,z),d+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,B=(r-h*2-L*2)/3,T=32*u;d+T<=v&&(O.forEach(([N,X],V)=>{const j=e+h+V*(B+L);mn(a,j,d,B,T,6*u,"rgba(255,255,255,0.04)"),yn(a,j,d,B,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,j+B/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(X,j+B/2,d+24*u)}),a.textAlign="left")}else d+=Ip(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=fR(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&dR(a,e+h,d,r-h*2,u);hR(a,e+h,_,r-h*2,u)}const SR=2,MR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function yR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function ER(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Nu(a,e,i,r,o,h);let m=Uu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,b=e+r-u-x,w=e+u+g+v+_/2,y=MR,M=4*c;y.forEach((I,z)=>{if(m>=d-8*c)return;const R=z===0,O=z===y.length-1,L=yR(I.status),B=8*c,T=6*c,N=7*c,X=8*c,V=I.showActions?22*c:0,j=I.showActions?5*c:0,fe=Math.max(B+2*c+T,N+4*c+X)+j+V+M;if(m+Math.min(fe,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${B}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+u+g,m+B),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+u+g,m+B+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+fe),a.stroke());const q=2.4*c;a.beginPath(),a.arc(w,m+5*c,q,0,Math.PI*2),a.fillStyle=R?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),R&&(a.beginPath(),a.arc(w,m+5*c,q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const F=4*c,H=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const $=I.statusLabel.toUpperCase(),ge=a.measureText($).width+F*2,xe=N+H*2;mn(a,x,m,ge,xe,3*c,L.bg),a.fillStyle=L.fg,a.fillText($,x+F,m+N+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const P=m+xe+3*c+X;let K=I.action;if(I.pnl){const Se=`${I.action} · `;a.fillText(Se,x,P);const Ae=a.measureText(Se).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,x+Ae,P)}else{for(;K.length>8&&a.measureText(K).width>b;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,P)}if(I.showActions&&m+xe+3*c+X+j+V<=d){const Se=m+xe+3*c+X+j,Ae=(b-5*c)/2;yn(a,x,Se,Ae,V,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Ae/2,Se+V*.68),mn(a,x+Ae+5*c,Se,Ae,V,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Ae+5*c+Ae/2,Se+V*.68),a.textAlign="left"}m+=fe})}function bR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Nu(a,e,i,r,o,h);let m=Uu(a,e,i,r,u,"FUND BUCKET",c);m=kx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Ip(a,e+u,m,r-u*2,c)+8*c,m+=rR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=oR(a,e+u,m,r-u*2,c)+6*c),lR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Xx(a,e,i,r,o,c,u=0){switch(e){case"discover":vR(a,i,r,o,c,u);break;case"copy":xR(a,i,r,o,c,u);break;case"supervise":ER(a,i,r,o,c);break;case"isolate":bR(a,i,r,o,c);break}}function TR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Xx(a,e,0,0,i,r,o)}function AR(a,e,i,r,o){const{W:c,H:u}=aR(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),d=m.createLinearGradient(0,0,0,u);d.addColorStop(0,"#080a0e"),d.addColorStop(.55,"#05070d"),d.addColorStop(1,"#030406"),m.fillStyle=d,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),x=c-g*2;let b=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,b+w*.85),b+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=iR(m,a.description,x);m.fillText(M[0]??a.description,g,b+y),b+=Math.round(.07*u),b+=Math.round(.03*u);const I=g,z=b,R=x,O=Math.max(80*i,u-b-v);Xx(m,nR(e),I,z,R,O);const L=new Cx(h);return L.colorSpace=di,L.minFilter=zs,L.generateMipmaps=!0,L}const xp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],RR="0 0 58 35",CR=58,wR=35;function DR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,CR+r*2,wR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:xp.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const LR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Fp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=LR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(DR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Pv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",NR=50,xu=500,yh=100,Iv=168;function UR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function OR(){return Pv[Math.floor(Math.random()*Pv.length)]??"?"}function Fv(a){return Array.from(a).map(e=>{const i=Math.random()*(xu-yh),r=yh+Math.random()*(xu-i-yh),o=Math.min(xu,i+r);return{original:e,start:i,end:o}})}function PR(a){return Math.min(1,Math.max(0,a))}function IR({text:a,className:e,scrollerRef:i}){const r=We.useRef(null),o=We.useRef(Fv(a)),c=UR();return We.useEffect(()=>{o.current=Fv(a)},[a]),We.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),b=Math.min(xu,Math.max(0,x-NR));if(b===d&&d>=0)return;d=b;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let I=0;I<w.length;I++){const z=w[I],R=y[I];if(!R)continue;const O=Math.max(.001,z.end-z.start),L=PR((b-z.start)/O);if(L<1&&(M=!1),L<=0){R.textContent=z.original===" "?" ":z.original,R.style.transform="translateY(0)",R.style.opacity="1",R.style.visibility="visible";continue}if(L>=1){R.textContent=z.original===" "?" ":z.original,R.style.transform=`translateY(${-Iv}px)`,R.style.opacity="0",R.style.visibility="hidden";continue}R.textContent=OR(),R.style.transform=`translateY(${-L*Iv}px)`,R.style.opacity=String(1-L),R.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const FR="Enter the agentic economy",go=Ch.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),hn=go.length,Za=2.95,Ll=6.9,Bp=32,Wx=4,Yx=5,Sp=2.05,BR=1,zR=Za*.55,qx=.28,jx=.35,HR=qx+jx,Eh=.85,Bv=300,GR=35,zv=GR/60*1e3,VR=.1;function Zx(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const kR=1.35,XR=.72,WR=.62,YR=.2,qR=14,jR=.42,ZR=128,KR=12,QR=.002,JR=.0011,Hv=.12,$R=.88,Kx=4,e3=32,t3=40,n3=Kx-1,Gv=50,i3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,a3=`
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
`,s3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,r3=`
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
`,o3='"Reckk Heading", Georgia, "Times New Roman", serif',Qx="Morpheum Wordmark",Pl=`"${Qx}"`,l3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function c3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(Qx,`url(${$2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Pl}`);const e=document.fonts.check(`normal 152px ${Pl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function u3(){if(!(typeof document>"u"||!document.fonts))try{await c3();const a=new FontFace("Reckk Title",`url(${J2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${Q2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Pl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const fr="flow-intro-hide-chrome",f3=72,d3=120,bh=80;function h3(a){return a<=f3}const p3=280;function Cl(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Th(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;Cl(e)}function mr(a){const e=jt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function _o(a){const e=Math.max(1,a),i=Math.max(1,hn*e*BR),r=Math.max(1,i/Math.max(1,hn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const m3=800,g3=1100,_3=6,v3=36,x3=50,S3=.5,M3=1024,y3=.75;function Jx(a){return a>=M3}function E3(a){return Jx(a)?m3:g3}function Ah(a){return Math.max(2,Math.max(1,a)*.004)}function b3(a){const e=jt.clamp(a,0,1);return e*e*e}function T3(a,e){const{cardPx:i,titlePx:r}=_o(e),o=Math.max(1,hn-1),c=jt.clamp(Math.round(a),0,hn-1);return r+c/o*i}function A3(a,e,i){return a.offsetTop+T3(e,i)}function Rh(a){const e=hn-1;return jt.clamp(Math.round(a),0,e)}function R3(a,e,i,r,o,c,u){if(o)return!1;const h=e,m=i/Math.max(1,hn-1),d=r+m*S3;return!(a<h||a>d||c<u*.5)}function zp(a,e){const i=a/Math.max(1,e),r=Bp*Math.PI/180,o=2*Ll*Math.tan(r/2),c=o*i,u=Sp*Wx/Yx,h=.992,m=h*o/Sp,d=h*c/u;return jt.clamp(Math.min(m,d),.52,2.35)}function C3(a,e){const i=zp(a,e);return Jx(a)?i*y3:i}function Vv(a,e,i){const r=Zx(a),o=zp(a,e),c=a/Math.max(1,e),u=Bp*Math.PI/180,m=2*Ll*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function w3(a,e){const i=a/Math.max(1,hn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function D3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function L3(a,e){const i=jt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=mr(jt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function N3(a,e,i,r=0){const o=hn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=jt.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=mr(jt.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function U3(a){return new Qi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:VR}},vertexShader:s3,fragmentShader:r3,transparent:!0,depthWrite:!0,depthTest:!0,side:$a})}function O3(a,e){return a>1.5&&a<e-.5}function P3(a){return jt.clamp(540/Math.max(a,340),.2,.55)}function I3(a,e,i){const r=[],o=qR;for(let c=0;c<o;c++){const u=jt.clamp(a-c/Math.max(1,o-1)*jR,-.08,1.08),h=Math.sin(u*Math.PI*2*kR)*WR*i,m=Math.sin(u*Math.PI*2*XR)*YR,d=Hv+c/Math.max(1,o-1)*($R-Hv),g=e-d;r.push(new te(h,m,g))}return r}function F3(a,e,i,r){const o=a.length;if(o<2)return new Ki;const c=[],u=[],h=[],m=[],d=new te,g=new te,_=new te,v=new te(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const z=I/e*Math.PI*2,R=Math.cos(z),O=Math.sin(z),L=a[w];c.push(L.x+(R*g.x+O*_.x)*M,L.y+(R*g.y+O*_.y)*M,L.z+(R*g.z+O*_.z)*M),u.push(R*g.x+O*_.x,R*g.y+O*_.y,R*g.z+O*_.z),h.push(o===1?0:w/(o-1),I/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,I=M+1,z=M+x,R=z+1;m.push(M,z,I,I,z,R)}const b=new Ki;return b.setAttribute("position",new ji(c,3)),b.setAttribute("normal",new ji(u,3)),b.setAttribute("uv",new ji(h,2)),b.setIndex(m),b.computeBoundingSphere(),b}function kv(a,e,i,r){const o={verb:a.verb,description:a.description};return AR(o,e,i,r,o3)}function Xv(a,e){const i=Zx(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${Pl}`};g();const _=O=>{h.font=`normal ${O*r}px ${Pl}`;const L=h.measureText(m),B=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),X=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:B,right:T,width:B+T,ascent:N,descent:X}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,b=40*r+v,w=O=>{const L=_(O);return L.width+x*2<=o&&L.ascent+L.descent+b*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,I-y.ascent,M+y.right,I+y.descent);l3.forEach(O=>z.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,I),h.fillStyle=z,h.fillText(m,M,I);const R=new Cx(u);return R.colorSpace=di,R.minFilter=In,R.magFilter=In,R.generateMipmaps=!1,R}function Wv(a,e){a.generateMipmaps=!1,a.minFilter=In,a.magFilter=In,a.wrapS=ca,a.wrapT=ca;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function B3(){const a=We.useRef(null),e=We.useRef(null),i=We.useRef(null),r=We.useRef(null),o=We.useRef(!1),c=We.useRef(null),u=We.useCallback(()=>{var m;if(o.current)return;o.current=!0,(m=c.current)==null||m.call(c);const h=e.current;h==null||h.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(fr),Th(),requestAnimationFrame(()=>{Th(),requestAnimationFrame(()=>{Th(),window.setTimeout(()=>{o.current=!1},100)})})},p3)},[]);return We.useLayoutEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.location.hash.replace(/^#/,"");return h||m!==""&&m!=="flow"&&m!=="hero"||document.body.classList.add(fr),()=>{document.body.classList.remove(fr)}},[]),We.useEffect(()=>{const h=m=>{if(m.key!=="Escape")return;const d=document.getElementById("hero");d&&d.getBoundingClientRect().top>8&&(m.preventDefault(),u())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[u]),We.useEffect(()=>{const h=window.location.hash.replace(/^#/,"");h&&h!=="flow"&&h!=="hero"&&requestAnimationFrame(()=>{var m;(m=document.getElementById(h))==null||m.scrollIntoView({block:"start"})})},[]),We.useEffect(()=>{const h=i.current,m=a.current;if(!h||!m)return;const d=h,g=m;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(fr);const b=r.current;b&&(b.style.height="0px");return}let x;return(async()=>{if(await u3(),_)return;const b=Math.min(window.devicePixelRatio,2),w=Math.max(320,d.clientWidth||window.innerWidth),y=Math.max(1,d.clientHeight||window.innerHeight),M=[],I=[],z=[],R=new Float64Array(hn).fill(-1);go.forEach((Ce,Be)=>{const it=hn-1-Be,ht=go[it],Nt=kv(ht,it,b,w);z.push(Nt);const kt=U3(Nt);M.push(kt);const $t=Sp,Et=$t*Wx/Yx,Yn=new Zi(new _r(Et,$t),kt);Yn.position.set(0,0,-Be*Za),Yn.renderOrder=Be,I.push(Yn)});const O=Xv(b,w),L=new Op({map:O,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:Sa}),B=O.image.height/O.image.width,{w:T,h:N}=Vv(w,y,B),X=new Zi(new _r(T,N),L);X.position.set(0,0,-(hn-1)*Za),X.renderOrder=t3;const V=new NE,j=new Yi(Bp,1,.08,120),ce=new K2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),ce.outputColorSpace=di,ce.sortObjects=!0,d.appendChild(ce.domElement),Wv(O,ce);const fe=new Tl;I.forEach(Ce=>fe.add(Ce)),fe.add(X),V.add(fe);const q=new Qi({uniforms:{uStrength:{value:0}},vertexShader:i3,fragmentShader:a3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:wh}),F=new Zi(new Ki,q);F.frustumCulled=!1,F.renderOrder=Gv,F.visible=!1,V.add(F);const H=go.map(Ce=>new Ut(Ce.mood.mid)),$=H[0].clone();V.background=$;const ge=0,xe=-(hn-1)*Za,P=Ll,K=-.1*Za,Se=.1*Za;function Ae(Ce,Be){const it=Ce+Ll;return(P-it)/Be}let De=Math.max(1,d.clientHeight||window.innerHeight),ae=!1,ye=window.innerWidth,Ee=!1,ke=!1;function at(){return Math.max(1,window.innerHeight)}function $e(Ce){return Ee?Ce>d3&&(Ee=!1):h3(Ce)&&(Ee=!0),Ee}function Jt(){const Ce=r.current;if(!Ce)return;const{totalPx:Be}=_o(De),it=De*HR,Nt=`${Math.max(Math.ceil(Be+it+De*Eh+32-Bv),Math.ceil(De*1.08))}px`;Ce.style.height!==Nt&&(Ce.style.height=Nt)}function ft(){const Ce=Math.max(1,De),{totalPx:Be}=_o(Ce),it=Math.max(1,Be),ht=ge+K,Nt=xe+Se-zR,$t=(ht-Nt)/it,Et=Ae(ht,$t),Yn=Ae(Nt,$t);return{ih:Ce,totalPx:it,scrollToWorldFactor:$t,minScroll:Et,maxScroll:Yn}}let{scrollToWorldFactor:xt,minScroll:gt,maxScroll:dt}=ft();const cn=new Ut,un=new Ut,rn=new Ut;function gn(){var Et;const Ce=Math.max(320,d.clientWidth||window.innerWidth),Be=Math.min(window.devicePixelRatio,2);z.forEach((Yn,A)=>{Yn.dispose();const Y=hn-1-A,ne=kv(go[Y],Y,Be,Ce);z[A]=ne,M[A].uniforms.uMap.value=ne}),(Et=L.map)==null||Et.dispose();const it=Xv(Be,Ce);L.map=it,L.needsUpdate=!0,Wv(it,ce);const ht=it.image.height/it.image.width,Nt=Math.max(1,d.clientHeight||De),{w:kt,h:$t}=Vv(Ce,Nt,ht);X.geometry.dispose(),X.geometry=new _r(kt,$t)}function Ot(){const Ce=d.clientWidth,Be=d.clientHeight;if(Ce<2||Be<2)return;j.aspect=Ce/Be,j.updateProjectionMatrix(),ce.setSize(Ce,Be,!1),gn();const it=ft();xt=it.scrollToWorldFactor,gt=it.minScroll,dt=it.maxScroll,ae||Jt()}function on(){ae=!1,De=at(),ye=window.innerWidth,Ot()}Ot(),requestAnimationFrame(()=>{_||gn()});let Z=0;function Vt(){var Ii,yr;if(_)return;Z=requestAnimationFrame(Vt);const Ce=at(),Be=document.getElementById("hero"),it=Be?Be.getBoundingClientRect().top:0,ht=Be?$e(it):!0,{totalPx:Nt}=_o(De),kt=g.getBoundingClientRect(),$t=Math.max(1,g.offsetHeight-De),Et=jt.clamp(-kt.top,0,$t);if(!ht&&Et<=Nt){if(ae=!1,Math.abs(Ce-De)>bh){De=Ce,Jt();const pt=ft();xt=pt.scrollToWorldFactor,gt=pt.minScroll,dt=pt.maxScroll}}else ae=!0;const A=De,{cardPx:Y,titlePx:ne,totalPx:ee}=_o(A),ie=Math.max(1,g.offsetHeight-A),Ue=jt.clamp(-kt.top,0,ie),Ve=Math.min(Ue,ee),Pe=Math.max(1,ee),qe=A*qx,Ye=A*jx,Je=qe+Ye,lt=Ue-ee,Ke=mr(jt.clamp(lt/Math.max(1,qe),0,1)),wt=mr(jt.clamp((lt-qe)/Math.max(1,Ye),0,1)),an=jt.mapLinear(Y,0,Pe,gt,dt),Xt=d.clientWidth,Ft=d.clientHeight,At=Math.max(1,ne),Ie=Ve<At,Vn=Ie?jt.clamp(Ve/At,0,1):0,Mt=Math.max(0,Ve-At),En=Math.max(1,Y),Fn=jt.clamp(Mt/En,0,1)*(hn-1),ri=zp(Xt,Ft),Wt=C3(Xt,Ft);let qt;Ie?qt=jt.mapLinear(Ve,0,At,dt,an):qt=jt.mapLinear(Ve,At,Pe,an,gt),qt=jt.clamp(qt,gt,dt);const oi=w3(Y,A),Bt=D3(At,A),Ti=L3(Vn,Bt),Ji=hn-1;if(Ie)rn.copy(H[0]);else{const pt=Math.min(hn-2,Math.floor(Fn)),bn=Math.min(pt+1,hn-1),mi=mr(Fn-pt);cn.copy(H[pt]),un.copy(H[bn]),rn.lerpColors(cn,un,mi)}V.background=$.copy(rn);const $i=P-qt*xt;j.position.set(0,0,$i),j.lookAt(0,0,$i-Ll);const pi=ee+Je;let as=0;if(ie>pi&&Ue>=pi){const pt=Math.max(1,ie-pi);as=mr(jt.clamp((Ue-pi)/pt,0,1))}const Do=Math.max(1,Je+A*Eh),ss=Ue<=Pe?jt.clamp(Ue/Pe,0,1):1+jt.clamp(lt/Do,0,1)*.45;if(O3(Ue,ie)){const pt=I3(ss,$i,P3(Xt)),mi=new WE(pt,!1,"centripetal").getSpacedPoints(ZR);if(mi.length>=2){const Bn=F3(mi,KR,QR,JR),ea=F.geometry.getAttribute("position"),qn=Bn.getAttribute("position");if(ea&&qn&&ea.count===qn.count&&((Ii=F.geometry.getIndex())==null?void 0:Ii.count)===((yr=Bn.getIndex())==null?void 0:yr.count)&&ea&&qn){ea.array.set(qn.array),ea.needsUpdate=!0;const Tn=F.geometry.getAttribute("normal"),gi=Bn.getAttribute("normal");Tn&&gi&&(Tn.array.set(gi.array),Tn.needsUpdate=!0);const rs=F.geometry.getAttribute("uv"),os=Bn.getAttribute("uv");rs&&os&&(rs.array.set(os.array),rs.needsUpdate=!0),Bn.dispose()}else F.geometry.dispose(),F.geometry=Bn;F.visible=!0;const Ws=Ie||Fn<jt.clamp(oi,0,.999);F.renderOrder=Ws?n3:Gv,q.uniforms.uStrength.value=.36*(1-as*.92)}else F.visible=!1,q.uniforms.uStrength.value=0}else F.visible=!1,q.uniforms.uStrength.value=0;const Lo=Math.floor((hn-1)/2),ks=performance.now(),Bl=jt.clamp(oi,0,.999);for(let pt=0;pt<hn;pt++){if(Ie||Fn<=pt+1e-5||Fn<pt+Bl){R[pt]=-1;continue}R[pt]<0&&(Fn>=pt+1-1e-5?R[pt]=ks-zv:R[pt]=ks)}if(I.forEach((pt,bn)=>{const mi=-bn*Za,Bn=hn-1-bn,ea=R[Bn];let qn=ea<0?0:mr(jt.clamp((ks-ea)/zv,0,1));!Ie&&Bn===hn-1&&wt>0&&(qn=Math.max(qn,wt));let{opacity:ta}=N3(Fn,Bn,oi,qn);Ie&&bn===Ji&&(ta*=Ti.lastCardOp,qn=0);let Ws=1,Tn=0;!Ie&&Bn===hn-1&&ta>.02&&Ke>0&&(Ws=1-.28*Ke,Tn=-Za*.32*Ke),pt.position.set(0,0,mi+Tn),pt.scale.setScalar(Wt*Ws);const gi=M[bn];gi.uniforms.uOpacity.value=ta,gi.uniforms.uWipe.value=qn,gi.depthWrite=ta>=.995&&qn<.02,pt.visible=ta>.003&&qn<.997,pt.renderOrder=bn<=Lo?Kx+bn:e3+(bn-Lo-1)}),X.position.set(0,0,-Ji*Za),X.scale.setScalar(ri),L.opacity=Ie?Ti.titleOp:0,L.depthWrite=L.opacity>=.995,X.visible=L.opacity>.003,!o.current){ht?ke=!0:ke&&Ue<ee-A*.25&&(ke=!1),document.body.classList.toggle(fr,!ke);const pt=e.current;pt!=null&&pt.classList.contains("flow-intro__sticky--exit")&&!ht&&(pt.style.transition="none",pt.classList.remove("flow-intro__sticky--exit"),pt.offsetWidth,pt.style.transition="")}if(!ae){const pt=Je+A*Eh+32-Bv,bn=Math.max(Math.ceil(ee+pt),Math.ceil(A*1.08)),mi=r.current;if(mi){const Bn=`${bn}px`;mi.style.height!==Bn&&(mi.style.height=Bn)}}const Xs=1-as*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(Xs)),e.current.style.setProperty("--intro-tagline-opacity","1")),ce.domElement.style.opacity=String(1-as),ce.render(V,j)}Vt();let St=0,U=0,E=!1,Q=!1,re=!1,ue=!1,Re=0,Le=0,he=0,pe=!1,we=!1,Ge=0,Fe=window.scrollY,Oe=0;const et=8;function tt(){U&&(window.clearTimeout(U),U=0)}function st(){St&&(cancelAnimationFrame(St),St=0),E=!1}function k(){st(),tt(),Q=!1}c.current=k;function Te(){var ee;const Ce=Math.max(1,De),{cardPx:Be,titlePx:it,totalPx:ht}=_o(Ce),Nt=g.getBoundingClientRect(),kt=Math.max(1,g.offsetHeight-Ce),$t=jt.clamp(-Nt.top,0,kt),Et=document.getElementById("hero"),Yn=Et?$e(Et.getBoundingClientRect().top):!0,A=((ee=e.current)==null?void 0:ee.getBoundingClientRect().bottom)??Ce,ne=Math.max(0,Math.min($t,ht)-it)/Math.max(1,Be)*(hn-1);return{innerH:Ce,cardPx:Be,titlePx:it,totalPx:ht,scrolledPx:$t,landed:Yn,stickyBottom:A,depthT:ne}}function me(Ce=Te()){return R3(Ce.scrolledPx,Ce.titlePx,Ce.cardPx,Ce.totalPx,Ce.landed,Ce.stickyBottom,Ce.innerH)}function Ne(){return E||me()}function ze(Ce){let Be=Ce.deltaY;return Ce.deltaMode===1?Be*=16:Ce.deltaMode===2&&(Be*=window.innerHeight),Be}function be(){tt(),Q=!0,U=window.setTimeout(()=>{U=0,Q=!1},x3)}function je(Ce){if(_||o.current||E)return;const Be=Te();if(!me(Be))return;const it=hn-1,ht=jt.clamp(Math.round(Ce),0,it),Nt=A3(g,ht,Be.innerH),kt=window.scrollY,$t=Nt-kt;if(Oe=ht,Math.abs($t)<Ah(Be.innerH)){Cl(Nt),be();return}E=!0,Q=!0;const Et=E3(window.innerWidth),Yn=performance.now(),A=Y=>{if(_||o.current){E=!1,St=0;return}if(!me(Te())){st(),Q=!1;return}const ne=Math.min(1,(Y-Yn)/Et);Cl(kt+$t*b3(ne)),ne<1?St=requestAnimationFrame(A):(Cl(Nt),E=!1,St=0,be())};St=requestAnimationFrame(A)}function Xe(Ce,Be){const it=hn-1,ht=Ah(Ce.innerH),Nt=Ce.titlePx,kt=Be>0?1:-1;if(Ce.scrolledPx<Nt-ht)return null;const $t=Rh(Ce.depthT),Et=jt.clamp($t+kt,0,it);return Et===$t?null:Et}function ln(Ce){const Be=Te();if(!me(Be))return!1;const it=Xe(Be,Ce);return it===null?!1:(je(it),!0)}function It(Ce,Be){return Xe(Ce,Be)===null}function ei(Ce){if(!Ne())return;const Be=ze(Ce),it=Te();if(!me(it))return;const ht=Xe(it,Be>0?1:-1);if(ht===null){(E||Q)&&k();return}if(E||Q){Ce.preventDefault();return}if(Math.abs(Be)<_3){Ce.preventDefault();return}Ce.preventDefault(),je(ht)}function ti(Ce){var Be;if(Le=((Be=Ce.touches[0])==null?void 0:Be.clientY)??Le,Re=Le,he=window.scrollY,re=!1,ue=E||me(),ue&&!E){const it=Te();Oe=Rh(it.depthT)}}function ns(Ce){var it;const Be=((it=Ce.touches[0])==null?void 0:it.clientY)??Re;if(!re){if(!ue&&(E||me())&&(ue=!0,Le=Be,Re=Be,he=window.scrollY),!ue)return;const ht=Le-Be;if(Math.abs(ht)<et){Re=Be;return}const Nt=ht>0?1:-1,kt=Te();if(!E&&!me(kt)){ue=!1,Re=Be;return}if(It(kt,Nt)){ue=!1,k(),Re=Be;return}E&&k(),re=!0,ue=!1,he=window.scrollY,Oe=Rh(kt.depthT)}Ce.preventDefault(),Re=Be,E||Cl(he)}function fa(){const Ce=re,Be=ue,it=Le-Re;if(re=!1,ue=!1,E)return;if(!Ce){Be&&k();return}if(!me())return;if(Math.abs(it)<v3){const kt=Te();if(kt.scrolledPx<kt.titlePx-Ah(kt.innerH)){k();return}je(Oe);return}const ht=it>0?1:-1,Nt=Te();if(It(Nt,ht)){k();return}ln(ht)}function is(Ce){Ce.pointerType!=="touch"&&Ce.button===0&&(pe=!0,we=!1,Ge=window.scrollY,me()&&st())}function Ra(Ce){if(Ce.pointerType==="touch"||!pe)return;if(pe=!1,!we||!me()){we=!1;return}const Be=Te(),it=window.scrollY>=Ge?1:-1,ht=Xe(Be,it);if(we=!1,ht===null){k();return}je(ht)}function bi(Ce){Ce.pointerType!=="touch"&&(pe=!1,we=!1)}function vn(){const Ce=window.scrollY,Be=Ce-Fe;Fe=Ce,pe&&Math.abs(Be)>.5&&(we=!0),E&&!me()&&k()}function wn(){k(),on()}function Wn(){k();const Ce=at(),Be=window.innerWidth,it=Math.abs(Ce-De),ht=Math.abs(Be-ye)>1;if(ae){it>bh||ht?on():Ot();return}De=Ce,ye=Be,Ot()}function da(){k();const Ce=at();Math.abs(Ce-De)<=bh||(ae?on():(De=Ce,ye=window.innerWidth,Ot()))}window.addEventListener("wheel",ei,{passive:!1}),window.addEventListener("touchstart",ti,{passive:!0}),window.addEventListener("touchmove",ns,{passive:!1}),window.addEventListener("touchend",fa,{passive:!0}),window.addEventListener("touchcancel",fa,{passive:!0}),window.addEventListener("pointerdown",is,{passive:!0}),window.addEventListener("pointerup",Ra,{passive:!0}),window.addEventListener("pointercancel",bi,{passive:!0}),window.addEventListener("scroll",vn,{passive:!0}),window.addEventListener("resize",Wn,{passive:!0}),window.addEventListener("orientationchange",wn,{passive:!0});const Ca=window.visualViewport;Ca&&Ca.addEventListener("resize",da);const Gs=new ResizeObserver(Ot);Gs.observe(d),x=()=>{var Ce;k(),c.current=null,cancelAnimationFrame(Z),document.body.classList.remove(fr),window.removeEventListener("wheel",ei),window.removeEventListener("touchstart",ti),window.removeEventListener("touchmove",ns),window.removeEventListener("touchend",fa),window.removeEventListener("touchcancel",fa),window.removeEventListener("pointerdown",is),window.removeEventListener("pointerup",Ra),window.removeEventListener("pointercancel",bi),window.removeEventListener("scroll",vn),window.removeEventListener("resize",Wn),window.removeEventListener("orientationchange",wn),Ca&&Ca.removeEventListener("resize",da),Gs.disconnect(),M.forEach(Be=>{Be.dispose()}),z.forEach(Be=>Be.dispose()),(Ce=L.map)==null||Ce.dispose(),L.dispose(),I.forEach(Be=>Be.geometry.dispose()),X.geometry.dispose(),F.geometry.dispose(),q.dispose(),V.remove(F),ce.dispose(),d.contains(ce.domElement)&&d.removeChild(ce.domElement)},_&&x()})(),()=>{var b;_=!0,(b=c.current)==null||b.call(c),c.current=null,document.body.classList.remove(fr),x==null||x()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Fp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:u,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(IR,{text:FR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:go.map((h,m)=>D.jsxs("p",{children:["Step ",String(m+1).padStart(2,"0"),": ",h.verb,". ",h.description]},h.verb))})]}),D.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const z3=280,H3=5/4,G3=3800,V3={discover:Rl,copy:SR};function k3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function X3({stepIndex:a,kind:e,className:i,width:r=z3}){const o=We.useRef(null),c=e??Gx(a),u=Math.round(r*H3);return We.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),w=Math.round(u*x);(h.width!==b||h.height!==w)&&(h.width=b,h.height=w);const y=h.getContext("2d");y&&TR(y,c,b,w,m)};g();const _=V3[c];_&&_>1&&!k3()&&(d=setInterval(()=>{m=(m+1)%_,g()},G3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Yv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function W3(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Yv.map((a,e)=>{const i=e===Yv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const Y3=/^(action)$/i;function q3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>Y3.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function $x({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:q3(e)})]})}var j3=ix();function Z3(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function K3(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,Z3(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function qv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=K3(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const Q3=40,J3=5,$3="typewriter-reveal",jv=1e3,eC=4e3;function Zv(){return jv+Math.random()*(eC-jv)}function eS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function tC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),_=We.useRef(null),v=We.useRef(null),x=We.useRef(null),b=We.useRef("idle"),[w,y]=We.useState("idle");g.current=m;const M=We.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=We.useCallback(()=>{var N;M(),v.current=null,x.current=null,b.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),z=We.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(I,N)},[M,I]);We.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),We.useLayoutEffect(()=>{var H,$,ge;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(b.current==="cursor-hold"&&!_.current){const xe=x.current??Zv();x.current=null,z(xe);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(eS()){(H=g.current)==null||H.call(g);return}const N=d.current;if(!N||!a){($=g.current)==null||$.call(g);return}N.style.width="",N.offsetWidth;const X=Math.max(a.length/i*1e3,120),V=Math.max(a.length,1),j=N.closest(".typewriter-block"),ce=(j==null?void 0:j.clientWidth)??((ge=N.parentElement)==null?void 0:ge.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const fe=N.scrollWidth,q=ce>0?Math.min(fe,ce):fe;N.style.width="0",N.style.setProperty("--tw-duration",`${X}ms`),N.style.setProperty("--tw-target-width",`${q}px`),N.style.setProperty("--tw-steps",String(V)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,b.current="animating",y("animating");const F=xe=>{if(xe.animationName===$3){if(h){N.style.width=`${q}px`,b.current="cursor-hold",y("cursor-hold"),z(Zv());return}N.style.width="",I()}};return N.addEventListener("animationend",F),()=>{N.removeEventListener("animationend",F)}},[o,u,I,h,z,i,a,c,M,r]);const R=w==="animating",O=w==="cursor-hold",L=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",R?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(R||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function Hp({text:a,children:e,className:i,speed:r=Q3,cursorWidth:o=J3,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),[_,v]=We.useState([]),[x,b]=We.useState(0),[w,y]=We.useState(0),[M,I]=We.useState(!1),[z,R]=We.useState(!1),O=eS();g.current=m;const L=We.useCallback(()=>{const fe=d.current;if(!fe||!a)return v([]),b(0),R(!0),!0;const q=fe.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:$,blockHeight:ge}=qv(a,q,fe,H);let xe=ge;if(!H){const P=qv(a,q,fe,!0);xe=Math.max(ge,P.blockHeight)}return v($),b(xe),R(!0),!0},[a,c,O]);We.useLayoutEffect(()=>{var fe,q;if(y(0),I(!1),R(!1),v([]),b(0),O){(fe=g.current)==null||fe.call(g),R(!0);return}if(!a){(q=g.current)==null||q.call(g),R(!0);return}if(!L()){const F=new ResizeObserver(()=>{L()&&F.disconnect()});return d.current&&F.observe(d.current),()=>F.disconnect()}},[a,c,L,O]);const B=We.useCallback(fe=>{var F;const q=fe>=_.length-1;j3.flushSync(()=>{if(!q){y(fe+1);return}I(!0)}),q&&((F=g.current)==null||F.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),X={...!M&&!O&&x>0?{height:x,minHeight:x}:void 0},V=e??a;if(!z)return D.jsx("span",{ref:d,className:N,style:X,children:V});if(O||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:V});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:V});const j=_.length>0?_:[a],ce=!!e&&j.length<=1;return D.jsxs("span",{ref:d,className:N,style:X,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:V}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((fe,q)=>D.jsx(tC,{text:fe,content:ce?e:void 0,speed:r,cursorWidth:o,waiting:q>w,active:u&&q===w,completed:q<w,holdCursor:h&&q===j.length-1,onComplete:q===w?()=>B(q):void 0},`${q}-${fe}`))})]})}function nC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Gp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=We.useState(!1);return We.useLayoutEffect(()=>{if(r)return;if(nC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function iC(a){return String(a).padStart(2,"0")}function Au(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const aC=1600,sC=1500,Kv=5e3,rC=7e3;function oC(){return Kv+Math.random()*(rC-Kv)}function lC({text:a,active:e}){const[i,r]=We.useState(!1),[o,c]=We.useState(0),u=We.useRef(null),h=`> ${a}`,m=We.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);We.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Au()){r(!0);return}const g=window.setTimeout(()=>r(!0),sC);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=We.useCallback(()=>{Au()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},oC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Hp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function cC(){const[a,e]=We.useState(()=>new Set),[i,r]=We.useState(!1),o=We.useRef(new Map),c=We.useRef(null),u=Gp(c,{amount:.35}),h=Ls.steps.every(_=>a.has(`step-${_.n}`));We.useLayoutEffect(()=>{if(Au()){e(new Set(Ls.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const b=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),We.useLayoutEffect(()=>{if(Au())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},aC);return()=>window.clearTimeout(_)},[h]);const m=We.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=We.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ls.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ls.title}),D.jsx("div",{className:"flow__chips",children:Ls.chips.map(_=>D.jsx($x,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ls.steps.map((_,v)=>{const x=`step-${_.n}`,b=a.has(x);return D.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":b?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",iC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(lC,{text:_.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Pn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?v===2?D.jsx(W3,{}):D.jsx(X3,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Hp,{text:Ls.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ls.outcome})})]})})}function uC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Fp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:U_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[du.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Pn.docs,children:"Docs"}),D.jsx("a",{href:Pn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Pn.discord,children:"Discord"}),D.jsx("a",{href:Pn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:U_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const Qv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",tS=50,Jv=3500,$v=4e3,fC=1400,dC=1200,hC=4500;function nS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ex(a){return/[A-Za-z0-9]/.test(a)}function pC(){return Qv[Math.floor(Math.random()*Qv.length)]??"?"}function mC(a){return Math.random()<.5?pC():a}function iS(a,e,i){const r=[];for(let d=0;d<a.length;d++)ex(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!ex(g)||h.has(d)?m+=g:m+=mC(g)}return m}function gC(a){return typeof a=="boolean"?{enabled:a,decryptMs:Jv,pauseMs:$v}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Jv,pauseMs:a.pauseMs??$v}}function Jn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=gC(e),c=r+o,[u,h]=We.useState(a);return We.useEffect(()=>{if(!i||nS()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(iS(a,v,r))};d();const g=setInterval(d,tS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function tx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??fC,o=e.stepDecryptMs??dC,c=e.holdMs??hC,u=a.join("\0"),[h,m]=We.useState(a),[d,g]=We.useState(()=>a.map(()=>!1));return We.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||nS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let b=Date.now();const w=()=>{const M=Date.now();let I=M-b;I>=x&&(b=M,I=0);const z=[],R=[];for(let O=0;O<_.length;O++){const L=_[O]??"",B=O*r,T=I>=B;if(R.push(T),!T){z.push(L);continue}const N=I-B;z.push(iS(L,N,o))}m(z),g(R)};w();const y=setInterval(w,tS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function _C(){const a=[...N_,...N_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx($x,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function vC(){const[a,e]=Ds.headline,i=Jn(Ds.eyebrow.label);return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),D.jsx("div",{className:"hero__grid","aria-hidden":!0}),D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:RR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:xp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`ghost-${r.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:xp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`fill-${r.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ds.eyebrow.href,"aria-label":`${Ds.eyebrow.label}›`,children:[i,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:a}),D.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(yo,{href:Ds.primaryCta.href,variant:"primary",children:Ds.primaryCta.label}),D.jsx(yo,{href:Ds.secondaryCta.href,variant:"secondary",children:Ds.secondaryCta.label})]})]}),D.jsx(_C,{})]})}function xC(){const a=Jn(zd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:zd.href,"aria-label":zd.text,children:a})})}const fi={decryptMs:2800,pauseMs:5200},nx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function aS(a){return String(a+1).padStart(2,"0")}function SC(a,e,i,r){return`${aS(a)}  ${e}  ·  ${i}  ·  ${r}`}function MC(a,e,i){return`${aS(a)}  ${e}  ·  ${i}`}function yC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function yi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function pn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function EC({meta:a}){const e=Jn(a.name,fi),i=Jn(a.tx,fi),r=Jn(a.hash,fi),o=Jn(a.chain,fi),c=Jn(a.verified,fi),u=Jn(a.rep,fi),h=Jn(a.portable,fi),m=Jn(a.next,fi),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,b=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,I=`verified ${c} · rep ${u} · portable ${h}`,z=`next ${a.next}`,R=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${h}`,B=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(yi,{label:"tx",value:a.tx,display:i}),D.jsx(yi,{label:"hash",value:a.hash,display:r}),D.jsx(yi,{label:"chain",value:a.chain,display:o}),D.jsx(yi,{label:"verified",value:a.verified,display:c}),D.jsx(yi,{label:"rep",value:a.rep,display:u}),D.jsx(yi,{label:"portable",value:a.portable,display:h}),D.jsx(yi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(pn,{value:d,display:g}),D.jsx(pn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(pn,{value:x,display:b}),D.jsx(pn,{value:w,display:y}),D.jsx(pn,{value:M,display:I}),D.jsx(pn,{value:z,display:R})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(pn,{value:d,display:g}),D.jsx(pn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(pn,{value:x,display:b}),D.jsx(pn,{value:w,display:y}),D.jsx(pn,{value:B,display:T}),D.jsx(pn,{value:O,display:L}),D.jsx(pn,{value:z,display:R})]})]})}function bC({meta:a}){const e=Jn(a.tx,fi),i=Jn(a.from,fi),r=Jn(a.to,fi),o=Jn(a.asset,fi),c=Jn(a.amt,fi),u=Jn(a.chain,fi),h=Jn(a.status,fi),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(yi,{label:"tx",value:a.tx,display:e}),D.jsx(yi,{label:"from",value:a.from,display:i}),D.jsx(yi,{label:"to",value:a.to,display:r}),D.jsx(yi,{label:"asset",value:a.asset,display:o}),D.jsx(yi,{label:"amt",value:a.amt,display:c}),D.jsx(yi,{label:"chain",value:a.chain,display:u}),D.jsx(yi,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(pn,{value:g,display:_}),D.jsx(pn,{value:m,display:d}),D.jsx(pn,{value:v,display:x}),D.jsx(pn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(pn,{value:g,display:_}),D.jsx(pn,{value:m,display:d}),D.jsx(pn,{value:b,display:w}),D.jsx(pn,{value:a.chain,display:u}),D.jsx(pn,{value:y,display:M})]})]})}function TC({meta:a}){const e=We.useRef(null),i=Gp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?yC(r):null,c=We.useMemo(()=>{const d=a.steps.map((g,_)=>SC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=We.useMemo(()=>{const d=a.steps.map((g,_)=>MC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=tx(c,{...nx,enabled:i}),m=tx(u,{...nx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(pn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(pn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(pn,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function AC({meta:a}){return a.kind==="identity"?D.jsx(EC,{meta:a}):a.kind==="chain"?D.jsx(TC,{meta:a}):D.jsx(bC,{meta:a})}function RC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(yo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(AC,{meta:a.meta})]})}function CC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Hd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Hd.title}),D.jsx("div",{className:"personas__grid",children:Hd.items.map(a=>D.jsx(RC,{persona:a},a.title))})]})})}function wC(){const[a,e]=We.useState(!1),[i,r]=We.useState(!1),[o,c]=We.useState("");return We.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),We.useEffect(()=>{const u=du.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),We.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Fp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:du.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Pn.docs,children:"Docs"}),D.jsx(yo,{href:Pn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[du.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Pn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function DC(){const a=We.useRef(null),e=Gp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Hp,{text:L_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:L_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function LC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(xC,{}),D.jsx(wC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(B3,{}),D.jsx(vC,{}),D.jsx(DC,{}),D.jsx(vy,{}),D.jsx(CC,{}),D.jsx(cC,{}),D.jsx(Sy,{}),D.jsx(_y,{})]}),D.jsx(uC,{})]})}my.createRoot(document.getElementById("root")).render(D.jsx(We.StrictMode,{children:D.jsx(LC,{})}));
