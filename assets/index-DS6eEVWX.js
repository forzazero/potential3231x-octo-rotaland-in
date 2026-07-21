(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Od={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function ly(){if(E_)return Sl;E_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Sl.Fragment=e,Sl.jsx=i,Sl.jsxs=i,Sl}var b_;function cy(){return b_||(b_=1,Od.exports=ly()),Od.exports}var D=cy(),Pd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function uy(){if(T_)return ut;T_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(I,Q,Me){this.props=I,this.context=Q,this.refs=y,this.updater=Me||E}M.prototype.isReactComponent={},M.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=M.prototype;function z(I,Q,Me){this.props=I,this.context=Q,this.refs=y,this.updater=Me||E}var C=z.prototype=new P;C.constructor=z,w(C,M.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,Q,Me){var Ae=Me.ref;return{$$typeof:a,type:I,key:Q,ref:Ae!==void 0?Ae:null,props:Me}}function Y(I,Q){return N(I.type,Q,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function Z(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Me){return Q[Me]})}var pe=/\/+/g;function ce(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?Z(""+I.key):Q.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,Q,Me,Ae,ze){var ee=typeof I;(ee==="undefined"||ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(ee){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case a:case e:xe=!0;break;case g:return xe=I._init,B(xe(I._payload),Q,Me,Ae,ze)}}if(xe)return ze=ze(I),xe=Ae===""?"."+ce(I,0):Ae,O(ze)?(Me="",xe!=null&&(Me=xe.replace(pe,"$&/")+"/"),B(ze,Q,Me,"",function(st){return st})):ze!=null&&(V(ze)&&(ze=Y(ze,Me+(ze.key==null||I&&I.key===ze.key?"":(""+ze.key).replace(pe,"$&/")+"/")+xe)),Q.push(ze)),1;xe=0;var Ee=Ae===""?".":Ae+":";if(O(I))for(var Xe=0;Xe<I.length;Xe++)Ae=I[Xe],ee=Ee+ce(Ae,Xe),xe+=B(Ae,Q,Me,ee,ze);else if(Xe=S(I),typeof Xe=="function")for(I=Xe.call(I),Xe=0;!(Ae=I.next()).done;)Ae=Ae.value,ee=Ee+ce(Ae,Xe++),xe+=B(Ae,Q,Me,ee,ze);else if(ee==="object"){if(typeof I.then=="function")return B(q(I),Q,Me,Ae,ze);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return xe}function H(I,Q,Me){if(I==null)return I;var Ae=[],ze=0;return B(I,Ae,"","",function(ee){return Q.call(Me,ee,ze++)}),Ae}function te(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Me){(I._status===0||I._status===-1)&&(I._status=1,I._result=Me)},function(Me){(I._status===0||I._status===-1)&&(I._status=2,I._result=Me)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var ge=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:H,forEach:function(I,Q,Me){H(I,function(){Q.apply(this,arguments)},Me)},count:function(I){var Q=0;return H(I,function(){Q++}),Q},toArray:function(I){return H(I,function(Q){return Q})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ut.Activity=_,ut.Children=Se,ut.Component=M,ut.Fragment=i,ut.Profiler=o,ut.PureComponent=z,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ut.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},ut.cache=function(I){return function(){return I.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(I,Q,Me){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ae=w({},I.props),ze=I.key;if(Q!=null)for(ee in Q.key!==void 0&&(ze=""+Q.key),Q)!T.call(Q,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&Q.ref===void 0||(Ae[ee]=Q[ee]);var ee=arguments.length-2;if(ee===1)Ae.children=Me;else if(1<ee){for(var xe=Array(ee),Ee=0;Ee<ee;Ee++)xe[Ee]=arguments[Ee+2];Ae.children=xe}return N(I.type,ze,Ae)},ut.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ut.createElement=function(I,Q,Me){var Ae,ze={},ee=null;if(Q!=null)for(Ae in Q.key!==void 0&&(ee=""+Q.key),Q)T.call(Q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(ze[Ae]=Q[Ae]);var xe=arguments.length-2;if(xe===1)ze.children=Me;else if(1<xe){for(var Ee=Array(xe),Xe=0;Xe<xe;Xe++)Ee[Xe]=arguments[Xe+2];ze.children=Ee}if(I&&I.defaultProps)for(Ae in xe=I.defaultProps,xe)ze[Ae]===void 0&&(ze[Ae]=xe[Ae]);return N(I,ee,ze)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(I){return{$$typeof:p,render:I}},ut.isValidElement=V,ut.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:te}},ut.memo=function(I,Q){return{$$typeof:d,type:I,compare:Q===void 0?null:Q}},ut.startTransition=function(I){var Q=F.T,Me={};F.T=Me;try{var Ae=I(),ze=F.S;ze!==null&&ze(Me,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,ge)}catch(ee){ge(ee)}finally{Q!==null&&Me.types!==null&&(Q.types=Me.types),F.T=Q}},ut.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ut.use=function(I){return F.H.use(I)},ut.useActionState=function(I,Q,Me){return F.H.useActionState(I,Q,Me)},ut.useCallback=function(I,Q){return F.H.useCallback(I,Q)},ut.useContext=function(I){return F.H.useContext(I)},ut.useDebugValue=function(){},ut.useDeferredValue=function(I,Q){return F.H.useDeferredValue(I,Q)},ut.useEffect=function(I,Q){return F.H.useEffect(I,Q)},ut.useEffectEvent=function(I){return F.H.useEffectEvent(I)},ut.useId=function(){return F.H.useId()},ut.useImperativeHandle=function(I,Q,Me){return F.H.useImperativeHandle(I,Q,Me)},ut.useInsertionEffect=function(I,Q){return F.H.useInsertionEffect(I,Q)},ut.useLayoutEffect=function(I,Q){return F.H.useLayoutEffect(I,Q)},ut.useMemo=function(I,Q){return F.H.useMemo(I,Q)},ut.useOptimistic=function(I,Q){return F.H.useOptimistic(I,Q)},ut.useReducer=function(I,Q,Me){return F.H.useReducer(I,Q,Me)},ut.useRef=function(I){return F.H.useRef(I)},ut.useState=function(I){return F.H.useState(I)},ut.useSyncExternalStore=function(I,Q,Me){return F.H.useSyncExternalStore(I,Q,Me)},ut.useTransition=function(){return F.H.useTransition()},ut.version="19.2.7",ut}var A_;function yp(){return A_||(A_=1,Pd.exports=uy()),Pd.exports}var We=yp(),Id={exports:{}},Ml={},Fd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function fy(){return R_||(R_=1,(function(a){function e(B,H){var te=B.length;B.push(H);e:for(;0<te;){var ge=te-1>>>1,Se=B[ge];if(0<o(Se,H))B[ge]=H,B[te]=Se,te=ge;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],te=B.pop();if(te!==H){B[0]=te;e:for(var ge=0,Se=B.length,I=Se>>>1;ge<I;){var Q=2*(ge+1)-1,Me=B[Q],Ae=Q+1,ze=B[Ae];if(0>o(Me,te))Ae<Se&&0>o(ze,Me)?(B[ge]=ze,B[Ae]=te,ge=Ae):(B[ge]=Me,B[Q]=te,ge=Q);else if(Ae<Se&&0>o(ze,te))B[ge]=ze,B[Ae]=te,ge=Ae;else break e}}return H}function o(B,H){var te=B.sortIndex-H.sortIndex;return te!==0?te:B.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,p=u.now();a.unstable_now=function(){return u.now()-p}}var m=[],d=[],g=1,_=null,v=3,S=!1,E=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=B)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function O(B){if(w=!1,C(B),!E)if(i(m)!==null)E=!0,L||(L=!0,Z());else{var H=i(d);H!==null&&q(O,H.startTime-B)}}var L=!1,F=-1,T=5,N=-1;function Y(){return y?!0:!(a.unstable_now()-N<T)}function V(){if(y=!1,L){var B=a.unstable_now();N=B;var H=!0;try{e:{E=!1,w&&(w=!1,P(F),F=-1),S=!0;var te=v;try{t:{for(C(B),_=i(m);_!==null&&!(_.expirationTime>B&&Y());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,v=_.priorityLevel;var Se=ge(_.expirationTime<=B);if(B=a.unstable_now(),typeof Se=="function"){_.callback=Se,C(B),H=!0;break t}_===i(m)&&r(m),C(B)}else r(m);_=i(m)}if(_!==null)H=!0;else{var I=i(d);I!==null&&q(O,I.startTime-B),H=!1}}break e}finally{_=null,v=te,S=!1}H=void 0}}finally{H?Z():L=!1}}}var Z;if(typeof z=="function")Z=function(){z(V)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ce=pe.port2;pe.port1.onmessage=V,Z=function(){ce.postMessage(null)}}else Z=function(){M(V,0)};function q(B,H){F=M(function(){B(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(B){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var te=v;v=H;try{return B()}finally{v=te}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=v;v=B;try{return H()}finally{v=te}},a.unstable_scheduleCallback=function(B,H,te){var ge=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ge+te:ge):te=ge,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,B={id:g++,callback:H,priorityLevel:B,startTime:te,expirationTime:Se,sortIndex:-1},te>ge?(B.sortIndex=te,e(d,B),i(m)===null&&B===i(d)&&(w?(P(F),F=-1):w=!0,q(O,te-ge))):(B.sortIndex=Se,e(m,B),E||S||(E=!0,L||(L=!0,Z()))),B},a.unstable_shouldYield=Y,a.unstable_wrapCallback=function(B){var H=v;return function(){var te=v;v=H;try{return B.apply(this,arguments)}finally{v=te}}}})(Bd)),Bd}var C_;function dy(){return C_||(C_=1,Fd.exports=fy()),Fd.exports}var zd={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function hy(){if(w_)return $n;w_=1;var a=yp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,$n.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},$n.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},$n.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},$n.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},$n.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},$n.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},$n.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},$n.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},$n.requestFormReset=function(m){r.d.r(m)},$n.unstable_batchedUpdates=function(m,d){return m(d)},$n.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},$n.useFormStatus=function(){return u.H.useHostTransitionStatus()},$n.version="19.2.7",$n}var D_;function sx(){if(D_)return zd.exports;D_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),zd.exports=hy(),zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function py(){if(L_)return Ml;L_=1;var a=dy(),e=yp(),i=sx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),n;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var x=!1,R=f.child;R;){if(R===s){x=!0,s=f,l=h;break}if(R===l){x=!0,l=f,s=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===s){x=!0,s=h,l=f;break}if(R===l){x=!0,l=h,s=f;break}R=R.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ge=[],Se=-1;function I(t){return{current:t}}function Q(t){0>Se||(t.current=ge[Se],ge[Se]=null,Se--)}function Me(t,n){Se++,ge[Se]=t.current,t.current=n}var Ae=I(null),ze=I(null),ee=I(null),xe=I(null);function Ee(t,n){switch(Me(ee,n),Me(ze,t),Me(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yg(n),t=qg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ae),Me(Ae,t)}function Xe(){Q(Ae),Q(ze),Q(ee)}function st(t){t.memoizedState!==null&&Me(xe,t);var n=Ae.current,s=qg(n,t.type);n!==s&&(Me(ze,t),Me(Ae,s))}function et(t){ze.current===t&&(Q(Ae),Q(ze)),xe.current===t&&(Q(xe),gl._currentValue=te)}var Zt,ht;function vt(t){if(Zt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+ht}var xt=!1;function dt(t,n){if(!t||xt)return"";xt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var le=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){le=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){le=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var G=x.split(`
`),oe=R.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===oe.length)for(l=G.length-1,f=oe.length-1;1<=l&&0<=f&&G[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==oe[f]){var _e=`
`+G[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{xt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function rn(t){try{var n="",s=null;do n+=Kt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var on=Object.prototype.hasOwnProperty,ln=a.unstable_scheduleCallback,kt=a.unstable_cancelCallback,Xt=a.unstable_shouldYield,K=a.unstable_requestPaint,zt=a.unstable_now,wt=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,j=a.unstable_NormalPriority,se=a.unstable_LowPriority,fe=a.unstable_IdlePriority,Re=a.log,De=a.unstable_setDisableYieldValue,ue=null,he=null;function Le(t){if(typeof Re=="function"&&De(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(ue,t)}catch{}}var He=Math.clz32?Math.clz32:nt,Pe=Math.log,Ie=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(Pe(t)/Ie|0)|0}var tt=256,ot=262144,W=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?f=Ne(l):(x&=R,x!==0?f=Ne(x):s||(s=R&~t,s!==0&&(f=Ne(s))))):(R=l&~h,R!==0?f=Ne(R):x!==0?f=Ne(x):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:n!==0&&n!==f&&(n&h)===0&&(h=f&-f,s=n&-n,h>=s||h===32&&(s&4194048)!==0)?n:f}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ze(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,s,l,f,h){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,oe=t.hiddenUpdates;for(s=x&~s;0<s;){var _e=31-He(s),ye=1<<_e;R[_e]=0,G[_e]=-1;var le=oe[_e];if(le!==null)for(oe[_e]=null,_e=0;_e<le.length;_e++){var de=le[_e];de!==null&&(de.lane&=-536870913)}s&=~ye}l!==0&&Dt(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(x&~n))}function Dt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Hn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Jn(t,n){var s=n&-n;return s=(s&42)!==0?1:is(s),(s&(t.suspendedLanes|n))!==0?0:s}function is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function as(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ss(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:g_(t.type))}function wa(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var ii=Math.random().toString(36).slice(2),gn="__reactFiber$"+ii,An="__reactProps$"+ii,kn="__reactContainer$"+ii,ca="__reactEvents$"+ii,Vs="__reactListeners$"+ii,ks="__reactHandles$"+ii,ua="__reactResources$"+ii,Zi="__reactMarker$"+ii;function xi(t){delete t[gn],delete t[An],delete t[ca],delete t[Vs],delete t[ks]}function Li(t){var n=t[gn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[kn]||s[gn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=e_(t);t!==null;){if(s=t[gn])return s;t=e_(t)}return n}t=s,s=t.parentNode}return null}function Te(t){if(t=t[gn]||t[kn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Be(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ke(t){var n=t[ua];return n||(n=t[ua]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function it(t){t[Zi]=!0}var Wt=new Set,A={};function k(t,n){ie(t,n),ie(t+"Capture",n)}function ie(t,n){for(A[t]=n,t=0;t<n.length;t++)Wt.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},Oe={};function Fe(t){return on.call(Oe,t)?!0:on.call($,t)?!1:ne.test(t)?Oe[t]=!0:($[t]=!0,!1)}function we(t,n,s){if(Fe(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function qe(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ge(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,h.call(this,x)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=ct(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=ct(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function Ot(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,s,l,f,h,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?gt(t,x,Je(n)):s!=null?gt(t,x,Je(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Rn(t,n,s,l,f,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){At(t);return}s=s!=null?""+Je(s):"",n=n!=null?""+Je(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),At(t)}function gt(t,n,s){n==="number"&&Ht(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function sn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Je(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function _n(t,n,s){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Je(s):""}function Si(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Je(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),At(t)}function ai(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Gt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function In(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&cn(t,f,l)}else for(var h in n)n.hasOwnProperty(h)&&cn(t,h,n[h])}function Pt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(t){return fi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Tr=null;function Ar(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fa=null,Ji=null;function Xs(t){var n=Te(t);if(n&&(t=n.stateNode)){var s=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[An]||null;if(!f)throw Error(r(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Qt(l)}break e;case"textarea":_n(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&sn(t,!!s.multiple,n,!1)}}}var Io=!1;function Gl(t,n,s){if(Io)return t(n,s);Io=!0;try{var l=t(n);return l}finally{if(Io=!1,(fa!==null||Ji!==null)&&(bc(),fa&&(n=fa,t=Ji,Ji=fa=null,Xs(n),t)))for(n=0;n<t.length;n++)Xs(t[n])}}function Rr(t,n){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=!1;if(Ui)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Ws=!1}var da=null,Cr=null,qs=null;function St(){if(qs)return qs;var t,n=Cr,s=n.length,l,f="value"in da?da.value:da.textContent,h=f.length;for(t=0;t<s&&n[t]===f[t];t++);var x=s-t;for(l=1;l<=x&&n[s-l]===f[h-l];l++);return qs=f.slice(t,1<l?1-l:void 0)}function Xn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function Wn(){return!1}function vn(t){function n(s,l,f,h,x){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?si:Wn,this.isPropagationStopped=Wn,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),n}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=vn(Cn),ha=_({},Cn,{view:0,detail:0}),rs=vn(ha),pa,js,os,Vl=_({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(pa=t.screenX-os.screenX,js=t.screenY-os.screenY):js=pa=0,os=t),pa)},movementY:function(t){return"movementY"in t?t.movementY:js}}),Zp=vn(Vl),oS=_({},Vl,{dataTransfer:0}),lS=vn(oS),cS=_({},ha,{relatedTarget:0}),Fu=vn(cS),uS=_({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=vn(uS),dS=_({},Cn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hS=vn(dS),pS=_({},Cn,{data:0}),Kp=vn(pS),mS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_S[t])?!!n[t]:!1}function Bu(){return vS}var xS=_({},ha,{key:function(t){if(t.key){var n=mS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Xn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SS=vn(xS),MS=_({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=vn(MS),yS=_({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),ES=vn(yS),bS=_({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=vn(bS),AS=_({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=vn(AS),CS=_({},Cn,{newState:0,oldState:0}),wS=vn(CS),DS=[9,13,27,32],zu=Ui&&"CompositionEvent"in window,Fo=null;Ui&&"documentMode"in document&&(Fo=document.documentMode);var LS=Ui&&"TextEvent"in window&&!Fo,Jp=Ui&&(!zu||Fo&&8<Fo&&11>=Fo),$p=" ",em=!1;function tm(t,n){switch(t){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function NS(t,n){switch(t){case"compositionend":return nm(n);case"keypress":return n.which!==32?null:(em=!0,$p);case"textInput":return t=n.data,t===$p&&em?null:t;default:return null}}function US(t,n){if(wr)return t==="compositionend"||!zu&&tm(t,n)?(t=St(),qs=Cr=da=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jp&&n.locale!=="ko"?null:n.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!OS[t.type]:n==="textarea"}function am(t,n,s,l){fa?Ji?Ji.push(l):Ji=[l]:fa=l,n=Lc(n,"onChange"),0<n.length&&(s=new $i("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Bo=null,zo=null;function PS(t){Hg(t,0)}function kl(t){var n=Be(t);if(Qt(n))return t}function sm(t,n){if(t==="change")return n}var rm=!1;if(Ui){var Hu;if(Ui){var Gu="oninput"in document;if(!Gu){var om=document.createElement("div");om.setAttribute("oninput","return;"),Gu=typeof om.oninput=="function"}Hu=Gu}else Hu=!1;rm=Hu&&(!document.documentMode||9<document.documentMode)}function lm(){Bo&&(Bo.detachEvent("onpropertychange",cm),zo=Bo=null)}function cm(t){if(t.propertyName==="value"&&kl(zo)){var n=[];am(n,zo,t,Ar(t)),Gl(PS,n)}}function IS(t,n,s){t==="focusin"?(lm(),Bo=n,zo=s,Bo.attachEvent("onpropertychange",cm)):t==="focusout"&&lm()}function FS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(zo)}function BS(t,n){if(t==="click")return kl(n)}function zS(t,n){if(t==="input"||t==="change")return kl(n)}function HS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Mi=typeof Object.is=="function"?Object.is:HS;function Ho(t,n){if(Mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!on.call(n,f)||!Mi(t[f],n[f]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,n){var s=um(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=um(s)}}function dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function hm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ht(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Ht(t.document)}return n}function Vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var GS=Ui&&"documentMode"in document&&11>=document.documentMode,Dr=null,ku=null,Go=null,Xu=!1;function pm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xu||Dr==null||Dr!==Ht(l)||(l=Dr,"selectionStart"in l&&Vu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=Lc(ku,"onSelect"),0<l.length&&(n=new $i("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Dr)))}function Zs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Lr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionrun:Zs("Transition","TransitionRun"),transitionstart:Zs("Transition","TransitionStart"),transitioncancel:Zs("Transition","TransitionCancel"),transitionend:Zs("Transition","TransitionEnd")},Wu={},mm={};Ui&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ks(t){if(Wu[t])return Wu[t];if(!Lr[t])return t;var n=Lr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in mm)return Wu[t]=n[s];return t}var gm=Ks("animationend"),_m=Ks("animationiteration"),vm=Ks("animationstart"),VS=Ks("transitionrun"),kS=Ks("transitionstart"),XS=Ks("transitioncancel"),xm=Ks("transitionend"),Sm=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function ea(t,n){Sm.set(t,n),k(n,[t])}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Oi=[],Nr=0,qu=0;function Wl(){for(var t=Nr,n=qu=Nr=0;n<t;){var s=Oi[n];Oi[n++]=null;var l=Oi[n];Oi[n++]=null;var f=Oi[n];Oi[n++]=null;var h=Oi[n];if(Oi[n++]=null,l!==null&&f!==null){var x=l.pending;x===null?f.next=f:(f.next=x.next,x.next=f),l.pending=f}h!==0&&Mm(s,f,h)}}function Yl(t,n,s,l){Oi[Nr++]=t,Oi[Nr++]=n,Oi[Nr++]=s,Oi[Nr++]=l,qu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ju(t,n,s,l){return Yl(t,n,s,l),ql(t)}function Qs(t,n){return Yl(t,null,null,n),ql(t)}function Mm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&n!==null&&(f=31-He(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),h):null}function ql(t){if(50<cl)throw cl=0,ad=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function WS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,n,s,l){return new WS(t,n,s,l)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Da(t,n){var s=t.alternate;return s===null?(s=yi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ym(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jl(t,n,s,l,f,h){var x=0;if(l=t,typeof t=="function")Zu(t)&&(x=1);else if(typeof t=="string")x=KM(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=yi(31,s,n,f),t.elementType=N,t.lanes=h,t;case w:return Js(s.children,f,h,n);case y:x=8,f|=24;break;case M:return t=yi(12,s,n,f|2),t.elementType=M,t.lanes=h,t;case O:return t=yi(13,s,n,f),t.elementType=O,t.lanes=h,t;case L:return t=yi(19,s,n,f),t.elementType=L,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case P:x=9;break e;case C:x=11;break e;case F:x=14;break e;case T:x=16,l=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=yi(x,s,n,f),n.elementType=t,n.type=l,n.lanes=h,n}function Js(t,n,s,l){return t=yi(7,t,l,n),t.lanes=s,t}function Ku(t,n,s){return t=yi(6,t,null,n),t.lanes=s,t}function Em(t){var n=yi(18,null,null,0);return n.stateNode=t,n}function Qu(t,n,s){return n=yi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var bm=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var s=bm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:rn(n)},bm.set(t,n),n)}return{value:t,source:n,stack:rn(n)}}var Or=[],Pr=0,Zl=null,Vo=0,Ii=[],Fi=0,ls=null,ma=1,ga="";function La(t,n){Or[Pr++]=Vo,Or[Pr++]=Zl,Zl=t,Vo=n}function Tm(t,n,s){Ii[Fi++]=ma,Ii[Fi++]=ga,Ii[Fi++]=ls,ls=t;var l=ma;t=ga;var f=32-He(l)-1;l&=~(1<<f),s+=1;var h=32-He(n)+f;if(30<h){var x=f-f%5;h=(l&(1<<x)-1).toString(32),l>>=x,f-=x,ma=1<<32-He(n)+f|s<<f|l,ga=h+t}else ma=1<<h|s<<f|l,ga=t}function Ju(t){t.return!==null&&(La(t,1),Tm(t,1,0))}function $u(t){for(;t===Zl;)Zl=Or[--Pr],Or[Pr]=null,Vo=Or[--Pr],Or[Pr]=null;for(;t===ls;)ls=Ii[--Fi],Ii[Fi]=null,ga=Ii[--Fi],Ii[Fi]=null,ma=Ii[--Fi],Ii[Fi]=null}function Am(t,n){Ii[Fi++]=ma,Ii[Fi++]=ga,Ii[Fi++]=ls,ma=n.id,ga=n.overflow,ls=t}var Yn=null,un=null,Rt=!1,cs=null,Bi=!1,ef=Error(r(519));function us(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(Pi(n,t)),ef}function Rm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[gn]=t,n[An]=l,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<fl.length;s++)Et(fl[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Rn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Si(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Xg(n.textContent,s)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||us(t,!0)}function Cm(t){for(Yn=t.return;Yn;)switch(Yn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Yn=Yn.return}}function Ir(t){if(t!==Yn)return!1;if(!Rt)return Cm(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||xd(t.type,t.memoizedProps)),s=!s),s&&un&&us(t),Cm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=$g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));un=$g(t)}else n===27?(n=un,bs(t.type)?(t=bd,bd=null,un=t):un=n):un=Yn?Hi(t.stateNode.nextSibling):null;return!0}function $s(){un=Yn=null,Rt=!1}function tf(){var t=cs;return t!==null&&(mi===null?mi=t:mi.push.apply(mi,t),cs=null),t}function ko(t){cs===null?cs=[t]:cs.push(t)}var nf=I(null),er=null,Na=null;function fs(t,n,s){Me(nf,n._currentValue),n._currentValue=s}function Ua(t){t._currentValue=nf.current,Q(nf)}function af(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function sf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var x=f.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=f;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),af(h.return,s,t),l||(x=null);break e}h=R.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=s,h=x.alternate,h!==null&&(h.lanes|=s),af(x,s,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Fr(t,n,s,l){t=null;for(var f=n,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=f.type;Mi(f.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(f===xe.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&sf(n,t,s,l),n.flags|=262144}function Kl(t){for(t=t.firstContext;t!==null;){if(!Mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){er=t,Na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qn(t){return wm(er,t)}function Ql(t,n){return er===null&&tr(t),wm(t,n)}function wm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Na===null){if(t===null)throw Error(r(308));Na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Na=Na.next=n;return s}var YS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},qS=a.unstable_scheduleCallback,jS=a.unstable_NormalPriority,wn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new YS,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&qS(jS,function(){t.controller.abort()})}var Wo=null,of=0,Br=0,zr=null;function ZS(t,n){if(Wo===null){var s=Wo=[];of=0,Br=ud(),zr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return of++,n.then(Dm,Dm),n}function Dm(){if(--of===0&&Wo!==null){zr!==null&&(zr.status="fulfilled");var t=Wo;Wo=null,Br=0,zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function KS(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Lm=B.S;B.S=function(t,n){pg=zt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ZS(t,n),Lm!==null&&Lm(t,n)};var nr=I(null);function lf(){var t=nr.current;return t!==null?t:tn.pooledCache}function Jl(t,n){n===null?Me(nr,nr.current):Me(nr,n.pool)}function Nm(){var t=lf();return t===null?null:{parent:wn._currentValue,pool:t}}var Hr=Error(r(460)),cf=Error(r(474)),$l=Error(r(542)),ec={then:function(){}};function Um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Om(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Qi,Qi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Im(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Im(t),t}throw ar=n,Hr}}function ir(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ar=s,Hr):s}}var ar=null;function Pm(){if(ar===null)throw Error(r(459));var t=ar;return ar=null,t}function Im(t){if(t===Hr||t===$l)throw Error(r(483))}var Gr=null,Yo=0;function tc(t){var n=Yo;return Yo+=1,Gr===null&&(Gr=[]),Om(Gr,t,n)}function qo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nc(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){function n(J,X){if(t){var re=J.deletions;re===null?(J.deletions=[X],J.flags|=16):re.push(X)}}function s(J,X){if(!t)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function l(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function f(J,X){return J=Da(J,X),J.index=0,J.sibling=null,J}function h(J,X,re){return J.index=re,t?(re=J.alternate,re!==null?(re=re.index,re<X?(J.flags|=67108866,X):re):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function x(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,X,re,ve){return X===null||X.tag!==6?(X=Ku(re,J.mode,ve),X.return=J,X):(X=f(X,re),X.return=J,X)}function G(J,X,re,ve){var at=re.type;return at===w?_e(J,X,re.props.children,ve,re.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&ir(at)===X.type)?(X=f(X,re.props),qo(X,re),X.return=J,X):(X=jl(re.type,re.key,re.props,null,J.mode,ve),qo(X,re),X.return=J,X)}function oe(J,X,re,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Qu(re,J.mode,ve),X.return=J,X):(X=f(X,re.children||[]),X.return=J,X)}function _e(J,X,re,ve,at){return X===null||X.tag!==7?(X=Js(re,J.mode,ve,at),X.return=J,X):(X=f(X,re),X.return=J,X)}function ye(J,X,re){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ku(""+X,J.mode,re),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return re=jl(X.type,X.key,X.props,null,J.mode,re),qo(re,X),re.return=J,re;case E:return X=Qu(X,J.mode,re),X.return=J,X;case T:return X=ir(X),ye(J,X,re)}if(q(X)||Z(X))return X=Js(X,J.mode,re,null),X.return=J,X;if(typeof X.then=="function")return ye(J,tc(X),re);if(X.$$typeof===z)return ye(J,Ql(J,X),re);nc(J,X)}return null}function le(J,X,re,ve){var at=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return at!==null?null:R(J,X,""+re,ve);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case S:return re.key===at?G(J,X,re,ve):null;case E:return re.key===at?oe(J,X,re,ve):null;case T:return re=ir(re),le(J,X,re,ve)}if(q(re)||Z(re))return at!==null?null:_e(J,X,re,ve,null);if(typeof re.then=="function")return le(J,X,tc(re),ve);if(re.$$typeof===z)return le(J,X,Ql(J,re),ve);nc(J,re)}return null}function de(J,X,re,ve,at){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return J=J.get(re)||null,R(X,J,""+ve,at);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return J=J.get(ve.key===null?re:ve.key)||null,G(X,J,ve,at);case E:return J=J.get(ve.key===null?re:ve.key)||null,oe(X,J,ve,at);case T:return ve=ir(ve),de(J,X,re,ve,at)}if(q(ve)||Z(ve))return J=J.get(re)||null,_e(X,J,ve,at,null);if(typeof ve.then=="function")return de(J,X,re,tc(ve),at);if(ve.$$typeof===z)return de(J,X,re,Ql(X,ve),at);nc(X,ve)}return null}function je(J,X,re,ve){for(var at=null,It=null,$e=X,mt=X=0,Tt=null;$e!==null&&mt<re.length;mt++){$e.index>mt?(Tt=$e,$e=null):Tt=$e.sibling;var Ft=le(J,$e,re[mt],ve);if(Ft===null){$e===null&&($e=Tt);break}t&&$e&&Ft.alternate===null&&n(J,$e),X=h(Ft,X,mt),It===null?at=Ft:It.sibling=Ft,It=Ft,$e=Tt}if(mt===re.length)return s(J,$e),Rt&&La(J,mt),at;if($e===null){for(;mt<re.length;mt++)$e=ye(J,re[mt],ve),$e!==null&&(X=h($e,X,mt),It===null?at=$e:It.sibling=$e,It=$e);return Rt&&La(J,mt),at}for($e=l($e);mt<re.length;mt++)Tt=de($e,J,mt,re[mt],ve),Tt!==null&&(t&&Tt.alternate!==null&&$e.delete(Tt.key===null?mt:Tt.key),X=h(Tt,X,mt),It===null?at=Tt:It.sibling=Tt,It=Tt);return t&&$e.forEach(function(ws){return n(J,ws)}),Rt&&La(J,mt),at}function rt(J,X,re,ve){if(re==null)throw Error(r(151));for(var at=null,It=null,$e=X,mt=X=0,Tt=null,Ft=re.next();$e!==null&&!Ft.done;mt++,Ft=re.next()){$e.index>mt?(Tt=$e,$e=null):Tt=$e.sibling;var ws=le(J,$e,Ft.value,ve);if(ws===null){$e===null&&($e=Tt);break}t&&$e&&ws.alternate===null&&n(J,$e),X=h(ws,X,mt),It===null?at=ws:It.sibling=ws,It=ws,$e=Tt}if(Ft.done)return s(J,$e),Rt&&La(J,mt),at;if($e===null){for(;!Ft.done;mt++,Ft=re.next())Ft=ye(J,Ft.value,ve),Ft!==null&&(X=h(Ft,X,mt),It===null?at=Ft:It.sibling=Ft,It=Ft);return Rt&&La(J,mt),at}for($e=l($e);!Ft.done;mt++,Ft=re.next())Ft=de($e,J,mt,Ft.value,ve),Ft!==null&&(t&&Ft.alternate!==null&&$e.delete(Ft.key===null?mt:Ft.key),X=h(Ft,X,mt),It===null?at=Ft:It.sibling=Ft,It=Ft);return t&&$e.forEach(function(oy){return n(J,oy)}),Rt&&La(J,mt),at}function en(J,X,re,ve){if(typeof re=="object"&&re!==null&&re.type===w&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case S:e:{for(var at=re.key;X!==null;){if(X.key===at){if(at=re.type,at===w){if(X.tag===7){s(J,X.sibling),ve=f(X,re.props.children),ve.return=J,J=ve;break e}}else if(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&ir(at)===X.type){s(J,X.sibling),ve=f(X,re.props),qo(ve,re),ve.return=J,J=ve;break e}s(J,X);break}else n(J,X);X=X.sibling}re.type===w?(ve=Js(re.props.children,J.mode,ve,re.key),ve.return=J,J=ve):(ve=jl(re.type,re.key,re.props,null,J.mode,ve),qo(ve,re),ve.return=J,J=ve)}return x(J);case E:e:{for(at=re.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){s(J,X.sibling),ve=f(X,re.children||[]),ve.return=J,J=ve;break e}else{s(J,X);break}else n(J,X);X=X.sibling}ve=Qu(re,J.mode,ve),ve.return=J,J=ve}return x(J);case T:return re=ir(re),en(J,X,re,ve)}if(q(re))return je(J,X,re,ve);if(Z(re)){if(at=Z(re),typeof at!="function")throw Error(r(150));return re=at.call(re),rt(J,X,re,ve)}if(typeof re.then=="function")return en(J,X,tc(re),ve);if(re.$$typeof===z)return en(J,X,Ql(J,re),ve);nc(J,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,X!==null&&X.tag===6?(s(J,X.sibling),ve=f(X,re),ve.return=J,J=ve):(s(J,X),ve=Ku(re,J.mode,ve),ve.return=J,J=ve),x(J)):s(J,X)}return function(J,X,re,ve){try{Yo=0;var at=en(J,X,re,ve);return Gr=null,at}catch($e){if($e===Hr||$e===$l)throw $e;var It=yi(29,$e,null,J.mode);return It.lanes=ve,It.return=J,It}finally{}}}var sr=Fm(!0),Bm=Fm(!1),ds=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Vt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=ql(t),Mm(t,null,s),n}return Yl(t,l,n,s),ql(t)}function jo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Hn(t,s)}}function df(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=x:h=h.next=x,s=s.next}while(s!==null);h===null?f=h=n:h=h.next=n}else f=h=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var hf=!1;function Zo(){if(hf){var t=zr;if(t!==null)throw t}}function Ko(t,n,s,l){hf=!1;var f=t.updateQueue;ds=!1;var h=f.firstBaseUpdate,x=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var G=R,oe=G.next;G.next=null,x===null?h=oe:x.next=oe,x=G;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==x&&(R===null?_e.firstBaseUpdate=oe:R.next=oe,_e.lastBaseUpdate=G))}if(h!==null){var ye=f.baseState;x=0,_e=oe=G=null,R=h;do{var le=R.lane&-536870913,de=le!==R.lane;if(de?(bt&le)===le:(l&le)===le){le!==0&&le===Br&&(hf=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=t,rt=R;le=n;var en=s;switch(rt.tag){case 1:if(je=rt.payload,typeof je=="function"){ye=je.call(en,ye,le);break e}ye=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=rt.payload,le=typeof je=="function"?je.call(en,ye,le):je,le==null)break e;ye=_({},ye,le);break e;case 2:ds=!0}}le=R.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(oe=_e=de,G=ye):_e=_e.next=de,x|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;de=R,R=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);_e===null&&(G=ye),f.baseState=G,f.firstBaseUpdate=oe,f.lastBaseUpdate=_e,h===null&&(f.shared.lanes=0),xs|=x,t.lanes=x,t.memoizedState=ye}}function zm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Hm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)zm(s[t],n)}var Vr=I(null),ic=I(0);function Gm(t,n){t=Va,Me(ic,t),Me(Vr,n),Va=t|n.baseLanes}function pf(){Me(ic,Va),Me(Vr,Vr.current)}function mf(){Va=ic.current,Q(Vr),Q(ic)}var Ei=I(null),zi=null;function ms(t){var n=t.alternate;Me(En,En.current&1),Me(Ei,t),zi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(zi=t)}function gf(t){Me(En,En.current),Me(Ei,t),zi===null&&(zi=t)}function Vm(t){t.tag===22?(Me(En,En.current),Me(Ei,t),zi===null&&(zi=t)):gs()}function gs(){Me(En,En.current),Me(Ei,Ei.current)}function bi(t){Q(Ei),zi===t&&(zi=null),Q(En)}var En=I(0);function ac(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||yd(s)||Ed(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=0,pt=null,Jt=null,Dn=null,sc=!1,kr=!1,rr=!1,rc=0,Qo=0,Xr=null,QS=0;function xn(){throw Error(r(321))}function _f(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Mi(t[s],n[s]))return!1;return!0}function vf(t,n,s,l,f,h){return Oa=h,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?T0:Uf,rr=!1,h=s(l,f),rr=!1,kr&&(h=Xm(n,s,l,f)),km(t),h}function km(t){B.H=el;var n=Jt!==null&&Jt.next!==null;if(Oa=0,Dn=Jt=pt=null,sc=!1,Qo=0,Xr=null,n)throw Error(r(300));t===null||Ln||(t=t.dependencies,t!==null&&Kl(t)&&(Ln=!0))}function Xm(t,n,s,l){pt=t;var f=0;do{if(kr&&(Xr=null),Qo=0,kr=!1,25<=f)throw Error(r(301));if(f+=1,Dn=Jt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=A0,h=n(s,l)}while(kr);return h}function JS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Jo(n):n,t=t.useState()[0],(Jt!==null?Jt.memoizedState:null)!==t&&(pt.flags|=1024),n}function xf(){var t=rc!==0;return rc=0,t}function Sf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Mf(t){if(sc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sc=!1}Oa=0,Dn=Jt=pt=null,kr=!1,Qo=rc=0,Xr=null}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?pt.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function bn(){if(Jt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var n=Dn===null?pt.memoizedState:Dn.next;if(n!==null)Dn=n,Jt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Dn===null?pt.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(t){var n=Qo;return Qo+=1,Xr===null&&(Xr=[]),t=Om(Xr,t,n),n=pt,(Dn===null?n.memoizedState:Dn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?T0:Uf),t}function lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jo(t);if(t.$$typeof===z)return qn(t)}throw Error(r(438,String(t)))}function yf(t){var n=null,s=pt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=pt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=oc(),pt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=Y;return n.index++,s}function Pa(t,n){return typeof n=="function"?n(t):n}function cc(t){var n=bn();return Ef(n,Jt,t)}function Ef(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var x=f.next;f.next=h.next,h.next=x}n.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{n=f.next;var R=x=null,G=null,oe=n,_e=!1;do{var ye=oe.lane&-536870913;if(ye!==oe.lane?(bt&ye)===ye:(Oa&ye)===ye){var le=oe.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),ye===Br&&(_e=!0);else if((Oa&le)===le){oe=oe.next,le===Br&&(_e=!0);continue}else ye={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(R=G=ye,x=h):G=G.next=ye,pt.lanes|=le,xs|=le;ye=oe.action,rr&&s(h,ye),h=oe.hasEagerState?oe.eagerState:s(h,ye)}else le={lane:ye,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(R=G=le,x=h):G=G.next=le,pt.lanes|=ye,xs|=ye;oe=oe.next}while(oe!==null&&oe!==n);if(G===null?x=h:G.next=R,!Mi(h,t.memoizedState)&&(Ln=!0,_e&&(s=zr,s!==null)))throw s;t.memoizedState=h,t.baseState=x,t.baseQueue=G,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function bf(t){var n=bn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=n.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do h=t(h,x.action),x=x.next;while(x!==f);Mi(h,n.memoizedState)||(Ln=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),s.lastRenderedState=h}return[h,l]}function Wm(t,n,s){var l=pt,f=bn(),h=Rt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=n();var x=!Mi((Jt||f).memoizedState,s);if(x&&(f.memoizedState=s,Ln=!0),f=f.queue,Rf(jm.bind(null,l,f,t),[t]),f.getSnapshot!==n||x||Dn!==null&&Dn.memoizedState.tag&1){if(l.flags|=2048,Wr(9,{destroy:void 0},qm.bind(null,l,f,s,n),null),tn===null)throw Error(r(349));h||(Oa&127)!==0||Ym(l,n,s)}return s}function Ym(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=pt.updateQueue,n===null?(n=oc(),pt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function qm(t,n,s,l){n.value=s,n.getSnapshot=l,Zm(n)&&Km(t)}function jm(t,n,s){return s(function(){Zm(n)&&Km(t)})}function Zm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Mi(t,s)}catch{return!0}}function Km(t){var n=Qs(t,2);n!==null&&gi(n,t,2)}function Tf(t){var n=ri();if(typeof t=="function"){var s=t;if(t=s(),rr){Le(!0);try{s()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},n}function Qm(t,n,s,l){return t.baseState=s,Ef(t,Jt,typeof l=="function"?l:Pa)}function $S(t,n,s,l,f){if(dc(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};B.T!==null?s(!0):h.isTransition=!1,l(h),s=n.pending,s===null?(h.next=n.pending=h,Jm(n,h)):(h.next=s.next,n.pending=s.next=h)}}function Jm(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var h=B.T,x={};B.T=x;try{var R=s(f,l),G=B.S;G!==null&&G(x,R),$m(t,n,R)}catch(oe){Af(t,n,oe)}finally{h!==null&&x.types!==null&&(h.types=x.types),B.T=h}}else try{h=s(f,l),$m(t,n,h)}catch(oe){Af(t,n,oe)}}function $m(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){e0(t,n,l)},function(l){return Af(t,n,l)}):e0(t,n,s)}function e0(t,n,s){n.status="fulfilled",n.value=s,t0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Jm(t,s)))}function Af(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,t0(n),n=n.next;while(n!==l)}t.action=null}function t0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function n0(t,n){return n}function i0(t,n){if(Rt){var s=tn.formState;if(s!==null){e:{var l=pt;if(Rt){if(un){t:{for(var f=un,h=Bi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Hi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){un=Hi(f.nextSibling),l=f.data==="F!";break e}}us(l)}l=!1}l&&(n=s[0])}}return s=ri(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n0,lastRenderedState:n},s.queue=l,s=y0.bind(null,pt,l),l.dispatch=s,l=Tf(!1),h=Nf.bind(null,pt,!1,l.queue),l=ri(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=$S.bind(null,pt,f,h,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function a0(t){var n=bn();return s0(n,Jt,t)}function s0(t,n,s){if(n=Ef(t,n,n0)[0],t=cc(Pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Jo(n)}catch(x){throw x===Hr?$l:x}else l=n;n=bn();var f=n.queue,h=f.dispatch;return s!==n.memoizedState&&(pt.flags|=2048,Wr(9,{destroy:void 0},eM.bind(null,f,s),null)),[l,h,t]}function eM(t,n){t.action=n}function r0(t){var n=bn(),s=Jt;if(s!==null)return s0(n,s,t);bn(),n=n.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Wr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=pt.updateQueue,n===null&&(n=oc(),pt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function o0(){return bn().memoizedState}function uc(t,n,s,l){var f=ri();pt.flags|=t,f.memoizedState=Wr(1|n,{destroy:void 0},s,l===void 0?null:l)}function fc(t,n,s,l){var f=bn();l=l===void 0?null:l;var h=f.memoizedState.inst;Jt!==null&&l!==null&&_f(l,Jt.memoizedState.deps)?f.memoizedState=Wr(n,h,s,l):(pt.flags|=t,f.memoizedState=Wr(1|n,h,s,l))}function l0(t,n){uc(8390656,8,t,n)}function Rf(t,n){fc(2048,8,t,n)}function tM(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=oc(),pt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function c0(t){var n=bn().memoizedState;return tM({ref:n,nextImpl:t}),function(){if((Vt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function u0(t,n){return fc(4,2,t,n)}function f0(t,n){return fc(4,4,t,n)}function d0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function h0(t,n,s){s=s!=null?s.concat([t]):null,fc(4,4,d0.bind(null,n,t),s)}function Cf(){}function p0(t,n){var s=bn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&_f(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function m0(t,n){var s=bn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&_f(n,l[1]))return l[0];if(l=t(),rr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[l,n],l}function wf(t,n,s){return s===void 0||(Oa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=gg(),pt.lanes|=t,xs|=t,s)}function g0(t,n,s,l){return Mi(s,n)?s:Vr.current!==null?(t=wf(t,s,l),Mi(t,n)||(Ln=!0),t):(Oa&42)===0||(Oa&1073741824)!==0&&(bt&261930)===0?(Ln=!0,t.memoizedState=s):(t=gg(),pt.lanes|=t,xs|=t,n)}function _0(t,n,s,l,f){var h=H.p;H.p=h!==0&&8>h?h:8;var x=B.T,R={};B.T=R,Nf(t,!1,n,s);try{var G=f(),oe=B.S;if(oe!==null&&oe(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _e=KS(G,l);$o(t,n,_e,Ri(t))}else $o(t,n,l,Ri(t))}catch(ye){$o(t,n,{then:function(){},status:"rejected",reason:ye},Ri())}finally{H.p=h,x!==null&&R.types!==null&&(x.types=R.types),B.T=x}}function nM(){}function Df(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=v0(t).queue;_0(t,f,n,te,s===null?nM:function(){return x0(t),s(l)})}function v0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:te},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function x0(t){var n=v0(t);n.next===null&&(n=t.alternate.memoizedState),$o(t,n.next.queue,{},Ri())}function Lf(){return qn(gl)}function S0(){return bn().memoizedState}function M0(){return bn().memoizedState}function iM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ri();t=hs(s);var l=ps(n,t,s);l!==null&&(gi(l,n,s),jo(l,n,s)),n={cache:rf()},t.payload=n;return}n=n.return}}function aM(t,n,s){var l=Ri();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dc(t)?E0(n,s):(s=ju(t,n,s,l),s!==null&&(gi(s,t,l),b0(s,n,l)))}function y0(t,n,s){var l=Ri();$o(t,n,s,l)}function $o(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(dc(t))E0(n,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,R=h(x,s);if(f.hasEagerState=!0,f.eagerState=R,Mi(R,x))return Yl(t,n,f,0),tn===null&&Wl(),!1}catch{}finally{}if(s=ju(t,n,f,l),s!==null)return gi(s,t,l),b0(s,n,l),!0}return!1}function Nf(t,n,s,l){if(l={lane:2,revertLane:ud(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},dc(t)){if(n)throw Error(r(479))}else n=ju(t,s,l,2),n!==null&&gi(n,t,2)}function dc(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function E0(t,n){kr=sc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function b0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Hn(t,s)}}var el={readContext:qn,use:lc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};el.useEffectEvent=xn;var T0={readContext:qn,use:lc,useCallback:function(t,n){return ri().memoizedState=[t,n===void 0?null:n],t},useContext:qn,useEffect:l0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,uc(4194308,4,d0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return uc(4194308,4,t,n)},useInsertionEffect:function(t,n){uc(4,2,t,n)},useMemo:function(t,n){var s=ri();n=n===void 0?null:n;var l=t();if(rr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ri();if(s!==void 0){var f=s(n);if(rr){Le(!0);try{s(n)}finally{Le(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=aM.bind(null,pt,t),[l.memoizedState,t]},useRef:function(t){var n=ri();return t={current:t},n.memoizedState=t},useState:function(t){t=Tf(t);var n=t.queue,s=y0.bind(null,pt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Cf,useDeferredValue:function(t,n){var s=ri();return wf(s,t,n)},useTransition:function(){var t=Tf(!1);return t=_0.bind(null,pt,t.queue,!0,!1),ri().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=pt,f=ri();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),tn===null)throw Error(r(349));(bt&127)!==0||Ym(l,n,s)}f.memoizedState=s;var h={value:s,getSnapshot:n};return f.queue=h,l0(jm.bind(null,l,h,t),[t]),l.flags|=2048,Wr(9,{destroy:void 0},qm.bind(null,l,h,s,n),null),s},useId:function(){var t=ri(),n=tn.identifierPrefix;if(Rt){var s=ga,l=ma;s=(l&~(1<<32-He(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=rc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=QS++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lf,useFormState:i0,useActionState:i0,useOptimistic:function(t){var n=ri();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Nf.bind(null,pt,!0,s),s.dispatch=n,[t,n]},useMemoCache:yf,useCacheRefresh:function(){return ri().memoizedState=iM.bind(null,pt)},useEffectEvent:function(t){var n=ri(),s={impl:t};return n.memoizedState=s,function(){if((Vt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Uf={readContext:qn,use:lc,useCallback:p0,useContext:qn,useEffect:Rf,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:cc,useRef:o0,useState:function(){return cc(Pa)},useDebugValue:Cf,useDeferredValue:function(t,n){var s=bn();return g0(s,Jt.memoizedState,t,n)},useTransition:function(){var t=cc(Pa)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:Jo(t),n]},useSyncExternalStore:Wm,useId:S0,useHostTransitionStatus:Lf,useFormState:a0,useActionState:a0,useOptimistic:function(t,n){var s=bn();return Qm(s,Jt,t,n)},useMemoCache:yf,useCacheRefresh:M0};Uf.useEffectEvent=c0;var A0={readContext:qn,use:lc,useCallback:p0,useContext:qn,useEffect:Rf,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:bf,useRef:o0,useState:function(){return bf(Pa)},useDebugValue:Cf,useDeferredValue:function(t,n){var s=bn();return Jt===null?wf(s,t,n):g0(s,Jt.memoizedState,t,n)},useTransition:function(){var t=bf(Pa)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:Jo(t),n]},useSyncExternalStore:Wm,useId:S0,useHostTransitionStatus:Lf,useFormState:r0,useActionState:r0,useOptimistic:function(t,n){var s=bn();return Jt!==null?Qm(s,Jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:yf,useCacheRefresh:M0};A0.useEffectEvent=c0;function Of(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Pf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ri(),f=hs(l);f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(gi(n,t,l),jo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ri(),f=hs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(gi(n,t,l),jo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ri(),l=hs(s);l.tag=2,n!=null&&(l.callback=n),n=ps(t,l,s),n!==null&&(gi(n,t,s),jo(n,t,s))}};function R0(t,n,s,l,f,h,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,x):n.prototype&&n.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,h):!0}function C0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Pf.enqueueReplaceState(n,n.state,null)}function or(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function w0(t){Xl(t)}function D0(t){console.error(t)}function L0(t){Xl(t)}function hc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function N0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function If(t,n,s){return s=hs(s),s.tag=3,s.payload={element:null},s.callback=function(){hc(t,n)},s}function U0(t){return t=hs(t),t.tag=3,t}function O0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){N0(n,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){N0(n,s,l),typeof f!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function sM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Fr(n,s,f,!0),s=Ei.current,s!==null){switch(s.tag){case 31:case 13:return zi===null?Tc():s.alternate===null&&Sn===0&&(Sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===ec?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),od(t,l,f)),!1;case 22:return s.flags|=65536,l===ec?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),od(t,l,f)),!1}throw Error(r(435,s.tag))}return od(t,l,f),Tc(),!1}if(Rt)return n=Ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==ef&&(t=Error(r(422),{cause:l}),ko(Pi(t,s)))):(l!==ef&&(n=Error(r(423),{cause:l}),ko(Pi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Pi(l,s),f=If(t.stateNode,l,f),df(t,f),Sn!==4&&(Sn=2)),!1;var h=Error(r(520),{cause:l});if(h=Pi(h,s),ll===null?ll=[h]:ll.push(h),Sn!==4&&(Sn=2),n===null)return!0;l=Pi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=If(s.stateNode,l,t),df(s,t),!1;case 1:if(n=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ss===null||!Ss.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=U0(f),O0(f,t,s,l),df(s,f),!1}s=s.return}while(s!==null);return!1}var Ff=Error(r(461)),Ln=!1;function jn(t,n,s,l){n.child=t===null?Bm(n,null,s,l):sr(n,t.child,s,l)}function P0(t,n,s,l,f){s=s.render;var h=n.ref;if("ref"in l){var x={};for(var R in l)R!=="ref"&&(x[R]=l[R])}else x=l;return tr(n),l=vf(t,n,s,x,h,f),R=xf(),t!==null&&!Ln?(Sf(t,n,f),Ia(t,n,f)):(Rt&&R&&Ju(n),n.flags|=1,jn(t,n,l,f),n.child)}function I0(t,n,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Zu(h)&&h.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=h,F0(t,n,h,l,f)):(t=jl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Wf(t,f)){var x=h.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(x,l)&&t.ref===n.ref)return Ia(t,n,f)}return n.flags|=1,t=Da(h,l),t.ref=n.ref,t.return=n,n.child=t}function F0(t,n,s,l,f){if(t!==null){var h=t.memoizedProps;if(Ho(h,l)&&t.ref===n.ref)if(Ln=!1,n.pendingProps=l=h,Wf(t,f))(t.flags&131072)!==0&&(Ln=!0);else return n.lanes=t.lanes,Ia(t,n,f)}return Bf(t,n,s,l,f)}function B0(t,n,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,n.child=null;return z0(t,n,h,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(n,h!==null?h.cachePool:null),h!==null?Gm(n,h):pf(),Vm(n);else return l=n.lanes=536870912,z0(t,n,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Jl(n,h.cachePool),Gm(n,h),gs(),n.memoizedState=null):(t!==null&&Jl(n,null),pf(),gs());return jn(t,n,f,s),n.child}function tl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function z0(t,n,s,l,f){var h=lf();return h=h===null?null:{parent:wn._currentValue,pool:h},n.memoizedState={baseLanes:s,cachePool:h},t!==null&&Jl(n,null),pf(),Vm(n),t!==null&&Fr(t,n,l,!0),n.childLanes=f,null}function pc(t,n){return n=gc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function H0(t,n,s){return sr(n,t.child,null,s),t=pc(n,n.pendingProps),t.flags|=2,bi(n),n.memoizedState=null,t}function rM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=pc(n,l),n.lanes=536870912,tl(null,t);if(gf(n),(t=un)?(t=Jg(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=Em(t),s.return=n,n.child=s,Yn=n,un=null)):t=null,t===null)throw us(n);return n.lanes=536870912,null}return pc(n,l)}var h=t.memoizedState;if(h!==null){var x=h.dehydrated;if(gf(n),f)if(n.flags&256)n.flags&=-257,n=H0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ln||Fr(t,n,s,!1),f=(s&t.childLanes)!==0,Ln||f){if(l=tn,l!==null&&(x=Jn(l,s),x!==0&&x!==h.retryLane))throw h.retryLane=x,Qs(t,x),gi(l,t,x),Ff;Tc(),n=H0(t,n,s)}else t=h.treeContext,un=Hi(x.nextSibling),Yn=n,Rt=!0,cs=null,Bi=!1,t!==null&&Am(n,t),n=pc(n,l),n.flags|=4096;return n}return t=Da(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function mc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Bf(t,n,s,l,f){return tr(n),s=vf(t,n,s,l,void 0,f),l=xf(),t!==null&&!Ln?(Sf(t,n,f),Ia(t,n,f)):(Rt&&l&&Ju(n),n.flags|=1,jn(t,n,s,f),n.child)}function G0(t,n,s,l,f,h){return tr(n),n.updateQueue=null,s=Xm(n,l,s,f),km(t),l=xf(),t!==null&&!Ln?(Sf(t,n,h),Ia(t,n,h)):(Rt&&l&&Ju(n),n.flags|=1,jn(t,n,s,h),n.child)}function V0(t,n,s,l,f){if(tr(n),n.stateNode===null){var h=Ur,x=s.contextType;typeof x=="object"&&x!==null&&(h=qn(x)),h=new s(l,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Pf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=l,h.state=n.memoizedState,h.refs={},uf(n),x=s.contextType,h.context=typeof x=="object"&&x!==null?qn(x):Ur,h.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Of(n,s,x,l),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Pf.enqueueReplaceState(h,h.state,null),Ko(n,l,h,f),Zo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,G=or(s,R);h.props=G;var oe=h.context,_e=s.contextType;x=Ur,typeof _e=="object"&&_e!==null&&(x=qn(_e));var ye=s.getDerivedStateFromProps;_e=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||oe!==x)&&C0(n,h,l,x),ds=!1;var le=n.memoizedState;h.state=le,Ko(n,l,h,f),Zo(),oe=n.memoizedState,R||le!==oe||ds?(typeof ye=="function"&&(Of(n,s,ye,l),oe=n.memoizedState),(G=ds||R0(n,s,G,l,le,oe,x))?(_e||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=oe),h.props=l,h.state=oe,h.context=x,l=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{h=n.stateNode,ff(t,n),x=n.memoizedProps,_e=or(s,x),h.props=_e,ye=n.pendingProps,le=h.context,oe=s.contextType,G=Ur,typeof oe=="object"&&oe!==null&&(G=qn(oe)),R=s.getDerivedStateFromProps,(oe=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==ye||le!==G)&&C0(n,h,l,G),ds=!1,le=n.memoizedState,h.state=le,Ko(n,l,h,f),Zo();var de=n.memoizedState;x!==ye||le!==de||ds||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof R=="function"&&(Of(n,s,R,l),de=n.memoizedState),(_e=ds||R0(n,s,_e,l,le,de,G)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(oe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),h.props=l,h.state=de,h.context=G,l=_e):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return h=l,mc(t,n),l=(n.flags&128)!==0,h||l?(h=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&l?(n.child=sr(n,t.child,null,f),n.child=sr(n,null,s,f)):jn(t,n,s,f),n.memoizedState=h.state,t=n.child):t=Ia(t,n,f),t}function k0(t,n,s,l){return $s(),n.flags|=256,jn(t,n,s,l),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:Nm()}}function Gf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ai),t}function X0(t,n,s){var l=n.pendingProps,f=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=t!==null&&t.memoizedState===null?!1:(En.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?ms(n):gs(),(t=un)?(t=Jg(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=Em(t),s.return=n,n.child=s,Yn=n,un=null)):t=null,t===null)throw us(n);return Ed(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(gs(),f=n.mode,R=gc({mode:"hidden",children:R},f),l=Js(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=Hf(s),l.childLanes=Gf(t,x,s),n.memoizedState=zf,tl(null,l)):(ms(n),Vf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(ms(n),n.flags&=-257,n=kf(t,n,s)):n.memoizedState!==null?(gs(),n.child=t.child,n.flags|=128,n=null):(gs(),R=l.fallback,f=n.mode,l=gc({mode:"visible",children:l.children},f),R=Js(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,sr(n,t.child,null,s),l=n.child,l.memoizedState=Hf(s),l.childLanes=Gf(t,x,s),n.memoizedState=zf,n=tl(null,l));else if(ms(n),Ed(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var oe=x.dgst;x=oe,l=Error(r(419)),l.stack="",l.digest=x,ko({value:l,source:null,stack:null}),n=kf(t,n,s)}else if(Ln||Fr(t,n,s,!1),x=(s&t.childLanes)!==0,Ln||x){if(x=tn,x!==null&&(l=Jn(x,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Qs(t,l),gi(x,t,l),Ff;yd(R)||Tc(),n=kf(t,n,s)}else yd(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,un=Hi(R.nextSibling),Yn=n,Rt=!0,cs=null,Bi=!1,t!==null&&Am(n,t),n=Vf(n,l.children),n.flags|=4096);return n}return f?(gs(),R=l.fallback,f=n.mode,G=t.child,oe=G.sibling,l=Da(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,oe!==null?R=Da(oe,R):(R=Js(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,tl(null,l),l=n.child,R=t.child.memoizedState,R===null?R=Hf(s):(f=R.cachePool,f!==null?(G=wn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Nm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Gf(t,x,s),n.memoizedState=zf,tl(t.child,l)):(ms(n),s=t.child,t=s.sibling,s=Da(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function Vf(t,n){return n=gc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gc(t,n){return t=yi(22,t,null,n),t.lanes=0,t}function kf(t,n,s){return sr(n,t.child,null,s),t=Vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function W0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),af(t.return,n,s)}function Xf(t,n,s,l,f,h){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=f,x.treeForkCount=h)}function Y0(t,n,s){var l=n.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var x=En.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,Me(En,x),jn(t,n,l,s),l=Rt?Vo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&W0(t,s,n);else if(t.tag===19)W0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&ac(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Xf(n,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&ac(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Xf(n,!0,s,null,h,l);break;case"together":Xf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ia(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),xs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Fr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Da(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Da(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function oM(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),fs(n,wn,t.memoizedState.cache),$s();break;case 27:case 5:st(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:fs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ms(n),n.flags|=128,null):(s&n.child.childLanes)!==0?X0(t,n,s):(ms(n),t=Ia(t,n,s),t!==null?t.sibling:null);ms(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Fr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return Y0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Me(En,En.current),l)break;return null;case 22:return n.lanes=0,B0(t,n,s,n.pendingProps);case 24:fs(n,wn,t.memoizedState.cache)}return Ia(t,n,s)}function q0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ln=!0;else{if(!Wf(t,s)&&(n.flags&128)===0)return Ln=!1,oM(t,n,s);Ln=(t.flags&131072)!==0}else Ln=!1,Rt&&(n.flags&1048576)!==0&&Tm(n,Vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=ir(n.elementType),n.type=t,typeof t=="function")Zu(t)?(l=or(t,l),n.tag=1,n=V0(null,n,t,l,s)):(n.tag=0,n=Bf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=P0(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=I0(null,n,t,l,s);break e}}throw n=ce(t)||t,Error(r(306,n,""))}}return n;case 0:return Bf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=or(l,n.pendingProps),V0(t,n,l,f,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var h=n.memoizedState;f=h.element,ff(t,n),Ko(n,l,null,s);var x=n.memoizedState;if(l=x.cache,fs(n,wn,l),l!==h.cache&&sf(n,[wn],s,!0),Zo(),l=x.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=k0(t,n,l,s);break e}else if(l!==f){f=Pi(Error(r(424)),n),ko(f),n=k0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(un=Hi(t.firstChild),Yn=n,Rt=!0,cs=null,Bi=!0,s=Bm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if($s(),l===f){n=Ia(t,n,s);break e}jn(t,n,l,s)}n=n.child}return n;case 26:return mc(t,n),t===null?(s=a_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=Nc(ee.current).createElement(s),l[gn]=n,l[An]=t,Zn(l,s,t),it(l),n.stateNode=l):n.memoizedState=a_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Rt&&(l=n.stateNode=t_(n.type,n.pendingProps,ee.current),Yn=n,Bi=!0,f=un,bs(n.type)?(bd=f,un=Hi(l.firstChild)):un=f),jn(t,n,n.pendingProps.children,s),mc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=un)&&(l=FM(l,n.type,n.pendingProps,Bi),l!==null?(n.stateNode=l,Yn=n,un=Hi(l.firstChild),Bi=!1,f=!0):f=!1),f||us(n)),st(n),f=n.type,h=n.pendingProps,x=t!==null?t.memoizedProps:null,l=h.children,xd(f,h)?l=null:x!==null&&xd(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=vf(t,n,JS,null,null,s),gl._currentValue=f),mc(t,n),jn(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=un)&&(s=BM(s,n.pendingProps,Bi),s!==null?(n.stateNode=s,Yn=n,un=null,t=!0):t=!1),t||us(n)),null;case 13:return X0(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=sr(n,null,l,s):jn(t,n,l,s),n.child;case 11:return P0(t,n,n.type,n.pendingProps,s);case 7:return jn(t,n,n.pendingProps,s),n.child;case 8:return jn(t,n,n.pendingProps.children,s),n.child;case 12:return jn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,fs(n,n.type,l.value),jn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,tr(n),f=qn(f),l=l(f),n.flags|=1,jn(t,n,l,s),n.child;case 14:return I0(t,n,n.type,n.pendingProps,s);case 15:return F0(t,n,n.type,n.pendingProps,s);case 19:return Y0(t,n,s);case 31:return rM(t,n,s);case 22:return B0(t,n,s,n.pendingProps);case 24:return tr(n),l=qn(wn),t===null?(f=lf(),f===null&&(f=tn,h=rf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),n.memoizedState={parent:l,cache:f},uf(n),fs(n,wn,f)):((t.lanes&s)!==0&&(ff(t,n),Ko(n,null,null,s),Zo()),f=t.memoizedState,h=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),fs(n,wn,l)):(l=h.cache,fs(n,wn,l),l!==f.cache&&sf(n,[wn],s,!0))),jn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Fa(t){t.flags|=4}function Yf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Sg())t.flags|=8192;else throw ar=ec,cf}else t.flags&=-16777217}function j0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c_(n))if(Sg())t.flags|=8192;else throw ar=ec,cf}function _c(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,Zr|=n)}function nl(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function lM(t,n,s){var l=n.pendingProps;switch($u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(n),null;case 1:return fn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ua(wn),Xe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ir(n)?Fa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tf())),fn(n),null;case 26:var f=n.type,h=n.memoizedState;return t===null?(Fa(n),h!==null?(fn(n),j0(n,h)):(fn(n),Yf(n,f,null,l,s))):h?h!==t.memoizedState?(Fa(n),fn(n),j0(n,h)):(fn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Fa(n),fn(n),Yf(n,f,t,l,s)),null;case 27:if(et(n),s=ee.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Fa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return fn(n),null}t=Ae.current,Ir(n)?Rm(n):(t=t_(f,l,s),n.stateNode=t,Fa(n))}return fn(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Fa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return fn(n),null}if(h=Ae.current,Ir(n))Rm(n);else{var x=Nc(ee.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?x.createElement(f,{is:l.is}):x.createElement(f)}}h[gn]=n,h[An]=l;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;e:switch(Zn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Fa(n)}}return fn(n),Yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Fa(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ee.current,Ir(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Yn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Xg(t.nodeValue,s)),t||us(n,!0)}else t=Nc(t).createTextNode(l),t[gn]=n,n.stateNode=t}return fn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Ir(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),t=!1}else s=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(bi(n),n):(bi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return fn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ir(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),f=!1}else f=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(bi(n),n):(bi(n),null)}return bi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),_c(n,n.updateQueue),fn(n),null);case 4:return Xe(),t===null&&pd(n.stateNode.containerInfo),fn(n),null;case 10:return Ua(n.type),fn(n),null;case 19:if(Q(En),l=n.memoizedState,l===null)return fn(n),null;if(f=(n.flags&128)!==0,h=l.rendering,h===null)if(f)nl(l,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=ac(t),h!==null){for(n.flags|=128,nl(l,!1),t=h.updateQueue,n.updateQueue=t,_c(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)ym(s,t),s=s.sibling;return Me(En,En.current&1|2),Rt&&La(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&zt()>yc&&(n.flags|=128,f=!0,nl(l,!1),n.lanes=4194304)}else{if(!f)if(t=ac(h),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,_c(n,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Rt)return fn(n),null}else 2*zt()-l.renderingStartTime>yc&&s!==536870912&&(n.flags|=128,f=!0,nl(l,!1),n.lanes=4194304);l.isBackwards?(h.sibling=n.child,n.child=h):(t=l.last,t!==null?t.sibling=h:n.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=zt(),t.sibling=null,s=En.current,Me(En,f?s&1|2:s&1),Rt&&La(n,l.treeForkCount),t):(fn(n),null);case 22:case 23:return bi(n),mf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(fn(n),n.subtreeFlags&6&&(n.flags|=8192)):fn(n),s=n.updateQueue,s!==null&&_c(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&Q(nr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(wn),fn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cM(t,n){switch($u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(wn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(bi(n),n.alternate===null)throw Error(r(340));$s()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$s()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(En),null;case 4:return Xe(),null;case 10:return Ua(n.type),null;case 22:case 23:return bi(n),mf(),t!==null&&Q(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(wn),null;case 25:return null;default:return null}}function Z0(t,n){switch($u(n),n.tag){case 3:Ua(wn),Xe();break;case 26:case 27:case 5:et(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&bi(n);break;case 13:bi(n);break;case 19:Q(En);break;case 10:Ua(n.type);break;case 22:case 23:bi(n),mf(),t!==null&&Q(nr);break;case 24:Ua(wn)}}function il(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,x=s.inst;l=h(),x.destroy=l}s=s.next}while(s!==f)}}catch(R){qt(n,n.return,R)}}function _s(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var x=l.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,f=n;var G=s,oe=R;try{oe()}catch(_e){qt(f,G,_e)}}}l=l.next}while(l!==h)}}catch(_e){qt(n,n.return,_e)}}function K0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Hm(n,s)}catch(l){qt(t,t.return,l)}}}function Q0(t,n,s){s.props=or(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,n,l)}}function al(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,n,f)}}function _a(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,n,f)}else s.current=null}function J0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function qf(t,n,s){try{var l=t.stateNode;LM(l,t.type,s,n),l[An]=n}catch(f){qt(t,t.return,f)}}function $0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bs(t.type)||t.tag===4}function jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Qi));else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Zf(t,n,s),t=t.sibling;t!==null;)Zf(t,n,s),t=t.sibling}function vc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(vc(t,n,s),t=t.sibling;t!==null;)vc(t,n,s),t=t.sibling}function eg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Zn(n,l,s),n[gn]=t,n[An]=s}catch(h){qt(t,t.return,h)}}var Ba=!1,Nn=!1,Kf=!1,tg=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function uM(t,n){if(t=t.containerInfo,_d=zc,t=hm(t),Vu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var x=0,R=-1,G=-1,oe=0,_e=0,ye=t,le=null;t:for(;;){for(var de;ye!==s||f!==0&&ye.nodeType!==3||(R=x+f),ye!==h||l!==0&&ye.nodeType!==3||(G=x+l),ye.nodeType===3&&(x+=ye.nodeValue.length),(de=ye.firstChild)!==null;)le=ye,ye=de;for(;;){if(ye===t)break t;if(le===s&&++oe===f&&(R=x),le===h&&++_e===l&&(G=x),(de=ye.nextSibling)!==null)break;ye=le,le=ye.parentNode}ye=de}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(vd={focusedElem:t,selectionRange:s},zc=!1,Gn=n;Gn!==null;)if(n=Gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Gn=t;else for(;Gn!==null;){switch(n=Gn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=n,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var je=or(s.type,f);t=l.getSnapshotBeforeUpdate(je,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(rt){qt(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Md(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Gn=t;break}Gn=n.return}}function ng(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ha(t,s),l&4&&il(5,s);break;case 1:if(Ha(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){qt(s,s.return,x)}else{var f=or(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){qt(s,s.return,x)}}l&64&&K0(s),l&512&&al(s,s.return);break;case 3:if(Ha(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Hm(t,n)}catch(x){qt(s,s.return,x)}}break;case 27:n===null&&l&4&&eg(s);case 26:case 5:Ha(t,s),n===null&&l&4&&J0(s),l&512&&al(s,s.return);break;case 12:Ha(t,s);break;case 31:Ha(t,s),l&4&&sg(t,s);break;case 13:Ha(t,s),l&4&&rg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=xM.bind(null,s),zM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ba,!l){n=n!==null&&n.memoizedState!==null||Nn,f=Ba;var h=Nn;Ba=l,(Nn=n)&&!h?Ga(t,s,(s.subtreeFlags&8772)!==0):Ha(t,s),Ba=f,Nn=h}break;case 30:break;default:Ha(t,s)}}function ig(t){var n=t.alternate;n!==null&&(t.alternate=null,ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&xi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mn=null,di=!1;function za(t,n,s){for(s=s.child;s!==null;)ag(t,n,s),s=s.sibling}function ag(t,n,s){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:Nn||_a(s,n),za(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Nn||_a(s,n);var l=mn,f=di;bs(s.type)&&(mn=s.stateNode,di=!1),za(t,n,s),hl(s.stateNode),mn=l,di=f;break;case 5:Nn||_a(s,n);case 6:if(l=mn,f=di,mn=null,za(t,n,s),mn=l,di=f,mn!==null)if(di)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(s.stateNode)}catch(h){qt(s,n,h)}else try{mn.removeChild(s.stateNode)}catch(h){qt(s,n,h)}break;case 18:mn!==null&&(di?(t=mn,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),io(t)):Kg(mn,s.stateNode));break;case 4:l=mn,f=di,mn=s.stateNode.containerInfo,di=!0,za(t,n,s),mn=l,di=f;break;case 0:case 11:case 14:case 15:_s(2,s,n),Nn||_s(4,s,n),za(t,n,s);break;case 1:Nn||(_a(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Q0(s,n,l)),za(t,n,s);break;case 21:za(t,n,s);break;case 22:Nn=(l=Nn)||s.memoizedState!==null,za(t,n,s),Nn=l;break;default:za(t,n,s)}}function sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{io(t)}catch(s){qt(n,n.return,s)}}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{io(t)}catch(s){qt(n,n.return,s)}}function fM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new tg),n;default:throw Error(r(435,t.tag))}}function xc(t,n){var s=fM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=SM.bind(null,t,l);l.then(f,f)}})}function hi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(bs(R.type)){mn=R.stateNode,di=!1;break e}break;case 5:mn=R.stateNode,di=!1;break e;case 3:case 4:mn=R.stateNode.containerInfo,di=!0;break e}R=R.return}if(mn===null)throw Error(r(160));ag(h,x,f),mn=null,di=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)og(n,t),n=n.sibling}var ta=null;function og(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:hi(n,t),pi(t),l&4&&(_s(3,t,t.return),il(3,t),_s(5,t,t.return));break;case 1:hi(n,t),pi(t),l&512&&(Nn||s===null||_a(s,s.return)),l&64&&Ba&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ta;if(hi(n,t),pi(t),l&512&&(Nn||s===null||_a(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Zi]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Zn(h,l,s),h[gn]=t,it(h),l=h;break e;case"link":var x=o_("link","href",f).get(l+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}h=f.createElement(l),Zn(h,l,s),f.head.appendChild(h);break;case"meta":if(x=o_("meta","content",f).get(l+(s.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}h=f.createElement(l),Zn(h,l,s),f.head.appendChild(h);break;default:throw Error(r(468,l))}h[gn]=t,it(h),l=h}t.stateNode=l}else l_(f,t.type,t.stateNode);else t.stateNode=r_(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?l_(f,t.type,t.stateNode):r_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&qf(t,t.memoizedProps,s.memoizedProps)}break;case 27:hi(n,t),pi(t),l&512&&(Nn||s===null||_a(s,s.return)),s!==null&&l&4&&qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(hi(n,t),pi(t),l&512&&(Nn||s===null||_a(s,s.return)),t.flags&32){f=t.stateNode;try{ai(f,"")}catch(je){qt(t,t.return,je)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,qf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Kf=!0);break;case 6:if(hi(n,t),pi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(je){qt(t,t.return,je)}}break;case 3:if(Pc=null,f=ta,ta=Uc(n.containerInfo),hi(n,t),ta=f,pi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{io(n.containerInfo)}catch(je){qt(t,t.return,je)}Kf&&(Kf=!1,lg(t));break;case 4:l=ta,ta=Uc(t.stateNode.containerInfo),hi(n,t),pi(t),ta=l;break;case 12:hi(n,t),pi(t);break;case 31:hi(n,t),pi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xc(t,l)));break;case 13:hi(n,t),pi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Mc=zt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,oe=Ba,_e=Nn;if(Ba=oe||f,Nn=_e||G,hi(n,t),Nn=_e,Ba=oe,pi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||Ba||Nn||lr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(h=G.stateNode,f)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var ye=G.memoizedProps.style,le=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(je){qt(G,G.return,je)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(je){qt(G,G.return,je)}}}else if(n.tag===18){if(s===null){G=n;try{var de=G.stateNode;f?Qg(de,!0):Qg(G.stateNode,!1)}catch(je){qt(G,G.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,xc(t,s))));break;case 19:hi(n,t),pi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xc(t,l)));break;case 30:break;case 21:break;default:hi(n,t),pi(t)}}function pi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if($0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,h=jf(t);vc(t,h,f);break;case 5:var x=s.stateNode;s.flags&32&&(ai(x,""),s.flags&=-33);var R=jf(t);vc(t,R,x);break;case 3:case 4:var G=s.stateNode.containerInfo,oe=jf(t);Zf(t,oe,G);break;default:throw Error(r(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(t,n.alternate,n),n=n.sibling}function lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_s(4,n,n.return),lr(n);break;case 1:_a(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Q0(n,n.return,s),lr(n);break;case 27:hl(n.stateNode);case 26:case 5:_a(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}t=t.sibling}}function Ga(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ga(f,h,s),il(4,h);break;case 1:if(Ga(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){qt(l,l.return,oe)}if(l=h,f=l.updateQueue,f!==null){var R=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)zm(G[f],R)}catch(oe){qt(l,l.return,oe)}}s&&x&64&&K0(h),al(h,h.return);break;case 27:eg(h);case 26:case 5:Ga(f,h,s),s&&l===null&&x&4&&J0(h),al(h,h.return);break;case 12:Ga(f,h,s);break;case 31:Ga(f,h,s),s&&x&4&&sg(f,h);break;case 13:Ga(f,h,s),s&&x&4&&rg(f,h);break;case 22:h.memoizedState===null&&Ga(f,h,s),al(h,h.return);break;case 30:break;default:Ga(f,h,s)}n=n.sibling}}function Qf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Xo(s))}function Jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xo(t))}function na(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(t,n,s,l),n=n.sibling}function cg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:na(t,n,s,l),f&2048&&il(9,n);break;case 1:na(t,n,s,l);break;case 3:na(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xo(t)));break;case 12:if(f&2048){na(t,n,s,l),t=n.stateNode;try{var h=n.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){qt(n,n.return,G)}}else na(t,n,s,l);break;case 31:na(t,n,s,l);break;case 13:na(t,n,s,l);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?na(t,n,s,l):sl(t,n):h._visibility&2?na(t,n,s,l):(h._visibility|=2,Yr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Qf(x,n);break;case 24:na(t,n,s,l),f&2048&&Jf(n.alternate,n);break;default:na(t,n,s,l)}}function Yr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,x=n,R=s,G=l,oe=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(h,x,R,G,f),il(8,x);break;case 23:break;case 22:var _e=x.stateNode;x.memoizedState!==null?_e._visibility&2?Yr(h,x,R,G,f):sl(h,x):(_e._visibility|=2,Yr(h,x,R,G,f)),f&&oe&2048&&Qf(x.alternate,x);break;case 24:Yr(h,x,R,G,f),f&&oe&2048&&Jf(x.alternate,x);break;default:Yr(h,x,R,G,f)}n=n.sibling}}function sl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Qf(l.alternate,l);break;case 24:sl(s,l),f&2048&&Jf(l.alternate,l);break;default:sl(s,l)}n=n.sibling}}var rl=8192;function qr(t,n,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)ug(t,n,s),t=t.sibling}function ug(t,n,s){switch(t.tag){case 26:qr(t,n,s),t.flags&rl&&t.memoizedState!==null&&QM(s,ta,t.memoizedState,t.memoizedProps);break;case 5:qr(t,n,s);break;case 3:case 4:var l=ta;ta=Uc(t.stateNode.containerInfo),qr(t,n,s),ta=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,qr(t,n,s),rl=l):qr(t,n,s));break;default:qr(t,n,s)}}function fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Gn=l,hg(l,t)}fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dg(t),t=t.sibling}function dg(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&_s(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sc(t)):ol(t);break;default:ol(t)}}function Sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Gn=l,hg(l,t)}fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_s(8,n,n.return),Sc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Sc(n));break;default:Sc(n)}t=t.sibling}}function hg(t,n){for(;Gn!==null;){var s=Gn;switch(s.tag){case 0:case 11:case 15:_s(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Gn=l;else e:for(s=t;Gn!==null;){l=Gn;var f=l.sibling,h=l.return;if(ig(l),l===s){Gn=null;break e}if(f!==null){f.return=h,Gn=f;break e}Gn=h}}}var dM={getCacheForType:function(t){var n=qn(wn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return qn(wn).controller.signal}},hM=typeof WeakMap=="function"?WeakMap:Map,Vt=0,tn=null,yt=null,bt=0,Yt=0,Ti=null,vs=!1,jr=!1,$f=!1,Va=0,Sn=0,xs=0,cr=0,ed=0,Ai=0,Zr=0,ll=null,mi=null,td=!1,Mc=0,pg=0,yc=1/0,Ec=null,Ss=null,Fn=0,Ms=null,Kr=null,ka=0,nd=0,id=null,mg=null,cl=0,ad=null;function Ri(){return(Vt&2)!==0&&bt!==0?bt&-bt:B.T!==null?ud():ss()}function gg(){if(Ai===0)if((bt&536870912)===0||Rt){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Ai=t}else Ai=536870912;return t=Ei.current,t!==null&&(t.flags|=32),Ai}function gi(t,n,s){(t===tn&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),ys(t,bt,Ai,!1)),Ye(t,s),((Vt&2)===0||t!==tn)&&(t===tn&&((Vt&2)===0&&(cr|=s),Sn===4&&ys(t,bt,Ai,!1)),va(t))}function _g(t,n,s){if((Vt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),f=l?gM(t,n):rd(t,n,!0),h=l;do{if(f===0){jr&&!l&&ys(t,n,0,!1);break}else{if(s=t.current.alternate,h&&!pM(s)){f=rd(t,n,!1),h=!1;continue}if(f===2){if(h=n,t.errorRecoveryDisabledLanes&h)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;f=ll;var G=R.current.memoizedState.isDehydrated;if(G&&(Qr(R,x).flags|=256),x=rd(R,x,!1),x!==2){if($f&&!G){R.errorRecoveryDisabledLanes|=h,cr|=h,f=4;break e}h=mi,mi=f,h!==null&&(mi===null?mi=h:mi.push.apply(mi,h))}f=x}if(h=!1,f!==2)continue}}if(f===1){Qr(t,0),ys(t,n,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ys(l,n,Ai,!vs);break e;case 2:mi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Mc+300-zt(),10<f)){if(ys(l,n,Ai,!vs),me(l,0,!0)!==0)break e;ka=n,l.timeoutHandle=jg(vg.bind(null,l,s,mi,Ec,td,n,Ai,cr,Zr,vs,h,"Throttled",-0,0),f);break e}vg(l,s,mi,Ec,td,n,Ai,cr,Zr,vs,h,null,-0,0)}}break}while(!0);va(t)}function vg(t,n,s,l,f,h,x,R,G,oe,_e,ye,le,de){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},ug(n,h,ye);var je=(h&62914560)===h?Mc-zt():(h&4194048)===h?pg-zt():0;if(je=JM(ye,je),je!==null){ka=h,t.cancelPendingCommit=je(Ag.bind(null,t,n,h,s,l,f,x,R,G,_e,ye,null,le,de)),ys(t,h,x,!oe);return}}Ag(t,n,h,s,l,f,x,R,G)}function pM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!Mi(h(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ys(t,n,s,l){n&=~ed,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var h=31-He(f),x=1<<h;l[h]=-1,f&=~x}s!==0&&Dt(t,s,n)}function bc(){return(Vt&6)===0?(ul(0),!1):!0}function sd(){if(yt!==null){if(Yt===0)var t=yt.return;else t=yt,Na=er=null,Mf(t),Gr=null,Yo=0,t=yt;for(;t!==null;)Z0(t.alternate,t),t=t.return;yt=null}}function Qr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,OM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ka=0,sd(),tn=t,yt=s=Da(t.current,null),bt=n,Yt=0,Ti=null,vs=!1,jr=Ce(t,n),$f=!1,Zr=Ai=ed=cr=xs=Sn=0,mi=ll=null,td=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-He(l),h=1<<f;n|=t[f],l&=~h}return Va=n,Wl(),s}function xg(t,n){pt=null,B.H=el,n===Hr||n===$l?(n=Pm(),Yt=3):n===cf?(n=Pm(),Yt=4):Yt=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ti=n,yt===null&&(Sn=1,hc(t,Pi(n,t.current)))}function Sg(){var t=Ei.current;return t===null?!0:(bt&4194048)===bt?zi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===zi:!1}function Mg(){var t=B.H;return B.H=el,t===null?el:t}function yg(){var t=B.A;return B.A=dM,t}function Tc(){Sn=4,vs||(bt&4194048)!==bt&&Ei.current!==null||(jr=!0),(xs&134217727)===0&&(cr&134217727)===0||tn===null||ys(tn,bt,Ai,!1)}function rd(t,n,s){var l=Vt;Vt|=2;var f=Mg(),h=yg();(tn!==t||bt!==n)&&(Ec=null,Qr(t,n)),n=!1;var x=Sn;e:do try{if(Yt!==0&&yt!==null){var R=yt,G=Ti;switch(Yt){case 8:sd(),x=6;break e;case 3:case 2:case 9:case 6:Ei.current===null&&(n=!0);var oe=Yt;if(Yt=0,Ti=null,Jr(t,R,G,oe),s&&jr){x=0;break e}break;default:oe=Yt,Yt=0,Ti=null,Jr(t,R,G,oe)}}mM(),x=Sn;break}catch(_e){xg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,Na=er=null,Vt=l,B.H=f,B.A=h,yt===null&&(tn=null,bt=0,Wl()),x}function mM(){for(;yt!==null;)Eg(yt)}function gM(t,n){var s=Vt;Vt|=2;var l=Mg(),f=yg();tn!==t||bt!==n?(Ec=null,yc=zt()+500,Qr(t,n)):jr=Ce(t,n);e:do try{if(Yt!==0&&yt!==null){n=yt;var h=Ti;t:switch(Yt){case 1:Yt=0,Ti=null,Jr(t,n,h,1);break;case 2:case 9:if(Um(h)){Yt=0,Ti=null,bg(n);break}n=function(){Yt!==2&&Yt!==9||tn!==t||(Yt=7),va(t)},h.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:Um(h)?(Yt=0,Ti=null,bg(n)):(Yt=0,Ti=null,Jr(t,n,h,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var R=yt;if(x?c_(x):R.stateNode.complete){Yt=0,Ti=null;var G=R.sibling;if(G!==null)yt=G;else{var oe=R.return;oe!==null?(yt=oe,Ac(oe)):yt=null}break t}}Yt=0,Ti=null,Jr(t,n,h,5);break;case 6:Yt=0,Ti=null,Jr(t,n,h,6);break;case 8:sd(),Sn=6;break e;default:throw Error(r(462))}}_M();break}catch(_e){xg(t,_e)}while(!0);return Na=er=null,B.H=l,B.A=f,Vt=s,yt!==null?0:(tn=null,bt=0,Wl(),Sn)}function _M(){for(;yt!==null&&!Xt();)Eg(yt)}function Eg(t){var n=q0(t.alternate,t,Va);t.memoizedProps=t.pendingProps,n===null?Ac(t):yt=n}function bg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=G0(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=G0(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Mf(n);default:Z0(s,n),n=yt=ym(n,Va),n=q0(s,n,Va)}t.memoizedProps=t.pendingProps,n===null?Ac(t):yt=n}function Jr(t,n,s,l){Na=er=null,Mf(n),Gr=null,Yo=0;var f=n.return;try{if(sM(t,f,n,s,bt)){Sn=1,hc(t,Pi(s,t.current)),yt=null;return}}catch(h){if(f!==null)throw yt=f,h;Sn=1,hc(t,Pi(s,t.current)),yt=null;return}n.flags&32768?(Rt||l===1?t=!0:jr||(bt&536870912)!==0?t=!1:(vs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),Tg(n,t)):Ac(n)}function Ac(t){var n=t;do{if((n.flags&32768)!==0){Tg(n,vs);return}t=n.return;var s=lM(n.alternate,n,Va);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);Sn===0&&(Sn=5)}function Tg(t,n){do{var s=cM(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);Sn=6,yt=null}function Ag(t,n,s,l,f,h,x,R,G){t.cancelPendingCommit=null;do Rc();while(Fn!==0);if((Vt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=qu,an(t,s,h,x,R,G),t===tn&&(yt=tn=null,bt=0),Kr=n,Ms=t,ka=s,nd=h,id=f,mg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,MM(j,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=H.p,H.p=2,x=Vt,Vt|=4;try{uM(t,n,s)}finally{Vt=x,H.p=f,B.T=l}}Fn=1,Rg(),Cg(),wg()}}function Rg(){if(Fn===1){Fn=0;var t=Ms,n=Kr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=H.p;H.p=2;var f=Vt;Vt|=4;try{og(n,t);var h=vd,x=hm(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&dm(R.ownerDocument.documentElement,R)){if(G!==null&&Vu(R)){var oe=G.start,_e=G.end;if(_e===void 0&&(_e=oe),"selectionStart"in R)R.selectionStart=oe,R.selectionEnd=Math.min(_e,R.value.length);else{var ye=R.ownerDocument||document,le=ye&&ye.defaultView||window;if(le.getSelection){var de=le.getSelection(),je=R.textContent.length,rt=Math.min(G.start,je),en=G.end===void 0?rt:Math.min(G.end,je);!de.extend&&rt>en&&(x=en,en=rt,rt=x);var J=fm(R,rt),X=fm(R,en);if(J&&X&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==X.node||de.focusOffset!==X.offset)){var re=ye.createRange();re.setStart(J.node,J.offset),de.removeAllRanges(),rt>en?(de.addRange(re),de.extend(X.node,X.offset)):(re.setEnd(X.node,X.offset),de.addRange(re))}}}}for(ye=[],de=R;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var ve=ye[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}zc=!!_d,vd=_d=null}finally{Vt=f,H.p=l,B.T=s}}t.current=n,Fn=2}}function Cg(){if(Fn===2){Fn=0;var t=Ms,n=Kr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=H.p;H.p=2;var f=Vt;Vt|=4;try{ng(t,n.alternate,n)}finally{Vt=f,H.p=l,B.T=s}}Fn=3}}function wg(){if(Fn===4||Fn===3){Fn=0,K();var t=Ms,n=Kr,s=ka,l=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Fn=5:(Fn=0,Kr=Ms=null,Dg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ss=null),as(s),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=B.T,f=H.p,H.p=2,B.T=null;try{for(var h=t.onRecoverableError,x=0;x<l.length;x++){var R=l[x];h(R.value,{componentStack:R.stack})}}finally{B.T=n,H.p=f}}(ka&3)!==0&&Rc(),va(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===ad?cl++:(cl=0,ad=t):cl=0,ul(0)}}function Dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xo(n)))}function Rc(){return Rg(),Cg(),wg(),Lg()}function Lg(){if(Fn!==5)return!1;var t=Ms,n=nd;nd=0;var s=as(ka),l=B.T,f=H.p;try{H.p=32>s?32:s,B.T=null,s=id,id=null;var h=Ms,x=ka;if(Fn=0,Kr=Ms=null,ka=0,(Vt&6)!==0)throw Error(r(331));var R=Vt;if(Vt|=4,dg(h.current),cg(h,h.current,x,s),Vt=R,ul(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(ue,h)}catch{}return!0}finally{H.p=f,B.T=l,Dg(t,n)}}function Ng(t,n,s){n=Pi(s,n),n=If(t.stateNode,n,2),t=ps(t,n,2),t!==null&&(Ye(t,2),va(t))}function qt(t,n,s){if(t.tag===3)Ng(t,t,s);else for(;n!==null;){if(n.tag===3){Ng(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ss===null||!Ss.has(l))){t=Pi(s,t),s=U0(2),l=ps(n,s,2),l!==null&&(O0(s,l,n,t),Ye(l,2),va(l));break}}n=n.return}}function od(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new hM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||($f=!0,f.add(s),t=vM.bind(null,t,n,s),n.then(t,t))}function vM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,tn===t&&(bt&s)===s&&(Sn===4||Sn===3&&(bt&62914560)===bt&&300>zt()-Mc?(Vt&2)===0&&Qr(t,0):ed|=s,Zr===bt&&(Zr=0)),va(t)}function Ug(t,n){n===0&&(n=be()),t=Qs(t,n),t!==null&&(Ye(t,n),va(t))}function xM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Ug(t,s)}function SM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Ug(t,s)}function MM(t,n){return ln(t,n)}var Cc=null,$r=null,ld=!1,wc=!1,cd=!1,Es=0;function va(t){t!==$r&&t.next===null&&($r===null?Cc=$r=t:$r=$r.next=t),wc=!0,ld||(ld=!0,EM())}function ul(t,n){if(!cd&&wc){cd=!0;do for(var s=!1,l=Cc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var x=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-He(42|t)+1)-1,h&=f&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Fg(l,h))}else h=bt,h=me(l,l===tn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ce(l,h)||(s=!0,Fg(l,h));l=l.next}while(s);cd=!1}}function yM(){Og()}function Og(){wc=ld=!1;var t=0;Es!==0&&UM()&&(t=Es);for(var n=zt(),s=null,l=Cc;l!==null;){var f=l.next,h=Pg(l,n);h===0?(l.next=null,s===null?Cc=f:s.next=f,f===null&&($r=s)):(s=l,(t!==0||(h&3)!==0)&&(wc=!0)),l=f}Fn!==0&&Fn!==5||ul(t),Es!==0&&(Es=0)}function Pg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var x=31-He(h),R=1<<x,G=f[x];G===-1?((R&s)===0||(R&l)!==0)&&(f[x]=Ue(R,n)):G<=n&&(t.expiredLanes|=R),h&=~R}if(n=tn,s=bt,s=me(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&kt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&kt(l),as(s)){case 2:case 8:s=b;break;case 32:s=j;break;case 268435456:s=fe;break;default:s=j}return l=Ig.bind(null,t),s=ln(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&kt(l),t.callbackPriority=2,t.callbackNode=null,2}function Ig(t,n){if(Fn!==0&&Fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Rc()&&t.callbackNode!==s)return null;var l=bt;return l=me(t,t===tn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(_g(t,l,n),Pg(t,zt()),t.callbackNode!=null&&t.callbackNode===s?Ig.bind(null,t):null)}function Fg(t,n){if(Rc())return null;_g(t,n,!0)}function EM(){PM(function(){(Vt&6)!==0?ln(U,yM):Og()})}function ud(){if(Es===0){var t=Br;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Es=t}return Es}function Bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ki(""+t)}function zg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function bM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var h=Bg((f[An]||null).action),x=l.submitter;x&&(n=(n=x[An]||null)?Bg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var R=new $i("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Es!==0){var G=x?zg(f,x):new FormData(f);Df(s,{pending:!0,data:G,method:f.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=x?zg(f,x):new FormData(f),Df(s,{pending:!0,data:G,method:f.method,action:h},h,G))},currentTarget:f}]})}}for(var fd=0;fd<Yu.length;fd++){var dd=Yu[fd],TM=dd.toLowerCase(),AM=dd[0].toUpperCase()+dd.slice(1);ea(TM,"on"+AM)}ea(gm,"onAnimationEnd"),ea(_m,"onAnimationIteration"),ea(vm,"onAnimationStart"),ea("dblclick","onDoubleClick"),ea("focusin","onFocus"),ea("focusout","onBlur"),ea(VS,"onTransitionRun"),ea(kS,"onTransitionStart"),ea(XS,"onTransitionCancel"),ea(xm,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function Hg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var x=l.length-1;0<=x;x--){var R=l[x],G=R.instance,oe=R.currentTarget;if(R=R.listener,G!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=oe;try{h(f)}catch(_e){Xl(_e)}f.currentTarget=null,h=G}else for(x=0;x<l.length;x++){if(R=l[x],G=R.instance,oe=R.currentTarget,R=R.listener,G!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=oe;try{h(f)}catch(_e){Xl(_e)}f.currentTarget=null,h=G}}}}function Et(t,n){var s=n[ca];s===void 0&&(s=n[ca]=new Set);var l=t+"__bubble";s.has(l)||(Gg(n,t,2,!1),s.add(l))}function hd(t,n,s){var l=0;n&&(l|=4),Gg(s,t,l,n)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function pd(t){if(!t[Dc]){t[Dc]=!0,Wt.forEach(function(s){s!=="selectionchange"&&(RM.has(s)||hd(s,!1,t),hd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dc]||(n[Dc]=!0,hd("selectionchange",!1,n))}}function Gg(t,n,s,l){switch(g_(n)){case 2:var f=ty;break;case 8:f=ny;break;default:f=wd}s=f.bind(null,n,s,t),f=void 0,!Ws||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function md(t,n,s,l,f){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var R=l.stateNode.containerInfo;if(R===f)break;if(x===4)for(x=l.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;R!==null;){if(x=Li(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){l=h=x;continue e}R=R.parentNode}}l=l.return}Gl(function(){var oe=h,_e=Ar(s),ye=[];e:{var le=Sm.get(t);if(le!==void 0){var de=$i,je=t;switch(t){case"keypress":if(Xn(s)===0)break e;case"keydown":case"keyup":de=SS;break;case"focusin":je="focus",de=Fu;break;case"focusout":je="blur",de=Fu;break;case"beforeblur":case"afterblur":de=Fu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=lS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=ES;break;case gm:case _m:case vm:de=fS;break;case xm:de=TS;break;case"scroll":case"scrollend":de=rs;break;case"wheel":de=RS;break;case"copy":case"cut":case"paste":de=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Qp;break;case"toggle":case"beforetoggle":de=wS}var rt=(n&4)!==0,en=!rt&&(t==="scroll"||t==="scrollend"),J=rt?le!==null?le+"Capture":null:le;rt=[];for(var X=oe,re;X!==null;){var ve=X;if(re=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||re===null||J===null||(ve=Rr(X,J),ve!=null&&rt.push(dl(X,ve,re))),en)break;X=X.return}0<rt.length&&(le=new de(le,je,null,s,_e),ye.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==Tr&&(je=s.relatedTarget||s.fromElement)&&(Li(je)||je[kn]))break e;if((de||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,de?(je=s.relatedTarget||s.toElement,de=oe,je=je?Li(je):null,je!==null&&(en=c(je),rt=je.tag,je!==en||rt!==5&&rt!==27&&rt!==6)&&(je=null)):(de=null,je=oe),de!==je)){if(rt=Zp,ve="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Qp,ve="onPointerLeave",J="onPointerEnter",X="pointer"),en=de==null?le:Be(de),re=je==null?le:Be(je),le=new rt(ve,X+"leave",de,s,_e),le.target=en,le.relatedTarget=re,ve=null,Li(_e)===oe&&(rt=new rt(J,X+"enter",je,s,_e),rt.target=re,rt.relatedTarget=en,ve=rt),en=ve,de&&je)t:{for(rt=CM,J=de,X=je,re=0,ve=J;ve;ve=rt(ve))re++;ve=0;for(var at=X;at;at=rt(at))ve++;for(;0<re-ve;)J=rt(J),re--;for(;0<ve-re;)X=rt(X),ve--;for(;re--;){if(J===X||X!==null&&J===X.alternate){rt=J;break t}J=rt(J),X=rt(X)}rt=null}else rt=null;de!==null&&Vg(ye,le,de,rt,!1),je!==null&&en!==null&&Vg(ye,en,je,rt,!0)}}e:{if(le=oe?Be(oe):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var It=sm;else if(im(le))if(rm)It=zS;else{It=FS;var $e=IS}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?oe&&Pt(oe.elementType)&&(It=sm):It=BS;if(It&&(It=It(t,oe))){am(ye,It,s,_e);break e}$e&&$e(t,le,oe),t==="focusout"&&oe&&le.type==="number"&&oe.memoizedProps.value!=null&&gt(le,"number",le.value)}switch($e=oe?Be(oe):window,t){case"focusin":(im($e)||$e.contentEditable==="true")&&(Dr=$e,ku=oe,Go=null);break;case"focusout":Go=ku=Dr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,pm(ye,s,_e);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":pm(ye,s,_e)}var mt;if(zu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else wr?tm(t,s)&&(Tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Tt="onCompositionStart");Tt&&(Jp&&s.locale!=="ko"&&(wr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&wr&&(mt=St()):(da=_e,Cr="value"in da?da.value:da.textContent,wr=!0)),$e=Lc(oe,Tt),0<$e.length&&(Tt=new Kp(Tt,t,null,s,_e),ye.push({event:Tt,listeners:$e}),mt?Tt.data=mt:(mt=nm(s),mt!==null&&(Tt.data=mt)))),(mt=LS?NS(t,s):US(t,s))&&(Tt=Lc(oe,"onBeforeInput"),0<Tt.length&&($e=new Kp("onBeforeInput","beforeinput",null,s,_e),ye.push({event:$e,listeners:Tt}),$e.data=mt)),bM(ye,t,oe,s,_e)}Hg(ye,n)})}function dl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Lc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Rr(t,s),f!=null&&l.unshift(dl(t,f,h)),f=Rr(t,n),f!=null&&l.push(dl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function CM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,n,s,l,f){for(var h=n._reactName,x=[];s!==null&&s!==l;){var R=s,G=R.alternate,oe=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||oe===null||(G=oe,f?(oe=Rr(s,h),oe!=null&&x.unshift(dl(s,oe,G))):f||(oe=Rr(s,h),oe!=null&&x.push(dl(s,oe,G)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var wM=/\r\n?/g,DM=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(wM,`
`).replace(DM,"")}function Xg(t,n){return n=kg(n),kg(t)===n}function $t(t,n,s,l,f,h){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ai(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ai(t,""+l);break;case"className":qe(t,"class",l);break;case"tabIndex":qe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,s,l);break;case"style":In(t,l,h);break;case"data":if(n!=="object"){qe(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ki(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(n!=="input"&&$t(t,n,"name",f.name,f,null),$t(t,n,"formEncType",f.formEncType,f,null),$t(t,n,"formMethod",f.formMethod,f,null),$t(t,n,"formTarget",f.formTarget,f,null)):($t(t,n,"encType",f.encType,f,null),$t(t,n,"method",f.method,f,null),$t(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ki(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ki(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),we(t,"popover",l);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":we(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ni.get(s)||s,we(t,s,l))}}function gd(t,n,s,l,f,h){switch(s){case"style":In(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ai(t,l):(typeof l=="number"||typeof l=="bigint")&&ai(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),h=t[An]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(n,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):we(t,s,l)}}}function Zn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var x=s[h];if(x!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$t(t,n,h,x,s,null)}}f&&$t(t,n,"srcSet",s.srcSet,s,null),l&&$t(t,n,"src",s.src,s,null);return;case"input":Et("invalid",t);var R=h=x=f=null,G=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":x=_e;break;case"checked":G=_e;break;case"defaultChecked":oe=_e;break;case"value":h=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:$t(t,n,l,_e,s,null)}}Rn(t,h,R,G,oe,x,f,!1);return;case"select":Et("invalid",t),l=x=h=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":l=R;default:$t(t,n,f,R,s,null)}n=h,s=x,t.multiple=!!l,n!=null?sn(t,!!l,n,!1):s!=null&&sn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),h=f=l=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":l=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:$t(t,n,x,R,s,null)}Si(t,l,f,h);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(t,n,G,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)Et(fl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$t(t,n,oe,l,s,null)}return;default:if(Pt(n)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&gd(t,n,_e,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&$t(t,n,R,l,s,null))}function LM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,x=null,R=null,G=null,oe=null,_e=null;for(de in s){var ye=s[de];if(s.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=ye;default:l.hasOwnProperty(de)||$t(t,n,de,null,l,ye)}}for(var le in l){var de=l[le];if(ye=s[le],l.hasOwnProperty(le)&&(de!=null||ye!=null))switch(le){case"type":h=de;break;case"name":f=de;break;case"checked":oe=de;break;case"defaultChecked":_e=de;break;case"value":x=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==ye&&$t(t,n,le,de,l,ye)}}ke(t,x,R,G,oe,_e,h,f);return;case"select":de=x=R=le=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(h)||$t(t,n,h,null,l,G)}for(f in l)if(h=l[f],G=s[f],l.hasOwnProperty(f)&&(h!=null||G!=null))switch(f){case"value":le=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==G&&$t(t,n,f,h,l,G)}n=R,s=x,l=de,le!=null?sn(t,!!s,le,!1):!!l!=!!s&&(n!=null?sn(t,!!s,n,!0):sn(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:$t(t,n,R,null,l,f)}for(x in l)if(f=l[x],h=s[x],l.hasOwnProperty(x)&&(f!=null||h!=null))switch(x){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&$t(t,n,x,f,l,h)}_n(t,le,de);return;case"option":for(var je in s)if(le=s[je],s.hasOwnProperty(je)&&le!=null&&!l.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:$t(t,n,je,null,l,le)}for(G in l)if(le=l[G],de=s[G],l.hasOwnProperty(G)&&le!==de&&(le!=null||de!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:$t(t,n,G,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)le=s[rt],s.hasOwnProperty(rt)&&le!=null&&!l.hasOwnProperty(rt)&&$t(t,n,rt,null,l,le);for(oe in l)if(le=l[oe],de=s[oe],l.hasOwnProperty(oe)&&le!==de&&(le!=null||de!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:$t(t,n,oe,le,l,de)}return;default:if(Pt(n)){for(var en in s)le=s[en],s.hasOwnProperty(en)&&le!==void 0&&!l.hasOwnProperty(en)&&gd(t,n,en,void 0,l,le);for(_e in l)le=l[_e],de=s[_e],!l.hasOwnProperty(_e)||le===de||le===void 0&&de===void 0||gd(t,n,_e,le,l,de);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&$t(t,n,J,null,l,le);for(ye in l)le=l[ye],de=s[ye],!l.hasOwnProperty(ye)||le===de||le==null&&de==null||$t(t,n,ye,le,l,de)}function Wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,x=f.initiatorType,R=f.duration;if(h&&R&&Wg(x)){for(x=0,R=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],oe=G.startTime;if(oe>R)break;var _e=G.transferSize,ye=G.initiatorType;_e&&Wg(ye)&&(G=G.responseEnd,x+=_e*(G<R?1:(R-oe)/(G-oe)))}if(--l,n+=8*(h+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _d=null,vd=null;function Nc(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sd=null;function UM(){var t=window.event;return t&&t.type==="popstate"?t===Sd?!1:(Sd=t,!0):(Sd=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,OM=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,PM=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(IM)}:jg;function IM(t){setTimeout(function(){throw t})}function bs(t){return t==="head"}function Kg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),io(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var h=s.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[Zi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=x}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);io(n)}function Qg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Md(s),xi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function FM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Zi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function BM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function Jg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hi(t.nextSibling),t===null))return null;return t}function yd(t){return t.data==="$?"||t.data==="$~"}function Ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var bd=null;function $g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Hi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function e_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function t_(t,n,s){switch(n=Nc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function hl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xi(t)}var Gi=new Map,n_=new Set;function Uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xa=H.d;H.d={f:HM,r:GM,D:VM,C:kM,L:XM,m:WM,X:qM,S:YM,M:jM};function HM(){var t=Xa.f(),n=bc();return t||n}function GM(t){var n=Te(t);n!==null&&n.tag===5&&n.type==="form"?x0(n):Xa.r(t)}var eo=typeof document>"u"?null:document;function i_(t,n,s){var l=eo;if(l&&typeof n=="string"&&n){var f=Ot(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),n_.has(f)||(n_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Zn(n,"link",t),it(n),l.head.appendChild(n)))}}function VM(t){Xa.D(t),i_("dns-prefetch",t,null)}function kM(t,n){Xa.C(t,n),i_("preconnect",t,n)}function XM(t,n,s){Xa.L(t,n,s);var l=eo;if(l&&t&&n){var f='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ot(s.imageSizes)+'"]')):f+='[href="'+Ot(t)+'"]';var h=f;switch(n){case"style":h=to(t);break;case"script":h=no(t)}Gi.has(h)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Gi.set(h,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(pl(h))||n==="script"&&l.querySelector(ml(h))||(n=l.createElement("link"),Zn(n,"link",t),it(n),l.head.appendChild(n)))}}function WM(t,n){Xa.m(t,n);var s=eo;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=no(t)}if(!Gi.has(h)&&(t=_({rel:"modulepreload",href:t},n),Gi.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(h)))return}l=s.createElement("link"),Zn(l,"link",t),it(l),s.head.appendChild(l)}}}function YM(t,n,s){Xa.S(t,n,s);var l=eo;if(l&&t){var f=Ke(l).hoistableStyles,h=to(t);n=n||"default";var x=f.get(h);if(!x){var R={loading:0,preload:null};if(x=l.querySelector(pl(h)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Gi.get(h))&&Td(t,s);var G=x=l.createElement("link");it(G),Zn(G,"link",t),G._p=new Promise(function(oe,_e){G.onload=oe,G.onerror=_e}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Oc(x,n,l)}x={type:"stylesheet",instance:x,count:1,state:R},f.set(h,x)}}}function qM(t,n){Xa.X(t,n);var s=eo;if(s&&t){var l=Ke(s).hoistableScripts,f=no(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0},n),(n=Gi.get(f))&&Ad(t,n),h=s.createElement("script"),it(h),Zn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function jM(t,n){Xa.M(t,n);var s=eo;if(s&&t){var l=Ke(s).hoistableScripts,f=no(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0,type:"module"},n),(n=Gi.get(f))&&Ad(t,n),h=s.createElement("script"),it(h),Zn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function a_(t,n,s,l){var f=(f=ee.current)?Uc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=to(s.href),s=Ke(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=to(s.href);var h=Ke(f).hoistableStyles,x=h.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,x),(h=f.querySelector(pl(t)))&&!h._p&&(x.instance=h,x.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),h||ZM(f,t,s,x.state))),n&&l===null)throw Error(r(528,""));return x}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=no(s),s=Ke(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function to(t){return'href="'+Ot(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function s_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function ZM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Zn(n,"link",s),it(n),t.head.appendChild(n))}function no(t){return'[src="'+Ot(t)+'"]'}function ml(t){return"script[async]"+t}function r_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ot(s.href)+'"]');if(l)return n.instance=l,it(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),it(l),Zn(l,"style",f),Oc(l,s.precedence,t),n.instance=l;case"stylesheet":f=to(s.href);var h=t.querySelector(pl(f));if(h)return n.state.loading|=4,n.instance=h,it(h),h;l=s_(s),(f=Gi.get(f))&&Td(l,f),h=(t.ownerDocument||t).createElement("link"),it(h);var x=h;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Zn(h,"link",l),n.state.loading|=4,Oc(h,s.precedence,t),n.instance=h;case"script":return h=no(s.src),(f=t.querySelector(ml(h)))?(n.instance=f,it(f),f):(l=s,(f=Gi.get(h))&&(l=_({},s),Ad(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),it(f),Zn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Oc(l,s.precedence,t));return n.instance}function Oc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,x=0;x<l.length;x++){var R=l[x];if(R.dataset.precedence===n)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pc=null;function o_(t,n,s){if(Pc===null){var l=new Map,f=Pc=new Map;f.set(s,l)}else f=Pc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Zi]||h[gn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=t+x;var R=l.get(x);R?R.push(h):l.set(x,[h])}}return l}function l_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function KM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function QM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=to(l.href),h=n.querySelector(pl(f));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ic.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=h,it(h);return}h=n.ownerDocument||n,l=s_(l),(f=Gi.get(f))&&Td(l,f),h=h.createElement("link"),it(h);var x=h;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Zn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ic.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Rd=0;function JM(t,n){return t.stylesheets&&t.count===0&&Bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Rd===0&&(Rd=62500*NM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Rd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Bc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach($M,t),Fc=null,Ic.call(t))}function $M(t,n){if(!(n.state.loading&4)){var s=Fc.get(t);if(s)var l=s.get(null);else{s=new Map,Fc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var x=f[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}f=n.instance,x=f.getAttribute("data-precedence"),h=s.get(x)||l,h===l&&s.set(null,f),s.set(x,f),this.count++,l=Ic.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var gl={$$typeof:z,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ey(t,n,s,l,f,h,x,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function u_(t,n,s,l,f,h,x,R,G,oe,_e,ye){return t=new ey(t,n,s,x,G,oe,_e,ye,R),n=1,h===!0&&(n|=24),h=yi(3,null,null,n),t.current=h,h.stateNode=t,n=rf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:n},uf(h),t}function f_(t){return t?(t=Ur,t):Ur}function d_(t,n,s,l,f,h){f=f_(f),l.context===null?l.context=f:l.pendingContext=f,l=hs(n),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=ps(t,l,n),s!==null&&(gi(s,t,n),jo(s,t,n))}function h_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Cd(t,n){h_(t,n),(t=t.alternate)&&h_(t,n)}function p_(t){if(t.tag===13||t.tag===31){var n=Qs(t,67108864);n!==null&&gi(n,t,67108864),Cd(t,67108864)}}function m_(t){if(t.tag===13||t.tag===31){var n=Ri();n=is(n);var s=Qs(t,n);s!==null&&gi(s,t,n),Cd(t,n)}}var zc=!0;function ty(t,n,s,l){var f=B.T;B.T=null;var h=H.p;try{H.p=2,wd(t,n,s,l)}finally{H.p=h,B.T=f}}function ny(t,n,s,l){var f=B.T;B.T=null;var h=H.p;try{H.p=8,wd(t,n,s,l)}finally{H.p=h,B.T=f}}function wd(t,n,s,l){if(zc){var f=Dd(l);if(f===null)md(t,n,l,Hc,s),__(t,l);else if(ay(f,t,n,s,l))l.stopPropagation();else if(__(t,l),n&4&&-1<iy.indexOf(t)){for(;f!==null;){var h=Te(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Ne(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-He(x);R.entanglements[1]|=G,x&=~G}va(h),(Vt&6)===0&&(yc=zt()+500,ul(0))}}break;case 31:case 13:R=Qs(h,2),R!==null&&gi(R,h,2),bc(),Cd(h,2)}if(h=Dd(l),h===null&&md(t,n,l,Hc,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else md(t,n,l,null,s)}}function Dd(t){return t=Ar(t),Ld(t)}var Hc=null;function Ld(t){if(Hc=null,t=Li(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=p(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hc=t,null}function g_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case U:return 2;case b:return 8;case j:case se:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ts=null,As=null,Rs=null,_l=new Map,vl=new Map,Cs=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(t,n){switch(t){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":_l.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function xl(t,n,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},n!==null&&(n=Te(n),n!==null&&p_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function ay(t,n,s,l,f){switch(n){case"focusin":return Ts=xl(Ts,t,n,s,l,f),!0;case"dragenter":return As=xl(As,t,n,s,l,f),!0;case"mouseover":return Rs=xl(Rs,t,n,s,l,f),!0;case"pointerover":var h=f.pointerId;return _l.set(h,xl(_l.get(h)||null,t,n,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,vl.set(h,xl(vl.get(h)||null,t,n,s,l,f)),!0}return!1}function v_(t){var n=Li(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,wa(t.priority,function(){m_(s)});return}}else if(n===31){if(n=p(s),n!==null){t.blockedOn=n,wa(t.priority,function(){m_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Dd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Tr=l,s.target.dispatchEvent(l),Tr=null}else return n=Te(s),n!==null&&p_(n),t.blockedOn=s,!1;n.shift()}return!0}function x_(t,n,s){Gc(t)&&s.delete(n)}function sy(){Nd=!1,Ts!==null&&Gc(Ts)&&(Ts=null),As!==null&&Gc(As)&&(As=null),Rs!==null&&Gc(Rs)&&(Rs=null),_l.forEach(x_),vl.forEach(x_)}function Vc(t,n){t.blockedOn===n&&(t.blockedOn=null,Nd||(Nd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,sy)))}var kc=null;function S_(t){kc!==t&&(kc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){kc===t&&(kc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Ld(l||s)===null)continue;break}var h=Te(s);h!==null&&(t.splice(n,3),n-=3,Df(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function io(t){function n(G){return Vc(G,t)}Ts!==null&&Vc(Ts,t),As!==null&&Vc(As,t),Rs!==null&&Vc(Rs,t),_l.forEach(n),vl.forEach(n);for(var s=0;s<Cs.length;s++){var l=Cs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)v_(s),s.blockedOn===null&&Cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],x=f[An]||null;if(typeof h=="function")x||S_(s);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,x=h[An]||null)R=x.formAction;else if(Ld(f)!==null)continue}else R=x.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),S_(s)}}}function M_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Ud(t){this._internalRoot=t}Xc.prototype.render=Ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ri();d_(s,l,t,n,null,null)},Xc.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;d_(t.current,2,null,t,null,null),bc(),n[kn]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ss();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Cs.length&&n!==0&&n<Cs[s].priority;s++);Cs.splice(s,0,t),s===0&&v_(t)}};var y_=e.version;if(y_!=="19.2.7")throw Error(r(527,y_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ry={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{ue=Wc.inject(ry),he=Wc}catch{}}return Ml.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=w0,h=D0,x=L0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=u_(t,1,!1,null,null,s,l,null,f,h,x,M_),t[kn]=n.current,pd(t),new Ud(n)},Ml.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=w0,x=D0,R=L0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=u_(t,1,!0,n,s??null,l,f,G,h,x,R,M_),n.context=f_(null),s=n.current,l=Ri(),l=is(l),f=hs(l),f.callback=null,ps(s,f,l),s=l,n.current.lanes=s,Ye(n,s),va(n),t[kn]=n.current,pd(t),new Xc(n)},Ml.version="19.2.7",Ml}var N_;function my(){if(N_)return Id.exports;N_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Id.exports=py(),Id.exports}var gy=my();const _y={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},ao=(a,e="#")=>{var i;return((i=_y[a])==null?void 0:i.trim())||e},On={app:ao("VITE_APP_URL","https://demo.morpheum.io"),docs:ao("VITE_DOCS_URL"),manifesto:ao("VITE_MANIFESTO_URL"),discord:ao("VITE_DISCORD_URL"),x:ao("VITE_X_URL"),tutorialVideo:ao("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},mu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Hd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:On.manifesto},Ds={eyebrow:{label:"A manifesto for verifiable agents",href:On.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:On.app},secondaryCta:{label:"Explore agents",href:On.explore}},U_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},O_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],wh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Gd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:On.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:On.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:On.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ls={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},so={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Yc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:On.app},social:[{label:"Join Discord",href:On.discord},{label:"Join X",href:On.x}]},P_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Co({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function vy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Yc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Co,{href:Yc.primaryCta.href,variant:"primary",children:Yc.primaryCta.label}),Yc.social.map(a=>D.jsx(Co,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function xy(){const[a,e]=We.useState(!1),i=!!On.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:wh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:On.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:wh.videoCaption})]})]})})}const Sy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Vd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Sy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function My(){const a=so.cards[0],e=so.cards[1],i=so.cards[2],r=so.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:so.kicker}),D.jsx("h2",{className:"section-title explore__title",children:so.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Vd,{type:"verified"}),D.jsx(Vd,{type:"riskScore",value:o.risk}),D.jsx(Vd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="185",yy=0,I_=1,Ey=2,gu=1,by=2,Cl=3,es=0,vi=1,ya=2,Ja=0,bo=1,Dh=2,F_=3,B_=4,Ty=5,_r=100,Ay=101,Ry=102,Cy=103,wy=104,Dy=200,Ly=201,Ny=202,Uy=203,Lh=204,Nh=205,Oy=206,Py=207,Iy=208,Fy=209,By=210,zy=211,Hy=212,Gy=213,Vy=214,Uh=0,Oh=1,Ph=2,wo=3,Ih=4,Fh=5,Bh=6,zh=7,rx=0,ky=1,Xy=2,Ta=0,ox=1,lx=2,cx=3,ux=4,fx=5,dx=6,hx=7,px=300,Mr=301,Do=302,kd=303,Xd=304,Lu=306,Hh=1e3,oa=1001,Gh=1002,Qn=1003,Wy=1004,qc=1005,Pn=1006,Wd=1007,Hs=1008,Xi=1009,mx=1010,gx=1011,Pl=1012,bp=1013,Ca=1014,Ea=1015,ts=1016,Tp=1017,Ap=1018,Il=1020,_x=35902,vx=35899,xx=1021,Sx=1022,la=1023,ns=1026,xr=1027,Mx=1028,Rp=1029,yr=1030,Cp=1031,wp=1033,_u=33776,vu=33777,xu=33778,Su=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,Yh=36196,qh=37492,jh=37496,Zh=37488,Kh=37489,Eu=37490,Qh=37491,Jh=37808,$h=37809,ep=37810,tp=37811,np=37812,ip=37813,ap=37814,sp=37815,rp=37816,op=37817,lp=37818,cp=37819,up=37820,fp=37821,dp=36492,hp=36494,pp=36495,mp=36283,gp=36284,bu=36285,_p=36286,Yy=3200,z_=0,qy=1,zs="",ui="srgb",Tu="srgb-linear",Au="linear",jt="srgb",ro=7680,H_=519,jy=512,Zy=513,Ky=514,Dp=515,Qy=516,Jy=517,Lp=518,$y=519,G_=35044,V_="300 es",ba=2e3,Ru=2001;function eE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Cu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function tE(){const a=Cu("canvas");return a.style.display="block",a}const k_={};function X_(...a){const e="THREE."+a.shift();console.log(e,...a)}function yx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function lt(...a){a=yx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Ut(...a){a=yx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function To(...a){const e=a.join(" ");e in k_||(k_[e]=!0,lt(...a))}function nE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const iE={[Uh]:Oh,[Ph]:Bh,[Ih]:zh,[wo]:Fh,[Oh]:Uh,[Bh]:Ph,[zh]:Ih,[Fh]:wo};class br{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let W_=1234567;const Nl=Math.PI/180,Fl=180/Math.PI;function Uo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ei[a&255]+ei[a>>8&255]+ei[a>>16&255]+ei[a>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[i&63|128]+ei[i>>8&255]+"-"+ei[i>>16&255]+ei[i>>24&255]+ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]).toLowerCase()}function Mt(a,e,i){return Math.max(e,Math.min(i,a))}function Np(a,e){return(a%e+e)%e}function aE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function sE(a,e,i){return a!==e?(i-a)/(e-a):0}function Ul(a,e,i){return(1-i)*a+i*e}function rE(a,e,i,r){return Ul(a,e,1-Math.exp(-i*r))}function oE(a,e=1){return e-Math.abs(Np(a,e*2)-e)}function lE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function cE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function uE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function fE(a,e){return a+Math.random()*(e-a)}function dE(a){return a*(.5-Math.random())}function hE(a){a!==void 0&&(W_=a);let e=W_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pE(a){return a*Nl}function mE(a){return a*Fl}function gE(a){return(a&a-1)===0&&a!==0}function _E(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function vE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function xE(a,e,i,r,o){const c=Math.cos,u=Math.sin,p=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),S=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(p*g,m*_,m*v,p*d);break;case"YZY":a.set(m*v,p*g,m*_,p*d);break;case"ZXZ":a.set(m*_,m*v,p*g,p*d);break;case"XZX":a.set(p*g,m*E,m*S,p*d);break;case"YXY":a.set(m*S,p*g,m*E,p*d);break;case"ZYZ":a.set(m*E,m*S,p*g,p*d);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Mo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const nn={DEG2RAD:Nl,RAD2DEG:Fl,generateUUID:Uo,clamp:Mt,euclideanModulo:Np,mapLinear:aE,inverseLerp:sE,lerp:Ul,damp:rE,pingpong:oE,smoothstep:lE,smootherstep:cE,randInt:uE,randFloat:fE,randFloatSpread:dE,seededRandom:hE,degToRad:pE,radToDeg:mE,isPowerOfTwo:gE,ceilPowerOfTwo:_E,floorPowerOfTwo:vE,setQuaternionFromProperEuler:xE,normalize:oi,denormalize:Mo},Xp=class Xp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xp.prototype.isVector2=!0;let Bt=Xp;class Oo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,p){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],S=c[u+1],E=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==S||g!==E){let y=m*v+d*S+g*E+_*w;y<0&&(v=-v,S=-S,E=-E,w=-w,y=-y);let M=1-p;if(y<.9995){const P=Math.acos(y),z=Math.sin(P);M=Math.sin(M*P)/z,p=Math.sin(p*P)/z,m=m*M+v*p,d=d*M+S*p,g=g*M+E*p,_=_*M+w*p}else{m=m*M+v*p,d=d*M+S*p,g=g*M+E*p,_=_*M+w*p;const P=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=P,d*=P,g*=P,_*=P}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const p=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return e[i]=p*E+g*_+m*S-d*v,e[i+1]=m*E+g*v+d*_-p*S,e[i+2]=d*E+g*S+p*v-m*_,e[i+3]=g*E-p*_-m*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,p=Math.cos,m=Math.sin,d=p(r/2),g=p(o/2),_=p(c/2),v=m(r/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*S*E,this._y=d*S*_-v*g*E,this._z=d*g*E+v*S*_,this._w=d*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+d*S*E,this._y=d*S*_-v*g*E,this._z=d*g*E-v*S*_,this._w=d*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-d*S*E,this._y=d*S*_+v*g*E,this._z=d*g*E+v*S*_,this._w=d*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-d*S*E,this._y=d*S*_+v*g*E,this._z=d*g*E-v*S*_,this._w=d*g*_+v*S*E;break;case"YZX":this._x=v*g*_+d*S*E,this._y=d*S*_+v*g*E,this._z=d*g*E-v*S*_,this._w=d*g*_-v*S*E;break;case"XZY":this._x=v*g*_-d*S*E,this._y=d*S*_-v*g*E,this._z=d*g*E+v*S*_,this._w=d*g*_+v*S*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],p=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+p+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-d)*S,this._z=(u-o)*S}else if(r>p&&r>_){const S=2*Math.sqrt(1+r-p-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+d)/S}else if(p>_){const S=2*Math.sqrt(1+p-r-_);this._w=(c-d)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-r-p);this._w=(u-o)/S,this._x=(c+d)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*p+o*d-c*m,this._y=o*g+u*m+c*p-r*d,this._z=c*g+u*d+r*m-o*p,this._w=u*g-r*p-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,c=-c,u=-u,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wp=class Wp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Y_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,p=e.z,m=e.w,d=2*(u*o-p*r),g=2*(p*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-p*g,this.y=r+m*g+p*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,p=i.y,m=i.z;return this.x=o*m-c*p,this.y=c*u-r*m,this.z=r*p-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yd.copy(this).projectOnVector(e),this.sub(Yd)}reflect(e){return this.sub(Yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wp.prototype.isVector3=!0;let ae=Wp;const Yd=new ae,Y_=new Oo,Yp=class Yp{constructor(e,i,r,o,c,u,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,p,m,d)}set(e,i,r,o,c,u,p,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],p=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],w=o[0],y=o[3],M=o[6],P=o[1],z=o[4],C=o[7],O=o[2],L=o[5],F=o[8];return c[0]=u*w+p*P+m*O,c[3]=u*y+p*z+m*L,c[6]=u*M+p*C+m*F,c[1]=d*w+g*P+_*O,c[4]=d*y+g*z+_*L,c[7]=d*M+g*C+_*F,c[2]=v*w+S*P+E*O,c[5]=v*y+S*z+E*L,c[8]=v*M+S*C+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],p=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*p*d-r*c*g+r*p*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],p=e[5],m=e[6],d=e[7],g=e[8],_=g*u-p*d,v=p*m-g*c,S=d*c-u*m,E=i*_+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(p*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-p*i)*w,e[6]=S*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*p)+u+e,-o*d,o*m,-o*(-d*u+m*p)+p+i,0,0,1),this}scale(e,i){return To("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,i)),this}rotate(e){return To("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,i){return To("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yp.prototype.isMatrix3=!0;let ft=Yp;const qd=new ft,q_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SE(){const a={enabled:!0,workingColorSpace:Tu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===jt&&(o.r=$a(o.r),o.g=$a(o.g),o.b=$a(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(o.r=Ao(o.r),o.g=Ao(o.g),o.b=Ao(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zs?Au:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return To("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return To("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Tu]:{primaries:e,whitePoint:r,transfer:Au,toXYZ:q_,fromXYZ:j_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:q_,fromXYZ:j_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),a}const Ct=SE();function $a(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ao(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let oo;class ME{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{oo===void 0&&(oo=Cu("canvas")),oo.width=e.width,oo.height=e.height;const o=oo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=oo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=$a(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($a(i[r]/255)*255):i[r]=$a(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yE=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,p=o.length;u<p;u++)o[u].isDataTexture?c.push(jd(o[u].image)):c.push(jd(o[u]))}else c=jd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function jd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ME.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let EE=0;const Zd=new ae;class ni extends br{constructor(e=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,r=oa,o=oa,c=Pn,u=Hs,p=la,m=Xi,d=ni.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Uo(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zd).x}get height(){return this.source.getSize(Zd).y}get depth(){return this.source.getSize(Zd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case oa:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case oa:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=px;ni.DEFAULT_ANISOTROPY=1;const qp=class qp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(d+S+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,C=(S+1)/2,O=(M+1)/2,L=(g+v)/4,F=(_+w)/4,T=(E+y)/4;return z>C&&z>O?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=F/r):C>O?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=F/c,o=T/c),this.set(r,o,c,i),this}let P=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(_-w)/P,this.z=(v-g)/P,this.w=Math.acos((d+S+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qp.prototype.isVector4=!0;let Mn=qp;class bE extends br{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Mn(0,0,e,i),this.scissorTest=!1,this.viewport=new Mn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new ni(o),u=r.count;for(let p=0;p<u;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Up(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Aa extends bE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ex extends ni{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends ni{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=class Du{constructor(e,i,r,o,c,u,p,m,d,g,_,v,S,E,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,p,m,d,g,_,v,S,E,w,y)}set(e,i,r,o,c,u,p,m,d,g,_,v,S,E,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=p,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=S,M[7]=E,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Du().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/lo.setFromMatrixColumn(e,0).length(),c=1/lo.setFromMatrixColumn(e,1).length(),u=1/lo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),p=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,S=u*_,E=p*g,w=p*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=S+E*d,i[5]=v-w*d,i[9]=-p*m,i[2]=w-v*d,i[6]=E+S*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,E=d*g,w=d*_;i[0]=v+w*p,i[4]=E*p-S,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-p,i[2]=S*p-E,i[6]=w+v*p,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,E=d*g,w=d*_;i[0]=v-w*p,i[4]=-u*_,i[8]=E+S*p,i[1]=S+E*p,i[5]=u*g,i[9]=w-v*p,i[2]=-u*d,i[6]=p,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,S=u*_,E=p*g,w=p*_;i[0]=m*g,i[4]=E*d-S,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=S*d-E,i[2]=-d,i[6]=p*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,S=u*d,E=p*m,w=p*d;i[0]=m*g,i[4]=w-v*_,i[8]=E*_+S,i[1]=_,i[5]=u*g,i[9]=-p*g,i[2]=-d*g,i[6]=S*_+E,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,S=u*d,E=p*m,w=p*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=p*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AE,e,RE)}lookAt(e,i,r){const o=this.elements;return Ci.subVectors(e,i),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Ns.crossVectors(r,Ci),Ns.lengthSq()===0&&(Math.abs(r.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Ns.crossVectors(r,Ci)),Ns.normalize(),jc.crossVectors(Ci,Ns),o[0]=Ns.x,o[4]=jc.x,o[8]=Ci.x,o[1]=Ns.y,o[5]=jc.y,o[9]=Ci.y,o[2]=Ns.z,o[6]=jc.z,o[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],p=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],w=r[6],y=r[10],M=r[14],P=r[3],z=r[7],C=r[11],O=r[15],L=o[0],F=o[4],T=o[8],N=o[12],Y=o[1],V=o[5],Z=o[9],pe=o[13],ce=o[2],q=o[6],B=o[10],H=o[14],te=o[3],ge=o[7],Se=o[11],I=o[15];return c[0]=u*L+p*Y+m*ce+d*te,c[4]=u*F+p*V+m*q+d*ge,c[8]=u*T+p*Z+m*B+d*Se,c[12]=u*N+p*pe+m*H+d*I,c[1]=g*L+_*Y+v*ce+S*te,c[5]=g*F+_*V+v*q+S*ge,c[9]=g*T+_*Z+v*B+S*Se,c[13]=g*N+_*pe+v*H+S*I,c[2]=E*L+w*Y+y*ce+M*te,c[6]=E*F+w*V+y*q+M*ge,c[10]=E*T+w*Z+y*B+M*Se,c[14]=E*N+w*pe+y*H+M*I,c[3]=P*L+z*Y+C*ce+O*te,c[7]=P*F+z*V+C*q+O*ge,c[11]=P*T+z*Z+C*B+O*Se,c[15]=P*N+z*pe+C*H+O*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],p=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],w=e[7],y=e[11],M=e[15],P=m*S-d*v,z=p*S-d*_,C=p*v-m*_,O=u*S-d*g,L=u*v-m*g,F=u*_-p*g;return i*(w*P-y*z+M*C)-r*(E*P-y*O+M*L)+o*(E*z-w*O+M*F)-c*(E*C-w*L+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],p=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-p*d)-r*(c*g-p*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],p=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],w=e[13],y=e[14],M=e[15],P=i*p-r*u,z=i*m-o*u,C=i*d-c*u,O=r*m-o*p,L=r*d-c*p,F=o*d-c*m,T=g*w-_*E,N=g*y-v*E,Y=g*M-S*E,V=_*y-v*w,Z=_*M-S*w,pe=v*M-S*y,ce=P*pe-z*Z+C*V+O*Y-L*N+F*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ce;return e[0]=(p*pe-m*Z+d*V)*q,e[1]=(o*Z-r*pe-c*V)*q,e[2]=(w*F-y*L+M*O)*q,e[3]=(v*L-_*F-S*O)*q,e[4]=(m*Y-u*pe-d*N)*q,e[5]=(i*pe-o*Y+c*N)*q,e[6]=(y*C-E*F-M*z)*q,e[7]=(g*F-v*C+S*z)*q,e[8]=(u*Z-p*Y+d*T)*q,e[9]=(r*Y-i*Z-c*T)*q,e[10]=(E*L-w*C+M*P)*q,e[11]=(_*C-g*L-S*P)*q,e[12]=(p*N-u*V-m*T)*q,e[13]=(i*V-r*N+o*T)*q,e[14]=(w*z-E*O-y*P)*q,e[15]=(g*O-_*z+v*P)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,p=e.y,m=e.z,d=c*u,g=c*p;return this.set(d*u+r,d*p-o*m,d*m+o*p,0,d*p+o*m,g*p+r,g*m-o*u,0,d*m-o*p,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,p=i._z,m=i._w,d=c+c,g=u+u,_=p+p,v=c*d,S=c*g,E=c*_,w=u*g,y=u*_,M=p*_,P=m*d,z=m*g,C=m*_,O=r.x,L=r.y,F=r.z;return o[0]=(1-(w+M))*O,o[1]=(S+C)*O,o[2]=(E-z)*O,o[3]=0,o[4]=(S-C)*L,o[5]=(1-(v+M))*L,o[6]=(y+P)*L,o[7]=0,o[8]=(E+z)*F,o[9]=(y-P)*F,o[10]=(1-(v+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=lo.set(o[0],o[1],o[2]).length();const p=lo.set(o[4],o[5],o[6]).length(),m=lo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ia.copy(this);const d=1/u,g=1/p,_=1/m;return ia.elements[0]*=d,ia.elements[1]*=d,ia.elements[2]*=d,ia.elements[4]*=g,ia.elements[5]*=g,ia.elements[6]*=g,ia.elements[8]*=_,ia.elements[9]*=_,ia.elements[10]*=_,i.setFromRotationMatrix(ia),r.x=u,r.y=p,r.z=m,this}makePerspective(e,i,r,o,c,u,p=ba,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),S=(r+o)/(r-o);let E,w;if(m)E=c/(u-c),w=u*c/(u-c);else if(p===ba)E=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(p===Ru)E=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,p=ba,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),S=-(r+o)/(r-o);let E,w;if(m)E=1/(u-c),w=u/(u-c);else if(p===ba)E=-2/(u-c),w=-(u+c)/(u-c);else if(p===Ru)E=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Du.prototype.isMatrix4=!0;let Tn=Du;const lo=new ae,ia=new Tn,AE=new ae(0,0,0),RE=new ae(1,1,1),Ns=new ae,jc=new ae,Ci=new ae,Z_=new Tn,K_=new Oo;class Er{constructor(e=0,i=0,r=0,o=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],p=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return K_.setFromEuler(this),this.setFromQuaternion(K_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CE=0;const Q_=new ae,co=new Oo,Wa=new Tn,Zc=new ae,yl=new ae,wE=new ae,DE=new Oo,J_=new ae(1,0,0),$_=new ae(0,1,0),ev=new ae(0,0,1),tv={type:"added"},LE={type:"removed"},uo={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Di extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Di.DEFAULT_UP.clone();const e=new ae,i=new Er,r=new Oo,o=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tn},normalMatrix:{value:new ft}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=Di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return co.setFromAxisAngle(e,i),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,i){return co.setFromAxisAngle(e,i),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(J_,e)}rotateY(e){return this.rotateOnAxis($_,e)}rotateZ(e){return this.rotateOnAxis(ev,e)}translateOnAxis(e,i){return Q_.copy(e).applyQuaternion(this.quaternion),this.position.add(Q_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(J_,e)}translateY(e){return this.translateOnAxis($_,e)}translateZ(e){return this.translateOnAxis(ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Zc.copy(e):Zc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(yl,Zc,this.up):Wa.lookAt(Zc,yl,this.up),this.quaternion.setFromRotationMatrix(Wa),o&&(Wa.extractRotation(o.matrixWorld),co.setFromRotationMatrix(Wa),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tv),uo.child=e,this.dispatchEvent(uo),uo.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(LE),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tv),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,DE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,p=c.length;u<p;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));o.material=p}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(e.animations,m))}}if(i){const p=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Di.DEFAULT_UP=new ae(0,1,0);Di.DEFAULT_MATRIX_AUTO_UPDATE=!0;Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wl extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;d.inputState.pinching&&v>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new wl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Jd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Lt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=Np(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Jd(u,c,e+1/3),this.g=Jd(u,c,e),this.b=Jd(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],p=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=Tx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ct.workingToColorSpace(ti.copy(this),e),Math.round(Mt(ti.r*255,0,255))*65536+Math.round(Mt(ti.g*255,0,255))*256+Math.round(Mt(ti.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(ti.copy(this),i);const r=ti.r,o=ti.g,c=ti.b,u=Math.max(r,o,c),p=Math.min(r,o,c);let m,d;const g=(p+u)/2;if(p===u)m=0,d=0;else{const _=u-p;switch(d=g<=.5?_/(u+p):_/(2-u-p),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(ti.copy(this),i),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=ui){Ct.workingToColorSpace(ti.copy(this),e);const i=ti.r,r=ti.g,o=ti.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+i,Us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Us),e.getHSL(Kc);const r=Ul(Us.h,Kc.h,i),o=Ul(Us.s,Kc.s,i),c=Ul(Us.l,Kc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Lt;Lt.NAMES=Tx;class UE extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const aa=new ae,Ya=new ae,$d=new ae,qa=new ae,fo=new ae,ho=new ae,nv=new ae,eh=new ae,th=new ae,nh=new ae,ih=new Mn,ah=new Mn,sh=new Mn;class ra{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),aa.subVectors(e,i),o.cross(aa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){aa.subVectors(o,i),Ya.subVectors(r,i),$d.subVectors(e,i);const u=aa.dot(aa),p=aa.dot(Ya),m=aa.dot($d),d=Ya.dot(Ya),g=Ya.dot($d),_=u*d-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(d*m-p*g)*v,E=(u*g-p*m)*v;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,qa)===null?!1:qa.x>=0&&qa.y>=0&&qa.x+qa.y<=1}static getInterpolation(e,i,r,o,c,u,p,m){return this.getBarycoord(e,i,r,o,qa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,qa.x),m.addScaledVector(u,qa.y),m.addScaledVector(p,qa.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return ih.setScalar(0),ah.setScalar(0),sh.setScalar(0),ih.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,r),sh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ih,c.x),u.addScaledVector(ah,c.y),u.addScaledVector(sh,c.z),u}static isFrontFacing(e,i,r,o){return aa.subVectors(r,i),Ya.subVectors(e,i),aa.cross(Ya).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return aa.subVectors(this.c,this.b),Ya.subVectors(this.a,this.b),aa.cross(Ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ra.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ra.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ra.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ra.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ra.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,p;fo.subVectors(o,r),ho.subVectors(c,r),eh.subVectors(e,r);const m=fo.dot(eh),d=ho.dot(eh);if(m<=0&&d<=0)return i.copy(r);th.subVectors(e,o);const g=fo.dot(th),_=ho.dot(th);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(fo,u);nh.subVectors(e,c);const S=fo.dot(nh),E=ho.dot(nh);if(E>=0&&S<=E)return i.copy(c);const w=S*d-m*E;if(w<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(r).addScaledVector(ho,p);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return nv.subVectors(c,o),p=(_-g)/(_-g+(S-E)),i.copy(o).addScaledVector(nv,p);const M=1/(y+w+v);return u=w*M,p=v*M,i.copy(r).addScaledVector(fo,u).addScaledVector(ho,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(sa.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(sa.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=sa.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,p=c.count;u<p;u++)e.isMesh===!0?e.getVertexPosition(u,sa):sa.fromBufferAttribute(c,u),sa.applyMatrix4(e.matrixWorld),this.expandByPoint(sa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qc.copy(r.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sa),sa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),Jc.subVectors(this.max,El),po.subVectors(e.a,El),mo.subVectors(e.b,El),go.subVectors(e.c,El),Os.subVectors(mo,po),Ps.subVectors(go,mo),ur.subVectors(po,go);let i=[0,-Os.z,Os.y,0,-Ps.z,Ps.y,0,-ur.z,ur.y,Os.z,0,-Os.x,Ps.z,0,-Ps.x,ur.z,0,-ur.x,-Os.y,Os.x,0,-Ps.y,Ps.x,0,-ur.y,ur.x,0];return!rh(i,po,mo,go,Jc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,po,mo,go,Jc))?!1:($c.crossVectors(Os,Ps),i=[$c.x,$c.y,$c.z],rh(i,po,mo,go,Jc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ja),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ja=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],sa=new ae,Qc=new zl,po=new ae,mo=new ae,go=new ae,Os=new ae,Ps=new ae,ur=new ae,El=new ae,Jc=new ae,$c=new ae,fr=new ae;function rh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){fr.fromArray(a,c);const p=o.x*Math.abs(fr.x)+o.y*Math.abs(fr.y)+o.z*Math.abs(fr.z),m=e.dot(fr),d=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const Un=new ae,eu=new Bt;let OE=0;class Ra extends br{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=G_,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(e),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix3(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.applyMatrix4(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.applyNormalMatrix(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Un.fromBufferAttribute(this,i),Un.transformDirection(e),this.setXYZ(i,Un.x,Un.y,Un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=oi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Mo(i,this.array)),i}setX(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Mo(i,this.array)),i}setY(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Mo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Mo(i,this.array)),i}setW(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),r=oi(r,this.array),o=oi(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),r=oi(r,this.array),o=oi(o,this.array),c=oi(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ax extends Ra{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Rx extends Ra{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wi extends Ra{constructor(e,i,r){super(new Float32Array(e),i,r)}}const PE=new zl,bl=new ae,oh=new ae;class Op{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):PE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const i=bl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(bl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(oh)),this.expandByPoint(bl.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let IE=0;const Vi=new Tn,lh=new Di,_o=new ae,wi=new zl,Tl=new zl,Vn=new ae;class qi extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eE(e)?Rx:Ax)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,i,r){return Vi.makeTranslation(e,i,r),this.applyMatrix4(Vi),this}scale(e,i,r){return Vi.makeScale(e,i,r),this.applyMatrix4(Vi),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Op);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const p=i[c];Tl.setFromBufferAttribute(p),this.morphTargetsRelative?(Vn.addVectors(wi.min,Tl.min),wi.expandByPoint(Vn),Vn.addVectors(wi.max,Tl.max),wi.expandByPoint(Vn)):(wi.expandByPoint(Tl.min),wi.expandByPoint(Tl.max))}wi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Vn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Vn));if(i)for(let c=0,u=i.length;c<u;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)Vn.fromBufferAttribute(p,d),m&&(_o.fromBufferAttribute(e,d),Vn.add(_o)),o=Math.max(o,r.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ra(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new ae,m[T]=new ae;const d=new ae,g=new ae,_=new ae,v=new Bt,S=new Bt,E=new Bt,w=new ae,y=new ae;function M(T,N,Y){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,Y),v.fromBufferAttribute(c,T),S.fromBufferAttribute(c,N),E.fromBufferAttribute(c,Y),g.sub(d),_.sub(d),S.sub(v),E.sub(v);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),p[T].add(w),p[N].add(w),p[Y].add(w),m[T].add(y),m[N].add(y),m[Y].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,N=P.length;T<N;++T){const Y=P[T],V=Y.start,Z=Y.count;for(let pe=V,ce=V+Z;pe<ce;pe+=3)M(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const z=new ae,C=new ae,O=new ae,L=new ae;function F(T){O.fromBufferAttribute(o,T),L.copy(O);const N=p[T];z.copy(N),z.sub(O.multiplyScalar(O.dot(N))).normalize(),C.crossVectors(L,N);const V=C.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,N=P.length;T<N;++T){const Y=P[T],V=Y.start,Z=Y.count;for(let pe=V,ce=V+Z;pe<ce;pe+=3)F(e.getX(pe+0)),F(e.getX(pe+1)),F(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ra(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ae,c=new ae,u=new ae,p=new ae,m=new ae,d=new ae,g=new ae,_=new ae;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),p.add(g),m.add(g),d.add(g),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=i.count;v<S;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Vn.fromBufferAttribute(e,i),Vn.normalize(),e.setXYZ(i,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(p,m){const d=p.array,g=p.itemSize,_=p.normalized,v=new d.constructor(m.length*g);let S=0,E=0;for(let w=0,y=m.length;w<y;w++){p.isInterleavedBufferAttribute?S=m[w]*p.data.stride+p.offset:S=m[w]*g;for(let M=0;M<g;M++)v[E++]=d[S++]}return new Ra(v,g,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qi,r=this.index.array,o=this.attributes;for(const p in o){const m=o[p],d=e(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,_=d.length;g<_;g++){const v=d[g],S=e(v,r);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let p=0,m=u.length;p<m;p++){const d=u[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const S=d[_];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let FE=0;class Nu extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=bo,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==es&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const p in c){const m=c[p];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Za=new ae,ch=new ae,tu=new ae,Is=new ae,uh=new ae,nu=new ae,fh=new ae;class BE{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Za)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Za.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Za.copy(this.origin).addScaledVector(this.direction,i),Za.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){ch.copy(e).add(i).multiplyScalar(.5),tu.copy(i).sub(e).normalize(),Is.copy(this.origin).sub(ch);const c=e.distanceTo(i)*.5,u=-this.direction.dot(tu),p=Is.dot(this.direction),m=-Is.dot(tu),d=Is.lengthSq(),g=Math.abs(1-u*u);let _,v,S,E;if(g>0)if(_=u*m-p,v=u*p-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,S=_*(_+u*v+2*p)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+p)),S=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+p)),S=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+d):(_=Math.max(0,-(u*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+p)),S=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ch).addScaledVector(tu,v),S}intersectSphere(e,i){Za.subVectors(e.center,this.origin);const r=Za.dot(this.direction),o=Za.dot(Za)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),p=r-u,m=r+u;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,p,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(p=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(p=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||p>o)||((p>r||r!==r)&&(r=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Za)!==null}intersectTriangle(e,i,r,o,c){uh.subVectors(i,e),nu.subVectors(r,e),fh.crossVectors(uh,nu);let u=this.direction.dot(fh),p;if(u>0){if(o)return null;p=1}else if(u<0)p=-1,u=-u;else return null;Is.subVectors(this.origin,e);const m=p*this.direction.dot(nu.crossVectors(Is,nu));if(m<0)return null;const d=p*this.direction.dot(uh.cross(Is));if(d<0||m+d>u)return null;const g=-p*Is.dot(fh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pp extends Nu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const iv=new Tn,dr=new BE,iu=new Op,av=new ae,au=new ae,su=new ae,ru=new ae,dh=new ae,ou=new ae,sv=new ae,lu=new ae;class Yi extends Di{constructor(e=new qi,i=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(c&&p){ou.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],_=c[m];g!==0&&(dh.fromBufferAttribute(_,e),u?ou.addScaledVector(dh,g):ou.addScaledVector(dh.sub(i),g))}i.add(ou)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(c),dr.copy(e.ray).recast(e.near),!(iu.containsPoint(dr.origin)===!1&&(dr.intersectSphere(iu,av)===null||dr.origin.distanceToSquared(av)>(e.far-e.near)**2))&&(iv.copy(c).invert(),dr.copy(e.ray).applyMatrix4(iv),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,dr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],P=Math.max(y.start,S.start),z=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,O=z;C<O;C+=3){const L=p.getX(C),F=p.getX(C+1),T=p.getX(C+2);o=cu(this,M,e,r,d,g,_,L,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=E,M=w;y<M;y+=3){const P=p.getX(y),z=p.getX(y+1),C=p.getX(y+2);o=cu(this,u,e,r,d,g,_,P,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],P=Math.max(y.start,S.start),z=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,O=z;C<O;C+=3){const L=C,F=C+1,T=C+2;o=cu(this,M,e,r,d,g,_,L,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let y=E,M=w;y<M;y+=3){const P=y,z=y+1,C=y+2;o=cu(this,u,e,r,d,g,_,P,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function zE(a,e,i,r,o,c,u,p){let m;if(e.side===vi?m=r.intersectTriangle(u,c,o,!0,p):m=r.intersectTriangle(o,c,u,e.side===es,p),m===null)return null;lu.copy(p),lu.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(lu);return d<i.near||d>i.far?null:{distance:d,point:lu.clone(),object:a}}function cu(a,e,i,r,o,c,u,p,m,d){a.getVertexPosition(p,au),a.getVertexPosition(m,su),a.getVertexPosition(d,ru);const g=zE(a,e,i,r,au,su,ru,sv);if(g){const _=new ae;ra.getBarycoord(sv,au,su,ru,_),o&&(g.uv=ra.getInterpolatedAttribute(o,p,m,d,_,new Bt)),c&&(g.uv1=ra.getInterpolatedAttribute(c,p,m,d,_,new Bt)),u&&(g.normal=ra.getInterpolatedAttribute(u,p,m,d,_,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:d,normal:new ae,materialIndex:0};ra.getNormal(au,su,ru,v.normal),g.face=v,g.barycoord=_}return g}class HE extends ni{constructor(e=null,i=1,r=1,o,c,u,p,m,d=Qn,g=Qn,_,v){super(null,u,p,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new ae,GE=new ae,VE=new ft;class mr{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=hh.subVectors(r,i).cross(GE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(hh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||VE.getNormalMatrix(e),o=this.coplanarPoint(hh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Op,kE=new Bt(.5,.5),uu=new ae;class Cx{constructor(e=new mr,i=new mr,r=new mr,o=new mr,c=new mr,u=new mr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(o),p[4].copy(c),p[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ba,r=!1){const o=this.planes,c=e.elements,u=c[0],p=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],S=c[7],E=c[8],w=c[9],y=c[10],M=c[11],P=c[12],z=c[13],C=c[14],O=c[15];if(o[0].setComponents(d-u,S-g,M-E,O-P).normalize(),o[1].setComponents(d+u,S+g,M+E,O+P).normalize(),o[2].setComponents(d+p,S+_,M+w,O+z).normalize(),o[3].setComponents(d-p,S-_,M-w,O-z).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(d-m,S-v,M-y,O-C).normalize();else if(o[4].setComponents(d-m,S-v,M-y,O-C).normalize(),i===ba)o[5].setComponents(d+m,S+v,M+y,O+C).normalize();else if(i===Ru)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);const i=kE.distanceTo(e.center);return hr.radius=.7071067811865476+i,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(uu.x=o.normal.x>0?e.max.x:e.min.x,uu.y=o.normal.y>0?e.max.y:e.min.y,uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wx extends ni{constructor(e=[],i=Mr,r,o,c,u,p,m,d,g){super(e,i,r,o,c,u,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dx extends ni{constructor(e,i,r,o,c,u,p,m,d){super(e,i,r,o,c,u,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lo extends ni{constructor(e,i,r=Ca,o,c,u,p=Qn,m=Qn,d,g=ns,_=1){if(g!==ns&&g!==xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,p,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class XE extends Lo{constructor(e,i=Ca,r=Mr,o,c,u=Qn,p=Qn,m,d=ns){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,p,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lx extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hl extends qi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const p=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Wi(d,3)),this.setAttribute("normal",new Wi(g,3)),this.setAttribute("uv",new Wi(_,2));function E(w,y,M,P,z,C,O,L,F,T,N){const Y=C/F,V=O/T,Z=C/2,pe=O/2,ce=L/2,q=F+1,B=T+1;let H=0,te=0;const ge=new ae;for(let Se=0;Se<B;Se++){const I=Se*V-pe;for(let Q=0;Q<q;Q++){const Me=Q*Y-Z;ge[w]=Me*P,ge[y]=I*z,ge[M]=ce,d.push(ge.x,ge.y,ge.z),ge[w]=0,ge[y]=0,ge[M]=L>0?1:-1,g.push(ge.x,ge.y,ge.z),_.push(Q/F),_.push(1-Se/T),H+=1}}for(let Se=0;Se<T;Se++)for(let I=0;I<F;I++){const Q=v+I+q*Se,Me=v+I+q*(Se+1),Ae=v+(I+1)+q*(Se+1),ze=v+(I+1)+q*Se;m.push(Q,Me,ze),m.push(Me,Ae,ze),te+=6}p.addGroup(S,te,N),S+=te,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class WE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let p=0,m=c-1,d;for(;p<=m;)if(o=Math.floor(p+(m-p)/2),d=r[o]-u,d<0)p=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,S=(u-g)/v;return(o+S)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),p=this.getPoint(c),m=i||(u.isVector2?new Bt:new ae);return m.copy(p).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ae,o=[],c=[],u=[],p=new ae,m=new Tn;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new ae)}c[0]=new ae,u[0]=new ae;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),p.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],p),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),p.crossVectors(o[S-1],o[S]),p.length()>Number.EPSILON){p.normalize();const E=Math.acos(Mt(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(p,E))}u[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(Mt(c[0].dot(c[e]),-1,1));S/=e,o[0].dot(p.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ip(){let a=0,e=0,i=0,r=0;function o(c,u,p,m){a=c,e=p,i=-3*c+3*u-2*p-m,r=2*c-2*u+p+m}return{initCatmullRom:function(c,u,p,m,d){o(u,p,d*(p-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,p,m,d,g,_){let v=(u-c)/d-(p-c)/(d+g)+(p-u)/g,S=(p-u)/g-(m-u)/(g+_)+(m-p)/_;v*=g,S*=g,o(u,p,v,S)},calc:function(c){const u=c*c,p=u*c;return a+e*c+i*u+r*p}}}const rv=new ae,ov=new ae,ph=new Ip,mh=new Ip,gh=new Ip;class YE extends WE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ae){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let p=Math.floor(u),m=u-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/c)+1)*c:m===0&&p===c-1&&(p=c-2,m=1);let d,g;this.closed||p>0?d=o[(p-1)%c]:(ov.subVectors(o[0],o[1]).add(o[0]),d=ov);const _=o[p%c],v=o[(p+1)%c];if(this.closed||p+2<c?g=o[(p+2)%c]:(rv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=rv),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),S),w=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),ph.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,w,y),mh.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,w,y),gh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),mh.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),gh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(ph.calc(m),mh.calc(m),gh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ae().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Sr extends qi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,p=Math.floor(r),m=Math.floor(o),d=p+1,g=m+1,_=e/p,v=i/m,S=[],E=[],w=[],y=[];for(let M=0;M<g;M++){const P=M*v-u;for(let z=0;z<d;z++){const C=z*_-c;E.push(C,-P,0),w.push(0,0,1),y.push(z/p),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let P=0;P<p;P++){const z=P+d*M,C=P+d*(M+1),O=P+1+d*(M+1),L=P+1+d*M;S.push(z,C,L),S.push(C,O,L)}this.setIndex(S),this.setAttribute("position",new Wi(E,3)),this.setAttribute("normal",new Wi(w,3)),this.setAttribute("uv",new Wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}function No(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(lv(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(lv(o[0])){const c=[];for(let u=0,p=o.length;u<p;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function li(a){const e={};for(let i=0;i<a.length;i++){const r=No(a[i]);for(const o in r)e[o]=r[o]}return e}function lv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function qE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Nx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const jE={clone:No,merge:li};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Nu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Bt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Mn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class QE extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JE extends Nu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $E extends Nu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fu=new ae,du=new Oo,xa=new ae;class Ux extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fu,du,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,xa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(fu,du,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fs=new ae,cv=new Bt,uv=new Bt;class ki extends Ux{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,i){return this.getViewBounds(e,cv,uv),i.subVectors(uv,cv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ox extends Ux{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,p=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const vo=-90,xo=1;class eb extends Di{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ki(vo,xo,e,i);o.layers=this.layers,this.add(o);const c=new ki(vo,xo,e,i);c.layers=this.layers,this.add(c);const u=new ki(vo,xo,e,i);u.layers=this.layers,this.add(u);const p=new ki(vo,xo,e,i);p.layers=this.layers,this.add(p);const m=new ki(vo,xo,e,i);m.layers=this.layers,this.add(m);const d=new ki(vo,xo,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,p,m]=i;for(const d of i)this.remove(d);if(e===ba)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ru)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,p,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class tb extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jp=class jp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};jp.prototype.isMatrix2=!0;let fv=jp;function dv(a,e,i,r){const o=nb(r);switch(i){case xx:return a*e;case Mx:return a*e/o.components*o.byteLength;case Rp:return a*e/o.components*o.byteLength;case yr:return a*e*2/o.components*o.byteLength;case Cp:return a*e*2/o.components*o.byteLength;case Sx:return a*e*3/o.components*o.byteLength;case la:return a*e*4/o.components*o.byteLength;case wp:return a*e*4/o.components*o.byteLength;case _u:case vu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xu:case Su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kh:case Wh:return Math.max(a,16)*Math.max(e,8)/4;case Vh:case Xh:return Math.max(a,8)*Math.max(e,8)/2;case Yh:case qh:case Zh:case Kh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case jh:case Eu:case Qh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case tp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ap:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case rp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case up:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case dp:case hp:case pp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case mp:case gp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case bu:case _p:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nb(a){switch(a){case Xi:case mx:return{byteLength:1,components:1};case Pl:case gx:case ts:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Ca:case bp:case Ea:return{byteLength:4,components:1};case _x:case vx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function ib(a){const e=new WeakMap;function i(p,m){const d=p.array,g=p.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),p.onUploadCallback();let S;if(d instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=a.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=a.SHORT;else if(d instanceof Uint32Array)S=a.UNSIGNED_INT;else if(d instanceof Int32Array)S=a.INT;else if(d instanceof Int8Array)S=a.BYTE;else if(d instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,p),_.length===0)a.bufferSubData(d,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],w=_[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const w=_[S];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(a.deleteBuffer(m.buffer),e.delete(p))}function u(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:o,remove:c,update:u}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
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
#endif`,rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ub=`#ifdef USE_AOMAP
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
#endif`,fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,db=`#ifdef USE_BATCHING
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
#endif`,hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_b=`#ifdef USE_IRIDESCENCE
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
#endif`,vb=`#ifdef USE_BUMPMAP
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rb=`#define PI 3.141592653589793
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
} // validated`,Cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wb=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,n1=`uniform sampler2D dfgLUT;
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
}`,i1=`
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p1=`#if defined( USE_POINTS_UV )
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
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
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
#endif`,M1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
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
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k1=`float getShadowMask() {
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
}`,X1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sT=`uniform sampler2D t2D;
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
}`,fT=`#if DEPTH_PACKING == 3200
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
}`,dT=`#define DISTANCE
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
}`,hT=`#define DISTANCE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`uniform float scale;
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 diffuse;
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
}`,ST=`#define LAMBERT
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
}`,MT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,ET=`#define MATCAP
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
}`,bT=`#define NORMAL
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
}`,TT=`#define NORMAL
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
}`,AT=`#define PHONG
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
}`,RT=`#define PHONG
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
}`,CT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,DT=`#define TOON
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
}`,LT=`#define TOON
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
}`,NT=`uniform float size;
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
}`,UT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,PT=`uniform vec3 color;
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
}`,IT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:ab,alphahash_pars_fragment:sb,alphamap_fragment:rb,alphamap_pars_fragment:ob,alphatest_fragment:lb,alphatest_pars_fragment:cb,aomap_fragment:ub,aomap_pars_fragment:fb,batching_pars_vertex:db,batching_vertex:hb,begin_vertex:pb,beginnormal_vertex:mb,bsdfs:gb,iridescence_fragment:_b,bumpmap_pars_fragment:vb,clipping_planes_fragment:xb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:Mb,clipping_planes_vertex:yb,color_fragment:Eb,color_pars_fragment:bb,color_pars_vertex:Tb,color_vertex:Ab,common:Rb,cube_uv_reflection_fragment:Cb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Db,displacementmap_vertex:Lb,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ub,colorspace_fragment:Ob,colorspace_pars_fragment:Pb,envmap_fragment:Ib,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Bb,envmap_pars_vertex:zb,envmap_physical_pars_fragment:Kb,envmap_vertex:Hb,fog_vertex:Gb,fog_pars_vertex:Vb,fog_fragment:kb,fog_pars_fragment:Xb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Yb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:jb,lights_pars_begin:Zb,lights_toon_fragment:Qb,lights_toon_pars_fragment:Jb,lights_phong_fragment:$b,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:a1,lights_fragment_end:s1,lightprobes_pars_fragment:r1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:f1,map_pars_fragment:d1,map_particle_fragment:h1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:_1,morphcolor_vertex:v1,morphnormal_vertex:x1,morphtarget_pars_vertex:S1,morphtarget_vertex:M1,normal_fragment_begin:y1,normal_fragment_maps:E1,normal_pars_fragment:b1,normal_pars_vertex:T1,normal_vertex:A1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:D1,iridescence_pars_fragment:L1,opaque_fragment:N1,packing:U1,premultiplied_alpha_fragment:O1,project_vertex:P1,dithering_fragment:I1,dithering_pars_fragment:F1,roughnessmap_fragment:B1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:H1,shadowmap_pars_vertex:G1,shadowmap_vertex:V1,shadowmask_pars_fragment:k1,skinbase_vertex:X1,skinning_pars_vertex:W1,skinning_vertex:Y1,skinnormal_vertex:q1,specularmap_fragment:j1,specularmap_pars_fragment:Z1,tonemapping_fragment:K1,tonemapping_pars_fragment:Q1,transmission_fragment:J1,transmission_pars_fragment:$1,uv_pars_fragment:eT,uv_pars_vertex:tT,uv_vertex:nT,worldpos_vertex:iT,background_vert:aT,background_frag:sT,backgroundCube_vert:rT,backgroundCube_frag:oT,cube_vert:lT,cube_frag:cT,depth_vert:uT,depth_frag:fT,distance_vert:dT,distance_frag:hT,equirect_vert:pT,equirect_frag:mT,linedashed_vert:gT,linedashed_frag:_T,meshbasic_vert:vT,meshbasic_frag:xT,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:yT,meshmatcap_frag:ET,meshnormal_vert:bT,meshnormal_frag:TT,meshphong_vert:AT,meshphong_frag:RT,meshphysical_vert:CT,meshphysical_frag:wT,meshtoon_vert:DT,meshtoon_frag:LT,points_vert:NT,points_frag:UT,shadow_vert:OT,shadow_frag:PT,sprite_vert:IT,sprite_frag:FT},Ve={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ma={basic:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:li([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:li([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:li([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Lt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:li([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:li([Ve.points,Ve.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:li([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:li([Ve.common,Ve.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:li([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:li([Ve.sprite,Ve.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:li([Ve.common,Ve.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:li([Ve.lights,Ve.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ma.physical={uniforms:li([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const hu={r:0,b:0,g:0},BT=new Tn,Ix=new ft;Ix.set(-1,0,0,0,1,0,0,0,1);function zT(a,e,i,r,o,c){const u=new Lt(0);let p=o===!0?0:1,m,d,g=null,_=0,v=null;function S(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const C=P.backgroundBlurriness>0;z=e.get(z,C)}return z}function E(P){let z=!1;const C=S(P);C===null?y(u,p):C&&C.isColor&&(y(C,1),z=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(P,z){const C=S(z);C&&(C.isCubeTexture||C.mapping===Lu)?(d===void 0&&(d=new Yi(new Hl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:No(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(BT.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ix),d.material.toneMapped=Ct.getTransfer(C.colorSpace)!==jt,(g!==C||_!==C.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Yi(new Sr(2,2),new ji({name:"BackgroundMaterial",uniforms:No(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==jt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function y(P,z){P.getRGB(hu,Nx(a)),i.buffers.color.setClear(hu.r,hu.g,hu.b,z,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,z=1){u.set(P),p=z,y(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,y(u,p)},render:E,addToRenderList:w,dispose:M}}function HT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function p(V,Z,pe,ce,q){let B=!1;const H=_(V,ce,pe,Z);c!==H&&(c=H,d(c.object)),B=S(V,ce,pe,q),B&&E(V,ce,pe,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,C(V,Z,pe,ce),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function d(V){return a.bindVertexArray(V)}function g(V){return a.deleteVertexArray(V)}function _(V,Z,pe,ce){const q=ce.wireframe===!0;let B=r[Z.id];B===void 0&&(B={},r[Z.id]=B);const H=V.isInstancedMesh===!0?V.id:0;let te=B[H];te===void 0&&(te={},B[H]=te);let ge=te[pe.id];ge===void 0&&(ge={},te[pe.id]=ge);let Se=ge[q];return Se===void 0&&(Se=v(m()),ge[q]=Se),Se}function v(V){const Z=[],pe=[],ce=[];for(let q=0;q<i;q++)Z[q]=0,pe[q]=0,ce[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:pe,attributeDivisors:ce,object:V,attributes:{},index:null}}function S(V,Z,pe,ce){const q=c.attributes,B=Z.attributes;let H=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){const I=q[ge];let Q=B[ge];if(Q===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==ce}function E(V,Z,pe,ce){const q={},B=Z.attributes;let H=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){let I=B[ge];I===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(I=V.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),q[ge]=Q,H++}c.attributes=q,c.attributesNum=H,c.index=ce}function w(){const V=c.newAttributes;for(let Z=0,pe=V.length;Z<pe;Z++)V[Z]=0}function y(V){M(V,0)}function M(V,Z){const pe=c.newAttributes,ce=c.enabledAttributes,q=c.attributeDivisors;pe[V]=1,ce[V]===0&&(a.enableVertexAttribArray(V),ce[V]=1),q[V]!==Z&&(a.vertexAttribDivisor(V,Z),q[V]=Z)}function P(){const V=c.newAttributes,Z=c.enabledAttributes;for(let pe=0,ce=Z.length;pe<ce;pe++)Z[pe]!==V[pe]&&(a.disableVertexAttribArray(pe),Z[pe]=0)}function z(V,Z,pe,ce,q,B,H){H===!0?a.vertexAttribIPointer(V,Z,pe,q,B):a.vertexAttribPointer(V,Z,pe,ce,q,B)}function C(V,Z,pe,ce){w();const q=ce.attributes,B=pe.getAttributes(),H=Z.defaultAttributeValues;for(const te in B){const ge=B[te];if(ge.location>=0){let Se=q[te];if(Se===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(Se=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(Se=V.instanceColor)),Se!==void 0){const I=Se.normalized,Q=Se.itemSize,Me=e.get(Se);if(Me===void 0)continue;const Ae=Me.buffer,ze=Me.type,ee=Me.bytesPerElement,xe=ze===a.INT||ze===a.UNSIGNED_INT||Se.gpuType===bp;if(Se.isInterleavedBufferAttribute){const Ee=Se.data,Xe=Ee.stride,st=Se.offset;if(Ee.isInstancedInterleavedBuffer){for(let et=0;et<ge.locationSize;et++)M(ge.location+et,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let et=0;et<ge.locationSize;et++)y(ge.location+et);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let et=0;et<ge.locationSize;et++)z(ge.location+et,Q/ge.locationSize,ze,I,Xe*ee,(st+Q/ge.locationSize*et)*ee,xe)}else{if(Se.isInstancedBufferAttribute){for(let Ee=0;Ee<ge.locationSize;Ee++)M(ge.location+Ee,Se.meshPerAttribute);V.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<ge.locationSize;Ee++)y(ge.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<ge.locationSize;Ee++)z(ge.location+Ee,Q/ge.locationSize,ze,I,Q*ee,Q/ge.locationSize*Ee*ee,xe)}}else if(H!==void 0){const I=H[te];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(ge.location,I);break;case 3:a.vertexAttrib3fv(ge.location,I);break;case 4:a.vertexAttrib4fv(ge.location,I);break;default:a.vertexAttrib1fv(ge.location,I)}}}}P()}function O(){N();for(const V in r){const Z=r[V];for(const pe in Z){const ce=Z[pe];for(const q in ce){const B=ce[q];for(const H in B)g(B[H].object),delete B[H];delete ce[q]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const pe in Z){const ce=Z[pe];for(const q in ce){const B=ce[q];for(const H in B)g(B[H].object),delete B[H];delete ce[q]}}delete r[V.id]}function F(V){for(const Z in r){const pe=r[Z];for(const ce in pe){const q=pe[ce];if(q[V.id]===void 0)continue;const B=q[V.id];for(const H in B)g(B[H].object),delete B[H];delete q[V.id]}}}function T(V){for(const Z in r){const pe=r[Z],ce=V.isInstancedMesh===!0?V.id:0,q=pe[ce];if(q!==void 0){for(const B in q){const H=q[B];for(const te in H)g(H[te].object),delete H[te];delete q[B]}delete pe[ce],Object.keys(pe).length===0&&delete r[Z]}}}function N(){Y(),u=!0,c!==o&&(c=o,d(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:N,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function GT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function p(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let S=0;S<g;S++)v+=d[S];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p}function VT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==la&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Xi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ea&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(lt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:C,maxSamples:O,samples:L}}function kT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new mr,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):d();else{const P=c?0:r,z=P*4;let C=M.clippingState||null;m.value=C,C=g(E,v,z,S);for(let O=0;O!==z;++O)C[O]=i[O];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const M=S+w*4,P=v.matrixWorldInverse;p.getNormalMatrix(P),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,C=S;z!==w;++z,C+=4)u.copy(_[z]).applyMatrix4(P,p),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Gs=4,hv=[.125,.215,.35,.446,.526,.582],vr=20,XT=256,Al=new Ox,pv=new Lt;let _h=null,vh=0,xh=0,Sh=!1;const WT=new ae;class mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:p=WT}=c;_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,vh,xh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Mr||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ts,format:la,colorSpace:Tu,depthBuffer:!1},o=gv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YT(c)),this._blurMaterial=jT(c,e,i),this._ggxMaterial=qT(c,e,i)}return o}_compileMaterial(e){const i=new Yi(new qi,e);this._renderer.compile(i,Al)}_sceneToCubeUV(e,i,r,o,c){const m=new ki(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(pv),_.toneMapping=Ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new Hl,new Pp({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,M=!0):(y.color.copy(pv),M=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):C===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const O=this._cubeSize;So(o,C*O,z>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=S,_.autoClear=v,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Mr||e.mapping===Do;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_v());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;So(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Al)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,p=this._lodMeshes[r];p.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,S=_*v,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-Gs?r-E+Gs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,So(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(p,Al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,So(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(p,Al)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,p){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*vr-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):vr;y>vr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vr}`);const M=[];let P=0;for(let F=0;F<vr;++F){const T=F/w,N=Math.exp(-T*T/2);M.push(N),F===0?P+=N:F<y&&(P+=2*N)}for(let F=0;F<M.length;F++)M[F]=M[F]/P;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:z}=this;v.dTheta.value=E,v.mipInt.value=z-r;const C=this._sizeLods[o],O=3*C*(o>z-Gs?o-z+Gs:0),L=4*(this._cubeSize-C);So(i,O,L,3*C,2*C),m.setRenderTarget(i),m.render(_,Al)}}function YT(a){const e=[],i=[],r=[];let o=a;const c=a-Gs+1+hv.length;for(let u=0;u<c;u++){const p=Math.pow(2,o);e.push(p);let m=1/p;u>a-Gs?m=hv[u-a+Gs-1]:u===0&&(m=0),i.push(m);const d=1/(p-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,y=2,M=1,P=new Float32Array(w*E*S),z=new Float32Array(y*E*S),C=new Float32Array(M*E*S);for(let L=0;L<S;L++){const F=L%3*2/3-1,T=L>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];P.set(N,w*E*L),z.set(v,y*E*L);const Y=[L,L,L,L,L,L];C.set(Y,M*E*L)}const O=new qi;O.setAttribute("position",new Ra(P,w)),O.setAttribute("uv",new Ra(z,y)),O.setAttribute("faceIndex",new Ra(C,M)),r.push(new Yi(O,null)),o>Gs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function gv(a,e,i){const r=new Aa(a,e,i);return r.texture.mapping=Lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function So(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function qT(a,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function jT(a,e,i){const r=new Float32Array(vr),o=new ae(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function _v(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function vv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}class Fx extends Aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new wx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hl(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:No(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:vi,blending:Ja});c.uniforms.tEquirect.value=i;const u=new Yi(o,c),p=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Pn),new eb(1,10,this).update(e,u),i.minFilter=p,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function ZT(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===kd||S===Xd)if(e.has(v)){const E=e.get(v).texture;return p(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const w=new Fx(E.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),p(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,E=S===kd||S===Xd,w=S===Mr||S===Do;if(E||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new mv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const P=v.image;return E&&P&&P.height>0||w&&P&&m(P)?(r===null&&(r=new mv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function p(v,S){return S===kd?v.mapping=Mr:S===Xd&&(v.mapping=Do),v}function m(v){let S=0;const E=6;for(let w=0;w<E;w++)v[w]!==void 0&&S++;return S===E}function d(v){const S=v.target;S.removeEventListener("dispose",d);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function KT(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&To("WebGLRenderer: "+r+" extension not supported."),o}}}function QT(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function d(_){const v=[],S=_.index,E=_.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const P=S.array;w=S.version;for(let z=0,C=P.length;z<C;z+=3){const O=P[z+0],L=P[z+1],F=P[z+2];v.push(O,L,L,F,F,O)}}else{const P=E.array;w=E.version;for(let z=0,C=P.length/3-1;z<C;z+=3){const O=z+0,L=z+1,F=z+2;v.push(O,L,L,F,F,O)}}const y=new(E.count>=65535?Rx:Ax)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function JT(a,e,i){let r;function o(_){r=_}let c,u;function p(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,S){S!==0&&(a.drawElementsInstanced(r,v,c,_*u,S),i.update(v,r,S))}function g(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,S);let w=0;for(let y=0;y<S;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function $T(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,p){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=p*(c/3);break;case a.LINES:i.lines+=p*(c/2);break;case a.LINE_STRIP:i.lines+=p*(c-1);break;case a.LINE_LOOP:i.lines+=p*c;break;case a.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function eA(a,e,i){const r=new WeakMap,o=new Mn;function c(u,p,m){const d=u.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(p);if(v===void 0||v.count!==_){let Y=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",Y)};var S=Y;v!==void 0&&v.texture.dispose();const E=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let C=0;E===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let O=p.attributes.position.count*C,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const F=new Float32Array(O*L*4*_),T=new Ex(F,O,L,_);T.type=Ea,T.needsUpdate=!0;const N=C*4;for(let V=0;V<_;V++){const Z=M[V],pe=P[V],ce=z[V],q=O*L*4*V;for(let B=0;B<Z.count;B++){const H=B*N;E===!0&&(o.fromBufferAttribute(Z,B),F[q+H+0]=o.x,F[q+H+1]=o.y,F[q+H+2]=o.z,F[q+H+3]=0),w===!0&&(o.fromBufferAttribute(pe,B),F[q+H+4]=o.x,F[q+H+5]=o.y,F[q+H+6]=o.z,F[q+H+7]=0),y===!0&&(o.fromBufferAttribute(ce,B),F[q+H+8]=o.x,F[q+H+9]=o.y,F[q+H+10]=o.z,F[q+H+11]=ce.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Bt(O,L)},r.set(p,v),p.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const w=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function tA(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const S=d.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return v}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:p}}const nA={[ox]:"LINEAR_TONE_MAPPING",[lx]:"REINHARD_TONE_MAPPING",[cx]:"CINEON_TONE_MAPPING",[ux]:"ACES_FILMIC_TONE_MAPPING",[dx]:"AGX_TONE_MAPPING",[hx]:"NEUTRAL_TONE_MAPPING",[fx]:"CUSTOM_TONE_MAPPING"};function iA(a,e,i,r,o,c){const u=new Aa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Lo(e,i):void 0}),p=new Aa(e,i,{type:ts,depthBuffer:!1,stencilBuffer:!1}),m=new qi;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const d=new QE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Yi(m,d),_=new Ox(-1,1,1,-1,0,1);let v=null,S=null,E=!1,w,y=null,M=[],P=!1;this.setSize=function(z,C){u.setSize(z,C),p.setSize(z,C);for(let O=0;O<M.length;O++){const L=M[O];L.setSize&&L.setSize(z,C)}},this.setEffects=function(z){M=z,P=M.length>0&&M[0].isRenderPass===!0;const C=u.width,O=u.height;for(let L=0;L<M.length;L++){const F=M[L];F.setSize&&F.setSize(C,O)}},this.begin=function(z,C){if(E||z.toneMapping===Ta&&M.length===0)return!1;if(y=C,C!==null){const O=C.width,L=C.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return P===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=Ta,!0},this.hasRenderPass=function(){return P},this.end=function(z,C){z.toneMapping=w,E=!0;let O=u,L=p;for(let F=0;F<M.length;F++){const T=M[F];if(T.enabled!==!1&&(T.render(z,L,O,C),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(v!==z.outputColorSpace||S!==z.toneMapping){v=z.outputColorSpace,S=z.toneMapping,d.defines={},Ct.getTransfer(v)===jt&&(d.defines.SRGB_TRANSFER="");const F=nA[S];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Bx=new ni,vp=new Lo(1,1),zx=new Ex,Hx=new TE,Gx=new wx,xv=[],Sv=[],Mv=new Float32Array(16),yv=new Float32Array(9),Ev=new Float32Array(4);function Po(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=xv[o];if(c===void 0&&(c=new Float32Array(o),xv[o]=c),e!==0){r.toArray(c,0);for(let u=1,p=0;u!==e;++u)p+=i,a[u].toArray(c,p)}return c}function Bn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function zn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Ou(a,e){let i=Sv[e];i===void 0&&(i=new Int32Array(e),Sv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function aA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function sA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;a.uniform2fv(this.addr,e),zn(i,e)}}function rA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Bn(i,e))return;a.uniform3fv(this.addr,e),zn(i,e)}}function oA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;a.uniform4fv(this.addr,e),zn(i,e)}}function lA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(Bn(i,r))return;Ev.set(r),a.uniformMatrix2fv(this.addr,!1,Ev),zn(i,r)}}function cA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(Bn(i,r))return;yv.set(r),a.uniformMatrix3fv(this.addr,!1,yv),zn(i,r)}}function uA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Bn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(Bn(i,r))return;Mv.set(r),a.uniformMatrix4fv(this.addr,!1,Mv),zn(i,r)}}function fA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;a.uniform2iv(this.addr,e),zn(i,e)}}function hA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;a.uniform3iv(this.addr,e),zn(i,e)}}function pA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;a.uniform4iv(this.addr,e),zn(i,e)}}function mA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function gA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;a.uniform2uiv(this.addr,e),zn(i,e)}}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;a.uniform3uiv(this.addr,e),zn(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;a.uniform4uiv(this.addr,e),zn(i,e)}}function xA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(vp.compareFunction=i.isReversedDepthBuffer()?Lp:Dp,c=vp):c=Bx,i.setTexture2D(e||c,o)}function SA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Hx,o)}function MA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Gx,o)}function yA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||zx,o)}function EA(a){switch(a){case 5126:return aA;case 35664:return sA;case 35665:return rA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return dA;case 35668:case 35672:return hA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return yA}}function bA(a,e){a.uniform1fv(this.addr,e)}function TA(a,e){const i=Po(e,this.size,2);a.uniform2fv(this.addr,i)}function AA(a,e){const i=Po(e,this.size,3);a.uniform3fv(this.addr,i)}function RA(a,e){const i=Po(e,this.size,4);a.uniform4fv(this.addr,i)}function CA(a,e){const i=Po(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function wA(a,e){const i=Po(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function DA(a,e){const i=Po(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function LA(a,e){a.uniform1iv(this.addr,e)}function NA(a,e){a.uniform2iv(this.addr,e)}function UA(a,e){a.uniform3iv(this.addr,e)}function OA(a,e){a.uniform4iv(this.addr,e)}function PA(a,e){a.uniform1uiv(this.addr,e)}function IA(a,e){a.uniform2uiv(this.addr,e)}function FA(a,e){a.uniform3uiv(this.addr,e)}function BA(a,e){a.uniform4uiv(this.addr,e)}function zA(a,e,i){const r=this.cache,o=e.length,c=Ou(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=vp:u=Bx;for(let p=0;p!==o;++p)i.setTexture2D(e[p]||u,c[p])}function HA(a,e,i){const r=this.cache,o=e.length,c=Ou(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Hx,c[u])}function GA(a,e,i){const r=this.cache,o=e.length,c=Ou(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Gx,c[u])}function VA(a,e,i){const r=this.cache,o=e.length,c=Ou(i,o);Bn(r,c)||(a.uniform1iv(this.addr,c),zn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||zx,c[u])}function kA(a){switch(a){case 5126:return bA;case 35664:return TA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return wA;case 35676:return DA;case 5124:case 35670:return LA;case 35667:case 35671:return NA;case 35668:case 35672:return UA;case 35669:case 35673:return OA;case 5125:return PA;case 36294:return IA;case 36295:return FA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return VA}}class XA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=EA(i.type)}}class WA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kA(i.type)}}class YA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const p=o[c];p.setValue(e,i[p.id],r)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function bv(a,e){a.seq.push(e),a.map[e.id]=e}function qA(a,e,i){const r=a.name,o=r.length;for(Mh.lastIndex=0;;){const c=Mh.exec(r),u=Mh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&u+2===o){bv(i,d===void 0?new XA(p,a,e):new WA(p,a,e));break}else{let _=i.map[p];_===void 0&&(_=new YA(p),bv(i,_)),i=_}}}class Mu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const p=e.getActiveUniform(i,u),m=e.getUniformLocation(i,p.name);qA(p,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Tv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const jA=37297;let ZA=0;function KA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const p=u+1;r.push(`${p===e?">":" "} ${p}: ${i[u]}`)}return r.join(`
`)}const Av=new ft;function QA(a){Ct._getMatrix(Av,Ct.workingColorSpace,a);const e=`mat3( ${Av.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case Au:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Rv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const p=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+KA(a.getShaderSource(e),p)}else return c}function JA(a,e){const i=QA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const $A={[ox]:"Linear",[lx]:"Reinhard",[cx]:"Cineon",[ux]:"ACESFilmic",[dx]:"AgX",[hx]:"Neutral",[fx]:"Custom"};function e2(a,e){const i=$A[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pu=new ae;function t2(){Ct.getLuminanceCoefficients(pu);const a=pu.x.toFixed(4),e=pu.y.toFixed(4),i=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function i2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function a2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let p=1;c.type===a.FLOAT_MAT2&&(p=2),c.type===a.FLOAT_MAT3&&(p=3),c.type===a.FLOAT_MAT4&&(p=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:p}}return i}function Dl(a){return a!==""}function Cv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s2=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(a){return a.replace(s2,o2)}const r2=new Map;function o2(a,e){let i=_t[e];if(i===void 0){const r=r2.get(e);if(r!==void 0)i=_t[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xp(i)}const l2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(a){return a.replace(l2,c2)}function c2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Lv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const u2={[gu]:"SHADOWMAP_TYPE_PCF",[Cl]:"SHADOWMAP_TYPE_VSM"};function f2(a){return u2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const d2={[Mr]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE",[Lu]:"ENVMAP_TYPE_CUBE_UV"};function h2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":d2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const p2={[Do]:"ENVMAP_MODE_REFRACTION"};function m2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":p2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g2={[rx]:"ENVMAP_BLENDING_MULTIPLY",[ky]:"ENVMAP_BLENDING_MIX",[Xy]:"ENVMAP_BLENDING_ADD"};function _2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":g2[a.combine]||"ENVMAP_BLENDING_NONE"}function v2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function x2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,p=i.fragmentShader;const m=f2(i),d=h2(i),g=m2(i),_=_2(i),v=v2(i),S=n2(i),E=i2(c),w=o.createProgram();let y,M,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Dl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Dl).join(`
`),M.length>0&&(M+=`
`)):(y=[Lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),M=[Lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ta?"#define TONE_MAPPING":"",i.toneMapping!==Ta?_t.tonemapping_pars_fragment:"",i.toneMapping!==Ta?e2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,JA("linearToOutputTexel",i.outputColorSpace),t2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Dl).join(`
`)),u=xp(u),u=Cv(u,i),u=wv(u,i),p=xp(p),p=Cv(p,i),p=wv(p,i),u=Dv(u),p=Dv(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===V_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=P+y+u,C=P+M+p,O=Tv(o,o.VERTEX_SHADER,z),L=Tv(o,o.FRAGMENT_SHADER,C);o.attachShader(w,O),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(V){if(a.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",pe=o.getShaderInfoLog(O)||"",ce=o.getShaderInfoLog(L)||"",q=Z.trim(),B=pe.trim(),H=ce.trim();let te=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,L);else{const Se=Rv(o,O,"vertex"),I=Rv(o,L,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+Se+`
`+I)}else q!==""?lt("WebGLProgram: Program Info Log:",q):(B===""||H==="")&&(ge=!1);ge&&(V.diagnostics={runnable:te,programLog:q,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(L),T=new Mu(o,w),N=a2(o,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(w,jA)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let S2=0;class M2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new y2(e),i.set(e,r)),r}}class y2{constructor(e){this.id=S2++,this.code=e,this.usedTimes=0}}function E2(a){return a===yr||a===Eu||a===bu}function b2(a,e,i,r,o,c){const u=new bx,p=new M2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,Y,V,Z,pe){const ce=V.fog,q=Z.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||B,H),ge=te&&te.mapping===Lu?te.image.height:null,Se=S[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=I!==void 0?I.length:0;let Me=0;q.morphAttributes.position!==void 0&&(Me=1),q.morphAttributes.normal!==void 0&&(Me=2),q.morphAttributes.color!==void 0&&(Me=3);let Ae,ze,ee,xe;if(Se){const Ye=Ma[Se];Ae=Ye.vertexShader,ze=Ye.fragmentShader}else{Ae=T.vertexShader,ze=T.fragmentShader;const Ye=p.getVertexShaderStage(T),an=p.getFragmentShaderStage(T);p.update(T,Ye,an),ee=Ye.id,xe=an.id}const Ee=a.getRenderTarget(),Xe=a.state.buffers.depth.getReversed(),st=Z.isInstancedMesh===!0,et=Z.isBatchedMesh===!0,Zt=!!T.map,ht=!!T.matcap,vt=!!te,xt=!!T.aoMap,dt=!!T.lightMap,Kt=!!T.bumpMap&&T.wireframe===!1,rn=!!T.normalMap,on=!!T.displacementMap,ln=!!T.emissiveMap,kt=!!T.metalnessMap,Xt=!!T.roughnessMap,K=T.anisotropy>0,zt=T.clearcoat>0,wt=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,j=T.transmission>0,se=K&&!!T.anisotropyMap,fe=zt&&!!T.clearcoatMap,Re=zt&&!!T.clearcoatNormalMap,De=zt&&!!T.clearcoatRoughnessMap,ue=U&&!!T.iridescenceMap,he=U&&!!T.iridescenceThicknessMap,Le=b&&!!T.sheenColorMap,He=b&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Ie=!!T.specularColorMap,nt=!!T.specularIntensityMap,tt=j&&!!T.transmissionMap,ot=j&&!!T.thicknessMap,W=!!T.gradientMap,Ne=!!T.alphaMap,me=T.alphaTest>0,Ce=!!T.alphaHash,Ue=!!T.extensions;let be=Ta;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=a.toneMapping);const Ze={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:ze,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:et,batchingColor:et&&Z._colorsTexture!==null,instancing:st,instancingColor:st&&Z.instanceColor!==null,instancingMorph:st&&Z.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:ht,envMap:vt,envMapMode:vt&&te.mapping,envMapCubeUVHeight:ge,aoMap:xt,lightMap:dt,bumpMap:Kt,normalMap:rn,displacementMap:on,emissiveMap:ln,normalMapObjectSpace:rn&&T.normalMapType===qy,normalMapTangentSpace:rn&&T.normalMapType===z_,packedNormalMap:rn&&T.normalMapType===z_&&E2(T.normalMap.format),metalnessMap:kt,roughnessMap:Xt,anisotropy:K,anisotropyMap:se,clearcoat:zt,clearcoatMap:fe,clearcoatNormalMap:Re,clearcoatRoughnessMap:De,dispersion:wt,iridescence:U,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:b,sheenColorMap:Le,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:nt,transmission:j,transmissionMap:tt,thicknessMap:ot,gradientMap:W,opaque:T.transparent===!1&&T.blending===bo&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:me,alphaHash:Ce,combine:T.combine,mapUv:Zt&&E(T.map.channel),aoMapUv:xt&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:Kt&&E(T.bumpMap.channel),normalMapUv:rn&&E(T.normalMap.channel),displacementMapUv:on&&E(T.displacementMap.channel),emissiveMapUv:ln&&E(T.emissiveMap.channel),metalnessMapUv:kt&&E(T.metalnessMap.channel),roughnessMapUv:Xt&&E(T.roughnessMap.channel),anisotropyMapUv:se&&E(T.anisotropyMap.channel),clearcoatMapUv:fe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(T.sheenRoughnessMap.channel),specularMapUv:Pe&&E(T.specularMap.channel),specularColorMapUv:Ie&&E(T.specularColorMap.channel),specularIntensityMapUv:nt&&E(T.specularIntensityMap.channel),transmissionMapUv:tt&&E(T.transmissionMap.channel),thicknessMapUv:ot&&E(T.thicknessMap.channel),alphaMapUv:Ne&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rn||K),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(Zt||Ne),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&rn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Xe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Me,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&Y.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===jt,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ya,flipSided:T.side===vi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)N.push(Y),N.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(M(N,T),P(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function P(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const N=S[T.type];let Y;if(N){const V=Ma[N];Y=jE.clone(V.uniforms)}else Y=T.uniforms;return Y}function C(T,N){let Y=g.get(N);return Y!==void 0?++Y.usedTimes:(Y=new x2(a,N,T,o),d.push(Y),g.set(N,Y)),Y}function O(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){p.remove(T)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:F}}function T2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let p=a.get(u);return p===void 0&&(p={},a.set(u,p)),p}function r(u){a.delete(u)}function o(u,p,m){a.get(u)[p]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function A2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Nv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Uv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function p(v,S,E,w,y,M){let P=a[e];return P===void 0?(P={id:v.id,object:v,geometry:S,material:E,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=P):(P.id=v.id,P.object=v,P.geometry=S,P.material=E,P.materialVariant=u(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=y,P.group=M),e++,P}function m(v,S,E,w,y,M){const P=p(v,S,E,w,y,M);E.transmission>0?r.push(P):E.transparent===!0?o.push(P):i.push(P)}function d(v,S,E,w,y,M){const P=p(v,S,E,w,y,M);E.transmission>0?r.unshift(P):E.transparent===!0?o.unshift(P):i.unshift(P)}function g(v,S,E){i.length>1&&i.sort(v||A2),r.length>1&&r.sort(S||Nv),o.length>1&&o.sort(S||Nv),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,S=a.length;v<S;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function R2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Uv,a.set(r,[u])):o>=c.length?(u=new Uv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function C2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Lt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=i,i}}}function w2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let D2=0;function L2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function N2(a){const e=new C2,i=w2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ae);const o=new ae,c=new Tn,u=new Tn;function p(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,E=0,w=0,y=0,M=0,P=0,z=0,C=0,O=0,L=0,F=0;d.sort(L2);for(let N=0,Y=d.length;N<Y;N++){const V=d[N],Z=V.color,pe=V.intensity,ce=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===yr?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Z.r*pe,_+=Z.g*pe,v+=Z.b*pe;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],pe);F++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,te=i.get(V);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=B,S++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Z).multiplyScalar(pe),B.distance=ce,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[w]=B;const H=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,H.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const te=i.get(V);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[w]=te,r.spotShadowMap[w]=q,C++}w++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(Z).multiplyScalar(pe),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const H=V.shadow,te=i.get(V);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[E]=te,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=V.shadow.matrix,z++}r.point[E]=B,E++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(pe),B.groundColor.copy(V.groundColor).multiplyScalar(pe),r.hemi[M]=B,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==P||T.numPointShadows!==z||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=P,T.numPointShadows=z,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=F,r.version=D2++)}function m(d,g){let _=0,v=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let M=0,P=d.length;M<P;M++){const z=d[M];if(z.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(z.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(z.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(z.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:p,setupView:m,state:r}}function Ov(a){const e=new N2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function p(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:p,pushLightProbeGrid:m}}function U2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let p;return u===void 0?(p=new Ov(a),e.set(o,[p])):c>=u.length?(p=new Ov(a),u.push(p)):p=u[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
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
}`,I2=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],F2=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Pv=new Tn,Rl=new ae,yh=new ae;function B2(a,e,i){let r=new Cx;const o=new Bt,c=new Bt,u=new Mn,p=new JE,m=new $E,d={},g=i.maxTextureSize,_={[es]:vi,[vi]:es,[ya]:ya},v=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:O2,fragmentShader:P2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new qi;E.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Yi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let M=this.type;this.render=function(L,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===by&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gu);const N=a.getRenderTarget(),Y=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(Ja),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const pe=M!==this.type;pe&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(q=>q.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,q=L.length;ce<q;ce++){const B=L[ce],H=B.shadow;if(H===void 0){lt("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const te=H.getFrameExtents();o.multiply(te),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/te.x),o.x=c.x*te.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/te.y),o.y=c.y*te.y,H.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Cl){if(B.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Aa(o.x,o.y,{format:yr,type:ts,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Lo(o.x,o.y,Ea),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=ns,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Qn,H.map.depthTexture.magFilter=Qn}else B.isPointLight?(H.map=new Fx(o.x),H.map.depthTexture=new XE(o.x,Ca)):(H.map=new Aa(o.x,o.y),H.map.depthTexture=new Lo(o.x,o.y,Ca)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=ns,this.type===gu?(H.map.depthTexture.compareFunction=ge?Lp:Dp,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Qn,H.map.depthTexture.magFilter=Qn);H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Se;I++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,I),a.clear();else{I===0&&(a.setRenderTarget(H.map),a.clear());const Q=H.getViewport(I);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Z.viewport(u)}if(B.isPointLight){const Q=H.camera,Me=H.matrix,Ae=B.distance||Q.far;Ae!==Q.far&&(Q.far=Ae,Q.updateProjectionMatrix()),Rl.setFromMatrixPosition(B.matrixWorld),Q.position.copy(Rl),yh.copy(Q.position),yh.add(I2[I]),Q.up.copy(F2[I]),Q.lookAt(yh),Q.updateMatrixWorld(),Me.makeTranslation(-Rl.x,-Rl.y,-Rl.z),Pv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Pv,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(B);r=H.getFrustum(),C(F,T,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Cl&&P(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,Y,V)};function P(L,F){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Aa(o.x,o.y,{format:yr,type:ts})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(F,null,T,v,w,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(F,null,T,S,w,null)}function z(L,F,T,N){let Y=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=T.isPointLight===!0?m:p,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=Y.uuid,pe=F.uuid;let ce=d[Z];ce===void 0&&(ce={},d[Z]=ce);let q=ce[pe];q===void 0&&(q=Y.clone(),ce[pe]=q,F.addEventListener("dispose",O)),Y=q}if(Y.visible=F.visible,Y.wireframe=F.wireframe,N===Cl?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:_[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Z=a.properties.get(Y);Z.light=T}return Y}function C(L,F,T,N,Y){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Cl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const pe=e.update(L),ce=L.material;if(Array.isArray(ce)){const q=pe.groups;for(let B=0,H=q.length;B<H;B++){const te=q[B],ge=ce[te.materialIndex];if(ge&&ge.visible){const Se=z(L,ge,N,Y);L.onBeforeShadow(a,L,F,T,pe,Se,te),a.renderBufferDirect(T,null,pe,Se,L,te),L.onAfterShadow(a,L,F,T,pe,Se,te)}}}else if(ce.visible){const q=z(L,ce,N,Y);L.onBeforeShadow(a,L,F,T,pe,q,null),a.renderBufferDirect(T,null,pe,q,L,null),L.onAfterShadow(a,L,F,T,pe,q,null)}}const Z=L.children;for(let pe=0,ce=Z.length;pe<ce;pe++)C(Z[pe],F,T,N,Y)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const N=d[T],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function z2(a,e){function i(){let W=!1;const Ne=new Mn;let me=null;const Ce=new Mn(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!W&&(a.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,be,Ze,Ye,an){an===!0&&(Ue*=Ye,be*=Ye,Ze*=Ye),Ne.set(Ue,be,Ze,Ye),Ce.equals(Ne)===!1&&(a.clearColor(Ue,be,Ze,Ye),Ce.copy(Ne))},reset:function(){W=!1,me=null,Ce.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,me=null,Ce=null,Ue=null;return{setReversed:function(be){if(Ne!==be){const Ze=e.get("EXT_clip_control");be?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ne=be;const Ye=Ue;Ue=null,this.setClear(Ye)}},getReversed:function(){return Ne},setTest:function(be){be?Ee(a.DEPTH_TEST):Xe(a.DEPTH_TEST)},setMask:function(be){me!==be&&!W&&(a.depthMask(be),me=be)},setFunc:function(be){if(Ne&&(be=iE[be]),Ce!==be){switch(be){case Uh:a.depthFunc(a.NEVER);break;case Oh:a.depthFunc(a.ALWAYS);break;case Ph:a.depthFunc(a.LESS);break;case wo:a.depthFunc(a.LEQUAL);break;case Ih:a.depthFunc(a.EQUAL);break;case Fh:a.depthFunc(a.GEQUAL);break;case Bh:a.depthFunc(a.GREATER);break;case zh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ce=be}},setLocked:function(be){W=be},setClear:function(be){Ue!==be&&(Ue=be,Ne&&(be=1-be),a.clearDepth(be))},reset:function(){W=!1,me=null,Ce=null,Ue=null,Ne=!1}}}function o(){let W=!1,Ne=null,me=null,Ce=null,Ue=null,be=null,Ze=null,Ye=null,an=null;return{setTest:function(Dt){W||(Dt?Ee(a.STENCIL_TEST):Xe(a.STENCIL_TEST))},setMask:function(Dt){Ne!==Dt&&!W&&(a.stencilMask(Dt),Ne=Dt)},setFunc:function(Dt,Hn,Jn){(me!==Dt||Ce!==Hn||Ue!==Jn)&&(a.stencilFunc(Dt,Hn,Jn),me=Dt,Ce=Hn,Ue=Jn)},setOp:function(Dt,Hn,Jn){(be!==Dt||Ze!==Hn||Ye!==Jn)&&(a.stencilOp(Dt,Hn,Jn),be=Dt,Ze=Hn,Ye=Jn)},setLocked:function(Dt){W=Dt},setClear:function(Dt){an!==Dt&&(a.clearStencil(Dt),an=Dt)},reset:function(){W=!1,Ne=null,me=null,Ce=null,Ue=null,be=null,Ze=null,Ye=null,an=null}}}const c=new i,u=new r,p=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},S=new WeakMap,E=[],w=null,y=!1,M=null,P=null,z=null,C=null,O=null,L=null,F=null,T=new Lt(0,0,0),N=0,Y=!1,V=null,Z=null,pe=null,ce=null,q=null;const B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=te>=1):ge.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=te>=2);let Se=null,I={};const Q=a.getParameter(a.SCISSOR_BOX),Me=a.getParameter(a.VIEWPORT),Ae=new Mn().fromArray(Q),ze=new Mn().fromArray(Me);function ee(W,Ne,me,Ce){const Ue=new Uint8Array(4),be=a.createTexture();a.bindTexture(W,be),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<me;Ze++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Ce,0,a.RGBA,a.UNSIGNED_BYTE,Ue):a.texImage2D(Ne+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ue);return be}const xe={};xe[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),p.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(wo),Kt(!1),rn(I_),Ee(a.CULL_FACE),xt(Ja);function Ee(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function Xe(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function st(W,Ne){return v[W]!==Ne?(a.bindFramebuffer(W,Ne),v[W]=Ne,W===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ne),W===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function et(W,Ne){let me=E,Ce=!1;if(W){me=S.get(Ne),me===void 0&&(me=[],S.set(Ne,me));const Ue=W.textures;if(me.length!==Ue.length||me[0]!==a.COLOR_ATTACHMENT0){for(let be=0,Ze=Ue.length;be<Ze;be++)me[be]=a.COLOR_ATTACHMENT0+be;me.length=Ue.length,Ce=!0}}else me[0]!==a.BACK&&(me[0]=a.BACK,Ce=!0);Ce&&a.drawBuffers(me)}function Zt(W){return w!==W?(a.useProgram(W),w=W,!0):!1}const ht={[_r]:a.FUNC_ADD,[Ay]:a.FUNC_SUBTRACT,[Ry]:a.FUNC_REVERSE_SUBTRACT};ht[Cy]=a.MIN,ht[wy]=a.MAX;const vt={[Dy]:a.ZERO,[Ly]:a.ONE,[Ny]:a.SRC_COLOR,[Lh]:a.SRC_ALPHA,[By]:a.SRC_ALPHA_SATURATE,[Iy]:a.DST_COLOR,[Oy]:a.DST_ALPHA,[Uy]:a.ONE_MINUS_SRC_COLOR,[Nh]:a.ONE_MINUS_SRC_ALPHA,[Fy]:a.ONE_MINUS_DST_COLOR,[Py]:a.ONE_MINUS_DST_ALPHA,[zy]:a.CONSTANT_COLOR,[Hy]:a.ONE_MINUS_CONSTANT_COLOR,[Gy]:a.CONSTANT_ALPHA,[Vy]:a.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Ne,me,Ce,Ue,be,Ze,Ye,an,Dt){if(W===Ja){y===!0&&(Xe(a.BLEND),y=!1);return}if(y===!1&&(Ee(a.BLEND),y=!0),W!==Ty){if(W!==M||Dt!==Y){if((P!==_r||O!==_r)&&(a.blendEquation(a.FUNC_ADD),P=_r,O=_r),Dt)switch(W){case bo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Dh:a.blendFunc(a.ONE,a.ONE);break;case F_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case B_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",W);break}else switch(W){case bo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Dh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case F_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",W);break}z=null,C=null,L=null,F=null,T.set(0,0,0),N=0,M=W,Y=Dt}return}Ue=Ue||Ne,be=be||me,Ze=Ze||Ce,(Ne!==P||Ue!==O)&&(a.blendEquationSeparate(ht[Ne],ht[Ue]),P=Ne,O=Ue),(me!==z||Ce!==C||be!==L||Ze!==F)&&(a.blendFuncSeparate(vt[me],vt[Ce],vt[be],vt[Ze]),z=me,C=Ce,L=be,F=Ze),(Ye.equals(T)===!1||an!==N)&&(a.blendColor(Ye.r,Ye.g,Ye.b,an),T.copy(Ye),N=an),M=W,Y=!1}function dt(W,Ne){W.side===ya?Xe(a.CULL_FACE):Ee(a.CULL_FACE);let me=W.side===vi;Ne&&(me=!me),Kt(me),W.blending===bo&&W.transparent===!1?xt(Ja):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ce=W.stencilWrite;p.setTest(Ce),Ce&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ln(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):Xe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(W){V!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),V=W)}function rn(W){W!==yy?(Ee(a.CULL_FACE),W!==Z&&(W===I_?a.cullFace(a.BACK):W===Ey?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Xe(a.CULL_FACE),Z=W}function on(W){W!==pe&&(H&&a.lineWidth(W),pe=W)}function ln(W,Ne,me){W?(Ee(a.POLYGON_OFFSET_FILL),(ce!==Ne||q!==me)&&(ce=Ne,q=me,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,me))):Xe(a.POLYGON_OFFSET_FILL)}function kt(W){W?Ee(a.SCISSOR_TEST):Xe(a.SCISSOR_TEST)}function Xt(W){W===void 0&&(W=a.TEXTURE0+B-1),Se!==W&&(a.activeTexture(W),Se=W)}function K(W,Ne,me){me===void 0&&(Se===null?me=a.TEXTURE0+B-1:me=Se);let Ce=I[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},I[me]=Ce),(Ce.type!==W||Ce.texture!==Ne)&&(Se!==me&&(a.activeTexture(me),Se=me),a.bindTexture(W,Ne||xe[W]),Ce.type=W,Ce.texture=Ne)}function zt(){const W=I[Se];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function wt(){try{a.compressedTexImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function b(){try{a.texSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function j(){try{a.texSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function se(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function fe(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Re(){try{a.texStorage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function De(){try{a.texStorage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ue(){try{a.texImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function he(){try{a.texImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Le(W){return _[W]!==void 0?_[W]:a.getParameter(W)}function He(W,Ne){_[W]!==Ne&&(a.pixelStorei(W,Ne),_[W]=Ne)}function Pe(W){Ae.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Ae.copy(W))}function Ie(W){ze.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function nt(W,Ne){let me=d.get(Ne);me===void 0&&(me=new WeakMap,d.set(Ne,me));let Ce=me.get(W);Ce===void 0&&(Ce=a.getUniformBlockIndex(Ne,W.name),me.set(W,Ce))}function tt(W,Ne){const Ce=d.get(Ne).get(W);m.get(Ne)!==Ce&&(a.uniformBlockBinding(Ne,Ce,W.__bindingPointIndex),m.set(Ne,Ce))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},Se=null,I={},v={},S=new WeakMap,E=[],w=null,y=!1,M=null,P=null,z=null,C=null,O=null,L=null,F=null,T=new Lt(0,0,0),N=0,Y=!1,V=null,Z=null,pe=null,ce=null,q=null,Ae.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),p.reset()}return{buffers:{color:c,depth:u,stencil:p},enable:Ee,disable:Xe,bindFramebuffer:st,drawBuffers:et,useProgram:Zt,setBlending:xt,setMaterial:dt,setFlipSided:Kt,setCullFace:rn,setLineWidth:on,setPolygonOffset:ln,setScissorTest:kt,activeTexture:Xt,bindTexture:K,unbindTexture:zt,compressedTexImage2D:wt,compressedTexImage3D:U,texImage2D:ue,texImage3D:he,pixelStorei:He,getParameter:Le,updateUBOMapping:nt,uniformBlockBinding:tt,texStorage2D:Re,texStorage3D:De,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:Pe,viewport:Ie,reset:ot}}function H2(a,e,i,r,o,c,u){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Bt,g=new WeakMap,_=new Set;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,b){return E?new OffscreenCanvas(U,b):Cu("canvas")}function y(U,b,j){let se=1;const fe=wt(U);if((fe.width>j||fe.height>j)&&(se=j/Math.max(fe.width,fe.height)),se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Re=Math.floor(se*fe.width),De=Math.floor(se*fe.height);v===void 0&&(v=w(Re,De));const ue=b?w(Re,De):v;return ue.width=Re,ue.height=De,ue.getContext("2d").drawImage(U,0,0,Re,De),lt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Re+"x"+De+")."),ue}else return"data"in U&&lt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function M(U){return U.generateMipmaps}function P(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(U,b,j,se,fe,Re=!1){if(U!==null){if(a[U]!==void 0)return a[U];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let De;se&&(De=e.get("EXT_texture_norm16"),De||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===a.RED&&(j===a.FLOAT&&(ue=a.R32F),j===a.HALF_FLOAT&&(ue=a.R16F),j===a.UNSIGNED_BYTE&&(ue=a.R8),j===a.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),j===a.SHORT&&De&&(ue=De.R16_SNORM_EXT)),b===a.RED_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.R8UI),j===a.UNSIGNED_SHORT&&(ue=a.R16UI),j===a.UNSIGNED_INT&&(ue=a.R32UI),j===a.BYTE&&(ue=a.R8I),j===a.SHORT&&(ue=a.R16I),j===a.INT&&(ue=a.R32I)),b===a.RG&&(j===a.FLOAT&&(ue=a.RG32F),j===a.HALF_FLOAT&&(ue=a.RG16F),j===a.UNSIGNED_BYTE&&(ue=a.RG8),j===a.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),j===a.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RG8UI),j===a.UNSIGNED_SHORT&&(ue=a.RG16UI),j===a.UNSIGNED_INT&&(ue=a.RG32UI),j===a.BYTE&&(ue=a.RG8I),j===a.SHORT&&(ue=a.RG16I),j===a.INT&&(ue=a.RG32I)),b===a.RGB_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RGB8UI),j===a.UNSIGNED_SHORT&&(ue=a.RGB16UI),j===a.UNSIGNED_INT&&(ue=a.RGB32UI),j===a.BYTE&&(ue=a.RGB8I),j===a.SHORT&&(ue=a.RGB16I),j===a.INT&&(ue=a.RGB32I)),b===a.RGBA_INTEGER&&(j===a.UNSIGNED_BYTE&&(ue=a.RGBA8UI),j===a.UNSIGNED_SHORT&&(ue=a.RGBA16UI),j===a.UNSIGNED_INT&&(ue=a.RGBA32UI),j===a.BYTE&&(ue=a.RGBA8I),j===a.SHORT&&(ue=a.RGBA16I),j===a.INT&&(ue=a.RGBA32I)),b===a.RGB&&(j===a.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),j===a.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),j===a.UNSIGNED_INT_5_9_9_9_REV&&(ue=a.RGB9_E5),j===a.UNSIGNED_INT_10F_11F_11F_REV&&(ue=a.R11F_G11F_B10F)),b===a.RGBA){const he=Re?Au:Ct.getTransfer(fe);j===a.FLOAT&&(ue=a.RGBA32F),j===a.HALF_FLOAT&&(ue=a.RGBA16F),j===a.UNSIGNED_BYTE&&(ue=he===jt?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),j===a.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),j===a.UNSIGNED_SHORT_4_4_4_4&&(ue=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(ue=a.RGB5_A1)}return(ue===a.R16F||ue===a.R32F||ue===a.RG16F||ue===a.RG32F||ue===a.RGBA16F||ue===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function O(U,b){let j;return U?b===null||b===Ca||b===Il?j=a.DEPTH24_STENCIL8:b===Ea?j=a.DEPTH32F_STENCIL8:b===Pl&&(j=a.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ca||b===Il?j=a.DEPTH_COMPONENT24:b===Ea?j=a.DEPTH_COMPONENT32F:b===Pl&&(j=a.DEPTH_COMPONENT16),j}function L(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Qn&&U.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function F(U){const b=U.target;b.removeEventListener("dispose",F),N(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),V(b)}function N(U){const b=r.get(U);if(b.__webglInit===void 0)return;const j=U.source,se=S.get(j);if(se){const fe=se[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&Y(U),Object.keys(se).length===0&&S.delete(j)}r.remove(U)}function Y(U){const b=r.get(U);a.deleteTexture(b.__webglTexture);const j=U.source,se=S.get(j);delete se[b.__cacheKey],u.memory.textures--}function V(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let fe=0;fe<b.__webglFramebuffer[se].length;fe++)a.deleteFramebuffer(b.__webglFramebuffer[se][fe]);else a.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)a.deleteFramebuffer(b.__webglFramebuffer[se]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=U.textures;for(let se=0,fe=j.length;se<fe;se++){const Re=r.get(j[se]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(j[se])}r.remove(U)}let Z=0;function pe(){Z=0}function ce(){return Z}function q(U){Z=U}function B(){const U=Z;return U>=o.maxTextures&&lt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Z+=1,U}function H(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function te(U,b){const j=r.get(U);if(U.isVideoTexture&&K(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const se=U.image;if(se===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(j,U,b);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+b)}function ge(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){Xe(j,U,b);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+b)}function Se(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){Xe(j,U,b);return}i.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+b)}function I(U,b){const j=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){st(j,U,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+b)}const Q={[Hh]:a.REPEAT,[oa]:a.CLAMP_TO_EDGE,[Gh]:a.MIRRORED_REPEAT},Me={[Qn]:a.NEAREST,[Wy]:a.NEAREST_MIPMAP_NEAREST,[qc]:a.NEAREST_MIPMAP_LINEAR,[Pn]:a.LINEAR,[Wd]:a.LINEAR_MIPMAP_NEAREST,[Hs]:a.LINEAR_MIPMAP_LINEAR},Ae={[jy]:a.NEVER,[$y]:a.ALWAYS,[Zy]:a.LESS,[Dp]:a.LEQUAL,[Ky]:a.EQUAL,[Lp]:a.GEQUAL,[Qy]:a.GREATER,[Jy]:a.NOTEQUAL};function ze(U,b){if(b.type===Ea&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===Wd||b.magFilter===qc||b.magFilter===Hs||b.minFilter===Pn||b.minFilter===Wd||b.minFilter===qc||b.minFilter===Hs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,Q[b.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,Q[b.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,Q[b.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,Me[b.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qn||b.minFilter!==qc&&b.minFilter!==Hs||b.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ee(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",F));const se=b.source;let fe=S.get(se);fe===void 0&&(fe={},S.set(se,fe));const Re=H(b);if(Re!==U.__cacheKey){fe[Re]===void 0&&(fe[Re]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,j=!0),fe[Re].usedTimes++;const De=fe[U.__cacheKey];De!==void 0&&(fe[U.__cacheKey].usedTimes--,De.usedTimes===0&&Y(b)),U.__cacheKey=Re,U.__webglTexture=fe[Re].texture}return j}function xe(U,b,j){return Math.floor(Math.floor(U/j)/b)}function Ee(U,b,j,se){const Re=U.updateRanges;if(Re.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,j,se,b.data);else{Re.sort((He,Pe)=>He.start-Pe.start);let De=0;for(let He=1;He<Re.length;He++){const Pe=Re[De],Ie=Re[He],nt=Pe.start+Pe.count,tt=xe(Ie.start,b.width,4),ot=xe(Pe.start,b.width,4);Ie.start<=nt+1&&tt===ot&&xe(Ie.start+Ie.count-1,b.width,4)===tt?Pe.count=Math.max(Pe.count,Ie.start+Ie.count-Pe.start):(++De,Re[De]=Ie)}Re.length=De+1;const ue=i.getParameter(a.UNPACK_ROW_LENGTH),he=i.getParameter(a.UNPACK_SKIP_PIXELS),Le=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let He=0,Pe=Re.length;He<Pe;He++){const Ie=Re[He],nt=Math.floor(Ie.start/4),tt=Math.ceil(Ie.count/4),ot=nt%b.width,W=Math.floor(nt/b.width),Ne=tt,me=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(a.UNPACK_SKIP_ROWS,W),i.texSubImage2D(a.TEXTURE_2D,0,ot,W,Ne,me,j,se,b.data)}U.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,ue),i.pixelStorei(a.UNPACK_SKIP_PIXELS,he),i.pixelStorei(a.UNPACK_SKIP_ROWS,Le)}}function Xe(U,b,j){let se=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=a.TEXTURE_3D);const fe=ee(U,b),Re=b.source;i.bindTexture(se,U.__webglTexture,a.TEXTURE0+j);const De=r.get(Re);if(Re.version!==De.__version||fe===!0){if(i.activeTexture(a.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Ct.getPrimaries(Ct.workingColorSpace),Ce=b.colorSpace===zs?null:Ct.getPrimaries(b.colorSpace),Ue=b.colorSpace===zs||me===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let he=y(b.image,!1,o.maxTextureSize);he=zt(b,he);const Le=c.convert(b.format,b.colorSpace),He=c.convert(b.type);let Pe=C(b.internalFormat,Le,He,b.normalized,b.colorSpace,b.isVideoTexture);ze(se,b);let Ie;const nt=b.mipmaps,tt=b.isVideoTexture!==!0,ot=De.__version===void 0||fe===!0,W=Re.dataReady,Ne=L(b,he);if(b.isDepthTexture)Pe=O(b.format===xr,b.type),ot&&(tt?i.texStorage2D(a.TEXTURE_2D,1,Pe,he.width,he.height):i.texImage2D(a.TEXTURE_2D,0,Pe,he.width,he.height,0,Le,He,null));else if(b.isDataTexture)if(nt.length>0){tt&&ot&&i.texStorage2D(a.TEXTURE_2D,Ne,Pe,nt[0].width,nt[0].height);for(let me=0,Ce=nt.length;me<Ce;me++)Ie=nt[me],tt?W&&i.texSubImage2D(a.TEXTURE_2D,me,0,0,Ie.width,Ie.height,Le,He,Ie.data):i.texImage2D(a.TEXTURE_2D,me,Pe,Ie.width,Ie.height,0,Le,He,Ie.data);b.generateMipmaps=!1}else tt?(ot&&i.texStorage2D(a.TEXTURE_2D,Ne,Pe,he.width,he.height),W&&Ee(b,he,Le,He)):i.texImage2D(a.TEXTURE_2D,0,Pe,he.width,he.height,0,Le,He,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&ot&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Pe,nt[0].width,nt[0].height,he.depth);for(let me=0,Ce=nt.length;me<Ce;me++)if(Ie=nt[me],b.format!==la)if(Le!==null)if(tt){if(W)if(b.layerUpdates.size>0){const Ue=dv(Ie.width,Ie.height,b.format,b.type);for(const be of b.layerUpdates){const Ze=Ie.data.subarray(be*Ue/Ie.data.BYTES_PER_ELEMENT,(be+1)*Ue/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,be,Ie.width,Ie.height,1,Le,Ze)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,Ie.width,Ie.height,he.depth,Le,Ie.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,me,Pe,Ie.width,Ie.height,he.depth,0,Ie.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,me,0,0,0,Ie.width,Ie.height,he.depth,Le,He,Ie.data):i.texImage3D(a.TEXTURE_2D_ARRAY,me,Pe,Ie.width,Ie.height,he.depth,0,Le,He,Ie.data)}else{tt&&ot&&i.texStorage2D(a.TEXTURE_2D,Ne,Pe,nt[0].width,nt[0].height);for(let me=0,Ce=nt.length;me<Ce;me++)Ie=nt[me],b.format!==la?Le!==null?tt?W&&i.compressedTexSubImage2D(a.TEXTURE_2D,me,0,0,Ie.width,Ie.height,Le,Ie.data):i.compressedTexImage2D(a.TEXTURE_2D,me,Pe,Ie.width,Ie.height,0,Ie.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&i.texSubImage2D(a.TEXTURE_2D,me,0,0,Ie.width,Ie.height,Le,He,Ie.data):i.texImage2D(a.TEXTURE_2D,me,Pe,Ie.width,Ie.height,0,Le,He,Ie.data)}else if(b.isDataArrayTexture)if(tt){if(ot&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Pe,he.width,he.height,he.depth),W)if(b.layerUpdates.size>0){const me=dv(he.width,he.height,b.format,b.type);for(const Ce of b.layerUpdates){const Ue=he.data.subarray(Ce*me/he.data.BYTES_PER_ELEMENT,(Ce+1)*me/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ce,he.width,he.height,1,Le,He,Ue)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Le,He,he.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,Le,He,he.data);else if(b.isData3DTexture)tt?(ot&&i.texStorage3D(a.TEXTURE_3D,Ne,Pe,he.width,he.height,he.depth),W&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Le,He,he.data)):i.texImage3D(a.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,Le,He,he.data);else if(b.isFramebufferTexture){if(ot)if(tt)i.texStorage2D(a.TEXTURE_2D,Ne,Pe,he.width,he.height);else{let me=he.width,Ce=he.height;for(let Ue=0;Ue<Ne;Ue++)i.texImage2D(a.TEXTURE_2D,Ue,Pe,me,Ce,0,Le,He,null),me>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const me=a.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),he.parentNode!==me){me.appendChild(he),_.add(b),me.onpaint=Ce=>{const Ue=Ce.changedElements;for(const be of _)Ue.includes(be.image)&&(be.needsUpdate=!0)},me.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,he);else{const Ue=a.RGBA,be=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ue,be,Ze,he)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(nt.length>0){if(tt&&ot){const me=wt(nt[0]);i.texStorage2D(a.TEXTURE_2D,Ne,Pe,me.width,me.height)}for(let me=0,Ce=nt.length;me<Ce;me++)Ie=nt[me],tt?W&&i.texSubImage2D(a.TEXTURE_2D,me,0,0,Le,He,Ie):i.texImage2D(a.TEXTURE_2D,me,Pe,Le,He,Ie);b.generateMipmaps=!1}else if(tt){if(ot){const me=wt(he);i.texStorage2D(a.TEXTURE_2D,Ne,Pe,me.width,me.height)}W&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,He,he)}else i.texImage2D(a.TEXTURE_2D,0,Pe,Le,He,he);M(b)&&P(se),De.__version=Re.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function st(U,b,j){if(b.image.length!==6)return;const se=ee(U,b),fe=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+j);const Re=r.get(fe);if(fe.version!==Re.__version||se===!0){i.activeTexture(a.TEXTURE0+j);const De=Ct.getPrimaries(Ct.workingColorSpace),ue=b.colorSpace===zs?null:Ct.getPrimaries(b.colorSpace),he=b.colorSpace===zs||De===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!Le&&!He?Pe[be]=y(b.image[be],!0,o.maxCubemapSize):Pe[be]=He?b.image[be].image:b.image[be],Pe[be]=zt(b,Pe[be]);const Ie=Pe[0],nt=c.convert(b.format,b.colorSpace),tt=c.convert(b.type),ot=C(b.internalFormat,nt,tt,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Ne=Re.__version===void 0||se===!0,me=fe.dataReady;let Ce=L(b,Ie);ze(a.TEXTURE_CUBE_MAP,b);let Ue;if(Le){W&&Ne&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,ot,Ie.width,Ie.height);for(let be=0;be<6;be++){Ue=Pe[be].mipmaps;for(let Ze=0;Ze<Ue.length;Ze++){const Ye=Ue[Ze];b.format!==la?nt!==null?W?me&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,Ye.width,Ye.height,nt,Ye.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,ot,Ye.width,Ye.height,0,Ye.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,Ye.width,Ye.height,nt,tt,Ye.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,ot,Ye.width,Ye.height,0,nt,tt,Ye.data)}}}else{if(Ue=b.mipmaps,W&&Ne){Ue.length>0&&Ce++;const be=wt(Pe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,ot,be.width,be.height)}for(let be=0;be<6;be++)if(He){W?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,nt,tt,Pe[be].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,Pe[be].width,Pe[be].height,0,nt,tt,Pe[be].data);for(let Ze=0;Ze<Ue.length;Ze++){const an=Ue[Ze].image[be].image;W?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,an.width,an.height,nt,tt,an.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,ot,an.width,an.height,0,nt,tt,an.data)}}else{W?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,nt,tt,Pe[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,nt,tt,Pe[be]);for(let Ze=0;Ze<Ue.length;Ze++){const Ye=Ue[Ze];W?me&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,nt,tt,Ye.image[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,ot,nt,tt,Ye.image[be])}}}M(b)&&P(a.TEXTURE_CUBE_MAP),Re.__version=fe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function et(U,b,j,se,fe,Re){const De=c.convert(j.format,j.colorSpace),ue=c.convert(j.type),he=C(j.internalFormat,De,ue,j.normalized,j.colorSpace),Le=r.get(b),He=r.get(j);if(He.__renderTarget=b,!Le.__hasExternalTextures){const Pe=Math.max(1,b.width>>Re),Ie=Math.max(1,b.height>>Re);fe===a.TEXTURE_3D||fe===a.TEXTURE_2D_ARRAY?i.texImage3D(fe,Re,he,Pe,Ie,b.depth,0,De,ue,null):i.texImage2D(fe,Re,he,Pe,Ie,0,De,ue,null)}i.bindFramebuffer(a.FRAMEBUFFER,U),Xt(b)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,fe,He.__webglTexture,0,kt(b)):(fe===a.TEXTURE_2D||fe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,se,fe,He.__webglTexture,Re),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Zt(U,b,j){if(a.bindRenderbuffer(a.RENDERBUFFER,U),b.depthBuffer){const se=b.depthTexture,fe=se&&se.isDepthTexture?se.type:null,Re=O(b.stencilBuffer,fe),De=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Xt(b)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,kt(b),Re,b.width,b.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,kt(b),Re,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Re,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,De,a.RENDERBUFFER,U)}else{const se=b.textures;for(let fe=0;fe<se.length;fe++){const Re=se[fe],De=c.convert(Re.format,Re.colorSpace),ue=c.convert(Re.type),he=C(Re.internalFormat,De,ue,Re.normalized,Re.colorSpace);Xt(b)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,kt(b),he,b.width,b.height):j?a.renderbufferStorageMultisample(a.RENDERBUFFER,kt(b),he,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,he,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(U,b,j){const se=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(b.depthTexture);if(fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),se){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),fe.__webglTexture===void 0){fe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,fe.__webglTexture),ze(a.TEXTURE_CUBE_MAP,b.depthTexture);const Le=c.convert(b.depthTexture.format),He=c.convert(b.depthTexture.type);let Pe;b.depthTexture.format===ns?Pe=a.DEPTH_COMPONENT24:b.depthTexture.format===xr&&(Pe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,b.width,b.height,0,Le,He,null)}}else te(b.depthTexture,0);const Re=fe.__webglTexture,De=kt(b),ue=se?a.TEXTURE_CUBE_MAP_POSITIVE_X+j:a.TEXTURE_2D,he=b.depthTexture.format===xr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===ns)Xt(b)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ue,Re,0,De):a.framebufferTexture2D(a.FRAMEBUFFER,he,ue,Re,0);else if(b.depthTexture.format===xr)Xt(b)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ue,Re,0,De):a.framebufferTexture2D(a.FRAMEBUFFER,he,ue,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(U){const b=r.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const se=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",fe)};se.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=se}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)ht(b.__webglFramebuffer[se],U,se);else{const se=U.texture.mipmaps;se&&se.length>0?ht(b.__webglFramebuffer[0],U,0):ht(b.__webglFramebuffer,U,0)}else if(j){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=a.createRenderbuffer(),Zt(b.__webglDepthbuffer[se],U,!1);else{const fe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=b.__webglDepthbuffer[se];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,fe,a.RENDERBUFFER,Re)}}else{const se=U.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Zt(b.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,fe,a.RENDERBUFFER,Re)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(U,b,j){const se=r.get(U);b!==void 0&&et(se.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),j!==void 0&&vt(U)}function dt(U){const b=U.texture,j=r.get(U),se=r.get(b);U.addEventListener("dispose",T);const fe=U.textures,Re=U.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=b.version,u.memory.textures++),Re){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let he=0;he<b.mipmaps.length;he++)j.__webglFramebuffer[ue][he]=a.createFramebuffer()}else j.__webglFramebuffer[ue]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)j.__webglFramebuffer[ue]=a.createFramebuffer()}else j.__webglFramebuffer=a.createFramebuffer();if(De)for(let ue=0,he=fe.length;ue<he;ue++){const Le=r.get(fe[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&Xt(U)===!1){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const he=fe[ue];j.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[ue]);const Le=c.convert(he.format,he.colorSpace),He=c.convert(he.type),Pe=C(he.internalFormat,Le,He,he.normalized,he.colorSpace,U.isXRRenderTarget===!0),Ie=kt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Pe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,j.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),Zt(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){i.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture),ze(a.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)et(j.__webglFramebuffer[ue][he],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else et(j.__webglFramebuffer[ue],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(b)&&P(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,he=fe.length;ue<he;ue++){const Le=fe[ue],He=r.get(Le);let Pe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Pe,He.__webglTexture),ze(Pe,Le),et(j.__webglFramebuffer,U,Le,a.COLOR_ATTACHMENT0+ue,Pe,0),M(Le)&&P(Pe)}i.unbindTexture()}else{let ue=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ue=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(ue,se.__webglTexture),ze(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)et(j.__webglFramebuffer[he],U,b,a.COLOR_ATTACHMENT0,ue,he);else et(j.__webglFramebuffer,U,b,a.COLOR_ATTACHMENT0,ue,0);M(b)&&P(ue),i.unbindTexture()}U.depthBuffer&&vt(U)}function Kt(U){const b=U.textures;for(let j=0,se=b.length;j<se;j++){const fe=b[j];if(M(fe)){const Re=z(U),De=r.get(fe).__webglTexture;i.bindTexture(Re,De),P(Re),i.unbindTexture()}}}const rn=[],on=[];function ln(U){if(U.samples>0){if(Xt(U)===!1){const b=U.textures,j=U.width,se=U.height;let fe=a.COLOR_BUFFER_BIT;const Re=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=r.get(U),ue=b.length>1;if(ue)for(let Le=0;Le<b.length;Le++)i.bindFramebuffer(a.FRAMEBUFFER,De.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,De.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const he=U.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=a.STENCIL_BUFFER_BIT)),ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const He=r.get(b[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,j,se,0,0,j,se,fe,a.NEAREST),m===!0&&(rn.length=0,on.length=0,rn.push(a.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(rn.push(Re),on.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,on)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,rn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let Le=0;Le<b.length;Le++){i.bindFramebuffer(a.FRAMEBUFFER,De.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const He=r.get(b[Le]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,De.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,He,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function kt(U){return Math.min(o.maxSamples,U.samples)}function Xt(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function K(U){const b=u.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function zt(U,b){const j=U.colorSpace,se=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Tu&&j!==zs&&(Ct.getTransfer(j)===jt?(se!==la||fe!==Xi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",j)),b}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=pe,this.getTextureUnits=ce,this.setTextureUnits=q,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=Se,this.setTextureCube=I,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function G2(a,e){function i(r,o=zs){let c;const u=Ct.getTransfer(o);if(r===Xi)return a.UNSIGNED_BYTE;if(r===Tp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return a.UNSIGNED_SHORT_5_5_5_1;if(r===_x)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===vx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===mx)return a.BYTE;if(r===gx)return a.SHORT;if(r===Pl)return a.UNSIGNED_SHORT;if(r===bp)return a.INT;if(r===Ca)return a.UNSIGNED_INT;if(r===Ea)return a.FLOAT;if(r===ts)return a.HALF_FLOAT;if(r===xx)return a.ALPHA;if(r===Sx)return a.RGB;if(r===la)return a.RGBA;if(r===ns)return a.DEPTH_COMPONENT;if(r===xr)return a.DEPTH_STENCIL;if(r===Mx)return a.RED;if(r===Rp)return a.RED_INTEGER;if(r===yr)return a.RG;if(r===Cp)return a.RG_INTEGER;if(r===wp)return a.RGBA_INTEGER;if(r===_u||r===vu||r===xu||r===Su)if(u===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vh||r===kh||r===Xh||r===Wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yh||r===qh||r===jh||r===Zh||r===Kh||r===Eu||r===Qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Yh||r===qh)return u===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===jh)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Zh)return c.COMPRESSED_R11_EAC;if(r===Kh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Eu)return c.COMPRESSED_RG11_EAC;if(r===Qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Jh)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$h)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ep)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===np)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ip)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ap)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===op)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===up)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fp)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dp||r===hp||r===pp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===dp)return u===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mp||r===gp||r===bu||r===_p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===mp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Il?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const V2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k2=`
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

}`;class X2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Lx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ji({vertexShader:V2,fragmentShader:k2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new Sr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W2 extends br{constructor(e,i){super();const r=this;let o=null,c=1,u=null,p="local-floor",m=1,d=null,g=null,_=null,v=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",y=new X2,M={},P=i.getContextAttributes();let z=null,C=null;const O=[],L=[],F=new Bt;let T=null;const N=new ki;N.viewport=new Mn;const Y=new ki;Y.viewport=new Mn;const V=[N,Y],Z=new tb;let pe=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let xe=O[ee];return xe===void 0&&(xe=new Qd,O[ee]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ee){let xe=O[ee];return xe===void 0&&(xe=new Qd,O[ee]=xe),xe.getGripSpace()},this.getHand=function(ee){let xe=O[ee];return xe===void 0&&(xe=new Qd,O[ee]=xe),xe.getHandSpace()};function q(ee){const xe=L.indexOf(ee.inputSource);if(xe===-1)return;const Ee=O[xe];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,d||u),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",H);for(let ee=0;ee<O.length;ee++){const xe=L[ee];xe!==null&&(L[ee]=null,O[ee].disconnect(xe))}pe=null,ce=null,y.reset();for(const ee in M)delete M[ee];e.setRenderTarget(z),S=null,v=null,_=null,o=null,C=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",B),o.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Xe=null,st=null;P.depth&&(st=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=P.stencil?xr:ns,Xe=P.stencil?Il:Ca);const et={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(et),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Aa(v.textureWidth,v.textureHeight,{format:la,type:Xi,depthTexture:new Lo(v.textureWidth,v.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Aa(S.framebufferWidth,S.framebufferHeight,{format:la,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(p),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ee){for(let xe=0;xe<ee.removed.length;xe++){const Ee=ee.removed[xe],Xe=L.indexOf(Ee);Xe>=0&&(L[Xe]=null,O[Xe].disconnect(Ee))}for(let xe=0;xe<ee.added.length;xe++){const Ee=ee.added[xe];let Xe=L.indexOf(Ee);if(Xe===-1){for(let et=0;et<O.length;et++)if(et>=L.length){L.push(Ee),Xe=et;break}else if(L[et]===null){L[et]=Ee,Xe=et;break}if(Xe===-1)break}const st=O[Xe];st&&st.connect(Ee)}}const te=new ae,ge=new ae;function Se(ee,xe,Ee){te.setFromMatrixPosition(xe.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const Xe=te.distanceTo(ge),st=xe.projectionMatrix.elements,et=Ee.projectionMatrix.elements,Zt=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],xt=(st[9]-1)/st[5],dt=(st[8]-1)/st[0],Kt=(et[8]+1)/et[0],rn=Zt*dt,on=Zt*Kt,ln=Xe/(-dt+Kt),kt=ln*-dt;if(xe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(kt),ee.translateZ(ln),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),st[10]===-1)ee.projectionMatrix.copy(xe.projectionMatrix),ee.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Xt=Zt+ln,K=ht+ln,zt=rn-kt,wt=on+(Xe-kt),U=vt*ht/K*Xt,b=xt*ht/K*Xt;ee.projectionMatrix.makePerspective(zt,wt,U,b,Xt,K),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function I(ee,xe){xe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(xe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let xe=ee.near,Ee=ee.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),Z.near=Y.near=N.near=xe,Z.far=Y.far=N.far=Ee,(pe!==Z.near||ce!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),pe=Z.near,ce=Z.far),Z.layers.mask=ee.layers.mask|6,N.layers.mask=Z.layers.mask&-5,Y.layers.mask=Z.layers.mask&-3;const Xe=ee.parent,st=Z.cameras;I(Z,Xe);for(let et=0;et<st.length;et++)I(st[et],Xe);st.length===2?Se(Z,N,Y):Z.projectionMatrix.copy(N.projectionMatrix),Q(ee,Z,Xe)};function Q(ee,xe,Ee){Ee===null?ee.matrix.copy(xe.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(xe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(xe.projectionMatrix),ee.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Fl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(ee){m=ee,v!==null&&(v.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ee){return M[ee]};let Me=null;function Ae(ee,xe){if(g=xe.getViewerPose(d||u),E=xe,g!==null){const Ee=g.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Xe=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,Xe=!0);for(let ht=0;ht<Ee.length;ht++){const vt=Ee[ht];let xt=null;if(S!==null)xt=S.getViewport(vt);else{const Kt=_.getViewSubImage(v,vt);xt=Kt.viewport,ht===0&&(e.setRenderTargetTextures(C,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(C))}let dt=V[ht];dt===void 0&&(dt=new ki,dt.layers.enable(ht),dt.viewport=new Mn,V[ht]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ht===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Xe===!0&&Z.cameras.push(dt)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ht=_.getDepthInformation(Ee[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(st&&st.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<Ee.length;ht++){const vt=Ee[ht].camera;if(vt){let xt=M[vt];xt||(xt=new Lx,M[vt]=xt);const dt=_.getCameraImage(vt);xt.sourceTexture=dt}}}}for(let Ee=0;Ee<O.length;Ee++){const Xe=L[Ee],st=O[Ee];Xe!==null&&st!==void 0&&st.update(Xe,xe,d||u)}Me&&Me(ee,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const ze=new Px;ze.setAnimationLoop(Ae),this.setAnimationLoop=function(ee){Me=ee},this.dispose=function(){}}}const Y2=new Tn,Vx=new ft;Vx.set(-1,0,0,0,1,0,0,0,1);function q2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Nx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,P,z,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&S(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&p(y,M)):M.isPointsMaterial?m(y,M,P,z):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===vi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===vi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const P=e.get(M),z=P.envMap,C=P.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Vx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function p(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,P,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*P,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function S(y,M,P){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===vi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const P=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function j2(a,e,i,r){let o={},c={},u=[];const p=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const L=O.program;r.uniformBlockBinding(C,L)}function d(C,O){let L=o[C.id];L===void 0&&(y(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",P));const F=O.program;r.updateUBOMapping(C,F);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const O=_();C.__bindingPointIndex=O;const L=a.createBuffer(),F=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function _(){for(let C=0;C<p;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const O=o[C.id],L=C.uniforms,F=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const Y=L[T];if(Array.isArray(Y))for(let V=0,Z=Y.length;V<Z;V++)S(Y[V],T,V,F);else S(Y,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(C,O,L,F){if(w(C,O,L,F)===!0){const T=C.__offset,N=C.value;if(Array.isArray(N)){let Y=0;for(let V=0;V<N.length;V++){const Z=N[V],pe=M(Z);E(Z,C.__data,Y),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function E(C,O,L){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,L)}function w(C,O,L,F){const T=C.value,N=O+"_"+L;if(F[N]===void 0)return typeof T=="number"||typeof T=="boolean"?F[N]=T:ArrayBuffer.isView(T)?F[N]=T.slice():F[N]=T.clone(),!0;{const Y=F[N];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return F[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function y(C){const O=C.uniforms;let L=0;const F=16;for(let N=0,Y=O.length;N<Y;N++){const V=Array.isArray(O[N])?O[N]:[O[N]];for(let Z=0,pe=V.length;Z<pe;Z++){const ce=V[Z],q=Array.isArray(ce.value)?ce.value:[ce.value];for(let B=0,H=q.length;B<H;B++){const te=q[B],ge=M(te),Se=L%F,I=Se%ge.boundary,Q=Se+I;L+=I,Q!==0&&F-Q<ge.storage&&(L+=F-Q),ce.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=L,L+=ge.storage}}}const T=L%F;return T>0&&(L+=F-T),C.__size=L,C.__cache={},this}function M(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),O}function P(C){const O=C.target;O.removeEventListener("dispose",P);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function z(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:d,dispose:z}}const Z2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function K2(){return Sa===null&&(Sa=new HE(Z2,16,16,yr,ts),Sa.name="DFG_LUT",Sa.minFilter=Pn,Sa.magFilter=Pn,Sa.wrapS=oa,Sa.wrapT=oa,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class Q2{constructor(e={}){const{canvas:i=tE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Xi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const w=S,y=new Set([wp,Cp,Rp]),M=new Set([Xi,Ca,Pl,Il,Tp,Ap]),P=new Uint32Array(4),z=new Int32Array(4),C=new ae;let O=null,L=null;const F=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,Z=null,pe=null,ce=null,q=null;this._outputColorSpace=ui;let B=0,H=0,te=null,ge=-1,Se=null;const I=new Mn,Q=new Mn;let Me=null;const Ae=new Lt(0);let ze=0,ee=i.width,xe=i.height,Ee=1,Xe=null,st=null;const et=new Mn(0,0,ee,xe),Zt=new Mn(0,0,ee,xe);let ht=!1;const vt=new Cx;let xt=!1,dt=!1;const Kt=new Tn,rn=new ae,on=new Mn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Xt(){return te===null?Ee:1}let K=r;function zt(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",an,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Hn,!1),K===null){const k="webgl2";if(K=zt(k,A),K===null)throw zt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let wt,U,b,j,se,fe,Re,De,ue,he,Le,He,Pe,Ie,nt,tt,ot,W,Ne,me,Ce,Ue,be;function Ze(){wt=new KT(K),wt.init(),Ce=new G2(K,wt),U=new VT(K,wt,e,Ce),b=new z2(K,wt),U.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),pe=K.createFramebuffer(),ce=K.createFramebuffer(),q=K.createFramebuffer(),j=new $T(K),se=new T2,fe=new H2(K,wt,b,se,U,Ce,j),Re=new ZT(Y),De=new ib(K),Ue=new HT(K,De),ue=new QT(K,De,j,Ue),he=new tA(K,ue,De,Ue,j),W=new eA(K,U,fe),nt=new kT(se),Le=new b2(Y,Re,wt,U,Ue,nt),He=new q2(Y,se),Pe=new R2,Ie=new U2(wt),ot=new zT(Y,Re,b,he,E,m),tt=new B2(Y,he,U),be=new j2(K,j,U,b),Ne=new GT(K,wt,j),me=new JT(K,wt,j),j.programs=Le.programs,Y.capabilities=U,Y.extensions=wt,Y.properties=se,Y.renderLists=Pe,Y.shadowMap=tt,Y.state=b,Y.info=j}Ze(),w!==Xi&&(N=new iA(w,i.width,i.height,p,o,c));const Ye=new W2(Y,K);this.xr=Ye,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ee,xe,!1))},this.getSize=function(A){return A.set(ee,xe)},this.setSize=function(A,k,ie=!0){if(Ye.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,xe=k,i.width=Math.floor(A*Ee),i.height=Math.floor(k*Ee),ie===!0&&(i.style.width=A+"px",i.style.height=k+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ee*Ee,xe*Ee).floor()},this.setDrawingBufferSize=function(A,k,ie){ee=A,xe=k,Ee=ie,i.width=Math.floor(A*ie),i.height=Math.floor(k*ie),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(w===Xi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,k,ie,ne){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,k,ie,ne),b.viewport(I.copy(et).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Zt)},this.setScissor=function(A,k,ie,ne){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,k,ie,ne),b.scissor(Q.copy(Zt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){b.setScissorTest(ht=A)},this.setOpaqueSort=function(A){Xe=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,ie=!0){let ne=0;if(A){let $=!1;if(te!==null){const Oe=te.texture.format;$=y.has(Oe)}if($){const Oe=te.texture.type,Fe=M.has(Oe),we=ot.getClearColor(),qe=ot.getClearAlpha(),Ge=we.r,Je=we.g,ct=we.b;Fe?(P[0]=Ge,P[1]=Je,P[2]=ct,P[3]=qe,K.clearBufferuiv(K.COLOR,0,P)):(z[0]=Ge,z[1]=Je,z[2]=ct,z[3]=qe,K.clearBufferiv(K.COLOR,0,z))}else ne|=K.COLOR_BUFFER_BIT}k&&(ne|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(ne|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&K.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",an,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Hn,!1),ot.dispose(),Pe.dispose(),Ie.dispose(),se.dispose(),Re.dispose(),he.dispose(),Ue.dispose(),be.dispose(),Le.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",gn),Ye.removeEventListener("sessionend",An),kn.stop()};function an(A){A.preventDefault(),X_("WebGLRenderer: Context Lost."),V=!0}function Dt(){X_("WebGLRenderer: Context Restored."),V=!1;const A=j.autoReset,k=tt.enabled,ie=tt.autoUpdate,ne=tt.needsUpdate,$=tt.type;Ze(),j.autoReset=A,tt.enabled=k,tt.autoUpdate=ie,tt.needsUpdate=ne,tt.type=$}function Hn(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const k=A.target;k.removeEventListener("dispose",Jn),is(k)}function is(A){as(A),se.remove(A)}function as(A){const k=se.get(A).programs;k!==void 0&&(k.forEach(function(ie){Le.releaseProgram(ie)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,ie,ne,$,Oe){k===null&&(k=ln);const Fe=$.isMesh&&$.matrixWorld.determinantAffine()<0,we=Ke(A,k,ie,ne,$);b.setMaterial(ne,Fe);let qe=ie.index,Ge=1;if(ne.wireframe===!0){if(qe=ue.getWireframeAttribute(ie),qe===void 0)return;Ge=2}const Je=ie.drawRange,ct=ie.attributes.position;let Qe=Je.start*Ge,At=(Je.start+Je.count)*Ge;Oe!==null&&(Qe=Math.max(Qe,Oe.start*Ge),At=Math.min(At,(Oe.start+Oe.count)*Ge)),qe!==null?(Qe=Math.max(Qe,0),At=Math.min(At,qe.count)):ct!=null&&(Qe=Math.max(Qe,0),At=Math.min(At,ct.count));const Qt=At-Qe;if(Qt<0||Qt===1/0)return;Ue.setup($,ne,we,ie,qe);let Ht,Nt=Ne;if(qe!==null&&(Ht=De.get(qe),Nt=me,Nt.setIndex(Ht)),$.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*Xt()),Nt.setMode(K.LINES)):Nt.setMode(K.TRIANGLES);else if($.isLine){let Ot=ne.linewidth;Ot===void 0&&(Ot=1),b.setLineWidth(Ot*Xt()),$.isLineSegments?Nt.setMode(K.LINES):$.isLineLoop?Nt.setMode(K.LINE_LOOP):Nt.setMode(K.LINE_STRIP)}else $.isPoints?Nt.setMode(K.POINTS):$.isSprite&&Nt.setMode(K.TRIANGLES);if($.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ot=$._multiDrawStarts,ke=$._multiDrawCounts,Rn=$._multiDrawCount,gt=qe?De.get(qe).bytesPerElement:1,sn=se.get(ne).currentProgram.getUniforms();for(let _n=0;_n<Rn;_n++)sn.setValue(K,"_gl_DrawID",_n),Nt.render(Ot[_n]/gt,ke[_n])}else if($.isInstancedMesh)Nt.renderInstances(Qe,Qt,$.count);else if(ie.isInstancedBufferGeometry){const Ot=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ke=Math.min(ie.instanceCount,Ot);Nt.renderInstances(Qe,Qt,ke)}else Nt.render(Qe,Qt)};function ss(A,k,ie){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=vi,A.needsUpdate=!0,xi(A,k,ie),A.side=es,A.needsUpdate=!0,xi(A,k,ie),A.side=ya):xi(A,k,ie)}this.compile=function(A,k,ie=null){ie===null&&(ie=A),L=Ie.get(ie),L.init(k),T.push(L),ie.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),A!==ie&&A.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const ne=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Oe=$.material;if(Oe)if(Array.isArray(Oe))for(let Fe=0;Fe<Oe.length;Fe++){const we=Oe[Fe];ss(we,ie,$),ne.add(we)}else ss(Oe,ie,$),ne.add(Oe)}),L=T.pop(),ne},this.compileAsync=function(A,k,ie=null){const ne=this.compile(A,k,ie);return new Promise($=>{function Oe(){if(ne.forEach(function(Fe){se.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){$(A);return}setTimeout(Oe,10)}wt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let wa=null;function ii(A){wa&&wa(A)}function gn(){kn.stop()}function An(){kn.start()}const kn=new Px;kn.setAnimationLoop(ii),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){wa=A,Ye.setAnimationLoop(A),A===null?kn.stop():kn.start()},Ye.addEventListener("sessionstart",gn),Ye.addEventListener("sessionend",An),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(A,k);const ie=Ye.enabled===!0&&Ye.isPresenting===!0,ne=N!==null&&(te===null||ie)&&N.begin(Y,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(k),k=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,k,te),L=Ie.get(A,T.length),L.init(k),L.state.textureUnits=fe.getTextureUnits(),T.push(L),Kt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),vt.setFromProjectionMatrix(Kt,ba,k.reversedDepth),dt=this.localClippingEnabled,xt=nt.init(this.clippingPlanes,dt),O=Pe.get(A,F.length),O.init(),F.push(O),Ye.enabled===!0&&Ye.isPresenting===!0){const Fe=Y.xr.getDepthSensingMesh();Fe!==null&&ca(Fe,k,-1/0,Y.sortObjects)}ca(A,k,0,Y.sortObjects),O.finish(),Y.sortObjects===!0&&O.sort(Xe,st,k.reversedDepth),kt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,kt&&ot.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&nt.beginShadows();const $=L.state.shadowsArray;if(tt.render($,A,k),xt===!0&&nt.endShadows(),(ne&&N.hasRenderPass())===!1){const Fe=O.opaque,we=O.transmissive;if(L.setupLights(),k.isArrayCamera){const qe=k.cameras;if(we.length>0)for(let Ge=0,Je=qe.length;Ge<Je;Ge++){const ct=qe[Ge];ks(Fe,we,A,ct)}kt&&ot.render(A);for(let Ge=0,Je=qe.length;Ge<Je;Ge++){const ct=qe[Ge];Vs(O,A,ct,ct.viewport)}}else we.length>0&&ks(Fe,we,A,k),kt&&ot.render(A),Vs(O,A,k)}te!==null&&H===0&&(fe.updateMultisampleRenderTarget(te),fe.updateRenderTargetMipmap(te)),ne&&N.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,k),Ue.resetDefaultState(),ge=-1,Se=null,T.pop(),T.length>0?(L=T[T.length-1],fe.setTextureUnits(L.state.textureUnits),xt===!0&&nt.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?O=F[F.length-1]:O=null,Z!==null&&Z.renderEnd()};function ca(A,k,ie,ne){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){ne&&on.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Kt);const Fe=he.update(A),we=A.material;we.visible&&O.push(A,Fe,we,ie,on.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Fe=he.update(A),we=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),on.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),on.copy(Fe.boundingSphere.center)),on.applyMatrix4(A.matrixWorld).applyMatrix4(Kt)),Array.isArray(we)){const qe=Fe.groups;for(let Ge=0,Je=qe.length;Ge<Je;Ge++){const ct=qe[Ge],Qe=we[ct.materialIndex];Qe&&Qe.visible&&O.push(A,Fe,Qe,ie,on.z,ct)}}else we.visible&&O.push(A,Fe,we,ie,on.z,null)}}const Oe=A.children;for(let Fe=0,we=Oe.length;Fe<we;Fe++)ca(Oe[Fe],k,ie,ne)}function Vs(A,k,ie,ne){const{opaque:$,transmissive:Oe,transparent:Fe}=A;L.setupLightsView(ie),xt===!0&&nt.setGlobalState(Y.clippingPlanes,ie),ne&&b.viewport(I.copy(ne)),$.length>0&&ua($,k,ie),Oe.length>0&&ua(Oe,k,ie),Fe.length>0&&ua(Fe,k,ie),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ks(A,k,ie,ne){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const Qe=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new Aa(1,1,{generateMipmaps:!0,type:Qe?ts:Xi,minFilter:Hs,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||I;Oe.setSize(Fe.z*Y.transmissionResolutionScale,Fe.w*Y.transmissionResolutionScale);const we=Y.getRenderTarget(),qe=Y.getActiveCubeFace(),Ge=Y.getActiveMipmapLevel();Y.setRenderTarget(Oe),Y.getClearColor(Ae),ze=Y.getClearAlpha(),ze<1&&Y.setClearColor(16777215,.5),Y.clear(),kt&&ot.render(ie);const Je=Y.toneMapping;Y.toneMapping=Ta;const ct=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),xt===!0&&nt.setGlobalState(Y.clippingPlanes,ne),ua(A,ie,ne),fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let At=0,Qt=k.length;At<Qt;At++){const Ht=k[At],{object:Nt,geometry:Ot,material:ke,group:Rn}=Ht;if(ke.side===ya&&Nt.layers.test(ne.layers)){const gt=ke.side;ke.side=vi,ke.needsUpdate=!0,Zi(Nt,ie,ne,Ot,ke,Rn),ke.side=gt,ke.needsUpdate=!0,Qe=!0}}Qe===!0&&(fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe))}Y.setRenderTarget(we,qe,Ge),Y.setClearColor(Ae,ze),ct!==void 0&&(ne.viewport=ct),Y.toneMapping=Je}function ua(A,k,ie){const ne=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Oe=A.length;$<Oe;$++){const Fe=A[$],{object:we,geometry:qe,group:Ge}=Fe;let Je=Fe.material;Je.allowOverride===!0&&ne!==null&&(Je=ne),we.layers.test(ie.layers)&&Zi(we,k,ie,qe,Je,Ge)}}function Zi(A,k,ie,ne,$,Oe){A.onBeforeRender(Y,k,ie,ne,$,Oe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(Y,k,ie,ne,A,Oe),$.transparent===!0&&$.side===ya&&$.forceSinglePass===!1?($.side=vi,$.needsUpdate=!0,Y.renderBufferDirect(ie,k,ne,$,A,Oe),$.side=es,$.needsUpdate=!0,Y.renderBufferDirect(ie,k,ne,$,A,Oe),$.side=ya):Y.renderBufferDirect(ie,k,ne,$,A,Oe),A.onAfterRender(Y,k,ie,ne,$,Oe)}function xi(A,k,ie){k.isScene!==!0&&(k=ln);const ne=se.get(A),$=L.state.lights,Oe=L.state.shadowsArray,Fe=$.state.version,we=Le.getParameters(A,$.state,Oe,k,ie,L.state.lightProbeGridArray),qe=Le.getProgramCacheKey(we);let Ge=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ne.fog=k.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Re.get(A.envMap||ne.environment,Je),ne.envMapRotation=ne.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",Jn),Ge=new Map,ne.programs=Ge);let ct=Ge.get(qe);if(ct!==void 0){if(ne.currentProgram===ct&&ne.lightsStateVersion===Fe)return Te(A,we),ct}else we.uniforms=Le.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,ie,we),A.onBeforeCompile(we,Y),ct=Le.acquireProgram(we,qe),Ge.set(qe,ct),ne.uniforms=we.uniforms;const Qe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=nt.uniform),Te(A,we),ne.needsLights=Wt(A),ne.lightsStateVersion=Fe,ne.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=ct,ne.uniformsList=null,ct}function Li(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Mu.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Te(A,k){const ie=se.get(A);ie.outputColorSpace=k.outputColorSpace,ie.batching=k.batching,ie.batchingColor=k.batchingColor,ie.instancing=k.instancing,ie.instancingColor=k.instancingColor,ie.instancingMorph=k.instancingMorph,ie.skinning=k.skinning,ie.morphTargets=k.morphTargets,ie.morphNormals=k.morphNormals,ie.morphColors=k.morphColors,ie.morphTargetsCount=k.morphTargetsCount,ie.numClippingPlanes=k.numClippingPlanes,ie.numIntersection=k.numClipIntersection,ie.vertexAlphas=k.vertexAlphas,ie.vertexTangents=k.vertexTangents,ie.toneMapping=k.toneMapping}function Be(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let ie=0,ne=A.length;ie<ne;ie++){const $=A[ie];if($.texture!==null&&$.boundingBox.containsPoint(C))return $}return null}function Ke(A,k,ie,ne,$){k.isScene!==!0&&(k=ln),fe.resetTextureUnits();const Oe=k.fog,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?k.environment:null,we=te===null?Y.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ct.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ge=Re.get(ne.envMap||Fe,qe),Je=ne.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ct=!!ie.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!ie.morphAttributes.position,At=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color;let Ht=Ta;ne.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ht=Y.toneMapping);const Nt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ot=Nt!==void 0?Nt.length:0,ke=se.get(ne),Rn=L.state.lights;if(xt===!0&&(dt===!0||A!==Se)){const Pt=A===Se&&ne.id===ge;nt.setState(ne,A,Pt)}let gt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Rn.state.version||ke.outputColorSpace!==we||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isBatchedMesh&&ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==Ge||ne.fog===!0&&ke.fog!==Oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==nt.numPlanes||ke.numIntersection!==nt.numIntersection)||ke.vertexAlphas!==Je||ke.vertexTangents!==ct||ke.morphTargets!==Qe||ke.morphNormals!==At||ke.morphColors!==Qt||ke.toneMapping!==Ht||ke.morphTargetsCount!==Ot||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,ke.__version=ne.version);let sn=ke.currentProgram;gt===!0&&(sn=xi(ne,k,$),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,sn,ke));let _n=!1,Si=!1,ai=!1;const Gt=sn.getUniforms(),cn=ke.uniforms;if(b.useProgram(sn.program)&&(_n=!0,Si=!0,ai=!0),ne.id!==ge&&(ge=ne.id,Si=!0),ke.needsLights){const Pt=Be(L.state.lightProbeGridArray,$);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,Si=!0)}if(_n||Se!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(K,"projectionMatrix",A.projectionMatrix),Gt.setValue(K,"viewMatrix",A.matrixWorldInverse);const Ni=Gt.map.cameraPosition;Ni!==void 0&&Ni.setValue(K,rn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Gt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Gt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),Se!==A&&(Se=A,Si=!0,ai=!0)}if(ke.needsLights&&(Rn.state.directionalShadowMap.length>0&&Gt.setValue(K,"directionalShadowMap",Rn.state.directionalShadowMap,fe),Rn.state.spotShadowMap.length>0&&Gt.setValue(K,"spotShadowMap",Rn.state.spotShadowMap,fe),Rn.state.pointShadowMap.length>0&&Gt.setValue(K,"pointShadowMap",Rn.state.pointShadowMap,fe)),$.isSkinnedMesh){Gt.setOptional(K,$,"bindMatrix"),Gt.setOptional(K,$,"bindMatrixInverse");const Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Gt.setValue(K,"boneTexture",Pt.boneTexture,fe))}$.isBatchedMesh&&(Gt.setOptional(K,$,"batchingTexture"),Gt.setValue(K,"batchingTexture",$._matricesTexture,fe),Gt.setOptional(K,$,"batchingIdTexture"),Gt.setValue(K,"batchingIdTexture",$._indirectTexture,fe),Gt.setOptional(K,$,"batchingColorTexture"),$._colorsTexture!==null&&Gt.setValue(K,"batchingColorTexture",$._colorsTexture,fe));const In=ie.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&W.update($,ie,sn),(Si||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,Gt.setValue(K,"receiveShadow",$.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&k.environment!==null&&(cn.envMapIntensity.value=k.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=K2()),Si){if(Gt.setValue(K,"toneMappingExposure",Y.toneMappingExposure),ke.needsLights&&it(cn,ai),Oe&&ne.fog===!0&&He.refreshFogUniforms(cn,Oe),He.refreshMaterialUniforms(cn,ne,Ee,xe,L.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Pt=ke.lightProbeGrid;cn.probesSH.value=Pt.texture,cn.probesMin.value.copy(Pt.boundingBox.min),cn.probesMax.value.copy(Pt.boundingBox.max),cn.probesResolution.value.copy(Pt.resolution)}Mu.upload(K,Li(ke),cn,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Mu.upload(K,Li(ke),cn,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Gt.setValue(K,"center",$.center),Gt.setValue(K,"modelViewMatrix",$.modelViewMatrix),Gt.setValue(K,"normalMatrix",$.normalMatrix),Gt.setValue(K,"modelMatrix",$.matrixWorld),ne.uniformsGroups!==void 0){const Pt=ne.uniformsGroups;for(let Ni=0,fi=Pt.length;Ni<fi;Ni++){const Ki=Pt[Ni];be.update(Ki,sn),be.bind(Ki,sn)}}return sn}function it(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Wt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,k,ie){const ne=se.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=k,se.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ie,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const ie=se.get(A);ie.__webglFramebuffer=k,ie.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,ie=0){te=A,B=k,H=ie;let ne=null,$=!1,Oe=!1;if(A){const we=se.get(A);if(we.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(K.FRAMEBUFFER,we.__webglFramebuffer),I.copy(A.viewport),Q.copy(A.scissor),Me=A.scissorTest,b.viewport(I),b.scissor(Q),b.setScissorTest(Me),ge=-1;return}else if(we.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(we.__hasExternalTextures)fe.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&se.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Oe=!0);const Ge=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?ne=Ge[k][ie]:ne=Ge[k],$=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?ne=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?ne=Ge[ie]:ne=Ge,I.copy(A.viewport),Q.copy(A.scissor),Me=A.scissorTest}else I.copy(et).multiplyScalar(Ee).floor(),Q.copy(Zt).multiplyScalar(Ee).floor(),Me=ht;if(ie!==0&&(ne=pe),b.bindFramebuffer(K.FRAMEBUFFER,ne)&&b.drawBuffers(A,ne),b.viewport(I),b.scissor(Q),b.setScissorTest(Me),$){const we=se.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,ie)}else if(Oe){const we=k;for(let qe=0;qe<A.textures.length;qe++){const Ge=se.get(A.textures[qe]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+qe,Ge.__webglTexture,ie,we)}}else if(A!==null&&ie!==0){const we=se.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,we.__webglTexture,ie)}ge=-1},this.readRenderTargetPixels=function(A,k,ie,ne,$,Oe,Fe,we=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(qe=qe[Fe]),qe){b.bindFramebuffer(K.FRAMEBUFFER,qe);try{const Ge=A.textures[we],Je=Ge.format,ct=Ge.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(Je)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ct)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-ne&&ie>=0&&ie<=A.height-$&&K.readPixels(k,ie,ne,$,Ce.convert(Je),Ce.convert(ct),Oe)}finally{const Ge=te!==null?se.get(te).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,k,ie,ne,$,Oe,Fe,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(qe=qe[Fe]),qe)if(k>=0&&k<=A.width-ne&&ie>=0&&ie<=A.height-$){b.bindFramebuffer(K.FRAMEBUFFER,qe);const Ge=A.textures[we],Je=Ge.format,ct=Ge.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Qe),K.bufferData(K.PIXEL_PACK_BUFFER,Oe.byteLength,K.STREAM_READ),K.readPixels(k,ie,ne,$,Ce.convert(Je),Ce.convert(ct),0);const At=te!==null?se.get(te).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,At);const Qt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await nE(K,Qt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Qe),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Oe),K.deleteBuffer(Qe),K.deleteSync(Qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,ie=0){const ne=Math.pow(2,-ie),$=Math.floor(A.image.width*ne),Oe=Math.floor(A.image.height*ne),Fe=k!==null?k.x:0,we=k!==null?k.y:0;fe.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,ie,0,0,Fe,we,$,Oe),b.unbindTexture()},this.copyTextureToTexture=function(A,k,ie=null,ne=null,$=0,Oe=0){let Fe,we,qe,Ge,Je,ct,Qe,At,Qt;const Ht=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(ie!==null)Fe=ie.max.x-ie.min.x,we=ie.max.y-ie.min.y,qe=ie.isBox3?ie.max.z-ie.min.z:1,Ge=ie.min.x,Je=ie.min.y,ct=ie.isBox3?ie.min.z:0;else{const cn=Math.pow(2,-$);Fe=Math.floor(Ht.width*cn),we=Math.floor(Ht.height*cn),A.isDataArrayTexture?qe=Ht.depth:A.isData3DTexture?qe=Math.floor(Ht.depth*cn):qe=1,Ge=0,Je=0,ct=0}ne!==null?(Qe=ne.x,At=ne.y,Qt=ne.z):(Qe=0,At=0,Qt=0);const Nt=Ce.convert(k.format),Ot=Ce.convert(k.type);let ke;k.isData3DTexture?(fe.setTexture3D(k,0),ke=K.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(fe.setTexture2DArray(k,0),ke=K.TEXTURE_2D_ARRAY):(fe.setTexture2D(k,0),ke=K.TEXTURE_2D),b.activeTexture(K.TEXTURE0),b.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(K.UNPACK_ALIGNMENT,k.unpackAlignment);const Rn=b.getParameter(K.UNPACK_ROW_LENGTH),gt=b.getParameter(K.UNPACK_IMAGE_HEIGHT),sn=b.getParameter(K.UNPACK_SKIP_PIXELS),_n=b.getParameter(K.UNPACK_SKIP_ROWS),Si=b.getParameter(K.UNPACK_SKIP_IMAGES);b.pixelStorei(K.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(K.UNPACK_SKIP_PIXELS,Ge),b.pixelStorei(K.UNPACK_SKIP_ROWS,Je),b.pixelStorei(K.UNPACK_SKIP_IMAGES,ct);const ai=A.isDataArrayTexture||A.isData3DTexture,Gt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const cn=se.get(A),In=se.get(k),Pt=se.get(cn.__renderTarget),Ni=se.get(In.__renderTarget);b.bindFramebuffer(K.READ_FRAMEBUFFER,Pt.__webglFramebuffer),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let fi=0;fi<qe;fi++)ai&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.get(A).__webglTexture,$,ct+fi),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.get(k).__webglTexture,Oe,Qt+fi)),K.blitFramebuffer(Ge,Je,Fe,we,Qe,At,Fe,we,K.DEPTH_BUFFER_BIT,K.NEAREST);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||se.has(A)){const cn=se.get(A),In=se.get(k);b.bindFramebuffer(K.READ_FRAMEBUFFER,ce),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,q);for(let Pt=0;Pt<qe;Pt++)ai?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,cn.__webglTexture,$,ct+Pt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,cn.__webglTexture,$),Gt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,In.__webglTexture,Oe,Qt+Pt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,In.__webglTexture,Oe),$!==0?K.blitFramebuffer(Ge,Je,Fe,we,Qe,At,Fe,we,K.COLOR_BUFFER_BIT,K.NEAREST):Gt?K.copyTexSubImage3D(ke,Oe,Qe,At,Qt+Pt,Ge,Je,Fe,we):K.copyTexSubImage2D(ke,Oe,Qe,At,Ge,Je,Fe,we);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(ke,Oe,Qe,At,Qt,Fe,we,qe,Nt,Ot,Ht.data):k.isCompressedArrayTexture?K.compressedTexSubImage3D(ke,Oe,Qe,At,Qt,Fe,we,qe,Nt,Ht.data):K.texSubImage3D(ke,Oe,Qe,At,Qt,Fe,we,qe,Nt,Ot,Ht):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Oe,Qe,At,Fe,we,Nt,Ot,Ht.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Oe,Qe,At,Ht.width,Ht.height,Nt,Ht.data):K.texSubImage2D(K.TEXTURE_2D,Oe,Qe,At,Fe,we,Nt,Ot,Ht);b.pixelStorei(K.UNPACK_ROW_LENGTH,Rn),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,gt),b.pixelStorei(K.UNPACK_SKIP_PIXELS,sn),b.pixelStorei(K.UNPACK_SKIP_ROWS,_n),b.pixelStorei(K.UNPACK_SKIP_IMAGES,Si),Oe===0&&k.generateMipmaps&&K.generateMipmap(ke),b.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,H=0,te=null,b.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const J2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",$2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",eR="/assets/CXLMediumItalic-DYSp-DoC.otf",tR=4,nR=5,Qa={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function kx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function iR(a){return kx(a)}function aR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const p=c?`${c} ${u}`:u;a.measureText(p).width<=i?c=p:(c&&o.push(c),c=u)}return c&&o.push(c),o}function sR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*nR/tR);return{W:o,H:c}}function Xx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function pn(a,e,i,r,o,c,u){Xx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function yn(a,e,i,r,o,c,u,p){Xx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=p,a.stroke()}function Pu(a,e,i,r,o,c){pn(a,e,i,r,o,c,"#0c0e12"),yn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Iu(a,e,i,r,o,c,u){const p=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${p}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+p);const m=22*u,d=e+r-o-m,g=i+o-2*u;return yn(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+p+10*u}function Wx(a,e,i,r,o,c,u,p){const m=28*p,d=(r-o*2)/2,g=10*p;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,S=_===u;a.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*p),S&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*p,i+m-2*p,d-8*p,2*p))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*p}function rR(a,e,i,r,o,c,u,p,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(p).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function oR(a,e,i,r,o,c,u){const p=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${p}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+p);const m=i+p+6*u,d=34*u;pn(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),yn(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),p+6*u+d}function lR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,p=44*o;pn(a,e,u,r,p,8*o,"#050508"),yn(a,e,u,r,p,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+p*.68);const m=u+p+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),pn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+p+10*o+16*o}function cR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,p=36*o,m=72*o;yn(a,e,u,m,p,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+p*.62);const d=e+m+8*o,g=r-m-8*o;return pn(a,d,u,g,p,6*o,"rgba(255,255,255,0.06)"),yn(a,d,u,g,p,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,p-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+p*.62),a.textAlign="left",10*o+p}function Fp(a,e,i,r,o){const c=44*o;pn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),yn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return pn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qa.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Qa.role} · ${Qa.didShort}`,e+8*o+u+8*o,i+32*o),c}function uR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,p=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),pn(a,e,i,r,c,p,m),yn(a,e,i,r,c,p,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),yn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,p-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qa.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qa.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Qa.role} · ${Qa.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Qa.didShort,e+u,d);const g=28*o;return pn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),yn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function fR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,p=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),pn(a,e,i,r,c,p,m),yn(a,e,i,r,c,p,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qa.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function dR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const p=i+u+12*o,m=Math.max(4,5*o);pn(a,e,p,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);pn(a,e,p,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,p+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,p+m+14*o),a.textAlign="right",a.fillText("100%",e+r,p+m+14*o),a.textAlign="left",u+12*o+m+16*o}function hR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,p=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const S=e+v*(p+u);pn(a,S,d,p,m,6*o,"rgba(255,255,255,0.04)"),yn(a,S,d,p,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(S+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,S+p/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,S+p/2,d+34*o)}),a.textAlign="left",c+8*o+m}function pR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;pn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),yn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const p=.22,m=4*o,d=u-m*2,g=r-m*2-d;return pn(a,e+m,i+m,d+g*p,d,d/2,"rgba(200,245,168,0.18)"),pn(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const Ll=2,Ro={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Iv(a,e,i,r,o,c){const u=6*c,p=o.length,m=(r-u*(p-1))/p,d=36*c;return o.forEach(([g,_],v)=>{const S=e+v*(m+u);pn(a,S,i,m,d,6*c,"rgba(255,255,255,0.04)"),yn(a,S,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,S+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,S+m/2,i+26*c)}),a.textAlign="left",d}function mR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Ro.riskScore},{label:"Rep",value:Ro.reputation}],u=4*o,p=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,S=m*2+6*o+_+v;if(d+S>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";pn(a,d,i,S,p,4*o,E),yn(a,d,i,S,p,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+p/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+p*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+p*.68)),d+=S+u}return a.textAlign="left",p}function gR(a,e,i,r,o){const c=Ro.receipts,u=22*o,p=14*o+c.length*u;return pn(a,e,i,r,p,6*o,"rgba(255,255,255,0.03)"),yn(a,e,i,r,p,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",p}function _R(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,p=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),pn(a,e,i,r,c,p,m),yn(a,e,i,r,c,p,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),yn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,p-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return pn(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),yn(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function vR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,p=c.length*u;return pn(a,e,i,r,p,6*o,"rgba(255,255,255,0.03)"),yn(a,e,i,r,p,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const S=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=S?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",p}function xR(a,e,i,r,o,c=0){const u=r/300,p=12*u,m=10*u,d=(c%Ll+Ll)%Ll,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];Pu(a,e,i,r,o,m);let _=Iu(a,e,i,r,p,g.header,u);_=rR(a,e,_,r,p,g.segment,d+1,Ll,u);const v=i+o-p;if(d===0){_+=Fp(a,e+p,_,r-p*2,u)+8*u,_+22*u<=v&&(_+=mR(a,e+p,_,r-p*2,u)+8*u);const E=[["SHARPE",Ro.sharpe],["ROI",Ro.roi],["RISK",Ro.riskScore]];_+36*u<=v&&(_+=Iv(a,e+p,_,r-p*2,E,u)+8*u),_+70*u<=v&&gR(a,e+p,_,r-p*2,u);return}_+=_R(a,e+p,_,r-p*2,u)+8*u,_+78*u<=v&&(_+=vR(a,e+p,_,r-p*2,u)+8*u);const S=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Iv(a,e+p,_,r-p*2,S,u)}function SR(a,e,i,r,o,c=0){const u=r/300,p=12*u,m=10*u;Pu(a,e,i,r,o,m);let d=Iu(a,e,i,r,p,"COPY TRADE",u);d=Wx(a,e,d,r,p,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-p-g,v=_-10*u;if(c%2===0){const E=6*u,w=r-p*2;let y=(w-E)/2,M=Math.min(y*190/316,y*.58);const P=Math.max(64*u,v-d-28*u);M>P&&(y=y*(P/M),M=P);const z=u*(y/((w-E)/2)),C=e+p+(w-(y*2+E))/2;fR(a,C,d,y,z),uR(a,C+y+E,d,y,z),d+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,F=(r-p*2-L*2)/3,T=32*u;d+T<=v&&(O.forEach(([N,Y],V)=>{const Z=e+p+V*(F+L);pn(a,Z,d,F,T,6*u,"rgba(255,255,255,0.04)"),yn(a,Z,d,F,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,Z+F/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(Y,Z+F/2,d+24*u)}),a.textAlign="left")}else d+=Fp(a,e+p,d,r-p*2,u)+10*u,d+36*u<v&&(d+=dR(a,e+p,d,r-p*2,u,25)+10*u),d+50*u<v&&hR(a,e+p,d,r-p*2,u);pR(a,e+p,_,r-p*2,u)}const MR=2,yR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function ER(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function bR(a,e,i,r,o){const c=r/300,u=12*c,p=10*c;Pu(a,e,i,r,o,p);let m=Iu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,S=e+u+g+v+_+v,E=e+r-u-S,w=e+u+g+v+_/2,y=yR,M=4*c;y.forEach((P,z)=>{if(m>=d-8*c)return;const C=z===0,O=z===y.length-1,L=ER(P.status),F=8*c,T=6*c,N=7*c,Y=8*c,V=P.showActions?22*c:0,Z=P.showActions?5*c:0,ce=Math.max(F+2*c+T,N+4*c+Y)+Z+V+M;if(m+Math.min(ce,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${F}px "DM Mono", ui-monospace, monospace`,a.fillText(P.agent,e+u+g,m+F),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(P.timeLabel,e+u+g,m+F+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+ce),a.stroke());const q=2.4*c;a.beginPath(),a.arc(w,m+5*c,q,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(w,m+5*c,q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const B=4*c,H=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const te=P.statusLabel.toUpperCase(),ge=a.measureText(te).width+B*2,Se=N+H*2;pn(a,S,m,ge,Se,3*c,L.bg),a.fillStyle=L.fg,a.fillText(te,S+B,m+N+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${Y}px "DM Mono", ui-monospace, monospace`;const I=m+Se+3*c+Y;let Q=P.action;if(P.pnl){const Me=`${P.action} · `;a.fillText(Me,S,I);const Ae=a.measureText(Me).width;a.fillStyle=P.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${Y}px "DM Mono", ui-monospace, monospace`,a.fillText(P.pnl.text,S+Ae,I)}else{for(;Q.length>8&&a.measureText(Q).width>E;)Q=`${Q.slice(0,-2)}…`;a.fillText(Q,S,I)}if(P.showActions&&m+Se+3*c+Y+Z+V<=d){const Me=m+Se+3*c+Y+Z,Ae=(E-5*c)/2;yn(a,S,Me,Ae,V,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",S+Ae/2,Me+V*.68),pn(a,S+Ae+5*c,Me,Ae,V,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",S+Ae+5*c+Ae/2,Me+V*.68),a.textAlign="left"}m+=ce})}function TR(a,e,i,r,o){const c=r/300,u=12*c,p=10*c;Pu(a,e,i,r,o,p);let m=Iu(a,e,i,r,u,"FUND BUCKET",c);m=Wx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Fp(a,e+u,m,r-u*2,c)+8*c,m+=oR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=lR(a,e+u,m,r-u*2,c)+6*c),cR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Yx(a,e,i,r,o,c,u=0){switch(e){case"discover":xR(a,i,r,o,c,u);break;case"copy":SR(a,i,r,o,c,u);break;case"supervise":bR(a,i,r,o,c);break;case"isolate":TR(a,i,r,o,c);break}}function AR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Yx(a,e,0,0,i,r,o)}function RR(a,e,i,r,o){const{W:c,H:u}=sR(i,r),p=document.createElement("canvas");p.width=c,p.height=u;const m=p.getContext("2d"),d=m.createLinearGradient(0,0,0,u);d.addColorStop(0,"#080a0e"),d.addColorStop(.55,"#05070d"),d.addColorStop(1,"#030406"),m.fillStyle=d,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),S=c-g*2;let E=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,E+w*.85),E+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=aR(m,a.description,S);m.fillText(M[0]??a.description,g,E+y),E+=Math.round(.07*u),E+=Math.round(.03*u);const P=g,z=E,C=S,O=Math.max(80*i,u-E-v);Yx(m,iR(e),P,z,C,O);const L=new Dx(p);return L.colorSpace=ui,L.minFilter=Hs,L.generateMipmaps=!0,L}const Sp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],CR="0 0 58 35",wR=58,DR=35;function LR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,wR+r*2,DR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Sp.map(p=>D.jsx("path",{d:p,fill:a},p.slice(0,24)))})}const NR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Bp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=NR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(LR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Fv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",UR=50,yu=500,Eh=100,Bv=168;function OR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function PR(){return Fv[Math.floor(Math.random()*Fv.length)]??"?"}function zv(a){return Array.from(a).map(e=>{const i=Math.random()*(yu-Eh),r=Eh+Math.random()*(yu-i-Eh),o=Math.min(yu,i+r);return{original:e,start:i,end:o}})}function IR(a){return Math.min(1,Math.max(0,a))}function FR({text:a,className:e,scrollerRef:i}){const r=We.useRef(null),o=We.useRef(zv(a)),c=OR();return We.useEffect(()=>{o.current=zv(a)},[a]),We.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let p=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const S=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(yu,Math.max(0,S-UR));if(E===d&&d>=0)return;d=E;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let P=0;P<w.length;P++){const z=w[P],C=y[P];if(!C)continue;const O=Math.max(.001,z.end-z.start),L=IR((E-z.start)/O);if(L<1&&(M=!1),L<=0){C.textContent=z.original===" "?" ":z.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(L>=1){C.textContent=z.original===" "?" ":z.original,C.style.transform=`translateY(${-Bv}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=PR(),C.style.transform=`translateY(${-L*Bv}px)`,C.style.opacity=String(1-L),C.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),p=requestAnimationFrame(_))};return p=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(p)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,p)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${p}-${u}`))})}const BR="Enter the agentic economy →",yo=wh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),dn=yo.length,Ka=2.95,Ol=6.9,zp=32,qx=4,jx=5,Mp=2.05,zR=1,HR=Ka*.55,Zx=.28,Kx=.35,GR=Zx+Kx,bh=.85,Hv=300,VR=35,Gv=VR/60*1e3,kR=.1;function Qx(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const XR=1.35,WR=.72,YR=.62,qR=.2,jR=14,ZR=.42,KR=128,QR=12,JR=.002,$R=.0011,Vv=.12,e3=.88,Jx=4,t3=32,n3=40,i3=Jx-1,kv=50,a3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,s3=`
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
`,r3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,o3=`
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
`,l3='"Reckk Heading", Georgia, "Times New Roman", serif',$x="Morpheum Wordmark",Bl=`"${$x}"`,c3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function u3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace($x,`url(${eR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Bl}`);const e=document.fonts.check(`normal 152px ${Bl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function f3(){if(!(typeof document>"u"||!document.fonts))try{await u3();const a=new FontFace("Reckk Title",`url(${$2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${J2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Bl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const pr="flow-intro-hide-chrome",d3=72,h3=120,Th=80;function p3(a){return a<=d3}const m3=280;function gr(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Ah(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;gr(e)}function Bs(a){const e=nn.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Eo(a){const e=Math.max(1,a),i=Math.max(1,dn*e*zR),r=Math.max(1,i/Math.max(1,dn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const g3=900,_3=1100,v3=1300,x3=1500,S3=6,M3=36,y3=50,E3=.5,b3=1024,T3=.75;function Hp(a){return a>=b3}function A3(a){return Hp(a)?g3:_3}function R3(a){return Hp(a)?v3:x3}function eS(a){return Math.max(2,Math.max(1,a)*.004)}function C3(a,e){const{cardPx:i,titlePx:r}=Eo(e),o=Math.max(1,dn-1),c=nn.clamp(Math.round(a),0,dn-1);return r+c/o*i}function w3(a){return a.offsetTop}function D3(a,e,i){return a.offsetTop+C3(e,i)}function Rh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function L3(a){const e=dn-1;return nn.clamp(Math.round(a),0,e)}function Ch(a,e,i,r){const o=eS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:L3(i)}}function N3(a,e,i,r,o,c,u){if(o)return!1;const p=i/Math.max(1,dn-1),m=r+p*E3;return!(a>m||c<u*.5)}function Gp(a,e){const i=a/Math.max(1,e),r=zp*Math.PI/180,o=2*Ol*Math.tan(r/2),c=o*i,u=Mp*qx/jx,p=.992,m=p*o/Mp,d=p*c/u;return nn.clamp(Math.min(m,d),.52,2.35)}function U3(a,e){const i=Gp(a,e);return Hp(a)?i*T3:i}function Xv(a,e,i){const r=Qx(a),o=Gp(a,e),c=a/Math.max(1,e),u=zp*Math.PI/180,m=2*Ol*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function O3(a,e){const i=a/Math.max(1,dn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function P3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function I3(a,e){const i=nn.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=Bs(nn.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function F3(a,e,i,r=0){const o=dn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,p=nn.clamp(i,0,.999);if(u<p)return{opacity:e===c?1:0};const m=Bs(nn.clamp((u-p)/Math.max(1e-6,1-p),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function B3(a){return new ji({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:kR}},vertexShader:r3,fragmentShader:o3,transparent:!0,depthWrite:!0,depthTest:!0,side:es})}function z3(a,e){return a>1.5&&a<e-.5}function H3(a){return nn.clamp(540/Math.max(a,340),.2,.55)}function G3(a,e,i){const r=[],o=jR;for(let c=0;c<o;c++){const u=nn.clamp(a-c/Math.max(1,o-1)*ZR,-.08,1.08),p=Math.sin(u*Math.PI*2*XR)*YR*i,m=Math.sin(u*Math.PI*2*WR)*qR,d=Vv+c/Math.max(1,o-1)*(e3-Vv),g=e-d;r.push(new ae(p,m,g))}return r}function V3(a,e,i,r){const o=a.length;if(o<2)return new qi;const c=[],u=[],p=[],m=[],d=new ae,g=new ae,_=new ae,v=new ae(0,1,0),S=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let P=0;P<=e;P++){const z=P/e*Math.PI*2,C=Math.cos(z),O=Math.sin(z),L=a[w];c.push(L.x+(C*g.x+O*_.x)*M,L.y+(C*g.y+O*_.y)*M,L.z+(C*g.z+O*_.z)*M),u.push(C*g.x+O*_.x,C*g.y+O*_.y,C*g.z+O*_.z),p.push(o===1?0:w/(o-1),P/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*S+y,P=M+1,z=M+S,C=z+1;m.push(M,z,P,P,z,C)}const E=new qi;return E.setAttribute("position",new Wi(c,3)),E.setAttribute("normal",new Wi(u,3)),E.setAttribute("uv",new Wi(p,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Wv(a,e,i,r){const o={verb:a.verb,description:a.description};return RR(o,e,i,r,l3)}function Yv(a,e){const i=Qx(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const p=u.getContext("2d");p.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;p.textAlign="left",p.textBaseline="alphabetic";const g=()=>{p.font=`normal ${d*r}px ${Bl}`};g();const _=O=>{p.font=`normal ${O*r}px ${Bl}`;const L=p.measureText(m),F=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),Y=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:F,right:T,width:F+T,ascent:N,descent:Y}},v=Math.max(1.25,1.85*r)*2,S=64*r+v,E=40*r+v,w=O=>{const L=_(O);return L.width+S*2<=o&&L.ascent+L.descent+E*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,P=c/2+(y.ascent-y.descent)/2,z=p.createLinearGradient(M-y.left,P-y.ascent,M+y.right,P+y.descent);c3.forEach(O=>z.addColorStop(O.t,O.c)),p.lineJoin="round",p.miterLimit=2,p.lineWidth=Math.max(1.25,1.85*r),p.strokeStyle="rgba(8,12,10,0.22)",p.strokeText(m,M,P),p.fillStyle=z,p.fillText(m,M,P);const C=new Dx(u);return C.colorSpace=ui,C.minFilter=Pn,C.magFilter=Pn,C.generateMipmaps=!1,C}function qv(a,e){a.generateMipmaps=!1,a.minFilter=Pn,a.magFilter=Pn,a.wrapS=oa,a.wrapT=oa;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function k3(){const a=We.useRef(null),e=We.useRef(null),i=We.useRef(null),r=We.useRef(null),o=We.useRef(!1),c=We.useRef(!1),u=We.useRef(null),p=We.useCallback(()=>{var d;if(o.current)return;o.current=!0,c.current=!1,(d=u.current)==null||d.call(u);const m=e.current;m==null||m.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(pr),Ah(),requestAnimationFrame(()=>{Ah(),requestAnimationFrame(()=>{Ah(),window.setTimeout(()=>{o.current=!1},100)})})},m3)},[]);return We.useLayoutEffect(()=>{const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=window.location.hash.replace(/^#/,"");return m||d!==""&&d!=="flow"&&d!=="hero"||document.body.classList.add(pr),()=>{document.body.classList.remove(pr)}},[]),We.useEffect(()=>{const m=d=>{if(d.key!=="Escape")return;const g=document.getElementById("hero");g&&g.getBoundingClientRect().top>8&&(d.preventDefault(),p())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[p]),We.useEffect(()=>{const m=window.location.hash.replace(/^#/,"");m&&m!=="flow"&&m!=="hero"&&requestAnimationFrame(()=>{var d;(d=document.getElementById(m))==null||d.scrollIntoView({block:"start"})})},[]),We.useEffect(()=>{const m=i.current,d=a.current;if(!m||!d)return;const g=m,_=d;let v=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(pr);const w=r.current;w&&(w.style.height="0px");return}let E;return(async()=>{if(await f3(),v)return;const w=Math.min(window.devicePixelRatio,2),y=Math.max(320,g.clientWidth||window.innerWidth),M=Math.max(1,g.clientHeight||window.innerHeight),P=[],z=[],C=[],O=new Float64Array(dn).fill(-1);yo.forEach((Te,Be)=>{const Ke=dn-1-Be,it=yo[Ke],Wt=Wv(it,Ke,w,y);C.push(Wt);const A=B3(Wt);P.push(A);const k=Mp,ie=k*qx/jx,ne=new Yi(new Sr(ie,k),A);ne.position.set(0,0,-Be*Ka),ne.renderOrder=Be,z.push(ne)});const L=Yv(w,y),F=new Pp({map:L,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:ya}),T=L.image.height/L.image.width,{w:N,h:Y}=Xv(y,M,T),V=new Yi(new Sr(N,Y),F);V.position.set(0,0,-(dn-1)*Ka),V.renderOrder=n3;const Z=new UE,pe=new ki(zp,1,.08,120),ce=new Q2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),ce.outputColorSpace=ui,ce.sortObjects=!0,g.appendChild(ce.domElement),qv(L,ce);const q=new wl;z.forEach(Te=>q.add(Te)),q.add(V),Z.add(q);const B=new ji({uniforms:{uStrength:{value:0}},vertexShader:a3,fragmentShader:s3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Dh}),H=new Yi(new qi,B);H.frustumCulled=!1,H.renderOrder=kv,H.visible=!1,Z.add(H);const te=yo.map(Te=>new Lt(Te.mood.mid)),ge=te[0].clone();Z.background=ge;const Se=0,I=-(dn-1)*Ka,Q=Ol,Me=-.1*Ka,Ae=.1*Ka;function ze(Te,Be){const Ke=Te+Ol;return(Q-Ke)/Be}let ee=Math.max(1,g.clientHeight||window.innerHeight),xe=!1,Ee=window.innerWidth,Xe=!1,st=!1;function et(){return Math.max(1,window.innerHeight)}function Zt(Te){return Xe?Te>h3&&(Xe=!1):p3(Te)&&(Xe=!0),Xe}function ht(){const Te=r.current;if(!Te)return;const{totalPx:Be}=Eo(ee),Ke=ee*GR,Wt=`${Math.max(Math.ceil(Be+Ke+ee*bh+32-Hv),Math.ceil(ee*1.08))}px`;Te.style.height!==Wt&&(Te.style.height=Wt)}function vt(){const Te=Math.max(1,ee),{totalPx:Be}=Eo(Te),Ke=Math.max(1,Be),it=Se+Me,Wt=I+Ae-HR,k=(it-Wt)/Ke,ie=ze(it,k),ne=ze(Wt,k);return{ih:Te,totalPx:Ke,scrollToWorldFactor:k,minScroll:ie,maxScroll:ne}}let{scrollToWorldFactor:xt,minScroll:dt,maxScroll:Kt}=vt();const rn=new Lt,on=new Lt,ln=new Lt;function kt(){var ie;const Te=Math.max(320,g.clientWidth||window.innerWidth),Be=Math.min(window.devicePixelRatio,2);C.forEach((ne,$)=>{ne.dispose();const Oe=dn-1-$,Fe=Wv(yo[Oe],Oe,Be,Te);C[$]=Fe,P[$].uniforms.uMap.value=Fe}),(ie=F.map)==null||ie.dispose();const Ke=Yv(Be,Te);F.map=Ke,F.needsUpdate=!0,qv(Ke,ce);const it=Ke.image.height/Ke.image.width,Wt=Math.max(1,g.clientHeight||ee),{w:A,h:k}=Xv(Te,Wt,it);V.geometry.dispose(),V.geometry=new Sr(A,k)}function Xt(){const Te=g.clientWidth,Be=g.clientHeight;if(Te<2||Be<2)return;pe.aspect=Te/Be,pe.updateProjectionMatrix(),ce.setSize(Te,Be,!1),kt();const Ke=vt();xt=Ke.scrollToWorldFactor,dt=Ke.minScroll,Kt=Ke.maxScroll,xe||ht()}function K(){xe=!1,ee=et(),Ee=window.innerWidth,Xt()}Xt(),requestAnimationFrame(()=>{v||kt()});let zt=0;function wt(){var Cr,qs;if(v)return;zt=requestAnimationFrame(wt);const Te=et(),Be=document.getElementById("hero"),Ke=Be?Be.getBoundingClientRect().top:0,it=Be?Zt(Ke):!0,{totalPx:Wt}=Eo(ee),A=_.getBoundingClientRect(),k=Math.max(1,_.offsetHeight-ee),ie=nn.clamp(-A.top,0,k);if(!it&&ie<=Wt){if(xe=!1,Math.abs(Te-ee)>Th){ee=Te,ht();const St=vt();xt=St.scrollToWorldFactor,dt=St.minScroll,Kt=St.maxScroll}}else xe=!0;const $=ee,{cardPx:Oe,titlePx:Fe,totalPx:we}=Eo($),qe=Math.max(1,_.offsetHeight-$),Ge=nn.clamp(-A.top,0,qe),Je=Math.min(Ge,we),ct=Math.max(1,we),Qe=$*Zx,At=$*Kx,Qt=Qe+At,Ht=Ge-we,Nt=Bs(nn.clamp(Ht/Math.max(1,Qe),0,1)),Ot=Bs(nn.clamp((Ht-Qe)/Math.max(1,At),0,1)),ke=nn.mapLinear(Oe,0,ct,dt,Kt),Rn=g.clientWidth,gt=g.clientHeight,sn=Math.max(1,Fe),_n=Je<sn,Si=_n?nn.clamp(Je/sn,0,1):0,ai=Math.max(0,Je-sn),Gt=Math.max(1,Oe),In=nn.clamp(ai/Gt,0,1)*(dn-1),Pt=Gp(Rn,gt),Ni=U3(Rn,gt);let fi;_n?fi=nn.mapLinear(Je,0,sn,Kt,ke):fi=nn.mapLinear(Je,sn,ct,ke,dt),fi=nn.clamp(fi,dt,Kt);const Ki=O3(Oe,$),Qi=P3(sn,$),Tr=I3(Si,Qi),Ar=dn-1;if(_n)ln.copy(te[0]);else{const St=Math.min(dn-2,Math.floor(In)),Xn=Math.min(St+1,dn-1),si=Bs(In-St);rn.copy(te[St]),on.copy(te[Xn]),ln.lerpColors(rn,on,si)}Z.background=ge.copy(ln);const fa=Q-fi*xt;pe.position.set(0,0,fa),pe.lookAt(0,0,fa-Ol);const Ji=we+Qt;let Xs=0;if(qe>Ji&&Ge>=Ji){const St=Math.max(1,qe-Ji);Xs=Bs(nn.clamp((Ge-Ji)/St,0,1))}const Io=Math.max(1,Qt+$*bh),Gl=Ge<=ct?nn.clamp(Ge/ct,0,1):1+nn.clamp(Ht/Io,0,1)*.45;if(z3(Ge,qe)){const St=G3(Gl,fa,H3(Rn)),si=new YE(St,!1,"centripetal").getSpacedPoints(KR);if(si.length>=2){const Wn=V3(si,QR,JR,$R),vn=H.geometry.getAttribute("position"),Cn=Wn.getAttribute("position");if(vn&&Cn&&vn.count===Cn.count&&((Cr=H.geometry.getIndex())==null?void 0:Cr.count)===((qs=Wn.getIndex())==null?void 0:qs.count)&&vn&&Cn){vn.array.set(Cn.array),vn.needsUpdate=!0;const rs=H.geometry.getAttribute("normal"),pa=Wn.getAttribute("normal");rs&&pa&&(rs.array.set(pa.array),rs.needsUpdate=!0);const js=H.geometry.getAttribute("uv"),os=Wn.getAttribute("uv");js&&os&&(js.array.set(os.array),js.needsUpdate=!0),Wn.dispose()}else H.geometry.dispose(),H.geometry=Wn;H.visible=!0;const ha=_n||In<nn.clamp(Ki,0,.999);H.renderOrder=ha?i3:kv,B.uniforms.uStrength.value=.36*(1-Xs*.92)}else H.visible=!1,B.uniforms.uStrength.value=0}else H.visible=!1,B.uniforms.uStrength.value=0;const Ui=Math.floor((dn-1)/2),Ws=performance.now(),Ys=nn.clamp(Ki,0,.999);for(let St=0;St<dn;St++){if(_n||In<=St+1e-5||In<St+Ys){O[St]=-1;continue}O[St]<0&&(In>=St+1-1e-5?O[St]=Ws-Gv:O[St]=Ws)}if(z.forEach((St,Xn)=>{const si=-Xn*Ka,Wn=dn-1-Xn,vn=O[Wn];let Cn=vn<0?0:Bs(nn.clamp((Ws-vn)/Gv,0,1));!_n&&Wn===dn-1&&Ot>0&&(Cn=Math.max(Cn,Ot));let{opacity:$i}=F3(In,Wn,Ki,Cn);_n&&Xn===Ar&&($i*=Tr.lastCardOp,Cn=0);let ha=1,rs=0;!_n&&Wn===dn-1&&$i>.02&&Nt>0&&(ha=1-.28*Nt,rs=-Ka*.32*Nt),St.position.set(0,0,si+rs),St.scale.setScalar(Ni*ha);const pa=P[Xn];pa.uniforms.uOpacity.value=$i,pa.uniforms.uWipe.value=Cn,pa.depthWrite=$i>=.995&&Cn<.02,St.visible=$i>.003&&Cn<.997,St.renderOrder=Xn<=Ui?Jx+Xn:t3+(Xn-Ui-1)}),V.position.set(0,0,-Ar*Ka),V.scale.setScalar(Pt),F.opacity=_n?Tr.titleOp:0,F.depthWrite=F.opacity>=.995,V.visible=F.opacity>.003,!o.current){c.current?st=!1:it?st=!0:st&&Ge<we-$*.25&&(st=!1),document.body.classList.toggle(pr,!st);const St=e.current;St!=null&&St.classList.contains("flow-intro__sticky--exit")&&!it&&(St.style.transition="none",St.classList.remove("flow-intro__sticky--exit"),St.offsetWidth,St.style.transition="")}if(!xe){const St=Qt+$*bh+32-Hv,Xn=Math.max(Math.ceil(we+St),Math.ceil($*1.08)),si=r.current;if(si){const Wn=`${Xn}px`;si.style.height!==Wn&&(si.style.height=Wn)}}const da=1-Xs*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(da)),e.current.style.setProperty("--intro-tagline-opacity","1")),ce.domElement.style.opacity=String(1-Xs),ce.render(Z,pe)}wt();let U=0,b=0,j=!1,se="page",fe=!1,Re=!1,De=!1,ue=0,he=0,Le=0,He=!1,Pe=!1,Ie=0,nt=window.scrollY,tt={kind:"title"};const ot=8;function W(){b&&(window.clearTimeout(b),b=0)}function Ne(){U&&(cancelAnimationFrame(U),U=0),j=!1,se="page",c.current=!1}function me(){Ne(),W(),fe=!1}u.current=me;function Ce(){var we;const Te=Math.max(1,ee),{cardPx:Be,titlePx:Ke,totalPx:it}=Eo(Te),Wt=_.getBoundingClientRect(),A=Math.max(1,_.offsetHeight-Te),k=nn.clamp(-Wt.top,0,A),ie=document.getElementById("hero"),ne=ie?Zt(ie.getBoundingClientRect().top):!0,$=((we=e.current)==null?void 0:we.getBoundingClientRect().bottom)??Te,Fe=Math.max(0,Math.min(k,it)-Ke)/Math.max(1,Be)*(dn-1);return{innerH:Te,cardPx:Be,titlePx:Ke,totalPx:it,scrolledPx:k,landed:ne,stickyBottom:$,depthT:Fe}}function Ue(Te=Ce()){return N3(Te.scrolledPx,Te.titlePx,Te.cardPx,Te.totalPx,Te.landed,Te.stickyBottom,Te.innerH)}function be(){return j||Ue()}function Ze(Te){let Be=Te.deltaY;return Te.deltaMode===1?Be*=16:Te.deltaMode===2&&(Be*=window.innerHeight),Be}function Ye(){W(),fe=!0,b=window.setTimeout(()=>{b=0,fe=!1},y3)}function an(Te,Be){return Te.kind==="title"?w3(_):Te.kind==="card"?D3(_,Te.idx,Be.innerH):Rh()}function Dt(Te){if(v||o.current||j)return;const Be=Ce(),Ke=Te.kind==="hero";if(!Ke&&!Ue(Be))return;const it=an(Te,Be);if(it==null)return;const Wt=window.scrollY,A=it-Wt;if(tt=Te.kind==="hero"?{kind:"card",idx:dn-1}:Te,Math.abs(A)<eS(Be.innerH)){gr(it),Ye();return}j=!0,se=Ke?"exit":"page",c.current=Ke,fe=!0;const k=Ke?R3(window.innerWidth):A3(window.innerWidth),ie=performance.now(),ne=Oe=>{if(gr(Oe),j=!1,se="page",U=0,!Ke){c.current=!1,Ye();return}c.current=!1,requestAnimationFrame(()=>{const Fe=Rh();Fe!=null&&gr(Fe),requestAnimationFrame(()=>{const we=Rh();we!=null&&gr(we),Ye()})})},$=Oe=>{if(v||o.current){j=!1,se="page",U=0,c.current=!1;return}if(se==="page"&&!Ue(Ce())){Ne(),fe=!1;return}const Fe=Math.min(1,(Oe-ie)/k);gr(Wt+A*Bs(Fe)),Fe<1?U=requestAnimationFrame($):ne(it)};U=requestAnimationFrame($)}function Hn(Te,Be){const Ke=dn-1,it=Be>0?1:-1,Wt=Ch(Te.scrolledPx,Te.titlePx,Te.depthT,Te.innerH);if(Wt.kind==="title")return it<0?null:{kind:"card",idx:0};const A=Wt.idx+it;return A<0?{kind:"title"}:A>Ke?it>0?{kind:"hero"}:{kind:"card",idx:Ke}:{kind:"card",idx:A}}function Jn(Te){const Be=Ce();if(!Ue(Be)&&!(j&&se==="exit"))return!1;const Ke=Hn(Be,Te);return Ke===null?!1:(Dt(Ke),!0)}function is(Te,Be){return Hn(Te,Be)===null}function as(Te){if(!be())return;const Be=Ze(Te),Ke=Ce();if(!Ue(Ke)&&se!=="exit")return;const it=Hn(Ke,Be>0?1:-1);if(it===null){(j||fe)&&me();return}if(j||fe){Te.preventDefault();return}if(Math.abs(Be)<S3){Te.preventDefault();return}Te.preventDefault(),Dt(it)}function ss(Te){var Be;if(he=((Be=Te.touches[0])==null?void 0:Be.clientY)??he,ue=he,Le=window.scrollY,Re=!1,De=j||Ue(),De&&!j){const Ke=Ce();tt=Ch(Ke.scrolledPx,Ke.titlePx,Ke.depthT,Ke.innerH)}}function wa(Te){var Ke;const Be=((Ke=Te.touches[0])==null?void 0:Ke.clientY)??ue;if(!Re){if(!De&&(j||Ue())&&(De=!0,he=Be,ue=Be,Le=window.scrollY),!De)return;const it=he-Be;if(Math.abs(it)<ot){ue=Be;return}const Wt=it>0?1:-1,A=Ce();if(!j&&!Ue(A)){De=!1,ue=Be;return}if(is(A,Wt)){De=!1,me(),ue=Be;return}j&&me(),Re=!0,De=!1,Le=window.scrollY,tt=Ch(A.scrolledPx,A.titlePx,A.depthT,A.innerH)}Te.preventDefault(),ue=Be,j||gr(Le)}function ii(){const Te=Re,Be=De,Ke=he-ue;if(Re=!1,De=!1,j)return;if(!Te){Be&&me();return}if(!Ue())return;if(Math.abs(Ke)<M3){Dt(tt);return}const it=Ke>0?1:-1,Wt=Ce();if(is(Wt,it)){me();return}Jn(it)}function gn(Te){Te.pointerType!=="touch"&&Te.button===0&&(He=!0,Pe=!1,Ie=window.scrollY,Ue()&&Ne())}function An(Te){if(Te.pointerType==="touch"||!He)return;if(He=!1,!Pe||!Ue()){Pe=!1;return}const Be=Ce(),Ke=window.scrollY>=Ie?1:-1,it=Hn(Be,Ke);if(Pe=!1,it===null){me();return}Dt(it)}function kn(Te){Te.pointerType!=="touch"&&(He=!1,Pe=!1)}function ca(Te){Te.button===0&&(Pe||j||fe||Ue()&&(Te.preventDefault(),Jn(1)))}function Vs(){const Te=window.scrollY,Be=Te-nt;nt=Te,He&&Math.abs(Be)>.5&&(Pe=!0),j&&se==="page"&&!Ue()&&me()}function ks(){me(),K()}function ua(){me();const Te=et(),Be=window.innerWidth,Ke=Math.abs(Te-ee),it=Math.abs(Be-Ee)>1;if(xe){Ke>Th||it?K():Xt();return}ee=Te,Ee=Be,Xt()}function Zi(){me();const Te=et();Math.abs(Te-ee)<=Th||(xe?K():(ee=Te,Ee=window.innerWidth,Xt()))}window.addEventListener("wheel",as,{passive:!1}),window.addEventListener("touchstart",ss,{passive:!0}),window.addEventListener("touchmove",wa,{passive:!1}),window.addEventListener("touchend",ii,{passive:!0}),window.addEventListener("touchcancel",ii,{passive:!0}),window.addEventListener("pointerdown",gn,{passive:!0}),window.addEventListener("pointerup",An,{passive:!0}),window.addEventListener("pointercancel",kn,{passive:!0}),window.addEventListener("scroll",Vs,{passive:!0}),window.addEventListener("resize",ua,{passive:!0}),window.addEventListener("orientationchange",ks,{passive:!0}),g.addEventListener("click",ca);const xi=window.visualViewport;xi&&xi.addEventListener("resize",Zi);const Li=new ResizeObserver(Xt);Li.observe(g),E=()=>{var Te;me(),u.current=null,cancelAnimationFrame(zt),document.body.classList.remove(pr),window.removeEventListener("wheel",as),window.removeEventListener("touchstart",ss),window.removeEventListener("touchmove",wa),window.removeEventListener("touchend",ii),window.removeEventListener("touchcancel",ii),window.removeEventListener("pointerdown",gn),window.removeEventListener("pointerup",An),window.removeEventListener("pointercancel",kn),window.removeEventListener("scroll",Vs),window.removeEventListener("resize",ua),window.removeEventListener("orientationchange",ks),g.removeEventListener("click",ca),xi&&xi.removeEventListener("resize",Zi),Li.disconnect(),P.forEach(Be=>{Be.dispose()}),C.forEach(Be=>Be.dispose()),(Te=F.map)==null||Te.dispose(),F.dispose(),z.forEach(Be=>Be.geometry.dispose()),V.geometry.dispose(),H.geometry.dispose(),B.dispose(),Z.remove(H),ce.dispose(),g.contains(ce.domElement)&&g.removeChild(ce.domElement)},v&&E()})(),()=>{var w;v=!0,(w=u.current)==null||w.call(u),u.current=null,document.body.classList.remove(pr),E==null||E()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Bp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:p,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(FR,{text:BR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:yo.map((m,d)=>D.jsxs("p",{children:["Step ",String(d+1).padStart(2,"0"),": ",m.verb,". ",m.description]},m.verb))})]}),D.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const X3=280,W3=5/4,Y3=3800,q3={discover:Ll,copy:MR};function j3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Z3({stepIndex:a,kind:e,className:i,width:r=X3}){const o=We.useRef(null),c=e??kx(a),u=Math.round(r*W3);return We.useEffect(()=>{const p=o.current;if(!p)return;let m=0,d;const g=()=>{const S=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*S),w=Math.round(u*S);(p.width!==E||p.height!==w)&&(p.width=E,p.height=w);const y=p.getContext("2d");y&&AR(y,c,E,w,m)};g();const _=q3[c];_&&_>1&&!j3()&&(d=setInterval(()=>{m=(m+1)%_,g()},Y3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const jv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function K3(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:jv.map((a,e)=>{const i=e===jv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const Q3=/^(action)$/i;function J3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>Q3.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function tS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:J3(e)})]})}var $3=sx();function eC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function tC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,eC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Zv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=tC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const p=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){p.setStart(c,0),p.setEnd(c,_);const v=p.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const nC=40,iC=5,aC="typewriter-reveal",Kv=1e3,sC=4e3;function Qv(){return Kv+Math.random()*(sC-Kv)}function nS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:p=!1,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),_=We.useRef(null),v=We.useRef(null),S=We.useRef(null),E=We.useRef("idle"),[w,y]=We.useState("idle");g.current=m;const M=We.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),P=We.useCallback(()=>{var N;M(),v.current=null,S.current=null,E.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),z=We.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(P,N)},[M,P]);We.useLayoutEffect(()=>{E.current="idle",y("idle"),S.current=null,v.current=null,M()},[a,i,r,M]),We.useLayoutEffect(()=>{var H,te,ge;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),S.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const Se=S.current??Qv();S.current=null,z(Se);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(nS()){(H=g.current)==null||H.call(g);return}const N=d.current;if(!N||!a){(te=g.current)==null||te.call(g);return}N.style.width="",N.offsetWidth;const Y=Math.max(a.length/i*1e3,120),V=Math.max(a.length,1),Z=N.closest(".typewriter-block"),pe=(Z==null?void 0:Z.clientWidth)??((ge=N.parentElement)==null?void 0:ge.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ce=N.scrollWidth,q=pe>0?Math.min(ce,pe):ce;N.style.width="0",N.style.setProperty("--tw-duration",`${Y}ms`),N.style.setProperty("--tw-target-width",`${q}px`),N.style.setProperty("--tw-steps",String(V)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,E.current="animating",y("animating");const B=Se=>{if(Se.animationName===aC){if(p){N.style.width=`${q}px`,E.current="cursor-hold",y("cursor-hold"),z(Qv());return}N.style.width="",P()}};return N.addEventListener("animationend",B),()=>{N.removeEventListener("animationend",B)}},[o,u,P,p,z,i,a,c,M,r]);const C=w==="animating",O=w==="cursor-hold",L=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(C||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function Vp({text:a,children:e,className:i,speed:r=nC,cursorWidth:o=iC,multiline:c="auto",active:u=!0,holdCursor:p=!0,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),[_,v]=We.useState([]),[S,E]=We.useState(0),[w,y]=We.useState(0),[M,P]=We.useState(!1),[z,C]=We.useState(!1),O=nS();g.current=m;const L=We.useCallback(()=>{const ce=d.current;if(!ce||!a)return v([]),E(0),C(!0),!0;const q=ce.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:te,blockHeight:ge}=Zv(a,q,ce,H);let Se=ge;if(!H){const I=Zv(a,q,ce,!0);Se=Math.max(ge,I.blockHeight)}return v(te),E(Se),C(!0),!0},[a,c,O]);We.useLayoutEffect(()=>{var ce,q;if(y(0),P(!1),C(!1),v([]),E(0),O){(ce=g.current)==null||ce.call(g),C(!0);return}if(!a){(q=g.current)==null||q.call(g),C(!0);return}if(!L()){const B=new ResizeObserver(()=>{L()&&B.disconnect()});return d.current&&B.observe(d.current),()=>B.disconnect()}},[a,c,L,O]);const F=We.useCallback(ce=>{var B;const q=ce>=_.length-1;$3.flushSync(()=>{if(!q){y(ce+1);return}P(!0)}),q&&((B=g.current)==null||B.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),Y={...!M&&!O&&S>0?{height:S,minHeight:S}:void 0},V=e??a;if(!z)return D.jsx("span",{ref:d,className:N,style:Y,children:V});if(O||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:V});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:V});const Z=_.length>0?_:[a],pe=!!e&&Z.length<=1;return D.jsxs("span",{ref:d,className:N,style:Y,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:V}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Z.map((ce,q)=>D.jsx(rC,{text:ce,content:pe?e:void 0,speed:r,cursorWidth:o,waiting:q>w,active:u&&q===w,completed:q<w,holdCursor:p&&q===Z.length-1,onComplete:q===w?()=>F(q):void 0},`${q}-${ce}`))})]})}function oC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=We.useState(!1);return We.useLayoutEffect(()=>{if(r)return;if(oC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(p=>{for(const m of p)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function lC(a){return String(a).padStart(2,"0")}function wu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const cC=1600,uC=1500,Jv=5e3,fC=7e3;function dC(){return Jv+Math.random()*(fC-Jv)}function hC({text:a,active:e}){const[i,r]=We.useState(!1),[o,c]=We.useState(0),u=We.useRef(null),p=`> ${a}`,m=We.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);We.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(wu()){r(!0);return}const g=window.setTimeout(()=>r(!0),uC);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=We.useCallback(()=>{wu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},dC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Vp,{text:p,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:p})})}function pC(){const[a,e]=We.useState(()=>new Set),[i,r]=We.useState(!1),o=We.useRef(new Map),c=We.useRef(null),u=kp(c,{amount:.35}),p=Ls.steps.every(_=>a.has(`step-${_.n}`));We.useLayoutEffect(()=>{if(wu()){e(new Set(Ls.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(S=>{const E=new Set(S);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),We.useLayoutEffect(()=>{if(wu())return;if(!p){r(!1);return}const _=window.setTimeout(()=>{r(!0)},cC);return()=>window.clearTimeout(_)},[p]);const m=We.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=We.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ls.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ls.title}),D.jsx("div",{className:"flow__chips",children:Ls.chips.map(_=>D.jsx(tS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ls.steps.map((_,v)=>{const S=`step-${_.n}`,E=a.has(S);return D.jsxs("article",{ref:w=>m(S,w),"data-flow-key":S,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(S),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",lC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(hC,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:On.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(K3,{}):D.jsx(Z3,{stepIndex:v,width:280}):null})]})})})]},S)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Vp,{text:Ls.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ls.outcome})})]})})}function mC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Bp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:P_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[mu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:On.docs,children:"Docs"}),D.jsx("a",{href:On.manifesto,children:"Manifesto"}),D.jsx("a",{href:On.discord,children:"Discord"}),D.jsx("a",{href:On.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:P_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const $v="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",iS=50,ex=3500,tx=4e3,gC=1400,_C=1200,vC=4500;function aS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function nx(a){return/[A-Za-z0-9]/.test(a)}function xC(){return $v[Math.floor(Math.random()*$v.length)]??"?"}function SC(a){return Math.random()<.5?xC():a}function sS(a,e,i){const r=[];for(let d=0;d<a.length;d++)nx(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),p=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!nx(g)||p.has(d)?m+=g:m+=SC(g)}return m}function MC(a){return typeof a=="boolean"?{enabled:a,decryptMs:ex,pauseMs:tx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??ex,pauseMs:a.pauseMs??tx}}function Kn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=MC(e),c=r+o,[u,p]=We.useState(a);return We.useEffect(()=>{if(!i||aS()){p(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),p(sS(a,v,r))};d();const g=setInterval(d,iS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function ix(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??gC,o=e.stepDecryptMs??_C,c=e.holdMs??vC,u=a.join("\0"),[p,m]=We.useState(a),[d,g]=We.useState(()=>a.map(()=>!1));return We.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||aS()||_.length===0){m(_),g(_.map(()=>!0));return}const S=(_.length-1)*r+o+c;let E=Date.now();const w=()=>{const M=Date.now();let P=M-E;P>=S&&(E=M,P=0);const z=[],C=[];for(let O=0;O<_.length;O++){const L=_[O]??"",F=O*r,T=P>=F;if(C.push(T),!T){z.push(L);continue}const N=P-F;z.push(sS(L,N,o))}m(z),g(C)};w();const y=setInterval(w,iS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:p,started:d}}function yC(){const a=[...O_,...O_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(tS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function EC(){const[a,e]=Ds.headline,i=Kn(Ds.eyebrow.label);return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),D.jsx("div",{className:"hero__grid","aria-hidden":!0}),D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:CR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Sp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`ghost-${r.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Sp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`fill-${r.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ds.eyebrow.href,"aria-label":`${Ds.eyebrow.label}›`,children:[i,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:a}),D.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Co,{href:Ds.primaryCta.href,variant:"primary",children:Ds.primaryCta.label}),D.jsx(Co,{href:Ds.secondaryCta.href,variant:"secondary",children:Ds.secondaryCta.label})]})]}),D.jsx(yC,{})]})}function bC(){const a=Kn(Hd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Hd.href,"aria-label":Hd.text,children:a})})}const ci={decryptMs:2800,pauseMs:5200},ax={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function rS(a){return String(a+1).padStart(2,"0")}function TC(a,e,i,r){return`${rS(a)}  ${e}  ·  ${i}  ·  ${r}`}function AC(a,e,i){return`${rS(a)}  ${e}  ·  ${i}`}function RC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function _i({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function hn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function CC({meta:a}){const e=Kn(a.name,ci),i=Kn(a.tx,ci),r=Kn(a.hash,ci),o=Kn(a.chain,ci),c=Kn(a.verified,ci),u=Kn(a.rep,ci),p=Kn(a.portable,ci),m=Kn(a.next,ci),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,S=`hash ${a.hash}`,E=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,P=`verified ${c} · rep ${u} · portable ${p}`,z=`next ${a.next}`,C=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${p}`,F=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(_i,{label:"tx",value:a.tx,display:i}),D.jsx(_i,{label:"hash",value:a.hash,display:r}),D.jsx(_i,{label:"chain",value:a.chain,display:o}),D.jsx(_i,{label:"verified",value:a.verified,display:c}),D.jsx(_i,{label:"rep",value:a.rep,display:u}),D.jsx(_i,{label:"portable",value:a.portable,display:p}),D.jsx(_i,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(hn,{value:d,display:g}),D.jsx(hn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(hn,{value:S,display:E}),D.jsx(hn,{value:w,display:y}),D.jsx(hn,{value:M,display:P}),D.jsx(hn,{value:z,display:C})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(hn,{value:d,display:g}),D.jsx(hn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(hn,{value:S,display:E}),D.jsx(hn,{value:w,display:y}),D.jsx(hn,{value:F,display:T}),D.jsx(hn,{value:O,display:L}),D.jsx(hn,{value:z,display:C})]})]})}function wC({meta:a}){const e=Kn(a.tx,ci),i=Kn(a.from,ci),r=Kn(a.to,ci),o=Kn(a.asset,ci),c=Kn(a.amt,ci),u=Kn(a.chain,ci),p=Kn(a.status,ci),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,S=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${p}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(_i,{label:"tx",value:a.tx,display:e}),D.jsx(_i,{label:"from",value:a.from,display:i}),D.jsx(_i,{label:"to",value:a.to,display:r}),D.jsx(_i,{label:"asset",value:a.asset,display:o}),D.jsx(_i,{label:"amt",value:a.amt,display:c}),D.jsx(_i,{label:"chain",value:a.chain,display:u}),D.jsx(_i,{label:"status",value:a.status,display:p})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(hn,{value:g,display:_}),D.jsx(hn,{value:m,display:d}),D.jsx(hn,{value:v,display:S}),D.jsx(hn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(hn,{value:g,display:_}),D.jsx(hn,{value:m,display:d}),D.jsx(hn,{value:E,display:w}),D.jsx(hn,{value:a.chain,display:u}),D.jsx(hn,{value:y,display:M})]})]})}function DC({meta:a}){const e=We.useRef(null),i=kp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?RC(r):null,c=We.useMemo(()=>{const d=a.steps.map((g,_)=>TC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=We.useMemo(()=>{const d=a.steps.map((g,_)=>AC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),p=ix(c,{...ax,enabled:i}),m=ix(u,{...ax,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(hn,{value:d,display:p.displays[g]??d,hidden:!(p.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(hn,{value:d,display:p.displays[g]??d,hidden:!(p.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(hn,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function LC({meta:a}){return a.kind==="identity"?D.jsx(CC,{meta:a}):a.kind==="chain"?D.jsx(DC,{meta:a}):D.jsx(wC,{meta:a})}function NC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Co,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(LC,{meta:a.meta})]})}function UC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Gd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Gd.title}),D.jsx("div",{className:"personas__grid",children:Gd.items.map(a=>D.jsx(NC,{persona:a},a.title))})]})})}function OC(){const[a,e]=We.useState(!1),[i,r]=We.useState(!1),[o,c]=We.useState("");return We.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),We.useEffect(()=>{const u=mu.map(m=>m.id),p=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&p.observe(d)}),()=>p.disconnect()},[]),We.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Bp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:mu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:On.docs,children:"Docs"}),D.jsx(Co,{href:On.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[mu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:On.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function PC(){const a=We.useRef(null),e=kp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Vp,{text:U_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:U_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function IC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(bC,{}),D.jsx(OC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(k3,{}),D.jsx(EC,{}),D.jsx(PC,{}),D.jsx(xy,{}),D.jsx(UC,{}),D.jsx(pC,{}),D.jsx(My,{}),D.jsx(vy,{})]}),D.jsx(mC,{})]})}gy.createRoot(document.getElementById("root")).render(D.jsx(We.StrictMode,{children:D.jsx(IC,{})}));
