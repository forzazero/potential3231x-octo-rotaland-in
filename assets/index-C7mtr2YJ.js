(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Ed={exports:{}},$o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function VM(){if(c_)return $o;c_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return $o.Fragment=e,$o.jsx=i,$o.jsxs=i,$o}var u_;function kM(){return u_||(u_=1,Ed.exports=VM()),Ed.exports}var B=kM(),bd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function XM(){if(f_)return ct;f_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(U,K,Me){this.props=U,this.context=K,this.refs=y,this.updater=Me||b}M.prototype.isReactComponent={},M.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=M.prototype;function z(U,K,Me){this.props=U,this.context=K,this.refs=y,this.updater=Me||b}var C=z.prototype=new I;C.constructor=z,w(C,M.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function D(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(U,K,Me){var we=Me.ref;return{$$typeof:a,type:U,key:K,ref:we!==void 0?we:null,props:Me}}function X(U,K){return L(U.type,K,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function j(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Me){return K[Me]})}var ce=/\/+/g;function fe(U,K){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):K.toString(36)}function q(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(D,D):(U.status="pending",U.then(function(K){U.status==="pending"&&(U.status="fulfilled",U.value=K)},function(K){U.status==="pending"&&(U.status="rejected",U.reason=K)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,K,Me,we,Ge){var re=typeof U;(re==="undefined"||re==="boolean")&&(U=null);var Ee=!1;if(U===null)Ee=!0;else switch(re){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(U.$$typeof){case a:case e:Ee=!0;break;case g:return Ee=U._init,O(Ee(U._payload),K,Me,we,Ge)}}if(Ee)return Ge=Ge(U),Ee=we===""?"."+fe(U,0):we,P(Ge)?(Me="",Ee!=null&&(Me=Ee.replace(ce,"$&/")+"/"),O(Ge,K,Me,"",function(nt){return nt})):Ge!=null&&(k(Ge)&&(Ge=X(Ge,Me+(Ge.key==null||U&&U.key===Ge.key?"":(""+Ge.key).replace(ce,"$&/")+"/")+Ee)),K.push(Ge)),1;Ee=0;var Ae=we===""?".":we+":";if(P(U))for(var qe=0;qe<U.length;qe++)we=U[qe],re=Ae+fe(we,qe),Ee+=O(we,K,Me,re,Ge);else if(qe=x(U),typeof qe=="function")for(U=qe.call(U),qe=0;!(we=U.next()).done;)we=we.value,re=Ae+fe(we,qe++),Ee+=O(we,K,Me,re,Ge);else if(re==="object"){if(typeof U.then=="function")return O(q(U),K,Me,we,Ge);throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function H(U,K,Me){if(U==null)return U;var we=[],Ge=0;return O(U,we,"","",function(re){return K.call(Me,re,Ge++)}),we}function $(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(Me){(U._status===0||U._status===-1)&&(U._status=1,U._result=Me)},function(Me){(U._status===0||U._status===-1)&&(U._status=2,U._result=Me)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var ge=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xe={map:H,forEach:function(U,K,Me){H(U,function(){K.apply(this,arguments)},Me)},count:function(U){var K=0;return H(U,function(){K++}),K},toArray:function(U){return H(U,function(K){return K})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ct.Activity=_,ct.Children=xe,ct.Component=M,ct.Fragment=i,ct.Profiler=o,ct.PureComponent=z,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ct.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},ct.cache=function(U){return function(){return U.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(U,K,Me){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var we=w({},U.props),Ge=U.key;if(K!=null)for(re in K.key!==void 0&&(Ge=""+K.key),K)!T.call(K,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&K.ref===void 0||(we[re]=K[re]);var re=arguments.length-2;if(re===1)we.children=Me;else if(1<re){for(var Ee=Array(re),Ae=0;Ae<re;Ae++)Ee[Ae]=arguments[Ae+2];we.children=Ee}return L(U.type,Ge,we)},ct.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ct.createElement=function(U,K,Me){var we,Ge={},re=null;if(K!=null)for(we in K.key!==void 0&&(re=""+K.key),K)T.call(K,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Ge[we]=K[we]);var Ee=arguments.length-2;if(Ee===1)Ge.children=Me;else if(1<Ee){for(var Ae=Array(Ee),qe=0;qe<Ee;qe++)Ae[qe]=arguments[qe+2];Ge.children=Ae}if(U&&U.defaultProps)for(we in Ee=U.defaultProps,Ee)Ge[we]===void 0&&(Ge[we]=Ee[we]);return L(U,re,Ge)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:h,render:U}},ct.isValidElement=k,ct.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:$}},ct.memo=function(U,K){return{$$typeof:p,type:U,compare:K===void 0?null:K}},ct.startTransition=function(U){var K=F.T,Me={};F.T=Me;try{var we=U(),Ge=F.S;Ge!==null&&Ge(Me,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(D,ge)}catch(re){ge(re)}finally{K!==null&&Me.types!==null&&(K.types=Me.types),F.T=K}},ct.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ct.use=function(U){return F.H.use(U)},ct.useActionState=function(U,K,Me){return F.H.useActionState(U,K,Me)},ct.useCallback=function(U,K){return F.H.useCallback(U,K)},ct.useContext=function(U){return F.H.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U,K){return F.H.useDeferredValue(U,K)},ct.useEffect=function(U,K){return F.H.useEffect(U,K)},ct.useEffectEvent=function(U){return F.H.useEffectEvent(U)},ct.useId=function(){return F.H.useId()},ct.useImperativeHandle=function(U,K,Me){return F.H.useImperativeHandle(U,K,Me)},ct.useInsertionEffect=function(U,K){return F.H.useInsertionEffect(U,K)},ct.useLayoutEffect=function(U,K){return F.H.useLayoutEffect(U,K)},ct.useMemo=function(U,K){return F.H.useMemo(U,K)},ct.useOptimistic=function(U,K){return F.H.useOptimistic(U,K)},ct.useReducer=function(U,K,Me){return F.H.useReducer(U,K,Me)},ct.useRef=function(U){return F.H.useRef(U)},ct.useState=function(U){return F.H.useState(U)},ct.useSyncExternalStore=function(U,K,Me){return F.H.useSyncExternalStore(U,K,Me)},ct.useTransition=function(){return F.H.useTransition()},ct.version="19.2.7",ct}var d_;function op(){return d_||(d_=1,bd.exports=XM()),bd.exports}var Je=op(),Td={exports:{}},el={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function WM(){return h_||(h_=1,(function(a){function e(O,H){var $=O.length;O.push(H);e:for(;0<$;){var ge=$-1>>>1,xe=O[ge];if(0<o(xe,H))O[ge]=H,O[$]=xe,$=ge;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],$=O.pop();if($!==H){O[0]=$;e:for(var ge=0,xe=O.length,U=xe>>>1;ge<U;){var K=2*(ge+1)-1,Me=O[K],we=K+1,Ge=O[we];if(0>o(Me,$))we<xe&&0>o(Ge,Me)?(O[ge]=Ge,O[we]=$,ge=we):(O[ge]=Me,O[K]=$,ge=K);else if(we<xe&&0>o(Ge,$))O[ge]=Ge,O[we]=$,ge=we;else break e}}return H}function o(O,H){var $=O.sortIndex-H.sortIndex;return $!==0?$:O.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=O)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function P(O){if(w=!1,C(O),!b)if(i(m)!==null)b=!0,D||(D=!0,j());else{var H=i(p);H!==null&&q(P,H.startTime-O)}}var D=!1,F=-1,T=5,L=-1;function X(){return y?!0:!(a.unstable_now()-L<T)}function k(){if(y=!1,D){var O=a.unstable_now();L=O;var H=!0;try{e:{b=!1,w&&(w=!1,I(F),F=-1),x=!0;var $=v;try{t:{for(C(O),_=i(m);_!==null&&!(_.expirationTime>O&&X());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,v=_.priorityLevel;var xe=ge(_.expirationTime<=O);if(O=a.unstable_now(),typeof xe=="function"){_.callback=xe,C(O),H=!0;break t}_===i(m)&&r(m),C(O)}else r(m);_=i(m)}if(_!==null)H=!0;else{var U=i(p);U!==null&&q(P,U.startTime-O),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?j():D=!1}}}var j;if(typeof z=="function")j=function(){z(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=k,j=function(){fe.postMessage(null)}}else j=function(){M(k,0)};function q(O,H){F=M(function(){O(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(O){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return O()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=v;v=O;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(O,H,$){var ge=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,O){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,O={id:g++,callback:H,priorityLevel:O,startTime:$,expirationTime:xe,sortIndex:-1},$>ge?(O.sortIndex=$,e(p,O),i(m)===null&&O===i(p)&&(w?(I(F),F=-1):w=!0,q(P,$-ge))):(O.sortIndex=xe,e(m,O),b||x||(b=!0,D||(D=!0,j()))),O},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(O){var H=v;return function(){var $=v;v=H;try{return O.apply(this,arguments)}finally{v=$}}}})(Rd)),Rd}var p_;function qM(){return p_||(p_=1,Ad.exports=WM()),Ad.exports}var Cd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function YM(){if(m_)return Gn;m_=1;var a=op();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Gn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Gn.flushSync=function(m){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=g,r.d.f()}},Gn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Gn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Gn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Gn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Gn.requestFormReset=function(m){r.d.r(m)},Gn.unstable_batchedUpdates=function(m,p){return m(p)},Gn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var g_;function Vv(){if(g_)return Cd.exports;g_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Cd.exports=YM(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function ZM(){if(__)return el;__=1;var a=qM(),e=op(),i=Vv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),n;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=d;break}if(R===l){S=!0,l=f,s=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===s){S=!0,s=d,l=f;break}if(R===l){S=!0,l=d,s=f;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case D:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var q=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],xe=-1;function U(t){return{current:t}}function K(t){0>xe||(t.current=ge[xe],ge[xe]=null,xe--)}function Me(t,n){xe++,ge[xe]=t.current,t.current=n}var we=U(null),Ge=U(null),re=U(null),Ee=U(null);function Ae(t,n){switch(Me(re,n),Me(Ge,t),Me(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ng(n),t=Ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(we),Me(we,t)}function qe(){K(we),K(Ge),K(re)}function nt(t){t.memoizedState!==null&&Me(Ee,t);var n=we.current,s=Ug(n,t.type);n!==s&&(Me(Ge,t),Me(we,s))}function et(t){Ge.current===t&&(K(we),K(Ge)),Ee.current===t&&(K(Ee),jo._currentValue=$)}var Yt,lt;function mt(t){if(Yt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+lt}var gt=!1;function ot(t,n){if(!t||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var le=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){le=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){le=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var G=S.split(`
`),ae=R.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ae.length)for(l=G.length-1,f=ae.length-1;1<=l&&0<=f&&G[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ae[f]){var ve=`
`+G[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?mt(s):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return mt("Activity");default:return""}}function Bt(t){try{var n="",s=null;do n+=Zt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var St=Object.prototype.hasOwnProperty,Gt=a.unstable_scheduleCallback,Vt=a.unstable_cancelCallback,Jt=a.unstable_shouldYield,Z=a.unstable_requestPaint,Lt=a.unstable_now,xt=a.unstable_getCurrentPriorityLevel,N=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,oe=a.unstable_LowPriority,pe=a.unstable_IdlePriority,Le=a.log,Pe=a.unstable_setDisableYieldValue,he=null,me=null;function Ne(t){if(typeof Le=="function"&&Pe(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(he,t)}catch{}}var He=Math.clz32?Math.clz32:be,Ie=Math.log,Fe=Math.LN2;function be(t){return t>>>=0,t===0?32:31-(Ie(t)/Fe|0)|0}var Ue=256,Oe=262144,V=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ue(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=Re(l):(S&=R,S!==0?f=Re(S):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~d,R!==0?f=Re(R):S!==0?f=Re(S):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:f}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _e(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function Xe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function dt(t,n,s,l,f,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(s=S&~s;0<s;){var ve=31-He(s),ye=1<<ve;R[ve]=0,G[ve]=-1;var le=ae[ve];if(le!==null)for(ae[ve]=null,ve=0;ve<le.length;ve++){var de=le[ve];de!==null&&(de.lane&=-536870913)}s&=~ye}l!==0&&rt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function rt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function mn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function cn(t,n){var s=n&-n;return s=(s&42)!==0?1:zn(s),(s&(t.suspendedLanes|n))!==0?0:s}function zn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function la(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:n_(t.type))}function Ha(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var Li=Math.random().toString(36).slice(2),$t="__reactFiber$"+Li,Sn="__reactProps$"+Li,Ln="__reactContainer$"+Li,ca="__reactEvents$"+Li,Ts="__reactListeners$"+Li,Xi="__reactHandles$"+Li,Wi="__reactResources$"+Li,qi="__reactMarker$"+Li;function Ni(t){delete t[$t],delete t[Sn],delete t[ca],delete t[Ts],delete t[Xi]}function mi(t){var n=t[$t];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Ln]||s[$t]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Hg(t);t!==null;){if(s=t[$t])return s;t=Hg(t)}return n}t=s,s=t.parentNode}return null}function ni(t){if(t=t[$t]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ua(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function fa(t){var n=t[Wi];return n||(n=t[Wi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(t){t[qi]=!0}var Ga=new Set,A={};function Y(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)Ga.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Be={};function Ye(t){return St.call(Be,t)?!0:St.call(ne,t)?!1:te.test(t)?Be[t]=!0:(ne[t]=!0,!1)}function Te(t,n,s){if(Ye(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function ze(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function We(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function it(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _t(t){if(!t._valueTracker){var n=it(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Nt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=it(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wt=/[\n"\\]/g;function Ut(t){return t.replace(wt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function je(t,n,s,l,f,d,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ke(n)):t.value!==""+Ke(n)&&(t.value=""+Ke(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,S,Ke(n)):s!=null?Mt(t,S,Ke(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ke(R):t.removeAttribute("name")}function Hn(t,n,s,l,f,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){_t(t);return}s=s!=null?""+Ke(s):"",n=n!=null?""+Ke(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),_t(t)}function Mt(t,n,s){n==="number"&&zt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Rn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ke(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function ii(t,n,s){if(n!=null&&(n=""+Ke(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Ke(s):""}function Ui(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Ke(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),_t(t)}function ai(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||kt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Oi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&rn(t,f,l)}else for(var d in n)n.hasOwnProperty(d)&&rn(t,d,n[d])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var Su=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,ar=null;function Lp(t){var n=ni(t);if(n&&(t=n.stateNode)){var s=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(je(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ut(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(r(90));je(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Nt(l)}break e;case"textarea":ii(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Rn(t,!!s.multiple,n,!1)}}}var Mu=!1;function Np(t,n,s){if(Mu)return t(n,s);Mu=!0;try{var l=t(n);return l}finally{if(Mu=!1,(ir!==null||ar!==null)&&(oc(),ir&&(n=ir,t=ar,ar=ir=null,Lp(n),t)))for(n=0;n<t.length;n++)Lp(t[n])}}function fo(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(ha)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){yu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{yu=!1}var ka=null,Eu=null,Ml=null;function Up(){if(Ml)return Ml;var t,n=Eu,s=n.length,l,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[d-l];l++);return Ml=f.slice(t,1<l?1-l:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Op(){return!1}function jn(t){function n(s,l,f,d,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?El:Op,this.isPropagationStopped=Op,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),n}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=jn(Rs),po=_({},Rs,{view:0,detail:0}),HS=jn(po),bu,Tu,mo,Tl=_({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(bu=t.screenX-mo.screenX,Tu=t.screenY-mo.screenY):Tu=bu=0,mo=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Pp=jn(Tl),GS=_({},Tl,{dataTransfer:0}),VS=jn(GS),kS=_({},po,{relatedTarget:0}),Au=jn(kS),XS=_({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),WS=jn(XS),qS=_({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YS=jn(qS),ZS=_({},Rs,{data:0}),Ip=jn(ZS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=QS[t])?!!n[t]:!1}function Ru(){return JS}var $S=_({},po,{key:function(t){if(t.key){var n=jS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=jn($S),tx=_({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=jn(tx),nx=_({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),ix=jn(nx),ax=_({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=jn(ax),rx=_({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=jn(rx),lx=_({},Rs,{newState:0,oldState:0}),cx=jn(lx),ux=[9,13,27,32],Cu=ha&&"CompositionEvent"in window,go=null;ha&&"documentMode"in document&&(go=document.documentMode);var fx=ha&&"TextEvent"in window&&!go,Bp=ha&&(!Cu||go&&8<go&&11>=go),zp=" ",Hp=!1;function Gp(t,n){switch(t){case"keyup":return ux.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function dx(t,n){switch(t){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,zp);case"textInput":return t=n.data,t===zp&&Hp?null:t;default:return null}}function hx(t,n){if(sr)return t==="compositionend"||!Cu&&Gp(t,n)?(t=Up(),Ml=Eu=ka=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!px[t.type]:n==="textarea"}function Xp(t,n,s,l){ir?ar?ar.push(l):ar=[l]:ir=l,n=pc(n,"onChange"),0<n.length&&(s=new bl("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var _o=null,vo=null;function mx(t){Ag(t,0)}function Al(t){var n=ua(t);if(Nt(n))return t}function Wp(t,n){if(t==="change")return n}var qp=!1;if(ha){var wu;if(ha){var Du="oninput"in document;if(!Du){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Du=typeof Yp.oninput=="function"}wu=Du}else wu=!1;qp=wu&&(!document.documentMode||9<document.documentMode)}function Zp(){_o&&(_o.detachEvent("onpropertychange",jp),vo=_o=null)}function jp(t){if(t.propertyName==="value"&&Al(vo)){var n=[];Xp(n,vo,t,xu(t)),Np(mx,n)}}function gx(t,n,s){t==="focusin"?(Zp(),_o=n,vo=s,_o.attachEvent("onpropertychange",jp)):t==="focusout"&&Zp()}function _x(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(vo)}function vx(t,n){if(t==="click")return Al(n)}function Sx(t,n){if(t==="input"||t==="change")return Al(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:xx;function So(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!St.call(n,f)||!si(t[f],n[f]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,n){var s=Kp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Kp(s)}}function Jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=zt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=zt(t.document)}return n}function Lu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Mx=ha&&"documentMode"in document&&11>=document.documentMode,rr=null,Nu=null,xo=null,Uu=!1;function em(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uu||rr==null||rr!==zt(l)||(l=rr,"selectionStart"in l&&Lu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&So(xo,l)||(xo=l,l=pc(Nu,"onSelect"),0<l.length&&(n=new bl("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=rr)))}function Cs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var or={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Ou={},tm={};ha&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function ws(t){if(Ou[t])return Ou[t];if(!or[t])return t;var n=or[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in tm)return Ou[t]=n[s];return t}var nm=ws("animationend"),im=ws("animationiteration"),am=ws("animationstart"),yx=ws("transitionrun"),Ex=ws("transitionstart"),bx=ws("transitioncancel"),sm=ws("transitionend"),rm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Pi(t,n){rm.set(t,n),Y(n,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],lr=0,Iu=0;function Cl(){for(var t=lr,n=Iu=lr=0;n<t;){var s=gi[n];gi[n++]=null;var l=gi[n];gi[n++]=null;var f=gi[n];gi[n++]=null;var d=gi[n];if(gi[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&om(s,f,d)}}function wl(t,n,s,l){gi[lr++]=t,gi[lr++]=n,gi[lr++]=s,gi[lr++]=l,Iu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Fu(t,n,s,l){return wl(t,n,s,l),Dl(t)}function Ds(t,n){return wl(t,null,null,n),Dl(t)}function om(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&n!==null&&(f=31-He(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),d):null}function Dl(t){if(50<Vo)throw Vo=0,Yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cr={};function Tx(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,s,l){return new Tx(t,n,s,l)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,n){var s=t.alternate;return s===null?(s=ri(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function lm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ll(t,n,s,l,f,d){var S=0;if(l=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=DM(t,s,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ri(31,s,n,f),t.elementType=L,t.lanes=d,t;case w:return Ls(s.children,f,d,n);case y:S=8,f|=24;break;case M:return t=ri(12,s,n,f|2),t.elementType=M,t.lanes=d,t;case P:return t=ri(13,s,n,f),t.elementType=P,t.lanes=d,t;case D:return t=ri(19,s,n,f),t.elementType=D,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case I:S=9;break e;case C:S=11;break e;case F:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=ri(S,s,n,f),n.elementType=t,n.type=l,n.lanes=d,n}function Ls(t,n,s,l){return t=ri(7,t,l,n),t.lanes=s,t}function zu(t,n,s){return t=ri(6,t,null,n),t.lanes=s,t}function cm(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,s){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var um=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var s=um.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Bt(n)},um.set(t,n),n)}return{value:t,source:n,stack:Bt(n)}}var ur=[],fr=0,Nl=null,Mo=0,vi=[],Si=0,Xa=null,Zi=1,ji="";function ma(t,n){ur[fr++]=Mo,ur[fr++]=Nl,Nl=t,Mo=n}function fm(t,n,s){vi[Si++]=Zi,vi[Si++]=ji,vi[Si++]=Xa,Xa=t;var l=Zi;t=ji;var f=32-He(l)-1;l&=~(1<<f),s+=1;var d=32-He(n)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Zi=1<<32-He(n)+f|s<<f|l,ji=d+t}else Zi=1<<d|s<<f|l,ji=t}function Gu(t){t.return!==null&&(ma(t,1),fm(t,1,0))}function Vu(t){for(;t===Nl;)Nl=ur[--fr],ur[fr]=null,Mo=ur[--fr],ur[fr]=null;for(;t===Xa;)Xa=vi[--Si],vi[Si]=null,ji=vi[--Si],vi[Si]=null,Zi=vi[--Si],vi[Si]=null}function dm(t,n){vi[Si++]=Zi,vi[Si++]=ji,vi[Si++]=Xa,Zi=n.id,ji=n.overflow,Xa=t}var On=null,nn=null,At=!1,Wa=null,xi=!1,ku=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(_i(n,t)),ku}function hm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[$t]=t,n[Sn]=l,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<Xo.length;s++)Et(Xo[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Hn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ui(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Dg(n.textContent,s)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||qa(t,!0)}function pm(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:On=On.return}}function dr(t){if(t!==On)return!1;if(!At)return pm(t),At=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ld(t.type,t.memoizedProps)),s=!s),s&&nn&&qa(t),pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=zg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=zg(t)}else n===27?(n=nn,rs(t.type)?(t=hd,hd=null,nn=t):nn=n):nn=On?yi(t.stateNode.nextSibling):null;return!0}function Ns(){nn=On=null,At=!1}function Xu(){var t=Wa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Wa=null),t}function yo(t){Wa===null?Wa=[t]:Wa.push(t)}var Wu=U(null),Us=null,ga=null;function Ya(t,n,s){Me(Wu,n._currentValue),n._currentValue=s}function _a(t){t._currentValue=Wu.current,K(Wu)}function qu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Yu(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var G=0;G<n.length;G++)if(R.context===n[G]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),qu(d.return,s,t),l||(S=null);break e}d=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),qu(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function hr(t,n,s,l){t=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=f.type;si(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===Ee.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}f=f.return}t!==null&&Yu(n,t,s,l),n.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Us=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return mm(Us,t)}function Ol(t,n){return Us===null&&Os(t),mm(t,n)}function mm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},ga===null){if(t===null)throw Error(r(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return s}var Ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},Rx=a.unstable_scheduleCallback,Cx=a.unstable_NormalPriority,xn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new Ax,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&Rx(Cx,function(){t.controller.abort()})}var bo=null,ju=0,pr=0,mr=null;function wx(t,n){if(bo===null){var s=bo=[];ju=0,pr=$f(),mr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ju++,n.then(gm,gm),n}function gm(){if(--ju===0&&bo!==null){mr!==null&&(mr.status="fulfilled");var t=bo;bo=null,pr=0,mr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Dx(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var _m=O.S;O.S=function(t,n){eg=Lt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(t,n),_m!==null&&_m(t,n)};var Ps=U(null);function Ku(){var t=Ps.current;return t!==null?t:en.pooledCache}function Pl(t,n){n===null?Me(Ps,Ps.current):Me(Ps,n.pool)}function vm(){var t=Ku();return t===null?null:{parent:xn._currentValue,pool:t}}var gr=Error(r(460)),Qu=Error(r(474)),Il=Error(r(542)),Fl={then:function(){}};function Sm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(da,da),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(da,da);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw Fs=n,gr}}function Is(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fs=s,gr):s}}var Fs=null;function Mm(){if(Fs===null)throw Error(r(459));var t=Fs;return Fs=null,t}function ym(t){if(t===gr||t===Il)throw Error(r(483))}var _r=null,To=0;function Bl(t){var n=To;return To+=1,_r===null&&(_r=[]),xm(_r,t,n)}function Ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Em(t){function n(J,W){if(t){var ie=J.deletions;ie===null?(J.deletions=[W],J.flags|=16):ie.push(W)}}function s(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function l(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=pa(J,W),J.index=0,J.sibling=null,J}function d(J,W,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<W?(J.flags|=67108866,W):ie):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function S(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,ie,Se){return W===null||W.tag!==6?(W=zu(ie,J.mode,Se),W.return=J,W):(W=f(W,ie),W.return=J,W)}function G(J,W,ie,Se){var tt=ie.type;return tt===w?ve(J,W,ie.props.children,Se,ie.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Is(tt)===W.type)?(W=f(W,ie.props),Ao(W,ie),W.return=J,W):(W=Ll(ie.type,ie.key,ie.props,null,J.mode,Se),Ao(W,ie),W.return=J,W)}function ae(J,W,ie,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Hu(ie,J.mode,Se),W.return=J,W):(W=f(W,ie.children||[]),W.return=J,W)}function ve(J,W,ie,Se,tt){return W===null||W.tag!==7?(W=Ls(ie,J.mode,Se,tt),W.return=J,W):(W=f(W,ie),W.return=J,W)}function ye(J,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,J.mode,ie),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return ie=Ll(W.type,W.key,W.props,null,J.mode,ie),Ao(ie,W),ie.return=J,ie;case b:return W=Hu(W,J.mode,ie),W.return=J,W;case T:return W=Is(W),ye(J,W,ie)}if(q(W)||j(W))return W=Ls(W,J.mode,ie,null),W.return=J,W;if(typeof W.then=="function")return ye(J,Bl(W),ie);if(W.$$typeof===z)return ye(J,Ol(J,W),ie);zl(J,W)}return null}function le(J,W,ie,Se){var tt=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return tt!==null?null:R(J,W,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case x:return ie.key===tt?G(J,W,ie,Se):null;case b:return ie.key===tt?ae(J,W,ie,Se):null;case T:return ie=Is(ie),le(J,W,ie,Se)}if(q(ie)||j(ie))return tt!==null?null:ve(J,W,ie,Se,null);if(typeof ie.then=="function")return le(J,W,Bl(ie),Se);if(ie.$$typeof===z)return le(J,W,Ol(J,ie),Se);zl(J,ie)}return null}function de(J,W,ie,Se,tt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ie)||null,R(W,J,""+Se,tt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case x:return J=J.get(Se.key===null?ie:Se.key)||null,G(W,J,Se,tt);case b:return J=J.get(Se.key===null?ie:Se.key)||null,ae(W,J,Se,tt);case T:return Se=Is(Se),de(J,W,ie,Se,tt)}if(q(Se)||j(Se))return J=J.get(ie)||null,ve(W,J,Se,tt,null);if(typeof Se.then=="function")return de(J,W,ie,Bl(Se),tt);if(Se.$$typeof===z)return de(J,W,ie,Ol(W,Se),tt);zl(W,Se)}return null}function Qe(J,W,ie,Se){for(var tt=null,Ot=null,$e=W,ht=W=0,Tt=null;$e!==null&&ht<ie.length;ht++){$e.index>ht?(Tt=$e,$e=null):Tt=$e.sibling;var Pt=le(J,$e,ie[ht],Se);if(Pt===null){$e===null&&($e=Tt);break}t&&$e&&Pt.alternate===null&&n(J,$e),W=d(Pt,W,ht),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt,$e=Tt}if(ht===ie.length)return s(J,$e),At&&ma(J,ht),tt;if($e===null){for(;ht<ie.length;ht++)$e=ye(J,ie[ht],Se),$e!==null&&(W=d($e,W,ht),Ot===null?tt=$e:Ot.sibling=$e,Ot=$e);return At&&ma(J,ht),tt}for($e=l($e);ht<ie.length;ht++)Tt=de($e,J,ht,ie[ht],Se),Tt!==null&&(t&&Tt.alternate!==null&&$e.delete(Tt.key===null?ht:Tt.key),W=d(Tt,W,ht),Ot===null?tt=Tt:Ot.sibling=Tt,Ot=Tt);return t&&$e.forEach(function(fs){return n(J,fs)}),At&&ma(J,ht),tt}function at(J,W,ie,Se){if(ie==null)throw Error(r(151));for(var tt=null,Ot=null,$e=W,ht=W=0,Tt=null,Pt=ie.next();$e!==null&&!Pt.done;ht++,Pt=ie.next()){$e.index>ht?(Tt=$e,$e=null):Tt=$e.sibling;var fs=le(J,$e,Pt.value,Se);if(fs===null){$e===null&&($e=Tt);break}t&&$e&&fs.alternate===null&&n(J,$e),W=d(fs,W,ht),Ot===null?tt=fs:Ot.sibling=fs,Ot=fs,$e=Tt}if(Pt.done)return s(J,$e),At&&ma(J,ht),tt;if($e===null){for(;!Pt.done;ht++,Pt=ie.next())Pt=ye(J,Pt.value,Se),Pt!==null&&(W=d(Pt,W,ht),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt);return At&&ma(J,ht),tt}for($e=l($e);!Pt.done;ht++,Pt=ie.next())Pt=de($e,J,ht,Pt.value,Se),Pt!==null&&(t&&Pt.alternate!==null&&$e.delete(Pt.key===null?ht:Pt.key),W=d(Pt,W,ht),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&$e.forEach(function(GM){return n(J,GM)}),At&&ma(J,ht),tt}function Qt(J,W,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===w&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case x:e:{for(var tt=ie.key;W!==null;){if(W.key===tt){if(tt=ie.type,tt===w){if(W.tag===7){s(J,W.sibling),Se=f(W,ie.props.children),Se.return=J,J=Se;break e}}else if(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Is(tt)===W.type){s(J,W.sibling),Se=f(W,ie.props),Ao(Se,ie),Se.return=J,J=Se;break e}s(J,W);break}else n(J,W);W=W.sibling}ie.type===w?(Se=Ls(ie.props.children,J.mode,Se,ie.key),Se.return=J,J=Se):(Se=Ll(ie.type,ie.key,ie.props,null,J.mode,Se),Ao(Se,ie),Se.return=J,J=Se)}return S(J);case b:e:{for(tt=ie.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){s(J,W.sibling),Se=f(W,ie.children||[]),Se.return=J,J=Se;break e}else{s(J,W);break}else n(J,W);W=W.sibling}Se=Hu(ie,J.mode,Se),Se.return=J,J=Se}return S(J);case T:return ie=Is(ie),Qt(J,W,ie,Se)}if(q(ie))return Qe(J,W,ie,Se);if(j(ie)){if(tt=j(ie),typeof tt!="function")throw Error(r(150));return ie=tt.call(ie),at(J,W,ie,Se)}if(typeof ie.then=="function")return Qt(J,W,Bl(ie),Se);if(ie.$$typeof===z)return Qt(J,W,Ol(J,ie),Se);zl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(s(J,W.sibling),Se=f(W,ie),Se.return=J,J=Se):(s(J,W),Se=zu(ie,J.mode,Se),Se.return=J,J=Se),S(J)):s(J,W)}return function(J,W,ie,Se){try{To=0;var tt=Qt(J,W,ie,Se);return _r=null,tt}catch($e){if($e===gr||$e===Il)throw $e;var Ot=ri(29,$e,null,J.mode);return Ot.lanes=Se,Ot.return=J,Ot}finally{}}}var Bs=Em(!0),bm=Em(!1),Za=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Dl(t),om(t,null,s),n}return wl(t,l,n,s),Dl(t)}function Ro(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,mn(t,s)}}function ef(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?f=d=n:d=d.next=n}else f=d=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var tf=!1;function Co(){if(tf){var t=mr;if(t!==null)throw t}}function wo(t,n,s,l){tf=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var G=R,ae=G.next;G.next=null,S===null?d=ae:S.next=ae,S=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==S&&(R===null?ve.firstBaseUpdate=ae:R.next=ae,ve.lastBaseUpdate=G))}if(d!==null){var ye=f.baseState;S=0,ve=ae=G=null,R=d;do{var le=R.lane&-536870913,de=le!==R.lane;if(de?(bt&le)===le:(l&le)===le){le!==0&&le===pr&&(tf=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Qe=t,at=R;le=n;var Qt=s;switch(at.tag){case 1:if(Qe=at.payload,typeof Qe=="function"){ye=Qe.call(Qt,ye,le);break e}ye=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=at.payload,le=typeof Qe=="function"?Qe.call(Qt,ye,le):Qe,le==null)break e;ye=_({},ye,le);break e;case 2:Za=!0}}le=R.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(ae=ve=de,G=ye):ve=ve.next=de,S|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;de=R,R=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ve===null&&(G=ye),f.baseState=G,f.firstBaseUpdate=ae,f.lastBaseUpdate=ve,d===null&&(f.shared.lanes=0),ts|=S,t.lanes=S,t.memoizedState=ye}}function Tm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Am(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Tm(s[t],n)}var vr=U(null),Hl=U(0);function Rm(t,n){t=Aa,Me(Hl,t),Me(vr,n),Aa=t|n.baseLanes}function nf(){Me(Hl,Aa),Me(vr,vr.current)}function af(){Aa=Hl.current,K(vr),K(Hl)}var oi=U(null),Mi=null;function Qa(t){var n=t.alternate;Me(gn,gn.current&1),Me(oi,t),Mi===null&&(n===null||vr.current!==null||n.memoizedState!==null)&&(Mi=t)}function sf(t){Me(gn,gn.current),Me(oi,t),Mi===null&&(Mi=t)}function Cm(t){t.tag===22?(Me(gn,gn.current),Me(oi,t),Mi===null&&(Mi=t)):Ja()}function Ja(){Me(gn,gn.current),Me(oi,oi.current)}function li(t){K(oi),Mi===t&&(Mi=null),K(gn)}var gn=U(0);function Gl(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||fd(s)||dd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,ft=null,jt=null,Mn=null,Vl=!1,Sr=!1,zs=!1,kl=0,Do=0,xr=null,Lx=0;function un(){throw Error(r(321))}function rf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!si(t[s],n[s]))return!1;return!0}function of(t,n,s,l,f,d){return va=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?f0:yf,zs=!1,d=s(l,f),zs=!1,Sr&&(d=Dm(n,s,l,f)),wm(t),d}function wm(t){O.H=Uo;var n=jt!==null&&jt.next!==null;if(va=0,Mn=jt=ft=null,Vl=!1,Do=0,xr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Ul(t)&&(yn=!0))}function Dm(t,n,s,l){ft=t;var f=0;do{if(Sr&&(xr=null),Do=0,Sr=!1,25<=f)throw Error(r(301));if(f+=1,Mn=jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=d0,d=n(s,l)}while(Sr);return d}function Nx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ft.flags|=1024),n}function lf(){var t=kl!==0;return kl=0,t}function cf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function uf(t){if(Vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Vl=!1}va=0,Mn=jt=ft=null,Sr=!1,Do=kl=0,xr=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?ft.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function _n(){if(jt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=Mn===null?ft.memoizedState:Mn.next;if(n!==null)Mn=n,jt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Mn===null?ft.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=Do;return Do+=1,xr===null&&(xr=[]),t=xm(xr,t,n),n=ft,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?f0:yf),t}function Wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===z)return Pn(t)}throw Error(r(438,String(t)))}function ff(t){var n=null,s=ft.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Xl(),ft.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function Sa(t,n){return typeof n=="function"?n(t):n}function ql(t){var n=_n();return df(n,jt,t)}function df(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}n.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{n=f.next;var R=S=null,G=null,ae=n,ve=!1;do{var ye=ae.lane&-536870913;if(ye!==ae.lane?(bt&ye)===ye:(va&ye)===ye){var le=ae.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),ye===pr&&(ve=!0);else if((va&le)===le){ae=ae.next,le===pr&&(ve=!0);continue}else ye={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=ye,S=d):G=G.next=ye,ft.lanes|=le,ts|=le;ye=ae.action,zs&&s(d,ye),d=ae.hasEagerState?ae.eagerState:s(d,ye)}else le={lane:ye,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=le,S=d):G=G.next=le,ft.lanes|=ye,ts|=ye;ae=ae.next}while(ae!==null&&ae!==n);if(G===null?S=d:G.next=R,!si(d,t.memoizedState)&&(yn=!0,ve&&(s=mr,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function hf(t){var n=_n(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do d=t(d,S.action),S=S.next;while(S!==f);si(d,n.memoizedState)||(yn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,l]}function Lm(t,n,s){var l=ft,f=_n(),d=At;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!si((jt||f).memoizedState,s);if(S&&(f.memoizedState=s,yn=!0),f=f.queue,gf(Om.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Mr(9,{destroy:void 0},Um.bind(null,l,f,s,n),null),en===null)throw Error(r(349));d||(va&127)!==0||Nm(l,n,s)}return s}function Nm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ft.updateQueue,n===null?(n=Xl(),ft.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Um(t,n,s,l){n.value=s,n.getSnapshot=l,Pm(n)&&Im(t)}function Om(t,n,s){return s(function(){Pm(n)&&Im(t)})}function Pm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!si(t,s)}catch{return!0}}function Im(t){var n=Ds(t,2);n!==null&&ei(n,t,2)}function pf(t){var n=Wn();if(typeof t=="function"){var s=t;if(t=s(),zs){Ne(!0);try{s()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function Fm(t,n,s,l){return t.baseState=s,df(t,jt,typeof l=="function"?l:Sa)}function Ux(t,n,s,l,f){if(jl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};O.T!==null?s(!0):d.isTransition=!1,l(d),s=n.pending,s===null?(d.next=n.pending=d,Bm(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Bm(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var d=O.T,S={};O.T=S;try{var R=s(f,l),G=O.S;G!==null&&G(S,R),zm(t,n,R)}catch(ae){mf(t,n,ae)}finally{d!==null&&S.types!==null&&(d.types=S.types),O.T=d}}else try{d=s(f,l),zm(t,n,d)}catch(ae){mf(t,n,ae)}}function zm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Hm(t,n,l)},function(l){return mf(t,n,l)}):Hm(t,n,s)}function Hm(t,n,s){n.status="fulfilled",n.value=s,Gm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Bm(t,s)))}function mf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Gm(n),n=n.next;while(n!==l)}t.action=null}function Gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vm(t,n){return n}function km(t,n){if(At){var s=en.formState;if(s!==null){e:{var l=ft;if(At){if(nn){t:{for(var f=nn,d=xi;f.nodeType!==8;){if(!d){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){nn=yi(f.nextSibling),l=f.data==="F!";break e}}qa(l)}l=!1}l&&(n=s[0])}}return s=Wn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},s.queue=l,s=l0.bind(null,ft,l),l.dispatch=s,l=pf(!1),d=Mf.bind(null,ft,!1,l.queue),l=Wn(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=Ux.bind(null,ft,f,d,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function Xm(t){var n=_n();return Wm(n,jt,t)}function Wm(t,n,s){if(n=df(t,n,Vm)[0],t=ql(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Lo(n)}catch(S){throw S===gr?Il:S}else l=n;n=_n();var f=n.queue,d=f.dispatch;return s!==n.memoizedState&&(ft.flags|=2048,Mr(9,{destroy:void 0},Ox.bind(null,f,s),null)),[l,d,t]}function Ox(t,n){t.action=n}function qm(t){var n=_n(),s=jt;if(s!==null)return Wm(n,s,t);_n(),n=n.memoizedState,s=_n();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Mr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Xl(),ft.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function Ym(){return _n().memoizedState}function Yl(t,n,s,l){var f=Wn();ft.flags|=t,f.memoizedState=Mr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Zl(t,n,s,l){var f=_n();l=l===void 0?null:l;var d=f.memoizedState.inst;jt!==null&&l!==null&&rf(l,jt.memoizedState.deps)?f.memoizedState=Mr(n,d,s,l):(ft.flags|=t,f.memoizedState=Mr(1|n,d,s,l))}function Zm(t,n){Yl(8390656,8,t,n)}function gf(t,n){Zl(2048,8,t,n)}function Px(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Xl(),ft.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function jm(t){var n=_n().memoizedState;return Px({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(t,n){return Zl(4,2,t,n)}function Qm(t,n){return Zl(4,4,t,n)}function Jm(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $m(t,n,s){s=s!=null?s.concat([t]):null,Zl(4,4,Jm.bind(null,n,t),s)}function _f(){}function e0(t,n){var s=_n();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&rf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function t0(t,n){var s=_n();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&rf(n,l[1]))return l[0];if(l=t(),zs){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,n],l}function vf(t,n,s){return s===void 0||(va&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=ng(),ft.lanes|=t,ts|=t,s)}function n0(t,n,s,l){return si(s,n)?s:vr.current!==null?(t=vf(t,s,l),si(t,n)||(yn=!0),t):(va&42)===0||(va&1073741824)!==0&&(bt&261930)===0?(yn=!0,t.memoizedState=s):(t=ng(),ft.lanes|=t,ts|=t,n)}function i0(t,n,s,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var S=O.T,R={};O.T=R,Mf(t,!1,n,s);try{var G=f(),ae=O.S;if(ae!==null&&ae(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=Dx(G,l);No(t,n,ve,fi(t))}else No(t,n,l,fi(t))}catch(ye){No(t,n,{then:function(){},status:"rejected",reason:ye},fi())}finally{H.p=d,S!==null&&R.types!==null&&(S.types=R.types),O.T=S}}function Ix(){}function Sf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=a0(t).queue;i0(t,f,n,$,s===null?Ix:function(){return s0(t),s(l)})}function a0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function s0(t){var n=a0(t);n.next===null&&(n=t.alternate.memoizedState),No(t,n.next.queue,{},fi())}function xf(){return Pn(jo)}function r0(){return _n().memoizedState}function o0(){return _n().memoizedState}function Fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=fi();t=ja(s);var l=Ka(n,t,s);l!==null&&(ei(l,n,s),Ro(l,n,s)),n={cache:Zu()},t.payload=n;return}n=n.return}}function Bx(t,n,s){var l=fi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},jl(t)?c0(n,s):(s=Fu(t,n,s,l),s!==null&&(ei(s,t,l),u0(s,n,l)))}function l0(t,n,s){var l=fi();No(t,n,s,l)}function No(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(jl(t))c0(n,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,s);if(f.hasEagerState=!0,f.eagerState=R,si(R,S))return wl(t,n,f,0),en===null&&Cl(),!1}catch{}finally{}if(s=Fu(t,n,f,l),s!==null)return ei(s,t,l),u0(s,n,l),!0}return!1}function Mf(t,n,s,l){if(l={lane:2,revertLane:$f(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(n)throw Error(r(479))}else n=Fu(t,s,l,2),n!==null&&ei(n,t,2)}function jl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function c0(t,n){Sr=Vl=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function u0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,mn(t,s)}}var Uo={readContext:Pn,use:Wl,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Uo.useEffectEvent=un;var f0={readContext:Pn,use:Wl,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:Pn,useEffect:Zm,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Yl(4194308,4,Jm.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Yl(4194308,4,t,n)},useInsertionEffect:function(t,n){Yl(4,2,t,n)},useMemo:function(t,n){var s=Wn();n=n===void 0?null:n;var l=t();if(zs){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=Wn();if(s!==void 0){var f=s(n);if(zs){Ne(!0);try{s(n)}finally{Ne(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Bx.bind(null,ft,t),[l.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,s=l0.bind(null,ft,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:_f,useDeferredValue:function(t,n){var s=Wn();return vf(s,t,n)},useTransition:function(){var t=pf(!1);return t=i0.bind(null,ft,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=ft,f=Wn();if(At){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(bt&127)!==0||Nm(l,n,s)}f.memoizedState=s;var d={value:s,getSnapshot:n};return f.queue=d,Zm(Om.bind(null,l,d,t),[t]),l.flags|=2048,Mr(9,{destroy:void 0},Um.bind(null,l,d,s,n),null),s},useId:function(){var t=Wn(),n=en.identifierPrefix;if(At){var s=ji,l=Zi;s=(l&~(1<<32-He(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=kl++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=Lx++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:xf,useFormState:km,useActionState:km,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Mf.bind(null,ft,!0,s),s.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Wn().memoizedState=Fx.bind(null,ft)},useEffectEvent:function(t){var n=Wn(),s={impl:t};return n.memoizedState=s,function(){if((Ft&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},yf={readContext:Pn,use:Wl,useCallback:e0,useContext:Pn,useEffect:gf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:ql,useRef:Ym,useState:function(){return ql(Sa)},useDebugValue:_f,useDeferredValue:function(t,n){var s=_n();return n0(s,jt.memoizedState,t,n)},useTransition:function(){var t=ql(Sa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:Lm,useId:r0,useHostTransitionStatus:xf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var s=_n();return Fm(s,jt,t,n)},useMemoCache:ff,useCacheRefresh:o0};yf.useEffectEvent=jm;var d0={readContext:Pn,use:Wl,useCallback:e0,useContext:Pn,useEffect:gf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:t0,useReducer:hf,useRef:Ym,useState:function(){return hf(Sa)},useDebugValue:_f,useDeferredValue:function(t,n){var s=_n();return jt===null?vf(s,t,n):n0(s,jt.memoizedState,t,n)},useTransition:function(){var t=hf(Sa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:Lm,useId:r0,useHostTransitionStatus:xf,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var s=_n();return jt!==null?Fm(s,jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ff,useCacheRefresh:o0};d0.useEffectEvent=jm;function Ef(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var bf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=fi(),f=ja(l);f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ei(n,t,l),Ro(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=fi(),f=ja(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ei(n,t,l),Ro(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=fi(),l=ja(s);l.tag=2,n!=null&&(l.callback=n),n=Ka(t,l,s),n!==null&&(ei(n,t,s),Ro(n,t,s))}};function h0(t,n,s,l,f,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):n.prototype&&n.prototype.isPureReactComponent?!So(s,l)||!So(f,d):!0}function p0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function Hs(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function m0(t){Rl(t)}function g0(t){console.error(t)}function _0(t){Rl(t)}function Kl(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function v0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Tf(t,n,s){return s=ja(s),s.tag=3,s.payload={element:null},s.callback=function(){Kl(t,n)},s}function S0(t){return t=ja(t),t.tag=3,t}function x0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){v0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){v0(n,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function zx(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&hr(n,s,f,!0),s=oi.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?lc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Fl?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Kf(t,l,f)),!1;case 22:return s.flags|=65536,l===Fl?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Kf(t,l,f)),!1}throw Error(r(435,s.tag))}return Kf(t,l,f),lc(),!1}if(At)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==ku&&(t=Error(r(422),{cause:l}),yo(_i(t,s)))):(l!==ku&&(n=Error(r(423),{cause:l}),yo(_i(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=_i(l,s),f=Tf(t.stateNode,l,f),ef(t,f),fn!==4&&(fn=2)),!1;var d=Error(r(520),{cause:l});if(d=_i(d,s),Go===null?Go=[d]:Go.push(d),fn!==4&&(fn=2),n===null)return!0;l=_i(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Tf(s.stateNode,l,t),ef(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=S0(f),x0(f,t,s,l),ef(s,f),!1}s=s.return}while(s!==null);return!1}var Af=Error(r(461)),yn=!1;function In(t,n,s,l){n.child=t===null?bm(n,null,s,l):Bs(n,t.child,s,l)}function M0(t,n,s,l,f){s=s.render;var d=n.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return Os(n),l=of(t,n,s,S,d,f),R=lf(),t!==null&&!yn?(cf(t,n,f),xa(t,n,f)):(At&&R&&Gu(n),n.flags|=1,In(t,n,l,f),n.child)}function y0(t,n,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,E0(t,n,d,l,f)):(t=Ll(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,f)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:So,s(S,l)&&t.ref===n.ref)return xa(t,n,f)}return n.flags|=1,t=pa(d,l),t.ref=n.ref,t.return=n,n.child=t}function E0(t,n,s,l,f){if(t!==null){var d=t.memoizedProps;if(So(d,l)&&t.ref===n.ref)if(yn=!1,n.pendingProps=l=d,Of(t,f))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,xa(t,n,f)}return Rf(t,n,s,l,f)}function b0(t,n,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,n.child=null;return T0(t,n,d,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(n,d!==null?d.cachePool:null),d!==null?Rm(n,d):nf(),Cm(n);else return l=n.lanes=536870912,T0(t,n,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Pl(n,d.cachePool),Rm(n,d),Ja(),n.memoizedState=null):(t!==null&&Pl(n,null),nf(),Ja());return In(t,n,f,s),n.child}function Oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(t,n,s,l,f){var d=Ku();return d=d===null?null:{parent:xn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&Pl(n,null),nf(),Cm(n),t!==null&&hr(t,n,l,!0),n.childLanes=f,null}function Ql(t,n){return n=$l({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function A0(t,n,s){return Bs(n,t.child,null,s),t=Ql(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function Hx(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(l.mode==="hidden")return t=Ql(n,l),n.lanes=536870912,Oo(null,t);if(sf(n),(t=nn)?(t=Bg(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=cm(t),s.return=n,n.child=s,On=n,nn=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Ql(n,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(sf(n),f)if(n.flags&256)n.flags&=-257,n=A0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||hr(t,n,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=en,l!==null&&(S=cn(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Ds(t,S),ei(l,t,S),Af;lc(),n=A0(t,n,s)}else t=d.treeContext,nn=yi(S.nextSibling),On=n,At=!0,Wa=null,xi=!1,t!==null&&dm(n,t),n=Ql(n,l),n.flags|=4096;return n}return t=pa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Jl(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Rf(t,n,s,l,f){return Os(n),s=of(t,n,s,l,void 0,f),l=lf(),t!==null&&!yn?(cf(t,n,f),xa(t,n,f)):(At&&l&&Gu(n),n.flags|=1,In(t,n,s,f),n.child)}function R0(t,n,s,l,f,d){return Os(n),n.updateQueue=null,s=Dm(n,l,s,f),wm(t),l=lf(),t!==null&&!yn?(cf(t,n,d),xa(t,n,d)):(At&&l&&Gu(n),n.flags|=1,In(t,n,s,d),n.child)}function C0(t,n,s,l,f){if(Os(n),n.stateNode===null){var d=cr,S=s.contextType;typeof S=="object"&&S!==null&&(d=Pn(S)),d=new s(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Ju(n),S=s.contextType,d.context=typeof S=="object"&&S!==null?Pn(S):cr,d.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Ef(n,s,S,l),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&bf.enqueueReplaceState(d,d.state,null),wo(n,l,d,f),Co(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,G=Hs(s,R);d.props=G;var ae=d.context,ve=s.contextType;S=cr,typeof ve=="object"&&ve!==null&&(S=Pn(ve));var ye=s.getDerivedStateFromProps;ve=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==S)&&p0(n,d,l,S),Za=!1;var le=n.memoizedState;d.state=le,wo(n,l,d,f),Co(),ae=n.memoizedState,R||le!==ae||Za?(typeof ye=="function"&&(Ef(n,s,ye,l),ae=n.memoizedState),(G=Za||h0(n,s,G,l,le,ae,S))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ae),d.props=l,d.state=ae,d.context=S,l=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,$u(t,n),S=n.memoizedProps,ve=Hs(s,S),d.props=ve,ye=n.pendingProps,le=d.context,ae=s.contextType,G=cr,typeof ae=="object"&&ae!==null&&(G=Pn(ae)),R=s.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==ye||le!==G)&&p0(n,d,l,G),Za=!1,le=n.memoizedState,d.state=le,wo(n,l,d,f),Co();var de=n.memoizedState;S!==ye||le!==de||Za||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof R=="function"&&(Ef(n,s,R,l),de=n.memoizedState),(ve=Za||h0(n,s,ve,l,le,de,G)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,de,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,de,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),d.props=l,d.state=de,d.context=G,l=ve):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return d=l,Jl(t,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&l?(n.child=Bs(n,t.child,null,f),n.child=Bs(n,null,s,f)):In(t,n,s,f),n.memoizedState=d.state,t=n.child):t=xa(t,n,f),t}function w0(t,n,s,l){return Ns(),n.flags|=256,In(t,n,s,l),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:vm()}}function Df(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=ui),t}function D0(t,n,s){var l=n.pendingProps,f=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(f?Qa(n):Ja(),(t=nn)?(t=Bg(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=cm(t),s.return=n,n.child=s,On=n,nn=null)):t=null,t===null)throw qa(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ja(),f=n.mode,R=$l({mode:"hidden",children:R},f),l=Ls(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=wf(s),l.childLanes=Df(t,S,s),n.memoizedState=Cf,Oo(null,l)):(Qa(n),Lf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=Nf(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=l.fallback,f=n.mode,l=$l({mode:"visible",children:l.children},f),R=Ls(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,Bs(n,t.child,null,s),l=n.child,l.memoizedState=wf(s),l.childLanes=Df(t,S,s),n.memoizedState=Cf,n=Oo(null,l));else if(Qa(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ae=S.dgst;S=ae,l=Error(r(419)),l.stack="",l.digest=S,yo({value:l,source:null,stack:null}),n=Nf(t,n,s)}else if(yn||hr(t,n,s,!1),S=(s&t.childLanes)!==0,yn||S){if(S=en,S!==null&&(l=cn(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Ds(t,l),ei(S,t,l),Af;fd(R)||lc(),n=Nf(t,n,s)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,nn=yi(R.nextSibling),On=n,At=!0,Wa=null,xi=!1,t!==null&&dm(n,t),n=Lf(n,l.children),n.flags|=4096);return n}return f?(Ja(),R=l.fallback,f=n.mode,G=t.child,ae=G.sibling,l=pa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ae!==null?R=pa(ae,R):(R=Ls(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,Oo(null,l),l=n.child,R=t.child.memoizedState,R===null?R=wf(s):(f=R.cachePool,f!==null?(G=xn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=vm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Df(t,S,s),n.memoizedState=Cf,Oo(t.child,l)):(Qa(n),s=t.child,t=s.sibling,s=pa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Lf(t,n){return n=$l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function $l(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function Nf(t,n,s){return Bs(n,t.child,null,s),t=Lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function L0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),qu(t.return,n,s)}function Uf(t,n,s,l,f,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=d)}function N0(t,n,s){var l=n.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=gn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,Me(gn,S),In(t,n,l,s),l=At?Mo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,s,n);else if(t.tag===19)L0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Gl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Uf(n,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Gl(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Uf(n,!0,s,null,d,l);break;case"together":Uf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function xa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(hr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=pa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=pa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function Gx(t,n,s){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Ya(n,xn,t.memoizedState.cache),Ns();break;case 27:case 5:nt(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?D0(t,n,s):(Qa(n),t=xa(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(hr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return N0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Me(gn,gn.current),l)break;return null;case 22:return n.lanes=0,b0(t,n,s,n.pendingProps);case 24:Ya(n,xn,t.memoizedState.cache)}return xa(t,n,s)}function U0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!Of(t,s)&&(n.flags&128)===0)return yn=!1,Gx(t,n,s);yn=(t.flags&131072)!==0}else yn=!1,At&&(n.flags&1048576)!==0&&fm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Is(n.elementType),n.type=t,typeof t=="function")Bu(t)?(l=Hs(t,l),n.tag=1,n=C0(null,n,t,l,s)):(n.tag=0,n=Rf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=M0(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=y0(null,n,t,l,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=Hs(l,n.pendingProps),C0(t,n,l,f,s);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var d=n.memoizedState;f=d.element,$u(t,n),wo(n,l,null,s);var S=n.memoizedState;if(l=S.cache,Ya(n,xn,l),l!==d.cache&&Yu(n,[xn],s,!0),Co(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=w0(t,n,l,s);break e}else if(l!==f){f=_i(Error(r(424)),n),yo(f),n=w0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=yi(t.firstChild),On=n,At=!0,Wa=null,xi=!0,s=bm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ns(),l===f){n=xa(t,n,s);break e}In(t,n,l,s)}n=n.child}return n;case 26:return Jl(t,n),t===null?(s=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=s:At||(s=n.type,t=n.pendingProps,l=mc(re.current).createElement(s),l[$t]=n,l[Sn]=t,Fn(l,s,t),ln(l),n.stateNode=l):n.memoizedState=Xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&At&&(l=n.stateNode=Gg(n.type,n.pendingProps,re.current),On=n,xi=!0,f=nn,rs(n.type)?(hd=f,nn=yi(l.firstChild)):nn=f),In(t,n,n.pendingProps.children,s),Jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((f=l=nn)&&(l=_M(l,n.type,n.pendingProps,xi),l!==null?(n.stateNode=l,On=n,nn=yi(l.firstChild),xi=!1,f=!0):f=!1),f||qa(n)),nt(n),f=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,ld(f,d)?l=null:S!==null&&ld(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=of(t,n,Nx,null,null,s),jo._currentValue=f),Jl(t,n),In(t,n,l,s),n.child;case 6:return t===null&&At&&((t=s=nn)&&(s=vM(s,n.pendingProps,xi),s!==null?(n.stateNode=s,On=n,nn=null,t=!0):t=!1),t||qa(n)),null;case 13:return D0(t,n,s);case 4:return Ae(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Bs(n,null,l,s):In(t,n,l,s),n.child;case 11:return M0(t,n,n.type,n.pendingProps,s);case 7:return In(t,n,n.pendingProps,s),n.child;case 8:return In(t,n,n.pendingProps.children,s),n.child;case 12:return In(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ya(n,n.type,l.value),In(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,Os(n),f=Pn(f),l=l(f),n.flags|=1,In(t,n,l,s),n.child;case 14:return y0(t,n,n.type,n.pendingProps,s);case 15:return E0(t,n,n.type,n.pendingProps,s);case 19:return N0(t,n,s);case 31:return Hx(t,n,s);case 22:return b0(t,n,s,n.pendingProps);case 24:return Os(n),l=Pn(xn),t===null?(f=Ku(),f===null&&(f=en,d=Zu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),n.memoizedState={parent:l,cache:f},Ju(n),Ya(n,xn,f)):((t.lanes&s)!==0&&($u(t,n),wo(n,null,null,s),Co()),f=t.memoizedState,d=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ya(n,xn,l)):(l=d.cache,Ya(n,xn,l),l!==f.cache&&Yu(n,[xn],s,!0))),In(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ma(t){t.flags|=4}function Pf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(rg())t.flags|=8192;else throw Fs=Fl,Qu}else t.flags&=-16777217}function O0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!jg(n))if(rg())t.flags|=8192;else throw Fs=Fl,Qu}function ec(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_e():536870912,t.lanes|=n,Tr|=n)}function Po(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function Vx(t,n,s){var l=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),_a(xn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(dr(n)?Ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),an(n),null;case 26:var f=n.type,d=n.memoizedState;return t===null?(Ma(n),d!==null?(an(n),O0(n,d)):(an(n),Pf(n,f,null,l,s))):d?d!==t.memoizedState?(Ma(n),an(n),O0(n,d)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ma(n),an(n),Pf(n,f,t,l,s)),null;case 27:if(et(n),s=re.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ma(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return an(n),null}t=we.current,dr(n)?hm(n):(t=Gg(f,l,s),n.stateNode=t,Ma(n))}return an(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ma(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return an(n),null}if(d=we.current,dr(n))hm(n);else{var S=mc(re.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[$t]=n,d[Sn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Fn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ma(n)}}return an(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ma(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=re.current,dr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[$t]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Dg(t.nodeValue,s)),t||qa(n,!0)}else t=mc(t).createTextNode(l),t[$t]=n,n.stateNode=t}return an(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=dr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[$t]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else s=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=dr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[$t]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),f=!1}else f=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),ec(n,n.updateQueue),an(n),null);case 4:return qe(),t===null&&id(n.stateNode.containerInfo),an(n),null;case 10:return _a(n.type),an(n),null;case 19:if(K(gn),l=n.memoizedState,l===null)return an(n),null;if(f=(n.flags&128)!==0,d=l.rendering,d===null)if(f)Po(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Gl(t),d!==null){for(n.flags|=128,Po(l,!1),t=d.updateQueue,n.updateQueue=t,ec(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)lm(s,t),s=s.sibling;return Me(gn,gn.current&1|2),At&&ma(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Lt()>sc&&(n.flags|=128,f=!0,Po(l,!1),n.lanes=4194304)}else{if(!f)if(t=Gl(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,ec(n,t),Po(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!At)return an(n),null}else 2*Lt()-l.renderingStartTime>sc&&s!==536870912&&(n.flags|=128,f=!0,Po(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(t=l.last,t!==null?t.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Lt(),t.sibling=null,s=gn.current,Me(gn,f?s&1|2:s&1),At&&ma(n,l.treeForkCount),t):(an(n),null);case 22:case 23:return li(n),af(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),s=n.updateQueue,s!==null&&ec(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(Ps),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),_a(xn),an(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function kx(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(xn),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(gn),null;case 4:return qe(),null;case 10:return _a(n.type),null;case 22:case 23:return li(n),af(),t!==null&&K(Ps),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(xn),null;case 25:return null;default:return null}}function P0(t,n){switch(Vu(n),n.tag){case 3:_a(xn),qe();break;case 26:case 27:case 5:et(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:K(gn);break;case 10:_a(n.type);break;case 22:case 23:li(n),af(),t!==null&&K(Ps);break;case 24:_a(xn)}}function Io(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){Wt(n,n.return,R)}}function $a(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=n;var G=s,ae=R;try{ae()}catch(ve){Wt(f,G,ve)}}}l=l.next}while(l!==d)}}catch(ve){Wt(n,n.return,ve)}}function I0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Am(n,s)}catch(l){Wt(t,t.return,l)}}}function F0(t,n,s){s.props=Hs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,n,l)}}function Fo(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,n,f)}}function Ki(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,n,f)}else s.current=null}function B0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function If(t,n,s){try{var l=t.stateNode;fM(l,t.type,s,n),l[Sn]=n}catch(f){Wt(t,t.return,f)}}function z0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=da));else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,s),t=t.sibling;t!==null;)Bf(t,n,s),t=t.sibling}function tc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(tc(t,n,s),t=t.sibling;t!==null;)tc(t,n,s),t=t.sibling}function H0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Fn(n,l,s),n[$t]=t,n[Sn]=s}catch(d){Wt(t,t.return,d)}}var ya=!1,En=!1,zf=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function Xx(t,n){if(t=t.containerInfo,rd=yc,t=$p(t),Lu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,R=-1,G=-1,ae=0,ve=0,ye=t,le=null;t:for(;;){for(var de;ye!==s||f!==0&&ye.nodeType!==3||(R=S+f),ye!==d||l!==0&&ye.nodeType!==3||(G=S+l),ye.nodeType===3&&(S+=ye.nodeValue.length),(de=ye.firstChild)!==null;)le=ye,ye=de;for(;;){if(ye===t)break t;if(le===s&&++ae===f&&(R=S),le===d&&++ve===l&&(G=S),(de=ye.nextSibling)!==null)break;ye=le,le=ye.parentNode}ye=de}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(od={focusedElem:t,selectionRange:s},yc=!1,Nn=n;Nn!==null;)if(n=Nn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Nn=t;else for(;Nn!==null;){switch(n=Nn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Qe=Hs(s.type,f);t=l.getSnapshotBeforeUpdate(Qe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Wt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)ud(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Nn=t;break}Nn=n.return}}function V0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ba(t,s),l&4&&Io(5,s);break;case 1:if(ba(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Wt(s,s.return,S)}else{var f=Hs(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Wt(s,s.return,S)}}l&64&&I0(s),l&512&&Fo(s,s.return);break;case 3:if(ba(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Am(t,n)}catch(S){Wt(s,s.return,S)}}break;case 27:n===null&&l&4&&H0(s);case 26:case 5:ba(t,s),n===null&&l&4&&B0(s),l&512&&Fo(s,s.return);break;case 12:ba(t,s);break;case 31:ba(t,s),l&4&&W0(t,s);break;case 13:ba(t,s),l&4&&q0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=$x.bind(null,s),SM(t,s))));break;case 22:if(l=s.memoizedState!==null||ya,!l){n=n!==null&&n.memoizedState!==null||En,f=ya;var d=En;ya=l,(En=n)&&!d?Ta(t,s,(s.subtreeFlags&8772)!==0):ba(t,s),ya=f,En=d}break;case 30:break;default:ba(t,s)}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ni(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Kn=!1;function Ea(t,n,s){for(s=s.child;s!==null;)X0(t,n,s),s=s.sibling}function X0(t,n,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:En||Ki(s,n),Ea(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:En||Ki(s,n);var l=on,f=Kn;rs(s.type)&&(on=s.stateNode,Kn=!1),Ea(t,n,s),qo(s.stateNode),on=l,Kn=f;break;case 5:En||Ki(s,n);case 6:if(l=on,f=Kn,on=null,Ea(t,n,s),on=l,Kn=f,on!==null)if(Kn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){Wt(s,n,d)}else try{on.removeChild(s.stateNode)}catch(d){Wt(s,n,d)}break;case 18:on!==null&&(Kn?(t=on,Ig(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ur(t)):Ig(on,s.stateNode));break;case 4:l=on,f=Kn,on=s.stateNode.containerInfo,Kn=!0,Ea(t,n,s),on=l,Kn=f;break;case 0:case 11:case 14:case 15:$a(2,s,n),En||$a(4,s,n),Ea(t,n,s);break;case 1:En||(Ki(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&F0(s,n,l)),Ea(t,n,s);break;case 21:Ea(t,n,s);break;case 22:En=(l=En)||s.memoizedState!==null,Ea(t,n,s),En=l;break;default:Ea(t,n,s)}}function W0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(s){Wt(n,n.return,s)}}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(s){Wt(n,n.return,s)}}function Wx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new G0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new G0),n;default:throw Error(r(435,t.tag))}}function nc(t,n){var s=Wx(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=eM.bind(null,t,l);l.then(f,f)}})}function Qn(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){on=R.stateNode,Kn=!1;break e}break;case 5:on=R.stateNode,Kn=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,Kn=!0;break e}R=R.return}if(on===null)throw Error(r(160));X0(d,S,f),on=null,Kn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,t),n=n.sibling}var Ii=null;function Y0(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),l&4&&($a(3,t,t.return),Io(3,t),$a(5,t,t.return));break;case 1:Qn(n,t),Jn(t),l&512&&(En||s===null||Ki(s,s.return)),l&64&&ya&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if(Qn(n,t),Jn(t),l&512&&(En||s===null||Ki(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[qi]||d[$t]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Fn(d,l,s),d[$t]=t,ln(d),l=d;break e;case"link":var S=Yg("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;case"meta":if(S=Yg("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[$t]=t,ln(d),l=d}t.stateNode=l}else Zg(f,t.type,t.stateNode);else t.stateNode=qg(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Zg(f,t.type,t.stateNode):qg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&If(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(n,t),Jn(t),l&512&&(En||s===null||Ki(s,s.return)),s!==null&&l&4&&If(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),l&512&&(En||s===null||Ki(s,s.return)),t.flags&32){f=t.stateNode;try{ai(f,"")}catch(Qe){Wt(t,t.return,Qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,If(t,f,s!==null?s.memoizedProps:f)),l&1024&&(zf=!0);break;case 6:if(Qn(n,t),Jn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Qe){Wt(t,t.return,Qe)}}break;case 3:if(vc=null,f=Ii,Ii=gc(n.containerInfo),Qn(n,t),Ii=f,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(Qe){Wt(t,t.return,Qe)}zf&&(zf=!1,Z0(t));break;case 4:l=Ii,Ii=gc(t.stateNode.containerInfo),Qn(n,t),Jn(t),Ii=l;break;case 12:Qn(n,t),Jn(t);break;case 31:Qn(n,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ac=Lt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ae=ya,ve=En;if(ya=ae||f,En=ve||G,Qn(n,t),En=ve,ya=ae,Jn(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||ya||En||Gs(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(d=G.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var ye=G.memoizedProps.style,le=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Qe){Wt(G,G.return,Qe)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Qe){Wt(G,G.return,Qe)}}}else if(n.tag===18){if(s===null){G=n;try{var de=G.stateNode;f?Fg(de,!0):Fg(G.stateNode,!1)}catch(Qe){Wt(G,G.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,nc(t,s))));break;case 19:Qn(n,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(z0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Ff(t);tc(t,d,f);break;case 5:var S=s.stateNode;s.flags&32&&(ai(S,""),s.flags&=-33);var R=Ff(t);tc(t,R,S);break;case 3:case 4:var G=s.stateNode.containerInfo,ae=Ff(t);Bf(t,ae,G);break;default:throw Error(r(161))}}catch(ve){Wt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Z0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Z0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V0(t,n.alternate,n),n=n.sibling}function Gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Gs(n);break;case 1:Ki(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&F0(n,n.return,s),Gs(n);break;case 27:qo(n.stateNode);case 26:case 5:Ki(n,n.return),Gs(n);break;case 22:n.memoizedState===null&&Gs(n);break;case 30:Gs(n);break;default:Gs(n)}t=t.sibling}}function Ta(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ta(f,d,s),Io(4,d);break;case 1:if(Ta(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){Wt(l,l.return,ae)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Tm(G[f],R)}catch(ae){Wt(l,l.return,ae)}}s&&S&64&&I0(d),Fo(d,d.return);break;case 27:H0(d);case 26:case 5:Ta(f,d,s),s&&l===null&&S&4&&B0(d),Fo(d,d.return);break;case 12:Ta(f,d,s);break;case 31:Ta(f,d,s),s&&S&4&&W0(f,d);break;case 13:Ta(f,d,s),s&&S&4&&q0(f,d);break;case 22:d.memoizedState===null&&Ta(f,d,s),Fo(d,d.return);break;case 30:break;default:Ta(f,d,s)}n=n.sibling}}function Hf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Eo(s))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t))}function Fi(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)j0(t,n,s,l),n=n.sibling}function j0(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(t,n,s,l),f&2048&&Io(9,n);break;case 1:Fi(t,n,s,l);break;case 3:Fi(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t)));break;case 12:if(f&2048){Fi(t,n,s,l),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Wt(n,n.return,G)}}else Fi(t,n,s,l);break;case 31:Fi(t,n,s,l);break;case 13:Fi(t,n,s,l);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Fi(t,n,s,l):Bo(t,n):d._visibility&2?Fi(t,n,s,l):(d._visibility|=2,yr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Hf(S,n);break;case 24:Fi(t,n,s,l),f&2048&&Gf(n.alternate,n);break;default:Fi(t,n,s,l)}}function yr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,R=s,G=l,ae=S.flags;switch(S.tag){case 0:case 11:case 15:yr(d,S,R,G,f),Io(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?yr(d,S,R,G,f):Bo(d,S):(ve._visibility|=2,yr(d,S,R,G,f)),f&&ae&2048&&Hf(S.alternate,S);break;case 24:yr(d,S,R,G,f),f&&ae&2048&&Gf(S.alternate,S);break;default:yr(d,S,R,G,f)}n=n.sibling}}function Bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Bo(s,l),f&2048&&Hf(l.alternate,l);break;case 24:Bo(s,l),f&2048&&Gf(l.alternate,l);break;default:Bo(s,l)}n=n.sibling}}var zo=8192;function Er(t,n,s){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)K0(t,n,s),t=t.sibling}function K0(t,n,s){switch(t.tag){case 26:Er(t,n,s),t.flags&zo&&t.memoizedState!==null&&LM(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Er(t,n,s);break;case 3:case 4:var l=Ii;Ii=gc(t.stateNode.containerInfo),Er(t,n,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=zo,zo=16777216,Er(t,n,s),zo=l):Er(t,n,s));break;default:Er(t,n,s)}}function Q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Nn=l,$0(l,t)}Q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)J0(t),t=t.sibling}function J0(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ic(t)):Ho(t);break;default:Ho(t)}}function ic(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Nn=l,$0(l,t)}Q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),ic(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,ic(n));break;default:ic(n)}t=t.sibling}}function $0(t,n){for(;Nn!==null;){var s=Nn;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Eo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Nn=l;else e:for(s=t;Nn!==null;){l=Nn;var f=l.sibling,d=l.return;if(k0(l),l===s){Nn=null;break e}if(f!==null){f.return=d,Nn=f;break e}Nn=d}}}var qx={getCacheForType:function(t){var n=Pn(xn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Pn(xn).controller.signal}},Yx=typeof WeakMap=="function"?WeakMap:Map,Ft=0,en=null,yt=null,bt=0,Xt=0,ci=null,es=!1,br=!1,Vf=!1,Aa=0,fn=0,ts=0,Vs=0,kf=0,ui=0,Tr=0,Go=null,$n=null,Xf=!1,ac=0,eg=0,sc=1/0,rc=null,ns=null,Cn=0,is=null,Ar=null,Ra=0,Wf=0,qf=null,tg=null,Vo=0,Yf=null;function fi(){return(Ft&2)!==0&&bt!==0?bt&-bt:O.T!==null?$f():bs()}function ng(){if(ui===0)if((bt&536870912)===0||At){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function ei(t,n,s){(t===en&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Rr(t,0),as(t,bt,ui,!1)),Ve(t,s),((Ft&2)===0||t!==en)&&(t===en&&((Ft&2)===0&&(Vs|=s),fn===4&&as(t,bt,ui,!1)),Qi(t))}function ig(t,n,s){if((Ft&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),f=l?Kx(t,n):jf(t,n,!0),d=l;do{if(f===0){br&&!l&&as(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!Zx(s)){f=jf(t,n,!1),d=!1;continue}if(f===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;f=Go;var G=R.current.memoizedState.isDehydrated;if(G&&(Rr(R,S).flags|=256),S=jf(R,S,!1),S!==2){if(Vf&&!G){R.errorRecoveryDisabledLanes|=d,Vs|=d,f=4;break e}d=$n,$n=f,d!==null&&($n===null?$n=d:$n.push.apply($n,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){Rr(t,0),as(t,n,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:as(l,n,ui,!es);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=ac+300-Lt(),10<f)){if(as(l,n,ui,!es),ue(l,0,!0)!==0)break e;Ra=n,l.timeoutHandle=Og(ag.bind(null,l,s,$n,rc,Xf,n,ui,Vs,Tr,es,d,"Throttled",-0,0),f);break e}ag(l,s,$n,rc,Xf,n,ui,Vs,Tr,es,d,null,-0,0)}}break}while(!0);Qi(t)}function ag(t,n,s,l,f,d,S,R,G,ae,ve,ye,le,de){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},K0(n,d,ye);var Qe=(d&62914560)===d?ac-Lt():(d&4194048)===d?eg-Lt():0;if(Qe=NM(ye,Qe),Qe!==null){Ra=d,t.cancelPendingCommit=Qe(dg.bind(null,t,n,d,s,l,f,S,R,G,ve,ye,null,le,de)),as(t,d,S,!ae);return}}dg(t,n,d,s,l,f,S,R,G)}function Zx(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!si(d(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,s,l){n&=~kf,n&=~Vs,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var d=31-He(f),S=1<<d;l[d]=-1,f&=~S}s!==0&&rt(t,s,n)}function oc(){return(Ft&6)===0?(ko(0),!1):!0}function Zf(){if(yt!==null){if(Xt===0)var t=yt.return;else t=yt,ga=Us=null,uf(t),_r=null,To=0,t=yt;for(;t!==null;)P0(t.alternate,t),t=t.return;yt=null}}function Rr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,pM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ra=0,Zf(),en=t,yt=s=pa(t.current,null),bt=n,Xt=0,ci=null,es=!1,br=Ce(t,n),Vf=!1,Tr=ui=kf=Vs=ts=fn=0,$n=Go=null,Xf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-He(l),d=1<<f;n|=t[f],l&=~d}return Aa=n,Cl(),s}function sg(t,n){ft=null,O.H=Uo,n===gr||n===Il?(n=Mm(),Xt=3):n===Qu?(n=Mm(),Xt=4):Xt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,yt===null&&(fn=1,Kl(t,_i(n,t.current)))}function rg(){var t=oi.current;return t===null?!0:(bt&4194048)===bt?Mi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Mi:!1}function og(){var t=O.H;return O.H=Uo,t===null?Uo:t}function lg(){var t=O.A;return O.A=qx,t}function lc(){fn=4,es||(bt&4194048)!==bt&&oi.current!==null||(br=!0),(ts&134217727)===0&&(Vs&134217727)===0||en===null||as(en,bt,ui,!1)}function jf(t,n,s){var l=Ft;Ft|=2;var f=og(),d=lg();(en!==t||bt!==n)&&(rc=null,Rr(t,n)),n=!1;var S=fn;e:do try{if(Xt!==0&&yt!==null){var R=yt,G=ci;switch(Xt){case 8:Zf(),S=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var ae=Xt;if(Xt=0,ci=null,Cr(t,R,G,ae),s&&br){S=0;break e}break;default:ae=Xt,Xt=0,ci=null,Cr(t,R,G,ae)}}jx(),S=fn;break}catch(ve){sg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ga=Us=null,Ft=l,O.H=f,O.A=d,yt===null&&(en=null,bt=0,Cl()),S}function jx(){for(;yt!==null;)cg(yt)}function Kx(t,n){var s=Ft;Ft|=2;var l=og(),f=lg();en!==t||bt!==n?(rc=null,sc=Lt()+500,Rr(t,n)):br=Ce(t,n);e:do try{if(Xt!==0&&yt!==null){n=yt;var d=ci;t:switch(Xt){case 1:Xt=0,ci=null,Cr(t,n,d,1);break;case 2:case 9:if(Sm(d)){Xt=0,ci=null,ug(n);break}n=function(){Xt!==2&&Xt!==9||en!==t||(Xt=7),Qi(t)},d.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Sm(d)?(Xt=0,ci=null,ug(n)):(Xt=0,ci=null,Cr(t,n,d,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var R=yt;if(S?jg(S):R.stateNode.complete){Xt=0,ci=null;var G=R.sibling;if(G!==null)yt=G;else{var ae=R.return;ae!==null?(yt=ae,cc(ae)):yt=null}break t}}Xt=0,ci=null,Cr(t,n,d,5);break;case 6:Xt=0,ci=null,Cr(t,n,d,6);break;case 8:Zf(),fn=6;break e;default:throw Error(r(462))}}Qx();break}catch(ve){sg(t,ve)}while(!0);return ga=Us=null,O.H=l,O.A=f,Ft=s,yt!==null?0:(en=null,bt=0,Cl(),fn)}function Qx(){for(;yt!==null&&!Jt();)cg(yt)}function cg(t){var n=U0(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?cc(t):yt=n}function ug(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=R0(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=R0(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:uf(n);default:P0(s,n),n=yt=lm(n,Aa),n=U0(s,n,Aa)}t.memoizedProps=t.pendingProps,n===null?cc(t):yt=n}function Cr(t,n,s,l){ga=Us=null,uf(n),_r=null,To=0;var f=n.return;try{if(zx(t,f,n,s,bt)){fn=1,Kl(t,_i(s,t.current)),yt=null;return}}catch(d){if(f!==null)throw yt=f,d;fn=1,Kl(t,_i(s,t.current)),yt=null;return}n.flags&32768?(At||l===1?t=!0:br||(bt&536870912)!==0?t=!1:(es=t=!0,(l===2||l===9||l===3||l===6)&&(l=oi.current,l!==null&&l.tag===13&&(l.flags|=16384))),fg(n,t)):cc(n)}function cc(t){var n=t;do{if((n.flags&32768)!==0){fg(n,es);return}t=n.return;var s=Vx(n.alternate,n,Aa);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);fn===0&&(fn=5)}function fg(t,n){do{var s=kx(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);fn=6,yt=null}function dg(t,n,s,l,f,d,S,R,G){t.cancelPendingCommit=null;do uc();while(Cn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Iu,dt(t,s,d,S,R,G),t===en&&(yt=en=null,bt=0),Ar=n,is=t,Ra=s,Wf=d,qf=f,tg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tM(Q,function(){return _g(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=H.p,H.p=2,S=Ft,Ft|=4;try{Xx(t,n,s)}finally{Ft=S,H.p=f,O.T=l}}Cn=1,hg(),pg(),mg()}}function hg(){if(Cn===1){Cn=0;var t=is,n=Ar,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var l=H.p;H.p=2;var f=Ft;Ft|=4;try{Y0(n,t);var d=od,S=$p(t.containerInfo),R=d.focusedElem,G=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&Jp(R.ownerDocument.documentElement,R)){if(G!==null&&Lu(R)){var ae=G.start,ve=G.end;if(ve===void 0&&(ve=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ve,R.value.length);else{var ye=R.ownerDocument||document,le=ye&&ye.defaultView||window;if(le.getSelection){var de=le.getSelection(),Qe=R.textContent.length,at=Math.min(G.start,Qe),Qt=G.end===void 0?at:Math.min(G.end,Qe);!de.extend&&at>Qt&&(S=Qt,Qt=at,at=S);var J=Qp(R,at),W=Qp(R,Qt);if(J&&W&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ie=ye.createRange();ie.setStart(J.node,J.offset),de.removeAllRanges(),at>Qt?(de.addRange(ie),de.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),de.addRange(ie))}}}}for(ye=[],de=R;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}yc=!!rd,od=rd=null}finally{Ft=f,H.p=l,O.T=s}}t.current=n,Cn=2}}function pg(){if(Cn===2){Cn=0;var t=is,n=Ar,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var l=H.p;H.p=2;var f=Ft;Ft|=4;try{V0(t,n.alternate,n)}finally{Ft=f,H.p=l,O.T=s}}Cn=3}}function mg(){if(Cn===4||Cn===3){Cn=0,Z();var t=is,n=Ar,s=Ra,l=tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,Ar=is=null,gg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),la(s),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,f=H.p,H.p=2,O.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];d(R.value,{componentStack:R.stack})}}finally{O.T=n,H.p=f}}(Ra&3)!==0&&uc(),Qi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Yf?Vo++:(Vo=0,Yf=t):Vo=0,ko(0)}}function gg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Eo(n)))}function uc(){return hg(),pg(),mg(),_g()}function _g(){if(Cn!==5)return!1;var t=is,n=Wf;Wf=0;var s=la(Ra),l=O.T,f=H.p;try{H.p=32>s?32:s,O.T=null,s=qf,qf=null;var d=is,S=Ra;if(Cn=0,Ar=is=null,Ra=0,(Ft&6)!==0)throw Error(r(331));var R=Ft;if(Ft|=4,J0(d.current),j0(d,d.current,S,s),Ft=R,ko(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(he,d)}catch{}return!0}finally{H.p=f,O.T=l,gg(t,n)}}function vg(t,n,s){n=_i(s,n),n=Tf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Ve(t,2),Qi(t))}function Wt(t,n,s){if(t.tag===3)vg(t,t,s);else for(;n!==null;){if(n.tag===3){vg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){t=_i(s,t),s=S0(2),l=Ka(n,s,2),l!==null&&(x0(s,l,n,t),Ve(l,2),Qi(l));break}}n=n.return}}function Kf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Yx;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Vf=!0,f.add(s),t=Jx.bind(null,t,n,s),n.then(t,t))}function Jx(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(bt&s)===s&&(fn===4||fn===3&&(bt&62914560)===bt&&300>Lt()-ac?(Ft&2)===0&&Rr(t,0):kf|=s,Tr===bt&&(Tr=0)),Qi(t)}function Sg(t,n){n===0&&(n=_e()),t=Ds(t,n),t!==null&&(Ve(t,n),Qi(t))}function $x(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Sg(t,s)}function eM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Sg(t,s)}function tM(t,n){return Gt(t,n)}var fc=null,wr=null,Qf=!1,dc=!1,Jf=!1,ss=0;function Qi(t){t!==wr&&t.next===null&&(wr===null?fc=wr=t:wr=wr.next=t),dc=!0,Qf||(Qf=!0,iM())}function ko(t,n){if(!Jf&&dc){Jf=!0;do for(var s=!1,l=fc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-He(42|t)+1)-1,d&=f&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Eg(l,d))}else d=bt,d=ue(l,l===en?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ce(l,d)||(s=!0,Eg(l,d));l=l.next}while(s);Jf=!1}}function nM(){xg()}function xg(){dc=Qf=!1;var t=0;ss!==0&&hM()&&(t=ss);for(var n=Lt(),s=null,l=fc;l!==null;){var f=l.next,d=Mg(l,n);d===0?(l.next=null,s===null?fc=f:s.next=f,f===null&&(wr=s)):(s=l,(t!==0||(d&3)!==0)&&(dc=!0)),l=f}Cn!==0&&Cn!==5||ko(t),ss!==0&&(ss=0)}function Mg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-He(d),R=1<<S,G=f[S];G===-1?((R&s)===0||(R&l)!==0)&&(f[S]=De(R,n)):G<=n&&(t.expiredLanes|=R),d&=~R}if(n=en,s=bt,s=ue(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Vt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Vt(l),la(s)){case 2:case 8:s=E;break;case 32:s=Q;break;case 268435456:s=pe;break;default:s=Q}return l=yg.bind(null,t),s=Gt(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Vt(l),t.callbackPriority=2,t.callbackNode=null,2}function yg(t,n){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(uc()&&t.callbackNode!==s)return null;var l=bt;return l=ue(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ig(t,l,n),Mg(t,Lt()),t.callbackNode!=null&&t.callbackNode===s?yg.bind(null,t):null)}function Eg(t,n){if(uc())return null;ig(t,n,!0)}function iM(){mM(function(){(Ft&6)!==0?Gt(N,nM):xg()})}function $f(){if(ss===0){var t=pr;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),ss=t}return ss}function bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:As(""+t)}function Tg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function aM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var d=bg((f[Sn]||null).action),S=l.submitter;S&&(n=(n=S[Sn]||null)?bg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new bl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var G=S?Tg(f,S):new FormData(f);Sf(s,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(R.preventDefault(),G=S?Tg(f,S):new FormData(f),Sf(s,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],sM=td.toLowerCase(),rM=td[0].toUpperCase()+td.slice(1);Pi(sM,"on"+rM)}Pi(nm,"onAnimationEnd"),Pi(im,"onAnimationIteration"),Pi(am,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(yx,"onTransitionRun"),Pi(Ex,"onTransitionStart"),Pi(bx,"onTransitionCancel"),Pi(sm,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Ag(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(n)for(var S=l.length-1;0<=S;S--){var R=l[S],G=R.instance,ae=R.currentTarget;if(R=R.listener,G!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(ve){Rl(ve)}f.currentTarget=null,d=G}else for(S=0;S<l.length;S++){if(R=l[S],G=R.instance,ae=R.currentTarget,R=R.listener,G!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(ve){Rl(ve)}f.currentTarget=null,d=G}}}}function Et(t,n){var s=n[ca];s===void 0&&(s=n[ca]=new Set);var l=t+"__bubble";s.has(l)||(Rg(n,t,2,!1),s.add(l))}function nd(t,n,s){var l=0;n&&(l|=4),Rg(s,t,l,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[hc]){t[hc]=!0,Ga.forEach(function(s){s!=="selectionchange"&&(oM.has(s)||nd(s,!1,t),nd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[hc]||(n[hc]=!0,nd("selectionchange",!1,n))}}function Rg(t,n,s,l){switch(n_(n)){case 2:var f=PM;break;case 8:f=IM;break;default:f=vd}s=f.bind(null,n,s,t),f=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function ad(t,n,s,l,f){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=mi(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=d=S;continue e}R=R.parentNode}}l=l.return}Np(function(){var ae=d,ve=xu(s),ye=[];e:{var le=rm.get(t);if(le!==void 0){var de=bl,Qe=t;switch(t){case"keypress":if(yl(s)===0)break e;case"keydown":case"keyup":de=ex;break;case"focusin":Qe="focus",de=Au;break;case"focusout":Qe="blur",de=Au;break;case"beforeblur":case"afterblur":de=Au;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=ix;break;case nm:case im:case am:de=WS;break;case sm:de=sx;break;case"scroll":case"scrollend":de=HS;break;case"wheel":de=ox;break;case"copy":case"cut":case"paste":de=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Fp;break;case"toggle":case"beforetoggle":de=cx}var at=(n&4)!==0,Qt=!at&&(t==="scroll"||t==="scrollend"),J=at?le!==null?le+"Capture":null:le;at=[];for(var W=ae,ie;W!==null;){var Se=W;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||J===null||(Se=fo(W,J),Se!=null&&at.push(Wo(W,Se,ie))),Qt)break;W=W.return}0<at.length&&(le=new de(le,Qe,null,s,ve),ye.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==Su&&(Qe=s.relatedTarget||s.fromElement)&&(mi(Qe)||Qe[Ln]))break e;if((de||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,de?(Qe=s.relatedTarget||s.toElement,de=ae,Qe=Qe?mi(Qe):null,Qe!==null&&(Qt=c(Qe),at=Qe.tag,Qe!==Qt||at!==5&&at!==27&&at!==6)&&(Qe=null)):(de=null,Qe=ae),de!==Qe)){if(at=Pp,Se="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=Fp,Se="onPointerLeave",J="onPointerEnter",W="pointer"),Qt=de==null?le:ua(de),ie=Qe==null?le:ua(Qe),le=new at(Se,W+"leave",de,s,ve),le.target=Qt,le.relatedTarget=ie,Se=null,mi(ve)===ae&&(at=new at(J,W+"enter",Qe,s,ve),at.target=ie,at.relatedTarget=Qt,Se=at),Qt=Se,de&&Qe)t:{for(at=lM,J=de,W=Qe,ie=0,Se=J;Se;Se=at(Se))ie++;Se=0;for(var tt=W;tt;tt=at(tt))Se++;for(;0<ie-Se;)J=at(J),ie--;for(;0<Se-ie;)W=at(W),Se--;for(;ie--;){if(J===W||W!==null&&J===W.alternate){at=J;break t}J=at(J),W=at(W)}at=null}else at=null;de!==null&&Cg(ye,le,de,at,!1),Qe!==null&&Qt!==null&&Cg(ye,Qt,Qe,at,!0)}}e:{if(le=ae?ua(ae):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var Ot=Wp;else if(kp(le))if(qp)Ot=Sx;else{Ot=_x;var $e=gx}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&Ht(ae.elementType)&&(Ot=Wp):Ot=vx;if(Ot&&(Ot=Ot(t,ae))){Xp(ye,Ot,s,ve);break e}$e&&$e(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&Mt(le,"number",le.value)}switch($e=ae?ua(ae):window,t){case"focusin":(kp($e)||$e.contentEditable==="true")&&(rr=$e,Nu=ae,xo=null);break;case"focusout":xo=Nu=rr=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,em(ye,s,ve);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":em(ye,s,ve)}var ht;if(Cu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else sr?Gp(t,s)&&(Tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Tt="onCompositionStart");Tt&&(Bp&&s.locale!=="ko"&&(sr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&sr&&(ht=Up()):(ka=ve,Eu="value"in ka?ka.value:ka.textContent,sr=!0)),$e=pc(ae,Tt),0<$e.length&&(Tt=new Ip(Tt,t,null,s,ve),ye.push({event:Tt,listeners:$e}),ht?Tt.data=ht:(ht=Vp(s),ht!==null&&(Tt.data=ht)))),(ht=fx?dx(t,s):hx(t,s))&&(Tt=pc(ae,"onBeforeInput"),0<Tt.length&&($e=new Ip("onBeforeInput","beforeinput",null,s,ve),ye.push({event:$e,listeners:Tt}),$e.data=ht)),aM(ye,t,ae,s,ve)}Ag(ye,n)})}function Wo(t,n,s){return{instance:t,listener:n,currentTarget:s}}function pc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=fo(t,s),f!=null&&l.unshift(Wo(t,f,d)),f=fo(t,n),f!=null&&l.push(Wo(t,f,d))),t.tag===3)return l;t=t.return}return[]}function lM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cg(t,n,s,l,f){for(var d=n._reactName,S=[];s!==null&&s!==l;){var R=s,G=R.alternate,ae=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||ae===null||(G=ae,f?(ae=fo(s,d),ae!=null&&S.unshift(Wo(s,ae,G))):f||(ae=fo(s,d),ae!=null&&S.push(Wo(s,ae,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var cM=/\r\n?/g,uM=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(cM,`
`).replace(uM,"")}function Dg(t,n){return n=wg(n),wg(t)===n}function Kt(t,n,s,l,f,d){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ai(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ai(t,""+l);break;case"className":ze(t,"class",l);break;case"tabIndex":ze(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,s,l);break;case"style":Oi(t,l,d);break;case"data":if(n!=="object"){ze(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=As(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=As(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=da);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=As(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Te(t,"popover",l);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Te(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yi.get(s)||s,Te(t,s,l))}}function sd(t,n,s,l,f,d){switch(s){case"style":Oi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ai(t,l):(typeof l=="number"||typeof l=="bigint")&&ai(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),d=t[Sn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Te(t,s,l)}}}function Fn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,d,S,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":Et("invalid",t);var R=d=S=f=null,G=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":S=ve;break;case"checked":G=ve;break;case"defaultChecked":ae=ve;break;case"value":d=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Kt(t,n,l,ve,s,null)}}Hn(t,d,R,G,ae,S,f,!1);return;case"select":Et("invalid",t),l=S=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Kt(t,n,f,R,s,null)}n=d,s=S,t.multiple=!!l,n!=null?Rn(t,!!l,n,!1):s!=null&&Rn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),d=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,n,S,R,s,null)}Ui(t,l,f,d);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,G,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<Xo.length;l++)Et(Xo[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,ae,l,s,null)}return;default:if(Ht(n)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&sd(t,n,ve,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Kt(t,n,R,l,s,null))}function fM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,R=null,G=null,ae=null,ve=null;for(de in s){var ye=s[de];if(s.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=ye;default:l.hasOwnProperty(de)||Kt(t,n,de,null,l,ye)}}for(var le in l){var de=l[le];if(ye=s[le],l.hasOwnProperty(le)&&(de!=null||ye!=null))switch(le){case"type":d=de;break;case"name":f=de;break;case"checked":ae=de;break;case"defaultChecked":ve=de;break;case"value":S=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==ye&&Kt(t,n,le,de,l,ye)}}je(t,S,R,G,ae,ve,d,f);return;case"select":de=S=R=le=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(d)||Kt(t,n,d,null,l,G)}for(f in l)if(d=l[f],G=s[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==G&&Kt(t,n,f,d,l,G)}n=R,s=S,l=de,le!=null?Rn(t,!!s,le,!1):!!l!=!!s&&(n!=null?Rn(t,!!s,n,!0):Rn(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,l,f)}for(S in l)if(f=l[S],d=s[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Kt(t,n,S,f,l,d)}ii(t,le,de);return;case"option":for(var Qe in s)if(le=s[Qe],s.hasOwnProperty(Qe)&&le!=null&&!l.hasOwnProperty(Qe))switch(Qe){case"selected":t.selected=!1;break;default:Kt(t,n,Qe,null,l,le)}for(G in l)if(le=l[G],de=s[G],l.hasOwnProperty(G)&&le!==de&&(le!=null||de!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,G,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Kt(t,n,at,null,l,le);for(ae in l)if(le=l[ae],de=s[ae],l.hasOwnProperty(ae)&&le!==de&&(le!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Kt(t,n,ae,le,l,de)}return;default:if(Ht(n)){for(var Qt in s)le=s[Qt],s.hasOwnProperty(Qt)&&le!==void 0&&!l.hasOwnProperty(Qt)&&sd(t,n,Qt,void 0,l,le);for(ve in l)le=l[ve],de=s[ve],!l.hasOwnProperty(ve)||le===de||le===void 0&&de===void 0||sd(t,n,ve,le,l,de);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&Kt(t,n,J,null,l,le);for(ye in l)le=l[ye],de=s[ye],!l.hasOwnProperty(ye)||le===de||le==null&&de==null||Kt(t,n,ye,le,l,de)}function Lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,S=f.initiatorType,R=f.duration;if(d&&R&&Lg(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],ae=G.startTime;if(ae>R)break;var ve=G.transferSize,ye=G.initiatorType;ve&&Lg(ye)&&(G=G.responseEnd,S+=ve*(G<R?1:(R-ae)/(G-ae)))}if(--l,n+=8*(d+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,od=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function Ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function hM(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,pM=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,mM=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(t){return Pg.resolve(null).then(t).catch(gM)}:Og;function gM(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Ig(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Ur(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")qo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,qo(s);for(var d=s.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[qi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&qo(t.ownerDocument.body);s=f}while(s);Ur(n)}function Fg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ud(s),Ni(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function _M(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[qi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function vM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=yi(t.nextSibling),t===null))return null;return t}function Bg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function zg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return yi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Hg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Gg(t,n,s){switch(n=mc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function qo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ni(t)}var Ei=new Map,Vg=new Set;function gc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=H.d;H.d={f:xM,r:MM,D:yM,C:EM,L:bM,m:TM,X:RM,S:AM,M:CM};function xM(){var t=Ca.f(),n=oc();return t||n}function MM(t){var n=ni(t);n!==null&&n.tag===5&&n.type==="form"?s0(n):Ca.r(t)}var Dr=typeof document>"u"?null:document;function kg(t,n,s){var l=Dr;if(l&&typeof n=="string"&&n){var f=Ut(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Vg.has(f)||(Vg.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Fn(n,"link",t),ln(n),l.head.appendChild(n)))}}function yM(t){Ca.D(t),kg("dns-prefetch",t,null)}function EM(t,n){Ca.C(t,n),kg("preconnect",t,n)}function bM(t,n,s){Ca.L(t,n,s);var l=Dr;if(l&&t&&n){var f='link[rel="preload"][as="'+Ut(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ut(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ut(s.imageSizes)+'"]')):f+='[href="'+Ut(t)+'"]';var d=f;switch(n){case"style":d=Lr(t);break;case"script":d=Nr(t)}Ei.has(d)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ei.set(d,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Yo(d))||n==="script"&&l.querySelector(Zo(d))||(n=l.createElement("link"),Fn(n,"link",t),ln(n),l.head.appendChild(n)))}}function TM(t,n){Ca.m(t,n);var s=Dr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nr(t)}if(!Ei.has(d)&&(t=_({rel:"modulepreload",href:t},n),Ei.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(d)))return}l=s.createElement("link"),Fn(l,"link",t),ln(l),s.head.appendChild(l)}}}function AM(t,n,s){Ca.S(t,n,s);var l=Dr;if(l&&t){var f=fa(l).hoistableStyles,d=Lr(t);n=n||"default";var S=f.get(d);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(Yo(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ei.get(d))&&pd(t,s);var G=S=l.createElement("link");ln(G),Fn(G,"link",t),G._p=new Promise(function(ae,ve){G.onload=ae,G.onerror=ve}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,_c(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(d,S)}}}function RM(t,n){Ca.X(t,n);var s=Dr;if(s&&t){var l=fa(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(Zo(f)),d||(t=_({src:t,async:!0},n),(n=Ei.get(f))&&md(t,n),d=s.createElement("script"),ln(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function CM(t,n){Ca.M(t,n);var s=Dr;if(s&&t){var l=fa(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(Zo(f)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Ei.get(f))&&md(t,n),d=s.createElement("script"),ln(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Xg(t,n,s,l){var f=(f=re.current)?gc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Lr(s.href),s=fa(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Lr(s.href);var d=fa(f).hoistableStyles,S=d.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=f.querySelector(Yo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Ei.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(t,s),d||wM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(s),s=fa(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Lr(t){return'href="'+Ut(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function Wg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function wM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Fn(n,"link",s),ln(n),t.head.appendChild(n))}function Nr(t){return'[src="'+Ut(t)+'"]'}function Zo(t){return"script[async]"+t}function qg(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ut(s.href)+'"]');if(l)return n.instance=l,ln(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ln(l),Fn(l,"style",f),_c(l,s.precedence,t),n.instance=l;case"stylesheet":f=Lr(s.href);var d=t.querySelector(Yo(f));if(d)return n.state.loading|=4,n.instance=d,ln(d),d;l=Wg(s),(f=Ei.get(f))&&pd(l,f),d=(t.ownerDocument||t).createElement("link"),ln(d);var S=d;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Fn(d,"link",l),n.state.loading|=4,_c(d,s.precedence,t),n.instance=d;case"script":return d=Nr(s.src),(f=t.querySelector(Zo(d)))?(n.instance=f,ln(f),f):(l=s,(f=Ei.get(d))&&(l=_({},s),md(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),ln(f),Fn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,_c(l,s.precedence,t));return n.instance}function _c(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===n)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var vc=null;function Yg(t,n,s){if(vc===null){var l=new Map,f=vc=new Map;f.set(s,l)}else f=vc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[qi]||d[$t]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var R=l.get(S);R?R.push(d):l.set(S,[d])}}return l}function Zg(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function DM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function LM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Lr(l.href),d=n.querySelector(Yo(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Sc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,ln(d);return}d=n.ownerDocument||n,l=Wg(l),(f=Ei.get(f))&&pd(l,f),d=d.createElement("link"),ln(d);var S=d;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Fn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Sc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var gd=0;function NM(t,n){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*dM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function Mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,n.forEach(UM,t),xc=null,Sc.call(t))}function UM(t,n){if(!(n.state.loading&4)){var s=xc.get(t);if(s)var l=s.get(null);else{s=new Map,xc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,f),s.set(S,f),this.count++,l=Sc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var jo={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function OM(t,n,s,l,f,d,S,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Kg(t,n,s,l,f,d,S,R,G,ae,ve,ye){return t=new OM(t,n,s,S,G,ae,ve,ye,R),n=1,d===!0&&(n|=24),d=ri(3,null,null,n),t.current=d,d.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:n},Ju(d),t}function Qg(t){return t?(t=cr,t):cr}function Jg(t,n,s,l,f,d){f=Qg(f),l.context===null?l.context=f:l.pendingContext=f,l=ja(n),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ka(t,l,n),s!==null&&(ei(s,t,n),Ro(s,t,n))}function $g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function _d(t,n){$g(t,n),(t=t.alternate)&&$g(t,n)}function e_(t){if(t.tag===13||t.tag===31){var n=Ds(t,67108864);n!==null&&ei(n,t,67108864),_d(t,67108864)}}function t_(t){if(t.tag===13||t.tag===31){var n=fi();n=zn(n);var s=Ds(t,n);s!==null&&ei(s,t,n),_d(t,n)}}var yc=!0;function PM(t,n,s,l){var f=O.T;O.T=null;var d=H.p;try{H.p=2,vd(t,n,s,l)}finally{H.p=d,O.T=f}}function IM(t,n,s,l){var f=O.T;O.T=null;var d=H.p;try{H.p=8,vd(t,n,s,l)}finally{H.p=d,O.T=f}}function vd(t,n,s,l){if(yc){var f=Sd(l);if(f===null)ad(t,n,l,Ec,s),i_(t,l);else if(BM(f,t,n,s,l))l.stopPropagation();else if(i_(t,l),n&4&&-1<FM.indexOf(t)){for(;f!==null;){var d=ni(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Re(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-He(S);R.entanglements[1]|=G,S&=~G}Qi(d),(Ft&6)===0&&(sc=Lt()+500,ko(0))}}break;case 31:case 13:R=Ds(d,2),R!==null&&ei(R,d,2),oc(),_d(d,2)}if(d=Sd(l),d===null&&ad(t,n,l,Ec,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else ad(t,n,l,null,s)}}function Sd(t){return t=xu(t),xd(t)}var Ec=null;function xd(t){if(Ec=null,t=mi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ec=t,null}function n_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case N:return 2;case E:return 8;case Q:case oe:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Md=!1,os=null,ls=null,cs=null,Ko=new Map,Qo=new Map,us=[],FM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":Ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(n.pointerId)}}function Jo(t,n,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},n!==null&&(n=ni(n),n!==null&&e_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function BM(t,n,s,l,f){switch(n){case"focusin":return os=Jo(os,t,n,s,l,f),!0;case"dragenter":return ls=Jo(ls,t,n,s,l,f),!0;case"mouseover":return cs=Jo(cs,t,n,s,l,f),!0;case"pointerover":var d=f.pointerId;return Ko.set(d,Jo(Ko.get(d)||null,t,n,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Qo.set(d,Jo(Qo.get(d)||null,t,n,s,l,f)),!0}return!1}function a_(t){var n=mi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Ha(t.priority,function(){t_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Ha(t.priority,function(){t_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Sd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Su=l,s.target.dispatchEvent(l),Su=null}else return n=ni(s),n!==null&&e_(n),t.blockedOn=s,!1;n.shift()}return!0}function s_(t,n,s){bc(t)&&s.delete(n)}function zM(){Md=!1,os!==null&&bc(os)&&(os=null),ls!==null&&bc(ls)&&(ls=null),cs!==null&&bc(cs)&&(cs=null),Ko.forEach(s_),Qo.forEach(s_)}function Tc(t,n){t.blockedOn===n&&(t.blockedOn=null,Md||(Md=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,zM)))}var Ac=null;function r_(t){Ac!==t&&(Ac=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ac===t&&(Ac=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(xd(l||s)===null)continue;break}var d=ni(s);d!==null&&(t.splice(n,3),n-=3,Sf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Ur(t){function n(G){return Tc(G,t)}os!==null&&Tc(os,t),ls!==null&&Tc(ls,t),cs!==null&&Tc(cs,t),Ko.forEach(n),Qo.forEach(n);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)a_(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],S=f[Sn]||null;if(typeof d=="function")S||r_(s);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[Sn]||null)R=S.formAction;else if(xd(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),r_(s)}}}function o_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function yd(t){this._internalRoot=t}Rc.prototype.render=yd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=fi();Jg(s,l,t,n,null,null)},Rc.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jg(t.current,2,null,t,null,null),oc(),n[Ln]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bs();t={blockedOn:null,target:t,priority:n};for(var s=0;s<us.length&&n!==0&&n<us[s].priority;s++);us.splice(s,0,t),s===0&&a_(t)}};var l_=e.version;if(l_!=="19.2.7")throw Error(r(527,l_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var HM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{he=Cc.inject(HM),me=Cc}catch{}}return el.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=m0,d=g0,S=_0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Kg(t,1,!1,null,null,s,l,null,f,d,S,o_),t[Ln]=n.current,id(t),new yd(n)},el.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=m0,S=g0,R=_0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=Kg(t,1,!0,n,s??null,l,f,G,d,S,R,o_),n.context=Qg(null),s=n.current,l=fi(),l=zn(l),f=ja(l),f.callback=null,Ka(s,f,l),s=l,n.current.lanes=s,Ve(n,s),Qi(n),t[Ln]=n.current,id(t),new Rc(n)},el.version="19.2.7",el}var v_;function jM(){if(v_)return Td.exports;v_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Td.exports=ZM(),Td.exports}var KM=jM();const QM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Or=(a,e="#")=>{var i;return((i=QM[a])==null?void 0:i.trim())||e},Tn={app:Or("VITE_APP_URL","https://demo.morpheum.io"),docs:Or("VITE_DOCS_URL"),manifesto:Or("VITE_MANIFESTO_URL"),discord:Or("VITE_DISCORD_URL"),x:Or("VITE_X_URL"),tutorialVideo:Or("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Jc=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],wd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Tn.manifesto},ds={eyebrow:{label:"A manifesto for verifiable agents",href:Tn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Tn.app},secondaryCta:{label:"Explore agents",href:Tn.explore}},S_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},x_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],ph={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Dd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Tn.exploreAgents},status:"SharpeShark · minting mandate…"},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Tn.exploreAgents},status:"SortinoSloth · mirroring into bucket…"},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Tn.exploreVaults},status:"FundingFox · routing to vault…"}]},hs={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},Pr={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},wc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Tn.app},social:[{label:"Join Discord",href:Tn.discord},{label:"Join X",href:Tn.x}]},M_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function io({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return B.jsx("a",{className:o,href:c,...u,children:e})}return B.jsx("button",{className:o,type:"button",...r,children:e})}function JM(){return B.jsx("section",{id:"join",className:"section community",children:B.jsxs("div",{className:"container community__inner",children:[B.jsx("h2",{className:"community__line",children:wc.line}),B.jsxs("div",{className:"community__ctas",children:[B.jsx(io,{href:wc.primaryCta.href,variant:"primary",children:wc.primaryCta.label}),wc.social.map(a=>B.jsx(io,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function $M(){const[a,e]=Je.useState(!1),i=!!Tn.tutorialVideo;return B.jsx("section",{id:"demo",className:"section demo",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:ph.kicker}),B.jsxs("div",{className:"demo__video",children:[a&&i?B.jsx("video",{className:"demo__player",src:Tn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):B.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[B.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),B.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),B.jsx("p",{className:"demo__caption",children:ph.videoCaption})]})]})})}const ey={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Ld({type:a,value:e}){return B.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[B.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),B.jsx("span",{className:"proof-chip__label",children:ey[a]}),e?B.jsx("span",{className:"proof-chip__value",children:e}):null]})}function ty(){const a=Pr.cards[0],e=Pr.cards[1],i=Pr.cards[2],r=Pr.cards[3];return B.jsx("section",{id:"explore",className:"section explore",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:Pr.kicker}),B.jsx("h2",{className:"section-title explore__title",children:Pr.title}),B.jsxs("div",{className:"explore__grid",children:[B.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:a.title}),B.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),B.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>B.jsxs("li",{className:"explore-roster__row",children:[B.jsxs("div",{className:"explore-roster__top",children:[B.jsx("span",{className:"explore-roster__name",children:o.name}),B.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),B.jsxs("div",{className:"explore-roster__proof",children:[B.jsx(Ld,{type:"verified"}),B.jsx(Ld,{type:"riskScore",value:o.risk}),B.jsx(Ld,{type:"receipt"}),B.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),B.jsxs("article",{className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:e.title}),B.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:e.blurb}),B.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:o.label}),B.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),B.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:i.title}),B.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:i.blurb}),B.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:o.label}),B.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),B.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:r.title}),B.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:r.blurb}),B.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:o.label}),B.jsxs("span",{className:"explore-sample__metrics",children:[B.jsx("span",{className:"terminal-value terminal-long",children:o.value}),B.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="185",ny=0,y_=1,iy=2,$c=1,ay=2,ol=3,Fa=0,ti=1,ta=2,Pa=0,$r=1,mh=2,E_=3,b_=4,sy=5,js=100,ry=101,oy=102,ly=103,cy=104,uy=200,fy=201,dy=202,hy=203,gh=204,_h=205,py=206,my=207,gy=208,_y=209,vy=210,Sy=211,xy=212,My=213,yy=214,vh=0,Sh=1,xh=2,ao=3,Mh=4,yh=5,Eh=6,bh=7,kv=0,Ey=1,by=2,aa=0,Xv=1,Wv=2,qv=3,Yv=4,Zv=5,jv=6,Kv=7,Qv=300,$s=301,so=302,Nd=303,Ud=304,hu=306,Th=1e3,Vi=1001,Ah=1002,Bn=1003,Ty=1004,Dc=1005,An=1006,Od=1007,ys=1008,Ai=1009,Jv=1010,$v=1011,ml=1012,cp=1013,oa=1014,na=1015,Ba=1016,up=1017,fp=1018,gl=1020,eS=35902,tS=35899,nS=1021,iS=1022,ki=1023,za=1026,Qs=1027,aS=1028,dp=1029,er=1030,hp=1031,pp=1033,eu=33776,tu=33777,nu=33778,iu=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Lh=36196,Nh=37492,Uh=37496,Oh=37488,Ph=37489,su=37490,Ih=37491,Fh=37808,Bh=37809,zh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,Zh=37819,jh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,ep=36283,tp=36284,ru=36285,np=36286,Ay=3200,T_=0,Ry=1,Ms="",Zn="srgb",ou="srgb-linear",lu="linear",qt="srgb",Ir=7680,A_=519,Cy=512,wy=513,Dy=514,mp=515,Ly=516,Ny=517,gp=518,Uy=519,R_=35044,C_="300 es",ia=2e3,cu=2001;function Oy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function uu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Py(){const a=uu("canvas");return a.style.display="block",a}const w_={};function D_(...a){const e="THREE."+a.shift();console.log(e,...a)}function sS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=sS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Dt(...a){a=sS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function eo(...a){const e=a.join(" ");e in w_||(w_[e]=!0,st(...a))}function Iy(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Fy={[vh]:Sh,[xh]:Eh,[Mh]:bh,[ao]:yh,[Sh]:vh,[Eh]:xh,[bh]:Mh,[yh]:ao};class nr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L_=1234567;const dl=Math.PI/180,_l=180/Math.PI;function lo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function vt(a,e,i){return Math.max(e,Math.min(i,a))}function _p(a,e){return(a%e+e)%e}function By(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function zy(a,e,i){return a!==e?(i-a)/(e-a):0}function hl(a,e,i){return(1-i)*a+i*e}function Hy(a,e,i,r){return hl(a,e,1-Math.exp(-i*r))}function Gy(a,e=1){return e-Math.abs(_p(a,e*2)-e)}function Vy(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function ky(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function Xy(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Wy(a,e){return a+Math.random()*(e-a)}function qy(a){return a*(.5-Math.random())}function Yy(a){a!==void 0&&(L_=a);let e=L_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zy(a){return a*dl}function jy(a){return a*_l}function Ky(a){return(a&a-1)===0&&a!==0}function Qy(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Jy(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function $y(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),p=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*p);break;case"YZY":a.set(m*v,h*g,m*_,h*p);break;case"ZXZ":a.set(m*_,m*v,h*g,h*p);break;case"XZX":a.set(h*g,m*b,m*x,h*p);break;case"YXY":a.set(m*x,h*g,m*b,h*p);break;case"ZYZ":a.set(m*b,m*x,h*g,h*p);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Kr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tn={DEG2RAD:dl,RAD2DEG:_l,generateUUID:lo,clamp:vt,euclideanModulo:_p,mapLinear:By,inverseLerp:zy,lerp:hl,damp:Hy,pingpong:Gy,smoothstep:Vy,smootherstep:ky,randInt:Xy,randFloat:Wy,randFloatSpread:qy,seededRandom:Yy,degToRad:Zy,radToDeg:jy,isPowerOfTwo:Ky,ceilPowerOfTwo:Qy,floorPowerOfTwo:Jy,setQuaternionFromProperEuler:$y,normalize:qn,denormalize:Kr},Ap=class Ap{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ap.prototype.isVector2=!0;let It=Ap;class co{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||m!==v||p!==x||g!==b){let y=m*v+p*x+g*b+_*w;y<0&&(v=-v,x=-x,b=-b,w=-w,y=-y);let M=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);M=Math.sin(M*I)/z,h=Math.sin(h*I)/z,m=m*M+v*h,p=p*M+x*h,g=g*M+b*h,_=_*M+w*h}else{m=m*M+v*h,p=p*M+x*h,g=g*M+b*h,_=_*M+w*h;const I=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=I,p*=I,g*=I,_*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[i]=h*b+g*_+m*x-p*v,e[i+1]=m*b+g*v+p*_-h*x,e[i+2]=p*b+g*x+h*v-m*_,e[i+3]=g*b-h*_-m*v-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"YZX":this._x=v*g*_+p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_-v*x*b;break;case"XZY":this._x=v*g*_-p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_+v*x*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-r*p,this._z=c*g+u*p+r*m-o*h,this._w=u*g-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rp=class Rp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(N_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(N_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*p+u*_-h*g,this.y=r+m*g+h*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rp.prototype.isVector3=!0;let ee=Rp;const Pd=new ee,N_=new co,Cp=class Cp{constructor(e,i,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,p)}set(e,i,r,o,c,u,h,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],g=r[4],_=r[7],v=r[2],x=r[5],b=r[8],w=o[0],y=o[3],M=o[6],I=o[1],z=o[4],C=o[7],P=o[2],D=o[5],F=o[8];return c[0]=u*w+h*I+m*P,c[3]=u*y+h*z+m*D,c[6]=u*M+h*C+m*F,c[1]=p*w+g*I+_*P,c[4]=p*y+g*z+_*D,c[7]=p*M+g*C+_*F,c[2]=v*w+x*I+b*P,c[5]=v*y+x*z+b*D,c[8]=v*M+x*C+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*u*g-i*h*p-r*c*g+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*m-g*c,x=p*c-u*m,b=i*_+r*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(o*p-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-p*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+i,0,0,1),this}scale(e,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Id.makeScale(e,i)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cp.prototype.isMatrix3=!0;let ut=Cp;const Id=new ut,U_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eE(){const a={enabled:!0,workingColorSpace:ou,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=Ia(o.r),o.g=Ia(o.g),o.b=Ia(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=to(o.r),o.g=to(o.g),o.b=to(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ms?lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ou]:{primaries:e,whitePoint:r,transfer:lu,toXYZ:U_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:U_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),a}const Rt=eE();function Ia(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function to(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Fr;class tE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fr===void 0&&(Fr=uu("canvas")),Fr.width=e.width,Fr.height=e.height;const o=Fr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=uu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ia(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ia(i[r]/255)*255):i[r]=Ia(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nE=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Fd(o[u].image)):c.push(Fd(o[u]))}else c=Fd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Fd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?tE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let iE=0;const Bd=new ee;class Xn extends nr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Vi,o=Vi,c=An,u=ys,h=ki,m=Ai,p=Xn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=lo(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Qv;Xn.DEFAULT_ANISOTROPY=1;const wp=class wp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,C=(x+1)/2,P=(M+1)/2,D=(g+v)/4,F=(_+w)/4,T=(b+y)/4;return z>C&&z>P?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=D/r,c=F/r):C>P?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=D/o,c=T/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=F/c,o=T/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(_-w)/I,this.z=(v-g)/I,this.w=Math.acos((p+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this.w=vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this.w=vt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wp.prototype.isVector4=!0;let hn=wp;class aE extends nr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new hn(0,0,e,i),this.scissorTest=!1,this.viewport=new hn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Xn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends aE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class rS extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sE extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,r,o,c,u,h,m,p,g,_,v,x,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,p,g,_,v,x,b,w,y)}set(e,i,r,o,c,u,h,m,p,g,_,v,x,b,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=p,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=b,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/Br.setFromMatrixColumn(e,0).length(),c=1/Br.setFromMatrixColumn(e,1).length(),u=1/Br.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=x+b*p,i[5]=v-w*p,i[9]=-h*m,i[2]=w-v*p,i[6]=b+x*p,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=p*g,w=p*_;i[0]=v+w*h,i[4]=b*h-x,i[8]=u*p,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-b,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=p*g,w=p*_;i[0]=v-w*h,i[4]=-u*_,i[8]=b+x*h,i[1]=x+b*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*p,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=b*p-x,i[8]=v*p+w,i[1]=m*_,i[5]=w*p+v,i[9]=x*p-b,i[2]=-p,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*p,b=h*m,w=h*p;i[0]=m*g,i[4]=w-v*_,i[8]=b*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-p*g,i[6]=x*_+b,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*p,b=h*m,w=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rE,e,oE)}lookAt(e,i,r){const o=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),ps.crossVectors(r,di),ps.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ps.crossVectors(r,di)),ps.normalize(),Lc.crossVectors(di,ps),o[0]=ps.x,o[4]=Lc.x,o[8]=di.x,o[1]=ps.y,o[5]=Lc.y,o[9]=di.y,o[2]=ps.z,o[6]=Lc.z,o[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],g=r[1],_=r[5],v=r[9],x=r[13],b=r[2],w=r[6],y=r[10],M=r[14],I=r[3],z=r[7],C=r[11],P=r[15],D=o[0],F=o[4],T=o[8],L=o[12],X=o[1],k=o[5],j=o[9],ce=o[13],fe=o[2],q=o[6],O=o[10],H=o[14],$=o[3],ge=o[7],xe=o[11],U=o[15];return c[0]=u*D+h*X+m*fe+p*$,c[4]=u*F+h*k+m*q+p*ge,c[8]=u*T+h*j+m*O+p*xe,c[12]=u*L+h*ce+m*H+p*U,c[1]=g*D+_*X+v*fe+x*$,c[5]=g*F+_*k+v*q+x*ge,c[9]=g*T+_*j+v*O+x*xe,c[13]=g*L+_*ce+v*H+x*U,c[2]=b*D+w*X+y*fe+M*$,c[6]=b*F+w*k+y*q+M*ge,c[10]=b*T+w*j+y*O+M*xe,c[14]=b*L+w*ce+y*H+M*U,c[3]=I*D+z*X+C*fe+P*$,c[7]=I*F+z*k+C*q+P*ge,c[11]=I*T+z*j+C*O+P*xe,c[15]=I*L+z*ce+C*H+P*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],w=e[7],y=e[11],M=e[15],I=m*x-p*v,z=h*x-p*_,C=h*v-m*_,P=u*x-p*g,D=u*v-m*g,F=u*_-h*g;return i*(w*I-y*z+M*C)-r*(b*I-y*P+M*D)+o*(b*z-w*P+M*F)-c*(b*C-w*D+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],g=e[10];return i*(u*g-h*p)-r*(c*g-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],w=e[13],y=e[14],M=e[15],I=i*h-r*u,z=i*m-o*u,C=i*p-c*u,P=r*m-o*h,D=r*p-c*h,F=o*p-c*m,T=g*w-_*b,L=g*y-v*b,X=g*M-x*b,k=_*y-v*w,j=_*M-x*w,ce=v*M-x*y,fe=I*ce-z*j+C*k+P*X-D*L+F*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return e[0]=(h*ce-m*j+p*k)*q,e[1]=(o*j-r*ce-c*k)*q,e[2]=(w*F-y*D+M*P)*q,e[3]=(v*D-_*F-x*P)*q,e[4]=(m*X-u*ce-p*L)*q,e[5]=(i*ce-o*X+c*L)*q,e[6]=(y*C-b*F-M*z)*q,e[7]=(g*F-v*C+x*z)*q,e[8]=(u*j-h*X+p*T)*q,e[9]=(r*X-i*j-c*T)*q,e[10]=(b*D-w*C+M*I)*q,e[11]=(_*C-g*D-x*I)*q,e[12]=(h*L-u*k-m*T)*q,e[13]=(i*k-r*L+o*T)*q,e[14]=(w*z-b*P-y*I)*q,e[15]=(g*P-_*z+v*I)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,g=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+r,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,p=c+c,g=u+u,_=h+h,v=c*p,x=c*g,b=c*_,w=u*g,y=u*_,M=h*_,I=m*p,z=m*g,C=m*_,P=r.x,D=r.y,F=r.z;return o[0]=(1-(w+M))*P,o[1]=(x+C)*P,o[2]=(b-z)*P,o[3]=0,o[4]=(x-C)*D,o[5]=(1-(v+M))*D,o[6]=(y+I)*D,o[7]=0,o[8]=(b+z)*F,o[9]=(y-I)*F,o[10]=(1-(v+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Br.set(o[0],o[1],o[2]).length();const h=Br.set(o[4],o[5],o[6]).length(),m=Br.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Bi.copy(this);const p=1/u,g=1/h,_=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=g,Bi.elements[5]*=g,Bi.elements[6]*=g,Bi.elements[8]*=_,Bi.elements[9]*=_,Bi.elements[10]*=_,i.setFromRotationMatrix(Bi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ia,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let b,w;if(m)b=c/(u-c),w=u*c/(u-c);else if(h===ia)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===cu)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ia,m=!1){const p=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,w;if(m)b=1/(u-c),w=u/(u-c);else if(h===ia)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===cu)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};du.prototype.isMatrix4=!0;let vn=du;const Br=new ee,Bi=new vn,rE=new ee(0,0,0),oE=new ee(1,1,1),ps=new ee,Lc=new ee,di=new ee,P_=new vn,I_=new co;class tr{constructor(e=0,i=0,r=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return P_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class oS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lE=0;const F_=new ee,zr=new co,wa=new vn,Nc=new ee,tl=new ee,cE=new ee,uE=new co,B_=new ee(1,0,0),z_=new ee(0,1,0),H_=new ee(0,0,1),G_={type:"added"},fE={type:"removed"},Hr={type:"childadded",child:null},zd={type:"childremoved",child:null};class pi extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new ee,i=new tr,r=new co,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new ut}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return zr.setFromAxisAngle(e,i),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,i){return zr.setFromAxisAngle(e,i),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(H_,e)}translateOnAxis(e,i){return F_.copy(e).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(H_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Nc.copy(e):Nc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(tl,Nc,this.up):wa.lookAt(Nc,tl,this.up),this.quaternion.setFromRotationMatrix(wa),o&&(wa.extractRotation(o.matrixWorld),zr.setFromRotationMatrix(wa),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G_),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fE),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G_),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}pi.DEFAULT_UP=new ee(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ll extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(p,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;p.inputState.pinching&&v>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ll;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const lS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Gd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Rt.workingColorSpace){if(e=_p(e,1),i=vt(i,0,1),r=vt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Gd(u,c,e+1/3),this.g=Gd(u,c,e),this.b=Gd(u,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,i=Zn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Zn){const r=lS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Rt.workingToColorSpace(kn.copy(this),e),Math.round(vt(kn.r*255,0,255))*65536+Math.round(vt(kn.g*255,0,255))*256+Math.round(vt(kn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(kn.copy(this),i);const r=kn.r,o=kn.g,c=kn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(kn.copy(this),i),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Zn){Rt.workingToColorSpace(kn.copy(this),e);const i=kn.r,r=kn.g,o=kn.b;return e!==Zn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(Uc);const r=hl(ms.h,Uc.h,i),o=hl(ms.s,Uc.s,i),c=hl(ms.l,Uc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ct;Ct.NAMES=lS;class hE extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new ee,Da=new ee,Vd=new ee,La=new ee,Gr=new ee,Vr=new ee,V_=new ee,kd=new ee,Xd=new ee,Wd=new ee,qd=new hn,Yd=new hn,Zd=new hn;class Gi{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),zi.subVectors(e,i),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){zi.subVectors(o,i),Da.subVectors(r,i),Vd.subVectors(e,i);const u=zi.dot(zi),h=zi.dot(Da),m=zi.dot(Vd),p=Da.dot(Da),g=Da.dot(Vd),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,La)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,La.x),m.addScaledVector(u,La.y),m.addScaledVector(h,La.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),Zd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(qd,c.x),u.addScaledVector(Yd,c.y),u.addScaledVector(Zd,c.z),u}static isFrontFacing(e,i,r,o){return zi.subVectors(r,i),Da.subVectors(e,i),zi.cross(Da).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),zi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;Gr.subVectors(o,r),Vr.subVectors(c,r),kd.subVectors(e,r);const m=Gr.dot(kd),p=Vr.dot(kd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(e,o);const g=Gr.dot(Xd),_=Vr.dot(Xd);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(Gr,u);Wd.subVectors(e,c);const x=Gr.dot(Wd),b=Vr.dot(Wd);if(b>=0&&x<=b)return i.copy(c);const w=x*p-m*b;if(w<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Vr,h);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return V_.subVectors(c,o),h=(_-g)/(_-g+(x-b)),i.copy(o).addScaledVector(V_,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(Gr,u).addScaledVector(Vr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sl{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Oc.copy(r.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Pc.subVectors(this.max,nl),kr.subVectors(e.a,nl),Xr.subVectors(e.b,nl),Wr.subVectors(e.c,nl),gs.subVectors(Xr,kr),_s.subVectors(Wr,Xr),ks.subVectors(kr,Wr);let i=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-ks.z,ks.y,gs.z,0,-gs.x,_s.z,0,-_s.x,ks.z,0,-ks.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-ks.y,ks.x,0];return!jd(i,kr,Xr,Wr,Pc)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,kr,Xr,Wr,Pc))?!1:(Ic.crossVectors(gs,_s),i=[Ic.x,Ic.y,Ic.z],jd(i,kr,Xr,Wr,Pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Hi=new ee,Oc=new Sl,kr=new ee,Xr=new ee,Wr=new ee,gs=new ee,_s=new ee,ks=new ee,nl=new ee,Pc=new ee,Ic=new ee,Xs=new ee;function jd(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Xs.fromArray(a,c);const h=o.x*Math.abs(Xs.x)+o.y*Math.abs(Xs.y)+o.z*Math.abs(Xs.z),m=e.dot(Xs),p=i.dot(Xs),g=r.dot(Xs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const bn=new ee,Fc=new It;let pE=0;class ra extends nr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=R_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Fc.fromBufferAttribute(this,i),Fc.applyMatrix3(e),this.setXY(i,Fc.x,Fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Kr(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Kr(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Kr(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Kr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Kr(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),o=qn(o,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class cS extends ra{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class uS extends ra{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ri extends ra{constructor(e,i,r){super(new Float32Array(e),i,r)}}const mE=new Sl,il=new ee,Kd=new ee;class Sp{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):mE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(il,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Kd)),this.expandByPoint(il.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gE=0;const bi=new vn,Qd=new pi,qr=new ee,hi=new Sl,al=new Sl,Un=new ee;class wi extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oy(e)?uS:cS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,r){return bi.makeTranslation(e,i,r),this.applyMatrix4(bi),this}scale(e,i,r){return bi.makeScale(e,i,r),this.applyMatrix4(bi),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ri(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];al.setFromBufferAttribute(h),this.morphTargetsRelative?(Un.addVectors(hi.min,al.min),hi.expandByPoint(Un),Un.addVectors(hi.max,al.max),hi.expandByPoint(Un)):(hi.expandByPoint(al.min),hi.expandByPoint(al.max))}hi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Un.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Un));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Un.fromBufferAttribute(h,p),m&&(qr.fromBufferAttribute(e,p),Un.add(qr)),o=Math.max(o,r.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ra(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const p=new ee,g=new ee,_=new ee,v=new It,x=new It,b=new It,w=new ee,y=new ee;function M(T,L,X){p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),_.fromBufferAttribute(r,X),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,L),b.fromBufferAttribute(c,X),g.sub(p),_.sub(p),x.sub(v),b.sub(v);const k=1/(x.x*b.y-b.x*x.y);isFinite(k)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(k),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(k),h[T].add(w),h[L].add(w),h[X].add(w),m[T].add(y),m[L].add(y),m[X].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,L=I.length;T<L;++T){const X=I[T],k=X.start,j=X.count;for(let ce=k,fe=k+j;ce<fe;ce+=3)M(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const z=new ee,C=new ee,P=new ee,D=new ee;function F(T){P.fromBufferAttribute(o,T),D.copy(P);const L=h[T];z.copy(L),z.sub(P.multiplyScalar(P.dot(L))).normalize(),C.crossVectors(D,L);const k=C.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,k)}for(let T=0,L=I.length;T<L;++T){const X=I[T],k=X.start,j=X.count;for(let ce=k,fe=k+j;ce<fe;ce+=3)F(e.getX(ce+0)),F(e.getX(ce+1)),F(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ra(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,p=new ee,g=new ee,_=new ee;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Un.fromBufferAttribute(e,i),Un.normalize(),e.setXYZ(i,Un.x,Un.y,Un.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let x=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[b++]=p[x++]}return new ra(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _E=0;class pu extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=$r,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==js&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new It().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new ee,Jd=new ee,Bc=new ee,vs=new ee,$d=new ee,zc=new ee,eh=new ee;class vE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Jd.copy(e).add(i).multiplyScalar(.5),Bc.copy(i).sub(e).normalize(),vs.copy(this.origin).sub(Jd);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Bc),h=vs.dot(this.direction),m=-vs.dot(Bc),p=vs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+p}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+p;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Jd).addScaledVector(Bc,v),x}intersectSphere(e,i){Ua.subVectors(e.center,this.origin);const r=Ua.dot(this.direction),o=Ua.dot(Ua)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,r,o,c){$d.subVectors(i,e),zc.subVectors(r,e),eh.crossVectors($d,zc);let u=this.direction.dot(eh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;vs.subVectors(this.origin,e);const m=h*this.direction.dot(zc.crossVectors(vs,zc));if(m<0)return null;const p=h*this.direction.dot($d.cross(vs));if(p<0||m+p>u)return null;const g=-h*vs.dot(eh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xp extends pu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const k_=new vn,Ws=new vE,Hc=new Sp,X_=new ee,Gc=new ee,Vc=new ee,kc=new ee,th=new ee,Xc=new ee,W_=new ee,Wc=new ee;class Ci extends pi{constructor(e=new wi,i=new xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Xc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(th.fromBufferAttribute(_,e),u?Xc.addScaledVector(th,g):Xc.addScaledVector(th.sub(i),g))}i.add(Xc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Hc.copy(r.boundingSphere),Hc.applyMatrix4(c),Ws.copy(e.ray).recast(e.near),!(Hc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Hc,X_)===null||Ws.origin.distanceToSquared(X_)>(e.far-e.near)**2))&&(k_.copy(c).invert(),Ws.copy(e.ray).applyMatrix4(k_),!(r.boundingBox!==null&&Ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ws)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=I,P=z;C<P;C+=3){const D=h.getX(C),F=h.getX(C+1),T=h.getX(C+2);o=qc(this,M,e,r,p,g,_,D,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=h.getX(y),z=h.getX(y+1),C=h.getX(y+2);o=qc(this,u,e,r,p,g,_,I,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let C=I,P=z;C<P;C+=3){const D=C,F=C+1,T=C+2;o=qc(this,M,e,r,p,g,_,D,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=y,z=y+1,C=y+2;o=qc(this,u,e,r,p,g,_,I,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function SE(a,e,i,r,o,c,u,h){let m;if(e.side===ti?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Fa,h),m===null)return null;Wc.copy(h),Wc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Wc);return p<i.near||p>i.far?null:{distance:p,point:Wc.clone(),object:a}}function qc(a,e,i,r,o,c,u,h,m,p){a.getVertexPosition(h,Gc),a.getVertexPosition(m,Vc),a.getVertexPosition(p,kc);const g=SE(a,e,i,r,Gc,Vc,kc,W_);if(g){const _=new ee;Gi.getBarycoord(W_,Gc,Vc,kc,_),o&&(g.uv=Gi.getInterpolatedAttribute(o,h,m,p,_,new It)),c&&(g.uv1=Gi.getInterpolatedAttribute(c,h,m,p,_,new It)),u&&(g.normal=Gi.getInterpolatedAttribute(u,h,m,p,_,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new ee,materialIndex:0};Gi.getNormal(Gc,Vc,kc,v.normal),g.face=v,g.barycoord=_}return g}class xE extends Xn{constructor(e=null,i=1,r=1,o,c,u,h,m,p=Bn,g=Bn,_,v){super(null,u,h,m,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new ee,ME=new ee,yE=new ut;class Zs{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=nh.subVectors(r,i).cross(ME.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(nh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yE.getNormalMatrix(e),o=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Sp,EE=new It(.5,.5),Yc=new ee;class fS{constructor(e=new Zs,i=new Zs,r=new Zs,o=new Zs,c=new Zs,u=new Zs){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],y=c[10],M=c[11],I=c[12],z=c[13],C=c[14],P=c[15];if(o[0].setComponents(p-u,x-g,M-b,P-I).normalize(),o[1].setComponents(p+u,x+g,M+b,P+I).normalize(),o[2].setComponents(p+h,x+_,M+w,P+z).normalize(),o[3].setComponents(p-h,x-_,M-w,P-z).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(p-m,x-v,M-y,P-C).normalize();else if(o[4].setComponents(p-m,x-v,M-y,P-C).normalize(),i===ia)o[5].setComponents(p+m,x+v,M+y,P+C).normalize();else if(i===cu)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const i=EE.distanceTo(e.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Yc.x=o.normal.x>0?e.max.x:e.min.x,Yc.y=o.normal.y>0?e.max.y:e.min.y,Yc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dS extends Xn{constructor(e=[],i=$s,r,o,c,u,h,m,p,g){super(e,i,r,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends Xn{constructor(e,i,r,o,c,u,h,m,p){super(e,i,r,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends Xn{constructor(e,i,r=oa,o,c,u,h=Bn,m=Bn,p,g=za,_=1){if(g!==za&&g!==Qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bE extends ro{constructor(e,i=oa,r=$s,o,c,u=Bn,h=Bn,m,p=za){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xl extends wi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Ri(p,3)),this.setAttribute("normal",new Ri(g,3)),this.setAttribute("uv",new Ri(_,2));function b(w,y,M,I,z,C,P,D,F,T,L){const X=C/F,k=P/T,j=C/2,ce=P/2,fe=D/2,q=F+1,O=T+1;let H=0,$=0;const ge=new ee;for(let xe=0;xe<O;xe++){const U=xe*k-ce;for(let K=0;K<q;K++){const Me=K*X-j;ge[w]=Me*I,ge[y]=U*z,ge[M]=fe,p.push(ge.x,ge.y,ge.z),ge[w]=0,ge[y]=0,ge[M]=D>0?1:-1,g.push(ge.x,ge.y,ge.z),_.push(K/F),_.push(1-xe/T),H+=1}}for(let xe=0;xe<T;xe++)for(let U=0;U<F;U++){const K=v+U+q*xe,Me=v+U+q*(xe+1),we=v+(U+1)+q*(xe+1),Ge=v+(U+1)+q*xe;m.push(K,Me,Ge),m.push(Me,we,Ge),$+=6}h.addGroup(x,$,L),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class TE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=r[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new It:new ee);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],h=new ee,m=new vn;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new ee)}c[0]=new ee,u[0]=new ee;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),v<=p&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(vt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(vt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Mp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,g,_){let v=(u-c)/p-(h-c)/(p+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const q_=new ee,Y_=new ee,ih=new Mp,ah=new Mp,sh=new Mp;class AE extends TE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(Y_.subVectors(o[0],o[1]).add(o[0]),p=Y_);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(q_.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=q_),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),ih.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,b,w,y),ah.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,b,w,y),sh.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,b,w,y)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),ah.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),sh.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return r.set(ih.calc(m),ah.calc(m),sh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Js extends wi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),p=h+1,g=m+1,_=e/h,v=i/m,x=[],b=[],w=[],y=[];for(let M=0;M<g;M++){const I=M*v-u;for(let z=0;z<p;z++){const C=z*_-c;b.push(C,-I,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let I=0;I<h;I++){const z=I+p*M,C=I+p*(M+1),P=I+1+p*(M+1),D=I+1+p*M;x.push(z,C,D),x.push(C,P,D)}this.setIndex(x),this.setAttribute("position",new Ri(b,3)),this.setAttribute("normal",new Ri(w,3)),this.setAttribute("uv",new Ri(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}function oo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(Z_(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Z_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function Yn(a){const e={};for(let i=0;i<a.length;i++){const r=oo(a[i]);for(const o in r)e[o]=r[o]}return e}function Z_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function RE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function mS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const CE={clone:oo,merge:Yn};var wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends pu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Ct().setHex(o.value);break;case"v2":this.uniforms[r].value=new It().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new hn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new vn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class LE extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NE extends pu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UE extends pu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zc=new ee,jc=new co,Ji=new ee;class gS extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zc,jc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,jc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Zc,jc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,jc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new ee,j_=new It,K_=new It;class Ti extends gS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,i){return this.getViewBounds(e,j_,K_),i.subVectors(K_,j_)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class _S extends gS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Yr=-90,Zr=1;class OE extends pi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(Yr,Zr,e,i);o.layers=this.layers,this.add(o);const c=new Ti(Yr,Zr,e,i);c.layers=this.layers,this.add(c);const u=new Ti(Yr,Zr,e,i);u.layers=this.layers,this.add(u);const h=new Ti(Yr,Zr,e,i);h.layers=this.layers,this.add(h);const m=new Ti(Yr,Zr,e,i);m.layers=this.layers,this.add(m);const p=new Ti(Yr,Zr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const p of i)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class PE extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dp=class Dp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Dp.prototype.isMatrix2=!0;let Q_=Dp;function J_(a,e,i,r){const o=IE(r);switch(i){case nS:return a*e;case aS:return a*e/o.components*o.byteLength;case dp:return a*e/o.components*o.byteLength;case er:return a*e*2/o.components*o.byteLength;case hp:return a*e*2/o.components*o.byteLength;case iS:return a*e*3/o.components*o.byteLength;case ki:return a*e*4/o.components*o.byteLength;case pp:return a*e*4/o.components*o.byteLength;case eu:case tu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Dh:return Math.max(a,16)*Math.max(e,8)/4;case Rh:case wh:return Math.max(a,8)*Math.max(e,8)/2;case Lh:case Nh:case Oh:case Ph:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Uh:case su:case Ih:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ru:case np:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IE(a){switch(a){case Ai:case Jv:return{byteLength:1,components:1};case ml:case $v:case Ba:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case oa:case cp:case na:return{byteLength:4,components:1};case eS:case tS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vS(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function FE(a){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=a.SHORT;else if(p instanceof Uint32Array)x=a.UNSIGNED_INT;else if(p instanceof Int32Array)x=a.INT;else if(p instanceof Int8Array)x=a.BYTE;else if(p instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const g=m.array,_=m.updateRanges;if(a.bindBuffer(p,h),_.length===0)a.bufferSubData(p,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];a.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QE=`#ifdef USE_IRIDESCENCE
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
#endif`,JE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Db=`#ifdef USE_ENVMAP
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
#endif`,Lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,Ib=`uniform sampler2D dfgLUT;
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
}`,Fb=`
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zb=`#if defined( USE_POINTS_UV )
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
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,tT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oT=`#ifdef USE_NORMALMAP
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
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ET=`float getShadowMask() {
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
}`,bT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,AT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RT=`#ifdef USE_SKINNING
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
#endif`,CT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#ifdef USE_TRANSMISSION
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
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
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`#include <common>
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
}`,WT=`#if DEPTH_PACKING == 3200
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
}`,qT=`#define DISTANCE
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
}`,YT=`#define DISTANCE
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`uniform float scale;
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
}`,QT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,$T=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,s1=`#define NORMAL
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
}`,r1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,f1=`#define TOON
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
}`,d1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:BE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:VE,alphatest_pars_fragment:kE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:ZE,beginnormal_vertex:jE,bsdfs:KE,iridescence_fragment:QE,bumpmap_pars_fragment:JE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:tb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:ab,color_pars_vertex:sb,color_vertex:rb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:fb,emissivemap_fragment:db,emissivemap_pars_fragment:hb,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:Sb,envmap_physical_pars_fragment:Db,envmap_vertex:xb,fog_vertex:Mb,fog_pars_vertex:yb,fog_fragment:Eb,fog_pars_fragment:bb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:wb,lights_toon_fragment:Lb,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Ob,lights_physical_fragment:Pb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Fb,lights_fragment_maps:Bb,lights_fragment_end:zb,lightprobes_pars_fragment:Hb,logdepthbuf_fragment:Gb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Xb,map_fragment:Wb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:Zb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:$b,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:aT,normal_pars_vertex:sT,normal_vertex:rT,normalmap_pars_fragment:oT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:fT,opaque_fragment:dT,packing:hT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:_T,roughnessmap_fragment:vT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:MT,shadowmap_vertex:yT,shadowmask_pars_fragment:ET,skinbase_vertex:bT,skinning_pars_vertex:TT,skinning_vertex:AT,skinnormal_vertex:RT,specularmap_fragment:CT,specularmap_pars_fragment:wT,tonemapping_fragment:DT,tonemapping_pars_fragment:LT,transmission_fragment:NT,transmission_pars_fragment:UT,uv_pars_fragment:OT,uv_pars_vertex:PT,uv_vertex:IT,worldpos_vertex:FT,background_vert:BT,background_frag:zT,backgroundCube_vert:HT,backgroundCube_frag:GT,cube_vert:VT,cube_frag:kT,depth_vert:XT,depth_frag:WT,distance_vert:qT,distance_frag:YT,equirect_vert:ZT,equirect_frag:jT,linedashed_vert:KT,linedashed_frag:QT,meshbasic_vert:JT,meshbasic_frag:$T,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:a1,meshnormal_frag:s1,meshphong_vert:r1,meshphong_frag:o1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:f1,points_vert:d1,points_frag:h1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:_1},ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ea={basic:{uniforms:Yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Yn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Yn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Yn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Yn([ke.points,ke.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Yn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Yn([ke.common,ke.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Yn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Yn([ke.sprite,ke.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Yn([ke.common,ke.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Yn([ke.lights,ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ea.physical={uniforms:Yn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Kc={r:0,b:0,g:0},v1=new vn,SS=new ut;SS.set(-1,0,0,0,1,0,0,0,1);function S1(a,e,i,r,o,c){const u=new Ct(0);let h=o===!0?0:1,m,p,g=null,_=0,v=null;function x(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const C=I.backgroundBlurriness>0;z=e.get(z,C)}return z}function b(I){let z=!1;const C=x(I);C===null?y(u,h):C&&C.isColor&&(y(C,1),z=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(I,z){const C=x(z);C&&(C.isCubeTexture||C.mapping===hu)?(p===void 0&&(p=new Ci(new xl(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:oo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(SS),p.material.toneMapped=Rt.getTransfer(C.colorSpace)!==qt,(g!==C||_!==C.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ci(new Js(2,2),new Di({name:"BackgroundMaterial",uniforms:oo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,z){I.getRGB(Kc,mS(a)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,z,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,z=1){u.set(I),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:b,addToRenderList:w,dispose:M}}function x1(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(k,j,ce,fe,q){let O=!1;const H=_(k,fe,ce,j);c!==H&&(c=H,p(c.object)),O=x(k,fe,ce,q),O&&b(k,fe,ce,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,C(k,j,ce,fe),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function p(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function _(k,j,ce,fe){const q=fe.wireframe===!0;let O=r[j.id];O===void 0&&(O={},r[j.id]=O);const H=k.isInstancedMesh===!0?k.id:0;let $=O[H];$===void 0&&($={},O[H]=$);let ge=$[ce.id];ge===void 0&&(ge={},$[ce.id]=ge);let xe=ge[q];return xe===void 0&&(xe=v(m()),ge[q]=xe),xe}function v(k){const j=[],ce=[],fe=[];for(let q=0;q<i;q++)j[q]=0,ce[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:fe,object:k,attributes:{},index:null}}function x(k,j,ce,fe){const q=c.attributes,O=j.attributes;let H=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){const U=q[ge];let K=O[ge];if(K===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==fe}function b(k,j,ce,fe){const q={},O=j.attributes;let H=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){let U=O[ge];U===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),q[ge]=K,H++}c.attributes=q,c.attributesNum=H,c.index=fe}function w(){const k=c.newAttributes;for(let j=0,ce=k.length;j<ce;j++)k[j]=0}function y(k){M(k,0)}function M(k,j){const ce=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ce[k]=1,fe[k]===0&&(a.enableVertexAttribArray(k),fe[k]=1),q[k]!==j&&(a.vertexAttribDivisor(k,j),q[k]=j)}function I(){const k=c.newAttributes,j=c.enabledAttributes;for(let ce=0,fe=j.length;ce<fe;ce++)j[ce]!==k[ce]&&(a.disableVertexAttribArray(ce),j[ce]=0)}function z(k,j,ce,fe,q,O,H){H===!0?a.vertexAttribIPointer(k,j,ce,q,O):a.vertexAttribPointer(k,j,ce,fe,q,O)}function C(k,j,ce,fe){w();const q=fe.attributes,O=ce.getAttributes(),H=j.defaultAttributeValues;for(const $ in O){const ge=O[$];if(ge.location>=0){let xe=q[$];if(xe===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor)),xe!==void 0){const U=xe.normalized,K=xe.itemSize,Me=e.get(xe);if(Me===void 0)continue;const we=Me.buffer,Ge=Me.type,re=Me.bytesPerElement,Ee=Ge===a.INT||Ge===a.UNSIGNED_INT||xe.gpuType===cp;if(xe.isInterleavedBufferAttribute){const Ae=xe.data,qe=Ae.stride,nt=xe.offset;if(Ae.isInstancedInterleavedBuffer){for(let et=0;et<ge.locationSize;et++)M(ge.location+et,Ae.meshPerAttribute);k.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let et=0;et<ge.locationSize;et++)y(ge.location+et);a.bindBuffer(a.ARRAY_BUFFER,we);for(let et=0;et<ge.locationSize;et++)z(ge.location+et,K/ge.locationSize,Ge,U,qe*re,(nt+K/ge.locationSize*et)*re,Ee)}else{if(xe.isInstancedBufferAttribute){for(let Ae=0;Ae<ge.locationSize;Ae++)M(ge.location+Ae,xe.meshPerAttribute);k.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ae=0;Ae<ge.locationSize;Ae++)y(ge.location+Ae);a.bindBuffer(a.ARRAY_BUFFER,we);for(let Ae=0;Ae<ge.locationSize;Ae++)z(ge.location+Ae,K/ge.locationSize,Ge,U,K*re,K/ge.locationSize*Ae*re,Ee)}}else if(H!==void 0){const U=H[$];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(ge.location,U);break;case 3:a.vertexAttrib3fv(ge.location,U);break;case 4:a.vertexAttrib4fv(ge.location,U);break;default:a.vertexAttrib1fv(ge.location,U)}}}}I()}function P(){L();for(const k in r){const j=r[k];for(const ce in j){const fe=j[ce];for(const q in fe){const O=fe[q];for(const H in O)g(O[H].object),delete O[H];delete fe[q]}}delete r[k]}}function D(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const ce in j){const fe=j[ce];for(const q in fe){const O=fe[q];for(const H in O)g(O[H].object),delete O[H];delete fe[q]}}delete r[k.id]}function F(k){for(const j in r){const ce=r[j];for(const fe in ce){const q=ce[fe];if(q[k.id]===void 0)continue;const O=q[k.id];for(const H in O)g(O[H].object),delete O[H];delete q[k.id]}}}function T(k){for(const j in r){const ce=r[j],fe=k.isInstancedMesh===!0?k.id:0,q=ce[fe];if(q!==void 0){for(const O in q){const H=q[O];for(const $ in H)g(H[$].object),delete H[$];delete q[O]}delete ce[fe],Object.keys(ce).length===0&&delete r[j]}}}function L(){X(),u=!0,c!==o&&(c=o,p(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function M1(a,e,i){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),i.update(p,r,1)}function u(m,p,g){g!==0&&(a.drawArraysInstanced(r,m,p,g),i.update(p,r,g))}function h(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,g);let v=0;for(let x=0;x<g;x++)v+=p[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function y1(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==ki&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ai&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==na&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(st("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),D=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:C,maxSamples:P,samples:D}}function E1(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Zs,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):p();else{const I=c?0:r,z=I*4;let C=M.clippingState||null;m.value=C,C=g(b,v,z,x);for(let P=0;P!==z;++P)C[P]=i[P];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const M=x+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,C=x;z!==w;++z,C+=4)u.copy(_[z]).applyMatrix4(I,h),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Es=4,$_=[.125,.215,.35,.446,.526,.582],Ks=20,b1=256,sl=new _S,ev=new Ct;let rh=null,oh=0,lh=0,ch=!1;const T1=new ee;class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=T1}=c;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===$s||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ba,format:ki,colorSpace:ou,depthBuffer:!1},o=nv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A1(c)),this._blurMaterial=C1(c,e,i),this._ggxMaterial=R1(c,e,i)}return o}_compileMaterial(e){const i=new Ci(new wi,e);this._renderer.compile(i,sl)}_sceneToCubeUV(e,i,r,o,c){const m=new Ti(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(ev),_.toneMapping=aa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new xl,new xp({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,M=!0):(y.color.copy(ev),M=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const P=this._cubeSize;jr(o,C*P,z>2?P:0,P,P),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===$s||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;jr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,sl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-Es?r-b+Es:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,jr(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,jr(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,sl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ks-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):Ks;y>Ks&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ks}`);const M=[];let I=0;for(let F=0;F<Ks;++F){const T=F/w,L=Math.exp(-T*T/2);M.push(L),F===0?I+=L:F<y&&(I+=2*L)}for(let F=0;F<M.length;F++)M[F]=M[F]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:z}=this;v.dTheta.value=b,v.mipInt.value=z-r;const C=this._sizeLods[o],P=3*C*(o>z-Es?o-z+Es:0),D=4*(this._cubeSize-C);jr(i,P,D,3*C,2*C),m.setRenderTarget(i),m.render(_,sl)}}function A1(a){const e=[],i=[],r=[];let o=a;const c=a-Es+1+$_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Es?m=$_[u-a+Es-1]:u===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,w=3,y=2,M=1,I=new Float32Array(w*b*x),z=new Float32Array(y*b*x),C=new Float32Array(M*b*x);for(let D=0;D<x;D++){const F=D%3*2/3-1,T=D>2?0:-1,L=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];I.set(L,w*b*D),z.set(v,y*b*D);const X=[D,D,D,D,D,D];C.set(X,M*b*D)}const P=new wi;P.setAttribute("position",new ra(I,w)),P.setAttribute("uv",new ra(z,y)),P.setAttribute("faceIndex",new ra(C,M)),r.push(new Ci(P,null)),o>Es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function nv(a,e,i){const r=new sa(a,e,i);return r.texture.mapping=hu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jr(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function R1(a,e,i){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function C1(a,e,i){const r=new Float32Array(Ks),o=new ee(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function iv(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function av(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}class xS extends sa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new dS(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xl(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Pa});c.uniforms.tEquirect.value=i;const u=new Ci(o,c),h=i.minFilter;return i.minFilter===ys&&(i.minFilter=An),new OE(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function w1(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Nd||x===Ud)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new xS(b.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",p),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===Nd||x===Ud,w=x===$s||x===so;if(b||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new tv(a)),y=b?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return b&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new tv(a)),y=b?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Nd?v.mapping=$s:x===Ud&&(v.mapping=so),v}function m(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function p(v){const x=v.target;x.removeEventListener("dispose",p);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function D1(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&eo("WebGLRenderer: "+r+" extension not supported."),o}}}function L1(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const I=x.array;w=x.version;for(let z=0,C=I.length;z<C;z+=3){const P=I[z+0],D=I[z+1],F=I[z+2];v.push(P,D,D,F,F,P)}}else{const I=b.array;w=b.version;for(let z=0,C=I.length/3-1;z<C;z+=3){const P=z+0,D=z+1,F=z+2;v.push(P,D,D,F,F,P)}}const y=new(b.count>=65535?uS:cS)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function N1(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function p(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function U1(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function O1(a,e,i){const r=new WeakMap,o=new hn;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let X=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var x=X;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let P=h.attributes.position.count*C,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*D*4*_),T=new rS(F,P,D,_);T.type=na,T.needsUpdate=!0;const L=C*4;for(let k=0;k<_;k++){const j=M[k],ce=I[k],fe=z[k],q=P*D*4*k;for(let O=0;O<j.count;O++){const H=O*L;b===!0&&(o.fromBufferAttribute(j,O),F[q+H+0]=o.x,F[q+H+1]=o.y,F[q+H+2]=o.z,F[q+H+3]=0),w===!0&&(o.fromBufferAttribute(ce,O),F[q+H+4]=o.x,F[q+H+5]=o.y,F[q+H+6]=o.z,F[q+H+7]=0),y===!0&&(o.fromBufferAttribute(fe,O),F[q+H+8]=o.x,F[q+H+9]=o.y,F[q+H+10]=o.z,F[q+H+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new It(P,D)},r.set(h,v),h.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function P1(a,e,i,r,o){let c=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=e.get(p,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const I1={[Xv]:"LINEAR_TONE_MAPPING",[Wv]:"REINHARD_TONE_MAPPING",[qv]:"CINEON_TONE_MAPPING",[Yv]:"ACES_FILMIC_TONE_MAPPING",[jv]:"AGX_TONE_MAPPING",[Kv]:"NEUTRAL_TONE_MAPPING",[Zv]:"CUSTOM_TONE_MAPPING"};function F1(a,e,i,r,o,c){const u=new sa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new ro(e,i):void 0}),h=new sa(e,i,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),m=new wi;m.setAttribute("position",new Ri([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ri([0,2,0,0,2,0],2));const p=new LE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ci(m,p),_=new _S(-1,1,1,-1,0,1);let v=null,x=null,b=!1,w,y=null,M=[],I=!1;this.setSize=function(z,C){u.setSize(z,C),h.setSize(z,C);for(let P=0;P<M.length;P++){const D=M[P];D.setSize&&D.setSize(z,C)}},this.setEffects=function(z){M=z,I=M.length>0&&M[0].isRenderPass===!0;const C=u.width,P=u.height;for(let D=0;D<M.length;D++){const F=M[D];F.setSize&&F.setSize(C,P)}},this.begin=function(z,C){if(b||z.toneMapping===aa&&M.length===0)return!1;if(y=C,C!==null){const P=C.width,D=C.height;(u.width!==P||u.height!==D)&&this.setSize(P,D)}return I===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=aa,!0},this.hasRenderPass=function(){return I},this.end=function(z,C){z.toneMapping=w,b=!0;let P=u,D=h;for(let F=0;F<M.length;F++){const T=M[F];if(T.enabled!==!1&&(T.render(z,D,P,C),T.needsSwap!==!1)){const L=P;P=D,D=L}}if(v!==z.outputColorSpace||x!==z.toneMapping){v=z.outputColorSpace,x=z.toneMapping,p.defines={},Rt.getTransfer(v)===qt&&(p.defines.SRGB_TRANSFER="");const F=I1[x];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,z.setRenderTarget(y),z.render(g,_),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const MS=new Xn,ip=new ro(1,1),yS=new rS,ES=new sE,bS=new dS,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function uo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=sv[o];if(c===void 0&&(c=new Float32Array(o),sv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function wn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Dn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function gu(a,e){let i=rv[e];i===void 0&&(i=new Int32Array(e),rv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function B1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function z1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;a.uniform2fv(this.addr,e),Dn(i,e)}}function H1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(wn(i,e))return;a.uniform3fv(this.addr,e),Dn(i,e)}}function G1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;a.uniform4fv(this.addr,e),Dn(i,e)}}function V1(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(wn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Dn(i,e)}else{if(wn(i,r))return;cv.set(r),a.uniformMatrix2fv(this.addr,!1,cv),Dn(i,r)}}function k1(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(wn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Dn(i,e)}else{if(wn(i,r))return;lv.set(r),a.uniformMatrix3fv(this.addr,!1,lv),Dn(i,r)}}function X1(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(wn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Dn(i,e)}else{if(wn(i,r))return;ov.set(r),a.uniformMatrix4fv(this.addr,!1,ov),Dn(i,r)}}function W1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function q1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;a.uniform2iv(this.addr,e),Dn(i,e)}}function Y1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;a.uniform3iv(this.addr,e),Dn(i,e)}}function Z1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;a.uniform4iv(this.addr,e),Dn(i,e)}}function j1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function K1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;a.uniform2uiv(this.addr,e),Dn(i,e)}}function Q1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;a.uniform3uiv(this.addr,e),Dn(i,e)}}function J1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;a.uniform4uiv(this.addr,e),Dn(i,e)}}function $1(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(ip.compareFunction=i.isReversedDepthBuffer()?gp:mp,c=ip):c=MS,i.setTexture2D(e||c,o)}function eA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||ES,o)}function tA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||bS,o)}function nA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||yS,o)}function iA(a){switch(a){case 5126:return B1;case 35664:return z1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return k1;case 35676:return X1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return Z1;case 5125:return j1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return nA}}function aA(a,e){a.uniform1fv(this.addr,e)}function sA(a,e){const i=uo(e,this.size,2);a.uniform2fv(this.addr,i)}function rA(a,e){const i=uo(e,this.size,3);a.uniform3fv(this.addr,i)}function oA(a,e){const i=uo(e,this.size,4);a.uniform4fv(this.addr,i)}function lA(a,e){const i=uo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function cA(a,e){const i=uo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function uA(a,e){const i=uo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function fA(a,e){a.uniform1iv(this.addr,e)}function dA(a,e){a.uniform2iv(this.addr,e)}function hA(a,e){a.uniform3iv(this.addr,e)}function pA(a,e){a.uniform4iv(this.addr,e)}function mA(a,e){a.uniform1uiv(this.addr,e)}function gA(a,e){a.uniform2uiv(this.addr,e)}function _A(a,e){a.uniform3uiv(this.addr,e)}function vA(a,e){a.uniform4uiv(this.addr,e)}function SA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=ip:u=MS;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function xA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||ES,c[u])}function MA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||bS,c[u])}function yA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||yS,c[u])}function EA(a){switch(a){case 5126:return aA;case 35664:return sA;case 35665:return rA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return dA;case 35668:case 35672:return hA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return yA}}class bA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=iA(i.type)}}class TA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=EA(i.type)}}class AA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function uv(a,e){a.seq.push(e),a.map[e.id]=e}function RA(a,e,i){const r=a.name,o=r.length;for(uh.lastIndex=0;;){const c=uh.exec(r),u=uh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){uv(i,p===void 0?new bA(h,a,e):new TA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new AA(h),uv(i,_)),i=_}}}class au{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);RA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function fv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const CA=37297;let wA=0;function DA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const dv=new ut;function LA(a){Rt._getMatrix(dv,Rt.workingColorSpace,a);const e=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(a)){case lu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function hv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+DA(a.getShaderSource(e),h)}else return c}function NA(a,e){const i=LA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const UA={[Xv]:"Linear",[Wv]:"Reinhard",[qv]:"Cineon",[Yv]:"ACESFilmic",[jv]:"AgX",[Kv]:"Neutral",[Zv]:"Custom"};function OA(a,e){const i=UA[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new ee;function PA(){Rt.getLuminanceCoefficients(Qc);const a=Qc.x.toFixed(4),e=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function FA(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function BA(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function cl(a){return a!==""}function pv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(a){return a.replace(zA,GA)}const HA=new Map;function GA(a,e){let i=pt[e];if(i===void 0){const r=HA.get(e);if(r!==void 0)i=pt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ap(i)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(a){return a.replace(VA,kA)}function kA(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function _v(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const XA={[$c]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function WA(a){return XA[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qA={[$s]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function YA(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":qA[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZA={[so]:"ENVMAP_MODE_REFRACTION"};function jA(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":ZA[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KA={[kv]:"ENVMAP_BLENDING_MULTIPLY",[Ey]:"ENVMAP_BLENDING_MIX",[by]:"ENVMAP_BLENDING_ADD"};function QA(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":KA[a.combine]||"ENVMAP_BLENDING_NONE"}function JA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $A(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=WA(i),p=YA(i),g=jA(i),_=QA(i),v=JA(i),x=IA(i),b=FA(c),w=o.createProgram();let y,M,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),M.length>0&&(M+=`
`)):(y=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),M=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==aa?"#define TONE_MAPPING":"",i.toneMapping!==aa?pt.tonemapping_pars_fragment:"",i.toneMapping!==aa?OA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,NA("linearToOutputTexel",i.outputColorSpace),PA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),u=ap(u),u=pv(u,i),u=mv(u,i),h=ap(h),h=pv(h,i),h=mv(h,i),u=gv(u),h=gv(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=I+y+u,C=I+M+h,P=fv(o,o.VERTEX_SHADER,z),D=fv(o,o.FRAGMENT_SHADER,C);o.attachShader(w,P),o.attachShader(w,D),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(k){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(P)||"",fe=o.getShaderInfoLog(D)||"",q=j.trim(),O=ce.trim(),H=fe.trim();let $=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,P,D);else{const xe=hv(o,P,"vertex"),U=hv(o,D,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+xe+`
`+U)}else q!==""?st("WebGLProgram: Program Info Log:",q):(O===""||H==="")&&(ge=!1);ge&&(k.diagnostics={runnable:$,programLog:q,vertexShader:{log:O,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(P),o.deleteShader(D),T=new au(o,w),L=BA(o,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(w,CA)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=D,this}let e2=0;class t2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new n2(e),i.set(e,r)),r}}class n2{constructor(e){this.id=e2++,this.code=e,this.usedTimes=0}}function i2(a){return a===er||a===su||a===ru}function a2(a,e,i,r,o,c){const u=new oS,h=new t2,m=new Set,p=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,X,k,j,ce){const fe=k.fog,q=j.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||O,H),ge=$&&$.mapping===hu?$.image.height:null,xe=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const U=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=U!==void 0?U.length:0;let Me=0;q.morphAttributes.position!==void 0&&(Me=1),q.morphAttributes.normal!==void 0&&(Me=2),q.morphAttributes.color!==void 0&&(Me=3);let we,Ge,re,Ee;if(xe){const Ve=ea[xe];we=Ve.vertexShader,Ge=Ve.fragmentShader}else{we=T.vertexShader,Ge=T.fragmentShader;const Ve=h.getVertexShaderStage(T),dt=h.getFragmentShaderStage(T);h.update(T,Ve,dt),re=Ve.id,Ee=dt.id}const Ae=a.getRenderTarget(),qe=a.state.buffers.depth.getReversed(),nt=j.isInstancedMesh===!0,et=j.isBatchedMesh===!0,Yt=!!T.map,lt=!!T.matcap,mt=!!$,gt=!!T.aoMap,ot=!!T.lightMap,Zt=!!T.bumpMap&&T.wireframe===!1,Bt=!!T.normalMap,St=!!T.displacementMap,Gt=!!T.emissiveMap,Vt=!!T.metalnessMap,Jt=!!T.roughnessMap,Z=T.anisotropy>0,Lt=T.clearcoat>0,xt=T.dispersion>0,N=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,oe=Z&&!!T.anisotropyMap,pe=Lt&&!!T.clearcoatMap,Le=Lt&&!!T.clearcoatNormalMap,Pe=Lt&&!!T.clearcoatRoughnessMap,he=N&&!!T.iridescenceMap,me=N&&!!T.iridescenceThicknessMap,Ne=E&&!!T.sheenColorMap,He=E&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Fe=!!T.specularColorMap,be=!!T.specularIntensityMap,Ue=Q&&!!T.transmissionMap,Oe=Q&&!!T.thicknessMap,V=!!T.gradientMap,Re=!!T.alphaMap,ue=T.alphaTest>0,Ce=!!T.alphaHash,De=!!T.extensions;let _e=aa;T.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(_e=a.toneMapping);const Xe={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:Ge,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:et,batchingColor:et&&j._colorsTexture!==null,instancing:nt,instancingColor:nt&&j.instanceColor!==null,instancingMorph:nt&&j.morphTexture!==null,outputColorSpace:Ae===null?a.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:lt,envMap:mt,envMapMode:mt&&$.mapping,envMapCubeUVHeight:ge,aoMap:gt,lightMap:ot,bumpMap:Zt,normalMap:Bt,displacementMap:St,emissiveMap:Gt,normalMapObjectSpace:Bt&&T.normalMapType===Ry,normalMapTangentSpace:Bt&&T.normalMapType===T_,packedNormalMap:Bt&&T.normalMapType===T_&&i2(T.normalMap.format),metalnessMap:Vt,roughnessMap:Jt,anisotropy:Z,anisotropyMap:oe,clearcoat:Lt,clearcoatMap:pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Pe,dispersion:xt,iridescence:N,iridescenceMap:he,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Ne,sheenRoughnessMap:He,specularMap:Ie,specularColorMap:Fe,specularIntensityMap:be,transmission:Q,transmissionMap:Ue,thicknessMap:Oe,gradientMap:V,opaque:T.transparent===!1&&T.blending===$r&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:Ce,combine:T.combine,mapUv:Yt&&b(T.map.channel),aoMapUv:gt&&b(T.aoMap.channel),lightMapUv:ot&&b(T.lightMap.channel),bumpMapUv:Zt&&b(T.bumpMap.channel),normalMapUv:Bt&&b(T.normalMap.channel),displacementMapUv:St&&b(T.displacementMap.channel),emissiveMapUv:Gt&&b(T.emissiveMap.channel),metalnessMapUv:Vt&&b(T.metalnessMap.channel),roughnessMapUv:Jt&&b(T.roughnessMap.channel),anisotropyMapUv:oe&&b(T.anisotropyMap.channel),clearcoatMapUv:pe&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&b(T.sheenRoughnessMap.channel),specularMapUv:Ie&&b(T.specularMap.channel),specularColorMapUv:Fe&&b(T.specularColorMap.channel),specularIntensityMapUv:be&&b(T.specularIntensityMap.channel),transmissionMapUv:Ue&&b(T.transmissionMap.channel),thicknessMapUv:Oe&&b(T.thicknessMap.channel),alphaMapUv:Re&&b(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Bt||Z),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Yt||Re),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&Bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:qe,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Me,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:_e,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:Gt&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ta,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)L.push(X),L.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(M(L,T),I(L,T),L.push(a.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function M(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function I(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const L=x[T.type];let X;if(L){const k=ea[L];X=CE.clone(k.uniforms)}else X=T.uniforms;return X}function C(T,L){let X=g.get(L);return X!==void 0?++X.usedTimes:(X=new $A(a,L,T,o),p.push(X),g.set(L,X)),X}function P(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function D(T){h.remove(T)}function F(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:P,releaseShaderCache:D,programs:p,dispose:F}}function s2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function r2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function vv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Sv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,y,M){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=b,I.materialVariant=u(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=y,I.group=M),e++,I}function m(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.push(I):b.transparent===!0?o.push(I):i.push(I)}function p(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.unshift(I):b.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,b){i.length>1&&i.sort(v||r2),r.length>1&&r.sort(x||vv),o.length>1&&o.sort(x||vv),b&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:_,sort:g}}function o2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Sv,a.set(r,[u])):o>=c.length?(u=new Sv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function l2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Ct};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function c2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let u2=0;function f2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function d2(a){const e=new l2,i=c2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,c=new vn,u=new vn;function h(p){let g=0,_=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let x=0,b=0,w=0,y=0,M=0,I=0,z=0,C=0,P=0,D=0,F=0;p.sort(f2);for(let L=0,X=p.length;L<X;L++){const k=p[L],j=k.color,ce=k.intensity,fe=k.distance;let q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===er?q=k.shadow.map.texture:q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*ce,_+=j.g*ce,v+=j.b*ce;else if(k.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(k.sh.coefficients[O],ce);F++}else if(k.isDirectionalLight){const O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,$=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=k.shadow.matrix,I++}r.directional[x]=O,x++}else if(k.isSpotLight){const O=e.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(j).multiplyScalar(ce),O.distance=fe,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,r.spot[w]=O;const H=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&D++),r.spotLightMatrix[w]=H.matrix,k.castShadow){const $=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=q,C++}w++}else if(k.isRectAreaLight){const O=e.get(k);O.color.copy(j).multiplyScalar(ce),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=O,y++}else if(k.isPointLight){const O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){const H=k.shadow,$=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=q,r.pointShadowMatrix[b]=k.shadow.matrix,z++}r.point[b]=O,b++}else if(k.isHemisphereLight){const O=e.get(k);O.skyColor.copy(k.color).multiplyScalar(ce),O.groundColor.copy(k.groundColor).multiplyScalar(ce),r.hemi[M]=O,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==I||T.numPointShadows!==z||T.numSpotShadows!==C||T.numSpotMaps!==P||T.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=F,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=I,T.numPointShadows=z,T.numSpotShadows=C,T.numSpotMaps=P,T.numLightProbes=F,r.version=u2++)}function m(p,g){let _=0,v=0,x=0,b=0,w=0;const y=g.matrixWorldInverse;for(let M=0,I=p.length;M<I;M++){const z=p[M];if(z.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(z.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(z.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function xv(a){const e=new d2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function p(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function h2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new xv(a),e.set(o,[h])):c>=u.length?(h=new xv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const p2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m2=`uniform sampler2D shadow_pass;
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
}`,g2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],_2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Mv=new vn,rl=new ee,fh=new ee;function v2(a,e,i){let r=new fS;const o=new It,c=new It,u=new hn,h=new NE,m=new UE,p={},g=i.maxTextureSize,_={[Fa]:ti,[ti]:Fa,[ta]:ta},v=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:p2,fragmentShader:m2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new wi;b.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ci(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let M=this.type;this.render=function(D,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===ay&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$c);const L=a.getRenderTarget(),X=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Pa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=M!==this.type;ce&&F.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=D.length;fe<q;fe++){const O=D[fe],H=O.shadow;if(H===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ol){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new sa(o.x,o.y,{format:er,type:Ba,minFilter:An,magFilter:An,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new ro(o.x,o.y,na),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=za,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn}else O.isPointLight?(H.map=new xS(o.x),H.map.depthTexture=new bE(o.x,oa)):(H.map=new sa(o.x,o.y),H.map.depthTexture=new ro(o.x,o.y,oa)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=za,this.type===$c?(H.map.depthTexture.compareFunction=ge?gp:mp,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<xe;U++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,U),a.clear();else{U===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(U);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(u)}if(O.isPointLight){const K=H.camera,Me=H.matrix,we=O.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),rl.setFromMatrixPosition(O.matrixWorld),K.position.copy(rl),fh.copy(K.position),fh.add(g2[U]),K.up.copy(_2[U]),K.lookAt(fh),K.updateMatrixWorld(),Me.makeTranslation(-rl.x,-rl.y,-rl.z),Mv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(O);r=H.getFrustum(),C(F,T,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===ol&&I(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(L,X,k)};function I(D,F){const T=e.update(w);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new sa(o.x,o.y,{format:er,type:Ba})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,a.setRenderTarget(D.mapPass),a.clear(),a.renderBufferDirect(F,null,T,v,w,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,a.setRenderTarget(D.map),a.clear(),a.renderBufferDirect(F,null,T,x,w,null)}function z(D,F,T,L){let X=null;const k=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)X=k;else if(X=T.isPointLight===!0?m:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=X.uuid,ce=F.uuid;let fe=p[j];fe===void 0&&(fe={},p[j]=fe);let q=fe[ce];q===void 0&&(q=X.clone(),fe[ce]=q,F.addEventListener("dispose",P)),X=q}if(X.visible=F.visible,X.wireframe=F.wireframe,L===ol?X.side=F.shadowSide!==null?F.shadowSide:F.side:X.side=F.shadowSide!==null?F.shadowSide:_[F.side],X.alphaMap=F.alphaMap,X.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,X.map=F.map,X.clipShadows=F.clipShadows,X.clippingPlanes=F.clippingPlanes,X.clipIntersection=F.clipIntersection,X.displacementMap=F.displacementMap,X.displacementScale=F.displacementScale,X.displacementBias=F.displacementBias,X.wireframeLinewidth=F.wireframeLinewidth,X.linewidth=F.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const j=a.properties.get(X);j.light=T}return X}function C(D,F,T,L,X){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===ol)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),fe=D.material;if(Array.isArray(fe)){const q=ce.groups;for(let O=0,H=q.length;O<H;O++){const $=q[O],ge=fe[$.materialIndex];if(ge&&ge.visible){const xe=z(D,ge,L,X);D.onBeforeShadow(a,D,F,T,ce,xe,$),a.renderBufferDirect(T,null,ce,xe,D,$),D.onAfterShadow(a,D,F,T,ce,xe,$)}}}else if(fe.visible){const q=z(D,fe,L,X);D.onBeforeShadow(a,D,F,T,ce,q,null),a.renderBufferDirect(T,null,ce,q,D,null),D.onAfterShadow(a,D,F,T,ce,q,null)}}const j=D.children;for(let ce=0,fe=j.length;ce<fe;ce++)C(j[ce],F,T,L,X)}function P(D){D.target.removeEventListener("dispose",P);for(const T in p){const L=p[T],X=D.target.uuid;X in L&&(L[X].dispose(),delete L[X])}}}function S2(a,e){function i(){let V=!1;const Re=new hn;let ue=null;const Ce=new hn(0,0,0,0);return{setMask:function(De){ue!==De&&!V&&(a.colorMask(De,De,De,De),ue=De)},setLocked:function(De){V=De},setClear:function(De,_e,Xe,Ve,dt){dt===!0&&(De*=Ve,_e*=Ve,Xe*=Ve),Re.set(De,_e,Xe,Ve),Ce.equals(Re)===!1&&(a.clearColor(De,_e,Xe,Ve),Ce.copy(Re))},reset:function(){V=!1,ue=null,Ce.set(-1,0,0,0)}}}function r(){let V=!1,Re=!1,ue=null,Ce=null,De=null;return{setReversed:function(_e){if(Re!==_e){const Xe=e.get("EXT_clip_control");_e?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(_e){_e?Ae(a.DEPTH_TEST):qe(a.DEPTH_TEST)},setMask:function(_e){ue!==_e&&!V&&(a.depthMask(_e),ue=_e)},setFunc:function(_e){if(Re&&(_e=Fy[_e]),Ce!==_e){switch(_e){case vh:a.depthFunc(a.NEVER);break;case Sh:a.depthFunc(a.ALWAYS);break;case xh:a.depthFunc(a.LESS);break;case ao:a.depthFunc(a.LEQUAL);break;case Mh:a.depthFunc(a.EQUAL);break;case yh:a.depthFunc(a.GEQUAL);break;case Eh:a.depthFunc(a.GREATER);break;case bh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ce=_e}},setLocked:function(_e){V=_e},setClear:function(_e){De!==_e&&(De=_e,Re&&(_e=1-_e),a.clearDepth(_e))},reset:function(){V=!1,ue=null,Ce=null,De=null,Re=!1}}}function o(){let V=!1,Re=null,ue=null,Ce=null,De=null,_e=null,Xe=null,Ve=null,dt=null;return{setTest:function(rt){V||(rt?Ae(a.STENCIL_TEST):qe(a.STENCIL_TEST))},setMask:function(rt){Re!==rt&&!V&&(a.stencilMask(rt),Re=rt)},setFunc:function(rt,mn,cn){(ue!==rt||Ce!==mn||De!==cn)&&(a.stencilFunc(rt,mn,cn),ue=rt,Ce=mn,De=cn)},setOp:function(rt,mn,cn){(_e!==rt||Xe!==mn||Ve!==cn)&&(a.stencilOp(rt,mn,cn),_e=rt,Xe=mn,Ve=cn)},setLocked:function(rt){V=rt},setClear:function(rt){dt!==rt&&(a.clearStencil(rt),dt=rt)},reset:function(){V=!1,Re=null,ue=null,Ce=null,De=null,_e=null,Xe=null,Ve=null,dt=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,z=null,C=null,P=null,D=null,F=null,T=new Ct(0,0,0),L=0,X=!1,k=null,j=null,ce=null,fe=null,q=null;const O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=$>=2);let xe=null,U={};const K=a.getParameter(a.SCISSOR_BOX),Me=a.getParameter(a.VIEWPORT),we=new hn().fromArray(K),Ge=new hn().fromArray(Me);function re(V,Re,ue,Ce){const De=new Uint8Array(4),_e=a.createTexture();a.bindTexture(V,_e),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<ue;Xe++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,Ce,0,a.RGBA,a.UNSIGNED_BYTE,De):a.texImage2D(Re+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,De);return _e}const Ee={};Ee[a.TEXTURE_2D]=re(a.TEXTURE_2D,a.TEXTURE_2D,1),Ee[a.TEXTURE_CUBE_MAP]=re(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[a.TEXTURE_2D_ARRAY]=re(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ee[a.TEXTURE_3D]=re(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ae(a.DEPTH_TEST),u.setFunc(ao),Zt(!1),Bt(y_),Ae(a.CULL_FACE),gt(Pa);function Ae(V){g[V]!==!0&&(a.enable(V),g[V]=!0)}function qe(V){g[V]!==!1&&(a.disable(V),g[V]=!1)}function nt(V,Re){return v[V]!==Re?(a.bindFramebuffer(V,Re),v[V]=Re,V===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Re),V===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(V,Re){let ue=b,Ce=!1;if(V){ue=x.get(Re),ue===void 0&&(ue=[],x.set(Re,ue));const De=V.textures;if(ue.length!==De.length||ue[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Xe=De.length;_e<Xe;_e++)ue[_e]=a.COLOR_ATTACHMENT0+_e;ue.length=De.length,Ce=!0}}else ue[0]!==a.BACK&&(ue[0]=a.BACK,Ce=!0);Ce&&a.drawBuffers(ue)}function Yt(V){return w!==V?(a.useProgram(V),w=V,!0):!1}const lt={[js]:a.FUNC_ADD,[ry]:a.FUNC_SUBTRACT,[oy]:a.FUNC_REVERSE_SUBTRACT};lt[ly]=a.MIN,lt[cy]=a.MAX;const mt={[uy]:a.ZERO,[fy]:a.ONE,[dy]:a.SRC_COLOR,[gh]:a.SRC_ALPHA,[vy]:a.SRC_ALPHA_SATURATE,[gy]:a.DST_COLOR,[py]:a.DST_ALPHA,[hy]:a.ONE_MINUS_SRC_COLOR,[_h]:a.ONE_MINUS_SRC_ALPHA,[_y]:a.ONE_MINUS_DST_COLOR,[my]:a.ONE_MINUS_DST_ALPHA,[Sy]:a.CONSTANT_COLOR,[xy]:a.ONE_MINUS_CONSTANT_COLOR,[My]:a.CONSTANT_ALPHA,[yy]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(V,Re,ue,Ce,De,_e,Xe,Ve,dt,rt){if(V===Pa){y===!0&&(qe(a.BLEND),y=!1);return}if(y===!1&&(Ae(a.BLEND),y=!0),V!==sy){if(V!==M||rt!==X){if((I!==js||P!==js)&&(a.blendEquation(a.FUNC_ADD),I=js,P=js),rt)switch(V){case $r:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case mh:a.blendFunc(a.ONE,a.ONE);break;case E_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case b_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",V);break}else switch(V){case $r:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case mh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case E_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",V);break}z=null,C=null,D=null,F=null,T.set(0,0,0),L=0,M=V,X=rt}return}De=De||Re,_e=_e||ue,Xe=Xe||Ce,(Re!==I||De!==P)&&(a.blendEquationSeparate(lt[Re],lt[De]),I=Re,P=De),(ue!==z||Ce!==C||_e!==D||Xe!==F)&&(a.blendFuncSeparate(mt[ue],mt[Ce],mt[_e],mt[Xe]),z=ue,C=Ce,D=_e,F=Xe),(Ve.equals(T)===!1||dt!==L)&&(a.blendColor(Ve.r,Ve.g,Ve.b,dt),T.copy(Ve),L=dt),M=V,X=!1}function ot(V,Re){V.side===ta?qe(a.CULL_FACE):Ae(a.CULL_FACE);let ue=V.side===ti;Re&&(ue=!ue),Zt(ue),V.blending===$r&&V.transparent===!1?gt(Pa):gt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ce=V.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ae(a.SAMPLE_ALPHA_TO_COVERAGE):qe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(V){k!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),k=V)}function Bt(V){V!==ny?(Ae(a.CULL_FACE),V!==j&&(V===y_?a.cullFace(a.BACK):V===iy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):qe(a.CULL_FACE),j=V}function St(V){V!==ce&&(H&&a.lineWidth(V),ce=V)}function Gt(V,Re,ue){V?(Ae(a.POLYGON_OFFSET_FILL),(fe!==Re||q!==ue)&&(fe=Re,q=ue,u.getReversed()&&(Re=-Re),a.polygonOffset(Re,ue))):qe(a.POLYGON_OFFSET_FILL)}function Vt(V){V?Ae(a.SCISSOR_TEST):qe(a.SCISSOR_TEST)}function Jt(V){V===void 0&&(V=a.TEXTURE0+O-1),xe!==V&&(a.activeTexture(V),xe=V)}function Z(V,Re,ue){ue===void 0&&(xe===null?ue=a.TEXTURE0+O-1:ue=xe);let Ce=U[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[ue]=Ce),(Ce.type!==V||Ce.texture!==Re)&&(xe!==ue&&(a.activeTexture(ue),xe=ue),a.bindTexture(V,Re||Ee[V]),Ce.type=V,Ce.texture=Re)}function Lt(){const V=U[xe];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function xt(){try{a.compressedTexImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function N(){try{a.compressedTexImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function E(){try{a.texSubImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Q(){try{a.texSubImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function pe(){try{a.compressedTexSubImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Le(){try{a.texStorage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Pe(){try{a.texStorage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function he(){try{a.texImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function me(){try{a.texImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Ne(V){return _[V]!==void 0?_[V]:a.getParameter(V)}function He(V,Re){_[V]!==Re&&(a.pixelStorei(V,Re),_[V]=Re)}function Ie(V){we.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function Fe(V){Ge.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),Ge.copy(V))}function be(V,Re){let ue=p.get(Re);ue===void 0&&(ue=new WeakMap,p.set(Re,ue));let Ce=ue.get(V);Ce===void 0&&(Ce=a.getUniformBlockIndex(Re,V.name),ue.set(V,Ce))}function Ue(V,Re){const Ce=p.get(Re).get(V);m.get(Re)!==Ce&&(a.uniformBlockBinding(Re,Ce,V.__bindingPointIndex),m.set(Re,Ce))}function Oe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},xe=null,U={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,z=null,C=null,P=null,D=null,F=null,T=new Ct(0,0,0),L=0,X=!1,k=null,j=null,ce=null,fe=null,q=null,we.set(0,0,a.canvas.width,a.canvas.height),Ge.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ae,disable:qe,bindFramebuffer:nt,drawBuffers:et,useProgram:Yt,setBlending:gt,setMaterial:ot,setFlipSided:Zt,setCullFace:Bt,setLineWidth:St,setPolygonOffset:Gt,setScissorTest:Vt,activeTexture:Jt,bindTexture:Z,unbindTexture:Lt,compressedTexImage2D:xt,compressedTexImage3D:N,texImage2D:he,texImage3D:me,pixelStorei:He,getParameter:Ne,updateUBOMapping:be,uniformBlockBinding:Ue,texStorage2D:Le,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Ie,viewport:Fe,reset:Oe}}function x2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,E){return b?new OffscreenCanvas(N,E):uu("canvas")}function y(N,E,Q){let oe=1;const pe=xt(N);if((pe.width>Q||pe.height>Q)&&(oe=Q/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Le=Math.floor(oe*pe.width),Pe=Math.floor(oe*pe.height);v===void 0&&(v=w(Le,Pe));const he=E?w(Le,Pe):v;return he.width=Le,he.height=Pe,he.getContext("2d").drawImage(N,0,0,Le,Pe),st("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Le+"x"+Pe+")."),he}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function M(N){return N.generateMipmaps}function I(N){a.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(N,E,Q,oe,pe,Le=!1){if(N!==null){if(a[N]!==void 0)return a[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pe;oe&&(Pe=e.get("EXT_texture_norm16"),Pe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===a.RED&&(Q===a.FLOAT&&(he=a.R32F),Q===a.HALF_FLOAT&&(he=a.R16F),Q===a.UNSIGNED_BYTE&&(he=a.R8),Q===a.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),Q===a.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),E===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.R8UI),Q===a.UNSIGNED_SHORT&&(he=a.R16UI),Q===a.UNSIGNED_INT&&(he=a.R32UI),Q===a.BYTE&&(he=a.R8I),Q===a.SHORT&&(he=a.R16I),Q===a.INT&&(he=a.R32I)),E===a.RG&&(Q===a.FLOAT&&(he=a.RG32F),Q===a.HALF_FLOAT&&(he=a.RG16F),Q===a.UNSIGNED_BYTE&&(he=a.RG8),Q===a.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),Q===a.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RG8UI),Q===a.UNSIGNED_SHORT&&(he=a.RG16UI),Q===a.UNSIGNED_INT&&(he=a.RG32UI),Q===a.BYTE&&(he=a.RG8I),Q===a.SHORT&&(he=a.RG16I),Q===a.INT&&(he=a.RG32I)),E===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGB16UI),Q===a.UNSIGNED_INT&&(he=a.RGB32UI),Q===a.BYTE&&(he=a.RGB8I),Q===a.SHORT&&(he=a.RGB16I),Q===a.INT&&(he=a.RGB32I)),E===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),Q===a.UNSIGNED_INT&&(he=a.RGBA32UI),Q===a.BYTE&&(he=a.RGBA8I),Q===a.SHORT&&(he=a.RGBA16I),Q===a.INT&&(he=a.RGBA32I)),E===a.RGB&&(Q===a.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),Q===a.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),E===a.RGBA){const me=Le?lu:Rt.getTransfer(pe);Q===a.FLOAT&&(he=a.RGBA32F),Q===a.HALF_FLOAT&&(he=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(he=me===qt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),Q===a.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(N,E){let Q;return N?E===null||E===oa||E===gl?Q=a.DEPTH24_STENCIL8:E===na?Q=a.DEPTH32F_STENCIL8:E===ml&&(Q=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oa||E===gl?Q=a.DEPTH_COMPONENT24:E===na?Q=a.DEPTH_COMPONENT32F:E===ml&&(Q=a.DEPTH_COMPONENT16),Q}function D(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Bn&&N.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),L(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),k(E)}function L(N){const E=r.get(N);if(E.__webglInit===void 0)return;const Q=N.source,oe=x.get(Q);if(oe){const pe=oe[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&X(N),Object.keys(oe).length===0&&x.delete(Q)}r.remove(N)}function X(N){const E=r.get(N);a.deleteTexture(E.__webglTexture);const Q=N.source,oe=x.get(Q);delete oe[E.__cacheKey],u.memory.textures--}function k(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let pe=0;pe<E.__webglFramebuffer[oe].length;pe++)a.deleteFramebuffer(E.__webglFramebuffer[oe][pe]);else a.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)a.deleteFramebuffer(E.__webglFramebuffer[oe]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=N.textures;for(let oe=0,pe=Q.length;oe<pe;oe++){const Le=r.get(Q[oe]);Le.__webglTexture&&(a.deleteTexture(Le.__webglTexture),u.memory.textures--),r.remove(Q[oe])}r.remove(N)}let j=0;function ce(){j=0}function fe(){return j}function q(N){j=N}function O(){const N=j;return N>=o.maxTextures&&st("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),j+=1,N}function H(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function $(N,E){const Q=r.get(N);if(N.isVideoTexture&&Z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const oe=N.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(Q,N,E);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+E)}function ge(N,E){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){qe(Q,N,E);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+E)}function xe(N,E){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){qe(Q,N,E);return}i.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+E)}function U(N,E){const Q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){nt(Q,N,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+E)}const K={[Th]:a.REPEAT,[Vi]:a.CLAMP_TO_EDGE,[Ah]:a.MIRRORED_REPEAT},Me={[Bn]:a.NEAREST,[Ty]:a.NEAREST_MIPMAP_NEAREST,[Dc]:a.NEAREST_MIPMAP_LINEAR,[An]:a.LINEAR,[Od]:a.LINEAR_MIPMAP_NEAREST,[ys]:a.LINEAR_MIPMAP_LINEAR},we={[Cy]:a.NEVER,[Uy]:a.ALWAYS,[wy]:a.LESS,[mp]:a.LEQUAL,[Dy]:a.EQUAL,[gp]:a.GEQUAL,[Ly]:a.GREATER,[Ny]:a.NOTEQUAL};function Ge(N,E){if(E.type===na&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===Od||E.magFilter===Dc||E.magFilter===ys||E.minFilter===An||E.minFilter===Od||E.minFilter===Dc||E.minFilter===ys)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,K[E.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,Me[E.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==Dc&&E.minFilter!==ys||E.type===na&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function re(N,E){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const oe=E.source;let pe=x.get(oe);pe===void 0&&(pe={},x.set(oe,pe));const Le=H(E);if(Le!==N.__cacheKey){pe[Le]===void 0&&(pe[Le]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),pe[Le].usedTimes++;const Pe=pe[N.__cacheKey];Pe!==void 0&&(pe[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&X(E)),N.__cacheKey=Le,N.__webglTexture=pe[Le].texture}return Q}function Ee(N,E,Q){return Math.floor(Math.floor(N/Q)/E)}function Ae(N,E,Q,oe){const Le=N.updateRanges;if(Le.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Q,oe,E.data);else{Le.sort((He,Ie)=>He.start-Ie.start);let Pe=0;for(let He=1;He<Le.length;He++){const Ie=Le[Pe],Fe=Le[He],be=Ie.start+Ie.count,Ue=Ee(Fe.start,E.width,4),Oe=Ee(Ie.start,E.width,4);Fe.start<=be+1&&Ue===Oe&&Ee(Fe.start+Fe.count-1,E.width,4)===Ue?Ie.count=Math.max(Ie.count,Fe.start+Fe.count-Ie.start):(++Pe,Le[Pe]=Fe)}Le.length=Pe+1;const he=i.getParameter(a.UNPACK_ROW_LENGTH),me=i.getParameter(a.UNPACK_SKIP_PIXELS),Ne=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let He=0,Ie=Le.length;He<Ie;He++){const Fe=Le[He],be=Math.floor(Fe.start/4),Ue=Math.ceil(Fe.count/4),Oe=be%E.width,V=Math.floor(be/E.width),Re=Ue,ue=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(a.UNPACK_SKIP_ROWS,V),i.texSubImage2D(a.TEXTURE_2D,0,Oe,V,Re,ue,Q,oe,E.data)}N.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,he),i.pixelStorei(a.UNPACK_SKIP_PIXELS,me),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ne)}}function qe(N,E,Q){let oe=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=a.TEXTURE_3D);const pe=re(N,E),Le=E.source;i.bindTexture(oe,N.__webglTexture,a.TEXTURE0+Q);const Pe=r.get(Le);if(Le.version!==Pe.__version||pe===!0){if(i.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ue=Rt.getPrimaries(Rt.workingColorSpace),Ce=E.colorSpace===Ms?null:Rt.getPrimaries(E.colorSpace),De=E.colorSpace===Ms||ue===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let me=y(E.image,!1,o.maxTextureSize);me=Lt(E,me);const Ne=c.convert(E.format,E.colorSpace),He=c.convert(E.type);let Ie=C(E.internalFormat,Ne,He,E.normalized,E.colorSpace,E.isVideoTexture);Ge(oe,E);let Fe;const be=E.mipmaps,Ue=E.isVideoTexture!==!0,Oe=Pe.__version===void 0||pe===!0,V=Le.dataReady,Re=D(E,me);if(E.isDepthTexture)Ie=P(E.format===Qs,E.type),Oe&&(Ue?i.texStorage2D(a.TEXTURE_2D,1,Ie,me.width,me.height):i.texImage2D(a.TEXTURE_2D,0,Ie,me.width,me.height,0,Ne,He,null));else if(E.isDataTexture)if(be.length>0){Ue&&Oe&&i.texStorage2D(a.TEXTURE_2D,Re,Ie,be[0].width,be[0].height);for(let ue=0,Ce=be.length;ue<Ce;ue++)Fe=be[ue],Ue?V&&i.texSubImage2D(a.TEXTURE_2D,ue,0,0,Fe.width,Fe.height,Ne,He,Fe.data):i.texImage2D(a.TEXTURE_2D,ue,Ie,Fe.width,Fe.height,0,Ne,He,Fe.data);E.generateMipmaps=!1}else Ue?(Oe&&i.texStorage2D(a.TEXTURE_2D,Re,Ie,me.width,me.height),V&&Ae(E,me,Ne,He)):i.texImage2D(a.TEXTURE_2D,0,Ie,me.width,me.height,0,Ne,He,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&Oe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ie,be[0].width,be[0].height,me.depth);for(let ue=0,Ce=be.length;ue<Ce;ue++)if(Fe=be[ue],E.format!==ki)if(Ne!==null)if(Ue){if(V)if(E.layerUpdates.size>0){const De=J_(Fe.width,Fe.height,E.format,E.type);for(const _e of E.layerUpdates){const Xe=Fe.data.subarray(_e*De/Fe.data.BYTES_PER_ELEMENT,(_e+1)*De/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,_e,Fe.width,Fe.height,1,Ne,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,Fe.width,Fe.height,me.depth,Ne,Fe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Ie,Fe.width,Fe.height,me.depth,0,Fe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?V&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,Fe.width,Fe.height,me.depth,Ne,He,Fe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ue,Ie,Fe.width,Fe.height,me.depth,0,Ne,He,Fe.data)}else{Ue&&Oe&&i.texStorage2D(a.TEXTURE_2D,Re,Ie,be[0].width,be[0].height);for(let ue=0,Ce=be.length;ue<Ce;ue++)Fe=be[ue],E.format!==ki?Ne!==null?Ue?V&&i.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,Fe.width,Fe.height,Ne,Fe.data):i.compressedTexImage2D(a.TEXTURE_2D,ue,Ie,Fe.width,Fe.height,0,Fe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?V&&i.texSubImage2D(a.TEXTURE_2D,ue,0,0,Fe.width,Fe.height,Ne,He,Fe.data):i.texImage2D(a.TEXTURE_2D,ue,Ie,Fe.width,Fe.height,0,Ne,He,Fe.data)}else if(E.isDataArrayTexture)if(Ue){if(Oe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ie,me.width,me.height,me.depth),V)if(E.layerUpdates.size>0){const ue=J_(me.width,me.height,E.format,E.type);for(const Ce of E.layerUpdates){const De=me.data.subarray(Ce*ue/me.data.BYTES_PER_ELEMENT,(Ce+1)*ue/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ce,me.width,me.height,1,Ne,He,De)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,He,me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,Ne,He,me.data);else if(E.isData3DTexture)Ue?(Oe&&i.texStorage3D(a.TEXTURE_3D,Re,Ie,me.width,me.height,me.depth),V&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,He,me.data)):i.texImage3D(a.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,Ne,He,me.data);else if(E.isFramebufferTexture){if(Oe)if(Ue)i.texStorage2D(a.TEXTURE_2D,Re,Ie,me.width,me.height);else{let ue=me.width,Ce=me.height;for(let De=0;De<Re;De++)i.texImage2D(a.TEXTURE_2D,De,Ie,ue,Ce,0,Ne,He,null),ue>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const ue=a.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),me.parentNode!==ue){ue.appendChild(me),_.add(E),ue.onpaint=Ce=>{const De=Ce.changedElements;for(const _e of _)De.includes(_e.image)&&(_e.needsUpdate=!0)},ue.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const De=a.RGBA,_e=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,De,_e,Xe,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ue&&Oe){const ue=xt(be[0]);i.texStorage2D(a.TEXTURE_2D,Re,Ie,ue.width,ue.height)}for(let ue=0,Ce=be.length;ue<Ce;ue++)Fe=be[ue],Ue?V&&i.texSubImage2D(a.TEXTURE_2D,ue,0,0,Ne,He,Fe):i.texImage2D(a.TEXTURE_2D,ue,Ie,Ne,He,Fe);E.generateMipmaps=!1}else if(Ue){if(Oe){const ue=xt(me);i.texStorage2D(a.TEXTURE_2D,Re,Ie,ue.width,ue.height)}V&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ne,He,me)}else i.texImage2D(a.TEXTURE_2D,0,Ie,Ne,He,me);M(E)&&I(oe),Pe.__version=Le.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function nt(N,E,Q){if(E.image.length!==6)return;const oe=re(N,E),pe=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+Q);const Le=r.get(pe);if(pe.version!==Le.__version||oe===!0){i.activeTexture(a.TEXTURE0+Q);const Pe=Rt.getPrimaries(Rt.workingColorSpace),he=E.colorSpace===Ms?null:Rt.getPrimaries(E.colorSpace),me=E.colorSpace===Ms||Pe===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,He=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let _e=0;_e<6;_e++)!Ne&&!He?Ie[_e]=y(E.image[_e],!0,o.maxCubemapSize):Ie[_e]=He?E.image[_e].image:E.image[_e],Ie[_e]=Lt(E,Ie[_e]);const Fe=Ie[0],be=c.convert(E.format,E.colorSpace),Ue=c.convert(E.type),Oe=C(E.internalFormat,be,Ue,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Re=Le.__version===void 0||oe===!0,ue=pe.dataReady;let Ce=D(E,Fe);Ge(a.TEXTURE_CUBE_MAP,E);let De;if(Ne){V&&Re&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,Oe,Fe.width,Fe.height);for(let _e=0;_e<6;_e++){De=Ie[_e].mipmaps;for(let Xe=0;Xe<De.length;Xe++){const Ve=De[Xe];E.format!==ki?be!==null?V?ue&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,Ve.width,Ve.height,be,Ve.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,Oe,Ve.width,Ve.height,0,Ve.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,Ve.width,Ve.height,be,Ue,Ve.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,Oe,Ve.width,Ve.height,0,be,Ue,Ve.data)}}}else{if(De=E.mipmaps,V&&Re){De.length>0&&Ce++;const _e=xt(Ie[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,Oe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(He){V?ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ie[_e].width,Ie[_e].height,be,Ue,Ie[_e].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Oe,Ie[_e].width,Ie[_e].height,0,be,Ue,Ie[_e].data);for(let Xe=0;Xe<De.length;Xe++){const dt=De[Xe].image[_e].image;V?ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,dt.width,dt.height,be,Ue,dt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,Oe,dt.width,dt.height,0,be,Ue,dt.data)}}else{V?ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be,Ue,Ie[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Oe,be,Ue,Ie[_e]);for(let Xe=0;Xe<De.length;Xe++){const Ve=De[Xe];V?ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,be,Ue,Ve.image[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,Oe,be,Ue,Ve.image[_e])}}}M(E)&&I(a.TEXTURE_CUBE_MAP),Le.__version=pe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function et(N,E,Q,oe,pe,Le){const Pe=c.convert(Q.format,Q.colorSpace),he=c.convert(Q.type),me=C(Q.internalFormat,Pe,he,Q.normalized,Q.colorSpace),Ne=r.get(E),He=r.get(Q);if(He.__renderTarget=E,!Ne.__hasExternalTextures){const Ie=Math.max(1,E.width>>Le),Fe=Math.max(1,E.height>>Le);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?i.texImage3D(pe,Le,me,Ie,Fe,E.depth,0,Pe,he,null):i.texImage2D(pe,Le,me,Ie,Fe,0,Pe,he,null)}i.bindFramebuffer(a.FRAMEBUFFER,N),Jt(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,pe,He.__webglTexture,0,Vt(E)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,pe,He.__webglTexture,Le),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Yt(N,E,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,N),E.depthBuffer){const oe=E.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,Le=P(E.stencilBuffer,pe),Pe=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Jt(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Vt(E),Le,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Vt(E),Le,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Le,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,N)}else{const oe=E.textures;for(let pe=0;pe<oe.length;pe++){const Le=oe[pe],Pe=c.convert(Le.format,Le.colorSpace),he=c.convert(Le.type),me=C(Le.internalFormat,Pe,he,Le.normalized,Le.colorSpace);Jt(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Vt(E),me,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Vt(E),me,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,me,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function lt(N,E,Q){const oe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),oe){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),Ge(a.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=c.convert(E.depthTexture.format),He=c.convert(E.depthTexture.type);let Ie;E.depthTexture.format===za?Ie=a.DEPTH_COMPONENT24:E.depthTexture.format===Qs&&(Ie=a.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ie,E.width,E.height,0,Ne,He,null)}}else $(E.depthTexture,0);const Le=pe.__webglTexture,Pe=Vt(E),he=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,me=E.depthTexture.format===Qs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===za)Jt(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Le,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Le,0);else if(E.depthTexture.format===Qs)Jt(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Le,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(N){const E=r.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const oe=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=oe}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let oe=0;oe<6;oe++)lt(E.__webglFramebuffer[oe],N,oe);else{const oe=N.texture.mipmaps;oe&&oe.length>0?lt(E.__webglFramebuffer[0],N,0):lt(E.__webglFramebuffer,N,0)}else if(Q){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=a.createRenderbuffer(),Yt(E.__webglDepthbuffer[oe],N,!1);else{const pe=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,Le),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Le)}}else{const oe=N.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Yt(E.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Le),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Le)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function gt(N,E,Q){const oe=r.get(N);E!==void 0&&et(oe.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&mt(N)}function ot(N){const E=N.texture,Q=r.get(N),oe=r.get(E);N.addEventListener("dispose",T);const pe=N.textures,Le=N.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=E.version,u.memory.textures++),Le){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let me=0;me<E.mipmaps.length;me++)Q.__webglFramebuffer[he][me]=a.createFramebuffer()}else Q.__webglFramebuffer[he]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Q.__webglFramebuffer[he]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let he=0,me=pe.length;he<me;he++){const Ne=r.get(pe[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),u.memory.textures++)}if(N.samples>0&&Jt(N)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<pe.length;he++){const me=pe[he];Q.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const Ne=c.convert(me.format,me.colorSpace),He=c.convert(me.type),Ie=C(me.internalFormat,Ne,He,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Fe=Vt(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,Ie,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Le){i.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),Ge(a.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)et(Q.__webglFramebuffer[he][me],N,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else et(Q.__webglFramebuffer[he],N,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(E)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let he=0,me=pe.length;he<me;he++){const Ne=pe[he],He=r.get(Ne);let Ie=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ie=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ie,He.__webglTexture),Ge(Ie,Ne),et(Q.__webglFramebuffer,N,Ne,a.COLOR_ATTACHMENT0+he,Ie,0),M(Ne)&&I(Ie)}i.unbindTexture()}else{let he=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(he,oe.__webglTexture),Ge(he,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)et(Q.__webglFramebuffer[me],N,E,a.COLOR_ATTACHMENT0,he,me);else et(Q.__webglFramebuffer,N,E,a.COLOR_ATTACHMENT0,he,0);M(E)&&I(he),i.unbindTexture()}N.depthBuffer&&mt(N)}function Zt(N){const E=N.textures;for(let Q=0,oe=E.length;Q<oe;Q++){const pe=E[Q];if(M(pe)){const Le=z(N),Pe=r.get(pe).__webglTexture;i.bindTexture(Le,Pe),I(Le),i.unbindTexture()}}}const Bt=[],St=[];function Gt(N){if(N.samples>0){if(Jt(N)===!1){const E=N.textures,Q=N.width,oe=N.height;let pe=a.COLOR_BUFFER_BIT;const Le=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=r.get(N),he=E.length>1;if(he)for(let Ne=0;Ne<E.length;Ne++)i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const me=N.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const He=r.get(E[Ne]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,pe,a.NEAREST),m===!0&&(Bt.length=0,St.length=0,Bt.push(a.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Bt.push(Le),St.push(Le),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,St)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Bt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<E.length;Ne++){i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const He=r.get(E[Ne]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,He,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Vt(N){return Math.min(o.maxSamples,N.samples)}function Jt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(N){const E=u.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Lt(N,E){const Q=N.colorSpace,oe=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==ou&&Q!==Ms&&(Rt.getTransfer(Q)===qt?(oe!==ki||pe!==Ai)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Q)),E}function xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=xe,this.setTextureCube=U,this.rebindTextures=gt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function M2(a,e){function i(r,o=Ms){let c;const u=Rt.getTransfer(o);if(r===Ai)return a.UNSIGNED_BYTE;if(r===up)return a.UNSIGNED_SHORT_4_4_4_4;if(r===fp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===eS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===tS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jv)return a.BYTE;if(r===$v)return a.SHORT;if(r===ml)return a.UNSIGNED_SHORT;if(r===cp)return a.INT;if(r===oa)return a.UNSIGNED_INT;if(r===na)return a.FLOAT;if(r===Ba)return a.HALF_FLOAT;if(r===nS)return a.ALPHA;if(r===iS)return a.RGB;if(r===ki)return a.RGBA;if(r===za)return a.DEPTH_COMPONENT;if(r===Qs)return a.DEPTH_STENCIL;if(r===aS)return a.RED;if(r===dp)return a.RED_INTEGER;if(r===er)return a.RG;if(r===hp)return a.RG_INTEGER;if(r===pp)return a.RGBA_INTEGER;if(r===eu||r===tu||r===nu||r===iu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===wh||r===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Uh||r===Oh||r===Ph||r===su||r===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Lh||r===Nh)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Uh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Oh)return c.COMPRESSED_R11_EAC;if(r===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(r===su)return c.COMPRESSED_RG11_EAC;if(r===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fh||r===Bh||r===zh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Fh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Qh)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===tp||r===ru||r===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ru)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
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

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new pS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Di({vertexShader:y2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Js(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T2 extends nr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",y=new b2,M={},I=i.getContextAttributes();let z=null,C=null;const P=[],D=[],F=new It;let T=null;const L=new Ti;L.viewport=new hn;const X=new Ti;X.viewport=new hn;const k=[L,X],j=new PE;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Ee=P[re];return Ee===void 0&&(Ee=new Hd,P[re]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(re){let Ee=P[re];return Ee===void 0&&(Ee=new Hd,P[re]=Ee),Ee.getGripSpace()},this.getHand=function(re){let Ee=P[re];return Ee===void 0&&(Ee=new Hd,P[re]=Ee),Ee.getHandSpace()};function q(re){const Ee=D.indexOf(re.inputSource);if(Ee===-1)return;const Ae=P[Ee];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,p||u),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function O(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",H);for(let re=0;re<P.length;re++){const Ee=D[re];Ee!==null&&(D[re]=null,P[re].disconnect(Ee))}ce=null,fe=null,y.reset();for(const re in M)delete M[re];e.setRenderTarget(z),x=null,v=null,_=null,o=null,C=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",O),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,qe=null,nt=null;I.depth&&(nt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=I.stencil?Qs:za,qe=I.stencil?gl:oa);const et={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(et),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new sa(v.textureWidth,v.textureHeight,{format:ki,type:Ai,depthTexture:new ro(v.textureWidth,v.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Ae),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new sa(x.framebufferWidth,x.framebufferHeight,{format:ki,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(re){for(let Ee=0;Ee<re.removed.length;Ee++){const Ae=re.removed[Ee],qe=D.indexOf(Ae);qe>=0&&(D[qe]=null,P[qe].disconnect(Ae))}for(let Ee=0;Ee<re.added.length;Ee++){const Ae=re.added[Ee];let qe=D.indexOf(Ae);if(qe===-1){for(let et=0;et<P.length;et++)if(et>=D.length){D.push(Ae),qe=et;break}else if(D[et]===null){D[et]=Ae,qe=et;break}if(qe===-1)break}const nt=P[qe];nt&&nt.connect(Ae)}}const $=new ee,ge=new ee;function xe(re,Ee,Ae){$.setFromMatrixPosition(Ee.matrixWorld),ge.setFromMatrixPosition(Ae.matrixWorld);const qe=$.distanceTo(ge),nt=Ee.projectionMatrix.elements,et=Ae.projectionMatrix.elements,Yt=nt[14]/(nt[10]-1),lt=nt[14]/(nt[10]+1),mt=(nt[9]+1)/nt[5],gt=(nt[9]-1)/nt[5],ot=(nt[8]-1)/nt[0],Zt=(et[8]+1)/et[0],Bt=Yt*ot,St=Yt*Zt,Gt=qe/(-ot+Zt),Vt=Gt*-ot;if(Ee.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Vt),re.translateZ(Gt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),nt[10]===-1)re.projectionMatrix.copy(Ee.projectionMatrix),re.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const Jt=Yt+Gt,Z=lt+Gt,Lt=Bt-Vt,xt=St+(qe-Vt),N=mt*lt/Z*Jt,E=gt*lt/Z*Jt;re.projectionMatrix.makePerspective(Lt,xt,N,E,Jt,Z),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function U(re,Ee){Ee===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Ee.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Ee=re.near,Ae=re.far;y.texture!==null&&(y.depthNear>0&&(Ee=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),j.near=X.near=L.near=Ee,j.far=X.far=L.far=Ae,(ce!==j.near||fe!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,fe=j.far),j.layers.mask=re.layers.mask|6,L.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const qe=re.parent,nt=j.cameras;U(j,qe);for(let et=0;et<nt.length;et++)U(nt[et],qe);nt.length===2?xe(j,L,X):j.projectionMatrix.copy(L.projectionMatrix),K(re,j,qe)};function K(re,Ee,Ae){Ae===null?re.matrix.copy(Ee.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(Ee.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Ee.projectionMatrix),re.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=_l*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(re){m=re,v!==null&&(v.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(re){return M[re]};let Me=null;function we(re,Ee){if(g=Ee.getViewerPose(p||u),b=Ee,g!==null){const Ae=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let qe=!1;Ae.length!==j.cameras.length&&(j.cameras.length=0,qe=!0);for(let lt=0;lt<Ae.length;lt++){const mt=Ae[lt];let gt=null;if(x!==null)gt=x.getViewport(mt);else{const Zt=_.getViewSubImage(v,mt);gt=Zt.viewport,lt===0&&(e.setRenderTargetTextures(C,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(C))}let ot=k[lt];ot===void 0&&(ot=new Ti,ot.layers.enable(lt),ot.viewport=new hn,k[lt]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(gt.x,gt.y,gt.width,gt.height),lt===0&&(j.matrix.copy(ot.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),qe===!0&&j.cameras.push(ot)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const lt=_.getDepthInformation(Ae[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,o.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let lt=0;lt<Ae.length;lt++){const mt=Ae[lt].camera;if(mt){let gt=M[mt];gt||(gt=new pS,M[mt]=gt);const ot=_.getCameraImage(mt);gt.sourceTexture=ot}}}}for(let Ae=0;Ae<P.length;Ae++){const qe=D[Ae],nt=P[Ae];qe!==null&&nt!==void 0&&nt.update(qe,Ee,p||u)}Me&&Me(re,Ee),Ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ee}),b=null}const Ge=new vS;Ge.setAnimationLoop(we),this.setAnimationLoop=function(re){Me=re},this.dispose=function(){}}}const A2=new vn,TS=new ut;TS.set(-1,0,0,0,1,0,0,0,1);function R2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,mS(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,I,z,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,I,z):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ti&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ti&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const I=e.get(M),z=I.envMap,C=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(TS),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,I,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*I,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,I){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ti&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const I=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function C2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const D=P.program;r.uniformBlockBinding(C,D)}function p(C,P){let D=o[C.id];D===void 0&&(y(C),D=g(C),o[C.id]=D,C.addEventListener("dispose",I));const F=P.program;r.updateUBOMapping(C,F);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const P=_();C.__bindingPointIndex=P;const D=a.createBuffer(),F=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,P,D),D}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const P=o[C.id],D=C.uniforms,F=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,P);for(let T=0,L=D.length;T<L;T++){const X=D[T];if(Array.isArray(X))for(let k=0,j=X.length;k<j;k++)x(X[k],T,k,F);else x(X,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,P,D,F){if(w(C,P,D,F)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let X=0;for(let k=0;k<L.length;k++){const j=L[k],ce=M(j);b(j,C.__data,X),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function b(C,P,D){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,D)}function w(C,P,D,F){const T=C.value,L=P+"_"+D;if(F[L]===void 0)return typeof T=="number"||typeof T=="boolean"?F[L]=T:ArrayBuffer.isView(T)?F[L]=T.slice():F[L]=T.clone(),!0;{const X=F[L];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return F[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function y(C){const P=C.uniforms;let D=0;const F=16;for(let L=0,X=P.length;L<X;L++){const k=Array.isArray(P[L])?P[L]:[P[L]];for(let j=0,ce=k.length;j<ce;j++){const fe=k[j],q=Array.isArray(fe.value)?fe.value:[fe.value];for(let O=0,H=q.length;O<H;O++){const $=q[O],ge=M($),xe=D%F,U=xe%ge.boundary,K=xe+U;D+=U,K!==0&&F-K<ge.storage&&(D+=F-K),fe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=D,D+=ge.storage}}}const T=D%F;return T>0&&(D+=F-T),C.__size=D,C.__cache={},this}function M(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),P}function I(C){const P=C.target;P.removeEventListener("dispose",I);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),a.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function z(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:p,dispose:z}}const w2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function D2(){return $i===null&&($i=new xE(w2,16,16,er,Ba),$i.name="DFG_LUT",$i.minFilter=An,$i.magFilter=An,$i.wrapS=Vi,$i.wrapT=Vi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class L2{constructor(e={}){const{canvas:i=Py(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ai}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=x,y=new Set([pp,hp,dp]),M=new Set([Ai,oa,ml,gl,up,fp]),I=new Uint32Array(4),z=new Int32Array(4),C=new ee;let P=null,D=null;const F=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let k=!1,j=null,ce=null,fe=null,q=null;this._outputColorSpace=Zn;let O=0,H=0,$=null,ge=-1,xe=null;const U=new hn,K=new hn;let Me=null;const we=new Ct(0);let Ge=0,re=i.width,Ee=i.height,Ae=1,qe=null,nt=null;const et=new hn(0,0,re,Ee),Yt=new hn(0,0,re,Ee);let lt=!1;const mt=new fS;let gt=!1,ot=!1;const Zt=new vn,Bt=new ee,St=new hn,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Jt(){return $===null?Ae:1}let Z=r;function Lt(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",dt,!1),i.addEventListener("webglcontextrestored",rt,!1),i.addEventListener("webglcontextcreationerror",mn,!1),Z===null){const Y="webgl2";if(Z=Lt(Y,A),Z===null)throw Lt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Dt("WebGLRenderer: "+A.message),A}let xt,N,E,Q,oe,pe,Le,Pe,he,me,Ne,He,Ie,Fe,be,Ue,Oe,V,Re,ue,Ce,De,_e;function Xe(){xt=new D1(Z),xt.init(),Ce=new M2(Z,xt),N=new y1(Z,xt,e,Ce),E=new S2(Z,xt),N.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),fe=Z.createFramebuffer(),q=Z.createFramebuffer(),Q=new U1(Z),oe=new s2,pe=new x2(Z,xt,E,oe,N,Ce,Q),Le=new w1(X),Pe=new FE(Z),De=new x1(Z,Pe),he=new L1(Z,Pe,Q,De),me=new P1(Z,he,Pe,De,Q),V=new O1(Z,N,pe),be=new E1(oe),Ne=new a2(X,Le,xt,N,De,be),He=new R2(X,oe),Ie=new o2,Fe=new h2(xt),Oe=new S1(X,Le,E,me,b,m),Ue=new v2(X,me,N),_e=new C2(Z,Q,N,E),Re=new M1(Z,xt,Q),ue=new N1(Z,xt,Q),Q.programs=Ne.programs,X.capabilities=N,X.extensions=xt,X.properties=oe,X.renderLists=Ie,X.shadowMap=Ue,X.state=E,X.info=Q}Xe(),w!==Ai&&(L=new F1(w,i.width,i.height,h,o,c));const Ve=new T2(X,Z);this.xr=Ve,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(re,Ee,!1))},this.getSize=function(A){return A.set(re,Ee)},this.setSize=function(A,Y,se=!0){if(Ve.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,Ee=Y,i.width=Math.floor(A*Ae),i.height=Math.floor(Y*Ae),se===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(re*Ae,Ee*Ae).floor()},this.setDrawingBufferSize=function(A,Y,se){re=A,Ee=Y,Ae=se,i.width=Math.floor(A*se),i.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===Ai){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,Y,se,te){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,Y,se,te),E.viewport(U.copy(et).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,Y,se,te){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,Y,se,te),E.scissor(K.copy(Yt).multiplyScalar(Ae).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){E.setScissorTest(lt=A)},this.setOpaqueSort=function(A){qe=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let te=0;if(A){let ne=!1;if($!==null){const Be=$.texture.format;ne=y.has(Be)}if(ne){const Be=$.texture.type,Ye=M.has(Be),Te=Oe.getClearColor(),ze=Oe.getClearAlpha(),We=Te.r,Ke=Te.g,it=Te.b;Ye?(I[0]=We,I[1]=Ke,I[2]=it,I[3]=ze,Z.clearBufferuiv(Z.COLOR,0,I)):(z[0]=We,z[1]=Ke,z[2]=it,z[3]=ze,Z.clearBufferiv(Z.COLOR,0,z))}else te|=Z.COLOR_BUFFER_BIT}Y&&(te|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&Z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",dt,!1),i.removeEventListener("webglcontextrestored",rt,!1),i.removeEventListener("webglcontextcreationerror",mn,!1),Oe.dispose(),Ie.dispose(),Fe.dispose(),oe.dispose(),Le.dispose(),me.dispose(),De.dispose(),_e.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",$t),Ve.removeEventListener("sessionend",Sn),Ln.stop()};function dt(A){A.preventDefault(),D_("WebGLRenderer: Context Lost."),k=!0}function rt(){D_("WebGLRenderer: Context Restored."),k=!1;const A=Q.autoReset,Y=Ue.enabled,se=Ue.autoUpdate,te=Ue.needsUpdate,ne=Ue.type;Xe(),Q.autoReset=A,Ue.enabled=Y,Ue.autoUpdate=se,Ue.needsUpdate=te,Ue.type=ne}function mn(A){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function cn(A){const Y=A.target;Y.removeEventListener("dispose",cn),zn(Y)}function zn(A){la(A),oe.remove(A)}function la(A){const Y=oe.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Ne.releaseProgram(se)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,te,ne,Be){Y===null&&(Y=Gt);const Ye=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Te=fa(A,Y,se,te,ne);E.setMaterial(te,Ye);let ze=se.index,We=1;if(te.wireframe===!0){if(ze=he.getWireframeAttribute(se),ze===void 0)return;We=2}const Ke=se.drawRange,it=se.attributes.position;let Ze=Ke.start*We,_t=(Ke.start+Ke.count)*We;Be!==null&&(Ze=Math.max(Ze,Be.start*We),_t=Math.min(_t,(Be.start+Be.count)*We)),ze!==null?(Ze=Math.max(Ze,0),_t=Math.min(_t,ze.count)):it!=null&&(Ze=Math.max(Ze,0),_t=Math.min(_t,it.count));const Nt=_t-Ze;if(Nt<0||Nt===1/0)return;De.setup(ne,te,Te,se,ze);let zt,wt=Re;if(ze!==null&&(zt=Pe.get(ze),wt=ue,wt.setIndex(zt)),ne.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*Jt()),wt.setMode(Z.LINES)):wt.setMode(Z.TRIANGLES);else if(ne.isLine){let Ut=te.linewidth;Ut===void 0&&(Ut=1),E.setLineWidth(Ut*Jt()),ne.isLineSegments?wt.setMode(Z.LINES):ne.isLineLoop?wt.setMode(Z.LINE_LOOP):wt.setMode(Z.LINE_STRIP)}else ne.isPoints?wt.setMode(Z.POINTS):ne.isSprite&&wt.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Ut=ne._multiDrawStarts,je=ne._multiDrawCounts,Hn=ne._multiDrawCount,Mt=ze?Pe.get(ze).bytesPerElement:1,Rn=oe.get(te).currentProgram.getUniforms();for(let ii=0;ii<Hn;ii++)Rn.setValue(Z,"_gl_DrawID",ii),wt.render(Ut[ii]/Mt,je[ii])}else if(ne.isInstancedMesh)wt.renderInstances(Ze,Nt,ne.count);else if(se.isInstancedBufferGeometry){const Ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,je=Math.min(se.instanceCount,Ut);wt.renderInstances(Ze,Nt,je)}else wt.render(Ze,Nt)};function bs(A,Y,se){A.transparent===!0&&A.side===ta&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Ni(A,Y,se),A.side=Fa,A.needsUpdate=!0,Ni(A,Y,se),A.side=ta):Ni(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),D=Fe.get(se),D.init(Y),T.push(D),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),A!==se&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),D.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Be=ne.material;if(Be)if(Array.isArray(Be))for(let Ye=0;Ye<Be.length;Ye++){const Te=Be[Ye];bs(Te,se,ne),te.add(Te)}else bs(Be,se,ne),te.add(Be)}),D=T.pop(),te},this.compileAsync=function(A,Y,se=null){const te=this.compile(A,Y,se);return new Promise(ne=>{function Be(){if(te.forEach(function(Ye){oe.get(Ye).currentProgram.isReady()&&te.delete(Ye)}),te.size===0){ne(A);return}setTimeout(Be,10)}xt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ha=null;function Li(A){Ha&&Ha(A)}function $t(){Ln.stop()}function Sn(){Ln.start()}const Ln=new vS;Ln.setAnimationLoop(Li),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){Ha=A,Ve.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},Ve.addEventListener("sessionstart",$t),Ve.addEventListener("sessionend",Sn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(A,Y);const se=Ve.enabled===!0&&Ve.isPresenting===!0,te=L!==null&&($===null||se)&&L.begin(X,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Y,$),D=Fe.get(A,T.length),D.init(Y),D.state.textureUnits=pe.getTextureUnits(),T.push(D),Zt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),mt.setFromProjectionMatrix(Zt,ia,Y.reversedDepth),ot=this.localClippingEnabled,gt=be.init(this.clippingPlanes,ot),P=Ie.get(A,F.length),P.init(),F.push(P),Ve.enabled===!0&&Ve.isPresenting===!0){const Ye=X.xr.getDepthSensingMesh();Ye!==null&&ca(Ye,Y,-1/0,X.sortObjects)}ca(A,Y,0,X.sortObjects),P.finish(),X.sortObjects===!0&&P.sort(qe,nt,Y.reversedDepth),Vt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Vt&&Oe.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&be.beginShadows();const ne=D.state.shadowsArray;if(Ue.render(ne,A,Y),gt===!0&&be.endShadows(),(te&&L.hasRenderPass())===!1){const Ye=P.opaque,Te=P.transmissive;if(D.setupLights(),Y.isArrayCamera){const ze=Y.cameras;if(Te.length>0)for(let We=0,Ke=ze.length;We<Ke;We++){const it=ze[We];Xi(Ye,Te,A,it)}Vt&&Oe.render(A);for(let We=0,Ke=ze.length;We<Ke;We++){const it=ze[We];Ts(P,A,it,it.viewport)}}else Te.length>0&&Xi(Ye,Te,A,Y),Vt&&Oe.render(A),Ts(P,A,Y)}$!==null&&H===0&&(pe.updateMultisampleRenderTarget($),pe.updateRenderTargetMipmap($)),te&&L.end(X),A.isScene===!0&&A.onAfterRender(X,A,Y),De.resetDefaultState(),ge=-1,xe=null,T.pop(),T.length>0?(D=T[T.length-1],pe.setTextureUnits(D.state.textureUnits),gt===!0&&be.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,j!==null&&j.renderEnd()};function ca(A,Y,se,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||mt.intersectsSprite(A)){te&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);const Ye=me.update(A),Te=A.material;Te.visible&&P.push(A,Ye,Te,se,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||mt.intersectsObject(A))){const Ye=me.update(A),Te=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),St.copy(Ye.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(Te)){const ze=Ye.groups;for(let We=0,Ke=ze.length;We<Ke;We++){const it=ze[We],Ze=Te[it.materialIndex];Ze&&Ze.visible&&P.push(A,Ye,Ze,se,St.z,it)}}else Te.visible&&P.push(A,Ye,Te,se,St.z,null)}}const Be=A.children;for(let Ye=0,Te=Be.length;Ye<Te;Ye++)ca(Be[Ye],Y,se,te)}function Ts(A,Y,se,te){const{opaque:ne,transmissive:Be,transparent:Ye}=A;D.setupLightsView(se),gt===!0&&be.setGlobalState(X.clippingPlanes,se),te&&E.viewport(U.copy(te)),ne.length>0&&Wi(ne,Y,se),Be.length>0&&Wi(Be,Y,se),Ye.length>0&&Wi(Ye,Y,se),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Xi(A,Y,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[te.id]===void 0){const Ze=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[te.id]=new sa(1,1,{generateMipmaps:!0,type:Ze?Ba:Ai,minFilter:ys,samples:Math.max(4,N.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Be=D.state.transmissionRenderTarget[te.id],Ye=te.viewport||U;Be.setSize(Ye.z*X.transmissionResolutionScale,Ye.w*X.transmissionResolutionScale);const Te=X.getRenderTarget(),ze=X.getActiveCubeFace(),We=X.getActiveMipmapLevel();X.setRenderTarget(Be),X.getClearColor(we),Ge=X.getClearAlpha(),Ge<1&&X.setClearColor(16777215,.5),X.clear(),Vt&&Oe.render(se);const Ke=X.toneMapping;X.toneMapping=aa;const it=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),D.setupLightsView(te),gt===!0&&be.setGlobalState(X.clippingPlanes,te),Wi(A,se,te),pe.updateMultisampleRenderTarget(Be),pe.updateRenderTargetMipmap(Be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let _t=0,Nt=Y.length;_t<Nt;_t++){const zt=Y[_t],{object:wt,geometry:Ut,material:je,group:Hn}=zt;if(je.side===ta&&wt.layers.test(te.layers)){const Mt=je.side;je.side=ti,je.needsUpdate=!0,qi(wt,se,te,Ut,je,Hn),je.side=Mt,je.needsUpdate=!0,Ze=!0}}Ze===!0&&(pe.updateMultisampleRenderTarget(Be),pe.updateRenderTargetMipmap(Be))}X.setRenderTarget(Te,ze,We),X.setClearColor(we,Ge),it!==void 0&&(te.viewport=it),X.toneMapping=Ke}function Wi(A,Y,se){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,Be=A.length;ne<Be;ne++){const Ye=A[ne],{object:Te,geometry:ze,group:We}=Ye;let Ke=Ye.material;Ke.allowOverride===!0&&te!==null&&(Ke=te),Te.layers.test(se.layers)&&qi(Te,Y,se,ze,Ke,We)}}function qi(A,Y,se,te,ne,Be){A.onBeforeRender(X,Y,se,te,ne,Be),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(X,Y,se,te,A,Be),ne.transparent===!0&&ne.side===ta&&ne.forceSinglePass===!1?(ne.side=ti,ne.needsUpdate=!0,X.renderBufferDirect(se,Y,te,ne,A,Be),ne.side=Fa,ne.needsUpdate=!0,X.renderBufferDirect(se,Y,te,ne,A,Be),ne.side=ta):X.renderBufferDirect(se,Y,te,ne,A,Be),A.onAfterRender(X,Y,se,te,ne,Be)}function Ni(A,Y,se){Y.isScene!==!0&&(Y=Gt);const te=oe.get(A),ne=D.state.lights,Be=D.state.shadowsArray,Ye=ne.state.version,Te=Ne.getParameters(A,ne.state,Be,Y,se,D.state.lightProbeGridArray),ze=Ne.getProgramCacheKey(Te);let We=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;const Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Le.get(A.envMap||te.environment,Ke),te.envMapRotation=te.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",cn),We=new Map,te.programs=We);let it=We.get(ze);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ye)return ni(A,Te),it}else Te.uniforms=Ne.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,se,Te),A.onBeforeCompile(Te,X),it=Ne.acquireProgram(Te,ze),We.set(ze,it),te.uniforms=Te.uniforms;const Ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=be.uniform),ni(A,Te),te.needsLights=Ga(A),te.lightsStateVersion=Ye,te.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=D.state.lightProbeGridArray.length>0,te.currentProgram=it,te.uniformsList=null,it}function mi(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=au.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ni(A,Y){const se=oe.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function ua(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let se=0,te=A.length;se<te;se++){const ne=A[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(C))return ne}return null}function fa(A,Y,se,te,ne){Y.isScene!==!0&&(Y=Gt),pe.resetTextureUnits();const Be=Y.fog,Ye=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,Te=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Rt.workingColorSpace,ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=Le.get(te.envMap||Ye,ze),Ke=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let zt=aa;te.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(zt=X.toneMapping);const wt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ut=wt!==void 0?wt.length:0,je=oe.get(te),Hn=D.state.lights;if(gt===!0&&(ot===!0||A!==xe)){const Ht=A===xe&&te.id===ge;be.setState(te,A,Ht)}let Mt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Hn.state.version||je.outputColorSpace!==Te||ne.isBatchedMesh&&je.batching===!1||!ne.isBatchedMesh&&je.batching===!0||ne.isBatchedMesh&&je.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&je.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||ne.isInstancedMesh&&je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&je.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&je.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&je.instancingMorph===!1&&ne.morphTexture!==null||je.envMap!==We||te.fog===!0&&je.fog!==Be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==be.numPlanes||je.numIntersection!==be.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==it||je.morphTargets!==Ze||je.morphNormals!==_t||je.morphColors!==Nt||je.toneMapping!==zt||je.morphTargetsCount!==Ut||!!je.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,je.__version=te.version);let Rn=je.currentProgram;Mt===!0&&(Rn=Ni(te,Y,ne),j&&te.isNodeMaterial&&j.onUpdateProgram(te,Rn,je));let ii=!1,Ui=!1,ai=!1;const kt=Rn.getUniforms(),rn=je.uniforms;if(E.useProgram(Rn.program)&&(ii=!0,Ui=!0,ai=!0),te.id!==ge&&(ge=te.id,Ui=!0),je.needsLights){const Ht=ua(D.state.lightProbeGridArray,ne);je.lightProbeGrid!==Ht&&(je.lightProbeGrid=Ht,Ui=!0)}if(ii||xe!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(Z,"projectionMatrix",A.projectionMatrix),kt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Yi=kt.map.cameraPosition;Yi!==void 0&&Yi.setValue(Z,Bt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&kt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&kt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,Ui=!0,ai=!0)}if(je.needsLights&&(Hn.state.directionalShadowMap.length>0&&kt.setValue(Z,"directionalShadowMap",Hn.state.directionalShadowMap,pe),Hn.state.spotShadowMap.length>0&&kt.setValue(Z,"spotShadowMap",Hn.state.spotShadowMap,pe),Hn.state.pointShadowMap.length>0&&kt.setValue(Z,"pointShadowMap",Hn.state.pointShadowMap,pe)),ne.isSkinnedMesh){kt.setOptional(Z,ne,"bindMatrix"),kt.setOptional(Z,ne,"bindMatrixInverse");const Ht=ne.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),kt.setValue(Z,"boneTexture",Ht.boneTexture,pe))}ne.isBatchedMesh&&(kt.setOptional(Z,ne,"batchingTexture"),kt.setValue(Z,"batchingTexture",ne._matricesTexture,pe),kt.setOptional(Z,ne,"batchingIdTexture"),kt.setValue(Z,"batchingIdTexture",ne._indirectTexture,pe),kt.setOptional(Z,ne,"batchingColorTexture"),ne._colorsTexture!==null&&kt.setValue(Z,"batchingColorTexture",ne._colorsTexture,pe));const Oi=se.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&V.update(ne,se,Rn),(Ui||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,kt.setValue(Z,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=D2()),Ui){if(kt.setValue(Z,"toneMappingExposure",X.toneMappingExposure),je.needsLights&&ln(rn,ai),Be&&te.fog===!0&&He.refreshFogUniforms(rn,Be),He.refreshMaterialUniforms(rn,te,Ae,Ee,D.state.transmissionRenderTarget[A.id]),je.needsLights&&je.lightProbeGrid){const Ht=je.lightProbeGrid;rn.probesSH.value=Ht.texture,rn.probesMin.value.copy(Ht.boundingBox.min),rn.probesMax.value.copy(Ht.boundingBox.max),rn.probesResolution.value.copy(Ht.resolution)}au.upload(Z,mi(je),rn,pe)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(au.upload(Z,mi(je),rn,pe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&kt.setValue(Z,"center",ne.center),kt.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),kt.setValue(Z,"normalMatrix",ne.normalMatrix),kt.setValue(Z,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Ht=te.uniformsGroups;for(let Yi=0,Va=Ht.length;Yi<Va;Yi++){const As=Ht[Yi];_e.update(As,Rn),_e.bind(As,Rn)}}return Rn}function ln(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ga(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Y,se){const te=oe.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=Y,oe.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=oe.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,se=0){$=A,O=Y,H=se;let te=null,ne=!1,Be=!1;if(A){const Te=oe.get(A);if(Te.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Te.__webglFramebuffer),U.copy(A.viewport),K.copy(A.scissor),Me=A.scissorTest,E.viewport(U),E.scissor(K),E.setScissorTest(Me),ge=-1;return}else if(Te.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Te.__hasExternalTextures)pe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Te.__boundDepthTexture!==Ke){if(Ke!==null&&oe.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Be=!0);const We=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?te=We[Y][se]:te=We[Y],ne=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?te=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[se]:te=We,U.copy(A.viewport),K.copy(A.scissor),Me=A.scissorTest}else U.copy(et).multiplyScalar(Ae).floor(),K.copy(Yt).multiplyScalar(Ae).floor(),Me=lt;if(se!==0&&(te=ce),E.bindFramebuffer(Z.FRAMEBUFFER,te)&&E.drawBuffers(A,te),E.viewport(U),E.scissor(K),E.setScissorTest(Me),ne){const Te=oe.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Te.__webglTexture,se)}else if(Be){const Te=Y;for(let ze=0;ze<A.textures.length;ze++){const We=oe.get(A.textures[ze]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+ze,We.__webglTexture,se,Te)}}else if(A!==null&&se!==0){const Te=oe.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Te.__webglTexture,se)}ge=-1},this.readRenderTargetPixels=function(A,Y,se,te,ne,Be,Ye,Te=0){if(!(A&&A.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(ze=ze[Ye]),ze){E.bindFramebuffer(Z.FRAMEBUFFER,ze);try{const We=A.textures[Te],Ke=We.format,it=We.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Te),!N.textureFormatReadable(Ke)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(it)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&se>=0&&se<=A.height-ne&&Z.readPixels(Y,se,te,ne,Ce.convert(Ke),Ce.convert(it),Be)}finally{const We=$!==null?oe.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,te,ne,Be,Ye,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(ze=ze[Ye]),ze)if(Y>=0&&Y<=A.width-te&&se>=0&&se<=A.height-ne){E.bindFramebuffer(Z.FRAMEBUFFER,ze);const We=A.textures[Te],Ke=We.format,it=We.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Te),!N.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.bufferData(Z.PIXEL_PACK_BUFFER,Be.byteLength,Z.STREAM_READ),Z.readPixels(Y,se,te,ne,Ce.convert(Ke),Ce.convert(it),0);const _t=$!==null?oe.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,_t);const Nt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Iy(Z,Nt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Be),Z.deleteBuffer(Ze),Z.deleteSync(Nt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const te=Math.pow(2,-se),ne=Math.floor(A.image.width*te),Be=Math.floor(A.image.height*te),Ye=Y!==null?Y.x:0,Te=Y!==null?Y.y:0;pe.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,Ye,Te,ne,Be),E.unbindTexture()},this.copyTextureToTexture=function(A,Y,se=null,te=null,ne=0,Be=0){let Ye,Te,ze,We,Ke,it,Ze,_t,Nt;const zt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(se!==null)Ye=se.max.x-se.min.x,Te=se.max.y-se.min.y,ze=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,Ke=se.min.y,it=se.isBox3?se.min.z:0;else{const rn=Math.pow(2,-ne);Ye=Math.floor(zt.width*rn),Te=Math.floor(zt.height*rn),A.isDataArrayTexture?ze=zt.depth:A.isData3DTexture?ze=Math.floor(zt.depth*rn):ze=1,We=0,Ke=0,it=0}te!==null?(Ze=te.x,_t=te.y,Nt=te.z):(Ze=0,_t=0,Nt=0);const wt=Ce.convert(Y.format),Ut=Ce.convert(Y.type);let je;Y.isData3DTexture?(pe.setTexture3D(Y,0),je=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(pe.setTexture2DArray(Y,0),je=Z.TEXTURE_2D_ARRAY):(pe.setTexture2D(Y,0),je=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Hn=E.getParameter(Z.UNPACK_ROW_LENGTH),Mt=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),Rn=E.getParameter(Z.UNPACK_SKIP_PIXELS),ii=E.getParameter(Z.UNPACK_SKIP_ROWS),Ui=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,zt.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,zt.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,We),E.pixelStorei(Z.UNPACK_SKIP_ROWS,Ke),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,it);const ai=A.isDataArrayTexture||A.isData3DTexture,kt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const rn=oe.get(A),Oi=oe.get(Y),Ht=oe.get(rn.__renderTarget),Yi=oe.get(Oi.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Ht.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Va=0;Va<ze;Va++)ai&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,ne,it+Va),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,Be,Nt+Va)),Z.blitFramebuffer(We,Ke,Ye,Te,Ze,_t,Ye,Te,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||oe.has(A)){const rn=oe.get(A),Oi=oe.get(Y);E.bindFramebuffer(Z.READ_FRAMEBUFFER,fe),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Ht=0;Ht<ze;Ht++)ai?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rn.__webglTexture,ne,it+Ht):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,rn.__webglTexture,ne),kt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Oi.__webglTexture,Be,Nt+Ht):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Oi.__webglTexture,Be),ne!==0?Z.blitFramebuffer(We,Ke,Ye,Te,Ze,_t,Ye,Te,Z.COLOR_BUFFER_BIT,Z.NEAREST):kt?Z.copyTexSubImage3D(je,Be,Ze,_t,Nt+Ht,We,Ke,Ye,Te):Z.copyTexSubImage2D(je,Be,Ze,_t,We,Ke,Ye,Te);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(je,Be,Ze,_t,Nt,Ye,Te,ze,wt,Ut,zt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(je,Be,Ze,_t,Nt,Ye,Te,ze,wt,zt.data):Z.texSubImage3D(je,Be,Ze,_t,Nt,Ye,Te,ze,wt,Ut,zt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Be,Ze,_t,Ye,Te,wt,Ut,zt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Be,Ze,_t,zt.width,zt.height,wt,zt.data):Z.texSubImage2D(Z.TEXTURE_2D,Be,Ze,_t,Ye,Te,wt,Ut,zt);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Hn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Rn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ii),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ui),Be===0&&Y.generateMipmaps&&Z.generateMipmap(je),E.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){O=0,H=0,$=null,E.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const N2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",U2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",O2="/assets/CXLMediumItalic-DYSp-DoC.otf",P2=4,I2=5,Oa={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function AS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function F2(a){return AS(a)}function B2(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function z2(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*I2/P2);return{W:o,H:c}}function RS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function sn(a,e,i,r,o,c,u){RS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function pn(a,e,i,r,o,c,u,h){RS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function _u(a,e,i,r,o,c){sn(a,e,i,r,o,c,"#0c0e12"),pn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function vu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,p=e+r-o-m,g=i+o-2*u;return pn(a,p,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(p+6*u,g+6*u),a.lineTo(p+m-6*u,g+m-6*u),a.moveTo(p+m-6*u,g+6*u),a.lineTo(p+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function CS(a,e,i,r,o,c,u,h){const m=28*h,p=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*p,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+p/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,p-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function H2(a,e,i,r,o,c,u,h,m){const p=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${p}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function G2(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,p=34*u;sn(a,e,m,r,p,6*u,"rgba(255,255,255,0.04)"),pn(a,e,m,r,p,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+p*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+p/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+p}function V2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;sn(a,e,u,r,h,8*o,"#050508"),pn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),sn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function k2(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;pn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const p=e+m+8*o,g=r-m-8*o;return sn(a,p,u,g,h,6*o,"rgba(255,255,255,0.06)"),pn(a,p,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(p,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,p+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function yp(a,e,i,r,o){const c=44*o;sn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),pn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return sn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Oa.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Oa.role} · ${Oa.didShort}`,e+8*o+u+8*o,i+32*o),c}function X2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),sn(a,e,i,r,c,h,m),pn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),pn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Oa.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const p=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Oa.name.toUpperCase(),e+u,p-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Oa.role} · ${Oa.version}`,e+u,p-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Oa.didShort,e+u,p);const g=28*o;return sn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),pn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function W2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),sn(a,e,i,r,c,h,m),pn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let p=0;p<3;p++){const g=5*o+p*3.5*o,_=4*o+p*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Oa.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function q2(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);sn(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const p=Math.max(m,r*c/100);sn(a,e,h,p,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+p,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function Y2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,p=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);sn(a,x,p,h,m,6*o,"rgba(255,255,255,0.04)"),pn(a,x,p,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,p+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,p+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(b,x+h/2,p+34*o)}),a.textAlign="left",c+8*o+m}function Z2(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;sn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),pn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,p=u-m*2,g=r-m*2-p;return sn(a,e+m,i+m,p+g*h,p,p/2,"rgba(200,245,168,0.18)"),sn(a,e+m,i+m,p,p,p/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+p/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+p*.15,i+u*.62),a.textAlign="left",u}const ul=2,no={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function yv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,p=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);sn(a,x,i,m,p,6*c,"rgba(255,255,255,0.04)"),pn(a,x,i,m,p,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",p}function j2(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:no.riskScore},{label:"Rep",value:no.reputation}],u=4*o,h=22*o,m=5*o;let p=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(p+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";sn(a,p,i,x,h,4*o,b),pn(a,p,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(p+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=p+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),p+=x+u}return a.textAlign="left",h}function K2(a,e,i,r,o){const c=no.receipts,u=22*o,h=14*o+c.length*u;return sn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),pn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,p)=>{const g=i+14*o+p*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function Q2(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),sn(a,e,i,r,c,h,m),pn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),pn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const p=40*o,g=16*o,_=e+r-u-p,v=i+u-1*o;return sn(a,_,v,p,g,8*o,"rgba(200,245,168,0.14)"),pn(a,_,v,p,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+p/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function J2(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return sn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),pn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,p,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(p,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function $2(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,p=(c%ul+ul)%ul,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][p];_u(a,e,i,r,o,m);let _=vu(a,e,i,r,h,g.header,u);_=H2(a,e,_,r,h,g.segment,p+1,ul,u);const v=i+o-h;if(p===0){_+=yp(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=j2(a,e+h,_,r-h*2,u)+8*u);const b=[["SHARPE",no.sharpe],["ROI",no.roi],["RISK",no.riskScore]];_+36*u<=v&&(_+=yv(a,e+h,_,r-h*2,b,u)+8*u),_+70*u<=v&&K2(a,e+h,_,r-h*2,u);return}_+=Q2(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=J2(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&yv(a,e+h,_,r-h*2,x,u)}function eR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;_u(a,e,i,r,o,m);let p=vu(a,e,i,r,h,"COPY TRADE",u);p=CS(a,e,p,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const b=6*u,w=r-h*2;let y=(w-b)/2,M=Math.min(y*190/316,y*.58);const I=Math.max(64*u,v-p-28*u);M>I&&(y=y*(I/M),M=I);const z=u*(y/((w-b)/2)),C=e+h+(w-(y*2+b))/2;W2(a,C,p,y,z),X2(a,C+y+b,p,y,z),p+=M+10*u;const P=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],D=5*u,F=(r-h*2-D*2)/3,T=32*u;p+T<=v&&(P.forEach(([L,X],k)=>{const j=e+h+k*(F+D);sn(a,j,p,F,T,6*u,"rgba(255,255,255,0.04)"),pn(a,j,p,F,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(L,j+F/2,p+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(X,j+F/2,p+24*u)}),a.textAlign="left")}else p+=yp(a,e+h,p,r-h*2,u)+10*u,p+36*u<v&&(p+=q2(a,e+h,p,r-h*2,u,25)+10*u),p+50*u<v&&Y2(a,e+h,p,r-h*2,u);Z2(a,e+h,_,r-h*2,u)}const tR=2,nR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function iR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function aR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;_u(a,e,i,r,o,h);let m=vu(a,e,i,r,u,"ACTIVITY LOG",c);const p=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,b=e+r-u-x,w=e+u+g+v+_/2,y=nR,M=4*c;y.forEach((I,z)=>{if(m>=p-8*c)return;const C=z===0,P=z===y.length-1,D=iR(I.status),F=8*c,T=6*c,L=7*c,X=8*c,k=I.showActions?22*c:0,j=I.showActions?5*c:0,fe=Math.max(F+2*c+T,L+4*c+X)+j+k+M;if(m+Math.min(fe,28*c)>p)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${F}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+u+g,m+F),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+u+g,m+F+2*c+T),a.textAlign="left",P||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+fe),a.stroke());const q=2.4*c;a.beginPath(),a.arc(w,m+5*c,q,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(w,m+5*c,q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const O=4*c,H=2*c;a.font=`700 ${L}px "DM Mono", ui-monospace, monospace`;const $=I.statusLabel.toUpperCase(),ge=a.measureText($).width+O*2,xe=L+H*2;sn(a,x,m,ge,xe,3*c,D.bg),a.fillStyle=D.fg,a.fillText($,x+O,m+L+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const U=m+xe+3*c+X;let K=I.action;if(I.pnl){const Me=`${I.action} · `;a.fillText(Me,x,U);const we=a.measureText(Me).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,x+we,U)}else{for(;K.length>8&&a.measureText(K).width>b;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,U)}if(I.showActions&&m+xe+3*c+X+j+k<=p){const Me=m+xe+3*c+X+j,we=(b-5*c)/2;pn(a,x,Me,we,k,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+we/2,Me+k*.68),sn(a,x+we+5*c,Me,we,k,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+we+5*c+we/2,Me+k*.68),a.textAlign="left"}m+=fe})}function sR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;_u(a,e,i,r,o,h);let m=vu(a,e,i,r,u,"FUND BUCKET",c);m=CS(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=yp(a,e+u,m,r-u*2,c)+8*c,m+=G2(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const p=10*c+36*c;i+o-u-p-m-8*c>70*c&&(m+=V2(a,e+u,m,r-u*2,c)+6*c),k2(a,e+u,i+o-u-p,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function wS(a,e,i,r,o,c,u=0){switch(e){case"discover":$2(a,i,r,o,c,u);break;case"copy":eR(a,i,r,o,c,u);break;case"supervise":aR(a,i,r,o,c);break;case"isolate":sR(a,i,r,o,c);break}}function rR(a,e,i,r,o=0){a.clearRect(0,0,i,r),wS(a,e,0,0,i,r,o)}function oR(a,e,i,r,o){const{W:c,H:u}=z2(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),p=m.createLinearGradient(0,0,0,u);p.addColorStop(0,"#080a0e"),p.addColorStop(.55,"#05070d"),p.addColorStop(1,"#030406"),m.fillStyle=p,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),x=c-g*2;let b=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,b+w*.85),b+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=B2(m,a.description,x);m.fillText(M[0]??a.description,g,b+y),b+=Math.round(.07*u),b+=Math.round(.03*u);const I=g,z=b,C=x,P=Math.max(80*i,u-b-v);wS(m,F2(e),I,z,C,P);const D=new hS(h);return D.colorSpace=Zn,D.minFilter=ys,D.generateMipmaps=!0,D}const Qr=ph.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),dn=Qr.length,xs=2.95,pl=6.9,Ep=32,DS=4,LS=5,sp=2.05,lR=1,cR=xs*.55,Ev=.35,bv=.85,uR=15,Tv=uR/60*1e3,fR=.1;function NS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const dR=1.35,hR=.72,pR=.62,mR=.2,gR=14,_R=.42,vR=128,SR=12,xR=.004,MR=.0022,Av=.12,yR=.88,ER=4,bR=22,TR=32,AR=40,RR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,CR=`
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
`,wR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DR=`
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
`,LR='"Reckk Heading", Georgia, "Times New Roman", serif',US="Morpheum Wordmark",vl=`"${US}"`,NR=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function UR(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(US,`url(${O2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${vl}`);const e=document.fonts.check(`normal 152px ${vl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function OR(){if(!(typeof document>"u"||!document.fonts))try{await UR();const a=new FontFace("Reckk Title",`url(${U2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${N2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${vl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Ys="flow-intro-hide-chrome";function Rv(a){return a<=72}const PR=280;function rp(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function dh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;rp(e)}function Jr(a){const e=tn.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function fl(a){const e=Math.max(1,a),i=Math.max(1,dn*e*lR),r=Math.max(1,i/Math.max(1,dn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const IR=320,FR=520,BR=980,zR=50,HR=70,Cv=.35;function GR(a){return Math.max(2,Math.max(1,a)*.004)}function VR(a){const e=tn.clamp(a,0,1);return 1-Math.pow(1-e,3)}function kR(a){const e=tn.clamp(a,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function XR(a,e){const{cardPx:i,titlePx:r}=fl(e),o=Math.max(1,dn-1),c=tn.clamp(Math.round(a),0,dn-1);return r+c/o*i}function wv(a,e,i){return a.offsetTop+XR(e,i)}function WR(a,e){const i=dn-1,r=tn.clamp(a,0,i);if(e===0)return tn.clamp(Math.round(r),0,i);const o=Math.floor(r),c=Math.min(i,o+1),u=r-o;return e>0?u>=Cv?c:o:u<=1-Cv?o:c}function hh(a,e,i,r,o,c){return!(r||a<e||a>i||o<c*.5)}function Dv(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function qR(a,e,i,r,o,c){if(i||a<=e)return!1;const u=Math.max(1,o-r),h=(c-r)/u;return h>0&&h<1-.001}function OS(a,e){const i=a/Math.max(1,e),r=Ep*Math.PI/180,o=2*pl*Math.tan(r/2),c=o*i,u=sp*DS/LS,h=.992,m=h*o/sp,p=h*c/u;return tn.clamp(Math.min(m,p),.52,2.35)}function Lv(a,e,i){const r=NS(a),o=OS(a,e),c=a/Math.max(1,e),u=Ep*Math.PI/180,m=2*pl*Math.tan(u/2)*c,p=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,p);return{w:g,h:g*i}}function YR(a,e){const i=a/Math.max(1,dn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function ZR(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function jR(a,e){const i=tn.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=Jr(tn.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function KR(a,e,i,r=0){const o=dn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=tn.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=Jr(tn.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function QR(a){return new Di({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:fR}},vertexShader:wR,fragmentShader:DR,transparent:!0,depthWrite:!0,depthTest:!0,side:Fa})}function JR(a,e){return a>1.5&&a<e-.5}function $R(a){return tn.clamp(540/Math.max(a,340),.2,.55)}function e3(a,e,i){const r=[],o=gR;for(let c=0;c<o;c++){const u=tn.clamp(a-c/Math.max(1,o-1)*_R,-.08,1.08),h=Math.sin(u*Math.PI*2*dR)*pR*i,m=Math.sin(u*Math.PI*2*hR)*mR,p=Av+c/Math.max(1,o-1)*(yR-Av),g=e-p;r.push(new ee(h,m,g))}return r}function t3(a,e,i,r){const o=a.length;if(o<2)return new wi;const c=[],u=[],h=[],m=[],p=new ee,g=new ee,_=new ee,v=new ee(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?p.subVectors(a[1],a[0]).normalize():w===o-1?p.subVectors(a[o-1],a[o-2]).normalize():p.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(p),g.lengthSq()<1e-8&&g.set(1,0,0).cross(p),g.normalize(),_.crossVectors(p,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const z=I/e*Math.PI*2,C=Math.cos(z),P=Math.sin(z),D=a[w];c.push(D.x+(C*g.x+P*_.x)*M,D.y+(C*g.y+P*_.y)*M,D.z+(C*g.z+P*_.z)*M),u.push(C*g.x+P*_.x,C*g.y+P*_.y,C*g.z+P*_.z),h.push(o===1?0:w/(o-1),I/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,I=M+1,z=M+x,C=z+1;m.push(M,z,I,I,z,C)}const b=new wi;return b.setAttribute("position",new Ri(c,3)),b.setAttribute("normal",new Ri(u,3)),b.setAttribute("uv",new Ri(h,2)),b.setIndex(m),b.computeBoundingSphere(),b}function Nv(a,e,i,r){const o={verb:a.verb,description:a.description};return oR(o,e,i,r,LR)}function Uv(a,e){const i=NS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let p=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${p*r}px ${vl}`};g();const _=P=>{h.font=`normal ${P*r}px ${vl}`;const D=h.measureText(m),F=Math.abs(D.actualBoundingBoxLeft??0),T=Math.abs(D.actualBoundingBoxRight??D.width),L=Math.abs(D.actualBoundingBoxAscent??P*r*.8),X=Math.abs(D.actualBoundingBoxDescent??P*r*.25);return{left:F,right:T,width:F+T,ascent:L,descent:X}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,b=40*r+v,w=P=>{const D=_(P);return D.width+x*2<=o&&D.ascent+D.descent+b*2<=c};for(;!w(p)&&p>64;)p-=2;for(;w(p+2)&&p<i.fontPx+24;)p+=2;g();const y=_(p),M=(o-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,I-y.ascent,M+y.right,I+y.descent);NR.forEach(P=>z.addColorStop(P.t,P.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,I),h.fillStyle=z,h.fillText(m,M,I);const C=new hS(u);return C.colorSpace=Zn,C.minFilter=An,C.magFilter=An,C.generateMipmaps=!1,C}function Ov(a,e){a.generateMipmaps=!1,a.minFilter=An,a.magFilter=An,a.wrapS=Vi,a.wrapT=Vi;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function n3(){const a=Je.useRef(null),e=Je.useRef(null),i=Je.useRef(null),r=Je.useRef(null),o=Je.useRef(!1),c=Je.useRef(null),u=Je.useCallback(()=>{var m;if(o.current)return;o.current=!0,(m=c.current)==null||m.call(c);const h=e.current;h==null||h.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(Ys),dh(),requestAnimationFrame(()=>{dh(),requestAnimationFrame(()=>{dh(),window.setTimeout(()=>{o.current=!1},100)})})},PR)},[]);return Je.useLayoutEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.location.hash.replace(/^#/,"");return h||m!==""&&m!=="flow"&&m!=="hero"||document.body.classList.add(Ys),()=>{document.body.classList.remove(Ys)}},[]),Je.useEffect(()=>{const h=m=>{if(m.key!=="Escape")return;const p=document.getElementById("hero");p&&p.getBoundingClientRect().top>8&&(m.preventDefault(),u())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[u]),Je.useEffect(()=>{const h=window.location.hash.replace(/^#/,"");h&&h!=="flow"&&h!=="hero"&&requestAnimationFrame(()=>{var m;(m=document.getElementById(h))==null||m.scrollIntoView({block:"start"})})},[]),Je.useEffect(()=>{const h=i.current,m=a.current;if(!h||!m)return;const p=h,g=m;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Ys);const b=r.current;b&&(b.style.height="0px");return}let x;return(async()=>{if(await OR(),_)return;const b=Math.min(window.devicePixelRatio,2),w=Math.max(320,p.clientWidth||window.innerWidth),y=Math.max(1,p.clientHeight||window.innerHeight),M=[],I=[],z=[],C=new Float64Array(dn).fill(-1);Qr.forEach((be,Ue)=>{const Oe=dn-1-Ue,V=Qr[Oe],Re=Nv(V,Oe,b,w);z.push(Re);const ue=QR(Re);M.push(ue);const Ce=sp,De=Ce*DS/LS,_e=new Ci(new Js(De,Ce),ue);_e.position.set(0,0,-Ue*xs),_e.renderOrder=Ue,I.push(_e)});const P=Uv(b,w),D=new xp({map:P,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:ta}),F=P.image.height/P.image.width,{w:T,h:L}=Lv(w,y,F),X=new Ci(new Js(T,L),D);X.position.set(0,0,-(dn-1)*xs),X.renderOrder=AR;const k=new hE,j=new Ti(Ep,1,.08,120),ce=new L2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),ce.outputColorSpace=Zn,ce.sortObjects=!0,p.appendChild(ce.domElement),Ov(P,ce);const fe=new ll;I.forEach(be=>fe.add(be)),fe.add(X),k.add(fe);const q=new Di({uniforms:{uStrength:{value:0}},vertexShader:RR,fragmentShader:CR,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:mh}),O=new Ci(new wi,q);O.frustumCulled=!1,O.renderOrder=bR,O.visible=!1,k.add(O);const H=Qr.map(be=>new Ct(be.mood.mid)),$=H[0].clone();k.background=$;const ge=0,xe=-(dn-1)*xs,U=pl,K=-.1*xs,Me=.1*xs;function we(be,Ue){const Oe=be+pl;return(U-Oe)/Ue}function Ge(){const be=Math.max(1,window.innerHeight),{totalPx:Ue}=fl(be),Oe=Math.max(1,Ue),V=ge+K,Re=xe+Me-cR,Ce=(V-Re)/Oe,De=we(V,Ce),_e=we(Re,Ce);return{ih:be,totalPx:Oe,scrollToWorldFactor:Ce,minScroll:De,maxScroll:_e}}let{scrollToWorldFactor:re,minScroll:Ee,maxScroll:Ae}=Ge();const qe=new Ct,nt=new Ct,et=new Ct;function Yt(){var De;const be=Math.max(320,p.clientWidth||window.innerWidth),Ue=Math.min(window.devicePixelRatio,2);z.forEach((_e,Xe)=>{_e.dispose();const Ve=dn-1-Xe,dt=Nv(Qr[Ve],Ve,Ue,be);z[Xe]=dt,M[Xe].uniforms.uMap.value=dt}),(De=D.map)==null||De.dispose();const Oe=Uv(Ue,be);D.map=Oe,D.needsUpdate=!0,Ov(Oe,ce);const V=Oe.image.height/Oe.image.width,Re=Math.max(1,p.clientHeight||window.innerHeight),{w:ue,h:Ce}=Lv(be,Re,V);X.geometry.dispose(),X.geometry=new Js(ue,Ce)}function lt(){const be=p.clientWidth,Ue=p.clientHeight;if(be<2||Ue<2)return;j.aspect=be/Ue,j.updateProjectionMatrix(),ce.setSize(be,Ue,!1),Yt();const Oe=Ge();re=Oe.scrollToWorldFactor,Ee=Oe.minScroll,Ae=Oe.maxScroll;const V=Math.max(1,window.innerHeight),{totalPx:Re}=fl(V),ue=r.current;if(ue){const Ce=V*Ev,De=Math.max(Math.ceil(Re+Ce+V*bv+32),Math.ceil(V*1.08));ue.style.height=`${De}px`}}lt(),requestAnimationFrame(()=>{_||Yt()});let mt=0;function gt(){var Be,Ye;if(_)return;mt=requestAnimationFrame(gt);const be=Math.max(1,window.innerHeight),{cardPx:Ue,titlePx:Oe,totalPx:V}=fl(be),Re=g.getBoundingClientRect(),ue=Math.max(1,g.offsetHeight-be),Ce=tn.clamp(-Re.top,0,ue),De=Math.min(Ce,V),_e=Math.max(1,V),Xe=be*Ev,Ve=Jr(tn.clamp((Ce-V)/Math.max(1,Xe),0,1)),dt=tn.mapLinear(Ue,0,_e,Ee,Ae),rt=p.clientWidth,mn=p.clientHeight,cn=Math.max(1,Oe),zn=De<cn,la=zn?tn.clamp(De/cn,0,1):0,bs=Math.max(0,De-cn),Ha=Math.max(1,Ue),$t=tn.clamp(bs/Ha,0,1)*(dn-1),Sn=OS(rt,mn),Ln=document.getElementById("hero"),ca=Ln?Ln.getBoundingClientRect().top:0,Ts=Ln?Rv(ca):!0;let Xi;zn?Xi=tn.mapLinear(De,0,cn,Ae,dt):Xi=tn.mapLinear(De,cn,_e,dt,Ee),Xi=tn.clamp(Xi,Ee,Ae);const Wi=YR(Ue,be),qi=ZR(cn,be),Ni=jR(la,qi),mi=dn-1;if(zn)et.copy(H[0]);else{const Te=Math.min(dn-2,Math.floor($t)),ze=Math.min(Te+1,dn-1),We=Jr($t-Te);qe.copy(H[Te]),nt.copy(H[ze]),et.lerpColors(qe,nt,We)}k.background=$.copy(et);const ni=U-Xi*re;j.position.set(0,0,ni),j.lookAt(0,0,ni-pl);const ua=tn.clamp(De/_e,0,1);if(JR(De,_e)){const Te=e3(ua,ni,$R(rt)),We=new AE(Te,!1,"centripetal").getSpacedPoints(vR);if(We.length>=2){const Ke=t3(We,SR,xR,MR),it=O.geometry.getAttribute("position"),Ze=Ke.getAttribute("position");if(it&&Ze&&it.count===Ze.count&&((Be=O.geometry.getIndex())==null?void 0:Be.count)===((Ye=Ke.getIndex())==null?void 0:Ye.count)&&it&&Ze){it.array.set(Ze.array),it.needsUpdate=!0;const Nt=O.geometry.getAttribute("normal"),zt=Ke.getAttribute("normal");Nt&&zt&&(Nt.array.set(zt.array),Nt.needsUpdate=!0);const wt=O.geometry.getAttribute("uv"),Ut=Ke.getAttribute("uv");wt&&Ut&&(wt.array.set(Ut.array),wt.needsUpdate=!0),Ke.dispose()}else O.geometry.dispose(),O.geometry=Ke;O.visible=!0,q.uniforms.uStrength.value=.36}else O.visible=!1,q.uniforms.uStrength.value=0}else O.visible=!1,q.uniforms.uStrength.value=0;const ln=Math.floor((dn-1)/2),Ga=performance.now(),A=tn.clamp(Wi,0,.999);for(let Te=0;Te<dn;Te++){if(zn||$t<=Te+1e-5||$t<Te+A){C[Te]=-1;continue}C[Te]<0&&($t>=Te+1-1e-5?C[Te]=Ga-Tv:C[Te]=Ga)}I.forEach((Te,ze)=>{const We=-ze*xs,Ke=dn-1-ze,it=C[Ke];let Ze=it<0?0:Jr(tn.clamp((Ga-it)/Tv,0,1));!zn&&Ke===dn-1&&Ve>0&&(Ze=Math.max(Ze,Ve));let{opacity:_t}=KR($t,Ke,Wi,Ze);zn&&ze===mi&&(_t*=Ni.lastCardOp,Ze=0),Te.position.set(0,0,We),Te.scale.setScalar(Sn);const Nt=M[ze];Nt.uniforms.uOpacity.value=_t,Nt.uniforms.uWipe.value=Ze,Nt.depthWrite=_t>=.995&&Ze<.02,Te.visible=_t>.003&&Ze<.997,Te.renderOrder=ze<=ln?ER+ze:TR+(ze-ln-1)}),X.position.set(0,0,-mi*xs),X.scale.setScalar(Sn),D.opacity=zn?Ni.titleOp:0,D.depthWrite=D.opacity>=.995,X.visible=D.opacity>.003;const Y=V+Xe;let se=0;if(ue>Y&&Ce>=Y){const Te=Math.max(1,ue-Y);se=Jr(tn.clamp((Ce-Y)/Te,0,1))}if(se>.02&&(O.visible=!1,q.uniforms.uStrength.value=0),!o.current){document.body.classList.toggle(Ys,!Ts);const Te=e.current;Te!=null&&Te.classList.contains("flow-intro__sticky--exit")&&!Ts&&(Te.style.transition="none",Te.classList.remove("flow-intro__sticky--exit"),Te.offsetWidth,Te.style.transition="")}const te=r.current;if(te){const Te=Xe+be*bv+32,ze=Math.max(Math.ceil(V+Te),Math.ceil(be*1.08));te.style.height!==`${ze}px`&&(te.style.height=`${ze}px`)}const ne=1-se*.96;e.current&&e.current.style.setProperty("--intro-ui-opacity",String(ne)),ce.domElement.style.opacity=String(1-se),ce.render(k,j)}gt();let ot=0,Zt=0,Bt=!1,St=null,Gt=!1,Vt=window.scrollY,Jt=0,Z="wheel";function Lt(){Zt&&(window.clearTimeout(Zt),Zt=0)}function xt(){ot&&(cancelAnimationFrame(ot),ot=0),Bt=!1,St=null}function N(){xt(),Lt()}c.current=N;function E(){var rt;const be=Math.max(1,window.innerHeight),{cardPx:Ue,titlePx:Oe,totalPx:V}=fl(be),Re=g.getBoundingClientRect(),ue=Math.max(1,g.offsetHeight-be),Ce=tn.clamp(-Re.top,0,ue),De=document.getElementById("hero"),_e=De?Rv(De.getBoundingClientRect().top):!0,Xe=((rt=e.current)==null?void 0:rt.getBoundingClientRect().bottom)??be,dt=Math.max(0,Math.min(Ce,V)-Oe)/Math.max(1,Ue)*(dn-1);return{innerH:be,cardPx:Ue,titlePx:Oe,totalPx:V,scrolledPx:Ce,landed:_e,stickyBottom:Xe,depthT:dt}}function Q(){if(_||o.current||Gt)return;Lt();const be=Z==="touch"?HR:zR;Zt=window.setTimeout(()=>{Zt=0,oe()},be)}function oe(){if(_||o.current||Bt||Gt)return;const be=E(),Ue=hh(be.scrolledPx,be.titlePx,be.totalPx,be.landed,be.stickyBottom,be.innerH);let Oe=null,V=null,Re=IR;if(Ue){const dt=WR(be.depthT,Jt);Oe=wv(g,dt,be.innerH),V="card"}else{const dt=Dv();if(dt==null)return;const rt=wv(g,dn-1,be.innerH);if(!qR(be.scrolledPx,be.totalPx,be.landed,rt,dt,window.scrollY))return;Oe=dt,V="hero";const mn=Math.abs(dt-window.scrollY);Re=tn.clamp(mn*.55,FR,BR)}if(Oe==null||V==null)return;const ue=window.scrollY,Ce=Oe-ue;if(Math.abs(Ce)<GR(be.innerH))return;Bt=!0,St=V;const De=performance.now(),_e=Oe,Xe=Re,Ve=dt=>{if(_||o.current){Bt=!1,St=null,ot=0;return}const rt=E();if(St==="card"){if(!hh(rt.scrolledPx,rt.titlePx,rt.totalPx,rt.landed,rt.stickyBottom,rt.innerH)){xt(),St=null;return}}else if(St==="hero"&&rt.scrolledPx<=rt.totalPx){xt(),St=null;return}const mn=Math.min(1,(dt-De)/Xe),cn=St==="hero"?kR(mn):VR(mn),zn=St==="hero"?Dv()??_e:_e,la=zn-ue;rp(ue+la*cn),mn<1?ot=requestAnimationFrame(Ve):(rp(zn),Bt=!1,St=null,ot=0,Jt=0)};ot=requestAnimationFrame(Ve)}function pe(be){Z="wheel",Math.abs(be.deltaY)>.5&&(Jt=be.deltaY>0?1:-1),xt(),Q()}function Le(){Z="touch",Gt=!0,N()}function Pe(){Z="touch",Gt=!0,xt()}function he(){Z="touch",Gt=!1,Q()}function me(){const be=window.scrollY,Ue=be-Vt;if(Vt=be,Bt){const Oe=E();St==="card"?hh(Oe.scrolledPx,Oe.titlePx,Oe.totalPx,Oe.landed,Oe.stickyBottom,Oe.innerH)||(N(),St=null):St==="hero"&&Oe.scrolledPx<=Oe.totalPx&&(N(),St=null);return}Math.abs(Ue)>.5&&(Jt=Ue>0?1:-1),Gt||Q()}function Ne(){Bt||o.current||Gt||(Lt(),oe())}function He(){N()}window.addEventListener("wheel",pe,{passive:!0}),window.addEventListener("touchstart",Le,{passive:!0}),window.addEventListener("touchmove",Pe,{passive:!0}),window.addEventListener("touchend",he,{passive:!0}),window.addEventListener("touchcancel",he,{passive:!0}),window.addEventListener("scroll",me,{passive:!0}),window.addEventListener("scrollend",Ne,{passive:!0}),window.addEventListener("resize",He,{passive:!0}),window.addEventListener("orientationchange",He,{passive:!0});const Ie=window.visualViewport;Ie&&Ie.addEventListener("resize",He),window.addEventListener("resize",lt,{passive:!0});const Fe=new ResizeObserver(lt);Fe.observe(p),x=()=>{var be;N(),c.current=null,cancelAnimationFrame(mt),document.body.classList.remove(Ys),window.removeEventListener("wheel",pe),window.removeEventListener("touchstart",Le),window.removeEventListener("touchmove",Pe),window.removeEventListener("touchend",he),window.removeEventListener("touchcancel",he),window.removeEventListener("scroll",me),window.removeEventListener("scrollend",Ne),window.removeEventListener("resize",He),window.removeEventListener("orientationchange",He),Ie&&Ie.removeEventListener("resize",He),window.removeEventListener("resize",lt),Fe.disconnect(),M.forEach(Ue=>{Ue.dispose()}),z.forEach(Ue=>Ue.dispose()),(be=D.map)==null||be.dispose(),D.dispose(),I.forEach(Ue=>Ue.geometry.dispose()),X.geometry.dispose(),O.geometry.dispose(),q.dispose(),k.remove(O),ce.dispose(),p.contains(ce.domElement)&&p.removeChild(ce.domElement)},_&&x()})(),()=>{var b;_=!0,(b=c.current)==null||b.call(c),c.current=null,document.body.classList.remove(Ys),x==null||x()}},[]),B.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[B.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[B.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),B.jsxs("div",{className:"flow-intro__top",children:[B.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),B.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:u,children:["Skip ",B.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),B.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Qr.map((h,m)=>B.jsxs("p",{children:["Step ",String(m+1).padStart(2,"0"),": ",h.verb,". ",h.description]},h.verb))})]}),B.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const i3=280,a3=5/4,s3=3800,r3={discover:ul,copy:tR};function o3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l3({stepIndex:a,kind:e,className:i,width:r=i3}){const o=Je.useRef(null),c=e??AS(a),u=Math.round(r*a3);return Je.useEffect(()=>{const h=o.current;if(!h)return;let m=0,p;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),w=Math.round(u*x);(h.width!==b||h.height!==w)&&(h.width=b,h.height=w);const y=h.getContext("2d");y&&rR(y,c,b,w,m)};g();const _=r3[c];_&&_>1&&!o3()&&(p=setInterval(()=>{m=(m+1)%_,g()},s3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),p&&clearInterval(p)}},[c,r,u]),B.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:B.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Pv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function c3(){return B.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[B.jsx("header",{className:"supervise-log__header",children:B.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),B.jsx("ol",{className:"supervise-log__timeline",children:Pv.map((a,e)=>{const i=e===Pv.length-1,r=e===0;return B.jsxs("li",{className:"supervise-log__item",children:[B.jsxs("div",{className:"supervise-log__meta",children:[B.jsx("span",{className:"supervise-log__agent",children:a.agent}),B.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),B.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:B.jsx("span",{className:"supervise-log__track-line"}),B.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),B.jsxs("div",{className:"supervise-log__body",children:[B.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),B.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?B.jsxs(B.Fragment,{children:[" · ",B.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?B.jsxs("div",{className:"supervise-log__actions",children:[B.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),B.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const u3=/^(action)$/i;function f3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>u3.test(i.trim())?B.jsx("span",{className:"stat-chip__brand",children:i},r):B.jsx("span",{children:i},r))}function PS({label:a,status:e,live:i}){return B.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[B.jsx("span",{className:"stat-chip__label",children:a}),B.jsx("span",{className:"stat-chip__sep",children:"·"}),B.jsx("span",{className:"stat-chip__status",children:f3(e)})]})}var d3=Vv();function h3(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function p3(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,h3(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Iv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=p3(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let p=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(p,_-1)),p=_-1),g=v}return p<a.length&&m.push(a.slice(p)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const m3=40,g3=5,_3="typewriter-reveal",Fv=1e3,v3=4e3;function Bv(){return Fv+Math.random()*(v3-Fv)}function IS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function S3({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const p=Je.useRef(null),g=Je.useRef(m),_=Je.useRef(null),v=Je.useRef(null),x=Je.useRef(null),b=Je.useRef("idle"),[w,y]=Je.useState("idle");g.current=m;const M=Je.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=Je.useCallback(()=>{var L;M(),v.current=null,x.current=null,b.current="complete",y("complete"),(L=g.current)==null||L.call(g)},[M]),z=Je.useCallback(L=>{M(),v.current=Date.now()+L,_.current=setTimeout(I,L)},[M,I]);Je.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),Je.useLayoutEffect(()=>{var H,$,ge;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(b.current==="cursor-hold"&&!_.current){const xe=x.current??Bv();x.current=null,z(xe);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(IS()){(H=g.current)==null||H.call(g);return}const L=p.current;if(!L||!a){($=g.current)==null||$.call(g);return}L.style.width="",L.offsetWidth;const X=Math.max(a.length/i*1e3,120),k=Math.max(a.length,1),j=L.closest(".typewriter-block"),ce=(j==null?void 0:j.clientWidth)??((ge=L.parentElement)==null?void 0:ge.clientWidth)??0;L.style.whiteSpace="nowrap",L.style.width="auto";const fe=L.scrollWidth,q=ce>0?Math.min(fe,ce):fe;L.style.width="0",L.style.setProperty("--tw-duration",`${X}ms`),L.style.setProperty("--tw-target-width",`${q}px`),L.style.setProperty("--tw-steps",String(k)),L.style.setProperty("--tw-cursor-width",`${r}px`),L.offsetWidth,b.current="animating",y("animating");const O=xe=>{if(xe.animationName===_3){if(h){L.style.width=`${q}px`,b.current="cursor-hold",y("cursor-hold"),z(Bv());return}L.style.width="",I()}};return L.addEventListener("animationend",O),()=>{L.removeEventListener("animationend",O)}},[o,u,I,h,z,i,a,c,M,r]);const C=w==="animating",P=w==="cursor-hold",D=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",P?"is-cursor-hold":"",u||D?"is-complete":"",!o&&!c&&!u&&!D&&(C||P)?"is-paused":""].filter(Boolean).join(" ");return B.jsx("span",{ref:p,className:T,children:e??a})}function bp({text:a,children:e,className:i,speed:r=m3,cursorWidth:o=g3,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const p=Je.useRef(null),g=Je.useRef(m),[_,v]=Je.useState([]),[x,b]=Je.useState(0),[w,y]=Je.useState(0),[M,I]=Je.useState(!1),[z,C]=Je.useState(!1),P=IS();g.current=m;const D=Je.useCallback(()=>{const fe=p.current;if(!fe||!a)return v([]),b(0),C(!0),!0;const q=fe.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!P,{lines:$,blockHeight:ge}=Iv(a,q,fe,H);let xe=ge;if(!H){const U=Iv(a,q,fe,!0);xe=Math.max(ge,U.blockHeight)}return v($),b(xe),C(!0),!0},[a,c,P]);Je.useLayoutEffect(()=>{var fe,q;if(y(0),I(!1),C(!1),v([]),b(0),P){(fe=g.current)==null||fe.call(g),C(!0);return}if(!a){(q=g.current)==null||q.call(g),C(!0);return}if(!D()){const O=new ResizeObserver(()=>{D()&&O.disconnect()});return p.current&&O.observe(p.current),()=>O.disconnect()}},[a,c,D,P]);const F=Je.useCallback(fe=>{var O;const q=fe>=_.length-1;d3.flushSync(()=>{if(!q){y(fe+1);return}I(!0)}),q&&((O=g.current)==null||O.call(g))},[_]),L=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",P?"is-static":""].filter(Boolean).join(" "),X={...!M&&!P&&x>0?{height:x,minHeight:x}:void 0},k=e??a;if(!z)return B.jsx("span",{ref:p,className:L,style:X,children:k});if(P||!a)return B.jsx("span",{ref:p,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:k});if(M)return B.jsx("span",{ref:p,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:k});const j=_.length>0?_:[a],ce=!!e&&j.length<=1;return B.jsxs("span",{ref:p,className:L,style:X,"aria-label":a,children:[B.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:k}),B.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((fe,q)=>B.jsx(S3,{text:fe,content:ce?e:void 0,speed:r,cursorWidth:o,waiting:q>w,active:u&&q===w,completed:q<w,holdCursor:h&&q===j.length-1,onComplete:q===w?()=>F(q):void 0},`${q}-${fe}`))})]})}function x3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function FS(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Je.useState(!1);return Je.useLayoutEffect(()=>{if(r)return;if(x3()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function M3(a){return String(a).padStart(2,"0")}function fu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const y3=1600,E3=1500,zv=5e3,b3=7e3;function T3(){return zv+Math.random()*(b3-zv)}function A3({text:a,active:e}){const[i,r]=Je.useState(!1),[o,c]=Je.useState(0),u=Je.useRef(null),h=`> ${a}`,m=Je.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Je.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(fu()){r(!0);return}const g=window.setTimeout(()=>r(!0),E3);return()=>{window.clearTimeout(g),m()}},[e,m]);const p=Je.useCallback(()=>{fu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},T3()))},[m]);return B.jsx("p",{className:"flow-step__example",children:i?B.jsx(bp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:p},o):B.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function R3(){const[a,e]=Je.useState(()=>new Set),[i,r]=Je.useState(!1),o=Je.useRef(new Map),c=Je.useRef(null),u=FS(c,{amount:.35}),h=hs.steps.every(_=>a.has(`step-${_.n}`));Je.useLayoutEffect(()=>{if(fu()){e(new Set(hs.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const b=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),Je.useLayoutEffect(()=>{if(fu())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},y3);return()=>window.clearTimeout(_)},[h]);const m=Je.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),p=Je.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return B.jsx("section",{id:"how",className:"section flow",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:hs.kicker}),B.jsx("h2",{className:"section-title flow__title",children:hs.title}),B.jsx("div",{className:"flow__chips",children:hs.chips.map(_=>B.jsx(PS,{label:_.label,status:_.value},_.label))}),B.jsx("div",{className:"flow__steps",role:"list",children:hs.steps.map((_,v)=>{const x=`step-${_.n}`,b=a.has(x);return B.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[B.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>p(x),"aria-label":b?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[B.jsxs("span",{className:"flow-step__idx",children:["Step ",M3(_.n)]}),B.jsx("h3",{className:"flow-step__title",children:_.title}),B.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),B.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:B.jsx("div",{className:"flow-step__expand-inner",children:B.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[B.jsx("p",{className:"flow-step__meta",children:_.feature}),B.jsxs("div",{className:"flow-step__copy",children:[B.jsx("p",{className:"flow-step__detail",children:_.body}),B.jsx(A3,{text:_.example,active:b}),B.jsx("div",{className:"flow-step__actions",children:B.jsx("a",{href:Tn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:B.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),B.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?v===2?B.jsx(c3,{}):B.jsx(l3,{stepIndex:v,width:280}):null})]})})})]},x)})}),B.jsx("p",{ref:c,className:"flow__outcome",children:g?B.jsx(bp,{text:hs.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):B.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:hs.outcome})})]})})}const C3=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],w3=58,D3=35;function L3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,w3+r*2,D3+r*2].join(" ");return B.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:C3.map(h=>B.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const N3={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function BS({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=N3[a];return B.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[B.jsx(L3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?B.jsx("span",{className:"brand-mark__word",children:r}):null]})}function U3(){return B.jsx("footer",{className:"site-footer",children:B.jsxs("div",{className:"container site-footer__inner",children:[B.jsxs("div",{className:"site-footer__brand",children:[B.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:B.jsx(BS,{size:"sm"})}),B.jsx("p",{className:"site-footer__legal",children:M_.legal})]}),B.jsxs("div",{className:"site-footer__meta",children:[B.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Jc.map(a=>B.jsx("a",{href:a.href,children:a.label},a.id)),B.jsx("a",{href:Tn.docs,children:"Docs"}),B.jsx("a",{href:Tn.manifesto,children:"Manifesto"}),B.jsx("a",{href:Tn.discord,children:"Discord"}),B.jsx("a",{href:Tn.x,children:"X"})]}),B.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:M_.labels.map(a=>B.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const Hv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",O3=50,zS=3500,P3=4e3,I3=zS+P3;function F3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Gv(a){return/[A-Za-z0-9]/.test(a)}function B3(){return Hv[Math.floor(Math.random()*Hv.length)]??"?"}function z3(a){return Math.random()<.5?B3():a}function H3(a,e){const i=[];for(let m=0;m<a.length;m++)Gv(a[m]??"")&&i.push(m);const r=i.length,o=r===0?1:Math.min(e/zS,1),c=Math.floor(o*r),u=new Set(i.slice(0,c));let h="";for(let m=0;m<a.length;m++){const p=a[m]??"";!Gv(p)||u.has(m)?h+=p:h+=z3(p)}return h}function Tp(a,e=!0){const[i,r]=Je.useState(a);return Je.useEffect(()=>{if(!e||F3()){r(a);return}let o=Date.now();const c=()=>{const h=Date.now();let m=h-o;m>=I3&&(o=h,m=0),r(H3(a,m))};c();const u=setInterval(c,O3);return()=>{clearInterval(u)}},[a,e]),i}function G3(){const[a,e]=ds.headline,i=Tp(ds.eyebrow.label);return B.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[B.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),B.jsx("div",{className:"hero__grid","aria-hidden":!0}),B.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),B.jsx("div",{className:"hero__grain","aria-hidden":!0}),B.jsx("div",{className:"hero__veil","aria-hidden":!0}),B.jsxs("div",{className:"container hero__content",children:[B.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:ds.eyebrow.href,"aria-label":`${ds.eyebrow.label}›`,children:[i,B.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),B.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[B.jsx("span",{className:"hero__line hero__line--lead",children:a}),B.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),B.jsxs("div",{className:"hero__ctas",children:[B.jsx(io,{href:ds.primaryCta.href,variant:"primary",children:ds.primaryCta.label}),B.jsx(io,{href:ds.secondaryCta.href,variant:"secondary",children:ds.secondaryCta.label})]})]})]})}function V3(){const a=Tp(wd.text);return B.jsx("div",{className:"manifesto-strip",children:B.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:wd.href,"aria-label":wd.text,children:a})})}function k3(){const a=[...x_,...x_];return B.jsx("div",{className:"marquee","aria-label":"Live status",children:B.jsx("div",{className:"marquee__viewport",children:B.jsx("div",{className:"marquee__track",children:a.map((e,i)=>B.jsx(PS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function X3({text:a}){const e=Tp(a);return B.jsx("span",{className:"persona-card__status persona-card__status--matrix","aria-label":a,children:e})}function W3(){return B.jsx("section",{id:"personas",className:"section personas",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:Dd.kicker}),B.jsx("h2",{className:"section-title personas__title",children:Dd.title}),B.jsx("div",{className:"personas__grid",children:Dd.items.map(a=>B.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[B.jsx("h3",{className:"persona-card__title",children:a.title}),B.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>B.jsxs("li",{children:[B.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),B.jsxs("div",{className:"persona-card__cta-row",children:[B.jsx(io,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),B.jsx(X3,{text:a.status})]})]},a.title))})]})})}function q3(){const[a,e]=Je.useState(!1),[i,r]=Je.useState(!1),[o,c]=Je.useState("");return Je.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Je.useEffect(()=>{const u=Jc.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const p=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=p[0])!=null&&g.target.id&&c(p[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const p=document.getElementById(m);p&&h.observe(p)}),()=>h.disconnect()},[]),Je.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),B.jsxs(B.Fragment,{children:[B.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:B.jsxs("div",{className:"sticky-header__inner",children:[B.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:B.jsx(BS,{size:"sm",brandName:"Morpheum"})}),B.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Jc.map(u=>B.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),B.jsxs("div",{className:"sticky-header__actions",children:[B.jsx("a",{className:"sticky-header__docs",href:Tn.docs,children:"Docs"}),B.jsx(io,{href:Tn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),B.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]})]})]})}),B.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:B.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Jc.map(u=>B.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),B.jsx("a",{href:Tn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function Y3(){const a=Je.useRef(null),e=FS(a,{amount:.35});return B.jsx("section",{className:"thesis section","aria-label":"Thesis",children:B.jsxs("div",{className:"container thesis__inner",children:[B.jsx("p",{ref:a,className:"thesis__close",children:e?B.jsxs(bp,{text:S_.close,className:"thesis__close-type",speed:36,multiline:!1,active:!0,holdCursor:!0,children:["The Agent-native"," ",B.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",B.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):B.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",B.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",B.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),B.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),B.jsx("div",{className:"thesis__risks",children:S_.risks.map(i=>B.jsxs("article",{className:"thesis__pair",children:[B.jsxs("div",{className:"thesis__risk",children:[B.jsx("p",{className:"thesis__label",children:"Risk"}),B.jsx("h3",{className:"thesis__risk-title",children:i.risk}),B.jsxs("p",{className:"thesis__failure",children:[B.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),B.jsxs("div",{className:"thesis__solve",children:[B.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),B.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function Z3(){return B.jsxs("div",{className:"page",children:[B.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),B.jsx(V3,{}),B.jsx(q3,{}),B.jsxs("main",{className:"page__main",children:[B.jsx(n3,{}),B.jsx(G3,{}),B.jsx(Y3,{}),B.jsx(k3,{}),B.jsx($M,{}),B.jsx(W3,{}),B.jsx(R3,{}),B.jsx(ty,{}),B.jsx(JM,{})]}),B.jsx(U3,{})]})}KM.createRoot(document.getElementById("root")).render(B.jsx(Je.StrictMode,{children:B.jsx(Z3,{})}));
