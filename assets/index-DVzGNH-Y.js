(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var pd={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function QS(){if(qg)return Vo;qg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var Yg;function jS(){return Yg||(Yg=1,pd.exports=QS()),pd.exports}var q=jS(),md={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function JS(){if(Zg)return ct;Zg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,y={};function S(D,Z,Ee){this.props=D,this.context=Z,this.refs=y,this.updater=Ee||T}S.prototype.isReactComponent={},S.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function B(){}B.prototype=S.prototype;function H(D,Z,Ee){this.props=D,this.context=Z,this.refs=y,this.updater=Ee||T}var C=H.prototype=new B;C.constructor=H,U(C,S.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(D,Z,Ee){var Re=Ee.ref;return{$$typeof:r,type:D,key:Z,ref:Re!==void 0?Re:null,props:Ee}}function Y(D,Z){return N(D.type,Z,D.props)}function G(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function j(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ee){return Z[Ee]})}var pe=/\/+/g;function xe(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?j(""+D.key):Z.toString(36)}function J(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(L,L):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function P(D,Z,Ee,Re,Ie){var ae=typeof D;(ae==="undefined"||ae==="boolean")&&(D=null);var Me=!1;if(D===null)Me=!0;else switch(ae){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(D.$$typeof){case r:case e:Me=!0;break;case x:return Me=D._init,P(Me(D._payload),Z,Ee,Re,Ie)}}if(Me)return Ie=Ie(D),Me=Re===""?"."+xe(D,0):Re,I(Ie)?(Ee="",Me!=null&&(Ee=Me.replace(pe,"$&/")+"/"),P(Ie,Z,Ee,"",function(nt){return nt})):Ie!=null&&(G(Ie)&&(Ie=Y(Ie,Ee+(Ie.key==null||D&&D.key===Ie.key?"":(""+Ie.key).replace(pe,"$&/")+"/")+Me)),Z.push(Ie)),1;Me=0;var ye=Re===""?".":Re+":";if(I(D))for(var He=0;He<D.length;He++)Re=D[He],ae=ye+xe(Re,He),Me+=P(Re,Z,Ee,ae,Ie);else if(He=E(D),typeof He=="function")for(D=He.call(D),He=0;!(Re=D.next()).done;)Re=Re.value,ae=ye+xe(Re,He++),Me+=P(Re,Z,Ee,ae,Ie);else if(ae==="object"){if(typeof D.then=="function")return P(J(D),Z,Ee,Re,Ie);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Me}function z(D,Z,Ee){if(D==null)return D;var Re=[],Ie=0;return P(D,Re,"","",function(ae){return Z.call(Ee,ae,Ie++)}),Re}function $(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(Ee){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ee)},function(Ee){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ee)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ge=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},be={map:z,forEach:function(D,Z,Ee){z(D,function(){Z.apply(this,arguments)},Ee)},count:function(D){var Z=0;return z(D,function(){Z++}),Z},toArray:function(D){return z(D,function(Z){return Z})||[]},only:function(D){if(!G(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ct.Activity=v,ct.Children=be,ct.Component=S,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=H,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ct.__COMPILER_RUNTIME={__proto__:null,c:function(D){return O.H.useMemoCache(D)}},ct.cache=function(D){return function(){return D.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(D,Z,Ee){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Re=U({},D.props),Ie=D.key;if(Z!=null)for(ae in Z.key!==void 0&&(Ie=""+Z.key),Z)!b.call(Z,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Z.ref===void 0||(Re[ae]=Z[ae]);var ae=arguments.length-2;if(ae===1)Re.children=Ee;else if(1<ae){for(var Me=Array(ae),ye=0;ye<ae;ye++)Me[ye]=arguments[ye+2];Re.children=Me}return N(D.type,Ie,Re)},ct.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ct.createElement=function(D,Z,Ee){var Re,Ie={},ae=null;if(Z!=null)for(Re in Z.key!==void 0&&(ae=""+Z.key),Z)b.call(Z,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ie[Re]=Z[Re]);var Me=arguments.length-2;if(Me===1)Ie.children=Ee;else if(1<Me){for(var ye=Array(Me),He=0;He<Me;He++)ye[He]=arguments[He+2];Ie.children=ye}if(D&&D.defaultProps)for(Re in Me=D.defaultProps,Me)Ie[Re]===void 0&&(Ie[Re]=Me[Re]);return N(D,ae,Ie)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(D){return{$$typeof:h,render:D}},ct.isValidElement=G,ct.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:$}},ct.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},ct.startTransition=function(D){var Z=O.T,Ee={};O.T=Ee;try{var Re=D(),Ie=O.S;Ie!==null&&Ie(Ee,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(L,ge)}catch(ae){ge(ae)}finally{Z!==null&&Ee.types!==null&&(Z.types=Ee.types),O.T=Z}},ct.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ct.use=function(D){return O.H.use(D)},ct.useActionState=function(D,Z,Ee){return O.H.useActionState(D,Z,Ee)},ct.useCallback=function(D,Z){return O.H.useCallback(D,Z)},ct.useContext=function(D){return O.H.useContext(D)},ct.useDebugValue=function(){},ct.useDeferredValue=function(D,Z){return O.H.useDeferredValue(D,Z)},ct.useEffect=function(D,Z){return O.H.useEffect(D,Z)},ct.useEffectEvent=function(D){return O.H.useEffectEvent(D)},ct.useId=function(){return O.H.useId()},ct.useImperativeHandle=function(D,Z,Ee){return O.H.useImperativeHandle(D,Z,Ee)},ct.useInsertionEffect=function(D,Z){return O.H.useInsertionEffect(D,Z)},ct.useLayoutEffect=function(D,Z){return O.H.useLayoutEffect(D,Z)},ct.useMemo=function(D,Z){return O.H.useMemo(D,Z)},ct.useOptimistic=function(D,Z){return O.H.useOptimistic(D,Z)},ct.useReducer=function(D,Z,Ee){return O.H.useReducer(D,Z,Ee)},ct.useRef=function(D){return O.H.useRef(D)},ct.useState=function(D){return O.H.useState(D)},ct.useSyncExternalStore=function(D,Z,Ee){return O.H.useSyncExternalStore(D,Z,Ee)},ct.useTransition=function(){return O.H.useTransition()},ct.version="19.2.7",ct}var Kg;function qh(){return Kg||(Kg=1,md.exports=JS()),md.exports}var Bn=qh(),gd={exports:{}},ko={},_d={exports:{}},vd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function $S(){return Qg||(Qg=1,(function(r){function e(P,z){var $=P.length;P.push(z);e:for(;0<$;){var ge=$-1>>>1,be=P[ge];if(0<l(be,z))P[ge]=z,P[$]=be,$=ge;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var z=P[0],$=P.pop();if($!==z){P[0]=$;e:for(var ge=0,be=P.length,D=be>>>1;ge<D;){var Z=2*(ge+1)-1,Ee=P[Z],Re=Z+1,Ie=P[Re];if(0>l(Ee,$))Re<be&&0>l(Ie,Ee)?(P[ge]=Ie,P[Re]=$,ge=Re):(P[ge]=Ee,P[Z]=$,ge=Z);else if(Re<be&&0>l(Ie,$))P[ge]=Ie,P[Re]=$,ge=Re;else break e}}return z}function l(P,z){var $=P.sortIndex-z.sortIndex;return $!==0?$:P.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,g=3,E=!1,T=!1,U=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=P)s(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function I(P){if(U=!1,C(P),!T)if(i(m)!==null)T=!0,L||(L=!0,j());else{var z=i(p);z!==null&&J(I,z.startTime-P)}}var L=!1,O=-1,b=5,N=-1;function Y(){return y?!0:!(r.unstable_now()-N<b)}function G(){if(y=!1,L){var P=r.unstable_now();N=P;var z=!0;try{e:{T=!1,U&&(U=!1,B(O),O=-1),E=!0;var $=g;try{t:{for(C(P),v=i(m);v!==null&&!(v.expirationTime>P&&Y());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var be=ge(v.expirationTime<=P);if(P=r.unstable_now(),typeof be=="function"){v.callback=be,C(P),z=!0;break t}v===i(m)&&s(m),C(P)}else s(m);v=i(m)}if(v!==null)z=!0;else{var D=i(p);D!==null&&J(I,D.startTime-P),z=!1}}break e}finally{v=null,g=$,E=!1}z=void 0}}finally{z?j():L=!1}}}var j;if(typeof H=="function")j=function(){H(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,xe=pe.port2;pe.port1.onmessage=G,j=function(){xe.postMessage(null)}}else j=function(){S(G,0)};function J(P,z){O=S(function(){P(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var $=g;g=z;try{return P()}finally{g=$}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=g;g=P;try{return z()}finally{g=$}},r.unstable_scheduleCallback=function(P,z,$){var ge=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,P){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=$+be,P={id:x++,callback:z,priorityLevel:P,startTime:$,expirationTime:be,sortIndex:-1},$>ge?(P.sortIndex=$,e(p,P),i(m)===null&&P===i(p)&&(U?(B(O),O=-1):U=!0,J(I,$-ge))):(P.sortIndex=be,e(m,P),T||E||(T=!0,L||(L=!0,j()))),P},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(P){var z=g;return function(){var $=g;g=z;try{return P.apply(this,arguments)}finally{g=$}}}})(vd)),vd}var jg;function eM(){return jg||(jg=1,_d.exports=$S()),_d.exports}var xd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function tM(){if(Jg)return On;Jg=1;var r=qh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},On.flushSync=function(m){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=x,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.7",On}var $g;function nM(){if($g)return xd.exports;$g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=tM(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function iM(){if(e_)return ko;e_=1;var r=eM(),e=qh(),i=nM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),H=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var J=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],be=-1;function D(t){return{current:t}}function Z(t){0>be||(t.current=ge[be],ge[be]=null,be--)}function Ee(t,n){be++,ge[be]=t.current,t.current=n}var Re=D(null),Ie=D(null),ae=D(null),Me=D(null);function ye(t,n){switch(Ee(ae,n),Ee(Ie,t),Ee(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=mg(n),t=gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Re),Ee(Re,t)}function He(){Z(Re),Z(Ie),Z(ae)}function nt(t){t.memoizedState!==null&&Ee(Me,t);var n=Re.current,a=gg(n,t.type);n!==a&&(Ee(Ie,t),Ee(Re,a))}function we(t){Ie.current===t&&(Z(Re),Z(Ie)),Me.current===t&&(Z(Me),Fo._currentValue=$)}var at,Ke;function tt(t){if(at===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);at=n&&n[1]||"",Ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+t+Ke}var lt=!1;function st(t,n){if(!t||lt)return"";lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var oe=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){oe=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var F=_.split(`
`),te=R.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===te.length)for(o=F.length-1,u=te.length-1;1<=o&&0<=u&&F[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==te[u]){var me=`
`+F[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?tt(a):""}function mt(t,n){switch(t.tag){case 26:case 27:case 5:return tt(t.type);case 16:return tt("Lazy");case 13:return t.child!==n&&n!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return tt("Activity");default:return""}}function _t(t){try{var n="",a=null;do n+=mt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var wt=Object.prototype.hasOwnProperty,It=r.unstable_scheduleCallback,Rt=r.unstable_cancelCallback,qt=r.unstable_shouldYield,X=r.unstable_requestPaint,Bt=r.unstable_now,gt=r.unstable_getCurrentPriorityLevel,w=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,se=r.unstable_LowPriority,fe=r.unstable_IdlePriority,Te=r.log,Ne=r.unstable_setDisableYieldValue,ue=null,de=null;function Ce(t){if(typeof Te=="function"&&Ne(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Be=Math.clz32?Math.clz32:Qe,Oe=Math.log,Le=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Oe(t)/Le|0)|0}var je=256,rt=262144,V=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ae(o):(_&=R,_!==0?u=Ae(_):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=o&~f,R!==0?u=Ae(R):_!==0?u=Ae(_):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ve(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ft(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var me=31-Be(a),Se=1<<me;R[me]=0,F[me]=-1;var oe=te[me];if(oe!==null)for(te[me]=null,me=0;me<oe.length;me++){var ce=oe[me];ce!==null&&(ce.lane&=-536870913)}a&=~Se}o!==0&&Dt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Dt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Un(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Nn(t,n){var a=n&-n;return a=(a&42)!==0?1:jr(a),(a&(t.suspendedLanes|n))!==0?0:a}function jr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $r(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function Xs(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Li=Math.random().toString(36).slice(2),cn="__reactFiber$"+Li,Tn="__reactProps$"+Li,Xn="__reactContainer$"+Li,fs="__reactEvents$"+Li,ul="__reactListeners$"+Li,fl="__reactHandles$"+Li,ds="__reactResources$"+Li,wa="__reactMarker$"+Li;function Da(t){delete t[cn],delete t[Tn],delete t[fs],delete t[ul],delete t[fl]}function Qi(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Eg(t);t!==null;){if(a=t[cn])return a;t=Eg(t)}return n}t=a,a=t.parentNode}return null}function ji(t){if(t=t[cn]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ua(t){var n=t[ds];return n||(n=t[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(t){t[wa]=!0}var dl=new Set,A={};function W(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(A[t]=n,t=0;t<n.length;t++)dl.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Fe={};function ke(t){return wt.call(Fe,t)?!0:wt.call(ie,t)?!1:ne.test(t)?Fe[t]=!0:(ie[t]=!0,!1)}function Pe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function Gt(t){return t.replace(Ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?vt(t,_,$e(n)):a!=null?vt(t,_,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Ln(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ut(t)}function vt(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $n(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function yi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ut(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&tn(t,f,n[f])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Na=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(t){return Na.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var uu=null;function fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ws=null,qs=null;function pp(t){var n=ji(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&en(o)}break e;case"textarea":$n(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var du=!1;function mp(t,n,a){if(du)return t(n,a);du=!0;try{var o=t(n);return o}finally{if(du=!1,(Ws!==null||qs!==null)&&($l(),Ws&&(n=Ws,t=qs,qs=Ws=null,pp(n),t)))for(n=0;n<t.length;n++)pp(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if($i)try{var to={};Object.defineProperty(to,"passive",{get:function(){hu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{hu=!1}var La=null,pu=null,hl=null;function gp(){if(hl)return hl;var t,n=pu,a=n.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return hl=u.slice(t,1<o?1-o:void 0)}function pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function _p(){return!1}function Wn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:_p,this.isPropagationStopped=_p,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Wn(ms),no=v({},ms,{view:0,detail:0}),Zv=Wn(no),mu,gu,io,_l=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(mu=t.screenX-io.screenX,gu=t.screenY-io.screenY):gu=mu=0,io=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),vp=Wn(_l),Kv=v({},_l,{dataTransfer:0}),Qv=Wn(Kv),jv=v({},no,{relatedTarget:0}),_u=Wn(jv),Jv=v({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=Wn(Jv),ex=v({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=Wn(ex),nx=v({},ms,{data:0}),xp=Wn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sx[t])?!!n[t]:!1}function vu(){return rx}var ox=v({},no,{key:function(t){if(t.key){var n=ix[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lx=Wn(ox),cx=v({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Wn(cx),ux=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),fx=Wn(ux),dx=v({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=Wn(dx),px=v({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=Wn(px),gx=v({},ms,{newState:0,oldState:0}),_x=Wn(gx),vx=[9,13,27,32],xu=$i&&"CompositionEvent"in window,ao=null;$i&&"documentMode"in document&&(ao=document.documentMode);var xx=$i&&"TextEvent"in window&&!ao,Mp=$i&&(!xu||ao&&8<ao&&11>=ao),yp=" ",Ep=!1;function bp(t,n){switch(t){case"keyup":return vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function Sx(t,n){switch(t){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(Ep=!0,yp);case"textInput":return t=n.data,t===yp&&Ep?null:t;default:return null}}function Mx(t,n){if(Ys)return t==="compositionend"||!xu&&bp(t,n)?(t=gp(),hl=pu=La=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mp&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yx[t.type]:n==="textarea"}function Rp(t,n,a,o){Ws?qs?qs.push(o):qs=[o]:Ws=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var so=null,ro=null;function Ex(t){cg(t,0)}function vl(t){var n=hs(t);if(en(n))return t}function Cp(t,n){if(t==="change")return n}var wp=!1;if($i){var Su;if($i){var Mu="oninput"in document;if(!Mu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Mu=typeof Dp.oninput=="function"}Su=Mu}else Su=!1;wp=Su&&(!document.documentMode||9<document.documentMode)}function Up(){so&&(so.detachEvent("onpropertychange",Np),ro=so=null)}function Np(t){if(t.propertyName==="value"&&vl(ro)){var n=[];Rp(n,ro,t,fu(t)),mp(Ex,n)}}function bx(t,n,a){t==="focusin"?(Up(),so=n,ro=a,so.attachEvent("onpropertychange",Np)):t==="focusout"&&Up()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(ro)}function Ax(t,n){if(t==="click")return vl(n)}function Rx(t,n){if(t==="input"||t==="change")return vl(n)}function Cx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Cx;function oo(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!wt.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,n){var a=Lp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wx=$i&&"documentMode"in document&&11>=document.documentMode,Zs=null,Eu=null,lo=null,bu=!1;function Bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Zs==null||Zs!==Qt(o)||(o=Zs,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=rc(Eu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Zs)))}function gs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ks={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},Tu={},Fp={};$i&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function _s(t){if(Tu[t])return Tu[t];if(!Ks[t])return t;var n=Ks[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fp)return Tu[t]=n[a];return t}var zp=_s("animationend"),Hp=_s("animationiteration"),Gp=_s("animationstart"),Dx=_s("transitionrun"),Ux=_s("transitionstart"),Nx=_s("transitioncancel"),Vp=_s("transitionend"),kp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function bi(t,n){kp.set(t,n),W(n,[t])}var xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],Qs=0,Ru=0;function Sl(){for(var t=Qs,n=Ru=Qs=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Xp(a,u,f)}}function Ml(t,n,a,o){fi[Qs++]=t,fi[Qs++]=n,fi[Qs++]=a,fi[Qs++]=o,Ru|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Cu(t,n,a,o){return Ml(t,n,a,o),yl(t)}function vs(t,n){return Ml(t,null,null,n),yl(t)}function Xp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function yl(t){if(50<Uo)throw Uo=0,Ff=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var js={};function Lx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,o){return new Lx(t,n,a,o)}function wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function El(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")wu(t)&&(_=1);else if(typeof t=="string")_=FS(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ni(31,a,n,u),t.elementType=N,t.lanes=f,t;case U:return xs(a.children,u,f,n);case y:_=8,u|=24;break;case S:return t=ni(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case I:return t=ni(13,a,n,u),t.elementType=I,t.lanes=f,t;case L:return t=ni(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case B:_=9;break e;case C:_=11;break e;case O:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ni(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function xs(t,n,a,o){return t=ni(7,t,o,n),t.lanes=a,t}function Du(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function qp(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function Uu(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Yp=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},Yp.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var Js=[],$s=0,bl=null,co=0,hi=[],pi=0,Oa=null,Pi=1,Ii="";function ta(t,n){Js[$s++]=co,Js[$s++]=bl,bl=t,co=n}function Zp(t,n,a){hi[pi++]=Pi,hi[pi++]=Ii,hi[pi++]=Oa,Oa=t;var o=Pi;t=Ii;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Pi=1<<32-Be(n)+u|a<<u|o,Ii=f+t}else Pi=1<<f|a<<u|o,Ii=t}function Nu(t){t.return!==null&&(ta(t,1),Zp(t,1,0))}function Lu(t){for(;t===bl;)bl=Js[--$s],Js[$s]=null,co=Js[--$s],Js[$s]=null;for(;t===Oa;)Oa=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null,Pi=hi[--pi],hi[pi]=null}function Kp(t,n){hi[pi++]=Pi,hi[pi++]=Ii,hi[pi++]=Oa,Pi=n.id,Ii=n.overflow,Oa=t}var An=null,Jt=null,bt=!1,Pa=null,mi=!1,Ou=Error(s(519));function Ia(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(di(n,t)),Ou}function Qp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[Tn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)St(Lo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),yi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||hg(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ia(t,!0)}function jp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:An=An.return}}function er(t){if(t!==An)return!1;if(!bt)return jp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$f(t.type,t.memoizedProps)),a=!a),a&&Jt&&Ia(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=yg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=yg(t)}else n===27?(n=Jt,Qa(t.type)?(t=ad,ad=null,Jt=t):Jt=n):Jt=An?_i(t.stateNode.nextSibling):null;return!0}function Ss(){Jt=An=null,bt=!1}function Pu(){var t=Pa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Pa=null),t}function uo(t){Pa===null?Pa=[t]:Pa.push(t)}var Iu=D(null),Ms=null,na=null;function Ba(t,n,a){Ee(Iu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Iu.current,Z(Iu)}function Bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Fu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Bu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Bu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function tr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ti(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&Fu(n,t,a,o),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ys(t){Ms=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Jp(Ms,t)}function Al(t,n){return Ms===null&&ys(t),Jp(t,n)}function Jp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var Ox=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Px=r.unstable_scheduleCallback,Ix=r.unstable_NormalPriority,fn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Ox,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&Px(Ix,function(){t.controller.abort()})}var ho=null,Hu=0,nr=0,ir=null;function Bx(t,n){if(ho===null){var a=ho=[];Hu=0,nr=Xf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Hu++,n.then($p,$p),n}function $p(){if(--Hu===0&&ho!==null){ir!==null&&(ir.status="fulfilled");var t=ho;ho=null,nr=0,ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=P.S;P.S=function(t,n){B0=Bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bx(t,n),em!==null&&em(t,n)};var Es=D(null);function Gu(){var t=Es.current;return t!==null?t:jt.pooledCache}function Rl(t,n){n===null?Ee(Es,Es.current):Ee(Es,n.pool)}function tm(){var t=Gu();return t===null?null:{parent:fn._currentValue,pool:t}}var ar=Error(s(460)),Vu=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function im(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t}throw Ts=n,ar}}function bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,ar):a}}var Ts=null;function am(){if(Ts===null)throw Error(s(459));var t=Ts;return Ts=null,t}function sm(t){if(t===ar||t===Cl)throw Error(s(483))}var sr=null,po=0;function Dl(t){var n=po;return po+=1,sr===null&&(sr=[]),im(sr,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){function n(K,k){if(t){var ee=K.deletions;ee===null?(K.deletions=[k],K.flags|=16):ee.push(k)}}function a(K,k){if(!t)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=ea(K,k),K.index=0,K.sibling=null,K}function f(K,k,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<k?(K.flags|=67108866,k):ee):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,ee,_e){return k===null||k.tag!==6?(k=Du(ee,K.mode,_e),k.return=K,k):(k=u(k,ee),k.return=K,k)}function F(K,k,ee,_e){var et=ee.type;return et===U?me(K,k,ee.props.children,_e,ee.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&bs(et)===k.type)?(k=u(k,ee.props),mo(k,ee),k.return=K,k):(k=El(ee.type,ee.key,ee.props,null,K.mode,_e),mo(k,ee),k.return=K,k)}function te(K,k,ee,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=Uu(ee,K.mode,_e),k.return=K,k):(k=u(k,ee.children||[]),k.return=K,k)}function me(K,k,ee,_e,et){return k===null||k.tag!==7?(k=xs(ee,K.mode,_e,et),k.return=K,k):(k=u(k,ee),k.return=K,k)}function Se(K,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Du(""+k,K.mode,ee),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return ee=El(k.type,k.key,k.props,null,K.mode,ee),mo(ee,k),ee.return=K,ee;case T:return k=Uu(k,K.mode,ee),k.return=K,k;case b:return k=bs(k),Se(K,k,ee)}if(J(k)||j(k))return k=xs(k,K.mode,ee,null),k.return=K,k;if(typeof k.then=="function")return Se(K,Dl(k),ee);if(k.$$typeof===H)return Se(K,Al(K,k),ee);Ul(K,k)}return null}function oe(K,k,ee,_e){var et=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(K,k,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case E:return ee.key===et?F(K,k,ee,_e):null;case T:return ee.key===et?te(K,k,ee,_e):null;case b:return ee=bs(ee),oe(K,k,ee,_e)}if(J(ee)||j(ee))return et!==null?null:me(K,k,ee,_e,null);if(typeof ee.then=="function")return oe(K,k,Dl(ee),_e);if(ee.$$typeof===H)return oe(K,k,Al(K,ee),_e);Ul(K,ee)}return null}function ce(K,k,ee,_e,et){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(ee)||null,R(k,K,""+_e,et);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case E:return K=K.get(_e.key===null?ee:_e.key)||null,F(k,K,_e,et);case T:return K=K.get(_e.key===null?ee:_e.key)||null,te(k,K,_e,et);case b:return _e=bs(_e),ce(K,k,ee,_e,et)}if(J(_e)||j(_e))return K=K.get(ee)||null,me(k,K,_e,et,null);if(typeof _e.then=="function")return ce(K,k,ee,Dl(_e),et);if(_e.$$typeof===H)return ce(K,k,ee,Al(k,_e),et);Ul(k,_e)}return null}function Ye(K,k,ee,_e){for(var et=null,Nt=null,Ze=k,ht=k=0,yt=null;Ze!==null&&ht<ee.length;ht++){Ze.index>ht?(yt=Ze,Ze=null):yt=Ze.sibling;var Lt=oe(K,Ze,ee[ht],_e);if(Lt===null){Ze===null&&(Ze=yt);break}t&&Ze&&Lt.alternate===null&&n(K,Ze),k=f(Lt,k,ht),Nt===null?et=Lt:Nt.sibling=Lt,Nt=Lt,Ze=yt}if(ht===ee.length)return a(K,Ze),bt&&ta(K,ht),et;if(Ze===null){for(;ht<ee.length;ht++)Ze=Se(K,ee[ht],_e),Ze!==null&&(k=f(Ze,k,ht),Nt===null?et=Ze:Nt.sibling=Ze,Nt=Ze);return bt&&ta(K,ht),et}for(Ze=o(Ze);ht<ee.length;ht++)yt=ce(Ze,K,ht,ee[ht],_e),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?ht:yt.key),k=f(yt,k,ht),Nt===null?et=yt:Nt.sibling=yt,Nt=yt);return t&&Ze.forEach(function(ts){return n(K,ts)}),bt&&ta(K,ht),et}function it(K,k,ee,_e){if(ee==null)throw Error(s(151));for(var et=null,Nt=null,Ze=k,ht=k=0,yt=null,Lt=ee.next();Ze!==null&&!Lt.done;ht++,Lt=ee.next()){Ze.index>ht?(yt=Ze,Ze=null):yt=Ze.sibling;var ts=oe(K,Ze,Lt.value,_e);if(ts===null){Ze===null&&(Ze=yt);break}t&&Ze&&ts.alternate===null&&n(K,Ze),k=f(ts,k,ht),Nt===null?et=ts:Nt.sibling=ts,Nt=ts,Ze=yt}if(Lt.done)return a(K,Ze),bt&&ta(K,ht),et;if(Ze===null){for(;!Lt.done;ht++,Lt=ee.next())Lt=Se(K,Lt.value,_e),Lt!==null&&(k=f(Lt,k,ht),Nt===null?et=Lt:Nt.sibling=Lt,Nt=Lt);return bt&&ta(K,ht),et}for(Ze=o(Ze);!Lt.done;ht++,Lt=ee.next())Lt=ce(Ze,K,ht,Lt.value,_e),Lt!==null&&(t&&Lt.alternate!==null&&Ze.delete(Lt.key===null?ht:Lt.key),k=f(Lt,k,ht),Nt===null?et=Lt:Nt.sibling=Lt,Nt=Lt);return t&&Ze.forEach(function(KS){return n(K,KS)}),bt&&ta(K,ht),et}function Kt(K,k,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===U&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case E:e:{for(var et=ee.key;k!==null;){if(k.key===et){if(et=ee.type,et===U){if(k.tag===7){a(K,k.sibling),_e=u(k,ee.props.children),_e.return=K,K=_e;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&bs(et)===k.type){a(K,k.sibling),_e=u(k,ee.props),mo(_e,ee),_e.return=K,K=_e;break e}a(K,k);break}else n(K,k);k=k.sibling}ee.type===U?(_e=xs(ee.props.children,K.mode,_e,ee.key),_e.return=K,K=_e):(_e=El(ee.type,ee.key,ee.props,null,K.mode,_e),mo(_e,ee),_e.return=K,K=_e)}return _(K);case T:e:{for(et=ee.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(K,k.sibling),_e=u(k,ee.children||[]),_e.return=K,K=_e;break e}else{a(K,k);break}else n(K,k);k=k.sibling}_e=Uu(ee,K.mode,_e),_e.return=K,K=_e}return _(K);case b:return ee=bs(ee),Kt(K,k,ee,_e)}if(J(ee))return Ye(K,k,ee,_e);if(j(ee)){if(et=j(ee),typeof et!="function")throw Error(s(150));return ee=et.call(ee),it(K,k,ee,_e)}if(typeof ee.then=="function")return Kt(K,k,Dl(ee),_e);if(ee.$$typeof===H)return Kt(K,k,Al(K,ee),_e);Ul(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(K,k.sibling),_e=u(k,ee),_e.return=K,K=_e):(a(K,k),_e=Du(ee,K.mode,_e),_e.return=K,K=_e),_(K)):a(K,k)}return function(K,k,ee,_e){try{po=0;var et=Kt(K,k,ee,_e);return sr=null,et}catch(Ze){if(Ze===ar||Ze===Cl)throw Ze;var Nt=ni(29,Ze,null,K.mode);return Nt.lanes=_e,Nt.return=K,Nt}finally{}}}var As=rm(!0),om=rm(!1),Fa=!1;function ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),Xp(t,null,a),n}return Ml(t,o,n,a),yl(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Un(t,a)}}function Wu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var qu=!1;function _o(){if(qu){var t=ir;if(t!==null)throw t}}function vo(t,n,a,o){qu=!1;var u=t.updateQueue;Fa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,te=F.next;F.next=null,_===null?f=te:_.next=te,_=F;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==_&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=F))}if(f!==null){var Se=u.baseState;_=0,me=te=F=null,R=f;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(Mt&oe)===oe:(o&oe)===oe){oe!==0&&oe===nr&&(qu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,it=R;oe=n;var Kt=a;switch(it.tag){case 1:if(Ye=it.payload,typeof Ye=="function"){Se=Ye.call(Kt,Se,oe);break e}Se=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=it.payload,oe=typeof Ye=="function"?Ye.call(Kt,Se,oe):Ye,oe==null)break e;Se=v({},Se,oe);break e;case 2:Fa=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=ce,F=Se):me=me.next=ce,_|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(F=Se),u.baseState=F,u.firstBaseUpdate=te,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Wa|=_,t.lanes=_,t.memoizedState=Se}}function lm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lm(a[t],n)}var rr=D(null),Nl=D(0);function um(t,n){t=da,Ee(Nl,t),Ee(rr,n),da=t|n.baseLanes}function Yu(){Ee(Nl,da),Ee(rr,rr.current)}function Zu(){da=Nl.current,Z(rr),Z(Nl)}var ii=D(null),gi=null;function Ga(t){var n=t.alternate;Ee(on,on.current&1),Ee(ii,t),gi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(gi=t)}function Ku(t){Ee(on,on.current),Ee(ii,t),gi===null&&(gi=t)}function fm(t){t.tag===22?(Ee(on,on.current),Ee(ii,t),gi===null&&(gi=t)):Va()}function Va(){Ee(on,on.current),Ee(ii,ii.current)}function ai(t){Z(ii),gi===t&&(gi=null),Z(on)}var on=D(0);function Ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nd(a)||id(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,dt=null,Yt=null,dn=null,Ol=!1,or=!1,Rs=!1,Pl=0,xo=0,lr=null,zx=0;function an(){throw Error(s(321))}function Qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function ju(t,n,a,o,u,f){return aa=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Zm:hf,Rs=!1,f=a(o,u),Rs=!1,or&&(f=hm(n,a,o,u)),dm(t),f}function dm(t){P.H=yo;var n=Yt!==null&&Yt.next!==null;if(aa=0,dn=Yt=dt=null,Ol=!1,xo=0,lr=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&Tl(t)&&(hn=!0))}function hm(t,n,a,o){dt=t;var u=0;do{if(or&&(lr=null),xo=0,or=!1,25<=u)throw Error(s(301));if(u+=1,dn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Km,f=n(a,o)}while(or);return f}function Hx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Ju(){var t=Pl!==0;return Pl=0,t}function $u(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ef(t){if(Ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ol=!1}aa=0,dn=Yt=dt=null,or=!1,xo=Pl=0,lr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?dt.memoizedState=dn=t:dn=dn.next=t,dn}function ln(){if(Yt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=dn===null?dt.memoizedState:dn.next;if(n!==null)dn=n,Yt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},dn===null?dt.memoizedState=dn=t:dn=dn.next=t}return dn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=xo;return xo+=1,lr===null&&(lr=[]),t=im(lr,t,n),n=dt,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Zm:hf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===H)return Rn(t)}throw Error(s(438,String(t)))}function tf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=ln();return nf(n,Yt,t)}function nf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,F=null,te=n,me=!1;do{var Se=te.lane&-536870913;if(Se!==te.lane?(Mt&Se)===Se:(aa&Se)===Se){var oe=te.revertLane;if(oe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Se===nr&&(me=!0);else if((aa&oe)===oe){te=te.next,oe===nr&&(me=!0);continue}else Se={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(R=F=Se,_=f):F=F.next=Se,dt.lanes|=oe,Wa|=oe;Se=te.action,Rs&&a(f,Se),f=te.hasEagerState?te.eagerState:a(f,Se)}else oe={lane:Se,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(R=F=oe,_=f):F=F.next=oe,dt.lanes|=Se,Wa|=Se;te=te.next}while(te!==null&&te!==n);if(F===null?_=f:F.next=R,!ti(f,t.memoizedState)&&(hn=!0,me&&(a=ir,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function af(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ti(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function pm(t,n,a){var o=dt,u=ln(),f=bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ti((Yt||u).memoizedState,a);if(_&&(u.memoizedState=a,hn=!0),u=u.queue,of(_m.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},gm.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));f||(aa&127)!==0||mm(o,n,a)}return a}function mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Il(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gm(t,n,a,o){n.value=a,n.getSnapshot=o,vm(n)&&xm(t)}function _m(t,n,a){return a(function(){vm(n)&&xm(t)})}function vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function xm(t){var n=vs(t,2);n!==null&&Qn(n,t,2)}function sf(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Rs){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function Sm(t,n,a,o){return t.baseState=a,nf(t,Yt,typeof o=="function"?o:sa)}function Gx(t,n,a,o,u){if(Gl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var R=a(u,o),F=P.S;F!==null&&F(_,R),ym(t,n,R)}catch(te){rf(t,n,te)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,o),ym(t,n,f)}catch(te){rf(t,n,te)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Em(t,n,o)},function(o){return rf(t,n,o)}):Em(t,n,a)}function Em(t,n,a){n.status="fulfilled",n.value=a,bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mm(t,a)))}function rf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==o)}t.action=null}function bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tm(t,n){return n}function Am(t,n){if(bt){var a=jt.formState;if(a!==null){e:{var o=dt;if(bt){if(Jt){t:{for(var u=Jt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=_i(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},a.queue=o,a=Wm.bind(null,dt,o),o.dispatch=a,o=sf(!1),f=df.bind(null,dt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Gx.bind(null,dt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Rm(t){var n=ln();return Cm(n,Yt,t)}function Cm(t,n,a){if(n=nf(t,n,Tm)[0],t=Fl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(_){throw _===ar?Cl:_}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,cr(9,{destroy:void 0},Vx.bind(null,u,a),null)),[o,f,t]}function Vx(t,n){t.action=n}function wm(t){var n=ln(),a=Yt;if(a!==null)return Cm(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Il(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Dm(){return ln().memoizedState}function zl(t,n,a,o){var u=zn();dt.flags|=t,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(t,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;Yt!==null&&o!==null&&Qu(o,Yt.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(dt.flags|=t,u.memoizedState=cr(1|n,f,a,o))}function Um(t,n){zl(8390656,8,t,n)}function of(t,n){Hl(2048,8,t,n)}function kx(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Il(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Nm(t){var n=ln().memoizedState;return kx({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Lm(t,n){return Hl(4,2,t,n)}function Om(t,n){return Hl(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,Hl(4,4,Pm.bind(null,n,t),a)}function lf(){}function Bm(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Fm(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=t(),Rs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function cf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=z0(),dt.lanes|=t,Wa|=t,a)}function zm(t,n,a,o){return ti(a,n)?a:rr.current!==null?(t=cf(t,a,o),ti(t,n)||(hn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(Mt&261930)===0?(hn=!0,t.memoizedState=a):(t=z0(),dt.lanes|=t,Wa|=t,n)}function Hm(t,n,a,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var _=P.T,R={};P.T=R,df(t,!1,n,a);try{var F=u(),te=P.S;if(te!==null&&te(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var me=Fx(F,o);Mo(t,n,me,oi(t))}else Mo(t,n,o,oi(t))}catch(Se){Mo(t,n,{then:function(){},status:"rejected",reason:Se},oi())}finally{z.p=f,_!==null&&R.types!==null&&(_.types=R.types),P.T=_}}function Xx(){}function uf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Gm(t).queue;Hm(t,u,n,$,a===null?Xx:function(){return Vm(t),a(o)})}function Gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vm(t){var n=Gm(t);n.next===null&&(n=t.alternate.memoizedState),Mo(t,n.next.queue,{},oi())}function ff(){return Rn(Fo)}function km(){return ln().memoizedState}function Xm(){return ln().memoizedState}function Wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=za(a);var o=Ha(n,t,a);o!==null&&(Qn(o,n,a),go(o,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function qx(t,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?qm(n,a):(a=Cu(t,n,a,o),a!==null&&(Qn(a,t,o),Ym(a,n,o)))}function Wm(t,n,a){var o=oi();Mo(t,n,a,o)}function Mo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))qm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ti(R,_))return Ml(t,n,u,0),jt===null&&Sl(),!1}catch{}finally{}if(a=Cu(t,n,u,o),a!==null)return Qn(a,t,o),Ym(a,n,o),!0}return!1}function df(t,n,a,o){if(o={lane:2,revertLane:Xf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(s(479))}else n=Cu(t,a,o,2),n!==null&&Qn(n,t,2)}function Gl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function qm(t,n){or=Ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ym(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Un(t,a)}}var yo={readContext:Rn,use:Bl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};yo.useEffectEvent=an;var Zm={readContext:Rn,use:Bl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,Pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(Rs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Rs){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=qx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=sf(t);var n=t.queue,a=Wm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(t,n){var a=zn();return cf(a,t,n)},useTransition:function(){var t=sf(!1);return t=Hm.bind(null,dt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=zn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(Mt&127)!==0||mm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Um(_m.bind(null,o,f,t),[t]),o.flags|=2048,cr(9,{destroy:void 0},gm.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=jt.identifierPrefix;if(bt){var a=Ii,o=Pi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ff,useFormState:Am,useActionState:Am,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:tf,useCacheRefresh:function(){return zn().memoizedState=Wx.bind(null,dt)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Rn,use:Bl,useCallback:Bm,useContext:Rn,useEffect:of,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Fm,useReducer:Fl,useRef:Dm,useState:function(){return Fl(sa)},useDebugValue:lf,useDeferredValue:function(t,n){var a=ln();return zm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Fl(sa)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:ff,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=ln();return Sm(a,Yt,t,n)},useMemoCache:tf,useCacheRefresh:Xm};hf.useEffectEvent=Nm;var Km={readContext:Rn,use:Bl,useCallback:Bm,useContext:Rn,useEffect:of,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Fm,useReducer:af,useRef:Dm,useState:function(){return af(sa)},useDebugValue:lf,useDeferredValue:function(t,n){var a=ln();return Yt===null?cf(a,t,n):zm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=af(sa)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:ff,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=ln();return Yt!==null?Sm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:Xm};Km.useEffectEvent=Nm;function pf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=oi(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Qn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=oi(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&(Qn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&(Qn(n,t,a),go(n,t,a))}};function Qm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function jm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&mf.enqueueReplaceState(n,n.state,null)}function Cs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Jm(t){xl(t)}function $m(t){console.error(t)}function e0(t){xl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function t0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function gf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function n0(t){return t=za(t),t.tag=3,t}function i0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){t0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){t0(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Yx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tr(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?ec():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Gf(t,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Gf(t,o,u)),!1}throw Error(s(435,a.tag))}return Gf(t,o,u),ec(),!1}if(bt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(t=Error(s(422),{cause:o}),uo(di(t,a)))):(o!==Ou&&(n=Error(s(423),{cause:o}),uo(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=gf(t.stateNode,o,u),Wu(t,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Do===null?Do=[f]:Do.push(f),sn!==4&&(sn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=gf(a.stateNode,o,t),Wu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=n0(u),i0(u,t,a,o),Wu(a,u),!1}a=a.return}while(a!==null);return!1}var _f=Error(s(461)),hn=!1;function Cn(t,n,a,o){n.child=t===null?om(n,null,a,o):As(n,t.child,a,o)}function a0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return ys(n),o=ju(t,n,a,_,f,u),R=Ju(),t!==null&&!hn?($u(t,n,u),ra(t,n,u)):(bt&&R&&Nu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function s0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,r0(t,n,f,o,u)):(t=El(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Tf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(_,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=ea(f,o),t.ref=n.ref,t.return=n,n.child=t}function r0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(oo(f,o)&&t.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Tf(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return vf(t,n,a,o,u)}function o0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return l0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?um(n,f):Yu(),fm(n);else return o=n.lanes=536870912,l0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rl(n,f.cachePool),um(n,f),Va(),n.memoizedState=null):(t!==null&&Rl(n,null),Yu(),Va());return Cn(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function l0(t,n,a,o,u){var f=Gu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Rl(n,null),Yu(),fm(n),t!==null&&tr(t,n,o,!0),n.childLanes=u,null}function kl(t,n){return n=Wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function c0(t,n,a){return As(n,t.child,null,a),t=kl(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function Zx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=kl(n,o),n.lanes=536870912,Eo(null,t);if(Ku(n),(t=Jt)?(t=Mg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,An=n,Jt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return kl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=c0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||tr(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(o=jt,o!==null&&(_=Nn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,vs(t,_),Qn(o,t,_),_f;ec(),n=c0(t,n,a)}else t=f.treeContext,Jt=_i(_.nextSibling),An=n,bt=!0,Pa=null,mi=!1,t!==null&&Kp(n,t),n=kl(n,o),n.flags|=4096;return n}return t=ea(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function vf(t,n,a,o,u){return ys(n),a=ju(t,n,a,o,void 0,u),o=Ju(),t!==null&&!hn?($u(t,n,u),ra(t,n,u)):(bt&&o&&Nu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function u0(t,n,a,o,u,f){return ys(n),n.updateQueue=null,a=hm(n,o,a,u),dm(t),o=Ju(),t!==null&&!hn?($u(t,n,f),ra(t,n,f)):(bt&&o&&Nu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function f0(t,n,a,o,u){if(ys(n),n.stateNode===null){var f=js,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ku(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):js,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(pf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&mf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,F=Cs(a,R);f.props=F;var te=f.context,me=a.contextType;_=js,typeof me=="object"&&me!==null&&(_=Rn(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==_)&&jm(n,f,o,_),Fa=!1;var oe=n.memoizedState;f.state=oe,vo(n,o,f,u),_o(),te=n.memoizedState,R||oe!==te||Fa?(typeof Se=="function"&&(pf(n,a,Se,o),te=n.memoizedState),(F=Fa||Qm(n,a,F,o,oe,te,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=_,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Xu(t,n),_=n.memoizedProps,me=Cs(a,_),f.props=me,Se=n.pendingProps,oe=f.context,te=a.contextType,F=js,typeof te=="object"&&te!==null&&(F=Rn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Se||oe!==F)&&jm(n,f,o,F),Fa=!1,oe=n.memoizedState,f.state=oe,vo(n,o,f,u),_o();var ce=n.memoizedState;_!==Se||oe!==ce||Fa||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof R=="function"&&(pf(n,a,R,o),ce=n.memoizedState),(me=Fa||Qm(n,a,me,o,oe,ce,F)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=F,o=me):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=As(n,t.child,null,u),n.child=As(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function d0(t,n,a,o){return Ss(),n.flags|=256,Cn(t,n,a,o),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(t){return{baseLanes:t,cachePool:tm()}}function Mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function h0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ga(n):Va(),(t=Jt)?(t=Mg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,An=n,Jt=null)):t=null,t===null)throw Ia(n);return id(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Va(),u=n.mode,R=Wl({mode:"hidden",children:R},u),o=xs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(t,_,a),n.memoizedState=xf,Eo(null,o)):(Ga(n),yf(n,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Ga(n),n.flags&=-257,n=Ef(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),R=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),R=xs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,As(n,t.child,null,a),o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(t,_,a),n.memoizedState=xf,n=Eo(null,o));else if(Ga(n),id(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(s(419)),o.stack="",o.digest=_,uo({value:o,source:null,stack:null}),n=Ef(t,n,a)}else if(hn||tr(t,n,a,!1),_=(a&t.childLanes)!==0,hn||_){if(_=jt,_!==null&&(o=Nn(_,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,vs(t,o),Qn(_,t,o),_f;nd(R)||ec(),n=Ef(t,n,a)}else nd(R)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Jt=_i(R.nextSibling),An=n,bt=!0,Pa=null,mi=!1,t!==null&&Kp(n,t),n=yf(n,o.children),n.flags|=4096);return n}return u?(Va(),R=o.fallback,u=n.mode,F=t.child,te=F.sibling,o=ea(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,te!==null?R=ea(te,R):(R=xs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Eo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Sf(a):(u=R.cachePool,u!==null?(F=fn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=tm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Mf(t,_,a),n.memoizedState=xf,Eo(t.child,o)):(Ga(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function yf(t,n){return n=Wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Wl(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function Ef(t,n,a){return As(n,t.child,null,a),t=yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function p0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Bu(t.return,n,a)}function bf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function m0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=on.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Ee(on,_),Cn(t,n,o,a),o=bt?co:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,a,n);else if(t.tag===19)p0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ll(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ll(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}bf(n,!0,a,null,f,o);break;case"together":bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(tr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function Kx(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ba(n,fn,t.memoizedState.cache),Ss();break;case 27:case 5:nt(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?h0(t,n,a):(Ga(n),t=ra(t,n,a),t!==null?t.sibling:null);Ga(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return m0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(on,on.current),o)break;return null;case 22:return n.lanes=0,o0(t,n,a,n.pendingProps);case 24:Ba(n,fn,t.memoizedState.cache)}return ra(t,n,a)}function g0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Tf(t,a)&&(n.flags&128)===0)return hn=!1,Kx(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,bt&&(n.flags&1048576)!==0&&Zp(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=bs(n.elementType),n.type=t,typeof t=="function")wu(t)?(o=Cs(t,o),n.tag=1,n=f0(null,n,t,o,a)):(n.tag=0,n=vf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=a0(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=s0(null,n,t,o,a);break e}}throw n=xe(t)||t,Error(s(306,n,""))}}return n;case 0:return vf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),f0(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Xu(t,n),vo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ba(n,fn,o),o!==f.cache&&Fu(n,[fn],a,!0),_o(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=d0(t,n,o,a);break e}else if(o!==u){u=di(Error(s(424)),n),uo(u),n=d0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=_i(t.firstChild),An=n,bt=!0,Pa=null,mi=!0,a=om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ss(),o===u){n=ra(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Xl(t,n),t===null?(a=Rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=oc(ae.current).createElement(a),o[cn]=n,o[Tn]=t,wn(o,a,t),un(o),n.stateNode=o):n.memoizedState=Rg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&bt&&(o=n.stateNode=bg(n.type,n.pendingProps,ae.current),An=n,mi=!0,u=Jt,Qa(n.type)?(ad=u,Jt=_i(o.firstChild)):Jt=u),Cn(t,n,n.pendingProps.children,a),Xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Jt)&&(o=TS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,An=n,Jt=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Ia(n)),nt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,$f(u,f)?o=null:_!==null&&$f(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(t,n,Hx,null,null,a),Fo._currentValue=u),Xl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Jt)&&(a=AS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,An=n,Jt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return h0(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=As(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return a0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return s0(t,n,n.type,n.pendingProps,a);case 15:return r0(t,n,n.type,n.pendingProps,a);case 19:return m0(t,n,a);case 31:return Zx(t,n,a);case 22:return o0(t,n,a,n.pendingProps);case 24:return ys(n),o=Rn(fn),t===null?(u=Gu(),u===null&&(u=jt,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ku(n),Ba(n,fn,u)):((t.lanes&a)!==0&&(Xu(t,n),vo(n,null,null,a),_o()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,fn,o)):(o=f.cache,Ba(n,fn,o),o!==u.cache&&Fu(n,[fn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(t){t.flags|=4}function Af(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(k0())t.flags|=8192;else throw Ts=wl,Vu}else t.flags&=-16777217}function _0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ng(n))if(k0())t.flags|=8192;else throw Ts=wl,Vu}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ve():536870912,t.lanes|=n,hr|=n)}function bo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Qx(t,n,a){var o=n.pendingProps;switch(Lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(fn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(er(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),$t(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?($t(n),_0(n,f)):($t(n),Af(n,u,null,o,a))):f?f!==t.memoizedState?(oa(n),$t(n),_0(n,f)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&oa(n),$t(n),Af(n,u,t,o,a)),null;case 27:if(we(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}t=Re.current,er(n)?Qp(n):(t=bg(u,o,a),n.stateNode=t,oa(n))}return $t(n),null;case 5:if(we(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}if(f=Re.current,er(n))Qp(n);else{var _=oc(ae.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[cn]=n,f[Tn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oa(n)}}return $t(n),Af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ae.current,er(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||hg(t.nodeValue,a)),t||Ia(n,!0)}else t=oc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=er(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=er(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),$t(n),null);case 4:return He(),t===null&&Zf(n.stateNode.containerInfo),$t(n),null;case 10:return ia(n.type),$t(n),null;case 19:if(Z(on),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ll(t),f!==null){for(n.flags|=128,bo(o,!1),t=f.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Wp(a,t),a=a.sibling;return Ee(on,on.current&1|2),bt&&ta(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Bt()>jl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ll(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return $t(n),null}else 2*Bt()-o.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Bt(),t.sibling=null,a=on.current,Ee(on,u?a&1|2:a&1),bt&&ta(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return ai(n),Zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(fn),$t(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function jx(t,n){switch(Lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(fn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return we(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(on),null;case 4:return He(),null;case 10:return ia(n.type),null;case 22:case 23:return ai(n),Zu(),t!==null&&Z(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(fn),null;case 25:return null;default:return null}}function v0(t,n){switch(Lu(n),n.tag){case 3:ia(fn),He();break;case 26:case 27:case 5:we(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Z(on);break;case 10:ia(n.type);break;case 22:case 23:ai(n),Zu(),t!==null&&Z(Es);break;case 24:ia(fn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Xt(n,n.return,R)}}function ka(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var F=a,te=R;try{te()}catch(me){Xt(u,F,me)}}}o=o.next}while(o!==f)}}catch(me){Xt(n,n.return,me)}}function x0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cm(n,a)}catch(o){Xt(t,t.return,o)}}}function S0(t,n,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Xt(t,n,u)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Xt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(t,n,u)}else a.current=null}function M0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Xt(t,t.return,u)}}function Rf(t,n,a){try{var o=t.stateNode;xS(o,t.type,a,n),o[Tn]=n}catch(u){Xt(t,t.return,u)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(wf(t,n,a),t=t.sibling;t!==null;)wf(t,n,a),t=t.sibling}function Yl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function E0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[cn]=t,n[Tn]=a}catch(f){Xt(t,t.return,f)}}var la=!1,pn=!1,Df=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Jx(t,n){if(t=t.containerInfo,jf=pc,t=Ip(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,F=-1,te=0,me=0,Se=t,oe=null;t:for(;;){for(var ce;Se!==a||u!==0&&Se.nodeType!==3||(R=_+u),Se!==f||o!==0&&Se.nodeType!==3||(F=_+o),Se.nodeType===3&&(_+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)oe=Se,Se=ce;for(;;){if(Se===t)break t;if(oe===a&&++te===u&&(R=_),oe===f&&++me===o&&(F=_),(ce=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=ce}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:t,selectionRange:a},pc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ye=Cs(a.type,u);t=o.getSnapshotBeforeUpdate(Ye,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Xt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)td(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function T0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),o&4&&To(5,a);break;case 1:if(ua(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Xt(a,a.return,_)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Xt(a,a.return,_)}}o&64&&x0(a),o&512&&Ao(a,a.return);break;case 3:if(ua(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(t,n)}catch(_){Xt(a,a.return,_)}}break;case 27:n===null&&o&4&&E0(a);case 26:case 5:ua(t,a),n===null&&o&4&&M0(a),o&512&&Ao(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),o&4&&C0(t,a);break;case 13:ua(t,a),o&4&&w0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oS.bind(null,a),RS(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||pn,u=la;var f=pn;la=o,(pn=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,pn=f}break;case 30:break;default:ua(t,a)}}function A0(t){var n=t.alternate;n!==null&&(t.alternate=null,A0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Da(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,qn=!1;function ca(t,n,a){for(a=a.child;a!==null;)R0(t,n,a),a=a.sibling}function R0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:pn||Bi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Bi(a,n);var o=nn,u=qn;Qa(a.type)&&(nn=a.stateNode,qn=!1),ca(t,n,a),Po(a.stateNode),nn=o,qn=u;break;case 5:pn||Bi(a,n);case 6:if(o=nn,u=qn,nn=null,ca(t,n,a),nn=o,qn=u,nn!==null)if(qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){Xt(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){Xt(a,n,f)}break;case 18:nn!==null&&(qn?(t=nn,xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mr(t)):xg(nn,a.stateNode));break;case 4:o=nn,u=qn,nn=a.stateNode.containerInfo,qn=!0,ca(t,n,a),nn=o,qn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),pn||ka(4,a,n),ca(t,n,a);break;case 1:pn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&S0(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ca(t,n,a),pn=o;break;default:ca(t,n,a)}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mr(t)}catch(a){Xt(n,n.return,a)}}}function w0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mr(t)}catch(a){Xt(n,n.return,a)}}function $x(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new b0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new b0),n;default:throw Error(s(435,t.tag))}}function Zl(t,n){var a=$x(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=lS.bind(null,t,o);o.then(u,u)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){nn=R.stateNode,qn=!1;break e}break;case 5:nn=R.stateNode,qn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,qn=!0;break e}R=R.return}if(nn===null)throw Error(s(160));R0(f,_,u),nn=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)D0(n,t),n=n.sibling}var Ti=null;function D0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(ka(3,t,t.return),To(3,t),ka(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(pn||a===null||Bi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Yn(n,t),Zn(t),o&512&&(pn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wa]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[cn]=t,un(f),o=f;break e;case"link":var _=Dg("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Dg("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=t,un(f),o=f}t.stateNode=o}else Ug(u,t.type,t.stateNode);else t.stateNode=wg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ug(u,t.type,t.stateNode):wg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(pn||a===null||Bi(a,a.return)),a!==null&&o&4&&Rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(pn||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{ei(u,"")}catch(Ye){Xt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Rf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Df=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){Xt(t,t.return,Ye)}}break;case 3:if(uc=null,u=Ti,Ti=lc(n.containerInfo),Yn(n,t),Ti=u,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(Ye){Xt(t,t.return,Ye)}Df&&(Df=!1,U0(t));break;case 4:o=Ti,Ti=lc(t.stateNode.containerInfo),Yn(n,t),Zn(t),Ti=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=Bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,te=la,me=pn;if(la=te||u,pn=me||F,Yn(n,t),pn=me,la=te,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||la||pn||ws(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=F.stateNode;var Se=F.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ye){Xt(F,F.return,Ye)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Ye){Xt(F,F.return,Ye)}}}else if(n.tag===18){if(a===null){F=n;try{var ce=F.stateNode;u?Sg(ce,!0):Sg(F.stateNode,!1)}catch(Ye){Xt(F,F.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(t,a))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(y0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Cf(t);Yl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ei(_,""),a.flags&=-33);var R=Cf(t);Yl(t,R,_);break;case 3:case 4:var F=a.stateNode.containerInfo,te=Cf(t);wf(t,te,F);break;default:throw Error(s(161))}}catch(me){Xt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function U0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;U0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)T0(t,n.alternate,n),n=n.sibling}function ws(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),ws(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&S0(n,n.return,a),ws(n);break;case 27:Po(n.stateNode);case 26:case 5:Bi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),To(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Xt(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)lm(F[u],R)}catch(te){Xt(o,o.return,te)}}a&&_&64&&x0(f),Ao(f,f.return);break;case 27:E0(f);case 26:case 5:fa(u,f,a),a&&o===null&&_&4&&M0(f),Ao(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&_&4&&C0(u,f);break;case 13:fa(u,f,a),a&&_&4&&w0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),Ao(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Uf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function Nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)N0(t,n,a,o),n=n.sibling}function N0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&To(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Xt(n,n.return,F)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):Ro(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,ur(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Uf(_,n);break;case 24:Ai(t,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ai(t,n,a,o)}}function ur(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,F=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:ur(f,_,R,F,u),To(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?ur(f,_,R,F,u):Ro(f,_):(me._visibility|=2,ur(f,_,R,F,u)),u&&te&2048&&Uf(_.alternate,_);break;case 24:ur(f,_,R,F,u),u&&te&2048&&Nf(_.alternate,_);break;default:ur(f,_,R,F,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Uf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Nf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function fr(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)L0(t,n,a),t=t.sibling}function L0(t,n,a){switch(t.tag){case 26:fr(t,n,a),t.flags&Co&&t.memoizedState!==null&&zS(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:fr(t,n,a);break;case 3:case 4:var o=Ti;Ti=lc(t.stateNode.containerInfo),fr(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,fr(t,n,a),Co=o):fr(t,n,a));break;default:fr(t,n,a)}}function O0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,I0(o,t)}O0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)P0(t),t=t.sibling}function P0(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):wo(t);break;default:wo(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,I0(o,t)}O0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function I0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(A0(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var eS={getCacheForType:function(t){var n=Rn(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(fn).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,jt=null,xt=null,Mt=0,kt=0,si=null,Xa=!1,dr=!1,Lf=!1,da=0,sn=0,Wa=0,Ds=0,Of=0,ri=0,hr=0,Do=null,Kn=null,Pf=!1,Ql=0,B0=0,jl=1/0,Jl=null,qa=null,vn=0,Ya=null,pr=null,ha=0,If=0,Bf=null,F0=null,Uo=0,Ff=null;function oi(){return(Ot&2)!==0&&Mt!==0?Mt&-Mt:P.T!==null?Xf():$r()}function z0(){if(ri===0)if((Mt&536870912)===0||bt){var t=rt;rt<<=1,(rt&3932160)===0&&(rt=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===jt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(mr(t,0),Za(t,Mt,ri,!1)),Ve(t,a),((Ot&2)===0||t!==jt)&&(t===jt&&((Ot&2)===0&&(Ds|=a),sn===4&&Za(t,Mt,ri,!1)),Fi(t))}function H0(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?aS(t,n):Hf(t,n,!0),f=o;do{if(u===0){dr&&!o&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!nS(a)){u=Hf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Do;var F=R.current.memoizedState.isDehydrated;if(F&&(mr(R,_).flags|=256),_=Hf(R,_,!1),_!==2){if(Lf&&!F){R.errorRecoveryDisabledLanes|=f,Ds|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){mr(t,0),Za(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,ri,!Xa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-Bt(),10<u)){if(Za(o,n,ri,!Xa),he(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=_g(G0.bind(null,o,a,Kn,Jl,Pf,n,ri,Ds,hr,Xa,f,"Throttled",-0,0),u);break e}G0(o,a,Kn,Jl,Pf,n,ri,Ds,hr,Xa,f,null,-0,0)}}break}while(!0);Fi(t)}function G0(t,n,a,o,u,f,_,R,F,te,me,Se,oe,ce){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},L0(n,f,Se);var Ye=(f&62914560)===f?Ql-Bt():(f&4194048)===f?B0-Bt():0;if(Ye=HS(Se,Ye),Ye!==null){ha=f,t.cancelPendingCommit=Ye(K0.bind(null,t,n,f,a,o,u,_,R,F,me,Se,null,oe,ce)),Za(t,f,_,!te);return}}K0(t,n,f,a,o,u,_,R,F)}function nS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,o){n&=~Of,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Dt(t,a,n)}function $l(){return(Ot&6)===0?(No(0),!1):!0}function zf(){if(xt!==null){if(kt===0)var t=xt.return;else t=xt,na=Ms=null,ef(t),sr=null,po=0,t=xt;for(;t!==null;)v0(t.alternate,t),t=t.return;xt=null}}function mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,zf(),jt=t,xt=a=ea(t.current,null),Mt=n,kt=0,si=null,Xa=!1,dr=Ue(t,n),Lf=!1,hr=ri=Of=Ds=Wa=sn=0,Kn=Do=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return da=n,Sl(),a}function V0(t,n){dt=null,P.H=yo,n===ar||n===Cl?(n=am(),kt=3):n===Vu?(n=am(),kt=4):kt=n===_f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,xt===null&&(sn=1,Vl(t,di(n,t.current)))}function k0(){var t=ii.current;return t===null?!0:(Mt&4194048)===Mt?gi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===gi:!1}function X0(){var t=P.H;return P.H=yo,t===null?yo:t}function W0(){var t=P.A;return P.A=eS,t}function ec(){sn=4,Xa||(Mt&4194048)!==Mt&&ii.current!==null||(dr=!0),(Wa&134217727)===0&&(Ds&134217727)===0||jt===null||Za(jt,Mt,ri,!1)}function Hf(t,n,a){var o=Ot;Ot|=2;var u=X0(),f=W0();(jt!==t||Mt!==n)&&(Jl=null,mr(t,n)),n=!1;var _=sn;e:do try{if(kt!==0&&xt!==null){var R=xt,F=si;switch(kt){case 8:zf(),_=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var te=kt;if(kt=0,si=null,gr(t,R,F,te),a&&dr){_=0;break e}break;default:te=kt,kt=0,si=null,gr(t,R,F,te)}}iS(),_=sn;break}catch(me){V0(t,me)}while(!0);return n&&t.shellSuspendCounter++,na=Ms=null,Ot=o,P.H=u,P.A=f,xt===null&&(jt=null,Mt=0,Sl()),_}function iS(){for(;xt!==null;)q0(xt)}function aS(t,n){var a=Ot;Ot|=2;var o=X0(),u=W0();jt!==t||Mt!==n?(Jl=null,jl=Bt()+500,mr(t,n)):dr=Ue(t,n);e:do try{if(kt!==0&&xt!==null){n=xt;var f=si;t:switch(kt){case 1:kt=0,si=null,gr(t,n,f,1);break;case 2:case 9:if(nm(f)){kt=0,si=null,Y0(n);break}n=function(){kt!==2&&kt!==9||jt!==t||(kt=7),Fi(t)},f.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:nm(f)?(kt=0,si=null,Y0(n)):(kt=0,si=null,gr(t,n,f,7));break;case 5:var _=null;switch(xt.tag){case 26:_=xt.memoizedState;case 5:case 27:var R=xt;if(_?Ng(_):R.stateNode.complete){kt=0,si=null;var F=R.sibling;if(F!==null)xt=F;else{var te=R.return;te!==null?(xt=te,tc(te)):xt=null}break t}}kt=0,si=null,gr(t,n,f,5);break;case 6:kt=0,si=null,gr(t,n,f,6);break;case 8:zf(),sn=6;break e;default:throw Error(s(462))}}sS();break}catch(me){V0(t,me)}while(!0);return na=Ms=null,P.H=o,P.A=u,Ot=a,xt!==null?0:(jt=null,Mt=0,Sl(),sn)}function sS(){for(;xt!==null&&!qt();)q0(xt)}function q0(t){var n=g0(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?tc(t):xt=n}function Y0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=u0(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=u0(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:ef(n);default:v0(a,n),n=xt=Wp(n,da),n=g0(a,n,da)}t.memoizedProps=t.pendingProps,n===null?tc(t):xt=n}function gr(t,n,a,o){na=Ms=null,ef(n),sr=null,po=0;var u=n.return;try{if(Yx(t,u,n,a,Mt)){sn=1,Vl(t,di(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;sn=1,Vl(t,di(a,t.current)),xt=null;return}n.flags&32768?(bt||o===1?t=!0:dr||(Mt&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Z0(n,t)):tc(n)}function tc(t){var n=t;do{if((n.flags&32768)!==0){Z0(n,Xa);return}t=n.return;var a=Qx(n.alternate,n,da);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);sn===0&&(sn=5)}function Z0(t,n){do{var a=jx(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);sn=6,xt=null}function K0(t,n,a,o,u,f,_,R,F){t.cancelPendingCommit=null;do nc();while(vn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ru,Ft(t,a,f,_,R,F),t===jt&&(xt=jt=null,Mt=0),pr=n,Ya=t,ha=a,If=f,Bf=u,F0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cS(Q,function(){return eg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=z.p,z.p=2,_=Ot,Ot|=4;try{Jx(t,n,a)}finally{Ot=_,z.p=u,P.T=o}}vn=1,Q0(),j0(),J0()}}function Q0(){if(vn===1){vn=0;var t=Ya,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=z.p;z.p=2;var u=Ot;Ot|=4;try{D0(n,t);var f=Jf,_=Ip(t.containerInfo),R=f.focusedElem,F=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Pp(R.ownerDocument.documentElement,R)){if(F!==null&&yu(R)){var te=F.start,me=F.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var Se=R.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),Ye=R.textContent.length,it=Math.min(F.start,Ye),Kt=F.end===void 0?it:Math.min(F.end,Ye);!ce.extend&&it>Kt&&(_=Kt,Kt=it,it=_);var K=Op(R,it),k=Op(R,Kt);if(K&&k&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ee=Se.createRange();ee.setStart(K.node,K.offset),ce.removeAllRanges(),it>Kt?(ce.addRange(ee),ce.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ce.addRange(ee))}}}}for(Se=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var _e=Se[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}pc=!!jf,Jf=jf=null}finally{Ot=u,z.p=o,P.T=a}}t.current=n,vn=2}}function j0(){if(vn===2){vn=0;var t=Ya,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=z.p;z.p=2;var u=Ot;Ot|=4;try{T0(t,n.alternate,n)}finally{Ot=u,z.p=o,P.T=a}}vn=3}}function J0(){if(vn===4||vn===3){vn=0,X();var t=Ya,n=pr,a=ha,o=F0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,pr=Ya=null,$0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),Jr(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=z.p,z.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{P.T=n,z.p=u}}(ha&3)!==0&&nc(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Ff?Uo++:(Uo=0,Ff=t):Uo=0,No(0)}}function $0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function nc(){return Q0(),j0(),J0(),eg()}function eg(){if(vn!==5)return!1;var t=Ya,n=If;If=0;var a=Jr(ha),o=P.T,u=z.p;try{z.p=32>a?32:a,P.T=null,a=Bf,Bf=null;var f=Ya,_=ha;if(vn=0,pr=Ya=null,ha=0,(Ot&6)!==0)throw Error(s(331));var R=Ot;if(Ot|=4,P0(f.current),N0(f,f.current,_,a),Ot=R,No(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{z.p=u,P.T=o,$0(t,n)}}function tg(t,n,a){n=di(a,n),n=gf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(Ve(t,2),Fi(t))}function Xt(t,n,a){if(t.tag===3)tg(t,t,a);else for(;n!==null;){if(n.tag===3){tg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=di(a,t),a=n0(2),o=Ha(n,a,2),o!==null&&(i0(a,o,n,t),Ve(o,2),Fi(o));break}}n=n.return}}function Gf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new tS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Lf=!0,u.add(a),t=rS.bind(null,t,n,a),n.then(t,t))}function rS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(Mt&a)===a&&(sn===4||sn===3&&(Mt&62914560)===Mt&&300>Bt()-Ql?(Ot&2)===0&&mr(t,0):Of|=a,hr===Mt&&(hr=0)),Fi(t)}function ng(t,n){n===0&&(n=ve()),t=vs(t,n),t!==null&&(Ve(t,n),Fi(t))}function oS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ng(t,a)}function lS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ng(t,a)}function cS(t,n){return It(t,n)}var ic=null,_r=null,Vf=!1,ac=!1,kf=!1,Ka=0;function Fi(t){t!==_r&&t.next===null&&(_r===null?ic=_r=t:_r=_r.next=t),ac=!0,Vf||(Vf=!0,fS())}function No(t,n){if(!kf&&ac){kf=!0;do for(var a=!1,o=ic;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,rg(o,f))}else f=Mt,f=he(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(a=!0,rg(o,f));o=o.next}while(a);kf=!1}}function uS(){ig()}function ig(){ac=Vf=!1;var t=0;Ka!==0&&MS()&&(t=Ka);for(var n=Bt(),a=null,o=ic;o!==null;){var u=o.next,f=ag(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(_r=a)):(a=o,(t!==0||(f&3)!==0)&&(ac=!0)),o=u}vn!==0&&vn!==5||No(t),Ka!==0&&(Ka=0)}function ag(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Be(f),R=1<<_,F=u[_];F===-1?((R&a)===0||(R&o)!==0)&&(u[_]=De(R,n)):F<=n&&(t.expiredLanes|=R),f&=~R}if(n=jt,a=Mt,a=he(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Rt(o),Jr(a)){case 2:case 8:a=M;break;case 32:a=Q;break;case 268435456:a=fe;break;default:a=Q}return o=sg.bind(null,t),a=It(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function sg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(nc()&&t.callbackNode!==a)return null;var o=Mt;return o=he(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(H0(t,o,n),ag(t,Bt()),t.callbackNode!=null&&t.callbackNode===a?sg.bind(null,t):null)}function rg(t,n){if(nc())return null;H0(t,n,!0)}function fS(){ES(function(){(Ot&6)!==0?It(w,uS):ig()})}function Xf(){if(Ka===0){var t=nr;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),Ka=t}return Ka}function og(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ps(""+t)}function lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function dS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=og((u[Tn]||null).action),_=o.submitter;_&&(n=(n=_[Tn]||null)?og(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new gl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var F=_?lg(u,_):new FormData(u);uf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=_?lg(u,_):new FormData(u),uf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Wf=0;Wf<Au.length;Wf++){var qf=Au[Wf],hS=qf.toLowerCase(),pS=qf[0].toUpperCase()+qf.slice(1);bi(hS,"on"+pS)}bi(zp,"onAnimationEnd"),bi(Hp,"onAnimationIteration"),bi(Gp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Dx,"onTransitionRun"),bi(Ux,"onTransitionStart"),bi(Nx,"onTransitionCancel"),bi(Vp,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],F=R.instance,te=R.currentTarget;if(R=R.listener,F!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(me){xl(me)}u.currentTarget=null,f=F}else for(_=0;_<o.length;_++){if(R=o[_],F=R.instance,te=R.currentTarget,R=R.listener,F!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(me){xl(me)}u.currentTarget=null,f=F}}}}function St(t,n){var a=n[fs];a===void 0&&(a=n[fs]=new Set);var o=t+"__bubble";a.has(o)||(ug(n,t,2,!1),a.add(o))}function Yf(t,n,a){var o=0;n&&(o|=4),ug(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Zf(t){if(!t[sc]){t[sc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||Yf(a,!1,t),Yf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,Yf("selectionchange",!1,n))}}function ug(t,n,a,o){switch(zg(n)){case 2:var u=kS;break;case 8:u=XS;break;default:u=cd}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Kf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Qi(R),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){o=f=_;continue e}R=R.parentNode}}o=o.return}mp(function(){var te=f,me=fu(a),Se=[];e:{var oe=kp.get(t);if(oe!==void 0){var ce=gl,Ye=t;switch(t){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":ce=lx;break;case"focusin":Ye="focus",ce=_u;break;case"focusout":Ye="blur",ce=_u;break;case"beforeblur":case"afterblur":ce=_u;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=fx;break;case zp:case Hp:case Gp:ce=$v;break;case Vp:ce=hx;break;case"scroll":case"scrollend":ce=Zv;break;case"wheel":ce=mx;break;case"copy":case"cut":case"paste":ce=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Sp;break;case"toggle":case"beforetoggle":ce=_x}var it=(n&4)!==0,Kt=!it&&(t==="scroll"||t==="scrollend"),K=it?oe!==null?oe+"Capture":null:oe;it=[];for(var k=te,ee;k!==null;){var _e=k;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||K===null||(_e=eo(k,K),_e!=null&&it.push(Oo(k,_e,ee))),Kt)break;k=k.return}0<it.length&&(oe=new ce(oe,Ye,null,a,me),Se.push({event:oe,listeners:it}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==uu&&(Ye=a.relatedTarget||a.fromElement)&&(Qi(Ye)||Ye[Xn]))break e;if((ce||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(Ye=a.relatedTarget||a.toElement,ce=te,Ye=Ye?Qi(Ye):null,Ye!==null&&(Kt=c(Ye),it=Ye.tag,Ye!==Kt||it!==5&&it!==27&&it!==6)&&(Ye=null)):(ce=null,Ye=te),ce!==Ye)){if(it=vp,_e="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(it=Sp,_e="onPointerLeave",K="onPointerEnter",k="pointer"),Kt=ce==null?oe:hs(ce),ee=Ye==null?oe:hs(Ye),oe=new it(_e,k+"leave",ce,a,me),oe.target=Kt,oe.relatedTarget=ee,_e=null,Qi(me)===te&&(it=new it(K,k+"enter",Ye,a,me),it.target=ee,it.relatedTarget=Kt,_e=it),Kt=_e,ce&&Ye)t:{for(it=gS,K=ce,k=Ye,ee=0,_e=K;_e;_e=it(_e))ee++;_e=0;for(var et=k;et;et=it(et))_e++;for(;0<ee-_e;)K=it(K),ee--;for(;0<_e-ee;)k=it(k),_e--;for(;ee--;){if(K===k||k!==null&&K===k.alternate){it=K;break t}K=it(K),k=it(k)}it=null}else it=null;ce!==null&&fg(Se,oe,ce,it,!1),Ye!==null&&Kt!==null&&fg(Se,Kt,Ye,it,!0)}}e:{if(oe=te?hs(te):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var Nt=Cp;else if(Ap(oe))if(wp)Nt=Rx;else{Nt=Tx;var Ze=bx}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&zt(te.elementType)&&(Nt=Cp):Nt=Ax;if(Nt&&(Nt=Nt(t,te))){Rp(Se,Nt,a,me);break e}Ze&&Ze(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&vt(oe,"number",oe.value)}switch(Ze=te?hs(te):window,t){case"focusin":(Ap(Ze)||Ze.contentEditable==="true")&&(Zs=Ze,Eu=te,lo=null);break;case"focusout":lo=Eu=Zs=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Bp(Se,a,me);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Bp(Se,a,me)}var ht;if(xu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ys?bp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Mp&&a.locale!=="ko"&&(Ys||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ys&&(ht=gp()):(La=me,pu="value"in La?La.value:La.textContent,Ys=!0)),Ze=rc(te,yt),0<Ze.length&&(yt=new xp(yt,t,null,a,me),Se.push({event:yt,listeners:Ze}),ht?yt.data=ht:(ht=Tp(a),ht!==null&&(yt.data=ht)))),(ht=xx?Sx(t,a):Mx(t,a))&&(yt=rc(te,"onBeforeInput"),0<yt.length&&(Ze=new xp("onBeforeInput","beforeinput",null,a,me),Se.push({event:Ze,listeners:yt}),Ze.data=ht)),dS(Se,t,te,a,me)}cg(Se,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function rc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,f)),u=eo(t,n),u!=null&&o.push(Oo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function gS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fg(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,F=R.alternate,te=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||te===null||(F=te,u?(te=eo(a,f),te!=null&&_.unshift(Oo(a,te,F))):u||(te=eo(a,f),te!=null&&_.push(Oo(a,te,F)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(vS,"")}function hg(t,n){return n=dg(n),dg(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(t,""+o);break;case"className":qe(t,"class",o);break;case"tabIndex":qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ps(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ps(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ps(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Pe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Pe(t,a,o))}}function Qf(t,n,a,o,u,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ei(t,o):(typeof o=="number"||typeof o=="bigint")&&ei(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Pe(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,_,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=f=_=u=null,F=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":_=me;break;case"checked":F=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Zt(t,n,o,me,a,null)}}Ln(t,f,R,F,te,_,u,!1);return;case"select":St("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Zt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Zt(t,n,_,R,a,null)}yi(t,o,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,F,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)St(Lo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,te,o,a,null)}return;default:if(zt(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Qf(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Zt(t,n,R,o,a,null))}function xS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,F=null,te=null,me=null;for(ce in a){var Se=a[ce];if(a.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(ce)||Zt(t,n,ce,null,o,Se)}}for(var oe in o){var ce=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(ce!=null||Se!=null))switch(oe){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":_=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Se&&Zt(t,n,oe,ce,o,Se)}}Ge(t,_,R,F,te,me,f,u);return;case"select":ce=_=R=oe=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ce=F;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==F&&Zt(t,n,u,f,o,F)}n=R,a=_,o=ce,oe!=null?_n(t,!!a,oe,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,_,u,o,f)}$n(t,oe,ce);return;case"option":for(var Ye in a)if(oe=a[Ye],a.hasOwnProperty(Ye)&&oe!=null&&!o.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:Zt(t,n,Ye,null,o,oe)}for(F in o)if(oe=o[F],ce=a[F],o.hasOwnProperty(F)&&oe!==ce&&(oe!=null||ce!=null))switch(F){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Zt(t,n,F,oe,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)oe=a[it],a.hasOwnProperty(it)&&oe!=null&&!o.hasOwnProperty(it)&&Zt(t,n,it,null,o,oe);for(te in o)if(oe=o[te],ce=a[te],o.hasOwnProperty(te)&&oe!==ce&&(oe!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Zt(t,n,te,oe,o,ce)}return;default:if(zt(n)){for(var Kt in a)oe=a[Kt],a.hasOwnProperty(Kt)&&oe!==void 0&&!o.hasOwnProperty(Kt)&&Qf(t,n,Kt,void 0,o,oe);for(me in o)oe=o[me],ce=a[me],!o.hasOwnProperty(me)||oe===ce||oe===void 0&&ce===void 0||Qf(t,n,me,oe,o,ce);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&Zt(t,n,K,null,o,oe);for(Se in o)oe=o[Se],ce=a[Se],!o.hasOwnProperty(Se)||oe===ce||oe==null&&ce==null||Zt(t,n,Se,oe,o,ce)}function pg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&pg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],te=F.startTime;if(te>R)break;var me=F.transferSize,Se=F.initiatorType;me&&pg(Se)&&(F=F.responseEnd,_+=me*(F<R?1:(R-te)/(F-te)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jf=null,Jf=null;function oc(t){return t.nodeType===9?t:t.ownerDocument}function mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function $f(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ed=null;function MS(){var t=window.event;return t&&t.type==="popstate"?t===ed?!1:(ed=t,!0):(ed=null,!1)}var _g=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(bS)}:_g;function bS(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function xg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[wa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);Mr(n)}function Sg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function td(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":td(a),Da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function TS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function AS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function Mg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function nd(t){return t.data==="$?"||t.data==="$~"}function id(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function RS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ad=null;function yg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Eg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bg(t,n,a){switch(n=oc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Da(t)}var vi=new Map,Tg=new Set;function lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=z.d;z.d={f:CS,r:wS,D:DS,C:US,L:NS,m:LS,X:PS,S:OS,M:IS};function CS(){var t=pa.f(),n=$l();return t||n}function wS(t){var n=ji(t);n!==null&&n.tag===5&&n.type==="form"?Vm(n):pa.r(t)}var vr=typeof document>"u"?null:document;function Ag(t,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Tg.has(u)||(Tg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),un(n),o.head.appendChild(n)))}}function DS(t){pa.D(t),Ag("dns-prefetch",t,null)}function US(t,n){pa.C(t,n),Ag("preconnect",t,n)}function NS(t,n,a){pa.L(t,n,a);var o=vr;if(o&&t&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var f=u;switch(n){case"style":f=xr(t);break;case"script":f=Sr(t)}vi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(Bo(f))||(n=o.createElement("link"),wn(n,"link",t),un(n),o.head.appendChild(n)))}}function LS(t,n){pa.m(t,n);var a=vr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(t)}if(!vi.has(f)&&(t=v({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(f)))return}o=a.createElement("link"),wn(o,"link",t),un(o),a.head.appendChild(o)}}}function OS(t,n,a){pa.S(t,n,a);var o=vr;if(o&&t){var u=Ua(o).hoistableStyles,f=xr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Io(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&sd(t,a);var F=_=o.createElement("link");un(F),wn(F,"link",t),F._p=new Promise(function(te,me){F.onload=te,F.onerror=me}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function PS(t,n){pa.X(t,n);var a=vr;if(a&&t){var o=Ua(a).hoistableScripts,u=Sr(t),f=o.get(u);f||(f=a.querySelector(Bo(u)),f||(t=v({src:t,async:!0},n),(n=vi.get(u))&&rd(t,n),f=a.createElement("script"),un(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function IS(t,n){pa.M(t,n);var a=vr;if(a&&t){var o=Ua(a).hoistableScripts,u=Sr(t),f=o.get(u);f||(f=a.querySelector(Bo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&rd(t,n),f=a.createElement("script"),un(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Rg(t,n,a,o){var u=(u=ae.current)?lc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xr(a.href);var f=Ua(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Io(t)))&&!f._p&&(_.instance=f,_.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||BS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xr(t){return'href="'+Gt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function Cg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function BS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),un(n),t.head.appendChild(n))}function Sr(t){return'[src="'+Gt(t)+'"]'}function Bo(t){return"script[async]"+t}function wg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),un(o),wn(o,"style",u),cc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xr(a.href);var f=t.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;o=Cg(a),(u=vi.get(u))&&sd(o,u),f=(t.ownerDocument||t).createElement("link"),un(f);var _=f;return _._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),wn(f,"link",o),n.state.loading|=4,cc(f,a.precedence,t),n.instance=f;case"script":return f=Sr(a.src),(u=t.querySelector(Bo(f)))?(n.instance=u,un(u),u):(o=a,(u=vi.get(f))&&(o=v({},a),rd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),un(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,t));return n.instance}function cc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var uc=null;function Dg(t,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[wa]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function Ug(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function FS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ng(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=fc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,o=Cg(o),(u=vi.get(u))&&sd(o,u),f=f.createElement("link"),un(f);var _=f;_._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=fc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var od=0;function HS(t,n){return t.stylesheets&&t.count===0&&hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&od===0&&(od=62500*SS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>od?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach(GS,t),dc=null,fc.call(t))}function GS(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:H,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function VS(t,n,a,o,u,f,_,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Lg(t,n,a,o,u,f,_,R,F,te,me,Se){return t=new VS(t,n,a,_,F,te,me,Se,R),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ku(f),t}function Og(t){return t?(t=js,t):js}function Pg(t,n,a,o,u,f){u=Og(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ha(t,o,n),a!==null&&(Qn(a,t,n),go(a,t,n))}function Ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ld(t,n){Ig(t,n),(t=t.alternate)&&Ig(t,n)}function Bg(t){if(t.tag===13||t.tag===31){var n=vs(t,67108864);n!==null&&Qn(n,t,67108864),ld(t,67108864)}}function Fg(t){if(t.tag===13||t.tag===31){var n=oi();n=jr(n);var a=vs(t,n);a!==null&&Qn(a,t,n),ld(t,n)}}var pc=!0;function kS(t,n,a,o){var u=P.T;P.T=null;var f=z.p;try{z.p=2,cd(t,n,a,o)}finally{z.p=f,P.T=u}}function XS(t,n,a,o){var u=P.T;P.T=null;var f=z.p;try{z.p=8,cd(t,n,a,o)}finally{z.p=f,P.T=u}}function cd(t,n,a,o){if(pc){var u=ud(o);if(u===null)Kf(t,n,o,mc,a),Hg(t,o);else if(qS(u,t,n,a,o))o.stopPropagation();else if(Hg(t,o),n&4&&-1<WS.indexOf(t)){for(;u!==null;){var f=ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var F=1<<31-Be(_);R.entanglements[1]|=F,_&=~F}Fi(f),(Ot&6)===0&&(jl=Bt()+500,No(0))}}break;case 31:case 13:R=vs(f,2),R!==null&&Qn(R,f,2),$l(),ld(f,2)}if(f=ud(o),f===null&&Kf(t,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Kf(t,n,o,null,a)}}function ud(t){return t=fu(t),fd(t)}var mc=null;function fd(t){if(mc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return mc=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case w:return 2;case M:return 8;case Q:case se:return 32;case fe:return 268435456;default:return 32}default:return 32}}var dd=!1,ja=null,Ja=null,$a=null,zo=new Map,Ho=new Map,es=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hg(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ji(n),n!==null&&Bg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qS(t,n,a,o,u){switch(n){case"focusin":return ja=Go(ja,t,n,a,o,u),!0;case"dragenter":return Ja=Go(Ja,t,n,a,o,u),!0;case"mouseover":return $a=Go($a,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Go(zo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,t,n,a,o,u)),!0}return!1}function Gg(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){Fg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){Fg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ud(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=ji(a),n!==null&&Bg(n),t.blockedOn=a,!1;n.shift()}return!0}function Vg(t,n,a){gc(t)&&a.delete(n)}function YS(){dd=!1,ja!==null&&gc(ja)&&(ja=null),Ja!==null&&gc(Ja)&&(Ja=null),$a!==null&&gc($a)&&($a=null),zo.forEach(Vg),Ho.forEach(Vg)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,dd||(dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,YS)))}var vc=null;function kg(t){vc!==t&&(vc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(fd(o||a)===null)continue;break}var f=ji(a);f!==null&&(t.splice(n,3),n-=3,uf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(t){function n(F){return _c(F,t)}ja!==null&&_c(ja,t),Ja!==null&&_c(Ja,t),$a!==null&&_c($a,t),zo.forEach(n),Ho.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)Gg(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[Tn]||null;if(typeof f=="function")_||kg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Tn]||null)R=_.formAction;else if(fd(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),kg(a)}}}function Xg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hd(t){this._internalRoot=t}xc.prototype.render=hd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();Pg(a,o,t,n,null,null)},xc.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Pg(t.current,2,null,t,null,null),$l(),n[Xn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$r();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&Gg(t)}};var Wg=e.version;if(Wg!=="19.2.7")throw Error(s(527,Wg,"19.2.7"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var ZS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ue=Sc.inject(ZS),de=Sc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Jm,f=$m,_=e0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Lg(t,1,!1,null,null,a,o,null,u,f,_,Xg),t[Xn]=n.current,Zf(t),new hd(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Jm,_=$m,R=e0,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Lg(t,1,!0,n,a??null,o,u,F,f,_,R,Xg),n.context=Og(null),a=n.current,o=oi(),o=jr(o),u=za(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Fi(n),t[Xn]=n.current,Zf(t),new xc(n)},ko.version="19.2.7",ko}var t_;function aM(){if(t_)return gd.exports;t_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gd.exports=iM(),gd.exports}var sM=aM();const rM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},yr=(r,e="#")=>{var i;return((i=rM[r])==null?void 0:i.trim())||e},En={app:yr("VITE_APP_URL"),docs:yr("VITE_DOCS_URL"),manifesto:yr("VITE_MANIFESTO_URL"),discord:yr("VITE_DISCORD_URL"),x:yr("VITE_X_URL"),tutorialVideo:yr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore"},Xc=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],n_={text:"> The agent-native L1 DEX, for faster and safer trades.",href:En.manifesto},Er={headline:["Agents you can trust.","Assets you can trade."],subline:"Morpheum turns autonomous trading agents into verifiable, ownable capital assets — so you back them on proof, not promises.",primaryCta:{label:"Launch Morpheum",href:En.app},secondaryCta:{label:"Explore agents",href:En.explore}},Sd={badChoices:[{title:"Buy random agent tokens",detail:"speculation without underwriting"},{title:"Run your own agent",detail:"automation without capital controls"}],payoff:"Morpheum gives every agent records, identity, proof, and markets, so it becomes a real capital asset you can verify, own, and trade.",close:"Capital funds proof."},i_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy desks",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],th={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",caption:"Scan every agent, index, and market — and surface only proven, verified agents, with records, receipts, and risk scores up front."},{verb:"Copy",caption:"Mirror a proven performer into your own dedicated desk in one click."},{verb:"Supervise",caption:"Approve or reject any gated move — or hand over the keys."},{verb:"Isolate",caption:"Bucket each strategy so a drawdown stays contained."}]},Md={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:En.app}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated desk.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:En.app}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:En.app}}]},Xo={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open Agent-SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own desk in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh desk bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other desks and spot balance are untouched."}]},Wo={kicker:"Explore",title:"Agents. Indices. Buckets.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Desk",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Desk A",value:"ISOLATED",positive:!1},{label:"Desk B",value:"ISOLATED",positive:!1}]}]},Mc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch app",href:En.app},social:[{label:"Join Discord",href:En.discord},{label:"Join X",href:En.x}]},oM={legal:"© 2026 Morpheum. Capital funds proof."};function kr({variant:r="primary",children:e,className:i="",...s}){const l=`cta cta--${r} terminal-interactive ${i}`.trim();if("href"in s&&s.href!==void 0){const{href:c,...d}=s;return q.jsx("a",{className:l,href:c,...d,children:e})}return q.jsx("button",{className:l,type:"button",...s,children:e})}function lM(){return q.jsx("section",{id:"join",className:"section community",children:q.jsxs("div",{className:"container community__inner",children:[q.jsx("h2",{className:"community__line",children:Mc.line}),q.jsxs("div",{className:"community__ctas",children:[q.jsx(kr,{href:Mc.primaryCta.href,variant:"primary",children:Mc.primaryCta.label}),Mc.social.map(r=>q.jsx(kr,{href:r.href,variant:"ghost",children:r.label},r.label))]})]})})}function cM(){const[r,e]=Bn.useState(!1),i=!!En.tutorialVideo;return q.jsx("section",{id:"demo",className:"section demo",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:th.kicker}),q.jsxs("div",{className:"demo__video",children:[r&&i?q.jsx("video",{className:"demo__player",src:En.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):q.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[q.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),q.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),q.jsx("p",{className:"demo__caption",children:th.videoCaption})]})]})})}const uM={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function yd({type:r,value:e}){return q.jsxs("span",{className:`proof-chip proof-chip--${r}`,children:[q.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),q.jsx("span",{className:"proof-chip__label",children:uM[r]}),e?q.jsx("span",{className:"proof-chip__value",children:e}):null]})}function fM(){const r=Wo.cards[0],e=Wo.cards[1],i=Wo.cards[2];return q.jsx("section",{id:"explore",className:"section explore",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:Wo.kicker}),q.jsx("h2",{className:"section-title explore__title",children:Wo.title}),q.jsxs("div",{className:"explore__grid",children:[q.jsxs("article",{className:"explore-card explore-card--major",children:[q.jsxs("header",{className:"explore-card__header",children:[q.jsx("h3",{className:"explore-card__title",children:r.title}),q.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),q.jsx("ul",{className:"explore-roster",children:r.agents.map(s=>q.jsxs("li",{className:"explore-roster__row",children:[q.jsxs("div",{className:"explore-roster__top",children:[q.jsx("span",{className:"explore-roster__name",children:s.name}),q.jsx("span",{className:`terminal-value ${s.positive?"terminal-long":"terminal-short"}`,children:s.roi})]}),q.jsxs("div",{className:"explore-roster__proof",children:[q.jsx(yd,{type:"verified"}),q.jsx(yd,{type:"riskScore",value:s.risk}),q.jsx(yd,{type:"receipt"}),q.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",s.sharpe]})]})]},s.name))})]}),q.jsxs("article",{className:"explore-card explore-card--major",children:[q.jsxs("header",{className:"explore-card__header",children:[q.jsx("h3",{className:"explore-card__title",children:e.title}),q.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),q.jsx("p",{className:"explore-card__blurb",children:e.blurb}),q.jsx("ul",{className:"explore-sample",children:e.sample.map(s=>q.jsxs("li",{children:[q.jsx("span",{className:"terminal-label",children:s.label}),q.jsx("span",{className:`terminal-value ${s.positive?"terminal-long":""}`,children:s.value})]},s.label))})]}),q.jsxs("article",{className:"explore-card explore-card--major",children:[q.jsxs("header",{className:"explore-card__header",children:[q.jsx("h3",{className:"explore-card__title",children:i.title}),q.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),q.jsx("p",{className:"explore-card__blurb",children:i.blurb}),q.jsx("ul",{className:"explore-sample",children:i.sample.map(s=>q.jsxs("li",{children:[q.jsx("span",{className:"terminal-label",children:s.label}),q.jsx("span",{className:"terminal-value explore-sample__status",children:s.value})]},s.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="185",dM=0,a_=1,hM=2,Wc=1,pM=2,Jo=3,Ta=0,Jn=1,Vi=2,ya=0,Hr=1,s_=2,r_=3,o_=4,mM=5,Is=100,gM=101,_M=102,vM=103,xM=104,SM=200,MM=201,yM=202,EM=203,nh=204,ih=205,bM=206,TM=207,AM=208,RM=209,CM=210,wM=211,DM=212,UM=213,NM=214,ah=0,sh=1,rh=2,Xr=3,oh=4,lh=5,ch=6,uh=7,lv=0,LM=1,OM=2,Wi=0,cv=1,uv=2,fv=3,dv=4,hv=5,pv=6,mv=7,gv=300,Hs=301,Wr=302,Ed=303,bd=304,ru=306,fh=1e3,Ma=1001,dh=1002,Dn=1003,PM=1004,yc=1005,bn=1006,Td=1007,cs=1008,Mi=1009,_v=1010,vv=1011,sl=1012,Zh=1013,Zi=1014,ki=1015,Aa=1016,Kh=1017,Qh=1018,rl=1020,xv=35902,Sv=35899,Mv=1021,yv=1022,Ui=1023,Ra=1026,Fs=1027,Ev=1028,jh=1029,Gs=1030,Jh=1031,$h=1033,qc=33776,Yc=33777,Zc=33778,Kc=33779,hh=35840,ph=35841,mh=35842,gh=35843,_h=36196,vh=37492,xh=37496,Sh=37488,Mh=37489,Jc=37490,yh=37491,Eh=37808,bh=37809,Th=37810,Ah=37811,Rh=37812,Ch=37813,wh=37814,Dh=37815,Uh=37816,Nh=37817,Lh=37818,Oh=37819,Ph=37820,Ih=37821,Bh=36492,Fh=36494,zh=36495,Hh=36283,Gh=36284,$c=36285,Vh=36286,IM=3200,l_=0,BM=1,ls="",kn="srgb",eu="srgb-linear",tu="linear",Wt="srgb",br=7680,c_=519,FM=512,zM=513,HM=514,ep=515,GM=516,VM=517,tp=518,kM=519,u_=35044,f_="300 es",Xi=2e3,nu=2001;function XM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WM(){const r=iu("canvas");return r.style.display="block",r}const d_={};function h_(...r){const e="THREE."+r.shift();console.log(e,...r)}function bv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ot(...r){r=bv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ct(...r){r=bv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Gr(...r){const e=r.join(" ");e in d_||(d_[e]=!0,ot(...r))}function qM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const YM={[ah]:sh,[rh]:ch,[oh]:uh,[Xr]:lh,[sh]:ah,[ch]:rh,[uh]:oh,[lh]:Xr};class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let p_=1234567;const tl=Math.PI/180,ol=180/Math.PI;function Zr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function np(r,e){return(r%e+e)%e}function ZM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function KM(r,e,i){return r!==e?(i-r)/(e-r):0}function nl(r,e,i){return(1-i)*r+i*e}function QM(r,e,i,s){return nl(r,e,1-Math.exp(-i*s))}function jM(r,e=1){return e-Math.abs(np(r,e*2)-e)}function JM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function $M(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function ey(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ty(r,e){return r+Math.random()*(e-r)}function ny(r){return r*(.5-Math.random())}function iy(r){r!==void 0&&(p_=r);let e=p_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ay(r){return r*tl}function sy(r){return r*ol}function ry(r){return(r&r-1)===0&&r!==0}function oy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ly(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cy(r,e,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((e+s)/2),x=d((e+s)/2),v=c((e-s)/2),g=d((e-s)/2),E=c((s-e)/2),T=d((s-e)/2);switch(l){case"XYX":r.set(h*x,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*x,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*x,h*p);break;case"XZX":r.set(h*x,m*T,m*E,h*p);break;case"YXY":r.set(m*E,h*x,m*T,h*p);break;case"ZYZ":r.set(m*T,m*E,h*x,h*p);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Fr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vn={DEG2RAD:tl,RAD2DEG:ol,generateUUID:Zr,clamp:Et,euclideanModulo:np,mapLinear:ZM,inverseLerp:KM,lerp:nl,damp:QM,pingpong:jM,smoothstep:JM,smootherstep:$M,randInt:ey,randFloat:ty,randFloatSpread:ny,seededRandom:iy,degToRad:ay,radToDeg:sy,isPowerOfTwo:ry,ceilPowerOfTwo:oy,floorPowerOfTwo:ly,setQuaternionFromProperEuler:cy,normalize:Hn,denormalize:Fr},cp=class cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cp.prototype.isVector2=!0;let Pt=cp;class Kr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3],g=c[d+0],E=c[d+1],T=c[d+2],U=c[d+3];if(v!==U||m!==g||p!==E||x!==T){let y=m*g+p*E+x*T+v*U;y<0&&(g=-g,E=-E,T=-T,U=-U,y=-y);let S=1-h;if(y<.9995){const B=Math.acos(y),H=Math.sin(B);S=Math.sin(S*B)/H,h=Math.sin(h*B)/H,m=m*S+g*h,p=p*S+E*h,x=x*S+T*h,v=v*S+U*h}else{m=m*S+g*h,p=p*S+E*h,x=x*S+T*h,v=v*S+U*h;const B=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=B,p*=B,x*=B,v*=B}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=c[d],g=c[d+1],E=c[d+2],T=c[d+3];return e[i]=h*T+x*v+m*E-p*g,e[i+1]=m*T+x*g+p*v-h*E,e[i+2]=p*T+x*E+h*g-m*v,e[i+3]=x*T-h*v-m*g-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),v=h(c/2),g=m(s/2),E=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*x*v+p*E*T,this._y=p*E*v-g*x*T,this._z=p*x*T+g*E*v,this._w=p*x*v-g*E*T;break;case"YXZ":this._x=g*x*v+p*E*T,this._y=p*E*v-g*x*T,this._z=p*x*T-g*E*v,this._w=p*x*v+g*E*T;break;case"ZXY":this._x=g*x*v-p*E*T,this._y=p*E*v+g*x*T,this._z=p*x*T+g*E*v,this._w=p*x*v-g*E*T;break;case"ZYX":this._x=g*x*v-p*E*T,this._y=p*E*v+g*x*T,this._z=p*x*T-g*E*v,this._w=p*x*v+g*E*T;break;case"YZX":this._x=g*x*v+p*E*T,this._y=p*E*v+g*x*T,this._z=p*x*T-g*E*v,this._w=p*x*v-g*E*T;break;case"XZY":this._x=g*x*v-p*E*T,this._y=p*E*v-g*x*T,this._z=p*x*T+g*E*v,this._w=p*x*v+g*E*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],g=s+h+v;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(x-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-s*p,this._z=c*x+d*p+s*m-l*h,this._w=d*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(m_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),x=2*(h*i-c*l),v=2*(c*s-d*i);return this.x=i+m*p+d*v-h*x,this.y=s+m*x+h*p-c*v,this.z=l+m*v+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let le=up;const Ad=new le,m_=new Kr,fp=class fp{constructor(e,i,s,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],v=s[7],g=s[2],E=s[5],T=s[8],U=l[0],y=l[3],S=l[6],B=l[1],H=l[4],C=l[7],I=l[2],L=l[5],O=l[8];return c[0]=d*U+h*B+m*I,c[3]=d*y+h*H+m*L,c[6]=d*S+h*C+m*O,c[1]=p*U+x*B+v*I,c[4]=p*y+x*H+v*L,c[7]=p*S+x*C+v*O,c[2]=g*U+E*B+T*I,c[5]=g*y+E*H+T*L,c[8]=g*S+E*C+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-s*c*x+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=x*d-h*p,g=h*m-x*c,E=p*c-d*m,T=i*v+s*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/T;return e[0]=v*U,e[1]=(l*p-x*s)*U,e[2]=(h*s-l*d)*U,e[3]=g*U,e[4]=(x*i-l*m)*U,e[5]=(l*c-h*i)*U,e[6]=E*U,e[7]=(s*m-p*i)*U,e[8]=(d*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rd.makeScale(e,i)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rd.makeRotation(-e)),this}translate(e,i){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;let ut=fp;const Rd=new ut,g_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const r={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Wt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Wt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eu]:{primaries:e,whitePoint:s,transfer:tu,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:s,transfer:Wt,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}const Tt=uy();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class fy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Tr===void 0&&(Tr=iu("canvas")),Tr.width=e.width,Tr.height=e.height;const l=Tr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=iu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ea(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Cd(l[d].image)):c.push(Cd(l[d]))}else c=Cd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Cd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let hy=0;const wd=new le;class Fn extends ks{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Ma,l=Ma,c=bn,d=cs,h=Ui,m=Mi,p=Fn.DEFAULT_ANISOTROPY,x=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Zr(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=gv;Fn.DEFAULT_ANISOTROPY=1;const dp=class dp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],v=m[8],g=m[1],E=m[5],T=m[9],U=m[2],y=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-U)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+U)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(p+1)/2,C=(E+1)/2,I=(S+1)/2,L=(x+g)/4,O=(v+U)/4,b=(T+y)/4;return H>C&&H>I?H<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(H),l=L/s,c=O/s):C>I?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=L/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=b/c),this.set(s,l,c,i),this}let B=Math.sqrt((y-T)*(y-T)+(v-U)*(v-U)+(g-x)*(g-x));return Math.abs(B)<.001&&(B=1),this.x=(y-T)/B,this.y=(v-U)/B,this.z=(g-x)/B,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dp.prototype.isVector4=!0;let rn=dp;class py extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Fn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends py{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Tv extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=class su{constructor(e,i,s,l,c,d,h,m,p,x,v,g,E,T,U,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,x,v,g,E,T,U,y)}set(e,i,s,l,c,d,h,m,p,x,v,g,E,T,U,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=g,S[3]=E,S[7]=T,S[11]=U,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new su().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ar.setFromMatrixColumn(e,0).length(),c=1/Ar.setFromMatrixColumn(e,1).length(),d=1/Ar.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*x,E=d*v,T=h*x,U=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=E+T*p,i[5]=g-U*p,i[9]=-h*m,i[2]=U-g*p,i[6]=T+E*p,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,E=m*v,T=p*x,U=p*v;i[0]=g+U*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=E*h-T,i[6]=U+g*h,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,E=m*v,T=p*x,U=p*v;i[0]=g-U*h,i[4]=-d*v,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*x,i[9]=U-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,E=d*v,T=h*x,U=h*v;i[0]=m*x,i[4]=T*p-E,i[8]=g*p+U,i[1]=m*v,i[5]=U*p+g,i[9]=E*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,E=d*p,T=h*m,U=h*p;i[0]=m*x,i[4]=U-g*v,i[8]=T*v+E,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*v+T,i[10]=g-U*v}else if(e.order==="XZY"){const g=d*m,E=d*p,T=h*m,U=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=g*v+U,i[5]=d*x,i[9]=E*v-T,i[2]=T*v-E,i[6]=h*x,i[10]=U*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,_y)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ns.crossVectors(s,li),ns.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ns.crossVectors(s,li)),ns.normalize(),Ec.crossVectors(li,ns),l[0]=ns.x,l[4]=Ec.x,l[8]=li.x,l[1]=ns.y,l[5]=Ec.y,l[9]=li.y,l[2]=ns.z,l[6]=Ec.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],v=s[5],g=s[9],E=s[13],T=s[2],U=s[6],y=s[10],S=s[14],B=s[3],H=s[7],C=s[11],I=s[15],L=l[0],O=l[4],b=l[8],N=l[12],Y=l[1],G=l[5],j=l[9],pe=l[13],xe=l[2],J=l[6],P=l[10],z=l[14],$=l[3],ge=l[7],be=l[11],D=l[15];return c[0]=d*L+h*Y+m*xe+p*$,c[4]=d*O+h*G+m*J+p*ge,c[8]=d*b+h*j+m*P+p*be,c[12]=d*N+h*pe+m*z+p*D,c[1]=x*L+v*Y+g*xe+E*$,c[5]=x*O+v*G+g*J+E*ge,c[9]=x*b+v*j+g*P+E*be,c[13]=x*N+v*pe+g*z+E*D,c[2]=T*L+U*Y+y*xe+S*$,c[6]=T*O+U*G+y*J+S*ge,c[10]=T*b+U*j+y*P+S*be,c[14]=T*N+U*pe+y*z+S*D,c[3]=B*L+H*Y+C*xe+I*$,c[7]=B*O+H*G+C*J+I*ge,c[11]=B*b+H*j+C*P+I*be,c[15]=B*N+H*pe+C*z+I*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],v=e[6],g=e[10],E=e[14],T=e[3],U=e[7],y=e[11],S=e[15],B=m*E-p*g,H=h*E-p*v,C=h*g-m*v,I=d*E-p*x,L=d*g-m*x,O=d*v-h*x;return i*(U*B-y*H+S*C)-s*(T*B-y*I+S*L)+l*(T*H-U*I+S*O)-c*(T*C-U*L+y*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],h=e[9],m=e[2],p=e[6],x=e[10];return i*(d*x-h*p)-s*(c*x-h*m)+l*(c*p-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=e[9],g=e[10],E=e[11],T=e[12],U=e[13],y=e[14],S=e[15],B=i*h-s*d,H=i*m-l*d,C=i*p-c*d,I=s*m-l*h,L=s*p-c*h,O=l*p-c*m,b=x*U-v*T,N=x*y-g*T,Y=x*S-E*T,G=v*y-g*U,j=v*S-E*U,pe=g*S-E*y,xe=B*pe-H*j+C*G+I*Y-L*N+O*b;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/xe;return e[0]=(h*pe-m*j+p*G)*J,e[1]=(l*j-s*pe-c*G)*J,e[2]=(U*O-y*L+S*I)*J,e[3]=(g*L-v*O-E*I)*J,e[4]=(m*Y-d*pe-p*N)*J,e[5]=(i*pe-l*Y+c*N)*J,e[6]=(y*C-T*O-S*H)*J,e[7]=(x*O-g*C+E*H)*J,e[8]=(d*j-h*Y+p*b)*J,e[9]=(s*Y-i*j-c*b)*J,e[10]=(T*L-U*C+S*B)*J,e[11]=(v*C-x*L-E*B)*J,e[12]=(h*N-d*G-m*b)*J,e[13]=(i*G-s*N+l*b)*J,e[14]=(U*H-T*I-y*B)*J,e[15]=(x*I-v*H+g*B)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,x=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,v=h+h,g=c*p,E=c*x,T=c*v,U=d*x,y=d*v,S=h*v,B=m*p,H=m*x,C=m*v,I=s.x,L=s.y,O=s.z;return l[0]=(1-(U+S))*I,l[1]=(E+C)*I,l[2]=(T-H)*I,l[3]=0,l[4]=(E-C)*L,l[5]=(1-(g+S))*L,l[6]=(y+B)*L,l[7]=0,l[8]=(T+H)*O,l[9]=(y-B)*O,l[10]=(1-(g+U))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Ar.set(l[0],l[1],l[2]).length();const h=Ar.set(l[4],l[5],l[6]).length(),m=Ar.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ri.copy(this);const p=1/d,x=1/h,v=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,d,h=Xi,m=!1){const p=this.elements,x=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let T,U;if(m)T=c/(d-c),U=d*c/(d-c);else if(h===Xi)T=-(d+c)/(d-c),U=-2*d*c/(d-c);else if(h===nu)T=-d/(d-c),U=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Xi,m=!1){const p=this.elements,x=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,U;if(m)T=1/(d-c),U=d/(d-c);else if(h===Xi)T=-2/(d-c),U=-(d+c)/(d-c);else if(h===nu)T=-1/(d-c),U=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=U,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};su.prototype.isMatrix4=!0;let gn=su;const Ar=new le,Ri=new gn,gy=new le(0,0,0),_y=new le(1,1,1),ns=new le,Ec=new le,li=new le,v_=new gn,x_=new Kr;class Vs{constructor(e=0,i=0,s=0,l=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],v=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vy=0;const S_=new le,Rr=new Kr,ma=new gn,bc=new le,qo=new le,xy=new le,Sy=new Kr,M_=new le(1,0,0),y_=new le(0,1,0),E_=new le(0,0,1),b_={type:"added"},My={type:"removed"},Cr={type:"childadded",child:null},Dd={type:"childremoved",child:null};class ui extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new le,i=new Vs,s=new Kr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new ut}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,i){return S_.copy(e).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(qo,bc,this.up):ma.lookAt(bc,qo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(ma),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b_),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(My),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b_),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),v=d(e.shapes),g=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ui.DEFAULT_UP=new le(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $o extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const U of e.hand.values()){const y=i.getJointPose(U,s),S=this._getHandJoint(p,U);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=x.position.distanceTo(v.position),E=.02,T=.005;p.inputState.pinching&&g>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new $o;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Nd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class At{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=np(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Nd(d,c,e+1/3),this.g=Nd(d,c,e),this.b=Nd(d,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=kn){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=kn){const s=Rv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Tt.workingToColorSpace(In.copy(this),e),Math.round(Et(In.r*255,0,255))*65536+Math.round(Et(In.g*255,0,255))*256+Math.round(Et(In.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=kn){Tt.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==kn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(is),this.setHSL(is.h+e,is.s+i,is.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(is),e.getHSL(Tc);const s=nl(is.h,Tc.h,i),l=nl(is.s,Tc.s,i),c=nl(is.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new At;At.NAMES=Rv;class Ey extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vs,this.environmentIntensity=1,this.environmentRotation=new Vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new le,ga=new le,Ld=new le,_a=new le,wr=new le,Dr=new le,T_=new le,Od=new le,Pd=new le,Id=new le,Bd=new rn,Fd=new rn,zd=new rn;class Di{constructor(e=new le,i=new le,s=new le){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),ga.subVectors(s,i),Ld.subVectors(e,i);const d=Ci.dot(Ci),h=Ci.dot(ga),m=Ci.dot(Ld),p=ga.dot(ga),x=ga.dot(Ld),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,E=(p*m-h*x)*g,T=(d*x-h*m)*g;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(d,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Bd.setScalar(0),Fd.setScalar(0),zd.setScalar(0),Bd.fromBufferAttribute(e,i),Fd.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Bd,c.x),d.addScaledVector(Fd,c.y),d.addScaledVector(zd,c.z),d}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),ga.subVectors(e,i),Ci.cross(ga).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ci.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;wr.subVectors(l,s),Dr.subVectors(c,s),Od.subVectors(e,s);const m=wr.dot(Od),p=Dr.dot(Od);if(m<=0&&p<=0)return i.copy(s);Pd.subVectors(e,l);const x=wr.dot(Pd),v=Dr.dot(Pd);if(x>=0&&v<=x)return i.copy(l);const g=m*v-x*p;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(wr,d);Id.subVectors(e,c);const E=wr.dot(Id),T=Dr.dot(Id);if(T>=0&&E<=T)return i.copy(c);const U=E*p-m*T;if(U<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Dr,h);const y=x*T-E*v;if(y<=0&&v-x>=0&&E-T>=0)return T_.subVectors(c,l),h=(v-x)/(v-x+(E-T)),i.copy(l).addScaledVector(T_,h);const S=1/(y+U+g);return d=U*S,h=g*S,i.copy(s).addScaledVector(wr,d).addScaledVector(Dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ll{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Rc.subVectors(this.max,Yo),Ur.subVectors(e.a,Yo),Nr.subVectors(e.b,Yo),Lr.subVectors(e.c,Yo),as.subVectors(Nr,Ur),ss.subVectors(Lr,Nr),Us.subVectors(Ur,Lr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Us.z,Us.y,as.z,0,-as.x,ss.z,0,-ss.x,Us.z,0,-Us.x,-as.y,as.x,0,-ss.y,ss.x,0,-Us.y,Us.x,0];return!Hd(i,Ur,Nr,Lr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Hd(i,Ur,Nr,Lr,Rc))?!1:(Cc.crossVectors(as,ss),i=[Cc.x,Cc.y,Cc.z],Hd(i,Ur,Nr,Lr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new le,new le,new le,new le,new le,new le,new le,new le],wi=new le,Ac=new ll,Ur=new le,Nr=new le,Lr=new le,as=new le,ss=new le,Us=new le,Yo=new le,Rc=new le,Cc=new le,Ns=new le;function Hd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ns.fromArray(r,c);const h=l.x*Math.abs(Ns.x)+l.y*Math.abs(Ns.y)+l.z*Math.abs(Ns.z),m=e.dot(Ns),p=i.dot(Ns),x=s.dot(Ns);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const mn=new le,wc=new Pt;let by=0;class Yi extends ks{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=u_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Cv extends Yi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class wv extends Yi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ba extends Yi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Ty=new ll,Zo=new le,Gd=new le;class ap{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ty.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Gd)),this.expandByPoint(Zo.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ay=0;const xi=new gn,Vd=new ui,Or=new le,ci=new ll,Ko=new ll,yn=new le;class Ca extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XM(e)?wv:Cv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ba(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ci.min,Ko.min),ci.expandByPoint(yn),yn.addVectors(ci.max,Ko.max),ci.expandByPoint(yn)):(ci.expandByPoint(Ko.min),ci.expandByPoint(Ko.max))}ci.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)yn.fromBufferAttribute(h,p),m&&(Or.fromBufferAttribute(e,p),yn.add(Or)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Yi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new le,m[b]=new le;const p=new le,x=new le,v=new le,g=new Pt,E=new Pt,T=new Pt,U=new le,y=new le;function S(b,N,Y){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,N),v.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,N),T.fromBufferAttribute(c,Y),x.sub(p),v.sub(p),E.sub(g),T.sub(g);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(U.copy(x).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(G),y.copy(v).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(G),h[b].add(U),h[N].add(U),h[Y].add(U),m[b].add(y),m[N].add(y),m[Y].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let b=0,N=B.length;b<N;++b){const Y=B[b],G=Y.start,j=Y.count;for(let pe=G,xe=G+j;pe<xe;pe+=3)S(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const H=new le,C=new le,I=new le,L=new le;function O(b){I.fromBufferAttribute(l,b),L.copy(I);const N=h[b];H.copy(N),H.sub(I.multiplyScalar(I.dot(N))).normalize(),C.crossVectors(L,N);const G=C.dot(m[b])<0?-1:1;d.setXYZW(b,H.x,H.y,H.z,G)}for(let b=0,N=B.length;b<N;++b){const Y=B[b],G=Y.start,j=Y.count;for(let pe=G,xe=G+j;pe<xe;pe+=3)O(e.getX(pe+0)),O(e.getX(pe+1)),O(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new le,c=new le,d=new le,h=new le,m=new le,p=new le,x=new le,v=new le;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),U=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,U),d.fromBufferAttribute(i,y),x.subVectors(d,c),v.subVectors(l,c),x.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,U),p.fromBufferAttribute(s,y),h.add(x),m.add(x),p.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),v.subVectors(l,c),x.cross(v),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,v=h.normalized,g=new p.constructor(m.length*x);let E=0,T=0;for(let U=0,y=m.length;U<y;U++){h.isInterleavedBufferAttribute?E=m[U]*h.data.stride+h.offset:E=m[U]*x;for(let S=0;S<x;S++)g[T++]=p[E++]}return new Yi(g,x,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ca,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,v=p.length;x<v;x++){const g=p[x],E=e(g,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,g=p.length;v<g;v++){const E=p[v];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],v=c[p];for(let g=0,E=v.length;g<E;g++)x.push(v[g].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ry=0;class ou extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Hr,this.side=Ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==Ta&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==nh&&(s.blendSrc=this.blendSrc),this.blendDst!==ih&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Pt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new le,kd=new le,Dc=new le,rs=new le,Xd=new le,Uc=new le,Wd=new le;class Cy{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){kd.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),rs.copy(this.origin).sub(kd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Dc),h=rs.dot(this.direction),m=-rs.dot(Dc),p=rs.lengthSq(),x=Math.abs(1-d*d);let v,g,E,T;if(x>0)if(v=d*m-h,g=d*h-m,T=c*x,v>=0)if(g>=-T)if(g<=T){const U=1/x;v*=U,g*=U,E=v*(v+d*g+2*h)+g*(d*v+g+2*m)+p}else g=c,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-d*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+p):(v=Math.max(0,-(d*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+g*(g+2*m)+p);else g=d>0?-c:c,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(kd).addScaledVector(Dc,g),E}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,c){Xd.subVectors(i,e),Uc.subVectors(s,e),Wd.crossVectors(Xd,Uc);let d=this.direction.dot(Wd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;rs.subVectors(this.origin,e);const m=h*this.direction.dot(Uc.crossVectors(rs,Uc));if(m<0)return null;const p=h*this.direction.dot(Xd.cross(rs));if(p<0||m+p>d)return null;const x=-h*rs.dot(Wd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class au extends ou{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const A_=new gn,Ls=new Cy,Nc=new ap,R_=new le,Lc=new le,Oc=new le,Pc=new le,qd=new le,Ic=new le,C_=new le,Bc=new le;class Ni extends ui{constructor(e=new Ca,i=new au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],v=c[m];x!==0&&(qd.fromBufferAttribute(v,e),d?Ic.addScaledVector(qd,x):Ic.addScaledVector(qd.sub(i),x))}i.add(Ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),Ls.copy(e.ray).recast(e.near),!(Nc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Nc,R_)===null||Ls.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(A_.copy(c).invert(),Ls.copy(e.ray).applyMatrix4(A_),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ls)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,g=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,U=g.length;T<U;T++){const y=g[T],S=d[y.materialIndex],B=Math.max(y.start,E.start),H=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let C=B,I=H;C<I;C+=3){const L=h.getX(C),O=h.getX(C+1),b=h.getX(C+2);l=Fc(this,S,e,s,p,x,v,L,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),U=Math.min(h.count,E.start+E.count);for(let y=T,S=U;y<S;y+=3){const B=h.getX(y),H=h.getX(y+1),C=h.getX(y+2);l=Fc(this,d,e,s,p,x,v,B,H,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,U=g.length;T<U;T++){const y=g[T],S=d[y.materialIndex],B=Math.max(y.start,E.start),H=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let C=B,I=H;C<I;C+=3){const L=C,O=C+1,b=C+2;l=Fc(this,S,e,s,p,x,v,L,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),U=Math.min(m.count,E.start+E.count);for(let y=T,S=U;y<S;y+=3){const B=y,H=y+1,C=y+2;l=Fc(this,d,e,s,p,x,v,B,H,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function wy(r,e,i,s,l,c,d,h){let m;if(e.side===Jn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===Ta,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:r}}function Fc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Lc),r.getVertexPosition(m,Oc),r.getVertexPosition(p,Pc);const x=wy(r,e,i,s,Lc,Oc,Pc,C_);if(x){const v=new le;Di.getBarycoord(C_,Lc,Oc,Pc,v),l&&(x.uv=Di.getInterpolatedAttribute(l,h,m,p,v,new Pt)),c&&(x.uv1=Di.getInterpolatedAttribute(c,h,m,p,v,new Pt)),d&&(x.normal=Di.getInterpolatedAttribute(d,h,m,p,v,new le),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new le,materialIndex:0};Di.getNormal(Lc,Oc,Pc,g.normal),x.face=g,x.barycoord=v}return x}class Dy extends Fn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Dn,x=Dn,v,g){super(null,d,h,m,p,x,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new le,Uy=new le,Ny=new ut;class Ps{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Yd.subVectors(s,i).cross(Uy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Yd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Ny.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new ap,Ly=new Pt(.5,.5),zc=new le;class Dv{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,d=new Ps){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],v=c[5],g=c[6],E=c[7],T=c[8],U=c[9],y=c[10],S=c[11],B=c[12],H=c[13],C=c[14],I=c[15];if(l[0].setComponents(p-d,E-x,S-T,I-B).normalize(),l[1].setComponents(p+d,E+x,S+T,I+B).normalize(),l[2].setComponents(p+h,E+v,S+U,I+H).normalize(),l[3].setComponents(p-h,E-v,S-U,I-H).normalize(),s)l[4].setComponents(m,g,y,C).normalize(),l[5].setComponents(p-m,E-g,S-y,I-C).normalize();else if(l[4].setComponents(p-m,E-g,S-y,I-C).normalize(),i===Xi)l[5].setComponents(p+m,E+g,S+y,I+C).normalize();else if(i===nu)l[5].setComponents(m,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const i=Ly.distanceTo(e.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends Fn{constructor(e=[],i=Hs,s,l,c,d,h,m,p,x){super(e,i,s,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nv extends Fn{constructor(e,i,s,l,c,d,h,m,p){super(e,i,s,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qr extends Fn{constructor(e,i,s=Zi,l,c,d,h=Dn,m=Dn,p,x=Ra,v=1){if(x!==Ra&&x!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oy extends qr{constructor(e,i=Zi,s=Hs,l,c,d=Dn,h=Dn,m,p=Ra){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Ca{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],v=[];let g=0,E=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ba(p,3)),this.setAttribute("normal",new ba(x,3)),this.setAttribute("uv",new ba(v,2));function T(U,y,S,B,H,C,I,L,O,b,N){const Y=C/O,G=I/b,j=C/2,pe=I/2,xe=L/2,J=O+1,P=b+1;let z=0,$=0;const ge=new le;for(let be=0;be<P;be++){const D=be*G-pe;for(let Z=0;Z<J;Z++){const Ee=Z*Y-j;ge[U]=Ee*B,ge[y]=D*H,ge[S]=xe,p.push(ge.x,ge.y,ge.z),ge[U]=0,ge[y]=0,ge[S]=L>0?1:-1,x.push(ge.x,ge.y,ge.z),v.push(Z/O),v.push(1-be/b),z+=1}}for(let be=0;be<b;be++)for(let D=0;D<O;D++){const Z=g+D+J*be,Ee=g+D+J*(be+1),Re=g+(D+1)+J*(be+1),Ie=g+(D+1)+J*be;m.push(Z,Ee,Ie),m.push(Ee,Re,Ie),$+=6}h.addGroup(E,$,N),E+=$,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zs extends Ca{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,v=e/h,g=i/m,E=[],T=[],U=[],y=[];for(let S=0;S<x;S++){const B=S*g-d;for(let H=0;H<p;H++){const C=H*v-c;T.push(C,-B,0),U.push(0,0,1),y.push(H/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let B=0;B<h;B++){const H=B+p*S,C=B+p*(S+1),I=B+1+p*(S+1),L=B+1+p*S;E.push(H,C,L),E.push(C,I,L)}this.setIndex(E),this.setAttribute("position",new ba(T,3)),this.setAttribute("normal",new ba(U,3)),this.setAttribute("uv",new ba(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Yr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(w_(l))l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(w_(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=Yr(r[i]);for(const l in s)e[l]=s[l]}return e}function w_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Py(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Ov(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Iy={clone:Yr,merge:Gn};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends ou{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new At().setHex(l.value);break;case"v2":this.uniforms[s].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new le().fromArray(l.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ut().fromArray(l.value);break;case"m4":this.uniforms[s].value=new gn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zy extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hy extends ou{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends ou{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hc=new le,Gc=new Kr,zi=new le;class Pv extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Gc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Gc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Hc,Gc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Gc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new le,D_=new Pt,U_=new Pt;class Si extends Pv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,i){return this.getViewBounds(e,D_,U_),i.subVectors(U_,D_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Iv extends Pv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Pr=-90,Ir=1;class Vy extends ui{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Pr,Ir,e,i);l.layers=this.layers,this.add(l);const c=new Si(Pr,Ir,e,i);c.layers=this.layers,this.add(c);const d=new Si(Pr,Ir,e,i);d.layers=this.layers,this.add(d);const h=new Si(Pr,Ir,e,i);h.layers=this.layers,this.add(h);const m=new Si(Pr,Ir,e,i);m.layers=this.layers,this.add(m);const p=new Si(Pr,Ir,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,g,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ky extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hp=class hp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};hp.prototype.isMatrix2=!0;let N_=hp;function L_(r,e,i,s){const l=Xy(s);switch(i){case Mv:return r*e;case Ev:return r*e/l.components*l.byteLength;case jh:return r*e/l.components*l.byteLength;case Gs:return r*e*2/l.components*l.byteLength;case Jh:return r*e*2/l.components*l.byteLength;case yv:return r*e*3/l.components*l.byteLength;case Ui:return r*e*4/l.components*l.byteLength;case $h:return r*e*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(r,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(r,8)*Math.max(e,8)/2;case _h:case vh:case Sh:case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xh:case Jc:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Bh:case Fh:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hh:case Gh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $c:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Xy(r){switch(r){case Mi:case _v:return{byteLength:1,components:1};case sl:case vv:case Aa:return{byteLength:2,components:1};case Kh:case Qh:return{byteLength:2,components:4};case Zi:case Zh:case ki:return{byteLength:4,components:1};case xv:case Sv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Wy(r){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const x=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,x);else{v.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<v.length;E++){const T=v[g],U=v[E];U.start<=T.start+T.count+1?T.count=Math.max(T.count,U.start+U.count-T.start):(++g,v[g]=U)}v.length=g+1;for(let E=0,T=v.length;E<T;E++){const U=v[E];r.bufferSubData(p,U.start*x.BYTES_PER_ELEMENT,x,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eE=`#ifdef USE_BATCHING
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
#endif`,tE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_E=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,FE=`#ifdef USE_ENVMAP
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
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ub=`float getShadowMask() {
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
}`,Nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yb=`uniform sampler2D t2D;
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,eT=`#define DISTANCE
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
}`,tT=`#define DISTANCE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#define LAMBERT
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
}`,cT=`#define LAMBERT
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
}`,uT=`#define MATCAP
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
}`,fT=`#define MATCAP
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
}`,dT=`#define NORMAL
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
}`,hT=`#define NORMAL
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
}`,pT=`#define PHONG
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
}`,mT=`#define PHONG
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
}`,gT=`#define STANDARD
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
}`,_T=`#define STANDARD
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
}`,vT=`#define TOON
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
}`,xT=`#define TOON
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
}`,ST=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ET=`uniform vec3 color;
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
}`,bT=`uniform float rotation;
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
}`,TT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:qy,alphahash_pars_fragment:Yy,alphamap_fragment:Zy,alphamap_pars_fragment:Ky,alphatest_fragment:Qy,alphatest_pars_fragment:jy,aomap_fragment:Jy,aomap_pars_fragment:$y,batching_pars_vertex:eE,batching_vertex:tE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:aE,iridescence_fragment:sE,bumpmap_pars_fragment:rE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:fE,color_pars_fragment:dE,color_pars_vertex:hE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:_E,displacementmap_pars_vertex:vE,displacementmap_vertex:xE,emissivemap_fragment:SE,emissivemap_pars_fragment:ME,colorspace_fragment:yE,colorspace_pars_fragment:EE,envmap_fragment:bE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:RE,envmap_physical_pars_fragment:FE,envmap_vertex:CE,fog_vertex:wE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:NE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:OE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:IE,lights_pars_begin:BE,lights_toon_fragment:zE,lights_toon_pars_fragment:HE,lights_phong_fragment:GE,lights_phong_pars_fragment:VE,lights_physical_fragment:kE,lights_physical_pars_fragment:XE,lights_fragment_begin:WE,lights_fragment_maps:qE,lights_fragment_end:YE,lightprobes_pars_fragment:ZE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:JE,map_fragment:$E,map_pars_fragment:eb,map_particle_fragment:tb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:sb,morphcolor_vertex:rb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:cb,normal_fragment_begin:ub,normal_fragment_maps:fb,normal_pars_fragment:db,normal_pars_vertex:hb,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:Sb,packing:Mb,premultiplied_alpha_fragment:yb,project_vertex:Eb,dithering_fragment:bb,dithering_pars_fragment:Tb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:wb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ub,skinbase_vertex:Nb,skinning_pars_vertex:Lb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:Ib,specularmap_pars_fragment:Bb,tonemapping_fragment:Fb,tonemapping_pars_fragment:zb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Xb,worldpos_vertex:Wb,background_vert:qb,background_frag:Yb,backgroundCube_vert:Zb,backgroundCube_frag:Kb,cube_vert:Qb,cube_frag:jb,depth_vert:Jb,depth_frag:$b,distance_vert:eT,distance_frag:tT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:aT,linedashed_frag:sT,meshbasic_vert:rT,meshbasic_frag:oT,meshlambert_vert:lT,meshlambert_frag:cT,meshmatcap_vert:uT,meshmatcap_frag:fT,meshnormal_vert:dT,meshnormal_frag:hT,meshphong_vert:pT,meshphong_frag:mT,meshphysical_vert:gT,meshphysical_frag:_T,meshtoon_vert:vT,meshtoon_frag:xT,points_vert:ST,points_frag:MT,shadow_vert:yT,shadow_frag:ET,sprite_vert:bT,sprite_frag:TT},ze={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Gn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Gn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Gn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Gn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Gn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Gn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Gn([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Gn([ze.lights,ze.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Vc={r:0,b:0,g:0},AT=new gn,Fv=new ut;Fv.set(-1,0,0,0,1,0,0,0,1);function RT(r,e,i,s,l,c){const d=new At(0);let h=l===!0?0:1,m,p,x=null,v=0,g=null;function E(B){let H=B.isScene===!0?B.background:null;if(H&&H.isTexture){const C=B.backgroundBlurriness>0;H=e.get(H,C)}return H}function T(B){let H=!1;const C=E(B);C===null?y(d,h):C&&C.isColor&&(y(C,1),H=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(B,H){const C=E(H);C&&(C.isCubeTexture||C.mapping===ru)?(p===void 0&&(p=new Ni(new cl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Yr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(AT.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Fv),p.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Wt,(x!==C||v!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=C,v=C.version,g=r.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ni(new zs(2,2),new Ki({name:"BackgroundMaterial",uniforms:Yr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(C.colorSpace)!==Wt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,g=r.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function y(B,H){B.getRGB(Vc,Ov(r)),i.buffers.color.setClear(Vc.r,Vc.g,Vc.b,H,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,H=1){d.set(B),h=H,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(B){h=B,y(d,h)},render:T,addToRenderList:U,dispose:S}}function CT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(G,j,pe,xe,J){let P=!1;const z=v(G,xe,pe,j);c!==z&&(c=z,p(c.object)),P=E(G,xe,pe,J),P&&T(G,xe,pe,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,C(G,j,pe,xe),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function x(G){return r.deleteVertexArray(G)}function v(G,j,pe,xe){const J=xe.wireframe===!0;let P=s[j.id];P===void 0&&(P={},s[j.id]=P);const z=G.isInstancedMesh===!0?G.id:0;let $=P[z];$===void 0&&($={},P[z]=$);let ge=$[pe.id];ge===void 0&&(ge={},$[pe.id]=ge);let be=ge[J];return be===void 0&&(be=g(m()),ge[J]=be),be}function g(G){const j=[],pe=[],xe=[];for(let J=0;J<i;J++)j[J]=0,pe[J]=0,xe[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:pe,attributeDivisors:xe,object:G,attributes:{},index:null}}function E(G,j,pe,xe){const J=c.attributes,P=j.attributes;let z=0;const $=pe.getAttributes();for(const ge in $)if($[ge].location>=0){const D=J[ge];let Z=P[ge];if(Z===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),D===void 0||D.attribute!==Z||Z&&D.data!==Z.data)return!0;z++}return c.attributesNum!==z||c.index!==xe}function T(G,j,pe,xe){const J={},P=j.attributes;let z=0;const $=pe.getAttributes();for(const ge in $)if($[ge].location>=0){let D=P[ge];D===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const Z={};Z.attribute=D,D&&D.data&&(Z.data=D.data),J[ge]=Z,z++}c.attributes=J,c.attributesNum=z,c.index=xe}function U(){const G=c.newAttributes;for(let j=0,pe=G.length;j<pe;j++)G[j]=0}function y(G){S(G,0)}function S(G,j){const pe=c.newAttributes,xe=c.enabledAttributes,J=c.attributeDivisors;pe[G]=1,xe[G]===0&&(r.enableVertexAttribArray(G),xe[G]=1),J[G]!==j&&(r.vertexAttribDivisor(G,j),J[G]=j)}function B(){const G=c.newAttributes,j=c.enabledAttributes;for(let pe=0,xe=j.length;pe<xe;pe++)j[pe]!==G[pe]&&(r.disableVertexAttribArray(pe),j[pe]=0)}function H(G,j,pe,xe,J,P,z){z===!0?r.vertexAttribIPointer(G,j,pe,J,P):r.vertexAttribPointer(G,j,pe,xe,J,P)}function C(G,j,pe,xe){U();const J=xe.attributes,P=pe.getAttributes(),z=j.defaultAttributeValues;for(const $ in P){const ge=P[$];if(ge.location>=0){let be=J[$];if(be===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const D=be.normalized,Z=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Re=Ee.buffer,Ie=Ee.type,ae=Ee.bytesPerElement,Me=Ie===r.INT||Ie===r.UNSIGNED_INT||be.gpuType===Zh;if(be.isInterleavedBufferAttribute){const ye=be.data,He=ye.stride,nt=be.offset;if(ye.isInstancedInterleavedBuffer){for(let we=0;we<ge.locationSize;we++)S(ge.location+we,ye.meshPerAttribute);G.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let we=0;we<ge.locationSize;we++)y(ge.location+we);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let we=0;we<ge.locationSize;we++)H(ge.location+we,Z/ge.locationSize,Ie,D,He*ae,(nt+Z/ge.locationSize*we)*ae,Me)}else{if(be.isInstancedBufferAttribute){for(let ye=0;ye<ge.locationSize;ye++)S(ge.location+ye,be.meshPerAttribute);G.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ye=0;ye<ge.locationSize;ye++)y(ge.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let ye=0;ye<ge.locationSize;ye++)H(ge.location+ye,Z/ge.locationSize,Ie,D,Z*ae,Z/ge.locationSize*ye*ae,Me)}}else if(z!==void 0){const D=z[$];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(ge.location,D);break;case 3:r.vertexAttrib3fv(ge.location,D);break;case 4:r.vertexAttrib4fv(ge.location,D);break;default:r.vertexAttrib1fv(ge.location,D)}}}}B()}function I(){N();for(const G in s){const j=s[G];for(const pe in j){const xe=j[pe];for(const J in xe){const P=xe[J];for(const z in P)x(P[z].object),delete P[z];delete xe[J]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const pe in j){const xe=j[pe];for(const J in xe){const P=xe[J];for(const z in P)x(P[z].object),delete P[z];delete xe[J]}}delete s[G.id]}function O(G){for(const j in s){const pe=s[j];for(const xe in pe){const J=pe[xe];if(J[G.id]===void 0)continue;const P=J[G.id];for(const z in P)x(P[z].object),delete P[z];delete J[G.id]}}}function b(G){for(const j in s){const pe=s[j],xe=G.isInstancedMesh===!0?G.id:0,J=pe[xe];if(J!==void 0){for(const P in J){const z=J[P];for(const $ in z)x(z[$].object),delete z[$];delete J[P]}delete pe[xe],Object.keys(pe).length===0&&delete s[j]}}}function N(){Y(),d=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:U,enableAttribute:y,disableUnusedAttributes:B}}function wT(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,x){x!==0&&(r.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let g=0;for(let E=0;E<x;E++)g+=p[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function DT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Ui&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const b=O===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Mi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ki&&!b)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),H=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:U,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:B,maxVaryings:H,maxFragmentUniforms:C,maxSamples:I,samples:L}}function UT(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ps,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const E=v.length!==0||g||s!==0||l;return l=g,s=v.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,E){const T=v.clippingPlanes,U=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!l||T===null||T.length===0||c&&!y)c?x(null):p();else{const B=c?0:s,H=B*4;let C=S.clippingState||null;m.value=C,C=x(T,g,H,E);for(let I=0;I!==H;++I)C[I]=i[I];S.clippingState=C,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,g,E,T){const U=v!==null?v.length:0;let y=null;if(U!==0){if(y=m.value,T!==!0||y===null){const S=E+U*4,B=g.matrixWorldInverse;h.getNormalMatrix(B),(y===null||y.length<S)&&(y=new Float32Array(S));for(let H=0,C=E;H!==U;++H,C+=4)d.copy(v[H]).applyMatrix4(B,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,y}}const us=4,O_=[.125,.215,.35,.446,.526,.582],Bs=20,NT=256,Qo=new Iv,P_=new At;let Zd=null,Kd=0,Qd=0,jd=!1;const LT=new le;class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=LT}=c;Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Kd,Qd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hs||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Aa,format:Ui,colorSpace:eu,depthBuffer:!1},l=B_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OT(c)),this._blurMaterial=IT(c,e,i),this._ggxMaterial=PT(c,e,i)}return l}_compileMaterial(e){const i=new Ni(new Ca,e);this._renderer.compile(i,Qo)}_sceneToCubeUV(e,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,E=v.toneMapping;v.getClearColor(P_),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new cl,new au({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,y=U.material;let S=!1;const B=e.background;B?B.isColor&&(y.color.copy(B),e.background=null,S=!0):(y.color.copy(P_),S=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,p[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[H],c.y,c.z)):C===1?(m.up.set(0,0,p[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[H],c.z)):(m.up.set(0,p[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[H]));const I=this._cubeSize;Br(l,C*I,H>2?I:0,I,I),v.setRenderTarget(l),S&&v.render(U,m),v.render(e,m)}v.toneMapping=E,v.autoClear=g,e.background=B}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Hs||e.mapping===Wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),g=0+p*1.25,E=v*g,{_lodMax:T}=this,U=this._sizeLods[s],y=3*U*(s>T-us?s-T+us:0),S=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Br(c,y,S,3*U,2*U),l.setRenderTarget(c),l.render(h,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Br(e,y,S,3*U,2*U),l.setRenderTarget(e),l.render(h,Qo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Bs-1),U=c/T,y=isFinite(c)?1+Math.floor(x*U):Bs;y>Bs&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bs}`);const S=[];let B=0;for(let O=0;O<Bs;++O){const b=O/U,N=Math.exp(-b*b/2);S.push(N),O===0?B+=N:O<y&&(B+=2*N)}for(let O=0;O<S.length;O++)S[O]=S[O]/B;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-s;const C=this._sizeLods[l],I=3*C*(l>H-us?l-H+us:0),L=4*(this._cubeSize-C);Br(i,I,L,3*C,2*C),m.setRenderTarget(i),m.render(v,Qo)}}function OT(r){const e=[],i=[],s=[];let l=r;const c=r-us+1+O_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-us?m=O_[d-r+us-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,v=1+p,g=[x,x,v,x,v,v,x,x,v,v,x,v],E=6,T=6,U=3,y=2,S=1,B=new Float32Array(U*T*E),H=new Float32Array(y*T*E),C=new Float32Array(S*T*E);for(let L=0;L<E;L++){const O=L%3*2/3-1,b=L>2?0:-1,N=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];B.set(N,U*T*L),H.set(g,y*T*L);const Y=[L,L,L,L,L,L];C.set(Y,S*T*L)}const I=new Ca;I.setAttribute("position",new Yi(B,U)),I.setAttribute("uv",new Yi(H,y)),I.setAttribute("faceIndex",new Yi(C,S)),s.push(new Ni(I,null)),l>us&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function B_(r,e,i){const s=new qi(r,e,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function PT(r,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function IT(r,e,i){const s=new Float32Array(Bs),l=new le(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function F_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function z_(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}class zv extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Uv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:ya});c.uniforms.tEquirect.value=i;const d=new Ni(l,c),h=i.minFilter;return i.minFilter===cs&&(i.minFilter=bn),new Vy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function BT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?d(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Ed||E===bd)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const U=new zv(T.height);return U.fromEquirectangularTexture(r,g),e.set(g,U),g.addEventListener("dispose",p),h(U.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,T=E===Ed||E===bd,U=E===Hs||E===Wr;if(T||U){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new I_(r)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const B=g.image;return T&&B&&B.height>0||U&&B&&m(B)?(s===null&&(s=new I_(r)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",x),y.texture):null}}}return g}function h(g,E){return E===Ed?g.mapping=Hs:E===bd&&(g.mapping=Wr),g}function m(g){let E=0;const T=6;for(let U=0;U<T;U++)g[U]!==void 0&&E++;return E===T}function p(g){const E=g.target;E.removeEventListener("dispose",p);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function x(g){const E=g.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function FT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gr("WebGLRenderer: "+s+" extension not supported."),l}}}function zT(r,e,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function p(v){const g=[],E=v.index,T=v.attributes.position;let U=0;if(T===void 0)return;if(E!==null){const B=E.array;U=E.version;for(let H=0,C=B.length;H<C;H+=3){const I=B[H+0],L=B[H+1],O=B[H+2];g.push(I,L,L,O,O,I)}}else{const B=T.array;U=T.version;for(let H=0,C=B.length/3-1;H<C;H+=3){const I=H+0,L=H+1,O=H+2;g.push(I,L,L,O,O,I)}}const y=new(T.count>=65535?wv:Cv)(g,1);y.version=U;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function x(v){const g=c.get(v);if(g){const E=v.index;E!==null&&g.version<E.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function HT(r,e,i){let s;function l(v){s=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*d),i.update(g,s,1)}function p(v,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,v*d,E),i.update(g,s,E))}function x(v,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,E);let U=0;for(let y=0;y<E;y++)U+=g[y];i.update(U,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function GT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ct("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VT(r,e,i){const s=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let Y=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",Y)};var E=Y;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),U===!0&&(C=2),y===!0&&(C=3);let I=h.attributes.position.count*C,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*L*4*v),b=new Tv(O,I,L,v);b.type=ki,b.needsUpdate=!0;const N=C*4;for(let G=0;G<v;G++){const j=S[G],pe=B[G],xe=H[G],J=I*L*4*G;for(let P=0;P<j.count;P++){const z=P*N;T===!0&&(l.fromBufferAttribute(j,P),O[J+z+0]=l.x,O[J+z+1]=l.y,O[J+z+2]=l.z,O[J+z+3]=0),U===!0&&(l.fromBufferAttribute(pe,P),O[J+z+4]=l.x,O[J+z+5]=l.y,O[J+z+6]=l.z,O[J+z+7]=0),y===!0&&(l.fromBufferAttribute(xe,P),O[J+z+8]=l.x,O[J+z+9]=l.y,O[J+z+10]=l.z,O[J+z+11]=xe.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new Pt(I,L)},s.set(h,g),h.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const U=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function kT(r,e,i,s,l){let c=new WeakMap;function d(p){const x=l.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return g}function h(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const XT={[cv]:"LINEAR_TONE_MAPPING",[uv]:"REINHARD_TONE_MAPPING",[fv]:"CINEON_TONE_MAPPING",[dv]:"ACES_FILMIC_TONE_MAPPING",[pv]:"AGX_TONE_MAPPING",[mv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function WT(r,e,i,s,l,c){const d=new qi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new qr(e,i):void 0}),h=new qi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),m=new Ca;m.setAttribute("position",new ba([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ba([0,2,0,0,2,0],2));const p=new zy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Ni(m,p),v=new Iv(-1,1,1,-1,0,1);let g=null,E=null,T=!1,U,y=null,S=[],B=!1;this.setSize=function(H,C){d.setSize(H,C),h.setSize(H,C);for(let I=0;I<S.length;I++){const L=S[I];L.setSize&&L.setSize(H,C)}},this.setEffects=function(H){S=H,B=S.length>0&&S[0].isRenderPass===!0;const C=d.width,I=d.height;for(let L=0;L<S.length;L++){const O=S[L];O.setSize&&O.setSize(C,I)}},this.begin=function(H,C){if(T||H.toneMapping===Wi&&S.length===0)return!1;if(y=C,C!==null){const I=C.width,L=C.height;(d.width!==I||d.height!==L)&&this.setSize(I,L)}return B===!1&&H.setRenderTarget(d),U=H.toneMapping,H.toneMapping=Wi,!0},this.hasRenderPass=function(){return B},this.end=function(H,C){H.toneMapping=U,T=!0;let I=d,L=h;for(let O=0;O<S.length;O++){const b=S[O];if(b.enabled!==!1&&(b.render(H,L,I,C),b.needsSwap!==!1)){const N=I;I=L,L=N}}if(g!==H.outputColorSpace||E!==H.toneMapping){g=H.outputColorSpace,E=H.toneMapping,p.defines={},Tt.getTransfer(g)===Wt&&(p.defines.SRGB_TRANSFER="");const O=XT[E];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(y),H.render(x,v),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Hv=new Fn,kh=new qr(1,1),Gv=new Tv,Vv=new my,kv=new Uv,H_=[],G_=[],V_=new Float32Array(16),k_=new Float32Array(9),X_=new Float32Array(4);function Qr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function xn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Sn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function cu(r,e){let i=G_[e];i===void 0&&(i=new Int32Array(e),G_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function qT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2fv(this.addr,e),Sn(i,e)}}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;r.uniform3fv(this.addr,e),Sn(i,e)}}function KT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4fv(this.addr,e),Sn(i,e)}}function QT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;X_.set(s),r.uniformMatrix2fv(this.addr,!1,X_),Sn(i,s)}}function jT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;k_.set(s),r.uniformMatrix3fv(this.addr,!1,k_),Sn(i,s)}}function JT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;V_.set(s),r.uniformMatrix4fv(this.addr,!1,V_),Sn(i,s)}}function $T(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function e1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2iv(this.addr,e),Sn(i,e)}}function t1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;r.uniform3iv(this.addr,e),Sn(i,e)}}function n1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4iv(this.addr,e),Sn(i,e)}}function i1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function a1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2uiv(this.addr,e),Sn(i,e)}}function s1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;r.uniform3uiv(this.addr,e),Sn(i,e)}}function r1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4uiv(this.addr,e),Sn(i,e)}}function o1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(kh.compareFunction=i.isReversedDepthBuffer()?tp:ep,c=kh):c=Hv,i.setTexture2D(e||c,l)}function l1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Vv,l)}function c1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||kv,l)}function u1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Gv,l)}function f1(r){switch(r){case 5126:return qT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return jT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return a1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}function d1(r,e){r.uniform1fv(this.addr,e)}function h1(r,e){const i=Qr(e,this.size,2);r.uniform2fv(this.addr,i)}function p1(r,e){const i=Qr(e,this.size,3);r.uniform3fv(this.addr,i)}function m1(r,e){const i=Qr(e,this.size,4);r.uniform4fv(this.addr,i)}function g1(r,e){const i=Qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function _1(r,e){const i=Qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function v1(r,e){const i=Qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function x1(r,e){r.uniform1iv(this.addr,e)}function S1(r,e){r.uniform2iv(this.addr,e)}function M1(r,e){r.uniform3iv(this.addr,e)}function y1(r,e){r.uniform4iv(this.addr,e)}function E1(r,e){r.uniform1uiv(this.addr,e)}function b1(r,e){r.uniform2uiv(this.addr,e)}function T1(r,e){r.uniform3uiv(this.addr,e)}function A1(r,e){r.uniform4uiv(this.addr,e)}function R1(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=kh:d=Hv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function C1(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Vv,c[d])}function w1(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||kv,c[d])}function D1(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Gv,c[d])}function U1(r){switch(r){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return x1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return y1;case 5125:return E1;case 36294:return b1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return D1}}class N1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=f1(i.type)}}class L1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=U1(i.type)}}class O1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function W_(r,e){r.seq.push(e),r.map[e.id]=e}function P1(r,e,i){const s=r.name,l=s.length;for(Jd.lastIndex=0;;){const c=Jd.exec(s),d=Jd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){W_(i,p===void 0?new N1(h,r,e):new L1(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new O1(h),W_(i,v)),i=v}}}class Qc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);P1(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function q_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const I1=37297;let B1=0;function F1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Y_=new ut;function z1(r){Tt._getMatrix(Y_,Tt.workingColorSpace,r);const e=`mat3( ${Y_.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case tu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Z_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+F1(r.getShaderSource(e),h)}else return c}function H1(r,e){const i=z1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const G1={[cv]:"Linear",[uv]:"Reinhard",[fv]:"Cineon",[dv]:"ACESFilmic",[pv]:"AgX",[mv]:"Neutral",[hv]:"Custom"};function V1(r,e){const i=G1[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kc=new le;function k1(){Tt.getLuminanceCoefficients(kc);const r=kc.x.toFixed(4),e=kc.y.toFixed(4),i=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function W1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function q1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function el(r){return r!==""}function K_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(Y1,K1)}const Z1=new Map;function K1(r,e){let i=pt[e];if(i===void 0){const s=Z1.get(e);if(s!==void 0)i=pt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xh(i)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(r){return r.replace(Q1,j1)}function j1(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J1={[Wc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function $1(r){return J1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eA={[Hs]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function tA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nA={[Wr]:"ENVMAP_MODE_REFRACTION"};function iA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aA={[lv]:"ENVMAP_BLENDING_MULTIPLY",[LM]:"ENVMAP_BLENDING_MIX",[OM]:"ENVMAP_BLENDING_ADD"};function sA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":aA[r.combine]||"ENVMAP_BLENDING_NONE"}function rA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=$1(i),p=tA(i),x=iA(i),v=sA(i),g=rA(i),E=X1(i),T=W1(c),U=l.createProgram();let y,S,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(el).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(el).join(`
`),S.length>0&&(S+=`
`)):(y=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),S=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Wi?V1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,H1("linearToOutputTexel",i.outputColorSpace),k1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),d=Xh(d),d=K_(d,i),d=Q_(d,i),h=Xh(h),h=K_(h,i),h=Q_(h,i),d=j_(d),h=j_(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const H=B+y+d,C=B+S+h,I=q_(l,l.VERTEX_SHADER,H),L=q_(l,l.FRAGMENT_SHADER,C);l.attachShader(U,I),l.attachShader(U,L),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function O(G){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(U)||"",pe=l.getShaderInfoLog(I)||"",xe=l.getShaderInfoLog(L)||"",J=j.trim(),P=pe.trim(),z=xe.trim();let $=!0,ge=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,I,L);else{const be=Z_(l,I,"vertex"),D=Z_(l,L,"fragment");Ct("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+be+`
`+D)}else J!==""?ot("WebGLProgram: Program Info Log:",J):(P===""||z==="")&&(ge=!1);ge&&(G.diagnostics={runnable:$,programLog:J,vertexShader:{log:P,prefix:y},fragmentShader:{log:z,prefix:S}})}l.deleteShader(I),l.deleteShader(L),b=new Qc(l,U),N=q1(l,U)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(U,I1)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=B1++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=I,this.fragmentShader=L,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new uA(e),i.set(e,s)),s}}class uA{constructor(e){this.id=lA++,this.code=e,this.usedTimes=0}}function fA(r){return r===Gs||r===Jc||r===$c}function dA(r,e,i,s,l,c){const d=new Av,h=new cA,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function U(b,N,Y,G,j,pe){const xe=G.fog,J=j.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||P,z),ge=$&&$.mapping===ru?$.image.height:null,be=E[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ot("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const D=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=D!==void 0?D.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let Re,Ie,ae,Me;if(be){const Ve=Gi[be];Re=Ve.vertexShader,Ie=Ve.fragmentShader}else{Re=b.vertexShader,Ie=b.fragmentShader;const Ve=h.getVertexShaderStage(b),Ft=h.getFragmentShaderStage(b);h.update(b,Ve,Ft),ae=Ve.id,Me=Ft.id}const ye=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),nt=j.isInstancedMesh===!0,we=j.isBatchedMesh===!0,at=!!b.map,Ke=!!b.matcap,tt=!!$,lt=!!b.aoMap,st=!!b.lightMap,mt=!!b.bumpMap&&b.wireframe===!1,_t=!!b.normalMap,wt=!!b.displacementMap,It=!!b.emissiveMap,Rt=!!b.metalnessMap,qt=!!b.roughnessMap,X=b.anisotropy>0,Bt=b.clearcoat>0,gt=b.dispersion>0,w=b.iridescence>0,M=b.sheen>0,Q=b.transmission>0,se=X&&!!b.anisotropyMap,fe=Bt&&!!b.clearcoatMap,Te=Bt&&!!b.clearcoatNormalMap,Ne=Bt&&!!b.clearcoatRoughnessMap,ue=w&&!!b.iridescenceMap,de=w&&!!b.iridescenceThicknessMap,Ce=M&&!!b.sheenColorMap,Be=M&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Le=!!b.specularColorMap,Qe=!!b.specularIntensityMap,je=Q&&!!b.transmissionMap,rt=Q&&!!b.thicknessMap,V=!!b.gradientMap,Ae=!!b.alphaMap,he=b.alphaTest>0,Ue=!!b.alphaHash,De=!!b.extensions;let ve=Wi;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ve=r.toneMapping);const We={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:Ie,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:we,batchingColor:we&&j._colorsTexture!==null,instancing:nt,instancingColor:nt&&j.instanceColor!==null,instancingMorph:nt&&j.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:Ke,envMap:tt,envMapMode:tt&&$.mapping,envMapCubeUVHeight:ge,aoMap:lt,lightMap:st,bumpMap:mt,normalMap:_t,displacementMap:wt,emissiveMap:It,normalMapObjectSpace:_t&&b.normalMapType===BM,normalMapTangentSpace:_t&&b.normalMapType===l_,packedNormalMap:_t&&b.normalMapType===l_&&fA(b.normalMap.format),metalnessMap:Rt,roughnessMap:qt,anisotropy:X,anisotropyMap:se,clearcoat:Bt,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ne,dispersion:gt,iridescence:w,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:M,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:Le,specularIntensityMap:Qe,transmission:Q,transmissionMap:je,thicknessMap:rt,gradientMap:V,opaque:b.transparent===!1&&b.blending===Hr&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:Ue,combine:b.combine,mapUv:at&&T(b.map.channel),aoMapUv:lt&&T(b.aoMap.channel),lightMapUv:st&&T(b.lightMap.channel),bumpMapUv:mt&&T(b.bumpMap.channel),normalMapUv:_t&&T(b.normalMap.channel),displacementMapUv:wt&&T(b.displacementMap.channel),emissiveMapUv:It&&T(b.emissiveMap.channel),metalnessMapUv:Rt&&T(b.metalnessMap.channel),roughnessMapUv:qt&&T(b.roughnessMap.channel),anisotropyMapUv:se&&T(b.anisotropyMap.channel),clearcoatMapUv:fe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:Oe&&T(b.specularMap.channel),specularColorMapUv:Le&&T(b.specularColorMap.channel),specularIntensityMapUv:Qe&&T(b.specularIntensityMap.channel),transmissionMapUv:je&&T(b.transmissionMap.channel),thicknessMapUv:rt&&T(b.thicknessMap.channel),alphaMapUv:Ae&&T(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_t||X),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(at||Ae),fog:!!xe,useFog:b.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&_t===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:He,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ee,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Wt,decodeVideoTextureEmissive:It&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function y(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)N.push(Y),N.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(S(N,b),B(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function B(b,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function H(b){const N=E[b.type];let Y;if(N){const G=Gi[N];Y=Iy.clone(G.uniforms)}else Y=b.uniforms;return Y}function C(b,N){let Y=x.get(N);return Y!==void 0?++Y.usedTimes:(Y=new oA(r,N,b,l),p.push(Y),x.set(N,Y)),Y}function I(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function L(b){h.remove(b)}function O(){h.dispose()}return{getParameters:U,getProgramCacheKey:y,getUniforms:H,acquireProgram:C,releaseProgram:I,releaseShaderCache:L,programs:p,dispose:O}}function hA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function pA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function $_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ev(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function h(g,E,T,U,y,S){let B=r[e];return B===void 0?(B={id:g.id,object:g,geometry:E,material:T,materialVariant:d(g),groupOrder:U,renderOrder:g.renderOrder,z:y,group:S},r[e]=B):(B.id=g.id,B.object=g,B.geometry=E,B.material=T,B.materialVariant=d(g),B.groupOrder=U,B.renderOrder=g.renderOrder,B.z=y,B.group=S),e++,B}function m(g,E,T,U,y,S){const B=h(g,E,T,U,y,S);T.transmission>0?s.push(B):T.transparent===!0?l.push(B):i.push(B)}function p(g,E,T,U,y,S){const B=h(g,E,T,U,y,S);T.transmission>0?s.unshift(B):T.transparent===!0?l.unshift(B):i.unshift(B)}function x(g,E,T){i.length>1&&i.sort(g||pA),s.length>1&&s.sort(E||$_),l.length>1&&l.sort(E||$_),T&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=e,E=r.length;g<E;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:x}}function mA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new ev,r.set(s,[d])):l>=c.length?(d=new ev,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function gA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new At};break;case"SpotLight":i={position:new le,direction:new le,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=i,i}}}function _A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let vA=0;function xA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function SA(r){const e=new gA,i=_A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const l=new le,c=new gn,d=new gn;function h(p){let x=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let E=0,T=0,U=0,y=0,S=0,B=0,H=0,C=0,I=0,L=0,O=0;p.sort(xA);for(let N=0,Y=p.length;N<Y;N++){const G=p[N],j=G.color,pe=G.intensity,xe=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Gs?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=j.r*pe,v+=j.g*pe,g+=j.b*pe;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],pe);O++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,$=i.get(G);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,s.directionalShadow[E]=$,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=G.shadow.matrix,B++}s.directional[E]=P,E++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(j).multiplyScalar(pe),P.distance=xe,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[U]=P;const z=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,z.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[U]=z.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,s.spotShadow[U]=$,s.spotShadowMap[U]=J,C++}U++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(j).multiplyScalar(pe),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const z=G.shadow,$=i.get(G);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,s.pointShadow[T]=$,s.pointShadowMap[T]=J,s.pointShadowMatrix[T]=G.shadow.matrix,H++}s.point[T]=P,T++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(pe),P.groundColor.copy(G.groundColor).multiplyScalar(pe),s.hemi[S]=P,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==U||b.rectAreaLength!==y||b.hemiLength!==S||b.numDirectionalShadows!==B||b.numPointShadows!==H||b.numSpotShadows!==C||b.numSpotMaps!==I||b.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=U,s.rectArea.length=y,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=C+I-L,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,b.directionalLength=E,b.pointLength=T,b.spotLength=U,b.rectAreaLength=y,b.hemiLength=S,b.numDirectionalShadows=B,b.numPointShadows=H,b.numSpotShadows=C,b.numSpotMaps=I,b.numLightProbes=O,s.version=vA++)}function m(p,x){let v=0,g=0,E=0,T=0,U=0;const y=x.matrixWorldInverse;for(let S=0,B=p.length;S<B;S++){const H=p[S];if(H.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(H.isSpotLight){const C=s.spot[E];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),E++}else if(H.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(y),d.identity(),c.copy(H.matrixWorld),c.premultiply(y),d.extractRotation(c),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(H.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(y),g++}else if(H.isHemisphereLight){const C=s.hemi[U];C.direction.setFromMatrixPosition(H.matrixWorld),C.direction.transformDirection(y),U++}}}return{setup:h,setupView:m,state:s}}function tv(r){const e=new SA(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function x(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function MA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new tv(r),e.set(l,[h])):c>=d.length?(h=new tv(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
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
}`,bA=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],TA=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],nv=new gn,jo=new le,$d=new le;function AA(r,e,i){let s=new Dv;const l=new Pt,c=new Pt,d=new rn,h=new Hy,m=new Gy,p={},x=i.maxTextureSize,v={[Ta]:Jn,[Jn]:Ta,[Vi]:Vi},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:yA,fragmentShader:EA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ca;T.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Ni(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let S=this.type;this.render=function(L,O,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===pM&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wc);const N=r.getRenderTarget(),Y=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),j=r.state;j.setBlending(ya),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const pe=S!==this.type;pe&&O.traverse(function(xe){xe.material&&(Array.isArray(xe.material)?xe.material.forEach(J=>J.needsUpdate=!0):xe.material.needsUpdate=!0)});for(let xe=0,J=L.length;xe<J;xe++){const P=L[xe],z=P.shadow;if(z===void 0){ot("WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const $=z.getFrameExtents();l.multiply($),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/$.x),l.x=c.x*$.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/$.y),l.y=c.y*$.y,z.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ge,z.map===null||pe===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Jo){if(P.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new qi(l.x,l.y,{format:Gs,type:Aa,minFilter:bn,magFilter:bn,generateMipmaps:!1}),z.map.texture.name=P.name+".shadowMap",z.map.depthTexture=new qr(l.x,l.y,ki),z.map.depthTexture.name=P.name+".shadowMapDepth",z.map.depthTexture.format=Ra,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn}else P.isPointLight?(z.map=new zv(l.x),z.map.depthTexture=new Oy(l.x,Zi)):(z.map=new qi(l.x,l.y),z.map.depthTexture=new qr(l.x,l.y,Zi)),z.map.depthTexture.name=P.name+".shadowMap",z.map.depthTexture.format=Ra,this.type===Wc?(z.map.depthTexture.compareFunction=ge?tp:ep,z.map.depthTexture.minFilter=bn,z.map.depthTexture.magFilter=bn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn);z.camera.updateProjectionMatrix()}const be=z.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<be;D++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,D),r.clear();else{D===0&&(r.setRenderTarget(z.map),r.clear());const Z=z.getViewport(D);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),j.viewport(d)}if(P.isPointLight){const Z=z.camera,Ee=z.matrix,Re=P.distance||Z.far;Re!==Z.far&&(Z.far=Re,Z.updateProjectionMatrix()),jo.setFromMatrixPosition(P.matrixWorld),Z.position.copy(jo),$d.copy(Z.position),$d.add(bA[D]),Z.up.copy(TA[D]),Z.lookAt($d),Z.updateMatrixWorld(),Ee.makeTranslation(-jo.x,-jo.y,-jo.z),nv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(nv,Z.coordinateSystem,Z.reversedDepth)}else z.updateMatrices(P);s=z.getFrustum(),C(O,b,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===Jo&&B(z,b),z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(N,Y,G)};function B(L,O){const b=e.update(U);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(l.x,l.y,{format:Gs,type:Aa})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,b,g,U,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,b,E,U,null)}function H(L,O,b,N){let Y=null;const G=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=b.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=Y.uuid,pe=O.uuid;let xe=p[j];xe===void 0&&(xe={},p[j]=xe);let J=xe[pe];J===void 0&&(J=Y.clone(),xe[pe]=J,O.addEventListener("dispose",I)),Y=J}if(Y.visible=O.visible,Y.wireframe=O.wireframe,N===Jo?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:v[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=r.properties.get(Y);j.light=b}return Y}function C(L,O,b,N,Y){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Jo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const pe=e.update(L),xe=L.material;if(Array.isArray(xe)){const J=pe.groups;for(let P=0,z=J.length;P<z;P++){const $=J[P],ge=xe[$.materialIndex];if(ge&&ge.visible){const be=H(L,ge,N,Y);L.onBeforeShadow(r,L,O,b,pe,be,$),r.renderBufferDirect(b,null,pe,be,L,$),L.onAfterShadow(r,L,O,b,pe,be,$)}}}else if(xe.visible){const J=H(L,xe,N,Y);L.onBeforeShadow(r,L,O,b,pe,J,null),r.renderBufferDirect(b,null,pe,J,L,null),L.onAfterShadow(r,L,O,b,pe,J,null)}}const j=L.children;for(let pe=0,xe=j.length;pe<xe;pe++)C(j[pe],O,b,N,Y)}function I(L){L.target.removeEventListener("dispose",I);for(const b in p){const N=p[b],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function RA(r,e){function i(){let V=!1;const Ae=new rn;let he=null;const Ue=new rn(0,0,0,0);return{setMask:function(De){he!==De&&!V&&(r.colorMask(De,De,De,De),he=De)},setLocked:function(De){V=De},setClear:function(De,ve,We,Ve,Ft){Ft===!0&&(De*=Ve,ve*=Ve,We*=Ve),Ae.set(De,ve,We,Ve),Ue.equals(Ae)===!1&&(r.clearColor(De,ve,We,Ve),Ue.copy(Ae))},reset:function(){V=!1,he=null,Ue.set(-1,0,0,0)}}}function s(){let V=!1,Ae=!1,he=null,Ue=null,De=null;return{setReversed:function(ve){if(Ae!==ve){const We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ve){ve?ye(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(ve){he!==ve&&!V&&(r.depthMask(ve),he=ve)},setFunc:function(ve){if(Ae&&(ve=YM[ve]),Ue!==ve){switch(ve){case ah:r.depthFunc(r.NEVER);break;case sh:r.depthFunc(r.ALWAYS);break;case rh:r.depthFunc(r.LESS);break;case Xr:r.depthFunc(r.LEQUAL);break;case oh:r.depthFunc(r.EQUAL);break;case lh:r.depthFunc(r.GEQUAL);break;case ch:r.depthFunc(r.GREATER);break;case uh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=ve}},setLocked:function(ve){V=ve},setClear:function(ve){De!==ve&&(De=ve,Ae&&(ve=1-ve),r.clearDepth(ve))},reset:function(){V=!1,he=null,Ue=null,De=null,Ae=!1}}}function l(){let V=!1,Ae=null,he=null,Ue=null,De=null,ve=null,We=null,Ve=null,Ft=null;return{setTest:function(Dt){V||(Dt?ye(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Dt){Ae!==Dt&&!V&&(r.stencilMask(Dt),Ae=Dt)},setFunc:function(Dt,Un,Nn){(he!==Dt||Ue!==Un||De!==Nn)&&(r.stencilFunc(Dt,Un,Nn),he=Dt,Ue=Un,De=Nn)},setOp:function(Dt,Un,Nn){(ve!==Dt||We!==Un||Ve!==Nn)&&(r.stencilOp(Dt,Un,Nn),ve=Dt,We=Un,Ve=Nn)},setLocked:function(Dt){V=Dt},setClear:function(Dt){Ft!==Dt&&(r.clearStencil(Dt),Ft=Dt)},reset:function(){V=!1,Ae=null,he=null,Ue=null,De=null,ve=null,We=null,Ve=null,Ft=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},v={},g={},E=new WeakMap,T=[],U=null,y=!1,S=null,B=null,H=null,C=null,I=null,L=null,O=null,b=new At(0,0,0),N=0,Y=!1,G=null,j=null,pe=null,xe=null,J=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),z=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),z=$>=2);let be=null,D={};const Z=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Re=new rn().fromArray(Z),Ie=new rn().fromArray(Ee);function ae(V,Ae,he,Ue){const De=new Uint8Array(4),ve=r.createTexture();r.bindTexture(V,ve),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<he;We++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Ae+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return ve}const Me={};Me[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ye(r.DEPTH_TEST),d.setFunc(Xr),mt(!1),_t(a_),ye(r.CULL_FACE),lt(ya);function ye(V){x[V]!==!0&&(r.enable(V),x[V]=!0)}function He(V){x[V]!==!1&&(r.disable(V),x[V]=!1)}function nt(V,Ae){return g[V]!==Ae?(r.bindFramebuffer(V,Ae),g[V]=Ae,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function we(V,Ae){let he=T,Ue=!1;if(V){he=E.get(Ae),he===void 0&&(he=[],E.set(Ae,he));const De=V.textures;if(he.length!==De.length||he[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,We=De.length;ve<We;ve++)he[ve]=r.COLOR_ATTACHMENT0+ve;he.length=De.length,Ue=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(he)}function at(V){return U!==V?(r.useProgram(V),U=V,!0):!1}const Ke={[Is]:r.FUNC_ADD,[gM]:r.FUNC_SUBTRACT,[_M]:r.FUNC_REVERSE_SUBTRACT};Ke[vM]=r.MIN,Ke[xM]=r.MAX;const tt={[SM]:r.ZERO,[MM]:r.ONE,[yM]:r.SRC_COLOR,[nh]:r.SRC_ALPHA,[CM]:r.SRC_ALPHA_SATURATE,[AM]:r.DST_COLOR,[bM]:r.DST_ALPHA,[EM]:r.ONE_MINUS_SRC_COLOR,[ih]:r.ONE_MINUS_SRC_ALPHA,[RM]:r.ONE_MINUS_DST_COLOR,[TM]:r.ONE_MINUS_DST_ALPHA,[wM]:r.CONSTANT_COLOR,[DM]:r.ONE_MINUS_CONSTANT_COLOR,[UM]:r.CONSTANT_ALPHA,[NM]:r.ONE_MINUS_CONSTANT_ALPHA};function lt(V,Ae,he,Ue,De,ve,We,Ve,Ft,Dt){if(V===ya){y===!0&&(He(r.BLEND),y=!1);return}if(y===!1&&(ye(r.BLEND),y=!0),V!==mM){if(V!==S||Dt!==Y){if((B!==Is||I!==Is)&&(r.blendEquation(r.FUNC_ADD),B=Is,I=Is),Dt)switch(V){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case s_:r.blendFunc(r.ONE,r.ONE);break;case r_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case o_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case s_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case r_:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case o_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}H=null,C=null,L=null,O=null,b.set(0,0,0),N=0,S=V,Y=Dt}return}De=De||Ae,ve=ve||he,We=We||Ue,(Ae!==B||De!==I)&&(r.blendEquationSeparate(Ke[Ae],Ke[De]),B=Ae,I=De),(he!==H||Ue!==C||ve!==L||We!==O)&&(r.blendFuncSeparate(tt[he],tt[Ue],tt[ve],tt[We]),H=he,C=Ue,L=ve,O=We),(Ve.equals(b)===!1||Ft!==N)&&(r.blendColor(Ve.r,Ve.g,Ve.b,Ft),b.copy(Ve),N=Ft),S=V,Y=!1}function st(V,Ae){V.side===Vi?He(r.CULL_FACE):ye(r.CULL_FACE);let he=V.side===Jn;Ae&&(he=!he),mt(he),V.blending===Hr&&V.transparent===!1?lt(ya):lt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ue=V.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),It(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){G!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),G=V)}function _t(V){V!==dM?(ye(r.CULL_FACE),V!==j&&(V===a_?r.cullFace(r.BACK):V===hM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),j=V}function wt(V){V!==pe&&(z&&r.lineWidth(V),pe=V)}function It(V,Ae,he){V?(ye(r.POLYGON_OFFSET_FILL),(xe!==Ae||J!==he)&&(xe=Ae,J=he,d.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,he))):He(r.POLYGON_OFFSET_FILL)}function Rt(V){V?ye(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function qt(V){V===void 0&&(V=r.TEXTURE0+P-1),be!==V&&(r.activeTexture(V),be=V)}function X(V,Ae,he){he===void 0&&(be===null?he=r.TEXTURE0+P-1:he=be);let Ue=D[he];Ue===void 0&&(Ue={type:void 0,texture:void 0},D[he]=Ue),(Ue.type!==V||Ue.texture!==Ae)&&(be!==he&&(r.activeTexture(he),be=he),r.bindTexture(V,Ae||Me[V]),Ue.type=V,Ue.texture=Ae)}function Bt(){const V=D[be];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function gt(){try{r.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function M(){try{r.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Q(){try{r.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function fe(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Te(){try{r.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Ne(){try{r.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ue(){try{r.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function de(){try{r.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Ce(V){return v[V]!==void 0?v[V]:r.getParameter(V)}function Be(V,Ae){v[V]!==Ae&&(r.pixelStorei(V,Ae),v[V]=Ae)}function Oe(V){Re.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Re.copy(V))}function Le(V){Ie.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ie.copy(V))}function Qe(V,Ae){let he=p.get(Ae);he===void 0&&(he=new WeakMap,p.set(Ae,he));let Ue=he.get(V);Ue===void 0&&(Ue=r.getUniformBlockIndex(Ae,V.name),he.set(V,Ue))}function je(V,Ae){const Ue=p.get(Ae).get(V);m.get(Ae)!==Ue&&(r.uniformBlockBinding(Ae,Ue,V.__bindingPointIndex),m.set(Ae,Ue))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},v={},be=null,D={},g={},E=new WeakMap,T=[],U=null,y=!1,S=null,B=null,H=null,C=null,I=null,L=null,O=null,b=new At(0,0,0),N=0,Y=!1,G=null,j=null,pe=null,xe=null,J=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ye,disable:He,bindFramebuffer:nt,drawBuffers:we,useProgram:at,setBlending:lt,setMaterial:st,setFlipSided:mt,setCullFace:_t,setLineWidth:wt,setPolygonOffset:It,setScissorTest:Rt,activeTexture:qt,bindTexture:X,unbindTexture:Bt,compressedTexImage2D:gt,compressedTexImage3D:w,texImage2D:ue,texImage3D:de,pixelStorei:Be,getParameter:Ce,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Te,texStorage3D:Ne,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:Oe,viewport:Le,reset:rt}}function CA(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,x=new WeakMap,v=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(w,M){return T?new OffscreenCanvas(w,M):iu("canvas")}function y(w,M,Q){let se=1;const fe=gt(w);if((fe.width>Q||fe.height>Q)&&(se=Q/Math.max(fe.width,fe.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Te=Math.floor(se*fe.width),Ne=Math.floor(se*fe.height);g===void 0&&(g=U(Te,Ne));const ue=M?U(Te,Ne):g;return ue.width=Te,ue.height=Ne,ue.getContext("2d").drawImage(w,0,0,Te,Ne),ot("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Te+"x"+Ne+")."),ue}else return"data"in w&&ot("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),w;return w}function S(w){return w.generateMipmaps}function B(w){r.generateMipmap(w)}function H(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(w,M,Q,se,fe,Te=!1){if(w!==null){if(r[w]!==void 0)return r[w];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Ne;se&&(Ne=e.get("EXT_texture_norm16"),Ne||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===r.RED&&(Q===r.FLOAT&&(ue=r.R32F),Q===r.HALF_FLOAT&&(ue=r.R16F),Q===r.UNSIGNED_BYTE&&(ue=r.R8),Q===r.UNSIGNED_SHORT&&Ne&&(ue=Ne.R16_EXT),Q===r.SHORT&&Ne&&(ue=Ne.R16_SNORM_EXT)),M===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.R8UI),Q===r.UNSIGNED_SHORT&&(ue=r.R16UI),Q===r.UNSIGNED_INT&&(ue=r.R32UI),Q===r.BYTE&&(ue=r.R8I),Q===r.SHORT&&(ue=r.R16I),Q===r.INT&&(ue=r.R32I)),M===r.RG&&(Q===r.FLOAT&&(ue=r.RG32F),Q===r.HALF_FLOAT&&(ue=r.RG16F),Q===r.UNSIGNED_BYTE&&(ue=r.RG8),Q===r.UNSIGNED_SHORT&&Ne&&(ue=Ne.RG16_EXT),Q===r.SHORT&&Ne&&(ue=Ne.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Q===r.UNSIGNED_INT&&(ue=r.RG32UI),Q===r.BYTE&&(ue=r.RG8I),Q===r.SHORT&&(ue=r.RG16I),Q===r.INT&&(ue=r.RG32I)),M===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),Q===r.UNSIGNED_INT&&(ue=r.RGB32UI),Q===r.BYTE&&(ue=r.RGB8I),Q===r.SHORT&&(ue=r.RGB16I),Q===r.INT&&(ue=r.RGB32I)),M===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),Q===r.BYTE&&(ue=r.RGBA8I),Q===r.SHORT&&(ue=r.RGBA16I),Q===r.INT&&(ue=r.RGBA32I)),M===r.RGB&&(Q===r.UNSIGNED_SHORT&&Ne&&(ue=Ne.RGB16_EXT),Q===r.SHORT&&Ne&&(ue=Ne.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),M===r.RGBA){const de=Te?tu:Tt.getTransfer(fe);Q===r.FLOAT&&(ue=r.RGBA32F),Q===r.HALF_FLOAT&&(ue=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ue=de===Wt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Ne&&(ue=Ne.RGBA16_EXT),Q===r.SHORT&&Ne&&(ue=Ne.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(w,M){let Q;return w?M===null||M===Zi||M===rl?Q=r.DEPTH24_STENCIL8:M===ki?Q=r.DEPTH32F_STENCIL8:M===sl&&(Q=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===rl?Q=r.DEPTH_COMPONENT24:M===ki?Q=r.DEPTH_COMPONENT32F:M===sl&&(Q=r.DEPTH_COMPONENT16),Q}function L(w,M){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dn&&w.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function O(w){const M=w.target;M.removeEventListener("dispose",O),N(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&v.delete(M)}function b(w){const M=w.target;M.removeEventListener("dispose",b),G(M)}function N(w){const M=s.get(w);if(M.__webglInit===void 0)return;const Q=w.source,se=E.get(Q);if(se){const fe=se[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&Y(w),Object.keys(se).length===0&&E.delete(Q)}s.remove(w)}function Y(w){const M=s.get(w);r.deleteTexture(M.__webglTexture);const Q=w.source,se=E.get(Q);delete se[M.__cacheKey],d.memory.textures--}function G(w){const M=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let fe=0;fe<M.__webglFramebuffer[se].length;fe++)r.deleteFramebuffer(M.__webglFramebuffer[se][fe]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=w.textures;for(let se=0,fe=Q.length;se<fe;se++){const Te=s.get(Q[se]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),d.memory.textures--),s.remove(Q[se])}s.remove(w)}let j=0;function pe(){j=0}function xe(){return j}function J(w){j=w}function P(){const w=j;return w>=l.maxTextures&&ot("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),j+=1,w}function z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function $(w,M){const Q=s.get(w);if(w.isVideoTexture&&X(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Q.__version!==w.version){const se=w.image;if(se===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,w,M);return}}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+M)}function ge(w,M){const Q=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){He(Q,w,M);return}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+M)}function be(w,M){const Q=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){He(Q,w,M);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+M)}function D(w,M){const Q=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&Q.__version!==w.version){nt(Q,w,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+M)}const Z={[fh]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[dh]:r.MIRRORED_REPEAT},Ee={[Dn]:r.NEAREST,[PM]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[Td]:r.LINEAR_MIPMAP_NEAREST,[cs]:r.LINEAR_MIPMAP_LINEAR},Re={[FM]:r.NEVER,[kM]:r.ALWAYS,[zM]:r.LESS,[ep]:r.LEQUAL,[HM]:r.EQUAL,[tp]:r.GEQUAL,[GM]:r.GREATER,[VM]:r.NOTEQUAL};function Ie(w,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===Td||M.magFilter===yc||M.magFilter===cs||M.minFilter===bn||M.minFilter===Td||M.minFilter===yc||M.minFilter===cs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Z[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Z[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Z[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Ee[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==yc&&M.minFilter!==cs||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ae(w,M){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",O));const se=M.source;let fe=E.get(se);fe===void 0&&(fe={},E.set(se,fe));const Te=z(M);if(Te!==w.__cacheKey){fe[Te]===void 0&&(fe[Te]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),fe[Te].usedTimes++;const Ne=fe[w.__cacheKey];Ne!==void 0&&(fe[w.__cacheKey].usedTimes--,Ne.usedTimes===0&&Y(M)),w.__cacheKey=Te,w.__webglTexture=fe[Te].texture}return Q}function Me(w,M,Q){return Math.floor(Math.floor(w/Q)/M)}function ye(w,M,Q,se){const Te=w.updateRanges;if(Te.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Q,se,M.data);else{Te.sort((Be,Oe)=>Be.start-Oe.start);let Ne=0;for(let Be=1;Be<Te.length;Be++){const Oe=Te[Ne],Le=Te[Be],Qe=Oe.start+Oe.count,je=Me(Le.start,M.width,4),rt=Me(Oe.start,M.width,4);Le.start<=Qe+1&&je===rt&&Me(Le.start+Le.count-1,M.width,4)===je?Oe.count=Math.max(Oe.count,Le.start+Le.count-Oe.start):(++Ne,Te[Ne]=Le)}Te.length=Ne+1;const ue=i.getParameter(r.UNPACK_ROW_LENGTH),de=i.getParameter(r.UNPACK_SKIP_PIXELS),Ce=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Oe=Te.length;Be<Oe;Be++){const Le=Te[Be],Qe=Math.floor(Le.start/4),je=Math.ceil(Le.count/4),rt=Qe%M.width,V=Math.floor(Qe/M.width),Ae=je,he=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,rt,V,Ae,he,Q,se,M.data)}w.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ue),i.pixelStorei(r.UNPACK_SKIP_PIXELS,de),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function He(w,M,Q){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const fe=ae(w,M),Te=M.source;i.bindTexture(se,w.__webglTexture,r.TEXTURE0+Q);const Ne=s.get(Te);if(Te.version!==Ne.__version||fe===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const he=Tt.getPrimaries(Tt.workingColorSpace),Ue=M.colorSpace===ls?null:Tt.getPrimaries(M.colorSpace),De=M.colorSpace===ls||he===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let de=y(M.image,!1,l.maxTextureSize);de=Bt(M,de);const Ce=c.convert(M.format,M.colorSpace),Be=c.convert(M.type);let Oe=C(M.internalFormat,Ce,Be,M.normalized,M.colorSpace,M.isVideoTexture);Ie(se,M);let Le;const Qe=M.mipmaps,je=M.isVideoTexture!==!0,rt=Ne.__version===void 0||fe===!0,V=Te.dataReady,Ae=L(M,de);if(M.isDepthTexture)Oe=I(M.format===Fs,M.type),rt&&(je?i.texStorage2D(r.TEXTURE_2D,1,Oe,de.width,de.height):i.texImage2D(r.TEXTURE_2D,0,Oe,de.width,de.height,0,Ce,Be,null));else if(M.isDataTexture)if(Qe.length>0){je&&rt&&i.texStorage2D(r.TEXTURE_2D,Ae,Oe,Qe[0].width,Qe[0].height);for(let he=0,Ue=Qe.length;he<Ue;he++)Le=Qe[he],je?V&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Le.width,Le.height,Ce,Be,Le.data):i.texImage2D(r.TEXTURE_2D,he,Oe,Le.width,Le.height,0,Ce,Be,Le.data);M.generateMipmaps=!1}else je?(rt&&i.texStorage2D(r.TEXTURE_2D,Ae,Oe,de.width,de.height),V&&ye(M,de,Ce,Be)):i.texImage2D(r.TEXTURE_2D,0,Oe,de.width,de.height,0,Ce,Be,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Oe,Qe[0].width,Qe[0].height,de.depth);for(let he=0,Ue=Qe.length;he<Ue;he++)if(Le=Qe[he],M.format!==Ui)if(Ce!==null)if(je){if(V)if(M.layerUpdates.size>0){const De=L_(Le.width,Le.height,M.format,M.type);for(const ve of M.layerUpdates){const We=Le.data.subarray(ve*De/Le.data.BYTES_PER_ELEMENT,(ve+1)*De/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,ve,Le.width,Le.height,1,Ce,We)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Le.width,Le.height,de.depth,Ce,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Oe,Le.width,Le.height,de.depth,0,Le.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Le.width,Le.height,de.depth,Ce,Be,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,he,Oe,Le.width,Le.height,de.depth,0,Ce,Be,Le.data)}else{je&&rt&&i.texStorage2D(r.TEXTURE_2D,Ae,Oe,Qe[0].width,Qe[0].height);for(let he=0,Ue=Qe.length;he<Ue;he++)Le=Qe[he],M.format!==Ui?Ce!==null?je?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Le.width,Le.height,Ce,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,he,Oe,Le.width,Le.height,0,Le.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?V&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Le.width,Le.height,Ce,Be,Le.data):i.texImage2D(r.TEXTURE_2D,he,Oe,Le.width,Le.height,0,Ce,Be,Le.data)}else if(M.isDataArrayTexture)if(je){if(rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Oe,de.width,de.height,de.depth),V)if(M.layerUpdates.size>0){const he=L_(de.width,de.height,M.format,M.type);for(const Ue of M.layerUpdates){const De=de.data.subarray(Ue*he/de.data.BYTES_PER_ELEMENT,(Ue+1)*he/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,de.width,de.height,1,Ce,Be,De)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,Be,de.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,Ce,Be,de.data);else if(M.isData3DTexture)je?(rt&&i.texStorage3D(r.TEXTURE_3D,Ae,Oe,de.width,de.height,de.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,Be,de.data)):i.texImage3D(r.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,Ce,Be,de.data);else if(M.isFramebufferTexture){if(rt)if(je)i.texStorage2D(r.TEXTURE_2D,Ae,Oe,de.width,de.height);else{let he=de.width,Ue=de.height;for(let De=0;De<Ae;De++)i.texImage2D(r.TEXTURE_2D,De,Oe,he,Ue,0,Ce,Be,null),he>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const he=r.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),v.add(M),he.onpaint=Ue=>{const De=Ue.changedElements;for(const ve of v)De.includes(ve.image)&&(ve.needsUpdate=!0)},he.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,de);else{const De=r.RGBA,ve=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,De,ve,We,de)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&rt){const he=gt(Qe[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Oe,he.width,he.height)}for(let he=0,Ue=Qe.length;he<Ue;he++)Le=Qe[he],je?V&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Ce,Be,Le):i.texImage2D(r.TEXTURE_2D,he,Oe,Ce,Be,Le);M.generateMipmaps=!1}else if(je){if(rt){const he=gt(de);i.texStorage2D(r.TEXTURE_2D,Ae,Oe,he.width,he.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Be,de)}else i.texImage2D(r.TEXTURE_2D,0,Oe,Ce,Be,de);S(M)&&B(se),Ne.__version=Te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function nt(w,M,Q){if(M.image.length!==6)return;const se=ae(w,M),fe=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+Q);const Te=s.get(fe);if(fe.version!==Te.__version||se===!0){i.activeTexture(r.TEXTURE0+Q);const Ne=Tt.getPrimaries(Tt.workingColorSpace),ue=M.colorSpace===ls?null:Tt.getPrimaries(M.colorSpace),de=M.colorSpace===ls||Ne===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let ve=0;ve<6;ve++)!Ce&&!Be?Oe[ve]=y(M.image[ve],!0,l.maxCubemapSize):Oe[ve]=Be?M.image[ve].image:M.image[ve],Oe[ve]=Bt(M,Oe[ve]);const Le=Oe[0],Qe=c.convert(M.format,M.colorSpace),je=c.convert(M.type),rt=C(M.internalFormat,Qe,je,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Ae=Te.__version===void 0||se===!0,he=fe.dataReady;let Ue=L(M,Le);Ie(r.TEXTURE_CUBE_MAP,M);let De;if(Ce){V&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,rt,Le.width,Le.height);for(let ve=0;ve<6;ve++){De=Oe[ve].mipmaps;for(let We=0;We<De.length;We++){const Ve=De[We];M.format!==Ui?Qe!==null?V?he&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,Ve.width,Ve.height,Qe,Ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,rt,Ve.width,Ve.height,0,Ve.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,Ve.width,Ve.height,Qe,je,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,rt,Ve.width,Ve.height,0,Qe,je,Ve.data)}}}else{if(De=M.mipmaps,V&&Ae){De.length>0&&Ue++;const ve=gt(Oe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,rt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Be){V?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Oe[ve].width,Oe[ve].height,Qe,je,Oe[ve].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Oe[ve].width,Oe[ve].height,0,Qe,je,Oe[ve].data);for(let We=0;We<De.length;We++){const Ft=De[We].image[ve].image;V?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Ft.width,Ft.height,Qe,je,Ft.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,rt,Ft.width,Ft.height,0,Qe,je,Ft.data)}}else{V?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,je,Oe[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Qe,je,Oe[ve]);for(let We=0;We<De.length;We++){const Ve=De[We];V?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Qe,je,Ve.image[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,rt,Qe,je,Ve.image[ve])}}}S(M)&&B(r.TEXTURE_CUBE_MAP),Te.__version=fe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function we(w,M,Q,se,fe,Te){const Ne=c.convert(Q.format,Q.colorSpace),ue=c.convert(Q.type),de=C(Q.internalFormat,Ne,ue,Q.normalized,Q.colorSpace),Ce=s.get(M),Be=s.get(Q);if(Be.__renderTarget=M,!Ce.__hasExternalTextures){const Oe=Math.max(1,M.width>>Te),Le=Math.max(1,M.height>>Te);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?i.texImage3D(fe,Te,de,Oe,Le,M.depth,0,Ne,ue,null):i.texImage2D(fe,Te,de,Oe,Le,0,Ne,ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),qt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,fe,Be.__webglTexture,0,Rt(M)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,fe,Be.__webglTexture,Te),i.bindFramebuffer(r.FRAMEBUFFER,null)}function at(w,M,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const se=M.depthTexture,fe=se&&se.isDepthTexture?se.type:null,Te=I(M.stencilBuffer,fe),Ne=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(M),Te,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(M),Te,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Te,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,w)}else{const se=M.textures;for(let fe=0;fe<se.length;fe++){const Te=se[fe],Ne=c.convert(Te.format,Te.colorSpace),ue=c.convert(Te.type),de=C(Te.internalFormat,Ne,ue,Te.normalized,Te.colorSpace);qt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(M),de,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(M),de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(w,M,Q){const se=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=s.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=c.convert(M.depthTexture.format),Be=c.convert(M.depthTexture.type);let Oe;M.depthTexture.format===Ra?Oe=r.DEPTH_COMPONENT24:M.depthTexture.format===Fs&&(Oe=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Oe,M.width,M.height,0,Ce,Be,null)}}else $(M.depthTexture,0);const Te=fe.__webglTexture,Ne=Rt(M),ue=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,de=M.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ra)qt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,Te,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,Te,0);else if(M.depthTexture.format===Fs)qt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,Te,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(w){const M=s.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const se=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",fe)};se.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=se}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let se=0;se<6;se++)Ke(M.__webglFramebuffer[se],w,se);else{const se=w.texture.mipmaps;se&&se.length>0?Ke(M.__webglFramebuffer[0],w,0):Ke(M.__webglFramebuffer,w,0)}else if(Q){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=r.createRenderbuffer(),at(M.__webglDepthbuffer[se],w,!1);else{const fe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,Te)}}else{const se=w.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),at(M.__webglDepthbuffer,w,!1);else{const fe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,Te)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(w,M,Q){const se=s.get(w);M!==void 0&&we(se.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&tt(w)}function st(w){const M=w.texture,Q=s.get(w),se=s.get(M);w.addEventListener("dispose",b);const fe=w.textures,Te=w.isWebGLCubeRenderTarget===!0,Ne=fe.length>1;if(Ne||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,d.memory.textures++),Te){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let de=0;de<M.mipmaps.length;de++)Q.__webglFramebuffer[ue][de]=r.createFramebuffer()}else Q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let ue=0,de=fe.length;ue<de;ue++){const Ce=s.get(fe[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),d.memory.textures++)}if(w.samples>0&&qt(w)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const de=fe[ue];Q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const Ce=c.convert(de.format,de.colorSpace),Be=c.convert(de.type),Oe=C(de.internalFormat,Ce,Be,de.normalized,de.colorSpace,w.isXRRenderTarget===!0),Le=Rt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Oe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),at(Q.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)we(Q.__webglFramebuffer[ue][de],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else we(Q.__webglFramebuffer[ue],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(M)&&B(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let ue=0,de=fe.length;ue<de;ue++){const Ce=fe[ue],Be=s.get(Ce);let Oe=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Oe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Be.__webglTexture),Ie(Oe,Ce),we(Q.__webglFramebuffer,w,Ce,r.COLOR_ATTACHMENT0+ue,Oe,0),S(Ce)&&B(Oe)}i.unbindTexture()}else{let ue=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ue,se.__webglTexture),Ie(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)we(Q.__webglFramebuffer[de],w,M,r.COLOR_ATTACHMENT0,ue,de);else we(Q.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,ue,0);S(M)&&B(ue),i.unbindTexture()}w.depthBuffer&&tt(w)}function mt(w){const M=w.textures;for(let Q=0,se=M.length;Q<se;Q++){const fe=M[Q];if(S(fe)){const Te=H(w),Ne=s.get(fe).__webglTexture;i.bindTexture(Te,Ne),B(Te),i.unbindTexture()}}}const _t=[],wt=[];function It(w){if(w.samples>0){if(qt(w)===!1){const M=w.textures,Q=w.width,se=w.height;let fe=r.COLOR_BUFFER_BIT;const Te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(w),ue=M.length>1;if(ue)for(let Ce=0;Ce<M.length;Ce++)i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const de=w.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const Be=s.get(M[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,Q,se,0,0,Q,se,fe,r.NEAREST),m===!0&&(_t.length=0,wt.length=0,_t.push(r.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_t.push(Te),wt.push(Te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<M.length;Ce++){i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const Be=s.get(M[Ce]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Rt(w){return Math.min(l.maxSamples,w.samples)}function qt(w){const M=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X(w){const M=d.render.frame;x.get(w)!==M&&(x.set(w,M),w.update())}function Bt(w,M){const Q=w.colorSpace,se=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Q!==eu&&Q!==ls&&(Tt.getTransfer(Q)===Wt?(se!==Ui||fe!==Mi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Q)),M}function gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=P,this.resetTextureUnits=pe,this.getTextureUnits=xe,this.setTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=be,this.setTextureCube=D,this.rebindTextures=lt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function wA(r,e){function i(s,l=ls){let c;const d=Tt.getTransfer(l);if(s===Mi)return r.UNSIGNED_BYTE;if(s===Kh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Sv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===_v)return r.BYTE;if(s===vv)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===Zh)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===Mv)return r.ALPHA;if(s===yv)return r.RGB;if(s===Ui)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===Ev)return r.RED;if(s===jh)return r.RED_INTEGER;if(s===Gs)return r.RG;if(s===Jh)return r.RG_INTEGER;if(s===$h)return r.RGBA_INTEGER;if(s===qc||s===Yc||s===Zc||s===Kc)if(d===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hh||s===ph||s===mh||s===gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_h||s===vh||s===xh||s===Sh||s===Mh||s===Jc||s===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_h||s===vh)return d===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Sh)return c.COMPRESSED_R11_EAC;if(s===Mh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Jc)return c.COMPRESSED_RG11_EAC;if(s===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Eh||s===bh||s===Th||s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Nh||s===Lh||s===Oh||s===Ph||s===Ih)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Eh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Th)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ah)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ch)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oh)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ph)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return d===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bh||s===Fh||s===zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Bh)return d===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hh||s===Gh||s===$c||s===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$c)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Lv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ki({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new zs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends ks{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,g=null,E=null,T=null;const U=typeof XRWebGLBinding<"u",y=new NA,S={},B=i.getContextAttributes();let H=null,C=null;const I=[],L=[],O=new Pt;let b=null;const N=new Si;N.viewport=new rn;const Y=new Si;Y.viewport=new rn;const G=[N,Y],j=new ky;let pe=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Me=I[ae];return Me===void 0&&(Me=new Ud,I[ae]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ae){let Me=I[ae];return Me===void 0&&(Me=new Ud,I[ae]=Me),Me.getGripSpace()},this.getHand=function(ae){let Me=I[ae];return Me===void 0&&(Me=new Ud,I[ae]=Me),Me.getHandSpace()};function J(ae){const Me=L.indexOf(ae.inputSource);if(Me===-1)return;const ye=I[Me];ye!==void 0&&(ye.update(ae.inputSource,ae.frame,p||d),ye.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",z);for(let ae=0;ae<I.length;ae++){const Me=L[ae];Me!==null&&(L[ae]=null,I[ae].disconnect(Me))}pe=null,xe=null,y.reset();for(const ae in S)delete S[ae];e.setRenderTarget(H),E=null,g=null,v=null,l=null,C=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return v===null&&U&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",P),l.addEventListener("inputsourceschange",z),B.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,nt=null;B.depth&&(nt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=B.stencil?Fs:Ra,He=B.stencil?rl:Zi);const we={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(we),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new qi(g.textureWidth,g.textureHeight,{format:Ui,type:Mi,depthTexture:new qr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new qi(E.framebufferWidth,E.framebufferHeight,{format:Ui,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ie.setContext(l),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(ae){for(let Me=0;Me<ae.removed.length;Me++){const ye=ae.removed[Me],He=L.indexOf(ye);He>=0&&(L[He]=null,I[He].disconnect(ye))}for(let Me=0;Me<ae.added.length;Me++){const ye=ae.added[Me];let He=L.indexOf(ye);if(He===-1){for(let we=0;we<I.length;we++)if(we>=L.length){L.push(ye),He=we;break}else if(L[we]===null){L[we]=ye,He=we;break}if(He===-1)break}const nt=I[He];nt&&nt.connect(ye)}}const $=new le,ge=new le;function be(ae,Me,ye){$.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(ye.matrixWorld);const He=$.distanceTo(ge),nt=Me.projectionMatrix.elements,we=ye.projectionMatrix.elements,at=nt[14]/(nt[10]-1),Ke=nt[14]/(nt[10]+1),tt=(nt[9]+1)/nt[5],lt=(nt[9]-1)/nt[5],st=(nt[8]-1)/nt[0],mt=(we[8]+1)/we[0],_t=at*st,wt=at*mt,It=He/(-st+mt),Rt=It*-st;if(Me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Rt),ae.translateZ(It),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),nt[10]===-1)ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const qt=at+It,X=Ke+It,Bt=_t-Rt,gt=wt+(He-Rt),w=tt*Ke/X*qt,M=lt*Ke/X*qt;ae.projectionMatrix.makePerspective(Bt,gt,w,M,qt,X),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function D(ae,Me){Me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let Me=ae.near,ye=ae.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),j.near=Y.near=N.near=Me,j.far=Y.far=N.far=ye,(pe!==j.near||xe!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),pe=j.near,xe=j.far),j.layers.mask=ae.layers.mask|6,N.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const He=ae.parent,nt=j.cameras;D(j,He);for(let we=0;we<nt.length;we++)D(nt[we],He);nt.length===2?be(j,N,Y):j.projectionMatrix.copy(N.projectionMatrix),Z(ae,j,He)};function Z(ae,Me,ye){ye===null?ae.matrix.copy(Me.matrixWorld):(ae.matrix.copy(ye.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ol*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ae){return S[ae]};let Ee=null;function Re(ae,Me){if(x=Me.getViewerPose(p||d),T=Me,x!==null){const ye=x.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let He=!1;ye.length!==j.cameras.length&&(j.cameras.length=0,He=!0);for(let Ke=0;Ke<ye.length;Ke++){const tt=ye[Ke];let lt=null;if(E!==null)lt=E.getViewport(tt);else{const mt=v.getViewSubImage(g,tt);lt=mt.viewport,Ke===0&&(e.setRenderTargetTextures(C,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(C))}let st=G[Ke];st===void 0&&(st=new Si,st.layers.enable(Ke),st.viewport=new rn,G[Ke]=st),st.matrix.fromArray(tt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(tt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(lt.x,lt.y,lt.width,lt.height),Ke===0&&(j.matrix.copy(st.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),He===!0&&j.cameras.push(st)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){v=s.getBinding();const Ke=v.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&y.init(Ke,l.renderState)}if(nt&&nt.includes("camera-access")&&U){e.state.unbindTexture(),v=s.getBinding();for(let Ke=0;Ke<ye.length;Ke++){const tt=ye[Ke].camera;if(tt){let lt=S[tt];lt||(lt=new Lv,S[tt]=lt);const st=v.getCameraImage(tt);lt.sourceTexture=st}}}}for(let ye=0;ye<I.length;ye++){const He=L[ye],nt=I[ye];He!==null&&nt!==void 0&&nt.update(He,Me,p||d)}Ee&&Ee(ae,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),T=null}const Ie=new Bv;Ie.setAnimationLoop(Re),this.setAnimationLoop=function(ae){Ee=ae},this.dispose=function(){}}}const OA=new gn,Xv=new ut;Xv.set(-1,0,0,0,1,0,0,0,1);function PA(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Ov(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,B,H,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&E(y,S,C)):S.isMeshMatcapMaterial?(c(y,S),T(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),U(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,B,H):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const B=e.get(S),H=B.envMap,C=B.envMapRotation;H&&(y.envMap.value=H,y.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Xv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,B,H){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*B,y.scale.value=H*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,B){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function U(y,S){const B=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IA(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const L=I.program;s.uniformBlockBinding(C,L)}function p(C,I){let L=l[C.id];L===void 0&&(y(C),L=x(C),l[C.id]=L,C.addEventListener("dispose",B));const O=I.program;s.updateUBOMapping(C,O);const b=e.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function x(C){const I=v();C.__bindingPointIndex=I;const L=r.createBuffer(),O=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,O,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,L),L}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const I=l[C.id],L=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let b=0,N=L.length;b<N;b++){const Y=L[b];if(Array.isArray(Y))for(let G=0,j=Y.length;G<j;G++)E(Y[G],b,G,O);else E(Y,b,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(C,I,L,O){if(U(C,I,L,O)===!0){const b=C.__offset,N=C.value;if(Array.isArray(N)){let Y=0;for(let G=0;G<N.length;G++){const j=N[G],pe=S(j);T(j,C.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}function T(C,I,L){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,L)}function U(C,I,L,O){const b=C.value,N=I+"_"+L;if(O[N]===void 0)return typeof b=="number"||typeof b=="boolean"?O[N]=b:ArrayBuffer.isView(b)?O[N]=b.slice():O[N]=b.clone(),!0;{const Y=O[N];if(typeof b=="number"||typeof b=="boolean"){if(Y!==b)return O[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(Y.equals(b)===!1)return Y.copy(b),!0}}return!1}function y(C){const I=C.uniforms;let L=0;const O=16;for(let N=0,Y=I.length;N<Y;N++){const G=Array.isArray(I[N])?I[N]:[I[N]];for(let j=0,pe=G.length;j<pe;j++){const xe=G[j],J=Array.isArray(xe.value)?xe.value:[xe.value];for(let P=0,z=J.length;P<z;P++){const $=J[P],ge=S($),be=L%O,D=be%ge.boundary,Z=be+D;L+=D,Z!==0&&O-Z<ge.storage&&(L+=O-Z),xe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),xe.__offset=L,L+=ge.storage}}}const b=L%O;return b>0&&(L+=O-b),C.__size=L,C.__cache={},this}function S(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),I}function B(C){const I=C.target;I.removeEventListener("dispose",B);const L=d.indexOf(I.__bindingPointIndex);d.splice(L,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function H(){for(const C in l)r.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:p,dispose:H}}const BA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function FA(){return Hi===null&&(Hi=new Dy(BA,16,16,Gs,Aa),Hi.name="DFG_LUT",Hi.minFilter=bn,Hi.magFilter=bn,Hi.wrapS=Ma,Hi.wrapT=Ma,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class zA{constructor(e={}){const{canvas:i=WM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:E=Mi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const U=E,y=new Set([$h,Jh,jh]),S=new Set([Mi,Zi,sl,rl,Kh,Qh]),B=new Uint32Array(4),H=new Int32Array(4),C=new le;let I=null,L=null;const O=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,j=null,pe=null,xe=null,J=null;this._outputColorSpace=kn;let P=0,z=0,$=null,ge=-1,be=null;const D=new rn,Z=new rn;let Ee=null;const Re=new At(0);let Ie=0,ae=i.width,Me=i.height,ye=1,He=null,nt=null;const we=new rn(0,0,ae,Me),at=new rn(0,0,ae,Me);let Ke=!1;const tt=new Dv;let lt=!1,st=!1;const mt=new gn,_t=new le,wt=new rn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function qt(){return $===null?ye:1}let X=s;function Bt(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yh}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Un,!1),X===null){const W="webgl2";if(X=Bt(W,A),X===null)throw Bt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let gt,w,M,Q,se,fe,Te,Ne,ue,de,Ce,Be,Oe,Le,Qe,je,rt,V,Ae,he,Ue,De,ve;function We(){gt=new FT(X),gt.init(),Ue=new wA(X,gt),w=new DT(X,gt,e,Ue),M=new RA(X,gt),w.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),pe=X.createFramebuffer(),xe=X.createFramebuffer(),J=X.createFramebuffer(),Q=new GT(X),se=new hA,fe=new CA(X,gt,M,se,w,Ue,Q),Te=new BT(Y),Ne=new Wy(X),De=new CT(X,Ne),ue=new zT(X,Ne,Q,De),de=new kT(X,ue,Ne,De,Q),V=new VT(X,w,fe),Qe=new UT(se),Ce=new dA(Y,Te,gt,w,De,Qe),Be=new PA(Y,se),Oe=new mA,Le=new MA(gt),rt=new RT(Y,Te,M,de,T,m),je=new AA(Y,de,w),ve=new IA(X,Q,w,M),Ae=new wT(X,gt,Q),he=new HT(X,gt,Q),Q.programs=Ce.programs,Y.capabilities=w,Y.extensions=gt,Y.properties=se,Y.renderLists=Oe,Y.shadowMap=je,Y.state=M,Y.info=Q}We(),U!==Mi&&(N=new WT(U,i.width,i.height,h,l,c));const Ve=new LA(Y,X);this.xr=Ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(ae,Me,!1))},this.getSize=function(A){return A.set(ae,Me)},this.setSize=function(A,W,re=!0){if(Ve.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,Me=W,i.width=Math.floor(A*ye),i.height=Math.floor(W*ye),re===!0&&(i.style.width=A+"px",i.style.height=W+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ae*ye,Me*ye).floor()},this.setDrawingBufferSize=function(A,W,re){ae=A,Me=W,ye=re,i.width=Math.floor(A*re),i.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(U===Mi){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,W,re,ne){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,W,re,ne),M.viewport(D.copy(we).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,W,re,ne){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,W,re,ne),M.scissor(Z.copy(at).multiplyScalar(ye).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){M.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let ne=0;if(A){let ie=!1;if($!==null){const Fe=$.texture.format;ie=y.has(Fe)}if(ie){const Fe=$.texture.type,ke=S.has(Fe),Pe=rt.getClearColor(),qe=rt.getClearAlpha(),Xe=Pe.r,$e=Pe.g,ft=Pe.b;ke?(B[0]=Xe,B[1]=$e,B[2]=ft,B[3]=qe,X.clearBufferuiv(X.COLOR,0,B)):(H[0]=Xe,H[1]=$e,H[2]=ft,H[3]=qe,X.clearBufferiv(X.COLOR,0,H))}else ne|=X.COLOR_BUFFER_BIT}W&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Un,!1),rt.dispose(),Oe.dispose(),Le.dispose(),se.dispose(),Te.dispose(),de.dispose(),De.dispose(),ve.dispose(),Ce.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",cn),Ve.removeEventListener("sessionend",Tn),Xn.stop()};function Ft(A){A.preventDefault(),h_("WebGLRenderer: Context Lost."),G=!0}function Dt(){h_("WebGLRenderer: Context Restored."),G=!1;const A=Q.autoReset,W=je.enabled,re=je.autoUpdate,ne=je.needsUpdate,ie=je.type;We(),Q.autoReset=A,je.enabled=W,je.autoUpdate=re,je.needsUpdate=ne,je.type=ie}function Un(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const W=A.target;W.removeEventListener("dispose",Nn),jr(W)}function jr(A){Jr(A),se.remove(A)}function Jr(A){const W=se.get(A).programs;W!==void 0&&(W.forEach(function(re){Ce.releaseProgram(re)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,ne,ie,Fe){W===null&&(W=It);const ke=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Pe=Ua(A,W,re,ne,ie);M.setMaterial(ne,ke);let qe=re.index,Xe=1;if(ne.wireframe===!0){if(qe=ue.getWireframeAttribute(re),qe===void 0)return;Xe=2}const $e=re.drawRange,ft=re.attributes.position;let Je=$e.start*Xe,Ut=($e.start+$e.count)*Xe;Fe!==null&&(Je=Math.max(Je,Fe.start*Xe),Ut=Math.min(Ut,(Fe.start+Fe.count)*Xe)),qe!==null?(Je=Math.max(Je,0),Ut=Math.min(Ut,qe.count)):ft!=null&&(Je=Math.max(Je,0),Ut=Math.min(Ut,ft.count));const en=Ut-Je;if(en<0||en===1/0)return;De.setup(ie,ne,Pe,re,qe);let Qt,Ht=Ae;if(qe!==null&&(Qt=Ne.get(qe),Ht=he,Ht.setIndex(Qt)),ie.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*qt()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if(ie.isLine){let Gt=ne.linewidth;Gt===void 0&&(Gt=1),M.setLineWidth(Gt*qt()),ie.isLineSegments?Ht.setMode(X.LINES):ie.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else ie.isPoints?Ht.setMode(X.POINTS):ie.isSprite&&Ht.setMode(X.TRIANGLES);if(ie.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Gt=ie._multiDrawStarts,Ge=ie._multiDrawCounts,Ln=ie._multiDrawCount,vt=qe?Ne.get(qe).bytesPerElement:1,_n=se.get(ne).currentProgram.getUniforms();for(let $n=0;$n<Ln;$n++)_n.setValue(X,"_gl_DrawID",$n),Ht.render(Gt[$n]/vt,Ge[$n])}else if(ie.isInstancedMesh)Ht.renderInstances(Je,en,ie.count);else if(re.isInstancedBufferGeometry){const Gt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,Gt);Ht.renderInstances(Je,en,Ge)}else Ht.render(Je,en)};function $r(A,W,re){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Da(A,W,re),A.side=Ta,A.needsUpdate=!0,Da(A,W,re),A.side=Vi):Da(A,W,re)}this.compile=function(A,W,re=null){re===null&&(re=A),L=Le.get(re),L.init(W),b.push(L),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==re&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Fe=ie.material;if(Fe)if(Array.isArray(Fe))for(let ke=0;ke<Fe.length;ke++){const Pe=Fe[ke];$r(Pe,re,ie),ne.add(Pe)}else $r(Fe,re,ie),ne.add(Fe)}),L=b.pop(),ne},this.compileAsync=function(A,W,re=null){const ne=this.compile(A,W,re);return new Promise(ie=>{function Fe(){if(ne.forEach(function(ke){se.get(ke).currentProgram.isReady()&&ne.delete(ke)}),ne.size===0){ie(A);return}setTimeout(Fe,10)}gt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Xs=null;function Li(A){Xs&&Xs(A)}function cn(){Xn.stop()}function Tn(){Xn.start()}const Xn=new Bv;Xn.setAnimationLoop(Li),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Xs=A,Ve.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},Ve.addEventListener("sessionstart",cn),Ve.addEventListener("sessionend",Tn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(A,W);const re=Ve.enabled===!0&&Ve.isPresenting===!0,ne=N!==null&&($===null||re)&&N.begin(Y,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,$),L=Le.get(A,b.length),L.init(W),L.state.textureUnits=fe.getTextureUnits(),b.push(L),mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(mt,Xi,W.reversedDepth),st=this.localClippingEnabled,lt=Qe.init(this.clippingPlanes,st),I=Oe.get(A,O.length),I.init(),O.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const ke=Y.xr.getDepthSensingMesh();ke!==null&&fs(ke,W,-1/0,Y.sortObjects)}fs(A,W,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(He,nt,W.reversedDepth),Rt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Rt&&rt.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Qe.beginShadows();const ie=L.state.shadowsArray;if(je.render(ie,A,W),lt===!0&&Qe.endShadows(),(ne&&N.hasRenderPass())===!1){const ke=I.opaque,Pe=I.transmissive;if(L.setupLights(),W.isArrayCamera){const qe=W.cameras;if(Pe.length>0)for(let Xe=0,$e=qe.length;Xe<$e;Xe++){const ft=qe[Xe];fl(ke,Pe,A,ft)}Rt&&rt.render(A);for(let Xe=0,$e=qe.length;Xe<$e;Xe++){const ft=qe[Xe];ul(I,A,ft,ft.viewport)}}else Pe.length>0&&fl(ke,Pe,A,W),Rt&&rt.render(A),ul(I,A,W)}$!==null&&z===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),ne&&N.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),De.resetDefaultState(),ge=-1,be=null,b.pop(),b.length>0?(L=b[b.length-1],fe.setTextureUnits(L.state.textureUnits),lt===!0&&Qe.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,j!==null&&j.renderEnd()};function fs(A,W,re,ne){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||tt.intersectsSprite(A)){ne&&wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const ke=de.update(A),Pe=A.material;Pe.visible&&I.push(A,ke,Pe,re,wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||tt.intersectsObject(A))){const ke=de.update(A),Pe=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),wt.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),wt.copy(ke.boundingSphere.center)),wt.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(Pe)){const qe=ke.groups;for(let Xe=0,$e=qe.length;Xe<$e;Xe++){const ft=qe[Xe],Je=Pe[ft.materialIndex];Je&&Je.visible&&I.push(A,ke,Je,re,wt.z,ft)}}else Pe.visible&&I.push(A,ke,Pe,re,wt.z,null)}}const Fe=A.children;for(let ke=0,Pe=Fe.length;ke<Pe;ke++)fs(Fe[ke],W,re,ne)}function ul(A,W,re,ne){const{opaque:ie,transmissive:Fe,transparent:ke}=A;L.setupLightsView(re),lt===!0&&Qe.setGlobalState(Y.clippingPlanes,re),ne&&M.viewport(D.copy(ne)),ie.length>0&&ds(ie,W,re),Fe.length>0&&ds(Fe,W,re),ke.length>0&&ds(ke,W,re),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function fl(A,W,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const Je=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new qi(1,1,{generateMipmaps:!0,type:Je?Aa:Mi,minFilter:cs,samples:Math.max(4,w.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ne.id],ke=ne.viewport||D;Fe.setSize(ke.z*Y.transmissionResolutionScale,ke.w*Y.transmissionResolutionScale);const Pe=Y.getRenderTarget(),qe=Y.getActiveCubeFace(),Xe=Y.getActiveMipmapLevel();Y.setRenderTarget(Fe),Y.getClearColor(Re),Ie=Y.getClearAlpha(),Ie<1&&Y.setClearColor(16777215,.5),Y.clear(),Rt&&rt.render(re);const $e=Y.toneMapping;Y.toneMapping=Wi;const ft=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),lt===!0&&Qe.setGlobalState(Y.clippingPlanes,ne),ds(A,re,ne),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ut=0,en=W.length;Ut<en;Ut++){const Qt=W[Ut],{object:Ht,geometry:Gt,material:Ge,group:Ln}=Qt;if(Ge.side===Vi&&Ht.layers.test(ne.layers)){const vt=Ge.side;Ge.side=Jn,Ge.needsUpdate=!0,wa(Ht,re,ne,Gt,Ge,Ln),Ge.side=vt,Ge.needsUpdate=!0,Je=!0}}Je===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}Y.setRenderTarget(Pe,qe,Xe),Y.setClearColor(Re,Ie),ft!==void 0&&(ne.viewport=ft),Y.toneMapping=$e}function ds(A,W,re){const ne=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Fe=A.length;ie<Fe;ie++){const ke=A[ie],{object:Pe,geometry:qe,group:Xe}=ke;let $e=ke.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Pe.layers.test(re.layers)&&wa(Pe,W,re,qe,$e,Xe)}}function wa(A,W,re,ne,ie,Fe){A.onBeforeRender(Y,W,re,ne,ie,Fe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(Y,W,re,ne,A,Fe),ie.transparent===!0&&ie.side===Vi&&ie.forceSinglePass===!1?(ie.side=Jn,ie.needsUpdate=!0,Y.renderBufferDirect(re,W,ne,ie,A,Fe),ie.side=Ta,ie.needsUpdate=!0,Y.renderBufferDirect(re,W,ne,ie,A,Fe),ie.side=Vi):Y.renderBufferDirect(re,W,ne,ie,A,Fe),A.onAfterRender(Y,W,re,ne,ie,Fe)}function Da(A,W,re){W.isScene!==!0&&(W=It);const ne=se.get(A),ie=L.state.lights,Fe=L.state.shadowsArray,ke=ie.state.version,Pe=Ce.getParameters(A,ie.state,Fe,W,re,L.state.lightProbeGridArray),qe=Ce.getProgramCacheKey(Pe);let Xe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Te.get(A.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",Nn),Xe=new Map,ne.programs=Xe);let ft=Xe.get(qe);if(ft!==void 0){if(ne.currentProgram===ft&&ne.lightsStateVersion===ke)return ji(A,Pe),ft}else Pe.uniforms=Ce.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,re,Pe),A.onBeforeCompile(Pe,Y),ft=Ce.acquireProgram(Pe,qe),Xe.set(qe,ft),ne.uniforms=Pe.uniforms;const Je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Qe.uniform),ji(A,Pe),ne.needsLights=dl(A),ne.lightsStateVersion=ke,ne.needsLights&&(Je.ambientLightColor.value=ie.state.ambient,Je.lightProbe.value=ie.state.probe,Je.directionalLights.value=ie.state.directional,Je.directionalLightShadows.value=ie.state.directionalShadow,Je.spotLights.value=ie.state.spot,Je.spotLightShadows.value=ie.state.spotShadow,Je.rectAreaLights.value=ie.state.rectArea,Je.ltc_1.value=ie.state.rectAreaLTC1,Je.ltc_2.value=ie.state.rectAreaLTC2,Je.pointLights.value=ie.state.point,Je.pointLightShadows.value=ie.state.pointShadow,Je.hemisphereLights.value=ie.state.hemi,Je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Je.spotLightMatrix.value=ie.state.spotLightMatrix,Je.spotLightMap.value=ie.state.spotLightMap,Je.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=ft,ne.uniformsList=null,ft}function Qi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Qc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ji(A,W){const re=se.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function hs(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let re=0,ne=A.length;re<ne;re++){const ie=A[re];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Ua(A,W,re,ne,ie){W.isScene!==!0&&(W=It),fe.resetTextureUnits();const Fe=W.fog,ke=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Pe=$===null?Y.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Tt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Xe=Te.get(ne.envMap||ke,qe),$e=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ft=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!re.morphAttributes.position,Ut=!!re.morphAttributes.normal,en=!!re.morphAttributes.color;let Qt=Wi;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qt=Y.toneMapping);const Ht=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,Ge=se.get(ne),Ln=L.state.lights;if(lt===!0&&(st===!0||A!==be)){const zt=A===be&&ne.id===ge;Qe.setState(ne,A,zt)}let vt=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ln.state.version||Ge.outputColorSpace!==Pe||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==Xe||ne.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Qe.numPlanes||Ge.numIntersection!==Qe.numIntersection)||Ge.vertexAlphas!==$e||Ge.vertexTangents!==ft||Ge.morphTargets!==Je||Ge.morphNormals!==Ut||Ge.morphColors!==en||Ge.toneMapping!==Qt||Ge.morphTargetsCount!==Gt||!!Ge.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ge.__version=ne.version);let _n=Ge.currentProgram;vt===!0&&(_n=Da(ne,W,ie),j&&ne.isNodeMaterial&&j.onUpdateProgram(ne,_n,Ge));let $n=!1,yi=!1,ei=!1;const Vt=_n.getUniforms(),tn=Ge.uniforms;if(M.useProgram(_n.program)&&($n=!0,yi=!0,ei=!0),ne.id!==ge&&(ge=ne.id,yi=!0),Ge.needsLights){const zt=hs(L.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==zt&&(Ge.lightProbeGrid=zt,yi=!0)}if($n||be!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Vt.setValue(X,"projectionMatrix",A.projectionMatrix),Vt.setValue(X,"viewMatrix",A.matrixWorldInverse);const Oi=Vt.map.cameraPosition;Oi!==void 0&&Oi.setValue(X,_t.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,yi=!0,ei=!0)}if(Ge.needsLights&&(Ln.state.directionalShadowMap.length>0&&Vt.setValue(X,"directionalShadowMap",Ln.state.directionalShadowMap,fe),Ln.state.spotShadowMap.length>0&&Vt.setValue(X,"spotShadowMap",Ln.state.spotShadowMap,fe),Ln.state.pointShadowMap.length>0&&Vt.setValue(X,"pointShadowMap",Ln.state.pointShadowMap,fe)),ie.isSkinnedMesh){Vt.setOptional(X,ie,"bindMatrix"),Vt.setOptional(X,ie,"bindMatrixInverse");const zt=ie.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Vt.setValue(X,"boneTexture",zt.boneTexture,fe))}ie.isBatchedMesh&&(Vt.setOptional(X,ie,"batchingTexture"),Vt.setValue(X,"batchingTexture",ie._matricesTexture,fe),Vt.setOptional(X,ie,"batchingIdTexture"),Vt.setValue(X,"batchingIdTexture",ie._indirectTexture,fe),Vt.setOptional(X,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Vt.setValue(X,"batchingColorTexture",ie._colorsTexture,fe));const Ei=re.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&V.update(ie,re,_n),(yi||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,Vt.setValue(X,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(tn.envMapIntensity.value=W.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=FA()),yi){if(Vt.setValue(X,"toneMappingExposure",Y.toneMappingExposure),Ge.needsLights&&un(tn,ei),Fe&&ne.fog===!0&&Be.refreshFogUniforms(tn,Fe),Be.refreshMaterialUniforms(tn,ne,ye,Me,L.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const zt=Ge.lightProbeGrid;tn.probesSH.value=zt.texture,tn.probesMin.value.copy(zt.boundingBox.min),tn.probesMax.value.copy(zt.boundingBox.max),tn.probesResolution.value.copy(zt.resolution)}Qc.upload(X,Qi(Ge),tn,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Qc.upload(X,Qi(Ge),tn,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Vt.setValue(X,"center",ie.center),Vt.setValue(X,"modelViewMatrix",ie.modelViewMatrix),Vt.setValue(X,"normalMatrix",ie.normalMatrix),Vt.setValue(X,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const zt=ne.uniformsGroups;for(let Oi=0,Na=zt.length;Oi<Na;Oi++){const ps=zt[Oi];ve.update(ps,_n),ve.bind(ps,_n)}}return _n}function un(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function dl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,W,re){const ne=se.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=W,se.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const re=se.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){$=A,P=W,z=re;let ne=null,ie=!1,Fe=!1;if(A){const Pe=se.get(A);if(Pe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(X.FRAMEBUFFER,Pe.__webglFramebuffer),D.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest,M.viewport(D),M.scissor(Z),M.setScissorTest(Ee),ge=-1;return}else if(Pe.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Pe.__hasExternalTextures)fe.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Pe.__boundDepthTexture!==$e){if($e!==null&&se.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);const Xe=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?ne=Xe[W][re]:ne=Xe[W],ie=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?ne=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ne=Xe[re]:ne=Xe,D.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest}else D.copy(we).multiplyScalar(ye).floor(),Z.copy(at).multiplyScalar(ye).floor(),Ee=Ke;if(re!==0&&(ne=pe),M.bindFramebuffer(X.FRAMEBUFFER,ne)&&M.drawBuffers(A,ne),M.viewport(D),M.scissor(Z),M.setScissorTest(Ee),ie){const Pe=se.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,re)}else if(Fe){const Pe=W;for(let qe=0;qe<A.textures.length;qe++){const Xe=se.get(A.textures[qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qe,Xe.__webglTexture,re,Pe)}}else if(A!==null&&re!==0){const Pe=se.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pe.__webglTexture,re)}ge=-1},this.readRenderTargetPixels=function(A,W,re,ne,ie,Fe,ke,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){M.bindFramebuffer(X.FRAMEBUFFER,qe);try{const Xe=A.textures[Pe],$e=Xe.format,ft=Xe.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pe),!w.textureFormatReadable($e)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ft)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ne&&re>=0&&re<=A.height-ie&&X.readPixels(W,re,ne,ie,Ue.convert($e),Ue.convert(ft),Fe)}finally{const Xe=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,ne,ie,Fe,ke,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(W>=0&&W<=A.width-ne&&re>=0&&re<=A.height-ie){M.bindFramebuffer(X.FRAMEBUFFER,qe);const Xe=A.textures[Pe],$e=Xe.format,ft=Xe.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pe),!w.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Je),X.bufferData(X.PIXEL_PACK_BUFFER,Fe.byteLength,X.STREAM_READ),X.readPixels(W,re,ne,ie,Ue.convert($e),Ue.convert(ft),0);const Ut=$!==null?se.get($).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,Ut);const en=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await qM(X,en,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Je),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Fe),X.deleteBuffer(Je),X.deleteSync(en),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){const ne=Math.pow(2,-re),ie=Math.floor(A.image.width*ne),Fe=Math.floor(A.image.height*ne),ke=W!==null?W.x:0,Pe=W!==null?W.y:0;fe.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,ke,Pe,ie,Fe),M.unbindTexture()},this.copyTextureToTexture=function(A,W,re=null,ne=null,ie=0,Fe=0){let ke,Pe,qe,Xe,$e,ft,Je,Ut,en;const Qt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(re!==null)ke=re.max.x-re.min.x,Pe=re.max.y-re.min.y,qe=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,$e=re.min.y,ft=re.isBox3?re.min.z:0;else{const tn=Math.pow(2,-ie);ke=Math.floor(Qt.width*tn),Pe=Math.floor(Qt.height*tn),A.isDataArrayTexture?qe=Qt.depth:A.isData3DTexture?qe=Math.floor(Qt.depth*tn):qe=1,Xe=0,$e=0,ft=0}ne!==null?(Je=ne.x,Ut=ne.y,en=ne.z):(Je=0,Ut=0,en=0);const Ht=Ue.convert(W.format),Gt=Ue.convert(W.type);let Ge;W.isData3DTexture?(fe.setTexture3D(W,0),Ge=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(fe.setTexture2DArray(W,0),Ge=X.TEXTURE_2D_ARRAY):(fe.setTexture2D(W,0),Ge=X.TEXTURE_2D),M.activeTexture(X.TEXTURE0),M.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),M.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),M.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Ln=M.getParameter(X.UNPACK_ROW_LENGTH),vt=M.getParameter(X.UNPACK_IMAGE_HEIGHT),_n=M.getParameter(X.UNPACK_SKIP_PIXELS),$n=M.getParameter(X.UNPACK_SKIP_ROWS),yi=M.getParameter(X.UNPACK_SKIP_IMAGES);M.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),M.pixelStorei(X.UNPACK_SKIP_PIXELS,Xe),M.pixelStorei(X.UNPACK_SKIP_ROWS,$e),M.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const ei=A.isDataArrayTexture||A.isData3DTexture,Vt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const tn=se.get(A),Ei=se.get(W),zt=se.get(tn.__renderTarget),Oi=se.get(Ei.__renderTarget);M.bindFramebuffer(X.READ_FRAMEBUFFER,zt.__webglFramebuffer),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Na=0;Na<qe;Na++)ei&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ie,ft+Na),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,se.get(W).__webglTexture,Fe,en+Na)),X.blitFramebuffer(Xe,$e,ke,Pe,Je,Ut,ke,Pe,X.DEPTH_BUFFER_BIT,X.NEAREST);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||se.has(A)){const tn=se.get(A),Ei=se.get(W);M.bindFramebuffer(X.READ_FRAMEBUFFER,xe),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let zt=0;zt<qe;zt++)ei?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,tn.__webglTexture,ie,ft+zt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,tn.__webglTexture,ie),Vt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ei.__webglTexture,Fe,en+zt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ei.__webglTexture,Fe),ie!==0?X.blitFramebuffer(Xe,$e,ke,Pe,Je,Ut,ke,Pe,X.COLOR_BUFFER_BIT,X.NEAREST):Vt?X.copyTexSubImage3D(Ge,Fe,Je,Ut,en+zt,Xe,$e,ke,Pe):X.copyTexSubImage2D(Ge,Fe,Je,Ut,Xe,$e,ke,Pe);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Vt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ge,Fe,Je,Ut,en,ke,Pe,qe,Ht,Gt,Qt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,Fe,Je,Ut,en,ke,Pe,qe,Ht,Qt.data):X.texSubImage3D(Ge,Fe,Je,Ut,en,ke,Pe,qe,Ht,Gt,Qt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Fe,Je,Ut,ke,Pe,Ht,Gt,Qt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Fe,Je,Ut,Qt.width,Qt.height,Ht,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Fe,Je,Ut,ke,Pe,Ht,Gt,Qt);M.pixelStorei(X.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt),M.pixelStorei(X.UNPACK_SKIP_PIXELS,_n),M.pixelStorei(X.UNPACK_SKIP_ROWS,$n),M.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),Fe===0&&W.generateMipmaps&&X.generateMipmap(Ge),M.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){P=0,z=0,$=null,M.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const zr=th.verbs.map((r,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:r.verb,caption:r.caption,mood:i[e]??i[0]}}),jn=zr.length,Sa=2.95,il=6.9,sp=32,rp=4,op=5,Wh=2.05,HA=1.55,GA=Sa*.55,iv=.35,av=.85,VA=5.2,jc="flow-intro-hide-chrome";function Wv(r){return r<=72}function al(r){const e=Vn.clamp(r,0,1);return e*e*e*(e*(e*6-15)+10)}function kA(r,e,i){const s=e.split(/\s+/),l=[];let c="";for(const d of s){const h=c?`${c} ${d}`:d;r.measureText(h).width<=i?c=h:(c&&l.push(c),c=d)}return c&&l.push(c),l}function XA(r,e){const s=e<520?300:400,l=Math.round(s*r),c=Math.round(l*op/rp);return{W:l,H:c}}function eh(r){const e=Math.max(1,r),i=Math.max(1,jn*e*HA),s=Math.max(1,i/Math.max(1,jn-1));return{cardPx:i,titlePx:s,totalPx:i+s}}function qv(r,e){const i=r/Math.max(1,e),s=sp*Math.PI/180,l=2*il*Math.tan(s/2),c=l*i,d=Wh*rp/op,h=.992,m=h*l/Wh,p=h*c/d;return Vn.clamp(Math.min(m,p),.52,2.35)}function sv(r,e,i){const s=qv(r,e),l=r/Math.max(1,e),c=sp*Math.PI/180,m=.96*(2*il*Math.tan(c/2)*l)/Math.max(1e-6,s),p=Math.min(VA,m);return{w:p,h:p*i}}function WA(r,e){const i=r/Math.max(1,jn-1),s=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=s+.001?0:1-s/i}function qA(r,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,r*.34));return r<=i+.001?0:1-i/r}function YA(r,e){const i=Vn.clamp(e,0,.999);if(r<i)return{titleOp:1,lastCardOp:0};const s=Math.max(1e-6,1-i),l=al(Vn.clamp((r-i)/s,0,1));return{titleOp:1-l,lastCardOp:l}}function ZA(r,e,i){const s=jn-1;if(r<=0)return{opacity:e===0?1:0};if(r>=s-1e-5)return{opacity:e===s?1:0};const l=Math.floor(r);if(l>=s)return{opacity:e===s?1:0};if(e!==l&&e!==l+1)return{opacity:0};const c=r-l,d=Vn.clamp(i,0,.999);if(c<d)return{opacity:e===l?1:0};const h=al(Vn.clamp((c-d)/Math.max(1e-6,1-d),0,1));return{opacity:e===l?1-h:h}}function rv(r,e,i,s){const{W:l,H:c}=XA(i,s),d=document.createElement("canvas");d.width=l,d.height=c;const h=d.getContext("2d"),m=r.mood,p=h.createLinearGradient(0,0,l,c);p.addColorStop(0,m.mid),p.addColorStop(.55,m.bot),p.addColorStop(1,"#050508"),h.fillStyle=p,h.fillRect(0,0,l,c);const x=h.createRadialGradient(l*.78,c*.18,0,l*.78,c*.18,l*.5);x.addColorStop(0,`${m.top}33`),x.addColorStop(1,"transparent"),h.fillStyle=x,h.fillRect(0,0,l,c);const v=Math.round(28*i);let g=v;h.fillStyle="rgba(200,245,168,0.55)",h.font=`600 ${12*i}px "DM Mono", "JetBrains Mono", ui-monospace, monospace`,h.fillText(`0${e+1}  ·  THE LOOP`,v,g+12*i),g+=48*i,h.fillStyle="#c8f5a8",h.font=`800 ${Math.min(42*i,l*.12)}px "DM Mono", "JetBrains Mono", ui-monospace, monospace`,h.fillText(r.verb.toUpperCase(),v,g+28*i),g+=56*i,h.fillStyle="rgba(255,255,255,0.55)",h.font=`400 ${15*i}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;for(const T of kA(h,r.caption,l-v*2))h.fillText(T,v,g+14*i),g+=24*i;h.strokeStyle="rgba(200,245,168,0.22)",h.lineWidth=Math.max(2,2*i),h.strokeRect(Math.round(10*i),Math.round(10*i),l-Math.round(20*i),c-Math.round(20*i));const E=new Nv(d);return E.colorSpace=kn,E.minFilter=cs,E.generateMipmaps=!0,E}function ov(r,e){const i=e<520,s=Math.min(r*2.2,3),l=Math.round((i?980:1480)*s),c=Math.round((i?420:520)*s),d=document.createElement("canvas");d.width=l,d.height=c;const h=d.getContext("2d");h.clearRect(0,0,l,c),h.textAlign="center",h.textBaseline="middle";const m=l/2;h.fillStyle="rgba(200,245,168,0.55)",h.font=`700 ${Math.round((i?18:22)*s)}px "DM Mono", ui-monospace, monospace`,h.fillText("THE LOOP",m,c*.28);const p=["Discover","Copy","Supervise","Isolate"];h.font=`600 ${Math.round((i?36:48)*s)}px "Reckk Heading", "Spline Sans", ui-sans-serif, sans-serif`;const x=h.createLinearGradient(m-l*.3,c*.4,m+l*.3,c*.85);x.addColorStop(0,"#e8ffe0"),x.addColorStop(.5,"#c8f5a8"),x.addColorStop(1,"#f0e6a0"),h.fillStyle=x,p.forEach((g,E)=>{h.fillText(g,m,c*(.42+E*.13))});const v=new Nv(d);return v.colorSpace=kn,v.minFilter=bn,v.magFilter=bn,v.generateMipmaps=!1,v}function KA(){const r=document.getElementById("hero");r&&r.scrollIntoView({behavior:"auto",block:"start"}),requestAnimationFrame(()=>{const e=document.getElementById("hero"),i=e?Wv(e.getBoundingClientRect().top):!0;document.body.classList.toggle(jc,!i)})}function QA(){const r=Bn.useRef(null),e=Bn.useRef(null),i=Bn.useRef(null),s=Bn.useRef(null),l=Bn.useCallback(()=>{KA()},[]);return Bn.useEffect(()=>{const c=d=>{if(d.key!=="Escape")return;const h=document.getElementById("hero");h&&h.getBoundingClientRect().top>8&&(d.preventDefault(),l())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[l]),Bn.useEffect(()=>{const c=window.location.hash.replace(/^#/,"");c&&c!=="flow"&&c!=="hero"&&requestAnimationFrame(()=>{var d;(d=document.getElementById(c))==null||d.scrollIntoView({block:"start"})})},[]),Bn.useEffect(()=>{const c=i.current,d=r.current;if(!c||!d)return;const h=c,m=d;let p=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(jc);const we=s.current;we&&(we.style.height="0px");return}const v=Math.min(window.devicePixelRatio,2),g=Math.max(320,h.clientWidth||window.innerWidth),E=Math.max(1,h.clientHeight||window.innerHeight),T=[],U=[],y=[];zr.forEach((we,at)=>{const Ke=jn-1-at,tt=zr[Ke],lt=rv(tt,Ke,v,g);y.push(lt);const st=new au({map:lt,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,side:Ta});T.push(st);const mt=Wh,_t=mt*rp/op,wt=new Ni(new zs(_t,mt),st);wt.position.set(0,0,-at*Sa),U.push(wt)});const S=ov(v,g),B=new au({map:S,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:Vi}),H=S.image.height/S.image.width,{w:C,h:I}=sv(g,E,H),L=new Ni(new zs(C,I),B);L.position.set(0,0,-(jn-1)*Sa);const O=new Ey,b=new Si(sp,1,.08,120),N=new zA({antialias:!0,alpha:!1,powerPreference:"high-performance"});N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.outputColorSpace=kn,N.sortObjects=!0,h.appendChild(N.domElement);const Y=new $o;U.forEach(we=>Y.add(we)),Y.add(L),O.add(Y);const G=zr.map(we=>new At(we.mood.mid)),j=G[0].clone();O.background=j;const pe=0,xe=-(jn-1)*Sa,J=il,P=-.1*Sa,z=.1*Sa;function $(we,at){const Ke=we+il;return(J-Ke)/at}function ge(){const we=Math.max(1,window.innerHeight),{totalPx:at}=eh(we),Ke=Math.max(1,at),tt=pe+P,lt=xe+z-GA,mt=(tt-lt)/Ke,_t=$(tt,mt),wt=$(lt,mt);return{ih:we,totalPx:Ke,scrollToWorldFactor:mt,minScroll:_t,maxScroll:wt}}let{scrollToWorldFactor:be,minScroll:D,maxScroll:Z}=ge();const Ee=new At,Re=new At,Ie=new At;function ae(){var _t;const we=Math.max(320,h.clientWidth||window.innerWidth),at=Math.min(window.devicePixelRatio,2);y.forEach((wt,It)=>{wt.dispose();const Rt=jn-1-It,qt=rv(zr[Rt],Rt,at,we);y[It]=qt,T[It].map=qt,T[It].needsUpdate=!0}),(_t=B.map)==null||_t.dispose();const Ke=ov(at,we);B.map=Ke,B.needsUpdate=!0;const tt=Ke.image.height/Ke.image.width,lt=Math.max(1,h.clientHeight||window.innerHeight),{w:st,h:mt}=sv(we,lt,tt);L.geometry.dispose(),L.geometry=new zs(st,mt)}function Me(){const we=h.clientWidth,at=h.clientHeight;if(we<2||at<2)return;b.aspect=we/at,b.updateProjectionMatrix(),N.setSize(we,at,!1),ae();const Ke=ge();be=Ke.scrollToWorldFactor,D=Ke.minScroll,Z=Ke.maxScroll;const tt=Math.max(1,window.innerHeight),{totalPx:lt}=eh(tt),st=s.current;if(st){const mt=tt*iv,_t=Math.max(Math.ceil(lt+mt+tt*av+32),Math.ceil(tt*1.08));st.style.height=`${_t}px`}}Me();let ye=0;function He(){if(p)return;ye=requestAnimationFrame(He);const we=Math.max(1,window.innerHeight),{cardPx:at,titlePx:Ke,totalPx:tt}=eh(we),lt=m.getBoundingClientRect(),st=Math.max(1,m.offsetHeight-we),mt=Vn.clamp(-lt.top,0,st),_t=Math.min(mt,tt),wt=Math.max(1,tt),It=we*iv,Rt=al(Vn.clamp((mt-tt)/Math.max(1,It),0,1)),qt=Vn.mapLinear(at,0,wt,D,Z),X=h.clientWidth,Bt=h.clientHeight,gt=Math.max(1,Ke),w=_t<gt,M=w?Vn.clamp(_t/gt,0,1):0,Q=Math.max(0,_t-gt),se=Math.max(1,at),Te=Vn.clamp(Q/se,0,1)*(jn-1),Ne=qv(X,Bt),ue=document.getElementById("hero"),de=ue?ue.getBoundingClientRect().top:0,Ce=ue?Wv(de):!0;document.body.classList.toggle(jc,!Ce);let Be;w?Be=Vn.mapLinear(_t,0,gt,Z,qt):Be=Vn.mapLinear(_t,gt,wt,qt,D),Be=Vn.clamp(Be,D,Z);const Oe=WA(at,we),Le=qA(gt,we),Qe=YA(M,Le),je=jn-1;if(w)Ie.copy(G[0]);else{const De=Math.min(jn-2,Math.floor(Te)),ve=Math.min(De+1,jn-1),We=al(Te-De);Ee.copy(G[De]),Re.copy(G[ve]),Ie.lerpColors(Ee,Re,We)}O.background=j.copy(Ie);const rt=J-Be*be;b.position.set(0,0,rt),b.lookAt(0,0,rt-il),U.forEach((De,ve)=>{const We=-ve*Sa,Ve=jn-1-ve;let{opacity:Ft}=ZA(Te,Ve,Oe);w&&ve===je&&(Ft*=Qe.lastCardOp);let Dt=1,Un=0;!w&&Ve===jn-1&&Ft>.02&&Rt>0&&(Dt=1-.28*Rt,Un=-Sa*.32*Rt),De.position.set(0,0,We+Un),De.scale.setScalar(Ne*Dt);const Nn=T[ve];Nn.opacity=Ft,Nn.depthWrite=Ft>=.995,De.visible=Ft>.003}),L.position.set(0,0,-je*Sa),L.scale.setScalar(Ne),B.opacity=w?Qe.titleOp:0,B.depthWrite=B.opacity>=.995,L.visible=B.opacity>.003;const V=tt+It;let Ae=0;if(st>V&&mt>=V){const De=Math.max(1,st-V);Ae=al(Vn.clamp((mt-V)/De,0,1))}const he=s.current;if(he){const De=It+we*av+32,ve=Math.max(Math.ceil(tt+De),Math.ceil(we*1.08));he.style.height!==`${ve}px`&&(he.style.height=`${ve}px`)}const Ue=1-Ae*.96;e.current&&e.current.style.setProperty("--intro-ui-opacity",String(Ue)),N.domElement.style.opacity=String(1-Ae),N.render(O,b)}He(),window.addEventListener("resize",Me,{passive:!0});const nt=new ResizeObserver(Me);return nt.observe(h),()=>{var we;p=!0,cancelAnimationFrame(ye),document.body.classList.remove(jc),window.removeEventListener("resize",Me),nt.disconnect(),T.forEach(at=>{var Ke;(Ke=at.map)==null||Ke.dispose(),at.dispose()}),y.forEach(at=>at.dispose()),(we=B.map)==null||we.dispose(),B.dispose(),U.forEach(at=>at.geometry.dispose()),L.geometry.dispose(),N.dispose(),h.contains(N.domElement)&&h.removeChild(N.domElement)}},[]),q.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Discover, Copy, Supervise, Isolate",children:[q.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[q.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),q.jsxs("div",{className:"flow-intro__top",children:[q.jsx("p",{className:"flow-intro__eyebrow",children:"/// The loop"}),q.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:l,children:["Skip ",q.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),q.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:zr.map((c,d)=>q.jsxs("p",{children:["Step ",String(d+1).padStart(2,"0"),": ",c.verb,". ",c.caption]},c.verb))})]}),q.jsx("div",{ref:s,className:"flow-intro__spacer","aria-hidden":!0})]})}function Yv({label:r,status:e,live:i}){return q.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[q.jsx("span",{className:"stat-chip__label",children:r}),q.jsx("span",{className:"stat-chip__sep",children:"·"}),q.jsx("span",{className:"stat-chip__status",children:e})]})}function jA(){return q.jsx("section",{id:"how",className:"section flow",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:Xo.kicker}),q.jsx("h2",{className:"section-title flow__title",children:Xo.title}),q.jsx("div",{className:"flow__chips",children:Xo.chips.map(r=>q.jsx(Yv,{label:r.label,status:r.value},r.label))}),q.jsx("ol",{className:"flow__steps",children:Xo.steps.map(r=>q.jsxs("li",{className:"flow-step",children:[q.jsx("div",{className:"flow-step__index","aria-hidden":!0,children:String(r.n).padStart(2,"0")}),q.jsxs("div",{className:"flow-step__body",children:[q.jsxs("h3",{className:"flow-step__title",children:[r.title,q.jsxs("span",{className:"flow-step__feature",children:[" · ",r.feature]})]}),q.jsx("p",{className:"flow-step__text",children:r.body}),q.jsxs("p",{className:"flow-step__example",children:[q.jsxs("span",{className:"flow-step__chevron","aria-hidden":!0,children:[">"," "]}),r.example]})]})]},r.n))}),q.jsx("p",{className:"flow__outcome",children:Xo.outcome})]})})}const JA=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],$A=58,eR=35;function tR({fill:r="#C8F5A8",width:e=58,height:i=35,padding:s=10,"aria-hidden":l=!0,...c}){const d=[-s,-s,$A+s*2,eR+s*2].join(" ");return q.jsx("svg",{width:e,height:i,viewBox:d,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":l,...c,children:JA.map(h=>q.jsx("path",{d:h,fill:r},h.slice(0,24)))})}const nR={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function lp({size:r="md",showWordmark:e=!0,className:i="",brandName:s="Morpheum"}){const l=nR[r];return q.jsxs("span",{className:`brand-mark brand-mark--${r} ${i}`.trim(),children:[q.jsx(tR,{className:"brand-mark__icon",width:l.width,height:l.height,padding:0,fill:"var(--terminal-brand)"}),e?q.jsx("span",{className:"brand-mark__word",children:s}):null]})}function iR(){return q.jsx("footer",{className:"site-footer",children:q.jsxs("div",{className:"container site-footer__inner",children:[q.jsxs("div",{className:"site-footer__brand",children:[q.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:q.jsx(lp,{size:"sm"})}),q.jsx("p",{className:"site-footer__legal",children:oM.legal})]}),q.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Xc.map(r=>q.jsx("a",{href:r.href,children:r.label},r.id)),q.jsx("a",{href:En.docs,children:"Docs"}),q.jsx("a",{href:En.manifesto,children:"Manifesto"}),q.jsx("a",{href:En.discord,children:"Discord"}),q.jsx("a",{href:En.x,children:"X"})]})]})})}function aR(){const[r,e]=Er.headline;return q.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[q.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),q.jsx("div",{className:"hero__grid","aria-hidden":!0}),q.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),q.jsx("div",{className:"hero__grain","aria-hidden":!0}),q.jsx("div",{className:"hero__veil","aria-hidden":!0}),q.jsxs("div",{className:"container hero__content",children:[q.jsx(lp,{size:"hero"}),q.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[q.jsx("span",{className:"hero__line hero__line--lead",children:r}),q.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),q.jsx("p",{className:"hero__subline",children:Er.subline}),q.jsxs("div",{className:"hero__ctas",children:[q.jsx(kr,{href:Er.primaryCta.href,variant:"primary",children:Er.primaryCta.label}),q.jsx(kr,{href:Er.secondaryCta.href,variant:"secondary",children:Er.secondaryCta.label})]})]})]})}function sR(){return q.jsx("div",{className:"manifesto-strip",children:q.jsx("a",{className:"manifesto-strip__link",href:n_.href,children:n_.text})})}function rR(){const r=[...i_,...i_];return q.jsx("div",{className:"marquee","aria-label":"Live status",children:q.jsx("div",{className:"marquee__viewport",children:q.jsx("div",{className:"marquee__track",children:r.map((e,i)=>q.jsx(Yv,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function oR(){return q.jsx("section",{id:"personas",className:"section personas",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:Md.kicker}),q.jsx("h2",{className:"section-title personas__title",children:Md.title}),q.jsx("div",{className:"personas__grid",children:Md.items.map(r=>q.jsxs("article",{className:`persona-card persona-card--${r.weight}`,children:[q.jsx("h3",{className:"persona-card__title",children:r.title}),q.jsx("ol",{className:"persona-card__steps",children:r.steps.map(e=>q.jsxs("li",{children:[q.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),q.jsx(kr,{href:r.cta.href,variant:"ghost",className:"persona-card__cta",children:r.cta.label})]},r.title))})]})})}function lR(){const[r,e]=Bn.useState(!1),[i,s]=Bn.useState(!1),[l,c]=Bn.useState("");return Bn.useEffect(()=>{const d=()=>e(window.scrollY>24);return d(),window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),Bn.useEffect(()=>{const d=Xc.map(m=>m.id),h=new IntersectionObserver(m=>{var x;const p=m.filter(v=>v.isIntersecting).sort((v,g)=>g.intersectionRatio-v.intersectionRatio);(x=p[0])!=null&&x.target.id&&c(p[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return d.forEach(m=>{const p=document.getElementById(m);p&&h.observe(p)}),()=>h.disconnect()},[]),Bn.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),q.jsxs("header",{className:`sticky-header ${r?"sticky-header--solid":""}`,children:[q.jsxs("div",{className:"sticky-header__inner",children:[q.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:q.jsx(lp,{size:"sm",brandName:"Morpheum"})}),q.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Xc.map(d=>q.jsx("a",{href:d.href,className:`sticky-header__link ${l===d.id?"is-active":""}`,children:d.label},d.id))}),q.jsxs("div",{className:"sticky-header__actions",children:[q.jsx("a",{className:"sticky-header__docs",href:En.docs,children:"Docs"}),q.jsx(kr,{href:En.app,variant:"primary",className:"sticky-header__launch",children:"Launch app"}),q.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>s(d=>!d),children:[q.jsx("span",{}),q.jsx("span",{}),q.jsx("span",{})]})]})]}),q.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:q.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Xc.map(d=>q.jsx("a",{href:d.href,onClick:()=>s(!1),className:l===d.id?"is-active":"",children:d.label},d.id)),q.jsx("a",{href:En.docs,onClick:()=>s(!1),children:"Docs"})]})})]})}function cR(){return q.jsx("section",{className:"thesis section","aria-label":"Thesis",children:q.jsxs("div",{className:"container thesis__inner",children:[q.jsx("p",{className:"section-kicker",children:"Two bad choices → Morpheum"}),q.jsx("div",{className:"thesis__choices",children:Sd.badChoices.map(r=>q.jsxs("div",{className:"thesis__choice",children:[q.jsx("p",{className:"thesis__choice-title",children:r.title}),q.jsxs("p",{className:"thesis__choice-detail",children:[q.jsx("span",{"aria-hidden":!0,children:"> "}),r.detail]})]},r.title))}),q.jsx("p",{className:"thesis__payoff",children:Sd.payoff}),q.jsx("p",{className:"thesis__close",children:Sd.close})]})})}function uR(){return q.jsxs("div",{className:"page",children:[q.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),q.jsx(sR,{}),q.jsx(lR,{}),q.jsxs("main",{className:"page__main",children:[q.jsx(QA,{}),q.jsx(aR,{}),q.jsx(cR,{}),q.jsx(rR,{}),q.jsx(cM,{}),q.jsx(oR,{}),q.jsx(jA,{}),q.jsx(fM,{}),q.jsx(lM,{})]}),q.jsx(iR,{})]})}sM.createRoot(document.getElementById("root")).render(q.jsx(Bn.StrictMode,{children:q.jsx(uR,{})}));
