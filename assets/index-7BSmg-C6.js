(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Cd={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function ZM(){if(p_)return il;p_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return il.Fragment=e,il.jsx=i,il.jsxs=i,il}var m_;function KM(){return m_||(m_=1,Cd.exports=ZM()),Cd.exports}var D=KM(),wd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function QM(){if(g_)return lt;g_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(O,K,ye){this.props=O,this.context=K,this.refs=y,this.updater=ye||E}M.prototype.isReactComponent={},M.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=M.prototype;function z(O,K,ye){this.props=O,this.context=K,this.refs=y,this.updater=ye||E}var C=z.prototype=new P;C.constructor=z,w(C,M.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(O,K,ye){var we=ye.ref;return{$$typeof:a,type:O,key:K,ref:we!==void 0?we:null,props:ye}}function X(O,K){return L(O.type,K,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function j(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return K[ye]})}var ue=/\/+/g;function fe(O,K){return typeof O=="object"&&O!==null&&O.key!=null?j(""+O.key):K.toString(36)}function q(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,K,ye,we,He){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case a:case e:be=!0;break;case g:return be=O._init,F(be(O._payload),K,ye,we,He)}}if(be)return He=He(O),be=we===""?"."+fe(O,0):we,I(He)?(ye="",be!=null&&(ye=be.replace(ue,"$&/")+"/"),F(He,K,ye,"",function(it){return it})):He!=null&&(V(He)&&(He=X(He,ye+(He.key==null||O&&O.key===He.key?"":(""+He.key).replace(ue,"$&/")+"/")+be)),K.push(He)),1;be=0;var Te=we===""?".":we+":";if(I(O))for(var We=0;We<O.length;We++)we=O[We],se=Te+fe(we,We),be+=F(we,K,ye,se,He);else if(We=S(O),typeof We=="function")for(O=We.call(O),We=0;!(we=O.next()).done;)we=we.value,se=Te+fe(we,We++),be+=F(we,K,ye,se,He);else if(se==="object"){if(typeof O.then=="function")return F(q(O),K,ye,we,He);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(O,K,ye){if(O==null)return O;var we=[],He=0;return F(O,we,"","",function(se){return K.call(ye,se,He++)}),we}function $(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Me={map:H,forEach:function(O,K,ye){H(O,function(){K.apply(this,arguments)},ye)},count:function(O){var K=0;return H(O,function(){K++}),K},toArray:function(O){return H(O,function(K){return K})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return lt.Activity=_,lt.Children=Me,lt.Component=M,lt.Fragment=i,lt.Profiler=o,lt.PureComponent=z,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,lt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},lt.cache=function(O){return function(){return O.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(O,K,ye){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var we=w({},O.props),He=O.key;if(K!=null)for(se in K.key!==void 0&&(He=""+K.key),K)!T.call(K,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&K.ref===void 0||(we[se]=K[se]);var se=arguments.length-2;if(se===1)we.children=ye;else if(1<se){for(var be=Array(se),Te=0;Te<se;Te++)be[Te]=arguments[Te+2];we.children=be}return L(O.type,He,we)},lt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},lt.createElement=function(O,K,ye){var we,He={},se=null;if(K!=null)for(we in K.key!==void 0&&(se=""+K.key),K)T.call(K,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(He[we]=K[we]);var be=arguments.length-2;if(be===1)He.children=ye;else if(1<be){for(var Te=Array(be),We=0;We<be;We++)Te[We]=arguments[We+2];He.children=Te}if(O&&O.defaultProps)for(we in be=O.defaultProps,be)He[we]===void 0&&(He[we]=be[we]);return L(O,se,He)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:d,render:O}},lt.isValidElement=V,lt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:$}},lt.memo=function(O,K){return{$$typeof:p,type:O,compare:K===void 0?null:K}},lt.startTransition=function(O){var K=B.T,ye={};B.T=ye;try{var we=O(),He=B.S;He!==null&&He(ye,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(N,_e)}catch(se){_e(se)}finally{K!==null&&ye.types!==null&&(K.types=ye.types),B.T=K}},lt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},lt.use=function(O){return B.H.use(O)},lt.useActionState=function(O,K,ye){return B.H.useActionState(O,K,ye)},lt.useCallback=function(O,K){return B.H.useCallback(O,K)},lt.useContext=function(O){return B.H.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O,K){return B.H.useDeferredValue(O,K)},lt.useEffect=function(O,K){return B.H.useEffect(O,K)},lt.useEffectEvent=function(O){return B.H.useEffectEvent(O)},lt.useId=function(){return B.H.useId()},lt.useImperativeHandle=function(O,K,ye){return B.H.useImperativeHandle(O,K,ye)},lt.useInsertionEffect=function(O,K){return B.H.useInsertionEffect(O,K)},lt.useLayoutEffect=function(O,K){return B.H.useLayoutEffect(O,K)},lt.useMemo=function(O,K){return B.H.useMemo(O,K)},lt.useOptimistic=function(O,K){return B.H.useOptimistic(O,K)},lt.useReducer=function(O,K,ye){return B.H.useReducer(O,K,ye)},lt.useRef=function(O){return B.H.useRef(O)},lt.useState=function(O){return B.H.useState(O)},lt.useSyncExternalStore=function(O,K,ye){return B.H.useSyncExternalStore(O,K,ye)},lt.useTransition=function(){return B.H.useTransition()},lt.version="19.2.7",lt}var __;function hp(){return __||(__=1,wd.exports=QM()),wd.exports}var Ze=hp(),Dd={exports:{}},al={},Nd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function JM(){return v_||(v_=1,(function(a){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var _e=$-1>>>1,Me=F[_e];if(0<o(Me,H))F[_e]=H,F[$]=Me,$=_e;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var _e=0,Me=F.length,O=Me>>>1;_e<O;){var K=2*(_e+1)-1,ye=F[K],we=K+1,He=F[we];if(0>o(ye,$))we<Me&&0>o(He,ye)?(F[_e]=He,F[we]=$,_e=we):(F[_e]=ye,F[K]=$,_e=K);else if(we<Me&&0>o(He,$))F[_e]=He,F[we]=$,_e=we;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,v=3,S=!1,E=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=F)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function I(F){if(w=!1,C(F),!E)if(i(m)!==null)E=!0,N||(N=!0,j());else{var H=i(p);H!==null&&q(I,H.startTime-F)}}var N=!1,B=-1,T=5,L=-1;function X(){return y?!0:!(a.unstable_now()-L<T)}function V(){if(y=!1,N){var F=a.unstable_now();L=F;var H=!0;try{e:{E=!1,w&&(w=!1,P(B),B=-1),S=!0;var $=v;try{t:{for(C(F),_=i(m);_!==null&&!(_.expirationTime>F&&X());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,v=_.priorityLevel;var Me=_e(_.expirationTime<=F);if(F=a.unstable_now(),typeof Me=="function"){_.callback=Me,C(F),H=!0;break t}_===i(m)&&r(m),C(F)}else r(m);_=i(m)}if(_!==null)H=!0;else{var O=i(p);O!==null&&q(I,O.startTime-F),H=!1}}break e}finally{_=null,v=$,S=!1}H=void 0}}finally{H?j():N=!1}}}var j;if(typeof z=="function")j=function(){z(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=V,j=function(){fe.postMessage(null)}}else j=function(){M(V,0)};function q(F,H){B=M(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(F,H,$){var _e=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?_e+$:_e):$=_e,F){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=$+Me,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:Me,sortIndex:-1},$>_e?(F.sortIndex=$,e(p,F),i(m)===null&&F===i(p)&&(w?(P(B),B=-1):w=!0,q(I,$-_e))):(F.sortIndex=Me,e(m,F),E||S||(E=!0,N||(N=!0,j()))),F},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(Ld)),Ld}var x_;function $M(){return x_||(x_=1,Nd.exports=JM()),Nd.exports}var Ud={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function ey(){if(S_)return kn;S_=1;var a=hp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},kn.flushSync=function(m){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=g,r.d.f()}},kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},kn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},kn.requestFormReset=function(m){r.d.r(m)},kn.unstable_batchedUpdates=function(m,p){return m(p)},kn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},kn.version="19.2.7",kn}var M_;function Kv(){if(M_)return Ud.exports;M_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ud.exports=ey(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function ty(){if(y_)return al;y_=1;var a=$M(),e=hp(),i=Kv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),n;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var x=!1,R=f.child;R;){if(R===s){x=!0,s=f,l=h;break}if(R===l){x=!0,l=f,s=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===s){x=!0,s=h,l=f;break}if(R===l){x=!0,l=h,s=f;break}R=R.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var q=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},_e=[],Me=-1;function O(t){return{current:t}}function K(t){0>Me||(t.current=_e[Me],_e[Me]=null,Me--)}function ye(t,n){Me++,_e[Me]=t.current,t.current=n}var we=O(null),He=O(null),se=O(null),be=O(null);function Te(t,n){switch(ye(se,n),ye(He,t),ye(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Fg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Fg(n),t=Bg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(we),ye(we,t)}function We(){K(we),K(He),K(se)}function it(t){t.memoizedState!==null&&ye(be,t);var n=we.current,s=Bg(n,t.type);n!==s&&(ye(He,t),ye(we,s))}function et(t){He.current===t&&(K(we),K(He)),be.current===t&&(K(be),$o._currentValue=$)}var Wt,ot;function pt(t){if(Wt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",ot=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+ot}var mt=!1;function rt(t,n){if(!t||mt)return"";mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(de){var le=de}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(de){le=de}t.call(Ee.prototype)}}else{try{throw Error()}catch(de){le=de}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var G=x.split(`
`),ae=R.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ae.length)for(l=G.length-1,f=ae.length-1;1<=l&&0<=f&&G[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ae[f]){var ve=`
`+G[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{mt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?pt(s):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return rt(t.type,!1);case 11:return rt(t.type.render,!1);case 1:return rt(t.type,!0);case 31:return pt("Activity");default:return""}}function It(t){try{var n="",s=null;do n+=qt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ft=Object.prototype.hasOwnProperty,an=a.unstable_scheduleCallback,Lt=a.unstable_cancelCallback,Yt=a.unstable_shouldYield,Z=a.unstable_requestPaint,At=a.unstable_now,_t=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,oe=a.unstable_LowPriority,pe=a.unstable_IdlePriority,Ue=a.log,Ie=a.unstable_setDisableYieldValue,he=null,me=null;function Ne(t){if(typeof Ue=="function"&&Ie(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(he,t)}catch{}}var Ge=Math.clz32?Math.clz32:Oe,Fe=Math.log,ge=Math.LN2;function Oe(t){return t>>>=0,t===0?32:31-(Fe(t)/ge|0)|0}var Pe=256,qe=262144,k=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ce(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?f=Re(l):(x&=R,x!==0?f=Re(x):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~h,R!==0?f=Re(R):x!==0?f=Re(x):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:n!==0&&n!==f&&(n&h)===0&&(h=f&-f,s=n&-n,h>=s||h===32&&(s&4194048)!==0)?n:f}function Ae(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bt(t,n,s,l,f,h){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(s=x&~s;0<s;){var ve=31-Ge(s),Ee=1<<ve;R[ve]=0,G[ve]=-1;var le=ae[ve];if(le!==null)for(ae[ve]=null,ve=0;ve<le.length;ve++){var de=le[ve];de!==null&&(de.lane&=-536870913)}s&=~Ee}l!==0&&Ut(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(x&~n))}function Ut(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ge(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function xn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function hn(t,n){var s=n&-n;return s=(s&42)!==0?1:bs(s),(s&(t.suspendedLanes|n))!==0?0:s}function bs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ts(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function As(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:o_(t.type))}function Rs(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var On=Math.random().toString(36).slice(2),ln="__reactFiber$"+On,pn="__reactProps$"+On,Gn="__reactContainer$"+On,Zi="__reactEvents$"+On,Ki="__reactListeners$"+On,Cs="__reactHandles$"+On,da="__reactResources$"+On,Oi="__reactMarker$"+On;function Pi(t){delete t[ln],delete t[pn],delete t[Zi],delete t[Ki],delete t[Cs]}function ri(t){var n=t[ln];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Gn]||s[ln]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Wg(t);t!==null;){if(s=t[ln])return s;t=Wg(t)}return n}t=s,s=t.parentNode}return null}function Ii(t){if(t=t[ln]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ga(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Fi(t){var n=t[da];return n||(n=t[da]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(t){t[Oi]=!0}var rr=new Set,A={};function Y(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(A[t]=n,t=0;t<n.length;t++)rr.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Be={};function Ce(t){return Ft.call(Be,t)?!0:Ft.call(te,t)?!1:ne.test(t)?Be[t]=!0:(te[t]=!0,!1)}function Le(t,n,s){if(Ce(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Xe(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,h.call(this,x)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function dt(t){if(!t._valueTracker){var n=tt(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=tt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ct=/[\n"\\]/g;function Ht(t){return t.replace(Ct,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(t,n,s,l,f,h,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qe(n)):t.value!==""+Qe(n)&&(t.value=""+Qe(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?vt(t,x,Qe(n)):s!=null?vt(t,x,Qe(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Qe(R):t.removeAttribute("name")}function Vn(t,n,s,l,f,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){dt(t);return}s=s!=null?""+Qe(s):"",n=n!=null?""+Qe(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),dt(t)}function vt(t,n,s){n==="number"&&Ot(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Cn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Qe(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function oi(t,n,s){if(n!=null&&(n=""+Qe(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Qe(s):""}function Bi(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Qe(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),dt(t)}function li(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Gt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function zi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&rn(t,f,l)}else for(var h in n)n.hasOwnProperty(h)&&rn(t,h,n[h])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ws(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ha(){}var bu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var or=null,lr=null;function Ip(t){var n=Ii(t);if(n&&(t=n.stateNode)){var s=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ye(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[pn]||null;if(!f)throw Error(r(90));Ye(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Qt(l)}break e;case"textarea":oi(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Cn(t,!!s.multiple,n,!1)}}}var Au=!1;function Fp(t,n,s){if(Au)return t(n,s);Au=!0;try{var l=t(n);return l}finally{if(Au=!1,(or!==null||lr!==null)&&(fc(),or&&(n=or,t=lr,lr=or=null,Ip(n),t)))for(n=0;n<t.length;n++)Ip(t[n])}}function go(t,n){var s=t.stateNode;if(s===null)return null;var l=s[pn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(pa)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ru=!1}var ka=null,Cu=null,Tl=null;function Bp(){if(Tl)return Tl;var t,n=Cu,s=n.length,l,f="value"in ka?ka.value:ka.textContent,h=f.length;for(t=0;t<s&&n[t]===f[t];t++);var x=s-t;for(l=1;l<=x&&n[s-l]===f[h-l];l++);return Tl=f.slice(t,1<l?1-l:void 0)}function Al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function zp(){return!1}function Jn(t){function n(s,l,f,h,x){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Rl:zp,this.isPropagationStopped=zp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=Jn(Ds),vo=_({},Ds,{view:0,detail:0}),Yx=Jn(vo),wu,Du,xo,wl=_({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(wu=t.screenX-xo.screenX,Du=t.screenY-xo.screenY):Du=wu=0,xo=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Hp=Jn(wl),jx=_({},wl,{dataTransfer:0}),Zx=Jn(jx),Kx=_({},vo,{relatedTarget:0}),Nu=Jn(Kx),Qx=_({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=Jn(Qx),$x=_({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=Jn($x),tS=_({},Ds,{data:0}),Gp=Jn(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=aS[t])?!!n[t]:!1}function Lu(){return sS}var rS=_({},vo,{key:function(t){if(t.key){var n=nS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=Jn(rS),lS=_({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Jn(lS),cS=_({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),uS=Jn(cS),fS=_({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=Jn(fS),hS=_({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=Jn(hS),mS=_({},Ds,{newState:0,oldState:0}),gS=Jn(mS),_S=[9,13,27,32],Uu=pa&&"CompositionEvent"in window,So=null;pa&&"documentMode"in document&&(So=document.documentMode);var vS=pa&&"TextEvent"in window&&!So,kp=pa&&(!Uu||So&&8<So&&11>=So),Xp=" ",Wp=!1;function qp(t,n){switch(t){case"keyup":return _S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function xS(t,n){switch(t){case"compositionend":return Yp(n);case"keypress":return n.which!==32?null:(Wp=!0,Xp);case"textInput":return t=n.data,t===Xp&&Wp?null:t;default:return null}}function SS(t,n){if(cr)return t==="compositionend"||!Uu&&qp(t,n)?(t=Bp(),Tl=Cu=ka=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!MS[t.type]:n==="textarea"}function Zp(t,n,s,l){or?lr?lr.push(l):lr=[l]:or=l,n=vc(n,"onChange"),0<n.length&&(s=new Cl("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Mo=null,yo=null;function yS(t){Ng(t,0)}function Dl(t){var n=Ga(t);if(Qt(n))return t}function Kp(t,n){if(t==="change")return n}var Qp=!1;if(pa){var Ou;if(pa){var Pu="oninput"in document;if(!Pu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Pu=typeof Jp.oninput=="function"}Ou=Pu}else Ou=!1;Qp=Ou&&(!document.documentMode||9<document.documentMode)}function $p(){Mo&&(Mo.detachEvent("onpropertychange",em),yo=Mo=null)}function em(t){if(t.propertyName==="value"&&Dl(yo)){var n=[];Zp(n,yo,t,Tu(t)),Fp(yS,n)}}function ES(t,n,s){t==="focusin"?($p(),Mo=n,yo=s,Mo.attachEvent("onpropertychange",em)):t==="focusout"&&$p()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(yo)}function TS(t,n){if(t==="click")return Dl(n)}function AS(t,n){if(t==="input"||t==="change")return Dl(n)}function RS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ci=typeof Object.is=="function"?Object.is:RS;function Eo(t,n){if(ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ft.call(n,f)||!ci(t[f],n[f]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,n){var s=tm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=tm(s)}}function im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ot(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Ot(t.document)}return n}function Iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var CS=pa&&"documentMode"in document&&11>=document.documentMode,ur=null,Fu=null,bo=null,Bu=!1;function sm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Bu||ur==null||ur!==Ot(l)||(l=ur,"selectionStart"in l&&Iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Eo(bo,l)||(bo=l,l=vc(Fu,"onSelect"),0<l.length&&(n=new Cl("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=ur)))}function Ns(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var fr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},zu={},rm={};pa&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Ls(t){if(zu[t])return zu[t];if(!fr[t])return t;var n=fr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in rm)return zu[t]=n[s];return t}var om=Ls("animationend"),lm=Ls("animationiteration"),cm=Ls("animationstart"),wS=Ls("transitionrun"),DS=Ls("transitionstart"),NS=Ls("transitioncancel"),um=Ls("transitionend"),fm=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function Hi(t,n){fm.set(t,n),Y(n,[t])}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],dr=0,Gu=0;function Ll(){for(var t=dr,n=Gu=dr=0;n<t;){var s=xi[n];xi[n++]=null;var l=xi[n];xi[n++]=null;var f=xi[n];xi[n++]=null;var h=xi[n];if(xi[n++]=null,l!==null&&f!==null){var x=l.pending;x===null?f.next=f:(f.next=x.next,x.next=f),l.pending=f}h!==0&&dm(s,f,h)}}function Ul(t,n,s,l){xi[dr++]=t,xi[dr++]=n,xi[dr++]=s,xi[dr++]=l,Gu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vu(t,n,s,l){return Ul(t,n,s,l),Ol(t)}function Us(t,n){return Ul(t,null,null,n),Ol(t)}function dm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&n!==null&&(f=31-Ge(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),h):null}function Ol(t){if(50<qo)throw qo=0,Jf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hr={};function LS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,n,s,l){return new LS(t,n,s,l)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var s=t.alternate;return s===null?(s=ui(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function hm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Pl(t,n,s,l,f,h){var x=0;if(l=t,typeof t=="function")ku(t)&&(x=1);else if(typeof t=="string")x=FM(t,s,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ui(31,s,n,f),t.elementType=L,t.lanes=h,t;case w:return Os(s.children,f,h,n);case y:x=8,f|=24;break;case M:return t=ui(12,s,n,f|2),t.elementType=M,t.lanes=h,t;case I:return t=ui(13,s,n,f),t.elementType=I,t.lanes=h,t;case N:return t=ui(19,s,n,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case P:x=9;break e;case C:x=11;break e;case B:x=14;break e;case T:x=16,l=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=ui(x,s,n,f),n.elementType=t,n.type=l,n.lanes=h,n}function Os(t,n,s,l){return t=ui(7,t,l,n),t.lanes=s,t}function Xu(t,n,s){return t=ui(6,t,null,n),t.lanes=s,t}function pm(t){var n=ui(18,null,null,0);return n.stateNode=t,n}function Wu(t,n,s){return n=ui(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var mm=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var s=mm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:It(n)},mm.set(t,n),n)}return{value:t,source:n,stack:It(n)}}var pr=[],mr=0,Il=null,To=0,Mi=[],yi=0,Xa=null,Ji=1,$i="";function ga(t,n){pr[mr++]=To,pr[mr++]=Il,Il=t,To=n}function gm(t,n,s){Mi[yi++]=Ji,Mi[yi++]=$i,Mi[yi++]=Xa,Xa=t;var l=Ji;t=$i;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var h=32-Ge(n)+f;if(30<h){var x=f-f%5;h=(l&(1<<x)-1).toString(32),l>>=x,f-=x,Ji=1<<32-Ge(n)+f|s<<f|l,$i=h+t}else Ji=1<<h|s<<f|l,$i=t}function qu(t){t.return!==null&&(ga(t,1),gm(t,1,0))}function Yu(t){for(;t===Il;)Il=pr[--mr],pr[mr]=null,To=pr[--mr],pr[mr]=null;for(;t===Xa;)Xa=Mi[--yi],Mi[yi]=null,$i=Mi[--yi],Mi[yi]=null,Ji=Mi[--yi],Mi[yi]=null}function _m(t,n){Mi[yi++]=Ji,Mi[yi++]=$i,Mi[yi++]=Xa,Ji=n.id,$i=n.overflow,Xa=t}var Pn=null,$t=null,Et=!1,Wa=null,Ei=!1,ju=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Si(n,t)),ju}function vm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[ln]=t,n[pn]=l,s){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(s=0;s<jo.length;s++)St(jo[s],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Vn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Bi(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Pg(n.textContent,s)?(l.popover!=null&&(St("beforetoggle",n),St("toggle",n)),l.onScroll!=null&&St("scroll",n),l.onScrollEnd!=null&&St("scrollend",n),l.onClick!=null&&(n.onclick=ha),n=!0):n=!1,n||qa(t,!0)}function xm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Pn=Pn.return}}function gr(t){if(t!==Pn)return!1;if(!Et)return xm(t),Et=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||hd(t.type,t.memoizedProps)),s=!s),s&&$t&&qa(t),xm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=Xg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=Xg(t)}else n===27?(n=$t,rs(t.type)?(t=vd,vd=null,$t=t):$t=n):$t=Pn?Ti(t.stateNode.nextSibling):null;return!0}function Ps(){$t=Pn=null,Et=!1}function Zu(){var t=Wa;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Wa=null),t}function Ao(t){Wa===null?Wa=[t]:Wa.push(t)}var Ku=O(null),Is=null,_a=null;function Ya(t,n,s){ye(Ku,n._currentValue),n._currentValue=s}function va(t){t._currentValue=Ku.current,K(Ku)}function Qu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Ju(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var x=f.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=f;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),Qu(h.return,s,t),l||(x=null);break e}h=R.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=s,h=x.alternate,h!==null&&(h.lanes|=s),Qu(x,s,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function _r(t,n,s,l){t=null;for(var f=n,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=f.type;ci(f.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(f===be.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push($o):t=[$o])}f=f.return}t!==null&&Ju(n,t,s,l),n.flags|=262144}function Fl(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fs(t){Is=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return Sm(Is,t)}function Bl(t,n){return Is===null&&Fs(t),Sm(t,n)}function Sm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},_a===null){if(t===null)throw Error(r(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return s}var US=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},OS=a.unstable_scheduleCallback,PS=a.unstable_NormalPriority,Sn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new US,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&OS(PS,function(){t.controller.abort()})}var Co=null,ef=0,vr=0,xr=null;function IS(t,n){if(Co===null){var s=Co=[];ef=0,vr=ad(),xr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ef++,n.then(Mm,Mm),n}function Mm(){if(--ef===0&&Co!==null){xr!==null&&(xr.status="fulfilled");var t=Co;Co=null,vr=0,xr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function FS(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var ym=F.S;F.S=function(t,n){sg=At(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&IS(t,n),ym!==null&&ym(t,n)};var Bs=O(null);function tf(){var t=Bs.current;return t!==null?t:Jt.pooledCache}function zl(t,n){n===null?ye(Bs,Bs.current):ye(Bs,n.pool)}function Em(){var t=tf();return t===null?null:{parent:Sn._currentValue,pool:t}}var Sr=Error(r(460)),nf=Error(r(474)),Hl=Error(r(542)),Gl={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ha,ha),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rm(t),t;default:if(typeof n.status=="string")n.then(ha,ha);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rm(t),t}throw Hs=n,Sr}}function zs(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hs=s,Sr):s}}var Hs=null;function Am(){if(Hs===null)throw Error(r(459));var t=Hs;return Hs=null,t}function Rm(t){if(t===Sr||t===Hl)throw Error(r(483))}var Mr=null,wo=0;function Vl(t){var n=wo;return wo+=1,Mr===null&&(Mr=[]),Tm(Mr,t,n)}function Do(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function kl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cm(t){function n(Q,W){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[W],Q.flags|=16):ie.push(W)}}function s(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function l(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function f(Q,W){return Q=ma(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<W?(Q.flags|=67108866,W):ie):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,ie,Se){return W===null||W.tag!==6?(W=Xu(ie,Q.mode,Se),W.return=Q,W):(W=f(W,ie),W.return=Q,W)}function G(Q,W,ie,Se){var nt=ie.type;return nt===w?ve(Q,W,ie.props.children,Se,ie.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&zs(nt)===W.type)?(W=f(W,ie.props),Do(W,ie),W.return=Q,W):(W=Pl(ie.type,ie.key,ie.props,null,Q.mode,Se),Do(W,ie),W.return=Q,W)}function ae(Q,W,ie,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Wu(ie,Q.mode,Se),W.return=Q,W):(W=f(W,ie.children||[]),W.return=Q,W)}function ve(Q,W,ie,Se,nt){return W===null||W.tag!==7?(W=Os(ie,Q.mode,Se,nt),W.return=Q,W):(W=f(W,ie),W.return=Q,W)}function Ee(Q,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Xu(""+W,Q.mode,ie),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return ie=Pl(W.type,W.key,W.props,null,Q.mode,ie),Do(ie,W),ie.return=Q,ie;case E:return W=Wu(W,Q.mode,ie),W.return=Q,W;case T:return W=zs(W),Ee(Q,W,ie)}if(q(W)||j(W))return W=Os(W,Q.mode,ie,null),W.return=Q,W;if(typeof W.then=="function")return Ee(Q,Vl(W),ie);if(W.$$typeof===z)return Ee(Q,Bl(Q,W),ie);kl(Q,W)}return null}function le(Q,W,ie,Se){var nt=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return nt!==null?null:R(Q,W,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===nt?G(Q,W,ie,Se):null;case E:return ie.key===nt?ae(Q,W,ie,Se):null;case T:return ie=zs(ie),le(Q,W,ie,Se)}if(q(ie)||j(ie))return nt!==null?null:ve(Q,W,ie,Se,null);if(typeof ie.then=="function")return le(Q,W,Vl(ie),Se);if(ie.$$typeof===z)return le(Q,W,Bl(Q,ie),Se);kl(Q,ie)}return null}function de(Q,W,ie,Se,nt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ie)||null,R(W,Q,""+Se,nt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case S:return Q=Q.get(Se.key===null?ie:Se.key)||null,G(W,Q,Se,nt);case E:return Q=Q.get(Se.key===null?ie:Se.key)||null,ae(W,Q,Se,nt);case T:return Se=zs(Se),de(Q,W,ie,Se,nt)}if(q(Se)||j(Se))return Q=Q.get(ie)||null,ve(W,Q,Se,nt,null);if(typeof Se.then=="function")return de(Q,W,ie,Vl(Se),nt);if(Se.$$typeof===z)return de(Q,W,ie,Bl(W,Se),nt);kl(W,Se)}return null}function Ke(Q,W,ie,Se){for(var nt=null,wt=null,$e=W,ft=W=0,yt=null;$e!==null&&ft<ie.length;ft++){$e.index>ft?(yt=$e,$e=null):yt=$e.sibling;var Dt=le(Q,$e,ie[ft],Se);if(Dt===null){$e===null&&($e=yt);break}t&&$e&&Dt.alternate===null&&n(Q,$e),W=h(Dt,W,ft),wt===null?nt=Dt:wt.sibling=Dt,wt=Dt,$e=yt}if(ft===ie.length)return s(Q,$e),Et&&ga(Q,ft),nt;if($e===null){for(;ft<ie.length;ft++)$e=Ee(Q,ie[ft],Se),$e!==null&&(W=h($e,W,ft),wt===null?nt=$e:wt.sibling=$e,wt=$e);return Et&&ga(Q,ft),nt}for($e=l($e);ft<ie.length;ft++)yt=de($e,Q,ft,ie[ft],Se),yt!==null&&(t&&yt.alternate!==null&&$e.delete(yt.key===null?ft:yt.key),W=h(yt,W,ft),wt===null?nt=yt:wt.sibling=yt,wt=yt);return t&&$e.forEach(function(fs){return n(Q,fs)}),Et&&ga(Q,ft),nt}function at(Q,W,ie,Se){if(ie==null)throw Error(r(151));for(var nt=null,wt=null,$e=W,ft=W=0,yt=null,Dt=ie.next();$e!==null&&!Dt.done;ft++,Dt=ie.next()){$e.index>ft?(yt=$e,$e=null):yt=$e.sibling;var fs=le(Q,$e,Dt.value,Se);if(fs===null){$e===null&&($e=yt);break}t&&$e&&fs.alternate===null&&n(Q,$e),W=h(fs,W,ft),wt===null?nt=fs:wt.sibling=fs,wt=fs,$e=yt}if(Dt.done)return s(Q,$e),Et&&ga(Q,ft),nt;if($e===null){for(;!Dt.done;ft++,Dt=ie.next())Dt=Ee(Q,Dt.value,Se),Dt!==null&&(W=h(Dt,W,ft),wt===null?nt=Dt:wt.sibling=Dt,wt=Dt);return Et&&ga(Q,ft),nt}for($e=l($e);!Dt.done;ft++,Dt=ie.next())Dt=de($e,Q,ft,Dt.value,Se),Dt!==null&&(t&&Dt.alternate!==null&&$e.delete(Dt.key===null?ft:Dt.key),W=h(Dt,W,ft),wt===null?nt=Dt:wt.sibling=Dt,wt=Dt);return t&&$e.forEach(function(jM){return n(Q,jM)}),Et&&ga(Q,ft),nt}function Kt(Q,W,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===w&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var nt=ie.key;W!==null;){if(W.key===nt){if(nt=ie.type,nt===w){if(W.tag===7){s(Q,W.sibling),Se=f(W,ie.props.children),Se.return=Q,Q=Se;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&zs(nt)===W.type){s(Q,W.sibling),Se=f(W,ie.props),Do(Se,ie),Se.return=Q,Q=Se;break e}s(Q,W);break}else n(Q,W);W=W.sibling}ie.type===w?(Se=Os(ie.props.children,Q.mode,Se,ie.key),Se.return=Q,Q=Se):(Se=Pl(ie.type,ie.key,ie.props,null,Q.mode,Se),Do(Se,ie),Se.return=Q,Q=Se)}return x(Q);case E:e:{for(nt=ie.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){s(Q,W.sibling),Se=f(W,ie.children||[]),Se.return=Q,Q=Se;break e}else{s(Q,W);break}else n(Q,W);W=W.sibling}Se=Wu(ie,Q.mode,Se),Se.return=Q,Q=Se}return x(Q);case T:return ie=zs(ie),Kt(Q,W,ie,Se)}if(q(ie))return Ke(Q,W,ie,Se);if(j(ie)){if(nt=j(ie),typeof nt!="function")throw Error(r(150));return ie=nt.call(ie),at(Q,W,ie,Se)}if(typeof ie.then=="function")return Kt(Q,W,Vl(ie),Se);if(ie.$$typeof===z)return Kt(Q,W,Bl(Q,ie),Se);kl(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(s(Q,W.sibling),Se=f(W,ie),Se.return=Q,Q=Se):(s(Q,W),Se=Xu(ie,Q.mode,Se),Se.return=Q,Q=Se),x(Q)):s(Q,W)}return function(Q,W,ie,Se){try{wo=0;var nt=Kt(Q,W,ie,Se);return Mr=null,nt}catch($e){if($e===Sr||$e===Hl)throw $e;var wt=ui(29,$e,null,Q.mode);return wt.lanes=Se,wt.return=Q,wt}finally{}}}var Gs=Cm(!0),wm=Cm(!1),ja=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Pt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Ol(t),dm(t,null,s),n}return Ul(t,l,n,s),Ol(t)}function No(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,xn(t,s)}}function rf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=x:h=h.next=x,s=s.next}while(s!==null);h===null?f=h=n:h=h.next=n}else f=h=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var of=!1;function Lo(){if(of){var t=xr;if(t!==null)throw t}}function Uo(t,n,s,l){of=!1;var f=t.updateQueue;ja=!1;var h=f.firstBaseUpdate,x=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var G=R,ae=G.next;G.next=null,x===null?h=ae:x.next=ae,x=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==x&&(R===null?ve.firstBaseUpdate=ae:R.next=ae,ve.lastBaseUpdate=G))}if(h!==null){var Ee=f.baseState;x=0,ve=ae=G=null,R=h;do{var le=R.lane&-536870913,de=le!==R.lane;if(de?(Mt&le)===le:(l&le)===le){le!==0&&le===vr&&(of=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ke=t,at=R;le=n;var Kt=s;switch(at.tag){case 1:if(Ke=at.payload,typeof Ke=="function"){Ee=Ke.call(Kt,Ee,le);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=at.payload,le=typeof Ke=="function"?Ke.call(Kt,Ee,le):Ke,le==null)break e;Ee=_({},Ee,le);break e;case 2:ja=!0}}le=R.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(ae=ve=de,G=Ee):ve=ve.next=de,x|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;de=R,R=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ve===null&&(G=Ee),f.baseState=G,f.firstBaseUpdate=ae,f.lastBaseUpdate=ve,h===null&&(f.shared.lanes=0),ts|=x,t.lanes=x,t.memoizedState=Ee}}function Dm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Nm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Dm(s[t],n)}var yr=O(null),Xl=O(0);function Lm(t,n){t=Ra,ye(Xl,t),ye(yr,n),Ra=t|n.baseLanes}function lf(){ye(Xl,Ra),ye(yr,yr.current)}function cf(){Ra=Xl.current,K(yr),K(Xl)}var fi=O(null),bi=null;function Qa(t){var n=t.alternate;ye(mn,mn.current&1),ye(fi,t),bi===null&&(n===null||yr.current!==null||n.memoizedState!==null)&&(bi=t)}function uf(t){ye(mn,mn.current),ye(fi,t),bi===null&&(bi=t)}function Um(t){t.tag===22?(ye(mn,mn.current),ye(fi,t),bi===null&&(bi=t)):Ja()}function Ja(){ye(mn,mn.current),ye(fi,fi.current)}function di(t){K(fi),bi===t&&(bi=null),K(mn)}var mn=O(0);function Wl(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||gd(s)||_d(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ut=null,jt=null,Mn=null,ql=!1,Er=!1,Vs=!1,Yl=0,Oo=0,br=null,BS=0;function cn(){throw Error(r(321))}function ff(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!ci(t[s],n[s]))return!1;return!0}function df(t,n,s,l,f,h){return xa=h,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?g0:Rf,Vs=!1,h=s(l,f),Vs=!1,Er&&(h=Pm(n,s,l,f)),Om(t),h}function Om(t){F.H=Fo;var n=jt!==null&&jt.next!==null;if(xa=0,Mn=jt=ut=null,ql=!1,Oo=0,br=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Fl(t)&&(yn=!0))}function Pm(t,n,s,l){ut=t;var f=0;do{if(Er&&(br=null),Oo=0,Er=!1,25<=f)throw Error(r(301));if(f+=1,Mn=jt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=_0,h=n(s,l)}while(Er);return h}function zS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Po(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ut.flags|=1024),n}function hf(){var t=Yl!==0;return Yl=0,t}function pf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function mf(t){if(ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ql=!1}xa=0,Mn=jt=ut=null,Er=!1,Oo=Yl=0,br=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?ut.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function gn(){if(jt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=Mn===null?ut.memoizedState:Mn.next;if(n!==null)Mn=n,jt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Mn===null?ut.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(t){var n=Oo;return Oo+=1,br===null&&(br=[]),t=Tm(br,t,n),n=ut,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?g0:Rf),t}function Zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Po(t);if(t.$$typeof===z)return In(t)}throw Error(r(438,String(t)))}function gf(t){var n=null,s=ut.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=jl(),ut.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function Sa(t,n){return typeof n=="function"?n(t):n}function Kl(t){var n=gn();return _f(n,jt,t)}function _f(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var x=f.next;f.next=h.next,h.next=x}n.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{n=f.next;var R=x=null,G=null,ae=n,ve=!1;do{var Ee=ae.lane&-536870913;if(Ee!==ae.lane?(Mt&Ee)===Ee:(xa&Ee)===Ee){var le=ae.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ee===vr&&(ve=!0);else if((xa&le)===le){ae=ae.next,le===vr&&(ve=!0);continue}else Ee={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=Ee,x=h):G=G.next=Ee,ut.lanes|=le,ts|=le;Ee=ae.action,Vs&&s(h,Ee),h=ae.hasEagerState?ae.eagerState:s(h,Ee)}else le={lane:Ee,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=le,x=h):G=G.next=le,ut.lanes|=Ee,ts|=Ee;ae=ae.next}while(ae!==null&&ae!==n);if(G===null?x=h:G.next=R,!ci(h,t.memoizedState)&&(yn=!0,ve&&(s=xr,s!==null)))throw s;t.memoizedState=h,t.baseState=x,t.baseQueue=G,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function vf(t){var n=gn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=n.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do h=t(h,x.action),x=x.next;while(x!==f);ci(h,n.memoizedState)||(yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),s.lastRenderedState=h}return[h,l]}function Im(t,n,s){var l=ut,f=gn(),h=Et;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=n();var x=!ci((jt||f).memoizedState,s);if(x&&(f.memoizedState=s,yn=!0),f=f.queue,Mf(zm.bind(null,l,f,t),[t]),f.getSnapshot!==n||x||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Tr(9,{destroy:void 0},Bm.bind(null,l,f,s,n),null),Jt===null)throw Error(r(349));h||(xa&127)!==0||Fm(l,n,s)}return s}function Fm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ut.updateQueue,n===null?(n=jl(),ut.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Bm(t,n,s,l){n.value=s,n.getSnapshot=l,Hm(n)&&Gm(t)}function zm(t,n,s){return s(function(){Hm(n)&&Gm(t)})}function Hm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!ci(t,s)}catch{return!0}}function Gm(t){var n=Us(t,2);n!==null&&ii(n,t,2)}function xf(t){var n=Yn();if(typeof t=="function"){var s=t;if(t=s(),Vs){Ne(!0);try{s()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function Vm(t,n,s,l){return t.baseState=s,_f(t,jt,typeof l=="function"?l:Sa)}function HS(t,n,s,l,f){if($l(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};F.T!==null?s(!0):h.isTransition=!1,l(h),s=n.pending,s===null?(h.next=n.pending=h,km(n,h)):(h.next=s.next,n.pending=s.next=h)}}function km(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var h=F.T,x={};F.T=x;try{var R=s(f,l),G=F.S;G!==null&&G(x,R),Xm(t,n,R)}catch(ae){Sf(t,n,ae)}finally{h!==null&&x.types!==null&&(h.types=x.types),F.T=h}}else try{h=s(f,l),Xm(t,n,h)}catch(ae){Sf(t,n,ae)}}function Xm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Wm(t,n,l)},function(l){return Sf(t,n,l)}):Wm(t,n,s)}function Wm(t,n,s){n.status="fulfilled",n.value=s,qm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,km(t,s)))}function Sf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,qm(n),n=n.next;while(n!==l)}t.action=null}function qm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ym(t,n){return n}function jm(t,n){if(Et){var s=Jt.formState;if(s!==null){e:{var l=ut;if(Et){if($t){t:{for(var f=$t,h=Ei;f.nodeType!==8;){if(!h){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){$t=Ti(f.nextSibling),l=f.data==="F!";break e}}qa(l)}l=!1}l&&(n=s[0])}}return s=Yn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:n},s.queue=l,s=h0.bind(null,ut,l),l.dispatch=s,l=xf(!1),h=Af.bind(null,ut,!1,l.queue),l=Yn(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=HS.bind(null,ut,f,h,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function Zm(t){var n=gn();return Km(n,jt,t)}function Km(t,n,s){if(n=_f(t,n,Ym)[0],t=Kl(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Po(n)}catch(x){throw x===Sr?Hl:x}else l=n;n=gn();var f=n.queue,h=f.dispatch;return s!==n.memoizedState&&(ut.flags|=2048,Tr(9,{destroy:void 0},GS.bind(null,f,s),null)),[l,h,t]}function GS(t,n){t.action=n}function Qm(t){var n=gn(),s=jt;if(s!==null)return Km(n,s,t);gn(),n=n.memoizedState,s=gn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Tr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=ut.updateQueue,n===null&&(n=jl(),ut.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function Jm(){return gn().memoizedState}function Ql(t,n,s,l){var f=Yn();ut.flags|=t,f.memoizedState=Tr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Jl(t,n,s,l){var f=gn();l=l===void 0?null:l;var h=f.memoizedState.inst;jt!==null&&l!==null&&ff(l,jt.memoizedState.deps)?f.memoizedState=Tr(n,h,s,l):(ut.flags|=t,f.memoizedState=Tr(1|n,h,s,l))}function $m(t,n){Ql(8390656,8,t,n)}function Mf(t,n){Jl(2048,8,t,n)}function VS(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=jl(),ut.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function e0(t){var n=gn().memoizedState;return VS({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function t0(t,n){return Jl(4,2,t,n)}function n0(t,n){return Jl(4,4,t,n)}function i0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function a0(t,n,s){s=s!=null?s.concat([t]):null,Jl(4,4,i0.bind(null,n,t),s)}function yf(){}function s0(t,n){var s=gn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&ff(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function r0(t,n){var s=gn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&ff(n,l[1]))return l[0];if(l=t(),Vs){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,n],l}function Ef(t,n,s){return s===void 0||(xa&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=og(),ut.lanes|=t,ts|=t,s)}function o0(t,n,s,l){return ci(s,n)?s:yr.current!==null?(t=Ef(t,s,l),ci(t,n)||(yn=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(Mt&261930)===0?(yn=!0,t.memoizedState=s):(t=og(),ut.lanes|=t,ts|=t,n)}function l0(t,n,s,l,f){var h=H.p;H.p=h!==0&&8>h?h:8;var x=F.T,R={};F.T=R,Af(t,!1,n,s);try{var G=f(),ae=F.S;if(ae!==null&&ae(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=FS(G,l);Io(t,n,ve,mi(t))}else Io(t,n,l,mi(t))}catch(Ee){Io(t,n,{then:function(){},status:"rejected",reason:Ee},mi())}finally{H.p=h,x!==null&&R.types!==null&&(x.types=R.types),F.T=x}}function kS(){}function bf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=c0(t).queue;l0(t,f,n,$,s===null?kS:function(){return u0(t),s(l)})}function c0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function u0(t){var n=c0(t);n.next===null&&(n=t.alternate.memoizedState),Io(t,n.next.queue,{},mi())}function Tf(){return In($o)}function f0(){return gn().memoizedState}function d0(){return gn().memoizedState}function XS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=mi();t=Za(s);var l=Ka(n,t,s);l!==null&&(ii(l,n,s),No(l,n,s)),n={cache:$u()},t.payload=n;return}n=n.return}}function WS(t,n,s){var l=mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},$l(t)?p0(n,s):(s=Vu(t,n,s,l),s!==null&&(ii(s,t,l),m0(s,n,l)))}function h0(t,n,s){var l=mi();Io(t,n,s,l)}function Io(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if($l(t))p0(n,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,R=h(x,s);if(f.hasEagerState=!0,f.eagerState=R,ci(R,x))return Ul(t,n,f,0),Jt===null&&Ll(),!1}catch{}finally{}if(s=Vu(t,n,f,l),s!==null)return ii(s,t,l),m0(s,n,l),!0}return!1}function Af(t,n,s,l){if(l={lane:2,revertLane:ad(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(n)throw Error(r(479))}else n=Vu(t,s,l,2),n!==null&&ii(n,t,2)}function $l(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function p0(t,n){Er=ql=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function m0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,xn(t,s)}}var Fo={readContext:In,use:Zl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Fo.useEffectEvent=cn;var g0={readContext:In,use:Zl,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:$m,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Ql(4194308,4,i0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Ql(4194308,4,t,n)},useInsertionEffect:function(t,n){Ql(4,2,t,n)},useMemo:function(t,n){var s=Yn();n=n===void 0?null:n;var l=t();if(Vs){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=Yn();if(s!==void 0){var f=s(n);if(Vs){Ne(!0);try{s(n)}finally{Ne(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=WS.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,s=h0.bind(null,ut,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:yf,useDeferredValue:function(t,n){var s=Yn();return Ef(s,t,n)},useTransition:function(){var t=xf(!1);return t=l0.bind(null,ut,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=ut,f=Yn();if(Et){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Jt===null)throw Error(r(349));(Mt&127)!==0||Fm(l,n,s)}f.memoizedState=s;var h={value:s,getSnapshot:n};return f.queue=h,$m(zm.bind(null,l,h,t),[t]),l.flags|=2048,Tr(9,{destroy:void 0},Bm.bind(null,l,h,s,n),null),s},useId:function(){var t=Yn(),n=Jt.identifierPrefix;if(Et){var s=$i,l=Ji;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Yl++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=BS++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Tf,useFormState:jm,useActionState:jm,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Af.bind(null,ut,!0,s),s.dispatch=n,[t,n]},useMemoCache:gf,useCacheRefresh:function(){return Yn().memoizedState=XS.bind(null,ut)},useEffectEvent:function(t){var n=Yn(),s={impl:t};return n.memoizedState=s,function(){if((Pt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Rf={readContext:In,use:Zl,useCallback:s0,useContext:In,useEffect:Mf,useImperativeHandle:a0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:r0,useReducer:Kl,useRef:Jm,useState:function(){return Kl(Sa)},useDebugValue:yf,useDeferredValue:function(t,n){var s=gn();return o0(s,jt.memoizedState,t,n)},useTransition:function(){var t=Kl(Sa)[0],n=gn().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:Im,useId:f0,useHostTransitionStatus:Tf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var s=gn();return Vm(s,jt,t,n)},useMemoCache:gf,useCacheRefresh:d0};Rf.useEffectEvent=e0;var _0={readContext:In,use:Zl,useCallback:s0,useContext:In,useEffect:Mf,useImperativeHandle:a0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:r0,useReducer:vf,useRef:Jm,useState:function(){return vf(Sa)},useDebugValue:yf,useDeferredValue:function(t,n){var s=gn();return jt===null?Ef(s,t,n):o0(s,jt.memoizedState,t,n)},useTransition:function(){var t=vf(Sa)[0],n=gn().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:Im,useId:f0,useHostTransitionStatus:Tf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t,n){var s=gn();return jt!==null?Vm(s,jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:gf,useCacheRefresh:d0};_0.useEffectEvent=e0;function Cf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=mi(),f=Za(l);f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ii(n,t,l),No(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=mi(),f=Za(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ii(n,t,l),No(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=mi(),l=Za(s);l.tag=2,n!=null&&(l.callback=n),n=Ka(t,l,s),n!==null&&(ii(n,t,s),No(n,t,s))}};function v0(t,n,s,l,f,h,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,x):n.prototype&&n.prototype.isPureReactComponent?!Eo(s,l)||!Eo(f,h):!0}function x0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function ks(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function S0(t){Nl(t)}function M0(t){console.error(t)}function y0(t){Nl(t)}function ec(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function E0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Df(t,n,s){return s=Za(s),s.tag=3,s.payload={element:null},s.callback=function(){ec(t,n)},s}function b0(t){return t=Za(t),t.tag=3,t}function T0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){E0(n,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){E0(n,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function qS(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&_r(n,s,f,!0),s=fi.current,s!==null){switch(s.tag){case 31:case 13:return bi===null?dc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Gl?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),td(t,l,f)),!1;case 22:return s.flags|=65536,l===Gl?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),td(t,l,f)),!1}throw Error(r(435,s.tag))}return td(t,l,f),dc(),!1}if(Et)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==ju&&(t=Error(r(422),{cause:l}),Ao(Si(t,s)))):(l!==ju&&(n=Error(r(423),{cause:l}),Ao(Si(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Si(l,s),f=Df(t.stateNode,l,f),rf(t,f),un!==4&&(un=2)),!1;var h=Error(r(520),{cause:l});if(h=Si(h,s),Wo===null?Wo=[h]:Wo.push(h),un!==4&&(un=2),n===null)return!0;l=Si(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Df(s.stateNode,l,t),rf(s,t),!1;case 1:if(n=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ns===null||!ns.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=b0(f),T0(f,t,s,l),rf(s,f),!1}s=s.return}while(s!==null);return!1}var Nf=Error(r(461)),yn=!1;function Fn(t,n,s,l){n.child=t===null?wm(n,null,s,l):Gs(n,t.child,s,l)}function A0(t,n,s,l,f){s=s.render;var h=n.ref;if("ref"in l){var x={};for(var R in l)R!=="ref"&&(x[R]=l[R])}else x=l;return Fs(n),l=df(t,n,s,x,h,f),R=hf(),t!==null&&!yn?(pf(t,n,f),Ma(t,n,f)):(Et&&R&&qu(n),n.flags|=1,Fn(t,n,l,f),n.child)}function R0(t,n,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!ku(h)&&h.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=h,C0(t,n,h,l,f)):(t=Pl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!zf(t,f)){var x=h.memoizedProps;if(s=s.compare,s=s!==null?s:Eo,s(x,l)&&t.ref===n.ref)return Ma(t,n,f)}return n.flags|=1,t=ma(h,l),t.ref=n.ref,t.return=n,n.child=t}function C0(t,n,s,l,f){if(t!==null){var h=t.memoizedProps;if(Eo(h,l)&&t.ref===n.ref)if(yn=!1,n.pendingProps=l=h,zf(t,f))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,Ma(t,n,f)}return Lf(t,n,s,l,f)}function w0(t,n,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,n.child=null;return D0(t,n,h,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(n,h!==null?h.cachePool:null),h!==null?Lm(n,h):lf(),Um(n);else return l=n.lanes=536870912,D0(t,n,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(zl(n,h.cachePool),Lm(n,h),Ja(),n.memoizedState=null):(t!==null&&zl(n,null),lf(),Ja());return Fn(t,n,f,s),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function D0(t,n,s,l,f){var h=tf();return h=h===null?null:{parent:Sn._currentValue,pool:h},n.memoizedState={baseLanes:s,cachePool:h},t!==null&&zl(n,null),lf(),Um(n),t!==null&&_r(t,n,l,!0),n.childLanes=f,null}function tc(t,n){return n=ic({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function N0(t,n,s){return Gs(n,t.child,null,s),t=tc(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function YS(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(l.mode==="hidden")return t=tc(n,l),n.lanes=536870912,Bo(null,t);if(uf(n),(t=$t)?(t=kg(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},s=pm(t),s.return=n,n.child=s,Pn=n,$t=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return tc(n,l)}var h=t.memoizedState;if(h!==null){var x=h.dehydrated;if(uf(n),f)if(n.flags&256)n.flags&=-257,n=N0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||_r(t,n,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=Jt,l!==null&&(x=hn(l,s),x!==0&&x!==h.retryLane))throw h.retryLane=x,Us(t,x),ii(l,t,x),Nf;dc(),n=N0(t,n,s)}else t=h.treeContext,$t=Ti(x.nextSibling),Pn=n,Et=!0,Wa=null,Ei=!1,t!==null&&_m(n,t),n=tc(n,l),n.flags|=4096;return n}return t=ma(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function nc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Lf(t,n,s,l,f){return Fs(n),s=df(t,n,s,l,void 0,f),l=hf(),t!==null&&!yn?(pf(t,n,f),Ma(t,n,f)):(Et&&l&&qu(n),n.flags|=1,Fn(t,n,s,f),n.child)}function L0(t,n,s,l,f,h){return Fs(n),n.updateQueue=null,s=Pm(n,l,s,f),Om(t),l=hf(),t!==null&&!yn?(pf(t,n,h),Ma(t,n,h)):(Et&&l&&qu(n),n.flags|=1,Fn(t,n,s,h),n.child)}function U0(t,n,s,l,f){if(Fs(n),n.stateNode===null){var h=hr,x=s.contextType;typeof x=="object"&&x!==null&&(h=In(x)),h=new s(l,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=l,h.state=n.memoizedState,h.refs={},af(n),x=s.contextType,h.context=typeof x=="object"&&x!==null?In(x):hr,h.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Cf(n,s,x,l),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&wf.enqueueReplaceState(h,h.state,null),Uo(n,l,h,f),Lo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,G=ks(s,R);h.props=G;var ae=h.context,ve=s.contextType;x=hr,typeof ve=="object"&&ve!==null&&(x=In(ve));var Ee=s.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ae!==x)&&x0(n,h,l,x),ja=!1;var le=n.memoizedState;h.state=le,Uo(n,l,h,f),Lo(),ae=n.memoizedState,R||le!==ae||ja?(typeof Ee=="function"&&(Cf(n,s,Ee,l),ae=n.memoizedState),(G=ja||v0(n,s,G,l,le,ae,x))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ae),h.props=l,h.state=ae,h.context=x,l=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{h=n.stateNode,sf(t,n),x=n.memoizedProps,ve=ks(s,x),h.props=ve,Ee=n.pendingProps,le=h.context,ae=s.contextType,G=hr,typeof ae=="object"&&ae!==null&&(G=In(ae)),R=s.getDerivedStateFromProps,(ae=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==Ee||le!==G)&&x0(n,h,l,G),ja=!1,le=n.memoizedState,h.state=le,Uo(n,l,h,f),Lo();var de=n.memoizedState;x!==Ee||le!==de||ja||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof R=="function"&&(Cf(n,s,R,l),de=n.memoizedState),(ve=ja||v0(n,s,ve,l,le,de,G)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(ae||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),h.props=l,h.state=de,h.context=G,l=ve):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return h=l,nc(t,n),l=(n.flags&128)!==0,h||l?(h=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&l?(n.child=Gs(n,t.child,null,f),n.child=Gs(n,null,s,f)):Fn(t,n,s,f),n.memoizedState=h.state,t=n.child):t=Ma(t,n,f),t}function O0(t,n,s,l){return Ps(),n.flags|=256,Fn(t,n,s,l),n.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(t){return{baseLanes:t,cachePool:Em()}}function Pf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=pi),t}function P0(t,n,s){var l=n.pendingProps,f=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(f?Qa(n):Ja(),(t=$t)?(t=kg(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},s=pm(t),s.return=n,n.child=s,Pn=n,$t=null)):t=null,t===null)throw qa(n);return _d(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ja(),f=n.mode,R=ic({mode:"hidden",children:R},f),l=Os(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=Of(s),l.childLanes=Pf(t,x,s),n.memoizedState=Uf,Bo(null,l)):(Qa(n),If(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(Qa(n),n.flags&=-257,n=Ff(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=l.fallback,f=n.mode,l=ic({mode:"visible",children:l.children},f),R=Os(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,Gs(n,t.child,null,s),l=n.child,l.memoizedState=Of(s),l.childLanes=Pf(t,x,s),n.memoizedState=Uf,n=Bo(null,l));else if(Qa(n),_d(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ae=x.dgst;x=ae,l=Error(r(419)),l.stack="",l.digest=x,Ao({value:l,source:null,stack:null}),n=Ff(t,n,s)}else if(yn||_r(t,n,s,!1),x=(s&t.childLanes)!==0,yn||x){if(x=Jt,x!==null&&(l=hn(x,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Us(t,l),ii(x,t,l),Nf;gd(R)||dc(),n=Ff(t,n,s)}else gd(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,$t=Ti(R.nextSibling),Pn=n,Et=!0,Wa=null,Ei=!1,t!==null&&_m(n,t),n=If(n,l.children),n.flags|=4096);return n}return f?(Ja(),R=l.fallback,f=n.mode,G=t.child,ae=G.sibling,l=ma(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ae!==null?R=ma(ae,R):(R=Os(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,Bo(null,l),l=n.child,R=t.child.memoizedState,R===null?R=Of(s):(f=R.cachePool,f!==null?(G=Sn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Em(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Pf(t,x,s),n.memoizedState=Uf,Bo(t.child,l)):(Qa(n),s=t.child,t=s.sibling,s=ma(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function If(t,n){return n=ic({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ic(t,n){return t=ui(22,t,null,n),t.lanes=0,t}function Ff(t,n,s){return Gs(n,t.child,null,s),t=If(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function I0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Qu(t.return,n,s)}function Bf(t,n,s,l,f,h){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=f,x.treeForkCount=h)}function F0(t,n,s){var l=n.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var x=mn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,ye(mn,x),Fn(t,n,l,s),l=Et?To:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I0(t,s,n);else if(t.tag===19)I0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Wl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Bf(n,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Wl(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Bf(n,!0,s,null,h,l);break;case"together":Bf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ma(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(_r(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=ma(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ma(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function jS(t,n,s){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ya(n,Sn,t.memoizedState.cache),Ps();break;case 27:case 5:it(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?P0(t,n,s):(Qa(n),t=Ma(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(_r(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return F0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(mn,mn.current),l)break;return null;case 22:return n.lanes=0,w0(t,n,s,n.pendingProps);case 24:Ya(n,Sn,t.memoizedState.cache)}return Ma(t,n,s)}function B0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!zf(t,s)&&(n.flags&128)===0)return yn=!1,jS(t,n,s);yn=(t.flags&131072)!==0}else yn=!1,Et&&(n.flags&1048576)!==0&&gm(n,To,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=zs(n.elementType),n.type=t,typeof t=="function")ku(t)?(l=ks(t,l),n.tag=1,n=U0(null,n,t,l,s)):(n.tag=0,n=Lf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=A0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=R0(null,n,t,l,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return Lf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=ks(l,n.pendingProps),U0(t,n,l,f,s);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var h=n.memoizedState;f=h.element,sf(t,n),Uo(n,l,null,s);var x=n.memoizedState;if(l=x.cache,Ya(n,Sn,l),l!==h.cache&&Ju(n,[Sn],s,!0),Lo(),l=x.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=O0(t,n,l,s);break e}else if(l!==f){f=Si(Error(r(424)),n),Ao(f),n=O0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Ti(t.firstChild),Pn=n,Et=!0,Wa=null,Ei=!0,s=wm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ps(),l===f){n=Ma(t,n,s);break e}Fn(t,n,l,s)}n=n.child}return n;case 26:return nc(t,n),t===null?(s=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=s:Et||(s=n.type,t=n.pendingProps,l=xc(se.current).createElement(s),l[ln]=n,l[pn]=t,Bn(l,s,t),sn(l),n.stateNode=l):n.memoizedState=Zg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Et&&(l=n.stateNode=qg(n.type,n.pendingProps,se.current),Pn=n,Ei=!0,f=$t,rs(n.type)?(vd=f,$t=Ti(l.firstChild)):$t=f),Fn(t,n,n.pendingProps.children,s),nc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((f=l=$t)&&(l=bM(l,n.type,n.pendingProps,Ei),l!==null?(n.stateNode=l,Pn=n,$t=Ti(l.firstChild),Ei=!1,f=!0):f=!1),f||qa(n)),it(n),f=n.type,h=n.pendingProps,x=t!==null?t.memoizedProps:null,l=h.children,hd(f,h)?l=null:x!==null&&hd(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=df(t,n,zS,null,null,s),$o._currentValue=f),nc(t,n),Fn(t,n,l,s),n.child;case 6:return t===null&&Et&&((t=s=$t)&&(s=TM(s,n.pendingProps,Ei),s!==null?(n.stateNode=s,Pn=n,$t=null,t=!0):t=!1),t||qa(n)),null;case 13:return P0(t,n,s);case 4:return Te(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Gs(n,null,l,s):Fn(t,n,l,s),n.child;case 11:return A0(t,n,n.type,n.pendingProps,s);case 7:return Fn(t,n,n.pendingProps,s),n.child;case 8:return Fn(t,n,n.pendingProps.children,s),n.child;case 12:return Fn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ya(n,n.type,l.value),Fn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,Fs(n),f=In(f),l=l(f),n.flags|=1,Fn(t,n,l,s),n.child;case 14:return R0(t,n,n.type,n.pendingProps,s);case 15:return C0(t,n,n.type,n.pendingProps,s);case 19:return F0(t,n,s);case 31:return YS(t,n,s);case 22:return w0(t,n,s,n.pendingProps);case 24:return Fs(n),l=In(Sn),t===null?(f=tf(),f===null&&(f=Jt,h=$u(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),n.memoizedState={parent:l,cache:f},af(n),Ya(n,Sn,f)):((t.lanes&s)!==0&&(sf(t,n),Uo(n,null,null,s),Lo()),f=t.memoizedState,h=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ya(n,Sn,l)):(l=h.cache,Ya(n,Sn,l),l!==f.cache&&Ju(n,[Sn],s,!0))),Fn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function Hf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(fg())t.flags|=8192;else throw Hs=Gl,nf}else t.flags&=-16777217}function z0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e_(n))if(fg())t.flags|=8192;else throw Hs=Gl,nf}function ac(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?xe():536870912,t.lanes|=n,wr|=n)}function zo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function ZS(t,n,s){var l=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),va(Sn),We(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(gr(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),en(n),null;case 26:var f=n.type,h=n.memoizedState;return t===null?(ya(n),h!==null?(en(n),z0(n,h)):(en(n),Hf(n,f,null,l,s))):h?h!==t.memoizedState?(ya(n),en(n),z0(n,h)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(n),en(n),Hf(n,f,t,l,s)),null;case 27:if(et(n),s=se.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ya(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=we.current,gr(n)?vm(n):(t=qg(f,l,s),n.stateNode=t,ya(n))}return en(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ya(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(h=we.current,gr(n))vm(n);else{var x=xc(se.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?x.createElement(f,{is:l.is}):x.createElement(f)}}h[ln]=n,h[pn]=l;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;e:switch(Bn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(n)}}return en(n),Hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&ya(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,gr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ln]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Pg(t.nodeValue,s)),t||qa(n,!0)}else t=xc(t).createTextNode(l),t[ln]=n,n.stateNode=t}return en(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=gr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else s=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=gr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),f=!1}else f=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),ac(n,n.updateQueue),en(n),null);case 4:return We(),t===null&&ld(n.stateNode.containerInfo),en(n),null;case 10:return va(n.type),en(n),null;case 19:if(K(mn),l=n.memoizedState,l===null)return en(n),null;if(f=(n.flags&128)!==0,h=l.rendering,h===null)if(f)zo(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Wl(t),h!==null){for(n.flags|=128,zo(l,!1),t=h.updateQueue,n.updateQueue=t,ac(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)hm(s,t),s=s.sibling;return ye(mn,mn.current&1|2),Et&&ga(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&At()>cc&&(n.flags|=128,f=!0,zo(l,!1),n.lanes=4194304)}else{if(!f)if(t=Wl(h),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,ac(n,t),zo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Et)return en(n),null}else 2*At()-l.renderingStartTime>cc&&s!==536870912&&(n.flags|=128,f=!0,zo(l,!1),n.lanes=4194304);l.isBackwards?(h.sibling=n.child,n.child=h):(t=l.last,t!==null?t.sibling=h:n.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=At(),t.sibling=null,s=mn.current,ye(mn,f?s&1|2:s&1),Et&&ga(n,l.treeForkCount),t):(en(n),null);case 22:case 23:return di(n),cf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),s=n.updateQueue,s!==null&&ac(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(Bs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),va(Sn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function KS(t,n){switch(Yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return va(Sn),We(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(r(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(mn),null;case 4:return We(),null;case 10:return va(n.type),null;case 22:case 23:return di(n),cf(),t!==null&&K(Bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return va(Sn),null;case 25:return null;default:return null}}function H0(t,n){switch(Yu(n),n.tag){case 3:va(Sn),We();break;case 26:case 27:case 5:et(n);break;case 4:We();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:K(mn);break;case 10:va(n.type);break;case 22:case 23:di(n),cf(),t!==null&&K(Bs);break;case 24:va(Sn)}}function Ho(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,x=s.inst;l=h(),x.destroy=l}s=s.next}while(s!==f)}}catch(R){kt(n,n.return,R)}}function $a(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var x=l.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,f=n;var G=s,ae=R;try{ae()}catch(ve){kt(f,G,ve)}}}l=l.next}while(l!==h)}}catch(ve){kt(n,n.return,ve)}}function G0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Nm(n,s)}catch(l){kt(t,t.return,l)}}}function V0(t,n,s){s.props=ks(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){kt(t,n,l)}}function Go(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){kt(t,n,f)}}function ea(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){kt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){kt(t,n,f)}else s.current=null}function k0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){kt(t,t.return,f)}}function Gf(t,n,s){try{var l=t.stateNode;vM(l,t.type,s,n),l[pn]=n}catch(f){kt(t,t.return,f)}}function X0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function Vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ha));else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(kf(t,n,s),t=t.sibling;t!==null;)kf(t,n,s),t=t.sibling}function sc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(sc(t,n,s),t=t.sibling;t!==null;)sc(t,n,s),t=t.sibling}function W0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Bn(n,l,s),n[ln]=t,n[pn]=s}catch(h){kt(t,t.return,h)}}var Ea=!1,En=!1,Xf=!1,q0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function QS(t,n){if(t=t.containerInfo,fd=Ac,t=am(t),Iu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var x=0,R=-1,G=-1,ae=0,ve=0,Ee=t,le=null;t:for(;;){for(var de;Ee!==s||f!==0&&Ee.nodeType!==3||(R=x+f),Ee!==h||l!==0&&Ee.nodeType!==3||(G=x+l),Ee.nodeType===3&&(x+=Ee.nodeValue.length),(de=Ee.firstChild)!==null;)le=Ee,Ee=de;for(;;){if(Ee===t)break t;if(le===s&&++ae===f&&(R=x),le===h&&++ve===l&&(G=x),(de=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=de}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(dd={focusedElem:t,selectionRange:s},Ac=!1,Ln=n;Ln!==null;)if(n=Ln,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Ln=t;else for(;Ln!==null;){switch(n=Ln,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=n,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Ke=ks(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){kt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)md(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Ln=t;break}Ln=n.return}}function Y0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ta(t,s),l&4&&Ho(5,s);break;case 1:if(Ta(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){kt(s,s.return,x)}else{var f=ks(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){kt(s,s.return,x)}}l&64&&G0(s),l&512&&Go(s,s.return);break;case 3:if(Ta(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Nm(t,n)}catch(x){kt(s,s.return,x)}}break;case 27:n===null&&l&4&&W0(s);case 26:case 5:Ta(t,s),n===null&&l&4&&k0(s),l&512&&Go(s,s.return);break;case 12:Ta(t,s);break;case 31:Ta(t,s),l&4&&K0(t,s);break;case 13:Ta(t,s),l&4&&Q0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=rM.bind(null,s),AM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ea,!l){n=n!==null&&n.memoizedState!==null||En,f=Ea;var h=En;Ea=l,(En=n)&&!h?Aa(t,s,(s.subtreeFlags&8772)!==0):Ta(t,s),Ea=f,En=h}break;case 30:break;default:Ta(t,s)}}function j0(t){var n=t.alternate;n!==null&&(t.alternate=null,j0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,$n=!1;function ba(t,n,s){for(s=s.child;s!==null;)Z0(t,n,s),s=s.sibling}function Z0(t,n,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:En||ea(s,n),ba(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:En||ea(s,n);var l=on,f=$n;rs(s.type)&&(on=s.stateNode,$n=!1),ba(t,n,s),Ko(s.stateNode),on=l,$n=f;break;case 5:En||ea(s,n);case 6:if(l=on,f=$n,on=null,ba(t,n,s),on=l,$n=f,on!==null)if($n)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(h){kt(s,n,h)}else try{on.removeChild(s.stateNode)}catch(h){kt(s,n,h)}break;case 18:on!==null&&($n?(t=on,Gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Fr(t)):Gg(on,s.stateNode));break;case 4:l=on,f=$n,on=s.stateNode.containerInfo,$n=!0,ba(t,n,s),on=l,$n=f;break;case 0:case 11:case 14:case 15:$a(2,s,n),En||$a(4,s,n),ba(t,n,s);break;case 1:En||(ea(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&V0(s,n,l)),ba(t,n,s);break;case 21:ba(t,n,s);break;case 22:En=(l=En)||s.memoizedState!==null,ba(t,n,s),En=l;break;default:ba(t,n,s)}}function K0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(s){kt(n,n.return,s)}}}function Q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(s){kt(n,n.return,s)}}function JS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new q0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new q0),n;default:throw Error(r(435,t.tag))}}function rc(t,n){var s=JS(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=oM.bind(null,t,l);l.then(f,f)}})}function ei(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){on=R.stateNode,$n=!1;break e}break;case 5:on=R.stateNode,$n=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(on===null)throw Error(r(160));Z0(h,x,f),on=null,$n=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)J0(n,t),n=n.sibling}var Gi=null;function J0(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(n,t),ti(t),l&4&&($a(3,t,t.return),Ho(3,t),$a(5,t,t.return));break;case 1:ei(n,t),ti(t),l&512&&(En||s===null||ea(s,s.return)),l&64&&Ea&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Gi;if(ei(n,t),ti(t),l&512&&(En||s===null||ea(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Oi]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Bn(h,l,s),h[ln]=t,sn(h),l=h;break e;case"link":var x=Jg("link","href",f).get(l+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}h=f.createElement(l),Bn(h,l,s),f.head.appendChild(h);break;case"meta":if(x=Jg("meta","content",f).get(l+(s.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}h=f.createElement(l),Bn(h,l,s),f.head.appendChild(h);break;default:throw Error(r(468,l))}h[ln]=t,sn(h),l=h}t.stateNode=l}else $g(f,t.type,t.stateNode);else t.stateNode=Qg(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?$g(f,t.type,t.stateNode):Qg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Gf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ei(n,t),ti(t),l&512&&(En||s===null||ea(s,s.return)),s!==null&&l&4&&Gf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ei(n,t),ti(t),l&512&&(En||s===null||ea(s,s.return)),t.flags&32){f=t.stateNode;try{li(f,"")}catch(Ke){kt(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Gf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Xf=!0);break;case 6:if(ei(n,t),ti(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){kt(t,t.return,Ke)}}break;case 3:if(yc=null,f=Gi,Gi=Sc(n.containerInfo),ei(n,t),Gi=f,ti(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(Ke){kt(t,t.return,Ke)}Xf&&(Xf=!1,$0(t));break;case 4:l=Gi,Gi=Sc(t.stateNode.containerInfo),ei(n,t),ti(t),Gi=l;break;case 12:ei(n,t),ti(t);break;case 31:ei(n,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 13:ei(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(lc=At()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ae=Ea,ve=En;if(Ea=ae||f,En=ve||G,ei(n,t),En=ve,Ea=ae,ti(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||Ea||En||Xs(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(h=G.stateNode,f)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var Ee=G.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){kt(G,G.return,Ke)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Ke){kt(G,G.return,Ke)}}}else if(n.tag===18){if(s===null){G=n;try{var de=G.stateNode;f?Vg(de,!0):Vg(G.stateNode,!1)}catch(Ke){kt(G,G.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,rc(t,s))));break;case 19:ei(n,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 30:break;case 21:break;default:ei(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(X0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,h=Vf(t);sc(t,h,f);break;case 5:var x=s.stateNode;s.flags&32&&(li(x,""),s.flags&=-33);var R=Vf(t);sc(t,R,x);break;case 3:case 4:var G=s.stateNode.containerInfo,ae=Vf(t);kf(t,ae,G);break;default:throw Error(r(161))}}catch(ve){kt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Y0(t,n.alternate,n),n=n.sibling}function Xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Xs(n);break;case 1:ea(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&V0(n,n.return,s),Xs(n);break;case 27:Ko(n.stateNode);case 26:case 5:ea(n,n.return),Xs(n);break;case 22:n.memoizedState===null&&Xs(n);break;case 30:Xs(n);break;default:Xs(n)}t=t.sibling}}function Aa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Aa(f,h,s),Ho(4,h);break;case 1:if(Aa(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){kt(l,l.return,ae)}if(l=h,f=l.updateQueue,f!==null){var R=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Dm(G[f],R)}catch(ae){kt(l,l.return,ae)}}s&&x&64&&G0(h),Go(h,h.return);break;case 27:W0(h);case 26:case 5:Aa(f,h,s),s&&l===null&&x&4&&k0(h),Go(h,h.return);break;case 12:Aa(f,h,s);break;case 31:Aa(f,h,s),s&&x&4&&K0(f,h);break;case 13:Aa(f,h,s),s&&x&4&&Q0(f,h);break;case 22:h.memoizedState===null&&Aa(f,h,s),Go(h,h.return);break;case 30:break;default:Aa(f,h,s)}n=n.sibling}}function Wf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ro(s))}function qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function Vi(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,s,l),n=n.sibling}function eg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Vi(t,n,s,l),f&2048&&Ho(9,n);break;case 1:Vi(t,n,s,l);break;case 3:Vi(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t)));break;case 12:if(f&2048){Vi(t,n,s,l),t=n.stateNode;try{var h=n.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){kt(n,n.return,G)}}else Vi(t,n,s,l);break;case 31:Vi(t,n,s,l);break;case 13:Vi(t,n,s,l);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Vi(t,n,s,l):Vo(t,n):h._visibility&2?Vi(t,n,s,l):(h._visibility|=2,Ar(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Wf(x,n);break;case 24:Vi(t,n,s,l),f&2048&&qf(n.alternate,n);break;default:Vi(t,n,s,l)}}function Ar(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,x=n,R=s,G=l,ae=x.flags;switch(x.tag){case 0:case 11:case 15:Ar(h,x,R,G,f),Ho(8,x);break;case 23:break;case 22:var ve=x.stateNode;x.memoizedState!==null?ve._visibility&2?Ar(h,x,R,G,f):Vo(h,x):(ve._visibility|=2,Ar(h,x,R,G,f)),f&&ae&2048&&Wf(x.alternate,x);break;case 24:Ar(h,x,R,G,f),f&&ae&2048&&qf(x.alternate,x);break;default:Ar(h,x,R,G,f)}n=n.sibling}}function Vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Vo(s,l),f&2048&&Wf(l.alternate,l);break;case 24:Vo(s,l),f&2048&&qf(l.alternate,l);break;default:Vo(s,l)}n=n.sibling}}var ko=8192;function Rr(t,n,s){if(t.subtreeFlags&ko)for(t=t.child;t!==null;)tg(t,n,s),t=t.sibling}function tg(t,n,s){switch(t.tag){case 26:Rr(t,n,s),t.flags&ko&&t.memoizedState!==null&&BM(s,Gi,t.memoizedState,t.memoizedProps);break;case 5:Rr(t,n,s);break;case 3:case 4:var l=Gi;Gi=Sc(t.stateNode.containerInfo),Rr(t,n,s),Gi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ko,ko=16777216,Rr(t,n,s),ko=l):Rr(t,n,s));break;default:Rr(t,n,s)}}function ng(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ln=l,ag(l,t)}ng(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ig(t),t=t.sibling}function ig(t){switch(t.tag){case 0:case 11:case 15:Xo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Xo(t);break;case 12:Xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,oc(t)):Xo(t);break;default:Xo(t)}}function oc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ln=l,ag(l,t)}ng(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),oc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,oc(n));break;default:oc(n)}t=t.sibling}}function ag(t,n){for(;Ln!==null;){var s=Ln;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ro(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ln=l;else e:for(s=t;Ln!==null;){l=Ln;var f=l.sibling,h=l.return;if(j0(l),l===s){Ln=null;break e}if(f!==null){f.return=h,Ln=f;break e}Ln=h}}}var $S={getCacheForType:function(t){var n=In(Sn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return In(Sn).controller.signal}},eM=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Jt=null,xt=null,Mt=0,Vt=0,hi=null,es=!1,Cr=!1,Yf=!1,Ra=0,un=0,ts=0,Ws=0,jf=0,pi=0,wr=0,Wo=null,ni=null,Zf=!1,lc=0,sg=0,cc=1/0,uc=null,ns=null,wn=0,is=null,Dr=null,Ca=0,Kf=0,Qf=null,rg=null,qo=0,Jf=null;function mi(){return(Pt&2)!==0&&Mt!==0?Mt&-Mt:F.T!==null?ad():As()}function og(){if(pi===0)if((Mt&536870912)===0||Et){var t=qe;qe<<=1,(qe&3932160)===0&&(qe=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ii(t,n,s){(t===Jt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Nr(t,0),as(t,Mt,pi,!1)),Ve(t,s),((Pt&2)===0||t!==Jt)&&(t===Jt&&((Pt&2)===0&&(Ws|=s),un===4&&as(t,Mt,pi,!1)),ta(t))}function lg(t,n,s){if((Pt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ae(t,n),f=l?iM(t,n):ed(t,n,!0),h=l;do{if(f===0){Cr&&!l&&as(t,n,0,!1);break}else{if(s=t.current.alternate,h&&!tM(s)){f=ed(t,n,!1),h=!1;continue}if(f===2){if(h=n,t.errorRecoveryDisabledLanes&h)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;f=Wo;var G=R.current.memoizedState.isDehydrated;if(G&&(Nr(R,x).flags|=256),x=ed(R,x,!1),x!==2){if(Yf&&!G){R.errorRecoveryDisabledLanes|=h,Ws|=h,f=4;break e}h=ni,ni=f,h!==null&&(ni===null?ni=h:ni.push.apply(ni,h))}f=x}if(h=!1,f!==2)continue}}if(f===1){Nr(t,0),as(t,n,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:as(l,n,pi,!es);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=lc+300-At(),10<f)){if(as(l,n,pi,!es),ce(l,0,!0)!==0)break e;Ca=n,l.timeoutHandle=zg(cg.bind(null,l,s,ni,uc,Zf,n,pi,Ws,wr,es,h,"Throttled",-0,0),f);break e}cg(l,s,ni,uc,Zf,n,pi,Ws,wr,es,h,null,-0,0)}}break}while(!0);ta(t)}function cg(t,n,s,l,f,h,x,R,G,ae,ve,Ee,le,de){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},tg(n,h,Ee);var Ke=(h&62914560)===h?lc-At():(h&4194048)===h?sg-At():0;if(Ke=zM(Ee,Ke),Ke!==null){Ca=h,t.cancelPendingCommit=Ke(_g.bind(null,t,n,h,s,l,f,x,R,G,ve,Ee,null,le,de)),as(t,h,x,!ae);return}}_g(t,n,h,s,l,f,x,R,G)}function tM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!ci(h(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,s,l){n&=~jf,n&=~Ws,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var h=31-Ge(f),x=1<<h;l[h]=-1,f&=~x}s!==0&&Ut(t,s,n)}function fc(){return(Pt&6)===0?(Yo(0),!1):!0}function $f(){if(xt!==null){if(Vt===0)var t=xt.return;else t=xt,_a=Is=null,mf(t),Mr=null,wo=0,t=xt;for(;t!==null;)H0(t.alternate,t),t=t.return;xt=null}}function Nr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,MM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ca=0,$f(),Jt=t,xt=s=ma(t.current,null),Mt=n,Vt=0,hi=null,es=!1,Cr=Ae(t,n),Yf=!1,wr=pi=jf=Ws=ts=un=0,ni=Wo=null,Zf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ge(l),h=1<<f;n|=t[f],l&=~h}return Ra=n,Ll(),s}function ug(t,n){ut=null,F.H=Fo,n===Sr||n===Hl?(n=Am(),Vt=3):n===nf?(n=Am(),Vt=4):Vt=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,xt===null&&(un=1,ec(t,Si(n,t.current)))}function fg(){var t=fi.current;return t===null?!0:(Mt&4194048)===Mt?bi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===bi:!1}function dg(){var t=F.H;return F.H=Fo,t===null?Fo:t}function hg(){var t=F.A;return F.A=$S,t}function dc(){un=4,es||(Mt&4194048)!==Mt&&fi.current!==null||(Cr=!0),(ts&134217727)===0&&(Ws&134217727)===0||Jt===null||as(Jt,Mt,pi,!1)}function ed(t,n,s){var l=Pt;Pt|=2;var f=dg(),h=hg();(Jt!==t||Mt!==n)&&(uc=null,Nr(t,n)),n=!1;var x=un;e:do try{if(Vt!==0&&xt!==null){var R=xt,G=hi;switch(Vt){case 8:$f(),x=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var ae=Vt;if(Vt=0,hi=null,Lr(t,R,G,ae),s&&Cr){x=0;break e}break;default:ae=Vt,Vt=0,hi=null,Lr(t,R,G,ae)}}nM(),x=un;break}catch(ve){ug(t,ve)}while(!0);return n&&t.shellSuspendCounter++,_a=Is=null,Pt=l,F.H=f,F.A=h,xt===null&&(Jt=null,Mt=0,Ll()),x}function nM(){for(;xt!==null;)pg(xt)}function iM(t,n){var s=Pt;Pt|=2;var l=dg(),f=hg();Jt!==t||Mt!==n?(uc=null,cc=At()+500,Nr(t,n)):Cr=Ae(t,n);e:do try{if(Vt!==0&&xt!==null){n=xt;var h=hi;t:switch(Vt){case 1:Vt=0,hi=null,Lr(t,n,h,1);break;case 2:case 9:if(bm(h)){Vt=0,hi=null,mg(n);break}n=function(){Vt!==2&&Vt!==9||Jt!==t||(Vt=7),ta(t)},h.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:bm(h)?(Vt=0,hi=null,mg(n)):(Vt=0,hi=null,Lr(t,n,h,7));break;case 5:var x=null;switch(xt.tag){case 26:x=xt.memoizedState;case 5:case 27:var R=xt;if(x?e_(x):R.stateNode.complete){Vt=0,hi=null;var G=R.sibling;if(G!==null)xt=G;else{var ae=R.return;ae!==null?(xt=ae,hc(ae)):xt=null}break t}}Vt=0,hi=null,Lr(t,n,h,5);break;case 6:Vt=0,hi=null,Lr(t,n,h,6);break;case 8:$f(),un=6;break e;default:throw Error(r(462))}}aM();break}catch(ve){ug(t,ve)}while(!0);return _a=Is=null,F.H=l,F.A=f,Pt=s,xt!==null?0:(Jt=null,Mt=0,Ll(),un)}function aM(){for(;xt!==null&&!Yt();)pg(xt)}function pg(t){var n=B0(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,n===null?hc(t):xt=n}function mg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=L0(s,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=L0(s,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:mf(n);default:H0(s,n),n=xt=hm(n,Ra),n=B0(s,n,Ra)}t.memoizedProps=t.pendingProps,n===null?hc(t):xt=n}function Lr(t,n,s,l){_a=Is=null,mf(n),Mr=null,wo=0;var f=n.return;try{if(qS(t,f,n,s,Mt)){un=1,ec(t,Si(s,t.current)),xt=null;return}}catch(h){if(f!==null)throw xt=f,h;un=1,ec(t,Si(s,t.current)),xt=null;return}n.flags&32768?(Et||l===1?t=!0:Cr||(Mt&536870912)!==0?t=!1:(es=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),gg(n,t)):hc(n)}function hc(t){var n=t;do{if((n.flags&32768)!==0){gg(n,es);return}t=n.return;var s=ZS(n.alternate,n,Ra);if(s!==null){xt=s;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);un===0&&(un=5)}function gg(t,n){do{var s=KS(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);un=6,xt=null}function _g(t,n,s,l,f,h,x,R,G){t.cancelPendingCommit=null;do pc();while(wn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Gu,Bt(t,s,h,x,R,G),t===Jt&&(xt=Jt=null,Mt=0),Dr=n,is=t,Ca=s,Kf=h,Qf=f,rg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lM(J,function(){return yg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,x=Pt,Pt|=4;try{QS(t,n,s)}finally{Pt=x,H.p=f,F.T=l}}wn=1,vg(),xg(),Sg()}}function vg(){if(wn===1){wn=0;var t=is,n=Dr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Pt;Pt|=4;try{J0(n,t);var h=dd,x=am(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&im(R.ownerDocument.documentElement,R)){if(G!==null&&Iu(R)){var ae=G.start,ve=G.end;if(ve===void 0&&(ve=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ve,R.value.length);else{var Ee=R.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var de=le.getSelection(),Ke=R.textContent.length,at=Math.min(G.start,Ke),Kt=G.end===void 0?at:Math.min(G.end,Ke);!de.extend&&at>Kt&&(x=Kt,Kt=at,at=x);var Q=nm(R,at),W=nm(R,Kt);if(Q&&W&&(de.rangeCount!==1||de.anchorNode!==Q.node||de.anchorOffset!==Q.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ie=Ee.createRange();ie.setStart(Q.node,Q.offset),de.removeAllRanges(),at>Kt?(de.addRange(ie),de.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),de.addRange(ie))}}}}for(Ee=[],de=R;de=de.parentNode;)de.nodeType===1&&Ee.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Se=Ee[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Ac=!!fd,dd=fd=null}finally{Pt=f,H.p=l,F.T=s}}t.current=n,wn=2}}function xg(){if(wn===2){wn=0;var t=is,n=Dr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Pt;Pt|=4;try{Y0(t,n.alternate,n)}finally{Pt=f,H.p=l,F.T=s}}wn=3}}function Sg(){if(wn===4||wn===3){wn=0,Z();var t=is,n=Dr,s=Ca,l=rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Dr=is=null,Mg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),Ts(s),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,f=H.p,H.p=2,F.T=null;try{for(var h=t.onRecoverableError,x=0;x<l.length;x++){var R=l[x];h(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=f}}(Ca&3)!==0&&pc(),ta(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Jf?qo++:(qo=0,Jf=t):qo=0,Yo(0)}}function Mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function pc(){return vg(),xg(),Sg(),yg()}function yg(){if(wn!==5)return!1;var t=is,n=Kf;Kf=0;var s=Ts(Ca),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=Qf,Qf=null;var h=is,x=Ca;if(wn=0,Dr=is=null,Ca=0,(Pt&6)!==0)throw Error(r(331));var R=Pt;if(Pt|=4,ig(h.current),eg(h,h.current,x,s),Pt=R,Yo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(he,h)}catch{}return!0}finally{H.p=f,F.T=l,Mg(t,n)}}function Eg(t,n,s){n=Si(s,n),n=Df(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Ve(t,2),ta(t))}function kt(t,n,s){if(t.tag===3)Eg(t,t,s);else for(;n!==null;){if(n.tag===3){Eg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){t=Si(s,t),s=b0(2),l=Ka(n,s,2),l!==null&&(T0(s,l,n,t),Ve(l,2),ta(l));break}}n=n.return}}function td(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new eM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Yf=!0,f.add(s),t=sM.bind(null,t,n,s),n.then(t,t))}function sM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Jt===t&&(Mt&s)===s&&(un===4||un===3&&(Mt&62914560)===Mt&&300>At()-lc?(Pt&2)===0&&Nr(t,0):jf|=s,wr===Mt&&(wr=0)),ta(t)}function bg(t,n){n===0&&(n=xe()),t=Us(t,n),t!==null&&(Ve(t,n),ta(t))}function rM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),bg(t,s)}function oM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),bg(t,s)}function lM(t,n){return an(t,n)}var mc=null,Ur=null,nd=!1,gc=!1,id=!1,ss=0;function ta(t){t!==Ur&&t.next===null&&(Ur===null?mc=Ur=t:Ur=Ur.next=t),gc=!0,nd||(nd=!0,uM())}function Yo(t,n){if(!id&&gc){id=!0;do for(var s=!1,l=mc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var x=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-Ge(42|t)+1)-1,h&=f&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Cg(l,h))}else h=Mt,h=ce(l,l===Jt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ae(l,h)||(s=!0,Cg(l,h));l=l.next}while(s);id=!1}}function cM(){Tg()}function Tg(){gc=nd=!1;var t=0;ss!==0&&SM()&&(t=ss);for(var n=At(),s=null,l=mc;l!==null;){var f=l.next,h=Ag(l,n);h===0?(l.next=null,s===null?mc=f:s.next=f,f===null&&(Ur=s)):(s=l,(t!==0||(h&3)!==0)&&(gc=!0)),l=f}wn!==0&&wn!==5||Yo(t),ss!==0&&(ss=0)}function Ag(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var x=31-Ge(h),R=1<<x,G=f[x];G===-1?((R&s)===0||(R&l)!==0)&&(f[x]=De(R,n)):G<=n&&(t.expiredLanes|=R),h&=~R}if(n=Jt,s=Mt,s=ce(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Lt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ae(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Lt(l),Ts(s)){case 2:case 8:s=b;break;case 32:s=J;break;case 268435456:s=pe;break;default:s=J}return l=Rg.bind(null,t),s=an(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Lt(l),t.callbackPriority=2,t.callbackNode=null,2}function Rg(t,n){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(pc()&&t.callbackNode!==s)return null;var l=Mt;return l=ce(t,t===Jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(lg(t,l,n),Ag(t,At()),t.callbackNode!=null&&t.callbackNode===s?Rg.bind(null,t):null)}function Cg(t,n){if(pc())return null;lg(t,n,!0)}function uM(){yM(function(){(Pt&6)!==0?an(U,cM):Tg()})}function ad(){if(ss===0){var t=vr;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),ss=t}return ss}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ws(""+t)}function Dg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function fM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var h=wg((f[pn]||null).action),x=l.submitter;x&&(n=(n=x[pn]||null)?wg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var R=new Cl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var G=x?Dg(f,x):new FormData(f);bf(s,{pending:!0,data:G,method:f.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=x?Dg(f,x):new FormData(f),bf(s,{pending:!0,data:G,method:f.method,action:h},h,G))},currentTarget:f}]})}}for(var sd=0;sd<Hu.length;sd++){var rd=Hu[sd],dM=rd.toLowerCase(),hM=rd[0].toUpperCase()+rd.slice(1);Hi(dM,"on"+hM)}Hi(om,"onAnimationEnd"),Hi(lm,"onAnimationIteration"),Hi(cm,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(wS,"onTransitionRun"),Hi(DS,"onTransitionStart"),Hi(NS,"onTransitionCancel"),Hi(um,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Ng(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var x=l.length-1;0<=x;x--){var R=l[x],G=R.instance,ae=R.currentTarget;if(R=R.listener,G!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=ae;try{h(f)}catch(ve){Nl(ve)}f.currentTarget=null,h=G}else for(x=0;x<l.length;x++){if(R=l[x],G=R.instance,ae=R.currentTarget,R=R.listener,G!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=ae;try{h(f)}catch(ve){Nl(ve)}f.currentTarget=null,h=G}}}}function St(t,n){var s=n[Zi];s===void 0&&(s=n[Zi]=new Set);var l=t+"__bubble";s.has(l)||(Lg(n,t,2,!1),s.add(l))}function od(t,n,s){var l=0;n&&(l|=4),Lg(s,t,l,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function ld(t){if(!t[_c]){t[_c]=!0,rr.forEach(function(s){s!=="selectionchange"&&(pM.has(s)||od(s,!1,t),od(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[_c]||(n[_c]=!0,od("selectionchange",!1,n))}}function Lg(t,n,s,l){switch(o_(n)){case 2:var f=VM;break;case 8:f=kM;break;default:f=Ed}s=f.bind(null,n,s,t),f=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function cd(t,n,s,l,f){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var R=l.stateNode.containerInfo;if(R===f)break;if(x===4)for(x=l.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;R!==null;){if(x=ri(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){l=h=x;continue e}R=R.parentNode}}l=l.return}Fp(function(){var ae=h,ve=Tu(s),Ee=[];e:{var le=fm.get(t);if(le!==void 0){var de=Cl,Ke=t;switch(t){case"keypress":if(Al(s)===0)break e;case"keydown":case"keyup":de=oS;break;case"focusin":Ke="focus",de=Nu;break;case"focusout":Ke="blur",de=Nu;break;case"beforeblur":case"afterblur":de=Nu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=uS;break;case om:case lm:case cm:de=Jx;break;case um:de=dS;break;case"scroll":case"scrollend":de=Yx;break;case"wheel":de=pS;break;case"copy":case"cut":case"paste":de=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Vp;break;case"toggle":case"beforetoggle":de=gS}var at=(n&4)!==0,Kt=!at&&(t==="scroll"||t==="scrollend"),Q=at?le!==null?le+"Capture":null:le;at=[];for(var W=ae,ie;W!==null;){var Se=W;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||Q===null||(Se=go(W,Q),Se!=null&&at.push(Zo(W,Se,ie))),Kt)break;W=W.return}0<at.length&&(le=new de(le,Ke,null,s,ve),Ee.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==bu&&(Ke=s.relatedTarget||s.fromElement)&&(ri(Ke)||Ke[Gn]))break e;if((de||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,de?(Ke=s.relatedTarget||s.toElement,de=ae,Ke=Ke?ri(Ke):null,Ke!==null&&(Kt=c(Ke),at=Ke.tag,Ke!==Kt||at!==5&&at!==27&&at!==6)&&(Ke=null)):(de=null,Ke=ae),de!==Ke)){if(at=Hp,Se="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=Vp,Se="onPointerLeave",Q="onPointerEnter",W="pointer"),Kt=de==null?le:Ga(de),ie=Ke==null?le:Ga(Ke),le=new at(Se,W+"leave",de,s,ve),le.target=Kt,le.relatedTarget=ie,Se=null,ri(ve)===ae&&(at=new at(Q,W+"enter",Ke,s,ve),at.target=ie,at.relatedTarget=Kt,Se=at),Kt=Se,de&&Ke)t:{for(at=mM,Q=de,W=Ke,ie=0,Se=Q;Se;Se=at(Se))ie++;Se=0;for(var nt=W;nt;nt=at(nt))Se++;for(;0<ie-Se;)Q=at(Q),ie--;for(;0<Se-ie;)W=at(W),Se--;for(;ie--;){if(Q===W||W!==null&&Q===W.alternate){at=Q;break t}Q=at(Q),W=at(W)}at=null}else at=null;de!==null&&Ug(Ee,le,de,at,!1),Ke!==null&&Kt!==null&&Ug(Ee,Kt,Ke,at,!0)}}e:{if(le=ae?Ga(ae):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var wt=Kp;else if(jp(le))if(Qp)wt=AS;else{wt=bS;var $e=ES}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&zt(ae.elementType)&&(wt=Kp):wt=TS;if(wt&&(wt=wt(t,ae))){Zp(Ee,wt,s,ve);break e}$e&&$e(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&vt(le,"number",le.value)}switch($e=ae?Ga(ae):window,t){case"focusin":(jp($e)||$e.contentEditable==="true")&&(ur=$e,Fu=ae,bo=null);break;case"focusout":bo=Fu=ur=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,sm(Ee,s,ve);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":sm(Ee,s,ve)}var ft;if(Uu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else cr?qp(t,s)&&(yt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(yt="onCompositionStart");yt&&(kp&&s.locale!=="ko"&&(cr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&cr&&(ft=Bp()):(ka=ve,Cu="value"in ka?ka.value:ka.textContent,cr=!0)),$e=vc(ae,yt),0<$e.length&&(yt=new Gp(yt,t,null,s,ve),Ee.push({event:yt,listeners:$e}),ft?yt.data=ft:(ft=Yp(s),ft!==null&&(yt.data=ft)))),(ft=vS?xS(t,s):SS(t,s))&&(yt=vc(ae,"onBeforeInput"),0<yt.length&&($e=new Gp("onBeforeInput","beforeinput",null,s,ve),Ee.push({event:$e,listeners:yt}),$e.data=ft)),fM(Ee,t,ae,s,ve)}Ng(Ee,n)})}function Zo(t,n,s){return{instance:t,listener:n,currentTarget:s}}function vc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=go(t,s),f!=null&&l.unshift(Zo(t,f,h)),f=go(t,n),f!=null&&l.push(Zo(t,f,h))),t.tag===3)return l;t=t.return}return[]}function mM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ug(t,n,s,l,f){for(var h=n._reactName,x=[];s!==null&&s!==l;){var R=s,G=R.alternate,ae=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||ae===null||(G=ae,f?(ae=go(s,h),ae!=null&&x.unshift(Zo(s,ae,G))):f||(ae=go(s,h),ae!=null&&x.push(Zo(s,ae,G)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var gM=/\r\n?/g,_M=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(gM,`
`).replace(_M,"")}function Pg(t,n){return n=Og(n),Og(t)===n}function Zt(t,n,s,l,f,h){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||li(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&li(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,s,l);break;case"style":zi(t,l,h);break;case"data":if(n!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=ws(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(n!=="input"&&Zt(t,n,"name",f.name,f,null),Zt(t,n,"formEncType",f.formEncType,f,null),Zt(t,n,"formMethod",f.formMethod,f,null),Zt(t,n,"formTarget",f.formTarget,f,null)):(Zt(t,n,"encType",f.encType,f,null),Zt(t,n,"method",f.method,f,null),Zt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=ws(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ha);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=ws(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":St("beforetoggle",t),St("toggle",t),Le(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Qi.get(s)||s,Le(t,s,l))}}function ud(t,n,s,l,f,h){switch(s){case"style":zi(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?li(t,l):(typeof l=="number"||typeof l=="bigint")&&li(t,""+l);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),h=t[pn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(n,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Le(t,s,l)}}}function Bn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var x=s[h];if(x!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,h,x,s,null)}}f&&Zt(t,n,"srcSet",s.srcSet,s,null),l&&Zt(t,n,"src",s.src,s,null);return;case"input":St("invalid",t);var R=h=x=f=null,G=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":x=ve;break;case"checked":G=ve;break;case"defaultChecked":ae=ve;break;case"value":h=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Zt(t,n,l,ve,s,null)}}Vn(t,h,R,G,ae,x,f,!1);return;case"select":St("invalid",t),l=x=h=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":l=R;default:Zt(t,n,f,R,s,null)}n=h,s=x,t.multiple=!!l,n!=null?Cn(t,!!l,n,!1):s!=null&&Cn(t,!!l,s,!0);return;case"textarea":St("invalid",t),h=f=l=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":l=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Zt(t,n,x,R,s,null)}Bi(t,l,f,h);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(t,n,G,l,s,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(l=0;l<jo.length;l++)St(jo[l],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,ae,l,s,null)}return;default:if(zt(n)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&ud(t,n,ve,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Zt(t,n,R,l,s,null))}function vM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,x=null,R=null,G=null,ae=null,ve=null;for(de in s){var Ee=s[de];if(s.hasOwnProperty(de)&&Ee!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=Ee;default:l.hasOwnProperty(de)||Zt(t,n,de,null,l,Ee)}}for(var le in l){var de=l[le];if(Ee=s[le],l.hasOwnProperty(le)&&(de!=null||Ee!=null))switch(le){case"type":h=de;break;case"name":f=de;break;case"checked":ae=de;break;case"defaultChecked":ve=de;break;case"value":x=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==Ee&&Zt(t,n,le,de,l,Ee)}}Ye(t,x,R,G,ae,ve,h,f);return;case"select":de=x=R=le=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(h)||Zt(t,n,h,null,l,G)}for(f in l)if(h=l[f],G=s[f],l.hasOwnProperty(f)&&(h!=null||G!=null))switch(f){case"value":le=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==G&&Zt(t,n,f,h,l,G)}n=R,s=x,l=de,le!=null?Cn(t,!!s,le,!1):!!l!=!!s&&(n!=null?Cn(t,!!s,n,!0):Cn(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,l,f)}for(x in l)if(f=l[x],h=s[x],l.hasOwnProperty(x)&&(f!=null||h!=null))switch(x){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&Zt(t,n,x,f,l,h)}oi(t,le,de);return;case"option":for(var Ke in s)if(le=s[Ke],s.hasOwnProperty(Ke)&&le!=null&&!l.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Zt(t,n,Ke,null,l,le)}for(G in l)if(le=l[G],de=s[G],l.hasOwnProperty(G)&&le!==de&&(le!=null||de!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Zt(t,n,G,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Zt(t,n,at,null,l,le);for(ae in l)if(le=l[ae],de=s[ae],l.hasOwnProperty(ae)&&le!==de&&(le!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Zt(t,n,ae,le,l,de)}return;default:if(zt(n)){for(var Kt in s)le=s[Kt],s.hasOwnProperty(Kt)&&le!==void 0&&!l.hasOwnProperty(Kt)&&ud(t,n,Kt,void 0,l,le);for(ve in l)le=l[ve],de=s[ve],!l.hasOwnProperty(ve)||le===de||le===void 0&&de===void 0||ud(t,n,ve,le,l,de);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!l.hasOwnProperty(Q)&&Zt(t,n,Q,null,l,le);for(Ee in l)le=l[Ee],de=s[Ee],!l.hasOwnProperty(Ee)||le===de||le==null&&de==null||Zt(t,n,Ee,le,l,de)}function Ig(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,x=f.initiatorType,R=f.duration;if(h&&R&&Ig(x)){for(x=0,R=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],ae=G.startTime;if(ae>R)break;var ve=G.transferSize,Ee=G.initiatorType;ve&&Ig(Ee)&&(G=G.responseEnd,x+=ve*(G<R?1:(R-ae)/(G-ae)))}if(--l,n+=8*(h+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var fd=null,dd=null;function xc(t){return t.nodeType===9?t:t.ownerDocument}function Fg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pd=null;function SM(){var t=window.event;return t&&t.type==="popstate"?t===pd?!1:(pd=t,!0):(pd=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,yM=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(EM)}:zg;function EM(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Gg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Fr(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ko(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Ko(s);for(var h=s.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[Oi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=x}}else s==="body"&&Ko(t.ownerDocument.body);s=f}while(s);Fr(n)}function Vg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":md(s),Pi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function bM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Oi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function TM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ti(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function gd(t){return t.data==="$?"||t.data==="$~"}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function AM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vd=null;function Xg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ti(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function qg(t,n,s){switch(n=xc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pi(t)}var Ai=new Map,Yg=new Set;function Sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=H.d;H.d={f:RM,r:CM,D:wM,C:DM,L:NM,m:LM,X:OM,S:UM,M:PM};function RM(){var t=wa.f(),n=fc();return t||n}function CM(t){var n=Ii(t);n!==null&&n.tag===5&&n.type==="form"?u0(n):wa.r(t)}var Or=typeof document>"u"?null:document;function jg(t,n,s){var l=Or;if(l&&typeof n=="string"&&n){var f=Ht(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Yg.has(f)||(Yg.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Bn(n,"link",t),sn(n),l.head.appendChild(n)))}}function wM(t){wa.D(t),jg("dns-prefetch",t,null)}function DM(t,n){wa.C(t,n),jg("preconnect",t,n)}function NM(t,n,s){wa.L(t,n,s);var l=Or;if(l&&t&&n){var f='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ht(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ht(s.imageSizes)+'"]')):f+='[href="'+Ht(t)+'"]';var h=f;switch(n){case"style":h=Pr(t);break;case"script":h=Ir(t)}Ai.has(h)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ai.set(h,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Qo(h))||n==="script"&&l.querySelector(Jo(h))||(n=l.createElement("link"),Bn(n,"link",t),sn(n),l.head.appendChild(n)))}}function LM(t,n){wa.m(t,n);var s=Or;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ir(t)}if(!Ai.has(h)&&(t=_({rel:"modulepreload",href:t},n),Ai.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Jo(h)))return}l=s.createElement("link"),Bn(l,"link",t),sn(l),s.head.appendChild(l)}}}function UM(t,n,s){wa.S(t,n,s);var l=Or;if(l&&t){var f=Fi(l).hoistableStyles,h=Pr(t);n=n||"default";var x=f.get(h);if(!x){var R={loading:0,preload:null};if(x=l.querySelector(Qo(h)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ai.get(h))&&xd(t,s);var G=x=l.createElement("link");sn(G),Bn(G,"link",t),G._p=new Promise(function(ae,ve){G.onload=ae,G.onerror=ve}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Mc(x,n,l)}x={type:"stylesheet",instance:x,count:1,state:R},f.set(h,x)}}}function OM(t,n){wa.X(t,n);var s=Or;if(s&&t){var l=Fi(s).hoistableScripts,f=Ir(t),h=l.get(f);h||(h=s.querySelector(Jo(f)),h||(t=_({src:t,async:!0},n),(n=Ai.get(f))&&Sd(t,n),h=s.createElement("script"),sn(h),Bn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function PM(t,n){wa.M(t,n);var s=Or;if(s&&t){var l=Fi(s).hoistableScripts,f=Ir(t),h=l.get(f);h||(h=s.querySelector(Jo(f)),h||(t=_({src:t,async:!0,type:"module"},n),(n=Ai.get(f))&&Sd(t,n),h=s.createElement("script"),sn(h),Bn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Zg(t,n,s,l){var f=(f=se.current)?Sc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Pr(s.href),s=Fi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Pr(s.href);var h=Fi(f).hoistableStyles,x=h.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,x),(h=f.querySelector(Qo(t)))&&!h._p&&(x.instance=h,x.state.loading=5),Ai.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ai.set(t,s),h||IM(f,t,s,x.state))),n&&l===null)throw Error(r(528,""));return x}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ir(s),s=Fi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Pr(t){return'href="'+Ht(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function Kg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function IM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Bn(n,"link",s),sn(n),t.head.appendChild(n))}function Ir(t){return'[src="'+Ht(t)+'"]'}function Jo(t){return"script[async]"+t}function Qg(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ht(s.href)+'"]');if(l)return n.instance=l,sn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),sn(l),Bn(l,"style",f),Mc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Pr(s.href);var h=t.querySelector(Qo(f));if(h)return n.state.loading|=4,n.instance=h,sn(h),h;l=Kg(s),(f=Ai.get(f))&&xd(l,f),h=(t.ownerDocument||t).createElement("link"),sn(h);var x=h;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Bn(h,"link",l),n.state.loading|=4,Mc(h,s.precedence,t),n.instance=h;case"script":return h=Ir(s.src),(f=t.querySelector(Jo(h)))?(n.instance=f,sn(f),f):(l=s,(f=Ai.get(h))&&(l=_({},s),Sd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),sn(f),Bn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Mc(l,s.precedence,t));return n.instance}function Mc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,x=0;x<l.length;x++){var R=l[x];if(R.dataset.precedence===n)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var yc=null;function Jg(t,n,s){if(yc===null){var l=new Map,f=yc=new Map;f.set(s,l)}else f=yc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Oi]||h[ln]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=t+x;var R=l.get(x);R?R.push(h):l.set(x,[h])}}return l}function $g(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function FM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function BM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Pr(l.href),h=n.querySelector(Qo(f));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ec.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=h,sn(h);return}h=n.ownerDocument||n,l=Kg(l),(f=Ai.get(f))&&xd(l,f),h=h.createElement("link"),sn(h);var x=h;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Bn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ec.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Md=0;function zM(t,n){return t.stylesheets&&t.count===0&&Tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Md===0&&(Md=62500*xM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Md?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,n.forEach(HM,t),bc=null,Ec.call(t))}function HM(t,n){if(!(n.state.loading&4)){var s=bc.get(t);if(s)var l=s.get(null);else{s=new Map,bc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var x=f[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}f=n.instance,x=f.getAttribute("data-precedence"),h=s.get(x)||l,h===l&&s.set(null,f),s.set(x,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var $o={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function GM(t,n,s,l,f,h,x,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function t_(t,n,s,l,f,h,x,R,G,ae,ve,Ee){return t=new GM(t,n,s,x,G,ae,ve,Ee,R),n=1,h===!0&&(n|=24),h=ui(3,null,null,n),t.current=h,h.stateNode=t,n=$u(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:n},af(h),t}function n_(t){return t?(t=hr,t):hr}function i_(t,n,s,l,f,h){f=n_(f),l.context===null?l.context=f:l.pendingContext=f,l=Za(n),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=Ka(t,l,n),s!==null&&(ii(s,t,n),No(s,t,n))}function a_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function yd(t,n){a_(t,n),(t=t.alternate)&&a_(t,n)}function s_(t){if(t.tag===13||t.tag===31){var n=Us(t,67108864);n!==null&&ii(n,t,67108864),yd(t,67108864)}}function r_(t){if(t.tag===13||t.tag===31){var n=mi();n=bs(n);var s=Us(t,n);s!==null&&ii(s,t,n),yd(t,n)}}var Ac=!0;function VM(t,n,s,l){var f=F.T;F.T=null;var h=H.p;try{H.p=2,Ed(t,n,s,l)}finally{H.p=h,F.T=f}}function kM(t,n,s,l){var f=F.T;F.T=null;var h=H.p;try{H.p=8,Ed(t,n,s,l)}finally{H.p=h,F.T=f}}function Ed(t,n,s,l){if(Ac){var f=bd(l);if(f===null)cd(t,n,l,Rc,s),l_(t,l);else if(WM(f,t,n,s,l))l.stopPropagation();else if(l_(t,l),n&4&&-1<XM.indexOf(t)){for(;f!==null;){var h=Ii(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Re(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-Ge(x);R.entanglements[1]|=G,x&=~G}ta(h),(Pt&6)===0&&(cc=At()+500,Yo(0))}}break;case 31:case 13:R=Us(h,2),R!==null&&ii(R,h,2),fc(),yd(h,2)}if(h=bd(l),h===null&&cd(t,n,l,Rc,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else cd(t,n,l,null,s)}}function bd(t){return t=Tu(t),Td(t)}var Rc=null;function Td(t){if(Rc=null,t=ri(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Rc=t,null}function o_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_t()){case U:return 2;case b:return 8;case J:case oe:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Ad=!1,os=null,ls=null,cs=null,el=new Map,tl=new Map,us=[],XM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function nl(t,n,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},n!==null&&(n=Ii(n),n!==null&&s_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function WM(t,n,s,l,f){switch(n){case"focusin":return os=nl(os,t,n,s,l,f),!0;case"dragenter":return ls=nl(ls,t,n,s,l,f),!0;case"mouseover":return cs=nl(cs,t,n,s,l,f),!0;case"pointerover":var h=f.pointerId;return el.set(h,nl(el.get(h)||null,t,n,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,tl.set(h,nl(tl.get(h)||null,t,n,s,l,f)),!0}return!1}function c_(t){var n=ri(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Rs(t.priority,function(){r_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,Rs(t.priority,function(){r_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=bd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);bu=l,s.target.dispatchEvent(l),bu=null}else return n=Ii(s),n!==null&&s_(n),t.blockedOn=s,!1;n.shift()}return!0}function u_(t,n,s){Cc(t)&&s.delete(n)}function qM(){Ad=!1,os!==null&&Cc(os)&&(os=null),ls!==null&&Cc(ls)&&(ls=null),cs!==null&&Cc(cs)&&(cs=null),el.forEach(u_),tl.forEach(u_)}function wc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ad||(Ad=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,qM)))}var Dc=null;function f_(t){Dc!==t&&(Dc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Td(l||s)===null)continue;break}var h=Ii(s);h!==null&&(t.splice(n,3),n-=3,bf(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Fr(t){function n(G){return wc(G,t)}os!==null&&wc(os,t),ls!==null&&wc(ls,t),cs!==null&&wc(cs,t),el.forEach(n),tl.forEach(n);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)c_(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],x=f[pn]||null;if(typeof h=="function")x||f_(s);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,x=h[pn]||null)R=x.formAction;else if(Td(f)!==null)continue}else R=x.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),f_(s)}}}function d_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Rd(t){this._internalRoot=t}Nc.prototype.render=Rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=mi();i_(s,l,t,n,null,null)},Nc.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;i_(t.current,2,null,t,null,null),fc(),n[Gn]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var n=As();t={blockedOn:null,target:t,priority:n};for(var s=0;s<us.length&&n!==0&&n<us[s].priority;s++);us.splice(s,0,t),s===0&&c_(t)}};var h_=e.version;if(h_!=="19.2.7")throw Error(r(527,h_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var YM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{he=Lc.inject(YM),me=Lc}catch{}}return al.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=S0,h=M0,x=y0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=t_(t,1,!1,null,null,s,l,null,f,h,x,d_),t[Gn]=n.current,ld(t),new Rd(n)},al.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=S0,x=M0,R=y0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=t_(t,1,!0,n,s??null,l,f,G,h,x,R,d_),n.context=n_(null),s=n.current,l=mi(),l=bs(l),f=Za(l),f.callback=null,Ka(s,f,l),s=l,n.current.lanes=s,Ve(n,s),ta(n),t[Gn]=n.current,ld(t),new Nc(n)},al.version="19.2.7",al}var E_;function ny(){if(E_)return Dd.exports;E_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Dd.exports=ty(),Dd.exports}var iy=ny();const ay={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Br=(a,e="#")=>{var i;return((i=ay[a])==null?void 0:i.trim())||e},An={app:Br("VITE_APP_URL","https://demo.morpheum.io"),docs:Br("VITE_DOCS_URL"),manifesto:Br("VITE_MANIFESTO_URL"),discord:Br("VITE_DISCORD_URL"),x:Br("VITE_X_URL"),tutorialVideo:Br("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},nu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Od={text:"> The agent-native L1 DEX, for faster and safer trades.",href:An.manifesto},ds={eyebrow:{label:"A manifesto for verifiable agents",href:An.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:An.app},secondaryCta:{label:"Explore agents",href:An.explore}},b_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},T_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Sh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Pd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:An.exploreAgents},meta:{kind:"identity",name:"SharpeShark",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:An.exploreAgents},meta:{kind:"community",tx:"0xe81a…3b70",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500",chain:"Morpheum · hop 0",settled:"yes",queued:"—"}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:An.exploreVaults},meta:{kind:"community",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",settled:"—",queued:"yes"}}]},hs={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},zr={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Uc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:An.app},social:[{label:"Join Discord",href:An.discord},{label:"Join X",href:An.x}]},A_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function oo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function sy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Uc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(oo,{href:Uc.primaryCta.href,variant:"primary",children:Uc.primaryCta.label}),Uc.social.map(a=>D.jsx(oo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function ry(){const[a,e]=Ze.useState(!1),i=!!An.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Sh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:An.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Sh.videoCaption})]})]})})}const oy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Id({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:oy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function ly(){const a=zr.cards[0],e=zr.cards[1],i=zr.cards[2],r=zr.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:zr.kicker}),D.jsx("h2",{className:"section-title explore__title",children:zr.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Id,{type:"verified"}),D.jsx(Id,{type:"riskScore",value:o.risk}),D.jsx(Id,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="185",cy=0,R_=1,uy=2,iu=1,fy=2,fl=3,Ba=0,si=1,sa=2,Ia=0,io=1,Mh=2,C_=3,w_=4,dy=5,Js=100,hy=101,py=102,my=103,gy=104,_y=200,vy=201,xy=202,Sy=203,yh=204,Eh=205,My=206,yy=207,Ey=208,by=209,Ty=210,Ay=211,Ry=212,Cy=213,wy=214,bh=0,Th=1,Ah=2,lo=3,Rh=4,Ch=5,wh=6,Dh=7,Qv=0,Dy=1,Ny=2,la=0,Jv=1,$v=2,ex=3,tx=4,nx=5,ix=6,ax=7,sx=300,nr=301,co=302,Fd=303,Bd=304,vu=306,Nh=1e3,Yi=1001,Lh=1002,Hn=1003,Ly=1004,Oc=1005,Rn=1006,zd=1007,ys=1008,wi=1009,rx=1010,ox=1011,xl=1012,mp=1013,fa=1014,ra=1015,za=1016,gp=1017,_p=1018,Sl=1020,lx=35902,cx=35899,ux=1021,fx=1022,ji=1023,Ha=1026,er=1027,dx=1028,vp=1029,ir=1030,xp=1031,Sp=1033,au=33776,su=33777,ru=33778,ou=33779,Uh=35840,Oh=35841,Ph=35842,Ih=35843,Fh=36196,Bh=37492,zh=37496,Hh=37488,Gh=37489,uu=37490,Vh=37491,kh=37808,Xh=37809,Wh=37810,qh=37811,Yh=37812,jh=37813,Zh=37814,Kh=37815,Qh=37816,Jh=37817,$h=37818,ep=37819,tp=37820,np=37821,ip=36492,ap=36494,sp=36495,rp=36283,op=36284,fu=36285,lp=36286,Uy=3200,D_=0,Oy=1,Ms="",Qn="srgb",du="srgb-linear",hu="linear",Xt="srgb",Hr=7680,N_=519,Py=512,Iy=513,Fy=514,Mp=515,By=516,zy=517,yp=518,Hy=519,L_=35044,U_="300 es",oa=2e3,pu=2001;function Gy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function mu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vy(){const a=mu("canvas");return a.style.display="block",a}const O_={};function P_(...a){const e="THREE."+a.shift();console.log(e,...a)}function hx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=hx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Rt(...a){a=hx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function ao(...a){const e=a.join(" ");e in O_||(O_[e]=!0,st(...a))}function ky(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Xy={[bh]:Th,[Ah]:wh,[Rh]:Dh,[lo]:Ch,[Th]:bh,[wh]:Ah,[Dh]:Rh,[Ch]:lo};class sr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let I_=1234567;const gl=Math.PI/180,Ml=180/Math.PI;function ho(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[i&63|128]+Xn[i>>8&255]+"-"+Xn[i>>16&255]+Xn[i>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function gt(a,e,i){return Math.max(e,Math.min(i,a))}function Ep(a,e){return(a%e+e)%e}function Wy(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function qy(a,e,i){return a!==e?(i-a)/(e-a):0}function _l(a,e,i){return(1-i)*a+i*e}function Yy(a,e,i,r){return _l(a,e,1-Math.exp(-i*r))}function jy(a,e=1){return e-Math.abs(Ep(a,e*2)-e)}function Zy(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function Ky(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function Qy(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Jy(a,e){return a+Math.random()*(e-a)}function $y(a){return a*(.5-Math.random())}function eE(a){a!==void 0&&(I_=a);let e=I_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tE(a){return a*gl}function nE(a){return a*Ml}function iE(a){return(a&a-1)===0&&a!==0}function aE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function sE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function rE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),p=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),S=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*_,m*v,d*p);break;case"YZY":a.set(m*v,d*g,m*_,d*p);break;case"ZXZ":a.set(m*_,m*v,d*g,d*p);break;case"XZX":a.set(d*g,m*E,m*S,d*p);break;case"YXY":a.set(m*S,d*g,m*E,d*p);break;case"ZYZ":a.set(m*E,m*S,d*g,d*p);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function eo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tn={DEG2RAD:gl,RAD2DEG:Ml,generateUUID:ho,clamp:gt,euclideanModulo:Ep,mapLinear:Wy,inverseLerp:qy,lerp:_l,damp:Yy,pingpong:jy,smoothstep:Zy,smootherstep:Ky,randInt:Qy,randFloat:Jy,randFloatSpread:$y,seededRandom:eE,degToRad:tE,radToDeg:nE,isPowerOfTwo:iE,ceilPowerOfTwo:aE,floorPowerOfTwo:sE,setQuaternionFromProperEuler:rE,normalize:jn,denormalize:eo},Np=class Np{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Np.prototype.isVector2=!0;let Nt=Np;class po{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],S=c[u+1],E=c[u+2],w=c[u+3];if(_!==w||m!==v||p!==S||g!==E){let y=m*v+p*S+g*E+_*w;y<0&&(v=-v,S=-S,E=-E,w=-w,y=-y);let M=1-d;if(y<.9995){const P=Math.acos(y),z=Math.sin(P);M=Math.sin(M*P)/z,d=Math.sin(d*P)/z,m=m*M+v*d,p=p*M+S*d,g=g*M+E*d,_=_*M+w*d}else{m=m*M+v*d,p=p*M+S*d,g=g*M+E*d,_=_*M+w*d;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],p=r[o+2],g=r[o+3],_=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return e[i]=d*E+g*_+m*S-p*v,e[i+1]=m*E+g*v+p*_-d*S,e[i+2]=p*E+g*S+d*v-m*_,e[i+3]=g*E-d*_-m*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(o/2),_=d(c/2),v=m(r/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"YZX":this._x=v*g*_+p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_-v*S*E;break;case"XZY":this._x=v*g*_-p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_+v*S*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-r*p,this._z=c*g+u*p+r*m-o*d,this._w=u*g-r*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lp=class Lp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(F_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(F_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*r),g=2*(d*i-c*o),_=2*(c*r-u*i);return this.x=i+m*p+u*_-d*g,this.y=r+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lp.prototype.isVector3=!0;let ee=Lp;const Hd=new ee,F_=new po,Up=class Up{constructor(e,i,r,o,c,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,p)}set(e,i,r,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],w=o[0],y=o[3],M=o[6],P=o[1],z=o[4],C=o[7],I=o[2],N=o[5],B=o[8];return c[0]=u*w+d*P+m*I,c[3]=u*y+d*z+m*N,c[6]=u*M+d*C+m*B,c[1]=p*w+g*P+_*I,c[4]=p*y+g*z+_*N,c[7]=p*M+g*C+_*B,c[2]=v*w+S*P+E*I,c[5]=v*y+S*z+E*N,c[8]=v*M+S*C+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*u*g-i*d*p-r*c*g+r*d*m+o*c*p-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,v=d*m-g*c,S=p*c-u*m,E=i*_+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*p-g*r)*w,e[2]=(d*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-d*i)*w,e[6]=S*w,e[7]=(r*m-p*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+i,0,0,1),this}scale(e,i){return ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(e,i)),this}rotate(e){return ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-e)),this}translate(e,i){return ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Up.prototype.isMatrix3=!0;let ct=Up;const Gd=new ct,B_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const a={enabled:!0,workingColorSpace:du,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xt&&(o.r=Fa(o.r),o.g=Fa(o.g),o.b=Fa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ms?hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[du]:{primaries:e,whitePoint:r,transfer:hu,toXYZ:B_,fromXYZ:z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:B_,fromXYZ:z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),a}const bt=oE();function Fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function so(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Gr;class lE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gr===void 0&&(Gr=mu("canvas")),Gr.width=e.width,Gr.height=e.height;const o=Gr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Gr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Fa(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Fa(i[r]/255)*255):i[r]=Fa(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cE=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Vd(o[u].image)):c.push(Vd(o[u]))}else c=Vd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Vd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?lE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let uE=0;const kd=new ee;class qn extends sr{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Yi,o=Yi,c=Rn,u=ys,d=ji,m=wi,p=qn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ho(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nh:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nh:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=sx;qn.DEFAULT_ANISOTROPY=1;const Op=class Op{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,C=(S+1)/2,I=(M+1)/2,N=(g+v)/4,B=(_+w)/4,T=(E+y)/4;return z>C&&z>I?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=N/r,c=B/r):C>I?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=N/o,c=T/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=B/c,o=T/c),this.set(r,o,c,i),this}let P=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(_-w)/P,this.z=(v-g)/P,this.w=Math.acos((p+S+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this.w=gt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this.w=gt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Op.prototype.isVector4=!0;let fn=Op;class fE extends sr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new qn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new bp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends fE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class px extends qn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dE extends qn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=class _u{constructor(e,i,r,o,c,u,d,m,p,g,_,v,S,E,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,p,g,_,v,S,E,w,y)}set(e,i,r,o,c,u,d,m,p,g,_,v,S,E,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=d,M[13]=m,M[2]=p,M[6]=g,M[10]=_,M[14]=v,M[3]=S,M[7]=E,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _u().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/Vr.setFromMatrixColumn(e,0).length(),c=1/Vr.setFromMatrixColumn(e,1).length(),u=1/Vr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,S=u*_,E=d*g,w=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=v-w*p,i[9]=-d*m,i[2]=w-v*p,i[6]=E+S*p,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,E=p*g,w=p*_;i[0]=v+w*d,i[4]=E*d-S,i[8]=u*p,i[1]=u*_,i[5]=u*g,i[9]=-d,i[2]=S*d-E,i[6]=w+v*d,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,E=p*g,w=p*_;i[0]=v-w*d,i[4]=-u*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=u*g,i[9]=w-v*d,i[2]=-u*p,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,S=u*_,E=d*g,w=d*_;i[0]=m*g,i[4]=E*p-S,i[8]=v*p+w,i[1]=m*_,i[5]=w*p+v,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,S=u*p,E=d*m,w=d*p;i[0]=m*g,i[4]=w-v*_,i[8]=E*_+S,i[1]=_,i[5]=u*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+E,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,S=u*p,E=d*m,w=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+w,i[5]=u*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hE,e,pE)}lookAt(e,i,r){const o=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ps.crossVectors(r,gi),ps.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ps.crossVectors(r,gi)),ps.normalize(),Pc.crossVectors(gi,ps),o[0]=ps.x,o[4]=Pc.x,o[8]=gi.x,o[1]=ps.y,o[5]=Pc.y,o[9]=gi.y,o[2]=ps.z,o[6]=Pc.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],w=r[6],y=r[10],M=r[14],P=r[3],z=r[7],C=r[11],I=r[15],N=o[0],B=o[4],T=o[8],L=o[12],X=o[1],V=o[5],j=o[9],ue=o[13],fe=o[2],q=o[6],F=o[10],H=o[14],$=o[3],_e=o[7],Me=o[11],O=o[15];return c[0]=u*N+d*X+m*fe+p*$,c[4]=u*B+d*V+m*q+p*_e,c[8]=u*T+d*j+m*F+p*Me,c[12]=u*L+d*ue+m*H+p*O,c[1]=g*N+_*X+v*fe+S*$,c[5]=g*B+_*V+v*q+S*_e,c[9]=g*T+_*j+v*F+S*Me,c[13]=g*L+_*ue+v*H+S*O,c[2]=E*N+w*X+y*fe+M*$,c[6]=E*B+w*V+y*q+M*_e,c[10]=E*T+w*j+y*F+M*Me,c[14]=E*L+w*ue+y*H+M*O,c[3]=P*N+z*X+C*fe+I*$,c[7]=P*B+z*V+C*q+I*_e,c[11]=P*T+z*j+C*F+I*Me,c[15]=P*L+z*ue+C*H+I*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],w=e[7],y=e[11],M=e[15],P=m*S-p*v,z=d*S-p*_,C=d*v-m*_,I=u*S-p*g,N=u*v-m*g,B=u*_-d*g;return i*(w*P-y*z+M*C)-r*(E*P-y*I+M*N)+o*(E*z-w*I+M*B)-c*(E*C-w*N+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],p=e[6],g=e[10];return i*(u*g-d*p)-r*(c*g-d*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],w=e[13],y=e[14],M=e[15],P=i*d-r*u,z=i*m-o*u,C=i*p-c*u,I=r*m-o*d,N=r*p-c*d,B=o*p-c*m,T=g*w-_*E,L=g*y-v*E,X=g*M-S*E,V=_*y-v*w,j=_*M-S*w,ue=v*M-S*y,fe=P*ue-z*j+C*V+I*X-N*L+B*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return e[0]=(d*ue-m*j+p*V)*q,e[1]=(o*j-r*ue-c*V)*q,e[2]=(w*B-y*N+M*I)*q,e[3]=(v*N-_*B-S*I)*q,e[4]=(m*X-u*ue-p*L)*q,e[5]=(i*ue-o*X+c*L)*q,e[6]=(y*C-E*B-M*z)*q,e[7]=(g*B-v*C+S*z)*q,e[8]=(u*j-d*X+p*T)*q,e[9]=(r*X-i*j-c*T)*q,e[10]=(E*N-w*C+M*P)*q,e[11]=(_*C-g*N-S*P)*q,e[12]=(d*L-u*V-m*T)*q,e[13]=(i*V-r*L+o*T)*q,e[14]=(w*z-E*I-y*P)*q,e[15]=(g*I-_*z+v*P)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+r,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+r,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,p=c+c,g=u+u,_=d+d,v=c*p,S=c*g,E=c*_,w=u*g,y=u*_,M=d*_,P=m*p,z=m*g,C=m*_,I=r.x,N=r.y,B=r.z;return o[0]=(1-(w+M))*I,o[1]=(S+C)*I,o[2]=(E-z)*I,o[3]=0,o[4]=(S-C)*N,o[5]=(1-(v+M))*N,o[6]=(y+P)*N,o[7]=0,o[8]=(E+z)*B,o[9]=(y-P)*B,o[10]=(1-(v+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Vr.set(o[0],o[1],o[2]).length();const d=Vr.set(o[4],o[5],o[6]).length(),m=Vr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ki.copy(this);const p=1/u,g=1/d,_=1/m;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=g,ki.elements[5]*=g,ki.elements[6]*=g,ki.elements[8]*=_,ki.elements[9]*=_,ki.elements[10]*=_,i.setFromRotationMatrix(ki),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=oa,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),S=(r+o)/(r-o);let E,w;if(m)E=c/(u-c),w=u*c/(u-c);else if(d===oa)E=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(d===pu)E=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=oa,m=!1){const p=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),S=-(r+o)/(r-o);let E,w;if(m)E=1/(u-c),w=u/(u-c);else if(d===oa)E=-2/(u-c),w=-(u+c)/(u-c);else if(d===pu)E=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};_u.prototype.isMatrix4=!0;let vn=_u;const Vr=new ee,ki=new vn,hE=new ee(0,0,0),pE=new ee(1,1,1),ps=new ee,Pc=new ee,gi=new ee,H_=new vn,G_=new po;class ar{constructor(e=0,i=0,r=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mE=0;const V_=new ee,kr=new po,Da=new vn,Ic=new ee,sl=new ee,gE=new ee,_E=new po,k_=new ee(1,0,0),X_=new ee(0,1,0),W_=new ee(0,0,1),q_={type:"added"},vE={type:"removed"},Xr={type:"childadded",child:null},Xd={type:"childremoved",child:null};class vi extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new ee,i=new ar,r=new po,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new ct}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return kr.setFromAxisAngle(e,i),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,i){return kr.setFromAxisAngle(e,i),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(k_,e)}rotateY(e){return this.rotateOnAxis(X_,e)}rotateZ(e){return this.rotateOnAxis(W_,e)}translateOnAxis(e,i){return V_.copy(e).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(k_,e)}translateY(e){return this.translateOnAxis(X_,e)}translateZ(e){return this.translateOnAxis(W_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ic.copy(e):Ic.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(sl,Ic,this.up):Da.lookAt(Ic,sl,this.up),this.quaternion.setFromRotationMatrix(Da),o&&(Da.extractRotation(o.matrixWorld),kr.setFromRotationMatrix(Da),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q_),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(vE),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q_),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,_E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}vi.DEFAULT_UP=new ee(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dl extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(p,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new dl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function qd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Tt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=bt.workingColorSpace){return this.r=e,this.g=i,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=bt.workingColorSpace){if(e=Ep(e,1),i=gt(i,0,1),r=gt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=qd(u,c,e+1/3),this.g=qd(u,c,e),this.b=qd(u,c,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,i=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Qn){const r=gx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return bt.workingToColorSpace(Wn.copy(this),e),Math.round(gt(Wn.r*255,0,255))*65536+Math.round(gt(Wn.g*255,0,255))*256+Math.round(gt(Wn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Wn.copy(this),i);const r=Wn.r,o=Wn.g,c=Wn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Wn.copy(this),i),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Qn){bt.workingToColorSpace(Wn.copy(this),e);const i=Wn.r,r=Wn.g,o=Wn.b;return e!==Qn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(Fc);const r=_l(ms.h,Fc.h,i),o=_l(ms.s,Fc.s,i),c=_l(ms.l,Fc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Tt;Tt.NAMES=gx;class SE extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Xi=new ee,Na=new ee,Yd=new ee,La=new ee,Wr=new ee,qr=new ee,Y_=new ee,jd=new ee,Zd=new ee,Kd=new ee,Qd=new fn,Jd=new fn,$d=new fn;class qi{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),Xi.subVectors(e,i),o.cross(Xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){Xi.subVectors(o,i),Na.subVectors(r,i),Yd.subVectors(e,i);const u=Xi.dot(Xi),d=Xi.dot(Na),m=Xi.dot(Yd),p=Na.dot(Na),g=Na.dot(Yd),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(p*m-d*g)*v,E=(u*g-d*m)*v;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,La)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,La.x),m.addScaledVector(u,La.y),m.addScaledVector(d,La.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,r),$d.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qd,c.x),u.addScaledVector(Jd,c.y),u.addScaledVector($d,c.z),u}static isFrontFacing(e,i,r,o){return Xi.subVectors(r,i),Na.subVectors(e,i),Xi.cross(Na).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Xi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return qi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return qi.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;Wr.subVectors(o,r),qr.subVectors(c,r),jd.subVectors(e,r);const m=Wr.dot(jd),p=qr.dot(jd);if(m<=0&&p<=0)return i.copy(r);Zd.subVectors(e,o);const g=Wr.dot(Zd),_=qr.dot(Zd);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(Wr,u);Kd.subVectors(e,c);const S=Wr.dot(Kd),E=qr.dot(Kd);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(qr,d);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Y_.subVectors(c,o),d=(_-g)/(_-g+(S-E)),i.copy(o).addScaledVector(Y_,d);const M=1/(y+w+v);return u=w*M,d=v*M,i.copy(r).addScaledVector(Wr,u).addScaledVector(qr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Wi):Wi.fromBufferAttribute(c,u),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Bc.copy(r.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),zc.subVectors(this.max,rl),Yr.subVectors(e.a,rl),jr.subVectors(e.b,rl),Zr.subVectors(e.c,rl),gs.subVectors(jr,Yr),_s.subVectors(Zr,jr),qs.subVectors(Yr,Zr);let i=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-qs.z,qs.y,gs.z,0,-gs.x,_s.z,0,-_s.x,qs.z,0,-qs.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-qs.y,qs.x,0];return!eh(i,Yr,jr,Zr,zc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,Yr,jr,Zr,zc))?!1:(Hc.crossVectors(gs,_s),i=[Hc.x,Hc.y,Hc.z],eh(i,Yr,jr,Zr,zc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ua=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Wi=new ee,Bc=new El,Yr=new ee,jr=new ee,Zr=new ee,gs=new ee,_s=new ee,qs=new ee,rl=new ee,zc=new ee,Hc=new ee,Ys=new ee;function eh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Ys.fromArray(a,c);const d=o.x*Math.abs(Ys.x)+o.y*Math.abs(Ys.y)+o.z*Math.abs(Ys.z),m=e.dot(Ys),p=i.dot(Ys),g=r.dot(Ys);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const bn=new ee,Gc=new Nt;let ME=0;class ua extends sr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ME++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=L_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(e),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==L_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _x extends ua{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class vx extends ua{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Di extends ua{constructor(e,i,r){super(new Float32Array(e),i,r)}}const yE=new El,ol=new ee,th=new ee;class Tp{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):yE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(ol,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(th)),this.expandByPoint(ol.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let EE=0;const Ri=new vn,nh=new vi,Kr=new ee,_i=new El,ll=new El,Un=new ee;class Li extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gy(e)?vx:_x)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,r){return Ri.makeTranslation(e,i,r),this.applyMatrix4(Ri),this}scale(e,i,r){return Ri.makeScale(e,i,r),this.applyMatrix4(Ri),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Di(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];ll.setFromBufferAttribute(d),this.morphTargetsRelative?(Un.addVectors(_i.min,ll.min),_i.expandByPoint(Un),Un.addVectors(_i.max,ll.max),_i.expandByPoint(Un)):(_i.expandByPoint(ll.min),_i.expandByPoint(ll.max))}_i.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Un.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Un));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Un.fromBufferAttribute(d,p),m&&(Kr.fromBufferAttribute(e,p),Un.add(Kr)),o=Math.max(o,r.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ua(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new ee,m[T]=new ee;const p=new ee,g=new ee,_=new ee,v=new Nt,S=new Nt,E=new Nt,w=new ee,y=new ee;function M(T,L,X){p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),_.fromBufferAttribute(r,X),v.fromBufferAttribute(c,T),S.fromBufferAttribute(c,L),E.fromBufferAttribute(c,X),g.sub(p),_.sub(p),S.sub(v),E.sub(v);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),d[T].add(w),d[L].add(w),d[X].add(w),m[T].add(y),m[L].add(y),m[X].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,L=P.length;T<L;++T){const X=P[T],V=X.start,j=X.count;for(let ue=V,fe=V+j;ue<fe;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const z=new ee,C=new ee,I=new ee,N=new ee;function B(T){I.fromBufferAttribute(o,T),N.copy(I);const L=d[T];z.copy(L),z.sub(I.multiplyScalar(I.dot(L))).normalize(),C.crossVectors(N,L);const V=C.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,L=P.length;T<L;++T){const X=P[T],V=X.start,j=X.count;for(let ue=V,fe=V+j;ue<fe;ue+=3)B(e.getX(ue+0)),B(e.getX(ue+1)),B(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ua(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ee,c=new ee,u=new ee,d=new ee,m=new ee,p=new ee,g=new ee,_=new ee;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Un.fromBufferAttribute(e,i),Un.normalize(),e.setXYZ(i,Un.x,Un.y,Un.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*g;for(let M=0;M<g;M++)v[E++]=p[S++]}return new ua(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bE=0;class xu extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=io,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Eh,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yh&&(r.blendSrc=this.blendSrc),this.blendDst!==Eh&&(r.blendDst=this.blendDst),this.blendEquation!==Js&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Nt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oa=new ee,ih=new ee,Vc=new ee,vs=new ee,ah=new ee,kc=new ee,sh=new ee;class TE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){ih.copy(e).add(i).multiplyScalar(.5),Vc.copy(i).sub(e).normalize(),vs.copy(this.origin).sub(ih);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Vc),d=vs.dot(this.direction),m=-vs.dot(Vc),p=vs.lengthSq(),g=Math.abs(1-u*u);let _,v,S,E;if(g>0)if(_=u*m-d,v=u*d-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,S=_*(_+u*v+2*d)+v*(u*_+v+2*m)+p}else v=c,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ih).addScaledVector(Vc,v),S}intersectSphere(e,i){Oa.subVectors(e.center,this.origin);const r=Oa.dot(this.direction),o=Oa.dot(Oa)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,r,o,c){ah.subVectors(i,e),kc.subVectors(r,e),sh.crossVectors(ah,kc);let u=this.direction.dot(sh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vs.subVectors(this.origin,e);const m=d*this.direction.dot(kc.crossVectors(vs,kc));if(m<0)return null;const p=d*this.direction.dot(ah.cross(vs));if(p<0||m+p>u)return null;const g=-d*vs.dot(sh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ap extends xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const j_=new vn,js=new TE,Xc=new Tp,Z_=new ee,Wc=new ee,qc=new ee,Yc=new ee,rh=new ee,jc=new ee,K_=new ee,Zc=new ee;class Ni extends vi{constructor(e=new Li,i=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){jc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(rh.fromBufferAttribute(_,e),u?jc.addScaledVector(rh,g):jc.addScaledVector(rh.sub(i),g))}i.add(jc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(c),js.copy(e.ray).recast(e.near),!(Xc.containsPoint(js.origin)===!1&&(js.intersectSphere(Xc,Z_)===null||js.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(j_.copy(c).invert(),js.copy(e.ray).applyMatrix4(j_),!(r.boundingBox!==null&&js.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,js)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],P=Math.max(y.start,S.start),z=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,I=z;C<I;C+=3){const N=d.getX(C),B=d.getX(C+1),T=d.getX(C+2);o=Kc(this,M,e,r,p,g,_,N,B,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,M=w;y<M;y+=3){const P=d.getX(y),z=d.getX(y+1),C=d.getX(y+2);o=Kc(this,u,e,r,p,g,_,P,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],P=Math.max(y.start,S.start),z=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,I=z;C<I;C+=3){const N=C,B=C+1,T=C+2;o=Kc(this,M,e,r,p,g,_,N,B,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let y=E,M=w;y<M;y+=3){const P=y,z=y+1,C=y+2;o=Kc(this,u,e,r,p,g,_,P,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function AE(a,e,i,r,o,c,u,d){let m;if(e.side===si?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===Ba,d),m===null)return null;Zc.copy(d),Zc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Zc);return p<i.near||p>i.far?null:{distance:p,point:Zc.clone(),object:a}}function Kc(a,e,i,r,o,c,u,d,m,p){a.getVertexPosition(d,Wc),a.getVertexPosition(m,qc),a.getVertexPosition(p,Yc);const g=AE(a,e,i,r,Wc,qc,Yc,K_);if(g){const _=new ee;qi.getBarycoord(K_,Wc,qc,Yc,_),o&&(g.uv=qi.getInterpolatedAttribute(o,d,m,p,_,new Nt)),c&&(g.uv1=qi.getInterpolatedAttribute(c,d,m,p,_,new Nt)),u&&(g.normal=qi.getInterpolatedAttribute(u,d,m,p,_,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new ee,materialIndex:0};qi.getNormal(Wc,qc,Yc,v.normal),g.face=v,g.barycoord=_}return g}class RE extends qn{constructor(e=null,i=1,r=1,o,c,u,d,m,p=Hn,g=Hn,_,v){super(null,u,d,m,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new ee,CE=new ee,wE=new ct;class Qs{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=oh.subVectors(r,i).cross(CE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(oh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||wE.getNormalMatrix(e),o=this.coplanarPoint(oh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new Tp,DE=new Nt(.5,.5),Qc=new ee;class xx{constructor(e=new Qs,i=new Qs,r=new Qs,o=new Qs,c=new Qs,u=new Qs){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],S=c[7],E=c[8],w=c[9],y=c[10],M=c[11],P=c[12],z=c[13],C=c[14],I=c[15];if(o[0].setComponents(p-u,S-g,M-E,I-P).normalize(),o[1].setComponents(p+u,S+g,M+E,I+P).normalize(),o[2].setComponents(p+d,S+_,M+w,I+z).normalize(),o[3].setComponents(p-d,S-_,M-w,I-z).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(p-m,S-v,M-y,I-C).normalize();else if(o[4].setComponents(p-m,S-v,M-y,I-C).normalize(),i===oa)o[5].setComponents(p+m,S+v,M+y,I+C).normalize();else if(i===pu)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);const i=DE.distanceTo(e.center);return Zs.radius=.7071067811865476+i,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Qc.x=o.normal.x>0?e.max.x:e.min.x,Qc.y=o.normal.y>0?e.max.y:e.min.y,Qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sx extends qn{constructor(e=[],i=nr,r,o,c,u,d,m,p,g){super(e,i,r,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mx extends qn{constructor(e,i,r,o,c,u,d,m,p){super(e,i,r,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uo extends qn{constructor(e,i,r=fa,o,c,u,d=Hn,m=Hn,p,g=Ha,_=1){if(g!==Ha&&g!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class NE extends uo{constructor(e,i=fa,r=nr,o,c,u=Hn,d=Hn,m,p=Ha){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bl extends Li{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Di(p,3)),this.setAttribute("normal",new Di(g,3)),this.setAttribute("uv",new Di(_,2));function E(w,y,M,P,z,C,I,N,B,T,L){const X=C/B,V=I/T,j=C/2,ue=I/2,fe=N/2,q=B+1,F=T+1;let H=0,$=0;const _e=new ee;for(let Me=0;Me<F;Me++){const O=Me*V-ue;for(let K=0;K<q;K++){const ye=K*X-j;_e[w]=ye*P,_e[y]=O*z,_e[M]=fe,p.push(_e.x,_e.y,_e.z),_e[w]=0,_e[y]=0,_e[M]=N>0?1:-1,g.push(_e.x,_e.y,_e.z),_.push(K/B),_.push(1-Me/T),H+=1}}for(let Me=0;Me<T;Me++)for(let O=0;O<B;O++){const K=v+O+q*Me,ye=v+O+q*(Me+1),we=v+(O+1)+q*(Me+1),He=v+(O+1)+q*Me;m.push(K,ye,He),m.push(ye,we,He),$+=6}d.addGroup(S,$,L),S+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class LE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,S=(u-g)/v;return(o+S)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new Nt:new ee);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],d=new ee,m=new vn;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new ee)}c[0]=new ee,u[0]=new ee;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),v<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gt(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}u[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(gt(c[0].dot(c[e]),-1,1));S/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Rp(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,p){o(u,d,p*(d-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,p,g,_){let v=(u-c)/p-(d-c)/(p+g)+(d-u)/g,S=(d-u)/g-(m-u)/(g+_)+(m-d)/_;v*=g,S*=g,o(u,d,v,S)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const Q_=new ee,J_=new ee,lh=new Rp,ch=new Rp,uh=new Rp;class UE extends LE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=o[(d-1)%c]:(J_.subVectors(o[0],o[1]).add(o[0]),p=J_);const _=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(Q_.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Q_),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),w=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),lh.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,E,w,y),ch.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,E,w,y),uh.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),ch.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),uh.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return r.set(lh.calc(m),ch.calc(m),uh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class tr extends Li{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),p=d+1,g=m+1,_=e/d,v=i/m,S=[],E=[],w=[],y=[];for(let M=0;M<g;M++){const P=M*v-u;for(let z=0;z<p;z++){const C=z*_-c;E.push(C,-P,0),w.push(0,0,1),y.push(z/d),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let P=0;P<d;P++){const z=P+p*M,C=P+p*(M+1),I=P+1+p*(M+1),N=P+1+p*M;S.push(z,C,N),S.push(C,I,N)}this.setIndex(S),this.setAttribute("position",new Di(E,3)),this.setAttribute("normal",new Di(w,3)),this.setAttribute("uv",new Di(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}function fo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if($_(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if($_(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function Zn(a){const e={};for(let i=0;i<a.length;i++){const r=fo(a[i]);for(const o in r)e[o]=r[o]}return e}function $_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function OE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Ex(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const PE={clone:fo,merge:Zn};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Nt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new fn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new vn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class BE extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zE extends xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jc=new ee,$c=new po,na=new ee;class bx extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jc,$c,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,na.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Jc,$c,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new ee,ev=new Nt,tv=new Nt;class Ci extends bx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,i){return this.getViewBounds(e,ev,tv),i.subVectors(tv,ev)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(gl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Tx extends bx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Qr=-90,Jr=1;class GE extends vi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(Qr,Jr,e,i);o.layers=this.layers,this.add(o);const c=new Ci(Qr,Jr,e,i);c.layers=this.layers,this.add(c);const u=new Ci(Qr,Jr,e,i);u.layers=this.layers,this.add(u);const d=new Ci(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const m=new Ci(Qr,Jr,e,i);m.layers=this.layers,this.add(m);const p=new Ci(Qr,Jr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const p of i)this.remove(p);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===pu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class VE extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pp=class Pp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Pp.prototype.isMatrix2=!0;let nv=Pp;function iv(a,e,i,r){const o=kE(r);switch(i){case ux:return a*e;case dx:return a*e/o.components*o.byteLength;case vp:return a*e/o.components*o.byteLength;case ir:return a*e*2/o.components*o.byteLength;case xp:return a*e*2/o.components*o.byteLength;case fx:return a*e*3/o.components*o.byteLength;case ji:return a*e*4/o.components*o.byteLength;case Sp:return a*e*4/o.components*o.byteLength;case au:case su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ru:case ou:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Oh:case Ih:return Math.max(a,16)*Math.max(e,8)/4;case Uh:case Ph:return Math.max(a,8)*Math.max(e,8)/2;case Fh:case Bh:case Hh:case Gh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case zh:case uu:case Vh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case qh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case ip:case ap:case sp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case rp:case op:return Math.ceil(a/4)*Math.ceil(e/4)*8;case fu:case lp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kE(a){switch(a){case wi:case rx:return{byteLength:1,components:1};case xl:case ox:case za:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case fa:case mp:case ra:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ax(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function XE(a){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(a.bindBuffer(p,d),_.length===0)a.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],w=_[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const w=_[S];a.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
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
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
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
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ab=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,kb=`uniform sampler2D dfgLUT;
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
}`,Xb=`
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t1=`#if defined( USE_POINTS_UV )
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
#endif`,n1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
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
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p1=`#ifdef USE_NORMALMAP
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
#endif`,m1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,P1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q1=`uniform sampler2D t2D;
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`#include <common>
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
}`,J1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,eT=`#define DISTANCE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#include <common>
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
}`,rT=`uniform vec3 diffuse;
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define LAMBERT
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
}`,cT=`#define MATCAP
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
}`,uT=`#define MATCAP
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
}`,fT=`#define NORMAL
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
}`,dT=`#define NORMAL
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
}`,hT=`#define PHONG
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
}`,pT=`#define PHONG
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
}`,mT=`#define STANDARD
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
}`,gT=`#define STANDARD
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
}`,_T=`#define TOON
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
}`,vT=`#define TOON
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
}`,xT=`uniform float size;
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#include <common>
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
}`,yT=`uniform vec3 color;
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
}`,ET=`uniform float rotation;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:WE,alphahash_pars_fragment:qE,alphamap_fragment:YE,alphamap_pars_fragment:jE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:ab,bumpmap_pars_fragment:sb,clipping_planes_fragment:rb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:hb,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:_b,displacementmap_vertex:vb,emissivemap_fragment:xb,emissivemap_pars_fragment:Sb,colorspace_fragment:Mb,colorspace_pars_fragment:yb,envmap_fragment:Eb,envmap_common_pars_fragment:bb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Fb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:wb,fog_fragment:Db,fog_pars_fragment:Nb,gradientmap_pars_fragment:Lb,lightmap_pars_fragment:Ub,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Pb,lights_pars_begin:Ib,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Hb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Vb,lights_physical_pars_fragment:kb,lights_fragment_begin:Xb,lights_fragment_maps:Wb,lights_fragment_end:qb,lightprobes_pars_fragment:Yb,logdepthbuf_fragment:jb,logdepthbuf_pars_fragment:Zb,logdepthbuf_pars_vertex:Kb,logdepthbuf_vertex:Qb,map_fragment:Jb,map_pars_fragment:$b,map_particle_fragment:e1,map_particle_pars_fragment:t1,metalnessmap_fragment:n1,metalnessmap_pars_fragment:i1,morphinstance_vertex:a1,morphcolor_vertex:s1,morphnormal_vertex:r1,morphtarget_pars_vertex:o1,morphtarget_vertex:l1,normal_fragment_begin:c1,normal_fragment_maps:u1,normal_pars_fragment:f1,normal_pars_vertex:d1,normal_vertex:h1,normalmap_pars_fragment:p1,clearcoat_normal_fragment_begin:m1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:_1,iridescence_pars_fragment:v1,opaque_fragment:x1,packing:S1,premultiplied_alpha_fragment:M1,project_vertex:y1,dithering_fragment:E1,dithering_pars_fragment:b1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:R1,shadowmap_pars_vertex:C1,shadowmap_vertex:w1,shadowmask_pars_fragment:D1,skinbase_vertex:N1,skinning_pars_vertex:L1,skinning_vertex:U1,skinnormal_vertex:O1,specularmap_fragment:P1,specularmap_pars_fragment:I1,tonemapping_fragment:F1,tonemapping_pars_fragment:B1,transmission_fragment:z1,transmission_pars_fragment:H1,uv_pars_fragment:G1,uv_pars_vertex:V1,uv_vertex:k1,worldpos_vertex:X1,background_vert:W1,background_frag:q1,backgroundCube_vert:Y1,backgroundCube_frag:j1,cube_vert:Z1,cube_frag:K1,depth_vert:Q1,depth_frag:J1,distance_vert:$1,distance_frag:eT,equirect_vert:tT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:aT,meshbasic_vert:sT,meshbasic_frag:rT,meshlambert_vert:oT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:uT,meshnormal_vert:fT,meshnormal_frag:dT,meshphong_vert:hT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:vT,points_vert:xT,points_frag:ST,shadow_vert:MT,shadow_frag:yT,sprite_vert:ET,sprite_frag:bT},ke={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},aa={basic:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Zn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Zn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Zn([ke.points,ke.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Zn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Zn([ke.common,ke.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Zn([ke.sprite,ke.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Zn([ke.common,ke.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Zn([ke.lights,ke.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};aa.physical={uniforms:Zn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const eu={r:0,b:0,g:0},TT=new vn,Rx=new ct;Rx.set(-1,0,0,0,1,0,0,0,1);function AT(a,e,i,r,o,c){const u=new Tt(0);let d=o===!0?0:1,m,p,g=null,_=0,v=null;function S(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const C=P.backgroundBlurriness>0;z=e.get(z,C)}return z}function E(P){let z=!1;const C=S(P);C===null?y(u,d):C&&C.isColor&&(y(C,1),z=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(P,z){const C=S(z);C&&(C.isCubeTexture||C.mapping===vu)?(p===void 0&&(p=new Ni(new bl(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:fo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Rx),p.material.toneMapped=bt.getTransfer(C.colorSpace)!==Xt,(g!==C||_!==C.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ni(new tr(2,2),new Ui({name:"BackgroundMaterial",uniforms:fo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=bt.getTransfer(C.colorSpace)!==Xt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function y(P,z){P.getRGB(eu,Ex(a)),i.buffers.color.setClear(eu.r,eu.g,eu.b,z,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,z=1){u.set(P),d=z,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,y(u,d)},render:E,addToRenderList:w,dispose:M}}function RT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(V,j,ue,fe,q){let F=!1;const H=_(V,fe,ue,j);c!==H&&(c=H,p(c.object)),F=S(V,fe,ue,q),F&&E(V,fe,ue,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,C(V,j,ue,fe),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function p(V){return a.bindVertexArray(V)}function g(V){return a.deleteVertexArray(V)}function _(V,j,ue,fe){const q=fe.wireframe===!0;let F=r[j.id];F===void 0&&(F={},r[j.id]=F);const H=V.isInstancedMesh===!0?V.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let _e=$[ue.id];_e===void 0&&(_e={},$[ue.id]=_e);let Me=_e[q];return Me===void 0&&(Me=v(m()),_e[q]=Me),Me}function v(V){const j=[],ue=[],fe=[];for(let q=0;q<i;q++)j[q]=0,ue[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:fe,object:V,attributes:{},index:null}}function S(V,j,ue,fe){const q=c.attributes,F=j.attributes;let H=0;const $=ue.getAttributes();for(const _e in $)if($[_e].location>=0){const O=q[_e];let K=F[_e];if(K===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==fe}function E(V,j,ue,fe){const q={},F=j.attributes;let H=0;const $=ue.getAttributes();for(const _e in $)if($[_e].location>=0){let O=F[_e];O===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),q[_e]=K,H++}c.attributes=q,c.attributesNum=H,c.index=fe}function w(){const V=c.newAttributes;for(let j=0,ue=V.length;j<ue;j++)V[j]=0}function y(V){M(V,0)}function M(V,j){const ue=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ue[V]=1,fe[V]===0&&(a.enableVertexAttribArray(V),fe[V]=1),q[V]!==j&&(a.vertexAttribDivisor(V,j),q[V]=j)}function P(){const V=c.newAttributes,j=c.enabledAttributes;for(let ue=0,fe=j.length;ue<fe;ue++)j[ue]!==V[ue]&&(a.disableVertexAttribArray(ue),j[ue]=0)}function z(V,j,ue,fe,q,F,H){H===!0?a.vertexAttribIPointer(V,j,ue,q,F):a.vertexAttribPointer(V,j,ue,fe,q,F)}function C(V,j,ue,fe){w();const q=fe.attributes,F=ue.getAttributes(),H=j.defaultAttributeValues;for(const $ in F){const _e=F[$];if(_e.location>=0){let Me=q[$];if(Me===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(Me=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(Me=V.instanceColor)),Me!==void 0){const O=Me.normalized,K=Me.itemSize,ye=e.get(Me);if(ye===void 0)continue;const we=ye.buffer,He=ye.type,se=ye.bytesPerElement,be=He===a.INT||He===a.UNSIGNED_INT||Me.gpuType===mp;if(Me.isInterleavedBufferAttribute){const Te=Me.data,We=Te.stride,it=Me.offset;if(Te.isInstancedInterleavedBuffer){for(let et=0;et<_e.locationSize;et++)M(_e.location+et,Te.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let et=0;et<_e.locationSize;et++)y(_e.location+et);a.bindBuffer(a.ARRAY_BUFFER,we);for(let et=0;et<_e.locationSize;et++)z(_e.location+et,K/_e.locationSize,He,O,We*se,(it+K/_e.locationSize*et)*se,be)}else{if(Me.isInstancedBufferAttribute){for(let Te=0;Te<_e.locationSize;Te++)M(_e.location+Te,Me.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Te=0;Te<_e.locationSize;Te++)y(_e.location+Te);a.bindBuffer(a.ARRAY_BUFFER,we);for(let Te=0;Te<_e.locationSize;Te++)z(_e.location+Te,K/_e.locationSize,He,O,K*se,K/_e.locationSize*Te*se,be)}}else if(H!==void 0){const O=H[$];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(_e.location,O);break;case 3:a.vertexAttrib3fv(_e.location,O);break;case 4:a.vertexAttrib4fv(_e.location,O);break;default:a.vertexAttrib1fv(_e.location,O)}}}}P()}function I(){L();for(const V in r){const j=r[V];for(const ue in j){const fe=j[ue];for(const q in fe){const F=fe[q];for(const H in F)g(F[H].object),delete F[H];delete fe[q]}}delete r[V]}}function N(V){if(r[V.id]===void 0)return;const j=r[V.id];for(const ue in j){const fe=j[ue];for(const q in fe){const F=fe[q];for(const H in F)g(F[H].object),delete F[H];delete fe[q]}}delete r[V.id]}function B(V){for(const j in r){const ue=r[j];for(const fe in ue){const q=ue[fe];if(q[V.id]===void 0)continue;const F=q[V.id];for(const H in F)g(F[H].object),delete F[H];delete q[V.id]}}}function T(V){for(const j in r){const ue=r[j],fe=V.isInstancedMesh===!0?V.id:0,q=ue[fe];if(q!==void 0){for(const F in q){const H=q[F];for(const $ in H)g(H[$].object),delete H[$];delete q[F]}delete ue[fe],Object.keys(ue).length===0&&delete r[j]}}}function L(){X(),u=!0,c!==o&&(c=o,p(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:X,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function CT(a,e,i){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),i.update(p,r,1)}function u(m,p,g){g!==0&&(a.drawArraysInstanced(r,m,p,g),i.update(p,r,g))}function d(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,g);let v=0;for(let S=0;S<g;S++)v+=p[S];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function wT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==ji&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const T=B===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==wi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ra&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(st("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:C,maxSamples:I,samples:N}}function DT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Qs,d=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):p();else{const P=c?0:r,z=P*4;let C=M.clippingState||null;m.value=C,C=g(E,v,z,S);for(let I=0;I!==z;++I)C[I]=i[I];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const M=S+w*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,C=S;z!==w;++z,C+=4)u.copy(_[z]).applyMatrix4(P,d),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Es=4,av=[.125,.215,.35,.446,.526,.582],$s=20,NT=256,cl=new Tx,sv=new Tt;let fh=null,dh=0,hh=0,ph=!1;const LT=new ee;class rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=LT}=c;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===nr||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:za,format:ji,colorSpace:du,depthBuffer:!1},o=ov(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UT(c)),this._blurMaterial=PT(c,e,i),this._ggxMaterial=OT(c,e,i)}return o}_compileMaterial(e){const i=new Ni(new Li,e);this._renderer.compile(i,cl)}_sceneToCubeUV(e,i,r,o,c){const m=new Ci(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(sv),_.toneMapping=la,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new bl,new Ap({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,M=!0):(y.color.copy(sv),M=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const I=this._cubeSize;$r(o,C*I,z>2?I:0,I,I),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=S,_.autoClear=v,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===nr||e.mapping===co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;$r(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,cl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,S=_*v,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-Es?r-E+Es:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,$r(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(d,cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,$r(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(d,cl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*$s-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):$s;y>$s&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$s}`);const M=[];let P=0;for(let B=0;B<$s;++B){const T=B/w,L=Math.exp(-T*T/2);M.push(L),B===0?P+=L:B<y&&(P+=2*L)}for(let B=0;B<M.length;B++)M[B]=M[B]/P;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:z}=this;v.dTheta.value=E,v.mipInt.value=z-r;const C=this._sizeLods[o],I=3*C*(o>z-Es?o-z+Es:0),N=4*(this._cubeSize-C);$r(i,I,N,3*C,2*C),m.setRenderTarget(i),m.render(_,cl)}}function UT(a){const e=[],i=[],r=[];let o=a;const c=a-Es+1+av.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-Es?m=av[u-a+Es-1]:u===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,y=2,M=1,P=new Float32Array(w*E*S),z=new Float32Array(y*E*S),C=new Float32Array(M*E*S);for(let N=0;N<S;N++){const B=N%3*2/3-1,T=N>2?0:-1,L=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];P.set(L,w*E*N),z.set(v,y*E*N);const X=[N,N,N,N,N,N];C.set(X,M*E*N)}const I=new Li;I.setAttribute("position",new ua(P,w)),I.setAttribute("uv",new ua(z,y)),I.setAttribute("faceIndex",new ua(C,M)),r.push(new Ni(I,null)),o>Es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function ov(a,e,i){const r=new ca(a,e,i);return r.texture.mapping=vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $r(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function OT(a,e,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function PT(a,e,i){const r=new Float32Array($s),o=new ee(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function lv(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function cv(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}class Cx extends ca{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Sx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new bl(5,5,5),c=new Ui({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:Ia});c.uniforms.tEquirect.value=i;const u=new Ni(o,c),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Rn),new GE(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function IT(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===Fd||S===Bd)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const w=new Cx(E.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",p),d(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,E=S===Fd||S===Bd,w=S===nr||S===co;if(E||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new rv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const P=v.image;return E&&P&&P.height>0||w&&P&&m(P)?(r===null&&(r=new rv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,S){return S===Fd?v.mapping=nr:S===Bd&&(v.mapping=co),v}function m(v){let S=0;const E=6;for(let w=0;w<E;w++)v[w]!==void 0&&S++;return S===E}function p(v){const S=v.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function FT(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&ao("WebGLRenderer: "+r+" extension not supported."),o}}}function BT(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,E=_.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const P=S.array;w=S.version;for(let z=0,C=P.length;z<C;z+=3){const I=P[z+0],N=P[z+1],B=P[z+2];v.push(I,N,N,B,B,I)}}else{const P=E.array;w=E.version;for(let z=0,C=P.length/3-1;z<C;z+=3){const I=z+0,N=z+1,B=z+2;v.push(I,N,N,B,B,I)}}const y=new(E.count>=65535?vx:_x)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function zT(a,e,i){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function p(_,v,S){S!==0&&(a.drawElementsInstanced(r,v,c,_*u,S),i.update(v,r,S))}function g(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,S);let w=0;for(let y=0;y<S;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function HT(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function GT(a,e,i){const r=new WeakMap,o=new fn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let X=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",X)};var S=X;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let I=d.attributes.position.count*C,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*N*4*_),T=new px(B,I,N,_);T.type=ra,T.needsUpdate=!0;const L=C*4;for(let V=0;V<_;V++){const j=M[V],ue=P[V],fe=z[V],q=I*N*4*V;for(let F=0;F<j.count;F++){const H=F*L;E===!0&&(o.fromBufferAttribute(j,F),B[q+H+0]=o.x,B[q+H+1]=o.y,B[q+H+2]=o.z,B[q+H+3]=0),w===!0&&(o.fromBufferAttribute(ue,F),B[q+H+4]=o.x,B[q+H+5]=o.y,B[q+H+6]=o.z,B[q+H+7]=0),y===!0&&(o.fromBufferAttribute(fe,F),B[q+H+8]=o.x,B[q+H+9]=o.y,B[q+H+10]=o.z,B[q+H+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Nt(I,N)},r.set(d,v),d.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function VT(a,e,i,r,o){let c=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=e.get(p,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return v}function d(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const kT={[Jv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[tx]:"ACES_FILMIC_TONE_MAPPING",[ix]:"AGX_TONE_MAPPING",[ax]:"NEUTRAL_TONE_MAPPING",[nx]:"CUSTOM_TONE_MAPPING"};function XT(a,e,i,r,o,c){const u=new ca(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new uo(e,i):void 0}),d=new ca(e,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new Li;m.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Di([0,2,0,0,2,0],2));const p=new BE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ni(m,p),_=new Tx(-1,1,1,-1,0,1);let v=null,S=null,E=!1,w,y=null,M=[],P=!1;this.setSize=function(z,C){u.setSize(z,C),d.setSize(z,C);for(let I=0;I<M.length;I++){const N=M[I];N.setSize&&N.setSize(z,C)}},this.setEffects=function(z){M=z,P=M.length>0&&M[0].isRenderPass===!0;const C=u.width,I=u.height;for(let N=0;N<M.length;N++){const B=M[N];B.setSize&&B.setSize(C,I)}},this.begin=function(z,C){if(E||z.toneMapping===la&&M.length===0)return!1;if(y=C,C!==null){const I=C.width,N=C.height;(u.width!==I||u.height!==N)&&this.setSize(I,N)}return P===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=la,!0},this.hasRenderPass=function(){return P},this.end=function(z,C){z.toneMapping=w,E=!0;let I=u,N=d;for(let B=0;B<M.length;B++){const T=M[B];if(T.enabled!==!1&&(T.render(z,N,I,C),T.needsSwap!==!1)){const L=I;I=N,N=L}}if(v!==z.outputColorSpace||S!==z.toneMapping){v=z.outputColorSpace,S=z.toneMapping,p.defines={},bt.getTransfer(v)===Xt&&(p.defines.SRGB_TRANSFER="");const B=kT[S];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,z.setRenderTarget(y),z.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),p.dispose()}}const wx=new qn,cp=new uo(1,1),Dx=new px,Nx=new dE,Lx=new Sx,uv=[],fv=[],dv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function mo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=uv[o];if(c===void 0&&(c=new Float32Array(o),uv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function Dn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Nn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Mu(a,e){let i=fv[e];i===void 0&&(i=new Int32Array(e),fv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function WT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function qT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Dn(i,e))return;a.uniform2fv(this.addr,e),Nn(i,e)}}function YT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Dn(i,e))return;a.uniform3fv(this.addr,e),Nn(i,e)}}function jT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Dn(i,e))return;a.uniform4fv(this.addr,e),Nn(i,e)}}function ZT(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Dn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nn(i,e)}else{if(Dn(i,r))return;pv.set(r),a.uniformMatrix2fv(this.addr,!1,pv),Nn(i,r)}}function KT(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Dn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nn(i,e)}else{if(Dn(i,r))return;hv.set(r),a.uniformMatrix3fv(this.addr,!1,hv),Nn(i,r)}}function QT(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Dn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nn(i,e)}else{if(Dn(i,r))return;dv.set(r),a.uniformMatrix4fv(this.addr,!1,dv),Nn(i,r)}}function JT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function $T(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Dn(i,e))return;a.uniform2iv(this.addr,e),Nn(i,e)}}function eA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Dn(i,e))return;a.uniform3iv(this.addr,e),Nn(i,e)}}function tA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Dn(i,e))return;a.uniform4iv(this.addr,e),Nn(i,e)}}function nA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function iA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Dn(i,e))return;a.uniform2uiv(this.addr,e),Nn(i,e)}}function aA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Dn(i,e))return;a.uniform3uiv(this.addr,e),Nn(i,e)}}function sA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Dn(i,e))return;a.uniform4uiv(this.addr,e),Nn(i,e)}}function rA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?yp:Mp,c=cp):c=wx,i.setTexture2D(e||c,o)}function oA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Nx,o)}function lA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Lx,o)}function cA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Dx,o)}function uA(a){switch(a){case 5126:return WT;case 35664:return qT;case 35665:return YT;case 35666:return jT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}function fA(a,e){a.uniform1fv(this.addr,e)}function dA(a,e){const i=mo(e,this.size,2);a.uniform2fv(this.addr,i)}function hA(a,e){const i=mo(e,this.size,3);a.uniform3fv(this.addr,i)}function pA(a,e){const i=mo(e,this.size,4);a.uniform4fv(this.addr,i)}function mA(a,e){const i=mo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function gA(a,e){const i=mo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function _A(a,e){const i=mo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function vA(a,e){a.uniform1iv(this.addr,e)}function xA(a,e){a.uniform2iv(this.addr,e)}function SA(a,e){a.uniform3iv(this.addr,e)}function MA(a,e){a.uniform4iv(this.addr,e)}function yA(a,e){a.uniform1uiv(this.addr,e)}function EA(a,e){a.uniform2uiv(this.addr,e)}function bA(a,e){a.uniform3uiv(this.addr,e)}function TA(a,e){a.uniform4uiv(this.addr,e)}function AA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);Dn(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=cp:u=wx;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function RA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);Dn(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Nx,c[u])}function CA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);Dn(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Lx,c[u])}function wA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);Dn(r,c)||(a.uniform1iv(this.addr,c),Nn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Dx,c[u])}function DA(a){switch(a){case 5126:return fA;case 35664:return dA;case 35665:return hA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return SA;case 35669:case 35673:return MA;case 5125:return yA;case 36294:return EA;case 36295:return bA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return wA}}class NA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=uA(i.type)}}class LA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DA(i.type)}}class UA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function mv(a,e){a.seq.push(e),a.map[e.id]=e}function OA(a,e,i){const r=a.name,o=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),u=mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){mv(i,p===void 0?new NA(d,a,e):new LA(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new UA(d),mv(i,_)),i=_}}}class lu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);OA(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function gv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const PA=37297;let IA=0;function FA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const _v=new ct;function BA(a){bt._getMatrix(_v,bt.workingColorSpace,a);const e=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(a)){case hu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function vv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+FA(a.getShaderSource(e),d)}else return c}function zA(a,e){const i=BA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const HA={[Jv]:"Linear",[$v]:"Reinhard",[ex]:"Cineon",[tx]:"ACESFilmic",[ix]:"AgX",[ax]:"Neutral",[nx]:"Custom"};function GA(a,e){const i=HA[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const tu=new ee;function VA(){bt.getLuminanceCoefficients(tu);const a=tu.x.toFixed(4),e=tu.y.toFixed(4),i=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function XA(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function WA(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function hl(a){return a!==""}function xv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(a){return a.replace(qA,jA)}const YA=new Map;function jA(a,e){let i=ht[e];if(i===void 0){const r=YA.get(e);if(r!==void 0)i=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return up(i)}const ZA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(a){return a.replace(ZA,KA)}function KA(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function yv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const QA={[iu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function JA(a){return QA[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $A={[nr]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function e2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":$A[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const t2={[co]:"ENVMAP_MODE_REFRACTION"};function n2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":t2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i2={[Qv]:"ENVMAP_BLENDING_MULTIPLY",[Dy]:"ENVMAP_BLENDING_MIX",[Ny]:"ENVMAP_BLENDING_ADD"};function a2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":i2[a.combine]||"ENVMAP_BLENDING_NONE"}function s2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function r2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=JA(i),p=e2(i),g=n2(i),_=a2(i),v=s2(i),S=kA(i),E=XA(c),w=o.createProgram();let y,M,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),M.length>0&&(M+=`
`)):(y=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),M=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?ht.tonemapping_pars_fragment:"",i.toneMapping!==la?GA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,zA("linearToOutputTexel",i.outputColorSpace),VA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),u=up(u),u=xv(u,i),u=Sv(u,i),d=up(d),d=xv(d,i),d=Sv(d,i),u=Mv(u),d=Mv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=P+y+u,C=P+M+d,I=gv(o,o.VERTEX_SHADER,z),N=gv(o,o.FRAGMENT_SHADER,C);o.attachShader(w,I),o.attachShader(w,N),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(V){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",ue=o.getShaderInfoLog(I)||"",fe=o.getShaderInfoLog(N)||"",q=j.trim(),F=ue.trim(),H=fe.trim();let $=!0,_e=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,I,N);else{const Me=vv(o,I,"vertex"),O=vv(o,N,"fragment");Rt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+Me+`
`+O)}else q!==""?st("WebGLProgram: Program Info Log:",q):(F===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:$,programLog:q,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(I),o.deleteShader(N),T=new lu(o,w),L=WA(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(w,PA)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=N,this}let o2=0;class l2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new c2(e),i.set(e,r)),r}}class c2{constructor(e){this.id=o2++,this.code=e,this.usedTimes=0}}function u2(a){return a===ir||a===uu||a===fu}function f2(a,e,i,r,o,c){const u=new mx,d=new l2,m=new Set,p=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,X,V,j,ue){const fe=V.fog,q=j.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),_e=$&&$.mapping===vu?$.image.height:null,Me=S[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const O=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=O!==void 0?O.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let we,He,se,be;if(Me){const Ve=aa[Me];we=Ve.vertexShader,He=Ve.fragmentShader}else{we=T.vertexShader,He=T.fragmentShader;const Ve=d.getVertexShaderStage(T),Bt=d.getFragmentShaderStage(T);d.update(T,Ve,Bt),se=Ve.id,be=Bt.id}const Te=a.getRenderTarget(),We=a.state.buffers.depth.getReversed(),it=j.isInstancedMesh===!0,et=j.isBatchedMesh===!0,Wt=!!T.map,ot=!!T.matcap,pt=!!$,mt=!!T.aoMap,rt=!!T.lightMap,qt=!!T.bumpMap&&T.wireframe===!1,It=!!T.normalMap,Ft=!!T.displacementMap,an=!!T.emissiveMap,Lt=!!T.metalnessMap,Yt=!!T.roughnessMap,Z=T.anisotropy>0,At=T.clearcoat>0,_t=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,oe=Z&&!!T.anisotropyMap,pe=At&&!!T.clearcoatMap,Ue=At&&!!T.clearcoatNormalMap,Ie=At&&!!T.clearcoatRoughnessMap,he=U&&!!T.iridescenceMap,me=U&&!!T.iridescenceThicknessMap,Ne=b&&!!T.sheenColorMap,Ge=b&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,ge=!!T.specularColorMap,Oe=!!T.specularIntensityMap,Pe=J&&!!T.transmissionMap,qe=J&&!!T.thicknessMap,k=!!T.gradientMap,Re=!!T.alphaMap,ce=T.alphaTest>0,Ae=!!T.alphaHash,De=!!T.extensions;let xe=la;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(xe=a.toneMapping);const je={shaderID:Me,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:He,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:et,batchingColor:et&&j._colorsTexture!==null,instancing:it,instancingColor:it&&j.instanceColor!==null,instancingMorph:it&&j.morphTexture!==null,outputColorSpace:Te===null?a.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:ot,envMap:pt,envMapMode:pt&&$.mapping,envMapCubeUVHeight:_e,aoMap:mt,lightMap:rt,bumpMap:qt,normalMap:It,displacementMap:Ft,emissiveMap:an,normalMapObjectSpace:It&&T.normalMapType===Oy,normalMapTangentSpace:It&&T.normalMapType===D_,packedNormalMap:It&&T.normalMapType===D_&&u2(T.normalMap.format),metalnessMap:Lt,roughnessMap:Yt,anisotropy:Z,anisotropyMap:oe,clearcoat:At,clearcoatMap:pe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ie,dispersion:_t,iridescence:U,iridescenceMap:he,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Ne,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:ge,specularIntensityMap:Oe,transmission:J,transmissionMap:Pe,thicknessMap:qe,gradientMap:k,opaque:T.transparent===!1&&T.blending===io&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ce,alphaHash:Ae,combine:T.combine,mapUv:Wt&&E(T.map.channel),aoMapUv:mt&&E(T.aoMap.channel),lightMapUv:rt&&E(T.lightMap.channel),bumpMapUv:qt&&E(T.bumpMap.channel),normalMapUv:It&&E(T.normalMap.channel),displacementMapUv:Ft&&E(T.displacementMap.channel),emissiveMapUv:an&&E(T.emissiveMap.channel),metalnessMapUv:Lt&&E(T.metalnessMap.channel),roughnessMapUv:Yt&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:pe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(T.sheenRoughnessMap.channel),specularMapUv:Fe&&E(T.specularMap.channel),specularColorMapUv:ge&&E(T.specularColorMap.channel),specularIntensityMapUv:Oe&&E(T.specularIntensityMap.channel),transmissionMapUv:Pe&&E(T.transmissionMap.channel),thicknessMapUv:qe&&E(T.thicknessMap.channel),alphaMapUv:Re&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(It||Z),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Wt||Re),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:We,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ye,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:xe,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===Xt,decodeVideoTextureEmissive:an&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===Xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===sa,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)L.push(X),L.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(M(L,T),P(L,T),L.push(a.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function M(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const L=S[T.type];let X;if(L){const V=aa[L];X=PE.clone(V.uniforms)}else X=T.uniforms;return X}function C(T,L){let X=g.get(L);return X!==void 0?++X.usedTimes:(X=new r2(a,L,T,o),p.push(X),g.set(L,X)),X}function I(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function B(){d.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:B}}function d2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function h2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Ev(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function bv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,E,w,y,M){let P=a[e];return P===void 0?(P={id:v.id,object:v,geometry:S,material:E,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=P):(P.id=v.id,P.object=v,P.geometry=S,P.material=E,P.materialVariant=u(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=y,P.group=M),e++,P}function m(v,S,E,w,y,M){const P=d(v,S,E,w,y,M);E.transmission>0?r.push(P):E.transparent===!0?o.push(P):i.push(P)}function p(v,S,E,w,y,M){const P=d(v,S,E,w,y,M);E.transmission>0?r.unshift(P):E.transparent===!0?o.unshift(P):i.unshift(P)}function g(v,S,E){i.length>1&&i.sort(v||h2),r.length>1&&r.sort(S||Ev),o.length>1&&o.sort(S||Ev),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,S=a.length;v<S;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:_,sort:g}}function p2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new bv,a.set(r,[u])):o>=c.length?(u=new bv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function m2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Tt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function g2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let _2=0;function v2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function x2(a){const e=new m2,i=g2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,c=new vn,u=new vn;function d(p){let g=0,_=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,w=0,y=0,M=0,P=0,z=0,C=0,I=0,N=0,B=0;p.sort(v2);for(let L=0,X=p.length;L<X;L++){const V=p[L],j=V.color,ue=V.intensity,fe=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ir?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=j.r*ue,_+=j.g*ue,v+=j.b*ue;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ue);B++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[S]=$,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=F,S++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(j).multiplyScalar(ue),F.distance=fe,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[w]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,H.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=q,C++}w++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(j).multiplyScalar(ue),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=V.shadow.matrix,z++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ue),F.groundColor.copy(V.groundColor).multiplyScalar(ue),r.hemi[M]=F,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==P||T.numPointShadows!==z||T.numSpotShadows!==C||T.numSpotMaps!==I||T.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=P,T.numPointShadows=z,T.numSpotShadows=C,T.numSpotMaps=I,T.numLightProbes=B,r.version=_2++)}function m(p,g){let _=0,v=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let M=0,P=p.length;M<P;M++){const z=p[M];if(z.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(z.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(z.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(z.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:r}}function Tv(a){const e=new x2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function m(v){o.push(v)}function p(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function S2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Tv(a),e.set(o,[d])):c>=u.length?(d=new Tv(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const M2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y2=`uniform sampler2D shadow_pass;
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
}`,E2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],b2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Av=new vn,ul=new ee,gh=new ee;function T2(a,e,i){let r=new xx;const o=new Nt,c=new Nt,u=new fn,d=new zE,m=new HE,p={},g=i.maxTextureSize,_={[Ba]:si,[si]:Ba,[sa]:sa},v=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:M2,fragmentShader:y2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Li;E.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ni(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let M=this.type;this.render=function(N,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===fy&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=iu);const L=a.getRenderTarget(),X=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Ia),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ue=M!==this.type;ue&&B.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=N.length;fe<q;fe++){const F=N[fe],H=F.shadow;if(H===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const _e=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||ue===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fl){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ca(o.x,o.y,{format:ir,type:za,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new uo(o.x,o.y,ra),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ha,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn}else F.isPointLight?(H.map=new Cx(o.x),H.map.depthTexture=new NE(o.x,fa)):(H.map=new ca(o.x,o.y),H.map.depthTexture=new uo(o.x,o.y,fa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ha,this.type===iu?(H.map.depthTexture.compareFunction=_e?yp:Mp,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn);H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Me;O++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,O),a.clear();else{O===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(O);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(u)}if(F.isPointLight){const K=H.camera,ye=H.matrix,we=F.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),ul.setFromMatrixPosition(F.matrixWorld),K.position.copy(ul),gh.copy(K.position),gh.add(E2[O]),K.up.copy(b2[O]),K.lookAt(gh),K.updateMatrixWorld(),ye.makeTranslation(-ul.x,-ul.y,-ul.z),Av.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Av,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),C(B,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===fl&&P(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(L,X,V)};function P(N,B){const T=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ca(o.x,o.y,{format:ir,type:za})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(B,null,T,S,w,null)}function z(N,B,T,L){let X=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=X.uuid,ue=B.uuid;let fe=p[j];fe===void 0&&(fe={},p[j]=fe);let q=fe[ue];q===void 0&&(q=X.clone(),fe[ue]=q,B.addEventListener("dispose",I)),X=q}if(X.visible=B.visible,X.wireframe=B.wireframe,L===fl?X.side=B.shadowSide!==null?B.shadowSide:B.side:X.side=B.shadowSide!==null?B.shadowSide:_[B.side],X.alphaMap=B.alphaMap,X.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,X.map=B.map,X.clipShadows=B.clipShadows,X.clippingPlanes=B.clippingPlanes,X.clipIntersection=B.clipIntersection,X.displacementMap=B.displacementMap,X.displacementScale=B.displacementScale,X.displacementBias=B.displacementBias,X.wireframeLinewidth=B.wireframeLinewidth,X.linewidth=B.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const j=a.properties.get(X);j.light=T}return X}function C(N,B,T,L,X){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===fl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),fe=N.material;if(Array.isArray(fe)){const q=ue.groups;for(let F=0,H=q.length;F<H;F++){const $=q[F],_e=fe[$.materialIndex];if(_e&&_e.visible){const Me=z(N,_e,L,X);N.onBeforeShadow(a,N,B,T,ue,Me,$),a.renderBufferDirect(T,null,ue,Me,N,$),N.onAfterShadow(a,N,B,T,ue,Me,$)}}}else if(fe.visible){const q=z(N,fe,L,X);N.onBeforeShadow(a,N,B,T,ue,q,null),a.renderBufferDirect(T,null,ue,q,N,null),N.onAfterShadow(a,N,B,T,ue,q,null)}}const j=N.children;for(let ue=0,fe=j.length;ue<fe;ue++)C(j[ue],B,T,L,X)}function I(N){N.target.removeEventListener("dispose",I);for(const T in p){const L=p[T],X=N.target.uuid;X in L&&(L[X].dispose(),delete L[X])}}}function A2(a,e){function i(){let k=!1;const Re=new fn;let ce=null;const Ae=new fn(0,0,0,0);return{setMask:function(De){ce!==De&&!k&&(a.colorMask(De,De,De,De),ce=De)},setLocked:function(De){k=De},setClear:function(De,xe,je,Ve,Bt){Bt===!0&&(De*=Ve,xe*=Ve,je*=Ve),Re.set(De,xe,je,Ve),Ae.equals(Re)===!1&&(a.clearColor(De,xe,je,Ve),Ae.copy(Re))},reset:function(){k=!1,ce=null,Ae.set(-1,0,0,0)}}}function r(){let k=!1,Re=!1,ce=null,Ae=null,De=null;return{setReversed:function(xe){if(Re!==xe){const je=e.get("EXT_clip_control");xe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(xe){xe?Te(a.DEPTH_TEST):We(a.DEPTH_TEST)},setMask:function(xe){ce!==xe&&!k&&(a.depthMask(xe),ce=xe)},setFunc:function(xe){if(Re&&(xe=Xy[xe]),Ae!==xe){switch(xe){case bh:a.depthFunc(a.NEVER);break;case Th:a.depthFunc(a.ALWAYS);break;case Ah:a.depthFunc(a.LESS);break;case lo:a.depthFunc(a.LEQUAL);break;case Rh:a.depthFunc(a.EQUAL);break;case Ch:a.depthFunc(a.GEQUAL);break;case wh:a.depthFunc(a.GREATER);break;case Dh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ae=xe}},setLocked:function(xe){k=xe},setClear:function(xe){De!==xe&&(De=xe,Re&&(xe=1-xe),a.clearDepth(xe))},reset:function(){k=!1,ce=null,Ae=null,De=null,Re=!1}}}function o(){let k=!1,Re=null,ce=null,Ae=null,De=null,xe=null,je=null,Ve=null,Bt=null;return{setTest:function(Ut){k||(Ut?Te(a.STENCIL_TEST):We(a.STENCIL_TEST))},setMask:function(Ut){Re!==Ut&&!k&&(a.stencilMask(Ut),Re=Ut)},setFunc:function(Ut,xn,hn){(ce!==Ut||Ae!==xn||De!==hn)&&(a.stencilFunc(Ut,xn,hn),ce=Ut,Ae=xn,De=hn)},setOp:function(Ut,xn,hn){(xe!==Ut||je!==xn||Ve!==hn)&&(a.stencilOp(Ut,xn,hn),xe=Ut,je=xn,Ve=hn)},setLocked:function(Ut){k=Ut},setClear:function(Ut){Bt!==Ut&&(a.clearStencil(Ut),Bt=Ut)},reset:function(){k=!1,Re=null,ce=null,Ae=null,De=null,xe=null,je=null,Ve=null,Bt=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v={},S=new WeakMap,E=[],w=null,y=!1,M=null,P=null,z=null,C=null,I=null,N=null,B=null,T=new Tt(0,0,0),L=0,X=!1,V=null,j=null,ue=null,fe=null,q=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const _e=a.getParameter(a.VERSION);_e.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=$>=1):_e.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=$>=2);let Me=null,O={};const K=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),we=new fn().fromArray(K),He=new fn().fromArray(ye);function se(k,Re,ce,Ae){const De=new Uint8Array(4),xe=a.createTexture();a.bindTexture(k,xe),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let je=0;je<ce;je++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,Ae,0,a.RGBA,a.UNSIGNED_BYTE,De):a.texImage2D(Re+je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,De);return xe}const be={};be[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Te(a.DEPTH_TEST),u.setFunc(lo),qt(!1),It(R_),Te(a.CULL_FACE),mt(Ia);function Te(k){g[k]!==!0&&(a.enable(k),g[k]=!0)}function We(k){g[k]!==!1&&(a.disable(k),g[k]=!1)}function it(k,Re){return v[k]!==Re?(a.bindFramebuffer(k,Re),v[k]=Re,k===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Re),k===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(k,Re){let ce=E,Ae=!1;if(k){ce=S.get(Re),ce===void 0&&(ce=[],S.set(Re,ce));const De=k.textures;if(ce.length!==De.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,je=De.length;xe<je;xe++)ce[xe]=a.COLOR_ATTACHMENT0+xe;ce.length=De.length,Ae=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,Ae=!0);Ae&&a.drawBuffers(ce)}function Wt(k){return w!==k?(a.useProgram(k),w=k,!0):!1}const ot={[Js]:a.FUNC_ADD,[hy]:a.FUNC_SUBTRACT,[py]:a.FUNC_REVERSE_SUBTRACT};ot[my]=a.MIN,ot[gy]=a.MAX;const pt={[_y]:a.ZERO,[vy]:a.ONE,[xy]:a.SRC_COLOR,[yh]:a.SRC_ALPHA,[Ty]:a.SRC_ALPHA_SATURATE,[Ey]:a.DST_COLOR,[My]:a.DST_ALPHA,[Sy]:a.ONE_MINUS_SRC_COLOR,[Eh]:a.ONE_MINUS_SRC_ALPHA,[by]:a.ONE_MINUS_DST_COLOR,[yy]:a.ONE_MINUS_DST_ALPHA,[Ay]:a.CONSTANT_COLOR,[Ry]:a.ONE_MINUS_CONSTANT_COLOR,[Cy]:a.CONSTANT_ALPHA,[wy]:a.ONE_MINUS_CONSTANT_ALPHA};function mt(k,Re,ce,Ae,De,xe,je,Ve,Bt,Ut){if(k===Ia){y===!0&&(We(a.BLEND),y=!1);return}if(y===!1&&(Te(a.BLEND),y=!0),k!==dy){if(k!==M||Ut!==X){if((P!==Js||I!==Js)&&(a.blendEquation(a.FUNC_ADD),P=Js,I=Js),Ut)switch(k){case io:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Mh:a.blendFunc(a.ONE,a.ONE);break;case C_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case w_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Rt("WebGLState: Invalid blending: ",k);break}else switch(k){case io:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Mh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case C_:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",k);break}z=null,C=null,N=null,B=null,T.set(0,0,0),L=0,M=k,X=Ut}return}De=De||Re,xe=xe||ce,je=je||Ae,(Re!==P||De!==I)&&(a.blendEquationSeparate(ot[Re],ot[De]),P=Re,I=De),(ce!==z||Ae!==C||xe!==N||je!==B)&&(a.blendFuncSeparate(pt[ce],pt[Ae],pt[xe],pt[je]),z=ce,C=Ae,N=xe,B=je),(Ve.equals(T)===!1||Bt!==L)&&(a.blendColor(Ve.r,Ve.g,Ve.b,Bt),T.copy(Ve),L=Bt),M=k,X=!1}function rt(k,Re){k.side===sa?We(a.CULL_FACE):Te(a.CULL_FACE);let ce=k.side===si;Re&&(ce=!ce),qt(ce),k.blending===io&&k.transparent===!1?mt(Ia):mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ae=k.stencilWrite;d.setTest(Ae),Ae&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),an(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Te(a.SAMPLE_ALPHA_TO_COVERAGE):We(a.SAMPLE_ALPHA_TO_COVERAGE)}function qt(k){V!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),V=k)}function It(k){k!==cy?(Te(a.CULL_FACE),k!==j&&(k===R_?a.cullFace(a.BACK):k===uy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):We(a.CULL_FACE),j=k}function Ft(k){k!==ue&&(H&&a.lineWidth(k),ue=k)}function an(k,Re,ce){k?(Te(a.POLYGON_OFFSET_FILL),(fe!==Re||q!==ce)&&(fe=Re,q=ce,u.getReversed()&&(Re=-Re),a.polygonOffset(Re,ce))):We(a.POLYGON_OFFSET_FILL)}function Lt(k){k?Te(a.SCISSOR_TEST):We(a.SCISSOR_TEST)}function Yt(k){k===void 0&&(k=a.TEXTURE0+F-1),Me!==k&&(a.activeTexture(k),Me=k)}function Z(k,Re,ce){ce===void 0&&(Me===null?ce=a.TEXTURE0+F-1:ce=Me);let Ae=O[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},O[ce]=Ae),(Ae.type!==k||Ae.texture!==Re)&&(Me!==ce&&(a.activeTexture(ce),Me=ce),a.bindTexture(k,Re||be[k]),Ae.type=k,Ae.texture=Re)}function At(){const k=O[Me];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{a.compressedTexImage2D(...arguments)}catch(k){Rt("WebGLState:",k)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(k){Rt("WebGLState:",k)}}function b(){try{a.texSubImage2D(...arguments)}catch(k){Rt("WebGLState:",k)}}function J(){try{a.texSubImage3D(...arguments)}catch(k){Rt("WebGLState:",k)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Rt("WebGLState:",k)}}function pe(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Rt("WebGLState:",k)}}function Ue(){try{a.texStorage2D(...arguments)}catch(k){Rt("WebGLState:",k)}}function Ie(){try{a.texStorage3D(...arguments)}catch(k){Rt("WebGLState:",k)}}function he(){try{a.texImage2D(...arguments)}catch(k){Rt("WebGLState:",k)}}function me(){try{a.texImage3D(...arguments)}catch(k){Rt("WebGLState:",k)}}function Ne(k){return _[k]!==void 0?_[k]:a.getParameter(k)}function Ge(k,Re){_[k]!==Re&&(a.pixelStorei(k,Re),_[k]=Re)}function Fe(k){we.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function ge(k){He.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),He.copy(k))}function Oe(k,Re){let ce=p.get(Re);ce===void 0&&(ce=new WeakMap,p.set(Re,ce));let Ae=ce.get(k);Ae===void 0&&(Ae=a.getUniformBlockIndex(Re,k.name),ce.set(k,Ae))}function Pe(k,Re){const Ae=p.get(Re).get(k);m.get(Re)!==Ae&&(a.uniformBlockBinding(Re,Ae,k.__bindingPointIndex),m.set(Re,Ae))}function qe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},Me=null,O={},v={},S=new WeakMap,E=[],w=null,y=!1,M=null,P=null,z=null,C=null,I=null,N=null,B=null,T=new Tt(0,0,0),L=0,X=!1,V=null,j=null,ue=null,fe=null,q=null,we.set(0,0,a.canvas.width,a.canvas.height),He.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Te,disable:We,bindFramebuffer:it,drawBuffers:et,useProgram:Wt,setBlending:mt,setMaterial:rt,setFlipSided:qt,setCullFace:It,setLineWidth:Ft,setPolygonOffset:an,setScissorTest:Lt,activeTexture:Yt,bindTexture:Z,unbindTexture:At,compressedTexImage2D:_t,compressedTexImage3D:U,texImage2D:he,texImage3D:me,pixelStorei:Ge,getParameter:Ne,updateUBOMapping:Oe,uniformBlockBinding:Pe,texStorage2D:Ue,texStorage3D:Ie,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Fe,viewport:ge,reset:qe}}function R2(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,g=new WeakMap,_=new Set;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,b){return E?new OffscreenCanvas(U,b):mu("canvas")}function y(U,b,J){let oe=1;const pe=_t(U);if((pe.width>J||pe.height>J)&&(oe=J/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ue=Math.floor(oe*pe.width),Ie=Math.floor(oe*pe.height);v===void 0&&(v=w(Ue,Ie));const he=b?w(Ue,Ie):v;return he.width=Ue,he.height=Ie,he.getContext("2d").drawImage(U,0,0,Ue,Ie),st("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ue+"x"+Ie+")."),he}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function M(U){return U.generateMipmaps}function P(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(U,b,J,oe,pe,Ue=!1){if(U!==null){if(a[U]!==void 0)return a[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ie;oe&&(Ie=e.get("EXT_texture_norm16"),Ie||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=b;if(b===a.RED&&(J===a.FLOAT&&(he=a.R32F),J===a.HALF_FLOAT&&(he=a.R16F),J===a.UNSIGNED_BYTE&&(he=a.R8),J===a.UNSIGNED_SHORT&&Ie&&(he=Ie.R16_EXT),J===a.SHORT&&Ie&&(he=Ie.R16_SNORM_EXT)),b===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.R8UI),J===a.UNSIGNED_SHORT&&(he=a.R16UI),J===a.UNSIGNED_INT&&(he=a.R32UI),J===a.BYTE&&(he=a.R8I),J===a.SHORT&&(he=a.R16I),J===a.INT&&(he=a.R32I)),b===a.RG&&(J===a.FLOAT&&(he=a.RG32F),J===a.HALF_FLOAT&&(he=a.RG16F),J===a.UNSIGNED_BYTE&&(he=a.RG8),J===a.UNSIGNED_SHORT&&Ie&&(he=Ie.RG16_EXT),J===a.SHORT&&Ie&&(he=Ie.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RG8UI),J===a.UNSIGNED_SHORT&&(he=a.RG16UI),J===a.UNSIGNED_INT&&(he=a.RG32UI),J===a.BYTE&&(he=a.RG8I),J===a.SHORT&&(he=a.RG16I),J===a.INT&&(he=a.RG32I)),b===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGB8UI),J===a.UNSIGNED_SHORT&&(he=a.RGB16UI),J===a.UNSIGNED_INT&&(he=a.RGB32UI),J===a.BYTE&&(he=a.RGB8I),J===a.SHORT&&(he=a.RGB16I),J===a.INT&&(he=a.RGB32I)),b===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),J===a.UNSIGNED_INT&&(he=a.RGBA32UI),J===a.BYTE&&(he=a.RGBA8I),J===a.SHORT&&(he=a.RGBA16I),J===a.INT&&(he=a.RGBA32I)),b===a.RGB&&(J===a.UNSIGNED_SHORT&&Ie&&(he=Ie.RGB16_EXT),J===a.SHORT&&Ie&&(he=Ie.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),b===a.RGBA){const me=Ue?hu:bt.getTransfer(pe);J===a.FLOAT&&(he=a.RGBA32F),J===a.HALF_FLOAT&&(he=a.RGBA16F),J===a.UNSIGNED_BYTE&&(he=me===Xt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Ie&&(he=Ie.RGBA16_EXT),J===a.SHORT&&Ie&&(he=Ie.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(U,b){let J;return U?b===null||b===fa||b===Sl?J=a.DEPTH24_STENCIL8:b===ra?J=a.DEPTH32F_STENCIL8:b===xl&&(J=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fa||b===Sl?J=a.DEPTH_COMPONENT24:b===ra?J=a.DEPTH_COMPONENT32F:b===xl&&(J=a.DEPTH_COMPONENT16),J}function N(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Hn&&U.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),L(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),V(b)}function L(U){const b=r.get(U);if(b.__webglInit===void 0)return;const J=U.source,oe=S.get(J);if(oe){const pe=oe[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&X(U),Object.keys(oe).length===0&&S.delete(J)}r.remove(U)}function X(U){const b=r.get(U);a.deleteTexture(b.__webglTexture);const J=U.source,oe=S.get(J);delete oe[b.__cacheKey],u.memory.textures--}function V(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let pe=0;pe<b.__webglFramebuffer[oe].length;pe++)a.deleteFramebuffer(b.__webglFramebuffer[oe][pe]);else a.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)a.deleteFramebuffer(b.__webglFramebuffer[oe]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=U.textures;for(let oe=0,pe=J.length;oe<pe;oe++){const Ue=r.get(J[oe]);Ue.__webglTexture&&(a.deleteTexture(Ue.__webglTexture),u.memory.textures--),r.remove(J[oe])}r.remove(U)}let j=0;function ue(){j=0}function fe(){return j}function q(U){j=U}function F(){const U=j;return U>=o.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function H(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function $(U,b){const J=r.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const oe=U.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{We(J,U,b);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+b)}function _e(U,b){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){We(J,U,b);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+b)}function Me(U,b){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){We(J,U,b);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+b)}function O(U,b){const J=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){it(J,U,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+b)}const K={[Nh]:a.REPEAT,[Yi]:a.CLAMP_TO_EDGE,[Lh]:a.MIRRORED_REPEAT},ye={[Hn]:a.NEAREST,[Ly]:a.NEAREST_MIPMAP_NEAREST,[Oc]:a.NEAREST_MIPMAP_LINEAR,[Rn]:a.LINEAR,[zd]:a.LINEAR_MIPMAP_NEAREST,[ys]:a.LINEAR_MIPMAP_LINEAR},we={[Py]:a.NEVER,[Hy]:a.ALWAYS,[Iy]:a.LESS,[Mp]:a.LEQUAL,[Fy]:a.EQUAL,[yp]:a.GEQUAL,[By]:a.GREATER,[zy]:a.NOTEQUAL};function He(U,b){if(b.type===ra&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===zd||b.magFilter===Oc||b.magFilter===ys||b.minFilter===Rn||b.minFilter===zd||b.minFilter===Oc||b.minFilter===ys)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,K[b.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,K[b.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,K[b.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,ye[b.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hn||b.minFilter!==Oc&&b.minFilter!==ys||b.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function se(U,b){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const oe=b.source;let pe=S.get(oe);pe===void 0&&(pe={},S.set(oe,pe));const Ue=H(b);if(Ue!==U.__cacheKey){pe[Ue]===void 0&&(pe[Ue]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),pe[Ue].usedTimes++;const Ie=pe[U.__cacheKey];Ie!==void 0&&(pe[U.__cacheKey].usedTimes--,Ie.usedTimes===0&&X(b)),U.__cacheKey=Ue,U.__webglTexture=pe[Ue].texture}return J}function be(U,b,J){return Math.floor(Math.floor(U/J)/b)}function Te(U,b,J,oe){const Ue=U.updateRanges;if(Ue.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,J,oe,b.data);else{Ue.sort((Ge,Fe)=>Ge.start-Fe.start);let Ie=0;for(let Ge=1;Ge<Ue.length;Ge++){const Fe=Ue[Ie],ge=Ue[Ge],Oe=Fe.start+Fe.count,Pe=be(ge.start,b.width,4),qe=be(Fe.start,b.width,4);ge.start<=Oe+1&&Pe===qe&&be(ge.start+ge.count-1,b.width,4)===Pe?Fe.count=Math.max(Fe.count,ge.start+ge.count-Fe.start):(++Ie,Ue[Ie]=ge)}Ue.length=Ie+1;const he=i.getParameter(a.UNPACK_ROW_LENGTH),me=i.getParameter(a.UNPACK_SKIP_PIXELS),Ne=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Ge=0,Fe=Ue.length;Ge<Fe;Ge++){const ge=Ue[Ge],Oe=Math.floor(ge.start/4),Pe=Math.ceil(ge.count/4),qe=Oe%b.width,k=Math.floor(Oe/b.width),Re=Pe,ce=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(a.UNPACK_SKIP_ROWS,k),i.texSubImage2D(a.TEXTURE_2D,0,qe,k,Re,ce,J,oe,b.data)}U.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,he),i.pixelStorei(a.UNPACK_SKIP_PIXELS,me),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ne)}}function We(U,b,J){let oe=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=a.TEXTURE_3D);const pe=se(U,b),Ue=b.source;i.bindTexture(oe,U.__webglTexture,a.TEXTURE0+J);const Ie=r.get(Ue);if(Ue.version!==Ie.__version||pe===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ce=bt.getPrimaries(bt.workingColorSpace),Ae=b.colorSpace===Ms?null:bt.getPrimaries(b.colorSpace),De=b.colorSpace===Ms||ce===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let me=y(b.image,!1,o.maxTextureSize);me=At(b,me);const Ne=c.convert(b.format,b.colorSpace),Ge=c.convert(b.type);let Fe=C(b.internalFormat,Ne,Ge,b.normalized,b.colorSpace,b.isVideoTexture);He(oe,b);let ge;const Oe=b.mipmaps,Pe=b.isVideoTexture!==!0,qe=Ie.__version===void 0||pe===!0,k=Ue.dataReady,Re=N(b,me);if(b.isDepthTexture)Fe=I(b.format===er,b.type),qe&&(Pe?i.texStorage2D(a.TEXTURE_2D,1,Fe,me.width,me.height):i.texImage2D(a.TEXTURE_2D,0,Fe,me.width,me.height,0,Ne,Ge,null));else if(b.isDataTexture)if(Oe.length>0){Pe&&qe&&i.texStorage2D(a.TEXTURE_2D,Re,Fe,Oe[0].width,Oe[0].height);for(let ce=0,Ae=Oe.length;ce<Ae;ce++)ge=Oe[ce],Pe?k&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,ge.width,ge.height,Ne,Ge,ge.data):i.texImage2D(a.TEXTURE_2D,ce,Fe,ge.width,ge.height,0,Ne,Ge,ge.data);b.generateMipmaps=!1}else Pe?(qe&&i.texStorage2D(a.TEXTURE_2D,Re,Fe,me.width,me.height),k&&Te(b,me,Ne,Ge)):i.texImage2D(a.TEXTURE_2D,0,Fe,me.width,me.height,0,Ne,Ge,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&qe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Fe,Oe[0].width,Oe[0].height,me.depth);for(let ce=0,Ae=Oe.length;ce<Ae;ce++)if(ge=Oe[ce],b.format!==ji)if(Ne!==null)if(Pe){if(k)if(b.layerUpdates.size>0){const De=iv(ge.width,ge.height,b.format,b.type);for(const xe of b.layerUpdates){const je=ge.data.subarray(xe*De/ge.data.BYTES_PER_ELEMENT,(xe+1)*De/ge.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,xe,ge.width,ge.height,1,Ne,je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,me.depth,Ne,ge.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ce,Fe,ge.width,ge.height,me.depth,0,ge.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?k&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,me.depth,Ne,Ge,ge.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ce,Fe,ge.width,ge.height,me.depth,0,Ne,Ge,ge.data)}else{Pe&&qe&&i.texStorage2D(a.TEXTURE_2D,Re,Fe,Oe[0].width,Oe[0].height);for(let ce=0,Ae=Oe.length;ce<Ae;ce++)ge=Oe[ce],b.format!==ji?Ne!==null?Pe?k&&i.compressedTexSubImage2D(a.TEXTURE_2D,ce,0,0,ge.width,ge.height,Ne,ge.data):i.compressedTexImage2D(a.TEXTURE_2D,ce,Fe,ge.width,ge.height,0,ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?k&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,ge.width,ge.height,Ne,Ge,ge.data):i.texImage2D(a.TEXTURE_2D,ce,Fe,ge.width,ge.height,0,Ne,Ge,ge.data)}else if(b.isDataArrayTexture)if(Pe){if(qe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Fe,me.width,me.height,me.depth),k)if(b.layerUpdates.size>0){const ce=iv(me.width,me.height,b.format,b.type);for(const Ae of b.layerUpdates){const De=me.data.subarray(Ae*ce/me.data.BYTES_PER_ELEMENT,(Ae+1)*ce/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ae,me.width,me.height,1,Ne,Ge,De)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,Ge,me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Fe,me.width,me.height,me.depth,0,Ne,Ge,me.data);else if(b.isData3DTexture)Pe?(qe&&i.texStorage3D(a.TEXTURE_3D,Re,Fe,me.width,me.height,me.depth),k&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,Ge,me.data)):i.texImage3D(a.TEXTURE_3D,0,Fe,me.width,me.height,me.depth,0,Ne,Ge,me.data);else if(b.isFramebufferTexture){if(qe)if(Pe)i.texStorage2D(a.TEXTURE_2D,Re,Fe,me.width,me.height);else{let ce=me.width,Ae=me.height;for(let De=0;De<Re;De++)i.texImage2D(a.TEXTURE_2D,De,Fe,ce,Ae,0,Ne,Ge,null),ce>>=1,Ae>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const ce=a.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),me.parentNode!==ce){ce.appendChild(me),_.add(b),ce.onpaint=Ae=>{const De=Ae.changedElements;for(const xe of _)De.includes(xe.image)&&(xe.needsUpdate=!0)},ce.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const De=a.RGBA,xe=a.RGBA,je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,De,xe,je,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Pe&&qe){const ce=_t(Oe[0]);i.texStorage2D(a.TEXTURE_2D,Re,Fe,ce.width,ce.height)}for(let ce=0,Ae=Oe.length;ce<Ae;ce++)ge=Oe[ce],Pe?k&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,Ne,Ge,ge):i.texImage2D(a.TEXTURE_2D,ce,Fe,Ne,Ge,ge);b.generateMipmaps=!1}else if(Pe){if(qe){const ce=_t(me);i.texStorage2D(a.TEXTURE_2D,Re,Fe,ce.width,ce.height)}k&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ne,Ge,me)}else i.texImage2D(a.TEXTURE_2D,0,Fe,Ne,Ge,me);M(b)&&P(oe),Ie.__version=Ue.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,J){if(b.image.length!==6)return;const oe=se(U,b),pe=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+J);const Ue=r.get(pe);if(pe.version!==Ue.__version||oe===!0){i.activeTexture(a.TEXTURE0+J);const Ie=bt.getPrimaries(bt.workingColorSpace),he=b.colorSpace===Ms?null:bt.getPrimaries(b.colorSpace),me=b.colorSpace===Ms||Ie===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,Ge=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let xe=0;xe<6;xe++)!Ne&&!Ge?Fe[xe]=y(b.image[xe],!0,o.maxCubemapSize):Fe[xe]=Ge?b.image[xe].image:b.image[xe],Fe[xe]=At(b,Fe[xe]);const ge=Fe[0],Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type),qe=C(b.internalFormat,Oe,Pe,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Re=Ue.__version===void 0||oe===!0,ce=pe.dataReady;let Ae=N(b,ge);He(a.TEXTURE_CUBE_MAP,b);let De;if(Ne){k&&Re&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ae,qe,ge.width,ge.height);for(let xe=0;xe<6;xe++){De=Fe[xe].mipmaps;for(let je=0;je<De.length;je++){const Ve=De[je];b.format!==ji?Oe!==null?k?ce&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,0,0,Ve.width,Ve.height,Oe,Ve.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,qe,Ve.width,Ve.height,0,Ve.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,0,0,Ve.width,Ve.height,Oe,Pe,Ve.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,qe,Ve.width,Ve.height,0,Oe,Pe,Ve.data)}}}else{if(De=b.mipmaps,k&&Re){De.length>0&&Ae++;const xe=_t(Fe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ae,qe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ge){k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe[xe].width,Fe[xe].height,Oe,Pe,Fe[xe].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,qe,Fe[xe].width,Fe[xe].height,0,Oe,Pe,Fe[xe].data);for(let je=0;je<De.length;je++){const Bt=De[je].image[xe].image;k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,0,0,Bt.width,Bt.height,Oe,Pe,Bt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,qe,Bt.width,Bt.height,0,Oe,Pe,Bt.data)}}else{k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe,Pe,Fe[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,qe,Oe,Pe,Fe[xe]);for(let je=0;je<De.length;je++){const Ve=De[je];k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,0,0,Oe,Pe,Ve.image[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,qe,Oe,Pe,Ve.image[xe])}}}M(b)&&P(a.TEXTURE_CUBE_MAP),Ue.__version=pe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function et(U,b,J,oe,pe,Ue){const Ie=c.convert(J.format,J.colorSpace),he=c.convert(J.type),me=C(J.internalFormat,Ie,he,J.normalized,J.colorSpace),Ne=r.get(b),Ge=r.get(J);if(Ge.__renderTarget=b,!Ne.__hasExternalTextures){const Fe=Math.max(1,b.width>>Ue),ge=Math.max(1,b.height>>Ue);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?i.texImage3D(pe,Ue,me,Fe,ge,b.depth,0,Ie,he,null):i.texImage2D(pe,Ue,me,Fe,ge,0,Ie,he,null)}i.bindFramebuffer(a.FRAMEBUFFER,U),Yt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,pe,Ge.__webglTexture,0,Lt(b)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,pe,Ge.__webglTexture,Ue),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Wt(U,b,J){if(a.bindRenderbuffer(a.RENDERBUFFER,U),b.depthBuffer){const oe=b.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,Ue=I(b.stencilBuffer,pe),Ie=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Yt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(b),Ue,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(b),Ue,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ue,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,U)}else{const oe=b.textures;for(let pe=0;pe<oe.length;pe++){const Ue=oe[pe],Ie=c.convert(Ue.format,Ue.colorSpace),he=c.convert(Ue.type),me=C(Ue.internalFormat,Ie,he,Ue.normalized,Ue.colorSpace);Yt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(b),me,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(b),me,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,me,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ot(U,b,J){const oe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(b.depthTexture);if(pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),He(a.TEXTURE_CUBE_MAP,b.depthTexture);const Ne=c.convert(b.depthTexture.format),Ge=c.convert(b.depthTexture.type);let Fe;b.depthTexture.format===Ha?Fe=a.DEPTH_COMPONENT24:b.depthTexture.format===er&&(Fe=a.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Fe,b.width,b.height,0,Ne,Ge,null)}}else $(b.depthTexture,0);const Ue=pe.__webglTexture,Ie=Lt(b),he=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,me=b.depthTexture.format===er?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ha)Yt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Ue,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Ue,0);else if(b.depthTexture.format===er)Yt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Ue,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(U){const b=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=oe}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let oe=0;oe<6;oe++)ot(b.__webglFramebuffer[oe],U,oe);else{const oe=U.texture.mipmaps;oe&&oe.length>0?ot(b.__webglFramebuffer[0],U,0):ot(b.__webglFramebuffer,U,0)}else if(J){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=a.createRenderbuffer(),Wt(b.__webglDepthbuffer[oe],U,!1);else{const pe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=b.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,Ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Ue)}}else{const oe=U.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Wt(b.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Ue)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(U,b,J){const oe=r.get(U);b!==void 0&&et(oe.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&pt(U)}function rt(U){const b=U.texture,J=r.get(U),oe=r.get(b);U.addEventListener("dispose",T);const pe=U.textures,Ue=U.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=b.version,u.memory.textures++),Ue){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let me=0;me<b.mipmaps.length;me++)J.__webglFramebuffer[he][me]=a.createFramebuffer()}else J.__webglFramebuffer[he]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)J.__webglFramebuffer[he]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let he=0,me=pe.length;he<me;he++){const Ne=r.get(pe[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&Yt(U)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<pe.length;he++){const me=pe[he];J.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const Ne=c.convert(me.format,me.colorSpace),Ge=c.convert(me.type),Fe=C(me.internalFormat,Ne,Ge,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),ge=Lt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,ge,Fe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,J.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),Wt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ue){i.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),He(a.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)et(J.__webglFramebuffer[he][me],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else et(J.__webglFramebuffer[he],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(b)&&P(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let he=0,me=pe.length;he<me;he++){const Ne=pe[he],Ge=r.get(Ne);let Fe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Fe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Fe,Ge.__webglTexture),He(Fe,Ne),et(J.__webglFramebuffer,U,Ne,a.COLOR_ATTACHMENT0+he,Fe,0),M(Ne)&&P(Fe)}i.unbindTexture()}else{let he=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(he,oe.__webglTexture),He(he,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)et(J.__webglFramebuffer[me],U,b,a.COLOR_ATTACHMENT0,he,me);else et(J.__webglFramebuffer,U,b,a.COLOR_ATTACHMENT0,he,0);M(b)&&P(he),i.unbindTexture()}U.depthBuffer&&pt(U)}function qt(U){const b=U.textures;for(let J=0,oe=b.length;J<oe;J++){const pe=b[J];if(M(pe)){const Ue=z(U),Ie=r.get(pe).__webglTexture;i.bindTexture(Ue,Ie),P(Ue),i.unbindTexture()}}}const It=[],Ft=[];function an(U){if(U.samples>0){if(Yt(U)===!1){const b=U.textures,J=U.width,oe=U.height;let pe=a.COLOR_BUFFER_BIT;const Ue=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=r.get(U),he=b.length>1;if(he)for(let Ne=0;Ne<b.length;Ne++)i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ne=0;Ne<b.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);const Ge=r.get(b[Ne]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,J,oe,0,0,J,oe,pe,a.NEAREST),m===!0&&(It.length=0,Ft.length=0,It.push(a.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(It.push(Ue),Ft.push(Ue),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ft)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,It))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<b.length;Ne++){i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);const Ge=r.get(b[Ne]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,Ge,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Lt(U){return Math.min(o.maxSamples,U.samples)}function Yt(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(U){const b=u.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function At(U,b){const J=U.colorSpace,oe=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==du&&J!==Ms&&(bt.getTransfer(J)===Xt?(oe!==ji||pe!==wi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",J)),b}function _t(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=F,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=_e,this.setTexture3D=Me,this.setTextureCube=O,this.rebindTextures=mt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function C2(a,e){function i(r,o=Ms){let c;const u=bt.getTransfer(o);if(r===wi)return a.UNSIGNED_BYTE;if(r===gp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===_p)return a.UNSIGNED_SHORT_5_5_5_1;if(r===lx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===cx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===rx)return a.BYTE;if(r===ox)return a.SHORT;if(r===xl)return a.UNSIGNED_SHORT;if(r===mp)return a.INT;if(r===fa)return a.UNSIGNED_INT;if(r===ra)return a.FLOAT;if(r===za)return a.HALF_FLOAT;if(r===ux)return a.ALPHA;if(r===fx)return a.RGB;if(r===ji)return a.RGBA;if(r===Ha)return a.DEPTH_COMPONENT;if(r===er)return a.DEPTH_STENCIL;if(r===dx)return a.RED;if(r===vp)return a.RED_INTEGER;if(r===ir)return a.RG;if(r===xp)return a.RG_INTEGER;if(r===Sp)return a.RGBA_INTEGER;if(r===au||r===su||r===ru||r===ou)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Oh||r===Ph||r===Ih)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fh||r===Bh||r===zh||r===Hh||r===Gh||r===uu||r===Vh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Fh||r===Bh)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===zh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hh)return c.COMPRESSED_R11_EAC;if(r===Gh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===uu)return c.COMPRESSED_RG11_EAC;if(r===Vh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===kh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ep)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===np)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ip||r===ap||r===sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===ip)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rp||r===op||r===fu||r===lp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===rp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`;class N2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new yx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ui({vertexShader:w2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new tr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L2 extends sr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",y=new N2,M={},P=i.getContextAttributes();let z=null,C=null;const I=[],N=[],B=new Nt;let T=null;const L=new Ci;L.viewport=new fn;const X=new Ci;X.viewport=new fn;const V=[L,X],j=new VE;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let be=I[se];return be===void 0&&(be=new Wd,I[se]=be),be.getTargetRaySpace()},this.getControllerGrip=function(se){let be=I[se];return be===void 0&&(be=new Wd,I[se]=be),be.getGripSpace()},this.getHand=function(se){let be=I[se];return be===void 0&&(be=new Wd,I[se]=be),be.getHandSpace()};function q(se){const be=N.indexOf(se.inputSource);if(be===-1)return;const Te=I[be];Te!==void 0&&(Te.update(se.inputSource,se.frame,p||u),Te.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let se=0;se<I.length;se++){const be=N[se];be!==null&&(N[se]=null,I[se].disconnect(be))}ue=null,fe=null,y.reset();for(const se in M)delete M[se];e.setRenderTarget(z),S=null,v=null,_=null,o=null,C=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,We=null,it=null;P.depth&&(it=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=P.stencil?er:Ha,We=P.stencil?Sl:fa);const et={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(et),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new ca(v.textureWidth,v.textureHeight,{format:ji,type:wi,depthTexture:new uo(v.textureWidth,v.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,Te),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new ca(S.framebufferWidth,S.framebufferHeight,{format:ji,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(se){for(let be=0;be<se.removed.length;be++){const Te=se.removed[be],We=N.indexOf(Te);We>=0&&(N[We]=null,I[We].disconnect(Te))}for(let be=0;be<se.added.length;be++){const Te=se.added[be];let We=N.indexOf(Te);if(We===-1){for(let et=0;et<I.length;et++)if(et>=N.length){N.push(Te),We=et;break}else if(N[et]===null){N[et]=Te,We=et;break}if(We===-1)break}const it=I[We];it&&it.connect(Te)}}const $=new ee,_e=new ee;function Me(se,be,Te){$.setFromMatrixPosition(be.matrixWorld),_e.setFromMatrixPosition(Te.matrixWorld);const We=$.distanceTo(_e),it=be.projectionMatrix.elements,et=Te.projectionMatrix.elements,Wt=it[14]/(it[10]-1),ot=it[14]/(it[10]+1),pt=(it[9]+1)/it[5],mt=(it[9]-1)/it[5],rt=(it[8]-1)/it[0],qt=(et[8]+1)/et[0],It=Wt*rt,Ft=Wt*qt,an=We/(-rt+qt),Lt=an*-rt;if(be.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Lt),se.translateZ(an),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),it[10]===-1)se.projectionMatrix.copy(be.projectionMatrix),se.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Yt=Wt+an,Z=ot+an,At=It-Lt,_t=Ft+(We-Lt),U=pt*ot/Z*Yt,b=mt*ot/Z*Yt;se.projectionMatrix.makePerspective(At,_t,U,b,Yt,Z),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function O(se,be){be===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(be.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let be=se.near,Te=se.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),j.near=X.near=L.near=be,j.far=X.far=L.far=Te,(ue!==j.near||fe!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ue=j.near,fe=j.far),j.layers.mask=se.layers.mask|6,L.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const We=se.parent,it=j.cameras;O(j,We);for(let et=0;et<it.length;et++)O(it[et],We);it.length===2?Me(j,L,X):j.projectionMatrix.copy(L.projectionMatrix),K(se,j,We)};function K(se,be,Te){Te===null?se.matrix.copy(be.matrixWorld):(se.matrix.copy(Te.matrixWorld),se.matrix.invert(),se.matrix.multiply(be.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(be.projectionMatrix),se.projectionMatrixInverse.copy(be.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ml*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(se){m=se,v!==null&&(v.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(se){return M[se]};let ye=null;function we(se,be){if(g=be.getViewerPose(p||u),E=be,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let We=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,We=!0);for(let ot=0;ot<Te.length;ot++){const pt=Te[ot];let mt=null;if(S!==null)mt=S.getViewport(pt);else{const qt=_.getViewSubImage(v,pt);mt=qt.viewport,ot===0&&(e.setRenderTargetTextures(C,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(C))}let rt=V[ot];rt===void 0&&(rt=new Ci,rt.layers.enable(ot),rt.viewport=new fn,V[ot]=rt),rt.matrix.fromArray(pt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(pt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(mt.x,mt.y,mt.width,mt.height),ot===0&&(j.matrix.copy(rt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),We===!0&&j.cameras.push(rt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ot=_.getDepthInformation(Te[0]);ot&&ot.isValid&&ot.texture&&y.init(ot,o.renderState)}if(it&&it.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ot=0;ot<Te.length;ot++){const pt=Te[ot].camera;if(pt){let mt=M[pt];mt||(mt=new yx,M[pt]=mt);const rt=_.getCameraImage(pt);mt.sourceTexture=rt}}}}for(let Te=0;Te<I.length;Te++){const We=N[Te],it=I[Te];We!==null&&it!==void 0&&it.update(We,be,p||u)}ye&&ye(se,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),E=null}const He=new Ax;He.setAnimationLoop(we),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const U2=new vn,Ux=new ct;Ux.set(-1,0,0,0,1,0,0,0,1);function O2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Ex(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,P,z,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&S(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&d(y,M)):M.isPointsMaterial?m(y,M,P,z):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===si&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===si&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const P=e.get(M),z=P.envMap,C=P.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(U2.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Ux),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function d(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,P,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*P,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function S(y,M,P){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===si&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const P=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function P2(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const N=I.program;r.uniformBlockBinding(C,N)}function p(C,I){let N=o[C.id];N===void 0&&(y(C),N=g(C),o[C.id]=N,C.addEventListener("dispose",P));const B=I.program;r.updateUBOMapping(C,B);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const I=_();C.__bindingPointIndex=I;const N=a.createBuffer(),B=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,N),N}function _(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const I=o[C.id],N=C.uniforms,B=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let T=0,L=N.length;T<L;T++){const X=N[T];if(Array.isArray(X))for(let V=0,j=X.length;V<j;V++)S(X[V],T,V,B);else S(X,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(C,I,N,B){if(w(C,I,N,B)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let X=0;for(let V=0;V<L.length;V++){const j=L[V],ue=M(j);E(j,C.__data,X),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function E(C,I,N){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,N)}function w(C,I,N,B){const T=C.value,L=I+"_"+N;if(B[L]===void 0)return typeof T=="number"||typeof T=="boolean"?B[L]=T:ArrayBuffer.isView(T)?B[L]=T.slice():B[L]=T.clone(),!0;{const X=B[L];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return B[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function y(C){const I=C.uniforms;let N=0;const B=16;for(let L=0,X=I.length;L<X;L++){const V=Array.isArray(I[L])?I[L]:[I[L]];for(let j=0,ue=V.length;j<ue;j++){const fe=V[j],q=Array.isArray(fe.value)?fe.value:[fe.value];for(let F=0,H=q.length;F<H;F++){const $=q[F],_e=M($),Me=N%B,O=Me%_e.boundary,K=Me+O;N+=O,K!==0&&B-K<_e.storage&&(N+=B-K),fe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=N,N+=_e.storage}}}const T=N%B;return T>0&&(N+=B-T),C.__size=N,C.__cache={},this}function M(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),I}function P(C){const I=C.target;I.removeEventListener("dispose",P);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function z(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:p,dispose:z}}const I2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function F2(){return ia===null&&(ia=new RE(I2,16,16,ir,za),ia.name="DFG_LUT",ia.minFilter=Rn,ia.magFilter=Rn,ia.wrapS=Yi,ia.wrapT=Yi,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class B2{constructor(e={}){const{canvas:i=Vy(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=wi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const w=S,y=new Set([Sp,xp,vp]),M=new Set([wi,fa,xl,Sl,gp,_p]),P=new Uint32Array(4),z=new Int32Array(4),C=new ee;let I=null,N=null;const B=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,j=null,ue=null,fe=null,q=null;this._outputColorSpace=Qn;let F=0,H=0,$=null,_e=-1,Me=null;const O=new fn,K=new fn;let ye=null;const we=new Tt(0);let He=0,se=i.width,be=i.height,Te=1,We=null,it=null;const et=new fn(0,0,se,be),Wt=new fn(0,0,se,be);let ot=!1;const pt=new xx;let mt=!1,rt=!1;const qt=new vn,It=new ee,Ft=new fn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Yt(){return $===null?Te:1}let Z=r;function At(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",xn,!1),Z===null){const Y="webgl2";if(Z=At(Y,A),Z===null)throw At(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let _t,U,b,J,oe,pe,Ue,Ie,he,me,Ne,Ge,Fe,ge,Oe,Pe,qe,k,Re,ce,Ae,De,xe;function je(){_t=new FT(Z),_t.init(),Ae=new C2(Z,_t),U=new wT(Z,_t,e,Ae),b=new A2(Z,_t),U.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),ue=Z.createFramebuffer(),fe=Z.createFramebuffer(),q=Z.createFramebuffer(),J=new HT(Z),oe=new d2,pe=new R2(Z,_t,b,oe,U,Ae,J),Ue=new IT(X),Ie=new XE(Z),De=new RT(Z,Ie),he=new BT(Z,Ie,J,De),me=new VT(Z,he,Ie,De,J),k=new GT(Z,U,pe),Oe=new DT(oe),Ne=new f2(X,Ue,_t,U,De,Oe),Ge=new O2(X,oe),Fe=new p2,ge=new S2(_t),qe=new AT(X,Ue,b,me,E,m),Pe=new T2(X,me,U),xe=new P2(Z,J,U,b),Re=new CT(Z,_t,J),ce=new zT(Z,_t,J),J.programs=Ne.programs,X.capabilities=U,X.extensions=_t,X.properties=oe,X.renderLists=Fe,X.shadowMap=Pe,X.state=b,X.info=J}je(),w!==wi&&(L=new XT(w,i.width,i.height,d,o,c));const Ve=new L2(X,Z);this.xr=Ve,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(se,be,!1))},this.getSize=function(A){return A.set(se,be)},this.setSize=function(A,Y,re=!0){if(Ve.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,be=Y,i.width=Math.floor(A*Te),i.height=Math.floor(Y*Te),re===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(se*Te,be*Te).floor()},this.setDrawingBufferSize=function(A,Y,re){se=A,be=Y,Te=re,i.width=Math.floor(A*re),i.height=Math.floor(Y*re),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===wi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,Y,re,ne){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,Y,re,ne),b.viewport(O.copy(et).multiplyScalar(Te).round())},this.getScissor=function(A){return A.copy(Wt)},this.setScissor=function(A,Y,re,ne){A.isVector4?Wt.set(A.x,A.y,A.z,A.w):Wt.set(A,Y,re,ne),b.scissor(K.copy(Wt).multiplyScalar(Te).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){b.setScissorTest(ot=A)},this.setOpaqueSort=function(A){We=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,re=!0){let ne=0;if(A){let te=!1;if($!==null){const Be=$.texture.format;te=y.has(Be)}if(te){const Be=$.texture.type,Ce=M.has(Be),Le=qe.getClearColor(),Xe=qe.getClearAlpha(),ze=Le.r,Qe=Le.g,tt=Le.b;Ce?(P[0]=ze,P[1]=Qe,P[2]=tt,P[3]=Xe,Z.clearBufferuiv(Z.COLOR,0,P)):(z[0]=ze,z[1]=Qe,z[2]=tt,z[3]=Xe,Z.clearBufferiv(Z.COLOR,0,z))}else ne|=Z.COLOR_BUFFER_BIT}Y&&(ne|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ne|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",xn,!1),qe.dispose(),Fe.dispose(),ge.dispose(),oe.dispose(),Ue.dispose(),me.dispose(),De.dispose(),xe.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",ln),Ve.removeEventListener("sessionend",pn),Gn.stop()};function Bt(A){A.preventDefault(),P_("WebGLRenderer: Context Lost."),V=!0}function Ut(){P_("WebGLRenderer: Context Restored."),V=!1;const A=J.autoReset,Y=Pe.enabled,re=Pe.autoUpdate,ne=Pe.needsUpdate,te=Pe.type;je(),J.autoReset=A,Pe.enabled=Y,Pe.autoUpdate=re,Pe.needsUpdate=ne,Pe.type=te}function xn(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hn(A){const Y=A.target;Y.removeEventListener("dispose",hn),bs(Y)}function bs(A){Ts(A),oe.remove(A)}function Ts(A){const Y=oe.get(A).programs;Y!==void 0&&(Y.forEach(function(re){Ne.releaseProgram(re)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,re,ne,te,Be){Y===null&&(Y=an);const Ce=te.isMesh&&te.matrixWorld.determinantAffine()<0,Le=Fi(A,Y,re,ne,te);b.setMaterial(ne,Ce);let Xe=re.index,ze=1;if(ne.wireframe===!0){if(Xe=he.getWireframeAttribute(re),Xe===void 0)return;ze=2}const Qe=re.drawRange,tt=re.attributes.position;let Je=Qe.start*ze,dt=(Qe.start+Qe.count)*ze;Be!==null&&(Je=Math.max(Je,Be.start*ze),dt=Math.min(dt,(Be.start+Be.count)*ze)),Xe!==null?(Je=Math.max(Je,0),dt=Math.min(dt,Xe.count)):tt!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,tt.count));const Qt=dt-Je;if(Qt<0||Qt===1/0)return;De.setup(te,ne,Le,re,Xe);let Ot,Ct=Re;if(Xe!==null&&(Ot=Ie.get(Xe),Ct=ce,Ct.setIndex(Ot)),te.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*Yt()),Ct.setMode(Z.LINES)):Ct.setMode(Z.TRIANGLES);else if(te.isLine){let Ht=ne.linewidth;Ht===void 0&&(Ht=1),b.setLineWidth(Ht*Yt()),te.isLineSegments?Ct.setMode(Z.LINES):te.isLineLoop?Ct.setMode(Z.LINE_LOOP):Ct.setMode(Z.LINE_STRIP)}else te.isPoints?Ct.setMode(Z.POINTS):te.isSprite&&Ct.setMode(Z.TRIANGLES);if(te.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Ct.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Ht=te._multiDrawStarts,Ye=te._multiDrawCounts,Vn=te._multiDrawCount,vt=Xe?Ie.get(Xe).bytesPerElement:1,Cn=oe.get(ne).currentProgram.getUniforms();for(let oi=0;oi<Vn;oi++)Cn.setValue(Z,"_gl_DrawID",oi),Ct.render(Ht[oi]/vt,Ye[oi])}else if(te.isInstancedMesh)Ct.renderInstances(Je,Qt,te.count);else if(re.isInstancedBufferGeometry){const Ht=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ye=Math.min(re.instanceCount,Ht);Ct.renderInstances(Je,Qt,Ye)}else Ct.render(Je,Qt)};function As(A,Y,re){A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Pi(A,Y,re),A.side=Ba,A.needsUpdate=!0,Pi(A,Y,re),A.side=sa):Pi(A,Y,re)}this.compile=function(A,Y,re=null){re===null&&(re=A),N=ge.get(re),N.init(Y),T.push(N),re.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),A!==re&&A.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Be=te.material;if(Be)if(Array.isArray(Be))for(let Ce=0;Ce<Be.length;Ce++){const Le=Be[Ce];As(Le,re,te),ne.add(Le)}else As(Be,re,te),ne.add(Be)}),N=T.pop(),ne},this.compileAsync=function(A,Y,re=null){const ne=this.compile(A,Y,re);return new Promise(te=>{function Be(){if(ne.forEach(function(Ce){oe.get(Ce).currentProgram.isReady()&&ne.delete(Ce)}),ne.size===0){te(A);return}setTimeout(Be,10)}_t.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Rs=null;function On(A){Rs&&Rs(A)}function ln(){Gn.stop()}function pn(){Gn.start()}const Gn=new Ax;Gn.setAnimationLoop(On),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){Rs=A,Ve.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},Ve.addEventListener("sessionstart",ln),Ve.addEventListener("sessionend",pn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(A,Y);const re=Ve.enabled===!0&&Ve.isPresenting===!0,ne=L!==null&&($===null||re)&&L.begin(X,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Y,$),N=ge.get(A,T.length),N.init(Y),N.state.textureUnits=pe.getTextureUnits(),T.push(N),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pt.setFromProjectionMatrix(qt,oa,Y.reversedDepth),rt=this.localClippingEnabled,mt=Oe.init(this.clippingPlanes,rt),I=Fe.get(A,B.length),I.init(),B.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const Ce=X.xr.getDepthSensingMesh();Ce!==null&&Zi(Ce,Y,-1/0,X.sortObjects)}Zi(A,Y,0,X.sortObjects),I.finish(),X.sortObjects===!0&&I.sort(We,it,Y.reversedDepth),Lt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Lt&&qe.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Oe.beginShadows();const te=N.state.shadowsArray;if(Pe.render(te,A,Y),mt===!0&&Oe.endShadows(),(ne&&L.hasRenderPass())===!1){const Ce=I.opaque,Le=I.transmissive;if(N.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Le.length>0)for(let ze=0,Qe=Xe.length;ze<Qe;ze++){const tt=Xe[ze];Cs(Ce,Le,A,tt)}Lt&&qe.render(A);for(let ze=0,Qe=Xe.length;ze<Qe;ze++){const tt=Xe[ze];Ki(I,A,tt,tt.viewport)}}else Le.length>0&&Cs(Ce,Le,A,Y),Lt&&qe.render(A),Ki(I,A,Y)}$!==null&&H===0&&(pe.updateMultisampleRenderTarget($),pe.updateRenderTargetMipmap($)),ne&&L.end(X),A.isScene===!0&&A.onAfterRender(X,A,Y),De.resetDefaultState(),_e=-1,Me=null,T.pop(),T.length>0?(N=T[T.length-1],pe.setTextureUnits(N.state.textureUnits),mt===!0&&Oe.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,j!==null&&j.renderEnd()};function Zi(A,Y,re,ne){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pt.intersectsSprite(A)){ne&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qt);const Ce=me.update(A),Le=A.material;Le.visible&&I.push(A,Ce,Le,re,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pt.intersectsObject(A))){const Ce=me.update(A),Le=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ft.copy(Ce.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(qt)),Array.isArray(Le)){const Xe=Ce.groups;for(let ze=0,Qe=Xe.length;ze<Qe;ze++){const tt=Xe[ze],Je=Le[tt.materialIndex];Je&&Je.visible&&I.push(A,Ce,Je,re,Ft.z,tt)}}else Le.visible&&I.push(A,Ce,Le,re,Ft.z,null)}}const Be=A.children;for(let Ce=0,Le=Be.length;Ce<Le;Ce++)Zi(Be[Ce],Y,re,ne)}function Ki(A,Y,re,ne){const{opaque:te,transmissive:Be,transparent:Ce}=A;N.setupLightsView(re),mt===!0&&Oe.setGlobalState(X.clippingPlanes,re),ne&&b.viewport(O.copy(ne)),te.length>0&&da(te,Y,re),Be.length>0&&da(Be,Y,re),Ce.length>0&&da(Ce,Y,re),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Cs(A,Y,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const Je=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new ca(1,1,{generateMipmaps:!0,type:Je?za:wi,minFilter:ys,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Be=N.state.transmissionRenderTarget[ne.id],Ce=ne.viewport||O;Be.setSize(Ce.z*X.transmissionResolutionScale,Ce.w*X.transmissionResolutionScale);const Le=X.getRenderTarget(),Xe=X.getActiveCubeFace(),ze=X.getActiveMipmapLevel();X.setRenderTarget(Be),X.getClearColor(we),He=X.getClearAlpha(),He<1&&X.setClearColor(16777215,.5),X.clear(),Lt&&qe.render(re);const Qe=X.toneMapping;X.toneMapping=la;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),mt===!0&&Oe.setGlobalState(X.clippingPlanes,ne),da(A,re,ne),pe.updateMultisampleRenderTarget(Be),pe.updateRenderTargetMipmap(Be),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let dt=0,Qt=Y.length;dt<Qt;dt++){const Ot=Y[dt],{object:Ct,geometry:Ht,material:Ye,group:Vn}=Ot;if(Ye.side===sa&&Ct.layers.test(ne.layers)){const vt=Ye.side;Ye.side=si,Ye.needsUpdate=!0,Oi(Ct,re,ne,Ht,Ye,Vn),Ye.side=vt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(pe.updateMultisampleRenderTarget(Be),pe.updateRenderTargetMipmap(Be))}X.setRenderTarget(Le,Xe,ze),X.setClearColor(we,He),tt!==void 0&&(ne.viewport=tt),X.toneMapping=Qe}function da(A,Y,re){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Be=A.length;te<Be;te++){const Ce=A[te],{object:Le,geometry:Xe,group:ze}=Ce;let Qe=Ce.material;Qe.allowOverride===!0&&ne!==null&&(Qe=ne),Le.layers.test(re.layers)&&Oi(Le,Y,re,Xe,Qe,ze)}}function Oi(A,Y,re,ne,te,Be){A.onBeforeRender(X,Y,re,ne,te,Be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(X,Y,re,ne,A,Be),te.transparent===!0&&te.side===sa&&te.forceSinglePass===!1?(te.side=si,te.needsUpdate=!0,X.renderBufferDirect(re,Y,ne,te,A,Be),te.side=Ba,te.needsUpdate=!0,X.renderBufferDirect(re,Y,ne,te,A,Be),te.side=sa):X.renderBufferDirect(re,Y,ne,te,A,Be),A.onAfterRender(X,Y,re,ne,te,Be)}function Pi(A,Y,re){Y.isScene!==!0&&(Y=an);const ne=oe.get(A),te=N.state.lights,Be=N.state.shadowsArray,Ce=te.state.version,Le=Ne.getParameters(A,te.state,Be,Y,re,N.state.lightProbeGridArray),Xe=Ne.getProgramCacheKey(Le);let ze=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ue.get(A.envMap||ne.environment,Qe),ne.envMapRotation=ne.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",hn),ze=new Map,ne.programs=ze);let tt=ze.get(Xe);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Ce)return Ii(A,Le),tt}else Le.uniforms=Ne.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,re,Le),A.onBeforeCompile(Le,X),tt=Ne.acquireProgram(Le,Xe),ze.set(Xe,tt),ne.uniforms=Le.uniforms;const Je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Oe.uniform),Ii(A,Le),ne.needsLights=rr(A),ne.lightsStateVersion=Ce,ne.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=N.state.lightProbeGridArray.length>0,ne.currentProgram=tt,ne.uniformsList=null,tt}function ri(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=lu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ii(A,Y){const re=oe.get(A);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Ga(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let re=0,ne=A.length;re<ne;re++){const te=A[re];if(te.texture!==null&&te.boundingBox.containsPoint(C))return te}return null}function Fi(A,Y,re,ne,te){Y.isScene!==!0&&(Y=an),pe.resetTextureUnits();const Be=Y.fog,Ce=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Le=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:bt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ze=Ue.get(ne.envMap||Ce,Xe),Qe=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Qt=!!re.morphAttributes.color;let Ot=la;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ot=X.toneMapping);const Ct=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ht=Ct!==void 0?Ct.length:0,Ye=oe.get(ne),Vn=N.state.lights;if(mt===!0&&(rt===!0||A!==Me)){const zt=A===Me&&ne.id===_e;Oe.setState(ne,A,zt)}let vt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Vn.state.version||Ye.outputColorSpace!==Le||te.isBatchedMesh&&Ye.batching===!1||!te.isBatchedMesh&&Ye.batching===!0||te.isBatchedMesh&&Ye.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ye.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ye.instancing===!1||!te.isInstancedMesh&&Ye.instancing===!0||te.isSkinnedMesh&&Ye.skinning===!1||!te.isSkinnedMesh&&Ye.skinning===!0||te.isInstancedMesh&&Ye.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ye.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ye.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ye.instancingMorph===!1&&te.morphTexture!==null||Ye.envMap!==ze||ne.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Oe.numPlanes||Ye.numIntersection!==Oe.numIntersection)||Ye.vertexAlphas!==Qe||Ye.vertexTangents!==tt||Ye.morphTargets!==Je||Ye.morphNormals!==dt||Ye.morphColors!==Qt||Ye.toneMapping!==Ot||Ye.morphTargetsCount!==Ht||!!Ye.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ye.__version=ne.version);let Cn=Ye.currentProgram;vt===!0&&(Cn=Pi(ne,Y,te),j&&ne.isNodeMaterial&&j.onUpdateProgram(ne,Cn,Ye));let oi=!1,Bi=!1,li=!1;const Gt=Cn.getUniforms(),rn=Ye.uniforms;if(b.useProgram(Cn.program)&&(oi=!0,Bi=!0,li=!0),ne.id!==_e&&(_e=ne.id,Bi=!0),Ye.needsLights){const zt=Ga(N.state.lightProbeGridArray,te);Ye.lightProbeGrid!==zt&&(Ye.lightProbeGrid=zt,Bi=!0)}if(oi||Me!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(Z,"projectionMatrix",A.projectionMatrix),Gt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Qi=Gt.map.cameraPosition;Qi!==void 0&&Qi.setValue(Z,It.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Gt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Gt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),Me!==A&&(Me=A,Bi=!0,li=!0)}if(Ye.needsLights&&(Vn.state.directionalShadowMap.length>0&&Gt.setValue(Z,"directionalShadowMap",Vn.state.directionalShadowMap,pe),Vn.state.spotShadowMap.length>0&&Gt.setValue(Z,"spotShadowMap",Vn.state.spotShadowMap,pe),Vn.state.pointShadowMap.length>0&&Gt.setValue(Z,"pointShadowMap",Vn.state.pointShadowMap,pe)),te.isSkinnedMesh){Gt.setOptional(Z,te,"bindMatrix"),Gt.setOptional(Z,te,"bindMatrixInverse");const zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Gt.setValue(Z,"boneTexture",zt.boneTexture,pe))}te.isBatchedMesh&&(Gt.setOptional(Z,te,"batchingTexture"),Gt.setValue(Z,"batchingTexture",te._matricesTexture,pe),Gt.setOptional(Z,te,"batchingIdTexture"),Gt.setValue(Z,"batchingIdTexture",te._indirectTexture,pe),Gt.setOptional(Z,te,"batchingColorTexture"),te._colorsTexture!==null&&Gt.setValue(Z,"batchingColorTexture",te._colorsTexture,pe));const zi=re.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&k.update(te,re,Cn),(Bi||Ye.receiveShadow!==te.receiveShadow)&&(Ye.receiveShadow=te.receiveShadow,Gt.setValue(Z,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=F2()),Bi){if(Gt.setValue(Z,"toneMappingExposure",X.toneMappingExposure),Ye.needsLights&&sn(rn,li),Be&&ne.fog===!0&&Ge.refreshFogUniforms(rn,Be),Ge.refreshMaterialUniforms(rn,ne,Te,be,N.state.transmissionRenderTarget[A.id]),Ye.needsLights&&Ye.lightProbeGrid){const zt=Ye.lightProbeGrid;rn.probesSH.value=zt.texture,rn.probesMin.value.copy(zt.boundingBox.min),rn.probesMax.value.copy(zt.boundingBox.max),rn.probesResolution.value.copy(zt.resolution)}lu.upload(Z,ri(Ye),rn,pe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(lu.upload(Z,ri(Ye),rn,pe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Gt.setValue(Z,"center",te.center),Gt.setValue(Z,"modelViewMatrix",te.modelViewMatrix),Gt.setValue(Z,"normalMatrix",te.normalMatrix),Gt.setValue(Z,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const zt=ne.uniformsGroups;for(let Qi=0,Va=zt.length;Qi<Va;Qi++){const ws=zt[Qi];xe.update(ws,Cn),xe.bind(ws,Cn)}}return Cn}function sn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function rr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Y,re){const ne=oe.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=Y,oe.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const re=oe.get(A);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,re=0){$=A,F=Y,H=re;let ne=null,te=!1,Be=!1;if(A){const Le=oe.get(A);if(Le.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Z.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(A.viewport),K.copy(A.scissor),ye=A.scissorTest,b.viewport(O),b.scissor(K),b.setScissorTest(ye),_e=-1;return}else if(Le.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Le.__hasExternalTextures)pe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Le.__boundDepthTexture!==Qe){if(Qe!==null&&oe.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const ze=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[Y])?ne=ze[Y][re]:ne=ze[Y],te=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?ne=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?ne=ze[re]:ne=ze,O.copy(A.viewport),K.copy(A.scissor),ye=A.scissorTest}else O.copy(et).multiplyScalar(Te).floor(),K.copy(Wt).multiplyScalar(Te).floor(),ye=ot;if(re!==0&&(ne=ue),b.bindFramebuffer(Z.FRAMEBUFFER,ne)&&b.drawBuffers(A,ne),b.viewport(O),b.scissor(K),b.setScissorTest(ye),te){const Le=oe.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,re)}else if(Be){const Le=Y;for(let Xe=0;Xe<A.textures.length;Xe++){const ze=oe.get(A.textures[Xe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Xe,ze.__webglTexture,re,Le)}}else if(A!==null&&re!==0){const Le=oe.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Le.__webglTexture,re)}_e=-1},this.readRenderTargetPixels=function(A,Y,re,ne,te,Be,Ce,Le=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Xe=Xe[Ce]),Xe){b.bindFramebuffer(Z.FRAMEBUFFER,Xe);try{const ze=A.textures[Le],Qe=ze.format,tt=ze.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable(Qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(tt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ne&&re>=0&&re<=A.height-te&&Z.readPixels(Y,re,ne,te,Ae.convert(Qe),Ae.convert(tt),Be)}finally{const ze=$!==null?oe.get($).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,Y,re,ne,te,Be,Ce,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Xe=Xe[Ce]),Xe)if(Y>=0&&Y<=A.width-ne&&re>=0&&re<=A.height-te){b.bindFramebuffer(Z.FRAMEBUFFER,Xe);const ze=A.textures[Le],Qe=ze.format,tt=ze.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Je),Z.bufferData(Z.PIXEL_PACK_BUFFER,Be.byteLength,Z.STREAM_READ),Z.readPixels(Y,re,ne,te,Ae.convert(Qe),Ae.convert(tt),0);const dt=$!==null?oe.get($).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,dt);const Qt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await ky(Z,Qt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Je),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Be),Z.deleteBuffer(Je),Z.deleteSync(Qt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,re=0){const ne=Math.pow(2,-re),te=Math.floor(A.image.width*ne),Be=Math.floor(A.image.height*ne),Ce=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;pe.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,re,0,0,Ce,Le,te,Be),b.unbindTexture()},this.copyTextureToTexture=function(A,Y,re=null,ne=null,te=0,Be=0){let Ce,Le,Xe,ze,Qe,tt,Je,dt,Qt;const Ot=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(re!==null)Ce=re.max.x-re.min.x,Le=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,ze=re.min.x,Qe=re.min.y,tt=re.isBox3?re.min.z:0;else{const rn=Math.pow(2,-te);Ce=Math.floor(Ot.width*rn),Le=Math.floor(Ot.height*rn),A.isDataArrayTexture?Xe=Ot.depth:A.isData3DTexture?Xe=Math.floor(Ot.depth*rn):Xe=1,ze=0,Qe=0,tt=0}ne!==null?(Je=ne.x,dt=ne.y,Qt=ne.z):(Je=0,dt=0,Qt=0);const Ct=Ae.convert(Y.format),Ht=Ae.convert(Y.type);let Ye;Y.isData3DTexture?(pe.setTexture3D(Y,0),Ye=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(pe.setTexture2DArray(Y,0),Ye=Z.TEXTURE_2D_ARRAY):(pe.setTexture2D(Y,0),Ye=Z.TEXTURE_2D),b.activeTexture(Z.TEXTURE0),b.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Vn=b.getParameter(Z.UNPACK_ROW_LENGTH),vt=b.getParameter(Z.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(Z.UNPACK_SKIP_PIXELS),oi=b.getParameter(Z.UNPACK_SKIP_ROWS),Bi=b.getParameter(Z.UNPACK_SKIP_IMAGES);b.pixelStorei(Z.UNPACK_ROW_LENGTH,Ot.width),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ot.height),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(Z.UNPACK_SKIP_ROWS,Qe),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,tt);const li=A.isDataArrayTexture||A.isData3DTexture,Gt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const rn=oe.get(A),zi=oe.get(Y),zt=oe.get(rn.__renderTarget),Qi=oe.get(zi.__renderTarget);b.bindFramebuffer(Z.READ_FRAMEBUFFER,zt.__webglFramebuffer),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let Va=0;Va<Xe;Va++)li&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,te,tt+Va),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,Be,Qt+Va)),Z.blitFramebuffer(ze,Qe,Ce,Le,Je,dt,Ce,Le,Z.DEPTH_BUFFER_BIT,Z.NEAREST);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||oe.has(A)){const rn=oe.get(A),zi=oe.get(Y);b.bindFramebuffer(Z.READ_FRAMEBUFFER,fe),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let zt=0;zt<Xe;zt++)li?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rn.__webglTexture,te,tt+zt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,rn.__webglTexture,te),Gt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,zi.__webglTexture,Be,Qt+zt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,zi.__webglTexture,Be),te!==0?Z.blitFramebuffer(ze,Qe,Ce,Le,Je,dt,Ce,Le,Z.COLOR_BUFFER_BIT,Z.NEAREST):Gt?Z.copyTexSubImage3D(Ye,Be,Je,dt,Qt+zt,ze,Qe,Ce,Le):Z.copyTexSubImage2D(Ye,Be,Je,dt,ze,Qe,Ce,Le);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Ye,Be,Je,dt,Qt,Ce,Le,Xe,Ct,Ht,Ot.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ye,Be,Je,dt,Qt,Ce,Le,Xe,Ct,Ot.data):Z.texSubImage3D(Ye,Be,Je,dt,Qt,Ce,Le,Xe,Ct,Ht,Ot):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Be,Je,dt,Ce,Le,Ct,Ht,Ot.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Be,Je,dt,Ot.width,Ot.height,Ct,Ot.data):Z.texSubImage2D(Z.TEXTURE_2D,Be,Je,dt,Ce,Le,Ct,Ht,Ot);b.pixelStorei(Z.UNPACK_ROW_LENGTH,Vn),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,vt),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(Z.UNPACK_SKIP_ROWS,oi),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,Bi),Be===0&&Y.generateMipmaps&&Z.generateMipmap(Ye),b.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,b.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const z2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",H2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",G2="/assets/CXLMediumItalic-DYSp-DoC.otf",V2=4,k2=5,Pa={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Ox(a){return["discover","copy","supervise","isolate"][a]??"discover"}function X2(a){return Ox(a)}function W2(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}function q2(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*k2/V2);return{W:o,H:c}}function Px(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function nn(a,e,i,r,o,c,u){Px(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function dn(a,e,i,r,o,c,u,d){Px(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function yu(a,e,i,r,o,c){nn(a,e,i,r,o,c,"#0c0e12"),dn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Eu(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,p=e+r-o-m,g=i+o-2*u;return dn(a,p,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(p+6*u,g+6*u),a.lineTo(p+m-6*u,g+m-6*u),a.moveTo(p+m-6*u,g+6*u),a.lineTo(p+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function Ix(a,e,i,r,o,c,u,d){const m=28*d,p=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*p,S=_===u;a.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+p/2,i+14*d),S&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*d,i+m-2*d,p-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function Y2(a,e,i,r,o,c,u,d,m){const p=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${p}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function j2(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,p=34*u;nn(a,e,m,r,p,6*u,"rgba(255,255,255,0.04)"),dn(a,e,m,r,p,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+p*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+p/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),d+6*u+p}function Z2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;nn(a,e,u,r,d,8*o,"#050508"),dn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),nn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function K2(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;dn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const p=e+m+8*o,g=r-m-8*o;return nn(a,p,u,g,d,6*o,"rgba(255,255,255,0.06)"),dn(a,p,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(p,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,p+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function Cp(a,e,i,r,o){const c=44*o;nn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),dn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return nn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Pa.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Pa.role} · ${Pa.didShort}`,e+8*o+u+8*o,i+32*o),c}function Q2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),nn(a,e,i,r,c,d,m),dn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),dn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Pa.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const p=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Pa.name.toUpperCase(),e+u,p-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Pa.role} · ${Pa.version}`,e+u,p-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Pa.didShort,e+u,p);const g=28*o;return nn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),dn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function J2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),nn(a,e,i,r,c,d,m),dn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let p=0;p<3;p++){const g=5*o+p*3.5*o,_=4*o+p*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Pa.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function $2(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);nn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const p=Math.max(m,r*c/100);nn(a,e,d,p,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+p,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function eR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,p=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const S=e+v*(d+u);nn(a,S,p,d,m,6*o,"rgba(255,255,255,0.04)"),dn(a,S,p,d,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(S+1,p+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,S+d/2,p+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,S+d/2,p+34*o)}),a.textAlign="left",c+8*o+m}function tR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;nn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),dn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const d=.22,m=4*o,p=u-m*2,g=r-m*2-p;return nn(a,e+m,i+m,p+g*d,p,p/2,"rgba(200,245,168,0.18)"),nn(a,e+m,i+m,p,p,p/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+p/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+p*.15,i+u*.62),a.textAlign="left",u}const pl=2,ro={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Rv(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,p=36*c;return o.forEach(([g,_],v)=>{const S=e+v*(m+u);nn(a,S,i,m,p,6*c,"rgba(255,255,255,0.04)"),dn(a,S,i,m,p,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,S+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,S+m/2,i+26*c)}),a.textAlign="left",p}function nR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:ro.riskScore},{label:"Rep",value:ro.reputation}],u=4*o,d=22*o,m=5*o;let p=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,S=m*2+6*o+_+v;if(p+S>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";nn(a,p,i,S,d,4*o,E),dn(a,p,i,S,d,4*o,w,1);const y=2*o;a.beginPath(),a.arc(p+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=p+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+d*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+d*.68)),p+=S+u}return a.textAlign="left",d}function iR(a,e,i,r,o){const c=ro.receipts,u=22*o,d=14*o+c.length*u;return nn(a,e,i,r,d,6*o,"rgba(255,255,255,0.03)"),dn(a,e,i,r,d,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,p)=>{const g=i+14*o+p*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function aR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),nn(a,e,i,r,c,d,m),dn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),dn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const p=40*o,g=16*o,_=e+r-u-p,v=i+u-1*o;return nn(a,_,v,p,g,8*o,"rgba(200,245,168,0.14)"),dn(a,_,v,p,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+p/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function sR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return nn(a,e,i,r,d,6*o,"rgba(255,255,255,0.03)"),dn(a,e,i,r,d,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,p,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(p,e+r*.58,v+u*.62);const S=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=S?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",d}function rR(a,e,i,r,o,c=0){const u=r/300,d=12*u,m=10*u,p=(c%pl+pl)%pl,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][p];yu(a,e,i,r,o,m);let _=Eu(a,e,i,r,d,g.header,u);_=Y2(a,e,_,r,d,g.segment,p+1,pl,u);const v=i+o-d;if(p===0){_+=Cp(a,e+d,_,r-d*2,u)+8*u,_+22*u<=v&&(_+=nR(a,e+d,_,r-d*2,u)+8*u);const E=[["SHARPE",ro.sharpe],["ROI",ro.roi],["RISK",ro.riskScore]];_+36*u<=v&&(_+=Rv(a,e+d,_,r-d*2,E,u)+8*u),_+70*u<=v&&iR(a,e+d,_,r-d*2,u);return}_+=aR(a,e+d,_,r-d*2,u)+8*u,_+78*u<=v&&(_+=sR(a,e+d,_,r-d*2,u)+8*u);const S=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Rv(a,e+d,_,r-d*2,S,u)}function oR(a,e,i,r,o,c=0){const u=r/300,d=12*u,m=10*u;yu(a,e,i,r,o,m);let p=Eu(a,e,i,r,d,"COPY TRADE",u);p=Ix(a,e,p,r,d,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-d-g,v=_-10*u;if(c%2===0){const E=6*u,w=r-d*2;let y=(w-E)/2,M=Math.min(y*190/316,y*.58);const P=Math.max(64*u,v-p-28*u);M>P&&(y=y*(P/M),M=P);const z=u*(y/((w-E)/2)),C=e+d+(w-(y*2+E))/2;J2(a,C,p,y,z),Q2(a,C+y+E,p,y,z),p+=M+10*u;const I=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],N=5*u,B=(r-d*2-N*2)/3,T=32*u;p+T<=v&&(I.forEach(([L,X],V)=>{const j=e+d+V*(B+N);nn(a,j,p,B,T,6*u,"rgba(255,255,255,0.04)"),dn(a,j,p,B,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(L,j+B/2,p+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(X,j+B/2,p+24*u)}),a.textAlign="left")}else p+=Cp(a,e+d,p,r-d*2,u)+10*u,p+36*u<v&&(p+=$2(a,e+d,p,r-d*2,u,25)+10*u),p+50*u<v&&eR(a,e+d,p,r-d*2,u);tR(a,e+d,_,r-d*2,u)}const lR=2,cR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function uR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function fR(a,e,i,r,o){const c=r/300,u=12*c,d=10*c;yu(a,e,i,r,o,d);let m=Eu(a,e,i,r,u,"ACTIVITY LOG",c);const p=i+o-u,g=58*c,_=10*c,v=6*c,S=e+u+g+v+_+v,E=e+r-u-S,w=e+u+g+v+_/2,y=cR,M=4*c;y.forEach((P,z)=>{if(m>=p-8*c)return;const C=z===0,I=z===y.length-1,N=uR(P.status),B=8*c,T=6*c,L=7*c,X=8*c,V=P.showActions?22*c:0,j=P.showActions?5*c:0,fe=Math.max(B+2*c+T,L+4*c+X)+j+V+M;if(m+Math.min(fe,28*c)>p)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${B}px "DM Mono", ui-monospace, monospace`,a.fillText(P.agent,e+u+g,m+B),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(P.timeLabel,e+u+g,m+B+2*c+T),a.textAlign="left",I||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+fe),a.stroke());const q=2.4*c;a.beginPath(),a.arc(w,m+5*c,q,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(w,m+5*c,q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const F=4*c,H=2*c;a.font=`700 ${L}px "DM Mono", ui-monospace, monospace`;const $=P.statusLabel.toUpperCase(),_e=a.measureText($).width+F*2,Me=L+H*2;nn(a,S,m,_e,Me,3*c,N.bg),a.fillStyle=N.fg,a.fillText($,S+F,m+L+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const O=m+Me+3*c+X;let K=P.action;if(P.pnl){const ye=`${P.action} · `;a.fillText(ye,S,O);const we=a.measureText(ye).width;a.fillStyle=P.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(P.pnl.text,S+we,O)}else{for(;K.length>8&&a.measureText(K).width>E;)K=`${K.slice(0,-2)}…`;a.fillText(K,S,O)}if(P.showActions&&m+Me+3*c+X+j+V<=p){const ye=m+Me+3*c+X+j,we=(E-5*c)/2;dn(a,S,ye,we,V,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",S+we/2,ye+V*.68),nn(a,S+we+5*c,ye,we,V,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",S+we+5*c+we/2,ye+V*.68),a.textAlign="left"}m+=fe})}function dR(a,e,i,r,o){const c=r/300,u=12*c,d=10*c;yu(a,e,i,r,o,d);let m=Eu(a,e,i,r,u,"FUND BUCKET",c);m=Ix(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Cp(a,e+u,m,r-u*2,c)+8*c,m+=j2(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const p=10*c+36*c;i+o-u-p-m-8*c>70*c&&(m+=Z2(a,e+u,m,r-u*2,c)+6*c),K2(a,e+u,i+o-u-p,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Fx(a,e,i,r,o,c,u=0){switch(e){case"discover":rR(a,i,r,o,c,u);break;case"copy":oR(a,i,r,o,c,u);break;case"supervise":fR(a,i,r,o,c);break;case"isolate":dR(a,i,r,o,c);break}}function hR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Fx(a,e,0,0,i,r,o)}function pR(a,e,i,r,o){const{W:c,H:u}=q2(i,r),d=document.createElement("canvas");d.width=c,d.height=u;const m=d.getContext("2d"),p=m.createLinearGradient(0,0,0,u);p.addColorStop(0,"#080a0e"),p.addColorStop(.55,"#05070d"),p.addColorStop(1,"#030406"),m.fillStyle=p,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),S=c-g*2;let E=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,E+w*.85),E+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=W2(m,a.description,S);m.fillText(M[0]??a.description,g,E+y),E+=Math.round(.07*u),E+=Math.round(.03*u);const P=g,z=E,C=S,I=Math.max(80*i,u-E-v);Fx(m,X2(e),P,z,C,I);const N=new Mx(d);return N.colorSpace=Qn,N.minFilter=ys,N.generateMipmaps=!0,N}const Cv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",mR=50,cu=500,_h=100,wv=168;function gR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _R(){return Cv[Math.floor(Math.random()*Cv.length)]??"?"}function Dv(a){return Array.from(a).map(e=>{const i=Math.random()*(cu-_h),r=_h+Math.random()*(cu-i-_h),o=Math.min(cu,i+r);return{original:e,start:i,end:o}})}function vR(a){return Math.min(1,Math.max(0,a))}function xR({text:a,className:e,scrollerRef:i}){const r=Ze.useRef(null),o=Ze.useRef(Dv(a)),c=gR();return Ze.useEffect(()=>{o.current=Dv(a)},[a]),Ze.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let d=0,m=!0,p=-1;const g=()=>{const v=i.current;if(!v)return;const S=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(cu,Math.max(0,S-mR));if(E===p&&p>=0)return;p=E;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let P=0;P<w.length;P++){const z=w[P],C=y[P];if(!C)continue;const I=Math.max(.001,z.end-z.start),N=vR((E-z.start)/I);if(N<1&&(M=!1),N<=0){C.textContent=z.original===" "?" ":z.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(N>=1){C.textContent=z.original===" "?" ":z.original,C.style.transform=`translateY(${-wv}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=_R(),C.style.transform=`translateY(${-N*wv}px)`,C.style.opacity=String(1-N),C.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),d=requestAnimationFrame(_))};return d=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(d)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,d)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${d}-${u}`))})}const SR="Proof first. Risk contained.",to=Sh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),_n=to.length,Ss=2.95,vl=6.9,wp=32,Bx=4,zx=5,fp=2.05,MR=1,yR=Ss*.55,Nv=.35,Lv=.85,ER=35,Uv=ER/60*1e3,bR=.1;function Hx(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const TR=1.35,AR=.72,RR=.62,CR=.2,wR=14,DR=.42,NR=128,LR=12,UR=.004,OR=.0022,Ov=.12,PR=.88,IR=4,FR=22,BR=32,zR=40,HR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,GR=`
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
`,VR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,kR=`
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
`,XR='"Reckk Heading", Georgia, "Times New Roman", serif',Gx="Morpheum Wordmark",yl=`"${Gx}"`,WR=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function qR(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(Gx,`url(${G2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${yl}`);const e=document.fonts.check(`normal 152px ${yl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function YR(){if(!(typeof document>"u"||!document.fonts))try{await qR();const a=new FontFace("Reckk Title",`url(${H2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${z2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${yl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Ks="flow-intro-hide-chrome";function Pv(a){return a<=72}const jR=280;function dp(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function vh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;dp(e)}function no(a){const e=tn.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function ml(a){const e=Math.max(1,a),i=Math.max(1,_n*e*MR),r=Math.max(1,i/Math.max(1,_n-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const ZR=320,KR=50,QR=70,Iv=.35;function JR(a){return Math.max(2,Math.max(1,a)*.004)}function $R(a){const e=tn.clamp(a,0,1);return 1-Math.pow(1-e,3)}function e3(a,e){const{cardPx:i,titlePx:r}=ml(e),o=Math.max(1,_n-1),c=tn.clamp(Math.round(a),0,_n-1);return r+c/o*i}function t3(a,e,i){return a.offsetTop+e3(e,i)}function n3(a,e){const i=_n-1,r=tn.clamp(a,0,i);if(e===0)return tn.clamp(Math.round(r),0,i);const o=Math.floor(r),c=Math.min(i,o+1),u=r-o;return e>0?u>=Iv?c:o:u<=1-Iv?o:c}function xh(a,e,i,r,o,c){return!(r||a<e||a>i||o<c*.5)}function Vx(a,e){const i=a/Math.max(1,e),r=wp*Math.PI/180,o=2*vl*Math.tan(r/2),c=o*i,u=fp*Bx/zx,d=.992,m=d*o/fp,p=d*c/u;return tn.clamp(Math.min(m,p),.52,2.35)}function Fv(a,e,i){const r=Hx(a),o=Vx(a,e),c=a/Math.max(1,e),u=wp*Math.PI/180,m=2*vl*Math.tan(u/2)*c,p=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,p);return{w:g,h:g*i}}function i3(a,e){const i=a/Math.max(1,_n-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function a3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function s3(a,e){const i=tn.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=no(tn.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function r3(a,e,i,r=0){const o=_n-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=tn.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=no(tn.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function o3(a){return new Ui({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:bR}},vertexShader:VR,fragmentShader:kR,transparent:!0,depthWrite:!0,depthTest:!0,side:Ba})}function l3(a,e){return a>1.5&&a<e-.5}function c3(a){return tn.clamp(540/Math.max(a,340),.2,.55)}function u3(a,e,i){const r=[],o=wR;for(let c=0;c<o;c++){const u=tn.clamp(a-c/Math.max(1,o-1)*DR,-.08,1.08),d=Math.sin(u*Math.PI*2*TR)*RR*i,m=Math.sin(u*Math.PI*2*AR)*CR,p=Ov+c/Math.max(1,o-1)*(PR-Ov),g=e-p;r.push(new ee(d,m,g))}return r}function f3(a,e,i,r){const o=a.length;if(o<2)return new Li;const c=[],u=[],d=[],m=[],p=new ee,g=new ee,_=new ee,v=new ee(0,1,0),S=e+1;for(let w=0;w<o;w++){w===0?p.subVectors(a[1],a[0]).normalize():w===o-1?p.subVectors(a[o-1],a[o-2]).normalize():p.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(p),g.lengthSq()<1e-8&&g.set(1,0,0).cross(p),g.normalize(),_.crossVectors(p,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let P=0;P<=e;P++){const z=P/e*Math.PI*2,C=Math.cos(z),I=Math.sin(z),N=a[w];c.push(N.x+(C*g.x+I*_.x)*M,N.y+(C*g.y+I*_.y)*M,N.z+(C*g.z+I*_.z)*M),u.push(C*g.x+I*_.x,C*g.y+I*_.y,C*g.z+I*_.z),d.push(o===1?0:w/(o-1),P/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*S+y,P=M+1,z=M+S,C=z+1;m.push(M,z,P,P,z,C)}const E=new Li;return E.setAttribute("position",new Di(c,3)),E.setAttribute("normal",new Di(u,3)),E.setAttribute("uv",new Di(d,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Bv(a,e,i,r){const o={verb:a.verb,description:a.description};return pR(o,e,i,r,XR)}function zv(a,e){const i=Hx(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const d=u.getContext("2d");d.clearRect(0,0,o,c);const m="Morpheum";let p=i.fontPx;d.textAlign="left",d.textBaseline="alphabetic";const g=()=>{d.font=`normal ${p*r}px ${yl}`};g();const _=I=>{d.font=`normal ${I*r}px ${yl}`;const N=d.measureText(m),B=Math.abs(N.actualBoundingBoxLeft??0),T=Math.abs(N.actualBoundingBoxRight??N.width),L=Math.abs(N.actualBoundingBoxAscent??I*r*.8),X=Math.abs(N.actualBoundingBoxDescent??I*r*.25);return{left:B,right:T,width:B+T,ascent:L,descent:X}},v=Math.max(1.25,1.85*r)*2,S=64*r+v,E=40*r+v,w=I=>{const N=_(I);return N.width+S*2<=o&&N.ascent+N.descent+E*2<=c};for(;!w(p)&&p>64;)p-=2;for(;w(p+2)&&p<i.fontPx+24;)p+=2;g();const y=_(p),M=(o-y.width)/2+y.left,P=c/2+(y.ascent-y.descent)/2,z=d.createLinearGradient(M-y.left,P-y.ascent,M+y.right,P+y.descent);WR.forEach(I=>z.addColorStop(I.t,I.c)),d.lineJoin="round",d.miterLimit=2,d.lineWidth=Math.max(1.25,1.85*r),d.strokeStyle="rgba(8,12,10,0.22)",d.strokeText(m,M,P),d.fillStyle=z,d.fillText(m,M,P);const C=new Mx(u);return C.colorSpace=Qn,C.minFilter=Rn,C.magFilter=Rn,C.generateMipmaps=!1,C}function Hv(a,e){a.generateMipmaps=!1,a.minFilter=Rn,a.magFilter=Rn,a.wrapS=Yi,a.wrapT=Yi;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function d3(){const a=Ze.useRef(null),e=Ze.useRef(null),i=Ze.useRef(null),r=Ze.useRef(null),o=Ze.useRef(!1),c=Ze.useRef(null),u=Ze.useCallback(()=>{var m;if(o.current)return;o.current=!0,(m=c.current)==null||m.call(c);const d=e.current;d==null||d.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(Ks),vh(),requestAnimationFrame(()=>{vh(),requestAnimationFrame(()=>{vh(),window.setTimeout(()=>{o.current=!1},100)})})},jR)},[]);return Ze.useLayoutEffect(()=>{const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.location.hash.replace(/^#/,"");return d||m!==""&&m!=="flow"&&m!=="hero"||document.body.classList.add(Ks),()=>{document.body.classList.remove(Ks)}},[]),Ze.useEffect(()=>{const d=m=>{if(m.key!=="Escape")return;const p=document.getElementById("hero");p&&p.getBoundingClientRect().top>8&&(m.preventDefault(),u())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[u]),Ze.useEffect(()=>{const d=window.location.hash.replace(/^#/,"");d&&d!=="flow"&&d!=="hero"&&requestAnimationFrame(()=>{var m;(m=document.getElementById(d))==null||m.scrollIntoView({block:"start"})})},[]),Ze.useEffect(()=>{const d=i.current,m=a.current;if(!d||!m)return;const p=d,g=m;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Ks);const E=r.current;E&&(E.style.height="0px");return}let S;return(async()=>{if(await YR(),_)return;const E=Math.min(window.devicePixelRatio,2),w=Math.max(320,p.clientWidth||window.innerWidth),y=Math.max(1,p.clientHeight||window.innerHeight),M=[],P=[],z=[],C=new Float64Array(_n).fill(-1);to.forEach((ge,Oe)=>{const Pe=_n-1-Oe,qe=to[Pe],k=Bv(qe,Pe,E,w);z.push(k);const Re=o3(k);M.push(Re);const ce=fp,Ae=ce*Bx/zx,De=new Ni(new tr(Ae,ce),Re);De.position.set(0,0,-Oe*Ss),De.renderOrder=Oe,P.push(De)});const I=zv(E,w),N=new Ap({map:I,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:sa}),B=I.image.height/I.image.width,{w:T,h:L}=Fv(w,y,B),X=new Ni(new tr(T,L),N);X.position.set(0,0,-(_n-1)*Ss),X.renderOrder=zR;const V=new SE,j=new Ci(wp,1,.08,120),ue=new B2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ue.setPixelRatio(Math.min(window.devicePixelRatio,2)),ue.outputColorSpace=Qn,ue.sortObjects=!0,p.appendChild(ue.domElement),Hv(I,ue);const fe=new dl;P.forEach(ge=>fe.add(ge)),fe.add(X),V.add(fe);const q=new Ui({uniforms:{uStrength:{value:0}},vertexShader:HR,fragmentShader:GR,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Mh}),F=new Ni(new Li,q);F.frustumCulled=!1,F.renderOrder=FR,F.visible=!1,V.add(F);const H=to.map(ge=>new Tt(ge.mood.mid)),$=H[0].clone();V.background=$;const _e=0,Me=-(_n-1)*Ss,O=vl,K=-.1*Ss,ye=.1*Ss;function we(ge,Oe){const Pe=ge+vl;return(O-Pe)/Oe}function He(){const ge=Math.max(1,window.innerHeight),{totalPx:Oe}=ml(ge),Pe=Math.max(1,Oe),qe=_e+K,k=Me+ye-yR,ce=(qe-k)/Pe,Ae=we(qe,ce),De=we(k,ce);return{ih:ge,totalPx:Pe,scrollToWorldFactor:ce,minScroll:Ae,maxScroll:De}}let{scrollToWorldFactor:se,minScroll:be,maxScroll:Te}=He();const We=new Tt,it=new Tt,et=new Tt;function Wt(){var Ae;const ge=Math.max(320,p.clientWidth||window.innerWidth),Oe=Math.min(window.devicePixelRatio,2);z.forEach((De,xe)=>{De.dispose();const je=_n-1-xe,Ve=Bv(to[je],je,Oe,ge);z[xe]=Ve,M[xe].uniforms.uMap.value=Ve}),(Ae=N.map)==null||Ae.dispose();const Pe=zv(Oe,ge);N.map=Pe,N.needsUpdate=!0,Hv(Pe,ue);const qe=Pe.image.height/Pe.image.width,k=Math.max(1,p.clientHeight||window.innerHeight),{w:Re,h:ce}=Fv(ge,k,qe);X.geometry.dispose(),X.geometry=new tr(Re,ce)}function ot(){const ge=p.clientWidth,Oe=p.clientHeight;if(ge<2||Oe<2)return;j.aspect=ge/Oe,j.updateProjectionMatrix(),ue.setSize(ge,Oe,!1),Wt();const Pe=He();se=Pe.scrollToWorldFactor,be=Pe.minScroll,Te=Pe.maxScroll;const qe=Math.max(1,window.innerHeight),{totalPx:k}=ml(qe),Re=r.current;if(Re){const ce=qe*Nv,Ae=Math.max(Math.ceil(k+ce+qe*Lv+32),Math.ceil(qe*1.08));Re.style.height=`${Ae}px`}}ot(),requestAnimationFrame(()=>{_||Wt()});let pt=0;function mt(){var te,Be;if(_)return;pt=requestAnimationFrame(mt);const ge=Math.max(1,window.innerHeight),{cardPx:Oe,titlePx:Pe,totalPx:qe}=ml(ge),k=g.getBoundingClientRect(),Re=Math.max(1,g.offsetHeight-ge),ce=tn.clamp(-k.top,0,Re),Ae=Math.min(ce,qe),De=Math.max(1,qe),xe=ge*Nv,je=no(tn.clamp((ce-qe)/Math.max(1,xe),0,1)),Ve=tn.mapLinear(Oe,0,De,be,Te),Bt=p.clientWidth,Ut=p.clientHeight,xn=Math.max(1,Pe),hn=Ae<xn,bs=hn?tn.clamp(Ae/xn,0,1):0,Ts=Math.max(0,Ae-xn),As=Math.max(1,Oe),On=tn.clamp(Ts/As,0,1)*(_n-1),ln=Vx(Bt,Ut),pn=document.getElementById("hero"),Gn=pn?pn.getBoundingClientRect().top:0,Zi=pn?Pv(Gn):!0;let Ki;hn?Ki=tn.mapLinear(Ae,0,xn,Te,Ve):Ki=tn.mapLinear(Ae,xn,De,Ve,be),Ki=tn.clamp(Ki,be,Te);const Cs=i3(Oe,ge),da=a3(xn,ge),Oi=s3(bs,da),Pi=_n-1;if(hn)et.copy(H[0]);else{const Ce=Math.min(_n-2,Math.floor(On)),Le=Math.min(Ce+1,_n-1),Xe=no(On-Ce);We.copy(H[Ce]),it.copy(H[Le]),et.lerpColors(We,it,Xe)}V.background=$.copy(et);const ri=O-Ki*se;j.position.set(0,0,ri),j.lookAt(0,0,ri-vl);const Ii=tn.clamp(Ae/De,0,1);if(l3(Ae,De)){const Ce=u3(Ii,ri,c3(Bt)),Xe=new UE(Ce,!1,"centripetal").getSpacedPoints(NR);if(Xe.length>=2){const ze=f3(Xe,LR,UR,OR),Qe=F.geometry.getAttribute("position"),tt=ze.getAttribute("position");if(Qe&&tt&&Qe.count===tt.count&&((te=F.geometry.getIndex())==null?void 0:te.count)===((Be=ze.getIndex())==null?void 0:Be.count)&&Qe&&tt){Qe.array.set(tt.array),Qe.needsUpdate=!0;const dt=F.geometry.getAttribute("normal"),Qt=ze.getAttribute("normal");dt&&Qt&&(dt.array.set(Qt.array),dt.needsUpdate=!0);const Ot=F.geometry.getAttribute("uv"),Ct=ze.getAttribute("uv");Ot&&Ct&&(Ot.array.set(Ct.array),Ot.needsUpdate=!0),ze.dispose()}else F.geometry.dispose(),F.geometry=ze;F.visible=!0,q.uniforms.uStrength.value=.36}else F.visible=!1,q.uniforms.uStrength.value=0}else F.visible=!1,q.uniforms.uStrength.value=0;const Fi=Math.floor((_n-1)/2),sn=performance.now(),rr=tn.clamp(Cs,0,.999);for(let Ce=0;Ce<_n;Ce++){if(hn||On<=Ce+1e-5||On<Ce+rr){C[Ce]=-1;continue}C[Ce]<0&&(On>=Ce+1-1e-5?C[Ce]=sn-Uv:C[Ce]=sn)}P.forEach((Ce,Le)=>{const Xe=-Le*Ss,ze=_n-1-Le,Qe=C[ze];let tt=Qe<0?0:no(tn.clamp((sn-Qe)/Uv,0,1));!hn&&ze===_n-1&&je>0&&(tt=Math.max(tt,je));let{opacity:Je}=r3(On,ze,Cs,tt);hn&&Le===Pi&&(Je*=Oi.lastCardOp,tt=0),Ce.position.set(0,0,Xe),Ce.scale.setScalar(ln);const dt=M[Le];dt.uniforms.uOpacity.value=Je,dt.uniforms.uWipe.value=tt,dt.depthWrite=Je>=.995&&tt<.02,Ce.visible=Je>.003&&tt<.997,Ce.renderOrder=Le<=Fi?IR+Le:BR+(Le-Fi-1)}),X.position.set(0,0,-Pi*Ss),X.scale.setScalar(ln),N.opacity=hn?Oi.titleOp:0,N.depthWrite=N.opacity>=.995,X.visible=N.opacity>.003;const A=qe+xe;let Y=0;if(Re>A&&ce>=A){const Ce=Math.max(1,Re-A);Y=no(tn.clamp((ce-A)/Ce,0,1))}if(Y>.02&&(F.visible=!1,q.uniforms.uStrength.value=0),!o.current){document.body.classList.toggle(Ks,!Zi);const Ce=e.current;Ce!=null&&Ce.classList.contains("flow-intro__sticky--exit")&&!Zi&&(Ce.style.transition="none",Ce.classList.remove("flow-intro__sticky--exit"),Ce.offsetWidth,Ce.style.transition="")}const re=r.current;if(re){const Ce=xe+ge*Lv+32,Le=Math.max(Math.ceil(qe+Ce),Math.ceil(ge*1.08));re.style.height!==`${Le}px`&&(re.style.height=`${Le}px`)}const ne=1-Y*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(ne)),e.current.style.setProperty("--intro-tagline-opacity","1")),ue.domElement.style.opacity=String(1-Y),ue.render(V,j)}mt();let rt=0,qt=0,It=!1,Ft=!1,an=window.scrollY,Lt=0,Yt="wheel";function Z(){qt&&(window.clearTimeout(qt),qt=0)}function At(){rt&&(cancelAnimationFrame(rt),rt=0),It=!1}function _t(){At(),Z()}c.current=_t;function U(){var Bt;const ge=Math.max(1,window.innerHeight),{cardPx:Oe,titlePx:Pe,totalPx:qe}=ml(ge),k=g.getBoundingClientRect(),Re=Math.max(1,g.offsetHeight-ge),ce=tn.clamp(-k.top,0,Re),Ae=document.getElementById("hero"),De=Ae?Pv(Ae.getBoundingClientRect().top):!0,xe=((Bt=e.current)==null?void 0:Bt.getBoundingClientRect().bottom)??ge,Ve=Math.max(0,Math.min(ce,qe)-Pe)/Math.max(1,Oe)*(_n-1);return{innerH:ge,cardPx:Oe,titlePx:Pe,totalPx:qe,scrolledPx:ce,landed:De,stickyBottom:xe,depthT:Ve}}function b(){if(_||o.current||Ft)return;Z();const ge=Yt==="touch"?QR:KR;qt=window.setTimeout(()=>{qt=0,J()},ge)}function J(){if(_||o.current||It||Ft)return;const ge=U();if(!xh(ge.scrolledPx,ge.titlePx,ge.totalPx,ge.landed,ge.stickyBottom,ge.innerH))return;const Oe=n3(ge.depthT,Lt),Pe=t3(g,Oe,ge.innerH),qe=window.scrollY,k=Pe-qe;if(Math.abs(k)<JR(ge.innerH))return;It=!0;const Re=performance.now(),ce=Ae=>{if(_||o.current){It=!1,rt=0;return}const De=U();if(!xh(De.scrolledPx,De.titlePx,De.totalPx,De.landed,De.stickyBottom,De.innerH)){At();return}const xe=Math.min(1,(Ae-Re)/ZR);dp(qe+k*$R(xe)),xe<1?rt=requestAnimationFrame(ce):(dp(Pe),It=!1,rt=0,Lt=0)};rt=requestAnimationFrame(ce)}function oe(ge){Yt="wheel",Math.abs(ge.deltaY)>.5&&(Lt=ge.deltaY>0?1:-1),At(),b()}function pe(){Yt="touch",Ft=!0,_t()}function Ue(){Yt="touch",Ft=!0,At()}function Ie(){Yt="touch",Ft=!1,b()}function he(){const ge=window.scrollY,Oe=ge-an;if(an=ge,It){const Pe=U();xh(Pe.scrolledPx,Pe.titlePx,Pe.totalPx,Pe.landed,Pe.stickyBottom,Pe.innerH)||_t();return}Math.abs(Oe)>.5&&(Lt=Oe>0?1:-1),Ft||b()}function me(){It||o.current||Ft||(Z(),J())}function Ne(){_t()}window.addEventListener("wheel",oe,{passive:!0}),window.addEventListener("touchstart",pe,{passive:!0}),window.addEventListener("touchmove",Ue,{passive:!0}),window.addEventListener("touchend",Ie,{passive:!0}),window.addEventListener("touchcancel",Ie,{passive:!0}),window.addEventListener("scroll",he,{passive:!0}),window.addEventListener("scrollend",me,{passive:!0}),window.addEventListener("resize",Ne,{passive:!0}),window.addEventListener("orientationchange",Ne,{passive:!0});const Ge=window.visualViewport;Ge&&Ge.addEventListener("resize",Ne),window.addEventListener("resize",ot,{passive:!0});const Fe=new ResizeObserver(ot);Fe.observe(p),S=()=>{var ge;_t(),c.current=null,cancelAnimationFrame(pt),document.body.classList.remove(Ks),window.removeEventListener("wheel",oe),window.removeEventListener("touchstart",pe),window.removeEventListener("touchmove",Ue),window.removeEventListener("touchend",Ie),window.removeEventListener("touchcancel",Ie),window.removeEventListener("scroll",he),window.removeEventListener("scrollend",me),window.removeEventListener("resize",Ne),window.removeEventListener("orientationchange",Ne),Ge&&Ge.removeEventListener("resize",Ne),window.removeEventListener("resize",ot),Fe.disconnect(),M.forEach(Oe=>{Oe.dispose()}),z.forEach(Oe=>Oe.dispose()),(ge=N.map)==null||ge.dispose(),N.dispose(),P.forEach(Oe=>Oe.geometry.dispose()),X.geometry.dispose(),F.geometry.dispose(),q.dispose(),V.remove(F),ue.dispose(),p.contains(ue.domElement)&&p.removeChild(ue.domElement)},_&&S()})(),()=>{var E;_=!0,(E=c.current)==null||E.call(c),c.current=null,document.body.classList.remove(Ks),S==null||S()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:u,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(xR,{text:SR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:to.map((d,m)=>D.jsxs("p",{children:["Step ",String(m+1).padStart(2,"0"),": ",d.verb,". ",d.description]},d.verb))})]}),D.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const h3=280,p3=5/4,m3=3800,g3={discover:pl,copy:lR};function _3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function v3({stepIndex:a,kind:e,className:i,width:r=h3}){const o=Ze.useRef(null),c=e??Ox(a),u=Math.round(r*p3);return Ze.useEffect(()=>{const d=o.current;if(!d)return;let m=0,p;const g=()=>{const S=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*S),w=Math.round(u*S);(d.width!==E||d.height!==w)&&(d.width=E,d.height=w);const y=d.getContext("2d");y&&hR(y,c,E,w,m)};g();const _=g3[c];_&&_>1&&!_3()&&(p=setInterval(()=>{m=(m+1)%_,g()},m3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),p&&clearInterval(p)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Gv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function x3(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Gv.map((a,e)=>{const i=e===Gv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const S3=/^(action)$/i;function M3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>S3.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function kx({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:M3(e)})]})}var y3=Kv();function E3(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function b3(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,E3(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Vv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=b3(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let p=0,g=0;for(let _=1;_<=a.length;_++){d.setStart(c,0),d.setEnd(c,_);const v=d.getClientRects().length;v>g&&g>0&&(m.push(a.slice(p,_-1)),p=_-1),g=v}return p<a.length&&m.push(a.slice(p)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const T3=40,A3=5,R3="typewriter-reveal",kv=1e3,C3=4e3;function Xv(){return kv+Math.random()*(C3-kv)}function Xx(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function w3({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const p=Ze.useRef(null),g=Ze.useRef(m),_=Ze.useRef(null),v=Ze.useRef(null),S=Ze.useRef(null),E=Ze.useRef("idle"),[w,y]=Ze.useState("idle");g.current=m;const M=Ze.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),P=Ze.useCallback(()=>{var L;M(),v.current=null,S.current=null,E.current="complete",y("complete"),(L=g.current)==null||L.call(g)},[M]),z=Ze.useCallback(L=>{M(),v.current=Date.now()+L,_.current=setTimeout(P,L)},[M,P]);Ze.useLayoutEffect(()=>{E.current="idle",y("idle"),S.current=null,v.current=null,M()},[a,i,r,M]),Ze.useLayoutEffect(()=>{var H,$,_e;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),S.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const Me=S.current??Xv();S.current=null,z(Me);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(Xx()){(H=g.current)==null||H.call(g);return}const L=p.current;if(!L||!a){($=g.current)==null||$.call(g);return}L.style.width="",L.offsetWidth;const X=Math.max(a.length/i*1e3,120),V=Math.max(a.length,1),j=L.closest(".typewriter-block"),ue=(j==null?void 0:j.clientWidth)??((_e=L.parentElement)==null?void 0:_e.clientWidth)??0;L.style.whiteSpace="nowrap",L.style.width="auto";const fe=L.scrollWidth,q=ue>0?Math.min(fe,ue):fe;L.style.width="0",L.style.setProperty("--tw-duration",`${X}ms`),L.style.setProperty("--tw-target-width",`${q}px`),L.style.setProperty("--tw-steps",String(V)),L.style.setProperty("--tw-cursor-width",`${r}px`),L.offsetWidth,E.current="animating",y("animating");const F=Me=>{if(Me.animationName===R3){if(d){L.style.width=`${q}px`,E.current="cursor-hold",y("cursor-hold"),z(Xv());return}L.style.width="",P()}};return L.addEventListener("animationend",F),()=>{L.removeEventListener("animationend",F)}},[o,u,P,d,z,i,a,c,M,r]);const C=w==="animating",I=w==="cursor-hold",N=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",I?"is-cursor-hold":"",u||N?"is-complete":"",!o&&!c&&!u&&!N&&(C||I)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:p,className:T,children:e??a})}function Dp({text:a,children:e,className:i,speed:r=T3,cursorWidth:o=A3,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const p=Ze.useRef(null),g=Ze.useRef(m),[_,v]=Ze.useState([]),[S,E]=Ze.useState(0),[w,y]=Ze.useState(0),[M,P]=Ze.useState(!1),[z,C]=Ze.useState(!1),I=Xx();g.current=m;const N=Ze.useCallback(()=>{const fe=p.current;if(!fe||!a)return v([]),E(0),C(!0),!0;const q=fe.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!I,{lines:$,blockHeight:_e}=Vv(a,q,fe,H);let Me=_e;if(!H){const O=Vv(a,q,fe,!0);Me=Math.max(_e,O.blockHeight)}return v($),E(Me),C(!0),!0},[a,c,I]);Ze.useLayoutEffect(()=>{var fe,q;if(y(0),P(!1),C(!1),v([]),E(0),I){(fe=g.current)==null||fe.call(g),C(!0);return}if(!a){(q=g.current)==null||q.call(g),C(!0);return}if(!N()){const F=new ResizeObserver(()=>{N()&&F.disconnect()});return p.current&&F.observe(p.current),()=>F.disconnect()}},[a,c,N,I]);const B=Ze.useCallback(fe=>{var F;const q=fe>=_.length-1;y3.flushSync(()=>{if(!q){y(fe+1);return}P(!0)}),q&&((F=g.current)==null||F.call(g))},[_]),L=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",I?"is-static":""].filter(Boolean).join(" "),X={...!M&&!I&&S>0?{height:S,minHeight:S}:void 0},V=e??a;if(!z)return D.jsx("span",{ref:p,className:L,style:X,children:V});if(I||!a)return D.jsx("span",{ref:p,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:V});if(M)return D.jsx("span",{ref:p,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:V});const j=_.length>0?_:[a],ue=!!e&&j.length<=1;return D.jsxs("span",{ref:p,className:L,style:X,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:V}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((fe,q)=>D.jsx(w3,{text:fe,content:ue?e:void 0,speed:r,cursorWidth:o,waiting:q>w,active:u&&q===w,completed:q<w,holdCursor:d&&q===j.length-1,onComplete:q===w?()=>B(q):void 0},`${q}-${fe}`))})]})}function D3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Wx(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Ze.useState(!1);return Ze.useLayoutEffect(()=>{if(r)return;if(D3()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function N3(a){return String(a).padStart(2,"0")}function gu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const L3=1600,U3=1500,Wv=5e3,O3=7e3;function P3(){return Wv+Math.random()*(O3-Wv)}function I3({text:a,active:e}){const[i,r]=Ze.useState(!1),[o,c]=Ze.useState(0),u=Ze.useRef(null),d=`> ${a}`,m=Ze.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Ze.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(gu()){r(!0);return}const g=window.setTimeout(()=>r(!0),U3);return()=>{window.clearTimeout(g),m()}},[e,m]);const p=Ze.useCallback(()=>{gu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},P3()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Dp,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:p},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function F3(){const[a,e]=Ze.useState(()=>new Set),[i,r]=Ze.useState(!1),o=Ze.useRef(new Map),c=Ze.useRef(null),u=Wx(c,{amount:.35}),d=hs.steps.every(_=>a.has(`step-${_.n}`));Ze.useLayoutEffect(()=>{if(gu()){e(new Set(hs.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(S=>{const E=new Set(S);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),Ze.useLayoutEffect(()=>{if(gu())return;if(!d){r(!1);return}const _=window.setTimeout(()=>{r(!0)},L3);return()=>window.clearTimeout(_)},[d]);const m=Ze.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),p=Ze.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:hs.kicker}),D.jsx("h2",{className:"section-title flow__title",children:hs.title}),D.jsx("div",{className:"flow__chips",children:hs.chips.map(_=>D.jsx(kx,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:hs.steps.map((_,v)=>{const S=`step-${_.n}`,E=a.has(S);return D.jsxs("article",{ref:w=>m(S,w),"data-flow-key":S,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>p(S),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",N3(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(I3,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:An.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(x3,{}):D.jsx(v3,{stepIndex:v,width:280}):null})]})})})]},S)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Dp,{text:hs.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:hs.outcome})})]})})}const B3=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],z3=58,H3=35;function G3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,z3+r*2,H3+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:B3.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const V3={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function qx({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=V3[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(G3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}function k3(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(qx,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:A_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[nu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:An.docs,children:"Docs"}),D.jsx("a",{href:An.manifesto,children:"Manifesto"}),D.jsx("a",{href:An.discord,children:"Discord"}),D.jsx("a",{href:An.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:A_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const qv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",X3=50,Yv=3500,jv=4e3;function W3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zv(a){return/[A-Za-z0-9]/.test(a)}function q3(){return qv[Math.floor(Math.random()*qv.length)]??"?"}function Y3(a){return Math.random()<.5?q3():a}function j3(a,e,i){const r=[];for(let p=0;p<a.length;p++)Zv(a[p]??"")&&r.push(p);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let p=0;p<a.length;p++){const g=a[p]??"";!Zv(g)||d.has(p)?m+=g:m+=Y3(g)}return m}function Z3(a){return typeof a=="boolean"?{enabled:a,decryptMs:Yv,pauseMs:jv}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Yv,pauseMs:a.pauseMs??jv}}function zn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=Z3(e),c=r+o,[u,d]=Ze.useState(a);return Ze.useEffect(()=>{if(!i||W3()){d(a);return}let m=Date.now();const p=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),d(j3(a,v,r))};p();const g=setInterval(p,X3);return()=>{clearInterval(g)}},[a,i,r,c]),u}function K3(){const[a,e]=ds.headline,i=zn(ds.eyebrow.label);return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),D.jsx("div",{className:"hero__grid","aria-hidden":!0}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:ds.eyebrow.href,"aria-label":`${ds.eyebrow.label}›`,children:[i,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:a}),D.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(oo,{href:ds.primaryCta.href,variant:"primary",children:ds.primaryCta.label}),D.jsx(oo,{href:ds.secondaryCta.href,variant:"secondary",children:ds.secondaryCta.label})]})]})]})}function Q3(){const a=zn(Od.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Od.href,"aria-label":Od.text,children:a})})}function J3(){const a=[...T_,...T_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(kx,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}const Kn={decryptMs:2800,pauseMs:5200};function ai({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function Tn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix"}){return D.jsx("p",{className:i,"aria-label":a,children:e})}function $3({meta:a}){const e=zn(a.name,Kn),i=zn(a.hash,Kn),r=zn(a.chain,Kn),o=zn(a.verified,Kn),c=zn(a.rep,Kn),u=zn(a.portable,Kn),d=zn(a.next,Kn),m=`identity · ${a.name}`,p=`identity · ${e}`,g=`hash ${a.hash}`,_=`hash ${i}`,v=`chain ${a.chain}`,S=`chain ${r}`,E=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,w=`verified ${o} · rep ${c} · portable ${u}`,y=`next ${a.next}`,M=`next ${d}`,P=`rep ${a.rep} · portable ${a.portable}`,z=`rep ${c} · portable ${u}`,C=`verified ${a.verified}`,I=`verified ${o}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"identity"}),D.jsx("p",{className:"persona-card__meta-name terminal-value persona-card__meta-value--matrix","aria-label":a.name,children:e}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(ai,{label:"hash",value:a.hash,display:i}),D.jsx(ai,{label:"chain",value:a.chain,display:r}),D.jsx(ai,{label:"verified",value:a.verified,display:o}),D.jsx(ai,{label:"rep",value:a.rep,display:c}),D.jsx(ai,{label:"portable",value:a.portable,display:u}),D.jsx(ai,{label:"next",value:a.next,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(Tn,{value:m,display:p,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(Tn,{value:g,display:_}),D.jsx(Tn,{value:v,display:S}),D.jsx(Tn,{value:E,display:w}),D.jsx(Tn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:"identity"}),D.jsx(Tn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(Tn,{value:g,display:_}),D.jsx(Tn,{value:v,display:S}),D.jsx(Tn,{value:C,display:I}),D.jsx(Tn,{value:P,display:z}),D.jsx(Tn,{value:y,display:M})]})]})}function eC({meta:a}){const e=zn(a.tx,Kn),i=zn(a.from,Kn),r=zn(a.to,Kn),o=zn(a.asset,Kn),c=zn(a.amt,Kn),u=zn(a.chain,Kn),d=zn(a.settled,Kn),m=zn(a.queued,Kn),p=`tx ${a.tx}`,g=`tx ${e}`,_=`${a.from} → ${a.to}`,v=`${i} → ${r}`,S=`${a.asset} ${a.amt} · ${a.chain}`,E=`${o} ${c} · ${u}`,w=`${a.asset} ${a.amt}`,y=`${o} ${c}`,M=`settled ${a.settled} · queued ${a.queued}`,P=`settled ${d} · queued ${m}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"community"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(ai,{label:"tx",value:a.tx,display:e}),D.jsx(ai,{label:"from",value:a.from,display:i}),D.jsx(ai,{label:"to",value:a.to,display:r}),D.jsx(ai,{label:"asset",value:a.asset,display:o}),D.jsx(ai,{label:"amt",value:a.amt,display:c}),D.jsx(ai,{label:"chain",value:a.chain,display:u}),D.jsx(ai,{label:"settled",value:a.settled,display:d}),D.jsx(ai,{label:"queued",value:a.queued,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:"community"}),D.jsx(Tn,{value:p,display:g}),D.jsx(Tn,{value:_,display:v}),D.jsx(Tn,{value:S,display:E}),D.jsx(Tn,{value:M,display:P})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:"community"}),D.jsx(Tn,{value:p,display:g}),D.jsx(Tn,{value:_,display:v}),D.jsx(Tn,{value:w,display:y}),D.jsx(Tn,{value:a.chain,display:u}),D.jsx(Tn,{value:M,display:P})]})]})}function tC({meta:a}){return a.kind==="identity"?D.jsx($3,{meta:a}):D.jsx(eC,{meta:a})}function nC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Pd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Pd.title}),D.jsx("div",{className:"personas__grid",children:Pd.items.map(a=>D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(oo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(tC,{meta:a.meta})]},a.title))})]})})}function iC(){const[a,e]=Ze.useState(!1),[i,r]=Ze.useState(!1),[o,c]=Ze.useState("");return Ze.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Ze.useEffect(()=>{const u=nu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const p=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=p[0])!=null&&g.target.id&&c(p[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const p=document.getElementById(m);p&&d.observe(p)}),()=>d.disconnect()},[]),Ze.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(qx,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:nu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:An.docs,children:"Docs"}),D.jsx(oo,{href:An.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[nu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:An.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function aC(){const a=Ze.useRef(null),e=Wx(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Dp,{text:b_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:b_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function sC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(Q3,{}),D.jsx(iC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(d3,{}),D.jsx(K3,{}),D.jsx(aC,{}),D.jsx(J3,{}),D.jsx(ry,{}),D.jsx(nC,{}),D.jsx(F3,{}),D.jsx(ly,{}),D.jsx(sy,{})]}),D.jsx(k3,{})]})}iy.createRoot(document.getElementById("root")).render(D.jsx(Ze.StrictMode,{children:D.jsx(sC,{})}));
