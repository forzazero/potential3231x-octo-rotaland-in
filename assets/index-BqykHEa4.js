(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Zd={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Sy(){if(I_)return bl;I_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return bl.Fragment=e,bl.jsx=i,bl.jsxs=i,bl}var B_;function My(){return B_||(B_=1,Zd.exports=Sy()),Zd.exports}var D=My(),Kd={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function yy(){if(F_)return ot;F_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function x(P,J,be){this.props=P,this.context=J,this.refs=y,this.updater=be||E}x.prototype.isReactComponent={},x.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=x.prototype;function I(P,J,be){this.props=P,this.context=J,this.refs=y,this.updater=be||E}var R=I.prototype=new O;R.constructor=I,A(R,x.prototype),R.isPureReactComponent=!0;var L=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,J,be){var we=be.ref;return{$$typeof:a,type:P,key:J,ref:we!==void 0?we:null,props:be}}function W(P,J){return U(P.type,J,P.props)}function X(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function Q(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(be){return J[be]})}var ue=/\/+/g;function fe(P,J){return typeof P=="object"&&P!==null&&P.key!=null?Q(""+P.key):J.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function H(P,J,be,we,Le){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(ie){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case a:case e:xe=!0;break;case g:return xe=P._init,H(xe(P._payload),J,be,we,Le)}}if(xe)return Le=Le(P),xe=we===""?"."+fe(P,0):we,L(Le)?(be="",xe!=null&&(be=xe.replace(ue,"$&/")+"/"),H(Le,J,be,"",function($e){return $e})):Le!=null&&(X(Le)&&(Le=W(Le,be+(Le.key==null||P&&P.key===Le.key?"":(""+Le.key).replace(ue,"$&/")+"/")+xe)),J.push(Le)),1;xe=0;var Me=we===""?".":we+":";if(L(P))for(var Ge=0;Ge<P.length;Ge++)we=P[Ge],ie=Me+fe(we,Ge),xe+=H(we,J,be,ie,Le);else if(Ge=M(P),typeof Ge=="function")for(P=Ge.call(P),Ge=0;!(we=P.next()).done;)we=we.value,ie=Me+fe(we,Ge++),xe+=H(we,J,be,ie,Le);else if(ie==="object"){if(typeof P.then=="function")return H(Z(P),J,be,we,Le);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return xe}function V(P,J,be){if(P==null)return P;var we=[],Le=0;return H(P,we,"","",function(ie){return J.call(be,ie,Le++)}),we}function te(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(be){(P._status===0||P._status===-1)&&(P._status=1,P._result=be)},function(be){(P._status===0||P._status===-1)&&(P._status=2,P._result=be)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var ce=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ye={map:V,forEach:function(P,J,be){V(P,function(){J.apply(this,arguments)},be)},count:function(P){var J=0;return V(P,function(){J++}),J},toArray:function(P){return V(P,function(J){return J})||[]},only:function(P){if(!X(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ot.Activity=v,ot.Children=ye,ot.Component=x,ot.Fragment=i,ot.Profiler=o,ot.PureComponent=I,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ot.cache=function(P){return function(){return P.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(P,J,be){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var we=A({},P.props),Le=P.key;if(J!=null)for(ie in J.key!==void 0&&(Le=""+J.key),J)!T.call(J,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&J.ref===void 0||(we[ie]=J[ie]);var ie=arguments.length-2;if(ie===1)we.children=be;else if(1<ie){for(var xe=Array(ie),Me=0;Me<ie;Me++)xe[Me]=arguments[Me+2];we.children=xe}return U(P.type,Le,we)},ot.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ot.createElement=function(P,J,be){var we,Le={},ie=null;if(J!=null)for(we in J.key!==void 0&&(ie=""+J.key),J)T.call(J,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Le[we]=J[we]);var xe=arguments.length-2;if(xe===1)Le.children=be;else if(1<xe){for(var Me=Array(xe),Ge=0;Ge<xe;Ge++)Me[Ge]=arguments[Ge+2];Le.children=Me}if(P&&P.defaultProps)for(we in xe=P.defaultProps,xe)Le[we]===void 0&&(Le[we]=xe[we]);return U(P,ie,Le)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(P){return{$$typeof:d,render:P}},ot.isValidElement=X,ot.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:te}},ot.memo=function(P,J){return{$$typeof:h,type:P,compare:J===void 0?null:J}},ot.startTransition=function(P){var J=z.T,be={};z.T=be;try{var we=P(),Le=z.S;Le!==null&&Le(be,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(N,ce)}catch(ie){ce(ie)}finally{J!==null&&be.types!==null&&(J.types=be.types),z.T=J}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(P){return z.H.use(P)},ot.useActionState=function(P,J,be){return z.H.useActionState(P,J,be)},ot.useCallback=function(P,J){return z.H.useCallback(P,J)},ot.useContext=function(P){return z.H.useContext(P)},ot.useDebugValue=function(){},ot.useDeferredValue=function(P,J){return z.H.useDeferredValue(P,J)},ot.useEffect=function(P,J){return z.H.useEffect(P,J)},ot.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(P,J,be){return z.H.useImperativeHandle(P,J,be)},ot.useInsertionEffect=function(P,J){return z.H.useInsertionEffect(P,J)},ot.useLayoutEffect=function(P,J){return z.H.useLayoutEffect(P,J)},ot.useMemo=function(P,J){return z.H.useMemo(P,J)},ot.useOptimistic=function(P,J){return z.H.useOptimistic(P,J)},ot.useReducer=function(P,J,be){return z.H.useReducer(P,J,be)},ot.useRef=function(P){return z.H.useRef(P)},ot.useState=function(P){return z.H.useState(P)},ot.useSyncExternalStore=function(P,J,be){return z.H.useSyncExternalStore(P,J,be)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.7",ot}var z_;function Bp(){return z_||(z_=1,Kd.exports=yy()),Kd.exports}var ke=Bp(),Qd={exports:{}},Tl={},Jd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function Ey(){return H_||(H_=1,(function(a){function e(H,V){var te=H.length;H.push(V);e:for(;0<te;){var ce=te-1>>>1,ye=H[ce];if(0<o(ye,V))H[ce]=V,H[te]=ye,te=ce;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var V=H[0],te=H.pop();if(te!==V){H[0]=te;e:for(var ce=0,ye=H.length,P=ye>>>1;ce<P;){var J=2*(ce+1)-1,be=H[J],we=J+1,Le=H[we];if(0>o(be,te))we<ye&&0>o(Le,be)?(H[ce]=Le,H[we]=te,ce=we):(H[ce]=be,H[J]=te,ce=J);else if(we<ye&&0>o(Le,te))H[ce]=Le,H[we]=te,ce=we;else break e}}return V}function o(H,V){var te=H.sortIndex-V.sortIndex;return te!==0?te:H.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,v=null,_=3,M=!1,E=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function R(H){for(var V=i(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=H)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(h)}}function L(H){if(A=!1,R(H),!E)if(i(m)!==null)E=!0,N||(N=!0,Q());else{var V=i(h);V!==null&&Z(L,V.startTime-H)}}var N=!1,z=-1,T=5,U=-1;function W(){return y?!0:!(a.unstable_now()-U<T)}function X(){if(y=!1,N){var H=a.unstable_now();U=H;var V=!0;try{e:{E=!1,A&&(A=!1,O(z),z=-1),M=!0;var te=_;try{t:{for(R(H),v=i(m);v!==null&&!(v.expirationTime>H&&W());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,_=v.priorityLevel;var ye=ce(v.expirationTime<=H);if(H=a.unstable_now(),typeof ye=="function"){v.callback=ye,R(H),V=!0;break t}v===i(m)&&r(m),R(H)}else r(m);v=i(m)}if(v!==null)V=!0;else{var P=i(h);P!==null&&Z(L,P.startTime-H),V=!1}}break e}finally{v=null,_=te,M=!1}V=void 0}}finally{V?Q():N=!1}}}var Q;if(typeof I=="function")Q=function(){I(X)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=X,Q=function(){fe.postMessage(null)}}else Q=function(){x(X,0)};function Z(H,V){z=x(function(){H(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var te=_;_=V;try{return H()}finally{_=te}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(H,V){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=_;_=H;try{return V()}finally{_=te}},a.unstable_scheduleCallback=function(H,V,te){var ce=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ce+te:ce):te=ce,H){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,H={id:g++,callback:V,priorityLevel:H,startTime:te,expirationTime:ye,sortIndex:-1},te>ce?(H.sortIndex=te,e(h,H),i(m)===null&&H===i(h)&&(A?(O(z),z=-1):A=!0,Z(L,te-ce))):(H.sortIndex=ye,e(m,H),E||M||(E=!0,N||(N=!0,Q()))),H},a.unstable_shouldYield=W,a.unstable_wrapCallback=function(H){var V=_;return function(){var te=_;_=V;try{return H.apply(this,arguments)}finally{_=te}}}})($d)),$d}var G_;function by(){return G_||(G_=1,Jd.exports=Ey()),Jd.exports}var eh={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function Ty(){if(V_)return jn;V_=1;var a=Bp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,jn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},jn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},jn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},jn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},jn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},jn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},jn.requestFormReset=function(m){r.d.r(m)},jn.unstable_batchedUpdates=function(m,h){return m(h)},jn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var k_;function xx(){if(k_)return eh.exports;k_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),eh.exports=Ty(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function Ay(){if(X_)return Tl;X_=1;var a=by(),e=Bp(),i=xx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,l=p;break}if(w===l){S=!0,l=f,s=p;break}w=w.sibling}if(!S){for(w=p.child;w;){if(w===s){S=!0,s=p,l=f;break}if(w===l){S=!0,l=p,s=f;break}w=w.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var Z=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ce=[],ye=-1;function P(t){return{current:t}}function J(t){0>ye||(t.current=ce[ye],ce[ye]=null,ye--)}function be(t,n){ye++,ce[ye]=t.current,t.current=n}var we=P(null),Le=P(null),ie=P(null),xe=P(null);function Me(t,n){switch(be(ie,n),be(Le,t),be(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?s_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=s_(n),t=r_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(we),be(we,t)}function Ge(){J(we),J(Le),J(ie)}function $e(t){t.memoizedState!==null&&be(xe,t);var n=we.current,s=r_(n,t.type);n!==s&&(be(Le,t),be(we,s))}function qe(t){Le.current===t&&(J(we),J(Le)),xe.current===t&&(J(xe),Sl._currentValue=te)}var Tt,ct;function vt(t){if(Tt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Tt=n&&n[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+t+ct}var Mt=!1;function mt(t,n){if(!t||Mt)return"";Mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(he){var le=he}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(he){le=he}t.call(Ee.prototype)}}else{try{throw Error()}catch(he){le=he}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(he){if(he&&le&&typeof he.stack=="string")return[he.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],w=p[1];if(S&&w){var k=S.split(`
`),re=w.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===re.length)for(l=k.length-1,f=re.length-1;1<=l&&0<=f&&k[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==re[f]){var ve=`
`+k[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{Mt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return mt(t.type,!1);case 11:return mt(t.type.render,!1);case 1:return mt(t.type,!0);case 31:return vt("Activity");default:return""}}function cn(t){try{var n="",s=null;do n+=nn(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var un=Object.prototype.hasOwnProperty,xt=a.unstable_scheduleCallback,Nt=a.unstable_cancelCallback,$t=a.unstable_shouldYield,K=a.unstable_requestPaint,Ut=a.unstable_now,At=a.unstable_getCurrentPriorityLevel,B=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,ae=a.unstable_LowPriority,ge=a.unstable_IdlePriority,Ne=a.log,Be=a.unstable_setDisableYieldValue,de=null,me=null;function Ce(t){if(typeof Ne=="function"&&Be(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(de,t)}catch{}}var Fe=Math.clz32?Math.clz32:je,Oe=Math.log,Ie=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Oe(t)/Ie|0)|0}var Qe=256,nt=262144,Y=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=De(l):(S&=w,S!==0?f=De(S):s||(s=w&~t,s!==0&&(f=De(s))))):(w=l&~p,w!==0?f=De(w):S!==0?f=De(S):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ve(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qt(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,k=t.expirationTimes,re=t.hiddenUpdates;for(s=S&~s;0<s;){var ve=31-Fe(s),Ee=1<<ve;w[ve]=0,k[ve]=-1;var le=re[ve];if(le!==null)for(re[ve]=null,ve=0;ve<le.length;ve++){var he=le[ve];he!==null&&(he.lane&=-536870913)}s&=~Ee}l!==0&&ut(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function ut(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Fe(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function hn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Fe(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function jt(t,n){var s=n&-n;return s=(s&42)!==0?1:Ys(s),(s&(t.suspendedLanes|n))!==0?0:s}function Ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Aa(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:w_(t.type))}function ns(t,n){var s=V.p;try{return V.p=t,n()}finally{V.p=s}}var $n=Math.random().toString(36).slice(2),an="__reactFiber$"+$n,Sn="__reactProps$"+$n,zn="__reactContainer$"+$n,oa="__reactEvents$"+$n,js="__reactListeners$"+$n,Zs="__reactHandles$"+$n,Ci="__reactResources$"+$n,qi="__reactMarker$"+$n;function ji(t){delete t[an],delete t[Sn],delete t[oa],delete t[js],delete t[Zs]}function wi(t){var n=t[an];if(n)return n;for(var s=t.parentNode;s;){if(n=s[zn]||s[an]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=h_(t);t!==null;){if(s=t[an])return s;t=h_(t)}return n}t=s,s=t.parentNode}return null}function Di(t){if(t=t[an]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function la(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Zi(t){var n=t[Ci];return n||(n=t[Ci]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(t){t[qi]=!0}var Ks=new Set,C={};function j(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(C[t]=n,t=0;t<n.length;t++)Ks.add(n[t])}var F=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),G={},pe={};function Ae(t){return un.call(pe,t)?!0:un.call(G,t)?!1:F.test(t)?pe[t]=!0:(G[t]=!0,!1)}function Re(t,n,s){if(Ae(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ue(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function it(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rt(t){if(!t._valueTracker){var n=it(t)?"checked":"value";t._valueTracker=He(t,n,""+t[n])}}function yt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=it(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function _t(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(t,n,s,l,f,p,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?ht(t,S,Ze(n)):s!=null?ht(t,S,Ze(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Ze(w):t.removeAttribute("name")}function Ln(t,n,s,l,f,p,S,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){rt(t);return}s=s!=null?""+Ze(s):"",n=n!=null?""+Ze(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),rt(t)}function ht(t,n,s){n==="number"&&ft(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function mn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ze(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function In(t,n,s){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Ze(s):""}function ei(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(Z(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Ze(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),rt(t)}function Hn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var It=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zt(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||It.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function ri(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&Zt(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&Zt(t,p,n[p])}function Rt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ki=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return Ki.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Ql=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function Dr(t){var n=Di(t);if(n&&(t=n.stateNode)){var s=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+_t(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(r(90));Xe(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&yt(l)}break e;case"textarea":In(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&mn(t,!!s.multiple,n,!1)}}}var Qs=!1;function Jl(t,n,s){if(Qs)return t(n,s);Qs=!0;try{var l=t(n);return l}finally{if(Qs=!1,(is!==null||as!==null)&&(Ic(),is&&(n=is,t=as,as=is=null,Dr(n),t)))for(n=0;n<t.length;n++)Dr(t[n])}}function ss(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=!1;if(Li)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Fo=!1}var mi=null,zo=null,Lr=null;function Ju(){if(Lr)return Lr;var t,n=zo,s=n.length,l,f="value"in mi?mi.value:mi.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return Lr=f.slice(t,1<l?1-l:void 0)}function Js(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rs(){return!0}function $l(){return!1}function qn(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?rs:$l,this.isPropagationStopped=$l,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),n}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=qn(Ca),os=v({},Ca,{view:0,detail:0}),Gt=qn(os),oi,Ni,bn,gi=v({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bn&&(bn&&t.type==="mousemove"?(oi=t.screenX-bn.screenX,Ni=t.screenY-bn.screenY):Ni=oi=0,bn=t),oi)},movementY:function(t){return"movementY"in t?t.movementY:Ni}}),ti=qn(gi),ls=v({},gi,{dataTransfer:0}),Nr=qn(ls),cs=v({},os,{relatedTarget:0}),fa=qn(cs),Ho=v({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),ec=qn(Ho),bS=v({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TS=qn(bS),AS=v({},Ca,{data:0}),cm=qn(AS),RS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wS[t])?!!n[t]:!1}function $u(){return DS}var LS=v({},os,{key:function(t){if(t.key){var n=RS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?Js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NS=qn(LS),US=v({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=qn(US),OS=v({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),PS=qn(OS),IS=v({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=qn(IS),FS=v({},gi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=qn(FS),HS=v({},Ca,{newState:0,oldState:0}),GS=qn(HS),VS=[9,13,27,32],ef=Li&&"CompositionEvent"in window,Go=null;Li&&"documentMode"in document&&(Go=document.documentMode);var kS=Li&&"TextEvent"in window&&!Go,fm=Li&&(!ef||Go&&8<Go&&11>=Go),dm=" ",hm=!1;function pm(t,n){switch(t){case"keyup":return VS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function XS(t,n){switch(t){case"compositionend":return mm(n);case"keypress":return n.which!==32?null:(hm=!0,dm);case"textInput":return t=n.data,t===dm&&hm?null:t;default:return null}}function WS(t,n){if(Ur)return t==="compositionend"||!ef&&pm(t,n)?(t=Ju(),Lr=zo=mi=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fm&&n.locale!=="ko"?null:n.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!YS[t.type]:n==="textarea"}function _m(t,n,s,l){is?as?as.push(l):as=[l]:is=l,n=kc(n,"onChange"),0<n.length&&(s=new $s("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Vo=null,ko=null;function qS(t){$g(t,0)}function tc(t){var n=la(t);if(yt(n))return t}function vm(t,n){if(t==="change")return n}var xm=!1;if(Li){var tf;if(Li){var nf="oninput"in document;if(!nf){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),nf=typeof Sm.oninput=="function"}tf=nf}else tf=!1;xm=tf&&(!document.documentMode||9<document.documentMode)}function Mm(){Vo&&(Vo.detachEvent("onpropertychange",ym),ko=Vo=null)}function ym(t){if(t.propertyName==="value"&&tc(ko)){var n=[];_m(n,ko,t,ca(t)),Jl(qS,n)}}function jS(t,n,s){t==="focusin"?(Mm(),Vo=n,ko=s,Vo.attachEvent("onpropertychange",ym)):t==="focusout"&&Mm()}function ZS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(ko)}function KS(t,n){if(t==="click")return tc(n)}function QS(t,n){if(t==="input"||t==="change")return tc(n)}function JS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var _i=typeof Object.is=="function"?Object.is:JS;function Xo(t,n){if(_i(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!un.call(n,f)||!_i(t[f],n[f]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,n){var s=Em(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Em(s)}}function Tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ft(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=ft(t.document)}return n}function af(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $S=Li&&"documentMode"in document&&11>=document.documentMode,Or=null,sf=null,Wo=null,rf=!1;function Rm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rf||Or==null||Or!==ft(l)||(l=Or,"selectionStart"in l&&af(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&Xo(Wo,l)||(Wo=l,l=kc(sf,"onSelect"),0<l.length&&(n=new $s("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Or)))}function er(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Pr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},of={},Cm={};Li&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function tr(t){if(of[t])return of[t];if(!Pr[t])return t;var n=Pr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Cm)return of[t]=n[s];return t}var wm=tr("animationend"),Dm=tr("animationiteration"),Lm=tr("animationstart"),eM=tr("transitionrun"),tM=tr("transitionstart"),nM=tr("transitioncancel"),Nm=tr("transitionend"),Um=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Ji(t,n){Um.set(t,n),j(n,[t])}var nc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ui=[],Ir=0,cf=0;function ic(){for(var t=Ir,n=cf=Ir=0;n<t;){var s=Ui[n];Ui[n++]=null;var l=Ui[n];Ui[n++]=null;var f=Ui[n];Ui[n++]=null;var p=Ui[n];if(Ui[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&Om(s,f,p)}}function ac(t,n,s,l){Ui[Ir++]=t,Ui[Ir++]=n,Ui[Ir++]=s,Ui[Ir++]=l,cf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function uf(t,n,s,l){return ac(t,n,s,l),sc(t)}function nr(t,n){return ac(t,null,null,n),sc(t)}function Om(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Fe(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function sc(t){if(50<hl)throw hl=0,xd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Br={};function iM(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,n,s,l){return new iM(t,n,s,l)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wa(t,n){var s=t.alternate;return s===null?(s=vi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Pm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function rc(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")ff(t)&&(S=1);else if(typeof t=="string")S=ly(t,s,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=vi(31,s,n,f),t.elementType=U,t.lanes=p,t;case A:return ir(s.children,f,p,n);case y:S=8,f|=24;break;case x:return t=vi(12,s,n,f|2),t.elementType=x,t.lanes=p,t;case L:return t=vi(13,s,n,f),t.elementType=L,t.lanes=p,t;case N:return t=vi(19,s,n,f),t.elementType=N,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:S=10;break e;case O:S=9;break e;case R:S=11;break e;case z:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=vi(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function ir(t,n,s,l){return t=vi(7,t,l,n),t.lanes=s,t}function df(t,n,s){return t=vi(6,t,null,n),t.lanes=s,t}function Im(t){var n=vi(18,null,null,0);return n.stateNode=t,n}function hf(t,n,s){return n=vi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bm=new WeakMap;function Oi(t,n){if(typeof t=="object"&&t!==null){var s=Bm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:cn(n)},Bm.set(t,n),n)}return{value:t,source:n,stack:cn(n)}}var Fr=[],zr=0,oc=null,Yo=0,Pi=[],Ii=0,us=null,da=1,ha="";function Da(t,n){Fr[zr++]=Yo,Fr[zr++]=oc,oc=t,Yo=n}function Fm(t,n,s){Pi[Ii++]=da,Pi[Ii++]=ha,Pi[Ii++]=us,us=t;var l=da;t=ha;var f=32-Fe(l)-1;l&=~(1<<f),s+=1;var p=32-Fe(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,da=1<<32-Fe(n)+f|s<<f|l,ha=p+t}else da=1<<p|s<<f|l,ha=t}function pf(t){t.return!==null&&(Da(t,1),Fm(t,1,0))}function mf(t){for(;t===oc;)oc=Fr[--zr],Fr[zr]=null,Yo=Fr[--zr],Fr[zr]=null;for(;t===us;)us=Pi[--Ii],Pi[Ii]=null,ha=Pi[--Ii],Pi[Ii]=null,da=Pi[--Ii],Pi[Ii]=null}function zm(t,n){Pi[Ii++]=da,Pi[Ii++]=ha,Pi[Ii++]=us,da=n.id,ha=n.overflow,us=t}var Gn=null,sn=null,Dt=!1,fs=null,Bi=!1,gf=Error(r(519));function ds(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qo(Oi(n,t)),gf}function Hm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[an]=t,n[Sn]=l,s){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(s=0;s<ml.length;s++)bt(ml[s],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Ln(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),ei(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||i_(n.textContent,s)?(l.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),l.onScroll!=null&&bt("scroll",n),l.onScrollEnd!=null&&bt("scrollend",n),l.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||ds(t,!0)}function Gm(t){for(Gn=t.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Gn=Gn.return}}function Hr(t){if(t!==Gn)return!1;if(!Dt)return Gm(t),Dt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Od(t.type,t.memoizedProps)),s=!s),s&&sn&&ds(t),Gm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));sn=d_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));sn=d_(t)}else n===27?(n=sn,As(t.type)?(t=zd,zd=null,sn=t):sn=n):sn=Gn?zi(t.stateNode.nextSibling):null;return!0}function ar(){sn=Gn=null,Dt=!1}function _f(){var t=fs;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),fs=null),t}function qo(t){fs===null?fs=[t]:fs.push(t)}var vf=P(null),sr=null,La=null;function hs(t,n,s){be(vf,n._currentValue),n._currentValue=s}function Na(t){t._currentValue=vf.current,J(vf)}function xf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Sf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var k=0;k<n.length;k++)if(w.context===n[k]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),xf(p.return,s,t),l||(S=null);break e}p=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),xf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Gr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=f.type;_i(f.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(f===xe.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Sl):t=[Sl])}f=f.return}t!==null&&Sf(n,t,s,l),n.flags|=262144}function lc(t){for(t=t.firstContext;t!==null;){if(!_i(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){sr=t,La=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Vn(t){return Vm(sr,t)}function cc(t,n){return sr===null&&rr(t),Vm(t,n)}function Vm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},La===null){if(t===null)throw Error(r(308));La=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else La=La.next=n;return s}var aM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},sM=a.unstable_scheduleCallback,rM=a.unstable_NormalPriority,Tn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new aM,data:new Map,refCount:0}}function jo(t){t.refCount--,t.refCount===0&&sM(rM,function(){t.controller.abort()})}var Zo=null,yf=0,Vr=0,kr=null;function oM(t,n){if(Zo===null){var s=Zo=[];yf=0,Vr=Td(),kr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return yf++,n.then(km,km),n}function km(){if(--yf===0&&Zo!==null){kr!==null&&(kr.status="fulfilled");var t=Zo;Zo=null,Vr=0,kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Xm=H.S;H.S=function(t,n){Rg=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oM(t,n),Xm!==null&&Xm(t,n)};var or=P(null);function Ef(){var t=or.current;return t!==null?t:en.pooledCache}function uc(t,n){n===null?be(or,or.current):be(or,n.pool)}function Wm(){var t=Ef();return t===null?null:{parent:Tn._currentValue,pool:t}}var Xr=Error(r(460)),bf=Error(r(474)),fc=Error(r(542)),dc={then:function(){}};function Ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Qi,Qi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t}throw cr=n,Xr}}function lr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(cr=s,Xr):s}}var cr=null;function jm(){if(cr===null)throw Error(r(459));var t=cr;return cr=null,t}function Zm(t){if(t===Xr||t===fc)throw Error(r(483))}var Wr=null,Ko=0;function hc(t){var n=Ko;return Ko+=1,Wr===null&&(Wr=[]),qm(Wr,t,n)}function Qo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pc(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){function n($,q){if(t){var se=$.deletions;se===null?($.deletions=[q],$.flags|=16):se.push(q)}}function s($,q){if(!t)return null;for(;q!==null;)n($,q),q=q.sibling;return null}function l($){for(var q=new Map;$!==null;)$.key!==null?q.set($.key,$):q.set($.index,$),$=$.sibling;return q}function f($,q){return $=wa($,q),$.index=0,$.sibling=null,$}function p($,q,se){return $.index=se,t?(se=$.alternate,se!==null?(se=se.index,se<q?($.flags|=67108866,q):se):($.flags|=67108866,q)):($.flags|=1048576,q)}function S($){return t&&$.alternate===null&&($.flags|=67108866),$}function w($,q,se,Se){return q===null||q.tag!==6?(q=df(se,$.mode,Se),q.return=$,q):(q=f(q,se),q.return=$,q)}function k($,q,se,Se){var tt=se.type;return tt===A?ve($,q,se.props.children,Se,se.key):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&lr(tt)===q.type)?(q=f(q,se.props),Qo(q,se),q.return=$,q):(q=rc(se.type,se.key,se.props,null,$.mode,Se),Qo(q,se),q.return=$,q)}function re($,q,se,Se){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=hf(se,$.mode,Se),q.return=$,q):(q=f(q,se.children||[]),q.return=$,q)}function ve($,q,se,Se,tt){return q===null||q.tag!==7?(q=ir(se,$.mode,Se,tt),q.return=$,q):(q=f(q,se),q.return=$,q)}function Ee($,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=df(""+q,$.mode,se),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return se=rc(q.type,q.key,q.props,null,$.mode,se),Qo(se,q),se.return=$,se;case E:return q=hf(q,$.mode,se),q.return=$,q;case T:return q=lr(q),Ee($,q,se)}if(Z(q)||Q(q))return q=ir(q,$.mode,se,null),q.return=$,q;if(typeof q.then=="function")return Ee($,hc(q),se);if(q.$$typeof===I)return Ee($,cc($,q),se);pc($,q)}return null}function le($,q,se,Se){var tt=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return tt!==null?null:w($,q,""+se,Se);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case M:return se.key===tt?k($,q,se,Se):null;case E:return se.key===tt?re($,q,se,Se):null;case T:return se=lr(se),le($,q,se,Se)}if(Z(se)||Q(se))return tt!==null?null:ve($,q,se,Se,null);if(typeof se.then=="function")return le($,q,hc(se),Se);if(se.$$typeof===I)return le($,q,cc($,se),Se);pc($,se)}return null}function he($,q,se,Se,tt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return $=$.get(se)||null,w(q,$,""+Se,tt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case M:return $=$.get(Se.key===null?se:Se.key)||null,k(q,$,Se,tt);case E:return $=$.get(Se.key===null?se:Se.key)||null,re(q,$,Se,tt);case T:return Se=lr(Se),he($,q,se,Se,tt)}if(Z(Se)||Q(Se))return $=$.get(se)||null,ve(q,$,Se,tt,null);if(typeof Se.then=="function")return he($,q,se,hc(Se),tt);if(Se.$$typeof===I)return he($,q,se,cc(q,Se),tt);pc(q,Se)}return null}function Ke($,q,se,Se){for(var tt=null,Bt=null,et=q,pt=q=0,wt=null;et!==null&&pt<se.length;pt++){et.index>pt?(wt=et,et=null):wt=et.sibling;var Ft=le($,et,se[pt],Se);if(Ft===null){et===null&&(et=wt);break}t&&et&&Ft.alternate===null&&n($,et),q=p(Ft,q,pt),Bt===null?tt=Ft:Bt.sibling=Ft,Bt=Ft,et=wt}if(pt===se.length)return s($,et),Dt&&Da($,pt),tt;if(et===null){for(;pt<se.length;pt++)et=Ee($,se[pt],Se),et!==null&&(q=p(et,q,pt),Bt===null?tt=et:Bt.sibling=et,Bt=et);return Dt&&Da($,pt),tt}for(et=l(et);pt<se.length;pt++)wt=he(et,$,pt,se[pt],Se),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?pt:wt.key),q=p(wt,q,pt),Bt===null?tt=wt:Bt.sibling=wt,Bt=wt);return t&&et.forEach(function(Ls){return n($,Ls)}),Dt&&Da($,pt),tt}function at($,q,se,Se){if(se==null)throw Error(r(151));for(var tt=null,Bt=null,et=q,pt=q=0,wt=null,Ft=se.next();et!==null&&!Ft.done;pt++,Ft=se.next()){et.index>pt?(wt=et,et=null):wt=et.sibling;var Ls=le($,et,Ft.value,Se);if(Ls===null){et===null&&(et=wt);break}t&&et&&Ls.alternate===null&&n($,et),q=p(Ls,q,pt),Bt===null?tt=Ls:Bt.sibling=Ls,Bt=Ls,et=wt}if(Ft.done)return s($,et),Dt&&Da($,pt),tt;if(et===null){for(;!Ft.done;pt++,Ft=se.next())Ft=Ee($,Ft.value,Se),Ft!==null&&(q=p(Ft,q,pt),Bt===null?tt=Ft:Bt.sibling=Ft,Bt=Ft);return Dt&&Da($,pt),tt}for(et=l(et);!Ft.done;pt++,Ft=se.next())Ft=he(et,$,pt,Ft.value,Se),Ft!==null&&(t&&Ft.alternate!==null&&et.delete(Ft.key===null?pt:Ft.key),q=p(Ft,q,pt),Bt===null?tt=Ft:Bt.sibling=Ft,Bt=Ft);return t&&et.forEach(function(xy){return n($,xy)}),Dt&&Da($,pt),tt}function Jt($,q,se,Se){if(typeof se=="object"&&se!==null&&se.type===A&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case M:e:{for(var tt=se.key;q!==null;){if(q.key===tt){if(tt=se.type,tt===A){if(q.tag===7){s($,q.sibling),Se=f(q,se.props.children),Se.return=$,$=Se;break e}}else if(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&lr(tt)===q.type){s($,q.sibling),Se=f(q,se.props),Qo(Se,se),Se.return=$,$=Se;break e}s($,q);break}else n($,q);q=q.sibling}se.type===A?(Se=ir(se.props.children,$.mode,Se,se.key),Se.return=$,$=Se):(Se=rc(se.type,se.key,se.props,null,$.mode,Se),Qo(Se,se),Se.return=$,$=Se)}return S($);case E:e:{for(tt=se.key;q!==null;){if(q.key===tt)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){s($,q.sibling),Se=f(q,se.children||[]),Se.return=$,$=Se;break e}else{s($,q);break}else n($,q);q=q.sibling}Se=hf(se,$.mode,Se),Se.return=$,$=Se}return S($);case T:return se=lr(se),Jt($,q,se,Se)}if(Z(se))return Ke($,q,se,Se);if(Q(se)){if(tt=Q(se),typeof tt!="function")throw Error(r(150));return se=tt.call(se),at($,q,se,Se)}if(typeof se.then=="function")return Jt($,q,hc(se),Se);if(se.$$typeof===I)return Jt($,q,cc($,se),Se);pc($,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,q!==null&&q.tag===6?(s($,q.sibling),Se=f(q,se),Se.return=$,$=Se):(s($,q),Se=df(se,$.mode,Se),Se.return=$,$=Se),S($)):s($,q)}return function($,q,se,Se){try{Ko=0;var tt=Jt($,q,se,Se);return Wr=null,tt}catch(et){if(et===Xr||et===fc)throw et;var Bt=vi(29,et,null,$.mode);return Bt.lanes=Se,Bt.return=$,Bt}finally{}}}var ur=Km(!0),Qm=Km(!1),ps=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ms(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function gs(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=sc(t),Om(t,null,s),n}return ac(t,l,n,s),sc(t)}function Jo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,hn(t,s)}}function Rf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Cf=!1;function $o(){if(Cf){var t=kr;if(t!==null)throw t}}function el(t,n,s,l){Cf=!1;var f=t.updateQueue;ps=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var k=w,re=k.next;k.next=null,S===null?p=re:S.next=re,S=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==S&&(w===null?ve.firstBaseUpdate=re:w.next=re,ve.lastBaseUpdate=k))}if(p!==null){var Ee=f.baseState;S=0,ve=re=k=null,w=p;do{var le=w.lane&-536870913,he=le!==w.lane;if(he?(Ct&le)===le:(l&le)===le){le!==0&&le===Vr&&(Cf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ke=t,at=w;le=n;var Jt=s;switch(at.tag){case 1:if(Ke=at.payload,typeof Ke=="function"){Ee=Ke.call(Jt,Ee,le);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=at.payload,le=typeof Ke=="function"?Ke.call(Jt,Ee,le):Ke,le==null)break e;Ee=v({},Ee,le);break e;case 2:ps=!0}}le=w.callback,le!==null&&(t.flags|=64,he&&(t.flags|=8192),he=f.callbacks,he===null?f.callbacks=[le]:he.push(le))}else he={lane:le,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(re=ve=he,k=Ee):ve=ve.next=he,S|=le;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;he=w,w=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);ve===null&&(k=Ee),f.baseState=k,f.firstBaseUpdate=re,f.lastBaseUpdate=ve,p===null&&(f.shared.lanes=0),Ms|=S,t.lanes=S,t.memoizedState=Ee}}function Jm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function $m(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Jm(s[t],n)}var Yr=P(null),mc=P(0);function e0(t,n){t=Ga,be(mc,t),be(Yr,n),Ga=t|n.baseLanes}function wf(){be(mc,Ga),be(Yr,Yr.current)}function Df(){Ga=mc.current,J(Yr),J(mc)}var xi=P(null),Fi=null;function _s(t){var n=t.alternate;be(Mn,Mn.current&1),be(xi,t),Fi===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Fi=t)}function Lf(t){be(Mn,Mn.current),be(xi,t),Fi===null&&(Fi=t)}function t0(t){t.tag===22?(be(Mn,Mn.current),be(xi,t),Fi===null&&(Fi=t)):vs()}function vs(){be(Mn,Mn.current),be(xi,xi.current)}function Si(t){J(xi),Fi===t&&(Fi=null),J(Mn)}var Mn=P(0);function gc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Bd(s)||Fd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ua=0,dt=null,Kt=null,An=null,_c=!1,qr=!1,fr=!1,vc=0,tl=0,jr=null,cM=0;function gn(){throw Error(r(321))}function Nf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!_i(t[s],n[s]))return!1;return!0}function Uf(t,n,s,l,f,p){return Ua=p,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?F0:jf,fr=!1,p=s(l,f),fr=!1,qr&&(p=i0(n,s,l,f)),n0(t),p}function n0(t){H.H=al;var n=Kt!==null&&Kt.next!==null;if(Ua=0,An=Kt=dt=null,_c=!1,tl=0,jr=null,n)throw Error(r(300));t===null||Rn||(t=t.dependencies,t!==null&&lc(t)&&(Rn=!0))}function i0(t,n,s,l){dt=t;var f=0;do{if(qr&&(jr=null),tl=0,qr=!1,25<=f)throw Error(r(301));if(f+=1,An=Kt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=z0,p=n(s,l)}while(qr);return p}function uM(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?nl(n):n,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Of(){var t=vc!==0;return vc=0,t}function Pf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function If(t){if(_c){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_c=!1}Ua=0,An=Kt=dt=null,qr=!1,tl=vc=0,jr=null}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?dt.memoizedState=An=t:An=An.next=t,An}function yn(){if(Kt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var n=An===null?dt.memoizedState:An.next;if(n!==null)An=n,Kt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},An===null?dt.memoizedState=An=t:An=An.next=t}return An}function xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(t){var n=tl;return tl+=1,jr===null&&(jr=[]),t=qm(jr,t,n),n=dt,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?F0:jf),t}function Sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===I)return Vn(t)}throw Error(r(438,String(t)))}function Bf(t){var n=null,s=dt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=xc(),dt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=W;return n.index++,s}function Oa(t,n){return typeof n=="function"?n(t):n}function Mc(t){var n=yn();return Ff(n,Kt,t)}function Ff(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=S=null,k=null,re=n,ve=!1;do{var Ee=re.lane&-536870913;if(Ee!==re.lane?(Ct&Ee)===Ee:(Ua&Ee)===Ee){var le=re.revertLane;if(le===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ee===Vr&&(ve=!0);else if((Ua&le)===le){re=re.next,le===Vr&&(ve=!0);continue}else Ee={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(w=k=Ee,S=p):k=k.next=Ee,dt.lanes|=le,Ms|=le;Ee=re.action,fr&&s(p,Ee),p=re.hasEagerState?re.eagerState:s(p,Ee)}else le={lane:Ee,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(w=k=le,S=p):k=k.next=le,dt.lanes|=Ee,Ms|=Ee;re=re.next}while(re!==null&&re!==n);if(k===null?S=p:k.next=w,!_i(p,t.memoizedState)&&(Rn=!0,ve&&(s=kr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=k,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function zf(t){var n=yn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);_i(p,n.memoizedState)||(Rn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function a0(t,n,s){var l=dt,f=yn(),p=Dt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!_i((Kt||f).memoizedState,s);if(S&&(f.memoizedState=s,Rn=!0),f=f.queue,Vf(o0.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,Zr(9,{destroy:void 0},r0.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Ua&127)!==0||s0(l,n,s)}return s}function s0(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=dt.updateQueue,n===null?(n=xc(),dt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function r0(t,n,s,l){n.value=s,n.getSnapshot=l,l0(n)&&c0(t)}function o0(t,n,s){return s(function(){l0(n)&&c0(t)})}function l0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!_i(t,s)}catch{return!0}}function c0(t){var n=nr(t,2);n!==null&&di(n,t,2)}function Hf(t){var n=ni();if(typeof t=="function"){var s=t;if(t=s(),fr){Ce(!0);try{s()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},n}function u0(t,n,s,l){return t.baseState=s,Ff(t,Kt,typeof l=="function"?l:Oa)}function fM(t,n,s,l,f){if(bc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};H.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,f0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function f0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=H.T,S={};H.T=S;try{var w=s(f,l),k=H.S;k!==null&&k(S,w),d0(t,n,w)}catch(re){Gf(t,n,re)}finally{p!==null&&S.types!==null&&(p.types=S.types),H.T=p}}else try{p=s(f,l),d0(t,n,p)}catch(re){Gf(t,n,re)}}function d0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){h0(t,n,l)},function(l){return Gf(t,n,l)}):h0(t,n,s)}function h0(t,n,s){n.status="fulfilled",n.value=s,p0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,f0(t,s)))}function Gf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,p0(n),n=n.next;while(n!==l)}t.action=null}function p0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function m0(t,n){return n}function g0(t,n){if(Dt){var s=en.formState;if(s!==null){e:{var l=dt;if(Dt){if(sn){t:{for(var f=sn,p=Bi;f.nodeType!==8;){if(!p){f=null;break t}if(f=zi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){sn=zi(f.nextSibling),l=f.data==="F!";break e}}ds(l)}l=!1}l&&(n=s[0])}}return s=ni(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m0,lastRenderedState:n},s.queue=l,s=P0.bind(null,dt,l),l.dispatch=s,l=Hf(!1),p=qf.bind(null,dt,!1,l.queue),l=ni(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=fM.bind(null,dt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function _0(t){var n=yn();return v0(n,Kt,t)}function v0(t,n,s){if(n=Ff(t,n,m0)[0],t=Mc(Oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=nl(n)}catch(S){throw S===Xr?fc:S}else l=n;n=yn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(dt.flags|=2048,Zr(9,{destroy:void 0},dM.bind(null,f,s),null)),[l,p,t]}function dM(t,n){t.action=n}function x0(t){var n=yn(),s=Kt;if(s!==null)return v0(n,s,t);yn(),n=n.memoizedState,s=yn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Zr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=dt.updateQueue,n===null&&(n=xc(),dt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function S0(){return yn().memoizedState}function yc(t,n,s,l){var f=ni();dt.flags|=t,f.memoizedState=Zr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Ec(t,n,s,l){var f=yn();l=l===void 0?null:l;var p=f.memoizedState.inst;Kt!==null&&l!==null&&Nf(l,Kt.memoizedState.deps)?f.memoizedState=Zr(n,p,s,l):(dt.flags|=t,f.memoizedState=Zr(1|n,p,s,l))}function M0(t,n){yc(8390656,8,t,n)}function Vf(t,n){Ec(2048,8,t,n)}function hM(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=xc(),dt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function y0(t){var n=yn().memoizedState;return hM({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function E0(t,n){return Ec(4,2,t,n)}function b0(t,n){return Ec(4,4,t,n)}function T0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function A0(t,n,s){s=s!=null?s.concat([t]):null,Ec(4,4,T0.bind(null,n,t),s)}function kf(){}function R0(t,n){var s=yn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Nf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function C0(t,n){var s=yn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Nf(n,l[1]))return l[0];if(l=t(),fr){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,n],l}function Xf(t,n,s){return s===void 0||(Ua&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=wg(),dt.lanes|=t,Ms|=t,s)}function w0(t,n,s,l){return _i(s,n)?s:Yr.current!==null?(t=Xf(t,s,l),_i(t,n)||(Rn=!0),t):(Ua&42)===0||(Ua&1073741824)!==0&&(Ct&261930)===0?(Rn=!0,t.memoizedState=s):(t=wg(),dt.lanes|=t,Ms|=t,n)}function D0(t,n,s,l,f){var p=V.p;V.p=p!==0&&8>p?p:8;var S=H.T,w={};H.T=w,qf(t,!1,n,s);try{var k=f(),re=H.S;if(re!==null&&re(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ve=lM(k,l);il(t,n,ve,Ei(t))}else il(t,n,l,Ei(t))}catch(Ee){il(t,n,{then:function(){},status:"rejected",reason:Ee},Ei())}finally{V.p=p,S!==null&&w.types!==null&&(S.types=w.types),H.T=S}}function pM(){}function Wf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=L0(t).queue;D0(t,f,n,te,s===null?pM:function(){return N0(t),s(l)})}function L0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:te},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function N0(t){var n=L0(t);n.next===null&&(n=t.alternate.memoizedState),il(t,n.next.queue,{},Ei())}function Yf(){return Vn(Sl)}function U0(){return yn().memoizedState}function O0(){return yn().memoizedState}function mM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ei();t=ms(s);var l=gs(n,t,s);l!==null&&(di(l,n,s),Jo(l,n,s)),n={cache:Mf()},t.payload=n;return}n=n.return}}function gM(t,n,s){var l=Ei();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},bc(t)?I0(n,s):(s=uf(t,n,s,l),s!==null&&(di(s,t,l),B0(s,n,l)))}function P0(t,n,s){var l=Ei();il(t,n,s,l)}function il(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(bc(t))I0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,w=p(S,s);if(f.hasEagerState=!0,f.eagerState=w,_i(w,S))return ac(t,n,f,0),en===null&&ic(),!1}catch{}finally{}if(s=uf(t,n,f,l),s!==null)return di(s,t,l),B0(s,n,l),!0}return!1}function qf(t,n,s,l){if(l={lane:2,revertLane:Td(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bc(t)){if(n)throw Error(r(479))}else n=uf(t,s,l,2),n!==null&&di(n,t,2)}function bc(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function I0(t,n){qr=_c=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function B0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,hn(t,s)}}var al={readContext:Vn,use:Sc,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};al.useEffectEvent=gn;var F0={readContext:Vn,use:Sc,useCallback:function(t,n){return ni().memoizedState=[t,n===void 0?null:n],t},useContext:Vn,useEffect:M0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,yc(4194308,4,T0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return yc(4194308,4,t,n)},useInsertionEffect:function(t,n){yc(4,2,t,n)},useMemo:function(t,n){var s=ni();n=n===void 0?null:n;var l=t();if(fr){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ni();if(s!==void 0){var f=s(n);if(fr){Ce(!0);try{s(n)}finally{Ce(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=gM.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=ni();return t={current:t},n.memoizedState=t},useState:function(t){t=Hf(t);var n=t.queue,s=P0.bind(null,dt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:kf,useDeferredValue:function(t,n){var s=ni();return Xf(s,t,n)},useTransition:function(){var t=Hf(!1);return t=D0.bind(null,dt,t.queue,!0,!1),ni().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=dt,f=ni();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(Ct&127)!==0||s0(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,M0(o0.bind(null,l,p,t),[t]),l.flags|=2048,Zr(9,{destroy:void 0},r0.bind(null,l,p,s,n),null),s},useId:function(){var t=ni(),n=en.identifierPrefix;if(Dt){var s=ha,l=da;s=(l&~(1<<32-Fe(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=vc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=cM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yf,useFormState:g0,useActionState:g0,useOptimistic:function(t){var n=ni();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=qf.bind(null,dt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Bf,useCacheRefresh:function(){return ni().memoizedState=mM.bind(null,dt)},useEffectEvent:function(t){var n=ni(),s={impl:t};return n.memoizedState=s,function(){if((Ht&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},jf={readContext:Vn,use:Sc,useCallback:R0,useContext:Vn,useEffect:Vf,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:b0,useMemo:C0,useReducer:Mc,useRef:S0,useState:function(){return Mc(Oa)},useDebugValue:kf,useDeferredValue:function(t,n){var s=yn();return w0(s,Kt.memoizedState,t,n)},useTransition:function(){var t=Mc(Oa)[0],n=yn().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:a0,useId:U0,useHostTransitionStatus:Yf,useFormState:_0,useActionState:_0,useOptimistic:function(t,n){var s=yn();return u0(s,Kt,t,n)},useMemoCache:Bf,useCacheRefresh:O0};jf.useEffectEvent=y0;var z0={readContext:Vn,use:Sc,useCallback:R0,useContext:Vn,useEffect:Vf,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:b0,useMemo:C0,useReducer:zf,useRef:S0,useState:function(){return zf(Oa)},useDebugValue:kf,useDeferredValue:function(t,n){var s=yn();return Kt===null?Xf(s,t,n):w0(s,Kt.memoizedState,t,n)},useTransition:function(){var t=zf(Oa)[0],n=yn().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:a0,useId:U0,useHostTransitionStatus:Yf,useFormState:x0,useActionState:x0,useOptimistic:function(t,n){var s=yn();return Kt!==null?u0(s,Kt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:O0};z0.useEffectEvent=y0;function Zf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Kf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ei(),f=ms(l);f.payload=n,s!=null&&(f.callback=s),n=gs(t,f,l),n!==null&&(di(n,t,l),Jo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ei(),f=ms(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=gs(t,f,l),n!==null&&(di(n,t,l),Jo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ei(),l=ms(s);l.tag=2,n!=null&&(l.callback=n),n=gs(t,l,s),n!==null&&(di(n,t,s),Jo(n,t,s))}};function H0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Xo(s,l)||!Xo(f,p):!0}function G0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Kf.enqueueReplaceState(n,n.state,null)}function dr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function V0(t){nc(t)}function k0(t){console.error(t)}function X0(t){nc(t)}function Tc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function W0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Qf(t,n,s){return s=ms(s),s.tag=3,s.payload={element:null},s.callback=function(){Tc(t,n)},s}function Y0(t){return t=ms(t),t.tag=3,t}function q0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){W0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){W0(n,s,l),typeof f!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function _M(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Gr(n,s,f,!0),s=xi.current,s!==null){switch(s.tag){case 31:case 13:return Fi===null?Bc():s.alternate===null&&_n===0&&(_n=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===dc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),yd(t,l,f)),!1;case 22:return s.flags|=65536,l===dc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),yd(t,l,f)),!1}throw Error(r(435,s.tag))}return yd(t,l,f),Bc(),!1}if(Dt)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==gf&&(t=Error(r(422),{cause:l}),qo(Oi(t,s)))):(l!==gf&&(n=Error(r(423),{cause:l}),qo(Oi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Oi(l,s),f=Qf(t.stateNode,l,f),Rf(t,f),_n!==4&&(_n=2)),!1;var p=Error(r(520),{cause:l});if(p=Oi(p,s),dl===null?dl=[p]:dl.push(p),_n!==4&&(_n=2),n===null)return!0;l=Oi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Qf(s.stateNode,l,t),Rf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ys===null||!ys.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Y0(f),q0(f,t,s,l),Rf(s,f),!1}s=s.return}while(s!==null);return!1}var Jf=Error(r(461)),Rn=!1;function kn(t,n,s,l){n.child=t===null?Qm(n,null,s,l):ur(n,t.child,s,l)}function j0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return rr(n),l=Uf(t,n,s,S,p,f),w=Of(),t!==null&&!Rn?(Pf(t,n,f),Pa(t,n,f)):(Dt&&w&&pf(n),n.flags|=1,kn(t,n,l,f),n.child)}function Z0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!ff(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,K0(t,n,p,l,f)):(t=rc(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!rd(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Xo,s(S,l)&&t.ref===n.ref)return Pa(t,n,f)}return n.flags|=1,t=wa(p,l),t.ref=n.ref,t.return=n,n.child=t}function K0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Xo(p,l)&&t.ref===n.ref)if(Rn=!1,n.pendingProps=l=p,rd(t,f))(t.flags&131072)!==0&&(Rn=!0);else return n.lanes=t.lanes,Pa(t,n,f)}return $f(t,n,s,l,f)}function Q0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return J0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&uc(n,p!==null?p.cachePool:null),p!==null?e0(n,p):wf(),t0(n);else return l=n.lanes=536870912,J0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(uc(n,p.cachePool),e0(n,p),vs(),n.memoizedState=null):(t!==null&&uc(n,null),wf(),vs());return kn(t,n,f,s),n.child}function sl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function J0(t,n,s,l,f){var p=Ef();return p=p===null?null:{parent:Tn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&uc(n,null),wf(),t0(n),t!==null&&Gr(t,n,l,!0),n.childLanes=f,null}function Ac(t,n){return n=Cc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $0(t,n,s){return ur(n,t.child,null,s),t=Ac(n,n.pendingProps),t.flags|=2,Si(n),n.memoizedState=null,t}function vM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=Ac(n,l),n.lanes=536870912,sl(null,t);if(Lf(n),(t=sn)?(t=f_(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:us!==null?{id:da,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},s=Im(t),s.return=n,n.child=s,Gn=n,sn=null)):t=null,t===null)throw ds(n);return n.lanes=536870912,null}return Ac(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Lf(n),f)if(n.flags&256)n.flags&=-257,n=$0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Rn||Gr(t,n,s,!1),f=(s&t.childLanes)!==0,Rn||f){if(l=en,l!==null&&(S=jt(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,nr(t,S),di(l,t,S),Jf;Bc(),n=$0(t,n,s)}else t=p.treeContext,sn=zi(S.nextSibling),Gn=n,Dt=!0,fs=null,Bi=!1,t!==null&&zm(n,t),n=Ac(n,l),n.flags|=4096;return n}return t=wa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function $f(t,n,s,l,f){return rr(n),s=Uf(t,n,s,l,void 0,f),l=Of(),t!==null&&!Rn?(Pf(t,n,f),Pa(t,n,f)):(Dt&&l&&pf(n),n.flags|=1,kn(t,n,s,f),n.child)}function eg(t,n,s,l,f,p){return rr(n),n.updateQueue=null,s=i0(n,l,s,f),n0(t),l=Of(),t!==null&&!Rn?(Pf(t,n,p),Pa(t,n,p)):(Dt&&l&&pf(n),n.flags|=1,kn(t,n,s,p),n.child)}function tg(t,n,s,l,f){if(rr(n),n.stateNode===null){var p=Br,S=s.contextType;typeof S=="object"&&S!==null&&(p=Vn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Kf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},Tf(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?Vn(S):Br,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Zf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Kf.enqueueReplaceState(p,p.state,null),el(n,l,p,f),$o(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,k=dr(s,w);p.props=k;var re=p.context,ve=s.contextType;S=Br,typeof ve=="object"&&ve!==null&&(S=Vn(ve));var Ee=s.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||re!==S)&&G0(n,p,l,S),ps=!1;var le=n.memoizedState;p.state=le,el(n,l,p,f),$o(),re=n.memoizedState,w||le!==re||ps?(typeof Ee=="function"&&(Zf(n,s,Ee,l),re=n.memoizedState),(k=ps||H0(n,s,k,l,le,re,S))?(ve||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=S,l=k):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,Af(t,n),S=n.memoizedProps,ve=dr(s,S),p.props=ve,Ee=n.pendingProps,le=p.context,re=s.contextType,k=Br,typeof re=="object"&&re!==null&&(k=Vn(re)),w=s.getDerivedStateFromProps,(re=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Ee||le!==k)&&G0(n,p,l,k),ps=!1,le=n.memoizedState,p.state=le,el(n,l,p,f),$o();var he=n.memoizedState;S!==Ee||le!==he||ps||t!==null&&t.dependencies!==null&&lc(t.dependencies)?(typeof w=="function"&&(Zf(n,s,w,l),he=n.memoizedState),(ve=ps||H0(n,s,ve,l,le,he,k)||t!==null&&t.dependencies!==null&&lc(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,he,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,he,k)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=he),p.props=l,p.state=he,p.context=k,l=ve):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Rc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=ur(n,t.child,null,f),n.child=ur(n,null,s,f)):kn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Pa(t,n,f),t}function ng(t,n,s,l){return ar(),n.flags|=256,kn(t,n,s,l),n.child}var ed={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function td(t){return{baseLanes:t,cachePool:Wm()}}function nd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=yi),t}function ig(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(f?_s(n):vs(),(t=sn)?(t=f_(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:us!==null?{id:da,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},s=Im(t),s.return=n,n.child=s,Gn=n,sn=null)):t=null,t===null)throw ds(n);return Fd(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(vs(),f=n.mode,w=Cc({mode:"hidden",children:w},f),l=ir(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=td(s),l.childLanes=nd(t,S,s),n.memoizedState=ed,sl(null,l)):(_s(n),id(n,w))}var k=t.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(p)n.flags&256?(_s(n),n.flags&=-257,n=ad(t,n,s)):n.memoizedState!==null?(vs(),n.child=t.child,n.flags|=128,n=null):(vs(),w=l.fallback,f=n.mode,l=Cc({mode:"visible",children:l.children},f),w=ir(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,ur(n,t.child,null,s),l=n.child,l.memoizedState=td(s),l.childLanes=nd(t,S,s),n.memoizedState=ed,n=sl(null,l));else if(_s(n),Fd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var re=S.dgst;S=re,l=Error(r(419)),l.stack="",l.digest=S,qo({value:l,source:null,stack:null}),n=ad(t,n,s)}else if(Rn||Gr(t,n,s,!1),S=(s&t.childLanes)!==0,Rn||S){if(S=en,S!==null&&(l=jt(S,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,nr(t,l),di(S,t,l),Jf;Bd(w)||Bc(),n=ad(t,n,s)}else Bd(w)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,sn=zi(w.nextSibling),Gn=n,Dt=!0,fs=null,Bi=!1,t!==null&&zm(n,t),n=id(n,l.children),n.flags|=4096);return n}return f?(vs(),w=l.fallback,f=n.mode,k=t.child,re=k.sibling,l=wa(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,re!==null?w=wa(re,w):(w=ir(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,sl(null,l),l=n.child,w=t.child.memoizedState,w===null?w=td(s):(f=w.cachePool,f!==null?(k=Tn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=Wm(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=nd(t,S,s),n.memoizedState=ed,sl(t.child,l)):(_s(n),s=t.child,t=s.sibling,s=wa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function id(t,n){return n=Cc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cc(t,n){return t=vi(22,t,null,n),t.lanes=0,t}function ad(t,n,s){return ur(n,t.child,null,s),t=id(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ag(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),xf(t.return,n,s)}function sd(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function sg(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=Mn.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,be(Mn,S),kn(t,n,l,s),l=Dt?Yo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,s,n);else if(t.tag===19)ag(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&gc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),sd(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&gc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}sd(n,!0,s,null,p,l);break;case"together":sd(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Pa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Ms|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Gr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=wa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=wa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function rd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lc(t)))}function xM(t,n,s){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),hs(n,Tn,t.memoizedState.cache),ar();break;case 27:case 5:$e(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:hs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(_s(n),n.flags|=128,null):(s&n.child.childLanes)!==0?ig(t,n,s):(_s(n),t=Pa(t,n,s),t!==null?t.sibling:null);_s(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Gr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return sg(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),be(Mn,Mn.current),l)break;return null;case 22:return n.lanes=0,Q0(t,n,s,n.pendingProps);case 24:hs(n,Tn,t.memoizedState.cache)}return Pa(t,n,s)}function rg(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Rn=!0;else{if(!rd(t,s)&&(n.flags&128)===0)return Rn=!1,xM(t,n,s);Rn=(t.flags&131072)!==0}else Rn=!1,Dt&&(n.flags&1048576)!==0&&Fm(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=lr(n.elementType),n.type=t,typeof t=="function")ff(t)?(l=dr(t,l),n.tag=1,n=tg(null,n,t,l,s)):(n.tag=0,n=$f(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){n.tag=11,n=j0(null,n,t,l,s);break e}else if(f===z){n.tag=14,n=Z0(null,n,t,l,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return $f(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=dr(l,n.pendingProps),tg(t,n,l,f,s);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,Af(t,n),el(n,l,null,s);var S=n.memoizedState;if(l=S.cache,hs(n,Tn,l),l!==p.cache&&Sf(n,[Tn],s,!0),$o(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=ng(t,n,l,s);break e}else if(l!==f){f=Oi(Error(r(424)),n),qo(f),n=ng(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(sn=zi(t.firstChild),Gn=n,Dt=!0,fs=null,Bi=!0,s=Qm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ar(),l===f){n=Pa(t,n,s);break e}kn(t,n,l,s)}n=n.child}return n;case 26:return Rc(t,n),t===null?(s=__(n.type,null,n.pendingProps,null))?n.memoizedState=s:Dt||(s=n.type,t=n.pendingProps,l=Xc(ie.current).createElement(s),l[an]=n,l[Sn]=t,Xn(l,s,t),pn(l),n.stateNode=l):n.memoizedState=__(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&Dt&&(l=n.stateNode=p_(n.type,n.pendingProps,ie.current),Gn=n,Bi=!0,f=sn,As(n.type)?(zd=f,sn=zi(l.firstChild)):sn=f),kn(t,n,n.pendingProps.children,s),Rc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((f=l=sn)&&(l=ZM(l,n.type,n.pendingProps,Bi),l!==null?(n.stateNode=l,Gn=n,sn=zi(l.firstChild),Bi=!1,f=!0):f=!1),f||ds(n)),$e(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,Od(f,p)?l=null:S!==null&&Od(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Uf(t,n,uM,null,null,s),Sl._currentValue=f),Rc(t,n),kn(t,n,l,s),n.child;case 6:return t===null&&Dt&&((t=s=sn)&&(s=KM(s,n.pendingProps,Bi),s!==null?(n.stateNode=s,Gn=n,sn=null,t=!0):t=!1),t||ds(n)),null;case 13:return ig(t,n,s);case 4:return Me(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ur(n,null,l,s):kn(t,n,l,s),n.child;case 11:return j0(t,n,n.type,n.pendingProps,s);case 7:return kn(t,n,n.pendingProps,s),n.child;case 8:return kn(t,n,n.pendingProps.children,s),n.child;case 12:return kn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,hs(n,n.type,l.value),kn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,rr(n),f=Vn(f),l=l(f),n.flags|=1,kn(t,n,l,s),n.child;case 14:return Z0(t,n,n.type,n.pendingProps,s);case 15:return K0(t,n,n.type,n.pendingProps,s);case 19:return sg(t,n,s);case 31:return vM(t,n,s);case 22:return Q0(t,n,s,n.pendingProps);case 24:return rr(n),l=Vn(Tn),t===null?(f=Ef(),f===null&&(f=en,p=Mf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},Tf(n),hs(n,Tn,f)):((t.lanes&s)!==0&&(Af(t,n),el(n,null,null,s),$o()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),hs(n,Tn,l)):(l=p.cache,hs(n,Tn,l),l!==f.cache&&Sf(n,[Tn],s,!0))),kn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ia(t){t.flags|=4}function od(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Ug())t.flags|=8192;else throw cr=dc,bf}else t.flags&=-16777217}function og(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!y_(n))if(Ug())t.flags|=8192;else throw cr=dc,bf}function wc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,$r|=n)}function rl(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function SM(t,n,s){var l=n.pendingProps;switch(mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Na(Tn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Hr(n)?Ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),rn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ia(n),p!==null?(rn(n),og(n,p)):(rn(n),od(n,f,null,l,s))):p?p!==t.memoizedState?(Ia(n),rn(n),og(n,p)):(rn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ia(n),rn(n),od(n,f,t,l,s)),null;case 27:if(qe(n),s=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return rn(n),null}t=we.current,Hr(n)?Hm(n):(t=p_(f,l,s),n.stateNode=t,Ia(n))}return rn(n),null;case 5:if(qe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return rn(n),null}if(p=we.current,Hr(n))Hm(n);else{var S=Xc(ie.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[an]=n,p[Sn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(Xn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ia(n)}}return rn(n),od(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Hr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Gn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[an]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||i_(t.nodeValue,s)),t||ds(n,!0)}else t=Xc(t).createTextNode(l),t[an]=n,n.stateNode=t}return rn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Hr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[an]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),t=!1}else s=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Si(n),n):(Si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return rn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Hr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[an]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),f=!1}else f=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Si(n),n):(Si(n),null)}return Si(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),wc(n,n.updateQueue),rn(n),null);case 4:return Ge(),t===null&&wd(n.stateNode.containerInfo),rn(n),null;case 10:return Na(n.type),rn(n),null;case 19:if(J(Mn),l=n.memoizedState,l===null)return rn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)rl(l,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=gc(t),p!==null){for(n.flags|=128,rl(l,!1),t=p.updateQueue,n.updateQueue=t,wc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Pm(s,t),s=s.sibling;return be(Mn,Mn.current&1|2),Dt&&Da(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Ut()>Oc&&(n.flags|=128,f=!0,rl(l,!1),n.lanes=4194304)}else{if(!f)if(t=gc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,wc(n,t),rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Dt)return rn(n),null}else 2*Ut()-l.renderingStartTime>Oc&&s!==536870912&&(n.flags|=128,f=!0,rl(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,s=Mn.current,be(Mn,f?s&1|2:s&1),Dt&&Da(n,l.treeForkCount),t):(rn(n),null);case 22:case 23:return Si(n),Df(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),s=n.updateQueue,s!==null&&wc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&J(or),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Na(Tn),rn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function MM(t,n){switch(mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Na(Tn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qe(n),null;case 31:if(n.memoizedState!==null){if(Si(n),n.alternate===null)throw Error(r(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(Mn),null;case 4:return Ge(),null;case 10:return Na(n.type),null;case 22:case 23:return Si(n),Df(),t!==null&&J(or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Na(Tn),null;case 25:return null;default:return null}}function lg(t,n){switch(mf(n),n.tag){case 3:Na(Tn),Ge();break;case 26:case 27:case 5:qe(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Si(n);break;case 13:Si(n);break;case 19:J(Mn);break;case 10:Na(n.type);break;case 22:case 23:Si(n),Df(),t!==null&&J(or);break;case 24:Na(Tn)}}function ol(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(w){Wt(n,n.return,w)}}function xs(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=n;var k=s,re=w;try{re()}catch(ve){Wt(f,k,ve)}}}l=l.next}while(l!==p)}}catch(ve){Wt(n,n.return,ve)}}function cg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{$m(n,s)}catch(l){Wt(t,t.return,l)}}}function ug(t,n,s){s.props=dr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,n,l)}}function ll(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,n,f)}}function pa(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,n,f)}else s.current=null}function fg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function ld(t,n,s){try{var l=t.stateNode;kM(l,t.type,s,n),l[Sn]=n}catch(f){Wt(t,t.return,f)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&As(t.type)||t.tag===4}function cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&As(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Qi));else if(l!==4&&(l===27&&As(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(ud(t,n,s),t=t.sibling;t!==null;)ud(t,n,s),t=t.sibling}function Dc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&As(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Dc(t,n,s),t=t.sibling;t!==null;)Dc(t,n,s),t=t.sibling}function hg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Xn(n,l,s),n[an]=t,n[Sn]=s}catch(p){Wt(t,t.return,p)}}var Ba=!1,Cn=!1,fd=!1,pg=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function yM(t,n){if(t=t.containerInfo,Nd=Qc,t=Am(t),af(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,w=-1,k=-1,re=0,ve=0,Ee=t,le=null;t:for(;;){for(var he;Ee!==s||f!==0&&Ee.nodeType!==3||(w=S+f),Ee!==p||l!==0&&Ee.nodeType!==3||(k=S+l),Ee.nodeType===3&&(S+=Ee.nodeValue.length),(he=Ee.firstChild)!==null;)le=Ee,Ee=he;for(;;){if(Ee===t)break t;if(le===s&&++re===f&&(w=S),le===p&&++ve===l&&(k=S),(he=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=he}s=w===-1||k===-1?null:{start:w,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ud={focusedElem:t,selectionRange:s},Qc=!1,Bn=n;Bn!==null;)if(n=Bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Bn=t;else for(;Bn!==null;){switch(n=Bn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ke=dr(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Wt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Id(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Bn=t;break}Bn=n.return}}function mg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:za(t,s),l&4&&ol(5,s);break;case 1:if(za(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Wt(s,s.return,S)}else{var f=dr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Wt(s,s.return,S)}}l&64&&cg(s),l&512&&ll(s,s.return);break;case 3:if(za(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{$m(t,n)}catch(S){Wt(s,s.return,S)}}break;case 27:n===null&&l&4&&hg(s);case 26:case 5:za(t,s),n===null&&l&4&&fg(s),l&512&&ll(s,s.return);break;case 12:za(t,s);break;case 31:za(t,s),l&4&&vg(t,s);break;case 13:za(t,s),l&4&&xg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=LM.bind(null,s),QM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ba,!l){n=n!==null&&n.memoizedState!==null||Cn,f=Ba;var p=Cn;Ba=l,(Cn=n)&&!p?Ha(t,s,(s.subtreeFlags&8772)!==0):za(t,s),Ba=f,Cn=p}break;case 30:break;default:za(t,s)}}function gg(t){var n=t.alternate;n!==null&&(t.alternate=null,gg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ji(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fn=null,li=!1;function Fa(t,n,s){for(s=s.child;s!==null;)_g(t,n,s),s=s.sibling}function _g(t,n,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(de,s)}catch{}switch(s.tag){case 26:Cn||pa(s,n),Fa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Cn||pa(s,n);var l=fn,f=li;As(s.type)&&(fn=s.stateNode,li=!1),Fa(t,n,s),_l(s.stateNode),fn=l,li=f;break;case 5:Cn||pa(s,n);case 6:if(l=fn,f=li,fn=null,Fa(t,n,s),fn=l,li=f,fn!==null)if(li)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(s.stateNode)}catch(p){Wt(s,n,p)}else try{fn.removeChild(s.stateNode)}catch(p){Wt(s,n,p)}break;case 18:fn!==null&&(li?(t=fn,c_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),oo(t)):c_(fn,s.stateNode));break;case 4:l=fn,f=li,fn=s.stateNode.containerInfo,li=!0,Fa(t,n,s),fn=l,li=f;break;case 0:case 11:case 14:case 15:xs(2,s,n),Cn||xs(4,s,n),Fa(t,n,s);break;case 1:Cn||(pa(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ug(s,n,l)),Fa(t,n,s);break;case 21:Fa(t,n,s);break;case 22:Cn=(l=Cn)||s.memoizedState!==null,Fa(t,n,s),Cn=l;break;default:Fa(t,n,s)}}function vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{oo(t)}catch(s){Wt(n,n.return,s)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{oo(t)}catch(s){Wt(n,n.return,s)}}function EM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pg),n;default:throw Error(r(435,t.tag))}}function Lc(t,n){var s=EM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=NM.bind(null,t,l);l.then(f,f)}})}function ci(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(As(w.type)){fn=w.stateNode,li=!1;break e}break;case 5:fn=w.stateNode,li=!1;break e;case 3:case 4:fn=w.stateNode.containerInfo,li=!0;break e}w=w.return}if(fn===null)throw Error(r(160));_g(p,S,f),fn=null,li=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var $i=null;function Sg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(n,t),ui(t),l&4&&(xs(3,t,t.return),ol(3,t),xs(5,t,t.return));break;case 1:ci(n,t),ui(t),l&512&&(Cn||s===null||pa(s,s.return)),l&64&&Ba&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=$i;if(ci(n,t),ui(t),l&512&&(Cn||s===null||pa(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[qi]||p[an]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Xn(p,l,s),p[an]=t,pn(p),l=p;break e;case"link":var S=S_("link","href",f).get(l+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(p=S[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}p=f.createElement(l),Xn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=S_("meta","content",f).get(l+(s.content||""))){for(w=0;w<S.length;w++)if(p=S[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}p=f.createElement(l),Xn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[an]=t,pn(p),l=p}t.stateNode=l}else M_(f,t.type,t.stateNode);else t.stateNode=x_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?M_(f,t.type,t.stateNode):x_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ld(t,t.memoizedProps,s.memoizedProps)}break;case 27:ci(n,t),ui(t),l&512&&(Cn||s===null||pa(s,s.return)),s!==null&&l&4&&ld(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ci(n,t),ui(t),l&512&&(Cn||s===null||pa(s,s.return)),t.flags&32){f=t.stateNode;try{Hn(f,"")}catch(Ke){Wt(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,ld(t,f,s!==null?s.memoizedProps:f)),l&1024&&(fd=!0);break;case 6:if(ci(n,t),ui(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){Wt(t,t.return,Ke)}}break;case 3:if(qc=null,f=$i,$i=Wc(n.containerInfo),ci(n,t),$i=f,ui(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{oo(n.containerInfo)}catch(Ke){Wt(t,t.return,Ke)}fd&&(fd=!1,Mg(t));break;case 4:l=$i,$i=Wc(t.stateNode.containerInfo),ci(n,t),ui(t),$i=l;break;case 12:ci(n,t),ui(t);break;case 31:ci(n,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Lc(t,l)));break;case 13:ci(n,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Uc=Ut()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Lc(t,l)));break;case 22:f=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,re=Ba,ve=Cn;if(Ba=re||f,Cn=ve||k,ci(n,t),Cn=ve,Ba=re,ui(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||k||Ba||Cn||hr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){k=s=n;try{if(p=k.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=k.stateNode;var Ee=k.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;w.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){Wt(k,k.return,Ke)}}}else if(n.tag===6){if(s===null){k=n;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(Ke){Wt(k,k.return,Ke)}}}else if(n.tag===18){if(s===null){k=n;try{var he=k.stateNode;f?u_(he,!0):u_(k.stateNode,!1)}catch(Ke){Wt(k,k.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Lc(t,s))));break;case 19:ci(n,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Lc(t,l)));break;case 30:break;case 21:break;default:ci(n,t),ui(t)}}function ui(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(dg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=cd(t);Dc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(Hn(S,""),s.flags&=-33);var w=cd(t);Dc(t,w,S);break;case 3:case 4:var k=s.stateNode.containerInfo,re=cd(t);ud(t,re,k);break;default:throw Error(r(161))}}catch(ve){Wt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function za(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xs(4,n,n.return),hr(n);break;case 1:pa(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ug(n,n.return,s),hr(n);break;case 27:_l(n.stateNode);case 26:case 5:pa(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Ha(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Ha(f,p,s),ol(4,p);break;case 1:if(Ha(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Wt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Jm(k[f],w)}catch(re){Wt(l,l.return,re)}}s&&S&64&&cg(p),ll(p,p.return);break;case 27:hg(p);case 26:case 5:Ha(f,p,s),s&&l===null&&S&4&&fg(p),ll(p,p.return);break;case 12:Ha(f,p,s);break;case 31:Ha(f,p,s),s&&S&4&&vg(f,p);break;case 13:Ha(f,p,s),s&&S&4&&xg(f,p);break;case 22:p.memoizedState===null&&Ha(f,p,s),ll(p,p.return);break;case 30:break;default:Ha(f,p,s)}n=n.sibling}}function dd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&jo(s))}function hd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jo(t))}function ea(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yg(t,n,s,l),n=n.sibling}function yg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ea(t,n,s,l),f&2048&&ol(9,n);break;case 1:ea(t,n,s,l);break;case 3:ea(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jo(t)));break;case 12:if(f&2048){ea(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,w=p.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Wt(n,n.return,k)}}else ea(t,n,s,l);break;case 31:ea(t,n,s,l);break;case 13:ea(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?ea(t,n,s,l):cl(t,n):p._visibility&2?ea(t,n,s,l):(p._visibility|=2,Kr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&dd(S,n);break;case 24:ea(t,n,s,l),f&2048&&hd(n.alternate,n);break;default:ea(t,n,s,l)}}function Kr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,w=s,k=l,re=S.flags;switch(S.tag){case 0:case 11:case 15:Kr(p,S,w,k,f),ol(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?Kr(p,S,w,k,f):cl(p,S):(ve._visibility|=2,Kr(p,S,w,k,f)),f&&re&2048&&dd(S.alternate,S);break;case 24:Kr(p,S,w,k,f),f&&re&2048&&hd(S.alternate,S);break;default:Kr(p,S,w,k,f)}n=n.sibling}}function cl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:cl(s,l),f&2048&&dd(l.alternate,l);break;case 24:cl(s,l),f&2048&&hd(l.alternate,l);break;default:cl(s,l)}n=n.sibling}}var ul=8192;function Qr(t,n,s){if(t.subtreeFlags&ul)for(t=t.child;t!==null;)Eg(t,n,s),t=t.sibling}function Eg(t,n,s){switch(t.tag){case 26:Qr(t,n,s),t.flags&ul&&t.memoizedState!==null&&cy(s,$i,t.memoizedState,t.memoizedProps);break;case 5:Qr(t,n,s);break;case 3:case 4:var l=$i;$i=Wc(t.stateNode.containerInfo),Qr(t,n,s),$i=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ul,ul=16777216,Qr(t,n,s),ul=l):Qr(t,n,s));break;default:Qr(t,n,s)}}function bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Bn=l,Ag(l,t)}bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&xs(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nc(t)):fl(t);break;default:fl(t)}}function Nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Bn=l,Ag(l,t)}bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xs(8,n,n.return),Nc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Nc(n));break;default:Nc(n)}t=t.sibling}}function Ag(t,n){for(;Bn!==null;){var s=Bn;switch(s.tag){case 0:case 11:case 15:xs(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Bn=l;else e:for(s=t;Bn!==null;){l=Bn;var f=l.sibling,p=l.return;if(gg(l),l===s){Bn=null;break e}if(f!==null){f.return=p,Bn=f;break e}Bn=p}}}var bM={getCacheForType:function(t){var n=Vn(Tn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Vn(Tn).controller.signal}},TM=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,Et=null,Ct=0,Xt=0,Mi=null,Ss=!1,Jr=!1,pd=!1,Ga=0,_n=0,Ms=0,pr=0,md=0,yi=0,$r=0,dl=null,fi=null,gd=!1,Uc=0,Rg=0,Oc=1/0,Pc=null,ys=null,Un=0,Es=null,eo=null,Va=0,_d=0,vd=null,Cg=null,hl=0,xd=null;function Ei(){return(Ht&2)!==0&&Ct!==0?Ct&-Ct:H.T!==null?Td():Aa()}function wg(){if(yi===0)if((Ct&536870912)===0||Dt){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),yi=t}else yi=536870912;return t=xi.current,t!==null&&(t.flags|=32),yi}function di(t,n,s){(t===en&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(to(t,0),bs(t,Ct,yi,!1)),Ye(t,s),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(pr|=s),_n===4&&bs(t,Ct,yi,!1)),ma(t))}function Dg(t,n,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),f=l?CM(t,n):Md(t,n,!0),p=l;do{if(f===0){Jr&&!l&&bs(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!AM(s)){f=Md(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;f=dl;var k=w.current.memoizedState.isDehydrated;if(k&&(to(w,S).flags|=256),S=Md(w,S,!1),S!==2){if(pd&&!k){w.errorRecoveryDisabledLanes|=p,pr|=p,f=4;break e}p=fi,fi=f,p!==null&&(fi===null?fi=p:fi.push.apply(fi,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){to(t,0),bs(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:bs(l,n,yi,!Ss);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Uc+300-Ut(),10<f)){if(bs(l,n,yi,!Ss),_e(l,0,!0)!==0)break e;Va=n,l.timeoutHandle=o_(Lg.bind(null,l,s,fi,Pc,gd,n,yi,pr,$r,Ss,p,"Throttled",-0,0),f);break e}Lg(l,s,fi,Pc,gd,n,yi,pr,$r,Ss,p,null,-0,0)}}break}while(!0);ma(t)}function Lg(t,n,s,l,f,p,S,w,k,re,ve,Ee,le,he){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},Eg(n,p,Ee);var Ke=(p&62914560)===p?Uc-Ut():(p&4194048)===p?Rg-Ut():0;if(Ke=uy(Ee,Ke),Ke!==null){Va=p,t.cancelPendingCommit=Ke(zg.bind(null,t,n,p,s,l,f,S,w,k,ve,Ee,null,le,he)),bs(t,p,S,!re);return}}zg(t,n,p,s,l,f,S,w,k)}function AM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!_i(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bs(t,n,s,l){n&=~md,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Fe(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&ut(t,s,n)}function Ic(){return(Ht&6)===0?(pl(0),!1):!0}function Sd(){if(Et!==null){if(Xt===0)var t=Et.return;else t=Et,La=sr=null,If(t),Wr=null,Ko=0,t=Et;for(;t!==null;)lg(t.alternate,t),t=t.return;Et=null}}function to(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,YM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Va=0,Sd(),en=t,Et=s=wa(t.current,null),Ct=n,Xt=0,Mi=null,Ss=!1,Jr=Pe(t,n),pd=!1,$r=yi=md=pr=Ms=_n=0,fi=dl=null,gd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Fe(l),p=1<<f;n|=t[f],l&=~p}return Ga=n,ic(),s}function Ng(t,n){dt=null,H.H=al,n===Xr||n===fc?(n=jm(),Xt=3):n===bf?(n=jm(),Xt=4):Xt=n===Jf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Mi=n,Et===null&&(_n=1,Tc(t,Oi(n,t.current)))}function Ug(){var t=xi.current;return t===null?!0:(Ct&4194048)===Ct?Fi===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Fi:!1}function Og(){var t=H.H;return H.H=al,t===null?al:t}function Pg(){var t=H.A;return H.A=bM,t}function Bc(){_n=4,Ss||(Ct&4194048)!==Ct&&xi.current!==null||(Jr=!0),(Ms&134217727)===0&&(pr&134217727)===0||en===null||bs(en,Ct,yi,!1)}function Md(t,n,s){var l=Ht;Ht|=2;var f=Og(),p=Pg();(en!==t||Ct!==n)&&(Pc=null,to(t,n)),n=!1;var S=_n;e:do try{if(Xt!==0&&Et!==null){var w=Et,k=Mi;switch(Xt){case 8:Sd(),S=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var re=Xt;if(Xt=0,Mi=null,no(t,w,k,re),s&&Jr){S=0;break e}break;default:re=Xt,Xt=0,Mi=null,no(t,w,k,re)}}RM(),S=_n;break}catch(ve){Ng(t,ve)}while(!0);return n&&t.shellSuspendCounter++,La=sr=null,Ht=l,H.H=f,H.A=p,Et===null&&(en=null,Ct=0,ic()),S}function RM(){for(;Et!==null;)Ig(Et)}function CM(t,n){var s=Ht;Ht|=2;var l=Og(),f=Pg();en!==t||Ct!==n?(Pc=null,Oc=Ut()+500,to(t,n)):Jr=Pe(t,n);e:do try{if(Xt!==0&&Et!==null){n=Et;var p=Mi;t:switch(Xt){case 1:Xt=0,Mi=null,no(t,n,p,1);break;case 2:case 9:if(Ym(p)){Xt=0,Mi=null,Bg(n);break}n=function(){Xt!==2&&Xt!==9||en!==t||(Xt=7),ma(t)},p.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Ym(p)?(Xt=0,Mi=null,Bg(n)):(Xt=0,Mi=null,no(t,n,p,7));break;case 5:var S=null;switch(Et.tag){case 26:S=Et.memoizedState;case 5:case 27:var w=Et;if(S?y_(S):w.stateNode.complete){Xt=0,Mi=null;var k=w.sibling;if(k!==null)Et=k;else{var re=w.return;re!==null?(Et=re,Fc(re)):Et=null}break t}}Xt=0,Mi=null,no(t,n,p,5);break;case 6:Xt=0,Mi=null,no(t,n,p,6);break;case 8:Sd(),_n=6;break e;default:throw Error(r(462))}}wM();break}catch(ve){Ng(t,ve)}while(!0);return La=sr=null,H.H=l,H.A=f,Ht=s,Et!==null?0:(en=null,Ct=0,ic(),_n)}function wM(){for(;Et!==null&&!$t();)Ig(Et)}function Ig(t){var n=rg(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,n===null?Fc(t):Et=n}function Bg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=eg(s,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=eg(s,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:If(n);default:lg(s,n),n=Et=Pm(n,Ga),n=rg(s,n,Ga)}t.memoizedProps=t.pendingProps,n===null?Fc(t):Et=n}function no(t,n,s,l){La=sr=null,If(n),Wr=null,Ko=0;var f=n.return;try{if(_M(t,f,n,s,Ct)){_n=1,Tc(t,Oi(s,t.current)),Et=null;return}}catch(p){if(f!==null)throw Et=f,p;_n=1,Tc(t,Oi(s,t.current)),Et=null;return}n.flags&32768?(Dt||l===1?t=!0:Jr||(Ct&536870912)!==0?t=!1:(Ss=t=!0,(l===2||l===9||l===3||l===6)&&(l=xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fg(n,t)):Fc(n)}function Fc(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,Ss);return}t=n.return;var s=SM(n.alternate,n,Ga);if(s!==null){Et=s;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);_n===0&&(_n=5)}function Fg(t,n){do{var s=MM(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);_n=6,Et=null}function zg(t,n,s,l,f,p,S,w,k){t.cancelPendingCommit=null;do zc();while(Un!==0);if((Ht&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=cf,qt(t,s,p,S,w,k),t===en&&(Et=en=null,Ct=0),eo=n,Es=t,Va=s,_d=p,vd=f,Cg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,UM(ee,function(){return Xg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=V.p,V.p=2,S=Ht,Ht|=4;try{yM(t,n,s)}finally{Ht=S,V.p=f,H.T=l}}Un=1,Hg(),Gg(),Vg()}}function Hg(){if(Un===1){Un=0;var t=Es,n=eo,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=V.p;V.p=2;var f=Ht;Ht|=4;try{Sg(n,t);var p=Ud,S=Am(t.containerInfo),w=p.focusedElem,k=p.selectionRange;if(S!==w&&w&&w.ownerDocument&&Tm(w.ownerDocument.documentElement,w)){if(k!==null&&af(w)){var re=k.start,ve=k.end;if(ve===void 0&&(ve=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ve,w.value.length);else{var Ee=w.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var he=le.getSelection(),Ke=w.textContent.length,at=Math.min(k.start,Ke),Jt=k.end===void 0?at:Math.min(k.end,Ke);!he.extend&&at>Jt&&(S=Jt,Jt=at,at=S);var $=bm(w,at),q=bm(w,Jt);if($&&q&&(he.rangeCount!==1||he.anchorNode!==$.node||he.anchorOffset!==$.offset||he.focusNode!==q.node||he.focusOffset!==q.offset)){var se=Ee.createRange();se.setStart($.node,$.offset),he.removeAllRanges(),at>Jt?(he.addRange(se),he.extend(q.node,q.offset)):(se.setEnd(q.node,q.offset),he.addRange(se))}}}}for(Ee=[],he=w;he=he.parentNode;)he.nodeType===1&&Ee.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ee.length;w++){var Se=Ee[w];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Qc=!!Nd,Ud=Nd=null}finally{Ht=f,V.p=l,H.T=s}}t.current=n,Un=2}}function Gg(){if(Un===2){Un=0;var t=Es,n=eo,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=V.p;V.p=2;var f=Ht;Ht|=4;try{mg(t,n.alternate,n)}finally{Ht=f,V.p=l,H.T=s}}Un=3}}function Vg(){if(Un===4||Un===3){Un=0,K();var t=Es,n=eo,s=Va,l=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Un=5:(Un=0,eo=Es=null,kg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ys=null),qs(s),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,f=V.p,V.p=2,H.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var w=l[S];p(w.value,{componentStack:w.stack})}}finally{H.T=n,V.p=f}}(Va&3)!==0&&zc(),ma(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===xd?hl++:(hl=0,xd=t):hl=0,pl(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jo(n)))}function zc(){return Hg(),Gg(),Vg(),Xg()}function Xg(){if(Un!==5)return!1;var t=Es,n=_d;_d=0;var s=qs(Va),l=H.T,f=V.p;try{V.p=32>s?32:s,H.T=null,s=vd,vd=null;var p=Es,S=Va;if(Un=0,eo=Es=null,Va=0,(Ht&6)!==0)throw Error(r(331));var w=Ht;if(Ht|=4,Tg(p.current),yg(p,p.current,S,s),Ht=w,pl(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(de,p)}catch{}return!0}finally{V.p=f,H.T=l,kg(t,n)}}function Wg(t,n,s){n=Oi(s,n),n=Qf(t.stateNode,n,2),t=gs(t,n,2),t!==null&&(Ye(t,2),ma(t))}function Wt(t,n,s){if(t.tag===3)Wg(t,t,s);else for(;n!==null;){if(n.tag===3){Wg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ys===null||!ys.has(l))){t=Oi(s,t),s=Y0(2),l=gs(n,s,2),l!==null&&(q0(s,l,n,t),Ye(l,2),ma(l));break}}n=n.return}}function yd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new TM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(pd=!0,f.add(s),t=DM.bind(null,t,n,s),n.then(t,t))}function DM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Ct&s)===s&&(_n===4||_n===3&&(Ct&62914560)===Ct&&300>Ut()-Uc?(Ht&2)===0&&to(t,0):md|=s,$r===Ct&&($r=0)),ma(t)}function Yg(t,n){n===0&&(n=Te()),t=nr(t,n),t!==null&&(Ye(t,n),ma(t))}function LM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Yg(t,s)}function NM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Yg(t,s)}function UM(t,n){return xt(t,n)}var Hc=null,io=null,Ed=!1,Gc=!1,bd=!1,Ts=0;function ma(t){t!==io&&t.next===null&&(io===null?Hc=io=t:io=io.next=t),Gc=!0,Ed||(Ed=!0,PM())}function pl(t,n){if(!bd&&Gc){bd=!0;do for(var s=!1,l=Hc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Fe(42|t)+1)-1,p&=f&~(S&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Kg(l,p))}else p=Ct,p=_e(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Pe(l,p)||(s=!0,Kg(l,p));l=l.next}while(s);bd=!1}}function OM(){qg()}function qg(){Gc=Ed=!1;var t=0;Ts!==0&&WM()&&(t=Ts);for(var n=Ut(),s=null,l=Hc;l!==null;){var f=l.next,p=jg(l,n);p===0?(l.next=null,s===null?Hc=f:s.next=f,f===null&&(io=s)):(s=l,(t!==0||(p&3)!==0)&&(Gc=!0)),l=f}Un!==0&&Un!==5||pl(t),Ts!==0&&(Ts=0)}function jg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-Fe(p),w=1<<S,k=f[S];k===-1?((w&s)===0||(w&l)!==0)&&(f[S]=Ve(w,n)):k<=n&&(t.expiredLanes|=w),p&=~w}if(n=en,s=Ct,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Nt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Pe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Nt(l),qs(s)){case 2:case 8:s=b;break;case 32:s=ee;break;case 268435456:s=ge;break;default:s=ee}return l=Zg.bind(null,t),s=xt(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Nt(l),t.callbackPriority=2,t.callbackNode=null,2}function Zg(t,n){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(zc()&&t.callbackNode!==s)return null;var l=Ct;return l=_e(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Dg(t,l,n),jg(t,Ut()),t.callbackNode!=null&&t.callbackNode===s?Zg.bind(null,t):null)}function Kg(t,n){if(zc())return null;Dg(t,n,!0)}function PM(){qM(function(){(Ht&6)!==0?xt(B,OM):qg()})}function Td(){if(Ts===0){var t=Vr;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Ts=t}return Ts}function Qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function Jg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function IM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Qg((f[Sn]||null).action),S=l.submitter;S&&(n=(n=S[Sn]||null)?Qg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var w=new $s("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ts!==0){var k=S?Jg(f,S):new FormData(f);Wf(s,{pending:!0,data:k,method:f.method,action:p},null,k)}}else typeof p=="function"&&(w.preventDefault(),k=S?Jg(f,S):new FormData(f),Wf(s,{pending:!0,data:k,method:f.method,action:p},p,k))},currentTarget:f}]})}}for(var Ad=0;Ad<lf.length;Ad++){var Rd=lf[Ad],BM=Rd.toLowerCase(),FM=Rd[0].toUpperCase()+Rd.slice(1);Ji(BM,"on"+FM)}Ji(wm,"onAnimationEnd"),Ji(Dm,"onAnimationIteration"),Ji(Lm,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(eM,"onTransitionRun"),Ji(tM,"onTransitionStart"),Ji(nM,"onTransitionCancel"),Ji(Nm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function $g(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var w=l[S],k=w.instance,re=w.currentTarget;if(w=w.listener,k!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(ve){nc(ve)}f.currentTarget=null,p=k}else for(S=0;S<l.length;S++){if(w=l[S],k=w.instance,re=w.currentTarget,w=w.listener,k!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(ve){nc(ve)}f.currentTarget=null,p=k}}}}function bt(t,n){var s=n[oa];s===void 0&&(s=n[oa]=new Set);var l=t+"__bubble";s.has(l)||(e_(n,t,2,!1),s.add(l))}function Cd(t,n,s){var l=0;n&&(l|=4),e_(s,t,l,n)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function wd(t){if(!t[Vc]){t[Vc]=!0,Ks.forEach(function(s){s!=="selectionchange"&&(zM.has(s)||Cd(s,!1,t),Cd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vc]||(n[Vc]=!0,Cd("selectionchange",!1,n))}}function e_(t,n,s,l){switch(w_(n)){case 2:var f=hy;break;case 8:f=py;break;default:f=Xd}s=f.bind(null,n,s,t),f=void 0,!Fo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Dd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=l.return;S!==null;){var k=S.tag;if((k===3||k===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=wi(w),S===null)return;if(k=S.tag,k===5||k===6||k===26||k===27){l=p=S;continue e}w=w.parentNode}}l=l.return}Jl(function(){var re=p,ve=ca(s),Ee=[];e:{var le=Um.get(t);if(le!==void 0){var he=$s,Ke=t;switch(t){case"keypress":if(Js(s)===0)break e;case"keydown":case"keyup":he=NS;break;case"focusin":Ke="focus",he=fa;break;case"focusout":Ke="blur",he=fa;break;case"beforeblur":case"afterblur":he=fa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Nr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=PS;break;case wm:case Dm:case Lm:he=ec;break;case Nm:he=BS;break;case"scroll":case"scrollend":he=Gt;break;case"wheel":he=zS;break;case"copy":case"cut":case"paste":he=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=um;break;case"toggle":case"beforetoggle":he=GS}var at=(n&4)!==0,Jt=!at&&(t==="scroll"||t==="scrollend"),$=at?le!==null?le+"Capture":null:le;at=[];for(var q=re,se;q!==null;){var Se=q;if(se=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||se===null||$===null||(Se=ss(q,$),Se!=null&&at.push(gl(q,Se,se))),Jt)break;q=q.return}0<at.length&&(le=new he(le,Ke,null,s,ve),Ee.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",le&&s!==Ql&&(Ke=s.relatedTarget||s.fromElement)&&(wi(Ke)||Ke[zn]))break e;if((he||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,he?(Ke=s.relatedTarget||s.toElement,he=re,Ke=Ke?wi(Ke):null,Ke!==null&&(Jt=c(Ke),at=Ke.tag,Ke!==Jt||at!==5&&at!==27&&at!==6)&&(Ke=null)):(he=null,Ke=re),he!==Ke)){if(at=ti,Se="onMouseLeave",$="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(at=um,Se="onPointerLeave",$="onPointerEnter",q="pointer"),Jt=he==null?le:la(he),se=Ke==null?le:la(Ke),le=new at(Se,q+"leave",he,s,ve),le.target=Jt,le.relatedTarget=se,Se=null,wi(ve)===re&&(at=new at($,q+"enter",Ke,s,ve),at.target=se,at.relatedTarget=Jt,Se=at),Jt=Se,he&&Ke)t:{for(at=HM,$=he,q=Ke,se=0,Se=$;Se;Se=at(Se))se++;Se=0;for(var tt=q;tt;tt=at(tt))Se++;for(;0<se-Se;)$=at($),se--;for(;0<Se-se;)q=at(q),Se--;for(;se--;){if($===q||q!==null&&$===q.alternate){at=$;break t}$=at($),q=at(q)}at=null}else at=null;he!==null&&t_(Ee,le,he,at,!1),Ke!==null&&Jt!==null&&t_(Ee,Jt,Ke,at,!0)}}e:{if(le=re?la(re):window,he=le.nodeName&&le.nodeName.toLowerCase(),he==="select"||he==="input"&&le.type==="file")var Bt=vm;else if(gm(le))if(xm)Bt=QS;else{Bt=ZS;var et=jS}else he=le.nodeName,!he||he.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&Rt(re.elementType)&&(Bt=vm):Bt=KS;if(Bt&&(Bt=Bt(t,re))){_m(Ee,Bt,s,ve);break e}et&&et(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&ht(le,"number",le.value)}switch(et=re?la(re):window,t){case"focusin":(gm(et)||et.contentEditable==="true")&&(Or=et,sf=re,Wo=null);break;case"focusout":Wo=sf=Or=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Rm(Ee,s,ve);break;case"selectionchange":if($S)break;case"keydown":case"keyup":Rm(Ee,s,ve)}var pt;if(ef)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Ur?pm(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(fm&&s.locale!=="ko"&&(Ur||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Ur&&(pt=Ju()):(mi=ve,zo="value"in mi?mi.value:mi.textContent,Ur=!0)),et=kc(re,wt),0<et.length&&(wt=new cm(wt,t,null,s,ve),Ee.push({event:wt,listeners:et}),pt?wt.data=pt:(pt=mm(s),pt!==null&&(wt.data=pt)))),(pt=kS?XS(t,s):WS(t,s))&&(wt=kc(re,"onBeforeInput"),0<wt.length&&(et=new cm("onBeforeInput","beforeinput",null,s,ve),Ee.push({event:et,listeners:wt}),et.data=pt)),IM(Ee,t,re,s,ve)}$g(Ee,n)})}function gl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function kc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=ss(t,s),f!=null&&l.unshift(gl(t,f,p)),f=ss(t,n),f!=null&&l.push(gl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function HM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t_(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var w=s,k=w.alternate,re=w.stateNode;if(w=w.tag,k!==null&&k===l)break;w!==5&&w!==26&&w!==27||re===null||(k=re,f?(re=ss(s,p),re!=null&&S.unshift(gl(s,re,k))):f||(re=ss(s,p),re!=null&&S.push(gl(s,re,k)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var GM=/\r\n?/g,VM=/\u0000|\uFFFD/g;function n_(t){return(typeof t=="string"?t:""+t).replace(GM,`
`).replace(VM,"")}function i_(t,n){return n=n_(n),n_(t)===n}function Qt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Hn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Hn(t,""+l);break;case"className":Ue(t,"class",l);break;case"tabIndex":Ue(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ue(t,s,l);break;case"style":ri(t,l,p);break;case"data":if(n!=="object"){Ue(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ra(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Qt(t,n,"name",f.name,f,null),Qt(t,n,"formEncType",f.formEncType,f,null),Qt(t,n,"formMethod",f.formMethod,f,null),Qt(t,n,"formTarget",f.formTarget,f,null)):(Qt(t,n,"encType",f.encType,f,null),Qt(t,n,"method",f.method,f,null),Qt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ra(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ra(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Re(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Re(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Nn.get(s)||s,Re(t,s,l))}}function Ld(t,n,s,l,f,p){switch(s){case"style":ri(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Hn(t,l):(typeof l=="number"||typeof l=="bigint")&&Hn(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Sn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Re(t,s,l)}}}function Xn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(t,n,p,S,s,null)}}f&&Qt(t,n,"srcSet",s.srcSet,s,null),l&&Qt(t,n,"src",s.src,s,null);return;case"input":bt("invalid",t);var w=p=S=f=null,k=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":S=ve;break;case"checked":k=ve;break;case"defaultChecked":re=ve;break;case"value":p=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Qt(t,n,l,ve,s,null)}}Ln(t,p,w,k,re,S,f,!1);return;case"select":bt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:Qt(t,n,f,w,s,null)}n=p,s=S,t.multiple=!!l,n!=null?mn(t,!!l,n,!1):s!=null&&mn(t,!!l,s,!0);return;case"textarea":bt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Qt(t,n,S,w,s,null)}ei(t,l,f,p);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(t,n,k,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<ml.length;l++)bt(ml[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(t,n,re,l,s,null)}return;default:if(Rt(n)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&Ld(t,n,ve,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Qt(t,n,w,l,s,null))}function kM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,w=null,k=null,re=null,ve=null;for(he in s){var Ee=s[he];if(s.hasOwnProperty(he)&&Ee!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":k=Ee;default:l.hasOwnProperty(he)||Qt(t,n,he,null,l,Ee)}}for(var le in l){var he=l[le];if(Ee=s[le],l.hasOwnProperty(le)&&(he!=null||Ee!=null))switch(le){case"type":p=he;break;case"name":f=he;break;case"checked":re=he;break;case"defaultChecked":ve=he;break;case"value":S=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Ee&&Qt(t,n,le,he,l,Ee)}}Xe(t,S,w,k,re,ve,p,f);return;case"select":he=S=w=le=null;for(p in s)if(k=s[p],s.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":he=k;default:l.hasOwnProperty(p)||Qt(t,n,p,null,l,k)}for(f in l)if(p=l[f],k=s[f],l.hasOwnProperty(f)&&(p!=null||k!=null))switch(f){case"value":le=p;break;case"defaultValue":w=p;break;case"multiple":S=p;default:p!==k&&Qt(t,n,f,p,l,k)}n=w,s=S,l=he,le!=null?mn(t,!!s,le,!1):!!l!=!!s&&(n!=null?mn(t,!!s,n,!0):mn(t,!!s,s?[]:"",!1));return;case"textarea":he=le=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Qt(t,n,w,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Qt(t,n,S,f,l,p)}In(t,le,he);return;case"option":for(var Ke in s)if(le=s[Ke],s.hasOwnProperty(Ke)&&le!=null&&!l.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Qt(t,n,Ke,null,l,le)}for(k in l)if(le=l[k],he=s[k],l.hasOwnProperty(k)&&le!==he&&(le!=null||he!=null))switch(k){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Qt(t,n,k,le,l,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Qt(t,n,at,null,l,le);for(re in l)if(le=l[re],he=s[re],l.hasOwnProperty(re)&&le!==he&&(le!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Qt(t,n,re,le,l,he)}return;default:if(Rt(n)){for(var Jt in s)le=s[Jt],s.hasOwnProperty(Jt)&&le!==void 0&&!l.hasOwnProperty(Jt)&&Ld(t,n,Jt,void 0,l,le);for(ve in l)le=l[ve],he=s[ve],!l.hasOwnProperty(ve)||le===he||le===void 0&&he===void 0||Ld(t,n,ve,le,l,he);return}}for(var $ in s)le=s[$],s.hasOwnProperty($)&&le!=null&&!l.hasOwnProperty($)&&Qt(t,n,$,null,l,le);for(Ee in l)le=l[Ee],he=s[Ee],!l.hasOwnProperty(Ee)||le===he||le==null&&he==null||Qt(t,n,Ee,le,l,he)}function a_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,w=f.duration;if(p&&w&&a_(S)){for(S=0,w=f.responseEnd,l+=1;l<s.length;l++){var k=s[l],re=k.startTime;if(re>w)break;var ve=k.transferSize,Ee=k.initiatorType;ve&&a_(Ee)&&(k=k.responseEnd,S+=ve*(k<w?1:(w-re)/(k-re)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nd=null,Ud=null;function Xc(t){return t.nodeType===9?t:t.ownerDocument}function s_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Od(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pd=null;function WM(){var t=window.event;return t&&t.type==="popstate"?t===Pd?!1:(Pd=t,!0):(Pd=null,!1)}var o_=typeof setTimeout=="function"?setTimeout:void 0,YM=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,qM=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(t){return l_.resolve(null).then(t).catch(jM)}:o_;function jM(t){setTimeout(function(){throw t})}function As(t){return t==="head"}function c_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),oo(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")_l(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,_l(s);for(var p=s.firstChild;p;){var S=p.nextSibling,w=p.nodeName;p[qi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&_l(t.ownerDocument.body);s=f}while(s);oo(n)}function u_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Id(s),ji(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function ZM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[qi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=zi(t.nextSibling),t===null)break}return null}function KM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=zi(t.nextSibling),t===null))return null;return t}function f_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=zi(t.nextSibling),t===null))return null;return t}function Bd(t){return t.data==="$?"||t.data==="$~"}function Fd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function zi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zd=null;function d_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return zi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function h_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function p_(t,n,s){switch(n=Xc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _l(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ji(t)}var Hi=new Map,m_=new Set;function Wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ka=V.d;V.d={f:JM,r:$M,D:ey,C:ty,L:ny,m:iy,X:sy,S:ay,M:ry};function JM(){var t=ka.f(),n=Ic();return t||n}function $M(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?N0(n):ka.r(t)}var ao=typeof document>"u"?null:document;function g_(t,n,s){var l=ao;if(l&&typeof n=="string"&&n){var f=_t(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),m_.has(f)||(m_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Xn(n,"link",t),pn(n),l.head.appendChild(n)))}}function ey(t){ka.D(t),g_("dns-prefetch",t,null)}function ty(t,n){ka.C(t,n),g_("preconnect",t,n)}function ny(t,n,s){ka.L(t,n,s);var l=ao;if(l&&t&&n){var f='link[rel="preload"][as="'+_t(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+_t(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+_t(s.imageSizes)+'"]')):f+='[href="'+_t(t)+'"]';var p=f;switch(n){case"style":p=so(t);break;case"script":p=ro(t)}Hi.has(p)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Hi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(vl(p))||n==="script"&&l.querySelector(xl(p))||(n=l.createElement("link"),Xn(n,"link",t),pn(n),l.head.appendChild(n)))}}function iy(t,n){ka.m(t,n);var s=ao;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ro(t)}if(!Hi.has(p)&&(t=v({rel:"modulepreload",href:t},n),Hi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(xl(p)))return}l=s.createElement("link"),Xn(l,"link",t),pn(l),s.head.appendChild(l)}}}function ay(t,n,s){ka.S(t,n,s);var l=ao;if(l&&t){var f=Zi(l).hoistableStyles,p=so(t);n=n||"default";var S=f.get(p);if(!S){var w={loading:0,preload:null};if(S=l.querySelector(vl(p)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Hi.get(p))&&Hd(t,s);var k=S=l.createElement("link");pn(k),Xn(k,"link",t),k._p=new Promise(function(re,ve){k.onload=re,k.onerror=ve}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Yc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(p,S)}}}function sy(t,n){ka.X(t,n);var s=ao;if(s&&t){var l=Zi(s).hoistableScripts,f=ro(t),p=l.get(f);p||(p=s.querySelector(xl(f)),p||(t=v({src:t,async:!0},n),(n=Hi.get(f))&&Gd(t,n),p=s.createElement("script"),pn(p),Xn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function ry(t,n){ka.M(t,n);var s=ao;if(s&&t){var l=Zi(s).hoistableScripts,f=ro(t),p=l.get(f);p||(p=s.querySelector(xl(f)),p||(t=v({src:t,async:!0,type:"module"},n),(n=Hi.get(f))&&Gd(t,n),p=s.createElement("script"),pn(p),Xn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function __(t,n,s,l){var f=(f=ie.current)?Wc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=so(s.href),s=Zi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=so(s.href);var p=Zi(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(vl(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Hi.set(t,s),p||oy(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ro(s),s=Zi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function so(t){return'href="'+_t(t)+'"'}function vl(t){return'link[rel="stylesheet"]['+t+"]"}function v_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function oy(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Xn(n,"link",s),pn(n),t.head.appendChild(n))}function ro(t){return'[src="'+_t(t)+'"]'}function xl(t){return"script[async]"+t}function x_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+_t(s.href)+'"]');if(l)return n.instance=l,pn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pn(l),Xn(l,"style",f),Yc(l,s.precedence,t),n.instance=l;case"stylesheet":f=so(s.href);var p=t.querySelector(vl(f));if(p)return n.state.loading|=4,n.instance=p,pn(p),p;l=v_(s),(f=Hi.get(f))&&Hd(l,f),p=(t.ownerDocument||t).createElement("link"),pn(p);var S=p;return S._p=new Promise(function(w,k){S.onload=w,S.onerror=k}),Xn(p,"link",l),n.state.loading|=4,Yc(p,s.precedence,t),n.instance=p;case"script":return p=ro(s.src),(f=t.querySelector(xl(p)))?(n.instance=f,pn(f),f):(l=s,(f=Hi.get(p))&&(l=v({},s),Gd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),pn(f),Xn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Yc(l,s.precedence,t));return n.instance}function Yc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var qc=null;function S_(t,n,s){if(qc===null){var l=new Map,f=qc=new Map;f.set(s,l)}else f=qc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[qi]||p[an]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var w=l.get(S);w?w.push(p):l.set(S,[p])}}return l}function M_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function ly(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function y_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cy(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=so(l.href),p=n.querySelector(vl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=jc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,pn(p);return}p=n.ownerDocument||n,l=v_(l),(f=Hi.get(f))&&Hd(l,f),p=p.createElement("link"),pn(p);var S=p;S._p=new Promise(function(w,k){S.onload=w,S.onerror=k}),Xn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=jc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Vd=0;function uy(t,n){return t.stylesheets&&t.count===0&&Kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Vd===0&&(Vd=62500*XM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Vd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zc=null;function Kc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zc=new Map,n.forEach(fy,t),Zc=null,jc.call(t))}function fy(t,n){if(!(n.state.loading&4)){var s=Zc.get(t);if(s)var l=s.get(null);else{s=new Map,Zc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=jc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Sl={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function dy(t,n,s,l,f,p,S,w,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function E_(t,n,s,l,f,p,S,w,k,re,ve,Ee){return t=new dy(t,n,s,S,k,re,ve,Ee,w),n=1,p===!0&&(n|=24),p=vi(3,null,null,n),t.current=p,p.stateNode=t,n=Mf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},Tf(p),t}function b_(t){return t?(t=Br,t):Br}function T_(t,n,s,l,f,p){f=b_(f),l.context===null?l.context=f:l.pendingContext=f,l=ms(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=gs(t,l,n),s!==null&&(di(s,t,n),Jo(s,t,n))}function A_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function kd(t,n){A_(t,n),(t=t.alternate)&&A_(t,n)}function R_(t){if(t.tag===13||t.tag===31){var n=nr(t,67108864);n!==null&&di(n,t,67108864),kd(t,67108864)}}function C_(t){if(t.tag===13||t.tag===31){var n=Ei();n=Ys(n);var s=nr(t,n);s!==null&&di(s,t,n),kd(t,n)}}var Qc=!0;function hy(t,n,s,l){var f=H.T;H.T=null;var p=V.p;try{V.p=2,Xd(t,n,s,l)}finally{V.p=p,H.T=f}}function py(t,n,s,l){var f=H.T;H.T=null;var p=V.p;try{V.p=8,Xd(t,n,s,l)}finally{V.p=p,H.T=f}}function Xd(t,n,s,l){if(Qc){var f=Wd(l);if(f===null)Dd(t,n,l,Jc,s),D_(t,l);else if(gy(f,t,n,s,l))l.stopPropagation();else if(D_(t,l),n&4&&-1<my.indexOf(t)){for(;f!==null;){var p=Di(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=De(p.pendingLanes);if(S!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var k=1<<31-Fe(S);w.entanglements[1]|=k,S&=~k}ma(p),(Ht&6)===0&&(Oc=Ut()+500,pl(0))}}break;case 31:case 13:w=nr(p,2),w!==null&&di(w,p,2),Ic(),kd(p,2)}if(p=Wd(l),p===null&&Dd(t,n,l,Jc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Dd(t,n,l,null,s)}}function Wd(t){return t=ca(t),Yd(t)}var Jc=null;function Yd(t){if(Jc=null,t=wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Jc=t,null}function w_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case B:return 2;case b:return 8;case ee:case ae:return 32;case ge:return 268435456;default:return 32}default:return 32}}var qd=!1,Rs=null,Cs=null,ws=null,Ml=new Map,yl=new Map,Ds=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D_(t,n){switch(t){case"focusin":case"focusout":Rs=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":Ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(n.pointerId)}}function El(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Di(n),n!==null&&R_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function gy(t,n,s,l,f){switch(n){case"focusin":return Rs=El(Rs,t,n,s,l,f),!0;case"dragenter":return Cs=El(Cs,t,n,s,l,f),!0;case"mouseover":return ws=El(ws,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return Ml.set(p,El(Ml.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,yl.set(p,El(yl.get(p)||null,t,n,s,l,f)),!0}return!1}function L_(t){var n=wi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,ns(t.priority,function(){C_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,ns(t.priority,function(){C_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Wd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ql=l,s.target.dispatchEvent(l),Ql=null}else return n=Di(s),n!==null&&R_(n),t.blockedOn=s,!1;n.shift()}return!0}function N_(t,n,s){$c(t)&&s.delete(n)}function _y(){qd=!1,Rs!==null&&$c(Rs)&&(Rs=null),Cs!==null&&$c(Cs)&&(Cs=null),ws!==null&&$c(ws)&&(ws=null),Ml.forEach(N_),yl.forEach(N_)}function eu(t,n){t.blockedOn===n&&(t.blockedOn=null,qd||(qd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,_y)))}var tu=null;function U_(t){tu!==t&&(tu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Yd(l||s)===null)continue;break}var p=Di(s);p!==null&&(t.splice(n,3),n-=3,Wf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function oo(t){function n(k){return eu(k,t)}Rs!==null&&eu(Rs,t),Cs!==null&&eu(Cs,t),ws!==null&&eu(ws,t),Ml.forEach(n),yl.forEach(n);for(var s=0;s<Ds.length;s++){var l=Ds[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ds.length&&(s=Ds[0],s.blockedOn===null);)L_(s),s.blockedOn===null&&Ds.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[Sn]||null;if(typeof p=="function")S||U_(s);else if(S){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Sn]||null)w=S.formAction;else if(Yd(f)!==null)continue}else w=S.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),U_(s)}}}function O_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function jd(t){this._internalRoot=t}nu.prototype.render=jd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ei();T_(s,l,t,n,null,null)},nu.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T_(t.current,2,null,t,null,null),Ic(),n[zn]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Aa();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Ds.length&&n!==0&&n<Ds[s].priority;s++);Ds.splice(s,0,t),s===0&&L_(t)}};var P_=e.version;if(P_!=="19.2.7")throw Error(r(527,P_,"19.2.7"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var vy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{de=iu.inject(vy),me=iu}catch{}}return Tl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=V0,p=k0,S=X0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=E_(t,1,!1,null,null,s,l,null,f,p,S,O_),t[zn]=n.current,wd(t),new jd(n)},Tl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=V0,S=k0,w=X0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),n=E_(t,1,!0,n,s??null,l,f,k,p,S,w,O_),n.context=b_(null),s=n.current,l=Ei(),l=Ys(l),f=ms(l),f.callback=null,gs(s,f,l),s=l,n.current.lanes=s,Ye(n,s),ma(n),t[zn]=n.current,wd(t),new nu(n)},Tl.version="19.2.7",Tl}var W_;function Ry(){if(W_)return Qd.exports;W_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Qd.exports=Ay(),Qd.exports}var Cy=Ry();const wy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},lo=(a,e="#")=>{var i;return((i=wy[a])==null?void 0:i.trim())||e},Dn={app:lo("VITE_APP_URL","https://demo.morpheum.io"),docs:lo("VITE_DOCS_URL"),manifesto:lo("VITE_MANIFESTO_URL"),discord:lo("VITE_DISCORD_URL"),x:lo("VITE_X_URL"),tutorialVideo:lo("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Cu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],th={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Dn.manifesto},Ns={eyebrow:{label:"A manifesto for verifiable agents",href:Dn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Dn.app},secondaryCta:{label:"Explore agents",href:Dn.explore}},Y_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},q_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Xh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},nh={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Dn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Dn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Dn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Us={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},co={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},au={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Dn.app},social:[{label:"Join Discord",href:Dn.discord},{label:"Join X",href:Dn.x}]},j_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Do({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function Dy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:au.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Do,{href:au.primaryCta.href,variant:"primary",children:au.primaryCta.label}),au.social.map(a=>D.jsx(Do,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function Ly(){const[a,e]=ke.useState(!1),i=!!Dn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Xh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Dn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Xh.videoCaption})]})]})})}const Ny={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function ih({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Ny[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Uy(){const a=co.cards[0],e=co.cards[1],i=co.cards[2],r=co.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:co.kicker}),D.jsx("h2",{className:"section-title explore__title",children:co.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(ih,{type:"verified"}),D.jsx(ih,{type:"riskScore",value:o.risk}),D.jsx(ih,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="185",Oy=0,Z_=1,Py=2,wu=1,Iy=2,Ol=3,$a=0,pi=1,xa=2,Qa=0,Ao=1,Wh=2,K_=3,Q_=4,By=5,yr=100,Fy=101,zy=102,Hy=103,Gy=104,Vy=200,ky=201,Xy=202,Wy=203,Yh=204,qh=205,Yy=206,qy=207,jy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,eE=214,jh=0,Zh=1,Kh=2,Lo=3,Qh=4,Jh=5,$h=6,ep=7,Sx=0,tE=1,nE=2,ya=0,Mx=1,yx=2,Ex=3,bx=4,Tx=5,Ax=6,Rx=7,Cx=300,Ar=301,No=302,ah=303,sh=304,Yu=306,tp=1e3,sa=1001,np=1002,Yn=1003,iE=1004,su=1005,xn=1006,rh=1007,Gs=1008,ki=1009,wx=1010,Dx=1011,Xl=1012,zp=1013,Ta=1014,Sa=1015,es=1016,Hp=1017,Gp=1018,Wl=1020,Lx=35902,Nx=35899,Ux=1021,Ox=1022,ra=1023,ts=1026,Tr=1027,Px=1028,Vp=1029,Rr=1030,kp=1031,Xp=1033,Du=33776,Lu=33777,Nu=33778,Uu=33779,ip=35840,ap=35841,sp=35842,rp=35843,op=36196,lp=37492,cp=37496,up=37488,fp=37489,Iu=37490,dp=37491,hp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,Sp=37815,Mp=37816,yp=37817,Ep=37818,bp=37819,Tp=37820,Ap=37821,Rp=36492,Cp=36494,wp=36495,Dp=36283,Lp=36284,Bu=36285,Np=36286,aE=3200,J_=0,sE=1,Hs="",Qn="srgb",Fu="srgb-linear",zu="linear",Yt="srgb",uo=7680,$_=519,rE=512,oE=513,lE=514,Wp=515,cE=516,uE=517,Yp=518,fE=519,ev=35044,tv="300 es",Ma=2e3,Hu=2001;function dE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Gu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function hE(){const a=Gu("canvas");return a.style.display="block",a}const nv={};function iv(...a){const e="THREE."+a.shift();console.log(e,...a)}function Ix(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=Ix(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Pt(...a){a=Ix(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Ro(...a){const e=a.join(" ");e in nv||(nv[e]=!0,st(...a))}function pE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const mE={[jh]:Zh,[Kh]:$h,[Qh]:ep,[Lo]:Jh,[Zh]:jh,[$h]:Kh,[ep]:Qh,[Jh]:Lo};class wr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let av=1234567;const Hl=Math.PI/180,Yl=180/Math.PI;function Po(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]).toLowerCase()}function St(a,e,i){return Math.max(e,Math.min(i,a))}function qp(a,e){return(a%e+e)%e}function gE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function _E(a,e,i){return a!==e?(i-a)/(e-a):0}function Gl(a,e,i){return(1-i)*a+i*e}function vE(a,e,i,r){return Gl(a,e,1-Math.exp(-i*r))}function xE(a,e=1){return e-Math.abs(qp(a,e*2)-e)}function SE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function ME(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function yE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function EE(a,e){return a+Math.random()*(e-a)}function bE(a){return a*(.5-Math.random())}function TE(a){a!==void 0&&(av=a);let e=av+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AE(a){return a*Hl}function RE(a){return a*Yl}function CE(a){return(a&a-1)===0&&a!==0}function wE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function DE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function LE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),v=c((e-r)/2),_=u((e-r)/2),M=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*v,m*_,d*h);break;case"YZY":a.set(m*_,d*g,m*v,d*h);break;case"ZXZ":a.set(m*v,m*_,d*g,d*h);break;case"XZX":a.set(d*g,m*E,m*M,d*h);break;case"YXY":a.set(m*M,d*g,m*E,d*h);break;case"ZYZ":a.set(m*E,m*M,d*g,d*h);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function To(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vt={DEG2RAD:Hl,RAD2DEG:Yl,generateUUID:Po,clamp:St,euclideanModulo:qp,mapLinear:gE,inverseLerp:_E,lerp:Gl,damp:vE,pingpong:xE,smoothstep:SE,smootherstep:ME,randInt:yE,randFloat:EE,randFloatSpread:bE,seededRandom:TE,degToRad:AE,radToDeg:RE,isPowerOfTwo:CE,ceilPowerOfTwo:wE,floorPowerOfTwo:DE,setQuaternionFromProperEuler:LE,normalize:ii,denormalize:To},am=class am{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let zt=am;class Io{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],M=c[u+1],E=c[u+2],A=c[u+3];if(v!==A||m!==_||h!==M||g!==E){let y=m*_+h*M+g*E+v*A;y<0&&(_=-_,M=-M,E=-E,A=-A,y=-y);let x=1-d;if(y<.9995){const O=Math.acos(y),I=Math.sin(O);x=Math.sin(x*O)/I,d=Math.sin(d*O)/I,m=m*x+_*d,h=h*x+M*d,g=g*x+E*d,v=v*x+A*d}else{m=m*x+_*d,h=h*x+M*d,g=g*x+E*d,v=v*x+A*d;const O=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=O,h*=O,g*=O,v*=O}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],v=c[u],_=c[u+1],M=c[u+2],E=c[u+3];return e[i]=d*E+g*v+m*M-h*_,e[i+1]=m*E+g*_+h*v-d*M,e[i+2]=h*E+g*M+d*_-m*v,e[i+3]=g*E-d*v-m*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),v=d(c/2),_=m(r/2),M=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=_*g*v+h*M*E,this._y=h*M*v-_*g*E,this._z=h*g*E+_*M*v,this._w=h*g*v-_*M*E;break;case"YXZ":this._x=_*g*v+h*M*E,this._y=h*M*v-_*g*E,this._z=h*g*E-_*M*v,this._w=h*g*v+_*M*E;break;case"ZXY":this._x=_*g*v-h*M*E,this._y=h*M*v+_*g*E,this._z=h*g*E+_*M*v,this._w=h*g*v-_*M*E;break;case"ZYX":this._x=_*g*v-h*M*E,this._y=h*M*v+_*g*E,this._z=h*g*E-_*M*v,this._w=h*g*v+_*M*E;break;case"YZX":this._x=_*g*v+h*M*E,this._y=h*M*v+_*g*E,this._z=h*g*E-_*M*v,this._w=h*g*v-_*M*E;break;case"XZY":this._x=_*g*v-h*M*E,this._y=h*M*v-_*g*E,this._z=h*g*E+_*M*v,this._w=h*g*v+_*M*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],v=i[10],_=r+d+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(u-o)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+h)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-h)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-o)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sm=class sm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(sv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(sv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),v=2*(c*r-u*i);return this.x=i+m*h+u*v-d*g,this.y=r+m*g+d*h-c*v,this.z=o+m*v+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sm.prototype.isVector3=!0;let ne=sm;const oh=new ne,sv=new Io,rm=class rm{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],v=r[7],_=r[2],M=r[5],E=r[8],A=o[0],y=o[3],x=o[6],O=o[1],I=o[4],R=o[7],L=o[2],N=o[5],z=o[8];return c[0]=u*A+d*O+m*L,c[3]=u*y+d*I+m*N,c[6]=u*x+d*R+m*z,c[1]=h*A+g*O+v*L,c[4]=h*y+g*I+v*N,c[7]=h*x+g*R+v*z,c[2]=_*A+M*O+E*L,c[5]=_*y+M*I+E*N,c[8]=_*x+M*R+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=g*u-d*h,_=d*m-g*c,M=h*c-u*m,E=i*v+r*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(o*h-g*r)*A,e[2]=(d*r-o*u)*A,e[3]=_*A,e[4]=(g*i-o*m)*A,e[5]=(o*c-d*i)*A,e[6]=M*A,e[7]=(r*m-h*i)*A,e[8]=(u*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return Ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(e,i)),this}rotate(e){return Ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-e)),this}translate(e,i){return Ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rm.prototype.isMatrix3=!0;let lt=rm;const lh=new lt,rv=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ov=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NE(){const a={enabled:!0,workingColorSpace:Fu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(o.r=Ja(o.r),o.g=Ja(o.g),o.b=Ja(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=Co(o.r),o.g=Co(o.g),o.b=Co(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hs?zu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Fu]:{primaries:e,whitePoint:r,transfer:zu,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:rv,fromXYZ:ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),a}const Lt=NE();function Ja(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Co(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let fo;class UE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{fo===void 0&&(fo=Gu("canvas")),fo.width=e.width,fo.height=e.height;const o=fo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=fo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Gu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ja(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ja(i[r]/255)*255):i[r]=Ja(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(ch(o[u].image)):c.push(ch(o[u]))}else c=ch(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function ch(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?UE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let PE=0;const uh=new ne;class Jn extends wr{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=sa,o=sa,c=xn,u=Gs,d=ra,m=ki,h=Jn.DEFAULT_ANISOTROPY,g=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Po(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tp:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tp:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Cx;Jn.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],v=m[8],_=m[1],M=m[5],E=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,R=(M+1)/2,L=(x+1)/2,N=(g+_)/4,z=(v+A)/4,T=(E+y)/4;return I>R&&I>L?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=N/r,c=z/r):R>L?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=N/o,c=T/o):L<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(L),r=z/c,o=T/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-A)/O,this.z=(_-g)/O,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let vn=om;class IE extends wr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Jn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new jp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ea extends IE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Bx extends Jn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Jn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wu=class Wu{constructor(e,i,r,o,c,u,d,m,h,g,v,_,M,E,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,v,_,M,E,A,y)}set(e,i,r,o,c,u,d,m,h,g,v,_,M,E,A,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=m,x[2]=h,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=E,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/ho.setFromMatrixColumn(e,0).length(),c=1/ho.setFromMatrixColumn(e,1).length(),u=1/ho.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,M=u*v,E=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=M+E*h,i[5]=_-A*h,i[9]=-d*m,i[2]=A-_*h,i[6]=E+M*h,i[10]=u*m}else if(e.order==="YXZ"){const _=m*g,M=m*v,E=h*g,A=h*v;i[0]=_+A*d,i[4]=E*d-M,i[8]=u*h,i[1]=u*v,i[5]=u*g,i[9]=-d,i[2]=M*d-E,i[6]=A+_*d,i[10]=u*m}else if(e.order==="ZXY"){const _=m*g,M=m*v,E=h*g,A=h*v;i[0]=_-A*d,i[4]=-u*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=u*g,i[9]=A-_*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const _=u*g,M=u*v,E=d*g,A=d*v;i[0]=m*g,i[4]=E*h-M,i[8]=_*h+A,i[1]=m*v,i[5]=A*h+_,i[9]=M*h-E,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*h,E=d*m,A=d*h;i[0]=m*g,i[4]=A-_*v,i[8]=E*v+M,i[1]=v,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=M*v+E,i[10]=_-A*v}else if(e.order==="XZY"){const _=u*m,M=u*h,E=d*m,A=d*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=_*v+A,i[5]=u*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=A*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,zE)}lookAt(e,i,r){const o=this.elements;return bi.subVectors(e,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Os.crossVectors(r,bi),Os.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Os.crossVectors(r,bi)),Os.normalize(),ru.crossVectors(bi,Os),o[0]=Os.x,o[4]=ru.x,o[8]=bi.x,o[1]=Os.y,o[5]=ru.y,o[9]=bi.y,o[2]=Os.z,o[6]=ru.z,o[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],v=r[5],_=r[9],M=r[13],E=r[2],A=r[6],y=r[10],x=r[14],O=r[3],I=r[7],R=r[11],L=r[15],N=o[0],z=o[4],T=o[8],U=o[12],W=o[1],X=o[5],Q=o[9],ue=o[13],fe=o[2],Z=o[6],H=o[10],V=o[14],te=o[3],ce=o[7],ye=o[11],P=o[15];return c[0]=u*N+d*W+m*fe+h*te,c[4]=u*z+d*X+m*Z+h*ce,c[8]=u*T+d*Q+m*H+h*ye,c[12]=u*U+d*ue+m*V+h*P,c[1]=g*N+v*W+_*fe+M*te,c[5]=g*z+v*X+_*Z+M*ce,c[9]=g*T+v*Q+_*H+M*ye,c[13]=g*U+v*ue+_*V+M*P,c[2]=E*N+A*W+y*fe+x*te,c[6]=E*z+A*X+y*Z+x*ce,c[10]=E*T+A*Q+y*H+x*ye,c[14]=E*U+A*ue+y*V+x*P,c[3]=O*N+I*W+R*fe+L*te,c[7]=O*z+I*X+R*Z+L*ce,c[11]=O*T+I*Q+R*H+L*ye,c[15]=O*U+I*ue+R*V+L*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],v=e[6],_=e[10],M=e[14],E=e[3],A=e[7],y=e[11],x=e[15],O=m*M-h*_,I=d*M-h*v,R=d*_-m*v,L=u*M-h*g,N=u*_-m*g,z=u*v-d*g;return i*(A*O-y*I+x*R)-r*(E*O-y*L+x*N)+o*(E*I-A*L+x*z)-c*(E*R-A*N+y*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=e[9],_=e[10],M=e[11],E=e[12],A=e[13],y=e[14],x=e[15],O=i*d-r*u,I=i*m-o*u,R=i*h-c*u,L=r*m-o*d,N=r*h-c*d,z=o*h-c*m,T=g*A-v*E,U=g*y-_*E,W=g*x-M*E,X=v*y-_*A,Q=v*x-M*A,ue=_*x-M*y,fe=O*ue-I*Q+R*X+L*W-N*U+z*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/fe;return e[0]=(d*ue-m*Q+h*X)*Z,e[1]=(o*Q-r*ue-c*X)*Z,e[2]=(A*z-y*N+x*L)*Z,e[3]=(_*N-v*z-M*L)*Z,e[4]=(m*W-u*ue-h*U)*Z,e[5]=(i*ue-o*W+c*U)*Z,e[6]=(y*R-E*z-x*I)*Z,e[7]=(g*z-_*R+M*I)*Z,e[8]=(u*Q-d*W+h*T)*Z,e[9]=(r*W-i*Q-c*T)*Z,e[10]=(E*N-A*R+x*O)*Z,e[11]=(v*R-g*N-M*O)*Z,e[12]=(d*U-u*X-m*T)*Z,e[13]=(i*X-r*U+o*T)*Z,e[14]=(A*I-E*L-y*O)*Z,e[15]=(g*L-v*I+_*O)*Z,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,v=d+d,_=c*h,M=c*g,E=c*v,A=u*g,y=u*v,x=d*v,O=m*h,I=m*g,R=m*v,L=r.x,N=r.y,z=r.z;return o[0]=(1-(A+x))*L,o[1]=(M+R)*L,o[2]=(E-I)*L,o[3]=0,o[4]=(M-R)*N,o[5]=(1-(_+x))*N,o[6]=(y+O)*N,o[7]=0,o[8]=(E+I)*z,o[9]=(y-O)*z,o[10]=(1-(_+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=ho.set(o[0],o[1],o[2]).length();const d=ho.set(o[4],o[5],o[6]).length(),m=ho.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ta.copy(this);const h=1/u,g=1/d,v=1/m;return ta.elements[0]*=h,ta.elements[1]*=h,ta.elements[2]*=h,ta.elements[4]*=g,ta.elements[5]*=g,ta.elements[6]*=g,ta.elements[8]*=v,ta.elements[9]*=v,ta.elements[10]*=v,i.setFromRotationMatrix(ta),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=Ma,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(r-o),_=(i+e)/(i-e),M=(r+o)/(r-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(d===Ma)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Hu)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=Ma,m=!1){const h=this.elements,g=2/(i-e),v=2/(r-o),_=-(i+e)/(i-e),M=-(r+o)/(r-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(d===Ma)E=-2/(u-c),A=-(u+c)/(u-c);else if(d===Hu)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Wu.prototype.isMatrix4=!0;let En=Wu;const ho=new ne,ta=new En,FE=new ne(0,0,0),zE=new ne(1,1,1),Os=new ne,ru=new ne,bi=new ne,lv=new En,cv=new Io;class Cr{constructor(e=0,i=0,r=0,o=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],v=o[2],_=o[6],M=o[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return cv.setFromEuler(this),this.setFromQuaternion(cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const uv=new ne,po=new Io,Xa=new En,ou=new ne,Al=new ne,GE=new ne,VE=new Io,fv=new ne(1,0,0),dv=new ne(0,1,0),hv=new ne(0,0,1),pv={type:"added"},kE={type:"removed"},mo={type:"childadded",child:null},fh={type:"childremoved",child:null};class Ri extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new ne,i=new Cr,r=new Io,o=new ne(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new En},normalMatrix:{value:new lt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return po.setFromAxisAngle(e,i),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,i){return po.setFromAxisAngle(e,i),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(fv,e)}rotateY(e){return this.rotateOnAxis(dv,e)}rotateZ(e){return this.rotateOnAxis(hv,e)}translateOnAxis(e,i){return uv.copy(e).applyQuaternion(this.quaternion),this.position.add(uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(fv,e)}translateY(e){return this.translateOnAxis(dv,e)}translateZ(e){return this.translateOnAxis(hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ou.copy(e):ou.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xa.lookAt(Al,ou,this.up):Xa.lookAt(ou,Al,this.up),this.quaternion.setFromRotationMatrix(Xa),o&&(Xa.extractRotation(o.matrixWorld),po.setFromRotationMatrix(Xa),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pv),mo.child=e,this.dispatchEvent(mo),mo.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kE),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pv),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ri.DEFAULT_UP=new ne(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pl extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),x=this._getHandJoint(h,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,E=.005;h.inputState.pinching&&_>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},lu={h:0,s:0,l:0};function hh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class kt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Lt.workingColorSpace){if(e=qp(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=hh(u,c,e+1/3),this.g=hh(u,c,e),this.b=hh(u,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,i=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Qn){const r=zx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Lt.workingToColorSpace(Kn.copy(this),e),Math.round(St(Kn.r*255,0,255))*65536+Math.round(St(Kn.g*255,0,255))*256+Math.round(St(Kn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(Kn.copy(this),i);const r=Kn.r,o=Kn.g,c=Kn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const v=u-d;switch(h=g<=.5?v/(u+d):v/(2-u-d),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Kn.copy(this),i),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Qn){Lt.workingToColorSpace(Kn.copy(this),e);const i=Kn.r,r=Kn.g,o=Kn.b;return e!==Qn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Ps),this.setHSL(Ps.h+e,Ps.s+i,Ps.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ps),e.getHSL(lu);const r=Gl(Ps.h,lu.h,i),o=Gl(Ps.s,lu.s,i),c=Gl(Ps.l,lu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new kt;kt.NAMES=zx;class WE extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const na=new ne,Wa=new ne,ph=new ne,Ya=new ne,go=new ne,_o=new ne,mv=new ne,mh=new ne,gh=new ne,_h=new ne,vh=new vn,xh=new vn,Sh=new vn;class aa{constructor(e=new ne,i=new ne,r=new ne){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),na.subVectors(e,i),o.cross(na);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){na.subVectors(o,i),Wa.subVectors(r,i),ph.subVectors(e,i);const u=na.dot(na),d=na.dot(Wa),m=na.dot(ph),h=Wa.dot(Wa),g=Wa.dot(ph),v=u*h-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,M=(h*m-d*g)*_,E=(u*g-d*m)*_;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,Ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ya.x),m.addScaledVector(u,Ya.y),m.addScaledVector(d,Ya.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return vh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),vh.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(vh,c.x),u.addScaledVector(xh,c.y),u.addScaledVector(Sh,c.z),u}static isFrontFacing(e,i,r,o){return na.subVectors(r,i),Wa.subVectors(e,i),na.cross(Wa).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return na.subVectors(this.c,this.b),Wa.subVectors(this.a,this.b),na.cross(Wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return aa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return aa.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;go.subVectors(o,r),_o.subVectors(c,r),mh.subVectors(e,r);const m=go.dot(mh),h=_o.dot(mh);if(m<=0&&h<=0)return i.copy(r);gh.subVectors(e,o);const g=go.dot(gh),v=_o.dot(gh);if(g>=0&&v<=g)return i.copy(o);const _=m*v-g*h;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(go,u);_h.subVectors(e,c);const M=go.dot(_h),E=_o.dot(_h);if(E>=0&&M<=E)return i.copy(c);const A=M*h-m*E;if(A<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(r).addScaledVector(_o,d);const y=g*E-M*v;if(y<=0&&v-g>=0&&M-E>=0)return mv.subVectors(c,o),d=(v-g)/(v-g+(M-E)),i.copy(o).addScaledVector(mv,d);const x=1/(y+A+_);return u=A*x,d=_*x,i.copy(r).addScaledVector(go,u).addScaledVector(_o,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zl{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ia.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ia.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ia.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ia):ia.fromBufferAttribute(c,u),ia.applyMatrix4(e.matrixWorld),this.expandByPoint(ia);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cu.copy(r.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ia),ia.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),uu.subVectors(this.max,Rl),vo.subVectors(e.a,Rl),xo.subVectors(e.b,Rl),So.subVectors(e.c,Rl),Is.subVectors(xo,vo),Bs.subVectors(So,xo),mr.subVectors(vo,So);let i=[0,-Is.z,Is.y,0,-Bs.z,Bs.y,0,-mr.z,mr.y,Is.z,0,-Is.x,Bs.z,0,-Bs.x,mr.z,0,-mr.x,-Is.y,Is.x,0,-Bs.y,Bs.x,0,-mr.y,mr.x,0];return!Mh(i,vo,xo,So,uu)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,vo,xo,So,uu))?!1:(fu.crossVectors(Is,Bs),i=[fu.x,fu.y,fu.z],Mh(i,vo,xo,So,uu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ia).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ia).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qa=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ia=new ne,cu=new Zl,vo=new ne,xo=new ne,So=new ne,Is=new ne,Bs=new ne,mr=new ne,Rl=new ne,uu=new ne,fu=new ne,gr=new ne;function Mh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){gr.fromArray(a,c);const d=o.x*Math.abs(gr.x)+o.y*Math.abs(gr.y)+o.z*Math.abs(gr.z),m=e.dot(gr),h=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const wn=new ne,du=new zt;let YE=0;class ba extends wr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=ev,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)du.fromBufferAttribute(this,i),du.applyMatrix3(e),this.setXY(i,du.x,du.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ev&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hx extends ba{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Gx extends ba{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Xi extends ba{constructor(e,i,r){super(new Float32Array(e),i,r)}}const qE=new Zl,Cl=new ne,yh=new ne;class Zp{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const i=Cl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Cl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(yh)),this.expandByPoint(Cl.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jE=0;const Gi=new En,Eh=new Ri,Mo=new ne,Ti=new Zl,wl=new Zl,Fn=new ne;class Wi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dE(e)?Gx:Hx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new lt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,i,r){return Gi.makeTranslation(e,i,r),this.applyMatrix4(Gi),this}scale(e,i,r){return Gi.makeScale(e,i,r),this.applyMatrix4(Gi),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];wl.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Ti.min,wl.min),Ti.expandByPoint(Fn),Fn.addVectors(Ti.max,wl.max),Ti.expandByPoint(Fn)):(Ti.expandByPoint(wl.min),Ti.expandByPoint(wl.max))}Ti.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Fn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Fn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Fn.fromBufferAttribute(d,h),m&&(Mo.fromBufferAttribute(e,h),Fn.add(Mo)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ba(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new ne,m[T]=new ne;const h=new ne,g=new ne,v=new ne,_=new zt,M=new zt,E=new zt,A=new ne,y=new ne;function x(T,U,W){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,W),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,W),g.sub(h),v.sub(h),M.sub(_),E.sub(_);const X=1/(M.x*E.y-E.x*M.y);isFinite(X)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(X),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(X),d[T].add(A),d[U].add(A),d[W].add(A),m[T].add(y),m[U].add(y),m[W].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,U=O.length;T<U;++T){const W=O[T],X=W.start,Q=W.count;for(let ue=X,fe=X+Q;ue<fe;ue+=3)x(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const I=new ne,R=new ne,L=new ne,N=new ne;function z(T){L.fromBufferAttribute(o,T),N.copy(L);const U=d[T];I.copy(U),I.sub(L.multiplyScalar(L.dot(U))).normalize(),R.crossVectors(N,U);const X=R.dot(m[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,X)}for(let T=0,U=O.length;T<U;++T){const W=O[T],X=W.start,Q=W.count;for(let ue=X,fe=X+Q;ue<fe;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ba(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new ne,c=new ne,u=new ne,d=new ne,m=new ne,h=new ne,g=new ne,v=new ne;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,y),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,M=i.count;_<M;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),u.fromBufferAttribute(i,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Fn.fromBufferAttribute(e,i),Fn.normalize(),e.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,v=d.normalized,_=new h.constructor(m.length*g);let M=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let x=0;x<g;x++)_[E++]=h[M++]}return new ba(_,g,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,v=h.length;g<v;g++){const _=h[g],M=e(_,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,_=h.length;v<_;v++){const M=h[v];g.push(M.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZE=0;class qu extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=Ao,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=qh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ja=new ne,bh=new ne,hu=new ne,Fs=new ne,Th=new ne,pu=new ne,Ah=new ne;class KE{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ja.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,i),ja.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){bh.copy(e).add(i).multiplyScalar(.5),hu.copy(i).sub(e).normalize(),Fs.copy(this.origin).sub(bh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(hu),d=Fs.dot(this.direction),m=-Fs.dot(hu),h=Fs.lengthSq(),g=Math.abs(1-u*u);let v,_,M,E;if(g>0)if(v=u*m-d,_=u*d-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,M=v*(v+u*_+2*d)+_*(u*v+_+2*m)+h}else _=c,v=Math.max(0,-(u*_+d)),M=-v*v+_*(_+2*m)+h;else _=-c,v=Math.max(0,-(u*_+d)),M=-v*v+_*(_+2*m)+h;else _<=-E?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+h):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+h):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+h);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),M=-v*v+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(bh).addScaledVector(hu,_),M}intersectSphere(e,i){ja.subVectors(e.center,this.origin);const r=ja.dot(this.direction),o=ja.dot(ja)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,i,r,o,c){Th.subVectors(i,e),pu.subVectors(r,e),Ah.crossVectors(Th,pu);let u=this.direction.dot(Ah),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Fs.subVectors(this.origin,e);const m=d*this.direction.dot(pu.crossVectors(Fs,pu));if(m<0)return null;const h=d*this.direction.dot(Th.cross(Fs));if(h<0||m+h>u)return null;const g=-d*Fs.dot(Ah);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vu extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gv=new En,_r=new KE,mu=new Zp,_v=new ne,gu=new ne,_u=new ne,vu=new ne,Rh=new ne,xu=new ne,vv=new ne,Su=new ne;class Ai extends Ri{constructor(e=new Wi,i=new Vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){xu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],v=c[m];g!==0&&(Rh.fromBufferAttribute(v,e),u?xu.addScaledVector(Rh,g):xu.addScaledVector(Rh.sub(i),g))}i.add(xu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(c),_r.copy(e.ray).recast(e.near),!(mu.containsPoint(_r.origin)===!1&&(_r.intersectSphere(mu,_v)===null||_r.origin.distanceToSquared(_v)>(e.far-e.near)**2))&&(gv.copy(c).invert(),_r.copy(e.ray).applyMatrix4(gv),!(r.boundingBox!==null&&_r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,_r)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const y=_[E],x=u[y.materialIndex],O=Math.max(y.start,M.start),I=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=O,L=I;R<L;R+=3){const N=d.getX(R),z=d.getX(R+1),T=d.getX(R+2);o=Mu(this,x,e,r,h,g,v,N,z,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=E,x=A;y<x;y+=3){const O=d.getX(y),I=d.getX(y+1),R=d.getX(y+2);o=Mu(this,u,e,r,h,g,v,O,I,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const y=_[E],x=u[y.materialIndex],O=Math.max(y.start,M.start),I=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=O,L=I;R<L;R+=3){const N=R,z=R+1,T=R+2;o=Mu(this,x,e,r,h,g,v,N,z,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=E,x=A;y<x;y+=3){const O=y,I=y+1,R=y+2;o=Mu(this,u,e,r,h,g,v,O,I,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function QE(a,e,i,r,o,c,u,d){let m;if(e.side===pi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===$a,d),m===null)return null;Su.copy(d),Su.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(Su);return h<i.near||h>i.far?null:{distance:h,point:Su.clone(),object:a}}function Mu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,gu),a.getVertexPosition(m,_u),a.getVertexPosition(h,vu);const g=QE(a,e,i,r,gu,_u,vu,vv);if(g){const v=new ne;aa.getBarycoord(vv,gu,_u,vu,v),o&&(g.uv=aa.getInterpolatedAttribute(o,d,m,h,v,new zt)),c&&(g.uv1=aa.getInterpolatedAttribute(c,d,m,h,v,new zt)),u&&(g.normal=aa.getInterpolatedAttribute(u,d,m,h,v,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:h,normal:new ne,materialIndex:0};aa.getNormal(gu,_u,vu,_.normal),g.face=_,g.barycoord=v}return g}class JE extends Jn{constructor(e=null,i=1,r=1,o,c,u,d,m,h=Yn,g=Yn,v,_){super(null,u,d,m,h,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new ne,$E=new ne,eb=new lt;class Sr{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Ch.subVectors(r,i).cross($E.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Ch),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||eb.getNormalMatrix(e),o=this.coplanarPoint(Ch).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Zp,tb=new zt(.5,.5),yu=new ne;class Vx{constructor(e=new Sr,i=new Sr,r=new Sr,o=new Sr,c=new Sr,u=new Sr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ma,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],v=c[5],_=c[6],M=c[7],E=c[8],A=c[9],y=c[10],x=c[11],O=c[12],I=c[13],R=c[14],L=c[15];if(o[0].setComponents(h-u,M-g,x-E,L-O).normalize(),o[1].setComponents(h+u,M+g,x+E,L+O).normalize(),o[2].setComponents(h+d,M+v,x+A,L+I).normalize(),o[3].setComponents(h-d,M-v,x-A,L-I).normalize(),r)o[4].setComponents(m,_,y,R).normalize(),o[5].setComponents(h-m,M-_,x-y,L-R).normalize();else if(o[4].setComponents(h-m,M-_,x-y,L-R).normalize(),i===Ma)o[5].setComponents(h+m,M+_,x+y,L+R).normalize();else if(i===Hu)o[5].setComponents(m,_,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const i=tb.distanceTo(e.center);return vr.radius=.7071067811865476+i,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(yu.x=o.normal.x>0?e.max.x:e.min.x,yu.y=o.normal.y>0?e.max.y:e.min.y,yu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kx extends Jn{constructor(e=[],i=Ar,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kp extends Jn{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uo extends Jn{constructor(e,i,r=Ta,o,c,u,d=Yn,m=Yn,h,g=ts,v=1){if(g!==ts&&g!==Tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class nb extends Uo{constructor(e,i=Ta,r=Ar,o,c,u=Yn,d=Yn,m,h=ts){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xx extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kl extends Wi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],v=[];let _=0,M=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Xi(h,3)),this.setAttribute("normal",new Xi(g,3)),this.setAttribute("uv",new Xi(v,2));function E(A,y,x,O,I,R,L,N,z,T,U){const W=R/z,X=L/T,Q=R/2,ue=L/2,fe=N/2,Z=z+1,H=T+1;let V=0,te=0;const ce=new ne;for(let ye=0;ye<H;ye++){const P=ye*X-ue;for(let J=0;J<Z;J++){const be=J*W-Q;ce[A]=be*O,ce[y]=P*I,ce[x]=fe,h.push(ce.x,ce.y,ce.z),ce[A]=0,ce[y]=0,ce[x]=N>0?1:-1,g.push(ce.x,ce.y,ce.z),v.push(J/z),v.push(1-ye/T),V+=1}}for(let ye=0;ye<T;ye++)for(let P=0;P<z;P++){const J=_+P+Z*ye,be=_+P+Z*(ye+1),we=_+(P+1)+Z*(ye+1),Le=_+(P+1)+Z*ye;m.push(J,be,Le),m.push(be,we,Le),te+=6}d.addGroup(M,te,U),M+=te,_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ib{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],_=r[o+1]-g,M=(u-g)/_;return(o+M)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new zt:new ne);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ne,o=[],c=[],u=[],d=new ne,m=new En;for(let M=0;M<=e;M++){const E=M/e;o[M]=this.getTangentAt(E,new ne)}c[0]=new ne,u[0]=new ne;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),v<=h&&(h=v,r.set(0,1,0)),_<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(St(o[M-1].dot(o[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,E))}u[M].crossVectors(o[M],c[M])}if(i===!0){let M=Math.acos(St(c[0].dot(c[e]),-1,1));M/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(M=-M);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],M*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Qp(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,v){let _=(u-c)/h-(d-c)/(h+g)+(d-u)/g,M=(d-u)/g-(m-u)/(g+v)+(m-d)/v;_*=g,M*=g,o(u,d,_,M)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const xv=new ne,Sv=new ne,wh=new Qp,Dh=new Qp,Lh=new Qp;class ab extends ib{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ne){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(Sv.subVectors(o[0],o[1]).add(o[0]),h=Sv);const v=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(xv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=xv),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(h.distanceToSquared(v),M),A=Math.pow(v.distanceToSquared(_),M),y=Math.pow(_.distanceToSquared(g),M);A<1e-4&&(A=1),E<1e-4&&(E=A),y<1e-4&&(y=A),wh.initNonuniformCatmullRom(h.x,v.x,_.x,g.x,E,A,y),Dh.initNonuniformCatmullRom(h.y,v.y,_.y,g.y,E,A,y),Lh.initNonuniformCatmullRom(h.z,v.z,_.z,g.z,E,A,y)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(h.x,v.x,_.x,g.x,this.tension),Dh.initCatmullRom(h.y,v.y,_.y,g.y,this.tension),Lh.initCatmullRom(h.z,v.z,_.z,g.z,this.tension));return r.set(wh.calc(m),Dh.calc(m),Lh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ne().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Vs extends Wi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,v=e/d,_=i/m,M=[],E=[],A=[],y=[];for(let x=0;x<g;x++){const O=x*_-u;for(let I=0;I<h;I++){const R=I*v-c;E.push(R,-O,0),A.push(0,0,1),y.push(I/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const I=O+h*x,R=O+h*(x+1),L=O+1+h*(x+1),N=O+1+h*x;M.push(I,R,N),M.push(R,L,N)}this.setIndex(M),this.setAttribute("position",new Xi(E,3)),this.setAttribute("normal",new Xi(A,3)),this.setAttribute("uv",new Xi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Oo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(Mv(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Mv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ai(a){const e={};for(let i=0;i<a.length;i++){const r=Oo(a[i]);for(const o in r)e[o]=r[o]}return e}function Mv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function sb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Wx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const rb={clone:Oo,merge:ai};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new kt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new En().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cb extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ub extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fb extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Eu=new ne,bu=new Io,ga=new ne;class Yx extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=Ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Eu,bu,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eu,bu,ga.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Eu,bu,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eu,bu,ga.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zs=new ne,yv=new zt,Ev=new zt;class Vi extends Yx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yl*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,i){return this.getViewBounds(e,yv,Ev),i.subVectors(Ev,yv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class qx extends Yx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const yo=-90,Eo=1;class db extends Ri{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(yo,Eo,e,i);o.layers=this.layers,this.add(o);const c=new Vi(yo,Eo,e,i);c.layers=this.layers,this.add(c);const u=new Vi(yo,Eo,e,i);u.layers=this.layers,this.add(u);const d=new Vi(yo,Eo,e,i);d.layers=this.layers,this.add(d);const m=new Vi(yo,Eo,e,i);m.layers=this.layers,this.add(m);const h=new Vi(yo,Eo,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===Ma)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class hb extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lm=class lm{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};lm.prototype.isMatrix2=!0;let bv=lm;function Tv(a,e,i,r){const o=pb(r);switch(i){case Ux:return a*e;case Px:return a*e/o.components*o.byteLength;case Vp:return a*e/o.components*o.byteLength;case Rr:return a*e*2/o.components*o.byteLength;case kp:return a*e*2/o.components*o.byteLength;case Ox:return a*e*3/o.components*o.byteLength;case ra:return a*e*4/o.components*o.byteLength;case Xp:return a*e*4/o.components*o.byteLength;case Du:case Lu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Uu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ap:case rp:return Math.max(a,16)*Math.max(e,8)/4;case ip:case sp:return Math.max(a,8)*Math.max(e,8)/2;case op:case lp:case up:case fp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case cp:case Iu:case dp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case mp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case gp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case bp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Cp:case wp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Dp:case Lp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Bu:case Np:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pb(a){switch(a){case ki:case wx:return{byteLength:1,components:1};case Xl:case Dx:case es:return{byteLength:2,components:1};case Hp:case Gp:return{byteLength:2,components:4};case Ta:case zp:case Sa:return{byteLength:4,components:1};case Lx:case Nx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function mb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,h,g),d.onUploadCallback();let M;if(h instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=a.SHORT;else if(h instanceof Uint32Array)M=a.UNSIGNED_INT;else if(h instanceof Int32Array)M=a.INT;else if(h instanceof Int8Array)M=a.BYTE;else if(h instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,h){const g=m.array,v=m.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,g);else{v.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<v.length;M++){const E=v[_],A=v[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let M=0,E=v.length;M<E;M++){const A=v[M];a.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
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
#endif`,vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
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
#endif`,Eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wb=`#ifdef USE_IRIDESCENCE
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
#endif`,Db=`#ifdef USE_BUMPMAP
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gb=`vec3 transformedNormal = objectNormal;
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
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h1=`PhysicalMaterial material;
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
#endif`,p1=`uniform sampler2D dfgLUT;
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
}`,m1=`
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z1=`#ifdef USE_NORMALMAP
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
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_T=`uniform sampler2D t2D;
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,ET=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,LT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,UT=`#define LAMBERT
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
}`,OT=`#define MATCAP
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
}`,PT=`#define MATCAP
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
}`,IT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,FT=`#define PHONG
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
}`,zT=`#define PHONG
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
}`,HT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,VT=`#define TOON
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
}`,kT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,YT=`#include <common>
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
}`,qT=`uniform vec3 color;
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
}`,jT=`uniform float rotation;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:gb,alphahash_pars_fragment:_b,alphamap_fragment:vb,alphamap_pars_fragment:xb,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:yb,aomap_pars_fragment:Eb,batching_pars_vertex:bb,batching_vertex:Tb,begin_vertex:Ab,beginnormal_vertex:Rb,bsdfs:Cb,iridescence_fragment:wb,bumpmap_pars_fragment:Db,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Ob,color_fragment:Pb,color_pars_fragment:Ib,color_pars_vertex:Bb,color_vertex:Fb,common:zb,cube_uv_reflection_fragment:Hb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:Vb,displacementmap_vertex:kb,emissivemap_fragment:Xb,emissivemap_pars_fragment:Wb,colorspace_fragment:Yb,colorspace_pars_fragment:qb,envmap_fragment:jb,envmap_common_pars_fragment:Zb,envmap_pars_fragment:Kb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:l1,envmap_vertex:Jb,fog_vertex:$b,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:a1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:r1,lights_pars_begin:o1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:f1,lights_phong_pars_fragment:d1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:_1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:M1,logdepthbuf_vertex:y1,map_fragment:E1,map_pars_fragment:b1,map_particle_fragment:T1,map_particle_pars_fragment:A1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:C1,morphinstance_vertex:w1,morphcolor_vertex:D1,morphnormal_vertex:L1,morphtarget_pars_vertex:N1,morphtarget_vertex:U1,normal_fragment_begin:O1,normal_fragment_maps:P1,normal_pars_fragment:I1,normal_pars_vertex:B1,normal_vertex:F1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:V1,iridescence_pars_fragment:k1,opaque_fragment:X1,packing:W1,premultiplied_alpha_fragment:Y1,project_vertex:q1,dithering_fragment:j1,dithering_pars_fragment:Z1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:$1,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:aT,skinnormal_vertex:sT,specularmap_fragment:rT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:_T,backgroundCube_vert:vT,backgroundCube_frag:xT,cube_vert:ST,cube_frag:MT,depth_vert:yT,depth_frag:ET,distance_vert:bT,distance_frag:TT,equirect_vert:AT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:wT,meshbasic_vert:DT,meshbasic_frag:LT,meshlambert_vert:NT,meshlambert_frag:UT,meshmatcap_vert:OT,meshmatcap_frag:PT,meshnormal_vert:IT,meshnormal_frag:BT,meshphong_vert:FT,meshphong_frag:zT,meshphysical_vert:HT,meshphysical_frag:GT,meshtoon_vert:VT,meshtoon_frag:kT,points_vert:XT,points_frag:WT,shadow_vert:YT,shadow_frag:qT,sprite_vert:jT,sprite_frag:ZT},We={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},va={basic:{uniforms:ai([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ai([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ai([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ai([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ai([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new kt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ai([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ai([We.points,We.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ai([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ai([We.common,We.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ai([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ai([We.sprite,We.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:ai([We.common,We.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:ai([We.lights,We.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};va.physical={uniforms:ai([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Tu={r:0,b:0,g:0},KT=new En,Zx=new lt;Zx.set(-1,0,0,0,1,0,0,0,1);function QT(a,e,i,r,o,c){const u=new kt(0);let d=o===!0?0:1,m,h,g=null,v=0,_=null;function M(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const R=O.backgroundBlurriness>0;I=e.get(I,R)}return I}function E(O){let I=!1;const R=M(O);R===null?y(u,d):R&&R.isColor&&(y(R,1),I=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function A(O,I){const R=M(I);R&&(R.isCubeTexture||R.mapping===Yu)?(h===void 0&&(h=new Ai(new Kl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Oo(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(I.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Zx),h.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Yt,(g!==R||v!==R.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,g=R,v=R.version,_=a.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Ai(new Vs(2,2),new Yi({name:"BackgroundMaterial",uniforms:Oo(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Yt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||v!==R.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,g=R,v=R.version,_=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,I){O.getRGB(Tu,Wx(a)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,I=1){u.set(O),d=I,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,y(u,d)},render:E,addToRenderList:A,dispose:x}}function JT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(X,Q,ue,fe,Z){let H=!1;const V=v(X,fe,ue,Q);c!==V&&(c=V,h(c.object)),H=M(X,fe,ue,Z),H&&E(X,fe,ue,Z),Z!==null&&e.update(Z,a.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,R(X,Q,ue,fe),Z!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return a.createVertexArray()}function h(X){return a.bindVertexArray(X)}function g(X){return a.deleteVertexArray(X)}function v(X,Q,ue,fe){const Z=fe.wireframe===!0;let H=r[Q.id];H===void 0&&(H={},r[Q.id]=H);const V=X.isInstancedMesh===!0?X.id:0;let te=H[V];te===void 0&&(te={},H[V]=te);let ce=te[ue.id];ce===void 0&&(ce={},te[ue.id]=ce);let ye=ce[Z];return ye===void 0&&(ye=_(m()),ce[Z]=ye),ye}function _(X){const Q=[],ue=[],fe=[];for(let Z=0;Z<i;Z++)Q[Z]=0,ue[Z]=0,fe[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ue,attributeDivisors:fe,object:X,attributes:{},index:null}}function M(X,Q,ue,fe){const Z=c.attributes,H=Q.attributes;let V=0;const te=ue.getAttributes();for(const ce in te)if(te[ce].location>=0){const P=Z[ce];let J=H[ce];if(J===void 0&&(ce==="instanceMatrix"&&X.instanceMatrix&&(J=X.instanceMatrix),ce==="instanceColor"&&X.instanceColor&&(J=X.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;V++}return c.attributesNum!==V||c.index!==fe}function E(X,Q,ue,fe){const Z={},H=Q.attributes;let V=0;const te=ue.getAttributes();for(const ce in te)if(te[ce].location>=0){let P=H[ce];P===void 0&&(ce==="instanceMatrix"&&X.instanceMatrix&&(P=X.instanceMatrix),ce==="instanceColor"&&X.instanceColor&&(P=X.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),Z[ce]=J,V++}c.attributes=Z,c.attributesNum=V,c.index=fe}function A(){const X=c.newAttributes;for(let Q=0,ue=X.length;Q<ue;Q++)X[Q]=0}function y(X){x(X,0)}function x(X,Q){const ue=c.newAttributes,fe=c.enabledAttributes,Z=c.attributeDivisors;ue[X]=1,fe[X]===0&&(a.enableVertexAttribArray(X),fe[X]=1),Z[X]!==Q&&(a.vertexAttribDivisor(X,Q),Z[X]=Q)}function O(){const X=c.newAttributes,Q=c.enabledAttributes;for(let ue=0,fe=Q.length;ue<fe;ue++)Q[ue]!==X[ue]&&(a.disableVertexAttribArray(ue),Q[ue]=0)}function I(X,Q,ue,fe,Z,H,V){V===!0?a.vertexAttribIPointer(X,Q,ue,Z,H):a.vertexAttribPointer(X,Q,ue,fe,Z,H)}function R(X,Q,ue,fe){A();const Z=fe.attributes,H=ue.getAttributes(),V=Q.defaultAttributeValues;for(const te in H){const ce=H[te];if(ce.location>=0){let ye=Z[te];if(ye===void 0&&(te==="instanceMatrix"&&X.instanceMatrix&&(ye=X.instanceMatrix),te==="instanceColor"&&X.instanceColor&&(ye=X.instanceColor)),ye!==void 0){const P=ye.normalized,J=ye.itemSize,be=e.get(ye);if(be===void 0)continue;const we=be.buffer,Le=be.type,ie=be.bytesPerElement,xe=Le===a.INT||Le===a.UNSIGNED_INT||ye.gpuType===zp;if(ye.isInterleavedBufferAttribute){const Me=ye.data,Ge=Me.stride,$e=ye.offset;if(Me.isInstancedInterleavedBuffer){for(let qe=0;qe<ce.locationSize;qe++)x(ce.location+qe,Me.meshPerAttribute);X.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let qe=0;qe<ce.locationSize;qe++)y(ce.location+qe);a.bindBuffer(a.ARRAY_BUFFER,we);for(let qe=0;qe<ce.locationSize;qe++)I(ce.location+qe,J/ce.locationSize,Le,P,Ge*ie,($e+J/ce.locationSize*qe)*ie,xe)}else{if(ye.isInstancedBufferAttribute){for(let Me=0;Me<ce.locationSize;Me++)x(ce.location+Me,ye.meshPerAttribute);X.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Me=0;Me<ce.locationSize;Me++)y(ce.location+Me);a.bindBuffer(a.ARRAY_BUFFER,we);for(let Me=0;Me<ce.locationSize;Me++)I(ce.location+Me,J/ce.locationSize,Le,P,J*ie,J/ce.locationSize*Me*ie,xe)}}else if(V!==void 0){const P=V[te];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(ce.location,P);break;case 3:a.vertexAttrib3fv(ce.location,P);break;case 4:a.vertexAttrib4fv(ce.location,P);break;default:a.vertexAttrib1fv(ce.location,P)}}}}O()}function L(){U();for(const X in r){const Q=r[X];for(const ue in Q){const fe=Q[ue];for(const Z in fe){const H=fe[Z];for(const V in H)g(H[V].object),delete H[V];delete fe[Z]}}delete r[X]}}function N(X){if(r[X.id]===void 0)return;const Q=r[X.id];for(const ue in Q){const fe=Q[ue];for(const Z in fe){const H=fe[Z];for(const V in H)g(H[V].object),delete H[V];delete fe[Z]}}delete r[X.id]}function z(X){for(const Q in r){const ue=r[Q];for(const fe in ue){const Z=ue[fe];if(Z[X.id]===void 0)continue;const H=Z[X.id];for(const V in H)g(H[V].object),delete H[V];delete Z[X.id]}}}function T(X){for(const Q in r){const ue=r[Q],fe=X.isInstancedMesh===!0?X.id:0,Z=ue[fe];if(Z!==void 0){for(const H in Z){const V=Z[H];for(const te in V)g(V[te].object),delete V[te];delete Z[H]}delete ue[fe],Object.keys(ue).length===0&&delete r[Q]}}}function U(){W(),u=!0,c!==o&&(c=o,h(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function $T(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let _=0;for(let M=0;M<g;M++)_+=h[M];i.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function eA(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ra&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ki&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Sa&&!T)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(st("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:R,maxSamples:L,samples:N}}function tA(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Sr,d=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||o;return o=_,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const E=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,x=a.get(v);if(!o||E===null||E.length===0||c&&!y)c?g(null):h();else{const O=c?0:r,I=O*4;let R=x.clippingState||null;m.value=R,R=g(E,_,I,M);for(let L=0;L!==I;++L)R[L]=i[L];x.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,M,E){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const x=M+A*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,R=M;I!==A;++I,R+=4)u.copy(v[I]).applyMatrix4(O,d),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const ks=4,Av=[.125,.215,.35,.446,.526,.582],Er=20,nA=256,Dl=new qx,Rv=new kt;let Nh=null,Uh=0,Oh=0,Ph=!1;const iA=new ne;class Cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=iA}=c;Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Uh,Oh),this._renderer.xr.enabled=Ph,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ar||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:es,format:ra,colorSpace:Fu,depthBuffer:!1},o=wv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aA(c)),this._blurMaterial=rA(c,e,i),this._ggxMaterial=sA(c,e,i)}return o}_compileMaterial(e){const i=new Ai(new Wi,e);this._renderer.compile(i,Dl)}_sceneToCubeUV(e,i,r,o,c){const m=new Vi(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Rv),v.toneMapping=ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new Kl,new Vu({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,x=!0):(y.color.copy(Rv),x=!0);for(let I=0;I<6;I++){const R=I%3;R===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):R===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const L=this._cubeSize;bo(o,R*L,I>2?L:0,L,L),v.setRenderTarget(o),x&&v.render(A,m),v.render(e,m)}v.toneMapping=M,v.autoClear=_,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Ar||e.mapping===No;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;bo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Dl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=0+h*1.25,M=v*_,{_lodMax:E}=this,A=this._sizeLods[r],y=3*A*(r>E-ks?r-E+ks:0),x=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,bo(c,y,x,3*A,2*A),o.setRenderTarget(c),o.render(d,Dl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,bo(e,y,x,3*A,2*A),o.setRenderTarget(e),o.render(d,Dl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const _=h.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Er-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):Er;y>Er&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Er}`);const x=[];let O=0;for(let z=0;z<Er;++z){const T=z/A,U=Math.exp(-T*T/2);x.push(U),z===0?O+=U:z<y&&(O+=2*U)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:I}=this;_.dTheta.value=E,_.mipInt.value=I-r;const R=this._sizeLods[o],L=3*R*(o>I-ks?o-I+ks:0),N=4*(this._cubeSize-R);bo(i,L,N,3*R,2*R),m.setRenderTarget(i),m.render(v,Dl)}}function aA(a){const e=[],i=[],r=[];let o=a;const c=a-ks+1+Av.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-ks?m=Av[u-a+ks-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,A=3,y=2,x=1,O=new Float32Array(A*E*M),I=new Float32Array(y*E*M),R=new Float32Array(x*E*M);for(let N=0;N<M;N++){const z=N%3*2/3-1,T=N>2?0:-1,U=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];O.set(U,A*E*N),I.set(_,y*E*N);const W=[N,N,N,N,N,N];R.set(W,x*E*N)}const L=new Wi;L.setAttribute("position",new ba(O,A)),L.setAttribute("uv",new ba(I,y)),L.setAttribute("faceIndex",new ba(R,x)),r.push(new Ai(L,null)),o>ks&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function wv(a,e,i){const r=new Ea(a,e,i);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function sA(a,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function rA(a,e,i){const r=new Float32Array(Er),o=new ne(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Dv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Lv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}class Kx extends Ea{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new kx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Kl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:Qa});c.uniforms.tEquirect.value=i;const u=new Ai(o,c),d=i.minFilter;return i.minFilter===Gs&&(i.minFilter=xn),new db(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function oA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?u(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===ah||M===sh)if(e.has(_)){const E=e.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const A=new Kx(E.height);return A.fromEquirectangularTexture(a,_),e.set(_,A),_.addEventListener("dispose",h),d(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,E=M===ah||M===sh,A=M===Ar||M===No;if(E||A){let y=i.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new Cv(a)),y=E?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const O=_.image;return E&&O&&O.height>0||A&&O&&m(O)?(r===null&&(r=new Cv(a)),y=E?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function d(_,M){return M===ah?_.mapping=Ar:M===sh&&(_.mapping=No),_}function m(_){let M=0;const E=6;for(let A=0;A<E;A++)_[A]!==void 0&&M++;return M===E}function h(_){const M=_.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function lA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Ro("WebGLRenderer: "+r+" extension not supported."),o}}}function cA(a,e,i,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)e.update(_[M],a.ARRAY_BUFFER)}function h(v){const _=[],M=v.index,E=v.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const O=M.array;A=M.version;for(let I=0,R=O.length;I<R;I+=3){const L=O[I+0],N=O[I+1],z=O[I+2];_.push(L,N,N,z,z,L)}}else{const O=E.array;A=E.version;for(let I=0,R=O.length/3-1;I<R;I+=3){const L=I+0,N=I+1,z=I+2;_.push(L,N,N,z,z,L)}}const y=new(E.count>=65535?Gx:Hx)(_,1);y.version=A;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function g(v){const _=c.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function uA(a,e,i){let r;function o(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,_){a.drawElements(r,_,c,v*u),i.update(_,r,1)}function h(v,_,M){M!==0&&(a.drawElementsInstanced(r,_,c,v*u,M),i.update(_,r,M))}function g(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,M);let A=0;for(let y=0;y<M;y++)A+=_[y];i.update(A,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function fA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function dA(a,e,i){const r=new WeakMap,o=new vn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let W=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",W)};var M=W;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let L=d.attributes.position.count*R,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const z=new Float32Array(L*N*4*v),T=new Bx(z,L,N,v);T.type=Sa,T.needsUpdate=!0;const U=R*4;for(let X=0;X<v;X++){const Q=x[X],ue=O[X],fe=I[X],Z=L*N*4*X;for(let H=0;H<Q.count;H++){const V=H*U;E===!0&&(o.fromBufferAttribute(Q,H),z[Z+V+0]=o.x,z[Z+V+1]=o.y,z[Z+V+2]=o.z,z[Z+V+3]=0),A===!0&&(o.fromBufferAttribute(ue,H),z[Z+V+4]=o.x,z[Z+V+5]=o.y,z[Z+V+6]=o.z,z[Z+V+7]=0),y===!0&&(o.fromBufferAttribute(fe,H),z[Z+V+8]=o.x,z[Z+V+9]=o.y,z[Z+V+10]=o.z,z[Z+V+11]=fe.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new zt(L,N)},r.set(d,_),d.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",A),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function hA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return _}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const pA={[Mx]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[bx]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[Rx]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function mA(a,e,i,r,o,c){const u=new Ea(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Uo(e,i):void 0}),d=new Ea(e,i,{type:es,depthBuffer:!1,stencilBuffer:!1}),m=new Wi;m.setAttribute("position",new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Xi([0,2,0,0,2,0],2));const h=new cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ai(m,h),v=new qx(-1,1,1,-1,0,1);let _=null,M=null,E=!1,A,y=null,x=[],O=!1;this.setSize=function(I,R){u.setSize(I,R),d.setSize(I,R);for(let L=0;L<x.length;L++){const N=x[L];N.setSize&&N.setSize(I,R)}},this.setEffects=function(I){x=I,O=x.length>0&&x[0].isRenderPass===!0;const R=u.width,L=u.height;for(let N=0;N<x.length;N++){const z=x[N];z.setSize&&z.setSize(R,L)}},this.begin=function(I,R){if(E||I.toneMapping===ya&&x.length===0)return!1;if(y=R,R!==null){const L=R.width,N=R.height;(u.width!==L||u.height!==N)&&this.setSize(L,N)}return O===!1&&I.setRenderTarget(u),A=I.toneMapping,I.toneMapping=ya,!0},this.hasRenderPass=function(){return O},this.end=function(I,R){I.toneMapping=A,E=!0;let L=u,N=d;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(I,N,L,R),T.needsSwap!==!1)){const U=L;L=N,N=U}}if(_!==I.outputColorSpace||M!==I.toneMapping){_=I.outputColorSpace,M=I.toneMapping,h.defines={},Lt.getTransfer(_)===Yt&&(h.defines.SRGB_TRANSFER="");const z=pA[M];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,I.setRenderTarget(y),I.render(g,v),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const Qx=new Jn,Up=new Uo(1,1),Jx=new Bx,$x=new BE,eS=new kx,Nv=[],Uv=[],Ov=new Float32Array(16),Pv=new Float32Array(9),Iv=new Float32Array(4);function Bo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Nv[o];if(c===void 0&&(c=new Float32Array(o),Nv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function On(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Pn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Zu(a,e){let i=Uv[e];i===void 0&&(i=new Int32Array(e),Uv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function gA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2fv(this.addr,e),Pn(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;a.uniform3fv(this.addr,e),Pn(i,e)}}function xA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4fv(this.addr,e),Pn(i,e)}}function SA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Iv.set(r),a.uniformMatrix2fv(this.addr,!1,Iv),Pn(i,r)}}function MA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Pv.set(r),a.uniformMatrix3fv(this.addr,!1,Pv),Pn(i,r)}}function yA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Ov.set(r),a.uniformMatrix4fv(this.addr,!1,Ov),Pn(i,r)}}function EA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function bA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2iv(this.addr,e),Pn(i,e)}}function TA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3iv(this.addr,e),Pn(i,e)}}function AA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4iv(this.addr,e),Pn(i,e)}}function RA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function CA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2uiv(this.addr,e),Pn(i,e)}}function wA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3uiv(this.addr,e),Pn(i,e)}}function DA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4uiv(this.addr,e),Pn(i,e)}}function LA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Up.compareFunction=i.isReversedDepthBuffer()?Yp:Wp,c=Up):c=Qx,i.setTexture2D(e||c,o)}function NA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||$x,o)}function UA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||eS,o)}function OA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Jx,o)}function PA(a){switch(a){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return SA;case 35675:return MA;case 35676:return yA;case 5124:case 35670:return EA;case 35667:case 35671:return bA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return RA;case 36294:return CA;case 36295:return wA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return OA}}function IA(a,e){a.uniform1fv(this.addr,e)}function BA(a,e){const i=Bo(e,this.size,2);a.uniform2fv(this.addr,i)}function FA(a,e){const i=Bo(e,this.size,3);a.uniform3fv(this.addr,i)}function zA(a,e){const i=Bo(e,this.size,4);a.uniform4fv(this.addr,i)}function HA(a,e){const i=Bo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function GA(a,e){const i=Bo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function VA(a,e){const i=Bo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function kA(a,e){a.uniform1iv(this.addr,e)}function XA(a,e){a.uniform2iv(this.addr,e)}function WA(a,e){a.uniform3iv(this.addr,e)}function YA(a,e){a.uniform4iv(this.addr,e)}function qA(a,e){a.uniform1uiv(this.addr,e)}function jA(a,e){a.uniform2uiv(this.addr,e)}function ZA(a,e){a.uniform3uiv(this.addr,e)}function KA(a,e){a.uniform4uiv(this.addr,e)}function QA(a,e,i){const r=this.cache,o=e.length,c=Zu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Up:u=Qx;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function JA(a,e,i){const r=this.cache,o=e.length,c=Zu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||$x,c[u])}function $A(a,e,i){const r=this.cache,o=e.length,c=Zu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||eS,c[u])}function e2(a,e,i){const r=this.cache,o=e.length,c=Zu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Jx,c[u])}function t2(a){switch(a){case 5126:return IA;case 35664:return BA;case 35665:return FA;case 35666:return zA;case 35674:return HA;case 35675:return GA;case 35676:return VA;case 5124:case 35670:return kA;case 35667:case 35671:return XA;case 35668:case 35672:return WA;case 35669:case 35673:return YA;case 5125:return qA;case 36294:return jA;case 36295:return ZA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return e2}}class n2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=PA(i.type)}}class i2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=t2(i.type)}}class a2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function Bv(a,e){a.seq.push(e),a.map[e.id]=e}function s2(a,e,i){const r=a.name,o=r.length;for(Ih.lastIndex=0;;){const c=Ih.exec(r),u=Ih.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Bv(i,h===void 0?new n2(d,a,e):new i2(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new a2(d),Bv(i,v)),i=v}}}class Ou{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);s2(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Fv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const r2=37297;let o2=0;function l2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const zv=new lt;function c2(a){Lt._getMatrix(zv,Lt.workingColorSpace,a);const e=`mat3( ${zv.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(a)){case zu:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Hv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+l2(a.getShaderSource(e),d)}else return c}function u2(a,e){const i=c2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const f2={[Mx]:"Linear",[yx]:"Reinhard",[Ex]:"Cineon",[bx]:"ACESFilmic",[Ax]:"AgX",[Rx]:"Neutral",[Tx]:"Custom"};function d2(a,e){const i=f2[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Au=new ne;function h2(){Lt.getLuminanceCoefficients(Au);const a=Au.x.toFixed(4),e=Au.y.toFixed(4),i=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function m2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function g2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function Il(a){return a!==""}function Gv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(a){return a.replace(_2,x2)}const v2=new Map;function x2(a,e){let i=gt[e];if(i===void 0){const r=v2.get(e);if(r!==void 0)i=gt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Op(i)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(a){return a.replace(S2,M2)}function M2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Xv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const y2={[wu]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};function E2(a){return y2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b2={[Ar]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE",[Yu]:"ENVMAP_TYPE_CUBE_UV"};function T2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":b2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const A2={[No]:"ENVMAP_MODE_REFRACTION"};function R2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":A2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const C2={[Sx]:"ENVMAP_BLENDING_MULTIPLY",[tE]:"ENVMAP_BLENDING_MIX",[nE]:"ENVMAP_BLENDING_ADD"};function w2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":C2[a.combine]||"ENVMAP_BLENDING_NONE"}function D2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function L2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=E2(i),h=T2(i),g=R2(i),v=w2(i),_=D2(i),M=p2(i),E=m2(c),A=o.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Il).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Il).join(`
`),x.length>0&&(x+=`
`)):(y=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),x=[Xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ya?"#define TONE_MAPPING":"",i.toneMapping!==ya?gt.tonemapping_pars_fragment:"",i.toneMapping!==ya?d2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,u2("linearToOutputTexel",i.outputColorSpace),h2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Il).join(`
`)),u=Op(u),u=Gv(u,i),u=Vv(u,i),d=Op(d),d=Gv(d,i),d=Vv(d,i),u=kv(u),d=kv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=O+y+u,R=O+x+d,L=Fv(o,o.VERTEX_SHADER,I),N=Fv(o,o.FRAGMENT_SHADER,R);o.attachShader(A,L),o.attachShader(A,N),i.index0AttributeName!==void 0?o.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(X){if(a.debug.checkShaderErrors){const Q=o.getProgramInfoLog(A)||"",ue=o.getShaderInfoLog(L)||"",fe=o.getShaderInfoLog(N)||"",Z=Q.trim(),H=ue.trim(),V=fe.trim();let te=!0,ce=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,L,N);else{const ye=Hv(o,L,"vertex"),P=Hv(o,N,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Z+`
`+ye+`
`+P)}else Z!==""?st("WebGLProgram: Program Info Log:",Z):(H===""||V==="")&&(ce=!1);ce&&(X.diagnostics={runnable:te,programLog:Z,vertexShader:{log:H,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(L),o.deleteShader(N),T=new Ou(o,A),U=g2(o,A)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(A,r2)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=o2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=N,this}let N2=0;class U2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new O2(e),i.set(e,r)),r}}class O2{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}}function P2(a){return a===Rr||a===Iu||a===Bu}function I2(a,e,i,r,o,c){const u=new Fx,d=new U2,m=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,U,W,X,Q,ue){const fe=X.fog,Z=Q.geometry,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||H,V),ce=te&&te.mapping===Yu?te.image.height:null,ye=M[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const P=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,J=P!==void 0?P.length:0;let be=0;Z.morphAttributes.position!==void 0&&(be=1),Z.morphAttributes.normal!==void 0&&(be=2),Z.morphAttributes.color!==void 0&&(be=3);let we,Le,ie,xe;if(ye){const Ye=va[ye];we=Ye.vertexShader,Le=Ye.fragmentShader}else{we=T.vertexShader,Le=T.fragmentShader;const Ye=d.getVertexShaderStage(T),qt=d.getFragmentShaderStage(T);d.update(T,Ye,qt),ie=Ye.id,xe=qt.id}const Me=a.getRenderTarget(),Ge=a.state.buffers.depth.getReversed(),$e=Q.isInstancedMesh===!0,qe=Q.isBatchedMesh===!0,Tt=!!T.map,ct=!!T.matcap,vt=!!te,Mt=!!T.aoMap,mt=!!T.lightMap,nn=!!T.bumpMap&&T.wireframe===!1,cn=!!T.normalMap,un=!!T.displacementMap,xt=!!T.emissiveMap,Nt=!!T.metalnessMap,$t=!!T.roughnessMap,K=T.anisotropy>0,Ut=T.clearcoat>0,At=T.dispersion>0,B=T.iridescence>0,b=T.sheen>0,ee=T.transmission>0,ae=K&&!!T.anisotropyMap,ge=Ut&&!!T.clearcoatMap,Ne=Ut&&!!T.clearcoatNormalMap,Be=Ut&&!!T.clearcoatRoughnessMap,de=B&&!!T.iridescenceMap,me=B&&!!T.iridescenceThicknessMap,Ce=b&&!!T.sheenColorMap,Fe=b&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Ie=!!T.specularColorMap,je=!!T.specularIntensityMap,Qe=ee&&!!T.transmissionMap,nt=ee&&!!T.thicknessMap,Y=!!T.gradientMap,De=!!T.alphaMap,_e=T.alphaTest>0,Pe=!!T.alphaHash,Ve=!!T.extensions;let Te=ya;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Te=a.toneMapping);const Je={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:Le,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:qe,batchingColor:qe&&Q._colorsTexture!==null,instancing:$e,instancingColor:$e&&Q.instanceColor!==null,instancingMorph:$e&&Q.morphTexture!==null,outputColorSpace:Me===null?a.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Tt,matcap:ct,envMap:vt,envMapMode:vt&&te.mapping,envMapCubeUVHeight:ce,aoMap:Mt,lightMap:mt,bumpMap:nn,normalMap:cn,displacementMap:un,emissiveMap:xt,normalMapObjectSpace:cn&&T.normalMapType===sE,normalMapTangentSpace:cn&&T.normalMapType===J_,packedNormalMap:cn&&T.normalMapType===J_&&P2(T.normalMap.format),metalnessMap:Nt,roughnessMap:$t,anisotropy:K,anisotropyMap:ae,clearcoat:Ut,clearcoatMap:ge,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Be,dispersion:At,iridescence:B,iridescenceMap:de,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:Ie,specularIntensityMap:je,transmission:ee,transmissionMap:Qe,thicknessMap:nt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Ao&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:Pe,combine:T.combine,mapUv:Tt&&E(T.map.channel),aoMapUv:Mt&&E(T.aoMap.channel),lightMapUv:mt&&E(T.lightMap.channel),bumpMapUv:nn&&E(T.bumpMap.channel),normalMapUv:cn&&E(T.normalMap.channel),displacementMapUv:un&&E(T.displacementMap.channel),emissiveMapUv:xt&&E(T.emissiveMap.channel),metalnessMapUv:Nt&&E(T.metalnessMap.channel),roughnessMapUv:$t&&E(T.roughnessMap.channel),anisotropyMapUv:ae&&E(T.anisotropyMap.channel),clearcoatMapUv:ge&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(T.sheenRoughnessMap.channel),specularMapUv:Oe&&E(T.specularMap.channel),specularColorMapUv:Ie&&E(T.specularColorMap.channel),specularIntensityMapUv:je&&E(T.specularIntensityMap.channel),transmissionMapUv:Qe&&E(T.transmissionMap.channel),thicknessMapUv:nt&&E(T.thicknessMap.channel),alphaMapUv:De&&E(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(cn||K),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Z.attributes.uv&&(Tt||De),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&cn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:be,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&W.length>0,shadowMapType:a.shadowMap.type,toneMapping:Te,decodeVideoTexture:Tt&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xa,flipSided:T.side===pi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Je.vertexUv1s=m.has(1),Je.vertexUv2s=m.has(2),Je.vertexUv3s=m.has(3),m.clear(),Je}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)U.push(W),U.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(x(U,T),O(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function O(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const U=M[T.type];let W;if(U){const X=va[U];W=rb.clone(X.uniforms)}else W=T.uniforms;return W}function R(T,U){let W=g.get(U);return W!==void 0?++W.usedTimes:(W=new L2(a,U,T,o),h.push(W),g.set(U,W)),W}function L(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function z(){d.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:I,acquireProgram:R,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:z}}function B2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function F2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Wv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Yv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,E,A,y,x){let O=a[e];return O===void 0?(O={id:_.id,object:_,geometry:M,material:E,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:y,group:x},a[e]=O):(O.id=_.id,O.object=_,O.geometry=M,O.material=E,O.materialVariant=u(_),O.groupOrder=A,O.renderOrder=_.renderOrder,O.z=y,O.group=x),e++,O}function m(_,M,E,A,y,x){const O=d(_,M,E,A,y,x);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):i.push(O)}function h(_,M,E,A,y,x){const O=d(_,M,E,A,y,x);E.transmission>0?r.unshift(O):E.transparent===!0?o.unshift(O):i.unshift(O)}function g(_,M,E){i.length>1&&i.sort(_||F2),r.length>1&&r.sort(M||Wv),o.length>1&&o.sort(M||Wv),E&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let _=e,M=a.length;_<M;_++){const E=a[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:v,sort:g}}function z2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Yv,a.set(r,[u])):o>=c.length?(u=new Yv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function H2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new kt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return a[e.id]=i,i}}}function G2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let V2=0;function k2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function X2(a){const e=new H2,i=G2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,c=new En,u=new En;function d(h){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,E=0,A=0,y=0,x=0,O=0,I=0,R=0,L=0,N=0,z=0;h.sort(k2);for(let U=0,W=h.length;U<W;U++){const X=h[U],Q=X.color,ue=X.intensity,fe=X.distance;let Z=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Rr?Z=X.shadow.map.texture:Z=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=Q.r*ue,v+=Q.g*ue,_+=Q.b*ue;else if(X.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(X.sh.coefficients[H],ue);z++}else if(X.isDirectionalLight){const H=e.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const V=X.shadow,te=i.get(X);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.directionalShadow[M]=te,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=X.shadow.matrix,O++}r.directional[M]=H,M++}else if(X.isSpotLight){const H=e.get(X);H.position.setFromMatrixPosition(X.matrixWorld),H.color.copy(Q).multiplyScalar(ue),H.distance=fe,H.coneCos=Math.cos(X.angle),H.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),H.decay=X.decay,r.spot[A]=H;const V=X.shadow;if(X.map&&(r.spotLightMap[L]=X.map,L++,V.updateMatrices(X),X.castShadow&&N++),r.spotLightMatrix[A]=V.matrix,X.castShadow){const te=i.get(X);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.spotShadow[A]=te,r.spotShadowMap[A]=Z,R++}A++}else if(X.isRectAreaLight){const H=e.get(X);H.color.copy(Q).multiplyScalar(ue),H.halfWidth.set(X.width*.5,0,0),H.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=H,y++}else if(X.isPointLight){const H=e.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),H.distance=X.distance,H.decay=X.decay,X.castShadow){const V=X.shadow,te=i.get(X);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,te.shadowCameraNear=V.camera.near,te.shadowCameraFar=V.camera.far,r.pointShadow[E]=te,r.pointShadowMap[E]=Z,r.pointShadowMatrix[E]=X.shadow.matrix,I++}r.point[E]=H,E++}else if(X.isHemisphereLight){const H=e.get(X);H.skyColor.copy(X.color).multiplyScalar(ue),H.groundColor.copy(X.groundColor).multiplyScalar(ue),r.hemi[x]=H,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==O||T.numPointShadows!==I||T.numSpotShadows!==R||T.numSpotMaps!==L||T.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=O,T.numPointShadows=I,T.numSpotShadows=R,T.numSpotMaps=L,T.numLightProbes=z,r.version=V2++)}function m(h,g){let v=0,_=0,M=0,E=0,A=0;const y=g.matrixWorldInverse;for(let x=0,O=h.length;x<O;x++){const I=h[x];if(I.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(I.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(I.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(I.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(y),_++}else if(I.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function qv(a){const e=new X2(a),i=[],r=[],o=[];function c(_){v.camera=_,i.length=0,r.length=0,o.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function m(_){o.push(_)}function h(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function W2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new qv(a),e.set(o,[d])):c>=u.length?(d=new qv(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q2=`uniform sampler2D shadow_pass;
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
}`,j2=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],Z2=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],jv=new En,Ll=new ne,Bh=new ne;function K2(a,e,i){let r=new Vx;const o=new zt,c=new zt,u=new vn,d=new ub,m=new fb,h={},g=i.maxTextureSize,v={[$a]:pi,[pi]:$a,[xa]:xa},_=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Y2,fragmentShader:q2}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Wi;E.setAttribute("position",new ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ai(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let x=this.type;this.render=function(N,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===Iy&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wu);const U=a.getRenderTarget(),W=a.getActiveCubeFace(),X=a.getActiveMipmapLevel(),Q=a.state;Q.setBlending(Qa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ue=x!==this.type;ue&&z.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(Z=>Z.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,Z=N.length;fe<Z;fe++){const H=N[fe],V=H.shadow;if(V===void 0){st("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const te=V.getFrameExtents();o.multiply(te),c.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/te.x),o.x=c.x*te.x,V.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/te.y),o.y=c.y*te.y,V.mapSize.y=c.y));const ce=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ce,V.map===null||ue===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ol){if(H.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ea(o.x,o.y,{format:Rr,type:es,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new Uo(o.x,o.y,Sa),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=ts,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn}else H.isPointLight?(V.map=new Kx(o.x),V.map.depthTexture=new nb(o.x,Ta)):(V.map=new Ea(o.x,o.y),V.map.depthTexture=new Uo(o.x,o.y,Ta)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=ts,this.type===wu?(V.map.depthTexture.compareFunction=ce?Yp:Wp,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn);V.camera.updateProjectionMatrix()}const ye=V.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<ye;P++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,P),a.clear();else{P===0&&(a.setRenderTarget(V.map),a.clear());const J=V.getViewport(P);u.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Q.viewport(u)}if(H.isPointLight){const J=V.camera,be=V.matrix,we=H.distance||J.far;we!==J.far&&(J.far=we,J.updateProjectionMatrix()),Ll.setFromMatrixPosition(H.matrixWorld),J.position.copy(Ll),Bh.copy(J.position),Bh.add(j2[P]),J.up.copy(Z2[P]),J.lookAt(Bh),J.updateMatrixWorld(),be.makeTranslation(-Ll.x,-Ll.y,-Ll.z),jv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(jv,J.coordinateSystem,J.reversedDepth)}else V.updateMatrices(H);r=V.getFrustum(),R(z,T,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Ol&&O(V,T),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(U,W,X)};function O(N,z){const T=e.update(A);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ea(o.x,o.y,{format:Rr,type:es})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(z,null,T,_,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(z,null,T,M,A,null)}function I(N,z,T,U){let W=null;const X=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)W=X;else if(W=T.isPointLight===!0?m:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=W.uuid,ue=z.uuid;let fe=h[Q];fe===void 0&&(fe={},h[Q]=fe);let Z=fe[ue];Z===void 0&&(Z=W.clone(),fe[ue]=Z,z.addEventListener("dispose",L)),W=Z}if(W.visible=z.visible,W.wireframe=z.wireframe,U===Ol?W.side=z.shadowSide!==null?z.shadowSide:z.side:W.side=z.shadowSide!==null?z.shadowSide:v[z.side],W.alphaMap=z.alphaMap,W.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,W.map=z.map,W.clipShadows=z.clipShadows,W.clippingPlanes=z.clippingPlanes,W.clipIntersection=z.clipIntersection,W.displacementMap=z.displacementMap,W.displacementScale=z.displacementScale,W.displacementBias=z.displacementBias,W.wireframeLinewidth=z.wireframeLinewidth,W.linewidth=z.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Q=a.properties.get(W);Q.light=T}return W}function R(N,z,T,U,W){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Ol)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),fe=N.material;if(Array.isArray(fe)){const Z=ue.groups;for(let H=0,V=Z.length;H<V;H++){const te=Z[H],ce=fe[te.materialIndex];if(ce&&ce.visible){const ye=I(N,ce,U,W);N.onBeforeShadow(a,N,z,T,ue,ye,te),a.renderBufferDirect(T,null,ue,ye,N,te),N.onAfterShadow(a,N,z,T,ue,ye,te)}}}else if(fe.visible){const Z=I(N,fe,U,W);N.onBeforeShadow(a,N,z,T,ue,Z,null),a.renderBufferDirect(T,null,ue,Z,N,null),N.onAfterShadow(a,N,z,T,ue,Z,null)}}const Q=N.children;for(let ue=0,fe=Q.length;ue<fe;ue++)R(Q[ue],z,T,U,W)}function L(N){N.target.removeEventListener("dispose",L);for(const T in h){const U=h[T],W=N.target.uuid;W in U&&(U[W].dispose(),delete U[W])}}}function Q2(a,e){function i(){let Y=!1;const De=new vn;let _e=null;const Pe=new vn(0,0,0,0);return{setMask:function(Ve){_e!==Ve&&!Y&&(a.colorMask(Ve,Ve,Ve,Ve),_e=Ve)},setLocked:function(Ve){Y=Ve},setClear:function(Ve,Te,Je,Ye,qt){qt===!0&&(Ve*=Ye,Te*=Ye,Je*=Ye),De.set(Ve,Te,Je,Ye),Pe.equals(De)===!1&&(a.clearColor(Ve,Te,Je,Ye),Pe.copy(De))},reset:function(){Y=!1,_e=null,Pe.set(-1,0,0,0)}}}function r(){let Y=!1,De=!1,_e=null,Pe=null,Ve=null;return{setReversed:function(Te){if(De!==Te){const Je=e.get("EXT_clip_control");Te?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),De=Te;const Ye=Ve;Ve=null,this.setClear(Ye)}},getReversed:function(){return De},setTest:function(Te){Te?Me(a.DEPTH_TEST):Ge(a.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!Y&&(a.depthMask(Te),_e=Te)},setFunc:function(Te){if(De&&(Te=mE[Te]),Pe!==Te){switch(Te){case jh:a.depthFunc(a.NEVER);break;case Zh:a.depthFunc(a.ALWAYS);break;case Kh:a.depthFunc(a.LESS);break;case Lo:a.depthFunc(a.LEQUAL);break;case Qh:a.depthFunc(a.EQUAL);break;case Jh:a.depthFunc(a.GEQUAL);break;case $h:a.depthFunc(a.GREATER);break;case ep:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Pe=Te}},setLocked:function(Te){Y=Te},setClear:function(Te){Ve!==Te&&(Ve=Te,De&&(Te=1-Te),a.clearDepth(Te))},reset:function(){Y=!1,_e=null,Pe=null,Ve=null,De=!1}}}function o(){let Y=!1,De=null,_e=null,Pe=null,Ve=null,Te=null,Je=null,Ye=null,qt=null;return{setTest:function(ut){Y||(ut?Me(a.STENCIL_TEST):Ge(a.STENCIL_TEST))},setMask:function(ut){De!==ut&&!Y&&(a.stencilMask(ut),De=ut)},setFunc:function(ut,hn,jt){(_e!==ut||Pe!==hn||Ve!==jt)&&(a.stencilFunc(ut,hn,jt),_e=ut,Pe=hn,Ve=jt)},setOp:function(ut,hn,jt){(Te!==ut||Je!==hn||Ye!==jt)&&(a.stencilOp(ut,hn,jt),Te=ut,Je=hn,Ye=jt)},setLocked:function(ut){Y=ut},setClear:function(ut){qt!==ut&&(a.clearStencil(ut),qt=ut)},reset:function(){Y=!1,De=null,_e=null,Pe=null,Ve=null,Te=null,Je=null,Ye=null,qt=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},v={},_={},M=new WeakMap,E=[],A=null,y=!1,x=null,O=null,I=null,R=null,L=null,N=null,z=null,T=new kt(0,0,0),U=0,W=!1,X=null,Q=null,ue=null,fe=null,Z=null;const H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const ce=a.getParameter(a.VERSION);ce.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ce)[1]),V=te>=1):ce.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),V=te>=2);let ye=null,P={};const J=a.getParameter(a.SCISSOR_BOX),be=a.getParameter(a.VIEWPORT),we=new vn().fromArray(J),Le=new vn().fromArray(be);function ie(Y,De,_e,Pe){const Ve=new Uint8Array(4),Te=a.createTexture();a.bindTexture(Y,Te),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Je=0;Je<_e;Je++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,Ve):a.texImage2D(De+Je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ve);return Te}const xe={};xe[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Me(a.DEPTH_TEST),u.setFunc(Lo),nn(!1),cn(Z_),Me(a.CULL_FACE),Mt(Qa);function Me(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function Ge(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function $e(Y,De){return _[Y]!==De?(a.bindFramebuffer(Y,De),_[Y]=De,Y===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=De),Y===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=De),!0):!1}function qe(Y,De){let _e=E,Pe=!1;if(Y){_e=M.get(De),_e===void 0&&(_e=[],M.set(De,_e));const Ve=Y.textures;if(_e.length!==Ve.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let Te=0,Je=Ve.length;Te<Je;Te++)_e[Te]=a.COLOR_ATTACHMENT0+Te;_e.length=Ve.length,Pe=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Pe=!0);Pe&&a.drawBuffers(_e)}function Tt(Y){return A!==Y?(a.useProgram(Y),A=Y,!0):!1}const ct={[yr]:a.FUNC_ADD,[Fy]:a.FUNC_SUBTRACT,[zy]:a.FUNC_REVERSE_SUBTRACT};ct[Hy]=a.MIN,ct[Gy]=a.MAX;const vt={[Vy]:a.ZERO,[ky]:a.ONE,[Xy]:a.SRC_COLOR,[Yh]:a.SRC_ALPHA,[Ky]:a.SRC_ALPHA_SATURATE,[jy]:a.DST_COLOR,[Yy]:a.DST_ALPHA,[Wy]:a.ONE_MINUS_SRC_COLOR,[qh]:a.ONE_MINUS_SRC_ALPHA,[Zy]:a.ONE_MINUS_DST_COLOR,[qy]:a.ONE_MINUS_DST_ALPHA,[Qy]:a.CONSTANT_COLOR,[Jy]:a.ONE_MINUS_CONSTANT_COLOR,[$y]:a.CONSTANT_ALPHA,[eE]:a.ONE_MINUS_CONSTANT_ALPHA};function Mt(Y,De,_e,Pe,Ve,Te,Je,Ye,qt,ut){if(Y===Qa){y===!0&&(Ge(a.BLEND),y=!1);return}if(y===!1&&(Me(a.BLEND),y=!0),Y!==By){if(Y!==x||ut!==W){if((O!==yr||L!==yr)&&(a.blendEquation(a.FUNC_ADD),O=yr,L=yr),ut)switch(Y){case Ao:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Wh:a.blendFunc(a.ONE,a.ONE);break;case K_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Q_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Pt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ao:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Wh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case K_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",Y);break}I=null,R=null,N=null,z=null,T.set(0,0,0),U=0,x=Y,W=ut}return}Ve=Ve||De,Te=Te||_e,Je=Je||Pe,(De!==O||Ve!==L)&&(a.blendEquationSeparate(ct[De],ct[Ve]),O=De,L=Ve),(_e!==I||Pe!==R||Te!==N||Je!==z)&&(a.blendFuncSeparate(vt[_e],vt[Pe],vt[Te],vt[Je]),I=_e,R=Pe,N=Te,z=Je),(Ye.equals(T)===!1||qt!==U)&&(a.blendColor(Ye.r,Ye.g,Ye.b,qt),T.copy(Ye),U=qt),x=Y,W=!1}function mt(Y,De){Y.side===xa?Ge(a.CULL_FACE):Me(a.CULL_FACE);let _e=Y.side===pi;De&&(_e=!_e),nn(_e),Y.blending===Ao&&Y.transparent===!1?Mt(Qa):Mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Pe=Y.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),xt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Me(a.SAMPLE_ALPHA_TO_COVERAGE):Ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function nn(Y){X!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),X=Y)}function cn(Y){Y!==Oy?(Me(a.CULL_FACE),Y!==Q&&(Y===Z_?a.cullFace(a.BACK):Y===Py?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ge(a.CULL_FACE),Q=Y}function un(Y){Y!==ue&&(V&&a.lineWidth(Y),ue=Y)}function xt(Y,De,_e){Y?(Me(a.POLYGON_OFFSET_FILL),(fe!==De||Z!==_e)&&(fe=De,Z=_e,u.getReversed()&&(De=-De),a.polygonOffset(De,_e))):Ge(a.POLYGON_OFFSET_FILL)}function Nt(Y){Y?Me(a.SCISSOR_TEST):Ge(a.SCISSOR_TEST)}function $t(Y){Y===void 0&&(Y=a.TEXTURE0+H-1),ye!==Y&&(a.activeTexture(Y),ye=Y)}function K(Y,De,_e){_e===void 0&&(ye===null?_e=a.TEXTURE0+H-1:_e=ye);let Pe=P[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},P[_e]=Pe),(Pe.type!==Y||Pe.texture!==De)&&(ye!==_e&&(a.activeTexture(_e),ye=_e),a.bindTexture(Y,De||xe[Y]),Pe.type=Y,Pe.texture=De)}function Ut(){const Y=P[ye];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function At(){try{a.compressedTexImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function B(){try{a.compressedTexImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function b(){try{a.texSubImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function ee(){try{a.texSubImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function ae(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function ge(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Ne(){try{a.texStorage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Be(){try{a.texStorage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function de(){try{a.texImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function me(){try{a.texImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Ce(Y){return v[Y]!==void 0?v[Y]:a.getParameter(Y)}function Fe(Y,De){v[Y]!==De&&(a.pixelStorei(Y,De),v[Y]=De)}function Oe(Y){we.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function Ie(Y){Le.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Le.copy(Y))}function je(Y,De){let _e=h.get(De);_e===void 0&&(_e=new WeakMap,h.set(De,_e));let Pe=_e.get(Y);Pe===void 0&&(Pe=a.getUniformBlockIndex(De,Y.name),_e.set(Y,Pe))}function Qe(Y,De){const Pe=h.get(De).get(Y);m.get(De)!==Pe&&(a.uniformBlockBinding(De,Pe,Y.__bindingPointIndex),m.set(De,Pe))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},ye=null,P={},_={},M=new WeakMap,E=[],A=null,y=!1,x=null,O=null,I=null,R=null,L=null,N=null,z=null,T=new kt(0,0,0),U=0,W=!1,X=null,Q=null,ue=null,fe=null,Z=null,we.set(0,0,a.canvas.width,a.canvas.height),Le.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Me,disable:Ge,bindFramebuffer:$e,drawBuffers:qe,useProgram:Tt,setBlending:Mt,setMaterial:mt,setFlipSided:nn,setCullFace:cn,setLineWidth:un,setPolygonOffset:xt,setScissorTest:Nt,activeTexture:$t,bindTexture:K,unbindTexture:Ut,compressedTexImage2D:At,compressedTexImage3D:B,texImage2D:de,texImage3D:me,pixelStorei:Fe,getParameter:Ce,updateUBOMapping:je,uniformBlockBinding:Qe,texStorage2D:Ne,texStorage3D:Be,texSubImage2D:b,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Oe,viewport:Ie,reset:nt}}function J2(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,g=new WeakMap,v=new Set;let _;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(B,b){return E?new OffscreenCanvas(B,b):Gu("canvas")}function y(B,b,ee){let ae=1;const ge=At(B);if((ge.width>ee||ge.height>ee)&&(ae=ee/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ne=Math.floor(ae*ge.width),Be=Math.floor(ae*ge.height);_===void 0&&(_=A(Ne,Be));const de=b?A(Ne,Be):_;return de.width=Ne,de.height=Be,de.getContext("2d").drawImage(B,0,0,Ne,Be),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ne+"x"+Be+")."),de}else return"data"in B&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),B;return B}function x(B){return B.generateMipmaps}function O(B){a.generateMipmap(B)}function I(B){return B.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?a.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(B,b,ee,ae,ge,Ne=!1){if(B!==null){if(a[B]!==void 0)return a[B];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Be;ae&&(Be=e.get("EXT_texture_norm16"),Be||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=b;if(b===a.RED&&(ee===a.FLOAT&&(de=a.R32F),ee===a.HALF_FLOAT&&(de=a.R16F),ee===a.UNSIGNED_BYTE&&(de=a.R8),ee===a.UNSIGNED_SHORT&&Be&&(de=Be.R16_EXT),ee===a.SHORT&&Be&&(de=Be.R16_SNORM_EXT)),b===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(de=a.R8UI),ee===a.UNSIGNED_SHORT&&(de=a.R16UI),ee===a.UNSIGNED_INT&&(de=a.R32UI),ee===a.BYTE&&(de=a.R8I),ee===a.SHORT&&(de=a.R16I),ee===a.INT&&(de=a.R32I)),b===a.RG&&(ee===a.FLOAT&&(de=a.RG32F),ee===a.HALF_FLOAT&&(de=a.RG16F),ee===a.UNSIGNED_BYTE&&(de=a.RG8),ee===a.UNSIGNED_SHORT&&Be&&(de=Be.RG16_EXT),ee===a.SHORT&&Be&&(de=Be.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(de=a.RG8UI),ee===a.UNSIGNED_SHORT&&(de=a.RG16UI),ee===a.UNSIGNED_INT&&(de=a.RG32UI),ee===a.BYTE&&(de=a.RG8I),ee===a.SHORT&&(de=a.RG16I),ee===a.INT&&(de=a.RG32I)),b===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(de=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(de=a.RGB16UI),ee===a.UNSIGNED_INT&&(de=a.RGB32UI),ee===a.BYTE&&(de=a.RGB8I),ee===a.SHORT&&(de=a.RGB16I),ee===a.INT&&(de=a.RGB32I)),b===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),ee===a.UNSIGNED_INT&&(de=a.RGBA32UI),ee===a.BYTE&&(de=a.RGBA8I),ee===a.SHORT&&(de=a.RGBA16I),ee===a.INT&&(de=a.RGBA32I)),b===a.RGB&&(ee===a.UNSIGNED_SHORT&&Be&&(de=Be.RGB16_EXT),ee===a.SHORT&&Be&&(de=Be.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),b===a.RGBA){const me=Ne?zu:Lt.getTransfer(ge);ee===a.FLOAT&&(de=a.RGBA32F),ee===a.HALF_FLOAT&&(de=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(de=me===Yt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Be&&(de=Be.RGBA16_EXT),ee===a.SHORT&&Be&&(de=Be.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(B,b){let ee;return B?b===null||b===Ta||b===Wl?ee=a.DEPTH24_STENCIL8:b===Sa?ee=a.DEPTH32F_STENCIL8:b===Xl&&(ee=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ta||b===Wl?ee=a.DEPTH_COMPONENT24:b===Sa?ee=a.DEPTH_COMPONENT32F:b===Xl&&(ee=a.DEPTH_COMPONENT16),ee}function N(B,b){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Yn&&B.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function z(B){const b=B.target;b.removeEventListener("dispose",z),U(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&v.delete(b)}function T(B){const b=B.target;b.removeEventListener("dispose",T),X(b)}function U(B){const b=r.get(B);if(b.__webglInit===void 0)return;const ee=B.source,ae=M.get(ee);if(ae){const ge=ae[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&W(B),Object.keys(ae).length===0&&M.delete(ee)}r.remove(B)}function W(B){const b=r.get(B);a.deleteTexture(b.__webglTexture);const ee=B.source,ae=M.get(ee);delete ae[b.__cacheKey],u.memory.textures--}function X(B){const b=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let ge=0;ge<b.__webglFramebuffer[ae].length;ge++)a.deleteFramebuffer(b.__webglFramebuffer[ae][ge]);else a.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)a.deleteFramebuffer(b.__webglFramebuffer[ae]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=B.textures;for(let ae=0,ge=ee.length;ae<ge;ae++){const Ne=r.get(ee[ae]);Ne.__webglTexture&&(a.deleteTexture(Ne.__webglTexture),u.memory.textures--),r.remove(ee[ae])}r.remove(B)}let Q=0;function ue(){Q=0}function fe(){return Q}function Z(B){Q=B}function H(){const B=Q;return B>=o.maxTextures&&st("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),Q+=1,B}function V(B){const b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function te(B,b){const ee=r.get(B);if(B.isVideoTexture&&K(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ee.__version!==B.version){const ae=B.image;if(ae===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(ee,B,b);return}}else B.isExternalTexture&&(ee.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+b)}function ce(B,b){const ee=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ee.__version!==B.version){Ge(ee,B,b);return}else B.isExternalTexture&&(ee.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+b)}function ye(B,b){const ee=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ee.__version!==B.version){Ge(ee,B,b);return}i.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+b)}function P(B,b){const ee=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&ee.__version!==B.version){$e(ee,B,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+b)}const J={[tp]:a.REPEAT,[sa]:a.CLAMP_TO_EDGE,[np]:a.MIRRORED_REPEAT},be={[Yn]:a.NEAREST,[iE]:a.NEAREST_MIPMAP_NEAREST,[su]:a.NEAREST_MIPMAP_LINEAR,[xn]:a.LINEAR,[rh]:a.LINEAR_MIPMAP_NEAREST,[Gs]:a.LINEAR_MIPMAP_LINEAR},we={[rE]:a.NEVER,[fE]:a.ALWAYS,[oE]:a.LESS,[Wp]:a.LEQUAL,[lE]:a.EQUAL,[Yp]:a.GEQUAL,[cE]:a.GREATER,[uE]:a.NOTEQUAL};function Le(B,b){if(b.type===Sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===rh||b.magFilter===su||b.magFilter===Gs||b.minFilter===xn||b.minFilter===rh||b.minFilter===su||b.minFilter===Gs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(B,a.TEXTURE_WRAP_S,J[b.wrapS]),a.texParameteri(B,a.TEXTURE_WRAP_T,J[b.wrapT]),(B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY)&&a.texParameteri(B,a.TEXTURE_WRAP_R,J[b.wrapR]),a.texParameteri(B,a.TEXTURE_MAG_FILTER,be[b.magFilter]),a.texParameteri(B,a.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(a.texParameteri(B,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(B,a.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yn||b.minFilter!==su&&b.minFilter!==Gs||b.type===Sa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(B,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ie(B,b){let ee=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",z));const ae=b.source;let ge=M.get(ae);ge===void 0&&(ge={},M.set(ae,ge));const Ne=V(b);if(Ne!==B.__cacheKey){ge[Ne]===void 0&&(ge[Ne]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ge[Ne].usedTimes++;const Be=ge[B.__cacheKey];Be!==void 0&&(ge[B.__cacheKey].usedTimes--,Be.usedTimes===0&&W(b)),B.__cacheKey=Ne,B.__webglTexture=ge[Ne].texture}return ee}function xe(B,b,ee){return Math.floor(Math.floor(B/ee)/b)}function Me(B,b,ee,ae){const Ne=B.updateRanges;if(Ne.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,ee,ae,b.data);else{Ne.sort((Fe,Oe)=>Fe.start-Oe.start);let Be=0;for(let Fe=1;Fe<Ne.length;Fe++){const Oe=Ne[Be],Ie=Ne[Fe],je=Oe.start+Oe.count,Qe=xe(Ie.start,b.width,4),nt=xe(Oe.start,b.width,4);Ie.start<=je+1&&Qe===nt&&xe(Ie.start+Ie.count-1,b.width,4)===Qe?Oe.count=Math.max(Oe.count,Ie.start+Ie.count-Oe.start):(++Be,Ne[Be]=Ie)}Ne.length=Be+1;const de=i.getParameter(a.UNPACK_ROW_LENGTH),me=i.getParameter(a.UNPACK_SKIP_PIXELS),Ce=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,Oe=Ne.length;Fe<Oe;Fe++){const Ie=Ne[Fe],je=Math.floor(Ie.start/4),Qe=Math.ceil(Ie.count/4),nt=je%b.width,Y=Math.floor(je/b.width),De=Qe,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,nt,Y,De,_e,ee,ae,b.data)}B.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,de),i.pixelStorei(a.UNPACK_SKIP_PIXELS,me),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ce)}}function Ge(B,b,ee){let ae=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=a.TEXTURE_3D);const ge=ie(B,b),Ne=b.source;i.bindTexture(ae,B.__webglTexture,a.TEXTURE0+ee);const Be=r.get(Ne);if(Ne.version!==Be.__version||ge===!0){if(i.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=Lt.getPrimaries(Lt.workingColorSpace),Pe=b.colorSpace===Hs?null:Lt.getPrimaries(b.colorSpace),Ve=b.colorSpace===Hs||_e===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let me=y(b.image,!1,o.maxTextureSize);me=Ut(b,me);const Ce=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Oe=R(b.internalFormat,Ce,Fe,b.normalized,b.colorSpace,b.isVideoTexture);Le(ae,b);let Ie;const je=b.mipmaps,Qe=b.isVideoTexture!==!0,nt=Be.__version===void 0||ge===!0,Y=Ne.dataReady,De=N(b,me);if(b.isDepthTexture)Oe=L(b.format===Tr,b.type),nt&&(Qe?i.texStorage2D(a.TEXTURE_2D,1,Oe,me.width,me.height):i.texImage2D(a.TEXTURE_2D,0,Oe,me.width,me.height,0,Ce,Fe,null));else if(b.isDataTexture)if(je.length>0){Qe&&nt&&i.texStorage2D(a.TEXTURE_2D,De,Oe,je[0].width,je[0].height);for(let _e=0,Pe=je.length;_e<Pe;_e++)Ie=je[_e],Qe?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Ce,Fe,Ie.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Ie.width,Ie.height,0,Ce,Fe,Ie.data);b.generateMipmaps=!1}else Qe?(nt&&i.texStorage2D(a.TEXTURE_2D,De,Oe,me.width,me.height),Y&&Me(b,me,Ce,Fe)):i.texImage2D(a.TEXTURE_2D,0,Oe,me.width,me.height,0,Ce,Fe,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&nt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Oe,je[0].width,je[0].height,me.depth);for(let _e=0,Pe=je.length;_e<Pe;_e++)if(Ie=je[_e],b.format!==ra)if(Ce!==null)if(Qe){if(Y)if(b.layerUpdates.size>0){const Ve=Tv(Ie.width,Ie.height,b.format,b.type);for(const Te of b.layerUpdates){const Je=Ie.data.subarray(Te*Ve/Ie.data.BYTES_PER_ELEMENT,(Te+1)*Ve/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Te,Ie.width,Ie.height,1,Ce,Je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,me.depth,Ce,Ie.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?Y&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,me.depth,Ce,Fe,Ie.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Ie.width,Ie.height,me.depth,0,Ce,Fe,Ie.data)}else{Qe&&nt&&i.texStorage2D(a.TEXTURE_2D,De,Oe,je[0].width,je[0].height);for(let _e=0,Pe=je.length;_e<Pe;_e++)Ie=je[_e],b.format!==ra?Ce!==null?Qe?Y&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Ce,Ie.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,Oe,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Ce,Fe,Ie.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Ie.width,Ie.height,0,Ce,Fe,Ie.data)}else if(b.isDataArrayTexture)if(Qe){if(nt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Oe,me.width,me.height,me.depth),Y)if(b.layerUpdates.size>0){const _e=Tv(me.width,me.height,b.format,b.type);for(const Pe of b.layerUpdates){const Ve=me.data.subarray(Pe*_e/me.data.BYTES_PER_ELEMENT,(Pe+1)*_e/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Pe,me.width,me.height,1,Ce,Fe,Ve)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Fe,me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Ce,Fe,me.data);else if(b.isData3DTexture)Qe?(nt&&i.texStorage3D(a.TEXTURE_3D,De,Oe,me.width,me.height,me.depth),Y&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Fe,me.data)):i.texImage3D(a.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Ce,Fe,me.data);else if(b.isFramebufferTexture){if(nt)if(Qe)i.texStorage2D(a.TEXTURE_2D,De,Oe,me.width,me.height);else{let _e=me.width,Pe=me.height;for(let Ve=0;Ve<De;Ve++)i.texImage2D(a.TEXTURE_2D,Ve,Oe,_e,Pe,0,Ce,Fe,null),_e>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),me.parentNode!==_e){_e.appendChild(me),v.add(b),_e.onpaint=Pe=>{const Ve=Pe.changedElements;for(const Te of v)Ve.includes(Te.image)&&(Te.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const Ve=a.RGBA,Te=a.RGBA,Je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ve,Te,Je,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(je.length>0){if(Qe&&nt){const _e=At(je[0]);i.texStorage2D(a.TEXTURE_2D,De,Oe,_e.width,_e.height)}for(let _e=0,Pe=je.length;_e<Pe;_e++)Ie=je[_e],Qe?Y&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Ce,Fe,Ie):i.texImage2D(a.TEXTURE_2D,_e,Oe,Ce,Fe,Ie);b.generateMipmaps=!1}else if(Qe){if(nt){const _e=At(me);i.texStorage2D(a.TEXTURE_2D,De,Oe,_e.width,_e.height)}Y&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,Fe,me)}else i.texImage2D(a.TEXTURE_2D,0,Oe,Ce,Fe,me);x(b)&&O(ae),Be.__version=Ne.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function $e(B,b,ee){if(b.image.length!==6)return;const ae=ie(B,b),ge=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+ee);const Ne=r.get(ge);if(ge.version!==Ne.__version||ae===!0){i.activeTexture(a.TEXTURE0+ee);const Be=Lt.getPrimaries(Lt.workingColorSpace),de=b.colorSpace===Hs?null:Lt.getPrimaries(b.colorSpace),me=b.colorSpace===Hs||Be===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,Oe=[];for(let Te=0;Te<6;Te++)!Ce&&!Fe?Oe[Te]=y(b.image[Te],!0,o.maxCubemapSize):Oe[Te]=Fe?b.image[Te].image:b.image[Te],Oe[Te]=Ut(b,Oe[Te]);const Ie=Oe[0],je=c.convert(b.format,b.colorSpace),Qe=c.convert(b.type),nt=R(b.internalFormat,je,Qe,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,De=Ne.__version===void 0||ae===!0,_e=ge.dataReady;let Pe=N(b,Ie);Le(a.TEXTURE_CUBE_MAP,b);let Ve;if(Ce){Y&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,nt,Ie.width,Ie.height);for(let Te=0;Te<6;Te++){Ve=Oe[Te].mipmaps;for(let Je=0;Je<Ve.length;Je++){const Ye=Ve[Je];b.format!==ra?je!==null?Y?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,Ye.width,Ye.height,je,Ye.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,nt,Ye.width,Ye.height,0,Ye.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,Ye.width,Ye.height,je,Qe,Ye.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,nt,Ye.width,Ye.height,0,je,Qe,Ye.data)}}}else{if(Ve=b.mipmaps,Y&&De){Ve.length>0&&Pe++;const Te=At(Oe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,nt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Fe){Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Oe[Te].width,Oe[Te].height,je,Qe,Oe[Te].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,nt,Oe[Te].width,Oe[Te].height,0,je,Qe,Oe[Te].data);for(let Je=0;Je<Ve.length;Je++){const qt=Ve[Je].image[Te].image;Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,qt.width,qt.height,je,Qe,qt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,nt,qt.width,qt.height,0,je,Qe,qt.data)}}else{Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,je,Qe,Oe[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,nt,je,Qe,Oe[Te]);for(let Je=0;Je<Ve.length;Je++){const Ye=Ve[Je];Y?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,je,Qe,Ye.image[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,nt,je,Qe,Ye.image[Te])}}}x(b)&&O(a.TEXTURE_CUBE_MAP),Ne.__version=ge.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function qe(B,b,ee,ae,ge,Ne){const Be=c.convert(ee.format,ee.colorSpace),de=c.convert(ee.type),me=R(ee.internalFormat,Be,de,ee.normalized,ee.colorSpace),Ce=r.get(b),Fe=r.get(ee);if(Fe.__renderTarget=b,!Ce.__hasExternalTextures){const Oe=Math.max(1,b.width>>Ne),Ie=Math.max(1,b.height>>Ne);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?i.texImage3D(ge,Ne,me,Oe,Ie,b.depth,0,Be,de,null):i.texImage2D(ge,Ne,me,Oe,Ie,0,Be,de,null)}i.bindFramebuffer(a.FRAMEBUFFER,B),$t(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,ge,Fe.__webglTexture,0,Nt(b)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,ge,Fe.__webglTexture,Ne),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Tt(B,b,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,B),b.depthBuffer){const ae=b.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,Ne=L(b.stencilBuffer,ge),Be=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;$t(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Nt(b),Ne,b.width,b.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Nt(b),Ne,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ne,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Be,a.RENDERBUFFER,B)}else{const ae=b.textures;for(let ge=0;ge<ae.length;ge++){const Ne=ae[ge],Be=c.convert(Ne.format,Ne.colorSpace),de=c.convert(Ne.type),me=R(Ne.internalFormat,Be,de,Ne.normalized,Ne.colorSpace);$t(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Nt(b),me,b.width,b.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Nt(b),me,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,me,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ct(B,b,ee){const ae=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),ge.__webglTexture===void 0){ge.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),Le(a.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),Fe=c.convert(b.depthTexture.type);let Oe;b.depthTexture.format===ts?Oe=a.DEPTH_COMPONENT24:b.depthTexture.format===Tr&&(Oe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Oe,b.width,b.height,0,Ce,Fe,null)}}else te(b.depthTexture,0);const Ne=ge.__webglTexture,Be=Nt(b),de=ae?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,me=b.depthTexture.format===Tr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===ts)$t(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,de,Ne,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,me,de,Ne,0);else if(b.depthTexture.format===Tr)$t(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,de,Ne,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,me,de,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(B){const b=r.get(B),ee=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){const ae=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=ae}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if(ee)for(let ae=0;ae<6;ae++)ct(b.__webglFramebuffer[ae],B,ae);else{const ae=B.texture.mipmaps;ae&&ae.length>0?ct(b.__webglFramebuffer[0],B,0):ct(b.__webglFramebuffer,B,0)}else if(ee){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=a.createRenderbuffer(),Tt(b.__webglDepthbuffer[ae],B,!1);else{const ge=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,Ne)}}else{const ae=B.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Tt(b.__webglDepthbuffer,B,!1);else{const ge=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,Ne)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Mt(B,b,ee){const ae=r.get(B);b!==void 0&&qe(ae.__webglFramebuffer,B,B.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&vt(B)}function mt(B){const b=B.texture,ee=r.get(B),ae=r.get(b);B.addEventListener("dispose",T);const ge=B.textures,Ne=B.isWebGLCubeRenderTarget===!0,Be=ge.length>1;if(Be||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=b.version,u.memory.textures++),Ne){ee.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[de]=[];for(let me=0;me<b.mipmaps.length;me++)ee.__webglFramebuffer[de][me]=a.createFramebuffer()}else ee.__webglFramebuffer[de]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)ee.__webglFramebuffer[de]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Be)for(let de=0,me=ge.length;de<me;de++){const Ce=r.get(ge[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=a.createTexture(),u.memory.textures++)}if(B.samples>0&&$t(B)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let de=0;de<ge.length;de++){const me=ge[de];ee.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[de]);const Ce=c.convert(me.format,me.colorSpace),Fe=c.convert(me.type),Oe=R(me.internalFormat,Ce,Fe,me.normalized,me.colorSpace,B.isXRRenderTarget===!0),Ie=Nt(B);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Oe,B.width,B.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,ee.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),B.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),Tt(ee.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),Le(a.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)qe(ee.__webglFramebuffer[de][me],B,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else qe(ee.__webglFramebuffer[de],B,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(b)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Be){for(let de=0,me=ge.length;de<me;de++){const Ce=ge[de],Fe=r.get(Ce);let Oe=a.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Oe=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Fe.__webglTexture),Le(Oe,Ce),qe(ee.__webglFramebuffer,B,Ce,a.COLOR_ATTACHMENT0+de,Oe,0),x(Ce)&&O(Oe)}i.unbindTexture()}else{let de=a.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(de=B.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(de,ae.__webglTexture),Le(de,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)qe(ee.__webglFramebuffer[me],B,b,a.COLOR_ATTACHMENT0,de,me);else qe(ee.__webglFramebuffer,B,b,a.COLOR_ATTACHMENT0,de,0);x(b)&&O(de),i.unbindTexture()}B.depthBuffer&&vt(B)}function nn(B){const b=B.textures;for(let ee=0,ae=b.length;ee<ae;ee++){const ge=b[ee];if(x(ge)){const Ne=I(B),Be=r.get(ge).__webglTexture;i.bindTexture(Ne,Be),O(Ne),i.unbindTexture()}}}const cn=[],un=[];function xt(B){if(B.samples>0){if($t(B)===!1){const b=B.textures,ee=B.width,ae=B.height;let ge=a.COLOR_BUFFER_BIT;const Ne=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Be=r.get(B),de=b.length>1;if(de)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const me=B.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),de){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const Fe=r.get(b[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Fe,0)}a.blitFramebuffer(0,0,ee,ae,0,0,ee,ae,ge,a.NEAREST),m===!0&&(cn.length=0,un.length=0,cn.push(a.COLOR_ATTACHMENT0+Ce),B.depthBuffer&&B.resolveDepthBuffer===!1&&(cn.push(Ne),un.push(Ne),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,un)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,cn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const Fe=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,Fe,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const b=B.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Nt(B){return Math.min(o.maxSamples,B.samples)}function $t(B){const b=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function K(B){const b=u.render.frame;g.get(B)!==b&&(g.set(B,b),B.update())}function Ut(B,b){const ee=B.colorSpace,ae=B.format,ge=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ee!==Fu&&ee!==Hs&&(Lt.getTransfer(ee)===Yt?(ae!==ra||ge!==ki)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ee)),b}function At(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=Z,this.setTexture2D=te,this.setTexture2DArray=ce,this.setTexture3D=ye,this.setTextureCube=P,this.rebindTextures=Mt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $2(a,e){function i(r,o=Hs){let c;const u=Lt.getTransfer(o);if(r===ki)return a.UNSIGNED_BYTE;if(r===Hp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Gp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Lx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Nx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===wx)return a.BYTE;if(r===Dx)return a.SHORT;if(r===Xl)return a.UNSIGNED_SHORT;if(r===zp)return a.INT;if(r===Ta)return a.UNSIGNED_INT;if(r===Sa)return a.FLOAT;if(r===es)return a.HALF_FLOAT;if(r===Ux)return a.ALPHA;if(r===Ox)return a.RGB;if(r===ra)return a.RGBA;if(r===ts)return a.DEPTH_COMPONENT;if(r===Tr)return a.DEPTH_STENCIL;if(r===Px)return a.RED;if(r===Vp)return a.RED_INTEGER;if(r===Rr)return a.RG;if(r===kp)return a.RG_INTEGER;if(r===Xp)return a.RGBA_INTEGER;if(r===Du||r===Lu||r===Nu||r===Uu)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===ap||r===sp||r===rp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ip)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ap)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===op||r===lp||r===cp||r===up||r===fp||r===Iu||r===dp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===op||r===lp)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===up)return c.COMPRESSED_R11_EAC;if(r===fp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Iu)return c.COMPRESSED_RG11_EAC;if(r===dp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===Sp||r===Mp||r===yp||r===Ep||r===bp||r===Tp||r===Ap)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rp||r===Cp||r===wp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rp)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dp||r===Lp||r===Bu||r===Np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Dp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tR=`
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

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Xx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Yi({vertexShader:eR,fragmentShader:tR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Vs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iR extends wr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,v=null,_=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",y=new nR,x={},O=i.getContextAttributes();let I=null,R=null;const L=[],N=[],z=new zt;let T=null;const U=new Vi;U.viewport=new vn;const W=new Vi;W.viewport=new vn;const X=[U,W],Q=new hb;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=L[ie];return xe===void 0&&(xe=new dh,L[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=L[ie];return xe===void 0&&(xe=new dh,L[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=L[ie];return xe===void 0&&(xe=new dh,L[ie]=xe),xe.getHandSpace()};function Z(ie){const xe=N.indexOf(ie.inputSource);if(xe===-1)return;const Me=L[xe];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,h||u),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function H(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",V);for(let ie=0;ie<L.length;ie++){const xe=N[ie];xe!==null&&(N[ie]=null,L[ie].disconnect(xe))}ue=null,fe=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(I),M=null,_=null,v=null,o=null,R=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",H),o.addEventListener("inputsourceschange",V),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ge=null,$e=null;O.depth&&($e=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=O.stencil?Tr:ts,Ge=O.stencil?Wl:Ta);const qe={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(qe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new Ea(_.textureWidth,_.textureHeight,{format:ra,type:ki,depthTexture:new Uo(_.textureWidth,_.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,i,Me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Ea(M.framebufferWidth,M.framebufferHeight,{format:ra,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(ie){for(let xe=0;xe<ie.removed.length;xe++){const Me=ie.removed[xe],Ge=N.indexOf(Me);Ge>=0&&(N[Ge]=null,L[Ge].disconnect(Me))}for(let xe=0;xe<ie.added.length;xe++){const Me=ie.added[xe];let Ge=N.indexOf(Me);if(Ge===-1){for(let qe=0;qe<L.length;qe++)if(qe>=N.length){N.push(Me),Ge=qe;break}else if(N[qe]===null){N[qe]=Me,Ge=qe;break}if(Ge===-1)break}const $e=L[Ge];$e&&$e.connect(Me)}}const te=new ne,ce=new ne;function ye(ie,xe,Me){te.setFromMatrixPosition(xe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const Ge=te.distanceTo(ce),$e=xe.projectionMatrix.elements,qe=Me.projectionMatrix.elements,Tt=$e[14]/($e[10]-1),ct=$e[14]/($e[10]+1),vt=($e[9]+1)/$e[5],Mt=($e[9]-1)/$e[5],mt=($e[8]-1)/$e[0],nn=(qe[8]+1)/qe[0],cn=Tt*mt,un=Tt*nn,xt=Ge/(-mt+nn),Nt=xt*-mt;if(xe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Nt),ie.translateZ(xt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),$e[10]===-1)ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const $t=Tt+xt,K=ct+xt,Ut=cn-Nt,At=un+(Ge-Nt),B=vt*ct/K*$t,b=Mt*ct/K*$t;ie.projectionMatrix.makePerspective(Ut,At,B,b,$t,K),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let xe=ie.near,Me=ie.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),Q.near=W.near=U.near=xe,Q.far=W.far=U.far=Me,(ue!==Q.near||fe!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ue=Q.near,fe=Q.far),Q.layers.mask=ie.layers.mask|6,U.layers.mask=Q.layers.mask&-5,W.layers.mask=Q.layers.mask&-3;const Ge=ie.parent,$e=Q.cameras;P(Q,Ge);for(let qe=0;qe<$e.length;qe++)P($e[qe],Ge);$e.length===2?ye(Q,U,W):Q.projectionMatrix.copy(U.projectionMatrix),J(ie,Q,Ge)};function J(ie,xe,Me){Me===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Yl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ie){return x[ie]};let be=null;function we(ie,xe){if(g=xe.getViewerPose(h||u),E=xe,g!==null){const Me=g.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Ge=!1;Me.length!==Q.cameras.length&&(Q.cameras.length=0,Ge=!0);for(let ct=0;ct<Me.length;ct++){const vt=Me[ct];let Mt=null;if(M!==null)Mt=M.getViewport(vt);else{const nn=v.getViewSubImage(_,vt);Mt=nn.viewport,ct===0&&(e.setRenderTargetTextures(R,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(R))}let mt=X[ct];mt===void 0&&(mt=new Vi,mt.layers.enable(ct),mt.viewport=new vn,X[ct]=mt),mt.matrix.fromArray(vt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(vt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ct===0&&(Q.matrix.copy(mt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ge===!0&&Q.cameras.push(mt)}const $e=o.enabledFeatures;if($e&&$e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const ct=v.getDepthInformation(Me[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,o.renderState)}if($e&&$e.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let ct=0;ct<Me.length;ct++){const vt=Me[ct].camera;if(vt){let Mt=x[vt];Mt||(Mt=new Xx,x[vt]=Mt);const mt=v.getCameraImage(vt);Mt.sourceTexture=mt}}}}for(let Me=0;Me<L.length;Me++){const Ge=N[Me],$e=L[Me];Ge!==null&&$e!==void 0&&$e.update(Ge,xe,h||u)}be&&be(ie,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Le=new jx;Le.setAnimationLoop(we),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}}const aR=new En,tS=new lt;tS.set(-1,0,0,0,1,0,0,0,1);function sR(a,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Wx(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,O,I,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,R)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),A(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,O,I):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===pi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===pi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),I=O.envMap,R=O.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(aR.makeRotationFromEuler(R)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tS),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=I*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function rR(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const N=L.program;r.uniformBlockBinding(R,N)}function h(R,L){let N=o[R.id];N===void 0&&(y(R),N=g(R),o[R.id]=N,R.addEventListener("dispose",O));const z=L.program;r.updateUBOMapping(R,z);const T=e.render.frame;c[R.id]!==T&&(_(R),c[R.id]=T)}function g(R){const L=v();R.__bindingPointIndex=L;const N=a.createBuffer(),z=R.__size,T=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,z,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,N),N}function v(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const L=o[R.id],N=R.uniforms,z=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let T=0,U=N.length;T<U;T++){const W=N[T];if(Array.isArray(W))for(let X=0,Q=W.length;X<Q;X++)M(W[X],T,X,z);else M(W,T,0,z)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(R,L,N,z){if(A(R,L,N,z)===!0){const T=R.__offset,U=R.value;if(Array.isArray(U)){let W=0;for(let X=0;X<U.length;X++){const Q=U[X],ue=x(Q);E(Q,R.__data,W),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(W+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,R.__data)}}function E(R,L,N){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,N)}function A(R,L,N,z){const T=R.value,U=L+"_"+N;if(z[U]===void 0)return typeof T=="number"||typeof T=="boolean"?z[U]=T:ArrayBuffer.isView(T)?z[U]=T.slice():z[U]=T.clone(),!0;{const W=z[U];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return z[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(W.equals(T)===!1)return W.copy(T),!0}}return!1}function y(R){const L=R.uniforms;let N=0;const z=16;for(let U=0,W=L.length;U<W;U++){const X=Array.isArray(L[U])?L[U]:[L[U]];for(let Q=0,ue=X.length;Q<ue;Q++){const fe=X[Q],Z=Array.isArray(fe.value)?fe.value:[fe.value];for(let H=0,V=Z.length;H<V;H++){const te=Z[H],ce=x(te),ye=N%z,P=ye%ce.boundary,J=ye+P;N+=P,J!==0&&z-J<ce.storage&&(N+=z-J),fe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=N,N+=ce.storage}}}const T=N%z;return T>0&&(N+=z-T),R.__size=N,R.__cache={},this}function x(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):st("WebGLRenderer: Unsupported uniform value type.",R),L}function O(R){const L=R.target;L.removeEventListener("dispose",O);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function I(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:h,dispose:I}}const oR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _a=null;function lR(){return _a===null&&(_a=new JE(oR,16,16,Rr,es),_a.name="DFG_LUT",_a.minFilter=xn,_a.magFilter=xn,_a.wrapS=sa,_a.wrapT=sa,_a.generateMipmaps=!1,_a.needsUpdate=!0),_a}class cR{constructor(e={}){const{canvas:i=hE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ki}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const A=M,y=new Set([Xp,kp,Vp]),x=new Set([ki,Ta,Xl,Wl,Hp,Gp]),O=new Uint32Array(4),I=new Int32Array(4),R=new ne;let L=null,N=null;const z=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let X=!1,Q=null,ue=null,fe=null,Z=null;this._outputColorSpace=Qn;let H=0,V=0,te=null,ce=-1,ye=null;const P=new vn,J=new vn;let be=null;const we=new kt(0);let Le=0,ie=i.width,xe=i.height,Me=1,Ge=null,$e=null;const qe=new vn(0,0,ie,xe),Tt=new vn(0,0,ie,xe);let ct=!1;const vt=new Vx;let Mt=!1,mt=!1;const nn=new En,cn=new ne,un=new vn,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function $t(){return te===null?Me:1}let K=r;function Ut(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fp}`),i.addEventListener("webglcontextlost",qt,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",hn,!1),K===null){const j="webgl2";if(K=Ut(j,C),K===null)throw Ut(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Pt("WebGLRenderer: "+C.message),C}let At,B,b,ee,ae,ge,Ne,Be,de,me,Ce,Fe,Oe,Ie,je,Qe,nt,Y,De,_e,Pe,Ve,Te;function Je(){At=new lA(K),At.init(),Pe=new $2(K,At),B=new eA(K,At,e,Pe),b=new Q2(K,At),B.reversedDepthBuffer&&_&&b.buffers.depth.setReversed(!0),ue=K.createFramebuffer(),fe=K.createFramebuffer(),Z=K.createFramebuffer(),ee=new fA(K),ae=new B2,ge=new J2(K,At,b,ae,B,Pe,ee),Ne=new oA(W),Be=new mb(K),Ve=new JT(K,Be),de=new cA(K,Be,ee,Ve),me=new hA(K,de,Be,Ve,ee),Y=new dA(K,B,ge),je=new tA(ae),Ce=new I2(W,Ne,At,B,Ve,je),Fe=new sR(W,ae),Oe=new z2,Ie=new W2(At),nt=new QT(W,Ne,b,me,E,m),Qe=new K2(W,me,B),Te=new rR(K,ee,B,b),De=new $T(K,At,ee),_e=new uA(K,At,ee),ee.programs=Ce.programs,W.capabilities=B,W.extensions=At,W.properties=ae,W.renderLists=Oe,W.shadowMap=Qe,W.state=b,W.info=ee}Je(),A!==ki&&(U=new mA(A,i.width,i.height,d,o,c));const Ye=new iR(W,K);this.xr=Ye,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=At.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=At.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(C){C!==void 0&&(Me=C,this.setSize(ie,xe,!1))},this.getSize=function(C){return C.set(ie,xe)},this.setSize=function(C,j,oe=!0){if(Ye.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=C,xe=j,i.width=Math.floor(C*Me),i.height=Math.floor(j*Me),oe===!0&&(i.style.width=C+"px",i.style.height=j+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ie*Me,xe*Me).floor()},this.setDrawingBufferSize=function(C,j,oe){ie=C,xe=j,Me=oe,i.width=Math.floor(C*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(A===ki){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(qe)},this.setViewport=function(C,j,oe,F){C.isVector4?qe.set(C.x,C.y,C.z,C.w):qe.set(C,j,oe,F),b.viewport(P.copy(qe).multiplyScalar(Me).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,j,oe,F){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,j,oe,F),b.scissor(J.copy(Tt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(C){b.setScissorTest(ct=C)},this.setOpaqueSort=function(C){Ge=C},this.setTransparentSort=function(C){$e=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,oe=!0){let F=0;if(C){let G=!1;if(te!==null){const pe=te.texture.format;G=y.has(pe)}if(G){const pe=te.texture.type,Ae=x.has(pe),Re=nt.getClearColor(),Ue=nt.getClearAlpha(),ze=Re.r,Ze=Re.g,it=Re.b;Ae?(O[0]=ze,O[1]=Ze,O[2]=it,O[3]=Ue,K.clearBufferuiv(K.COLOR,0,O)):(I[0]=ze,I[1]=Ze,I[2]=it,I[3]=Ue,K.clearBufferiv(K.COLOR,0,I))}else F|=K.COLOR_BUFFER_BIT}j&&(F|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(F|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&K.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Q=C},this.dispose=function(){i.removeEventListener("webglcontextlost",qt,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",hn,!1),nt.dispose(),Oe.dispose(),Ie.dispose(),ae.dispose(),Ne.dispose(),me.dispose(),Ve.dispose(),Te.dispose(),Ce.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",an),Ye.removeEventListener("sessionend",Sn),zn.stop()};function qt(C){C.preventDefault(),iv("WebGLRenderer: Context Lost."),X=!0}function ut(){iv("WebGLRenderer: Context Restored."),X=!1;const C=ee.autoReset,j=Qe.enabled,oe=Qe.autoUpdate,F=Qe.needsUpdate,G=Qe.type;Je(),ee.autoReset=C,Qe.enabled=j,Qe.autoUpdate=oe,Qe.needsUpdate=F,Qe.type=G}function hn(C){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function jt(C){const j=C.target;j.removeEventListener("dispose",jt),Ys(j)}function Ys(C){qs(C),ae.remove(C)}function qs(C){const j=ae.get(C).programs;j!==void 0&&(j.forEach(function(oe){Ce.releaseProgram(oe)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,oe,F,G,pe){j===null&&(j=xt);const Ae=G.isMesh&&G.matrixWorld.determinantAffine()<0,Re=Zi(C,j,oe,F,G);b.setMaterial(F,Ae);let Ue=oe.index,ze=1;if(F.wireframe===!0){if(Ue=de.getWireframeAttribute(oe),Ue===void 0)return;ze=2}const Ze=oe.drawRange,it=oe.attributes.position;let He=Ze.start*ze,rt=(Ze.start+Ze.count)*ze;pe!==null&&(He=Math.max(He,pe.start*ze),rt=Math.min(rt,(pe.start+pe.count)*ze)),Ue!==null?(He=Math.max(He,0),rt=Math.min(rt,Ue.count)):it!=null&&(He=Math.max(He,0),rt=Math.min(rt,it.count));const yt=rt-He;if(yt<0||yt===1/0)return;Ve.setup(G,F,Re,oe,Ue);let ft,Ot=De;if(Ue!==null&&(ft=Be.get(Ue),Ot=_e,Ot.setIndex(ft)),G.isMesh)F.wireframe===!0?(b.setLineWidth(F.wireframeLinewidth*$t()),Ot.setMode(K.LINES)):Ot.setMode(K.TRIANGLES);else if(G.isLine){let _t=F.linewidth;_t===void 0&&(_t=1),b.setLineWidth(_t*$t()),G.isLineSegments?Ot.setMode(K.LINES):G.isLineLoop?Ot.setMode(K.LINE_LOOP):Ot.setMode(K.LINE_STRIP)}else G.isPoints?Ot.setMode(K.POINTS):G.isSprite&&Ot.setMode(K.TRIANGLES);if(G.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const _t=G._multiDrawStarts,Xe=G._multiDrawCounts,Ln=G._multiDrawCount,ht=Ue?Be.get(Ue).bytesPerElement:1,mn=ae.get(F).currentProgram.getUniforms();for(let In=0;In<Ln;In++)mn.setValue(K,"_gl_DrawID",In),Ot.render(_t[In]/ht,Xe[In])}else if(G.isInstancedMesh)Ot.renderInstances(He,yt,G.count);else if(oe.isInstancedBufferGeometry){const _t=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Xe=Math.min(oe.instanceCount,_t);Ot.renderInstances(He,yt,Xe)}else Ot.render(He,yt)};function Aa(C,j,oe){C.transparent===!0&&C.side===xa&&C.forceSinglePass===!1?(C.side=pi,C.needsUpdate=!0,ji(C,j,oe),C.side=$a,C.needsUpdate=!0,ji(C,j,oe),C.side=xa):ji(C,j,oe)}this.compile=function(C,j,oe=null){oe===null&&(oe=C),N=Ie.get(oe),N.init(j),T.push(N),oe.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(N.pushLight(G),G.castShadow&&N.pushShadow(G))}),C!==oe&&C.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(N.pushLight(G),G.castShadow&&N.pushShadow(G))}),N.setupLights();const F=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){const Re=pe[Ae];Aa(Re,oe,G),F.add(Re)}else Aa(pe,oe,G),F.add(pe)}),N=T.pop(),F},this.compileAsync=function(C,j,oe=null){const F=this.compile(C,j,oe);return new Promise(G=>{function pe(){if(F.forEach(function(Ae){ae.get(Ae).currentProgram.isReady()&&F.delete(Ae)}),F.size===0){G(C);return}setTimeout(pe,10)}At.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ns=null;function $n(C){ns&&ns(C)}function an(){zn.stop()}function Sn(){zn.start()}const zn=new jx;zn.setAnimationLoop($n),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(C){ns=C,Ye.setAnimationLoop(C),C===null?zn.stop():zn.start()},Ye.addEventListener("sessionstart",an),Ye.addEventListener("sessionend",Sn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Q!==null&&Q.renderStart(C,j);const oe=Ye.enabled===!0&&Ye.isPresenting===!0,F=U!==null&&(te===null||oe)&&U.begin(W,te);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(j),j=Ye.getCamera()),C.isScene===!0&&C.onBeforeRender(W,C,j,te),N=Ie.get(C,T.length),N.init(j),N.state.textureUnits=ge.getTextureUnits(),T.push(N),nn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(nn,Ma,j.reversedDepth),mt=this.localClippingEnabled,Mt=je.init(this.clippingPlanes,mt),L=Oe.get(C,z.length),L.init(),z.push(L),Ye.enabled===!0&&Ye.isPresenting===!0){const Ae=W.xr.getDepthSensingMesh();Ae!==null&&oa(Ae,j,-1/0,W.sortObjects)}oa(C,j,0,W.sortObjects),L.finish(),W.sortObjects===!0&&L.sort(Ge,$e,j.reversedDepth),Nt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Nt&&nt.addToRenderList(L,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&je.beginShadows();const G=N.state.shadowsArray;if(Qe.render(G,C,j),Mt===!0&&je.endShadows(),(F&&U.hasRenderPass())===!1){const Ae=L.opaque,Re=L.transmissive;if(N.setupLights(),j.isArrayCamera){const Ue=j.cameras;if(Re.length>0)for(let ze=0,Ze=Ue.length;ze<Ze;ze++){const it=Ue[ze];Zs(Ae,Re,C,it)}Nt&&nt.render(C);for(let ze=0,Ze=Ue.length;ze<Ze;ze++){const it=Ue[ze];js(L,C,it,it.viewport)}}else Re.length>0&&Zs(Ae,Re,C,j),Nt&&nt.render(C),js(L,C,j)}te!==null&&V===0&&(ge.updateMultisampleRenderTarget(te),ge.updateRenderTargetMipmap(te)),F&&U.end(W),C.isScene===!0&&C.onAfterRender(W,C,j),Ve.resetDefaultState(),ce=-1,ye=null,T.pop(),T.length>0?(N=T[T.length-1],ge.setTextureUnits(N.state.textureUnits),Mt===!0&&je.setGlobalState(W.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?L=z[z.length-1]:L=null,Q!==null&&Q.renderEnd()};function oa(C,j,oe,F){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||vt.intersectsSprite(C)){F&&un.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nn);const Ae=me.update(C),Re=C.material;Re.visible&&L.push(C,Ae,Re,oe,un.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||vt.intersectsObject(C))){const Ae=me.update(C),Re=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),un.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),un.copy(Ae.boundingSphere.center)),un.applyMatrix4(C.matrixWorld).applyMatrix4(nn)),Array.isArray(Re)){const Ue=Ae.groups;for(let ze=0,Ze=Ue.length;ze<Ze;ze++){const it=Ue[ze],He=Re[it.materialIndex];He&&He.visible&&L.push(C,Ae,He,oe,un.z,it)}}else Re.visible&&L.push(C,Ae,Re,oe,un.z,null)}}const pe=C.children;for(let Ae=0,Re=pe.length;Ae<Re;Ae++)oa(pe[Ae],j,oe,F)}function js(C,j,oe,F){const{opaque:G,transmissive:pe,transparent:Ae}=C;N.setupLightsView(oe),Mt===!0&&je.setGlobalState(W.clippingPlanes,oe),F&&b.viewport(P.copy(F)),G.length>0&&Ci(G,j,oe),pe.length>0&&Ci(pe,j,oe),Ae.length>0&&Ci(Ae,j,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Zs(C,j,oe,F){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[F.id]===void 0){const He=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[F.id]=new Ea(1,1,{generateMipmaps:!0,type:He?es:ki,minFilter:Gs,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const pe=N.state.transmissionRenderTarget[F.id],Ae=F.viewport||P;pe.setSize(Ae.z*W.transmissionResolutionScale,Ae.w*W.transmissionResolutionScale);const Re=W.getRenderTarget(),Ue=W.getActiveCubeFace(),ze=W.getActiveMipmapLevel();W.setRenderTarget(pe),W.getClearColor(we),Le=W.getClearAlpha(),Le<1&&W.setClearColor(16777215,.5),W.clear(),Nt&&nt.render(oe);const Ze=W.toneMapping;W.toneMapping=ya;const it=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),N.setupLightsView(F),Mt===!0&&je.setGlobalState(W.clippingPlanes,F),Ci(C,oe,F),ge.updateMultisampleRenderTarget(pe),ge.updateRenderTargetMipmap(pe),At.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let rt=0,yt=j.length;rt<yt;rt++){const ft=j[rt],{object:Ot,geometry:_t,material:Xe,group:Ln}=ft;if(Xe.side===xa&&Ot.layers.test(F.layers)){const ht=Xe.side;Xe.side=pi,Xe.needsUpdate=!0,qi(Ot,oe,F,_t,Xe,Ln),Xe.side=ht,Xe.needsUpdate=!0,He=!0}}He===!0&&(ge.updateMultisampleRenderTarget(pe),ge.updateRenderTargetMipmap(pe))}W.setRenderTarget(Re,Ue,ze),W.setClearColor(we,Le),it!==void 0&&(F.viewport=it),W.toneMapping=Ze}function Ci(C,j,oe){const F=j.isScene===!0?j.overrideMaterial:null;for(let G=0,pe=C.length;G<pe;G++){const Ae=C[G],{object:Re,geometry:Ue,group:ze}=Ae;let Ze=Ae.material;Ze.allowOverride===!0&&F!==null&&(Ze=F),Re.layers.test(oe.layers)&&qi(Re,j,oe,Ue,Ze,ze)}}function qi(C,j,oe,F,G,pe){C.onBeforeRender(W,j,oe,F,G,pe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(W,j,oe,F,C,pe),G.transparent===!0&&G.side===xa&&G.forceSinglePass===!1?(G.side=pi,G.needsUpdate=!0,W.renderBufferDirect(oe,j,F,G,C,pe),G.side=$a,G.needsUpdate=!0,W.renderBufferDirect(oe,j,F,G,C,pe),G.side=xa):W.renderBufferDirect(oe,j,F,G,C,pe),C.onAfterRender(W,j,oe,F,G,pe)}function ji(C,j,oe){j.isScene!==!0&&(j=xt);const F=ae.get(C),G=N.state.lights,pe=N.state.shadowsArray,Ae=G.state.version,Re=Ce.getParameters(C,G.state,pe,j,oe,N.state.lightProbeGridArray),Ue=Ce.getProgramCacheKey(Re);let ze=F.programs;F.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?j.environment:null,F.fog=j.fog;const Ze=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;F.envMap=Ne.get(C.envMap||F.environment,Ze),F.envMapRotation=F.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",jt),ze=new Map,F.programs=ze);let it=ze.get(Ue);if(it!==void 0){if(F.currentProgram===it&&F.lightsStateVersion===Ae)return Di(C,Re),it}else Re.uniforms=Ce.getUniforms(C),Q!==null&&C.isNodeMaterial&&Q.build(C,oe,Re),C.onBeforeCompile(Re,W),it=Ce.acquireProgram(Re,Ue),ze.set(Ue,it),F.uniforms=Re.uniforms;const He=F.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=je.uniform),Di(C,Re),F.needsLights=Ks(C),F.lightsStateVersion=Ae,F.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),F.lightProbeGrid=N.state.lightProbeGridArray.length>0,F.currentProgram=it,F.uniformsList=null,it}function wi(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Ou.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Di(C,j){const oe=ae.get(C);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function la(C,j){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(j.matrixWorld);for(let oe=0,F=C.length;oe<F;oe++){const G=C[oe];if(G.texture!==null&&G.boundingBox.containsPoint(R))return G}return null}function Zi(C,j,oe,F,G){j.isScene!==!0&&(j=xt),ge.resetTextureUnits();const pe=j.fog,Ae=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?j.environment:null,Re=te===null?W.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Lt.workingColorSpace,Ue=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,ze=Ne.get(F.envMap||Ae,Ue),Ze=F.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),He=!!oe.morphAttributes.position,rt=!!oe.morphAttributes.normal,yt=!!oe.morphAttributes.color;let ft=ya;F.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ft=W.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,_t=Ot!==void 0?Ot.length:0,Xe=ae.get(F),Ln=N.state.lights;if(Mt===!0&&(mt===!0||C!==ye)){const Rt=C===ye&&F.id===ce;je.setState(F,C,Rt)}let ht=!1;F.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ln.state.version||Xe.outputColorSpace!==Re||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==ze||F.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==je.numPlanes||Xe.numIntersection!==je.numIntersection)||Xe.vertexAlphas!==Ze||Xe.vertexTangents!==it||Xe.morphTargets!==He||Xe.morphNormals!==rt||Xe.morphColors!==yt||Xe.toneMapping!==ft||Xe.morphTargetsCount!==_t||!!Xe.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Xe.__version=F.version);let mn=Xe.currentProgram;ht===!0&&(mn=ji(F,j,G),Q&&F.isNodeMaterial&&Q.onUpdateProgram(F,mn,Xe));let In=!1,ei=!1,Hn=!1;const It=mn.getUniforms(),Zt=Xe.uniforms;if(b.useProgram(mn.program)&&(In=!0,ei=!0,Hn=!0),F.id!==ce&&(ce=F.id,ei=!0),Xe.needsLights){const Rt=la(N.state.lightProbeGridArray,G);Xe.lightProbeGrid!==Rt&&(Xe.lightProbeGrid=Rt,ei=!0)}if(In||ye!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(K,"projectionMatrix",C.projectionMatrix),It.setValue(K,"viewMatrix",C.matrixWorldInverse);const Nn=It.map.cameraPosition;Nn!==void 0&&Nn.setValue(K,cn.setFromMatrixPosition(C.matrixWorld)),B.logarithmicDepthBuffer&&It.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&It.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),ye!==C&&(ye=C,ei=!0,Hn=!0)}if(Xe.needsLights&&(Ln.state.directionalShadowMap.length>0&&It.setValue(K,"directionalShadowMap",Ln.state.directionalShadowMap,ge),Ln.state.spotShadowMap.length>0&&It.setValue(K,"spotShadowMap",Ln.state.spotShadowMap,ge),Ln.state.pointShadowMap.length>0&&It.setValue(K,"pointShadowMap",Ln.state.pointShadowMap,ge)),G.isSkinnedMesh){It.setOptional(K,G,"bindMatrix"),It.setOptional(K,G,"bindMatrixInverse");const Rt=G.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),It.setValue(K,"boneTexture",Rt.boneTexture,ge))}G.isBatchedMesh&&(It.setOptional(K,G,"batchingTexture"),It.setValue(K,"batchingTexture",G._matricesTexture,ge),It.setOptional(K,G,"batchingIdTexture"),It.setValue(K,"batchingIdTexture",G._indirectTexture,ge),It.setOptional(K,G,"batchingColorTexture"),G._colorsTexture!==null&&It.setValue(K,"batchingColorTexture",G._colorsTexture,ge));const ri=oe.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Y.update(G,oe,mn),(ei||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,It.setValue(K,"receiveShadow",G.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&j.environment!==null&&(Zt.envMapIntensity.value=j.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=lR()),ei){if(It.setValue(K,"toneMappingExposure",W.toneMappingExposure),Xe.needsLights&&pn(Zt,Hn),pe&&F.fog===!0&&Fe.refreshFogUniforms(Zt,pe),Fe.refreshMaterialUniforms(Zt,F,Me,xe,N.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const Rt=Xe.lightProbeGrid;Zt.probesSH.value=Rt.texture,Zt.probesMin.value.copy(Rt.boundingBox.min),Zt.probesMax.value.copy(Rt.boundingBox.max),Zt.probesResolution.value.copy(Rt.resolution)}Ou.upload(K,wi(Xe),Zt,ge)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ou.upload(K,wi(Xe),Zt,ge),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&It.setValue(K,"center",G.center),It.setValue(K,"modelViewMatrix",G.modelViewMatrix),It.setValue(K,"normalMatrix",G.normalMatrix),It.setValue(K,"modelMatrix",G.matrixWorld),F.uniformsGroups!==void 0){const Rt=F.uniformsGroups;for(let Nn=0,Ki=Rt.length;Nn<Ki;Nn++){const Ra=Rt[Nn];Te.update(Ra,mn),Te.bind(Ra,mn)}}return mn}function pn(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ks(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(C,j,oe){const F=ae.get(C);F.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),ae.get(C.texture).__webglTexture=j,ae.get(C.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:oe,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const oe=ae.get(C);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,oe=0){te=C,H=j,V=oe;let F=null,G=!1,pe=!1;if(C){const Re=ae.get(C);if(Re.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(K.FRAMEBUFFER,Re.__webglFramebuffer),P.copy(C.viewport),J.copy(C.scissor),be=C.scissorTest,b.viewport(P),b.scissor(J),b.setScissorTest(be),ce=-1;return}else if(Re.__webglFramebuffer===void 0)ge.setupRenderTarget(C);else if(Re.__hasExternalTextures)ge.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Re.__boundDepthTexture!==Ze){if(Ze!==null&&ae.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(C)}}const Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const ze=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[j])?F=ze[j][oe]:F=ze[j],G=!0):C.samples>0&&ge.useMultisampledRTT(C)===!1?F=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[oe]:F=ze,P.copy(C.viewport),J.copy(C.scissor),be=C.scissorTest}else P.copy(qe).multiplyScalar(Me).floor(),J.copy(Tt).multiplyScalar(Me).floor(),be=ct;if(oe!==0&&(F=ue),b.bindFramebuffer(K.FRAMEBUFFER,F)&&b.drawBuffers(C,F),b.viewport(P),b.scissor(J),b.setScissorTest(be),G){const Re=ae.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,oe)}else if(pe){const Re=j;for(let Ue=0;Ue<C.textures.length;Ue++){const ze=ae.get(C.textures[Ue]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ue,ze.__webglTexture,oe,Re)}}else if(C!==null&&oe!==0){const Re=ae.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Re.__webglTexture,oe)}ce=-1},this.readRenderTargetPixels=function(C,j,oe,F,G,pe,Ae,Re=0){if(!(C&&C.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue){b.bindFramebuffer(K.FRAMEBUFFER,Ue);try{const ze=C.textures[Re],Ze=ze.format,it=ze.type;if(C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Re),!B.textureFormatReadable(Ze)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(it)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-F&&oe>=0&&oe<=C.height-G&&K.readPixels(j,oe,F,G,Pe.convert(Ze),Pe.convert(it),pe)}finally{const ze=te!==null?ae.get(te).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,j,oe,F,G,pe,Ae,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue)if(j>=0&&j<=C.width-F&&oe>=0&&oe<=C.height-G){b.bindFramebuffer(K.FRAMEBUFFER,Ue);const ze=C.textures[Re],Ze=ze.format,it=ze.type;if(C.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Re),!B.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,He),K.bufferData(K.PIXEL_PACK_BUFFER,pe.byteLength,K.STREAM_READ),K.readPixels(j,oe,F,G,Pe.convert(Ze),Pe.convert(it),0);const rt=te!==null?ae.get(te).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,rt);const yt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await pE(K,yt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,He),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,pe),K.deleteBuffer(He),K.deleteSync(yt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,oe=0){const F=Math.pow(2,-oe),G=Math.floor(C.image.width*F),pe=Math.floor(C.image.height*F),Ae=j!==null?j.x:0,Re=j!==null?j.y:0;ge.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,Ae,Re,G,pe),b.unbindTexture()},this.copyTextureToTexture=function(C,j,oe=null,F=null,G=0,pe=0){let Ae,Re,Ue,ze,Ze,it,He,rt,yt;const ft=C.isCompressedTexture?C.mipmaps[pe]:C.image;if(oe!==null)Ae=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,Ue=oe.isBox3?oe.max.z-oe.min.z:1,ze=oe.min.x,Ze=oe.min.y,it=oe.isBox3?oe.min.z:0;else{const Zt=Math.pow(2,-G);Ae=Math.floor(ft.width*Zt),Re=Math.floor(ft.height*Zt),C.isDataArrayTexture?Ue=ft.depth:C.isData3DTexture?Ue=Math.floor(ft.depth*Zt):Ue=1,ze=0,Ze=0,it=0}F!==null?(He=F.x,rt=F.y,yt=F.z):(He=0,rt=0,yt=0);const Ot=Pe.convert(j.format),_t=Pe.convert(j.type);let Xe;j.isData3DTexture?(ge.setTexture3D(j,0),Xe=K.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ge.setTexture2DArray(j,0),Xe=K.TEXTURE_2D_ARRAY):(ge.setTexture2D(j,0),Xe=K.TEXTURE_2D),b.activeTexture(K.TEXTURE0),b.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,j.flipY),b.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),b.pixelStorei(K.UNPACK_ALIGNMENT,j.unpackAlignment);const Ln=b.getParameter(K.UNPACK_ROW_LENGTH),ht=b.getParameter(K.UNPACK_IMAGE_HEIGHT),mn=b.getParameter(K.UNPACK_SKIP_PIXELS),In=b.getParameter(K.UNPACK_SKIP_ROWS),ei=b.getParameter(K.UNPACK_SKIP_IMAGES);b.pixelStorei(K.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(K.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(K.UNPACK_SKIP_ROWS,Ze),b.pixelStorei(K.UNPACK_SKIP_IMAGES,it);const Hn=C.isDataArrayTexture||C.isData3DTexture,It=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Zt=ae.get(C),ri=ae.get(j),Rt=ae.get(Zt.__renderTarget),Nn=ae.get(ri.__renderTarget);b.bindFramebuffer(K.READ_FRAMEBUFFER,Rt.__webglFramebuffer),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Ki=0;Ki<Ue;Ki++)Hn&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ae.get(C).__webglTexture,G,it+Ki),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ae.get(j).__webglTexture,pe,yt+Ki)),K.blitFramebuffer(ze,Ze,Ae,Re,He,rt,Ae,Re,K.DEPTH_BUFFER_BIT,K.NEAREST);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||ae.has(C)){const Zt=ae.get(C),ri=ae.get(j);b.bindFramebuffer(K.READ_FRAMEBUFFER,fe),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,Z);for(let Rt=0;Rt<Ue;Rt++)Hn?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Zt.__webglTexture,G,it+Rt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Zt.__webglTexture,G),It?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ri.__webglTexture,pe,yt+Rt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ri.__webglTexture,pe),G!==0?K.blitFramebuffer(ze,Ze,Ae,Re,He,rt,Ae,Re,K.COLOR_BUFFER_BIT,K.NEAREST):It?K.copyTexSubImage3D(Xe,pe,He,rt,yt+Rt,ze,Ze,Ae,Re):K.copyTexSubImage2D(Xe,pe,He,rt,ze,Ze,Ae,Re);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(Xe,pe,He,rt,yt,Ae,Re,Ue,Ot,_t,ft.data):j.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,pe,He,rt,yt,Ae,Re,Ue,Ot,ft.data):K.texSubImage3D(Xe,pe,He,rt,yt,Ae,Re,Ue,Ot,_t,ft):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,pe,He,rt,Ae,Re,Ot,_t,ft.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,pe,He,rt,ft.width,ft.height,Ot,ft.data):K.texSubImage2D(K.TEXTURE_2D,pe,He,rt,Ae,Re,Ot,_t,ft);b.pixelStorei(K.UNPACK_ROW_LENGTH,Ln),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(K.UNPACK_SKIP_PIXELS,mn),b.pixelStorei(K.UNPACK_SKIP_ROWS,In),b.pixelStorei(K.UNPACK_SKIP_IMAGES,ei),pe===0&&j.generateMipmaps&&K.generateMipmap(Xe),b.unbindTexture()},this.initRenderTarget=function(C){ae.get(C).__webglFramebuffer===void 0&&ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ge.setTextureCube(C,0):C.isData3DTexture?ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ge.setTexture2DArray(C,0):ge.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){H=0,V=0,te=null,b.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const uR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",fR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",dR="/assets/CXLMediumItalic-DYSp-DoC.otf",hR=4,pR=5,Ka={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function nS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function mR(a){return nS(a)}function gR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}function _R(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*pR/hR);return{W:o,H:c}}function iS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function tn(a,e,i,r,o,c,u){iS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function dn(a,e,i,r,o,c,u,d){iS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function Ku(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));tn(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),dn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function ql(a,e,i,r,o,c,u){if(r<2||o<2)return;const d=8*c,m=a.createLinearGradient(e,i+o,e+r,i);if(m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),tn(a,e,i,r,o,d,m),dn(a,e,i,r,o,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*c)),(u==null?void 0:u.innerStroke)!==!1){const h=2.5*c;dn(a,e+h,i+h,r-h*2,o-h*2,Math.max(2,d-1.5*c),"rgba(200,245,168,0.35)",Math.max(1,c))}}const Xs="rgba(255,255,255,0.08)",Ws="rgba(255,255,255,0.14)";function Qu(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return dn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function aS(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const _=e+o+v*h,M=v===u;a.fillStyle=M?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[v],_+h/2,i+14*d),M&&(a.fillStyle="#c8f5a8",a.fillRect(_+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function vR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const v=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(v,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const _=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,_,2*m),i+g+10*m}function xR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;tn(a,e,m,r,h,6*u,Xs),dn(a,e,m,r,h,6*u,Ws,1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,v=m+h/2;return a.beginPath(),a.moveTo(g-4*u,v-2*u),a.lineTo(g,v+3*u),a.lineTo(g+4*u,v-2*u),a.stroke(),d+6*u+h}function SR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;tn(a,e,u,r,d,8*o,"#050508"),dn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),tn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function MR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;dn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return tn(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),dn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function Jp(a,e,i,r,o){const c=44*o;tn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),dn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return tn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Ka.role} · ${Ka.didShort}`,e+8*o+u+8*o,i+32*o),c}function yR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),tn(a,e,i,r,c,d,m),dn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),dn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Ka.role} · ${Ka.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Ka.didShort,e+u,h);const g=28*o;return tn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),dn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function ER(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),tn(a,e,i,r,c,d,m),dn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,v=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,v,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function bR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);tn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);tn(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function TR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((v,_)=>{const M=e+_*(d+u);tn(a,M,h,d,m,6*o,Xs),dn(a,M,h,d,m,6*o,v.active?v.tone:Ws,v.active?Math.max(1.5,1.5*o):1),v.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(M+1,h+1,3*o,m-2)),a.fillStyle=v.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(v.label,M+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=v.label==="Guarded"?"safe default":v.label==="Manual"?"signals":"silent";a.fillText(E,M+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function AR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;tn(a,e,i,r,u,8*o,Xs),dn(a,e,i,r,u,8*o,Ws,1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return tn(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),tn(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const Bl=2,wo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Zv(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,v],_)=>{const M=e+_*(m+u);tn(a,M,i,m,h,6*c,Xs),dn(a,M,i,m,h,6*c,Ws,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,M+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(v,M+m/2,i+26*c)}),a.textAlign="left",h}function RR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:wo.riskScore},{label:"Rep",value:wo.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const v=a.measureText(g.label.toUpperCase()).width,_=g.value?a.measureText(g.value).width+3*o:0,M=m*2+6*o+v+_;if(h+M>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":Xs,A=g.brand?"rgba(200,245,168,0.35)":Ws;tn(a,h,i,M,d,4*o,E),dn(a,h,i,M,d,4*o,A,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let x=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),x,i+d*.68),x+=v+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,x,i+d*.68)),h+=M+u}return a.textAlign="left",d}function CR(a,e,i,r,o){const c=wo.receipts,u=22*o,d=14*o+c.length*u;return tn(a,e,i,r,d,6*o,Xs),dn(a,e,i,r,d,6*o,Ws,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function wR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),tn(a,e,i,r,c,d,m),dn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),dn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,v=e+r-u-h,_=i+u-1*o;return tn(a,v,_,h,g,8*o,"rgba(200,245,168,0.14)"),dn(a,v,_,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",v+h/2,_+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function DR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return tn(a,e,i,r,d,6*o,Xs),dn(a,e,i,r,d,6*o,Ws,1),c.forEach(([m,h,g],v)=>{const _=i+v*u;v>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,_),a.lineTo(e+r-8*o,_),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,_+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,_+u*.62);const M=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=M?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,_+u*.62)}),a.textAlign="left",d}function LR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%Bl+Bl)%Bl,v=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];Ku(a,e,i,r,o,h,u);let _=Qu(a,e,i,r,m,v.header,d);_=vR(a,e,_,r,m,v.segment,g+1,Bl,d);const M=i+o-m,E=e+m,A=_,y=r-m*2,x=Math.max(48*d,M-_),O=10*d;ql(a,E,A,y,x,d);const I=E+O,R=y-O*2;let L=A+O;const N=A+x-O;if(g===0){L+=Jp(a,I,L,R,d)+8*d,L+22*d<=N&&(L+=RR(a,I,L,R,d)+8*d);const T=[["SHARPE",wo.sharpe],["ROI",wo.roi],["RISK",wo.riskScore]];L+36*d<=N&&(L+=Zv(a,I,L,R,T,d)+8*d),L+70*d<=N&&CR(a,I,L,R,d);return}L+=wR(a,I,L,R,d)+8*d,L+78*d<=N&&(L+=DR(a,I,L,R,d)+8*d);const z=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];L+36*d<=N&&Zv(a,I,L,R,z,d)}function NR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;Ku(a,e,i,r,o,h,u);let g=Qu(a,e,i,r,m,"COPY TRADE",d);g=aS(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const v=40*d,_=i+o-m-v,M=_-10*d;if(c%2===0){const A=6*d,y=r-m*2;let x=(y-A)/2,O=Math.min(x*190/316,x*.58);const I=Math.max(64*d,M-g-28*d);O>I&&(x=x*(I/O),O=I);const R=d*(x/((y-A)/2)),L=e+m+(y-(x*2+A))/2;ER(a,L,g,x,R),yR(a,L+x+A,g,x,R),g+=O+10*d;const N=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],z=5*d,T=(r-m*2-z*2)/3,U=32*d;if(g+U<=M){const W=6*d;ql(a,e+m,g-W,r-m*2,U+W*2,d,{innerStroke:!1}),N.forEach(([X,Q],ue)=>{const fe=e+m+ue*(T+z);tn(a,fe,g,T,U,6*d,Xs),dn(a,fe,g,T,U,6*d,Ws,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(X,fe+T/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(Q,fe+T/2,g+24*d)}),a.textAlign="left"}}else{const A=e+m,y=g,x=r-m*2,O=Math.max(48*d,M-g),I=10*d;ql(a,A,y,x,O,d);const R=A+I,L=x-I*2;let N=y+I;const z=y+O-I;N+=Jp(a,R,N,L,d)+10*d,N+36*d<z&&(N+=bR(a,R,N,L,d,25)+10*d),N+50*d<z&&TR(a,R,N,L,d)}AR(a,e+m,_,r-m*2,d)}const UR=2,OR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function PR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function IR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;Ku(a,e,i,r,o,m,c);let h=Qu(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,v=e+d,_=h,M=r-d*2,E=Math.max(48*u,g-h),A=10*u;ql(a,v,_,M,E,u);const y=58*u,x=10*u,O=6*u,I=v+A+y+O+x+O,R=v+M-A-I,L=v+A+y+O+x/2,N=v+A;h=_+A;const z=_+E-A,T=OR,U=4*u;T.forEach((W,X)=>{if(h>=z-8*u)return;const Q=X===0,ue=X===T.length-1,fe=PR(W.status),Z=8*u,H=6*u,V=7*u,te=8*u,ce=W.showActions?22*u:0,ye=W.showActions?5*u:0,J=Math.max(Z+2*u+H,V+4*u+te)+ye+ce+U;if(h+Math.min(J,28*u)>z)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${Z}px "DM Mono", ui-monospace, monospace`,a.fillText(W.agent,N+y,h+Z),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${H}px "DM Mono", ui-monospace, monospace`,a.fillText(W.timeLabel,N+y,h+Z+2*u+H),a.textAlign="left",ue||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(L,h+6*u),a.lineTo(L,h+J),a.stroke());const be=2.4*u;a.beginPath(),a.arc(L,h+5*u,be,0,Math.PI*2),a.fillStyle=Q?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),Q&&(a.beginPath(),a.arc(L,h+5*u,be+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const we=4*u,Le=2*u;a.font=`700 ${V}px "DM Mono", ui-monospace, monospace`;const ie=W.statusLabel.toUpperCase(),xe=a.measureText(ie).width+we*2,Me=V+Le*2;tn(a,I,h,xe,Me,3*u,fe.bg),a.fillStyle=fe.fg,a.fillText(ie,I+we,h+V+Le*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${te}px "DM Mono", ui-monospace, monospace`;const Ge=h+Me+3*u+te;let $e=W.action;if(W.pnl){const qe=`${W.action} · `;a.fillText(qe,I,Ge);const Tt=a.measureText(qe).width;a.fillStyle=W.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${te}px "DM Mono", ui-monospace, monospace`,a.fillText(W.pnl.text,I+Tt,Ge)}else{for(;$e.length>8&&a.measureText($e).width>R;)$e=`${$e.slice(0,-2)}…`;a.fillText($e,I,Ge)}if(W.showActions&&h+Me+3*u+te+ye+ce<=z){const qe=h+Me+3*u+te+ye,Tt=(R-5*u)/2;dn(a,I,qe,Tt,ce,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",I+Tt/2,qe+ce*.68),tn(a,I+Tt+5*u,qe,Tt,ce,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",I+Tt+5*u+Tt/2,qe+ce*.68),a.textAlign="left"}h+=J})}function BR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;Ku(a,e,i,r,o,m,c);let h=Qu(a,e,i,r,d,"FUND BUCKET",u);h=aS(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u);const g=10*u+36*u,v=e+d,_=h,M=r-d*2,E=Math.max(48*u,i+o-d-g-8*u-h),A=10*u;ql(a,v,_,M,E,u);const y=v+A,x=M-A*2;let O=_+A;O+=Jp(a,y,O,x,u)+8*u,O+=xR(a,y,O,x,"FROM","Select source bucket",u)+8*u,_+E-A-O>70*u&&SR(a,y,O,x,u),MR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function sS(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":LR(a,i,r,o,c,u,d);break;case"copy":NR(a,i,r,o,c,u,d);break;case"supervise":IR(a,i,r,o,c,d);break;case"isolate":BR(a,i,r,o,c,d);break}}function FR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),sS(a,e,0,0,i,r,o,c)}function zR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m}=_R(i,r),h=document.createElement("canvas");h.width=d,h.height=m;const g=h.getContext("2d"),v=Math.min(1,Math.max(0,c)),_=g.createLinearGradient(0,0,0,m);_.addColorStop(0,`rgba(8, 10, 14, ${v})`),_.addColorStop(.55,`rgba(5, 7, 13, ${v})`),_.addColorStop(1,`rgba(3, 4, 6, ${v})`),g.fillStyle=_,g.fillRect(0,0,d,m);const M=Math.round(22*i),E=Math.round(.05*m),A=Math.round(.045*m),y=d-M*2;let x=E;const O=Math.min(34*i,d*.095);g.fillStyle="rgba(255,255,255,0.94)",g.font=`normal 400 ${O}px ${o}`,g.textBaseline="alphabetic",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(8,12*i),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,1.5*i),g.fillText(a.verb,M,x+O*.85),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x+=Math.round(.09*m);const I=Math.min(13*i,d*.036);g.fillStyle="rgba(255,255,255,0.94)",g.font=`400 ${I}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const R=gR(g,a.description,y),L=x+I;g.shadowColor="rgba(10, 14, 23, 0.45)",g.shadowBlur=Math.max(4,6*i),g.shadowOffsetY=Math.max(.5,1*i),g.fillText(R[0]??a.description,M,L),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x=Math.round(L+20*i);const N=M,z=x,T=y,U=Math.max(80*i,m-x-A);sS(g,mR(e),N,z,T,U,0,u);const W=new Kp(h);return W.colorSpace=Qn,W.minFilter=Gs,W.generateMipmaps=!0,W}const Pp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],HR="0 0 58 35",GR=58,VR=35;function kR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,GR+r*2,VR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Pp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const XR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function $p({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=XR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(kR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Kv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",WR=50,Pu=500,Fh=100,Qv=168;function YR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qR(){return Kv[Math.floor(Math.random()*Kv.length)]??"?"}function Jv(a){return Array.from(a).map(e=>{const i=Math.random()*(Pu-Fh),r=Fh+Math.random()*(Pu-i-Fh),o=Math.min(Pu,i+r);return{original:e,start:i,end:o}})}function jR(a){return Math.min(1,Math.max(0,a))}function ZR({text:a,className:e,scrollerRef:i}){const r=ke.useRef(null),o=ke.useRef(Jv(a)),c=YR();return ke.useEffect(()=>{o.current=Jv(a)},[a]),ke.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let d=0,m=!0,h=-1;const g=()=>{const _=i.current;if(!_)return;const M=Math.max(0,-_.getBoundingClientRect().top),E=Math.min(Pu,Math.max(0,M-WR));if(E===h&&h>=0)return;h=E;const A=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let x=A.length>0;for(let O=0;O<A.length;O++){const I=A[O],R=y[O];if(!R)continue;const L=Math.max(.001,I.end-I.start),N=jR((E-I.start)/L);if(N<1&&(x=!1),N<=0){R.textContent=I.original===" "?" ":I.original,R.style.transform="translateY(0)",R.style.opacity="1",R.style.visibility="visible";continue}if(N>=1){R.textContent=I.original===" "?" ":I.original,R.style.transform=`translateY(${-Qv}px)`,R.style.opacity="0",R.style.visibility="hidden";continue}R.textContent=qR(),R.style.transform=`translateY(${-N*Qv}px)`,R.style.opacity=String(1-N),R.style.visibility="visible"}u.style.visibility=x?"hidden":"visible",u.style.display=x?"none":"block"},v=()=>{m&&(g(),d=requestAnimationFrame(v))};return d=requestAnimationFrame(v),()=>{m=!1,cancelAnimationFrame(d)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,d)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${d}-${u}`))})}const KR="Enter the agentic economy →",Fl=Xh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),on=Fl.length,Za=2.95,Vl=6.9,ku=32,rS=4,oS=5,Ip=2.05,QR=1,JR=Za*.55,lS=.28,cS=.35,$R=lS+cS,zh=.85,$v=300,e3=35,ex=e3/60*1e3,t3=.1;function uS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const n3=1.35,i3=.72,a3=.62,s3=.2,r3=14,o3=.42,l3=128,c3=12,u3=.002,f3=.0011,tx=.12,d3=.88,fS=4,h3=32,p3=40,m3=fS-1,nx=50,g3=-10,ix=28,_3="/intro-frames",dS=12,kl=121,v3=1,Nl=960,Ul=540,x3=10;function Ru(){const a=window.devicePixelRatio||1,e=window.innerWidth<900,i=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;return Math.min(a,e||i?1.5:2)}const hS=(kl-1)/dS,pS=[0,2,4,6,8,hS],S3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function M3(a){const e=v3+a;return`${_3}/frame_${String(e).padStart(3,"0")}.webp`}function y3(a){const e=kl-1,i=Vt.clamp(a,0,hS);return Vt.clamp(Math.round(i*dS),0,e)}function E3(a,e){const i=S3[a]??{in:2,out:2},r=Vt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function b3(a,e,i,r,o){const c=Math.max(1,on-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=pS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],v=u[h+1],_=v>g?Vt.clamp((a-g)/(v-g),0,1):1;return Vt.lerp(d[h],d[h+1],E3(h,_))}function T3(a){let e=!1;const i=new Array(kl).fill(null);async function r(c){if(e)return;const u=new Image;u.decoding="async",u.src=M3(c),await new Promise(d=>{u.onload=()=>d(),u.onerror=()=>d()}),!(e||!u.complete||u.naturalWidth<1)&&(i[c]=u,a==null||a(c,u))}const o=(async()=>{await r(0);let c=1;for(;c<kl&&!e;){const u=[];for(let d=0;d<x3&&c<kl;d+=1,c+=1)u.push(r(c));await Promise.all(u)}})();return{frames:i,cancel:()=>{e=!0},ready:o}}const A3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,R3=`
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
`,C3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,w3=`
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
`,D3='"Reckk Heading", Georgia, "Times New Roman", serif',mS="Morpheum Wordmark",jl=`"${mS}"`,L3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function N3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(mS,`url(${dR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${jl}`);const e=document.fonts.check(`normal 152px ${jl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function U3(){if(!(typeof document>"u"||!document.fonts))try{await N3();const a=new FontFace("Reckk Title",`url(${fR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${uR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${jl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const xr="flow-intro-hide-chrome",O3=72,P3=120,Hh=80;function I3(a){return a<=O3}const B3=280;function Mr(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Gh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;Mr(e)}function br(a){const e=Vt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function zl(a){const e=Math.max(1,a),i=Math.max(1,on*e*QR),r=Math.max(1,i/Math.max(1,on-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const F3=900,z3=1100,H3=1300,G3=1500,V3=6,k3=36,X3=50,W3=.5,Y3=1024,q3=.75,gS=.8;function em(a){return a>=Y3}function j3(a){return em(a)?F3:z3}function Z3(a){return em(a)?H3:G3}function _S(a){return Math.max(2,Math.max(1,a)*.004)}function K3(a,e){const{cardPx:i,titlePx:r}=zl(e),o=Math.max(1,on-1),c=Vt.clamp(Math.round(a),0,on-1);return r+c/o*i}function Q3(a){return a.offsetTop}function J3(a,e,i){return a.offsetTop+K3(e,i)}function Vh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function $3(a){const e=on-1;return Vt.clamp(Math.round(a),0,e)}function kh(a,e,i,r){const o=_S(r);return a<e-o?{kind:"title"}:{kind:"card",idx:$3(i)}}function eC(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,on-1),m=r+d*W3;return!(a>m||c<u*.5)}function tm(a,e){const i=a/Math.max(1,e),r=ku*Math.PI/180,o=2*Vl*Math.tan(r/2),c=o*i,u=Ip*rS/oS,d=.992,m=d*o/Ip,h=d*c/u;return Vt.clamp(Math.min(m,h),.52,2.35)}function tC(a,e,i=gS){const r=tm(a,e);return(em(a)?r*q3:r)*i}function ax(a,e,i){const r=uS(a),o=tm(a,e),c=a/Math.max(1,e),u=ku*Math.PI/180,m=2*Vl*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function nC(a,e){const i=a/Math.max(1,on-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function iC(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function aC(a,e){const i=Vt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=br(Vt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function sC(a,e,i,r=0){const o=on-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Vt.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=br(Vt.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function rC(a){return new Yi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:t3}},vertexShader:C3,fragmentShader:w3,transparent:!0,depthWrite:!0,depthTest:!0,side:$a})}function oC(a,e){return a>1.5&&a<e-.5}function lC(a){return Vt.clamp(540/Math.max(a,340),.2,.55)}function cC(a,e,i){const r=[],o=r3;for(let c=0;c<o;c++){const u=Vt.clamp(a-c/Math.max(1,o-1)*o3,-.08,1.08),d=Math.sin(u*Math.PI*2*n3)*a3*i,m=Math.sin(u*Math.PI*2*i3)*s3,h=tx+c/Math.max(1,o-1)*(d3-tx),g=e-h;r.push(new ne(d,m,g))}return r}function uC(a,e,i,r){const o=a.length;if(o<2)return new Wi;const c=[],u=[],d=[],m=[],h=new ne,g=new ne,v=new ne,_=new ne(0,1,0),M=e+1;for(let A=0;A<o;A++){A===0?h.subVectors(a[1],a[0]).normalize():A===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[A+1],a[A-1]).normalize(),g.copy(_).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),v.crossVectors(h,g).normalize();const y=o===1?0:A/(o-1),x=i+(r-i)*Math.pow(y,1.5);for(let O=0;O<=e;O++){const I=O/e*Math.PI*2,R=Math.cos(I),L=Math.sin(I),N=a[A];c.push(N.x+(R*g.x+L*v.x)*x,N.y+(R*g.y+L*v.y)*x,N.z+(R*g.z+L*v.z)*x),u.push(R*g.x+L*v.x,R*g.y+L*v.y,R*g.z+L*v.z),d.push(o===1?0:A/(o-1),O/e)}}for(let A=0;A<o-1;A++)for(let y=0;y<e;y++){const x=A*M+y,O=x+1,I=x+M,R=I+1;m.push(x,I,O,O,I,R)}const E=new Wi;return E.setAttribute("position",new Xi(c,3)),E.setAttribute("normal",new Xi(u,3)),E.setAttribute("uv",new Xi(d,2)),E.setIndex(m),E.computeBoundingSphere(),E}function sx(a,e,i,r,o,c){const u={verb:a.verb,description:a.description};return zR(u,e,i,r,D3,o,c)}function rx(a,e){const i=uS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const d=u.getContext("2d");d.clearRect(0,0,o,c);const m="Morpheum";let h=i.fontPx;d.textAlign="left",d.textBaseline="alphabetic";const g=()=>{d.font=`normal ${h*r}px ${jl}`};g();const v=L=>{d.font=`normal ${L*r}px ${jl}`;const N=d.measureText(m),z=Math.abs(N.actualBoundingBoxLeft??0),T=Math.abs(N.actualBoundingBoxRight??N.width),U=Math.abs(N.actualBoundingBoxAscent??L*r*.8),W=Math.abs(N.actualBoundingBoxDescent??L*r*.25);return{left:z,right:T,width:z+T,ascent:U,descent:W}},_=Math.max(1.25,1.85*r)*2,M=64*r+_,E=40*r+_,A=L=>{const N=v(L);return N.width+M*2<=o&&N.ascent+N.descent+E*2<=c};for(;!A(h)&&h>64;)h-=2;for(;A(h+2)&&h<i.fontPx+24;)h+=2;g();const y=v(h),x=(o-y.width)/2+y.left,O=c/2+(y.ascent-y.descent)/2,I=d.createLinearGradient(x-y.left,O-y.ascent,x+y.right,O+y.descent);L3.forEach(L=>I.addColorStop(L.t,L.c)),d.lineJoin="round",d.miterLimit=2,d.lineWidth=Math.max(1.25,1.85*r),d.strokeStyle="rgba(8,12,10,0.22)",d.shadowColor="rgba(10, 14, 23, 0.55)",d.shadowBlur=Math.max(10,16*r),d.shadowOffsetX=0,d.shadowOffsetY=Math.max(1,2*r),d.strokeText(m,x,O),d.fillStyle=I,d.fillText(m,x,O),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0;const R=new Kp(u);return R.colorSpace=Qn,R.minFilter=xn,R.magFilter=xn,R.generateMipmaps=!1,R}function ox(a,e){a.generateMipmaps=!1,a.minFilter=xn,a.magFilter=xn,a.wrapS=sa,a.wrapT=sa;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function fC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=gS}){const r=ke.useRef(null),o=ke.useRef(null),c=ke.useRef(null),u=ke.useRef(null),d=ke.useRef(!1),m=ke.useRef(!1),h=ke.useRef(null),g=ke.useRef(a);g.current=Math.min(1,Math.max(0,a));const v=ke.useRef(e);v.current=Math.min(1,Math.max(0,e));const _=ke.useRef(i);_.current=Math.max(.1,i);const M=ke.useCallback(()=>{var A;if(d.current)return;d.current=!0,m.current=!1,(A=h.current)==null||A.call(h);const E=o.current;E==null||E.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(xr),Gh(),requestAnimationFrame(()=>{Gh(),requestAnimationFrame(()=>{Gh(),window.setTimeout(()=>{d.current=!1},100)})})},B3)},[]);return ke.useLayoutEffect(()=>{const E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=window.location.hash.replace(/^#/,"");return E||A!==""&&A!=="flow"&&A!=="hero"||document.body.classList.add(xr),()=>{document.body.classList.remove(xr)}},[]),ke.useEffect(()=>{const E=A=>{if(A.key!=="Escape")return;const y=document.getElementById("hero");y&&y.getBoundingClientRect().top>8&&(A.preventDefault(),M())};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[M]),ke.useEffect(()=>{const E=window.location.hash.replace(/^#/,"");E&&E!=="flow"&&E!=="hero"&&requestAnimationFrame(()=>{var A;(A=document.getElementById(E))==null||A.scrollIntoView({block:"start"})})},[]),ke.useEffect(()=>{const E=c.current,A=r.current;if(!E||!A)return;const y=E,x=A;let O=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(xr);const L=u.current;L&&(L.style.height="0px");return}let R;return(async()=>{if(await U3(),O)return;const L=Ru(),N=Math.max(320,y.clientWidth||window.innerWidth),z=Math.max(1,y.clientHeight||window.innerHeight),T=[],U=[],W=[],X=new Float64Array(on).fill(-1);Fl.forEach((F,G)=>{const pe=on-1-G,Ae=Fl[pe],Re=sx(Ae,pe,L,N,g.current,v.current);W.push(Re);const Ue=rC(Re);T.push(Ue);const ze=Ip,Ze=ze*rS/oS,it=new Ai(new Vs(Ze,ze),Ue);it.position.set(0,0,-G*Za),it.renderOrder=G,U.push(it)});const Q=rx(L,N),ue=new Vu({map:Q,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:xa}),fe=Q.image.height/Q.image.width,{w:Z,h:H}=ax(N,z,fe),V=new Ai(new Vs(Z,H),ue);V.position.set(0,0,-(on-1)*Za+.05),V.renderOrder=p3;const te=new WE,ce=new Vi(ku,1,.08,120),ye=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,P=new cR({antialias:!ye,alpha:!1,powerPreference:"high-performance"});P.setPixelRatio(Ru()),P.outputColorSpace=Qn,P.sortObjects=!0,y.appendChild(P.domElement),ox(Q,P);const J=new Pl;U.forEach(F=>J.add(F)),J.add(V),te.add(J);const be=new Yi({uniforms:{uStrength:{value:0}},vertexShader:A3,fragmentShader:R3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Wh}),we=new Ai(new Wi,be);we.frustumCulled=!1,we.renderOrder=nx,we.visible=!1,te.add(we);let Le=null,ie=null,xe=null,Me=-1;const Ge=document.createElement("canvas");Ge.width=Nl,Ge.height=Ul;const $e=Ge.getContext("2d",{alpha:!1,desynchronized:!0}),qe=T3((F,G)=>{O||!$e||!Le||F===0&&Me<0&&($e.drawImage(G,0,0,Nl,Ul),Le.needsUpdate=!0,Me=0)});function Tt(F){const G=qe.frames[F];if(G)return G;for(let pe=1;pe<12;pe+=1){const Ae=qe.frames[F-pe];if(Ae)return Ae;const Re=qe.frames[F+pe];if(Re)return Re}return null}function ct(F){if(!$e||!Le)return;const G=y3(F);if(G===Me)return;const pe=Tt(G);pe&&($e.drawImage(pe,0,0,Nl,Ul),Le.needsUpdate=!0,Me=G)}$e&&($e.fillStyle="#000",$e.fillRect(0,0,Nl,Ul),Le=new Kp(Ge),Le.colorSpace=Qn,Le.minFilter=xn,Le.magFilter=xn,Le.generateMipmaps=!1,ie=new Vu({map:Le,depthTest:!1,depthWrite:!1,toneMapped:!1}),xe=new Ai(new Vs(1,1),ie),xe.frustumCulled=!1,xe.renderOrder=g3,xe.position.set(0,0,-ix),ce.add(xe),te.add(ce),ct(pS[0]));function vt(){if(!xe)return;const F=ix,G=ku*Math.PI/180,pe=2*Math.tan(G/2)*F,Ae=pe*ce.aspect,Re=Nl/Ul;Ae/Math.max(1e-6,pe)>Re?xe.scale.set(Ae,Ae/Re,1):xe.scale.set(pe*Re,pe,1)}const Mt=-(on-1)*Za,mt=-.1*Za,nn=Mt+Vl+mt,cn=nn-JR;function un(F){const G=on-1,pe=Vt.clamp(F,0,G);return-(G-pe)*Za+Vl+mt}let xt=Math.max(1,y.clientHeight||window.innerHeight),Nt=!1,$t=window.innerWidth,K=!1,Ut=!1;function At(){return Math.max(1,window.innerHeight)}function B(F){return K?F>P3&&(K=!1):I3(F)&&(K=!0),K}function b(){const F=u.current;if(!F)return;const{totalPx:G}=zl(xt),pe=xt*$R,Re=`${Math.max(Math.ceil(G+pe+xt*zh+32-$v),Math.ceil(xt*1.08))}px`;F.style.height!==Re&&(F.style.height=Re)}function ee(){var Ze;const F=Math.max(320,y.clientWidth||window.innerWidth),G=Ru();W.forEach((it,He)=>{it.dispose();const rt=on-1-He,yt=sx(Fl[rt],rt,G,F,g.current,v.current);W[He]=yt,T[He].uniforms.uMap.value=yt}),(Ze=ue.map)==null||Ze.dispose();const pe=rx(G,F);ue.map=pe,ue.needsUpdate=!0,ox(pe,P);const Ae=pe.image.height/pe.image.width,Re=Math.max(1,y.clientHeight||xt),{w:Ue,h:ze}=ax(F,Re,Ae);V.geometry.dispose(),V.geometry=new Vs(Ue,ze)}function ae(){const F=y.clientWidth,G=y.clientHeight;F<2||G<2||(ce.aspect=F/G,ce.updateProjectionMatrix(),P.setPixelRatio(Ru()),P.setSize(F,G,!1),vt(),ee(),Nt||b())}function ge(){Nt=!1,xt=At(),$t=window.innerWidth,ae()}ae(),requestAnimationFrame(()=>{O||ee()});let Ne=0;function Be(){var $s,os;if(O)return;Ne=requestAnimationFrame(Be);const F=At(),G=document.getElementById("hero"),pe=G?G.getBoundingClientRect().top:0,Ae=G?B(pe):!0,{totalPx:Re}=zl(xt),Ue=x.getBoundingClientRect(),ze=Math.max(1,x.offsetHeight-xt),Ze=Vt.clamp(-Ue.top,0,ze);!Ae&&Ze<=Re?(Nt=!1,Math.abs(F-xt)>Hh&&(xt=F,b())):Nt=!0;const He=xt,{cardPx:rt,titlePx:yt,totalPx:ft}=zl(He),Ot=Math.max(1,x.offsetHeight-He),_t=Vt.clamp(-Ue.top,0,Ot),Xe=Math.min(_t,ft),Ln=Math.max(1,ft),ht=He*lS,mn=He*cS,In=ht+mn,ei=_t-ft,Hn=br(Vt.clamp(ei/Math.max(1,ht),0,1)),It=br(Vt.clamp((ei-ht)/Math.max(1,mn),0,1)),Zt=y.clientWidth,ri=y.clientHeight,Rt=Math.max(1,yt),Nn=Xe<Rt,Ki=Nn?Vt.clamp(Xe/Rt,0,1):0,Ra=Math.max(0,Xe-Rt),Qi=Math.max(1,rt),ca=Vt.clamp(Ra/Qi,0,1)*(on-1),is=tm(Zt,ri),as=tC(Zt,ri,_.current),Dr=Nn?Vt.lerp(cn,nn,Ki):un(ca),Qs=nC(rt,He),Jl=iC(Rt,He),ss=aC(Ki,Jl),Li=on-1,Fo=ft+In;ct(b3(_t,Rt,rt,ft,Fo)),vt(),ce.position.set(0,0,Dr),ce.lookAt(0,0,Dr-Vl);const ua=ft+In;let mi=0;if(Ot>ua&&_t>=ua){const Gt=Math.max(1,Ot-ua);mi=br(Vt.clamp((_t-ua)/Gt,0,1))}const zo=Math.max(1,In+He*zh),Lr=_t<=Ln?Vt.clamp(_t/Ln,0,1):1+Vt.clamp(ei/zo,0,1)*.45;if(oC(_t,Ot)){const Gt=cC(Lr,Dr,lC(Zt)),Ni=new ab(Gt,!1,"centripetal").getSpacedPoints(l3);if(Ni.length>=2){const bn=uC(Ni,c3,u3,f3),gi=we.geometry.getAttribute("position"),ti=bn.getAttribute("position");if(gi&&ti&&gi.count===ti.count&&(($s=we.geometry.getIndex())==null?void 0:$s.count)===((os=bn.getIndex())==null?void 0:os.count)&&gi&&ti){gi.array.set(ti.array),gi.needsUpdate=!0;const cs=we.geometry.getAttribute("normal"),fa=bn.getAttribute("normal");cs&&fa&&(cs.array.set(fa.array),cs.needsUpdate=!0);const Ho=we.geometry.getAttribute("uv"),ec=bn.getAttribute("uv");Ho&&ec&&(Ho.array.set(ec.array),Ho.needsUpdate=!0),bn.dispose()}else we.geometry.dispose(),we.geometry=bn;we.visible=!0;const Nr=Nn||ca<Vt.clamp(Qs,0,.999);we.renderOrder=Nr?m3:nx,be.uniforms.uStrength.value=.36*(1-mi*.92)}else we.visible=!1,be.uniforms.uStrength.value=0}else we.visible=!1,be.uniforms.uStrength.value=0;const Js=Math.floor((on-1)/2),rs=performance.now(),$l=Vt.clamp(Qs,0,.999);for(let Gt=0;Gt<on;Gt++){if(Nn||ca<=Gt+1e-5||ca<Gt+$l){X[Gt]=-1;continue}X[Gt]<0&&(ca>=Gt+1-1e-5?X[Gt]=rs-ex:X[Gt]=rs)}if(U.forEach((Gt,oi)=>{const Ni=-oi*Za,bn=on-1-oi,gi=X[bn];let ti=gi<0?0:br(Vt.clamp((rs-gi)/ex,0,1));!Nn&&bn===on-1&&It>0&&(ti=Math.max(ti,It));let{opacity:ls}=sC(ca,bn,Qs,ti);Nn&&oi===Li&&(ls*=ss.lastCardOp,ti=0);let Nr=1,cs=0;!Nn&&bn===on-1&&ls>.02&&Hn>0&&(Nr=1-.28*Hn,cs=-Za*.32*Hn),Gt.position.set(0,0,Ni+cs),Gt.scale.setScalar(as*Nr);const fa=T[oi];fa.uniforms.uOpacity.value=ls,fa.uniforms.uWipe.value=ti,fa.depthWrite=ls>=.995&&ti<.02,Gt.visible=ls>.003&&ti<.997,Gt.renderOrder=oi<=Js?fS+oi:h3+(oi-Js-1)}),V.position.set(0,0,-Li*Za+.05),V.scale.setScalar(is),ue.opacity=Nn?ss.titleOp:0,V.visible=ue.opacity>.003,!d.current){m.current?Ut=!1:Ae?Ut=!0:Ut&&_t<ft-He*.25&&(Ut=!1),document.body.classList.toggle(xr,!Ut);const Gt=o.current;Gt!=null&&Gt.classList.contains("flow-intro__sticky--exit")&&!Ae&&(Gt.style.transition="none",Gt.classList.remove("flow-intro__sticky--exit"),Gt.offsetWidth,Gt.style.transition="")}if(!Nt){const Gt=In+He*zh+32-$v,oi=Math.max(Math.ceil(ft+Gt),Math.ceil(He*1.08)),Ni=u.current;if(Ni){const bn=`${oi}px`;Ni.style.height!==bn&&(Ni.style.height=bn)}}const qn=1-mi*.96;o.current&&(o.current.style.setProperty("--intro-ui-opacity",String(qn)),o.current.style.setProperty("--intro-tagline-opacity","1"));const Ca=String(1-mi);P.domElement.style.opacity=Ca,P.render(te,ce)}Be();let de=0,me=0,Ce=!1,Fe="page",Oe=!1,Ie=!1,je=!1,Qe=0,nt=0,Y=0,De=!1,_e=!1,Pe=0,Ve=window.scrollY,Te={kind:"title"};const Je=8;function Ye(){me&&(window.clearTimeout(me),me=0)}function qt(){de&&(cancelAnimationFrame(de),de=0),Ce=!1,Fe="page",m.current=!1}function ut(){qt(),Ye(),Oe=!1}h.current=ut;function hn(){var ft;const F=Math.max(1,xt),{cardPx:G,titlePx:pe,totalPx:Ae}=zl(F),Re=x.getBoundingClientRect(),Ue=Math.max(1,x.offsetHeight-F),ze=Vt.clamp(-Re.top,0,Ue),Ze=document.getElementById("hero"),it=Ze?B(Ze.getBoundingClientRect().top):!0,He=((ft=o.current)==null?void 0:ft.getBoundingClientRect().bottom)??F,yt=Math.max(0,Math.min(ze,Ae)-pe)/Math.max(1,G)*(on-1);return{innerH:F,cardPx:G,titlePx:pe,totalPx:Ae,scrolledPx:ze,landed:it,stickyBottom:He,depthT:yt}}function jt(F=hn()){return eC(F.scrolledPx,F.titlePx,F.cardPx,F.totalPx,F.landed,F.stickyBottom,F.innerH)}function Ys(){return Ce||jt()}function qs(F){let G=F.deltaY;return F.deltaMode===1?G*=16:F.deltaMode===2&&(G*=window.innerHeight),G}function Aa(){Ye(),Oe=!0,me=window.setTimeout(()=>{me=0,Oe=!1},X3)}function ns(F,G){return F.kind==="title"?Q3(x):F.kind==="card"?J3(x,F.idx,G.innerH):Vh()}function $n(F){if(O||d.current||Ce)return;const G=hn(),pe=F.kind==="hero";if(!pe&&!jt(G))return;const Ae=ns(F,G);if(Ae==null)return;const Re=window.scrollY,Ue=Ae-Re;if(Te=F.kind==="hero"?{kind:"card",idx:on-1}:F,Math.abs(Ue)<_S(G.innerH)){Mr(Ae),Aa();return}Ce=!0,Fe=pe?"exit":"page",m.current=pe,Oe=!0;const ze=pe?Z3(window.innerWidth):j3(window.innerWidth),Ze=performance.now(),it=rt=>{if(Mr(rt),Ce=!1,Fe="page",de=0,!pe){m.current=!1,Aa();return}m.current=!1,requestAnimationFrame(()=>{const yt=Vh();yt!=null&&Mr(yt),requestAnimationFrame(()=>{const ft=Vh();ft!=null&&Mr(ft),Aa()})})},He=rt=>{if(O||d.current){Ce=!1,Fe="page",de=0,m.current=!1;return}if(Fe==="page"&&!jt(hn())){qt(),Oe=!1;return}const yt=Math.min(1,(rt-Ze)/ze);Mr(Re+Ue*br(yt)),yt<1?de=requestAnimationFrame(He):it(Ae)};de=requestAnimationFrame(He)}function an(F,G){const pe=on-1,Ae=G>0?1:-1,Re=kh(F.scrolledPx,F.titlePx,F.depthT,F.innerH);if(Re.kind==="title")return Ae<0?null:{kind:"card",idx:0};const Ue=Re.idx+Ae;return Ue<0?{kind:"title"}:Ue>pe?Ae>0?{kind:"hero"}:{kind:"card",idx:pe}:{kind:"card",idx:Ue}}function Sn(F){const G=hn();if(!jt(G)&&!(Ce&&Fe==="exit"))return!1;const pe=an(G,F);return pe===null?!1:($n(pe),!0)}function zn(F,G){return an(F,G)===null}function oa(F){if(!Ys())return;const G=qs(F),pe=hn();if(!jt(pe)&&Fe!=="exit")return;const Ae=an(pe,G>0?1:-1);if(Ae===null){(Ce||Oe)&&ut();return}if(Ce||Oe){F.preventDefault();return}if(Math.abs(G)<V3){F.preventDefault();return}F.preventDefault(),$n(Ae)}function js(F){var G;if(nt=((G=F.touches[0])==null?void 0:G.clientY)??nt,Qe=nt,Y=window.scrollY,Ie=!1,je=Ce||jt(),je&&!Ce){const pe=hn();Te=kh(pe.scrolledPx,pe.titlePx,pe.depthT,pe.innerH)}}function Zs(F){var pe;const G=((pe=F.touches[0])==null?void 0:pe.clientY)??Qe;if(!Ie){if(!je&&(Ce||jt())&&(je=!0,nt=G,Qe=G,Y=window.scrollY),!je)return;const Ae=nt-G;if(Math.abs(Ae)<Je){Qe=G;return}const Re=Ae>0?1:-1,Ue=hn();if(!Ce&&!jt(Ue)){je=!1,Qe=G;return}if(zn(Ue,Re)){je=!1,ut(),Qe=G;return}Ce&&ut(),Ie=!0,je=!1,Y=window.scrollY,Te=kh(Ue.scrolledPx,Ue.titlePx,Ue.depthT,Ue.innerH)}F.preventDefault(),Qe=G,Ce||Mr(Y)}function Ci(){const F=Ie,G=je,pe=nt-Qe;if(Ie=!1,je=!1,Ce)return;if(!F){G&&ut();return}if(!jt())return;if(Math.abs(pe)<k3){$n(Te);return}const Ae=pe>0?1:-1,Re=hn();if(zn(Re,Ae)){ut();return}Sn(Ae)}function qi(F){F.pointerType!=="touch"&&F.button===0&&(De=!0,_e=!1,Pe=window.scrollY,jt()&&qt())}function ji(F){if(F.pointerType==="touch"||!De)return;if(De=!1,!_e||!jt()){_e=!1;return}const G=hn(),pe=window.scrollY>=Pe?1:-1,Ae=an(G,pe);if(_e=!1,Ae===null){ut();return}$n(Ae)}function wi(F){F.pointerType!=="touch"&&(De=!1,_e=!1)}function Di(F){F.button===0&&(_e||Ce||Oe||jt()&&(F.preventDefault(),Sn(1)))}function la(F){var Re;const G=F.target;if((Re=G==null?void 0:G.closest)!=null&&Re.call(G,"input, textarea, select, [contenteditable=true]"))return;const pe=F.key==="ArrowDown"||F.key==="ArrowRight"||F.key==="Enter"||F.key===" ",Ae=F.key==="ArrowUp"||F.key==="ArrowLeft";if(!(!pe&&!Ae)){if(Ce||Oe){F.preventDefault();return}jt()&&(F.preventDefault(),Sn(pe?1:-1))}}function Zi(){const F=window.scrollY,G=F-Ve;Ve=F,De&&Math.abs(G)>.5&&(_e=!0),Ce&&Fe==="page"&&!jt()&&ut()}function pn(){ut(),ge()}function Ks(){ut();const F=At(),G=window.innerWidth,pe=Math.abs(F-xt),Ae=Math.abs(G-$t)>1;if(Nt){pe>Hh||Ae?ge():ae();return}xt=F,$t=G,ae()}function C(){ut();const F=At();Math.abs(F-xt)<=Hh||(Nt?ge():(xt=F,$t=window.innerWidth,ae()))}window.addEventListener("wheel",oa,{passive:!1}),window.addEventListener("touchstart",js,{passive:!0}),window.addEventListener("touchmove",Zs,{passive:!1}),window.addEventListener("touchend",Ci,{passive:!0}),window.addEventListener("touchcancel",Ci,{passive:!0}),window.addEventListener("pointerdown",qi,{passive:!0}),window.addEventListener("pointerup",ji,{passive:!0}),window.addEventListener("pointercancel",wi,{passive:!0}),window.addEventListener("scroll",Zi,{passive:!0}),window.addEventListener("resize",Ks,{passive:!0}),window.addEventListener("orientationchange",pn,{passive:!0}),y.addEventListener("click",Di),window.addEventListener("keydown",la);const j=window.visualViewport;j&&j.addEventListener("resize",C);const oe=new ResizeObserver(ae);oe.observe(y),R=()=>{var F;ut(),h.current=null,cancelAnimationFrame(Ne),document.body.classList.remove(xr),window.removeEventListener("wheel",oa),window.removeEventListener("touchstart",js),window.removeEventListener("touchmove",Zs),window.removeEventListener("touchend",Ci),window.removeEventListener("touchcancel",Ci),window.removeEventListener("pointerdown",qi),window.removeEventListener("pointerup",ji),window.removeEventListener("pointercancel",wi),window.removeEventListener("scroll",Zi),window.removeEventListener("resize",Ks),window.removeEventListener("orientationchange",pn),y.removeEventListener("click",Di),window.removeEventListener("keydown",la),j&&j.removeEventListener("resize",C),oe.disconnect(),T.forEach(G=>{G.dispose()}),W.forEach(G=>G.dispose()),(F=ue.map)==null||F.dispose(),ue.dispose(),U.forEach(G=>G.geometry.dispose()),V.geometry.dispose(),we.geometry.dispose(),be.dispose(),te.remove(we),xe&&(ce.remove(xe),xe.geometry.dispose()),ie==null||ie.dispose(),Le==null||Le.dispose(),qe.cancel(),P.dispose(),y.contains(P.domElement)&&y.removeChild(P.domElement)},O&&R()})(),()=>{var L;O=!0,(L=h.current)==null||L.call(h),h.current=null,document.body.classList.remove(xr),R==null||R()}},[]),D.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:o,className:"flow-intro__sticky",children:[D.jsx("div",{ref:c,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx($p,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:M,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(ZR,{text:KR,className:"flow-intro__tagline",scrollerRef:r})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Fl.map((E,A)=>D.jsxs("p",{children:["Step ",String(A+1).padStart(2,"0"),": ",E.verb,". ",E.description]},E.verb))})]}),D.jsx("div",{ref:u,className:"flow-intro__spacer","aria-hidden":!0})]})}const dC=280,hC=5/4,pC=3800,mC={discover:Bl,copy:UR};function gC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _C({stepIndex:a,kind:e,className:i,width:r=dC}){const o=ke.useRef(null),c=e??nS(a),u=Math.round(r*hC);return ke.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const M=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*M),A=Math.round(u*M);(d.width!==E||d.height!==A)&&(d.width=E,d.height=A);const y=d.getContext("2d");y&&FR(y,c,E,A,m)};g();const v=mC[c];v&&v>1&&!gC()&&(h=setInterval(()=>{m=(m+1)%v,g()},pC));const _=()=>g();return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const lx=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function vC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:lx.map((a,e)=>{const i=e===lx.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const xC=/^(action)$/i;function SC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>xC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function vS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:SC(e)})]})}var MC=xx();function yC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function EC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,yC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function cx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=EC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let v=1;v<=a.length;v++){d.setStart(c,0),d.setEnd(c,v);const _=d.getClientRects().length;_>g&&g>0&&(m.push(a.slice(h,v-1)),h=v-1),g=_}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const bC=40,TC=5,AC="typewriter-reveal",ux=1e3,RC=4e3;function fx(){return ux+Math.random()*(RC-ux)}function xS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function CC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),v=ke.useRef(null),_=ke.useRef(null),M=ke.useRef(null),E=ke.useRef("idle"),[A,y]=ke.useState("idle");g.current=m;const x=ke.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),O=ke.useCallback(()=>{var U;x(),_.current=null,M.current=null,E.current="complete",y("complete"),(U=g.current)==null||U.call(g)},[x]),I=ke.useCallback(U=>{x(),_.current=Date.now()+U,v.current=setTimeout(O,U)},[x,O]);ke.useLayoutEffect(()=>{E.current="idle",y("idle"),M.current=null,_.current=null,x()},[a,i,r,x]),ke.useLayoutEffect(()=>{var V,te,ce;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&v.current&&_.current!=null&&(x(),M.current=Math.max(0,_.current-Date.now()),_.current=null);return}if(E.current==="cursor-hold"&&!v.current){const ye=M.current??fx();M.current=null,I(ye);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(xS()){(V=g.current)==null||V.call(g);return}const U=h.current;if(!U||!a){(te=g.current)==null||te.call(g);return}U.style.width="",U.offsetWidth;const W=Math.max(a.length/i*1e3,120),X=Math.max(a.length,1),Q=U.closest(".typewriter-block"),ue=(Q==null?void 0:Q.clientWidth)??((ce=U.parentElement)==null?void 0:ce.clientWidth)??0;U.style.whiteSpace="nowrap",U.style.width="auto";const fe=U.scrollWidth,Z=ue>0?Math.min(fe,ue):fe;U.style.width="0",U.style.setProperty("--tw-duration",`${W}ms`),U.style.setProperty("--tw-target-width",`${Z}px`),U.style.setProperty("--tw-steps",String(X)),U.style.setProperty("--tw-cursor-width",`${r}px`),U.offsetWidth,E.current="animating",y("animating");const H=ye=>{if(ye.animationName===AC){if(d){U.style.width=`${Z}px`,E.current="cursor-hold",y("cursor-hold"),I(fx());return}U.style.width="",O()}};return U.addEventListener("animationend",H),()=>{U.removeEventListener("animationend",H)}},[o,u,O,d,I,i,a,c,x,r]);const R=A==="animating",L=A==="cursor-hold",N=A==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",R?"is-animating":"",L?"is-cursor-hold":"",u||N?"is-complete":"",!o&&!c&&!u&&!N&&(R||L)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:T,children:e??a})}function nm({text:a,children:e,className:i,speed:r=bC,cursorWidth:o=TC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),[v,_]=ke.useState([]),[M,E]=ke.useState(0),[A,y]=ke.useState(0),[x,O]=ke.useState(!1),[I,R]=ke.useState(!1),L=xS();g.current=m;const N=ke.useCallback(()=>{const fe=h.current;if(!fe||!a)return _([]),E(0),R(!0),!0;const Z=fe.clientWidth;if(Z<1)return!1;const V=(c==="auto"||c===!0)&&!L,{lines:te,blockHeight:ce}=cx(a,Z,fe,V);let ye=ce;if(!V){const P=cx(a,Z,fe,!0);ye=Math.max(ce,P.blockHeight)}return _(te),E(ye),R(!0),!0},[a,c,L]);ke.useLayoutEffect(()=>{var fe,Z;if(y(0),O(!1),R(!1),_([]),E(0),L){(fe=g.current)==null||fe.call(g),R(!0);return}if(!a){(Z=g.current)==null||Z.call(g),R(!0);return}if(!N()){const H=new ResizeObserver(()=>{N()&&H.disconnect()});return h.current&&H.observe(h.current),()=>H.disconnect()}},[a,c,N,L]);const z=ke.useCallback(fe=>{var H;const Z=fe>=v.length-1;MC.flushSync(()=>{if(!Z){y(fe+1);return}O(!0)}),Z&&((H=g.current)==null||H.call(g))},[v]),U=["typewriter-block",v.length>1?"typewriter-lines":"typewriter-host",i??"",x?"is-complete":"",I?"":"is-measuring",L?"is-static":""].filter(Boolean).join(" "),W={...!x&&!L&&M>0?{height:M,minHeight:M}:void 0},X=e??a;if(!I)return D.jsx("span",{ref:h,className:U,style:W,children:X});if(L||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:X});if(x)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:X});const Q=v.length>0?v:[a],ue=!!e&&Q.length<=1;return D.jsxs("span",{ref:h,className:U,style:W,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:X}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Q.map((fe,Z)=>D.jsx(CC,{text:fe,content:ue?e:void 0,speed:r,cursorWidth:o,waiting:Z>A,active:u&&Z===A,completed:Z<A,holdCursor:d&&Z===Q.length-1,onComplete:Z===A?()=>z(Z):void 0},`${Z}-${fe}`))})]})}function wC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function im(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=ke.useState(!1);return ke.useLayoutEffect(()=>{if(r)return;if(wC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function DC(a){return String(a).padStart(2,"0")}function Xu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const LC=1600,NC=1500,dx=5e3,UC=7e3;function OC(){return dx+Math.random()*(UC-dx)}function PC({text:a,active:e}){const[i,r]=ke.useState(!1),[o,c]=ke.useState(0),u=ke.useRef(null),d=`> ${a}`,m=ke.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);ke.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Xu()){r(!0);return}const g=window.setTimeout(()=>r(!0),NC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=ke.useCallback(()=>{Xu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},OC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(nm,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function IC(){const[a,e]=ke.useState(()=>new Set),[i,r]=ke.useState(!1),o=ke.useRef(new Map),c=ke.useRef(null),u=im(c,{amount:.35}),d=Us.steps.every(v=>a.has(`step-${v.n}`));ke.useLayoutEffect(()=>{if(Xu()){e(new Set(Us.steps.map(_=>`step-${_.n}`))),r(!0);return}const v=new IntersectionObserver(_=>{e(M=>{const E=new Set(M);for(const A of _){const y=A.target.dataset.flowKey;y&&A.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const _ of o.current.values())v.observe(_);return()=>{v.disconnect()}},[]),ke.useLayoutEffect(()=>{if(Xu())return;if(!d){r(!1);return}const v=window.setTimeout(()=>{r(!0)},LC);return()=>window.clearTimeout(v)},[d]);const m=ke.useCallback((v,_)=>{_?o.current.set(v,_):o.current.delete(v)},[]),h=ke.useCallback(v=>{e(_=>new Set(_).add(v))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Us.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Us.title}),D.jsx("div",{className:"flow__chips",children:Us.chips.map(v=>D.jsx(vS,{label:v.label,status:v.value},v.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Us.steps.map((v,_)=>{const M=`step-${v.n}`,E=a.has(M);return D.jsxs("article",{ref:A=>m(M,A),"data-flow-key":M,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(M),"aria-label":E?`${v.title}, expanded`:`${v.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",DC(v.n)]}),D.jsx("h3",{className:"flow-step__title",children:v.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${_===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:v.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:v.body}),D.jsx(PC,{text:v.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Dn.explore,className:"flow-step__open","aria-label":`Explore after ${v.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${_===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?_===2?D.jsx(vC,{}):D.jsx(_C,{stepIndex:_,width:280}):null})]})})})]},M)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(nm,{text:Us.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Us.outcome})})]})})}function BC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx($p,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:j_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Cu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Dn.docs,children:"Docs"}),D.jsx("a",{href:Dn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Dn.discord,children:"Discord"}),D.jsx("a",{href:Dn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:j_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const hx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",SS=50,px=3500,mx=4e3,FC=1400,zC=1200,HC=4500;function MS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gx(a){return/[A-Za-z0-9]/.test(a)}function GC(){return hx[Math.floor(Math.random()*hx.length)]??"?"}function VC(a){return Math.random()<.5?GC():a}function yS(a,e,i){const r=[];for(let h=0;h<a.length;h++)gx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!gx(g)||d.has(h)?m+=g:m+=VC(g)}return m}function kC(a){return typeof a=="boolean"?{enabled:a,decryptMs:px,pauseMs:mx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??px,pauseMs:a.pauseMs??mx}}function Wn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=kC(e),c=r+o,[u,d]=ke.useState(a);return ke.useEffect(()=>{if(!i||MS()){d(a);return}let m=Date.now();const h=()=>{const v=Date.now();let _=v-m;_>=c&&(m=v,_=0),d(yS(a,_,r))};h();const g=setInterval(h,SS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function _x(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??FC,o=e.stepDecryptMs??zC,c=e.holdMs??HC,u=a.join("\0"),[d,m]=ke.useState(a),[h,g]=ke.useState(()=>a.map(()=>!1));return ke.useEffect(()=>{const v=u.length>0?u.split("\0"):[];if(!i||MS()||v.length===0){m(v),g(v.map(()=>!0));return}const M=(v.length-1)*r+o+c;let E=Date.now();const A=()=>{const x=Date.now();let O=x-E;O>=M&&(E=x,O=0);const I=[],R=[];for(let L=0;L<v.length;L++){const N=v[L]??"",z=L*r,T=O>=z;if(R.push(T),!T){I.push(N);continue}const U=O-z;I.push(yS(N,U,o))}m(I),g(R)};A();const y=setInterval(A,SS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function XC(){const a=[...q_,...q_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(vS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function WC({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Ns.headline,c=Wn(Ns.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:HR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Pp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Pp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ns.eyebrow.href,"aria-label":`${Ns.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Do,{href:Ns.primaryCta.href,variant:"primary",children:Ns.primaryCta.label}),D.jsx(Do,{href:Ns.secondaryCta.href,variant:"secondary",children:Ns.secondaryCta.label})]})]}),D.jsx(XC,{})]})}function YC(){const a=Wn(th.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:th.href,"aria-label":th.text,children:a})})}const si={decryptMs:2800,pauseMs:5200},vx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function ES(a){return String(a+1).padStart(2,"0")}function qC(a,e,i,r){return`${ES(a)}  ${e}  ·  ${i}  ·  ${r}`}function jC(a,e,i){return`${ES(a)}  ${e}  ·  ${i}`}function ZC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function hi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function ln({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function KC({meta:a}){const e=Wn(a.name,si),i=Wn(a.tx,si),r=Wn(a.hash,si),o=Wn(a.chain,si),c=Wn(a.verified,si),u=Wn(a.rep,si),d=Wn(a.portable,si),m=Wn(a.next,si),h=`tx ${a.tx}`,g=`tx ${i}`,v=`did · ${a.name}`,_=`identity · ${e}`,M=`hash ${a.hash}`,E=`hash ${r}`,A=`chain ${a.chain}`,y=`chain ${o}`,x=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,O=`verified ${c} · rep ${u} · portable ${d}`,I=`next ${a.next}`,R=`next ${m}`,L=`rep ${a.rep} · portable ${a.portable}`,N=`rep ${u} · portable ${d}`,z=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(hi,{label:"tx",value:a.tx,display:i}),D.jsx(hi,{label:"hash",value:a.hash,display:r}),D.jsx(hi,{label:"chain",value:a.chain,display:o}),D.jsx(hi,{label:"verified",value:a.verified,display:c}),D.jsx(hi,{label:"rep",value:a.rep,display:u}),D.jsx(hi,{label:"portable",value:a.portable,display:d}),D.jsx(hi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(ln,{value:h,display:g}),D.jsx(ln,{value:v,display:_,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(ln,{value:M,display:E}),D.jsx(ln,{value:A,display:y}),D.jsx(ln,{value:x,display:O}),D.jsx(ln,{value:I,display:R})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(ln,{value:h,display:g}),D.jsx(ln,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(ln,{value:M,display:E}),D.jsx(ln,{value:A,display:y}),D.jsx(ln,{value:z,display:T}),D.jsx(ln,{value:L,display:N}),D.jsx(ln,{value:I,display:R})]})]})}function QC({meta:a}){const e=Wn(a.tx,si),i=Wn(a.from,si),r=Wn(a.to,si),o=Wn(a.asset,si),c=Wn(a.amt,si),u=Wn(a.chain,si),d=Wn(a.status,si),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,v=`tx ${e}`,_=`${a.asset} ${a.amt} · ${a.chain}`,M=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,A=`${o} ${c}`,y=`status ${a.status}`,x=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(hi,{label:"tx",value:a.tx,display:e}),D.jsx(hi,{label:"from",value:a.from,display:i}),D.jsx(hi,{label:"to",value:a.to,display:r}),D.jsx(hi,{label:"asset",value:a.asset,display:o}),D.jsx(hi,{label:"amt",value:a.amt,display:c}),D.jsx(hi,{label:"chain",value:a.chain,display:u}),D.jsx(hi,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(ln,{value:g,display:v}),D.jsx(ln,{value:m,display:h}),D.jsx(ln,{value:_,display:M}),D.jsx(ln,{value:y,display:x})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(ln,{value:g,display:v}),D.jsx(ln,{value:m,display:h}),D.jsx(ln,{value:E,display:A}),D.jsx(ln,{value:a.chain,display:u}),D.jsx(ln,{value:y,display:x})]})]})}function JC({meta:a}){const e=ke.useRef(null),i=im(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?ZC(r):null,c=ke.useMemo(()=>{const h=a.steps.map((g,v)=>qC(v,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=ke.useMemo(()=>{const h=a.steps.map((g,v)=>jC(v,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=_x(c,{...vx,enabled:i}),m=_x(u,{...vx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(ln,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(ln,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(ln,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function $C({meta:a}){return a.kind==="identity"?D.jsx(KC,{meta:a}):a.kind==="chain"?D.jsx(JC,{meta:a}):D.jsx(QC,{meta:a})}function ew({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Do,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx($C,{meta:a.meta})]})}function tw(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:nh.kicker}),D.jsx("h2",{className:"section-title personas__title",children:nh.title}),D.jsx("div",{className:"personas__grid",children:nh.items.map(a=>D.jsx(ew,{persona:a},a.title))})]})})}function nw(){const[a,e]=ke.useState(!1),[i,r]=ke.useState(!1),[o,c]=ke.useState("");return ke.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),ke.useEffect(()=>{const u=Cu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(v=>v.isIntersecting).sort((v,_)=>_.intersectionRatio-v.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),ke.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx($p,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Cu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Dn.docs,children:"Docs"}),D.jsx(Do,{href:Dn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Cu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Dn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function iw(){const a=ke.useRef(null),e=im(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(nm,{text:Y_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:Y_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function aw(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(YC,{}),D.jsx(nw,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(fC,{cardAlpha:0,modalChassisAlpha:.8,cardSize:.8}),D.jsx(WC,{contentOffsetY:0,maskAlpha:.5}),D.jsx(iw,{}),D.jsx(Ly,{}),D.jsx(tw,{}),D.jsx(IC,{}),D.jsx(Uy,{}),D.jsx(Dy,{})]}),D.jsx(BC,{})]})}Cy.createRoot(document.getElementById("root")).render(D.jsx(ke.StrictMode,{children:D.jsx(aw,{})}));
