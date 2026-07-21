(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Ld={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function ty(){if(__)return fl;__=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return fl.Fragment=e,fl.jsx=i,fl.jsxs=i,fl}var v_;function ny(){return v_||(v_=1,Ld.exports=ty()),Ld.exports}var D=ny(),Nd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function iy(){if(x_)return ct;x_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(P,K,Se){this.props=P,this.context=K,this.refs=y,this.updater=Se||E}M.prototype.isReactComponent={},M.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=M.prototype;function z(P,K,Se){this.props=P,this.context=K,this.refs=y,this.updater=Se||E}var R=z.prototype=new I;R.constructor=z,w(R,M.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,K,Se){var Te=Se.ref;return{$$typeof:a,type:P,key:K,ref:Te!==void 0?Te:null,props:Se}}function k(P,K){return N(P.type,K,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function j(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return K[Se]})}var ce=/\/+/g;function ue(P,K){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):K.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,K,Se,Te,Re){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(te){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case a:case e:ye=!0;break;case g:return ye=P._init,F(ye(P._payload),K,Se,Te,Re)}}if(ye)return Re=Re(P),ye=Te===""?"."+ue(P,0):Te,O(Re)?(Se="",ye!=null&&(Se=ye.replace(ce,"$&/")+"/"),F(Re,K,Se,"",function(it){return it})):Re!=null&&(V(Re)&&(Re=k(Re,Se+(Re.key==null||P&&P.key===Re.key?"":(""+Re.key).replace(ce,"$&/")+"/")+ye)),K.push(Re)),1;ye=0;var Ee=Te===""?".":Te+":";if(O(P))for(var Ge=0;Ge<P.length;Ge++)Te=P[Ge],te=Ee+ue(Te,Ge),ye+=F(Te,K,Se,te,Re);else if(Ge=x(P),typeof Ge=="function")for(P=Ge.call(P),Ge=0;!(Te=P.next()).done;)Te=Te.value,te=Ee+ue(Te,Ge++),ye+=F(Te,K,Se,te,Re);else if(te==="object"){if(typeof P.then=="function")return F(q(P),K,Se,Te,Re);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(P,K,Se){if(P==null)return P;var Te=[],Re=0;return F(P,Te,"","",function(te){return K.call(Se,te,Re++)}),Te}function $(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xe={map:H,forEach:function(P,K,Se){H(P,function(){K.apply(this,arguments)},Se)},count:function(P){var K=0;return H(P,function(){K++}),K},toArray:function(P){return H(P,function(K){return K})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ct.Activity=_,ct.Children=xe,ct.Component=M,ct.Fragment=i,ct.Profiler=o,ct.PureComponent=z,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ct.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ct.cache=function(P){return function(){return P.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(P,K,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Te=w({},P.props),Re=P.key;if(K!=null)for(te in K.key!==void 0&&(Re=""+K.key),K)!T.call(K,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&K.ref===void 0||(Te[te]=K[te]);var te=arguments.length-2;if(te===1)Te.children=Se;else if(1<te){for(var ye=Array(te),Ee=0;Ee<te;Ee++)ye[Ee]=arguments[Ee+2];Te.children=ye}return N(P.type,Re,Te)},ct.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ct.createElement=function(P,K,Se){var Te,Re={},te=null;if(K!=null)for(Te in K.key!==void 0&&(te=""+K.key),K)T.call(K,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Re[Te]=K[Te]);var ye=arguments.length-2;if(ye===1)Re.children=Se;else if(1<ye){for(var Ee=Array(ye),Ge=0;Ge<ye;Ge++)Ee[Ge]=arguments[Ge+2];Re.children=Ee}if(P&&P.defaultProps)for(Te in ye=P.defaultProps,ye)Re[Te]===void 0&&(Re[Te]=ye[Te]);return N(P,te,Re)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(P){return{$$typeof:h,render:P}},ct.isValidElement=V,ct.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:$}},ct.memo=function(P,K){return{$$typeof:d,type:P,compare:K===void 0?null:K}},ct.startTransition=function(P){var K=B.T,Se={};B.T=Se;try{var Te=P(),Re=B.S;Re!==null&&Re(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(L,me)}catch(te){me(te)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),B.T=K}},ct.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ct.use=function(P){return B.H.use(P)},ct.useActionState=function(P,K,Se){return B.H.useActionState(P,K,Se)},ct.useCallback=function(P,K){return B.H.useCallback(P,K)},ct.useContext=function(P){return B.H.useContext(P)},ct.useDebugValue=function(){},ct.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},ct.useEffect=function(P,K){return B.H.useEffect(P,K)},ct.useEffectEvent=function(P){return B.H.useEffectEvent(P)},ct.useId=function(){return B.H.useId()},ct.useImperativeHandle=function(P,K,Se){return B.H.useImperativeHandle(P,K,Se)},ct.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},ct.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},ct.useMemo=function(P,K){return B.H.useMemo(P,K)},ct.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},ct.useReducer=function(P,K,Se){return B.H.useReducer(P,K,Se)},ct.useRef=function(P){return B.H.useRef(P)},ct.useState=function(P){return B.H.useState(P)},ct.useSyncExternalStore=function(P,K,Se){return B.H.useSyncExternalStore(P,K,Se)},ct.useTransition=function(){return B.H.useTransition()},ct.version="19.2.7",ct}var S_;function _p(){return S_||(S_=1,Nd.exports=iy()),Nd.exports}var ke=_p(),Ud={exports:{}},dl={},Od={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function ay(){return M_||(M_=1,(function(a){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var me=$-1>>>1,xe=F[me];if(0<o(xe,H))F[me]=H,F[$]=xe,$=me;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var me=0,xe=F.length,P=xe>>>1;me<P;){var K=2*(me+1)-1,Se=F[K],Te=K+1,Re=F[Te];if(0>o(Se,$))Te<xe&&0>o(Re,Se)?(F[me]=Re,F[Te]=$,me=Te):(F[me]=Se,F[K]=$,me=K);else if(Te<xe&&0>o(Re,$))F[me]=Re,F[Te]=$,me=Te;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,E=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=F)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function O(F){if(w=!1,R(F),!E)if(i(m)!==null)E=!0,L||(L=!0,j());else{var H=i(d);H!==null&&q(O,H.startTime-F)}}var L=!1,B=-1,T=5,N=-1;function k(){return y?!0:!(a.unstable_now()-N<T)}function V(){if(y=!1,L){var F=a.unstable_now();N=F;var H=!0;try{e:{E=!1,w&&(w=!1,I(B),B=-1),x=!0;var $=v;try{t:{for(R(F),_=i(m);_!==null&&!(_.expirationTime>F&&k());){var me=_.callback;if(typeof me=="function"){_.callback=null,v=_.priorityLevel;var xe=me(_.expirationTime<=F);if(F=a.unstable_now(),typeof xe=="function"){_.callback=xe,R(F),H=!0;break t}_===i(m)&&r(m),R(F)}else r(m);_=i(m)}if(_!==null)H=!0;else{var P=i(d);P!==null&&q(O,P.startTime-F),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?j():L=!1}}}var j;if(typeof z=="function")j=function(){z(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=V,j=function(){ue.postMessage(null)}}else j=function(){M(V,0)};function q(F,H){B=M(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(F,H,$){var me=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:xe,sortIndex:-1},$>me?(F.sortIndex=$,e(d,F),i(m)===null&&F===i(d)&&(w?(I(B),B=-1):w=!0,q(O,$-me))):(F.sortIndex=xe,e(m,F),E||x||(E=!0,L||(L=!0,j()))),F},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(Pd)),Pd}var y_;function sy(){return y_||(y_=1,Od.exports=ay()),Od.exports}var Id={exports:{}},ri={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function ry(){if(E_)return ri;E_=1;var a=_p();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ri.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ri.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},ri.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},ri.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},ri.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ri.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ri.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},ri.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ri.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},ri.requestFormReset=function(m){r.d.r(m)},ri.unstable_batchedUpdates=function(m,d){return m(d)},ri.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},ri.useFormStatus=function(){return u.H.useHostTransitionStatus()},ri.version="19.2.7",ri}var b_;function Qv(){if(b_)return Id.exports;b_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Id.exports=ry(),Id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function oy(){if(T_)return dl;T_=1;var a=sy(),e=_p(),i=Qv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=p;break}if(C===l){S=!0,l=f,s=p;break}C=C.sibling}if(!S){for(C=p.child;C;){if(C===s){S=!0,s=p,l=f;break}if(C===l){S=!0,l=p,s=f;break}C=C.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var q=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function P(t){return{current:t}}function K(t){0>xe||(t.current=me[xe],me[xe]=null,xe--)}function Se(t,n){xe++,me[xe]=t.current,t.current=n}var Te=P(null),Re=P(null),te=P(null),ye=P(null);function Ee(t,n){switch(Se(te,n),Se(Re,t),Se(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hg(n),t=Gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Te),Se(Te,t)}function Ge(){K(Te),K(Re),K(te)}function it(t){t.memoizedState!==null&&Se(ye,t);var n=Te.current,s=Gg(n,t.type);n!==s&&(Se(Re,t),Se(Te,s))}function tt(t){Re.current===t&&(K(Te),K(Re)),ye.current===t&&(K(ye),ol._currentValue=$)}var Yt,ft;function vt(t){if(Yt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ft=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ft}var mt=!1;function dt(t,n){if(!t||mt)return"";mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(fe){var le=fe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(fe){le=fe}t.call(Me.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],C=p[1];if(S&&C){var G=S.split(`
`),re=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===re.length)for(l=G.length-1,f=re.length-1;1<=l&&0<=f&&G[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==re[f]){var ge=`
`+G[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{mt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function on(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function ln(t){try{var n="",s=null;do n+=on(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var nn=Object.prototype.hasOwnProperty,pn=a.unstable_scheduleCallback,Ut=a.unstable_cancelCallback,an=a.unstable_shouldYield,Z=a.unstable_requestPaint,Ht=a.unstable_now,xt=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,ae=a.unstable_LowPriority,he=a.unstable_IdlePriority,Ae=a.log,Ne=a.unstable_setDisableYieldValue,pe=null,de=null;function we(t){if(typeof Ae=="function"&&Ne(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(pe,t)}catch{}}var He=Math.clz32?Math.clz32:$e,Oe=Math.log,Le=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Oe(t)/Le|0)|0}var Ke=256,ot=262144,W=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=Ce(l):(S&=C,S!==0?f=Ce(S):s||(s=C&~t,s!==0&&(f=Ce(s))))):(C=l&~p,C!==0?f=Ce(C):S!==0?f=Ce(S):s||(s=l&~t,s!==0&&(f=Ce(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $t(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,re=t.hiddenUpdates;for(s=S&~s;0<s;){var ge=31-He(s),Me=1<<ge;C[ge]=0,G[ge]=-1;var le=re[ge];if(le!==null)for(re[ge]=null,ge=0;ge<le.length;ge++){var fe=le[ge];fe!==null&&(fe.lane&=-536870913)}s&=~Me}l!==0&&Pt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function Pt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ei(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function ti(t,n){var s=n&-n;return s=(s&42)!==0?1:as(s),(s&(t.suspendedLanes|n))!==0?0:s}function as(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ss(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function da(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:u_(t.type))}function wa(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var De=Math.random().toString(36).slice(2),Ve="__reactFiber$"+De,rt="__reactProps$"+De,yt="__reactContainer$"+De,cn="__reactEvents$"+De,Wn="__reactListeners$"+De,yn="__reactHandles$"+De,En="__reactResources$"+De,bn="__reactMarker$"+De;function jt(t){delete t[Ve],delete t[rt],delete t[cn],delete t[Wn],delete t[yn]}function qn(t){var n=t[Ve];if(n)return n;for(var s=t.parentNode;s;){if(n=s[yt]||s[Ve]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=jg(t);t!==null;){if(s=t[Ve])return s;t=jg(t)}return n}t=s,s=t.parentNode}return null}function ni(t){if(t=t[Ve]||t[yt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Yn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function bi(t){var n=t[En];return n||(n=t[En]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function kt(t){t[bn]=!0}var ha=new Set,A={};function Y(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)ha.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Ie={};function Xe(t){return nn.call(Ie,t)?!0:nn.call(ie,t)?!1:ne.test(t)?Ie[t]=!0:(ie[t]=!0,!1)}function Pe(t,n,s){if(Xe(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ye(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function qe(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function at(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){if(!t._valueTracker){var n=at(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=at(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Tt=/[\n"\\]/g;function It(t){return t.replace(Tt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,s,l,f,p,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qe(n)):t.value!==""+Qe(n)&&(t.value=""+Qe(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?St(t,S,Qe(n)):s!=null?St(t,S,Qe(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Qe(C):t.removeAttribute("name")}function Pn(t,n,s,l,f,p,S,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Dt(t);return}s=s!=null?""+Qe(s):"",n=n!=null?""+Qe(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Dt(t)}function St(t,n,s){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function _n(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Qe(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function ii(t,n,s){if(n!=null&&(n=""+Qe(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Qe(s):""}function ui(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Qe(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Dt(t)}function Hn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Lt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Lt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Ti(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&rn(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&rn(t,p,n[p])}function Gt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Da(t){return Bi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var gr=null;function _r(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ht=null,In=null;function Ri(t){var n=ni(t);if(n&&(t=n.stateNode)){var s=t[rt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Be(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[rt]||null;if(!f)throw Error(r(90));Be(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&sn(l)}break e;case"textarea":ii(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&_n(t,!!s.multiple,n,!1)}}}var Gn=!1;function ta(t,n,s){if(Gn)return t(n,s);Gn=!0;try{var l=t(n);return l}finally{if(Gn=!1,(ht!==null||In!==null)&&(xc(),ht&&(n=ht,t=In,In=ht=null,Ri(n),t)))for(n=0;n<t.length;n++)Ri(t[n])}}function Vn(t,n){var s=t.stateNode;if(s===null)return null;var l=s[rt]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=!1;if(ai)try{var na={};Object.defineProperty(na,"passive",{get:function(){pa=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{pa=!1}var si=null,vr=null,Ul=null;function Gp(){if(Ul)return Ul;var t,n=vr,s=n.length,l,f="value"in si?si.value:si.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return Ul=f.slice(t,1<l?1-l:void 0)}function Ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Vp(){return!1}function gi(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Pl:Vp,this.isPropagationStopped=Vp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=gi(zs),Ao=_({},zs,{view:0,detail:0}),$x=gi(Ao),Nu,Uu,Ro,Fl=_({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Nu=t.screenX-Ro.screenX,Uu=t.screenY-Ro.screenY):Uu=Nu=0,Ro=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),kp=gi(Fl),eS=_({},Fl,{dataTransfer:0}),tS=gi(eS),nS=_({},Ao,{relatedTarget:0}),Ou=gi(nS),iS=_({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),aS=gi(iS),sS=_({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=gi(sS),oS=_({},zs,{data:0}),Xp=gi(oS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=uS[t])?!!n[t]:!1}function Pu(){return fS}var dS=_({},Ao,{key:function(t){if(t.key){var n=lS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=gi(dS),pS=_({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=gi(pS),mS=_({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),gS=gi(mS),_S=_({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=gi(_S),xS=_({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=gi(xS),MS=_({},zs,{newState:0,oldState:0}),yS=gi(MS),ES=[9,13,27,32],Iu=ai&&"CompositionEvent"in window,Co=null;ai&&"documentMode"in document&&(Co=document.documentMode);var bS=ai&&"TextEvent"in window&&!Co,qp=ai&&(!Iu||Co&&8<Co&&11>=Co),Yp=" ",jp=!1;function Zp(t,n){switch(t){case"keyup":return ES.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function TS(t,n){switch(t){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(jp=!0,Yp);case"textInput":return t=n.data,t===Yp&&jp?null:t;default:return null}}function AS(t,n){if(xr)return t==="compositionend"||!Iu&&Zp(t,n)?(t=Gp(),Ul=vr=si=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qp&&n.locale!=="ko"?null:n.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!RS[t.type]:n==="textarea"}function Jp(t,n,s,l){ht?In?In.push(l):In=[l]:ht=l,n=Ac(n,"onChange"),0<n.length&&(s=new Il("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var wo=null,Do=null;function CS(t){Og(t,0)}function Bl(t){var n=Yn(t);if(sn(n))return t}function $p(t,n){if(t==="change")return n}var em=!1;if(ai){var Fu;if(ai){var Bu="oninput"in document;if(!Bu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Bu=typeof tm.oninput=="function"}Fu=Bu}else Fu=!1;em=Fu&&(!document.documentMode||9<document.documentMode)}function nm(){wo&&(wo.detachEvent("onpropertychange",im),Do=wo=null)}function im(t){if(t.propertyName==="value"&&Bl(Do)){var n=[];Jp(n,Do,t,_r(t)),ta(CS,n)}}function wS(t,n,s){t==="focusin"?(nm(),wo=n,Do=s,wo.attachEvent("onpropertychange",im)):t==="focusout"&&nm()}function DS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Do)}function LS(t,n){if(t==="click")return Bl(n)}function NS(t,n){if(t==="input"||t==="change")return Bl(n)}function US(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ci=typeof Object.is=="function"?Object.is:US;function Lo(t,n){if(Ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!nn.call(n,f)||!Ci(t[f],n[f]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,n){var s=am(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=am(s)}}function rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Zt(t.document)}return n}function zu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var OS=ai&&"documentMode"in document&&11>=document.documentMode,Sr=null,Hu=null,No=null,Gu=!1;function lm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Gu||Sr==null||Sr!==Zt(l)||(l=Sr,"selectionStart"in l&&zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Lo(No,l)||(No=l,l=Ac(Hu,"onSelect"),0<l.length&&(n=new Il("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Sr)))}function Hs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Mr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Vu={},cm={};ai&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Gs(t){if(Vu[t])return Vu[t];if(!Mr[t])return t;var n=Mr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in cm)return Vu[t]=n[s];return t}var um=Gs("animationend"),fm=Gs("animationiteration"),dm=Gs("animationstart"),PS=Gs("transitionrun"),IS=Gs("transitionstart"),FS=Gs("transitioncancel"),hm=Gs("transitionend"),pm=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function ia(t,n){pm.set(t,n),Y(n,[t])}var zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},zi=[],yr=0,Xu=0;function Hl(){for(var t=yr,n=Xu=yr=0;n<t;){var s=zi[n];zi[n++]=null;var l=zi[n];zi[n++]=null;var f=zi[n];zi[n++]=null;var p=zi[n];if(zi[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&mm(s,f,p)}}function Gl(t,n,s,l){zi[yr++]=t,zi[yr++]=n,zi[yr++]=s,zi[yr++]=l,Xu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Wu(t,n,s,l){return Gl(t,n,s,l),Vl(t)}function Vs(t,n){return Gl(t,null,null,n),Vl(t)}function mm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-He(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Vl(t){if(50<el)throw el=0,td=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Er={};function BS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(t,n,s,l){return new BS(t,n,s,l)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function La(t,n){var s=t.alternate;return s===null?(s=wi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function gm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function kl(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")qu(t)&&(S=1);else if(typeof t=="string")S=kM(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=wi(31,s,n,f),t.elementType=N,t.lanes=p,t;case w:return ks(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=wi(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case O:return t=wi(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=wi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case I:S=9;break e;case R:S=11;break e;case B:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=wi(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function ks(t,n,s,l){return t=wi(7,t,l,n),t.lanes=s,t}function Yu(t,n,s){return t=wi(6,t,null,n),t.lanes=s,t}function _m(t){var n=wi(18,null,null,0);return n.stateNode=t,n}function ju(t,n,s){return n=wi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vm=new WeakMap;function Hi(t,n){if(typeof t=="object"&&t!==null){var s=vm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:ln(n)},vm.set(t,n),n)}return{value:t,source:n,stack:ln(n)}}var br=[],Tr=0,Xl=null,Uo=0,Gi=[],Vi=0,rs=null,ma=1,ga="";function Na(t,n){br[Tr++]=Uo,br[Tr++]=Xl,Xl=t,Uo=n}function xm(t,n,s){Gi[Vi++]=ma,Gi[Vi++]=ga,Gi[Vi++]=rs,rs=t;var l=ma;t=ga;var f=32-He(l)-1;l&=~(1<<f),s+=1;var p=32-He(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ma=1<<32-He(n)+f|s<<f|l,ga=p+t}else ma=1<<p|s<<f|l,ga=t}function Zu(t){t.return!==null&&(Na(t,1),xm(t,1,0))}function Ku(t){for(;t===Xl;)Xl=br[--Tr],br[Tr]=null,Uo=br[--Tr],br[Tr]=null;for(;t===rs;)rs=Gi[--Vi],Gi[Vi]=null,ga=Gi[--Vi],Gi[Vi]=null,ma=Gi[--Vi],Gi[Vi]=null}function Sm(t,n){Gi[Vi++]=ma,Gi[Vi++]=ga,Gi[Vi++]=rs,ma=n.id,ga=n.overflow,rs=t}var jn=null,un=null,Ct=!1,os=null,ki=!1,Qu=Error(r(519));function ls(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Hi(n,t)),Qu}function Mm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[Ve]=t,n[rt]=l,s){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(s=0;s<nl.length;s++)bt(nl[s],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Pn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),ui(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Bg(n.textContent,s)?(l.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),l.onScroll!=null&&bt("scroll",n),l.onScrollEnd!=null&&bt("scrollend",n),l.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||ls(t,!0)}function ym(t){for(jn=t.return;jn;)switch(jn.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:jn=jn.return}}function Ar(t){if(t!==jn)return!1;if(!Ct)return ym(t),Ct=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||gd(t.type,t.memoizedProps)),s=!s),s&&un&&ls(t),ym(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=Yg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=Yg(t)}else n===27?(n=un,ys(t.type)?(t=Md,Md=null,un=t):un=n):un=jn?Wi(t.stateNode.nextSibling):null;return!0}function Xs(){un=jn=null,Ct=!1}function Ju(){var t=os;return t!==null&&(Si===null?Si=t:Si.push.apply(Si,t),os=null),t}function Oo(t){os===null?os=[t]:os.push(t)}var $u=P(null),Ws=null,Ua=null;function cs(t,n,s){Se($u,n._currentValue),n._currentValue=s}function Oa(t){t._currentValue=$u.current,K($u)}function ef(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function tf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var G=0;G<n.length;G++)if(C.context===n[G]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),ef(p.return,s,t),l||(S=null);break e}p=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),ef(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Rr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=f.type;Ci(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(ol):t=[ol])}f=f.return}t!==null&&tf(n,t,s,l),n.flags|=262144}function Wl(t){for(t=t.firstContext;t!==null;){if(!Ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function qs(t){Ws=t,Ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return Em(Ws,t)}function ql(t,n){return Ws===null&&qs(t),Em(t,n)}function Em(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ua===null){if(t===null)throw Error(r(308));Ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ua=Ua.next=n;return s}var zS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},HS=a.unstable_scheduleCallback,GS=a.unstable_NormalPriority,Cn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new zS,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&HS(GS,function(){t.controller.abort()})}var Io=null,af=0,Cr=0,wr=null;function VS(t,n){if(Io===null){var s=Io=[];af=0,Cr=od(),wr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return af++,n.then(bm,bm),n}function bm(){if(--af===0&&Io!==null){wr!==null&&(wr.status="fulfilled");var t=Io;Io=null,Cr=0,wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kS(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Tm=F.S;F.S=function(t,n){lg=Ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&VS(t,n),Tm!==null&&Tm(t,n)};var Ys=P(null);function sf(){var t=Ys.current;return t!==null?t:en.pooledCache}function Yl(t,n){n===null?Se(Ys,Ys.current):Se(Ys,n.pool)}function Am(){var t=sf();return t===null?null:{parent:Cn._currentValue,pool:t}}var Dr=Error(r(460)),rf=Error(r(474)),jl=Error(r(542)),Zl={then:function(){}};function Rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ea,ea),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dm(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dm(t),t}throw Zs=n,Dr}}function js(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Zs=s,Dr):s}}var Zs=null;function wm(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}function Dm(t){if(t===Dr||t===jl)throw Error(r(483))}var Lr=null,Fo=0;function Kl(t){var n=Fo;return Fo+=1,Lr===null&&(Lr=[]),Cm(Lr,t,n)}function Bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lm(t){function n(J,X){if(t){var se=J.deletions;se===null?(J.deletions=[X],J.flags|=16):se.push(X)}}function s(J,X){if(!t)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function l(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function f(J,X){return J=La(J,X),J.index=0,J.sibling=null,J}function p(J,X,se){return J.index=se,t?(se=J.alternate,se!==null?(se=se.index,se<X?(J.flags|=67108866,X):se):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function S(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function C(J,X,se,ve){return X===null||X.tag!==6?(X=Yu(se,J.mode,ve),X.return=J,X):(X=f(X,se),X.return=J,X)}function G(J,X,se,ve){var nt=se.type;return nt===w?ge(J,X,se.props.children,ve,se.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&js(nt)===X.type)?(X=f(X,se.props),Bo(X,se),X.return=J,X):(X=kl(se.type,se.key,se.props,null,J.mode,ve),Bo(X,se),X.return=J,X)}function re(J,X,se,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=ju(se,J.mode,ve),X.return=J,X):(X=f(X,se.children||[]),X.return=J,X)}function ge(J,X,se,ve,nt){return X===null||X.tag!==7?(X=ks(se,J.mode,ve,nt),X.return=J,X):(X=f(X,se),X.return=J,X)}function Me(J,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Yu(""+X,J.mode,se),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return se=kl(X.type,X.key,X.props,null,J.mode,se),Bo(se,X),se.return=J,se;case E:return X=ju(X,J.mode,se),X.return=J,X;case T:return X=js(X),Me(J,X,se)}if(q(X)||j(X))return X=ks(X,J.mode,se,null),X.return=J,X;if(typeof X.then=="function")return Me(J,Kl(X),se);if(X.$$typeof===z)return Me(J,ql(J,X),se);Ql(J,X)}return null}function le(J,X,se,ve){var nt=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:C(J,X,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===nt?G(J,X,se,ve):null;case E:return se.key===nt?re(J,X,se,ve):null;case T:return se=js(se),le(J,X,se,ve)}if(q(se)||j(se))return nt!==null?null:ge(J,X,se,ve,null);if(typeof se.then=="function")return le(J,X,Kl(se),ve);if(se.$$typeof===z)return le(J,X,ql(J,se),ve);Ql(J,se)}return null}function fe(J,X,se,ve,nt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return J=J.get(se)||null,C(X,J,""+ve,nt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case x:return J=J.get(ve.key===null?se:ve.key)||null,G(X,J,ve,nt);case E:return J=J.get(ve.key===null?se:ve.key)||null,re(X,J,ve,nt);case T:return ve=js(ve),fe(J,X,se,ve,nt)}if(q(ve)||j(ve))return J=J.get(se)||null,ge(X,J,ve,nt,null);if(typeof ve.then=="function")return fe(J,X,se,Kl(ve),nt);if(ve.$$typeof===z)return fe(J,X,se,ql(X,ve),nt);Ql(X,ve)}return null}function Ze(J,X,se,ve){for(var nt=null,Ft=null,Je=X,gt=X=0,Rt=null;Je!==null&&gt<se.length;gt++){Je.index>gt?(Rt=Je,Je=null):Rt=Je.sibling;var Bt=le(J,Je,se[gt],ve);if(Bt===null){Je===null&&(Je=Rt);break}t&&Je&&Bt.alternate===null&&n(J,Je),X=p(Bt,X,gt),Ft===null?nt=Bt:Ft.sibling=Bt,Ft=Bt,Je=Rt}if(gt===se.length)return s(J,Je),Ct&&Na(J,gt),nt;if(Je===null){for(;gt<se.length;gt++)Je=Me(J,se[gt],ve),Je!==null&&(X=p(Je,X,gt),Ft===null?nt=Je:Ft.sibling=Je,Ft=Je);return Ct&&Na(J,gt),nt}for(Je=l(Je);gt<se.length;gt++)Rt=fe(Je,J,gt,se[gt],ve),Rt!==null&&(t&&Rt.alternate!==null&&Je.delete(Rt.key===null?gt:Rt.key),X=p(Rt,X,gt),Ft===null?nt=Rt:Ft.sibling=Rt,Ft=Rt);return t&&Je.forEach(function(Rs){return n(J,Rs)}),Ct&&Na(J,gt),nt}function st(J,X,se,ve){if(se==null)throw Error(r(151));for(var nt=null,Ft=null,Je=X,gt=X=0,Rt=null,Bt=se.next();Je!==null&&!Bt.done;gt++,Bt=se.next()){Je.index>gt?(Rt=Je,Je=null):Rt=Je.sibling;var Rs=le(J,Je,Bt.value,ve);if(Rs===null){Je===null&&(Je=Rt);break}t&&Je&&Rs.alternate===null&&n(J,Je),X=p(Rs,X,gt),Ft===null?nt=Rs:Ft.sibling=Rs,Ft=Rs,Je=Rt}if(Bt.done)return s(J,Je),Ct&&Na(J,gt),nt;if(Je===null){for(;!Bt.done;gt++,Bt=se.next())Bt=Me(J,Bt.value,ve),Bt!==null&&(X=p(Bt,X,gt),Ft===null?nt=Bt:Ft.sibling=Bt,Ft=Bt);return Ct&&Na(J,gt),nt}for(Je=l(Je);!Bt.done;gt++,Bt=se.next())Bt=fe(Je,J,gt,Bt.value,ve),Bt!==null&&(t&&Bt.alternate!==null&&Je.delete(Bt.key===null?gt:Bt.key),X=p(Bt,X,gt),Ft===null?nt=Bt:Ft.sibling=Bt,Ft=Bt);return t&&Je.forEach(function(ey){return n(J,ey)}),Ct&&Na(J,gt),nt}function Jt(J,X,se,ve){if(typeof se=="object"&&se!==null&&se.type===w&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var nt=se.key;X!==null;){if(X.key===nt){if(nt=se.type,nt===w){if(X.tag===7){s(J,X.sibling),ve=f(X,se.props.children),ve.return=J,J=ve;break e}}else if(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&js(nt)===X.type){s(J,X.sibling),ve=f(X,se.props),Bo(ve,se),ve.return=J,J=ve;break e}s(J,X);break}else n(J,X);X=X.sibling}se.type===w?(ve=ks(se.props.children,J.mode,ve,se.key),ve.return=J,J=ve):(ve=kl(se.type,se.key,se.props,null,J.mode,ve),Bo(ve,se),ve.return=J,J=ve)}return S(J);case E:e:{for(nt=se.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){s(J,X.sibling),ve=f(X,se.children||[]),ve.return=J,J=ve;break e}else{s(J,X);break}else n(J,X);X=X.sibling}ve=ju(se,J.mode,ve),ve.return=J,J=ve}return S(J);case T:return se=js(se),Jt(J,X,se,ve)}if(q(se))return Ze(J,X,se,ve);if(j(se)){if(nt=j(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),st(J,X,se,ve)}if(typeof se.then=="function")return Jt(J,X,Kl(se),ve);if(se.$$typeof===z)return Jt(J,X,ql(J,se),ve);Ql(J,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,X!==null&&X.tag===6?(s(J,X.sibling),ve=f(X,se),ve.return=J,J=ve):(s(J,X),ve=Yu(se,J.mode,ve),ve.return=J,J=ve),S(J)):s(J,X)}return function(J,X,se,ve){try{Fo=0;var nt=Jt(J,X,se,ve);return Lr=null,nt}catch(Je){if(Je===Dr||Je===jl)throw Je;var Ft=wi(29,Je,null,J.mode);return Ft.lanes=ve,Ft.return=J,Ft}finally{}}}var Ks=Lm(!0),Nm=Lm(!1),us=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ds(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Vt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Vl(t),mm(t,null,s),n}return Gl(t,l,n,s),Vl(t)}function zo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ei(t,s)}}function cf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var uf=!1;function Ho(){if(uf){var t=wr;if(t!==null)throw t}}function Go(t,n,s,l){uf=!1;var f=t.updateQueue;us=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,re=G.next;G.next=null,S===null?p=re:S.next=re,S=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==S&&(C===null?ge.firstBaseUpdate=re:C.next=re,ge.lastBaseUpdate=G))}if(p!==null){var Me=f.baseState;S=0,ge=re=G=null,C=p;do{var le=C.lane&-536870913,fe=le!==C.lane;if(fe?(At&le)===le:(l&le)===le){le!==0&&le===Cr&&(uf=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=t,st=C;le=n;var Jt=s;switch(st.tag){case 1:if(Ze=st.payload,typeof Ze=="function"){Me=Ze.call(Jt,Me,le);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=st.payload,le=typeof Ze=="function"?Ze.call(Jt,Me,le):Ze,le==null)break e;Me=_({},Me,le);break e;case 2:us=!0}}le=C.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=f.callbacks,fe===null?f.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(re=ge=fe,G=Me):ge=ge.next=fe,S|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;fe=C,C=fe.next,fe.next=null,f.lastBaseUpdate=fe,f.shared.pending=null}}while(!0);ge===null&&(G=Me),f.baseState=G,f.firstBaseUpdate=re,f.lastBaseUpdate=ge,p===null&&(f.shared.lanes=0),_s|=S,t.lanes=S,t.memoizedState=Me}}function Um(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Om(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Um(s[t],n)}var Nr=P(null),Jl=P(0);function Pm(t,n){t=ka,Se(Jl,t),Se(Nr,n),ka=t|n.baseLanes}function ff(){Se(Jl,ka),Se(Nr,Nr.current)}function df(){ka=Jl.current,K(Nr),K(Jl)}var Di=P(null),Xi=null;function hs(t){var n=t.alternate;Se(Tn,Tn.current&1),Se(Di,t),Xi===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(Xi=t)}function hf(t){Se(Tn,Tn.current),Se(Di,t),Xi===null&&(Xi=t)}function Im(t){t.tag===22?(Se(Tn,Tn.current),Se(Di,t),Xi===null&&(Xi=t)):ps()}function ps(){Se(Tn,Tn.current),Se(Di,Di.current)}function Li(t){K(Di),Xi===t&&(Xi=null),K(Tn)}var Tn=P(0);function $l(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||xd(s)||Sd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pa=0,pt=null,Kt=null,wn=null,ec=!1,Ur=!1,Qs=!1,tc=0,Vo=0,Or=null,XS=0;function vn(){throw Error(r(321))}function pf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Ci(t[s],n[s]))return!1;return!0}function mf(t,n,s,l,f,p){return Pa=p,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?x0:Df,Qs=!1,p=s(l,f),Qs=!1,Ur&&(p=Bm(n,s,l,f)),Fm(t),p}function Fm(t){F.H=Wo;var n=Kt!==null&&Kt.next!==null;if(Pa=0,wn=Kt=pt=null,ec=!1,Vo=0,Or=null,n)throw Error(r(300));t===null||Dn||(t=t.dependencies,t!==null&&Wl(t)&&(Dn=!0))}function Bm(t,n,s,l){pt=t;var f=0;do{if(Ur&&(Or=null),Vo=0,Ur=!1,25<=f)throw Error(r(301));if(f+=1,wn=Kt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=S0,p=n(s,l)}while(Ur);return p}function WS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?ko(n):n,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(pt.flags|=1024),n}function gf(){var t=tc!==0;return tc=0,t}function _f(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function vf(t){if(ec){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ec=!1}Pa=0,wn=Kt=pt=null,Ur=!1,Vo=tc=0,Or=null}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?pt.memoizedState=wn=t:wn=wn.next=t,wn}function An(){if(Kt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var n=wn===null?pt.memoizedState:wn.next;if(n!==null)wn=n,Kt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},wn===null?pt.memoizedState=wn=t:wn=wn.next=t}return wn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(t){var n=Vo;return Vo+=1,Or===null&&(Or=[]),t=Cm(Or,t,n),n=pt,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?x0:Df),t}function ic(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ko(t);if(t.$$typeof===z)return Zn(t)}throw Error(r(438,String(t)))}function xf(t){var n=null,s=pt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=pt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=nc(),pt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=k;return n.index++,s}function Ia(t,n){return typeof n=="function"?n(t):n}function ac(t){var n=An();return Sf(n,Kt,t)}function Sf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var C=S=null,G=null,re=n,ge=!1;do{var Me=re.lane&-536870913;if(Me!==re.lane?(At&Me)===Me:(Pa&Me)===Me){var le=re.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Me===Cr&&(ge=!0);else if((Pa&le)===le){re=re.next,le===Cr&&(ge=!0);continue}else Me={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(C=G=Me,S=p):G=G.next=Me,pt.lanes|=le,_s|=le;Me=re.action,Qs&&s(p,Me),p=re.hasEagerState?re.eagerState:s(p,Me)}else le={lane:Me,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(C=G=le,S=p):G=G.next=le,pt.lanes|=Me,_s|=Me;re=re.next}while(re!==null&&re!==n);if(G===null?S=p:G.next=C,!Ci(p,t.memoizedState)&&(Dn=!0,ge&&(s=wr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Mf(t){var n=An(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);Ci(p,n.memoizedState)||(Dn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function zm(t,n,s){var l=pt,f=An(),p=Ct;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!Ci((Kt||f).memoizedState,s);if(S&&(f.memoizedState=s,Dn=!0),f=f.queue,bf(Vm.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Pr(9,{destroy:void 0},Gm.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Pa&127)!==0||Hm(l,n,s)}return s}function Hm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=pt.updateQueue,n===null?(n=nc(),pt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Gm(t,n,s,l){n.value=s,n.getSnapshot=l,km(n)&&Xm(t)}function Vm(t,n,s){return s(function(){km(n)&&Xm(t)})}function km(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Ci(t,s)}catch{return!0}}function Xm(t){var n=Vs(t,2);n!==null&&Mi(n,t,2)}function yf(t){var n=fi();if(typeof t=="function"){var s=t;if(t=s(),Qs){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},n}function Wm(t,n,s,l){return t.baseState=s,Sf(t,Kt,typeof l=="function"?l:Ia)}function qS(t,n,s,l,f){if(oc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};F.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,qm(n,p)):(p.next=s.next,n.pending=s.next=p)}}function qm(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=F.T,S={};F.T=S;try{var C=s(f,l),G=F.S;G!==null&&G(S,C),Ym(t,n,C)}catch(re){Ef(t,n,re)}finally{p!==null&&S.types!==null&&(p.types=S.types),F.T=p}}else try{p=s(f,l),Ym(t,n,p)}catch(re){Ef(t,n,re)}}function Ym(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){jm(t,n,l)},function(l){return Ef(t,n,l)}):jm(t,n,s)}function jm(t,n,s){n.status="fulfilled",n.value=s,Zm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,qm(t,s)))}function Ef(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Zm(n),n=n.next;while(n!==l)}t.action=null}function Zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Km(t,n){return n}function Qm(t,n){if(Ct){var s=en.formState;if(s!==null){e:{var l=pt;if(Ct){if(un){t:{for(var f=un,p=ki;f.nodeType!==8;){if(!p){f=null;break t}if(f=Wi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){un=Wi(f.nextSibling),l=f.data==="F!";break e}}ls(l)}l=!1}l&&(n=s[0])}}return s=fi(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:n},s.queue=l,s=g0.bind(null,pt,l),l.dispatch=s,l=yf(!1),p=wf.bind(null,pt,!1,l.queue),l=fi(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=qS.bind(null,pt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function Jm(t){var n=An();return $m(n,Kt,t)}function $m(t,n,s){if(n=Sf(t,n,Km)[0],t=ac(Ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ko(n)}catch(S){throw S===Dr?jl:S}else l=n;n=An();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(pt.flags|=2048,Pr(9,{destroy:void 0},YS.bind(null,f,s),null)),[l,p,t]}function YS(t,n){t.action=n}function e0(t){var n=An(),s=Kt;if(s!==null)return $m(n,s,t);An(),n=n.memoizedState,s=An();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Pr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=pt.updateQueue,n===null&&(n=nc(),pt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function t0(){return An().memoizedState}function sc(t,n,s,l){var f=fi();pt.flags|=t,f.memoizedState=Pr(1|n,{destroy:void 0},s,l===void 0?null:l)}function rc(t,n,s,l){var f=An();l=l===void 0?null:l;var p=f.memoizedState.inst;Kt!==null&&l!==null&&pf(l,Kt.memoizedState.deps)?f.memoizedState=Pr(n,p,s,l):(pt.flags|=t,f.memoizedState=Pr(1|n,p,s,l))}function n0(t,n){sc(8390656,8,t,n)}function bf(t,n){rc(2048,8,t,n)}function jS(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=nc(),pt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function i0(t){var n=An().memoizedState;return jS({ref:n,nextImpl:t}),function(){if((Vt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function a0(t,n){return rc(4,2,t,n)}function s0(t,n){return rc(4,4,t,n)}function r0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function o0(t,n,s){s=s!=null?s.concat([t]):null,rc(4,4,r0.bind(null,n,t),s)}function Tf(){}function l0(t,n){var s=An();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&pf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function c0(t,n){var s=An();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&pf(n,l[1]))return l[0];if(l=t(),Qs){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l}function Af(t,n,s){return s===void 0||(Pa&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=ug(),pt.lanes|=t,_s|=t,s)}function u0(t,n,s,l){return Ci(s,n)?s:Nr.current!==null?(t=Af(t,s,l),Ci(t,n)||(Dn=!0),t):(Pa&42)===0||(Pa&1073741824)!==0&&(At&261930)===0?(Dn=!0,t.memoizedState=s):(t=ug(),pt.lanes|=t,_s|=t,n)}function f0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=F.T,C={};F.T=C,wf(t,!1,n,s);try{var G=f(),re=F.S;if(re!==null&&re(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=kS(G,l);Xo(t,n,ge,Oi(t))}else Xo(t,n,l,Oi(t))}catch(Me){Xo(t,n,{then:function(){},status:"rejected",reason:Me},Oi())}finally{H.p=p,S!==null&&C.types!==null&&(S.types=C.types),F.T=S}}function ZS(){}function Rf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=d0(t).queue;f0(t,f,n,$,s===null?ZS:function(){return h0(t),s(l)})}function d0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function h0(t){var n=d0(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},Oi())}function Cf(){return Zn(ol)}function p0(){return An().memoizedState}function m0(){return An().memoizedState}function KS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Oi();t=fs(s);var l=ds(n,t,s);l!==null&&(Mi(l,n,s),zo(l,n,s)),n={cache:nf()},t.payload=n;return}n=n.return}}function QS(t,n,s){var l=Oi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},oc(t)?_0(n,s):(s=Wu(t,n,s,l),s!==null&&(Mi(s,t,l),v0(s,n,l)))}function g0(t,n,s){var l=Oi();Xo(t,n,s,l)}function Xo(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(oc(t))_0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,C=p(S,s);if(f.hasEagerState=!0,f.eagerState=C,Ci(C,S))return Gl(t,n,f,0),en===null&&Hl(),!1}catch{}finally{}if(s=Wu(t,n,f,l),s!==null)return Mi(s,t,l),v0(s,n,l),!0}return!1}function wf(t,n,s,l){if(l={lane:2,revertLane:od(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oc(t)){if(n)throw Error(r(479))}else n=Wu(t,s,l,2),n!==null&&Mi(n,t,2)}function oc(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function _0(t,n){Ur=ec=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function v0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ei(t,s)}}var Wo={readContext:Zn,use:ic,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};Wo.useEffectEvent=vn;var x0={readContext:Zn,use:ic,useCallback:function(t,n){return fi().memoizedState=[t,n===void 0?null:n],t},useContext:Zn,useEffect:n0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,sc(4194308,4,r0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return sc(4194308,4,t,n)},useInsertionEffect:function(t,n){sc(4,2,t,n)},useMemo:function(t,n){var s=fi();n=n===void 0?null:n;var l=t();if(Qs){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=fi();if(s!==void 0){var f=s(n);if(Qs){we(!0);try{s(n)}finally{we(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=QS.bind(null,pt,t),[l.memoizedState,t]},useRef:function(t){var n=fi();return t={current:t},n.memoizedState=t},useState:function(t){t=yf(t);var n=t.queue,s=g0.bind(null,pt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Tf,useDeferredValue:function(t,n){var s=fi();return Af(s,t,n)},useTransition:function(){var t=yf(!1);return t=f0.bind(null,pt,t.queue,!0,!1),fi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=pt,f=fi();if(Ct){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(At&127)!==0||Hm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,n0(Vm.bind(null,l,p,t),[t]),l.flags|=2048,Pr(9,{destroy:void 0},Gm.bind(null,l,p,s,n),null),s},useId:function(){var t=fi(),n=en.identifierPrefix;if(Ct){var s=ga,l=ma;s=(l&~(1<<32-He(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=tc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=XS++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Cf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t){var n=fi();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=wf.bind(null,pt,!0,s),s.dispatch=n,[t,n]},useMemoCache:xf,useCacheRefresh:function(){return fi().memoizedState=KS.bind(null,pt)},useEffectEvent:function(t){var n=fi(),s={impl:t};return n.memoizedState=s,function(){if((Vt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Df={readContext:Zn,use:ic,useCallback:l0,useContext:Zn,useEffect:bf,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:s0,useMemo:c0,useReducer:ac,useRef:t0,useState:function(){return ac(Ia)},useDebugValue:Tf,useDeferredValue:function(t,n){var s=An();return u0(s,Kt.memoizedState,t,n)},useTransition:function(){var t=ac(Ia)[0],n=An().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:zm,useId:p0,useHostTransitionStatus:Cf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var s=An();return Wm(s,Kt,t,n)},useMemoCache:xf,useCacheRefresh:m0};Df.useEffectEvent=i0;var S0={readContext:Zn,use:ic,useCallback:l0,useContext:Zn,useEffect:bf,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:s0,useMemo:c0,useReducer:Mf,useRef:t0,useState:function(){return Mf(Ia)},useDebugValue:Tf,useDeferredValue:function(t,n){var s=An();return Kt===null?Af(s,t,n):u0(s,Kt.memoizedState,t,n)},useTransition:function(){var t=Mf(Ia)[0],n=An().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:zm,useId:p0,useHostTransitionStatus:Cf,useFormState:e0,useActionState:e0,useOptimistic:function(t,n){var s=An();return Kt!==null?Wm(s,Kt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:xf,useCacheRefresh:m0};S0.useEffectEvent=i0;function Lf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Nf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Oi(),f=fs(l);f.payload=n,s!=null&&(f.callback=s),n=ds(t,f,l),n!==null&&(Mi(n,t,l),zo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Oi(),f=fs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ds(t,f,l),n!==null&&(Mi(n,t,l),zo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Oi(),l=fs(s);l.tag=2,n!=null&&(l.callback=n),n=ds(t,l,s),n!==null&&(Mi(n,t,s),zo(n,t,s))}};function M0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Lo(s,l)||!Lo(f,p):!0}function y0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Nf.enqueueReplaceState(n,n.state,null)}function Js(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function E0(t){zl(t)}function b0(t){console.error(t)}function T0(t){zl(t)}function lc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function A0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Uf(t,n,s){return s=fs(s),s.tag=3,s.payload={element:null},s.callback=function(){lc(t,n)},s}function R0(t){return t=fs(t),t.tag=3,t}function C0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){A0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){A0(n,s,l),typeof f!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function JS(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Rr(n,s,f,!0),s=Di.current,s!==null){switch(s.tag){case 31:case 13:return Xi===null?Sc():s.alternate===null&&xn===0&&(xn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Zl?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),ad(t,l,f)),!1;case 22:return s.flags|=65536,l===Zl?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),ad(t,l,f)),!1}throw Error(r(435,s.tag))}return ad(t,l,f),Sc(),!1}if(Ct)return n=Di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==Qu&&(t=Error(r(422),{cause:l}),Oo(Hi(t,s)))):(l!==Qu&&(n=Error(r(423),{cause:l}),Oo(Hi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Hi(l,s),f=Uf(t.stateNode,l,f),cf(t,f),xn!==4&&(xn=2)),!1;var p=Error(r(520),{cause:l});if(p=Hi(p,s),$o===null?$o=[p]:$o.push(p),xn!==4&&(xn=2),n===null)return!0;l=Hi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Uf(s.stateNode,l,t),cf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vs===null||!vs.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=R0(f),C0(f,t,s,l),cf(s,f),!1}s=s.return}while(s!==null);return!1}var Of=Error(r(461)),Dn=!1;function Kn(t,n,s,l){n.child=t===null?Nm(n,null,s,l):Ks(n,t.child,s,l)}function w0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return qs(n),l=mf(t,n,s,S,p,f),C=gf(),t!==null&&!Dn?(_f(t,n,f),Fa(t,n,f)):(Ct&&C&&Zu(n),n.flags|=1,Kn(t,n,l,f),n.child)}function D0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!qu(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,L0(t,n,p,l,f)):(t=kl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Vf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Lo,s(S,l)&&t.ref===n.ref)return Fa(t,n,f)}return n.flags|=1,t=La(p,l),t.ref=n.ref,t.return=n,n.child=t}function L0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Lo(p,l)&&t.ref===n.ref)if(Dn=!1,n.pendingProps=l=p,Vf(t,f))(t.flags&131072)!==0&&(Dn=!0);else return n.lanes=t.lanes,Fa(t,n,f)}return Pf(t,n,s,l,f)}function N0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return U0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,p!==null?p.cachePool:null),p!==null?Pm(n,p):ff(),Im(n);else return l=n.lanes=536870912,U0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Yl(n,p.cachePool),Pm(n,p),ps(),n.memoizedState=null):(t!==null&&Yl(n,null),ff(),ps());return Kn(t,n,f,s),n.child}function qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function U0(t,n,s,l,f){var p=sf();return p=p===null?null:{parent:Cn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&Yl(n,null),ff(),Im(n),t!==null&&Rr(t,n,l,!0),n.childLanes=f,null}function cc(t,n){return n=fc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function O0(t,n,s){return Ks(n,t.child,null,s),t=cc(n,n.pendingProps),t.flags|=2,Li(n),n.memoizedState=null,t}function $S(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(l.mode==="hidden")return t=cc(n,l),n.lanes=536870912,qo(null,t);if(hf(n),(t=un)?(t=qg(t,ki),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:rs!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=_m(t),s.return=n,n.child=s,jn=n,un=null)):t=null,t===null)throw ls(n);return n.lanes=536870912,null}return cc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(hf(n),f)if(n.flags&256)n.flags&=-257,n=O0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Dn||Rr(t,n,s,!1),f=(s&t.childLanes)!==0,Dn||f){if(l=en,l!==null&&(S=ti(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,Vs(t,S),Mi(l,t,S),Of;Sc(),n=O0(t,n,s)}else t=p.treeContext,un=Wi(S.nextSibling),jn=n,Ct=!0,os=null,ki=!1,t!==null&&Sm(n,t),n=cc(n,l),n.flags|=4096;return n}return t=La(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function uc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Pf(t,n,s,l,f){return qs(n),s=mf(t,n,s,l,void 0,f),l=gf(),t!==null&&!Dn?(_f(t,n,f),Fa(t,n,f)):(Ct&&l&&Zu(n),n.flags|=1,Kn(t,n,s,f),n.child)}function P0(t,n,s,l,f,p){return qs(n),n.updateQueue=null,s=Bm(n,l,s,f),Fm(t),l=gf(),t!==null&&!Dn?(_f(t,n,p),Fa(t,n,p)):(Ct&&l&&Zu(n),n.flags|=1,Kn(t,n,s,p),n.child)}function I0(t,n,s,l,f){if(qs(n),n.stateNode===null){var p=Er,S=s.contextType;typeof S=="object"&&S!==null&&(p=Zn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Nf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},of(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?Zn(S):Er,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Lf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Nf.enqueueReplaceState(p,p.state,null),Go(n,l,p,f),Ho(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,G=Js(s,C);p.props=G;var re=p.context,ge=s.contextType;S=Er,typeof ge=="object"&&ge!==null&&(S=Zn(ge));var Me=s.getDerivedStateFromProps;ge=typeof Me=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ge||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||re!==S)&&y0(n,p,l,S),us=!1;var le=n.memoizedState;p.state=le,Go(n,l,p,f),Ho(),re=n.memoizedState,C||le!==re||us?(typeof Me=="function"&&(Lf(n,s,Me,l),re=n.memoizedState),(G=us||M0(n,s,G,l,le,re,S))?(ge||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=S,l=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,lf(t,n),S=n.memoizedProps,ge=Js(s,S),p.props=ge,Me=n.pendingProps,le=p.context,re=s.contextType,G=Er,typeof re=="object"&&re!==null&&(G=Zn(re)),C=s.getDerivedStateFromProps,(re=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Me||le!==G)&&y0(n,p,l,G),us=!1,le=n.memoizedState,p.state=le,Go(n,l,p,f),Ho();var fe=n.memoizedState;S!==Me||le!==fe||us||t!==null&&t.dependencies!==null&&Wl(t.dependencies)?(typeof C=="function"&&(Lf(n,s,C,l),fe=n.memoizedState),(ge=us||M0(n,s,ge,l,le,fe,G)||t!==null&&t.dependencies!==null&&Wl(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,fe,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,fe,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=fe),p.props=l,p.state=fe,p.context=G,l=ge):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,uc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=Ks(n,t.child,null,f),n.child=Ks(n,null,s,f)):Kn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Fa(t,n,f),t}function F0(t,n,s,l){return Xs(),n.flags|=256,Kn(t,n,s,l),n.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(t){return{baseLanes:t,cachePool:Am()}}function Bf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ui),t}function B0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(Tn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(f?hs(n):ps(),(t=un)?(t=qg(t,ki),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:rs!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=_m(t),s.return=n,n.child=s,jn=n,un=null)):t=null,t===null)throw ls(n);return Sd(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(ps(),f=n.mode,C=fc({mode:"hidden",children:C},f),l=ks(l,f,s,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=Ff(s),l.childLanes=Bf(t,S,s),n.memoizedState=If,qo(null,l)):(hs(n),zf(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(p)n.flags&256?(hs(n),n.flags&=-257,n=Hf(t,n,s)):n.memoizedState!==null?(ps(),n.child=t.child,n.flags|=128,n=null):(ps(),C=l.fallback,f=n.mode,l=fc({mode:"visible",children:l.children},f),C=ks(C,f,s,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,Ks(n,t.child,null,s),l=n.child,l.memoizedState=Ff(s),l.childLanes=Bf(t,S,s),n.memoizedState=If,n=qo(null,l));else if(hs(n),Sd(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var re=S.dgst;S=re,l=Error(r(419)),l.stack="",l.digest=S,Oo({value:l,source:null,stack:null}),n=Hf(t,n,s)}else if(Dn||Rr(t,n,s,!1),S=(s&t.childLanes)!==0,Dn||S){if(S=en,S!==null&&(l=ti(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Vs(t,l),Mi(S,t,l),Of;xd(C)||Sc(),n=Hf(t,n,s)}else xd(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,un=Wi(C.nextSibling),jn=n,Ct=!0,os=null,ki=!1,t!==null&&Sm(n,t),n=zf(n,l.children),n.flags|=4096);return n}return f?(ps(),C=l.fallback,f=n.mode,G=t.child,re=G.sibling,l=La(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,re!==null?C=La(re,C):(C=ks(C,f,s,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,qo(null,l),l=n.child,C=t.child.memoizedState,C===null?C=Ff(s):(f=C.cachePool,f!==null?(G=Cn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Am(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Bf(t,S,s),n.memoizedState=If,qo(t.child,l)):(hs(n),s=t.child,t=s.sibling,s=La(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function zf(t,n){return n=fc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fc(t,n){return t=wi(22,t,null,n),t.lanes=0,t}function Hf(t,n,s){return Ks(n,t.child,null,s),t=zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function z0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),ef(t.return,n,s)}function Gf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function H0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=Tn.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,Se(Tn,S),Kn(t,n,l,s),l=Ct?Uo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z0(t,s,n);else if(t.tag===19)z0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&$l(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Gf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&$l(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Gf(n,!0,s,null,p,l);break;case"together":Gf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Fa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),_s|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Rr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=La(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=La(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wl(t)))}function eM(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),cs(n,Cn,t.memoizedState.cache),Xs();break;case 27:case 5:it(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:cs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(hs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?B0(t,n,s):(hs(n),t=Fa(t,n,s),t!==null?t.sibling:null);hs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Rr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return H0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(Tn,Tn.current),l)break;return null;case 22:return n.lanes=0,N0(t,n,s,n.pendingProps);case 24:cs(n,Cn,t.memoizedState.cache)}return Fa(t,n,s)}function G0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Dn=!0;else{if(!Vf(t,s)&&(n.flags&128)===0)return Dn=!1,eM(t,n,s);Dn=(t.flags&131072)!==0}else Dn=!1,Ct&&(n.flags&1048576)!==0&&xm(n,Uo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=js(n.elementType),n.type=t,typeof t=="function")qu(t)?(l=Js(t,l),n.tag=1,n=I0(null,n,t,l,s)):(n.tag=0,n=Pf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){n.tag=11,n=w0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=D0(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return Pf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=Js(l,n.pendingProps),I0(t,n,l,f,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,lf(t,n),Go(n,l,null,s);var S=n.memoizedState;if(l=S.cache,cs(n,Cn,l),l!==p.cache&&tf(n,[Cn],s,!0),Ho(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=F0(t,n,l,s);break e}else if(l!==f){f=Hi(Error(r(424)),n),Oo(f),n=F0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(un=Wi(t.firstChild),jn=n,Ct=!0,os=null,ki=!0,s=Nm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Xs(),l===f){n=Fa(t,n,s);break e}Kn(t,n,l,s)}n=n.child}return n;case 26:return uc(t,n),t===null?(s=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ct||(s=n.type,t=n.pendingProps,l=Rc(te.current).createElement(s),l[Ve]=n,l[rt]=t,Qn(l,s,t),kt(l),n.stateNode=l):n.memoizedState=Jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Ct&&(l=n.stateNode=Zg(n.type,n.pendingProps,te.current),jn=n,ki=!0,f=un,ys(n.type)?(Md=f,un=Wi(l.firstChild)):un=f),Kn(t,n,n.pendingProps.children,s),uc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((f=l=un)&&(l=DM(l,n.type,n.pendingProps,ki),l!==null?(n.stateNode=l,jn=n,un=Wi(l.firstChild),ki=!1,f=!0):f=!1),f||ls(n)),it(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,gd(f,p)?l=null:S!==null&&gd(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=mf(t,n,WS,null,null,s),ol._currentValue=f),uc(t,n),Kn(t,n,l,s),n.child;case 6:return t===null&&Ct&&((t=s=un)&&(s=LM(s,n.pendingProps,ki),s!==null?(n.stateNode=s,jn=n,un=null,t=!0):t=!1),t||ls(n)),null;case 13:return B0(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ks(n,null,l,s):Kn(t,n,l,s),n.child;case 11:return w0(t,n,n.type,n.pendingProps,s);case 7:return Kn(t,n,n.pendingProps,s),n.child;case 8:return Kn(t,n,n.pendingProps.children,s),n.child;case 12:return Kn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,cs(n,n.type,l.value),Kn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,qs(n),f=Zn(f),l=l(f),n.flags|=1,Kn(t,n,l,s),n.child;case 14:return D0(t,n,n.type,n.pendingProps,s);case 15:return L0(t,n,n.type,n.pendingProps,s);case 19:return H0(t,n,s);case 31:return $S(t,n,s);case 22:return N0(t,n,s,n.pendingProps);case 24:return qs(n),l=Zn(Cn),t===null?(f=sf(),f===null&&(f=en,p=nf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},of(n),cs(n,Cn,f)):((t.lanes&s)!==0&&(lf(t,n),Go(n,null,null,s),Ho()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),cs(n,Cn,l)):(l=p.cache,cs(n,Cn,l),l!==f.cache&&tf(n,[Cn],s,!0))),Kn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ba(t){t.flags|=4}function kf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(pg())t.flags|=8192;else throw Zs=Zl,rf}else t.flags&=-16777217}function V0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i_(n))if(pg())t.flags|=8192;else throw Zs=Zl,rf}function dc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,zr|=n)}function Yo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function tM(t,n,s){var l=n.pendingProps;switch(Ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(n),null;case 1:return fn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Oa(Cn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ar(n)?Ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ju())),fn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ba(n),p!==null?(fn(n),V0(n,p)):(fn(n),kf(n,f,null,l,s))):p?p!==t.memoizedState?(Ba(n),fn(n),V0(n,p)):(fn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ba(n),fn(n),kf(n,f,t,l,s)),null;case 27:if(tt(n),s=te.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ba(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return fn(n),null}t=Te.current,Ar(n)?Mm(n):(t=Zg(f,l,s),n.stateNode=t,Ba(n))}return fn(n),null;case 5:if(tt(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ba(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return fn(n),null}if(p=Te.current,Ar(n))Mm(n);else{var S=Rc(te.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[Ve]=n,p[rt]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(Qn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ba(n)}}return fn(n),kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ba(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Ar(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=jn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Ve]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Bg(t.nodeValue,s)),t||ls(n,!0)}else t=Rc(t).createTextNode(l),t[Ve]=n,n.stateNode=t}return fn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Ar(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ve]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),t=!1}else s=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Li(n),n):(Li(n),null);if((n.flags&128)!==0)throw Error(r(558))}return fn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ar(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ve]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),f=!1}else f=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Li(n),n):(Li(n),null)}return Li(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),dc(n,n.updateQueue),fn(n),null);case 4:return Ge(),t===null&&fd(n.stateNode.containerInfo),fn(n),null;case 10:return Oa(n.type),fn(n),null;case 19:if(K(Tn),l=n.memoizedState,l===null)return fn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)Yo(l,!1);else{if(xn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=$l(t),p!==null){for(n.flags|=128,Yo(l,!1),t=p.updateQueue,n.updateQueue=t,dc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)gm(s,t),s=s.sibling;return Se(Tn,Tn.current&1|2),Ct&&Na(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Ht()>_c&&(n.flags|=128,f=!0,Yo(l,!1),n.lanes=4194304)}else{if(!f)if(t=$l(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,dc(n,t),Yo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ct)return fn(n),null}else 2*Ht()-l.renderingStartTime>_c&&s!==536870912&&(n.flags|=128,f=!0,Yo(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ht(),t.sibling=null,s=Tn.current,Se(Tn,f?s&1|2:s&1),Ct&&Na(n,l.treeForkCount),t):(fn(n),null);case 22:case 23:return Li(n),df(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(fn(n),n.subtreeFlags&6&&(n.flags|=8192)):fn(n),s=n.updateQueue,s!==null&&dc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(Ys),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oa(Cn),fn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function nM(t,n){switch(Ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oa(Cn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(Li(n),n.alternate===null)throw Error(r(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(Tn),null;case 4:return Ge(),null;case 10:return Oa(n.type),null;case 22:case 23:return Li(n),df(),t!==null&&K(Ys),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oa(Cn),null;case 25:return null;default:return null}}function k0(t,n){switch(Ku(n),n.tag){case 3:Oa(Cn),Ge();break;case 26:case 27:case 5:tt(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Li(n);break;case 13:Li(n);break;case 19:K(Tn);break;case 10:Oa(n.type);break;case 22:case 23:Li(n),df(),t!==null&&K(Ys);break;case 24:Oa(Cn)}}function jo(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){Wt(n,n.return,C)}}function ms(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=n;var G=s,re=C;try{re()}catch(ge){Wt(f,G,ge)}}}l=l.next}while(l!==p)}}catch(ge){Wt(n,n.return,ge)}}function X0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Om(n,s)}catch(l){Wt(t,t.return,l)}}}function W0(t,n,s){s.props=Js(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,n,l)}}function Zo(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,n,f)}}function _a(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,n,f)}else s.current=null}function q0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function Xf(t,n,s){try{var l=t.stateNode;bM(l,t.type,s,n),l[rt]=n}catch(f){Wt(t,t.return,f)}}function Y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ys(t.type)||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ys(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ea));else if(l!==4&&(l===27&&ys(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(qf(t,n,s),t=t.sibling;t!==null;)qf(t,n,s),t=t.sibling}function hc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&ys(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(hc(t,n,s),t=t.sibling;t!==null;)hc(t,n,s),t=t.sibling}function j0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Qn(n,l,s),n[Ve]=t,n[rt]=s}catch(p){Wt(t,t.return,p)}}var za=!1,Ln=!1,Yf=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,kn=null;function iM(t,n){if(t=t.containerInfo,pd=Oc,t=om(t),zu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,C=-1,G=-1,re=0,ge=0,Me=t,le=null;t:for(;;){for(var fe;Me!==s||f!==0&&Me.nodeType!==3||(C=S+f),Me!==p||l!==0&&Me.nodeType!==3||(G=S+l),Me.nodeType===3&&(S+=Me.nodeValue.length),(fe=Me.firstChild)!==null;)le=Me,Me=fe;for(;;){if(Me===t)break t;if(le===s&&++re===f&&(C=S),le===p&&++ge===l&&(G=S),(fe=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=fe}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(md={focusedElem:t,selectionRange:s},Oc=!1,kn=n;kn!==null;)if(n=kn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,kn=t;else for(;kn!==null;){switch(n=kn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ze=Js(s.type,f);t=l.getSnapshotBeforeUpdate(Ze,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){Wt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)vd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,kn=t;break}kn=n.return}}function K0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(t,s),l&4&&jo(5,s);break;case 1:if(Ga(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Wt(s,s.return,S)}else{var f=Js(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Wt(s,s.return,S)}}l&64&&X0(s),l&512&&Zo(s,s.return);break;case 3:if(Ga(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Om(t,n)}catch(S){Wt(s,s.return,S)}}break;case 27:n===null&&l&4&&j0(s);case 26:case 5:Ga(t,s),n===null&&l&4&&q0(s),l&512&&Zo(s,s.return);break;case 12:Ga(t,s);break;case 31:Ga(t,s),l&4&&$0(t,s);break;case 13:Ga(t,s),l&4&&eg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=dM.bind(null,s),NM(t,s))));break;case 22:if(l=s.memoizedState!==null||za,!l){n=n!==null&&n.memoizedState!==null||Ln,f=za;var p=Ln;za=l,(Ln=n)&&!p?Va(t,s,(s.subtreeFlags&8772)!==0):Ga(t,s),za=f,Ln=p}break;case 30:break;default:Ga(t,s)}}function Q0(t){var n=t.alternate;n!==null&&(t.alternate=null,Q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&jt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mn=null,_i=!1;function Ha(t,n,s){for(s=s.child;s!==null;)J0(t,n,s),s=s.sibling}function J0(t,n,s){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:Ln||_a(s,n),Ha(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ln||_a(s,n);var l=mn,f=_i;ys(s.type)&&(mn=s.stateNode,_i=!1),Ha(t,n,s),al(s.stateNode),mn=l,_i=f;break;case 5:Ln||_a(s,n);case 6:if(l=mn,f=_i,mn=null,Ha(t,n,s),mn=l,_i=f,mn!==null)if(_i)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(s.stateNode)}catch(p){Wt(s,n,p)}else try{mn.removeChild(s.stateNode)}catch(p){Wt(s,n,p)}break;case 18:mn!==null&&(_i?(t=mn,Xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Yr(t)):Xg(mn,s.stateNode));break;case 4:l=mn,f=_i,mn=s.stateNode.containerInfo,_i=!0,Ha(t,n,s),mn=l,_i=f;break;case 0:case 11:case 14:case 15:ms(2,s,n),Ln||ms(4,s,n),Ha(t,n,s);break;case 1:Ln||(_a(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&W0(s,n,l)),Ha(t,n,s);break;case 21:Ha(t,n,s);break;case 22:Ln=(l=Ln)||s.memoizedState!==null,Ha(t,n,s),Ln=l;break;default:Ha(t,n,s)}}function $0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Yr(t)}catch(s){Wt(n,n.return,s)}}}function eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yr(t)}catch(s){Wt(n,n.return,s)}}function aM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Z0),n;default:throw Error(r(435,t.tag))}}function pc(t,n){var s=aM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=hM.bind(null,t,l);l.then(f,f)}})}function vi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(ys(C.type)){mn=C.stateNode,_i=!1;break e}break;case 5:mn=C.stateNode,_i=!1;break e;case 3:case 4:mn=C.stateNode.containerInfo,_i=!0;break e}C=C.return}if(mn===null)throw Error(r(160));J0(p,S,f),mn=null,_i=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,t),n=n.sibling}var aa=null;function tg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:vi(n,t),xi(t),l&4&&(ms(3,t,t.return),jo(3,t),ms(5,t,t.return));break;case 1:vi(n,t),xi(t),l&512&&(Ln||s===null||_a(s,s.return)),l&64&&za&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=aa;if(vi(n,t),xi(t),l&512&&(Ln||s===null||_a(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[bn]||p[Ve]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Qn(p,l,s),p[Ve]=t,kt(p),l=p;break e;case"link":var S=t_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(p=S[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break t}}p=f.createElement(l),Qn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=t_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(p=S[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break t}}p=f.createElement(l),Qn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[Ve]=t,kt(p),l=p}t.stateNode=l}else n_(f,t.type,t.stateNode);else t.stateNode=e_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?n_(f,t.type,t.stateNode):e_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,s.memoizedProps)}break;case 27:vi(n,t),xi(t),l&512&&(Ln||s===null||_a(s,s.return)),s!==null&&l&4&&Xf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(vi(n,t),xi(t),l&512&&(Ln||s===null||_a(s,s.return)),t.flags&32){f=t.stateNode;try{Hn(f,"")}catch(Ze){Wt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Xf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Yf=!0);break;case 6:if(vi(n,t),xi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ze){Wt(t,t.return,Ze)}}break;case 3:if(Dc=null,f=aa,aa=Cc(n.containerInfo),vi(n,t),aa=f,xi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Yr(n.containerInfo)}catch(Ze){Wt(t,t.return,Ze)}Yf&&(Yf=!1,ng(t));break;case 4:l=aa,aa=Cc(t.stateNode.containerInfo),vi(n,t),xi(t),aa=l;break;case 12:vi(n,t),xi(t);break;case 31:vi(n,t),xi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pc(t,l)));break;case 13:vi(n,t),xi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gc=Ht()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,re=za,ge=Ln;if(za=re||f,Ln=ge||G,vi(n,t),Ln=ge,za=re,xi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||za||Ln||$s(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(p=G.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Me=G.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){Wt(G,G.return,Ze)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Ze){Wt(G,G.return,Ze)}}}else if(n.tag===18){if(s===null){G=n;try{var fe=G.stateNode;f?Wg(fe,!0):Wg(G.stateNode,!1)}catch(Ze){Wt(G,G.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,pc(t,s))));break;case 19:vi(n,t),xi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,pc(t,l)));break;case 30:break;case 21:break;default:vi(n,t),xi(t)}}function xi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(Y0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=Wf(t);hc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(Hn(S,""),s.flags&=-33);var C=Wf(t);hc(t,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,re=Wf(t);qf(t,re,G);break;default:throw Error(r(161))}}catch(ge){Wt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)K0(t,n.alternate,n),n=n.sibling}function $s(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ms(4,n,n.return),$s(n);break;case 1:_a(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&W0(n,n.return,s),$s(n);break;case 27:al(n.stateNode);case 26:case 5:_a(n,n.return),$s(n);break;case 22:n.memoizedState===null&&$s(n);break;case 30:$s(n);break;default:$s(n)}t=t.sibling}}function Va(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Va(f,p,s),jo(4,p);break;case 1:if(Va(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Wt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Um(G[f],C)}catch(re){Wt(l,l.return,re)}}s&&S&64&&X0(p),Zo(p,p.return);break;case 27:j0(p);case 26:case 5:Va(f,p,s),s&&l===null&&S&4&&q0(p),Zo(p,p.return);break;case 12:Va(f,p,s);break;case 31:Va(f,p,s),s&&S&4&&$0(f,p);break;case 13:Va(f,p,s),s&&S&4&&eg(f,p);break;case 22:p.memoizedState===null&&Va(f,p,s),Zo(p,p.return);break;case 30:break;default:Va(f,p,s)}n=n.sibling}}function jf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Po(s))}function Zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function sa(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,s,l),n=n.sibling}function ig(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:sa(t,n,s,l),f&2048&&jo(9,n);break;case 1:sa(t,n,s,l);break;case 3:sa(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t)));break;case 12:if(f&2048){sa(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,C=p.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Wt(n,n.return,G)}}else sa(t,n,s,l);break;case 31:sa(t,n,s,l);break;case 13:sa(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?sa(t,n,s,l):Ko(t,n):p._visibility&2?sa(t,n,s,l):(p._visibility|=2,Ir(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&jf(S,n);break;case 24:sa(t,n,s,l),f&2048&&Zf(n.alternate,n);break;default:sa(t,n,s,l)}}function Ir(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,C=s,G=l,re=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(p,S,C,G,f),jo(8,S);break;case 23:break;case 22:var ge=S.stateNode;S.memoizedState!==null?ge._visibility&2?Ir(p,S,C,G,f):Ko(p,S):(ge._visibility|=2,Ir(p,S,C,G,f)),f&&re&2048&&jf(S.alternate,S);break;case 24:Ir(p,S,C,G,f),f&&re&2048&&Zf(S.alternate,S);break;default:Ir(p,S,C,G,f)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Ko(s,l),f&2048&&jf(l.alternate,l);break;case 24:Ko(s,l),f&2048&&Zf(l.alternate,l);break;default:Ko(s,l)}n=n.sibling}}var Qo=8192;function Fr(t,n,s){if(t.subtreeFlags&Qo)for(t=t.child;t!==null;)ag(t,n,s),t=t.sibling}function ag(t,n,s){switch(t.tag){case 26:Fr(t,n,s),t.flags&Qo&&t.memoizedState!==null&&XM(s,aa,t.memoizedState,t.memoizedProps);break;case 5:Fr(t,n,s);break;case 3:case 4:var l=aa;aa=Cc(t.stateNode.containerInfo),Fr(t,n,s),aa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Qo,Qo=16777216,Fr(t,n,s),Qo=l):Fr(t,n,s));break;default:Fr(t,n,s)}}function sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kn=l,og(l,t)}sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rg(t),t=t.sibling}function rg(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&ms(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,mc(t)):Jo(t);break;default:Jo(t)}}function mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];kn=l,og(l,t)}sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ms(8,n,n.return),mc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,mc(n));break;default:mc(n)}t=t.sibling}}function og(t,n){for(;kn!==null;){var s=kn;switch(s.tag){case 0:case 11:case 15:ms(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,kn=l;else e:for(s=t;kn!==null;){l=kn;var f=l.sibling,p=l.return;if(Q0(l),l===s){kn=null;break e}if(f!==null){f.return=p,kn=f;break e}kn=p}}}var sM={getCacheForType:function(t){var n=Zn(Cn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Zn(Cn).controller.signal}},rM=typeof WeakMap=="function"?WeakMap:Map,Vt=0,en=null,Et=null,At=0,Xt=0,Ni=null,gs=!1,Br=!1,Kf=!1,ka=0,xn=0,_s=0,er=0,Qf=0,Ui=0,zr=0,$o=null,Si=null,Jf=!1,gc=0,lg=0,_c=1/0,vc=null,vs=null,Fn=0,xs=null,Hr=null,Xa=0,$f=0,ed=null,cg=null,el=0,td=null;function Oi(){return(Vt&2)!==0&&At!==0?At&-At:F.T!==null?od():da()}function ug(){if(Ui===0)if((At&536870912)===0||Ct){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Ui=t}else Ui=536870912;return t=Di.current,t!==null&&(t.flags|=32),Ui}function Mi(t,n,s){(t===en&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Gr(t,0),Ss(t,At,Ui,!1)),We(t,s),((Vt&2)===0||t!==en)&&(t===en&&((Vt&2)===0&&(er|=s),xn===4&&Ss(t,At,Ui,!1)),va(t))}function fg(t,n,s){if((Vt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),f=l?cM(t,n):id(t,n,!0),p=l;do{if(f===0){Br&&!l&&Ss(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!oM(s)){f=id(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;f=$o;var G=C.current.memoizedState.isDehydrated;if(G&&(Gr(C,S).flags|=256),S=id(C,S,!1),S!==2){if(Kf&&!G){C.errorRecoveryDisabledLanes|=p,er|=p,f=4;break e}p=Si,Si=f,p!==null&&(Si===null?Si=p:Si.push.apply(Si,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Gr(t,0),Ss(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ss(l,n,Ui,!gs);break e;case 2:Si=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=gc+300-Ht(),10<f)){if(Ss(l,n,Ui,!gs),_e(l,0,!0)!==0)break e;Xa=n,l.timeoutHandle=Vg(dg.bind(null,l,s,Si,vc,Jf,n,Ui,er,zr,gs,p,"Throttled",-0,0),f);break e}dg(l,s,Si,vc,Jf,n,Ui,er,zr,gs,p,null,-0,0)}}break}while(!0);va(t)}function dg(t,n,s,l,f,p,S,C,G,re,ge,Me,le,fe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},ag(n,p,Me);var Ze=(p&62914560)===p?gc-Ht():(p&4194048)===p?lg-Ht():0;if(Ze=WM(Me,Ze),Ze!==null){Xa=p,t.cancelPendingCommit=Ze(Sg.bind(null,t,n,p,s,l,f,S,C,G,ge,Me,null,le,fe)),Ss(t,p,S,!re);return}}Sg(t,n,p,s,l,f,S,C,G)}function oM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!Ci(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ss(t,n,s,l){n&=~Qf,n&=~er,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-He(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&Pt(t,s,n)}function xc(){return(Vt&6)===0?(tl(0),!1):!0}function nd(){if(Et!==null){if(Xt===0)var t=Et.return;else t=Et,Ua=Ws=null,vf(t),Lr=null,Fo=0,t=Et;for(;t!==null;)k0(t.alternate,t),t=t.return;Et=null}}function Gr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,RM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Xa=0,nd(),en=t,Et=s=La(t.current,null),At=n,Xt=0,Ni=null,gs=!1,Br=Ue(t,n),Kf=!1,zr=Ui=Qf=er=_s=xn=0,Si=$o=null,Jf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-He(l),p=1<<f;n|=t[f],l&=~p}return ka=n,Hl(),s}function hg(t,n){pt=null,F.H=Wo,n===Dr||n===jl?(n=wm(),Xt=3):n===rf?(n=wm(),Xt=4):Xt=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ni=n,Et===null&&(xn=1,lc(t,Hi(n,t.current)))}function pg(){var t=Di.current;return t===null?!0:(At&4194048)===At?Xi===null:(At&62914560)===At||(At&536870912)!==0?t===Xi:!1}function mg(){var t=F.H;return F.H=Wo,t===null?Wo:t}function gg(){var t=F.A;return F.A=sM,t}function Sc(){xn=4,gs||(At&4194048)!==At&&Di.current!==null||(Br=!0),(_s&134217727)===0&&(er&134217727)===0||en===null||Ss(en,At,Ui,!1)}function id(t,n,s){var l=Vt;Vt|=2;var f=mg(),p=gg();(en!==t||At!==n)&&(vc=null,Gr(t,n)),n=!1;var S=xn;e:do try{if(Xt!==0&&Et!==null){var C=Et,G=Ni;switch(Xt){case 8:nd(),S=6;break e;case 3:case 2:case 9:case 6:Di.current===null&&(n=!0);var re=Xt;if(Xt=0,Ni=null,Vr(t,C,G,re),s&&Br){S=0;break e}break;default:re=Xt,Xt=0,Ni=null,Vr(t,C,G,re)}}lM(),S=xn;break}catch(ge){hg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,Ua=Ws=null,Vt=l,F.H=f,F.A=p,Et===null&&(en=null,At=0,Hl()),S}function lM(){for(;Et!==null;)_g(Et)}function cM(t,n){var s=Vt;Vt|=2;var l=mg(),f=gg();en!==t||At!==n?(vc=null,_c=Ht()+500,Gr(t,n)):Br=Ue(t,n);e:do try{if(Xt!==0&&Et!==null){n=Et;var p=Ni;t:switch(Xt){case 1:Xt=0,Ni=null,Vr(t,n,p,1);break;case 2:case 9:if(Rm(p)){Xt=0,Ni=null,vg(n);break}n=function(){Xt!==2&&Xt!==9||en!==t||(Xt=7),va(t)},p.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Rm(p)?(Xt=0,Ni=null,vg(n)):(Xt=0,Ni=null,Vr(t,n,p,7));break;case 5:var S=null;switch(Et.tag){case 26:S=Et.memoizedState;case 5:case 27:var C=Et;if(S?i_(S):C.stateNode.complete){Xt=0,Ni=null;var G=C.sibling;if(G!==null)Et=G;else{var re=C.return;re!==null?(Et=re,Mc(re)):Et=null}break t}}Xt=0,Ni=null,Vr(t,n,p,5);break;case 6:Xt=0,Ni=null,Vr(t,n,p,6);break;case 8:nd(),xn=6;break e;default:throw Error(r(462))}}uM();break}catch(ge){hg(t,ge)}while(!0);return Ua=Ws=null,F.H=l,F.A=f,Vt=s,Et!==null?0:(en=null,At=0,Hl(),xn)}function uM(){for(;Et!==null&&!an();)_g(Et)}function _g(t){var n=G0(t.alternate,t,ka);t.memoizedProps=t.pendingProps,n===null?Mc(t):Et=n}function vg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=P0(s,n,n.pendingProps,n.type,void 0,At);break;case 11:n=P0(s,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:vf(n);default:k0(s,n),n=Et=gm(n,ka),n=G0(s,n,ka)}t.memoizedProps=t.pendingProps,n===null?Mc(t):Et=n}function Vr(t,n,s,l){Ua=Ws=null,vf(n),Lr=null,Fo=0;var f=n.return;try{if(JS(t,f,n,s,At)){xn=1,lc(t,Hi(s,t.current)),Et=null;return}}catch(p){if(f!==null)throw Et=f,p;xn=1,lc(t,Hi(s,t.current)),Et=null;return}n.flags&32768?(Ct||l===1?t=!0:Br||(At&536870912)!==0?t=!1:(gs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Di.current,l!==null&&l.tag===13&&(l.flags|=16384))),xg(n,t)):Mc(n)}function Mc(t){var n=t;do{if((n.flags&32768)!==0){xg(n,gs);return}t=n.return;var s=tM(n.alternate,n,ka);if(s!==null){Et=s;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);xn===0&&(xn=5)}function xg(t,n){do{var s=nM(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);xn=6,Et=null}function Sg(t,n,s,l,f,p,S,C,G){t.cancelPendingCommit=null;do yc();while(Fn!==0);if((Vt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Xu,$t(t,s,p,S,C,G),t===en&&(Et=en=null,At=0),Hr=n,xs=t,Xa=s,$f=p,ed=f,cg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pM(Q,function(){return Tg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Vt,Vt|=4;try{iM(t,n,s)}finally{Vt=S,H.p=f,F.T=l}}Fn=1,Mg(),yg(),Eg()}}function Mg(){if(Fn===1){Fn=0;var t=xs,n=Hr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Vt;Vt|=4;try{tg(n,t);var p=md,S=om(t.containerInfo),C=p.focusedElem,G=p.selectionRange;if(S!==C&&C&&C.ownerDocument&&rm(C.ownerDocument.documentElement,C)){if(G!==null&&zu(C)){var re=G.start,ge=G.end;if(ge===void 0&&(ge=re),"selectionStart"in C)C.selectionStart=re,C.selectionEnd=Math.min(ge,C.value.length);else{var Me=C.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var fe=le.getSelection(),Ze=C.textContent.length,st=Math.min(G.start,Ze),Jt=G.end===void 0?st:Math.min(G.end,Ze);!fe.extend&&st>Jt&&(S=Jt,Jt=st,st=S);var J=sm(C,st),X=sm(C,Jt);if(J&&X&&(fe.rangeCount!==1||fe.anchorNode!==J.node||fe.anchorOffset!==J.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var se=Me.createRange();se.setStart(J.node,J.offset),fe.removeAllRanges(),st>Jt?(fe.addRange(se),fe.extend(X.node,X.offset)):(se.setEnd(X.node,X.offset),fe.addRange(se))}}}}for(Me=[],fe=C;fe=fe.parentNode;)fe.nodeType===1&&Me.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Me.length;C++){var ve=Me[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Oc=!!pd,md=pd=null}finally{Vt=f,H.p=l,F.T=s}}t.current=n,Fn=2}}function yg(){if(Fn===2){Fn=0;var t=xs,n=Hr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Vt;Vt|=4;try{K0(t,n.alternate,n)}finally{Vt=f,H.p=l,F.T=s}}Fn=3}}function Eg(){if(Fn===4||Fn===3){Fn=0,Z();var t=xs,n=Hr,s=Xa,l=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Fn=5:(Fn=0,Hr=xs=null,bg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(vs=null),ss(s),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,f=H.p,H.p=2,F.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];p(C.value,{componentStack:C.stack})}}finally{F.T=n,H.p=f}}(Xa&3)!==0&&yc(),va(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===td?el++:(el=0,td=t):el=0,tl(0)}}function bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function yc(){return Mg(),yg(),Eg(),Tg()}function Tg(){if(Fn!==5)return!1;var t=xs,n=$f;$f=0;var s=ss(Xa),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=ed,ed=null;var p=xs,S=Xa;if(Fn=0,Hr=xs=null,Xa=0,(Vt&6)!==0)throw Error(r(331));var C=Vt;if(Vt|=4,rg(p.current),ig(p,p.current,S,s),Vt=C,tl(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(pe,p)}catch{}return!0}finally{H.p=f,F.T=l,bg(t,n)}}function Ag(t,n,s){n=Hi(s,n),n=Uf(t.stateNode,n,2),t=ds(t,n,2),t!==null&&(We(t,2),va(t))}function Wt(t,n,s){if(t.tag===3)Ag(t,t,s);else for(;n!==null;){if(n.tag===3){Ag(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vs===null||!vs.has(l))){t=Hi(s,t),s=R0(2),l=ds(n,s,2),l!==null&&(C0(s,l,n,t),We(l,2),va(l));break}}n=n.return}}function ad(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new rM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Kf=!0,f.add(s),t=fM.bind(null,t,n,s),n.then(t,t))}function fM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(At&s)===s&&(xn===4||xn===3&&(At&62914560)===At&&300>Ht()-gc?(Vt&2)===0&&Gr(t,0):Qf|=s,zr===At&&(zr=0)),va(t)}function Rg(t,n){n===0&&(n=be()),t=Vs(t,n),t!==null&&(We(t,n),va(t))}function dM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Rg(t,s)}function hM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Rg(t,s)}function pM(t,n){return pn(t,n)}var Ec=null,kr=null,sd=!1,bc=!1,rd=!1,Ms=0;function va(t){t!==kr&&t.next===null&&(kr===null?Ec=kr=t:kr=kr.next=t),bc=!0,sd||(sd=!0,gM())}function tl(t,n){if(!rd&&bc){rd=!0;do for(var s=!1,l=Ec;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-He(42|t)+1)-1,p&=f&~(S&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Lg(l,p))}else p=At,p=_e(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ue(l,p)||(s=!0,Lg(l,p));l=l.next}while(s);rd=!1}}function mM(){Cg()}function Cg(){bc=sd=!1;var t=0;Ms!==0&&AM()&&(t=Ms);for(var n=Ht(),s=null,l=Ec;l!==null;){var f=l.next,p=wg(l,n);p===0?(l.next=null,s===null?Ec=f:s.next=f,f===null&&(kr=s)):(s=l,(t!==0||(p&3)!==0)&&(bc=!0)),l=f}Fn!==0&&Fn!==5||tl(t),Ms!==0&&(Ms=0)}function wg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-He(p),C=1<<S,G=f[S];G===-1?((C&s)===0||(C&l)!==0)&&(f[S]=Fe(C,n)):G<=n&&(t.expiredLanes|=C),p&=~C}if(n=en,s=At,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ut(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Ut(l),ss(s)){case 2:case 8:s=b;break;case 32:s=Q;break;case 268435456:s=he;break;default:s=Q}return l=Dg.bind(null,t),s=pn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Ut(l),t.callbackPriority=2,t.callbackNode=null,2}function Dg(t,n){if(Fn!==0&&Fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(yc()&&t.callbackNode!==s)return null;var l=At;return l=_e(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(fg(t,l,n),wg(t,Ht()),t.callbackNode!=null&&t.callbackNode===s?Dg.bind(null,t):null)}function Lg(t,n){if(yc())return null;fg(t,n,!0)}function gM(){CM(function(){(Vt&6)!==0?pn(U,mM):Cg()})}function od(){if(Ms===0){var t=Cr;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),Ms=t}return Ms}function Ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Da(""+t)}function Ug(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function _M(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Ng((f[rt]||null).action),S=l.submitter;S&&(n=(n=S[rt]||null)?Ng(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var C=new Il("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ms!==0){var G=S?Ug(f,S):new FormData(f);Rf(s,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=S?Ug(f,S):new FormData(f),Rf(s,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var ld=0;ld<ku.length;ld++){var cd=ku[ld],vM=cd.toLowerCase(),xM=cd[0].toUpperCase()+cd.slice(1);ia(vM,"on"+xM)}ia(um,"onAnimationEnd"),ia(fm,"onAnimationIteration"),ia(dm,"onAnimationStart"),ia("dblclick","onDoubleClick"),ia("focusin","onFocus"),ia("focusout","onBlur"),ia(PS,"onTransitionRun"),ia(IS,"onTransitionStart"),ia(FS,"onTransitionCancel"),ia(hm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function Og(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,re=C.currentTarget;if(C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=re;try{p(f)}catch(ge){zl(ge)}f.currentTarget=null,p=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,re=C.currentTarget,C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=re;try{p(f)}catch(ge){zl(ge)}f.currentTarget=null,p=G}}}}function bt(t,n){var s=n[cn];s===void 0&&(s=n[cn]=new Set);var l=t+"__bubble";s.has(l)||(Pg(n,t,2,!1),s.add(l))}function ud(t,n,s){var l=0;n&&(l|=4),Pg(s,t,l,n)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function fd(t){if(!t[Tc]){t[Tc]=!0,ha.forEach(function(s){s!=="selectionchange"&&(SM.has(s)||ud(s,!1,t),ud(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Tc]||(n[Tc]=!0,ud("selectionchange",!1,n))}}function Pg(t,n,s,l){switch(u_(n)){case 2:var f=jM;break;case 8:f=ZM;break;default:f=Ad}s=f.bind(null,n,s,t),f=void 0,!pa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function dd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=qn(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=p=S;continue e}C=C.parentNode}}l=l.return}ta(function(){var re=p,ge=_r(s),Me=[];e:{var le=pm.get(t);if(le!==void 0){var fe=Il,Ze=t;switch(t){case"keypress":if(Ol(s)===0)break e;case"keydown":case"keyup":fe=hS;break;case"focusin":Ze="focus",fe=Ou;break;case"focusout":Ze="blur",fe=Ou;break;case"beforeblur":case"afterblur":fe=Ou;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=gS;break;case um:case fm:case dm:fe=aS;break;case hm:fe=vS;break;case"scroll":case"scrollend":fe=$x;break;case"wheel":fe=SS;break;case"copy":case"cut":case"paste":fe=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Wp;break;case"toggle":case"beforetoggle":fe=yS}var st=(n&4)!==0,Jt=!st&&(t==="scroll"||t==="scrollend"),J=st?le!==null?le+"Capture":null:le;st=[];for(var X=re,se;X!==null;){var ve=X;if(se=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||se===null||J===null||(ve=Vn(X,J),ve!=null&&st.push(il(X,ve,se))),Jt)break;X=X.return}0<st.length&&(le=new fe(le,Ze,null,s,ge),Me.push({event:le,listeners:st}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&s!==gr&&(Ze=s.relatedTarget||s.fromElement)&&(qn(Ze)||Ze[yt]))break e;if((fe||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(Ze=s.relatedTarget||s.toElement,fe=re,Ze=Ze?qn(Ze):null,Ze!==null&&(Jt=c(Ze),st=Ze.tag,Ze!==Jt||st!==5&&st!==27&&st!==6)&&(Ze=null)):(fe=null,Ze=re),fe!==Ze)){if(st=kp,ve="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=Wp,ve="onPointerLeave",J="onPointerEnter",X="pointer"),Jt=fe==null?le:Yn(fe),se=Ze==null?le:Yn(Ze),le=new st(ve,X+"leave",fe,s,ge),le.target=Jt,le.relatedTarget=se,ve=null,qn(ge)===re&&(st=new st(J,X+"enter",Ze,s,ge),st.target=se,st.relatedTarget=Jt,ve=st),Jt=ve,fe&&Ze)t:{for(st=MM,J=fe,X=Ze,se=0,ve=J;ve;ve=st(ve))se++;ve=0;for(var nt=X;nt;nt=st(nt))ve++;for(;0<se-ve;)J=st(J),se--;for(;0<ve-se;)X=st(X),ve--;for(;se--;){if(J===X||X!==null&&J===X.alternate){st=J;break t}J=st(J),X=st(X)}st=null}else st=null;fe!==null&&Ig(Me,le,fe,st,!1),Ze!==null&&Jt!==null&&Ig(Me,Jt,Ze,st,!0)}}e:{if(le=re?Yn(re):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var Ft=$p;else if(Qp(le))if(em)Ft=NS;else{Ft=DS;var Je=wS}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&Gt(re.elementType)&&(Ft=$p):Ft=LS;if(Ft&&(Ft=Ft(t,re))){Jp(Me,Ft,s,ge);break e}Je&&Je(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&St(le,"number",le.value)}switch(Je=re?Yn(re):window,t){case"focusin":(Qp(Je)||Je.contentEditable==="true")&&(Sr=Je,Hu=re,No=null);break;case"focusout":No=Hu=Sr=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,lm(Me,s,ge);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":lm(Me,s,ge)}var gt;if(Iu)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else xr?Zp(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(qp&&s.locale!=="ko"&&(xr||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&xr&&(gt=Gp()):(si=ge,vr="value"in si?si.value:si.textContent,xr=!0)),Je=Ac(re,Rt),0<Je.length&&(Rt=new Xp(Rt,t,null,s,ge),Me.push({event:Rt,listeners:Je}),gt?Rt.data=gt:(gt=Kp(s),gt!==null&&(Rt.data=gt)))),(gt=bS?TS(t,s):AS(t,s))&&(Rt=Ac(re,"onBeforeInput"),0<Rt.length&&(Je=new Xp("onBeforeInput","beforeinput",null,s,ge),Me.push({event:Je,listeners:Rt}),Je.data=gt)),_M(Me,t,re,s,ge)}Og(Me,n)})}function il(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Ac(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Vn(t,s),f!=null&&l.unshift(il(t,f,p)),f=Vn(t,n),f!=null&&l.push(il(t,f,p))),t.tag===3)return l;t=t.return}return[]}function MM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ig(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var C=s,G=C.alternate,re=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||re===null||(G=re,f?(re=Vn(s,p),re!=null&&S.unshift(il(s,re,G))):f||(re=Vn(s,p),re!=null&&S.push(il(s,re,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var yM=/\r\n?/g,EM=/\u0000|\uFFFD/g;function Fg(t){return(typeof t=="string"?t:""+t).replace(yM,`
`).replace(EM,"")}function Bg(t,n){return n=Fg(n),Fg(t)===n}function Qt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Hn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Hn(t,""+l);break;case"className":Ye(t,"class",l);break;case"tabIndex":Ye(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,s,l);break;case"style":Ti(t,l,p);break;case"data":if(n!=="object"){Ye(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Da(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Qt(t,n,"name",f.name,f,null),Qt(t,n,"formEncType",f.formEncType,f,null),Qt(t,n,"formMethod",f.formMethod,f,null),Qt(t,n,"formTarget",f.formTarget,f,null)):(Qt(t,n,"encType",f.encType,f,null),Qt(t,n,"method",f.method,f,null),Qt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Da(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ea);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Da(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Pe(t,"popover",l);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ai.get(s)||s,Pe(t,s,l))}}function hd(t,n,s,l,f,p){switch(s){case"style":Ti(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Hn(t,l):(typeof l=="number"||typeof l=="bigint")&&Hn(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[rt]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Pe(t,s,l)}}}function Qn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(t,n,p,S,s,null)}}f&&Qt(t,n,"srcSet",s.srcSet,s,null),l&&Qt(t,n,"src",s.src,s,null);return;case"input":bt("invalid",t);var C=p=S=f=null,G=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var ge=s[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":S=ge;break;case"checked":G=ge;break;case"defaultChecked":re=ge;break;case"value":p=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:Qt(t,n,l,ge,s,null)}}Pn(t,p,C,G,re,S,f,!1);return;case"select":bt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:Qt(t,n,f,C,s,null)}n=p,s=S,t.multiple=!!l,n!=null?_n(t,!!l,n,!1):s!=null&&_n(t,!!l,s,!0);return;case"textarea":bt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Qt(t,n,S,C,s,null)}ui(t,l,f,p);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(t,n,G,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<nl.length;l++)bt(nl[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(t,n,re,l,s,null)}return;default:if(Gt(n)){for(ge in s)s.hasOwnProperty(ge)&&(l=s[ge],l!==void 0&&hd(t,n,ge,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Qt(t,n,C,l,s,null))}function bM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,C=null,G=null,re=null,ge=null;for(fe in s){var Me=s[fe];if(s.hasOwnProperty(fe)&&Me!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=Me;default:l.hasOwnProperty(fe)||Qt(t,n,fe,null,l,Me)}}for(var le in l){var fe=l[le];if(Me=s[le],l.hasOwnProperty(le)&&(fe!=null||Me!=null))switch(le){case"type":p=fe;break;case"name":f=fe;break;case"checked":re=fe;break;case"defaultChecked":ge=fe;break;case"value":S=fe;break;case"defaultValue":C=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Me&&Qt(t,n,le,fe,l,Me)}}Be(t,S,C,G,re,ge,p,f);return;case"select":fe=S=C=le=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":fe=G;default:l.hasOwnProperty(p)||Qt(t,n,p,null,l,G)}for(f in l)if(p=l[f],G=s[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":le=p;break;case"defaultValue":C=p;break;case"multiple":S=p;default:p!==G&&Qt(t,n,f,p,l,G)}n=C,s=S,l=fe,le!=null?_n(t,!!s,le,!1):!!l!=!!s&&(n!=null?_n(t,!!s,n,!0):_n(t,!!s,s?[]:"",!1));return;case"textarea":fe=le=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Qt(t,n,C,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":fe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Qt(t,n,S,f,l,p)}ii(t,le,fe);return;case"option":for(var Ze in s)if(le=s[Ze],s.hasOwnProperty(Ze)&&le!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Qt(t,n,Ze,null,l,le)}for(G in l)if(le=l[G],fe=s[G],l.hasOwnProperty(G)&&le!==fe&&(le!=null||fe!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Qt(t,n,G,le,l,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)le=s[st],s.hasOwnProperty(st)&&le!=null&&!l.hasOwnProperty(st)&&Qt(t,n,st,null,l,le);for(re in l)if(le=l[re],fe=s[re],l.hasOwnProperty(re)&&le!==fe&&(le!=null||fe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Qt(t,n,re,le,l,fe)}return;default:if(Gt(n)){for(var Jt in s)le=s[Jt],s.hasOwnProperty(Jt)&&le!==void 0&&!l.hasOwnProperty(Jt)&&hd(t,n,Jt,void 0,l,le);for(ge in l)le=l[ge],fe=s[ge],!l.hasOwnProperty(ge)||le===fe||le===void 0&&fe===void 0||hd(t,n,ge,le,l,fe);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&Qt(t,n,J,null,l,le);for(Me in l)le=l[Me],fe=s[Me],!l.hasOwnProperty(Me)||le===fe||le==null&&fe==null||Qt(t,n,Me,le,l,fe)}function zg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,C=f.duration;if(p&&C&&zg(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],re=G.startTime;if(re>C)break;var ge=G.transferSize,Me=G.initiatorType;ge&&zg(Me)&&(G=G.responseEnd,S+=ge*(G<C?1:(C-re)/(G-re)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var pd=null,md=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function Hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function gd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _d=null;function AM(){var t=window.event;return t&&t.type==="popstate"?t===_d?!1:(_d=t,!0):(_d=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,RM=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(wM)}:Vg;function wM(t){setTimeout(function(){throw t})}function ys(t){return t==="head"}function Xg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Yr(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")al(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,al(s);for(var p=s.firstChild;p;){var S=p.nextSibling,C=p.nodeName;p[bn]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&al(t.ownerDocument.body);s=f}while(s);Yr(n)}function Wg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function vd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":vd(s),jt(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function DM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[bn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Wi(t.nextSibling),t===null)break}return null}function LM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Wi(t.nextSibling),t===null))return null;return t}function qg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Wi(t.nextSibling),t===null))return null;return t}function xd(t){return t.data==="$?"||t.data==="$~"}function Sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Md=null;function Yg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Wi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Zg(t,n,s){switch(n=Rc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function al(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);jt(t)}var qi=new Map,Kg=new Set;function Cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wa=H.d;H.d={f:UM,r:OM,D:PM,C:IM,L:FM,m:BM,X:HM,S:zM,M:GM};function UM(){var t=Wa.f(),n=xc();return t||n}function OM(t){var n=ni(t);n!==null&&n.tag===5&&n.type==="form"?h0(n):Wa.r(t)}var Xr=typeof document>"u"?null:document;function Qg(t,n,s){var l=Xr;if(l&&typeof n=="string"&&n){var f=It(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Kg.has(f)||(Kg.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Qn(n,"link",t),kt(n),l.head.appendChild(n)))}}function PM(t){Wa.D(t),Qg("dns-prefetch",t,null)}function IM(t,n){Wa.C(t,n),Qg("preconnect",t,n)}function FM(t,n,s){Wa.L(t,n,s);var l=Xr;if(l&&t&&n){var f='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+It(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+It(s.imageSizes)+'"]')):f+='[href="'+It(t)+'"]';var p=f;switch(n){case"style":p=Wr(t);break;case"script":p=qr(t)}qi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),qi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(sl(p))||n==="script"&&l.querySelector(rl(p))||(n=l.createElement("link"),Qn(n,"link",t),kt(n),l.head.appendChild(n)))}}function BM(t,n){Wa.m(t,n);var s=Xr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=qr(t)}if(!qi.has(p)&&(t=_({rel:"modulepreload",href:t},n),qi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(rl(p)))return}l=s.createElement("link"),Qn(l,"link",t),kt(l),s.head.appendChild(l)}}}function zM(t,n,s){Wa.S(t,n,s);var l=Xr;if(l&&t){var f=bi(l).hoistableStyles,p=Wr(t);n=n||"default";var S=f.get(p);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(sl(p)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=qi.get(p))&&yd(t,s);var G=S=l.createElement("link");kt(G),Qn(G,"link",t),G._p=new Promise(function(re,ge){G.onload=re,G.onerror=ge}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,wc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(p,S)}}}function HM(t,n){Wa.X(t,n);var s=Xr;if(s&&t){var l=bi(s).hoistableScripts,f=qr(t),p=l.get(f);p||(p=s.querySelector(rl(f)),p||(t=_({src:t,async:!0},n),(n=qi.get(f))&&Ed(t,n),p=s.createElement("script"),kt(p),Qn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function GM(t,n){Wa.M(t,n);var s=Xr;if(s&&t){var l=bi(s).hoistableScripts,f=qr(t),p=l.get(f);p||(p=s.querySelector(rl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=qi.get(f))&&Ed(t,n),p=s.createElement("script"),kt(p),Qn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function Jg(t,n,s,l){var f=(f=te.current)?Cc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Wr(s.href),s=bi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Wr(s.href);var p=bi(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(sl(t)))&&!p._p&&(S.instance=p,S.state.loading=5),qi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},qi.set(t,s),p||VM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qr(s),s=bi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Wr(t){return'href="'+It(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function $g(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function VM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Qn(n,"link",s),kt(n),t.head.appendChild(n))}function qr(t){return'[src="'+It(t)+'"]'}function rl(t){return"script[async]"+t}function e_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+It(s.href)+'"]');if(l)return n.instance=l,kt(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),kt(l),Qn(l,"style",f),wc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Wr(s.href);var p=t.querySelector(sl(f));if(p)return n.state.loading|=4,n.instance=p,kt(p),p;l=$g(s),(f=qi.get(f))&&yd(l,f),p=(t.ownerDocument||t).createElement("link"),kt(p);var S=p;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Qn(p,"link",l),n.state.loading|=4,wc(p,s.precedence,t),n.instance=p;case"script":return p=qr(s.src),(f=t.querySelector(rl(p)))?(n.instance=f,kt(f),f):(l=s,(f=qi.get(p))&&(l=_({},s),Ed(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),kt(f),Qn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,wc(l,s.precedence,t));return n.instance}function wc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Dc=null;function t_(t,n,s){if(Dc===null){var l=new Map,f=Dc=new Map;f.set(s,l)}else f=Dc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[bn]||p[Ve]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var C=l.get(S);C?C.push(p):l.set(S,[p])}}return l}function n_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function kM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function XM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Wr(l.href),p=n.querySelector(sl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Lc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,kt(p);return}p=n.ownerDocument||n,l=$g(l),(f=qi.get(f))&&yd(l,f),p=p.createElement("link"),kt(p);var S=p;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Qn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Lc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var bd=0;function WM(t,n){return t.stylesheets&&t.count===0&&Uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Uc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&bd===0&&(bd=62500*TM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Uc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>bd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nc=null;function Uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nc=new Map,n.forEach(qM,t),Nc=null,Lc.call(t))}function qM(t,n){if(!(n.state.loading&4)){var s=Nc.get(t);if(s)var l=s.get(null);else{s=new Map,Nc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Lc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var ol={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function YM(t,n,s,l,f,p,S,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function a_(t,n,s,l,f,p,S,C,G,re,ge,Me){return t=new YM(t,n,s,S,G,re,ge,Me,C),n=1,p===!0&&(n|=24),p=wi(3,null,null,n),t.current=p,p.stateNode=t,n=nf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},of(p),t}function s_(t){return t?(t=Er,t):Er}function r_(t,n,s,l,f,p){f=s_(f),l.context===null?l.context=f:l.pendingContext=f,l=fs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ds(t,l,n),s!==null&&(Mi(s,t,n),zo(s,t,n))}function o_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Td(t,n){o_(t,n),(t=t.alternate)&&o_(t,n)}function l_(t){if(t.tag===13||t.tag===31){var n=Vs(t,67108864);n!==null&&Mi(n,t,67108864),Td(t,67108864)}}function c_(t){if(t.tag===13||t.tag===31){var n=Oi();n=as(n);var s=Vs(t,n);s!==null&&Mi(s,t,n),Td(t,n)}}var Oc=!0;function jM(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=2,Ad(t,n,s,l)}finally{H.p=p,F.T=f}}function ZM(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=8,Ad(t,n,s,l)}finally{H.p=p,F.T=f}}function Ad(t,n,s,l){if(Oc){var f=Rd(l);if(f===null)dd(t,n,l,Pc,s),f_(t,l);else if(QM(f,t,n,s,l))l.stopPropagation();else if(f_(t,l),n&4&&-1<KM.indexOf(t)){for(;f!==null;){var p=ni(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Ce(p.pendingLanes);if(S!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-He(S);C.entanglements[1]|=G,S&=~G}va(p),(Vt&6)===0&&(_c=Ht()+500,tl(0))}}break;case 31:case 13:C=Vs(p,2),C!==null&&Mi(C,p,2),xc(),Td(p,2)}if(p=Rd(l),p===null&&dd(t,n,l,Pc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else dd(t,n,l,null,s)}}function Rd(t){return t=_r(t),Cd(t)}var Pc=null;function Cd(t){if(Pc=null,t=qn(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pc=t,null}function u_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case U:return 2;case b:return 8;case Q:case ae:return 32;case he:return 268435456;default:return 32}default:return 32}}var wd=!1,Es=null,bs=null,Ts=null,ll=new Map,cl=new Map,As=[],KM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(t,n){switch(t){case"focusin":case"focusout":Es=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(n.pointerId)}}function ul(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=ni(n),n!==null&&l_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function QM(t,n,s,l,f){switch(n){case"focusin":return Es=ul(Es,t,n,s,l,f),!0;case"dragenter":return bs=ul(bs,t,n,s,l,f),!0;case"mouseover":return Ts=ul(Ts,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return ll.set(p,ul(ll.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,cl.set(p,ul(cl.get(p)||null,t,n,s,l,f)),!0}return!1}function d_(t){var n=qn(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,wa(t.priority,function(){c_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,wa(t.priority,function(){c_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Rd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);gr=l,s.target.dispatchEvent(l),gr=null}else return n=ni(s),n!==null&&l_(n),t.blockedOn=s,!1;n.shift()}return!0}function h_(t,n,s){Ic(t)&&s.delete(n)}function JM(){wd=!1,Es!==null&&Ic(Es)&&(Es=null),bs!==null&&Ic(bs)&&(bs=null),Ts!==null&&Ic(Ts)&&(Ts=null),ll.forEach(h_),cl.forEach(h_)}function Fc(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,JM)))}var Bc=null;function p_(t){Bc!==t&&(Bc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Bc===t&&(Bc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Cd(l||s)===null)continue;break}var p=ni(s);p!==null&&(t.splice(n,3),n-=3,Rf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Yr(t){function n(G){return Fc(G,t)}Es!==null&&Fc(Es,t),bs!==null&&Fc(bs,t),Ts!==null&&Fc(Ts,t),ll.forEach(n),cl.forEach(n);for(var s=0;s<As.length;s++){var l=As[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<As.length&&(s=As[0],s.blockedOn===null);)d_(s),s.blockedOn===null&&As.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[rt]||null;if(typeof p=="function")S||p_(s);else if(S){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[rt]||null)C=S.formAction;else if(Cd(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),p_(s)}}}function m_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Dd(t){this._internalRoot=t}zc.prototype.render=Dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Oi();r_(s,l,t,n,null,null)},zc.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r_(t.current,2,null,t,null,null),xc(),n[yt]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var n=da();t={blockedOn:null,target:t,priority:n};for(var s=0;s<As.length&&n!==0&&n<As[s].priority;s++);As.splice(s,0,t),s===0&&d_(t)}};var g_=e.version;if(g_!=="19.2.7")throw Error(r(527,g_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var $M={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{pe=Hc.inject($M),de=Hc}catch{}}return dl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=E0,p=b0,S=T0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=a_(t,1,!1,null,null,s,l,null,f,p,S,m_),t[yt]=n.current,fd(t),new Dd(n)},dl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=E0,S=b0,C=T0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=a_(t,1,!0,n,s??null,l,f,G,p,S,C,m_),n.context=s_(null),s=n.current,l=Oi(),l=as(l),f=fs(l),f.callback=null,ds(s,f,l),s=l,n.current.lanes=s,We(n,s),va(n),t[yt]=n.current,fd(t),new zc(n)},dl.version="19.2.7",dl}var A_;function ly(){if(A_)return Ud.exports;A_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ud.exports=oy(),Ud.exports}var cy=ly();const uy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},jr=(a,e="#")=>{var i;return((i=uy[a])==null?void 0:i.trim())||e},Un={app:jr("VITE_APP_URL","https://demo.morpheum.io"),docs:jr("VITE_DOCS_URL"),manifesto:jr("VITE_MANIFESTO_URL"),discord:jr("VITE_DISCORD_URL"),x:jr("VITE_X_URL"),tutorialVideo:jr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},uu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Fd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Un.manifesto},Cs={eyebrow:{label:"A manifesto for verifiable agents",href:Un.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Un.app},secondaryCta:{label:"Explore agents",href:Un.explore}},R_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},C_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],bh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Bd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Un.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Un.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Un.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},ws={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},Zr={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Gc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Un.app},social:[{label:"Join Discord",href:Un.discord},{label:"Join X",href:Un.x}]},w_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function vo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function fy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Gc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(vo,{href:Gc.primaryCta.href,variant:"primary",children:Gc.primaryCta.label}),Gc.social.map(a=>D.jsx(vo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function dy(){const[a,e]=ke.useState(!1),i=!!Un.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:bh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Un.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:bh.videoCaption})]})]})})}const hy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function zd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:hy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function py(){const a=Zr.cards[0],e=Zr.cards[1],i=Zr.cards[2],r=Zr.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Zr.kicker}),D.jsx("h2",{className:"section-title explore__title",children:Zr.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(zd,{type:"verified"}),D.jsx(zd,{type:"riskScore",value:o.risk}),D.jsx(zd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="185",my=0,D_=1,gy=2,fu=1,_y=2,xl=3,ts=0,Ei=1,ya=2,$a=0,po=1,Th=2,L_=3,N_=4,vy=5,or=100,xy=101,Sy=102,My=103,yy=104,Ey=200,by=201,Ty=202,Ay=203,Ah=204,Rh=205,Ry=206,Cy=207,wy=208,Dy=209,Ly=210,Ny=211,Uy=212,Oy=213,Py=214,Ch=0,wh=1,Dh=2,xo=3,Lh=4,Nh=5,Uh=6,Oh=7,Jv=0,Iy=1,Fy=2,Ta=0,$v=1,ex=2,tx=3,nx=4,ix=5,ax=6,sx=7,rx=300,dr=301,So=302,Hd=303,Gd=304,Au=306,Ph=1e3,ua=1001,Ih=1002,$n=1003,By=1004,Vc=1005,On=1006,Vd=1007,Fs=1008,Zi=1009,ox=1010,lx=1011,Rl=1012,xp=1013,Ca=1014,Ea=1015,ns=1016,Sp=1017,Mp=1018,Cl=1020,cx=35902,ux=35899,fx=1021,dx=1022,fa=1023,is=1026,ur=1027,hx=1028,yp=1029,hr=1030,Ep=1031,bp=1033,du=33776,hu=33777,pu=33778,mu=33779,Fh=35840,Bh=35841,zh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37488,Wh=37489,vu=37490,qh=37491,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,ep=37815,tp=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,xu=36285,dp=36286,zy=3200,U_=0,Hy=1,Is="",mi="srgb",Su="srgb-linear",Mu="linear",qt="srgb",Kr=7680,O_=519,Gy=512,Vy=513,ky=514,Tp=515,Xy=516,Wy=517,Ap=518,qy=519,P_=35044,I_="300 es",ba=2e3,yu=2001;function Yy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Eu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function jy(){const a=Eu("canvas");return a.style.display="block",a}const F_={};function B_(...a){const e="THREE."+a.shift();console.log(e,...a)}function px(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function lt(...a){a=px(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Ot(...a){a=px(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function mo(...a){const e=a.join(" ");e in F_||(F_[e]=!0,lt(...a))}function Zy(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Ky={[Ch]:wh,[Dh]:Uh,[Lh]:Oh,[xo]:Nh,[wh]:Ch,[Uh]:Dh,[Oh]:Lh,[Nh]:xo};class mr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let z_=1234567;const bl=Math.PI/180,wl=180/Math.PI;function Eo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(oi[a&255]+oi[a>>8&255]+oi[a>>16&255]+oi[a>>24&255]+"-"+oi[e&255]+oi[e>>8&255]+"-"+oi[e>>16&15|64]+oi[e>>24&255]+"-"+oi[i&63|128]+oi[i>>8&255]+"-"+oi[i>>16&255]+oi[i>>24&255]+oi[r&255]+oi[r>>8&255]+oi[r>>16&255]+oi[r>>24&255]).toLowerCase()}function Mt(a,e,i){return Math.max(e,Math.min(i,a))}function Rp(a,e){return(a%e+e)%e}function Qy(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function Jy(a,e,i){return a!==e?(i-a)/(e-a):0}function Tl(a,e,i){return(1-i)*a+i*e}function $y(a,e,i,r){return Tl(a,e,1-Math.exp(-i*r))}function eE(a,e=1){return e-Math.abs(Rp(a,e*2)-e)}function tE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function nE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function iE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function aE(a,e){return a+Math.random()*(e-a)}function sE(a){return a*(.5-Math.random())}function rE(a){a!==void 0&&(z_=a);let e=z_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oE(a){return a*bl}function lE(a){return a*wl}function cE(a){return(a&a-1)===0&&a!==0}function uE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function fE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function dE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*E,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*E,h*d);break;case"ZYZ":a.set(m*E,m*x,h*g,h*d);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function uo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function di(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tn={DEG2RAD:bl,RAD2DEG:wl,generateUUID:Eo,clamp:Mt,euclideanModulo:Rp,mapLinear:Qy,inverseLerp:Jy,lerp:Tl,damp:$y,pingpong:eE,smoothstep:tE,smootherstep:nE,randInt:iE,randFloat:aE,randFloatSpread:sE,seededRandom:rE,degToRad:oE,radToDeg:lE,isPowerOfTwo:cE,ceilPowerOfTwo:uE,floorPowerOfTwo:fE,setQuaternionFromProperEuler:dE,normalize:di,denormalize:uo},Ip=class Ip{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ip.prototype.isVector2=!0;let zt=Ip;class bo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],E=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==E){let y=m*v+d*x+g*E+_*w;y<0&&(v=-v,x=-x,E=-E,w=-w,y=-y);let M=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);M=Math.sin(M*I)/z,h=Math.sin(h*I)/z,m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+w*h;const I=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=I,d*=I,g*=I,_*=I}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[i]=h*E+g*_+m*x-d*v,e[i+1]=m*E+g*v+d*_-h*x,e[i+2]=d*E+g*x+h*v-m*_,e[i+3]=g*E-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"YZX":this._x=v*g*_+d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_-v*x*E;break;case"XZY":this._x=v*g*_-d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_+v*x*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fp=class Fp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(H_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(H_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fp.prototype.isVector3=!0;let ee=Fp;const kd=new ee,H_=new bo,Bp=class Bp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],E=r[8],w=o[0],y=o[3],M=o[6],I=o[1],z=o[4],R=o[7],O=o[2],L=o[5],B=o[8];return c[0]=u*w+h*I+m*O,c[3]=u*y+h*z+m*L,c[6]=u*M+h*R+m*B,c[1]=d*w+g*I+_*O,c[4]=d*y+g*z+_*L,c[7]=d*M+g*R+_*B,c[2]=v*w+x*I+E*O,c[5]=v*y+x*z+E*L,c[8]=v*M+x*R+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,E=i*_+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xd.makeScale(e,i)),this}rotate(e){return mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xd.makeRotation(-e)),this}translate(e,i){return mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bp.prototype.isMatrix3=!0;let ut=Bp;const Xd=new ut,G_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hE(){const a={enabled:!0,workingColorSpace:Su,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=es(o.r),o.g=es(o.g),o.b=es(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Is?Mu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Su]:{primaries:e,whitePoint:r,transfer:Mu,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const wt=hE();function es(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function go(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Qr;class pE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qr===void 0&&(Qr=Eu("canvas")),Qr.width=e.width,Qr.height=e.height;const o=Qr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Eu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=es(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(es(i[r]/255)*255):i[r]=es(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mE=0;class Cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Wd(o[u].image)):c.push(Wd(o[u]))}else c=Wd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Wd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?pE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let gE=0;const qd=new ee;class ci extends mr{constructor(e=ci.DEFAULT_IMAGE,i=ci.DEFAULT_MAPPING,r=ua,o=ua,c=On,u=Fs,h=fa,m=Zi,d=ci.DEFAULT_ANISOTROPY,g=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Eo(),this.name="",this.source=new Cp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case ua:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case ua:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=rx;ci.DEFAULT_ANISOTROPY=1;const zp=class zp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,R=(x+1)/2,O=(M+1)/2,L=(g+v)/4,B=(_+w)/4,T=(E+y)/4;return z>R&&z>O?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=B/r):R>O?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=B/c,o=T/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(_-w)/I,this.z=(v-g)/I,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;let Sn=zp;class _E extends mr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Sn(0,0,e,i),this.scissorTest=!1,this.viewport=new Sn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new ci(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Cp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Aa extends _E{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class mx extends ci{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends ci{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=class Tu{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=E,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/Jr.setFromMatrixColumn(e,0).length(),c=1/Jr.setFromMatrixColumn(e,1).length(),u=1/Jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+E*d,i[5]=v-w*d,i[9]=-h*m,i[2]=w-v*d,i[6]=E+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,E=d*g,w=d*_;i[0]=v+w*h,i[4]=E*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-E,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,E=d*g,w=d*_;i[0]=v-w*h,i[4]=-u*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=h*g,w=h*_;i[0]=m*g,i[4]=E*d-x,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=x*d-E,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,E=h*m,w=h*d;i[0]=m*g,i[4]=w-v*_,i[8]=E*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+E,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*d,E=h*m,w=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xE,e,SE)}lookAt(e,i,r){const o=this.elements;return Pi.subVectors(e,i),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Ds.crossVectors(r,Pi),Ds.lengthSq()===0&&(Math.abs(r.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Ds.crossVectors(r,Pi)),Ds.normalize(),kc.crossVectors(Pi,Ds),o[0]=Ds.x,o[4]=kc.x,o[8]=Pi.x,o[1]=Ds.y,o[5]=kc.y,o[9]=Pi.y,o[2]=Ds.z,o[6]=kc.z,o[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],E=r[2],w=r[6],y=r[10],M=r[14],I=r[3],z=r[7],R=r[11],O=r[15],L=o[0],B=o[4],T=o[8],N=o[12],k=o[1],V=o[5],j=o[9],ce=o[13],ue=o[2],q=o[6],F=o[10],H=o[14],$=o[3],me=o[7],xe=o[11],P=o[15];return c[0]=u*L+h*k+m*ue+d*$,c[4]=u*B+h*V+m*q+d*me,c[8]=u*T+h*j+m*F+d*xe,c[12]=u*N+h*ce+m*H+d*P,c[1]=g*L+_*k+v*ue+x*$,c[5]=g*B+_*V+v*q+x*me,c[9]=g*T+_*j+v*F+x*xe,c[13]=g*N+_*ce+v*H+x*P,c[2]=E*L+w*k+y*ue+M*$,c[6]=E*B+w*V+y*q+M*me,c[10]=E*T+w*j+y*F+M*xe,c[14]=E*N+w*ce+y*H+M*P,c[3]=I*L+z*k+R*ue+O*$,c[7]=I*B+z*V+R*q+O*me,c[11]=I*T+z*j+R*F+O*xe,c[15]=I*N+z*ce+R*H+O*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],w=e[7],y=e[11],M=e[15],I=m*x-d*v,z=h*x-d*_,R=h*v-m*_,O=u*x-d*g,L=u*v-m*g,B=u*_-h*g;return i*(w*I-y*z+M*R)-r*(E*I-y*O+M*L)+o*(E*z-w*O+M*B)-c*(E*R-w*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],w=e[13],y=e[14],M=e[15],I=i*h-r*u,z=i*m-o*u,R=i*d-c*u,O=r*m-o*h,L=r*d-c*h,B=o*d-c*m,T=g*w-_*E,N=g*y-v*E,k=g*M-x*E,V=_*y-v*w,j=_*M-x*w,ce=v*M-x*y,ue=I*ce-z*j+R*V+O*k-L*N+B*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ue;return e[0]=(h*ce-m*j+d*V)*q,e[1]=(o*j-r*ce-c*V)*q,e[2]=(w*B-y*L+M*O)*q,e[3]=(v*L-_*B-x*O)*q,e[4]=(m*k-u*ce-d*N)*q,e[5]=(i*ce-o*k+c*N)*q,e[6]=(y*R-E*B-M*z)*q,e[7]=(g*B-v*R+x*z)*q,e[8]=(u*j-h*k+d*T)*q,e[9]=(r*k-i*j-c*T)*q,e[10]=(E*L-w*R+M*I)*q,e[11]=(_*R-g*L-x*I)*q,e[12]=(h*N-u*V-m*T)*q,e[13]=(i*V-r*N+o*T)*q,e[14]=(w*z-E*O-y*I)*q,e[15]=(g*O-_*z+v*I)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,E=c*_,w=u*g,y=u*_,M=h*_,I=m*d,z=m*g,R=m*_,O=r.x,L=r.y,B=r.z;return o[0]=(1-(w+M))*O,o[1]=(x+R)*O,o[2]=(E-z)*O,o[3]=0,o[4]=(x-R)*L,o[5]=(1-(v+M))*L,o[6]=(y+I)*L,o[7]=0,o[8]=(E+z)*B,o[9]=(y-I)*B,o[10]=(1-(v+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Jr.set(o[0],o[1],o[2]).length();const h=Jr.set(o[4],o[5],o[6]).length(),m=Jr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ra.copy(this);const d=1/u,g=1/h,_=1/m;return ra.elements[0]*=d,ra.elements[1]*=d,ra.elements[2]*=d,ra.elements[4]*=g,ra.elements[5]*=g,ra.elements[6]*=g,ra.elements[8]*=_,ra.elements[9]*=_,ra.elements[10]*=_,i.setFromRotationMatrix(ra),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ba,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let E,w;if(m)E=c/(u-c),w=u*c/(u-c);else if(h===ba)E=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===yu)E=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ba,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let E,w;if(m)E=1/(u-c),w=u/(u-c);else if(h===ba)E=-2/(u-c),w=-(u+c)/(u-c);else if(h===yu)E=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Tu.prototype.isMatrix4=!0;let Rn=Tu;const Jr=new ee,ra=new Rn,xE=new ee(0,0,0),SE=new ee(1,1,1),Ds=new ee,kc=new ee,Pi=new ee,k_=new Rn,X_=new bo;class pr{constructor(e=0,i=0,r=0,o=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return X_.setFromEuler(this),this.setFromQuaternion(X_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ME=0;const W_=new ee,$r=new bo,qa=new Rn,Xc=new ee,hl=new ee,yE=new ee,EE=new bo,q_=new ee(1,0,0),Y_=new ee(0,1,0),j_=new ee(0,0,1),Z_={type:"added"},bE={type:"removed"},eo={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Fi extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fi.DEFAULT_UP.clone();const e=new ee,i=new pr,r=new bo,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rn},normalMatrix:{value:new ut}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=Fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(q_,e)}rotateY(e){return this.rotateOnAxis(Y_,e)}rotateZ(e){return this.rotateOnAxis(j_,e)}translateOnAxis(e,i){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(q_,e)}translateY(e){return this.translateOnAxis(Y_,e)}translateZ(e){return this.translateOnAxis(j_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Xc.copy(e):Xc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(hl,Xc,this.up):qa.lookAt(Xc,hl,this.up),this.quaternion.setFromRotationMatrix(qa),o&&(qa.extractRotation(o.matrixWorld),$r.setFromRotationMatrix(qa),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z_),eo.child=e,this.dispatchEvent(eo),eo.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(bE),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z_),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,yE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,EE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Fi.DEFAULT_UP=new ee(0,1,0);Fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sl extends Fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function Zd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=wt.workingColorSpace){return this.r=e,this.g=i,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=wt.workingColorSpace){if(e=Rp(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Zd(u,c,e+1/3),this.g=Zd(u,c,e),this.b=Zd(u,c,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=_x[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return wt.workingToColorSpace(li.copy(this),e),Math.round(Mt(li.r*255,0,255))*65536+Math.round(Mt(li.g*255,0,255))*256+Math.round(Mt(li.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(li.copy(this),i);const r=li.r,o=li.g,c=li.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(li.copy(this),i),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=mi){wt.workingToColorSpace(li.copy(this),e);const i=li.r,r=li.g,o=li.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+i,Ls.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ls),e.getHSL(Wc);const r=Tl(Ls.h,Wc.h,i),o=Tl(Ls.s,Wc.s,i),c=Tl(Ls.l,Wc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const li=new Nt;Nt.NAMES=_x;class AE extends Fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const oa=new ee,Ya=new ee,Kd=new ee,ja=new ee,to=new ee,no=new ee,K_=new ee,Qd=new ee,Jd=new ee,$d=new ee,eh=new Sn,th=new Sn,nh=new Sn;class ca{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),oa.subVectors(e,i),o.cross(oa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){oa.subVectors(o,i),Ya.subVectors(r,i),Kd.subVectors(e,i);const u=oa.dot(oa),h=oa.dot(Ya),m=oa.dot(Kd),d=Ya.dot(Ya),g=Ya.dot(Kd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-x-E,E,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,ja)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ja.x),m.addScaledVector(u,ja.y),m.addScaledVector(h,ja.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return eh.setScalar(0),th.setScalar(0),nh.setScalar(0),eh.fromBufferAttribute(e,i),th.fromBufferAttribute(e,r),nh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(eh,c.x),u.addScaledVector(th,c.y),u.addScaledVector(nh,c.z),u}static isFrontFacing(e,i,r,o){return oa.subVectors(r,i),Ya.subVectors(e,i),oa.cross(Ya).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oa.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),oa.cross(Ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ca.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ca.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ca.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ca.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ca.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;to.subVectors(o,r),no.subVectors(c,r),Qd.subVectors(e,r);const m=to.dot(Qd),d=no.dot(Qd);if(m<=0&&d<=0)return i.copy(r);Jd.subVectors(e,o);const g=to.dot(Jd),_=no.dot(Jd);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(to,u);$d.subVectors(e,c);const x=to.dot($d),E=no.dot($d);if(E>=0&&x<=E)return i.copy(c);const w=x*d-m*E;if(w<=0&&d>=0&&E<=0)return h=d/(d-E),i.copy(r).addScaledVector(no,h);const y=g*E-x*_;if(y<=0&&_-g>=0&&x-E>=0)return K_.subVectors(c,o),h=(_-g)/(_-g+(x-E)),i.copy(o).addScaledVector(K_,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(to,u).addScaledVector(no,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ll{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(la.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(la.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=la.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,la):la.fromBufferAttribute(c,u),la.applyMatrix4(e.matrixWorld),this.expandByPoint(la);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qc.copy(r.boundingBox)),qc.applyMatrix4(e.matrixWorld),this.union(qc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,la),la.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),Yc.subVectors(this.max,pl),io.subVectors(e.a,pl),ao.subVectors(e.b,pl),so.subVectors(e.c,pl),Ns.subVectors(ao,io),Us.subVectors(so,ao),tr.subVectors(io,so);let i=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-tr.z,tr.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,tr.z,0,-tr.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-tr.y,tr.x,0];return!ih(i,io,ao,so,Yc)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,io,ao,so,Yc))?!1:(jc.crossVectors(Ns,Us),i=[jc.x,jc.y,jc.z],ih(i,io,ao,so,Yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,la).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(la).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Za=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],la=new ee,qc=new Ll,io=new ee,ao=new ee,so=new ee,Ns=new ee,Us=new ee,tr=new ee,pl=new ee,Yc=new ee,jc=new ee,nr=new ee;function ih(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){nr.fromArray(a,c);const h=o.x*Math.abs(nr.x)+o.y*Math.abs(nr.y)+o.z*Math.abs(nr.z),m=e.dot(nr),d=i.dot(nr),g=r.dot(nr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const Nn=new ee,Zc=new zt;let RE=0;class Ra extends mr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=P_,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Zc.fromBufferAttribute(this,i),Zc.applyMatrix3(e),this.setXY(i,Zc.x,Zc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix3(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix4(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyNormalMatrix(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.transformDirection(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=uo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=di(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=di(i,this.array),r=di(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=di(i,this.array),r=di(r,this.array),o=di(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=di(i,this.array),r=di(r,this.array),o=di(o,this.array),c=di(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vx extends Ra{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class xx extends Ra{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ki extends Ra{constructor(e,i,r){super(new Float32Array(e),i,r)}}const CE=new Ll,ml=new ee,ah=new ee;class wp{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):CE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(ml,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(ah)),this.expandByPoint(ml.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wE=0;const Yi=new Rn,sh=new Fi,ro=new ee,Ii=new Ll,gl=new Ll,Xn=new ee;class Ji extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yy(e)?xx:vx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yi.makeRotationFromQuaternion(e),this.applyMatrix4(Yi),this}rotateX(e){return Yi.makeRotationX(e),this.applyMatrix4(Yi),this}rotateY(e){return Yi.makeRotationY(e),this.applyMatrix4(Yi),this}rotateZ(e){return Yi.makeRotationZ(e),this.applyMatrix4(Yi),this}translate(e,i,r){return Yi.makeTranslation(e,i,r),this.applyMatrix4(Yi),this}scale(e,i,r){return Yi.makeScale(e,i,r),this.applyMatrix4(Yi),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ki(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];gl.setFromBufferAttribute(h),this.morphTargetsRelative?(Xn.addVectors(Ii.min,gl.min),Ii.expandByPoint(Xn),Xn.addVectors(Ii.max,gl.max),Ii.expandByPoint(Xn)):(Ii.expandByPoint(gl.min),Ii.expandByPoint(gl.max))}Ii.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Xn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Xn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Xn.fromBufferAttribute(h,d),m&&(ro.fromBufferAttribute(e,d),Xn.add(ro)),o=Math.max(o,r.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ra(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const d=new ee,g=new ee,_=new ee,v=new zt,x=new zt,E=new zt,w=new ee,y=new ee;function M(T,N,k){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,k),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,k),g.sub(d),_.sub(d),x.sub(v),E.sub(v);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(V),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(V),h[T].add(w),h[N].add(w),h[k].add(w),m[T].add(y),m[N].add(y),m[k].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,N=I.length;T<N;++T){const k=I[T],V=k.start,j=k.count;for(let ce=V,ue=V+j;ce<ue;ce+=3)M(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const z=new ee,R=new ee,O=new ee,L=new ee;function B(T){O.fromBufferAttribute(o,T),L.copy(O);const N=h[T];z.copy(N),z.sub(O.multiplyScalar(O.dot(N))).normalize(),R.crossVectors(L,N);const V=R.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,N=I.length;T<N;++T){const k=I[T],V=k.start,j=k.count;for(let ce=V,ue=V+j;ce<ue;ce+=3)B(e.getX(ce+0)),B(e.getX(ce+1)),B(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ra(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,d=new ee,g=new ee,_=new ee;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Xn.fromBufferAttribute(e,i),Xn.normalize(),e.setXYZ(i,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,E=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[E++]=d[x++]}return new Ra(v,g,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DE=0;class Ru extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=po,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(r.blending=this.blending),this.side!==ts&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ah&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ka=new ee,rh=new ee,Kc=new ee,Os=new ee,oh=new ee,Qc=new ee,lh=new ee;class LE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ka)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ka.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ka.copy(this.origin).addScaledVector(this.direction,i),Ka.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){rh.copy(e).add(i).multiplyScalar(.5),Kc.copy(i).sub(e).normalize(),Os.copy(this.origin).sub(rh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Kc),h=Os.dot(this.direction),m=-Os.dot(Kc),d=Os.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*m-h,v=u*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(rh).addScaledVector(Kc,v),x}intersectSphere(e,i){Ka.subVectors(e.center,this.origin);const r=Ka.dot(this.direction),o=Ka.dot(Ka)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Ka)!==null}intersectTriangle(e,i,r,o,c){oh.subVectors(i,e),Qc.subVectors(r,e),lh.crossVectors(oh,Qc);let u=this.direction.dot(lh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Os.subVectors(this.origin,e);const m=h*this.direction.dot(Qc.crossVectors(Os,Qc));if(m<0)return null;const d=h*this.direction.dot(oh.cross(Os));if(d<0||m+d>u)return null;const g=-h*Os.dot(lh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dp extends Ru{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Q_=new Rn,ir=new LE,Jc=new wp,J_=new ee,$c=new ee,eu=new ee,tu=new ee,ch=new ee,nu=new ee,$_=new ee,iu=new ee;class Qi extends Fi{constructor(e=new Ji,i=new Dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){nu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(ch.fromBufferAttribute(_,e),u?nu.addScaledVector(ch,g):nu.addScaledVector(ch.sub(i),g))}i.add(nu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Jc.copy(r.boundingSphere),Jc.applyMatrix4(c),ir.copy(e.ray).recast(e.near),!(Jc.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Jc,J_)===null||ir.origin.distanceToSquared(J_)>(e.far-e.near)**2))&&(Q_.copy(c).invert(),ir.copy(e.ray).applyMatrix4(Q_),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ir)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=h.getX(R),B=h.getX(R+1),T=h.getX(R+2);o=au(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=E,M=w;y<M;y+=3){const I=h.getX(y),z=h.getX(y+1),R=h.getX(y+2);o=au(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=R,B=R+1,T=R+2;o=au(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=E,M=w;y<M;y+=3){const I=y,z=y+1,R=y+2;o=au(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function NE(a,e,i,r,o,c,u,h){let m;if(e.side===Ei?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===ts,h),m===null)return null;iu.copy(h),iu.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(iu);return d<i.near||d>i.far?null:{distance:d,point:iu.clone(),object:a}}function au(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,$c),a.getVertexPosition(m,eu),a.getVertexPosition(d,tu);const g=NE(a,e,i,r,$c,eu,tu,$_);if(g){const _=new ee;ca.getBarycoord($_,$c,eu,tu,_),o&&(g.uv=ca.getInterpolatedAttribute(o,h,m,d,_,new zt)),c&&(g.uv1=ca.getInterpolatedAttribute(c,h,m,d,_,new zt)),u&&(g.normal=ca.getInterpolatedAttribute(u,h,m,d,_,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new ee,materialIndex:0};ca.getNormal($c,eu,tu,v.normal),g.face=v,g.barycoord=_}return g}class UE extends ci{constructor(e=null,i=1,r=1,o,c,u,h,m,d=$n,g=$n,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new ee,OE=new ee,PE=new ut;class rr{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=uh.subVectors(r,i).cross(OE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(uh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||PE.getNormalMatrix(e),o=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new wp,IE=new zt(.5,.5),su=new ee;class Sx{constructor(e=new rr,i=new rr,r=new rr,o=new rr,c=new rr,u=new rr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ba,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],w=c[9],y=c[10],M=c[11],I=c[12],z=c[13],R=c[14],O=c[15];if(o[0].setComponents(d-u,x-g,M-E,O-I).normalize(),o[1].setComponents(d+u,x+g,M+E,O+I).normalize(),o[2].setComponents(d+h,x+_,M+w,O+z).normalize(),o[3].setComponents(d-h,x-_,M-w,O-z).normalize(),r)o[4].setComponents(m,v,y,R).normalize(),o[5].setComponents(d-m,x-v,M-y,O-R).normalize();else if(o[4].setComponents(d-m,x-v,M-y,O-R).normalize(),i===ba)o[5].setComponents(d+m,x+v,M+y,O+R).normalize();else if(i===yu)o[5].setComponents(m,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const i=IE.distanceTo(e.center);return ar.radius=.7071067811865476+i,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(su.x=o.normal.x>0?e.max.x:e.min.x,su.y=o.normal.y>0?e.max.y:e.min.y,su.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends ci{constructor(e=[],i=dr,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends ci{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mo extends ci{constructor(e,i,r=Ca,o,c,u,h=$n,m=$n,d,g=is,_=1){if(g!==is&&g!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class FE extends Mo{constructor(e,i=Ca,r=dr,o,c,u=$n,h=$n,m,d=is){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ex extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nl extends Ji{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Ki(d,3)),this.setAttribute("normal",new Ki(g,3)),this.setAttribute("uv",new Ki(_,2));function E(w,y,M,I,z,R,O,L,B,T,N){const k=R/B,V=O/T,j=R/2,ce=O/2,ue=L/2,q=B+1,F=T+1;let H=0,$=0;const me=new ee;for(let xe=0;xe<F;xe++){const P=xe*V-ce;for(let K=0;K<q;K++){const Se=K*k-j;me[w]=Se*I,me[y]=P*z,me[M]=ue,d.push(me.x,me.y,me.z),me[w]=0,me[y]=0,me[M]=L>0?1:-1,g.push(me.x,me.y,me.z),_.push(K/B),_.push(1-xe/T),H+=1}}for(let xe=0;xe<T;xe++)for(let P=0;P<B;P++){const K=v+P+q*xe,Se=v+P+q*(xe+1),Te=v+(P+1)+q*(xe+1),Re=v+(P+1)+q*xe;m.push(K,Se,Re),m.push(Se,Te,Re),$+=6}h.addGroup(x,$,N),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class BE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new zt:new ee);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],h=new ee,m=new Rn;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new ee)}c[0]=new ee,u[0]=new ee;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Mt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(Mt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Lp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const ev=new ee,tv=new ee,fh=new Lp,dh=new Lp,hh=new Lp;class zE extends BE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(tv.subVectors(o[0],o[1]).add(o[0]),d=tv);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(ev.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=ev),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),fh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,w,y),dh.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,w,y),hh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),dh.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),hh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(fh.calc(m),dh.calc(m),hh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class fr extends Ji{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],E=[],w=[],y=[];for(let M=0;M<g;M++){const I=M*v-u;for(let z=0;z<d;z++){const R=z*_-c;E.push(R,-I,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let I=0;I<h;I++){const z=I+d*M,R=I+d*(M+1),O=I+1+d*(M+1),L=I+1+d*M;x.push(z,R,L),x.push(R,O,L)}this.setIndex(x),this.setAttribute("position",new Ki(E,3)),this.setAttribute("normal",new Ki(w,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}function yo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(nv(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(nv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function hi(a){const e={};for(let i=0;i<a.length;i++){const r=yo(a[i]);for(const o in r)e[o]=r[o]}return e}function nv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function HE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function bx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const GE={clone:yo,merge:hi};var VE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ru{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=HE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Rn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XE extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WE extends Ru{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qE extends Ru{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ru=new ee,ou=new bo,xa=new ee;class Tx extends Fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ru,ou,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,ou,xa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(ru,ou,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,ou,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ps=new ee,iv=new zt,av=new zt;class ji extends Tx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,i){return this.getViewBounds(e,iv,av),i.subVectors(av,iv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ax extends Tx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const oo=-90,lo=1;class YE extends Fi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ji(oo,lo,e,i);o.layers=this.layers,this.add(o);const c=new ji(oo,lo,e,i);c.layers=this.layers,this.add(c);const u=new ji(oo,lo,e,i);u.layers=this.layers,this.add(u);const h=new ji(oo,lo,e,i);h.layers=this.layers,this.add(h);const m=new ji(oo,lo,e,i);m.layers=this.layers,this.add(m);const d=new ji(oo,lo,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===ba)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class jE extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hp=class Hp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Hp.prototype.isMatrix2=!0;let sv=Hp;function rv(a,e,i,r){const o=ZE(r);switch(i){case fx:return a*e;case hx:return a*e/o.components*o.byteLength;case yp:return a*e/o.components*o.byteLength;case hr:return a*e*2/o.components*o.byteLength;case Ep:return a*e*2/o.components*o.byteLength;case dx:return a*e*3/o.components*o.byteLength;case fa:return a*e*4/o.components*o.byteLength;case bp:return a*e*4/o.components*o.byteLength;case du:case hu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bh:case Hh:return Math.max(a,16)*Math.max(e,8)/4;case Fh:case zh:return Math.max(a,8)*Math.max(e,8)/2;case Gh:case Vh:case Xh:case Wh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case kh:case vu:case qh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ep:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case tp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case np:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case ip:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ap:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case sp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case rp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case op:case lp:case cp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case up:case fp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case xu:case dp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZE(a){switch(a){case Zi:case ox:return{byteLength:1,components:1};case Rl:case lx:case ns:return{byteLength:2,components:1};case Sp:case Mp:return{byteLength:2,components:4};case Ca:case xp:case Ea:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function KE(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],w=_[x];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const w=_[x];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var QE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
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
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ib=`#ifdef USE_AOMAP
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
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
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
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ub=`#ifdef USE_IRIDESCENCE
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
#endif`,fb=`#ifdef USE_BUMPMAP
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
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sb=`#define PI 3.141592653589793
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
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bb=`#ifdef USE_GRADIENTMAP
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
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,Zb=`uniform sampler2D dfgLUT;
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
}`,Kb=`
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$b=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oT=`#if defined( USE_POINTS_UV )
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
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
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
#endif`,pT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ST=`#ifdef USE_NORMALMAP
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
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IT=`float getShadowMask() {
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
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,zT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,GT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WT=`#ifdef USE_TRANSMISSION
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
#endif`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JT=`uniform sampler2D t2D;
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,M1=`#define STANDARD
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
}`,y1=`#define STANDARD
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
}`,E1=`#define TOON
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
}`,b1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:QE,alphahash_pars_fragment:JE,alphamap_fragment:$E,alphamap_pars_fragment:eb,alphatest_fragment:tb,alphatest_pars_fragment:nb,aomap_fragment:ib,aomap_pars_fragment:ab,batching_pars_vertex:sb,batching_vertex:rb,begin_vertex:ob,beginnormal_vertex:lb,bsdfs:cb,iridescence_fragment:ub,bumpmap_pars_fragment:fb,clipping_planes_fragment:db,clipping_planes_pars_fragment:hb,clipping_planes_pars_vertex:pb,clipping_planes_vertex:mb,color_fragment:gb,color_pars_fragment:_b,color_pars_vertex:vb,color_vertex:xb,common:Sb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Eb,displacementmap_vertex:bb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Ab,colorspace_fragment:Rb,colorspace_pars_fragment:Cb,envmap_fragment:wb,envmap_common_pars_fragment:Db,envmap_pars_fragment:Lb,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:kb,envmap_vertex:Ub,fog_vertex:Ob,fog_pars_vertex:Pb,fog_fragment:Ib,fog_pars_fragment:Fb,gradientmap_pars_fragment:Bb,lightmap_pars_fragment:zb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Vb,lights_toon_fragment:Xb,lights_toon_pars_fragment:Wb,lights_phong_fragment:qb,lights_phong_pars_fragment:Yb,lights_physical_fragment:jb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Kb,lights_fragment_maps:Qb,lights_fragment_end:Jb,lightprobes_pars_fragment:$b,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:aT,map_pars_fragment:sT,map_particle_fragment:rT,map_particle_pars_fragment:oT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:fT,morphnormal_vertex:dT,morphtarget_pars_vertex:hT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:_T,normal_pars_vertex:vT,normal_vertex:xT,normalmap_pars_fragment:ST,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:yT,clearcoat_pars_fragment:ET,iridescence_pars_fragment:bT,opaque_fragment:TT,packing:AT,premultiplied_alpha_fragment:RT,project_vertex:CT,dithering_fragment:wT,dithering_pars_fragment:DT,roughnessmap_fragment:LT,roughnessmap_pars_fragment:NT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:OT,shadowmap_vertex:PT,shadowmask_pars_fragment:IT,skinbase_vertex:FT,skinning_pars_vertex:BT,skinning_vertex:zT,skinnormal_vertex:HT,specularmap_fragment:GT,specularmap_pars_fragment:VT,tonemapping_fragment:kT,tonemapping_pars_fragment:XT,transmission_fragment:WT,transmission_pars_fragment:qT,uv_pars_fragment:YT,uv_pars_vertex:jT,uv_vertex:ZT,worldpos_vertex:KT,background_vert:QT,background_frag:JT,backgroundCube_vert:$T,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:a1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:f1,meshbasic_frag:d1,meshlambert_vert:h1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:_1,meshnormal_frag:v1,meshphong_vert:x1,meshphong_frag:S1,meshphysical_vert:M1,meshphysical_frag:y1,meshtoon_vert:E1,meshtoon_frag:b1,points_vert:T1,points_frag:A1,shadow_vert:R1,shadow_frag:C1,sprite_vert:w1,sprite_frag:D1},ze={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ma={basic:{uniforms:hi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:hi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:hi([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:hi([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:hi([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Nt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:hi([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:hi([ze.points,ze.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:hi([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:hi([ze.common,ze.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:hi([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:hi([ze.sprite,ze.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:hi([ze.common,ze.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:hi([ze.lights,ze.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ma.physical={uniforms:hi([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const lu={r:0,b:0,g:0},L1=new Rn,Cx=new ut;Cx.set(-1,0,0,0,1,0,0,0,1);function N1(a,e,i,r,o,c){const u=new Nt(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const R=I.backgroundBlurriness>0;z=e.get(z,R)}return z}function E(I){let z=!1;const R=x(I);R===null?y(u,h):R&&R.isColor&&(y(R,1),z=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(I,z){const R=x(z);R&&(R.isCubeTexture||R.mapping===Au)?(d===void 0&&(d=new Qi(new Nl(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:yo(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Cx),d.material.toneMapped=wt.getTransfer(R.colorSpace)!==qt,(g!==R||_!==R.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Qi(new fr(2,2),new $i({name:"BackgroundMaterial",uniforms:yo(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=wt.getTransfer(R.colorSpace)!==qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,z){I.getRGB(lu,bx(a)),i.buffers.color.setClear(lu.r,lu.g,lu.b,z,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,z=1){u.set(I),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:E,addToRenderList:w,dispose:M}}function U1(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(V,j,ce,ue,q){let F=!1;const H=_(V,ue,ce,j);c!==H&&(c=H,d(c.object)),F=x(V,ue,ce,q),F&&E(V,ue,ce,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,R(V,j,ce,ue),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function d(V){return a.bindVertexArray(V)}function g(V){return a.deleteVertexArray(V)}function _(V,j,ce,ue){const q=ue.wireframe===!0;let F=r[j.id];F===void 0&&(F={},r[j.id]=F);const H=V.isInstancedMesh===!0?V.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let me=$[ce.id];me===void 0&&(me={},$[ce.id]=me);let xe=me[q];return xe===void 0&&(xe=v(m()),me[q]=xe),xe}function v(V){const j=[],ce=[],ue=[];for(let q=0;q<i;q++)j[q]=0,ce[q]=0,ue[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:ue,object:V,attributes:{},index:null}}function x(V,j,ce,ue){const q=c.attributes,F=j.attributes;let H=0;const $=ce.getAttributes();for(const me in $)if($[me].location>=0){const P=q[me];let K=F[me];if(K===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function E(V,j,ce,ue){const q={},F=j.attributes;let H=0;const $=ce.getAttributes();for(const me in $)if($[me].location>=0){let P=F[me];P===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),q[me]=K,H++}c.attributes=q,c.attributesNum=H,c.index=ue}function w(){const V=c.newAttributes;for(let j=0,ce=V.length;j<ce;j++)V[j]=0}function y(V){M(V,0)}function M(V,j){const ce=c.newAttributes,ue=c.enabledAttributes,q=c.attributeDivisors;ce[V]=1,ue[V]===0&&(a.enableVertexAttribArray(V),ue[V]=1),q[V]!==j&&(a.vertexAttribDivisor(V,j),q[V]=j)}function I(){const V=c.newAttributes,j=c.enabledAttributes;for(let ce=0,ue=j.length;ce<ue;ce++)j[ce]!==V[ce]&&(a.disableVertexAttribArray(ce),j[ce]=0)}function z(V,j,ce,ue,q,F,H){H===!0?a.vertexAttribIPointer(V,j,ce,q,F):a.vertexAttribPointer(V,j,ce,ue,q,F)}function R(V,j,ce,ue){w();const q=ue.attributes,F=ce.getAttributes(),H=j.defaultAttributeValues;for(const $ in F){const me=F[$];if(me.location>=0){let xe=q[$];if(xe===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor)),xe!==void 0){const P=xe.normalized,K=xe.itemSize,Se=e.get(xe);if(Se===void 0)continue;const Te=Se.buffer,Re=Se.type,te=Se.bytesPerElement,ye=Re===a.INT||Re===a.UNSIGNED_INT||xe.gpuType===xp;if(xe.isInterleavedBufferAttribute){const Ee=xe.data,Ge=Ee.stride,it=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let tt=0;tt<me.locationSize;tt++)M(me.location+tt,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let tt=0;tt<me.locationSize;tt++)y(me.location+tt);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let tt=0;tt<me.locationSize;tt++)z(me.location+tt,K/me.locationSize,Re,P,Ge*te,(it+K/me.locationSize*tt)*te,ye)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<me.locationSize;Ee++)M(me.location+Ee,xe.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<me.locationSize;Ee++)y(me.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Ee=0;Ee<me.locationSize;Ee++)z(me.location+Ee,K/me.locationSize,Re,P,K*te,K/me.locationSize*Ee*te,ye)}}else if(H!==void 0){const P=H[$];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(me.location,P);break;case 3:a.vertexAttrib3fv(me.location,P);break;case 4:a.vertexAttrib4fv(me.location,P);break;default:a.vertexAttrib1fv(me.location,P)}}}}I()}function O(){N();for(const V in r){const j=r[V];for(const ce in j){const ue=j[ce];for(const q in ue){const F=ue[q];for(const H in F)g(F[H].object),delete F[H];delete ue[q]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const j=r[V.id];for(const ce in j){const ue=j[ce];for(const q in ue){const F=ue[q];for(const H in F)g(F[H].object),delete F[H];delete ue[q]}}delete r[V.id]}function B(V){for(const j in r){const ce=r[j];for(const ue in ce){const q=ce[ue];if(q[V.id]===void 0)continue;const F=q[V.id];for(const H in F)g(F[H].object),delete F[H];delete q[V.id]}}}function T(V){for(const j in r){const ce=r[j],ue=V.isInstancedMesh===!0?V.id:0,q=ce[ue];if(q!==void 0){for(const F in q){const H=q[F];for(const $ in H)g(H[$].object),delete H[$];delete q[F]}delete ce[ue],Object.keys(ce).length===0&&delete r[j]}}}function N(){k(),u=!0,c!==o&&(c=o,d(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function O1(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function P1(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==fa&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Zi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ea&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(lt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:R,maxSamples:O,samples:L}}function I1(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new rr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):d();else{const I=c?0:r,z=I*4;let R=M.clippingState||null;m.value=R,R=g(E,v,z,x);for(let O=0;O!==z;++O)R[O]=i[O];M.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const M=x+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,R=x;z!==w;++z,R+=4)u.copy(_[z]).applyMatrix4(I,h),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Bs=4,ov=[.125,.215,.35,.446,.526,.582],lr=20,F1=256,_l=new Ax,lv=new Nt;let ph=null,mh=0,gh=0,_h=!1;const B1=new ee;class cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=B1}=c;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===dr||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:ns,format:fa,colorSpace:Su,depthBuffer:!1},o=uv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z1(c)),this._blurMaterial=G1(c,e,i),this._ggxMaterial=H1(c,e,i)}return o}_compileMaterial(e){const i=new Qi(new Ji,e);this._renderer.compile(i,_l)}_sceneToCubeUV(e,i,r,o,c){const m=new ji(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(lv),_.toneMapping=Ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new Nl,new Dp({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,M=!0):(y.color.copy(lv),M=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):R===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const O=this._cubeSize;co(o,R*O,z>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===dr||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;co(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,_l)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-Bs?r-E+Bs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=E-i,co(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,_l),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,co(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,_l)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*lr-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):lr;y>lr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${lr}`);const M=[];let I=0;for(let B=0;B<lr;++B){const T=B/w,N=Math.exp(-T*T/2);M.push(N),B===0?I+=N:B<y&&(I+=2*N)}for(let B=0;B<M.length;B++)M[B]=M[B]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:z}=this;v.dTheta.value=E,v.mipInt.value=z-r;const R=this._sizeLods[o],O=3*R*(o>z-Bs?o-z+Bs:0),L=4*(this._cubeSize-R);co(i,O,L,3*R,2*R),m.setRenderTarget(i),m.render(_,_l)}}function z1(a){const e=[],i=[],r=[];let o=a;const c=a-Bs+1+ov.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Bs?m=ov[u-a+Bs-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,w=3,y=2,M=1,I=new Float32Array(w*E*x),z=new Float32Array(y*E*x),R=new Float32Array(M*E*x);for(let L=0;L<x;L++){const B=L%3*2/3-1,T=L>2?0:-1,N=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];I.set(N,w*E*L),z.set(v,y*E*L);const k=[L,L,L,L,L,L];R.set(k,M*E*L)}const O=new Ji;O.setAttribute("position",new Ra(I,w)),O.setAttribute("uv",new Ra(z,y)),O.setAttribute("faceIndex",new Ra(R,M)),r.push(new Qi(O,null)),o>Bs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function uv(a,e,i){const r=new Aa(a,e,i);return r.texture.mapping=Au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function co(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function H1(a,e,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function G1(a,e,i){const r=new Float32Array(lr),o=new ee(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function fv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function dv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}class wx extends Aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Nl(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ei,blending:$a});c.uniforms.tEquirect.value=i;const u=new Qi(o,c),h=i.minFilter;return i.minFilter===Fs&&(i.minFilter=On),new YE(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function V1(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Hd||x===Gd)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const w=new wx(E.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===Hd||x===Gd,w=x===dr||x===So;if(E||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new cv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return E&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new cv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Hd?v.mapping=dr:x===Gd&&(v.mapping=So),v}function m(v){let x=0;const E=6;for(let w=0;w<E;w++)v[w]!==void 0&&x++;return x===E}function d(v){const x=v.target;x.removeEventListener("dispose",d);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function k1(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&mo("WebGLRenderer: "+r+" extension not supported."),o}}}function X1(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,E=_.attributes.position;let w=0;if(E===void 0)return;if(x!==null){const I=x.array;w=x.version;for(let z=0,R=I.length;z<R;z+=3){const O=I[z+0],L=I[z+1],B=I[z+2];v.push(O,L,L,B,B,O)}}else{const I=E.array;w=E.version;for(let z=0,R=I.length/3-1;z<R;z+=3){const O=z+0,L=z+1,B=z+2;v.push(O,L,L,B,B,O)}}const y=new(E.count>=65535?xx:vx)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function W1(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function q1(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function Y1(a,e,i){const r=new WeakMap,o=new Sn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let k=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var x=k;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let O=h.attributes.position.count*R,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*L*4*_),T=new mx(B,O,L,_);T.type=Ea,T.needsUpdate=!0;const N=R*4;for(let V=0;V<_;V++){const j=M[V],ce=I[V],ue=z[V],q=O*L*4*V;for(let F=0;F<j.count;F++){const H=F*N;E===!0&&(o.fromBufferAttribute(j,F),B[q+H+0]=o.x,B[q+H+1]=o.y,B[q+H+2]=o.z,B[q+H+3]=0),w===!0&&(o.fromBufferAttribute(ce,F),B[q+H+4]=o.x,B[q+H+5]=o.y,B[q+H+6]=o.z,B[q+H+7]=0),y===!0&&(o.fromBufferAttribute(ue,F),B[q+H+8]=o.x,B[q+H+9]=o.y,B[q+H+10]=o.z,B[q+H+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new zt(O,L)},r.set(h,v),h.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function j1(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const Z1={[$v]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function K1(a,e,i,r,o,c){const u=new Aa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Mo(e,i):void 0}),h=new Aa(e,i,{type:ns,depthBuffer:!1,stencilBuffer:!1}),m=new Ji;m.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const d=new XE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Qi(m,d),_=new Ax(-1,1,1,-1,0,1);let v=null,x=null,E=!1,w,y=null,M=[],I=!1;this.setSize=function(z,R){u.setSize(z,R),h.setSize(z,R);for(let O=0;O<M.length;O++){const L=M[O];L.setSize&&L.setSize(z,R)}},this.setEffects=function(z){M=z,I=M.length>0&&M[0].isRenderPass===!0;const R=u.width,O=u.height;for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(R,O)}},this.begin=function(z,R){if(E||z.toneMapping===Ta&&M.length===0)return!1;if(y=R,R!==null){const O=R.width,L=R.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return I===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=Ta,!0},this.hasRenderPass=function(){return I},this.end=function(z,R){z.toneMapping=w,E=!0;let O=u,L=h;for(let B=0;B<M.length;B++){const T=M[B];if(T.enabled!==!1&&(T.render(z,L,O,R),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(v!==z.outputColorSpace||x!==z.toneMapping){v=z.outputColorSpace,x=z.toneMapping,d.defines={},wt.getTransfer(v)===qt&&(d.defines.SRGB_TRANSFER="");const B=Z1[x];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const Dx=new ci,hp=new Mo(1,1),Lx=new mx,Nx=new vE,Ux=new Mx,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function To(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=hv[o];if(c===void 0&&(c=new Float32Array(o),hv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Bn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function zn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function wu(a,e){let i=pv[e];i===void 0&&(i=new Int32Array(e),pv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function Q1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function J1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;a.uniform2fv(this.addr,e),zn(i,e)}}function $1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Bn(i,e))return;a.uniform3fv(this.addr,e),zn(i,e)}}function eA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;a.uniform4fv(this.addr,e),zn(i,e)}}function tA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(Bn(i,r))return;_v.set(r),a.uniformMatrix2fv(this.addr,!1,_v),zn(i,r)}}function nA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(Bn(i,r))return;gv.set(r),a.uniformMatrix3fv(this.addr,!1,gv),zn(i,r)}}function iA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(Bn(i,r))return;mv.set(r),a.uniformMatrix4fv(this.addr,!1,mv),zn(i,r)}}function aA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function sA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;a.uniform2iv(this.addr,e),zn(i,e)}}function rA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;a.uniform3iv(this.addr,e),zn(i,e)}}function oA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;a.uniform4iv(this.addr,e),zn(i,e)}}function lA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function cA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;a.uniform2uiv(this.addr,e),zn(i,e)}}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;a.uniform3uiv(this.addr,e),zn(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;a.uniform4uiv(this.addr,e),zn(i,e)}}function dA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?Ap:Tp,c=hp):c=Dx,i.setTexture2D(e||c,o)}function hA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Nx,o)}function pA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Ux,o)}function mA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Lx,o)}function gA(a){switch(a){case 5126:return Q1;case 35664:return J1;case 35665:return $1;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return sA;case 35668:case 35672:return rA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function _A(a,e){a.uniform1fv(this.addr,e)}function vA(a,e){const i=To(e,this.size,2);a.uniform2fv(this.addr,i)}function xA(a,e){const i=To(e,this.size,3);a.uniform3fv(this.addr,i)}function SA(a,e){const i=To(e,this.size,4);a.uniform4fv(this.addr,i)}function MA(a,e){const i=To(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function yA(a,e){const i=To(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function EA(a,e){const i=To(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function bA(a,e){a.uniform1iv(this.addr,e)}function TA(a,e){a.uniform2iv(this.addr,e)}function AA(a,e){a.uniform3iv(this.addr,e)}function RA(a,e){a.uniform4iv(this.addr,e)}function CA(a,e){a.uniform1uiv(this.addr,e)}function wA(a,e){a.uniform2uiv(this.addr,e)}function DA(a,e){a.uniform3uiv(this.addr,e)}function LA(a,e){a.uniform4uiv(this.addr,e)}function NA(a,e,i){const r=this.cache,o=e.length,c=wu(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=hp:u=Dx;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function UA(a,e,i){const r=this.cache,o=e.length,c=wu(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Nx,c[u])}function OA(a,e,i){const r=this.cache,o=e.length,c=wu(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Ux,c[u])}function PA(a,e,i){const r=this.cache,o=e.length,c=wu(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Lx,c[u])}function IA(a){switch(a){case 5126:return _A;case 35664:return vA;case 35665:return xA;case 35666:return SA;case 35674:return MA;case 35675:return yA;case 35676:return EA;case 5124:case 35670:return bA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return wA;case 36295:return DA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}class FA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=gA(i.type)}}class BA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IA(i.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function vv(a,e){a.seq.push(e),a.map[e.id]=e}function HA(a,e,i){const r=a.name,o=r.length;for(vh.lastIndex=0;;){const c=vh.exec(r),u=vh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){vv(i,d===void 0?new FA(h,a,e):new BA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new zA(h),vv(i,_)),i=_}}}class gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);HA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function xv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const GA=37297;let VA=0;function kA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const Sv=new ut;function XA(a){wt._getMatrix(Sv,wt.workingColorSpace,a);const e=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(a)){case Mu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Mv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+kA(a.getShaderSource(e),h)}else return c}function WA(a,e){const i=XA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const qA={[$v]:"Linear",[ex]:"Reinhard",[tx]:"Cineon",[nx]:"ACESFilmic",[ax]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function YA(a,e){const i=qA[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const cu=new ee;function jA(){wt.getLuminanceCoefficients(cu);const a=cu.x.toFixed(4),e=cu.y.toFixed(4),i=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function KA(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function QA(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function Ml(a){return a!==""}function yv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ev(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(a){return a.replace(JA,e2)}const $A=new Map;function e2(a,e){let i=_t[e];if(i===void 0){const r=$A.get(e);if(r!==void 0)i=_t[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pp(i)}const t2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(a){return a.replace(t2,n2)}function n2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Tv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const i2={[fu]:"SHADOWMAP_TYPE_PCF",[xl]:"SHADOWMAP_TYPE_VSM"};function a2(a){return i2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s2={[dr]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function r2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":s2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const o2={[So]:"ENVMAP_MODE_REFRACTION"};function l2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":o2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c2={[Jv]:"ENVMAP_BLENDING_MULTIPLY",[Iy]:"ENVMAP_BLENDING_MIX",[Fy]:"ENVMAP_BLENDING_ADD"};function u2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":c2[a.combine]||"ENVMAP_BLENDING_NONE"}function f2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function d2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=a2(i),d=r2(i),g=l2(i),_=u2(i),v=f2(i),x=ZA(i),E=KA(c),w=o.createProgram();let y,M,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ml).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ml).join(`
`),M.length>0&&(M+=`
`)):(y=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),M=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ta?"#define TONE_MAPPING":"",i.toneMapping!==Ta?_t.tonemapping_pars_fragment:"",i.toneMapping!==Ta?YA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,WA("linearToOutputTexel",i.outputColorSpace),jA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ml).join(`
`)),u=pp(u),u=yv(u,i),u=Ev(u,i),h=pp(h),h=yv(h,i),h=Ev(h,i),u=bv(u),h=bv(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=I+y+u,R=I+M+h,O=xv(o,o.VERTEX_SHADER,z),L=xv(o,o.FRAGMENT_SHADER,R);o.attachShader(w,O),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(V){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(O)||"",ue=o.getShaderInfoLog(L)||"",q=j.trim(),F=ce.trim(),H=ue.trim();let $=!0,me=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,L);else{const xe=Mv(o,O,"vertex"),P=Mv(o,L,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+xe+`
`+P)}else q!==""?lt("WebGLProgram: Program Info Log:",q):(F===""||H==="")&&(me=!1);me&&(V.diagnostics={runnable:$,programLog:q,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(L),T=new gu(o,w),N=QA(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(w,GA)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let h2=0;class p2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new m2(e),i.set(e,r)),r}}class m2{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}}function g2(a){return a===hr||a===vu||a===xu}function _2(a,e,i,r,o,c){const u=new gx,h=new p2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,k,V,j,ce){const ue=V.fog,q=j.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),me=$&&$.mapping===Au?$.image.height:null,xe=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=P!==void 0?P.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Te,Re,te,ye;if(xe){const We=Ma[xe];Te=We.vertexShader,Re=We.fragmentShader}else{Te=T.vertexShader,Re=T.fragmentShader;const We=h.getVertexShaderStage(T),$t=h.getFragmentShaderStage(T);h.update(T,We,$t),te=We.id,ye=$t.id}const Ee=a.getRenderTarget(),Ge=a.state.buffers.depth.getReversed(),it=j.isInstancedMesh===!0,tt=j.isBatchedMesh===!0,Yt=!!T.map,ft=!!T.matcap,vt=!!$,mt=!!T.aoMap,dt=!!T.lightMap,on=!!T.bumpMap&&T.wireframe===!1,ln=!!T.normalMap,nn=!!T.displacementMap,pn=!!T.emissiveMap,Ut=!!T.metalnessMap,an=!!T.roughnessMap,Z=T.anisotropy>0,Ht=T.clearcoat>0,xt=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,Q=T.transmission>0,ae=Z&&!!T.anisotropyMap,he=Ht&&!!T.clearcoatMap,Ae=Ht&&!!T.clearcoatNormalMap,Ne=Ht&&!!T.clearcoatRoughnessMap,pe=U&&!!T.iridescenceMap,de=U&&!!T.iridescenceThicknessMap,we=b&&!!T.sheenColorMap,He=b&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Le=!!T.specularColorMap,$e=!!T.specularIntensityMap,Ke=Q&&!!T.transmissionMap,ot=Q&&!!T.thicknessMap,W=!!T.gradientMap,Ce=!!T.alphaMap,_e=T.alphaTest>0,Ue=!!T.alphaHash,Fe=!!T.extensions;let be=Ta;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=a.toneMapping);const je={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Re,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:tt,batchingColor:tt&&j._colorsTexture!==null,instancing:it,instancingColor:it&&j.instanceColor!==null,instancingMorph:it&&j.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:ft,envMap:vt,envMapMode:vt&&$.mapping,envMapCubeUVHeight:me,aoMap:mt,lightMap:dt,bumpMap:on,normalMap:ln,displacementMap:nn,emissiveMap:pn,normalMapObjectSpace:ln&&T.normalMapType===Hy,normalMapTangentSpace:ln&&T.normalMapType===U_,packedNormalMap:ln&&T.normalMapType===U_&&g2(T.normalMap.format),metalnessMap:Ut,roughnessMap:an,anisotropy:Z,anisotropyMap:ae,clearcoat:Ht,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ne,dispersion:xt,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:de,sheen:b,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Le,specularIntensityMap:$e,transmission:Q,transmissionMap:Ke,thicknessMap:ot,gradientMap:W,opaque:T.transparent===!1&&T.blending===po&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:_e,alphaHash:Ue,combine:T.combine,mapUv:Yt&&E(T.map.channel),aoMapUv:mt&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:on&&E(T.bumpMap.channel),normalMapUv:ln&&E(T.normalMap.channel),displacementMapUv:nn&&E(T.displacementMap.channel),emissiveMapUv:pn&&E(T.emissiveMap.channel),metalnessMapUv:Ut&&E(T.metalnessMap.channel),roughnessMapUv:an&&E(T.roughnessMap.channel),anisotropyMapUv:ae&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(T.sheenRoughnessMap.channel),specularMapUv:Oe&&E(T.specularMap.channel),specularColorMapUv:Le&&E(T.specularColorMap.channel),specularIntensityMapUv:$e&&E(T.specularIntensityMap.channel),transmissionMapUv:Ke&&E(T.transmissionMap.channel),thicknessMapUv:ot&&E(T.thicknessMap.channel),alphaMapUv:Ce&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ln||Z),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Yt||Ce),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&ln===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ge,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:pn&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ya,flipSided:T.side===Ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)N.push(k),N.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(M(N,T),I(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function I(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const N=x[T.type];let k;if(N){const V=Ma[N];k=GE.clone(V.uniforms)}else k=T.uniforms;return k}function R(T,N){let k=g.get(N);return k!==void 0?++k.usedTimes:(k=new d2(a,N,T,o),d.push(k),g.set(N,k)),k}function O(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:B}}function v2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function x2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Av(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Rv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,E,w,y,M){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=E,I.materialVariant=u(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=y,I.group=M),e++,I}function m(v,x,E,w,y,M){const I=h(v,x,E,w,y,M);E.transmission>0?r.push(I):E.transparent===!0?o.push(I):i.push(I)}function d(v,x,E,w,y,M){const I=h(v,x,E,w,y,M);E.transmission>0?r.unshift(I):E.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,E){i.length>1&&i.sort(v||x2),r.length>1&&r.sort(x||Av),o.length>1&&o.sort(x||Av),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function S2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Rv,a.set(r,[u])):o>=c.length?(u=new Rv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function M2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Nt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function y2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let E2=0;function b2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function T2(a){const e=new M2,i=y2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ee);const o=new ee,c=new Rn,u=new Rn;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,E=0,w=0,y=0,M=0,I=0,z=0,R=0,O=0,L=0,B=0;d.sort(b2);for(let N=0,k=d.length;N<k;N++){const V=d[N],j=V.color,ce=V.intensity,ue=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===hr?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=j.r*ce,_+=j.g*ce,v+=j.b*ce;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ce);B++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=V.shadow.matrix,I++}r.directional[x]=F,x++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(j).multiplyScalar(ce),F.distance=ue,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[w]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,H.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=q,R++}w++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(j).multiplyScalar(ce),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=V.shadow.matrix,z++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ce),F.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[M]=F,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==I||T.numPointShadows!==z||T.numSpotShadows!==R||T.numSpotMaps!==O||T.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=R+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=x,T.pointLength=E,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=I,T.numPointShadows=z,T.numSpotShadows=R,T.numSpotMaps=O,T.numLightProbes=B,r.version=E2++)}function m(d,g){let _=0,v=0,x=0,E=0,w=0;const y=g.matrixWorldInverse;for(let M=0,I=d.length;M<I;M++){const z=d[M];if(z.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(z.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(z.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(z.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Cv(a){const e=new T2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function A2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Cv(a),e.set(o,[h])):c>=u.length?(h=new Cv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const R2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C2=`uniform sampler2D shadow_pass;
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
}`,w2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],D2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],wv=new Rn,vl=new ee,xh=new ee;function L2(a,e,i){let r=new Sx;const o=new zt,c=new zt,u=new Sn,h=new WE,m=new qE,d={},g=i.maxTextureSize,_={[ts]:Ei,[Ei]:ts,[ya]:ya},v=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:R2,fragmentShader:C2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ji;E.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Qi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let M=this.type;this.render=function(L,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===_y&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fu);const N=a.getRenderTarget(),k=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),j=a.state;j.setBlending($a),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=M!==this.type;ce&&B.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(q=>q.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,q=L.length;ue<q;ue++){const F=L[ue],H=F.shadow;if(H===void 0){lt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xl){if(F.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Aa(o.x,o.y,{format:hr,type:ns,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Mo(o.x,o.y,Ea),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=is,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=$n,H.map.depthTexture.magFilter=$n}else F.isPointLight?(H.map=new wx(o.x),H.map.depthTexture=new FE(o.x,Ca)):(H.map=new Aa(o.x,o.y),H.map.depthTexture=new Mo(o.x,o.y,Ca)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=is,this.type===fu?(H.map.depthTexture.compareFunction=me?Ap:Tp,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=$n,H.map.depthTexture.magFilter=$n);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,P),a.clear();else{P===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(u)}if(F.isPointLight){const K=H.camera,Se=H.matrix,Te=F.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),vl.setFromMatrixPosition(F.matrixWorld),K.position.copy(vl),xh.copy(K.position),xh.add(w2[P]),K.up.copy(D2[P]),K.lookAt(xh),K.updateMatrixWorld(),Se.makeTranslation(-vl.x,-vl.y,-vl.z),wv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(wv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),R(B,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===xl&&I(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,k,V)};function I(L,B){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Aa(o.x,o.y,{format:hr,type:ns})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,T,x,w,null)}function z(L,B,T,N){let k=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)k=V;else if(k=T.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=k.uuid,ce=B.uuid;let ue=d[j];ue===void 0&&(ue={},d[j]=ue);let q=ue[ce];q===void 0&&(q=k.clone(),ue[ce]=q,B.addEventListener("dispose",O)),k=q}if(k.visible=B.visible,k.wireframe=B.wireframe,N===xl?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:_[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const j=a.properties.get(k);j.light=T}return k}function R(L,B,T,N,k){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===xl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),ue=L.material;if(Array.isArray(ue)){const q=ce.groups;for(let F=0,H=q.length;F<H;F++){const $=q[F],me=ue[$.materialIndex];if(me&&me.visible){const xe=z(L,me,N,k);L.onBeforeShadow(a,L,B,T,ce,xe,$),a.renderBufferDirect(T,null,ce,xe,L,$),L.onAfterShadow(a,L,B,T,ce,xe,$)}}}else if(ue.visible){const q=z(L,ue,N,k);L.onBeforeShadow(a,L,B,T,ce,q,null),a.renderBufferDirect(T,null,ce,q,L,null),L.onAfterShadow(a,L,B,T,ce,q,null)}}const j=L.children;for(let ce=0,ue=j.length;ce<ue;ce++)R(j[ce],B,T,N,k)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const N=d[T],k=L.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function N2(a,e){function i(){let W=!1;const Ce=new Sn;let _e=null;const Ue=new Sn(0,0,0,0);return{setMask:function(Fe){_e!==Fe&&!W&&(a.colorMask(Fe,Fe,Fe,Fe),_e=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,be,je,We,$t){$t===!0&&(Fe*=We,be*=We,je*=We),Ce.set(Fe,be,je,We),Ue.equals(Ce)===!1&&(a.clearColor(Fe,be,je,We),Ue.copy(Ce))},reset:function(){W=!1,_e=null,Ue.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,_e=null,Ue=null,Fe=null;return{setReversed:function(be){if(Ce!==be){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const We=Fe;Fe=null,this.setClear(We)}},getReversed:function(){return Ce},setTest:function(be){be?Ee(a.DEPTH_TEST):Ge(a.DEPTH_TEST)},setMask:function(be){_e!==be&&!W&&(a.depthMask(be),_e=be)},setFunc:function(be){if(Ce&&(be=Ky[be]),Ue!==be){switch(be){case Ch:a.depthFunc(a.NEVER);break;case wh:a.depthFunc(a.ALWAYS);break;case Dh:a.depthFunc(a.LESS);break;case xo:a.depthFunc(a.LEQUAL);break;case Lh:a.depthFunc(a.EQUAL);break;case Nh:a.depthFunc(a.GEQUAL);break;case Uh:a.depthFunc(a.GREATER);break;case Oh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ue=be}},setLocked:function(be){W=be},setClear:function(be){Fe!==be&&(Fe=be,Ce&&(be=1-be),a.clearDepth(be))},reset:function(){W=!1,_e=null,Ue=null,Fe=null,Ce=!1}}}function o(){let W=!1,Ce=null,_e=null,Ue=null,Fe=null,be=null,je=null,We=null,$t=null;return{setTest:function(Pt){W||(Pt?Ee(a.STENCIL_TEST):Ge(a.STENCIL_TEST))},setMask:function(Pt){Ce!==Pt&&!W&&(a.stencilMask(Pt),Ce=Pt)},setFunc:function(Pt,ei,ti){(_e!==Pt||Ue!==ei||Fe!==ti)&&(a.stencilFunc(Pt,ei,ti),_e=Pt,Ue=ei,Fe=ti)},setOp:function(Pt,ei,ti){(be!==Pt||je!==ei||We!==ti)&&(a.stencilOp(Pt,ei,ti),be=Pt,je=ei,We=ti)},setLocked:function(Pt){W=Pt},setClear:function(Pt){$t!==Pt&&(a.clearStencil(Pt),$t=Pt)},reset:function(){W=!1,Ce=null,_e=null,Ue=null,Fe=null,be=null,je=null,We=null,$t=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,E=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new Nt(0,0,0),N=0,k=!1,V=null,j=null,ce=null,ue=null,q=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=$>=1):me.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=$>=2);let xe=null,P={};const K=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),Te=new Sn().fromArray(K),Re=new Sn().fromArray(Se);function te(W,Ce,_e,Ue){const Fe=new Uint8Array(4),be=a.createTexture();a.bindTexture(W,be),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let je=0;je<_e;je++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ce,0,a.RGBA,1,1,Ue,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(Ce+je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return be}const ye={};ye[a.TEXTURE_2D]=te(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=te(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=te(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=te(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(xo),on(!1),ln(D_),Ee(a.CULL_FACE),mt($a);function Ee(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function Ge(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function it(W,Ce){return v[W]!==Ce?(a.bindFramebuffer(W,Ce),v[W]=Ce,W===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ce),W===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ce),!0):!1}function tt(W,Ce){let _e=E,Ue=!1;if(W){_e=x.get(Ce),_e===void 0&&(_e=[],x.set(Ce,_e));const Fe=W.textures;if(_e.length!==Fe.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let be=0,je=Fe.length;be<je;be++)_e[be]=a.COLOR_ATTACHMENT0+be;_e.length=Fe.length,Ue=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Ue=!0);Ue&&a.drawBuffers(_e)}function Yt(W){return w!==W?(a.useProgram(W),w=W,!0):!1}const ft={[or]:a.FUNC_ADD,[xy]:a.FUNC_SUBTRACT,[Sy]:a.FUNC_REVERSE_SUBTRACT};ft[My]=a.MIN,ft[yy]=a.MAX;const vt={[Ey]:a.ZERO,[by]:a.ONE,[Ty]:a.SRC_COLOR,[Ah]:a.SRC_ALPHA,[Ly]:a.SRC_ALPHA_SATURATE,[wy]:a.DST_COLOR,[Ry]:a.DST_ALPHA,[Ay]:a.ONE_MINUS_SRC_COLOR,[Rh]:a.ONE_MINUS_SRC_ALPHA,[Dy]:a.ONE_MINUS_DST_COLOR,[Cy]:a.ONE_MINUS_DST_ALPHA,[Ny]:a.CONSTANT_COLOR,[Uy]:a.ONE_MINUS_CONSTANT_COLOR,[Oy]:a.CONSTANT_ALPHA,[Py]:a.ONE_MINUS_CONSTANT_ALPHA};function mt(W,Ce,_e,Ue,Fe,be,je,We,$t,Pt){if(W===$a){y===!0&&(Ge(a.BLEND),y=!1);return}if(y===!1&&(Ee(a.BLEND),y=!0),W!==vy){if(W!==M||Pt!==k){if((I!==or||O!==or)&&(a.blendEquation(a.FUNC_ADD),I=or,O=or),Pt)switch(W){case po:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Th:a.blendFunc(a.ONE,a.ONE);break;case L_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case N_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ot("WebGLState: Invalid blending: ",W);break}else switch(W){case po:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Th:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case L_:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N_:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",W);break}z=null,R=null,L=null,B=null,T.set(0,0,0),N=0,M=W,k=Pt}return}Fe=Fe||Ce,be=be||_e,je=je||Ue,(Ce!==I||Fe!==O)&&(a.blendEquationSeparate(ft[Ce],ft[Fe]),I=Ce,O=Fe),(_e!==z||Ue!==R||be!==L||je!==B)&&(a.blendFuncSeparate(vt[_e],vt[Ue],vt[be],vt[je]),z=_e,R=Ue,L=be,B=je),(We.equals(T)===!1||$t!==N)&&(a.blendColor(We.r,We.g,We.b,$t),T.copy(We),N=$t),M=W,k=!1}function dt(W,Ce){W.side===ya?Ge(a.CULL_FACE):Ee(a.CULL_FACE);let _e=W.side===Ei;Ce&&(_e=!_e),on(_e),W.blending===po&&W.transparent===!1?mt($a):mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ue=W.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),pn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):Ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function on(W){V!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),V=W)}function ln(W){W!==my?(Ee(a.CULL_FACE),W!==j&&(W===D_?a.cullFace(a.BACK):W===gy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ge(a.CULL_FACE),j=W}function nn(W){W!==ce&&(H&&a.lineWidth(W),ce=W)}function pn(W,Ce,_e){W?(Ee(a.POLYGON_OFFSET_FILL),(ue!==Ce||q!==_e)&&(ue=Ce,q=_e,u.getReversed()&&(Ce=-Ce),a.polygonOffset(Ce,_e))):Ge(a.POLYGON_OFFSET_FILL)}function Ut(W){W?Ee(a.SCISSOR_TEST):Ge(a.SCISSOR_TEST)}function an(W){W===void 0&&(W=a.TEXTURE0+F-1),xe!==W&&(a.activeTexture(W),xe=W)}function Z(W,Ce,_e){_e===void 0&&(xe===null?_e=a.TEXTURE0+F-1:_e=xe);let Ue=P[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},P[_e]=Ue),(Ue.type!==W||Ue.texture!==Ce)&&(xe!==_e&&(a.activeTexture(_e),xe=_e),a.bindTexture(W,Ce||ye[W]),Ue.type=W,Ue.texture=Ce)}function Ht(){const W=P[xe];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xt(){try{a.compressedTexImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function b(){try{a.texSubImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Q(){try{a.texSubImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function ae(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Ae(){try{a.texStorage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Ne(){try{a.texStorage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function pe(){try{a.texImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function de(){try{a.texImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function we(W){return _[W]!==void 0?_[W]:a.getParameter(W)}function He(W,Ce){_[W]!==Ce&&(a.pixelStorei(W,Ce),_[W]=Ce)}function Oe(W){Te.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Te.copy(W))}function Le(W){Re.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Re.copy(W))}function $e(W,Ce){let _e=d.get(Ce);_e===void 0&&(_e=new WeakMap,d.set(Ce,_e));let Ue=_e.get(W);Ue===void 0&&(Ue=a.getUniformBlockIndex(Ce,W.name),_e.set(W,Ue))}function Ke(W,Ce){const Ue=d.get(Ce).get(W);m.get(Ce)!==Ue&&(a.uniformBlockBinding(Ce,Ue,W.__bindingPointIndex),m.set(Ce,Ue))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},xe=null,P={},v={},x=new WeakMap,E=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new Nt(0,0,0),N=0,k=!1,V=null,j=null,ce=null,ue=null,q=null,Te.set(0,0,a.canvas.width,a.canvas.height),Re.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:Ge,bindFramebuffer:it,drawBuffers:tt,useProgram:Yt,setBlending:mt,setMaterial:dt,setFlipSided:on,setCullFace:ln,setLineWidth:nn,setPolygonOffset:pn,setScissorTest:Ut,activeTexture:an,bindTexture:Z,unbindTexture:Ht,compressedTexImage2D:xt,compressedTexImage3D:U,texImage2D:pe,texImage3D:de,pixelStorei:He,getParameter:we,updateUBOMapping:$e,uniformBlockBinding:Ke,texStorage2D:Ae,texStorage3D:Ne,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Oe,viewport:Le,reset:ot}}function U2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new zt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,b){return E?new OffscreenCanvas(U,b):Eu("canvas")}function y(U,b,Q){let ae=1;const he=xt(U);if((he.width>Q||he.height>Q)&&(ae=Q/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ae=Math.floor(ae*he.width),Ne=Math.floor(ae*he.height);v===void 0&&(v=w(Ae,Ne));const pe=b?w(Ae,Ne):v;return pe.width=Ae,pe.height=Ne,pe.getContext("2d").drawImage(U,0,0,Ae,Ne),lt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Ne+")."),pe}else return"data"in U&&lt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function M(U){return U.generateMipmaps}function I(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(U,b,Q,ae,he,Ae=!1){if(U!==null){if(a[U]!==void 0)return a[U];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ne;ae&&(Ne=e.get("EXT_texture_norm16"),Ne||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===a.RED&&(Q===a.FLOAT&&(pe=a.R32F),Q===a.HALF_FLOAT&&(pe=a.R16F),Q===a.UNSIGNED_BYTE&&(pe=a.R8),Q===a.UNSIGNED_SHORT&&Ne&&(pe=Ne.R16_EXT),Q===a.SHORT&&Ne&&(pe=Ne.R16_SNORM_EXT)),b===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(pe=a.R8UI),Q===a.UNSIGNED_SHORT&&(pe=a.R16UI),Q===a.UNSIGNED_INT&&(pe=a.R32UI),Q===a.BYTE&&(pe=a.R8I),Q===a.SHORT&&(pe=a.R16I),Q===a.INT&&(pe=a.R32I)),b===a.RG&&(Q===a.FLOAT&&(pe=a.RG32F),Q===a.HALF_FLOAT&&(pe=a.RG16F),Q===a.UNSIGNED_BYTE&&(pe=a.RG8),Q===a.UNSIGNED_SHORT&&Ne&&(pe=Ne.RG16_EXT),Q===a.SHORT&&Ne&&(pe=Ne.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(pe=a.RG8UI),Q===a.UNSIGNED_SHORT&&(pe=a.RG16UI),Q===a.UNSIGNED_INT&&(pe=a.RG32UI),Q===a.BYTE&&(pe=a.RG8I),Q===a.SHORT&&(pe=a.RG16I),Q===a.INT&&(pe=a.RG32I)),b===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),Q===a.UNSIGNED_INT&&(pe=a.RGB32UI),Q===a.BYTE&&(pe=a.RGB8I),Q===a.SHORT&&(pe=a.RGB16I),Q===a.INT&&(pe=a.RGB32I)),b===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),Q===a.UNSIGNED_INT&&(pe=a.RGBA32UI),Q===a.BYTE&&(pe=a.RGBA8I),Q===a.SHORT&&(pe=a.RGBA16I),Q===a.INT&&(pe=a.RGBA32I)),b===a.RGB&&(Q===a.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGB16_EXT),Q===a.SHORT&&Ne&&(pe=Ne.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),b===a.RGBA){const de=Ae?Mu:wt.getTransfer(he);Q===a.FLOAT&&(pe=a.RGBA32F),Q===a.HALF_FLOAT&&(pe=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(pe=de===qt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGBA16_EXT),Q===a.SHORT&&Ne&&(pe=Ne.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(U,b){let Q;return U?b===null||b===Ca||b===Cl?Q=a.DEPTH24_STENCIL8:b===Ea?Q=a.DEPTH32F_STENCIL8:b===Rl&&(Q=a.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ca||b===Cl?Q=a.DEPTH_COMPONENT24:b===Ea?Q=a.DEPTH_COMPONENT32F:b===Rl&&(Q=a.DEPTH_COMPONENT16),Q}function L(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==$n&&U.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),N(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),V(b)}function N(U){const b=r.get(U);if(b.__webglInit===void 0)return;const Q=U.source,ae=x.get(Q);if(ae){const he=ae[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(U),Object.keys(ae).length===0&&x.delete(Q)}r.remove(U)}function k(U){const b=r.get(U);a.deleteTexture(b.__webglTexture);const Q=U.source,ae=x.get(Q);delete ae[b.__cacheKey],u.memory.textures--}function V(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let he=0;he<b.__webglFramebuffer[ae].length;he++)a.deleteFramebuffer(b.__webglFramebuffer[ae][he]);else a.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)a.deleteFramebuffer(b.__webglFramebuffer[ae]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=U.textures;for(let ae=0,he=Q.length;ae<he;ae++){const Ae=r.get(Q[ae]);Ae.__webglTexture&&(a.deleteTexture(Ae.__webglTexture),u.memory.textures--),r.remove(Q[ae])}r.remove(U)}let j=0;function ce(){j=0}function ue(){return j}function q(U){j=U}function F(){const U=j;return U>=o.maxTextures&&lt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function H(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function $(U,b){const Q=r.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const ae=U.image;if(ae===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Q,U,b);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+b)}function me(U,b){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ge(Q,U,b);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+b)}function xe(U,b){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ge(Q,U,b);return}i.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+b)}function P(U,b){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){it(Q,U,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+b)}const K={[Ph]:a.REPEAT,[ua]:a.CLAMP_TO_EDGE,[Ih]:a.MIRRORED_REPEAT},Se={[$n]:a.NEAREST,[By]:a.NEAREST_MIPMAP_NEAREST,[Vc]:a.NEAREST_MIPMAP_LINEAR,[On]:a.LINEAR,[Vd]:a.LINEAR_MIPMAP_NEAREST,[Fs]:a.LINEAR_MIPMAP_LINEAR},Te={[Gy]:a.NEVER,[qy]:a.ALWAYS,[Vy]:a.LESS,[Tp]:a.LEQUAL,[ky]:a.EQUAL,[Ap]:a.GEQUAL,[Xy]:a.GREATER,[Wy]:a.NOTEQUAL};function Re(U,b){if(b.type===Ea&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Vd||b.magFilter===Vc||b.magFilter===Fs||b.minFilter===On||b.minFilter===Vd||b.minFilter===Vc||b.minFilter===Fs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,K[b.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,K[b.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,K[b.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,Se[b.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$n||b.minFilter!==Vc&&b.minFilter!==Fs||b.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function te(U,b){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const ae=b.source;let he=x.get(ae);he===void 0&&(he={},x.set(ae,he));const Ae=H(b);if(Ae!==U.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),he[Ae].usedTimes++;const Ne=he[U.__cacheKey];Ne!==void 0&&(he[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(b)),U.__cacheKey=Ae,U.__webglTexture=he[Ae].texture}return Q}function ye(U,b,Q){return Math.floor(Math.floor(U/Q)/b)}function Ee(U,b,Q,ae){const Ae=U.updateRanges;if(Ae.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,Q,ae,b.data);else{Ae.sort((He,Oe)=>He.start-Oe.start);let Ne=0;for(let He=1;He<Ae.length;He++){const Oe=Ae[Ne],Le=Ae[He],$e=Oe.start+Oe.count,Ke=ye(Le.start,b.width,4),ot=ye(Oe.start,b.width,4);Le.start<=$e+1&&Ke===ot&&ye(Le.start+Le.count-1,b.width,4)===Ke?Oe.count=Math.max(Oe.count,Le.start+Le.count-Oe.start):(++Ne,Ae[Ne]=Le)}Ae.length=Ne+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),de=i.getParameter(a.UNPACK_SKIP_PIXELS),we=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let He=0,Oe=Ae.length;He<Oe;He++){const Le=Ae[He],$e=Math.floor(Le.start/4),Ke=Math.ceil(Le.count/4),ot=$e%b.width,W=Math.floor($e/b.width),Ce=Ke,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(a.UNPACK_SKIP_ROWS,W),i.texSubImage2D(a.TEXTURE_2D,0,ot,W,Ce,_e,Q,ae,b.data)}U.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,de),i.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function Ge(U,b,Q){let ae=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=a.TEXTURE_3D);const he=te(U,b),Ae=b.source;i.bindTexture(ae,U.__webglTexture,a.TEXTURE0+Q);const Ne=r.get(Ae);if(Ae.version!==Ne.__version||he===!0){if(i.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=wt.getPrimaries(wt.workingColorSpace),Ue=b.colorSpace===Is?null:wt.getPrimaries(b.colorSpace),Fe=b.colorSpace===Is||_e===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let de=y(b.image,!1,o.maxTextureSize);de=Ht(b,de);const we=c.convert(b.format,b.colorSpace),He=c.convert(b.type);let Oe=R(b.internalFormat,we,He,b.normalized,b.colorSpace,b.isVideoTexture);Re(ae,b);let Le;const $e=b.mipmaps,Ke=b.isVideoTexture!==!0,ot=Ne.__version===void 0||he===!0,W=Ae.dataReady,Ce=L(b,de);if(b.isDepthTexture)Oe=O(b.format===ur,b.type),ot&&(Ke?i.texStorage2D(a.TEXTURE_2D,1,Oe,de.width,de.height):i.texImage2D(a.TEXTURE_2D,0,Oe,de.width,de.height,0,we,He,null));else if(b.isDataTexture)if($e.length>0){Ke&&ot&&i.texStorage2D(a.TEXTURE_2D,Ce,Oe,$e[0].width,$e[0].height);for(let _e=0,Ue=$e.length;_e<Ue;_e++)Le=$e[_e],Ke?W&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,He,Le.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,we,He,Le.data);b.generateMipmaps=!1}else Ke?(ot&&i.texStorage2D(a.TEXTURE_2D,Ce,Oe,de.width,de.height),W&&Ee(b,de,we,He)):i.texImage2D(a.TEXTURE_2D,0,Oe,de.width,de.height,0,we,He,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&ot&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,Oe,$e[0].width,$e[0].height,de.depth);for(let _e=0,Ue=$e.length;_e<Ue;_e++)if(Le=$e[_e],b.format!==fa)if(we!==null)if(Ke){if(W)if(b.layerUpdates.size>0){const Fe=rv(Le.width,Le.height,b.format,b.type);for(const be of b.layerUpdates){const je=Le.data.subarray(be*Fe/Le.data.BYTES_PER_ELEMENT,(be+1)*Fe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,be,Le.width,Le.height,1,we,je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,de.depth,we,Le.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Le.width,Le.height,de.depth,0,Le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,de.depth,we,He,Le.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Le.width,Le.height,de.depth,0,we,He,Le.data)}else{Ke&&ot&&i.texStorage2D(a.TEXTURE_2D,Ce,Oe,$e[0].width,$e[0].height);for(let _e=0,Ue=$e.length;_e<Ue;_e++)Le=$e[_e],b.format!==fa?we!==null?Ke?W&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,Le.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,Le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Le.width,Le.height,we,He,Le.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,we,He,Le.data)}else if(b.isDataArrayTexture)if(Ke){if(ot&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,Oe,de.width,de.height,de.depth),W)if(b.layerUpdates.size>0){const _e=rv(de.width,de.height,b.format,b.type);for(const Ue of b.layerUpdates){const Fe=de.data.subarray(Ue*_e/de.data.BYTES_PER_ELEMENT,(Ue+1)*_e/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ue,de.width,de.height,1,we,He,Fe)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,He,de.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,we,He,de.data);else if(b.isData3DTexture)Ke?(ot&&i.texStorage3D(a.TEXTURE_3D,Ce,Oe,de.width,de.height,de.depth),W&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,He,de.data)):i.texImage3D(a.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,we,He,de.data);else if(b.isFramebufferTexture){if(ot)if(Ke)i.texStorage2D(a.TEXTURE_2D,Ce,Oe,de.width,de.height);else{let _e=de.width,Ue=de.height;for(let Fe=0;Fe<Ce;Fe++)i.texImage2D(a.TEXTURE_2D,Fe,Oe,_e,Ue,0,we,He,null),_e>>=1,Ue>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),de.parentNode!==_e){_e.appendChild(de),_.add(b),_e.onpaint=Ue=>{const Fe=Ue.changedElements;for(const be of _)Fe.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,de);else{const Fe=a.RGBA,be=a.RGBA,je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,be,je,de)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ke&&ot){const _e=xt($e[0]);i.texStorage2D(a.TEXTURE_2D,Ce,Oe,_e.width,_e.height)}for(let _e=0,Ue=$e.length;_e<Ue;_e++)Le=$e[_e],Ke?W&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,we,He,Le):i.texImage2D(a.TEXTURE_2D,_e,Oe,we,He,Le);b.generateMipmaps=!1}else if(Ke){if(ot){const _e=xt(de);i.texStorage2D(a.TEXTURE_2D,Ce,Oe,_e.width,_e.height)}W&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,He,de)}else i.texImage2D(a.TEXTURE_2D,0,Oe,we,He,de);M(b)&&I(ae),Ne.__version=Ae.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,Q){if(b.image.length!==6)return;const ae=te(U,b),he=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Q);const Ae=r.get(he);if(he.version!==Ae.__version||ae===!0){i.activeTexture(a.TEXTURE0+Q);const Ne=wt.getPrimaries(wt.workingColorSpace),pe=b.colorSpace===Is?null:wt.getPrimaries(b.colorSpace),de=b.colorSpace===Is||Ne===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const we=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Oe=[];for(let be=0;be<6;be++)!we&&!He?Oe[be]=y(b.image[be],!0,o.maxCubemapSize):Oe[be]=He?b.image[be].image:b.image[be],Oe[be]=Ht(b,Oe[be]);const Le=Oe[0],$e=c.convert(b.format,b.colorSpace),Ke=c.convert(b.type),ot=R(b.internalFormat,$e,Ke,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Ce=Ae.__version===void 0||ae===!0,_e=he.dataReady;let Ue=L(b,Le);Re(a.TEXTURE_CUBE_MAP,b);let Fe;if(we){W&&Ce&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ot,Le.width,Le.height);for(let be=0;be<6;be++){Fe=Oe[be].mipmaps;for(let je=0;je<Fe.length;je++){const We=Fe[je];b.format!==fa?$e!==null?W?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,We.width,We.height,$e,We.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,ot,We.width,We.height,0,We.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,We.width,We.height,$e,Ke,We.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,ot,We.width,We.height,0,$e,Ke,We.data)}}}else{if(Fe=b.mipmaps,W&&Ce){Fe.length>0&&Ue++;const be=xt(Oe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,ot,be.width,be.height)}for(let be=0;be<6;be++)if(He){W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Oe[be].width,Oe[be].height,$e,Ke,Oe[be].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,Oe[be].width,Oe[be].height,0,$e,Ke,Oe[be].data);for(let je=0;je<Fe.length;je++){const $t=Fe[je].image[be].image;W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,$t.width,$t.height,$e,Ke,$t.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,ot,$t.width,$t.height,0,$e,Ke,$t.data)}}else{W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,Ke,Oe[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,$e,Ke,Oe[be]);for(let je=0;je<Fe.length;je++){const We=Fe[je];W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,$e,Ke,We.image[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,ot,$e,Ke,We.image[be])}}}M(b)&&I(a.TEXTURE_CUBE_MAP),Ae.__version=he.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function tt(U,b,Q,ae,he,Ae){const Ne=c.convert(Q.format,Q.colorSpace),pe=c.convert(Q.type),de=R(Q.internalFormat,Ne,pe,Q.normalized,Q.colorSpace),we=r.get(b),He=r.get(Q);if(He.__renderTarget=b,!we.__hasExternalTextures){const Oe=Math.max(1,b.width>>Ae),Le=Math.max(1,b.height>>Ae);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,de,Oe,Le,b.depth,0,Ne,pe,null):i.texImage2D(he,Ae,de,Oe,Le,0,Ne,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,U),an(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,he,He.__webglTexture,0,Ut(b)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,he,He.__webglTexture,Ae),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Yt(U,b,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,U),b.depthBuffer){const ae=b.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ae=O(b.stencilBuffer,he),Ne=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;an(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(b),Ae,b.width,b.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(b),Ae,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ae,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ne,a.RENDERBUFFER,U)}else{const ae=b.textures;for(let he=0;he<ae.length;he++){const Ae=ae[he],Ne=c.convert(Ae.format,Ae.colorSpace),pe=c.convert(Ae.type),de=R(Ae.internalFormat,Ne,pe,Ae.normalized,Ae.colorSpace);an(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(b),de,b.width,b.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(b),de,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,de,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ft(U,b,Q){const ae=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Re(a.TEXTURE_CUBE_MAP,b.depthTexture);const we=c.convert(b.depthTexture.format),He=c.convert(b.depthTexture.type);let Oe;b.depthTexture.format===is?Oe=a.DEPTH_COMPONENT24:b.depthTexture.format===ur&&(Oe=a.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Oe,b.width,b.height,0,we,He,null)}}else $(b.depthTexture,0);const Ae=he.__webglTexture,Ne=Ut(b),pe=ae?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,de=b.depthTexture.format===ur?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===is)an(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,pe,Ae,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,de,pe,Ae,0);else if(b.depthTexture.format===ur)an(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,pe,Ae,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,de,pe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(U){const b=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=ae}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)ft(b.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?ft(b.__webglFramebuffer[0],U,0):ft(b.__webglFramebuffer,U,0)}else if(Q){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=a.createRenderbuffer(),Yt(b.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ae)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Yt(b.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ae)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(U,b,Q){const ae=r.get(U);b!==void 0&&tt(ae.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&vt(U)}function dt(U){const b=U.texture,Q=r.get(U),ae=r.get(b);U.addEventListener("dispose",T);const he=U.textures,Ae=U.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=b.version,u.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let de=0;de<b.mipmaps.length;de++)Q.__webglFramebuffer[pe][de]=a.createFramebuffer()}else Q.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ne)for(let pe=0,de=he.length;pe<de;pe++){const we=r.get(he[pe]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&an(U)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const de=he[pe];Q.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const we=c.convert(de.format,de.colorSpace),He=c.convert(de.type),Oe=R(de.internalFormat,we,He,de.normalized,de.colorSpace,U.isXRRenderTarget===!0),Le=Ut(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,Oe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),Re(a.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)tt(Q.__webglFramebuffer[pe][de],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de);else tt(Q.__webglFramebuffer[pe],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(b)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let pe=0,de=he.length;pe<de;pe++){const we=he[pe],He=r.get(we);let Oe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Oe,He.__webglTexture),Re(Oe,we),tt(Q.__webglFramebuffer,U,we,a.COLOR_ATTACHMENT0+pe,Oe,0),M(we)&&I(Oe)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,ae.__webglTexture),Re(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)tt(Q.__webglFramebuffer[de],U,b,a.COLOR_ATTACHMENT0,pe,de);else tt(Q.__webglFramebuffer,U,b,a.COLOR_ATTACHMENT0,pe,0);M(b)&&I(pe),i.unbindTexture()}U.depthBuffer&&vt(U)}function on(U){const b=U.textures;for(let Q=0,ae=b.length;Q<ae;Q++){const he=b[Q];if(M(he)){const Ae=z(U),Ne=r.get(he).__webglTexture;i.bindTexture(Ae,Ne),I(Ae),i.unbindTexture()}}}const ln=[],nn=[];function pn(U){if(U.samples>0){if(an(U)===!1){const b=U.textures,Q=U.width,ae=U.height;let he=a.COLOR_BUFFER_BIT;const Ae=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=r.get(U),pe=b.length>1;if(pe)for(let we=0;we<b.length;we++)i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const de=U.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let we=0;we<b.length;we++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[we]);const He=r.get(b[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,he,a.NEAREST),m===!0&&(ln.length=0,nn.length=0,ln.push(a.COLOR_ATTACHMENT0+we),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ln.push(Ae),nn.push(Ae),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,nn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ln))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<b.length;we++){i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[we]);const He=r.get(b[we]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,He,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Ut(U){return Math.min(o.maxSamples,U.samples)}function an(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(U){const b=u.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function Ht(U,b){const Q=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Su&&Q!==Is&&(wt.getTransfer(Q)===qt?(ae!==fa||he!==Zi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",Q)),b}function xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=ce,this.getTextureUnits=ue,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=me,this.setTexture3D=xe,this.setTextureCube=P,this.rebindTextures=mt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function O2(a,e){function i(r,o=Is){let c;const u=wt.getTransfer(o);if(r===Zi)return a.UNSIGNED_BYTE;if(r===Sp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Mp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===cx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ux)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===ox)return a.BYTE;if(r===lx)return a.SHORT;if(r===Rl)return a.UNSIGNED_SHORT;if(r===xp)return a.INT;if(r===Ca)return a.UNSIGNED_INT;if(r===Ea)return a.FLOAT;if(r===ns)return a.HALF_FLOAT;if(r===fx)return a.ALPHA;if(r===dx)return a.RGB;if(r===fa)return a.RGBA;if(r===is)return a.DEPTH_COMPONENT;if(r===ur)return a.DEPTH_STENCIL;if(r===hx)return a.RED;if(r===yp)return a.RED_INTEGER;if(r===hr)return a.RG;if(r===Ep)return a.RG_INTEGER;if(r===bp)return a.RGBA_INTEGER;if(r===du||r===hu||r===pu||r===mu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fh||r===Bh||r===zh||r===Hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===vu||r===qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Gh||r===Vh)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xh)return c.COMPRESSED_R11_EAC;if(r===Wh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===vu)return c.COMPRESSED_RG11_EAC;if(r===qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap||r===sp||r===rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Yh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$h)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ep)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===np)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ip)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ap)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===op||r===lp||r===cp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===op)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===up||r===fp||r===xu||r===dp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===up)return c.COMPRESSED_RED_RGTC1_EXT;if(r===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const P2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I2=`
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

}`;class F2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ex(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new $i({vertexShader:P2,fragmentShader:I2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new fr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B2 extends mr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,E=null;const w=typeof XRWebGLBinding<"u",y=new F2,M={},I=i.getContextAttributes();let z=null,R=null;const O=[],L=[],B=new zt;let T=null;const N=new ji;N.viewport=new Sn;const k=new ji;k.viewport=new Sn;const V=[N,k],j=new jE;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ye=O[te];return ye===void 0&&(ye=new jd,O[te]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(te){let ye=O[te];return ye===void 0&&(ye=new jd,O[te]=ye),ye.getGripSpace()},this.getHand=function(te){let ye=O[te];return ye===void 0&&(ye=new jd,O[te]=ye),ye.getHandSpace()};function q(te){const ye=L.indexOf(te.inputSource);if(ye===-1)return;const Ee=O[ye];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,d||u),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function F(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let te=0;te<O.length;te++){const ye=L[te];ye!==null&&(L[te]=null,O[te].disconnect(ye))}ce=null,ue=null,y.reset();for(const te in M)delete M[te];e.setRenderTarget(z),x=null,v=null,_=null,o=null,R=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ge=null,it=null;I.depth&&(it=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=I.stencil?ur:is,Ge=I.stencil?Cl:Ca);const tt={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(tt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new Aa(v.textureWidth,v.textureHeight,{format:fa,type:Zi,depthTexture:new Mo(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Aa(x.framebufferWidth,x.framebufferHeight,{format:fa,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(te){for(let ye=0;ye<te.removed.length;ye++){const Ee=te.removed[ye],Ge=L.indexOf(Ee);Ge>=0&&(L[Ge]=null,O[Ge].disconnect(Ee))}for(let ye=0;ye<te.added.length;ye++){const Ee=te.added[ye];let Ge=L.indexOf(Ee);if(Ge===-1){for(let tt=0;tt<O.length;tt++)if(tt>=L.length){L.push(Ee),Ge=tt;break}else if(L[tt]===null){L[tt]=Ee,Ge=tt;break}if(Ge===-1)break}const it=O[Ge];it&&it.connect(Ee)}}const $=new ee,me=new ee;function xe(te,ye,Ee){$.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const Ge=$.distanceTo(me),it=ye.projectionMatrix.elements,tt=Ee.projectionMatrix.elements,Yt=it[14]/(it[10]-1),ft=it[14]/(it[10]+1),vt=(it[9]+1)/it[5],mt=(it[9]-1)/it[5],dt=(it[8]-1)/it[0],on=(tt[8]+1)/tt[0],ln=Yt*dt,nn=Yt*on,pn=Ge/(-dt+on),Ut=pn*-dt;if(ye.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ut),te.translateZ(pn),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),it[10]===-1)te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const an=Yt+pn,Z=ft+pn,Ht=ln-Ut,xt=nn+(Ge-Ut),U=vt*ft/Z*an,b=mt*ft/Z*an;te.projectionMatrix.makePerspective(Ht,xt,U,b,an,Z),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,ye){ye===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ye.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ye=te.near,Ee=te.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),j.near=k.near=N.near=ye,j.far=k.far=N.far=Ee,(ce!==j.near||ue!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,ue=j.far),j.layers.mask=te.layers.mask|6,N.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;const Ge=te.parent,it=j.cameras;P(j,Ge);for(let tt=0;tt<it.length;tt++)P(it[tt],Ge);it.length===2?xe(j,N,k):j.projectionMatrix.copy(N.projectionMatrix),K(te,j,Ge)};function K(te,ye,Ee){Ee===null?te.matrix.copy(ye.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(ye.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=wl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(te){return M[te]};let Se=null;function Te(te,ye){if(g=ye.getViewerPose(d||u),E=ye,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let Ge=!1;Ee.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let ft=0;ft<Ee.length;ft++){const vt=Ee[ft];let mt=null;if(x!==null)mt=x.getViewport(vt);else{const on=_.getViewSubImage(v,vt);mt=on.viewport,ft===0&&(e.setRenderTargetTextures(R,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(R))}let dt=V[ft];dt===void 0&&(dt=new ji,dt.layers.enable(ft),dt.viewport=new Sn,V[ft]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(mt.x,mt.y,mt.width,mt.height),ft===0&&(j.matrix.copy(dt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(dt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ft=_.getDepthInformation(Ee[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(it&&it.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ft=0;ft<Ee.length;ft++){const vt=Ee[ft].camera;if(vt){let mt=M[vt];mt||(mt=new Ex,M[vt]=mt);const dt=_.getCameraImage(vt);mt.sourceTexture=dt}}}}for(let Ee=0;Ee<O.length;Ee++){const Ge=L[Ee],it=O[Ee];Ge!==null&&it!==void 0&&it.update(Ge,ye,d||u)}Se&&Se(te,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Re=new Rx;Re.setAnimationLoop(Te),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}}const z2=new Rn,Ox=new ut;Ox.set(-1,0,0,0,1,0,0,0,1);function H2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,bx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,I,z,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,R)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,I,z):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Ei&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Ei&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const I=e.get(M),z=I.envMap,R=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(z2.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Ox),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,I,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*I,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,I){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Ei&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const I=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function G2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,O){const L=O.program;r.uniformBlockBinding(R,L)}function d(R,O){let L=o[R.id];L===void 0&&(y(R),L=g(R),o[R.id]=L,R.addEventListener("dispose",I));const B=O.program;r.updateUBOMapping(R,B);const T=e.render.frame;c[R.id]!==T&&(v(R),c[R.id]=T)}function g(R){const O=_();R.__bindingPointIndex=O;const L=a.createBuffer(),B=R.__size,T=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const O=o[R.id],L=R.uniforms,B=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const k=L[T];if(Array.isArray(k))for(let V=0,j=k.length;V<j;V++)x(k[V],T,V,B);else x(k,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(R,O,L,B){if(w(R,O,L,B)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let k=0;for(let V=0;V<N.length;V++){const j=N[V],ce=M(j);E(j,R.__data,k),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,R.__data)}}function E(R,O,L){typeof R=="number"||typeof R=="boolean"?O[0]=R:R.isMatrix3?(O[0]=R.elements[0],O[1]=R.elements[1],O[2]=R.elements[2],O[3]=0,O[4]=R.elements[3],O[5]=R.elements[4],O[6]=R.elements[5],O[7]=0,O[8]=R.elements[6],O[9]=R.elements[7],O[10]=R.elements[8],O[11]=0):ArrayBuffer.isView(R)?O.set(new R.constructor(R.buffer,R.byteOffset,O.length)):R.toArray(O,L)}function w(R,O,L,B){const T=R.value,N=O+"_"+L;if(B[N]===void 0)return typeof T=="number"||typeof T=="boolean"?B[N]=T:ArrayBuffer.isView(T)?B[N]=T.slice():B[N]=T.clone(),!0;{const k=B[N];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return B[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(R){const O=R.uniforms;let L=0;const B=16;for(let N=0,k=O.length;N<k;N++){const V=Array.isArray(O[N])?O[N]:[O[N]];for(let j=0,ce=V.length;j<ce;j++){const ue=V[j],q=Array.isArray(ue.value)?ue.value:[ue.value];for(let F=0,H=q.length;F<H;F++){const $=q[F],me=M($),xe=L%B,P=xe%me.boundary,K=xe+P;L+=P,K!==0&&B-K<me.storage&&(L+=B-K),ue.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=me.storage}}}const T=L%B;return T>0&&(L+=B-T),R.__size=L,R.__cache={},this}function M(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(O.boundary=16,O.storage=R.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",R),O}function I(R){const O=R.target;O.removeEventListener("dispose",I);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function z(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:d,dispose:z}}const V2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function k2(){return Sa===null&&(Sa=new UE(V2,16,16,hr,ns),Sa.name="DFG_LUT",Sa.minFilter=On,Sa.magFilter=On,Sa.wrapS=ua,Sa.wrapT=ua,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class X2{constructor(e={}){const{canvas:i=jy(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Zi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const w=x,y=new Set([bp,Ep,yp]),M=new Set([Zi,Ca,Rl,Cl,Sp,Mp]),I=new Uint32Array(4),z=new Int32Array(4),R=new ee;let O=null,L=null;const B=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,j=null,ce=null,ue=null,q=null;this._outputColorSpace=mi;let F=0,H=0,$=null,me=-1,xe=null;const P=new Sn,K=new Sn;let Se=null;const Te=new Nt(0);let Re=0,te=i.width,ye=i.height,Ee=1,Ge=null,it=null;const tt=new Sn(0,0,te,ye),Yt=new Sn(0,0,te,ye);let ft=!1;const vt=new Sx;let mt=!1,dt=!1;const on=new Rn,ln=new ee,nn=new Sn,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function an(){return $===null?Ee:1}let Z=r;function Ht(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vp}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",ei,!1),Z===null){const Y="webgl2";if(Z=Ht(Y,A),Z===null)throw Ht(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let xt,U,b,Q,ae,he,Ae,Ne,pe,de,we,He,Oe,Le,$e,Ke,ot,W,Ce,_e,Ue,Fe,be;function je(){xt=new k1(Z),xt.init(),Ue=new O2(Z,xt),U=new P1(Z,xt,e,Ue),b=new N2(Z,xt),U.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),ue=Z.createFramebuffer(),q=Z.createFramebuffer(),Q=new q1(Z),ae=new v2,he=new U2(Z,xt,b,ae,U,Ue,Q),Ae=new V1(k),Ne=new KE(Z),Fe=new U1(Z,Ne),pe=new X1(Z,Ne,Q,Fe),de=new j1(Z,pe,Ne,Fe,Q),W=new Y1(Z,U,he),$e=new I1(ae),we=new _2(k,Ae,xt,U,Fe,$e),He=new H2(k,ae),Oe=new S2,Le=new A2(xt),ot=new N1(k,Ae,b,de,E,m),Ke=new L2(k,de,U),be=new G2(Z,Q,U,b),Ce=new O1(Z,xt,Q),_e=new W1(Z,xt,Q),Q.programs=we.programs,k.capabilities=U,k.extensions=xt,k.properties=ae,k.renderLists=Oe,k.shadowMap=Ke,k.state=b,k.info=Q}je(),w!==Zi&&(N=new K1(w,i.width,i.height,h,o,c));const We=new B2(k,Z);this.xr=We,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(te,ye,!1))},this.getSize=function(A){return A.set(te,ye)},this.setSize=function(A,Y,oe=!0){if(We.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,ye=Y,i.width=Math.floor(A*Ee),i.height=Math.floor(Y*Ee),oe===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(te*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(A,Y,oe){te=A,ye=Y,Ee=oe,i.width=Math.floor(A*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===Zi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,Y,oe,ne){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,Y,oe,ne),b.viewport(P.copy(tt).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,Y,oe,ne){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,Y,oe,ne),b.scissor(K.copy(Yt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){b.setScissorTest(ft=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,oe=!0){let ne=0;if(A){let ie=!1;if($!==null){const Ie=$.texture.format;ie=y.has(Ie)}if(ie){const Ie=$.texture.type,Xe=M.has(Ie),Pe=ot.getClearColor(),Ye=ot.getClearAlpha(),qe=Pe.r,Qe=Pe.g,at=Pe.b;Xe?(I[0]=qe,I[1]=Qe,I[2]=at,I[3]=Ye,Z.clearBufferuiv(Z.COLOR,0,I)):(z[0]=qe,z[1]=Qe,z[2]=at,z[3]=Ye,Z.clearBufferiv(Z.COLOR,0,z))}else ne|=Z.COLOR_BUFFER_BIT}Y&&(ne|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),ot.dispose(),Oe.dispose(),Le.dispose(),ae.dispose(),Ae.dispose(),de.dispose(),Fe.dispose(),be.dispose(),we.dispose(),We.dispose(),We.removeEventListener("sessionstart",Ve),We.removeEventListener("sessionend",rt),yt.stop()};function $t(A){A.preventDefault(),B_("WebGLRenderer: Context Lost."),V=!0}function Pt(){B_("WebGLRenderer: Context Restored."),V=!1;const A=Q.autoReset,Y=Ke.enabled,oe=Ke.autoUpdate,ne=Ke.needsUpdate,ie=Ke.type;je(),Q.autoReset=A,Ke.enabled=Y,Ke.autoUpdate=oe,Ke.needsUpdate=ne,Ke.type=ie}function ei(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ti(A){const Y=A.target;Y.removeEventListener("dispose",ti),as(Y)}function as(A){ss(A),ae.remove(A)}function ss(A){const Y=ae.get(A).programs;Y!==void 0&&(Y.forEach(function(oe){we.releaseProgram(oe)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,oe,ne,ie,Ie){Y===null&&(Y=pn);const Xe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Pe=bi(A,Y,oe,ne,ie);b.setMaterial(ne,Xe);let Ye=oe.index,qe=1;if(ne.wireframe===!0){if(Ye=pe.getWireframeAttribute(oe),Ye===void 0)return;qe=2}const Qe=oe.drawRange,at=oe.attributes.position;let et=Qe.start*qe,Dt=(Qe.start+Qe.count)*qe;Ie!==null&&(et=Math.max(et,Ie.start*qe),Dt=Math.min(Dt,(Ie.start+Ie.count)*qe)),Ye!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ye.count)):at!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,at.count));const sn=Dt-et;if(sn<0||sn===1/0)return;Fe.setup(ie,ne,Pe,oe,Ye);let Zt,Tt=Ce;if(Ye!==null&&(Zt=Ne.get(Ye),Tt=_e,Tt.setIndex(Zt)),ie.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*an()),Tt.setMode(Z.LINES)):Tt.setMode(Z.TRIANGLES);else if(ie.isLine){let It=ne.linewidth;It===void 0&&(It=1),b.setLineWidth(It*an()),ie.isLineSegments?Tt.setMode(Z.LINES):ie.isLineLoop?Tt.setMode(Z.LINE_LOOP):Tt.setMode(Z.LINE_STRIP)}else ie.isPoints?Tt.setMode(Z.POINTS):ie.isSprite&&Tt.setMode(Z.TRIANGLES);if(ie.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const It=ie._multiDrawStarts,Be=ie._multiDrawCounts,Pn=ie._multiDrawCount,St=Ye?Ne.get(Ye).bytesPerElement:1,_n=ae.get(ne).currentProgram.getUniforms();for(let ii=0;ii<Pn;ii++)_n.setValue(Z,"_gl_DrawID",ii),Tt.render(It[ii]/St,Be[ii])}else if(ie.isInstancedMesh)Tt.renderInstances(et,sn,ie.count);else if(oe.isInstancedBufferGeometry){const It=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Be=Math.min(oe.instanceCount,It);Tt.renderInstances(et,sn,Be)}else Tt.render(et,sn)};function da(A,Y,oe){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Ei,A.needsUpdate=!0,jt(A,Y,oe),A.side=ts,A.needsUpdate=!0,jt(A,Y,oe),A.side=ya):jt(A,Y,oe)}this.compile=function(A,Y,oe=null){oe===null&&(oe=A),L=Le.get(oe),L.init(Y),T.push(L),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==oe&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let Xe=0;Xe<Ie.length;Xe++){const Pe=Ie[Xe];da(Pe,oe,ie),ne.add(Pe)}else da(Ie,oe,ie),ne.add(Ie)}),L=T.pop(),ne},this.compileAsync=function(A,Y,oe=null){const ne=this.compile(A,Y,oe);return new Promise(ie=>{function Ie(){if(ne.forEach(function(Xe){ae.get(Xe).currentProgram.isReady()&&ne.delete(Xe)}),ne.size===0){ie(A);return}setTimeout(Ie,10)}xt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let wa=null;function De(A){wa&&wa(A)}function Ve(){yt.stop()}function rt(){yt.start()}const yt=new Rx;yt.setAnimationLoop(De),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){wa=A,We.setAnimationLoop(A),A===null?yt.stop():yt.start()},We.addEventListener("sessionstart",Ve),We.addEventListener("sessionend",rt),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(A,Y);const oe=We.enabled===!0&&We.isPresenting===!0,ne=N!==null&&($===null||oe)&&N.begin(k,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,Y,$),L=Le.get(A,T.length),L.init(Y),L.state.textureUnits=he.getTextureUnits(),T.push(L),on.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),vt.setFromProjectionMatrix(on,ba,Y.reversedDepth),dt=this.localClippingEnabled,mt=$e.init(this.clippingPlanes,dt),O=Oe.get(A,B.length),O.init(),B.push(O),We.enabled===!0&&We.isPresenting===!0){const Xe=k.xr.getDepthSensingMesh();Xe!==null&&cn(Xe,Y,-1/0,k.sortObjects)}cn(A,Y,0,k.sortObjects),O.finish(),k.sortObjects===!0&&O.sort(Ge,it,Y.reversedDepth),Ut=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ut&&ot.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&$e.beginShadows();const ie=L.state.shadowsArray;if(Ke.render(ie,A,Y),mt===!0&&$e.endShadows(),(ne&&N.hasRenderPass())===!1){const Xe=O.opaque,Pe=O.transmissive;if(L.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(Pe.length>0)for(let qe=0,Qe=Ye.length;qe<Qe;qe++){const at=Ye[qe];yn(Xe,Pe,A,at)}Ut&&ot.render(A);for(let qe=0,Qe=Ye.length;qe<Qe;qe++){const at=Ye[qe];Wn(O,A,at,at.viewport)}}else Pe.length>0&&yn(Xe,Pe,A,Y),Ut&&ot.render(A),Wn(O,A,Y)}$!==null&&H===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),ne&&N.end(k),A.isScene===!0&&A.onAfterRender(k,A,Y),Fe.resetDefaultState(),me=-1,xe=null,T.pop(),T.length>0?(L=T[T.length-1],he.setTextureUnits(L.state.textureUnits),mt===!0&&$e.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,j!==null&&j.renderEnd()};function cn(A,Y,oe,ne){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){ne&&nn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(on);const Xe=de.update(A),Pe=A.material;Pe.visible&&O.push(A,Xe,Pe,oe,nn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Xe=de.update(A),Pe=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nn.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),nn.copy(Xe.boundingSphere.center)),nn.applyMatrix4(A.matrixWorld).applyMatrix4(on)),Array.isArray(Pe)){const Ye=Xe.groups;for(let qe=0,Qe=Ye.length;qe<Qe;qe++){const at=Ye[qe],et=Pe[at.materialIndex];et&&et.visible&&O.push(A,Xe,et,oe,nn.z,at)}}else Pe.visible&&O.push(A,Xe,Pe,oe,nn.z,null)}}const Ie=A.children;for(let Xe=0,Pe=Ie.length;Xe<Pe;Xe++)cn(Ie[Xe],Y,oe,ne)}function Wn(A,Y,oe,ne){const{opaque:ie,transmissive:Ie,transparent:Xe}=A;L.setupLightsView(oe),mt===!0&&$e.setGlobalState(k.clippingPlanes,oe),ne&&b.viewport(P.copy(ne)),ie.length>0&&En(ie,Y,oe),Ie.length>0&&En(Ie,Y,oe),Xe.length>0&&En(Xe,Y,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function yn(A,Y,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const et=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new Aa(1,1,{generateMipmaps:!0,type:et?ns:Zi,minFilter:Fs,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[ne.id],Xe=ne.viewport||P;Ie.setSize(Xe.z*k.transmissionResolutionScale,Xe.w*k.transmissionResolutionScale);const Pe=k.getRenderTarget(),Ye=k.getActiveCubeFace(),qe=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(Te),Re=k.getClearAlpha(),Re<1&&k.setClearColor(16777215,.5),k.clear(),Ut&&ot.render(oe);const Qe=k.toneMapping;k.toneMapping=Ta;const at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),mt===!0&&$e.setGlobalState(k.clippingPlanes,ne),En(A,oe,ne),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),xt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,sn=Y.length;Dt<sn;Dt++){const Zt=Y[Dt],{object:Tt,geometry:It,material:Be,group:Pn}=Zt;if(Be.side===ya&&Tt.layers.test(ne.layers)){const St=Be.side;Be.side=Ei,Be.needsUpdate=!0,bn(Tt,oe,ne,It,Be,Pn),Be.side=St,Be.needsUpdate=!0,et=!0}}et===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}k.setRenderTarget(Pe,Ye,qe),k.setClearColor(Te,Re),at!==void 0&&(ne.viewport=at),k.toneMapping=Qe}function En(A,Y,oe){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Ie=A.length;ie<Ie;ie++){const Xe=A[ie],{object:Pe,geometry:Ye,group:qe}=Xe;let Qe=Xe.material;Qe.allowOverride===!0&&ne!==null&&(Qe=ne),Pe.layers.test(oe.layers)&&bn(Pe,Y,oe,Ye,Qe,qe)}}function bn(A,Y,oe,ne,ie,Ie){A.onBeforeRender(k,Y,oe,ne,ie,Ie),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(k,Y,oe,ne,A,Ie),ie.transparent===!0&&ie.side===ya&&ie.forceSinglePass===!1?(ie.side=Ei,ie.needsUpdate=!0,k.renderBufferDirect(oe,Y,ne,ie,A,Ie),ie.side=ts,ie.needsUpdate=!0,k.renderBufferDirect(oe,Y,ne,ie,A,Ie),ie.side=ya):k.renderBufferDirect(oe,Y,ne,ie,A,Ie),A.onAfterRender(k,Y,oe,ne,ie,Ie)}function jt(A,Y,oe){Y.isScene!==!0&&(Y=pn);const ne=ae.get(A),ie=L.state.lights,Ie=L.state.shadowsArray,Xe=ie.state.version,Pe=we.getParameters(A,ie.state,Ie,Y,oe,L.state.lightProbeGridArray),Ye=we.getProgramCacheKey(Pe);let qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ae.get(A.envMap||ne.environment,Qe),ne.envMapRotation=ne.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",ti),qe=new Map,ne.programs=qe);let at=qe.get(Ye);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===Xe)return ni(A,Pe),at}else Pe.uniforms=we.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,oe,Pe),A.onBeforeCompile(Pe,k),at=we.acquireProgram(Pe,Ye),qe.set(Ye,at),ne.uniforms=Pe.uniforms;const et=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=$e.uniform),ni(A,Pe),ne.needsLights=ha(A),ne.lightsStateVersion=Xe,ne.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=at,ne.uniformsList=null,at}function qn(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=gu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ni(A,Y){const oe=ae.get(A);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Yn(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ne=A.length;oe<ne;oe++){const ie=A[oe];if(ie.texture!==null&&ie.boundingBox.containsPoint(R))return ie}return null}function bi(A,Y,oe,ne,ie){Y.isScene!==!0&&(Y=pn),he.resetTextureUnits();const Ie=Y.fog,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Pe=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:wt.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,qe=Ae.get(ne.envMap||Xe,Ye),Qe=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!oe.morphAttributes.position,Dt=!!oe.morphAttributes.normal,sn=!!oe.morphAttributes.color;let Zt=Ta;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Zt=k.toneMapping);const Tt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,It=Tt!==void 0?Tt.length:0,Be=ae.get(ne),Pn=L.state.lights;if(mt===!0&&(dt===!0||A!==xe)){const Gt=A===xe&&ne.id===me;$e.setState(ne,A,Gt)}let St=!1;ne.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Pn.state.version||Be.outputColorSpace!==Pe||ie.isBatchedMesh&&Be.batching===!1||!ie.isBatchedMesh&&Be.batching===!0||ie.isBatchedMesh&&Be.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Be.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Be.instancing===!1||!ie.isInstancedMesh&&Be.instancing===!0||ie.isSkinnedMesh&&Be.skinning===!1||!ie.isSkinnedMesh&&Be.skinning===!0||ie.isInstancedMesh&&Be.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Be.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Be.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Be.instancingMorph===!1&&ie.morphTexture!==null||Be.envMap!==qe||ne.fog===!0&&Be.fog!==Ie||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==$e.numPlanes||Be.numIntersection!==$e.numIntersection)||Be.vertexAlphas!==Qe||Be.vertexTangents!==at||Be.morphTargets!==et||Be.morphNormals!==Dt||Be.morphColors!==sn||Be.toneMapping!==Zt||Be.morphTargetsCount!==It||!!Be.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Be.__version=ne.version);let _n=Be.currentProgram;St===!0&&(_n=jt(ne,Y,ie),j&&ne.isNodeMaterial&&j.onUpdateProgram(ne,_n,Be));let ii=!1,ui=!1,Hn=!1;const Lt=_n.getUniforms(),rn=Be.uniforms;if(b.useProgram(_n.program)&&(ii=!0,ui=!0,Hn=!0),ne.id!==me&&(me=ne.id,ui=!0),Be.needsLights){const Gt=Yn(L.state.lightProbeGridArray,ie);Be.lightProbeGrid!==Gt&&(Be.lightProbeGrid=Gt,ui=!0)}if(ii||xe!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(Z,"projectionMatrix",A.projectionMatrix),Lt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Ai=Lt.map.cameraPosition;Ai!==void 0&&Ai.setValue(Z,ln.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Lt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,ui=!0,Hn=!0)}if(Be.needsLights&&(Pn.state.directionalShadowMap.length>0&&Lt.setValue(Z,"directionalShadowMap",Pn.state.directionalShadowMap,he),Pn.state.spotShadowMap.length>0&&Lt.setValue(Z,"spotShadowMap",Pn.state.spotShadowMap,he),Pn.state.pointShadowMap.length>0&&Lt.setValue(Z,"pointShadowMap",Pn.state.pointShadowMap,he)),ie.isSkinnedMesh){Lt.setOptional(Z,ie,"bindMatrix"),Lt.setOptional(Z,ie,"bindMatrixInverse");const Gt=ie.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Lt.setValue(Z,"boneTexture",Gt.boneTexture,he))}ie.isBatchedMesh&&(Lt.setOptional(Z,ie,"batchingTexture"),Lt.setValue(Z,"batchingTexture",ie._matricesTexture,he),Lt.setOptional(Z,ie,"batchingIdTexture"),Lt.setValue(Z,"batchingIdTexture",ie._indirectTexture,he),Lt.setOptional(Z,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Lt.setValue(Z,"batchingColorTexture",ie._colorsTexture,he));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&W.update(ie,oe,_n),(ui||Be.receiveShadow!==ie.receiveShadow)&&(Be.receiveShadow=ie.receiveShadow,Lt.setValue(Z,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=k2()),ui){if(Lt.setValue(Z,"toneMappingExposure",k.toneMappingExposure),Be.needsLights&&kt(rn,Hn),Ie&&ne.fog===!0&&He.refreshFogUniforms(rn,Ie),He.refreshMaterialUniforms(rn,ne,Ee,ye,L.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const Gt=Be.lightProbeGrid;rn.probesSH.value=Gt.texture,rn.probesMin.value.copy(Gt.boundingBox.min),rn.probesMax.value.copy(Gt.boundingBox.max),rn.probesResolution.value.copy(Gt.resolution)}gu.upload(Z,qn(Be),rn,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(gu.upload(Z,qn(Be),rn,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(Z,"center",ie.center),Lt.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),Lt.setValue(Z,"normalMatrix",ie.normalMatrix),Lt.setValue(Z,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Gt=ne.uniformsGroups;for(let Ai=0,Bi=Gt.length;Ai<Bi;Ai++){const Da=Gt[Ai];be.update(Da,_n),be.bind(Da,_n)}}return _n}function kt(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ha(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Y,oe){const ne=ae.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=Y,ae.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const oe=ae.get(A);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,oe=0){$=A,F=Y,H=oe;let ne=null,ie=!1,Ie=!1;if(A){const Pe=ae.get(A);if(Pe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Z.FRAMEBUFFER,Pe.__webglFramebuffer),P.copy(A.viewport),K.copy(A.scissor),Se=A.scissorTest,b.viewport(P),b.scissor(K),b.setScissorTest(Se),me=-1;return}else if(Pe.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Pe.__hasExternalTextures)he.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&ae.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const qe=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?ne=qe[Y][oe]:ne=qe[Y],ie=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ne=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ne=qe[oe]:ne=qe,P.copy(A.viewport),K.copy(A.scissor),Se=A.scissorTest}else P.copy(tt).multiplyScalar(Ee).floor(),K.copy(Yt).multiplyScalar(Ee).floor(),Se=ft;if(oe!==0&&(ne=ce),b.bindFramebuffer(Z.FRAMEBUFFER,ne)&&b.drawBuffers(A,ne),b.viewport(P),b.scissor(K),b.setScissorTest(Se),ie){const Pe=ae.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,oe)}else if(Ie){const Pe=Y;for(let Ye=0;Ye<A.textures.length;Ye++){const qe=ae.get(A.textures[Ye]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,oe,Pe)}}else if(A!==null&&oe!==0){const Pe=ae.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Pe.__webglTexture,oe)}me=-1},this.readRenderTargetPixels=function(A,Y,oe,ne,ie,Ie,Xe,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye){b.bindFramebuffer(Z.FRAMEBUFFER,Ye);try{const qe=A.textures[Pe],Qe=qe.format,at=qe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable(Qe)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(at)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ne&&oe>=0&&oe<=A.height-ie&&Z.readPixels(Y,oe,ne,ie,Ue.convert(Qe),Ue.convert(at),Ie)}finally{const qe=$!==null?ae.get($).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,Y,oe,ne,ie,Ie,Xe,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye)if(Y>=0&&Y<=A.width-ne&&oe>=0&&oe<=A.height-ie){b.bindFramebuffer(Z.FRAMEBUFFER,Ye);const qe=A.textures[Pe],Qe=qe.format,at=qe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,et),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ie.byteLength,Z.STREAM_READ),Z.readPixels(Y,oe,ne,ie,Ue.convert(Qe),Ue.convert(at),0);const Dt=$!==null?ae.get($).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,Dt);const sn=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Zy(Z,sn,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,et),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ie),Z.deleteBuffer(et),Z.deleteSync(sn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,oe=0){const ne=Math.pow(2,-oe),ie=Math.floor(A.image.width*ne),Ie=Math.floor(A.image.height*ne),Xe=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;he.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,Xe,Pe,ie,Ie),b.unbindTexture()},this.copyTextureToTexture=function(A,Y,oe=null,ne=null,ie=0,Ie=0){let Xe,Pe,Ye,qe,Qe,at,et,Dt,sn;const Zt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(oe!==null)Xe=oe.max.x-oe.min.x,Pe=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,Qe=oe.min.y,at=oe.isBox3?oe.min.z:0;else{const rn=Math.pow(2,-ie);Xe=Math.floor(Zt.width*rn),Pe=Math.floor(Zt.height*rn),A.isDataArrayTexture?Ye=Zt.depth:A.isData3DTexture?Ye=Math.floor(Zt.depth*rn):Ye=1,qe=0,Qe=0,at=0}ne!==null?(et=ne.x,Dt=ne.y,sn=ne.z):(et=0,Dt=0,sn=0);const Tt=Ue.convert(Y.format),It=Ue.convert(Y.type);let Be;Y.isData3DTexture?(he.setTexture3D(Y,0),Be=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(he.setTexture2DArray(Y,0),Be=Z.TEXTURE_2D_ARRAY):(he.setTexture2D(Y,0),Be=Z.TEXTURE_2D),b.activeTexture(Z.TEXTURE0),b.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Pn=b.getParameter(Z.UNPACK_ROW_LENGTH),St=b.getParameter(Z.UNPACK_IMAGE_HEIGHT),_n=b.getParameter(Z.UNPACK_SKIP_PIXELS),ii=b.getParameter(Z.UNPACK_SKIP_ROWS),ui=b.getParameter(Z.UNPACK_SKIP_IMAGES);b.pixelStorei(Z.UNPACK_ROW_LENGTH,Zt.width),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Zt.height),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,qe),b.pixelStorei(Z.UNPACK_SKIP_ROWS,Qe),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,at);const Hn=A.isDataArrayTexture||A.isData3DTexture,Lt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const rn=ae.get(A),Ti=ae.get(Y),Gt=ae.get(rn.__renderTarget),Ai=ae.get(Ti.__renderTarget);b.bindFramebuffer(Z.READ_FRAMEBUFFER,Gt.__webglFramebuffer),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Bi=0;Bi<Ye;Bi++)Hn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,ie,at+Bi),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ae.get(Y).__webglTexture,Ie,sn+Bi)),Z.blitFramebuffer(qe,Qe,Xe,Pe,et,Dt,Xe,Pe,Z.DEPTH_BUFFER_BIT,Z.NEAREST);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||ae.has(A)){const rn=ae.get(A),Ti=ae.get(Y);b.bindFramebuffer(Z.READ_FRAMEBUFFER,ue),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Gt=0;Gt<Ye;Gt++)Hn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rn.__webglTexture,ie,at+Gt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,rn.__webglTexture,ie),Lt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ti.__webglTexture,Ie,sn+Gt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ti.__webglTexture,Ie),ie!==0?Z.blitFramebuffer(qe,Qe,Xe,Pe,et,Dt,Xe,Pe,Z.COLOR_BUFFER_BIT,Z.NEAREST):Lt?Z.copyTexSubImage3D(Be,Ie,et,Dt,sn+Gt,qe,Qe,Xe,Pe):Z.copyTexSubImage2D(Be,Ie,et,Dt,qe,Qe,Xe,Pe);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Be,Ie,et,Dt,sn,Xe,Pe,Ye,Tt,It,Zt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(Be,Ie,et,Dt,sn,Xe,Pe,Ye,Tt,Zt.data):Z.texSubImage3D(Be,Ie,et,Dt,sn,Xe,Pe,Ye,Tt,It,Zt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ie,et,Dt,Xe,Pe,Tt,It,Zt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ie,et,Dt,Zt.width,Zt.height,Tt,Zt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ie,et,Dt,Xe,Pe,Tt,It,Zt);b.pixelStorei(Z.UNPACK_ROW_LENGTH,Pn),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,St),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,_n),b.pixelStorei(Z.UNPACK_SKIP_ROWS,ii),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,ui),Ie===0&&Y.generateMipmaps&&Z.generateMipmap(Be),b.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,b.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const W2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",q2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",Y2="/assets/CXLMediumItalic-DYSp-DoC.otf",j2=4,Z2=5,Ja={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Px(a){return["discover","copy","supervise","isolate"][a]??"discover"}function K2(a){return Px(a)}function Q2(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function J2(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*Z2/j2);return{W:o,H:c}}function Ix(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function hn(a,e,i,r,o,c,u){Ix(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function Mn(a,e,i,r,o,c,u,h){Ix(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function Du(a,e,i,r,o,c){hn(a,e,i,r,o,c,"#0c0e12"),Mn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Lu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return Mn(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function Fx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function $2(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function eR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;hn(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),Mn(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function tR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;hn(a,e,u,r,h,8*o,"#050508"),Mn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),hn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function nR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;Mn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return hn(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),Mn(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function Np(a,e,i,r,o){const c=44*o;hn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),Mn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return hn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Ja.role} · ${Ja.didShort}`,e+8*o+u+8*o,i+32*o),c}function iR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),hn(a,e,i,r,c,h,m),Mn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),Mn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Ja.role} · ${Ja.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Ja.didShort,e+u,d);const g=28*o;return hn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),Mn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function aR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),hn(a,e,i,r,c,h,m),Mn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function sR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);hn(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);hn(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function rR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);hn(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),Mn(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function oR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;hn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),Mn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return hn(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),hn(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const yl=2,_o={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Dv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);hn(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),Mn(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function lR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:_o.riskScore},{label:"Rep",value:_o.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";hn(a,d,i,x,h,4*o,E),Mn(a,d,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function cR(a,e,i,r,o){const c=_o.receipts,u=22*o,h=14*o+c.length*u;return hn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),Mn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function uR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),hn(a,e,i,r,c,h,m),Mn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),Mn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return hn(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),Mn(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function fR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return hn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),Mn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function dR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%yl+yl)%yl,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];Du(a,e,i,r,o,m);let _=Lu(a,e,i,r,h,g.header,u);_=$2(a,e,_,r,h,g.segment,d+1,yl,u);const v=i+o-h;if(d===0){_+=Np(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=lR(a,e+h,_,r-h*2,u)+8*u);const E=[["SHARPE",_o.sharpe],["ROI",_o.roi],["RISK",_o.riskScore]];_+36*u<=v&&(_+=Dv(a,e+h,_,r-h*2,E,u)+8*u),_+70*u<=v&&cR(a,e+h,_,r-h*2,u);return}_+=uR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=fR(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Dv(a,e+h,_,r-h*2,x,u)}function hR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;Du(a,e,i,r,o,m);let d=Lu(a,e,i,r,h,"COPY TRADE",u);d=Fx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const E=6*u,w=r-h*2;let y=(w-E)/2,M=Math.min(y*190/316,y*.58);const I=Math.max(64*u,v-d-28*u);M>I&&(y=y*(I/M),M=I);const z=u*(y/((w-E)/2)),R=e+h+(w-(y*2+E))/2;aR(a,R,d,y,z),iR(a,R+y+E,d,y,z),d+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,B=(r-h*2-L*2)/3,T=32*u;d+T<=v&&(O.forEach(([N,k],V)=>{const j=e+h+V*(B+L);hn(a,j,d,B,T,6*u,"rgba(255,255,255,0.04)"),Mn(a,j,d,B,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,j+B/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(k,j+B/2,d+24*u)}),a.textAlign="left")}else d+=Np(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=sR(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&rR(a,e+h,d,r-h*2,u);oR(a,e+h,_,r-h*2,u)}const pR=2,mR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function gR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function _R(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Du(a,e,i,r,o,h);let m=Lu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,E=e+r-u-x,w=e+u+g+v+_/2,y=mR,M=4*c;y.forEach((I,z)=>{if(m>=d-8*c)return;const R=z===0,O=z===y.length-1,L=gR(I.status),B=8*c,T=6*c,N=7*c,k=8*c,V=I.showActions?22*c:0,j=I.showActions?5*c:0,ue=Math.max(B+2*c+T,N+4*c+k)+j+V+M;if(m+Math.min(ue,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${B}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+u+g,m+B),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+u+g,m+B+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+ue),a.stroke());const q=2.4*c;a.beginPath(),a.arc(w,m+5*c,q,0,Math.PI*2),a.fillStyle=R?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),R&&(a.beginPath(),a.arc(w,m+5*c,q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const F=4*c,H=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const $=I.statusLabel.toUpperCase(),me=a.measureText($).width+F*2,xe=N+H*2;hn(a,x,m,me,xe,3*c,L.bg),a.fillStyle=L.fg,a.fillText($,x+F,m+N+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${k}px "DM Mono", ui-monospace, monospace`;const P=m+xe+3*c+k;let K=I.action;if(I.pnl){const Se=`${I.action} · `;a.fillText(Se,x,P);const Te=a.measureText(Se).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${k}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,x+Te,P)}else{for(;K.length>8&&a.measureText(K).width>E;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,P)}if(I.showActions&&m+xe+3*c+k+j+V<=d){const Se=m+xe+3*c+k+j,Te=(E-5*c)/2;Mn(a,x,Se,Te,V,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Te/2,Se+V*.68),hn(a,x+Te+5*c,Se,Te,V,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Te+5*c+Te/2,Se+V*.68),a.textAlign="left"}m+=ue})}function vR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Du(a,e,i,r,o,h);let m=Lu(a,e,i,r,u,"FUND BUCKET",c);m=Fx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Np(a,e+u,m,r-u*2,c)+8*c,m+=eR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=tR(a,e+u,m,r-u*2,c)+6*c),nR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Bx(a,e,i,r,o,c,u=0){switch(e){case"discover":dR(a,i,r,o,c,u);break;case"copy":hR(a,i,r,o,c,u);break;case"supervise":_R(a,i,r,o,c);break;case"isolate":vR(a,i,r,o,c);break}}function xR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Bx(a,e,0,0,i,r,o)}function SR(a,e,i,r,o){const{W:c,H:u}=J2(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),d=m.createLinearGradient(0,0,0,u);d.addColorStop(0,"#080a0e"),d.addColorStop(.55,"#05070d"),d.addColorStop(1,"#030406"),m.fillStyle=d,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),x=c-g*2;let E=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,E+w*.85),E+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=Q2(m,a.description,x);m.fillText(M[0]??a.description,g,E+y),E+=Math.round(.07*u),E+=Math.round(.03*u);const I=g,z=E,R=x,O=Math.max(80*i,u-E-v);Bx(m,K2(e),I,z,R,O);const L=new yx(h);return L.colorSpace=mi,L.minFilter=Fs,L.generateMipmaps=!0,L}const Lv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",MR=50,_u=500,Sh=100,Nv=168;function yR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ER(){return Lv[Math.floor(Math.random()*Lv.length)]??"?"}function Uv(a){return Array.from(a).map(e=>{const i=Math.random()*(_u-Sh),r=Sh+Math.random()*(_u-i-Sh),o=Math.min(_u,i+r);return{original:e,start:i,end:o}})}function bR(a){return Math.min(1,Math.max(0,a))}function TR({text:a,className:e,scrollerRef:i}){const r=ke.useRef(null),o=ke.useRef(Uv(a)),c=yR();return ke.useEffect(()=>{o.current=Uv(a)},[a]),ke.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(_u,Math.max(0,x-MR));if(E===d&&d>=0)return;d=E;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let I=0;I<w.length;I++){const z=w[I],R=y[I];if(!R)continue;const O=Math.max(.001,z.end-z.start),L=bR((E-z.start)/O);if(L<1&&(M=!1),L<=0){R.textContent=z.original===" "?" ":z.original,R.style.transform="translateY(0)",R.style.opacity="1",R.style.visibility="visible";continue}if(L>=1){R.textContent=z.original===" "?" ":z.original,R.style.transform=`translateY(${-Nv}px)`,R.style.opacity="0",R.style.visibility="hidden";continue}R.textContent=ER(),R.style.transform=`translateY(${-L*Nv}px)`,R.style.opacity=String(1-L),R.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const AR="Enter to the agentic economy",fo=bh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),gn=fo.length,Qa=2.95,Al=6.9,Up=32,zx=4,Hx=5,mp=2.05,RR=1,CR=Qa*.55,Gx=.28,Vx=.35,wR=Gx+Vx,Mh=.85,DR=35,Ov=DR/60*1e3,LR=.1;function kx(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const NR=1.35,UR=.72,OR=.62,PR=.2,IR=14,FR=.42,BR=128,zR=12,HR=.004,GR=.0022,Pv=.12,VR=.88,kR=4,XR=32,WR=40,qR=50,YR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,jR=`
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
`,ZR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,KR=`
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
`,QR='"Reckk Heading", Georgia, "Times New Roman", serif',Xx="Morpheum Wordmark",Dl=`"${Xx}"`,JR=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function $R(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(Xx,`url(${Y2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Dl}`);const e=document.fonts.check(`normal 152px ${Dl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function e3(){if(!(typeof document>"u"||!document.fonts))try{await $R();const a=new FontFace("Reckk Title",`url(${q2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${W2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Dl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const sr="flow-intro-hide-chrome",t3=72,n3=120,yh=80;function i3(a){return a<=t3}const a3=280;function El(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Eh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;El(e)}function cr(a){const e=tn.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function ho(a){const e=Math.max(1,a),i=Math.max(1,gn*e*RR),r=Math.max(1,i/Math.max(1,gn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const s3=400,r3=10,o3=10,l3=6,c3=.5,u3=.5;function f3(a){return Math.max(2,Math.max(1,a)*.004)}function d3(a){const e=tn.clamp(a,0,1);return 1-Math.pow(1-e,3)}function h3(a,e){const{cardPx:i,titlePx:r}=ho(e),o=Math.max(1,gn-1),c=tn.clamp(Math.round(a),0,gn-1);return r+c/o*i}function p3(a,e,i){return a.offsetTop+h3(e,i)}function m3(a){const e=gn-1;return tn.clamp(Math.round(a),0,e)}function g3(a,e,i,r,o,c,u){if(o)return!1;const h=e*c3,m=i/Math.max(1,gn-1),d=r+m*u3;return!(a<h||a>d||c<u*.5)}function Wx(a,e){const i=a/Math.max(1,e),r=Up*Math.PI/180,o=2*Al*Math.tan(r/2),c=o*i,u=mp*zx/Hx,h=.992,m=h*o/mp,d=h*c/u;return tn.clamp(Math.min(m,d),.52,2.35)}function Iv(a,e,i){const r=kx(a),o=Wx(a,e),c=a/Math.max(1,e),u=Up*Math.PI/180,m=2*Al*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function _3(a,e){const i=a/Math.max(1,gn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function v3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function x3(a,e){const i=tn.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=cr(tn.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function S3(a,e,i,r=0){const o=gn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=tn.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=cr(tn.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function M3(a){return new $i({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:LR}},vertexShader:ZR,fragmentShader:KR,transparent:!0,depthWrite:!0,depthTest:!0,side:ts})}function y3(a,e){return a>1.5&&a<e-.5}function E3(a){return tn.clamp(540/Math.max(a,340),.2,.55)}function b3(a,e,i){const r=[],o=IR;for(let c=0;c<o;c++){const u=tn.clamp(a-c/Math.max(1,o-1)*FR,-.08,1.08),h=Math.sin(u*Math.PI*2*NR)*OR*i,m=Math.sin(u*Math.PI*2*UR)*PR,d=Pv+c/Math.max(1,o-1)*(VR-Pv),g=e-d;r.push(new ee(h,m,g))}return r}function T3(a,e,i,r){const o=a.length;if(o<2)return new Ji;const c=[],u=[],h=[],m=[],d=new ee,g=new ee,_=new ee,v=new ee(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const z=I/e*Math.PI*2,R=Math.cos(z),O=Math.sin(z),L=a[w];c.push(L.x+(R*g.x+O*_.x)*M,L.y+(R*g.y+O*_.y)*M,L.z+(R*g.z+O*_.z)*M),u.push(R*g.x+O*_.x,R*g.y+O*_.y,R*g.z+O*_.z),h.push(o===1?0:w/(o-1),I/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,I=M+1,z=M+x,R=z+1;m.push(M,z,I,I,z,R)}const E=new Ji;return E.setAttribute("position",new Ki(c,3)),E.setAttribute("normal",new Ki(u,3)),E.setAttribute("uv",new Ki(h,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Fv(a,e,i,r){const o={verb:a.verb,description:a.description};return SR(o,e,i,r,QR)}function Bv(a,e){const i=kx(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${Dl}`};g();const _=O=>{h.font=`normal ${O*r}px ${Dl}`;const L=h.measureText(m),B=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),k=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:B,right:T,width:B+T,ascent:N,descent:k}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,E=40*r+v,w=O=>{const L=_(O);return L.width+x*2<=o&&L.ascent+L.descent+E*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,I-y.ascent,M+y.right,I+y.descent);JR.forEach(O=>z.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,I),h.fillStyle=z,h.fillText(m,M,I);const R=new yx(u);return R.colorSpace=mi,R.minFilter=On,R.magFilter=On,R.generateMipmaps=!1,R}function zv(a,e){a.generateMipmaps=!1,a.minFilter=On,a.magFilter=On,a.wrapS=ua,a.wrapT=ua;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function A3(){const a=ke.useRef(null),e=ke.useRef(null),i=ke.useRef(null),r=ke.useRef(null),o=ke.useRef(!1),c=ke.useRef(null),u=ke.useCallback(()=>{var m;if(o.current)return;o.current=!0,(m=c.current)==null||m.call(c);const h=e.current;h==null||h.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(sr),Eh(),requestAnimationFrame(()=>{Eh(),requestAnimationFrame(()=>{Eh(),window.setTimeout(()=>{o.current=!1},100)})})},a3)},[]);return ke.useLayoutEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.location.hash.replace(/^#/,"");return h||m!==""&&m!=="flow"&&m!=="hero"||document.body.classList.add(sr),()=>{document.body.classList.remove(sr)}},[]),ke.useEffect(()=>{const h=m=>{if(m.key!=="Escape")return;const d=document.getElementById("hero");d&&d.getBoundingClientRect().top>8&&(m.preventDefault(),u())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[u]),ke.useEffect(()=>{const h=window.location.hash.replace(/^#/,"");h&&h!=="flow"&&h!=="hero"&&requestAnimationFrame(()=>{var m;(m=document.getElementById(h))==null||m.scrollIntoView({block:"start"})})},[]),ke.useEffect(()=>{const h=i.current,m=a.current;if(!h||!m)return;const d=h,g=m;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(sr);const E=r.current;E&&(E.style.height="0px");return}let x;return(async()=>{if(await e3(),_)return;const E=Math.min(window.devicePixelRatio,2),w=Math.max(320,d.clientWidth||window.innerWidth),y=Math.max(1,d.clientHeight||window.innerHeight),M=[],I=[],z=[],R=new Float64Array(gn).fill(-1);fo.forEach((De,Ve)=>{const rt=gn-1-Ve,yt=fo[rt],cn=Fv(yt,rt,E,w);z.push(cn);const Wn=M3(cn);M.push(Wn);const yn=mp,En=yn*zx/Hx,bn=new Qi(new fr(En,yn),Wn);bn.position.set(0,0,-Ve*Qa),bn.renderOrder=Ve,I.push(bn)});const O=Bv(E,w),L=new Dp({map:O,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:ya}),B=O.image.height/O.image.width,{w:T,h:N}=Iv(w,y,B),k=new Qi(new fr(T,N),L);k.position.set(0,0,-(gn-1)*Qa),k.renderOrder=WR;const V=new AE,j=new ji(Up,1,.08,120),ce=new X2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),ce.outputColorSpace=mi,ce.sortObjects=!0,d.appendChild(ce.domElement),zv(O,ce);const ue=new Sl;I.forEach(De=>ue.add(De)),ue.add(k),V.add(ue);const q=new $i({uniforms:{uStrength:{value:0}},vertexShader:YR,fragmentShader:jR,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Th}),F=new Qi(new Ji,q);F.frustumCulled=!1,F.renderOrder=qR,F.visible=!1,V.add(F);const H=fo.map(De=>new Nt(De.mood.mid)),$=H[0].clone();V.background=$;const me=0,xe=-(gn-1)*Qa,P=Al,K=-.1*Qa,Se=.1*Qa;function Te(De,Ve){const rt=De+Al;return(P-rt)/Ve}let Re=Math.max(1,d.clientHeight||window.innerHeight),te=!1,ye=window.innerWidth,Ee=!1,Ge=!1;function it(){return Math.max(1,window.innerHeight)}function tt(De){return Ee?De>n3&&(Ee=!1):i3(De)&&(Ee=!0),Ee}function Yt(){const De=r.current;if(!De)return;const{totalPx:Ve}=ho(Re),rt=Re*wR,cn=`${Math.max(Math.ceil(Ve+rt+Re*Mh+32),Math.ceil(Re*1.08))}px`;De.style.height!==cn&&(De.style.height=cn)}function ft(){const De=Math.max(1,Re),{totalPx:Ve}=ho(De),rt=Math.max(1,Ve),yt=me+K,cn=xe+Se-CR,yn=(yt-cn)/rt,En=Te(yt,yn),bn=Te(cn,yn);return{ih:De,totalPx:rt,scrollToWorldFactor:yn,minScroll:En,maxScroll:bn}}let{scrollToWorldFactor:vt,minScroll:mt,maxScroll:dt}=ft();const on=new Nt,ln=new Nt,nn=new Nt;function pn(){var En;const De=Math.max(320,d.clientWidth||window.innerWidth),Ve=Math.min(window.devicePixelRatio,2);z.forEach((bn,jt)=>{bn.dispose();const qn=gn-1-jt,ni=Fv(fo[qn],qn,Ve,De);z[jt]=ni,M[jt].uniforms.uMap.value=ni}),(En=L.map)==null||En.dispose();const rt=Bv(Ve,De);L.map=rt,L.needsUpdate=!0,zv(rt,ce);const yt=rt.image.height/rt.image.width,cn=Math.max(1,d.clientHeight||Re),{w:Wn,h:yn}=Iv(De,cn,yt);k.geometry.dispose(),k.geometry=new fr(Wn,yn)}function Ut(){const De=d.clientWidth,Ve=d.clientHeight;if(De<2||Ve<2)return;j.aspect=De/Ve,j.updateProjectionMatrix(),ce.setSize(De,Ve,!1),pn();const rt=ft();vt=rt.scrollToWorldFactor,mt=rt.minScroll,dt=rt.maxScroll,te||Yt()}function an(){te=!1,Re=it(),ye=window.innerWidth,Ut()}Ut(),requestAnimationFrame(()=>{_||pn()});let Z=0;function Ht(){var gr,_r;if(_)return;Z=requestAnimationFrame(Ht);const De=it(),Ve=document.getElementById("hero"),rt=Ve?Ve.getBoundingClientRect().top:0,yt=Ve?tt(rt):!0,{totalPx:cn}=ho(Re),Wn=g.getBoundingClientRect(),yn=Math.max(1,g.offsetHeight-Re),En=tn.clamp(-Wn.top,0,yn);if(!yt&&En<=cn){if(te=!1,Math.abs(De-Re)>yh){Re=De,Yt();const ht=ft();vt=ht.scrollToWorldFactor,mt=ht.minScroll,dt=ht.maxScroll}}else te=!0;const jt=Re,{cardPx:qn,titlePx:ni,totalPx:Yn}=ho(jt),bi=Math.max(1,g.offsetHeight-jt),kt=tn.clamp(-Wn.top,0,bi),ha=Math.min(kt,Yn),A=Math.max(1,Yn),Y=jt*Gx,oe=jt*Vx,ne=Y+oe,ie=kt-Yn,Ie=cr(tn.clamp(ie/Math.max(1,Y),0,1)),Xe=cr(tn.clamp((ie-Y)/Math.max(1,oe),0,1)),Pe=tn.mapLinear(qn,0,A,mt,dt),Ye=d.clientWidth,qe=d.clientHeight,Qe=Math.max(1,ni),at=ha<Qe,et=at?tn.clamp(ha/Qe,0,1):0,Dt=Math.max(0,ha-Qe),sn=Math.max(1,qn),Tt=tn.clamp(Dt/sn,0,1)*(gn-1),It=Wx(Ye,qe);let Be;at?Be=tn.mapLinear(ha,0,Qe,dt,Pe):Be=tn.mapLinear(ha,Qe,A,Pe,mt),Be=tn.clamp(Be,mt,dt);const Pn=_3(qn,jt),St=v3(Qe,jt),_n=x3(et,St),ii=gn-1;if(at)nn.copy(H[0]);else{const ht=Math.min(gn-2,Math.floor(Tt)),In=Math.min(ht+1,gn-1),Ri=cr(Tt-ht);on.copy(H[ht]),ln.copy(H[In]),nn.lerpColors(on,ln,Ri)}V.background=$.copy(nn);const ui=P-Be*vt;j.position.set(0,0,ui),j.lookAt(0,0,ui-Al);const Hn=Yn+ne;let Lt=0;if(bi>Hn&&kt>=Hn){const ht=Math.max(1,bi-Hn);Lt=cr(tn.clamp((kt-Hn)/ht,0,1))}const rn=Math.max(1,ne+jt*Mh),Ti=kt<=A?tn.clamp(kt/A,0,1):1+tn.clamp(ie/rn,0,1)*.45;if(y3(kt,bi)){const ht=b3(Ti,ui,E3(Ye)),Ri=new zE(ht,!1,"centripetal").getSpacedPoints(BR);if(Ri.length>=2){const Gn=T3(Ri,zR,HR,GR),ta=F.geometry.getAttribute("position"),Vn=Gn.getAttribute("position");if(ta&&Vn&&ta.count===Vn.count&&((gr=F.geometry.getIndex())==null?void 0:gr.count)===((_r=Gn.getIndex())==null?void 0:_r.count)&&ta&&Vn){ta.array.set(Vn.array),ta.needsUpdate=!0;const pa=F.geometry.getAttribute("normal"),na=Gn.getAttribute("normal");pa&&na&&(pa.array.set(na.array),pa.needsUpdate=!0);const si=F.geometry.getAttribute("uv"),vr=Gn.getAttribute("uv");si&&vr&&(si.array.set(vr.array),si.needsUpdate=!0),Gn.dispose()}else F.geometry.dispose(),F.geometry=Gn;F.visible=!0,q.uniforms.uStrength.value=.36*(1-Lt*.92)}else F.visible=!1,q.uniforms.uStrength.value=0}else F.visible=!1,q.uniforms.uStrength.value=0;const Ai=Math.floor((gn-1)/2),Bi=performance.now(),Da=tn.clamp(Pn,0,.999);for(let ht=0;ht<gn;ht++){if(at||Tt<=ht+1e-5||Tt<ht+Da){R[ht]=-1;continue}R[ht]<0&&(Tt>=ht+1-1e-5?R[ht]=Bi-Ov:R[ht]=Bi)}if(I.forEach((ht,In)=>{const Ri=-In*Qa,Gn=gn-1-In,ta=R[Gn];let Vn=ta<0?0:cr(tn.clamp((Bi-ta)/Ov,0,1));!at&&Gn===gn-1&&Xe>0&&(Vn=Math.max(Vn,Xe));let{opacity:ai}=S3(Tt,Gn,Pn,Vn);at&&In===ii&&(ai*=_n.lastCardOp,Vn=0);let pa=1,na=0;!at&&Gn===gn-1&&ai>.02&&Ie>0&&(pa=1-.28*Ie,na=-Qa*.32*Ie),ht.position.set(0,0,Ri+na),ht.scale.setScalar(It*pa);const si=M[In];si.uniforms.uOpacity.value=ai,si.uniforms.uWipe.value=Vn,si.depthWrite=ai>=.995&&Vn<.02,ht.visible=ai>.003&&Vn<.997,ht.renderOrder=In<=Ai?kR+In:XR+(In-Ai-1)}),k.position.set(0,0,-ii*Qa),k.scale.setScalar(It),L.opacity=at?_n.titleOp:0,L.depthWrite=L.opacity>=.995,k.visible=L.opacity>.003,!o.current){yt?Ge=!0:Ge&&kt<Yn-jt*.25&&(Ge=!1),document.body.classList.toggle(sr,!Ge);const ht=e.current;ht!=null&&ht.classList.contains("flow-intro__sticky--exit")&&!yt&&(ht.style.transition="none",ht.classList.remove("flow-intro__sticky--exit"),ht.offsetWidth,ht.style.transition="")}if(!te){const ht=ne+jt*Mh+32,In=Math.max(Math.ceil(Yn+ht),Math.ceil(jt*1.08)),Ri=r.current;if(Ri){const Gn=`${In}px`;Ri.style.height!==Gn&&(Ri.style.height=Gn)}}const ea=1-Lt*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(ea)),e.current.style.setProperty("--intro-tagline-opacity","1")),ce.domElement.style.opacity=String(1-Lt),ce.render(V,j)}Ht();let xt=0,U=0,b=!1,Q=!1,ae=!1,he=0,Ae=!1,Ne=!1,pe=window.scrollY,de="wheel";function we(){return Q||Ae}function He(){U&&(window.clearTimeout(U),U=0)}function Oe(){xt&&(cancelAnimationFrame(xt),xt=0),b=!1}function Le(){Oe(),He()}c.current=Le;function $e(){var Yn;const De=Math.max(1,Re),{cardPx:Ve,titlePx:rt,totalPx:yt}=ho(De),cn=g.getBoundingClientRect(),Wn=Math.max(1,g.offsetHeight-De),yn=tn.clamp(-cn.top,0,Wn),En=document.getElementById("hero"),bn=En?tt(En.getBoundingClientRect().top):!0,jt=((Yn=e.current)==null?void 0:Yn.getBoundingClientRect().bottom)??De,ni=Math.max(0,Math.min(yn,yt)-rt)/Math.max(1,Ve)*(gn-1);return{innerH:De,cardPx:Ve,titlePx:rt,totalPx:yt,scrolledPx:yn,landed:bn,stickyBottom:jt,depthT:ni}}function Ke(De=$e()){return g3(De.scrolledPx,De.titlePx,De.cardPx,De.totalPx,De.landed,De.stickyBottom,De.innerH)}function ot(){return b||Ke()}function W(De){let Ve=De.deltaY;return De.deltaMode===1?Ve*=16:De.deltaMode===2&&(Ve*=window.innerHeight),Ve}function Ce(){if(_||o.current||we())return;He();const De=de==="wheel"?r3:o3;U=window.setTimeout(()=>{U=0,_e()},De)}function _e(){if(_||o.current||b||we())return;const De=$e();if(!Ke(De))return;const Ve=m3(De.depthT),rt=p3(g,Ve,De.innerH),yt=window.scrollY,cn=rt-yt;if(Math.abs(cn)<f3(De.innerH))return;b=!0;const Wn=performance.now(),yn=En=>{if(_||o.current){b=!1,xt=0;return}if(we()){Oe();return}const bn=$e();if(!Ke(bn)){Oe();return}const jt=Math.min(1,(En-Wn)/s3);El(yt+cn*d3(jt)),jt<1?xt=requestAnimationFrame(yn):(El(rt),b=!1,xt=0)};xt=requestAnimationFrame(yn)}function Ue(De){if(de="wheel",!ot())return;De.preventDefault();const Ve=W(De);Math.abs(Ve)>=l3&&(Oe(),El(window.scrollY+Ve),we()||Ce())}function Fe(De){var Ve;de="touch",Q=!0,he=((Ve=De.touches[0])==null?void 0:Ve.clientY)??he,ae=Ke(),Le()}function be(De){var yt;if(de="touch",Q=!0,!ae&&(b||Ke())&&(ae=!0),!ae)return;De.preventDefault(),Oe();const Ve=((yt=De.touches[0])==null?void 0:yt.clientY)??he,rt=he-Ve;he=Ve,Math.abs(rt)>0&&El(window.scrollY+rt)}function je(){de="touch",Q=!1;const De=ae;ae=!1,De&&Ce()}function We(De){De.pointerType!=="touch"&&De.button===0&&(de="pointer",Ae=!0,Ne=!1,Le())}function $t(De){De.pointerType!=="touch"&&Ae&&(de="pointer",Ae=!1,Ne&&Ke()&&Ce(),Ne=!1)}function Pt(De){if(De.pointerType==="touch")return;const Ve=Ae&&Ne&&Ke();Ae=!1,Ne=!1,Ve&&Ce()}function ei(){const De=window.scrollY,Ve=De-pe;pe=De,Ae&&Math.abs(Ve)>.5&&(Ne=!0),b&&!Ke()&&Le()}function ti(){Le(),an()}function as(){Le();const De=it(),Ve=window.innerWidth,rt=Math.abs(De-Re),yt=Math.abs(Ve-ye)>1;if(te){rt>yh||yt?an():Ut();return}Re=De,ye=Ve,Ut()}function ss(){Le();const De=it();Math.abs(De-Re)<=yh||(te?an():(Re=De,ye=window.innerWidth,Ut()))}window.addEventListener("wheel",Ue,{passive:!1}),window.addEventListener("touchstart",Fe,{passive:!0}),window.addEventListener("touchmove",be,{passive:!1}),window.addEventListener("touchend",je,{passive:!0}),window.addEventListener("touchcancel",je,{passive:!0}),window.addEventListener("pointerdown",We,{passive:!0}),window.addEventListener("pointerup",$t,{passive:!0}),window.addEventListener("pointercancel",Pt,{passive:!0}),window.addEventListener("scroll",ei,{passive:!0}),window.addEventListener("resize",as,{passive:!0}),window.addEventListener("orientationchange",ti,{passive:!0});const da=window.visualViewport;da&&da.addEventListener("resize",ss);const wa=new ResizeObserver(Ut);wa.observe(d),x=()=>{var De;Le(),c.current=null,cancelAnimationFrame(Z),document.body.classList.remove(sr),window.removeEventListener("wheel",Ue),window.removeEventListener("touchstart",Fe),window.removeEventListener("touchmove",be),window.removeEventListener("touchend",je),window.removeEventListener("touchcancel",je),window.removeEventListener("pointerdown",We),window.removeEventListener("pointerup",$t),window.removeEventListener("pointercancel",Pt),window.removeEventListener("scroll",ei),window.removeEventListener("resize",as),window.removeEventListener("orientationchange",ti),da&&da.removeEventListener("resize",ss),wa.disconnect(),M.forEach(Ve=>{Ve.dispose()}),z.forEach(Ve=>Ve.dispose()),(De=L.map)==null||De.dispose(),L.dispose(),I.forEach(Ve=>Ve.geometry.dispose()),k.geometry.dispose(),F.geometry.dispose(),q.dispose(),V.remove(F),ce.dispose(),d.contains(ce.domElement)&&d.removeChild(ce.domElement)},_&&x()})(),()=>{var E;_=!0,(E=c.current)==null||E.call(c),c.current=null,document.body.classList.remove(sr),x==null||x()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:u,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(TR,{text:AR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:fo.map((h,m)=>D.jsxs("p",{children:["Step ",String(m+1).padStart(2,"0"),": ",h.verb,". ",h.description]},h.verb))})]}),D.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const R3=280,C3=5/4,w3=3800,D3={discover:yl,copy:pR};function L3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function N3({stepIndex:a,kind:e,className:i,width:r=R3}){const o=ke.useRef(null),c=e??Px(a),u=Math.round(r*C3);return ke.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*x),w=Math.round(u*x);(h.width!==E||h.height!==w)&&(h.width=E,h.height=w);const y=h.getContext("2d");y&&xR(y,c,E,w,m)};g();const _=D3[c];_&&_>1&&!L3()&&(d=setInterval(()=>{m=(m+1)%_,g()},w3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Hv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function U3(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Hv.map((a,e)=>{const i=e===Hv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const O3=/^(action)$/i;function P3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>O3.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function qx({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:P3(e)})]})}var I3=Qv();function F3(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function B3(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,F3(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Gv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=B3(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const z3=40,H3=5,G3="typewriter-reveal",Vv=1e3,V3=4e3;function kv(){return Vv+Math.random()*(V3-Vv)}function Yx(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function k3({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=ke.useRef(null),g=ke.useRef(m),_=ke.useRef(null),v=ke.useRef(null),x=ke.useRef(null),E=ke.useRef("idle"),[w,y]=ke.useState("idle");g.current=m;const M=ke.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=ke.useCallback(()=>{var N;M(),v.current=null,x.current=null,E.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),z=ke.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(I,N)},[M,I]);ke.useLayoutEffect(()=>{E.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),ke.useLayoutEffect(()=>{var H,$,me;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const xe=x.current??kv();x.current=null,z(xe);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(Yx()){(H=g.current)==null||H.call(g);return}const N=d.current;if(!N||!a){($=g.current)==null||$.call(g);return}N.style.width="",N.offsetWidth;const k=Math.max(a.length/i*1e3,120),V=Math.max(a.length,1),j=N.closest(".typewriter-block"),ce=(j==null?void 0:j.clientWidth)??((me=N.parentElement)==null?void 0:me.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ue=N.scrollWidth,q=ce>0?Math.min(ue,ce):ue;N.style.width="0",N.style.setProperty("--tw-duration",`${k}ms`),N.style.setProperty("--tw-target-width",`${q}px`),N.style.setProperty("--tw-steps",String(V)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,E.current="animating",y("animating");const F=xe=>{if(xe.animationName===G3){if(h){N.style.width=`${q}px`,E.current="cursor-hold",y("cursor-hold"),z(kv());return}N.style.width="",I()}};return N.addEventListener("animationend",F),()=>{N.removeEventListener("animationend",F)}},[o,u,I,h,z,i,a,c,M,r]);const R=w==="animating",O=w==="cursor-hold",L=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",R?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(R||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function Op({text:a,children:e,className:i,speed:r=z3,cursorWidth:o=H3,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=ke.useRef(null),g=ke.useRef(m),[_,v]=ke.useState([]),[x,E]=ke.useState(0),[w,y]=ke.useState(0),[M,I]=ke.useState(!1),[z,R]=ke.useState(!1),O=Yx();g.current=m;const L=ke.useCallback(()=>{const ue=d.current;if(!ue||!a)return v([]),E(0),R(!0),!0;const q=ue.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:$,blockHeight:me}=Gv(a,q,ue,H);let xe=me;if(!H){const P=Gv(a,q,ue,!0);xe=Math.max(me,P.blockHeight)}return v($),E(xe),R(!0),!0},[a,c,O]);ke.useLayoutEffect(()=>{var ue,q;if(y(0),I(!1),R(!1),v([]),E(0),O){(ue=g.current)==null||ue.call(g),R(!0);return}if(!a){(q=g.current)==null||q.call(g),R(!0);return}if(!L()){const F=new ResizeObserver(()=>{L()&&F.disconnect()});return d.current&&F.observe(d.current),()=>F.disconnect()}},[a,c,L,O]);const B=ke.useCallback(ue=>{var F;const q=ue>=_.length-1;I3.flushSync(()=>{if(!q){y(ue+1);return}I(!0)}),q&&((F=g.current)==null||F.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),k={...!M&&!O&&x>0?{height:x,minHeight:x}:void 0},V=e??a;if(!z)return D.jsx("span",{ref:d,className:N,style:k,children:V});if(O||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:V});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:V});const j=_.length>0?_:[a],ce=!!e&&j.length<=1;return D.jsxs("span",{ref:d,className:N,style:k,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:V}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((ue,q)=>D.jsx(k3,{text:ue,content:ce?e:void 0,speed:r,cursorWidth:o,waiting:q>w,active:u&&q===w,completed:q<w,holdCursor:h&&q===j.length-1,onComplete:q===w?()=>B(q):void 0},`${q}-${ue}`))})]})}function X3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=ke.useState(!1);return ke.useLayoutEffect(()=>{if(r)return;if(X3()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function W3(a){return String(a).padStart(2,"0")}function bu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const q3=1600,Y3=1500,Xv=5e3,j3=7e3;function Z3(){return Xv+Math.random()*(j3-Xv)}function K3({text:a,active:e}){const[i,r]=ke.useState(!1),[o,c]=ke.useState(0),u=ke.useRef(null),h=`> ${a}`,m=ke.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);ke.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(bu()){r(!0);return}const g=window.setTimeout(()=>r(!0),Y3);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=ke.useCallback(()=>{bu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},Z3()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Op,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function Q3(){const[a,e]=ke.useState(()=>new Set),[i,r]=ke.useState(!1),o=ke.useRef(new Map),c=ke.useRef(null),u=Pp(c,{amount:.35}),h=ws.steps.every(_=>a.has(`step-${_.n}`));ke.useLayoutEffect(()=>{if(bu()){e(new Set(ws.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const E=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),ke.useLayoutEffect(()=>{if(bu())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},q3);return()=>window.clearTimeout(_)},[h]);const m=ke.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=ke.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ws.kicker}),D.jsx("h2",{className:"section-title flow__title",children:ws.title}),D.jsx("div",{className:"flow__chips",children:ws.chips.map(_=>D.jsx(qx,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:ws.steps.map((_,v)=>{const x=`step-${_.n}`,E=a.has(x);return D.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",W3(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(K3,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Un.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(U3,{}):D.jsx(N3,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Op,{text:ws.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:ws.outcome})})]})})}const gp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],J3="0 0 58 35",$3=58,eC=35;function tC({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,$3+r*2,eC+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:gp.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const nC={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function jx({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=nC[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(tC,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}function iC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(jx,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:w_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[uu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Un.docs,children:"Docs"}),D.jsx("a",{href:Un.manifesto,children:"Manifesto"}),D.jsx("a",{href:Un.discord,children:"Discord"}),D.jsx("a",{href:Un.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:w_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const Wv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",Zx=50,qv=3500,Yv=4e3,aC=1400,sC=1200,rC=4500;function Kx(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function jv(a){return/[A-Za-z0-9]/.test(a)}function oC(){return Wv[Math.floor(Math.random()*Wv.length)]??"?"}function lC(a){return Math.random()<.5?oC():a}function Qx(a,e,i){const r=[];for(let d=0;d<a.length;d++)jv(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!jv(g)||h.has(d)?m+=g:m+=lC(g)}return m}function cC(a){return typeof a=="boolean"?{enabled:a,decryptMs:qv,pauseMs:Yv}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??qv,pauseMs:a.pauseMs??Yv}}function Jn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=cC(e),c=r+o,[u,h]=ke.useState(a);return ke.useEffect(()=>{if(!i||Kx()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(Qx(a,v,r))};d();const g=setInterval(d,Zx);return()=>{clearInterval(g)}},[a,i,r,c]),u}function Zv(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??aC,o=e.stepDecryptMs??sC,c=e.holdMs??rC,u=a.join("\0"),[h,m]=ke.useState(a),[d,g]=ke.useState(()=>a.map(()=>!1));return ke.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||Kx()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let E=Date.now();const w=()=>{const M=Date.now();let I=M-E;I>=x&&(E=M,I=0);const z=[],R=[];for(let O=0;O<_.length;O++){const L=_[O]??"",B=O*r,T=I>=B;if(R.push(T),!T){z.push(L);continue}const N=I-B;z.push(Qx(L,N,o))}m(z),g(R)};w();const y=setInterval(w,Zx);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function uC(){const a=[...C_,...C_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(qx,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function fC(){const[a,e]=Cs.headline,i=Jn(Cs.eyebrow.label);return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),D.jsx("div",{className:"hero__grid","aria-hidden":!0}),D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:J3,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:gp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`ghost-${r.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:gp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`fill-${r.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Cs.eyebrow.href,"aria-label":`${Cs.eyebrow.label}›`,children:[i,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:a}),D.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(vo,{href:Cs.primaryCta.href,variant:"primary",children:Cs.primaryCta.label}),D.jsx(vo,{href:Cs.secondaryCta.href,variant:"secondary",children:Cs.secondaryCta.label})]})]}),D.jsx(uC,{})]})}function dC(){const a=Jn(Fd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Fd.href,"aria-label":Fd.text,children:a})})}const pi={decryptMs:2800,pauseMs:5200},Kv={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function Jx(a){return String(a+1).padStart(2,"0")}function hC(a,e,i,r){return`${Jx(a)}  ${e}  ·  ${i}  ·  ${r}`}function pC(a,e,i){return`${Jx(a)}  ${e}  ·  ${i}`}function mC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function yi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function dn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function gC({meta:a}){const e=Jn(a.name,pi),i=Jn(a.tx,pi),r=Jn(a.hash,pi),o=Jn(a.chain,pi),c=Jn(a.verified,pi),u=Jn(a.rep,pi),h=Jn(a.portable,pi),m=Jn(a.next,pi),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,E=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,I=`verified ${c} · rep ${u} · portable ${h}`,z=`next ${a.next}`,R=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${h}`,B=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(yi,{label:"tx",value:a.tx,display:i}),D.jsx(yi,{label:"hash",value:a.hash,display:r}),D.jsx(yi,{label:"chain",value:a.chain,display:o}),D.jsx(yi,{label:"verified",value:a.verified,display:c}),D.jsx(yi,{label:"rep",value:a.rep,display:u}),D.jsx(yi,{label:"portable",value:a.portable,display:h}),D.jsx(yi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(dn,{value:d,display:g}),D.jsx(dn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(dn,{value:x,display:E}),D.jsx(dn,{value:w,display:y}),D.jsx(dn,{value:M,display:I}),D.jsx(dn,{value:z,display:R})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(dn,{value:d,display:g}),D.jsx(dn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(dn,{value:x,display:E}),D.jsx(dn,{value:w,display:y}),D.jsx(dn,{value:B,display:T}),D.jsx(dn,{value:O,display:L}),D.jsx(dn,{value:z,display:R})]})]})}function _C({meta:a}){const e=Jn(a.tx,pi),i=Jn(a.from,pi),r=Jn(a.to,pi),o=Jn(a.asset,pi),c=Jn(a.amt,pi),u=Jn(a.chain,pi),h=Jn(a.status,pi),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(yi,{label:"tx",value:a.tx,display:e}),D.jsx(yi,{label:"from",value:a.from,display:i}),D.jsx(yi,{label:"to",value:a.to,display:r}),D.jsx(yi,{label:"asset",value:a.asset,display:o}),D.jsx(yi,{label:"amt",value:a.amt,display:c}),D.jsx(yi,{label:"chain",value:a.chain,display:u}),D.jsx(yi,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(dn,{value:g,display:_}),D.jsx(dn,{value:m,display:d}),D.jsx(dn,{value:v,display:x}),D.jsx(dn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(dn,{value:g,display:_}),D.jsx(dn,{value:m,display:d}),D.jsx(dn,{value:E,display:w}),D.jsx(dn,{value:a.chain,display:u}),D.jsx(dn,{value:y,display:M})]})]})}function vC({meta:a}){const e=ke.useRef(null),i=Pp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?mC(r):null,c=ke.useMemo(()=>{const d=a.steps.map((g,_)=>hC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=ke.useMemo(()=>{const d=a.steps.map((g,_)=>pC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=Zv(c,{...Kv,enabled:i}),m=Zv(u,{...Kv,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(dn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(dn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(dn,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function xC({meta:a}){return a.kind==="identity"?D.jsx(gC,{meta:a}):a.kind==="chain"?D.jsx(vC,{meta:a}):D.jsx(_C,{meta:a})}function SC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Bd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Bd.title}),D.jsx("div",{className:"personas__grid",children:Bd.items.map(a=>D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(vo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(xC,{meta:a.meta})]},a.title))})]})})}function MC(){const[a,e]=ke.useState(!1),[i,r]=ke.useState(!1),[o,c]=ke.useState("");return ke.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),ke.useEffect(()=>{const u=uu.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),ke.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(jx,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:uu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Un.docs,children:"Docs"}),D.jsx(vo,{href:Un.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[uu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Un.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function yC(){const a=ke.useRef(null),e=Pp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Op,{text:R_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:R_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function EC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(dC,{}),D.jsx(MC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(A3,{}),D.jsx(fC,{}),D.jsx(yC,{}),D.jsx(dy,{}),D.jsx(SC,{}),D.jsx(Q3,{}),D.jsx(py,{}),D.jsx(fy,{})]}),D.jsx(iC,{})]})}cy.createRoot(document.getElementById("root")).render(D.jsx(ke.StrictMode,{children:D.jsx(EC,{})}));
