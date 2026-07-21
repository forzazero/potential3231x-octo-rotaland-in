(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Hd={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function fy(){if(A_)return El;A_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return El.Fragment=e,El.jsx=i,El.jsxs=i,El}var R_;function dy(){return R_||(R_=1,Hd.exports=fy()),Hd.exports}var D=dy(),Gd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function hy(){if(C_)return lt;C_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(U,Q,ve){this.props=U,this.context=Q,this.refs=y,this.updater=ve||E}M.prototype.isReactComponent={},M.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=M.prototype;function z(U,Q,ve){this.props=U,this.context=Q,this.refs=y,this.updater=ve||E}var C=z.prototype=new O;C.constructor=z,w(C,M.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function N(U,Q,ve){var ye=ve.ref;return{$$typeof:a,type:U,key:Q,ref:ye!==void 0?ye:null,props:ve}}function W(U,Q){return N(U.type,Q,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function K(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return Q[ve]})}var me=/\/+/g;function ce(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):Q.toString(36)}function j(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(Q){U.status==="pending"&&(U.status="fulfilled",U.value=Q)},function(Q){U.status==="pending"&&(U.status="rejected",U.reason=Q)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,Q,ve,ye,Ve){var oe=typeof U;(oe==="undefined"||oe==="boolean")&&(U=null);var Te=!1;if(U===null)Te=!0;else switch(oe){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(U.$$typeof){case a:case e:Te=!0;break;case g:return Te=U._init,B(Te(U._payload),Q,ve,ye,Ve)}}if(Te)return Ve=Ve(U),Te=ye===""?"."+ce(U,0):ye,I(Ve)?(ve="",Te!=null&&(ve=Te.replace(me,"$&/")+"/"),B(Ve,Q,ve,"",function(at){return at})):Ve!=null&&(k(Ve)&&(Ve=W(Ve,ve+(Ve.key==null||U&&U.key===Ve.key?"":(""+Ve.key).replace(me,"$&/")+"/")+Te)),Q.push(Ve)),1;Te=0;var Ae=ye===""?".":ye+":";if(I(U))for(var qe=0;qe<U.length;qe++)ye=U[qe],oe=Ae+ce(ye,qe),Te+=B(ye,Q,ve,oe,Ve);else if(qe=x(U),typeof qe=="function")for(U=qe.call(U),qe=0;!(ye=U.next()).done;)ye=ye.value,oe=Ae+ce(ye,qe++),Te+=B(ye,Q,ve,oe,Ve);else if(oe==="object"){if(typeof U.then=="function")return B(j(U),Q,ve,ye,Ve);throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Te}function G(U,Q,ve){if(U==null)return U;var ye=[],Ve=0;return B(U,ye,"","",function(oe){return Q.call(ve,oe,Ve++)}),ye}function ne(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var pe=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},ge={map:G,forEach:function(U,Q,ve){G(U,function(){Q.apply(this,arguments)},ve)},count:function(U){var Q=0;return G(U,function(){Q++}),Q},toArray:function(U){return G(U,function(Q){return Q})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return lt.Activity=_,lt.Children=ge,lt.Component=M,lt.Fragment=i,lt.Profiler=o,lt.PureComponent=z,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},lt.cache=function(U){return function(){return U.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(U,Q,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ye=w({},U.props),Ve=U.key;if(Q!=null)for(oe in Q.key!==void 0&&(Ve=""+Q.key),Q)!A.call(Q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Q.ref===void 0||(ye[oe]=Q[oe]);var oe=arguments.length-2;if(oe===1)ye.children=ve;else if(1<oe){for(var Te=Array(oe),Ae=0;Ae<oe;Ae++)Te[Ae]=arguments[Ae+2];ye.children=Te}return N(U.type,Ve,ye)},lt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},lt.createElement=function(U,Q,ve){var ye,Ve={},oe=null;if(Q!=null)for(ye in Q.key!==void 0&&(oe=""+Q.key),Q)A.call(Q,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ve[ye]=Q[ye]);var Te=arguments.length-2;if(Te===1)Ve.children=ve;else if(1<Te){for(var Ae=Array(Te),qe=0;qe<Te;qe++)Ae[qe]=arguments[qe+2];Ve.children=Ae}if(U&&U.defaultProps)for(ye in Te=U.defaultProps,Te)Ve[ye]===void 0&&(Ve[ye]=Te[ye]);return N(U,oe,Ve)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(U){return{$$typeof:h,render:U}},lt.isValidElement=k,lt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ne}},lt.memo=function(U,Q){return{$$typeof:d,type:U,compare:Q===void 0?null:Q}},lt.startTransition=function(U){var Q=F.T,ve={};F.T=ve;try{var ye=U(),Ve=F.S;Ve!==null&&Ve(ve,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(L,pe)}catch(oe){pe(oe)}finally{Q!==null&&ve.types!==null&&(Q.types=ve.types),F.T=Q}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(U){return F.H.use(U)},lt.useActionState=function(U,Q,ve){return F.H.useActionState(U,Q,ve)},lt.useCallback=function(U,Q){return F.H.useCallback(U,Q)},lt.useContext=function(U){return F.H.useContext(U)},lt.useDebugValue=function(){},lt.useDeferredValue=function(U,Q){return F.H.useDeferredValue(U,Q)},lt.useEffect=function(U,Q){return F.H.useEffect(U,Q)},lt.useEffectEvent=function(U){return F.H.useEffectEvent(U)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(U,Q,ve){return F.H.useImperativeHandle(U,Q,ve)},lt.useInsertionEffect=function(U,Q){return F.H.useInsertionEffect(U,Q)},lt.useLayoutEffect=function(U,Q){return F.H.useLayoutEffect(U,Q)},lt.useMemo=function(U,Q){return F.H.useMemo(U,Q)},lt.useOptimistic=function(U,Q){return F.H.useOptimistic(U,Q)},lt.useReducer=function(U,Q,ve){return F.H.useReducer(U,Q,ve)},lt.useRef=function(U){return F.H.useRef(U)},lt.useState=function(U){return F.H.useState(U)},lt.useSyncExternalStore=function(U,Q,ve){return F.H.useSyncExternalStore(U,Q,ve)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.7",lt}var w_;function Cp(){return w_||(w_=1,Gd.exports=hy()),Gd.exports}var We=Cp(),Vd={exports:{}},bl={},kd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function py(){return D_||(D_=1,(function(a){function e(B,G){var ne=B.length;B.push(G);e:for(;0<ne;){var pe=ne-1>>>1,ge=B[pe];if(0<o(ge,G))B[pe]=G,B[ne]=ge,ne=pe;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],ne=B.pop();if(ne!==G){B[0]=ne;e:for(var pe=0,ge=B.length,U=ge>>>1;pe<U;){var Q=2*(pe+1)-1,ve=B[Q],ye=Q+1,Ve=B[ye];if(0>o(ve,ne))ye<ge&&0>o(Ve,ve)?(B[pe]=Ve,B[ye]=ne,pe=ye):(B[pe]=ve,B[Q]=ne,pe=Q);else if(ye<ge&&0>o(Ve,ne))B[pe]=Ve,B[ye]=ne,pe=ye;else break e}}return G}function o(B,G){var ne=B.sortIndex-G.sortIndex;return ne!==0?ne:B.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,E=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var G=i(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=B)r(d),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(d)}}function I(B){if(w=!1,C(B),!E)if(i(m)!==null)E=!0,L||(L=!0,K());else{var G=i(d);G!==null&&j(I,G.startTime-B)}}var L=!1,F=-1,A=5,N=-1;function W(){return y?!0:!(a.unstable_now()-N<A)}function k(){if(y=!1,L){var B=a.unstable_now();N=B;var G=!0;try{e:{E=!1,w&&(w=!1,O(F),F=-1),x=!0;var ne=v;try{t:{for(C(B),_=i(m);_!==null&&!(_.expirationTime>B&&W());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,v=_.priorityLevel;var ge=pe(_.expirationTime<=B);if(B=a.unstable_now(),typeof ge=="function"){_.callback=ge,C(B),G=!0;break t}_===i(m)&&r(m),C(B)}else r(m);_=i(m)}if(_!==null)G=!0;else{var U=i(d);U!==null&&j(I,U.startTime-B),G=!1}}break e}finally{_=null,v=ne,x=!1}G=void 0}}finally{G?K():L=!1}}}var K;if(typeof z=="function")K=function(){z(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ce=me.port2;me.port1.onmessage=k,K=function(){ce.postMessage(null)}}else K=function(){M(k,0)};function j(B,G){F=M(function(){B(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ne=v;v=G;try{return B()}finally{v=ne}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=v;v=B;try{return G()}finally{v=ne}},a.unstable_scheduleCallback=function(B,G,ne){var pe=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?pe+ne:pe):ne=pe,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ne+ge,B={id:g++,callback:G,priorityLevel:B,startTime:ne,expirationTime:ge,sortIndex:-1},ne>pe?(B.sortIndex=ne,e(d,B),i(m)===null&&B===i(d)&&(w?(O(F),F=-1):w=!0,j(I,ne-pe))):(B.sortIndex=ge,e(m,B),E||x||(E=!0,L||(L=!0,K()))),B},a.unstable_shouldYield=W,a.unstable_wrapCallback=function(B){var G=v;return function(){var ne=v;v=G;try{return B.apply(this,arguments)}finally{v=ne}}}})(Xd)),Xd}var L_;function my(){return L_||(L_=1,kd.exports=py()),kd.exports}var Wd={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function gy(){if(N_)return Kn;N_=1;var a=Cp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Kn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},Kn.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},Kn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Kn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Kn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Kn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Kn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Kn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Kn.requestFormReset=function(m){r.d.r(m)},Kn.unstable_batchedUpdates=function(m,d){return m(d)},Kn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.2.7",Kn}var U_;function ux(){if(U_)return Wd.exports;U_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Wd.exports=gy(),Wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function _y(){if(O_)return bl;O_=1;var a=my(),e=Cp(),i=ux();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=p;break}if(R===l){S=!0,l=f,s=p;break}R=R.sibling}if(!S){for(R=p.child;R;){if(R===s){S=!0,s=p,l=f;break}if(R===l){S=!0,l=p,s=f;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var j=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function U(t){return{current:t}}function Q(t){0>ge||(t.current=pe[ge],pe[ge]=null,ge--)}function ve(t,n){ge++,pe[ge]=t.current,t.current=n}var ye=U(null),Ve=U(null),oe=U(null),Te=U(null);function Ae(t,n){switch(ve(oe,n),ve(Ve,t),ve(ye,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zg(n),t=Kg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(ye),ve(ye,t)}function qe(){Q(ye),Q(Ve),Q(oe)}function at(t){t.memoizedState!==null&&ve(Te,t);var n=ye.current,s=Kg(n,t.type);n!==s&&(ve(Ve,t),ve(ye,s))}function et(t){Ve.current===t&&(Q(ye),Q(Ve)),Te.current===t&&(Q(Te),xl._currentValue=ne)}var ut,ot;function gt(t){if(ut===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);ut=n&&n[1]||"",ot=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+ot}var _t=!1;function ft(t,n){if(!t||_t)return"";_t=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(fe){var le=fe}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(fe){le=fe}t.call(Ee.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],R=p[1];if(S&&R){var V=S.split(`
`),re=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===re.length)for(l=V.length-1,f=re.length-1;1<=l&&0<=f&&V[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==re[f]){var _e=`
`+V[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return gt("Activity");default:return""}}function tn(t){try{var n="",s=null;do n+=Jt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var nn=Object.prototype.hasOwnProperty,an=a.unstable_scheduleCallback,Vt=a.unstable_cancelCallback,jt=a.unstable_shouldYield,Z=a.unstable_requestPaint,Bt=a.unstable_now,xt=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,te=a.unstable_NormalPriority,ae=a.unstable_LowPriority,de=a.unstable_IdlePriority,Re=a.log,Ne=a.unstable_setDisableYieldValue,ue=null,he=null;function Ce(t){if(typeof Re=="function"&&Ne(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(ue,t)}catch{}}var ze=Math.clz32?Math.clz32:Je,Pe=Math.log,Ie=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Pe(t)/Ie|0)|0}var Ke=256,st=262144,Y=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~p,l!==0?f=De(l):(S&=R,S!==0?f=De(S):s||(s=R&~t,s!==0&&(f=De(s))))):(R=l&~p,R!==0?f=De(R):S!==0?f=De(S):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Se(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ye(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,re=t.hiddenUpdates;for(s=S&~s;0<s;){var _e=31-ze(s),Ee=1<<_e;R[_e]=0,V[_e]=-1;var le=re[_e];if(le!==null)for(re[_e]=null,_e=0;_e<le.length;_e++){var fe=le[_e];fe!==null&&(fe.lane&=-536870913)}s&=~Ee}l!==0&&zt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function zt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-ze(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Bn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-ze(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function ei(t,n){var s=n&-n;return s=(s&42)!==0?1:ra(s),(s&(t.suspendedLanes|n))!==0?0:s}function ra(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wa(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:x_(t.type))}function Da(t,n){var s=G.p;try{return G.p=t,n()}finally{G.p=s}}var pi=Math.random().toString(36).slice(2),dn="__reactFiber$"+pi,yn="__reactProps$"+pi,Dn="__reactContainer$"+pi,la="__reactEvents$"+pi,Ws="__reactListeners$"+pi,Ys="__reactHandles$"+pi,ca="__reactResources$"+pi,qi="__reactMarker$"+pi;function ji(t){delete t[dn],delete t[yn],delete t[la],delete t[Ws],delete t[Ys]}function wi(t){var n=t[dn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Dn]||s[dn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=i_(t);t!==null;){if(s=t[dn])return s;t=i_(t)}return n}t=s,s=t.parentNode}return null}function Di(t){if(t=t[dn]||t[Dn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ua(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function mi(t){var n=t[ca];return n||(n=t[ca]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[qi]=!0}var be=new Set,T={};function H(t,n){q(t,n),q(t+"Capture",n)}function q(t,n){for(T[t]=n,t=0;t<n.length;t++)be.add(n[t])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},we={};function Fe(t){return nn.call(we,t)?!0:nn.call($,t)?!1:J.test(t)?we[t]=!0:($[t]=!0,!1)}function Le(t,n,s){if(Fe(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Oe(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function He(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function dt(t){if(!t._valueTracker){var n=tt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=tt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wt=/[\n"\\]/g;function Ut(t){return t.replace(wt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,s,l,f,p,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+je(n)):t.value!==""+je(n)&&(t.value=""+je(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?pt(t,S,je(n)):s!=null?pt(t,S,je(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+je(R):t.removeAttribute("name")}function En(t,n,s,l,f,p,S,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){dt(t);return}s=s!=null?""+je(s):"",n=n!=null?""+je(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),dt(t)}function pt(t,n,s){n==="number"&&Nt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function pn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+je(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function qn(t,n,s){if(n!=null&&(n=""+je(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+je(s):""}function ti(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(j(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=je(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),dt(t)}function jn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Mt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dt(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Mt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function gi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&Dt(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&Dt(t,p,n[p])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(t){return La.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var Fo=null;function Na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fa=null,os=null;function Bo(t){var n=Di(t);if(n&&(t=n.stateNode)){var s=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ut(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[yn]||null;if(!f)throw Error(r(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&kt(l)}break e;case"textarea":qn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&pn(t,!!s.multiple,n,!1)}}}var Ar=!1;function Wl(t,n,s){if(Ar)return t(n,s);Ar=!0;try{var l=t(n);return l}finally{if(Ar=!1,(fa!==null||os!==null)&&(wc(),fa&&(n=fa,t=os,os=fa=null,Bo(n),t)))for(n=0;n<t.length;n++)Bo(t[n])}}function Ua(t,n){var s=t.stateNode;if(s===null)return null;var l=s[yn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ls=!1;if(ri)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){ls=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{ls=!1}var da=null,Yl=null,js=null;function Rr(){if(js)return js;var t,n=Yl,s=n.length,l,f="value"in da?da.value:da.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return js=f.slice(t,1<l?1-l:void 0)}function Cr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wr(){return!0}function ql(){return!1}function zn(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?wr:ql,this.isPropagationStopped=ql,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yt=zn(ha),Zn=_({},ha,{view:0,detail:0}),pa=zn(Zn),On,Ni,Pn,Ki=_({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pn&&(Pn&&t.type==="mousemove"?(On=t.screenX-Pn.screenX,Ni=t.screenY-Pn.screenY):Ni=On=0,Pn=t),On)},movementY:function(t){return"movementY"in t?t.movementY:Ni}}),Zs=zn(Ki),cs=_({},Ki,{dataTransfer:0}),us=zn(cs),zo=_({},Zn,{relatedTarget:0}),Dr=zn(zo),hS=_({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),pS=zn(hS),mS=_({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gS=zn(mS),_S=_({},ha,{data:0}),$p=zn(_S),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=SS[t])?!!n[t]:!1}function Xu(){return MS}var yS=_({},Zn,{key:function(t){if(t.key){var n=vS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?Cr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=zn(yS),bS=_({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=zn(bS),TS=_({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),AS=zn(TS),RS=_({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=zn(RS),wS=_({},Ki,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=zn(wS),LS=_({},ha,{newState:0,oldState:0}),NS=zn(LS),US=[9,13,27,32],Wu=ri&&"CompositionEvent"in window,Ho=null;ri&&"documentMode"in document&&(Ho=document.documentMode);var OS=ri&&"TextEvent"in window&&!Ho,tm=ri&&(!Wu||Ho&&8<Ho&&11>=Ho),nm=" ",im=!1;function am(t,n){switch(t){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function PS(t,n){switch(t){case"compositionend":return sm(n);case"keypress":return n.which!==32?null:(im=!0,nm);case"textInput":return t=n.data,t===nm&&im?null:t;default:return null}}function IS(t,n){if(Lr)return t==="compositionend"||!Wu&&am(t,n)?(t=Rr(),js=Yl=da=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tm&&n.locale!=="ko"?null:n.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!FS[t.type]:n==="textarea"}function om(t,n,s,l){fa?os?os.push(l):os=[l]:fa=l,n=Ic(n,"onChange"),0<n.length&&(s=new yt("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Go=null,Vo=null;function BS(t){kg(t,0)}function jl(t){var n=ua(t);if(kt(n))return t}function lm(t,n){if(t==="change")return n}var cm=!1;if(ri){var Yu;if(ri){var qu="oninput"in document;if(!qu){var um=document.createElement("div");um.setAttribute("oninput","return;"),qu=typeof um.oninput=="function"}Yu=qu}else Yu=!1;cm=Yu&&(!document.documentMode||9<document.documentMode)}function fm(){Go&&(Go.detachEvent("onpropertychange",dm),Vo=Go=null)}function dm(t){if(t.propertyName==="value"&&jl(Vo)){var n=[];om(n,Vo,t,Na(t)),Wl(BS,n)}}function zS(t,n,s){t==="focusin"?(fm(),Go=n,Vo=s,Go.attachEvent("onpropertychange",dm)):t==="focusout"&&fm()}function HS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Vo)}function GS(t,n){if(t==="click")return jl(n)}function VS(t,n){if(t==="input"||t==="change")return jl(n)}function kS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var vi=typeof Object.is=="function"?Object.is:kS;function ko(t,n){if(vi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!nn.call(n,f)||!vi(t[f],n[f]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,n){var s=hm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=hm(s)}}function mm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Nt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Nt(t.document)}return n}function ju(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var XS=ri&&"documentMode"in document&&11>=document.documentMode,Nr=null,Zu=null,Xo=null,Ku=!1;function _m(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ku||Nr==null||Nr!==Nt(l)||(l=Nr,"selectionStart"in l&&ju(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&ko(Xo,l)||(Xo=l,l=Ic(Zu,"onSelect"),0<l.length&&(n=new yt("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Nr)))}function Ks(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Ur={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionrun:Ks("Transition","TransitionRun"),transitionstart:Ks("Transition","TransitionStart"),transitioncancel:Ks("Transition","TransitionCancel"),transitionend:Ks("Transition","TransitionEnd")},Qu={},vm={};ri&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Qs(t){if(Qu[t])return Qu[t];if(!Ur[t])return t;var n=Ur[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in vm)return Qu[t]=n[s];return t}var xm=Qs("animationend"),Sm=Qs("animationiteration"),Mm=Qs("animationstart"),WS=Qs("transitionrun"),YS=Qs("transitionstart"),qS=Qs("transitioncancel"),ym=Qs("transitionend"),Em=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Qi(t,n){Em.set(t,n),H(n,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ui=[],Or=0,$u=0;function Kl(){for(var t=Or,n=$u=Or=0;n<t;){var s=Ui[n];Ui[n++]=null;var l=Ui[n];Ui[n++]=null;var f=Ui[n];Ui[n++]=null;var p=Ui[n];if(Ui[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&bm(s,f,p)}}function Ql(t,n,s,l){Ui[Or++]=t,Ui[Or++]=n,Ui[Or++]=s,Ui[Or++]=l,$u|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ef(t,n,s,l){return Ql(t,n,s,l),Jl(t)}function Js(t,n){return Ql(t,null,null,n),Jl(t)}function bm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-ze(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Jl(t){if(50<dl)throw dl=0,ud=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function jS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(t,n,s,l){return new jS(t,n,s,l)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oa(t,n){var s=t.alternate;return s===null?(s=xi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Tm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $l(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")tf(t)&&(S=1);else if(typeof t=="string")S=$M(t,s,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=xi(31,s,n,f),t.elementType=N,t.lanes=p,t;case w:return $s(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=xi(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case I:return t=xi(13,s,n,f),t.elementType=I,t.lanes=p,t;case L:return t=xi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case O:S=9;break e;case C:S=11;break e;case F:S=14;break e;case A:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=xi(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function $s(t,n,s,l){return t=xi(7,t,l,n),t.lanes=s,t}function nf(t,n,s){return t=xi(6,t,null,n),t.lanes=s,t}function Am(t){var n=xi(18,null,null,0);return n.stateNode=t,n}function af(t,n,s){return n=xi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rm=new WeakMap;function Oi(t,n){if(typeof t=="object"&&t!==null){var s=Rm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:tn(n)},Rm.set(t,n),n)}return{value:t,source:n,stack:tn(n)}}var Ir=[],Fr=0,ec=null,Wo=0,Pi=[],Ii=0,fs=null,ma=1,ga="";function Pa(t,n){Ir[Fr++]=Wo,Ir[Fr++]=ec,ec=t,Wo=n}function Cm(t,n,s){Pi[Ii++]=ma,Pi[Ii++]=ga,Pi[Ii++]=fs,fs=t;var l=ma;t=ga;var f=32-ze(l)-1;l&=~(1<<f),s+=1;var p=32-ze(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ma=1<<32-ze(n)+f|s<<f|l,ga=p+t}else ma=1<<p|s<<f|l,ga=t}function sf(t){t.return!==null&&(Pa(t,1),Cm(t,1,0))}function rf(t){for(;t===ec;)ec=Ir[--Fr],Ir[Fr]=null,Wo=Ir[--Fr],Ir[Fr]=null;for(;t===fs;)fs=Pi[--Ii],Pi[Ii]=null,ga=Pi[--Ii],Pi[Ii]=null,ma=Pi[--Ii],Pi[Ii]=null}function wm(t,n){Pi[Ii++]=ma,Pi[Ii++]=ga,Pi[Ii++]=fs,ma=n.id,ga=n.overflow,fs=t}var Hn=null,sn=null,Rt=!1,ds=null,Fi=!1,of=Error(r(519));function hs(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(Oi(n,t)),of}function Dm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[dn]=t,n[yn]=l,s){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(s=0;s<pl.length;s++)bt(pl[s],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),En(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),ti(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||qg(n.textContent,s)?(l.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),l.onScroll!=null&&bt("scroll",n),l.onScrollEnd!=null&&bt("scrollend",n),l.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||hs(t,!0)}function Lm(t){for(Hn=t.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Hn=Hn.return}}function Br(t){if(t!==Hn)return!1;if(!Rt)return Lm(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Td(t.type,t.memoizedProps)),s=!s),s&&sn&&hs(t),Lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));sn=n_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));sn=n_(t)}else n===27?(n=sn,Rs(t.type)?(t=Dd,Dd=null,sn=t):sn=n):sn=Hn?zi(t.stateNode.nextSibling):null;return!0}function er(){sn=Hn=null,Rt=!1}function lf(){var t=ds;return t!==null&&(ui===null?ui=t:ui.push.apply(ui,t),ds=null),t}function Yo(t){ds===null?ds=[t]:ds.push(t)}var cf=U(null),tr=null,Ia=null;function ps(t,n,s){ve(cf,n._currentValue),n._currentValue=s}function Fa(t){t._currentValue=cf.current,Q(cf)}function uf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function ff(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var R=p;p=f;for(var V=0;V<n.length;V++)if(R.context===n[V]){p.lanes|=s,R=p.alternate,R!==null&&(R.lanes|=s),uf(p.return,s,t),l||(S=null);break e}p=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),uf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function zr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=f.type;vi(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===Te.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(xl):t=[xl])}f=f.return}t!==null&&ff(n,t,s,l),n.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!vi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function nr(t){tr=t,Ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return Nm(tr,t)}function nc(t,n){return tr===null&&nr(t),Nm(t,n)}function Nm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ia===null){if(t===null)throw Error(r(308));Ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ia=Ia.next=n;return s}var ZS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},KS=a.unstable_scheduleCallback,QS=a.unstable_NormalPriority,bn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new ZS,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&KS(QS,function(){t.controller.abort()})}var jo=null,hf=0,Hr=0,Gr=null;function JS(t,n){if(jo===null){var s=jo=[];hf=0,Hr=gd(),Gr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return hf++,n.then(Um,Um),n}function Um(){if(--hf===0&&jo!==null){Gr!==null&&(Gr.status="fulfilled");var t=jo;jo=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $S(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Om=B.S;B.S=function(t,n){_g=Bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(t,n),Om!==null&&Om(t,n)};var ir=U(null);function pf(){var t=ir.current;return t!==null?t:$t.pooledCache}function ic(t,n){n===null?ve(ir,ir.current):ve(ir,n.pool)}function Pm(){var t=pf();return t===null?null:{parent:bn._currentValue,pool:t}}var Vr=Error(r(460)),mf=Error(r(474)),ac=Error(r(542)),sc={then:function(){}};function Im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Zi,Zi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zm(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zm(t),t}throw sr=n,Vr}}function ar(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(sr=s,Vr):s}}var sr=null;function Bm(){if(sr===null)throw Error(r(459));var t=sr;return sr=null,t}function zm(t){if(t===Vr||t===ac)throw Error(r(483))}var kr=null,Zo=0;function rc(t){var n=Zo;return Zo+=1,kr===null&&(kr=[]),Fm(kr,t,n)}function Ko(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function oc(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Hm(t){function n(ee,X){if(t){var se=ee.deletions;se===null?(ee.deletions=[X],ee.flags|=16):se.push(X)}}function s(ee,X){if(!t)return null;for(;X!==null;)n(ee,X),X=X.sibling;return null}function l(ee){for(var X=new Map;ee!==null;)ee.key!==null?X.set(ee.key,ee):X.set(ee.index,ee),ee=ee.sibling;return X}function f(ee,X){return ee=Oa(ee,X),ee.index=0,ee.sibling=null,ee}function p(ee,X,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<X?(ee.flags|=67108866,X):se):(ee.flags|=67108866,X)):(ee.flags|=1048576,X)}function S(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function R(ee,X,se,Me){return X===null||X.tag!==6?(X=nf(se,ee.mode,Me),X.return=ee,X):(X=f(X,se),X.return=ee,X)}function V(ee,X,se,Me){var nt=se.type;return nt===w?_e(ee,X,se.props.children,Me,se.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&ar(nt)===X.type)?(X=f(X,se.props),Ko(X,se),X.return=ee,X):(X=$l(se.type,se.key,se.props,null,ee.mode,Me),Ko(X,se),X.return=ee,X)}function re(ee,X,se,Me){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=af(se,ee.mode,Me),X.return=ee,X):(X=f(X,se.children||[]),X.return=ee,X)}function _e(ee,X,se,Me,nt){return X===null||X.tag!==7?(X=$s(se,ee.mode,Me,nt),X.return=ee,X):(X=f(X,se),X.return=ee,X)}function Ee(ee,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=nf(""+X,ee.mode,se),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return se=$l(X.type,X.key,X.props,null,ee.mode,se),Ko(se,X),se.return=ee,se;case E:return X=af(X,ee.mode,se),X.return=ee,X;case A:return X=ar(X),Ee(ee,X,se)}if(j(X)||K(X))return X=$s(X,ee.mode,se,null),X.return=ee,X;if(typeof X.then=="function")return Ee(ee,rc(X),se);if(X.$$typeof===z)return Ee(ee,nc(ee,X),se);oc(ee,X)}return null}function le(ee,X,se,Me){var nt=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:R(ee,X,""+se,Me);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===nt?V(ee,X,se,Me):null;case E:return se.key===nt?re(ee,X,se,Me):null;case A:return se=ar(se),le(ee,X,se,Me)}if(j(se)||K(se))return nt!==null?null:_e(ee,X,se,Me,null);if(typeof se.then=="function")return le(ee,X,rc(se),Me);if(se.$$typeof===z)return le(ee,X,nc(ee,se),Me);oc(ee,se)}return null}function fe(ee,X,se,Me,nt){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ee=ee.get(se)||null,R(X,ee,""+Me,nt);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case x:return ee=ee.get(Me.key===null?se:Me.key)||null,V(X,ee,Me,nt);case E:return ee=ee.get(Me.key===null?se:Me.key)||null,re(X,ee,Me,nt);case A:return Me=ar(Me),fe(ee,X,se,Me,nt)}if(j(Me)||K(Me))return ee=ee.get(se)||null,_e(X,ee,Me,nt,null);if(typeof Me.then=="function")return fe(ee,X,se,rc(Me),nt);if(Me.$$typeof===z)return fe(ee,X,se,nc(X,Me),nt);oc(X,Me)}return null}function Ze(ee,X,se,Me){for(var nt=null,Pt=null,$e=X,mt=X=0,At=null;$e!==null&&mt<se.length;mt++){$e.index>mt?(At=$e,$e=null):At=$e.sibling;var It=le(ee,$e,se[mt],Me);if(It===null){$e===null&&($e=At);break}t&&$e&&It.alternate===null&&n(ee,$e),X=p(It,X,mt),Pt===null?nt=It:Pt.sibling=It,Pt=It,$e=At}if(mt===se.length)return s(ee,$e),Rt&&Pa(ee,mt),nt;if($e===null){for(;mt<se.length;mt++)$e=Ee(ee,se[mt],Me),$e!==null&&(X=p($e,X,mt),Pt===null?nt=$e:Pt.sibling=$e,Pt=$e);return Rt&&Pa(ee,mt),nt}for($e=l($e);mt<se.length;mt++)At=fe($e,ee,mt,se[mt],Me),At!==null&&(t&&At.alternate!==null&&$e.delete(At.key===null?mt:At.key),X=p(At,X,mt),Pt===null?nt=At:Pt.sibling=At,Pt=At);return t&&$e.forEach(function(Ns){return n(ee,Ns)}),Rt&&Pa(ee,mt),nt}function it(ee,X,se,Me){if(se==null)throw Error(r(151));for(var nt=null,Pt=null,$e=X,mt=X=0,At=null,It=se.next();$e!==null&&!It.done;mt++,It=se.next()){$e.index>mt?(At=$e,$e=null):At=$e.sibling;var Ns=le(ee,$e,It.value,Me);if(Ns===null){$e===null&&($e=At);break}t&&$e&&Ns.alternate===null&&n(ee,$e),X=p(Ns,X,mt),Pt===null?nt=Ns:Pt.sibling=Ns,Pt=Ns,$e=At}if(It.done)return s(ee,$e),Rt&&Pa(ee,mt),nt;if($e===null){for(;!It.done;mt++,It=se.next())It=Ee(ee,It.value,Me),It!==null&&(X=p(It,X,mt),Pt===null?nt=It:Pt.sibling=It,Pt=It);return Rt&&Pa(ee,mt),nt}for($e=l($e);!It.done;mt++,It=se.next())It=fe($e,ee,mt,It.value,Me),It!==null&&(t&&It.alternate!==null&&$e.delete(It.key===null?mt:It.key),X=p(It,X,mt),Pt===null?nt=It:Pt.sibling=It,Pt=It);return t&&$e.forEach(function(uy){return n(ee,uy)}),Rt&&Pa(ee,mt),nt}function Qt(ee,X,se,Me){if(typeof se=="object"&&se!==null&&se.type===w&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var nt=se.key;X!==null;){if(X.key===nt){if(nt=se.type,nt===w){if(X.tag===7){s(ee,X.sibling),Me=f(X,se.props.children),Me.return=ee,ee=Me;break e}}else if(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&ar(nt)===X.type){s(ee,X.sibling),Me=f(X,se.props),Ko(Me,se),Me.return=ee,ee=Me;break e}s(ee,X);break}else n(ee,X);X=X.sibling}se.type===w?(Me=$s(se.props.children,ee.mode,Me,se.key),Me.return=ee,ee=Me):(Me=$l(se.type,se.key,se.props,null,ee.mode,Me),Ko(Me,se),Me.return=ee,ee=Me)}return S(ee);case E:e:{for(nt=se.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){s(ee,X.sibling),Me=f(X,se.children||[]),Me.return=ee,ee=Me;break e}else{s(ee,X);break}else n(ee,X);X=X.sibling}Me=af(se,ee.mode,Me),Me.return=ee,ee=Me}return S(ee);case A:return se=ar(se),Qt(ee,X,se,Me)}if(j(se))return Ze(ee,X,se,Me);if(K(se)){if(nt=K(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),it(ee,X,se,Me)}if(typeof se.then=="function")return Qt(ee,X,rc(se),Me);if(se.$$typeof===z)return Qt(ee,X,nc(ee,se),Me);oc(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,X!==null&&X.tag===6?(s(ee,X.sibling),Me=f(X,se),Me.return=ee,ee=Me):(s(ee,X),Me=nf(se,ee.mode,Me),Me.return=ee,ee=Me),S(ee)):s(ee,X)}return function(ee,X,se,Me){try{Zo=0;var nt=Qt(ee,X,se,Me);return kr=null,nt}catch($e){if($e===Vr||$e===ac)throw $e;var Pt=xi(29,$e,null,ee.mode);return Pt.lanes=Me,Pt.return=ee,Pt}finally{}}}var rr=Hm(!0),Gm=Hm(!1),ms=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function gs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _s(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Jl(t),bm(t,null,s),n}return Ql(t,l,n,s),Jl(t)}function Qo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Bn(t,s)}}function vf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var xf=!1;function Jo(){if(xf){var t=Gr;if(t!==null)throw t}}function $o(t,n,s,l){xf=!1;var f=t.updateQueue;ms=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,re=V.next;V.next=null,S===null?p=re:S.next=re,S=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==S&&(R===null?_e.firstBaseUpdate=re:R.next=re,_e.lastBaseUpdate=V))}if(p!==null){var Ee=f.baseState;S=0,_e=re=V=null,R=p;do{var le=R.lane&-536870913,fe=le!==R.lane;if(fe?(Tt&le)===le:(l&le)===le){le!==0&&le===Hr&&(xf=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,it=R;le=n;var Qt=s;switch(it.tag){case 1:if(Ze=it.payload,typeof Ze=="function"){Ee=Ze.call(Qt,Ee,le);break e}Ee=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=it.payload,le=typeof Ze=="function"?Ze.call(Qt,Ee,le):Ze,le==null)break e;Ee=_({},Ee,le);break e;case 2:ms=!0}}le=R.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=f.callbacks,fe===null?f.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(re=_e=fe,V=Ee):_e=_e.next=fe,S|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,f.lastBaseUpdate=fe,f.shared.pending=null}}while(!0);_e===null&&(V=Ee),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=_e,p===null&&(f.shared.lanes=0),ys|=S,t.lanes=S,t.memoizedState=Ee}}function Vm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function km(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Vm(s[t],n)}var Xr=U(null),lc=U(0);function Xm(t,n){t=Ya,ve(lc,t),ve(Xr,n),Ya=t|n.baseLanes}function Sf(){ve(lc,Ya),ve(Xr,Xr.current)}function Mf(){Ya=lc.current,Q(Xr),Q(lc)}var Si=U(null),Bi=null;function vs(t){var n=t.alternate;ve(xn,xn.current&1),ve(Si,t),Bi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Bi=t)}function yf(t){ve(xn,xn.current),ve(Si,t),Bi===null&&(Bi=t)}function Wm(t){t.tag===22?(ve(xn,xn.current),ve(Si,t),Bi===null&&(Bi=t)):xs()}function xs(){ve(xn,xn.current),ve(Si,Si.current)}function Mi(t){Q(Si),Bi===t&&(Bi=null),Q(xn)}var xn=U(0);function cc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Cd(s)||wd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ba=0,ht=null,Zt=null,Tn=null,uc=!1,Wr=!1,or=!1,fc=0,el=0,Yr=null,eM=0;function mn(){throw Error(r(321))}function Ef(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!vi(t[s],n[s]))return!1;return!0}function bf(t,n,s,l,f,p){return Ba=p,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?C0:zf,or=!1,p=s(l,f),or=!1,Wr&&(p=qm(n,s,l,f)),Ym(t),p}function Ym(t){B.H=il;var n=Zt!==null&&Zt.next!==null;if(Ba=0,Tn=Zt=ht=null,uc=!1,el=0,Yr=null,n)throw Error(r(300));t===null||An||(t=t.dependencies,t!==null&&tc(t)&&(An=!0))}function qm(t,n,s,l){ht=t;var f=0;do{if(Wr&&(Yr=null),el=0,Wr=!1,25<=f)throw Error(r(301));if(f+=1,Tn=Zt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=w0,p=n(s,l)}while(Wr);return p}function tM(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?tl(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(ht.flags|=1024),n}function Tf(){var t=fc!==0;return fc=0,t}function Af(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Rf(t){if(uc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uc=!1}Ba=0,Tn=Zt=ht=null,Wr=!1,el=fc=0,Yr=null}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?ht.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Sn(){if(Zt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=Tn===null?ht.memoizedState:Tn.next;if(n!==null)Tn=n,Zt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Tn===null?ht.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var n=el;return el+=1,Yr===null&&(Yr=[]),t=Fm(Yr,t,n),n=ht,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?C0:zf),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===z)return Gn(t)}throw Error(r(438,String(t)))}function Cf(t){var n=null,s=ht.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=dc(),ht.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=W;return n.index++,s}function za(t,n){return typeof n=="function"?n(t):n}function pc(t){var n=Sn();return wf(n,Zt,t)}function wf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var R=S=null,V=null,re=n,_e=!1;do{var Ee=re.lane&-536870913;if(Ee!==re.lane?(Tt&Ee)===Ee:(Ba&Ee)===Ee){var le=re.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ee===Hr&&(_e=!0);else if((Ba&le)===le){re=re.next,le===Hr&&(_e=!0);continue}else Ee={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(R=V=Ee,S=p):V=V.next=Ee,ht.lanes|=le,ys|=le;Ee=re.action,or&&s(p,Ee),p=re.hasEagerState?re.eagerState:s(p,Ee)}else le={lane:Ee,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},V===null?(R=V=le,S=p):V=V.next=le,ht.lanes|=Ee,ys|=Ee;re=re.next}while(re!==null&&re!==n);if(V===null?S=p:V.next=R,!vi(p,t.memoizedState)&&(An=!0,_e&&(s=Gr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Df(t){var n=Sn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);vi(p,n.memoizedState)||(An=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function jm(t,n,s){var l=ht,f=Sn(),p=Rt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!vi((Zt||f).memoizedState,s);if(S&&(f.memoizedState=s,An=!0),f=f.queue,Uf(Qm.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,qr(9,{destroy:void 0},Km.bind(null,l,f,s,n),null),$t===null)throw Error(r(349));p||(Ba&127)!==0||Zm(l,n,s)}return s}function Zm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ht.updateQueue,n===null?(n=dc(),ht.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Km(t,n,s,l){n.value=s,n.getSnapshot=l,Jm(n)&&$m(t)}function Qm(t,n,s){return s(function(){Jm(n)&&$m(t)})}function Jm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!vi(t,s)}catch{return!0}}function $m(t){var n=Js(t,2);n!==null&&fi(n,t,2)}function Lf(t){var n=ni();if(typeof t=="function"){var s=t;if(t=s(),or){Ce(!0);try{s()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},n}function e0(t,n,s,l){return t.baseState=s,wf(t,Zt,typeof l=="function"?l:za)}function nM(t,n,s,l,f){if(_c(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};B.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,t0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function t0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=B.T,S={};B.T=S;try{var R=s(f,l),V=B.S;V!==null&&V(S,R),n0(t,n,R)}catch(re){Nf(t,n,re)}finally{p!==null&&S.types!==null&&(p.types=S.types),B.T=p}}else try{p=s(f,l),n0(t,n,p)}catch(re){Nf(t,n,re)}}function n0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){i0(t,n,l)},function(l){return Nf(t,n,l)}):i0(t,n,s)}function i0(t,n,s){n.status="fulfilled",n.value=s,a0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,t0(t,s)))}function Nf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,a0(n),n=n.next;while(n!==l)}t.action=null}function a0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function s0(t,n){return n}function r0(t,n){if(Rt){var s=$t.formState;if(s!==null){e:{var l=ht;if(Rt){if(sn){t:{for(var f=sn,p=Fi;f.nodeType!==8;){if(!p){f=null;break t}if(f=zi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){sn=zi(f.nextSibling),l=f.data==="F!";break e}}hs(l)}l=!1}l&&(n=s[0])}}return s=ni(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s0,lastRenderedState:n},s.queue=l,s=T0.bind(null,ht,l),l.dispatch=s,l=Lf(!1),p=Bf.bind(null,ht,!1,l.queue),l=ni(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=nM.bind(null,ht,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function o0(t){var n=Sn();return l0(n,Zt,t)}function l0(t,n,s){if(n=wf(t,n,s0)[0],t=pc(za)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=tl(n)}catch(S){throw S===Vr?ac:S}else l=n;n=Sn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(ht.flags|=2048,qr(9,{destroy:void 0},iM.bind(null,f,s),null)),[l,p,t]}function iM(t,n){t.action=n}function c0(t){var n=Sn(),s=Zt;if(s!==null)return l0(n,s,t);Sn(),n=n.memoizedState,s=Sn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function qr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=ht.updateQueue,n===null&&(n=dc(),ht.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function u0(){return Sn().memoizedState}function mc(t,n,s,l){var f=ni();ht.flags|=t,f.memoizedState=qr(1|n,{destroy:void 0},s,l===void 0?null:l)}function gc(t,n,s,l){var f=Sn();l=l===void 0?null:l;var p=f.memoizedState.inst;Zt!==null&&l!==null&&Ef(l,Zt.memoizedState.deps)?f.memoizedState=qr(n,p,s,l):(ht.flags|=t,f.memoizedState=qr(1|n,p,s,l))}function f0(t,n){mc(8390656,8,t,n)}function Uf(t,n){gc(2048,8,t,n)}function aM(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=dc(),ht.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function d0(t){var n=Sn().memoizedState;return aM({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function h0(t,n){return gc(4,2,t,n)}function p0(t,n){return gc(4,4,t,n)}function m0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function g0(t,n,s){s=s!=null?s.concat([t]):null,gc(4,4,m0.bind(null,n,t),s)}function Of(){}function _0(t,n){var s=Sn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Ef(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function v0(t,n){var s=Sn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Ef(n,l[1]))return l[0];if(l=t(),or){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,n],l}function Pf(t,n,s){return s===void 0||(Ba&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=xg(),ht.lanes|=t,ys|=t,s)}function x0(t,n,s,l){return vi(s,n)?s:Xr.current!==null?(t=Pf(t,s,l),vi(t,n)||(An=!0),t):(Ba&42)===0||(Ba&1073741824)!==0&&(Tt&261930)===0?(An=!0,t.memoizedState=s):(t=xg(),ht.lanes|=t,ys|=t,n)}function S0(t,n,s,l,f){var p=G.p;G.p=p!==0&&8>p?p:8;var S=B.T,R={};B.T=R,Bf(t,!1,n,s);try{var V=f(),re=B.S;if(re!==null&&re(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _e=$S(V,l);nl(t,n,_e,bi(t))}else nl(t,n,l,bi(t))}catch(Ee){nl(t,n,{then:function(){},status:"rejected",reason:Ee},bi())}finally{G.p=p,S!==null&&R.types!==null&&(S.types=R.types),B.T=S}}function sM(){}function If(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=M0(t).queue;S0(t,f,n,ne,s===null?sM:function(){return y0(t),s(l)})}function M0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:ne},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function y0(t){var n=M0(t);n.next===null&&(n=t.alternate.memoizedState),nl(t,n.next.queue,{},bi())}function Ff(){return Gn(xl)}function E0(){return Sn().memoizedState}function b0(){return Sn().memoizedState}function rM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=bi();t=gs(s);var l=_s(n,t,s);l!==null&&(fi(l,n,s),Qo(l,n,s)),n={cache:df()},t.payload=n;return}n=n.return}}function oM(t,n,s){var l=bi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(t)?A0(n,s):(s=ef(t,n,s,l),s!==null&&(fi(s,t,l),R0(s,n,l)))}function T0(t,n,s){var l=bi();nl(t,n,s,l)}function nl(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(t))A0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,R=p(S,s);if(f.hasEagerState=!0,f.eagerState=R,vi(R,S))return Ql(t,n,f,0),$t===null&&Kl(),!1}catch{}finally{}if(s=ef(t,n,f,l),s!==null)return fi(s,t,l),R0(s,n,l),!0}return!1}function Bf(t,n,s,l){if(l={lane:2,revertLane:gd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(n)throw Error(r(479))}else n=ef(t,s,l,2),n!==null&&fi(n,t,2)}function _c(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function A0(t,n){Wr=uc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function R0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Bn(t,s)}}var il={readContext:Gn,use:hc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};il.useEffectEvent=mn;var C0={readContext:Gn,use:hc,useCallback:function(t,n){return ni().memoizedState=[t,n===void 0?null:n],t},useContext:Gn,useEffect:f0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,mc(4194308,4,m0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return mc(4194308,4,t,n)},useInsertionEffect:function(t,n){mc(4,2,t,n)},useMemo:function(t,n){var s=ni();n=n===void 0?null:n;var l=t();if(or){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ni();if(s!==void 0){var f=s(n);if(or){Ce(!0);try{s(n)}finally{Ce(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=oM.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var n=ni();return t={current:t},n.memoizedState=t},useState:function(t){t=Lf(t);var n=t.queue,s=T0.bind(null,ht,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Of,useDeferredValue:function(t,n){var s=ni();return Pf(s,t,n)},useTransition:function(){var t=Lf(!1);return t=S0.bind(null,ht,t.queue,!0,!1),ni().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=ht,f=ni();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),$t===null)throw Error(r(349));(Tt&127)!==0||Zm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,f0(Qm.bind(null,l,p,t),[t]),l.flags|=2048,qr(9,{destroy:void 0},Km.bind(null,l,p,s,n),null),s},useId:function(){var t=ni(),n=$t.identifierPrefix;if(Rt){var s=ga,l=ma;s=(l&~(1<<32-ze(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=fc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=eM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ff,useFormState:r0,useActionState:r0,useOptimistic:function(t){var n=ni();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Bf.bind(null,ht,!0,s),s.dispatch=n,[t,n]},useMemoCache:Cf,useCacheRefresh:function(){return ni().memoizedState=rM.bind(null,ht)},useEffectEvent:function(t){var n=ni(),s={impl:t};return n.memoizedState=s,function(){if((Ht&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},zf={readContext:Gn,use:hc,useCallback:_0,useContext:Gn,useEffect:Uf,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:pc,useRef:u0,useState:function(){return pc(za)},useDebugValue:Of,useDeferredValue:function(t,n){var s=Sn();return x0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=pc(za)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:tl(t),n]},useSyncExternalStore:jm,useId:E0,useHostTransitionStatus:Ff,useFormState:o0,useActionState:o0,useOptimistic:function(t,n){var s=Sn();return e0(s,Zt,t,n)},useMemoCache:Cf,useCacheRefresh:b0};zf.useEffectEvent=d0;var w0={readContext:Gn,use:hc,useCallback:_0,useContext:Gn,useEffect:Uf,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:Df,useRef:u0,useState:function(){return Df(za)},useDebugValue:Of,useDeferredValue:function(t,n){var s=Sn();return Zt===null?Pf(s,t,n):x0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=Df(za)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:tl(t),n]},useSyncExternalStore:jm,useId:E0,useHostTransitionStatus:Ff,useFormState:c0,useActionState:c0,useOptimistic:function(t,n){var s=Sn();return Zt!==null?e0(s,Zt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:b0};w0.useEffectEvent=d0;function Hf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Gf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=bi(),f=gs(l);f.payload=n,s!=null&&(f.callback=s),n=_s(t,f,l),n!==null&&(fi(n,t,l),Qo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=bi(),f=gs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=_s(t,f,l),n!==null&&(fi(n,t,l),Qo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=bi(),l=gs(s);l.tag=2,n!=null&&(l.callback=n),n=_s(t,l,s),n!==null&&(fi(n,t,s),Qo(n,t,s))}};function D0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!ko(s,l)||!ko(f,p):!0}function L0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Gf.enqueueReplaceState(n,n.state,null)}function lr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function N0(t){Zl(t)}function U0(t){console.error(t)}function O0(t){Zl(t)}function vc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function P0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vf(t,n,s){return s=gs(s),s.tag=3,s.payload={element:null},s.callback=function(){vc(t,n)},s}function I0(t){return t=gs(t),t.tag=3,t}function F0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){P0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){P0(n,s,l),typeof f!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function lM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&zr(n,s,f,!0),s=Si.current,s!==null){switch(s.tag){case 31:case 13:return Bi===null?Dc():s.alternate===null&&gn===0&&(gn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===sc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),hd(t,l,f)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),hd(t,l,f)),!1}throw Error(r(435,s.tag))}return hd(t,l,f),Dc(),!1}if(Rt)return n=Si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==of&&(t=Error(r(422),{cause:l}),Yo(Oi(t,s)))):(l!==of&&(n=Error(r(423),{cause:l}),Yo(Oi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Oi(l,s),f=Vf(t.stateNode,l,f),vf(t,f),gn!==4&&(gn=2)),!1;var p=Error(r(520),{cause:l});if(p=Oi(p,s),fl===null?fl=[p]:fl.push(p),gn!==4&&(gn=2),n===null)return!0;l=Oi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Vf(s.stateNode,l,t),vf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Es===null||!Es.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=I0(f),F0(f,t,s,l),vf(s,f),!1}s=s.return}while(s!==null);return!1}var kf=Error(r(461)),An=!1;function Vn(t,n,s,l){n.child=t===null?Gm(n,null,s,l):rr(n,t.child,s,l)}function B0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return nr(n),l=bf(t,n,s,S,p,f),R=Tf(),t!==null&&!An?(Af(t,n,f),Ha(t,n,f)):(Rt&&R&&sf(n),n.flags|=1,Vn(t,n,l,f),n.child)}function z0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!tf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,H0(t,n,p,l,f)):(t=$l(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Qf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:ko,s(S,l)&&t.ref===n.ref)return Ha(t,n,f)}return n.flags|=1,t=Oa(p,l),t.ref=n.ref,t.return=n,n.child=t}function H0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(ko(p,l)&&t.ref===n.ref)if(An=!1,n.pendingProps=l=p,Qf(t,f))(t.flags&131072)!==0&&(An=!0);else return n.lanes=t.lanes,Ha(t,n,f)}return Xf(t,n,s,l,f)}function G0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return V0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(n,p!==null?p.cachePool:null),p!==null?Xm(n,p):Sf(),Wm(n);else return l=n.lanes=536870912,V0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(ic(n,p.cachePool),Xm(n,p),xs(),n.memoizedState=null):(t!==null&&ic(n,null),Sf(),xs());return Vn(t,n,f,s),n.child}function al(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function V0(t,n,s,l,f){var p=pf();return p=p===null?null:{parent:bn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&ic(n,null),Sf(),Wm(n),t!==null&&zr(t,n,l,!0),n.childLanes=f,null}function xc(t,n){return n=Mc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function k0(t,n,s){return rr(n,t.child,null,s),t=xc(n,n.pendingProps),t.flags|=2,Mi(n),n.memoizedState=null,t}function cM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=xc(n,l),n.lanes=536870912,al(null,t);if(yf(n),(t=sn)?(t=t_(t,Fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fs!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=Am(t),s.return=n,n.child=s,Hn=n,sn=null)):t=null,t===null)throw hs(n);return n.lanes=536870912,null}return xc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(yf(n),f)if(n.flags&256)n.flags&=-257,n=k0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(An||zr(t,n,s,!1),f=(s&t.childLanes)!==0,An||f){if(l=$t,l!==null&&(S=ei(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,Js(t,S),fi(l,t,S),kf;Dc(),n=k0(t,n,s)}else t=p.treeContext,sn=zi(S.nextSibling),Hn=n,Rt=!0,ds=null,Fi=!1,t!==null&&wm(n,t),n=xc(n,l),n.flags|=4096;return n}return t=Oa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Xf(t,n,s,l,f){return nr(n),s=bf(t,n,s,l,void 0,f),l=Tf(),t!==null&&!An?(Af(t,n,f),Ha(t,n,f)):(Rt&&l&&sf(n),n.flags|=1,Vn(t,n,s,f),n.child)}function X0(t,n,s,l,f,p){return nr(n),n.updateQueue=null,s=qm(n,l,s,f),Ym(t),l=Tf(),t!==null&&!An?(Af(t,n,p),Ha(t,n,p)):(Rt&&l&&sf(n),n.flags|=1,Vn(t,n,s,p),n.child)}function W0(t,n,s,l,f){if(nr(n),n.stateNode===null){var p=Pr,S=s.contextType;typeof S=="object"&&S!==null&&(p=Gn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Gf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},gf(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?Gn(S):Pr,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Hf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Gf.enqueueReplaceState(p,p.state,null),$o(n,l,p,f),Jo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var R=n.memoizedProps,V=lr(s,R);p.props=V;var re=p.context,_e=s.contextType;S=Pr,typeof _e=="object"&&_e!==null&&(S=Gn(_e));var Ee=s.getDerivedStateFromProps;_e=typeof Ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||re!==S)&&L0(n,p,l,S),ms=!1;var le=n.memoizedState;p.state=le,$o(n,l,p,f),Jo(),re=n.memoizedState,R||le!==re||ms?(typeof Ee=="function"&&(Hf(n,s,Ee,l),re=n.memoizedState),(V=ms||D0(n,s,V,l,le,re,S))?(_e||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=S,l=V):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,_f(t,n),S=n.memoizedProps,_e=lr(s,S),p.props=_e,Ee=n.pendingProps,le=p.context,re=s.contextType,V=Pr,typeof re=="object"&&re!==null&&(V=Gn(re)),R=s.getDerivedStateFromProps,(re=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Ee||le!==V)&&L0(n,p,l,V),ms=!1,le=n.memoizedState,p.state=le,$o(n,l,p,f),Jo();var fe=n.memoizedState;S!==Ee||le!==fe||ms||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof R=="function"&&(Hf(n,s,R,l),fe=n.memoizedState),(_e=ms||D0(n,s,_e,l,le,fe,V)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,fe,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,fe,V)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=fe),p.props=l,p.state=fe,p.context=V,l=_e):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Sc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=rr(n,t.child,null,f),n.child=rr(n,null,s,f)):Vn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Ha(t,n,f),t}function Y0(t,n,s,l){return er(),n.flags|=256,Vn(t,n,s,l),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(t){return{baseLanes:t,cachePool:Pm()}}function qf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ei),t}function q0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?vs(n):xs(),(t=sn)?(t=t_(t,Fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fs!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=Am(t),s.return=n,n.child=s,Hn=n,sn=null)):t=null,t===null)throw hs(n);return wd(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(xs(),f=n.mode,R=Mc({mode:"hidden",children:R},f),l=$s(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=Yf(s),l.childLanes=qf(t,S,s),n.memoizedState=Wf,al(null,l)):(vs(n),jf(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(p)n.flags&256?(vs(n),n.flags&=-257,n=Zf(t,n,s)):n.memoizedState!==null?(xs(),n.child=t.child,n.flags|=128,n=null):(xs(),R=l.fallback,f=n.mode,l=Mc({mode:"visible",children:l.children},f),R=$s(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,rr(n,t.child,null,s),l=n.child,l.memoizedState=Yf(s),l.childLanes=qf(t,S,s),n.memoizedState=Wf,n=al(null,l));else if(vs(n),wd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var re=S.dgst;S=re,l=Error(r(419)),l.stack="",l.digest=S,Yo({value:l,source:null,stack:null}),n=Zf(t,n,s)}else if(An||zr(t,n,s,!1),S=(s&t.childLanes)!==0,An||S){if(S=$t,S!==null&&(l=ei(S,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Js(t,l),fi(S,t,l),kf;Cd(R)||Dc(),n=Zf(t,n,s)}else Cd(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,sn=zi(R.nextSibling),Hn=n,Rt=!0,ds=null,Fi=!1,t!==null&&wm(n,t),n=jf(n,l.children),n.flags|=4096);return n}return f?(xs(),R=l.fallback,f=n.mode,V=t.child,re=V.sibling,l=Oa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,re!==null?R=Oa(re,R):(R=$s(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,al(null,l),l=n.child,R=t.child.memoizedState,R===null?R=Yf(s):(f=R.cachePool,f!==null?(V=bn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Pm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=qf(t,S,s),n.memoizedState=Wf,al(t.child,l)):(vs(n),s=t.child,t=s.sibling,s=Oa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function jf(t,n){return n=Mc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Mc(t,n){return t=xi(22,t,null,n),t.lanes=0,t}function Zf(t,n,s){return rr(n,t.child,null,s),t=jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function j0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),uf(t.return,n,s)}function Kf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function Z0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=xn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,ve(xn,S),Vn(t,n,l,s),l=Rt?Wo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j0(t,s,n);else if(t.tag===19)j0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Kf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&cc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Kf(n,!0,s,null,p,l);break;case"together":Kf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ha(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ys|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(zr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Oa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Oa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function uM(t,n,s){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),ps(n,bn,t.memoizedState.cache),er();break;case 27:case 5:at(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:ps(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(vs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?q0(t,n,s):(vs(n),t=Ha(t,n,s),t!==null?t.sibling:null);vs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(zr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return Z0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ve(xn,xn.current),l)break;return null;case 22:return n.lanes=0,G0(t,n,s,n.pendingProps);case 24:ps(n,bn,t.memoizedState.cache)}return Ha(t,n,s)}function K0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)An=!0;else{if(!Qf(t,s)&&(n.flags&128)===0)return An=!1,uM(t,n,s);An=(t.flags&131072)!==0}else An=!1,Rt&&(n.flags&1048576)!==0&&Cm(n,Wo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=ar(n.elementType),n.type=t,typeof t=="function")tf(t)?(l=lr(t,l),n.tag=1,n=W0(null,n,t,l,s)):(n.tag=0,n=Xf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=B0(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=z0(null,n,t,l,s);break e}}throw n=ce(t)||t,Error(r(306,n,""))}}return n;case 0:return Xf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=lr(l,n.pendingProps),W0(t,n,l,f,s);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,_f(t,n),$o(n,l,null,s);var S=n.memoizedState;if(l=S.cache,ps(n,bn,l),l!==p.cache&&ff(n,[bn],s,!0),Jo(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=Y0(t,n,l,s);break e}else if(l!==f){f=Oi(Error(r(424)),n),Yo(f),n=Y0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(sn=zi(t.firstChild),Hn=n,Rt=!0,ds=null,Fi=!0,s=Gm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(er(),l===f){n=Ha(t,n,s);break e}Vn(t,n,l,s)}n=n.child}return n;case 26:return Sc(t,n),t===null?(s=o_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=Fc(oe.current).createElement(s),l[dn]=n,l[yn]=t,kn(l,s,t),hn(l),n.stateNode=l):n.memoizedState=o_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&Rt&&(l=n.stateNode=a_(n.type,n.pendingProps,oe.current),Hn=n,Fi=!0,f=sn,Rs(n.type)?(Dd=f,sn=zi(l.firstChild)):sn=f),Vn(t,n,n.pendingProps.children,s),Sc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=sn)&&(l=HM(l,n.type,n.pendingProps,Fi),l!==null?(n.stateNode=l,Hn=n,sn=zi(l.firstChild),Fi=!1,f=!0):f=!1),f||hs(n)),at(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,Td(f,p)?l=null:S!==null&&Td(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=bf(t,n,tM,null,null,s),xl._currentValue=f),Sc(t,n),Vn(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=sn)&&(s=GM(s,n.pendingProps,Fi),s!==null?(n.stateNode=s,Hn=n,sn=null,t=!0):t=!1),t||hs(n)),null;case 13:return q0(t,n,s);case 4:return Ae(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=rr(n,null,l,s):Vn(t,n,l,s),n.child;case 11:return B0(t,n,n.type,n.pendingProps,s);case 7:return Vn(t,n,n.pendingProps,s),n.child;case 8:return Vn(t,n,n.pendingProps.children,s),n.child;case 12:return Vn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,ps(n,n.type,l.value),Vn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,nr(n),f=Gn(f),l=l(f),n.flags|=1,Vn(t,n,l,s),n.child;case 14:return z0(t,n,n.type,n.pendingProps,s);case 15:return H0(t,n,n.type,n.pendingProps,s);case 19:return Z0(t,n,s);case 31:return cM(t,n,s);case 22:return G0(t,n,s,n.pendingProps);case 24:return nr(n),l=Gn(bn),t===null?(f=pf(),f===null&&(f=$t,p=df(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},gf(n),ps(n,bn,f)):((t.lanes&s)!==0&&(_f(t,n),$o(n,null,null,s),Jo()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ps(n,bn,l)):(l=p.cache,ps(n,bn,l),l!==f.cache&&ff(n,[bn],s,!0))),Vn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ga(t){t.flags|=4}function Jf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Eg())t.flags|=8192;else throw sr=sc,mf}else t.flags&=-16777217}function Q0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d_(n))if(Eg())t.flags|=8192;else throw sr=sc,mf}function yc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Se():536870912,t.lanes|=n,Qr|=n)}function sl(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function fM(t,n,s){var l=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Fa(bn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Br(n)?Ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),rn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ga(n),p!==null?(rn(n),Q0(n,p)):(rn(n),Jf(n,f,null,l,s))):p?p!==t.memoizedState?(Ga(n),rn(n),Q0(n,p)):(rn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ga(n),rn(n),Jf(n,f,t,l,s)),null;case 27:if(et(n),s=oe.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ga(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return rn(n),null}t=ye.current,Br(n)?Dm(n):(t=a_(f,l,s),n.stateNode=t,Ga(n))}return rn(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ga(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return rn(n),null}if(p=ye.current,Br(n))Dm(n);else{var S=Fc(oe.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[dn]=n,p[yn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(kn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ga(n)}}return rn(n),Jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ga(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=oe.current,Br(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[dn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||qg(t.nodeValue,s)),t||hs(n,!0)}else t=Fc(t).createTextNode(l),t[dn]=n,n.stateNode=t}return rn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Br(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),t=!1}else s=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Mi(n),n):(Mi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return rn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Br(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[dn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),f=!1}else f=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Mi(n),n):(Mi(n),null)}return Mi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),yc(n,n.updateQueue),rn(n),null);case 4:return qe(),t===null&&Sd(n.stateNode.containerInfo),rn(n),null;case 10:return Fa(n.type),rn(n),null;case 19:if(Q(xn),l=n.memoizedState,l===null)return rn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)sl(l,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=cc(t),p!==null){for(n.flags|=128,sl(l,!1),t=p.updateQueue,n.updateQueue=t,yc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Tm(s,t),s=s.sibling;return ve(xn,xn.current&1|2),Rt&&Pa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Bt()>Rc&&(n.flags|=128,f=!0,sl(l,!1),n.lanes=4194304)}else{if(!f)if(t=cc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,yc(n,t),sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Rt)return rn(n),null}else 2*Bt()-l.renderingStartTime>Rc&&s!==536870912&&(n.flags|=128,f=!0,sl(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Bt(),t.sibling=null,s=xn.current,ve(xn,f?s&1|2:s&1),Rt&&Pa(n,l.treeForkCount),t):(rn(n),null);case 22:case 23:return Mi(n),Mf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),s=n.updateQueue,s!==null&&yc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&Q(ir),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fa(bn),rn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dM(t,n){switch(rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fa(bn),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Mi(n),n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(xn),null;case 4:return qe(),null;case 10:return Fa(n.type),null;case 22:case 23:return Mi(n),Mf(),t!==null&&Q(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fa(bn),null;case 25:return null;default:return null}}function J0(t,n){switch(rf(n),n.tag){case 3:Fa(bn),qe();break;case 26:case 27:case 5:et(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&Mi(n);break;case 13:Mi(n);break;case 19:Q(xn);break;case 10:Fa(n.type);break;case 22:case 23:Mi(n),Mf(),t!==null&&Q(ir);break;case 24:Fa(bn)}}function rl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){Yt(n,n.return,R)}}function Ss(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=n;var V=s,re=R;try{re()}catch(_e){Yt(f,V,_e)}}}l=l.next}while(l!==p)}}catch(_e){Yt(n,n.return,_e)}}function $0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{km(n,s)}catch(l){Yt(t,t.return,l)}}}function eg(t,n,s){s.props=lr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,n,l)}}function ol(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Yt(t,n,f)}}function _a(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Yt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Yt(t,n,f)}else s.current=null}function tg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Yt(t,t.return,f)}}function $f(t,n,s){try{var l=t.stateNode;OM(l,t.type,s,n),l[yn]=n}catch(f){Yt(t,t.return,f)}}function ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Rs(t.type)||t.tag===4}function ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Zi));else if(l!==4&&(l===27&&Rs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(td(t,n,s),t=t.sibling;t!==null;)td(t,n,s),t=t.sibling}function Ec(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ec(t,n,s),t=t.sibling;t!==null;)Ec(t,n,s),t=t.sibling}function ig(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);kn(n,l,s),n[dn]=t,n[yn]=s}catch(p){Yt(t,t.return,p)}}var Va=!1,Rn=!1,nd=!1,ag=typeof WeakSet=="function"?WeakSet:Set,In=null;function hM(t,n){if(t=t.containerInfo,Ed=Xc,t=gm(t),ju(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,R=-1,V=-1,re=0,_e=0,Ee=t,le=null;t:for(;;){for(var fe;Ee!==s||f!==0&&Ee.nodeType!==3||(R=S+f),Ee!==p||l!==0&&Ee.nodeType!==3||(V=S+l),Ee.nodeType===3&&(S+=Ee.nodeValue.length),(fe=Ee.firstChild)!==null;)le=Ee,Ee=fe;for(;;){if(Ee===t)break t;if(le===s&&++re===f&&(R=S),le===p&&++_e===l&&(V=S),(fe=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=fe}s=R===-1||V===-1?null:{start:R,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(bd={focusedElem:t,selectionRange:s},Xc=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ze=lr(s.type,f);t=l.getSnapshotBeforeUpdate(Ze,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){Yt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Rd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function sg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Xa(t,s),l&4&&rl(5,s);break;case 1:if(Xa(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Yt(s,s.return,S)}else{var f=lr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Yt(s,s.return,S)}}l&64&&$0(s),l&512&&ol(s,s.return);break;case 3:if(Xa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{km(t,n)}catch(S){Yt(s,s.return,S)}}break;case 27:n===null&&l&4&&ig(s);case 26:case 5:Xa(t,s),n===null&&l&4&&tg(s),l&512&&ol(s,s.return);break;case 12:Xa(t,s);break;case 31:Xa(t,s),l&4&&lg(t,s);break;case 13:Xa(t,s),l&4&&cg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=yM.bind(null,s),VM(t,s))));break;case 22:if(l=s.memoizedState!==null||Va,!l){n=n!==null&&n.memoizedState!==null||Rn,f=Va;var p=Rn;Va=l,(Rn=n)&&!p?Wa(t,s,(s.subtreeFlags&8772)!==0):Xa(t,s),Va=f,Rn=p}break;case 30:break;default:Xa(t,s)}}function rg(t){var n=t.alternate;n!==null&&(t.alternate=null,rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ji(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,oi=!1;function ka(t,n,s){for(s=s.child;s!==null;)og(t,n,s),s=s.sibling}function og(t,n,s){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:Rn||_a(s,n),ka(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Rn||_a(s,n);var l=cn,f=oi;Rs(s.type)&&(cn=s.stateNode,oi=!1),ka(t,n,s),gl(s.stateNode),cn=l,oi=f;break;case 5:Rn||_a(s,n);case 6:if(l=cn,f=oi,cn=null,ka(t,n,s),cn=l,oi=f,cn!==null)if(oi)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(s.stateNode)}catch(p){Yt(s,n,p)}else try{cn.removeChild(s.stateNode)}catch(p){Yt(s,n,p)}break;case 18:cn!==null&&(oi?(t=cn,$g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),so(t)):$g(cn,s.stateNode));break;case 4:l=cn,f=oi,cn=s.stateNode.containerInfo,oi=!0,ka(t,n,s),cn=l,oi=f;break;case 0:case 11:case 14:case 15:Ss(2,s,n),Rn||Ss(4,s,n),ka(t,n,s);break;case 1:Rn||(_a(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&eg(s,n,l)),ka(t,n,s);break;case 21:ka(t,n,s);break;case 22:Rn=(l=Rn)||s.memoizedState!==null,ka(t,n,s),Rn=l;break;default:ka(t,n,s)}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{so(t)}catch(s){Yt(n,n.return,s)}}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{so(t)}catch(s){Yt(n,n.return,s)}}function pM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ag),n;default:throw Error(r(435,t.tag))}}function bc(t,n){var s=pM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=EM.bind(null,t,l);l.then(f,f)}})}function li(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Rs(R.type)){cn=R.stateNode,oi=!1;break e}break;case 5:cn=R.stateNode,oi=!1;break e;case 3:case 4:cn=R.stateNode.containerInfo,oi=!0;break e}R=R.return}if(cn===null)throw Error(r(160));og(p,S,f),cn=null,oi=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,t),n=n.sibling}var Ji=null;function ug(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:li(n,t),ci(t),l&4&&(Ss(3,t,t.return),rl(3,t),Ss(5,t,t.return));break;case 1:li(n,t),ci(t),l&512&&(Rn||s===null||_a(s,s.return)),l&64&&Va&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ji;if(li(n,t),ci(t),l&512&&(Rn||s===null||_a(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[qi]||p[dn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),kn(p,l,s),p[dn]=t,hn(p),l=p;break e;case"link":var S=u_("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(p=S[R],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}p=f.createElement(l),kn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=u_("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(p=S[R],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}p=f.createElement(l),kn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[dn]=t,hn(p),l=p}t.stateNode=l}else f_(f,t.type,t.stateNode);else t.stateNode=c_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?f_(f,t.type,t.stateNode):c_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$f(t,t.memoizedProps,s.memoizedProps)}break;case 27:li(n,t),ci(t),l&512&&(Rn||s===null||_a(s,s.return)),s!==null&&l&4&&$f(t,t.memoizedProps,s.memoizedProps);break;case 5:if(li(n,t),ci(t),l&512&&(Rn||s===null||_a(s,s.return)),t.flags&32){f=t.stateNode;try{jn(f,"")}catch(Ze){Yt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,$f(t,f,s!==null?s.memoizedProps:f)),l&1024&&(nd=!0);break;case 6:if(li(n,t),ci(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ze){Yt(t,t.return,Ze)}}break;case 3:if(Hc=null,f=Ji,Ji=Bc(n.containerInfo),li(n,t),Ji=f,ci(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{so(n.containerInfo)}catch(Ze){Yt(t,t.return,Ze)}nd&&(nd=!1,fg(t));break;case 4:l=Ji,Ji=Bc(t.stateNode.containerInfo),li(n,t),ci(t),Ji=l;break;case 12:li(n,t),ci(t);break;case 31:li(n,t),ci(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bc(t,l)));break;case 13:li(n,t),ci(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Bt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,re=Va,_e=Rn;if(Va=re||f,Rn=_e||V,li(n,t),Rn=_e,Va=re,ci(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Va||Rn||cr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(p=V.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var Ee=V.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){Yt(V,V.return,Ze)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Ze){Yt(V,V.return,Ze)}}}else if(n.tag===18){if(s===null){V=n;try{var fe=V.stateNode;f?e_(fe,!0):e_(V.stateNode,!1)}catch(Ze){Yt(V,V.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,bc(t,s))));break;case 19:li(n,t),ci(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bc(t,l)));break;case 30:break;case 21:break;default:li(n,t),ci(t)}}function ci(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(ng(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=ed(t);Ec(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(jn(S,""),s.flags&=-33);var R=ed(t);Ec(t,R,S);break;case 3:case 4:var V=s.stateNode.containerInfo,re=ed(t);td(t,re,V);break;default:throw Error(r(161))}}catch(_e){Yt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sg(t,n.alternate,n),n=n.sibling}function cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ss(4,n,n.return),cr(n);break;case 1:_a(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&eg(n,n.return,s),cr(n);break;case 27:gl(n.stateNode);case 26:case 5:_a(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}t=t.sibling}}function Wa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Wa(f,p,s),rl(4,p);break;case 1:if(Wa(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Yt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Vm(V[f],R)}catch(re){Yt(l,l.return,re)}}s&&S&64&&$0(p),ol(p,p.return);break;case 27:ig(p);case 26:case 5:Wa(f,p,s),s&&l===null&&S&4&&tg(p),ol(p,p.return);break;case 12:Wa(f,p,s);break;case 31:Wa(f,p,s),s&&S&4&&lg(f,p);break;case 13:Wa(f,p,s),s&&S&4&&cg(f,p);break;case 22:p.memoizedState===null&&Wa(f,p,s),ol(p,p.return);break;case 30:break;default:Wa(f,p,s)}n=n.sibling}}function id(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&qo(s))}function ad(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qo(t))}function $i(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(t,n,s,l),n=n.sibling}function dg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:$i(t,n,s,l),f&2048&&rl(9,n);break;case 1:$i(t,n,s,l);break;case 3:$i(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qo(t)));break;case 12:if(f&2048){$i(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,R=p.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Yt(n,n.return,V)}}else $i(t,n,s,l);break;case 31:$i(t,n,s,l);break;case 13:$i(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?$i(t,n,s,l):ll(t,n):p._visibility&2?$i(t,n,s,l):(p._visibility|=2,jr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&id(S,n);break;case 24:$i(t,n,s,l),f&2048&&ad(n.alternate,n);break;default:$i(t,n,s,l)}}function jr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,R=s,V=l,re=S.flags;switch(S.tag){case 0:case 11:case 15:jr(p,S,R,V,f),rl(8,S);break;case 23:break;case 22:var _e=S.stateNode;S.memoizedState!==null?_e._visibility&2?jr(p,S,R,V,f):ll(p,S):(_e._visibility|=2,jr(p,S,R,V,f)),f&&re&2048&&id(S.alternate,S);break;case 24:jr(p,S,R,V,f),f&&re&2048&&ad(S.alternate,S);break;default:jr(p,S,R,V,f)}n=n.sibling}}function ll(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:ll(s,l),f&2048&&id(l.alternate,l);break;case 24:ll(s,l),f&2048&&ad(l.alternate,l);break;default:ll(s,l)}n=n.sibling}}var cl=8192;function Zr(t,n,s){if(t.subtreeFlags&cl)for(t=t.child;t!==null;)hg(t,n,s),t=t.sibling}function hg(t,n,s){switch(t.tag){case 26:Zr(t,n,s),t.flags&cl&&t.memoizedState!==null&&ey(s,Ji,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,s);break;case 3:case 4:var l=Ji;Ji=Bc(t.stateNode.containerInfo),Zr(t,n,s),Ji=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=cl,cl=16777216,Zr(t,n,s),cl=l):Zr(t,n,s));break;default:Zr(t,n,s)}}function pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ul(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];In=l,gg(l,t)}pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mg(t),t=t.sibling}function mg(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&Ss(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tc(t)):ul(t);break;default:ul(t)}}function Tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];In=l,gg(l,t)}pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ss(8,n,n.return),Tc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(n));break;default:Tc(n)}t=t.sibling}}function gg(t,n){for(;In!==null;){var s=In;switch(s.tag){case 0:case 11:case 15:Ss(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,In=l;else e:for(s=t;In!==null;){l=In;var f=l.sibling,p=l.return;if(rg(l),l===s){In=null;break e}if(f!==null){f.return=p,In=f;break e}In=p}}}var mM={getCacheForType:function(t){var n=Gn(bn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Gn(bn).controller.signal}},gM=typeof WeakMap=="function"?WeakMap:Map,Ht=0,$t=null,Et=null,Tt=0,Wt=0,yi=null,Ms=!1,Kr=!1,sd=!1,Ya=0,gn=0,ys=0,ur=0,rd=0,Ei=0,Qr=0,fl=null,ui=null,od=!1,Ac=0,_g=0,Rc=1/0,Cc=null,Es=null,Ln=0,bs=null,Jr=null,qa=0,ld=0,cd=null,vg=null,dl=0,ud=null;function bi(){return(Ht&2)!==0&&Tt!==0?Tt&-Tt:B.T!==null?gd():wa()}function xg(){if(Ei===0)if((Tt&536870912)===0||Rt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),Ei=t}else Ei=536870912;return t=Si.current,t!==null&&(t.flags|=32),Ei}function fi(t,n,s){(t===$t&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&($r(t,0),Ts(t,Tt,Ei,!1)),Be(t,s),((Ht&2)===0||t!==$t)&&(t===$t&&((Ht&2)===0&&(ur|=s),gn===4&&Ts(t,Tt,Ei,!1)),va(t))}function Sg(t,n,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),f=l?xM(t,n):dd(t,n,!0),p=l;do{if(f===0){Kr&&!l&&Ts(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!_M(s)){f=dd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;f=fl;var V=R.current.memoizedState.isDehydrated;if(V&&($r(R,S).flags|=256),S=dd(R,S,!1),S!==2){if(sd&&!V){R.errorRecoveryDisabledLanes|=p,ur|=p,f=4;break e}p=ui,ui=f,p!==null&&(ui===null?ui=p:ui.push.apply(ui,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){$r(t,0),Ts(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ts(l,n,Ei,!Ms);break e;case 2:ui=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Ac+300-Bt(),10<f)){if(Ts(l,n,Ei,!Ms),xe(l,0,!0)!==0)break e;qa=n,l.timeoutHandle=Qg(Mg.bind(null,l,s,ui,Cc,od,n,Ei,ur,Qr,Ms,p,"Throttled",-0,0),f);break e}Mg(l,s,ui,Cc,od,n,Ei,ur,Qr,Ms,p,null,-0,0)}}break}while(!0);va(t)}function Mg(t,n,s,l,f,p,S,R,V,re,_e,Ee,le,fe){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},hg(n,p,Ee);var Ze=(p&62914560)===p?Ac-Bt():(p&4194048)===p?_g-Bt():0;if(Ze=ty(Ee,Ze),Ze!==null){qa=p,t.cancelPendingCommit=Ze(wg.bind(null,t,n,p,s,l,f,S,R,V,_e,Ee,null,le,fe)),Ts(t,p,S,!re);return}}wg(t,n,p,s,l,f,S,R,V)}function _M(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!vi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ts(t,n,s,l){n&=~rd,n&=~ur,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-ze(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&zt(t,s,n)}function wc(){return(Ht&6)===0?(hl(0),!1):!0}function fd(){if(Et!==null){if(Wt===0)var t=Et.return;else t=Et,Ia=tr=null,Rf(t),kr=null,Zo=0,t=Et;for(;t!==null;)J0(t.alternate,t),t=t.return;Et=null}}function $r(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,FM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),qa=0,fd(),$t=t,Et=s=Oa(t.current,null),Tt=n,Wt=0,yi=null,Ms=!1,Kr=Ue(t,n),sd=!1,Qr=Ei=rd=ur=ys=gn=0,ui=fl=null,od=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-ze(l),p=1<<f;n|=t[f],l&=~p}return Ya=n,Kl(),s}function yg(t,n){ht=null,B.H=il,n===Vr||n===ac?(n=Bm(),Wt=3):n===mf?(n=Bm(),Wt=4):Wt=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yi=n,Et===null&&(gn=1,vc(t,Oi(n,t.current)))}function Eg(){var t=Si.current;return t===null?!0:(Tt&4194048)===Tt?Bi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Bi:!1}function bg(){var t=B.H;return B.H=il,t===null?il:t}function Tg(){var t=B.A;return B.A=mM,t}function Dc(){gn=4,Ms||(Tt&4194048)!==Tt&&Si.current!==null||(Kr=!0),(ys&134217727)===0&&(ur&134217727)===0||$t===null||Ts($t,Tt,Ei,!1)}function dd(t,n,s){var l=Ht;Ht|=2;var f=bg(),p=Tg();($t!==t||Tt!==n)&&(Cc=null,$r(t,n)),n=!1;var S=gn;e:do try{if(Wt!==0&&Et!==null){var R=Et,V=yi;switch(Wt){case 8:fd(),S=6;break e;case 3:case 2:case 9:case 6:Si.current===null&&(n=!0);var re=Wt;if(Wt=0,yi=null,eo(t,R,V,re),s&&Kr){S=0;break e}break;default:re=Wt,Wt=0,yi=null,eo(t,R,V,re)}}vM(),S=gn;break}catch(_e){yg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,Ia=tr=null,Ht=l,B.H=f,B.A=p,Et===null&&($t=null,Tt=0,Kl()),S}function vM(){for(;Et!==null;)Ag(Et)}function xM(t,n){var s=Ht;Ht|=2;var l=bg(),f=Tg();$t!==t||Tt!==n?(Cc=null,Rc=Bt()+500,$r(t,n)):Kr=Ue(t,n);e:do try{if(Wt!==0&&Et!==null){n=Et;var p=yi;t:switch(Wt){case 1:Wt=0,yi=null,eo(t,n,p,1);break;case 2:case 9:if(Im(p)){Wt=0,yi=null,Rg(n);break}n=function(){Wt!==2&&Wt!==9||$t!==t||(Wt=7),va(t)},p.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Im(p)?(Wt=0,yi=null,Rg(n)):(Wt=0,yi=null,eo(t,n,p,7));break;case 5:var S=null;switch(Et.tag){case 26:S=Et.memoizedState;case 5:case 27:var R=Et;if(S?d_(S):R.stateNode.complete){Wt=0,yi=null;var V=R.sibling;if(V!==null)Et=V;else{var re=R.return;re!==null?(Et=re,Lc(re)):Et=null}break t}}Wt=0,yi=null,eo(t,n,p,5);break;case 6:Wt=0,yi=null,eo(t,n,p,6);break;case 8:fd(),gn=6;break e;default:throw Error(r(462))}}SM();break}catch(_e){yg(t,_e)}while(!0);return Ia=tr=null,B.H=l,B.A=f,Ht=s,Et!==null?0:($t=null,Tt=0,Kl(),gn)}function SM(){for(;Et!==null&&!jt();)Ag(Et)}function Ag(t){var n=K0(t.alternate,t,Ya);t.memoizedProps=t.pendingProps,n===null?Lc(t):Et=n}function Rg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=X0(s,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=X0(s,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:Rf(n);default:J0(s,n),n=Et=Tm(n,Ya),n=K0(s,n,Ya)}t.memoizedProps=t.pendingProps,n===null?Lc(t):Et=n}function eo(t,n,s,l){Ia=tr=null,Rf(n),kr=null,Zo=0;var f=n.return;try{if(lM(t,f,n,s,Tt)){gn=1,vc(t,Oi(s,t.current)),Et=null;return}}catch(p){if(f!==null)throw Et=f,p;gn=1,vc(t,Oi(s,t.current)),Et=null;return}n.flags&32768?(Rt||l===1?t=!0:Kr||(Tt&536870912)!==0?t=!1:(Ms=t=!0,(l===2||l===9||l===3||l===6)&&(l=Si.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cg(n,t)):Lc(n)}function Lc(t){var n=t;do{if((n.flags&32768)!==0){Cg(n,Ms);return}t=n.return;var s=fM(n.alternate,n,Ya);if(s!==null){Et=s;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);gn===0&&(gn=5)}function Cg(t,n){do{var s=dM(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);gn=6,Et=null}function wg(t,n,s,l,f,p,S,R,V){t.cancelPendingCommit=null;do Nc();while(Ln!==0);if((Ht&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=$u,en(t,s,p,S,R,V),t===$t&&(Et=$t=null,Tt=0),Jr=n,bs=t,qa=s,ld=p,cd=f,vg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bM(te,function(){return Og(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=G.p,G.p=2,S=Ht,Ht|=4;try{hM(t,n,s)}finally{Ht=S,G.p=f,B.T=l}}Ln=1,Dg(),Lg(),Ng()}}function Dg(){if(Ln===1){Ln=0;var t=bs,n=Jr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=G.p;G.p=2;var f=Ht;Ht|=4;try{ug(n,t);var p=bd,S=gm(t.containerInfo),R=p.focusedElem,V=p.selectionRange;if(S!==R&&R&&R.ownerDocument&&mm(R.ownerDocument.documentElement,R)){if(V!==null&&ju(R)){var re=V.start,_e=V.end;if(_e===void 0&&(_e=re),"selectionStart"in R)R.selectionStart=re,R.selectionEnd=Math.min(_e,R.value.length);else{var Ee=R.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var fe=le.getSelection(),Ze=R.textContent.length,it=Math.min(V.start,Ze),Qt=V.end===void 0?it:Math.min(V.end,Ze);!fe.extend&&it>Qt&&(S=Qt,Qt=it,it=S);var ee=pm(R,it),X=pm(R,Qt);if(ee&&X&&(fe.rangeCount!==1||fe.anchorNode!==ee.node||fe.anchorOffset!==ee.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var se=Ee.createRange();se.setStart(ee.node,ee.offset),fe.removeAllRanges(),it>Qt?(fe.addRange(se),fe.extend(X.node,X.offset)):(se.setEnd(X.node,X.offset),fe.addRange(se))}}}}for(Ee=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&Ee.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Me=Ee[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Xc=!!Ed,bd=Ed=null}finally{Ht=f,G.p=l,B.T=s}}t.current=n,Ln=2}}function Lg(){if(Ln===2){Ln=0;var t=bs,n=Jr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=G.p;G.p=2;var f=Ht;Ht|=4;try{sg(t,n.alternate,n)}finally{Ht=f,G.p=l,B.T=s}}Ln=3}}function Ng(){if(Ln===4||Ln===3){Ln=0,Z();var t=bs,n=Jr,s=qa,l=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ln=5:(Ln=0,Jr=bs=null,Ug(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Es=null),oa(s),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=B.T,f=G.p,G.p=2,B.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];p(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=f}}(qa&3)!==0&&Nc(),va(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===ud?dl++:(dl=0,ud=t):dl=0,hl(0)}}function Ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qo(n)))}function Nc(){return Dg(),Lg(),Ng(),Og()}function Og(){if(Ln!==5)return!1;var t=bs,n=ld;ld=0;var s=oa(qa),l=B.T,f=G.p;try{G.p=32>s?32:s,B.T=null,s=cd,cd=null;var p=bs,S=qa;if(Ln=0,Jr=bs=null,qa=0,(Ht&6)!==0)throw Error(r(331));var R=Ht;if(Ht|=4,mg(p.current),dg(p,p.current,S,s),Ht=R,hl(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(ue,p)}catch{}return!0}finally{G.p=f,B.T=l,Ug(t,n)}}function Pg(t,n,s){n=Oi(s,n),n=Vf(t.stateNode,n,2),t=_s(t,n,2),t!==null&&(Be(t,2),va(t))}function Yt(t,n,s){if(t.tag===3)Pg(t,t,s);else for(;n!==null;){if(n.tag===3){Pg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Es===null||!Es.has(l))){t=Oi(s,t),s=I0(2),l=_s(n,s,2),l!==null&&(F0(s,l,n,t),Be(l,2),va(l));break}}n=n.return}}function hd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new gM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(sd=!0,f.add(s),t=MM.bind(null,t,n,s),n.then(t,t))}function MM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,$t===t&&(Tt&s)===s&&(gn===4||gn===3&&(Tt&62914560)===Tt&&300>Bt()-Ac?(Ht&2)===0&&$r(t,0):rd|=s,Qr===Tt&&(Qr=0)),va(t)}function Ig(t,n){n===0&&(n=Se()),t=Js(t,n),t!==null&&(Be(t,n),va(t))}function yM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Ig(t,s)}function EM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Ig(t,s)}function bM(t,n){return an(t,n)}var Uc=null,to=null,pd=!1,Oc=!1,md=!1,As=0;function va(t){t!==to&&t.next===null&&(to===null?Uc=to=t:to=to.next=t),Oc=!0,pd||(pd=!0,AM())}function hl(t,n){if(!md&&Oc){md=!0;do for(var s=!1,l=Uc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,R=l.pingedLanes;p=(1<<31-ze(42|t)+1)-1,p&=f&~(S&~R),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Hg(l,p))}else p=Tt,p=xe(l,l===$t?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ue(l,p)||(s=!0,Hg(l,p));l=l.next}while(s);md=!1}}function TM(){Fg()}function Fg(){Oc=pd=!1;var t=0;As!==0&&IM()&&(t=As);for(var n=Bt(),s=null,l=Uc;l!==null;){var f=l.next,p=Bg(l,n);p===0?(l.next=null,s===null?Uc=f:s.next=f,f===null&&(to=s)):(s=l,(t!==0||(p&3)!==0)&&(Oc=!0)),l=f}Ln!==0&&Ln!==5||hl(t),As!==0&&(As=0)}function Bg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-ze(p),R=1<<S,V=f[S];V===-1?((R&s)===0||(R&l)!==0)&&(f[S]=Ge(R,n)):V<=n&&(t.expiredLanes|=R),p&=~R}if(n=$t,s=Tt,s=xe(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Vt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Vt(l),oa(s)){case 2:case 8:s=b;break;case 32:s=te;break;case 268435456:s=de;break;default:s=te}return l=zg.bind(null,t),s=an(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Vt(l),t.callbackPriority=2,t.callbackNode=null,2}function zg(t,n){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Nc()&&t.callbackNode!==s)return null;var l=Tt;return l=xe(t,t===$t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Sg(t,l,n),Bg(t,Bt()),t.callbackNode!=null&&t.callbackNode===s?zg.bind(null,t):null)}function Hg(t,n){if(Nc())return null;Sg(t,n,!0)}function AM(){BM(function(){(Ht&6)!==0?an(P,TM):Fg()})}function gd(){if(As===0){var t=Hr;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),As=t}return As}function Gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_i(""+t)}function Vg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function RM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Gg((f[yn]||null).action),S=l.submitter;S&&(n=(n=S[yn]||null)?Gg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var R=new yt("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(As!==0){var V=S?Vg(f,S):new FormData(f);If(s,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(R.preventDefault(),V=S?Vg(f,S):new FormData(f),If(s,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var _d=0;_d<Ju.length;_d++){var vd=Ju[_d],CM=vd.toLowerCase(),wM=vd[0].toUpperCase()+vd.slice(1);Qi(CM,"on"+wM)}Qi(xm,"onAnimationEnd"),Qi(Sm,"onAnimationIteration"),Qi(Mm,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(WS,"onTransitionRun"),Qi(YS,"onTransitionStart"),Qi(qS,"onTransitionCancel"),Qi(ym,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),H("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),H("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),H("onBeforeInput",["compositionend","keypress","textInput","paste"]),H("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),H("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),H("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function kg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var R=l[S],V=R.instance,re=R.currentTarget;if(R=R.listener,V!==p&&f.isPropagationStopped())break e;p=R,f.currentTarget=re;try{p(f)}catch(_e){Zl(_e)}f.currentTarget=null,p=V}else for(S=0;S<l.length;S++){if(R=l[S],V=R.instance,re=R.currentTarget,R=R.listener,V!==p&&f.isPropagationStopped())break e;p=R,f.currentTarget=re;try{p(f)}catch(_e){Zl(_e)}f.currentTarget=null,p=V}}}}function bt(t,n){var s=n[la];s===void 0&&(s=n[la]=new Set);var l=t+"__bubble";s.has(l)||(Xg(n,t,2,!1),s.add(l))}function xd(t,n,s){var l=0;n&&(l|=4),Xg(s,t,l,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Sd(t){if(!t[Pc]){t[Pc]=!0,be.forEach(function(s){s!=="selectionchange"&&(DM.has(s)||xd(s,!1,t),xd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,xd("selectionchange",!1,n))}}function Xg(t,n,s,l){switch(x_(n)){case 2:var f=ay;break;case 8:f=sy;break;default:f=Pd}s=f.bind(null,n,s,t),f=void 0,!ls||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Md(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=wi(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=p=S;continue e}R=R.parentNode}}l=l.return}Wl(function(){var re=p,_e=Na(s),Ee=[];e:{var le=Em.get(t);if(le!==void 0){var fe=yt,Ze=t;switch(t){case"keypress":if(Cr(s)===0)break e;case"keydown":case"keyup":fe=ES;break;case"focusin":Ze="focus",fe=Dr;break;case"focusout":Ze="blur",fe=Dr;break;case"beforeblur":case"afterblur":fe=Dr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=us;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=AS;break;case xm:case Sm:case Mm:fe=pS;break;case ym:fe=CS;break;case"scroll":case"scrollend":fe=pa;break;case"wheel":fe=DS;break;case"copy":case"cut":case"paste":fe=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=em;break;case"toggle":case"beforetoggle":fe=NS}var it=(n&4)!==0,Qt=!it&&(t==="scroll"||t==="scrollend"),ee=it?le!==null?le+"Capture":null:le;it=[];for(var X=re,se;X!==null;){var Me=X;if(se=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||se===null||ee===null||(Me=Ua(X,ee),Me!=null&&it.push(ml(X,Me,se))),Qt)break;X=X.return}0<it.length&&(le=new fe(le,Ze,null,s,_e),Ee.push({event:le,listeners:it}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&s!==Fo&&(Ze=s.relatedTarget||s.fromElement)&&(wi(Ze)||Ze[Dn]))break e;if((fe||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(Ze=s.relatedTarget||s.toElement,fe=re,Ze=Ze?wi(Ze):null,Ze!==null&&(Qt=c(Ze),it=Ze.tag,Ze!==Qt||it!==5&&it!==27&&it!==6)&&(Ze=null)):(fe=null,Ze=re),fe!==Ze)){if(it=Zs,Me="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(it=em,Me="onPointerLeave",ee="onPointerEnter",X="pointer"),Qt=fe==null?le:ua(fe),se=Ze==null?le:ua(Ze),le=new it(Me,X+"leave",fe,s,_e),le.target=Qt,le.relatedTarget=se,Me=null,wi(_e)===re&&(it=new it(ee,X+"enter",Ze,s,_e),it.target=se,it.relatedTarget=Qt,Me=it),Qt=Me,fe&&Ze)t:{for(it=LM,ee=fe,X=Ze,se=0,Me=ee;Me;Me=it(Me))se++;Me=0;for(var nt=X;nt;nt=it(nt))Me++;for(;0<se-Me;)ee=it(ee),se--;for(;0<Me-se;)X=it(X),Me--;for(;se--;){if(ee===X||X!==null&&ee===X.alternate){it=ee;break t}ee=it(ee),X=it(X)}it=null}else it=null;fe!==null&&Wg(Ee,le,fe,it,!1),Ze!==null&&Qt!==null&&Wg(Ee,Qt,Ze,it,!0)}}e:{if(le=re?ua(re):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var Pt=lm;else if(rm(le))if(cm)Pt=VS;else{Pt=HS;var $e=zS}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&Ot(re.elementType)&&(Pt=lm):Pt=GS;if(Pt&&(Pt=Pt(t,re))){om(Ee,Pt,s,_e);break e}$e&&$e(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&pt(le,"number",le.value)}switch($e=re?ua(re):window,t){case"focusin":(rm($e)||$e.contentEditable==="true")&&(Nr=$e,Zu=re,Xo=null);break;case"focusout":Xo=Zu=Nr=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,_m(Ee,s,_e);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":_m(Ee,s,_e)}var mt;if(Wu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Lr?am(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(tm&&s.locale!=="ko"&&(Lr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Lr&&(mt=Rr()):(da=_e,Yl="value"in da?da.value:da.textContent,Lr=!0)),$e=Ic(re,At),0<$e.length&&(At=new $p(At,t,null,s,_e),Ee.push({event:At,listeners:$e}),mt?At.data=mt:(mt=sm(s),mt!==null&&(At.data=mt)))),(mt=OS?PS(t,s):IS(t,s))&&(At=Ic(re,"onBeforeInput"),0<At.length&&($e=new $p("onBeforeInput","beforeinput",null,s,_e),Ee.push({event:$e,listeners:At}),$e.data=mt)),RM(Ee,t,re,s,_e)}kg(Ee,n)})}function ml(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Ic(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Ua(t,s),f!=null&&l.unshift(ml(t,f,p)),f=Ua(t,n),f!=null&&l.push(ml(t,f,p))),t.tag===3)return l;t=t.return}return[]}function LM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var R=s,V=R.alternate,re=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||re===null||(V=re,f?(re=Ua(s,p),re!=null&&S.unshift(ml(s,re,V))):f||(re=Ua(s,p),re!=null&&S.push(ml(s,re,V)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var NM=/\r\n?/g,UM=/\u0000|\uFFFD/g;function Yg(t){return(typeof t=="string"?t:""+t).replace(NM,`
`).replace(UM,"")}function qg(t,n){return n=Yg(n),Yg(t)===n}function Kt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||jn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&jn(t,""+l);break;case"className":Oe(t,"class",l);break;case"tabIndex":Oe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,s,l);break;case"style":gi(t,l,p);break;case"data":if(n!=="object"){Oe(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=_i(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=_i(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Zi);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=_i(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Le(t,"popover",l);break;case"xlinkActuate":He(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":He(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":He(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":He(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":He(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":He(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":He(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":He(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":He(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Li.get(s)||s,Le(t,s,l))}}function yd(t,n,s,l,f,p){switch(s){case"style":gi(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?jn(t,l):(typeof l=="number"||typeof l=="bigint")&&jn(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[yn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Le(t,s,l)}}}function kn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,p,S,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":bt("invalid",t);var R=p=S=f=null,V=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":S=_e;break;case"checked":V=_e;break;case"defaultChecked":re=_e;break;case"value":p=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Kt(t,n,l,_e,s,null)}}En(t,p,R,V,re,S,f,!1);return;case"select":bt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":p=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Kt(t,n,f,R,s,null)}n=p,s=S,t.multiple=!!l,n!=null?pn(t,!!l,n,!1):s!=null&&pn(t,!!l,s,!0);return;case"textarea":bt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,n,S,R,s,null)}ti(t,l,f,p);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,V,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<pl.length;l++)bt(pl[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,re,l,s,null)}return;default:if(Ot(n)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&yd(t,n,_e,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Kt(t,n,R,l,s,null))}function OM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,R=null,V=null,re=null,_e=null;for(fe in s){var Ee=s[fe];if(s.hasOwnProperty(fe)&&Ee!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=Ee;default:l.hasOwnProperty(fe)||Kt(t,n,fe,null,l,Ee)}}for(var le in l){var fe=l[le];if(Ee=s[le],l.hasOwnProperty(le)&&(fe!=null||Ee!=null))switch(le){case"type":p=fe;break;case"name":f=fe;break;case"checked":re=fe;break;case"defaultChecked":_e=fe;break;case"value":S=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Ee&&Kt(t,n,le,fe,l,Ee)}}ke(t,S,R,V,re,_e,p,f);return;case"select":fe=S=R=le=null;for(p in s)if(V=s[p],s.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":fe=V;default:l.hasOwnProperty(p)||Kt(t,n,p,null,l,V)}for(f in l)if(p=l[f],V=s[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":le=p;break;case"defaultValue":R=p;break;case"multiple":S=p;default:p!==V&&Kt(t,n,f,p,l,V)}n=R,s=S,l=fe,le!=null?pn(t,!!s,le,!1):!!l!=!!s&&(n!=null?pn(t,!!s,n,!0):pn(t,!!s,s?[]:"",!1));return;case"textarea":fe=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":fe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Kt(t,n,S,f,l,p)}qn(t,le,fe);return;case"option":for(var Ze in s)if(le=s[Ze],s.hasOwnProperty(Ze)&&le!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Kt(t,n,Ze,null,l,le)}for(V in l)if(le=l[V],fe=s[V],l.hasOwnProperty(V)&&le!==fe&&(le!=null||fe!=null))switch(V){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,V,le,l,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)le=s[it],s.hasOwnProperty(it)&&le!=null&&!l.hasOwnProperty(it)&&Kt(t,n,it,null,l,le);for(re in l)if(le=l[re],fe=s[re],l.hasOwnProperty(re)&&le!==fe&&(le!=null||fe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Kt(t,n,re,le,l,fe)}return;default:if(Ot(n)){for(var Qt in s)le=s[Qt],s.hasOwnProperty(Qt)&&le!==void 0&&!l.hasOwnProperty(Qt)&&yd(t,n,Qt,void 0,l,le);for(_e in l)le=l[_e],fe=s[_e],!l.hasOwnProperty(_e)||le===fe||le===void 0&&fe===void 0||yd(t,n,_e,le,l,fe);return}}for(var ee in s)le=s[ee],s.hasOwnProperty(ee)&&le!=null&&!l.hasOwnProperty(ee)&&Kt(t,n,ee,null,l,le);for(Ee in l)le=l[Ee],fe=s[Ee],!l.hasOwnProperty(Ee)||le===fe||le==null&&fe==null||Kt(t,n,Ee,le,l,fe)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,R=f.duration;if(p&&R&&jg(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],re=V.startTime;if(re>R)break;var _e=V.transferSize,Ee=V.initiatorType;_e&&jg(Ee)&&(V=V.responseEnd,S+=_e*(V<R?1:(R-re)/(V-re)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ed=null,bd=null;function Fc(t){return t.nodeType===9?t:t.ownerDocument}function Zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Td(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ad=null;function IM(){var t=window.event;return t&&t.type==="popstate"?t===Ad?!1:(Ad=t,!0):(Ad=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,FM=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,BM=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(t){return Jg.resolve(null).then(t).catch(zM)}:Qg;function zM(t){setTimeout(function(){throw t})}function Rs(t){return t==="head"}function $g(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),so(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")gl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,gl(s);for(var p=s.firstChild;p;){var S=p.nextSibling,R=p.nodeName;p[qi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&gl(t.ownerDocument.body);s=f}while(s);so(n)}function e_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rd(s),ji(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function HM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[qi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=zi(t.nextSibling),t===null)break}return null}function GM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=zi(t.nextSibling),t===null))return null;return t}function t_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=zi(t.nextSibling),t===null))return null;return t}function Cd(t){return t.data==="$?"||t.data==="$~"}function wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function zi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Dd=null;function n_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return zi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function i_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function a_(t,n,s){switch(n=Fc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ji(t)}var Hi=new Map,s_=new Set;function Bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ja=G.d;G.d={f:kM,r:XM,D:WM,C:YM,L:qM,m:jM,X:KM,S:ZM,M:QM};function kM(){var t=ja.f(),n=wc();return t||n}function XM(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?y0(n):ja.r(t)}var no=typeof document>"u"?null:document;function r_(t,n,s){var l=no;if(l&&typeof n=="string"&&n){var f=Ut(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),s_.has(f)||(s_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),kn(n,"link",t),hn(n),l.head.appendChild(n)))}}function WM(t){ja.D(t),r_("dns-prefetch",t,null)}function YM(t,n){ja.C(t,n),r_("preconnect",t,n)}function qM(t,n,s){ja.L(t,n,s);var l=no;if(l&&t&&n){var f='link[rel="preload"][as="'+Ut(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ut(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ut(s.imageSizes)+'"]')):f+='[href="'+Ut(t)+'"]';var p=f;switch(n){case"style":p=io(t);break;case"script":p=ao(t)}Hi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Hi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(_l(p))||n==="script"&&l.querySelector(vl(p))||(n=l.createElement("link"),kn(n,"link",t),hn(n),l.head.appendChild(n)))}}function jM(t,n){ja.m(t,n);var s=no;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ao(t)}if(!Hi.has(p)&&(t=_({rel:"modulepreload",href:t},n),Hi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vl(p)))return}l=s.createElement("link"),kn(l,"link",t),hn(l),s.head.appendChild(l)}}}function ZM(t,n,s){ja.S(t,n,s);var l=no;if(l&&t){var f=mi(l).hoistableStyles,p=io(t);n=n||"default";var S=f.get(p);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(_l(p)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Hi.get(p))&&Ld(t,s);var V=S=l.createElement("link");hn(V),kn(V,"link",t),V._p=new Promise(function(re,_e){V.onload=re,V.onerror=_e}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,zc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(p,S)}}}function KM(t,n){ja.X(t,n);var s=no;if(s&&t){var l=mi(s).hoistableScripts,f=ao(t),p=l.get(f);p||(p=s.querySelector(vl(f)),p||(t=_({src:t,async:!0},n),(n=Hi.get(f))&&Nd(t,n),p=s.createElement("script"),hn(p),kn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function QM(t,n){ja.M(t,n);var s=no;if(s&&t){var l=mi(s).hoistableScripts,f=ao(t),p=l.get(f);p||(p=s.querySelector(vl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Hi.get(f))&&Nd(t,n),p=s.createElement("script"),hn(p),kn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function o_(t,n,s,l){var f=(f=oe.current)?Bc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=io(s.href),s=mi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=io(s.href);var p=mi(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(_l(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Hi.set(t,s),p||JM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ao(s),s=mi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function io(t){return'href="'+Ut(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function l_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function JM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),kn(n,"link",s),hn(n),t.head.appendChild(n))}function ao(t){return'[src="'+Ut(t)+'"]'}function vl(t){return"script[async]"+t}function c_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ut(s.href)+'"]');if(l)return n.instance=l,hn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),hn(l),kn(l,"style",f),zc(l,s.precedence,t),n.instance=l;case"stylesheet":f=io(s.href);var p=t.querySelector(_l(f));if(p)return n.state.loading|=4,n.instance=p,hn(p),p;l=l_(s),(f=Hi.get(f))&&Ld(l,f),p=(t.ownerDocument||t).createElement("link"),hn(p);var S=p;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),kn(p,"link",l),n.state.loading|=4,zc(p,s.precedence,t),n.instance=p;case"script":return p=ao(s.src),(f=t.querySelector(vl(p)))?(n.instance=f,hn(f),f):(l=s,(f=Hi.get(p))&&(l=_({},s),Nd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),hn(f),kn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,zc(l,s.precedence,t));return n.instance}function zc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===n)p=R;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hc=null;function u_(t,n,s){if(Hc===null){var l=new Map,f=Hc=new Map;f.set(s,l)}else f=Hc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[qi]||p[dn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var R=l.get(S);R?R.push(p):l.set(S,[p])}}return l}function f_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function $M(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function d_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ey(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=io(l.href),p=n.querySelector(_l(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,hn(p);return}p=n.ownerDocument||n,l=l_(l),(f=Hi.get(f))&&Ld(l,f),p=p.createElement("link"),hn(p);var S=p;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),kn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Ud=0;function ty(t,n){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Ud===0&&(Ud=62500*PM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Ud?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,n.forEach(ny,t),Vc=null,Gc.call(t))}function ny(t,n){if(!(n.state.loading&4)){var s=Vc.get(t);if(s)var l=s.get(null);else{s=new Map,Vc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Gc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var xl={$$typeof:z,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function iy(t,n,s,l,f,p,S,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function h_(t,n,s,l,f,p,S,R,V,re,_e,Ee){return t=new iy(t,n,s,S,V,re,_e,Ee,R),n=1,p===!0&&(n|=24),p=xi(3,null,null,n),t.current=p,p.stateNode=t,n=df(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},gf(p),t}function p_(t){return t?(t=Pr,t):Pr}function m_(t,n,s,l,f,p){f=p_(f),l.context===null?l.context=f:l.pendingContext=f,l=gs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=_s(t,l,n),s!==null&&(fi(s,t,n),Qo(s,t,n))}function g_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Od(t,n){g_(t,n),(t=t.alternate)&&g_(t,n)}function __(t){if(t.tag===13||t.tag===31){var n=Js(t,67108864);n!==null&&fi(n,t,67108864),Od(t,67108864)}}function v_(t){if(t.tag===13||t.tag===31){var n=bi();n=ra(n);var s=Js(t,n);s!==null&&fi(s,t,n),Od(t,n)}}var Xc=!0;function ay(t,n,s,l){var f=B.T;B.T=null;var p=G.p;try{G.p=2,Pd(t,n,s,l)}finally{G.p=p,B.T=f}}function sy(t,n,s,l){var f=B.T;B.T=null;var p=G.p;try{G.p=8,Pd(t,n,s,l)}finally{G.p=p,B.T=f}}function Pd(t,n,s,l){if(Xc){var f=Id(l);if(f===null)Md(t,n,l,Wc,s),S_(t,l);else if(oy(f,t,n,s,l))l.stopPropagation();else if(S_(t,l),n&4&&-1<ry.indexOf(t)){for(;f!==null;){var p=Di(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=De(p.pendingLanes);if(S!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-ze(S);R.entanglements[1]|=V,S&=~V}va(p),(Ht&6)===0&&(Rc=Bt()+500,hl(0))}}break;case 31:case 13:R=Js(p,2),R!==null&&fi(R,p,2),wc(),Od(p,2)}if(p=Id(l),p===null&&Md(t,n,l,Wc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Md(t,n,l,null,s)}}function Id(t){return t=Na(t),Fd(t)}var Wc=null;function Fd(t){if(Wc=null,t=wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wc=t,null}function x_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case P:return 2;case b:return 8;case te:case ae:return 32;case de:return 268435456;default:return 32}default:return 32}}var Bd=!1,Cs=null,ws=null,Ds=null,Sl=new Map,Ml=new Map,Ls=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S_(t,n){switch(t){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":Sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(n.pointerId)}}function yl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Di(n),n!==null&&__(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function oy(t,n,s,l,f){switch(n){case"focusin":return Cs=yl(Cs,t,n,s,l,f),!0;case"dragenter":return ws=yl(ws,t,n,s,l,f),!0;case"mouseover":return Ds=yl(Ds,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return Sl.set(p,yl(Sl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Ml.set(p,yl(Ml.get(p)||null,t,n,s,l,f)),!0}return!1}function M_(t){var n=wi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Da(t.priority,function(){v_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Da(t.priority,function(){v_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Id(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Fo=l,s.target.dispatchEvent(l),Fo=null}else return n=Di(s),n!==null&&__(n),t.blockedOn=s,!1;n.shift()}return!0}function y_(t,n,s){Yc(t)&&s.delete(n)}function ly(){Bd=!1,Cs!==null&&Yc(Cs)&&(Cs=null),ws!==null&&Yc(ws)&&(ws=null),Ds!==null&&Yc(Ds)&&(Ds=null),Sl.forEach(y_),Ml.forEach(y_)}function qc(t,n){t.blockedOn===n&&(t.blockedOn=null,Bd||(Bd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ly)))}var jc=null;function E_(t){jc!==t&&(jc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){jc===t&&(jc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Fd(l||s)===null)continue;break}var p=Di(s);p!==null&&(t.splice(n,3),n-=3,If(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function so(t){function n(V){return qc(V,t)}Cs!==null&&qc(Cs,t),ws!==null&&qc(ws,t),Ds!==null&&qc(Ds,t),Sl.forEach(n),Ml.forEach(n);for(var s=0;s<Ls.length;s++){var l=Ls[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ls.length&&(s=Ls[0],s.blockedOn===null);)M_(s),s.blockedOn===null&&Ls.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[yn]||null;if(typeof p=="function")S||E_(s);else if(S){var R=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[yn]||null)R=S.formAction;else if(Fd(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),E_(s)}}}function b_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function zd(t){this._internalRoot=t}Zc.prototype.render=zd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=bi();m_(s,l,t,n,null,null)},Zc.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;m_(t.current,2,null,t,null,null),wc(),n[Dn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var n=wa();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Ls.length&&n!==0&&n<Ls[s].priority;s++);Ls.splice(s,0,t),s===0&&M_(t)}};var T_=e.version;if(T_!=="19.2.7")throw Error(r(527,T_,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var cy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{ue=Kc.inject(cy),he=Kc}catch{}}return bl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=N0,p=U0,S=O0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=h_(t,1,!1,null,null,s,l,null,f,p,S,b_),t[Dn]=n.current,Sd(t),new zd(n)},bl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=N0,S=U0,R=O0,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=h_(t,1,!0,n,s??null,l,f,V,p,S,R,b_),n.context=p_(null),s=n.current,l=bi(),l=ra(l),f=gs(l),f.callback=null,_s(s,f,l),s=l,n.current.lanes=s,Be(n,s),va(n),t[Dn]=n.current,Sd(t),new Zc(n)},bl.version="19.2.7",bl}var P_;function vy(){if(P_)return Vd.exports;P_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Vd.exports=_y(),Vd.exports}var xy=vy();const Sy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},ro=(a,e="#")=>{var i;return((i=Sy[a])==null?void 0:i.trim())||e},wn={app:ro("VITE_APP_URL","https://demo.morpheum.io"),docs:ro("VITE_DOCS_URL"),manifesto:ro("VITE_MANIFESTO_URL"),discord:ro("VITE_DISCORD_URL"),x:ro("VITE_X_URL"),tutorialVideo:ro("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Su=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Yd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:wn.manifesto},Us={eyebrow:{label:"A manifesto for verifiable agents",href:wn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:wn.app},secondaryCta:{label:"Explore agents",href:wn.explore}},I_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},F_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Ph={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},qd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:wn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:wn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:wn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Os={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},oo={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Qc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:wn.app},social:[{label:"Join Discord",href:wn.discord},{label:"Join X",href:wn.x}]},B_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function wo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function My(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Qc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(wo,{href:Qc.primaryCta.href,variant:"primary",children:Qc.primaryCta.label}),Qc.social.map(a=>D.jsx(wo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function yy(){const[a,e]=We.useState(!1),i=!!wn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ph.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:wn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Ph.videoCaption})]})]})})}const Ey={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function jd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Ey[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function by(){const a=oo.cards[0],e=oo.cards[1],i=oo.cards[2],r=oo.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:oo.kicker}),D.jsx("h2",{className:"section-title explore__title",children:oo.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(jd,{type:"verified"}),D.jsx(jd,{type:"riskScore",value:o.risk}),D.jsx(jd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="185",Ty=0,z_=1,Ay=2,Mu=1,Ry=2,Ll=3,as=0,hi=1,ya=2,ns=0,To=1,Ih=2,H_=3,G_=4,Cy=5,vr=100,wy=101,Dy=102,Ly=103,Ny=104,Uy=200,Oy=201,Py=202,Iy=203,Fh=204,Bh=205,Fy=206,By=207,zy=208,Hy=209,Gy=210,Vy=211,ky=212,Xy=213,Wy=214,zh=0,Hh=1,Gh=2,Do=3,Vh=4,kh=5,Xh=6,Wh=7,fx=0,Yy=1,qy=2,Ta=0,dx=1,hx=2,px=3,mx=4,gx=5,_x=6,vx=7,xx=300,yr=301,Lo=302,Zd=303,Kd=304,Bu=306,Yh=1e3,aa=1001,qh=1002,Wn=1003,jy=1004,Jc=1005,fn=1006,Qd=1007,Vs=1008,ki=1009,Sx=1010,Mx=1011,zl=1012,Dp=1013,Ca=1014,Ea=1015,ss=1016,Lp=1017,Np=1018,Hl=1020,yx=35902,Ex=35899,bx=1021,Tx=1022,sa=1023,rs=1026,Mr=1027,Ax=1028,Up=1029,Er=1030,Op=1031,Pp=1033,yu=33776,Eu=33777,bu=33778,Tu=33779,jh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,ep=37496,tp=37488,np=37489,Cu=37490,ip=37491,ap=37808,sp=37809,rp=37810,op=37811,lp=37812,cp=37813,up=37814,fp=37815,dp=37816,hp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,xp=36494,Sp=36495,Mp=36283,yp=36284,wu=36285,Ep=36286,Zy=3200,V_=0,Ky=1,Gs="",$n="srgb",Du="srgb-linear",Lu="linear",qt="srgb",lo=7680,k_=519,Qy=512,Jy=513,$y=514,Ip=515,eE=516,tE=517,Fp=518,nE=519,X_=35044,W_="300 es",ba=2e3,Nu=2001;function iE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Uu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function aE(){const a=Uu("canvas");return a.style.display="block",a}const Y_={};function q_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Rx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=Rx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Lt(...a){a=Rx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Ao(...a){const e=a.join(" ");e in Y_||(Y_[e]=!0,rt(...a))}function sE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const rE={[zh]:Hh,[Gh]:Xh,[Vh]:Wh,[Do]:kh,[Hh]:zh,[Xh]:Gh,[Wh]:Vh,[kh]:Do};class Tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j_=1234567;const Il=Math.PI/180,Gl=180/Math.PI;function Oo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function St(a,e,i){return Math.max(e,Math.min(i,a))}function Bp(a,e){return(a%e+e)%e}function oE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function lE(a,e,i){return a!==e?(i-a)/(e-a):0}function Fl(a,e,i){return(1-i)*a+i*e}function cE(a,e,i,r){return Fl(a,e,1-Math.exp(-i*r))}function uE(a,e=1){return e-Math.abs(Bp(a,e*2)-e)}function fE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function dE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function hE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function pE(a,e){return a+Math.random()*(e-a)}function mE(a){return a*(.5-Math.random())}function gE(a){a!==void 0&&(j_=a);let e=j_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _E(a){return a*Il}function vE(a){return a*Gl}function xE(a){return(a&a-1)===0&&a!==0}function SE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ME(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function yE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*E,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*E,h*d);break;case"ZYZ":a.set(m*E,m*x,h*g,h*d);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Eo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Gt={DEG2RAD:Il,RAD2DEG:Gl,generateUUID:Oo,clamp:St,euclideanModulo:Bp,mapLinear:oE,inverseLerp:lE,lerp:Fl,damp:cE,pingpong:uE,smoothstep:fE,smootherstep:dE,randInt:hE,randFloat:pE,randFloatSpread:mE,seededRandom:gE,degToRad:_E,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:SE,floorPowerOfTwo:ME,setQuaternionFromProperEuler:yE,normalize:ii,denormalize:Eo},jp=class jp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jp.prototype.isVector2=!0;let Ft=jp;class Po{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],E=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==E){let y=m*v+d*x+g*E+_*w;y<0&&(v=-v,x=-x,E=-E,w=-w,y=-y);let M=1-h;if(y<.9995){const O=Math.acos(y),z=Math.sin(O);M=Math.sin(M*O)/z,h=Math.sin(h*O)/z,m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+w*h;const O=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=O,d*=O,g*=O,_*=O}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[i]=h*E+g*_+m*x-d*v,e[i+1]=m*E+g*v+d*_-h*x,e[i+2]=d*E+g*x+h*v-m*_,e[i+3]=g*E-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"YZX":this._x=v*g*_+d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_-v*x*E;break;case"XZY":this._x=v*g*_-d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_+v*x*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Z_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Z_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jd.copy(this).projectOnVector(e),this.sub(Jd)}reflect(e){return this.sub(Jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let ie=Zp;const Jd=new ie,Z_=new Po,Kp=class Kp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],E=r[8],w=o[0],y=o[3],M=o[6],O=o[1],z=o[4],C=o[7],I=o[2],L=o[5],F=o[8];return c[0]=u*w+h*O+m*I,c[3]=u*y+h*z+m*L,c[6]=u*M+h*C+m*F,c[1]=d*w+g*O+_*I,c[4]=d*y+g*z+_*L,c[7]=d*M+g*C+_*F,c[2]=v*w+x*O+E*I,c[5]=v*y+x*z+E*L,c[8]=v*M+x*C+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,E=i*_+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return Ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($d.makeScale(e,i)),this}rotate(e){return Ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($d.makeRotation(-e)),this}translate(e,i){return Ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($d.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;let ct=Kp;const $d=new ct,K_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EE(){const a={enabled:!0,workingColorSpace:Du,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=is(o.r),o.g=is(o.g),o.b=is(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=Ro(o.r),o.g=Ro(o.g),o.b=Ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gs?Lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Du]:{primaries:e,whitePoint:r,transfer:Lu,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),a}const Ct=EE();function is(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ro(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let co;class bE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{co===void 0&&(co=Uu("canvas")),co.width=e.width,co.height=e.height;const o=co.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=co}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=is(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(is(i[r]/255)*255):i[r]=is(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TE=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(eh(o[u].image)):c.push(eh(o[u]))}else c=eh(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function eh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?bE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let AE=0;const th=new ie;class Yn extends Tr{constructor(e=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,r=aa,o=aa,c=fn,u=Vs,h=sa,m=ki,d=Yn.DEFAULT_ANISOTROPY,g=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Oo(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case aa:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case aa:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=xx;Yn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,C=(x+1)/2,I=(M+1)/2,L=(g+v)/4,F=(_+w)/4,A=(E+y)/4;return z>C&&z>I?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=F/r):C>I?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=L/o,c=A/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=F/c,o=A/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(_-w)/O,this.z=(v-g)/O,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let _n=Qp;class RE extends Tr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new _n(0,0,e,i),this.scissorTest=!1,this.viewport=new _n(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Yn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new zp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Aa extends RE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Cx extends Yn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CE extends Yn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fu=class Fu{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=E,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/uo.setFromMatrixColumn(e,0).length(),c=1/uo.setFromMatrixColumn(e,1).length(),u=1/uo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+E*d,i[5]=v-w*d,i[9]=-h*m,i[2]=w-v*d,i[6]=E+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,E=d*g,w=d*_;i[0]=v+w*h,i[4]=E*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-E,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,E=d*g,w=d*_;i[0]=v-w*h,i[4]=-u*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=h*g,w=h*_;i[0]=m*g,i[4]=E*d-x,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=x*d-E,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,E=h*m,w=h*d;i[0]=m*g,i[4]=w-v*_,i[8]=E*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+E,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*d,E=h*m,w=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,DE)}lookAt(e,i,r){const o=this.elements;return Ti.subVectors(e,i),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ps.crossVectors(r,Ti),Ps.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ps.crossVectors(r,Ti)),Ps.normalize(),$c.crossVectors(Ti,Ps),o[0]=Ps.x,o[4]=$c.x,o[8]=Ti.x,o[1]=Ps.y,o[5]=$c.y,o[9]=Ti.y,o[2]=Ps.z,o[6]=$c.z,o[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],E=r[2],w=r[6],y=r[10],M=r[14],O=r[3],z=r[7],C=r[11],I=r[15],L=o[0],F=o[4],A=o[8],N=o[12],W=o[1],k=o[5],K=o[9],me=o[13],ce=o[2],j=o[6],B=o[10],G=o[14],ne=o[3],pe=o[7],ge=o[11],U=o[15];return c[0]=u*L+h*W+m*ce+d*ne,c[4]=u*F+h*k+m*j+d*pe,c[8]=u*A+h*K+m*B+d*ge,c[12]=u*N+h*me+m*G+d*U,c[1]=g*L+_*W+v*ce+x*ne,c[5]=g*F+_*k+v*j+x*pe,c[9]=g*A+_*K+v*B+x*ge,c[13]=g*N+_*me+v*G+x*U,c[2]=E*L+w*W+y*ce+M*ne,c[6]=E*F+w*k+y*j+M*pe,c[10]=E*A+w*K+y*B+M*ge,c[14]=E*N+w*me+y*G+M*U,c[3]=O*L+z*W+C*ce+I*ne,c[7]=O*F+z*k+C*j+I*pe,c[11]=O*A+z*K+C*B+I*ge,c[15]=O*N+z*me+C*G+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],w=e[7],y=e[11],M=e[15],O=m*x-d*v,z=h*x-d*_,C=h*v-m*_,I=u*x-d*g,L=u*v-m*g,F=u*_-h*g;return i*(w*O-y*z+M*C)-r*(E*O-y*I+M*L)+o*(E*z-w*I+M*F)-c*(E*C-w*L+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],w=e[13],y=e[14],M=e[15],O=i*h-r*u,z=i*m-o*u,C=i*d-c*u,I=r*m-o*h,L=r*d-c*h,F=o*d-c*m,A=g*w-_*E,N=g*y-v*E,W=g*M-x*E,k=_*y-v*w,K=_*M-x*w,me=v*M-x*y,ce=O*me-z*K+C*k+I*W-L*N+F*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ce;return e[0]=(h*me-m*K+d*k)*j,e[1]=(o*K-r*me-c*k)*j,e[2]=(w*F-y*L+M*I)*j,e[3]=(v*L-_*F-x*I)*j,e[4]=(m*W-u*me-d*N)*j,e[5]=(i*me-o*W+c*N)*j,e[6]=(y*C-E*F-M*z)*j,e[7]=(g*F-v*C+x*z)*j,e[8]=(u*K-h*W+d*A)*j,e[9]=(r*W-i*K-c*A)*j,e[10]=(E*L-w*C+M*O)*j,e[11]=(_*C-g*L-x*O)*j,e[12]=(h*N-u*k-m*A)*j,e[13]=(i*k-r*N+o*A)*j,e[14]=(w*z-E*I-y*O)*j,e[15]=(g*I-_*z+v*O)*j,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,E=c*_,w=u*g,y=u*_,M=h*_,O=m*d,z=m*g,C=m*_,I=r.x,L=r.y,F=r.z;return o[0]=(1-(w+M))*I,o[1]=(x+C)*I,o[2]=(E-z)*I,o[3]=0,o[4]=(x-C)*L,o[5]=(1-(v+M))*L,o[6]=(y+O)*L,o[7]=0,o[8]=(E+z)*F,o[9]=(y-O)*F,o[10]=(1-(v+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=uo.set(o[0],o[1],o[2]).length();const h=uo.set(o[4],o[5],o[6]).length(),m=uo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ea.copy(this);const d=1/u,g=1/h,_=1/m;return ea.elements[0]*=d,ea.elements[1]*=d,ea.elements[2]*=d,ea.elements[4]*=g,ea.elements[5]*=g,ea.elements[6]*=g,ea.elements[8]*=_,ea.elements[9]*=_,ea.elements[10]*=_,i.setFromRotationMatrix(ea),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ba,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let E,w;if(m)E=c/(u-c),w=u*c/(u-c);else if(h===ba)E=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===Nu)E=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ba,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let E,w;if(m)E=1/(u-c),w=u/(u-c);else if(h===ba)E=-2/(u-c),w=-(u+c)/(u-c);else if(h===Nu)E=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Fu.prototype.isMatrix4=!0;let Mn=Fu;const uo=new ie,ea=new Mn,wE=new ie(0,0,0),DE=new ie(1,1,1),Ps=new ie,$c=new ie,Ti=new ie,J_=new Mn,$_=new Po;class br{constructor(e=0,i=0,r=0,o=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return J_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return $_.setFromEuler(this),this.setFromQuaternion($_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LE=0;const ev=new ie,fo=new Po,Za=new Mn,eu=new ie,Tl=new ie,NE=new ie,UE=new Po,tv=new ie(1,0,0),nv=new ie(0,1,0),iv=new ie(0,0,1),av={type:"added"},OE={type:"removed"},ho={type:"childadded",child:null},nh={type:"childremoved",child:null};class Ci extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const e=new ie,i=new br,r=new Po,o=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Mn},normalMatrix:{value:new ct}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fo.setFromAxisAngle(e,i),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,i){return fo.setFromAxisAngle(e,i),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(tv,e)}rotateY(e){return this.rotateOnAxis(nv,e)}rotateZ(e){return this.rotateOnAxis(iv,e)}translateOnAxis(e,i){return ev.copy(e).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(tv,e)}translateY(e){return this.translateOnAxis(nv,e)}translateZ(e){return this.translateOnAxis(iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Za.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?eu.copy(e):eu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Za.lookAt(Tl,eu,this.up):Za.lookAt(eu,Tl,this.up),this.quaternion.setFromRotationMatrix(Za),o&&(Za.extractRotation(o.matrixWorld),fo.setFromRotationMatrix(Za),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(av),ho.child=e,this.dispatchEvent(ho),ho.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OE),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Za.multiply(e.parent.matrixWorld)),e.applyMatrix4(Za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(av),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ci.DEFAULT_UP=new ie(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nl extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Nl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},tu={h:0,s:0,l:0};function ah(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Xt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=Bp(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=ah(u,c,e+1/3),this.g=ah(u,c,e),this.b=ah(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=$n){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=$n){const r=Dx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Ct.workingToColorSpace(Jn.copy(this),e),Math.round(St(Jn.r*255,0,255))*65536+Math.round(St(Jn.g*255,0,255))*256+Math.round(St(Jn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Jn.copy(this),i);const r=Jn.r,o=Jn.g,c=Jn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Jn.copy(this),i),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=$n){Ct.workingToColorSpace(Jn.copy(this),e);const i=Jn.r,r=Jn.g,o=Jn.b;return e!==$n?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+i,Is.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Is),e.getHSL(tu);const r=Fl(Is.h,tu.h,i),o=Fl(Is.s,tu.s,i),c=Fl(Is.l,tu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Xt;Xt.NAMES=Dx;class IE extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ta=new ie,Ka=new ie,sh=new ie,Qa=new ie,po=new ie,mo=new ie,sv=new ie,rh=new ie,oh=new ie,lh=new ie,ch=new _n,uh=new _n,fh=new _n;class ia{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ta.subVectors(e,i),o.cross(ta);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ta.subVectors(o,i),Ka.subVectors(r,i),sh.subVectors(e,i);const u=ta.dot(ta),h=ta.dot(Ka),m=ta.dot(sh),d=Ka.dot(Ka),g=Ka.dot(sh),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-x-E,E,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Qa)===null?!1:Qa.x>=0&&Qa.y>=0&&Qa.x+Qa.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Qa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qa.x),m.addScaledVector(u,Qa.y),m.addScaledVector(h,Qa.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(e,i),uh.fromBufferAttribute(e,r),fh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ch,c.x),u.addScaledVector(uh,c.y),u.addScaledVector(fh,c.z),u}static isFrontFacing(e,i,r,o){return ta.subVectors(r,i),Ka.subVectors(e,i),ta.cross(Ka).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ta.subVectors(this.c,this.b),Ka.subVectors(this.a,this.b),ta.cross(Ka).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ia.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ia.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;po.subVectors(o,r),mo.subVectors(c,r),rh.subVectors(e,r);const m=po.dot(rh),d=mo.dot(rh);if(m<=0&&d<=0)return i.copy(r);oh.subVectors(e,o);const g=po.dot(oh),_=mo.dot(oh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(po,u);lh.subVectors(e,c);const x=po.dot(lh),E=mo.dot(lh);if(E>=0&&x<=E)return i.copy(c);const w=x*d-m*E;if(w<=0&&d>=0&&E<=0)return h=d/(d-E),i.copy(r).addScaledVector(mo,h);const y=g*E-x*_;if(y<=0&&_-g>=0&&x-E>=0)return sv.subVectors(c,o),h=(_-g)/(_-g+(x-E)),i.copy(o).addScaledVector(sv,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(po,u).addScaledVector(mo,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(na.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(na.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=na.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,na):na.fromBufferAttribute(c,u),na.applyMatrix4(e.matrixWorld),this.expandByPoint(na);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nu.copy(r.boundingBox)),nu.applyMatrix4(e.matrixWorld),this.union(nu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,na),na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Al),iu.subVectors(this.max,Al),go.subVectors(e.a,Al),_o.subVectors(e.b,Al),vo.subVectors(e.c,Al),Fs.subVectors(_o,go),Bs.subVectors(vo,_o),fr.subVectors(go,vo);let i=[0,-Fs.z,Fs.y,0,-Bs.z,Bs.y,0,-fr.z,fr.y,Fs.z,0,-Fs.x,Bs.z,0,-Bs.x,fr.z,0,-fr.x,-Fs.y,Fs.x,0,-Bs.y,Bs.x,0,-fr.y,fr.x,0];return!dh(i,go,_o,vo,iu)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,go,_o,vo,iu))?!1:(au.crossVectors(Fs,Bs),i=[au.x,au.y,au.z],dh(i,go,_o,vo,iu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ja),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ja=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],na=new ie,nu=new kl,go=new ie,_o=new ie,vo=new ie,Fs=new ie,Bs=new ie,fr=new ie,Al=new ie,iu=new ie,au=new ie,dr=new ie;function dh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){dr.fromArray(a,c);const h=o.x*Math.abs(dr.x)+o.y*Math.abs(dr.y)+o.z*Math.abs(dr.z),m=e.dot(dr),d=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const Cn=new ie,su=new Ft;let FE=0;class Ra extends Tr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=X_,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)su.fromBufferAttribute(this,i),su.applyMatrix3(e),this.setXY(i,su.x,su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lx extends Ra{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Nx extends Ra{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Xi extends Ra{constructor(e,i,r){super(new Float32Array(e),i,r)}}const BE=new kl,Rl=new ie,hh=new ie;class Hp{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):BE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);const i=Rl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Rl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(hh)),this.expandByPoint(Rl.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zE=0;const Gi=new Mn,ph=new Ci,xo=new ie,Ai=new kl,Cl=new kl,Fn=new ie;class Wi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iE(e)?Nx:Lx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,i,r){return Gi.makeTranslation(e,i,r),this.applyMatrix4(Gi),this}scale(e,i,r){return Gi.makeScale(e,i,r),this.applyMatrix4(Gi),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];Cl.setFromBufferAttribute(h),this.morphTargetsRelative?(Fn.addVectors(Ai.min,Cl.min),Ai.expandByPoint(Fn),Fn.addVectors(Ai.max,Cl.max),Ai.expandByPoint(Fn)):(Ai.expandByPoint(Cl.min),Ai.expandByPoint(Cl.max))}Ai.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Fn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Fn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Fn.fromBufferAttribute(h,d),m&&(xo.fromBufferAttribute(e,d),Fn.add(xo)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ra(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let A=0;A<r.count;A++)h[A]=new ie,m[A]=new ie;const d=new ie,g=new ie,_=new ie,v=new Ft,x=new Ft,E=new Ft,w=new ie,y=new ie;function M(A,N,W){d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,W),v.fromBufferAttribute(c,A),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,W),g.sub(d),_.sub(d),x.sub(v),E.sub(v);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(k),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(k),h[A].add(w),h[N].add(w),h[W].add(w),m[A].add(y),m[N].add(y),m[W].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let A=0,N=O.length;A<N;++A){const W=O[A],k=W.start,K=W.count;for(let me=k,ce=k+K;me<ce;me+=3)M(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const z=new ie,C=new ie,I=new ie,L=new ie;function F(A){I.fromBufferAttribute(o,A),L.copy(I);const N=h[A];z.copy(N),z.sub(I.multiplyScalar(I.dot(N))).normalize(),C.crossVectors(L,N);const k=C.dot(m[A])<0?-1:1;u.setXYZW(A,z.x,z.y,z.z,k)}for(let A=0,N=O.length;A<N;++A){const W=O[A],k=W.start,K=W.count;for(let me=k,ce=k+K;me<ce;me+=3)F(e.getX(me+0)),F(e.getX(me+1)),F(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ra(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ie,c=new ie,u=new ie,h=new ie,m=new ie,d=new ie,g=new ie,_=new ie;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Fn.fromBufferAttribute(e,i),Fn.normalize(),e.setXYZ(i,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,E=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[E++]=d[x++]}return new Ra(v,g,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wi,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let HE=0;class zu extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=To,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==Bh&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $a=new ie,mh=new ie,ru=new ie,zs=new ie,gh=new ie,ou=new ie,_h=new ie;class GE{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($a.copy(this.origin).addScaledVector(this.direction,i),$a.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){mh.copy(e).add(i).multiplyScalar(.5),ru.copy(i).sub(e).normalize(),zs.copy(this.origin).sub(mh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(ru),h=zs.dot(this.direction),m=-zs.dot(ru),d=zs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*m-h,v=u*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(mh).addScaledVector(ru,v),x}intersectSphere(e,i){$a.subVectors(e.center,this.origin);const r=$a.dot(this.direction),o=$a.dot($a)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,$a)!==null}intersectTriangle(e,i,r,o,c){gh.subVectors(i,e),ou.subVectors(r,e),_h.crossVectors(gh,ou);let u=this.direction.dot(_h),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;zs.subVectors(this.origin,e);const m=h*this.direction.dot(ou.crossVectors(zs,ou));if(m<0)return null;const d=h*this.direction.dot(gh.cross(zs));if(d<0||m+d>u)return null;const g=-h*zs.dot(_h);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ou extends zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rv=new Mn,hr=new GE,lu=new Hp,ov=new ie,cu=new ie,uu=new ie,fu=new ie,vh=new ie,du=new ie,lv=new ie,hu=new ie;class Ri extends Ci{constructor(e=new Wi,i=new Ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){du.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(vh.fromBufferAttribute(_,e),u?du.addScaledVector(vh,g):du.addScaledVector(vh.sub(i),g))}i.add(du)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lu.copy(r.boundingSphere),lu.applyMatrix4(c),hr.copy(e.ray).recast(e.near),!(lu.containsPoint(hr.origin)===!1&&(hr.intersectSphere(lu,ov)===null||hr.origin.distanceToSquared(ov)>(e.far-e.near)**2))&&(rv.copy(c).invert(),hr.copy(e.ray).applyMatrix4(rv),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],O=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=O,I=z;C<I;C+=3){const L=h.getX(C),F=h.getX(C+1),A=h.getX(C+2);o=pu(this,M,e,r,d,g,_,L,F,A),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=E,M=w;y<M;y+=3){const O=h.getX(y),z=h.getX(y+1),C=h.getX(y+2);o=pu(this,u,e,r,d,g,_,O,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],O=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let C=O,I=z;C<I;C+=3){const L=C,F=C+1,A=C+2;o=pu(this,M,e,r,d,g,_,L,F,A),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=E,M=w;y<M;y+=3){const O=y,z=y+1,C=y+2;o=pu(this,u,e,r,d,g,_,O,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function VE(a,e,i,r,o,c,u,h){let m;if(e.side===hi?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===as,h),m===null)return null;hu.copy(h),hu.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(hu);return d<i.near||d>i.far?null:{distance:d,point:hu.clone(),object:a}}function pu(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,cu),a.getVertexPosition(m,uu),a.getVertexPosition(d,fu);const g=VE(a,e,i,r,cu,uu,fu,lv);if(g){const _=new ie;ia.getBarycoord(lv,cu,uu,fu,_),o&&(g.uv=ia.getInterpolatedAttribute(o,h,m,d,_,new Ft)),c&&(g.uv1=ia.getInterpolatedAttribute(c,h,m,d,_,new Ft)),u&&(g.normal=ia.getInterpolatedAttribute(u,h,m,d,_,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new ie,materialIndex:0};ia.getNormal(cu,uu,fu,v.normal),g.face=v,g.barycoord=_}return g}class kE extends Yn{constructor(e=null,i=1,r=1,o,c,u,h,m,d=Wn,g=Wn,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xh=new ie,XE=new ie,WE=new ct;class gr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=xh.subVectors(r,i).cross(XE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(xh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||WE.getNormalMatrix(e),o=this.coplanarPoint(xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Hp,YE=new Ft(.5,.5),mu=new ie;class Ux{constructor(e=new gr,i=new gr,r=new gr,o=new gr,c=new gr,u=new gr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ba,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],w=c[9],y=c[10],M=c[11],O=c[12],z=c[13],C=c[14],I=c[15];if(o[0].setComponents(d-u,x-g,M-E,I-O).normalize(),o[1].setComponents(d+u,x+g,M+E,I+O).normalize(),o[2].setComponents(d+h,x+_,M+w,I+z).normalize(),o[3].setComponents(d-h,x-_,M-w,I-z).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(d-m,x-v,M-y,I-C).normalize();else if(o[4].setComponents(d-m,x-v,M-y,I-C).normalize(),i===ba)o[5].setComponents(d+m,x+v,M+y,I+C).normalize();else if(i===Nu)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const i=YE.distanceTo(e.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(mu.x=o.normal.x>0?e.max.x:e.min.x,mu.y=o.normal.y>0?e.max.y:e.min.y,mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(mu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qE extends Yn{constructor(e,i,r,o,c=fn,u=fn,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ox extends Yn{constructor(e=[],i=yr,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Px extends Yn{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class No extends Yn{constructor(e,i,r=Ca,o,c,u,h=Wn,m=Wn,d,g=rs,_=1){if(g!==rs&&g!==Mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jE extends No{constructor(e,i=Ca,r=yr,o,c,u=Wn,h=Wn,m,d=rs){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ix extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xl extends Wi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Xi(d,3)),this.setAttribute("normal",new Xi(g,3)),this.setAttribute("uv",new Xi(_,2));function E(w,y,M,O,z,C,I,L,F,A,N){const W=C/F,k=I/A,K=C/2,me=I/2,ce=L/2,j=F+1,B=A+1;let G=0,ne=0;const pe=new ie;for(let ge=0;ge<B;ge++){const U=ge*k-me;for(let Q=0;Q<j;Q++){const ve=Q*W-K;pe[w]=ve*O,pe[y]=U*z,pe[M]=ce,d.push(pe.x,pe.y,pe.z),pe[w]=0,pe[y]=0,pe[M]=L>0?1:-1,g.push(pe.x,pe.y,pe.z),_.push(Q/F),_.push(1-ge/A),G+=1}}for(let ge=0;ge<A;ge++)for(let U=0;U<F;U++){const Q=v+U+j*ge,ve=v+U+j*(ge+1),ye=v+(U+1)+j*(ge+1),Ve=v+(U+1)+j*ge;m.push(Q,ve,Ve),m.push(ve,ye,Ve),ne+=6}h.addGroup(x,ne,N),x+=ne,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ZE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new Ft:new ie);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ie,o=[],c=[],u=[],h=new ie,m=new Mn;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new ie)}c[0]=new ie,u[0]=new ie;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(St(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(St(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Gp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const cv=new ie,uv=new ie,Sh=new Gp,Mh=new Gp,yh=new Gp;class KE extends ZE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ie){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(uv.subVectors(o[0],o[1]).add(o[0]),d=uv);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(cv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=cv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),Sh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,w,y),Mh.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,w,y),yh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),Mh.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),yh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(Sh.calc(m),Mh.calc(m),yh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ks extends Wi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],E=[],w=[],y=[];for(let M=0;M<g;M++){const O=M*v-u;for(let z=0;z<d;z++){const C=z*_-c;E.push(C,-O,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let O=0;O<h;O++){const z=O+d*M,C=O+d*(M+1),I=O+1+d*(M+1),L=O+1+d*M;x.push(z,C,L),x.push(C,I,L)}this.setIndex(x),this.setAttribute("position",new Xi(E,3)),this.setAttribute("normal",new Xi(w,3)),this.setAttribute("uv",new Xi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}function Uo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(fv(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(fv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ai(a){const e={};for(let i=0;i<a.length;i++){const r=Uo(a[i]);for(const o in r)e[o]=r[o]}return e}function fv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function QE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Fx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const JE={clone:Uo,merge:ai};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new _n().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Mn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tb extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nb extends zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gu=new ie,_u=new Po,xa=new ie;class Bx extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gu,_u,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,_u,xa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(gu,_u,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,_u,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hs=new ie,dv=new Ft,hv=new Ft;class Vi extends Bx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z)}getViewSize(e,i){return this.getViewBounds(e,dv,hv),i.subVectors(hv,dv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Il*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class zx extends Bx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const So=-90,Mo=1;class ab extends Ci{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(So,Mo,e,i);o.layers=this.layers,this.add(o);const c=new Vi(So,Mo,e,i);c.layers=this.layers,this.add(c);const u=new Vi(So,Mo,e,i);u.layers=this.layers,this.add(u);const h=new Vi(So,Mo,e,i);h.layers=this.layers,this.add(h);const m=new Vi(So,Mo,e,i);m.layers=this.layers,this.add(m);const d=new Vi(So,Mo,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===ba)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class sb extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jp=class Jp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Jp.prototype.isMatrix2=!0;let pv=Jp;function mv(a,e,i,r){const o=rb(r);switch(i){case bx:return a*e;case Ax:return a*e/o.components*o.byteLength;case Up:return a*e/o.components*o.byteLength;case Er:return a*e*2/o.components*o.byteLength;case Op:return a*e*2/o.components*o.byteLength;case Tx:return a*e*3/o.components*o.byteLength;case sa:return a*e*4/o.components*o.byteLength;case Pp:return a*e*4/o.components*o.byteLength;case yu:case Eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bu:case Tu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(a,16)*Math.max(e,8)/4;case jh:case Kh:return Math.max(a,8)*Math.max(e,8)/2;case Jh:case $h:case tp:case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ep:case Cu:case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case vp:case xp:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Mp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case wu:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rb(a){switch(a){case ki:case Sx:return{byteLength:1,components:1};case zl:case Mx:case ss:return{byteLength:2,components:1};case Lp:case Np:return{byteLength:2,components:4};case Ca:case Dp:case Ea:return{byteLength:4,components:1};case yx:case Ex:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function ob(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],w=_[x];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const w=_[x];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
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
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
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
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gb=`#ifdef USE_BATCHING
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
#endif`,_b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
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
#endif`,yb=`#ifdef USE_BUMPMAP
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lb=`#define PI 3.141592653589793
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
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ub=`vec3 transformedNormal = objectNormal;
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
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
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
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,r1=`uniform sampler2D dfgLUT;
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
}`,o1=`
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L1=`#ifdef USE_NORMALMAP
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
#endif`,N1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`#include <common>
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
}`,mT=`#if DEPTH_PACKING == 3200
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
}`,gT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,MT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ET=`uniform vec3 diffuse;
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
}`,bT=`#define LAMBERT
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define MATCAP
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
}`,RT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,wT=`#define NORMAL
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
}`,DT=`#define PHONG
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
}`,LT=`#define PHONG
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
}`,NT=`#define STANDARD
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
}`,UT=`#define STANDARD
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
}`,OT=`#define TOON
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
}`,PT=`#define TOON
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
}`,IT=`uniform float size;
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
}`,FT=`uniform vec3 diffuse;
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
}`,BT=`#include <common>
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
}`,zT=`uniform vec3 color;
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
}`,HT=`uniform float rotation;
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
}`,GT=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:db,alphatest_pars_fragment:hb,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:_b,begin_vertex:vb,beginnormal_vertex:xb,bsdfs:Sb,iridescence_fragment:Mb,bumpmap_pars_fragment:yb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Cb,color_pars_vertex:wb,color_vertex:Db,common:Lb,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Ob,displacementmap_vertex:Pb,emissivemap_fragment:Ib,emissivemap_pars_fragment:Fb,colorspace_fragment:Bb,colorspace_pars_fragment:zb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:e1,envmap_vertex:Xb,fog_vertex:Wb,fog_pars_vertex:Yb,fog_fragment:qb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:a1,lights_physical_fragment:s1,lights_physical_pars_fragment:r1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:c1,lightprobes_pars_fragment:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:_1,map_particle_pars_fragment:v1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:S1,morphinstance_vertex:M1,morphcolor_vertex:y1,morphnormal_vertex:E1,morphtarget_pars_vertex:b1,morphtarget_vertex:T1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:w1,normal_vertex:D1,normalmap_pars_fragment:L1,clearcoat_normal_fragment_begin:N1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:P1,opaque_fragment:I1,packing:F1,premultiplied_alpha_fragment:B1,project_vertex:z1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:W1,shadowmap_vertex:Y1,shadowmask_pars_fragment:q1,skinbase_vertex:j1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:Q1,specularmap_fragment:J1,specularmap_pars_fragment:$1,tonemapping_fragment:eT,tonemapping_pars_fragment:tT,transmission_fragment:nT,transmission_pars_fragment:iT,uv_pars_fragment:aT,uv_pars_vertex:sT,uv_vertex:rT,worldpos_vertex:oT,background_vert:lT,background_frag:cT,backgroundCube_vert:uT,backgroundCube_frag:fT,cube_vert:dT,cube_frag:hT,depth_vert:pT,depth_frag:mT,distance_vert:gT,distance_frag:_T,equirect_vert:vT,equirect_frag:xT,linedashed_vert:ST,linedashed_frag:MT,meshbasic_vert:yT,meshbasic_frag:ET,meshlambert_vert:bT,meshlambert_frag:TT,meshmatcap_vert:AT,meshmatcap_frag:RT,meshnormal_vert:CT,meshnormal_frag:wT,meshphong_vert:DT,meshphong_frag:LT,meshphysical_vert:NT,meshphysical_frag:UT,meshtoon_vert:OT,meshtoon_frag:PT,points_vert:IT,points_frag:FT,shadow_vert:BT,shadow_frag:zT,sprite_vert:HT,sprite_frag:GT},Xe={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ma={basic:{uniforms:ai([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:ai([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:ai([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:ai([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:ai([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:ai([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:ai([Xe.points,Xe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:ai([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:ai([Xe.common,Xe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:ai([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:ai([Xe.sprite,Xe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:ai([Xe.common,Xe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:ai([Xe.lights,Xe.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ma.physical={uniforms:ai([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const vu={r:0,b:0,g:0},VT=new Mn,Gx=new ct;Gx.set(-1,0,0,0,1,0,0,0,1);function kT(a,e,i,r,o,c){const u=new Xt(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(O){let z=O.isScene===!0?O.background:null;if(z&&z.isTexture){const C=O.backgroundBlurriness>0;z=e.get(z,C)}return z}function E(O){let z=!1;const C=x(O);C===null?y(u,h):C&&C.isColor&&(y(C,1),z=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(O,z){const C=x(z);C&&(C.isCubeTexture||C.mapping===Bu)?(d===void 0&&(d=new Ri(new Xl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Uo(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Gx),d.material.toneMapped=Ct.getTransfer(C.colorSpace)!==qt,(g!==C||_!==C.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ri(new ks(2,2),new Yi({name:"BackgroundMaterial",uniforms:Uo(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,z){O.getRGB(vu,Fx(a)),i.buffers.color.setClear(vu.r,vu.g,vu.b,z,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,z=1){u.set(O),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,y(u,h)},render:E,addToRenderList:w,dispose:M}}function XT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(k,K,me,ce,j){let B=!1;const G=_(k,ce,me,K);c!==G&&(c=G,d(c.object)),B=x(k,ce,me,j),B&&E(k,ce,me,j),j!==null&&e.update(j,a.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,C(k,K,me,ce),j!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function m(){return a.createVertexArray()}function d(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function _(k,K,me,ce){const j=ce.wireframe===!0;let B=r[K.id];B===void 0&&(B={},r[K.id]=B);const G=k.isInstancedMesh===!0?k.id:0;let ne=B[G];ne===void 0&&(ne={},B[G]=ne);let pe=ne[me.id];pe===void 0&&(pe={},ne[me.id]=pe);let ge=pe[j];return ge===void 0&&(ge=v(m()),pe[j]=ge),ge}function v(k){const K=[],me=[],ce=[];for(let j=0;j<i;j++)K[j]=0,me[j]=0,ce[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:me,attributeDivisors:ce,object:k,attributes:{},index:null}}function x(k,K,me,ce){const j=c.attributes,B=K.attributes;let G=0;const ne=me.getAttributes();for(const pe in ne)if(ne[pe].location>=0){const U=j[pe];let Q=B[pe];if(Q===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==ce}function E(k,K,me,ce){const j={},B=K.attributes;let G=0;const ne=me.getAttributes();for(const pe in ne)if(ne[pe].location>=0){let U=B[pe];U===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),j[pe]=Q,G++}c.attributes=j,c.attributesNum=G,c.index=ce}function w(){const k=c.newAttributes;for(let K=0,me=k.length;K<me;K++)k[K]=0}function y(k){M(k,0)}function M(k,K){const me=c.newAttributes,ce=c.enabledAttributes,j=c.attributeDivisors;me[k]=1,ce[k]===0&&(a.enableVertexAttribArray(k),ce[k]=1),j[k]!==K&&(a.vertexAttribDivisor(k,K),j[k]=K)}function O(){const k=c.newAttributes,K=c.enabledAttributes;for(let me=0,ce=K.length;me<ce;me++)K[me]!==k[me]&&(a.disableVertexAttribArray(me),K[me]=0)}function z(k,K,me,ce,j,B,G){G===!0?a.vertexAttribIPointer(k,K,me,j,B):a.vertexAttribPointer(k,K,me,ce,j,B)}function C(k,K,me,ce){w();const j=ce.attributes,B=me.getAttributes(),G=K.defaultAttributeValues;for(const ne in B){const pe=B[ne];if(pe.location>=0){let ge=j[ne];if(ge===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(ge=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(ge=k.instanceColor)),ge!==void 0){const U=ge.normalized,Q=ge.itemSize,ve=e.get(ge);if(ve===void 0)continue;const ye=ve.buffer,Ve=ve.type,oe=ve.bytesPerElement,Te=Ve===a.INT||Ve===a.UNSIGNED_INT||ge.gpuType===Dp;if(ge.isInterleavedBufferAttribute){const Ae=ge.data,qe=Ae.stride,at=ge.offset;if(Ae.isInstancedInterleavedBuffer){for(let et=0;et<pe.locationSize;et++)M(pe.location+et,Ae.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let et=0;et<pe.locationSize;et++)y(pe.location+et);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let et=0;et<pe.locationSize;et++)z(pe.location+et,Q/pe.locationSize,Ve,U,qe*oe,(at+Q/pe.locationSize*et)*oe,Te)}else{if(ge.isInstancedBufferAttribute){for(let Ae=0;Ae<pe.locationSize;Ae++)M(pe.location+Ae,ge.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ae=0;Ae<pe.locationSize;Ae++)y(pe.location+Ae);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let Ae=0;Ae<pe.locationSize;Ae++)z(pe.location+Ae,Q/pe.locationSize,Ve,U,Q*oe,Q/pe.locationSize*Ae*oe,Te)}}else if(G!==void 0){const U=G[ne];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(pe.location,U);break;case 3:a.vertexAttrib3fv(pe.location,U);break;case 4:a.vertexAttrib4fv(pe.location,U);break;default:a.vertexAttrib1fv(pe.location,U)}}}}O()}function I(){N();for(const k in r){const K=r[k];for(const me in K){const ce=K[me];for(const j in ce){const B=ce[j];for(const G in B)g(B[G].object),delete B[G];delete ce[j]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const K=r[k.id];for(const me in K){const ce=K[me];for(const j in ce){const B=ce[j];for(const G in B)g(B[G].object),delete B[G];delete ce[j]}}delete r[k.id]}function F(k){for(const K in r){const me=r[K];for(const ce in me){const j=me[ce];if(j[k.id]===void 0)continue;const B=j[k.id];for(const G in B)g(B[G].object),delete B[G];delete j[k.id]}}}function A(k){for(const K in r){const me=r[K],ce=k.isInstancedMesh===!0?k.id:0,j=me[ce];if(j!==void 0){for(const B in j){const G=j[B];for(const ne in G)g(G[ne].object),delete G[ne];delete j[B]}delete me[ce],Object.keys(me).length===0&&delete r[K]}}}function N(){W(),u=!0,c!==o&&(c=o,d(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:O}}function WT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function YT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==sa&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const A=F===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ki&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ea&&!A)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(rt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:O,maxVaryings:z,maxFragmentUniforms:C,maxSamples:I,samples:L}}function qT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new gr,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):d();else{const O=c?0:r,z=O*4;let C=M.clippingState||null;m.value=C,C=g(E,v,z,x);for(let I=0;I!==z;++I)C[I]=i[I];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const M=x+w*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,C=x;z!==w;++z,C+=4)u.copy(_[z]).applyMatrix4(O,h),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Xs=4,gv=[.125,.215,.35,.446,.526,.582],xr=20,jT=256,wl=new zx,_v=new Xt;let Eh=null,bh=0,Th=0,Ah=!1;const ZT=new ie;class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=ZT}=c;Eh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,bh,Th),this._renderer.xr.enabled=Ah,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===yr||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ss,format:sa,colorSpace:Du,depthBuffer:!1},o=xv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KT(c)),this._blurMaterial=JT(c,e,i),this._ggxMaterial=QT(c,e,i)}return o}_compileMaterial(e){const i=new Ri(new Wi,e);this._renderer.compile(i,wl)}_sceneToCubeUV(e,i,r,o,c){const m=new Vi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(_v),_.toneMapping=Ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new Xl,new Ou({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,M=!0):(y.color.copy(_v),M=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):C===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const I=this._cubeSize;yo(o,C*I,z>2?I:0,I,I),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===yr||e.mapping===Lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;yo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,wl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-Xs?r-E+Xs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=E-i,yo(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,wl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,yo(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,wl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*xr-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):xr;y>xr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xr}`);const M=[];let O=0;for(let F=0;F<xr;++F){const A=F/w,N=Math.exp(-A*A/2);M.push(N),F===0?O+=N:F<y&&(O+=2*N)}for(let F=0;F<M.length;F++)M[F]=M[F]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:z}=this;v.dTheta.value=E,v.mipInt.value=z-r;const C=this._sizeLods[o],I=3*C*(o>z-Xs?o-z+Xs:0),L=4*(this._cubeSize-C);yo(i,I,L,3*C,2*C),m.setRenderTarget(i),m.render(_,wl)}}function KT(a){const e=[],i=[],r=[];let o=a;const c=a-Xs+1+gv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Xs?m=gv[u-a+Xs-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,w=3,y=2,M=1,O=new Float32Array(w*E*x),z=new Float32Array(y*E*x),C=new Float32Array(M*E*x);for(let L=0;L<x;L++){const F=L%3*2/3-1,A=L>2?0:-1,N=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];O.set(N,w*E*L),z.set(v,y*E*L);const W=[L,L,L,L,L,L];C.set(W,M*E*L)}const I=new Wi;I.setAttribute("position",new Ra(O,w)),I.setAttribute("uv",new Ra(z,y)),I.setAttribute("faceIndex",new Ra(C,M)),r.push(new Ri(I,null)),o>Xs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function xv(a,e,i){const r=new Aa(a,e,i);return r.texture.mapping=Bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function QT(a,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function JT(a,e,i){const r=new Float32Array(xr),o=new ie(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Sv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Mv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}class Vx extends Aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ox(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hi,blending:ns});c.uniforms.tEquirect.value=i;const u=new Ri(o,c),h=i.minFilter;return i.minFilter===Vs&&(i.minFilter=fn),new ab(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function $T(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Zd||x===Kd)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const w=new Vx(E.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===Zd||x===Kd,w=x===yr||x===Lo;if(E||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new vv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const O=v.image;return E&&O&&O.height>0||w&&O&&m(O)?(r===null&&(r=new vv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Zd?v.mapping=yr:x===Kd&&(v.mapping=Lo),v}function m(v){let x=0;const E=6;for(let w=0;w<E;w++)v[w]!==void 0&&x++;return x===E}function d(v){const x=v.target;x.removeEventListener("dispose",d);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function eA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Ao("WebGLRenderer: "+r+" extension not supported."),o}}}function tA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,E=_.attributes.position;let w=0;if(E===void 0)return;if(x!==null){const O=x.array;w=x.version;for(let z=0,C=O.length;z<C;z+=3){const I=O[z+0],L=O[z+1],F=O[z+2];v.push(I,L,L,F,F,I)}}else{const O=E.array;w=E.version;for(let z=0,C=O.length/3-1;z<C;z+=3){const I=z+0,L=z+1,F=z+2;v.push(I,L,L,F,F,I)}}const y=new(E.count>=65535?Nx:Lx)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function nA(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function iA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function aA(a,e,i){const r=new WeakMap,o=new _n;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let W=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var x=W;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let I=h.attributes.position.count*C,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*L*4*_),A=new Cx(F,I,L,_);A.type=Ea,A.needsUpdate=!0;const N=C*4;for(let k=0;k<_;k++){const K=M[k],me=O[k],ce=z[k],j=I*L*4*k;for(let B=0;B<K.count;B++){const G=B*N;E===!0&&(o.fromBufferAttribute(K,B),F[j+G+0]=o.x,F[j+G+1]=o.y,F[j+G+2]=o.z,F[j+G+3]=0),w===!0&&(o.fromBufferAttribute(me,B),F[j+G+4]=o.x,F[j+G+5]=o.y,F[j+G+6]=o.z,F[j+G+7]=0),y===!0&&(o.fromBufferAttribute(ce,B),F[j+G+8]=o.x,F[j+G+9]=o.y,F[j+G+10]=o.z,F[j+G+11]=ce.itemSize===4?o.w:1)}}v={count:_,texture:A,size:new Ft(I,L)},r.set(h,v),h.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function sA(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const rA={[dx]:"LINEAR_TONE_MAPPING",[hx]:"REINHARD_TONE_MAPPING",[px]:"CINEON_TONE_MAPPING",[mx]:"ACES_FILMIC_TONE_MAPPING",[_x]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[gx]:"CUSTOM_TONE_MAPPING"};function oA(a,e,i,r,o,c){const u=new Aa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new No(e,i):void 0}),h=new Aa(e,i,{type:ss,depthBuffer:!1,stencilBuffer:!1}),m=new Wi;m.setAttribute("position",new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Xi([0,2,0,0,2,0],2));const d=new tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ri(m,d),_=new zx(-1,1,1,-1,0,1);let v=null,x=null,E=!1,w,y=null,M=[],O=!1;this.setSize=function(z,C){u.setSize(z,C),h.setSize(z,C);for(let I=0;I<M.length;I++){const L=M[I];L.setSize&&L.setSize(z,C)}},this.setEffects=function(z){M=z,O=M.length>0&&M[0].isRenderPass===!0;const C=u.width,I=u.height;for(let L=0;L<M.length;L++){const F=M[L];F.setSize&&F.setSize(C,I)}},this.begin=function(z,C){if(E||z.toneMapping===Ta&&M.length===0)return!1;if(y=C,C!==null){const I=C.width,L=C.height;(u.width!==I||u.height!==L)&&this.setSize(I,L)}return O===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=Ta,!0},this.hasRenderPass=function(){return O},this.end=function(z,C){z.toneMapping=w,E=!0;let I=u,L=h;for(let F=0;F<M.length;F++){const A=M[F];if(A.enabled!==!1&&(A.render(z,L,I,C),A.needsSwap!==!1)){const N=I;I=L,L=N}}if(v!==z.outputColorSpace||x!==z.toneMapping){v=z.outputColorSpace,x=z.toneMapping,d.defines={},Ct.getTransfer(v)===qt&&(d.defines.SRGB_TRANSFER="");const F=rA[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,z.setRenderTarget(y),z.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const kx=new Yn,bp=new No(1,1),Xx=new Cx,Wx=new CE,Yx=new Ox,yv=[],Ev=[],bv=new Float32Array(16),Tv=new Float32Array(9),Av=new Float32Array(4);function Io(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=yv[o];if(c===void 0&&(c=new Float32Array(o),yv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Nn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Un(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Gu(a,e){let i=Ev[e];i===void 0&&(i=new Int32Array(e),Ev[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function lA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function cA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2fv(this.addr,e),Un(i,e)}}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Nn(i,e))return;a.uniform3fv(this.addr,e),Un(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4fv(this.addr,e),Un(i,e)}}function dA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Av.set(r),a.uniformMatrix2fv(this.addr,!1,Av),Un(i,r)}}function hA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Tv.set(r),a.uniformMatrix3fv(this.addr,!1,Tv),Un(i,r)}}function pA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;bv.set(r),a.uniformMatrix4fv(this.addr,!1,bv),Un(i,r)}}function mA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function gA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2iv(this.addr,e),Un(i,e)}}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;a.uniform3iv(this.addr,e),Un(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4iv(this.addr,e),Un(i,e)}}function xA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function SA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2uiv(this.addr,e),Un(i,e)}}function MA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;a.uniform3uiv(this.addr,e),Un(i,e)}}function yA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4uiv(this.addr,e),Un(i,e)}}function EA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(bp.compareFunction=i.isReversedDepthBuffer()?Fp:Ip,c=bp):c=kx,i.setTexture2D(e||c,o)}function bA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Wx,o)}function TA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Yx,o)}function AA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Xx,o)}function RA(a){switch(a){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return fA;case 35674:return dA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return SA;case 36295:return MA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}function CA(a,e){a.uniform1fv(this.addr,e)}function wA(a,e){const i=Io(e,this.size,2);a.uniform2fv(this.addr,i)}function DA(a,e){const i=Io(e,this.size,3);a.uniform3fv(this.addr,i)}function LA(a,e){const i=Io(e,this.size,4);a.uniform4fv(this.addr,i)}function NA(a,e){const i=Io(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function UA(a,e){const i=Io(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function OA(a,e){const i=Io(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function PA(a,e){a.uniform1iv(this.addr,e)}function IA(a,e){a.uniform2iv(this.addr,e)}function FA(a,e){a.uniform3iv(this.addr,e)}function BA(a,e){a.uniform4iv(this.addr,e)}function zA(a,e){a.uniform1uiv(this.addr,e)}function HA(a,e){a.uniform2uiv(this.addr,e)}function GA(a,e){a.uniform3uiv(this.addr,e)}function VA(a,e){a.uniform4uiv(this.addr,e)}function kA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=bp:u=kx;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function XA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Wx,c[u])}function WA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Yx,c[u])}function YA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Xx,c[u])}function qA(a){switch(a){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return LA;case 35674:return NA;case 35675:return UA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return IA;case 35668:case 35672:return FA;case 35669:case 35673:return BA;case 5125:return zA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return YA}}class jA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=RA(i.type)}}class ZA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qA(i.type)}}class KA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function Rv(a,e){a.seq.push(e),a.map[e.id]=e}function QA(a,e,i){const r=a.name,o=r.length;for(Rh.lastIndex=0;;){const c=Rh.exec(r),u=Rh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){Rv(i,d===void 0?new jA(h,a,e):new ZA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new KA(h),Rv(i,_)),i=_}}}class Au{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);QA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Cv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const JA=37297;let $A=0;function e2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const wv=new ct;function t2(a){Ct._getMatrix(wv,Ct.workingColorSpace,a);const e=`mat3( ${wv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case Lu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Dv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+e2(a.getShaderSource(e),h)}else return c}function n2(a,e){const i=t2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const i2={[dx]:"Linear",[hx]:"Reinhard",[px]:"Cineon",[mx]:"ACESFilmic",[_x]:"AgX",[vx]:"Neutral",[gx]:"Custom"};function a2(a,e){const i=i2[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xu=new ie;function s2(){Ct.getLuminanceCoefficients(xu);const a=xu.x.toFixed(4),e=xu.y.toFixed(4),i=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ul).join(`
`)}function o2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function l2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function Ul(a){return a!==""}function Lv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(a){return a.replace(c2,f2)}const u2=new Map;function f2(a,e){let i=vt[e];if(i===void 0){const r=u2.get(e);if(r!==void 0)i=vt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tp(i)}const d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uv(a){return a.replace(d2,h2)}function h2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ov(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const p2={[Mu]:"SHADOWMAP_TYPE_PCF",[Ll]:"SHADOWMAP_TYPE_VSM"};function m2(a){return p2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g2={[yr]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function _2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":g2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const v2={[Lo]:"ENVMAP_MODE_REFRACTION"};function x2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":v2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S2={[fx]:"ENVMAP_BLENDING_MULTIPLY",[Yy]:"ENVMAP_BLENDING_MIX",[qy]:"ENVMAP_BLENDING_ADD"};function M2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":S2[a.combine]||"ENVMAP_BLENDING_NONE"}function y2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function E2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=m2(i),d=_2(i),g=x2(i),_=M2(i),v=y2(i),x=r2(i),E=o2(c),w=o.createProgram();let y,M,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ul).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ul).join(`
`),M.length>0&&(M+=`
`)):(y=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),M=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ta?"#define TONE_MAPPING":"",i.toneMapping!==Ta?vt.tonemapping_pars_fragment:"",i.toneMapping!==Ta?a2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,n2("linearToOutputTexel",i.outputColorSpace),s2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ul).join(`
`)),u=Tp(u),u=Lv(u,i),u=Nv(u,i),h=Tp(h),h=Lv(h,i),h=Nv(h,i),u=Uv(u),h=Uv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=O+y+u,C=O+M+h,I=Cv(o,o.VERTEX_SHADER,z),L=Cv(o,o.FRAGMENT_SHADER,C);o.attachShader(w,I),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(k){if(a.debug.checkShaderErrors){const K=o.getProgramInfoLog(w)||"",me=o.getShaderInfoLog(I)||"",ce=o.getShaderInfoLog(L)||"",j=K.trim(),B=me.trim(),G=ce.trim();let ne=!0,pe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ne=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,I,L);else{const ge=Dv(o,I,"vertex"),U=Dv(o,L,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+ge+`
`+U)}else j!==""?rt("WebGLProgram: Program Info Log:",j):(B===""||G==="")&&(pe=!1);pe&&(k.diagnostics={runnable:ne,programLog:j,vertexShader:{log:B,prefix:y},fragmentShader:{log:G,prefix:M}})}o.deleteShader(I),o.deleteShader(L),A=new Au(o,w),N=l2(o,w)}let A;this.getUniforms=function(){return A===void 0&&F(this),A};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(w,JA)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$A++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=L,this}let b2=0;class T2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new A2(e),i.set(e,r)),r}}class A2{constructor(e){this.id=b2++,this.code=e,this.usedTimes=0}}function R2(a){return a===Er||a===Cu||a===wu}function C2(a,e,i,r,o,c){const u=new wx,h=new T2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return m.add(A),A===0?"uv":`uv${A}`}function w(A,N,W,k,K,me){const ce=k.fog,j=K.geometry,B=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=e.get(A.envMap||B,G),pe=ne&&ne.mapping===Bu?ne.image.height:null,ge=x[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&rt("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Q=U!==void 0?U.length:0;let ve=0;j.morphAttributes.position!==void 0&&(ve=1),j.morphAttributes.normal!==void 0&&(ve=2),j.morphAttributes.color!==void 0&&(ve=3);let ye,Ve,oe,Te;if(ge){const Be=Ma[ge];ye=Be.vertexShader,Ve=Be.fragmentShader}else{ye=A.vertexShader,Ve=A.fragmentShader;const Be=h.getVertexShaderStage(A),en=h.getFragmentShaderStage(A);h.update(A,Be,en),oe=Be.id,Te=en.id}const Ae=a.getRenderTarget(),qe=a.state.buffers.depth.getReversed(),at=K.isInstancedMesh===!0,et=K.isBatchedMesh===!0,ut=!!A.map,ot=!!A.matcap,gt=!!ne,_t=!!A.aoMap,ft=!!A.lightMap,Jt=!!A.bumpMap&&A.wireframe===!1,tn=!!A.normalMap,nn=!!A.displacementMap,an=!!A.emissiveMap,Vt=!!A.metalnessMap,jt=!!A.roughnessMap,Z=A.anisotropy>0,Bt=A.clearcoat>0,xt=A.dispersion>0,P=A.iridescence>0,b=A.sheen>0,te=A.transmission>0,ae=Z&&!!A.anisotropyMap,de=Bt&&!!A.clearcoatMap,Re=Bt&&!!A.clearcoatNormalMap,Ne=Bt&&!!A.clearcoatRoughnessMap,ue=P&&!!A.iridescenceMap,he=P&&!!A.iridescenceThicknessMap,Ce=b&&!!A.sheenColorMap,ze=b&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,Ie=!!A.specularColorMap,Je=!!A.specularIntensityMap,Ke=te&&!!A.transmissionMap,st=te&&!!A.thicknessMap,Y=!!A.gradientMap,De=!!A.alphaMap,xe=A.alphaTest>0,Ue=!!A.alphaHash,Ge=!!A.extensions;let Se=Ta;A.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Se=a.toneMapping);const Ye={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:ye,fragmentShader:Ve,defines:A.defines,customVertexShaderID:oe,customFragmentShaderID:Te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:et,batchingColor:et&&K._colorsTexture!==null,instancing:at,instancingColor:at&&K.instanceColor!==null,instancingMorph:at&&K.morphTexture!==null,outputColorSpace:Ae===null?a.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ut,matcap:ot,envMap:gt,envMapMode:gt&&ne.mapping,envMapCubeUVHeight:pe,aoMap:_t,lightMap:ft,bumpMap:Jt,normalMap:tn,displacementMap:nn,emissiveMap:an,normalMapObjectSpace:tn&&A.normalMapType===Ky,normalMapTangentSpace:tn&&A.normalMapType===V_,packedNormalMap:tn&&A.normalMapType===V_&&R2(A.normalMap.format),metalnessMap:Vt,roughnessMap:jt,anisotropy:Z,anisotropyMap:ae,clearcoat:Bt,clearcoatMap:de,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ne,dispersion:xt,iridescence:P,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:Je,transmission:te,transmissionMap:Ke,thicknessMap:st,gradientMap:Y,opaque:A.transparent===!1&&A.blending===To&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:xe,alphaHash:Ue,combine:A.combine,mapUv:ut&&E(A.map.channel),aoMapUv:_t&&E(A.aoMap.channel),lightMapUv:ft&&E(A.lightMap.channel),bumpMapUv:Jt&&E(A.bumpMap.channel),normalMapUv:tn&&E(A.normalMap.channel),displacementMapUv:nn&&E(A.displacementMap.channel),emissiveMapUv:an&&E(A.emissiveMap.channel),metalnessMapUv:Vt&&E(A.metalnessMap.channel),roughnessMapUv:jt&&E(A.roughnessMap.channel),anisotropyMapUv:ae&&E(A.anisotropyMap.channel),clearcoatMapUv:de&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:he&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(A.sheenRoughnessMap.channel),specularMapUv:Pe&&E(A.specularMap.channel),specularColorMapUv:Ie&&E(A.specularColorMap.channel),specularIntensityMapUv:Je&&E(A.specularIntensityMap.channel),transmissionMapUv:Ke&&E(A.transmissionMap.channel),thicknessMapUv:st&&E(A.thicknessMap.channel),alphaMapUv:De&&E(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(tn||Z),vertexNormals:!!j.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(ut||De),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||j.attributes.normal===void 0&&tn===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:qe,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ve,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&W.length>0,shadowMapType:a.shadowMap.type,toneMapping:Se,decodeVideoTexture:ut&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===qt,decodeVideoTextureEmissive:an&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===qt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ya,flipSided:A.side===hi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const W in A.defines)N.push(W),N.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(M(N,A),O(N,A),N.push(a.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function M(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function O(A,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function z(A){const N=x[A.type];let W;if(N){const k=Ma[N];W=JE.clone(k.uniforms)}else W=A.uniforms;return W}function C(A,N){let W=g.get(N);return W!==void 0?++W.usedTimes:(W=new E2(a,N,A,o),d.push(W),g.set(N,W)),W}function I(A){if(--A.usedTimes===0){const N=d.indexOf(A);d[N]=d[d.length-1],d.pop(),g.delete(A.cacheKey),A.destroy()}}function L(A){h.remove(A)}function F(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:I,releaseShaderCache:L,programs:d,dispose:F}}function w2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function D2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Pv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Iv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,E,w,y,M){let O=a[e];return O===void 0?(O={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=O):(O.id=v.id,O.object=v,O.geometry=x,O.material=E,O.materialVariant=u(v),O.groupOrder=w,O.renderOrder=v.renderOrder,O.z=y,O.group=M),e++,O}function m(v,x,E,w,y,M){const O=h(v,x,E,w,y,M);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):i.push(O)}function d(v,x,E,w,y,M){const O=h(v,x,E,w,y,M);E.transmission>0?r.unshift(O):E.transparent===!0?o.unshift(O):i.unshift(O)}function g(v,x,E){i.length>1&&i.sort(v||D2),r.length>1&&r.sort(x||Pv),o.length>1&&o.sort(x||Pv),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function L2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Iv,a.set(r,[u])):o>=c.length?(u=new Iv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function N2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Xt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":i={color:new Xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=i,i}}}function U2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let O2=0;function P2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function I2(a){const e=new N2,i=U2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ie);const o=new ie,c=new Mn,u=new Mn;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,E=0,w=0,y=0,M=0,O=0,z=0,C=0,I=0,L=0,F=0;d.sort(P2);for(let N=0,W=d.length;N<W;N++){const k=d[N],K=k.color,me=k.intensity,ce=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Er?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=K.r*me,_+=K.g*me,v+=K.b*me;else if(k.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],me);F++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,ne=i.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[x]=ne,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=k.shadow.matrix,O++}r.directional[x]=B,x++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(K).multiplyScalar(me),B.distance=ce,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[w]=B;const G=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[w]=G.matrix,k.castShadow){const ne=i.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[w]=ne,r.spotShadowMap[w]=j,C++}w++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(K).multiplyScalar(me),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=B,y++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const G=k.shadow,ne=i.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=j,r.pointShadowMatrix[E]=k.shadow.matrix,z++}r.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(me),B.groundColor.copy(k.groundColor).multiplyScalar(me),r.hemi[M]=B,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==x||A.pointLength!==E||A.spotLength!==w||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==O||A.numPointShadows!==z||A.numSpotShadows!==C||A.numSpotMaps!==I||A.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,A.directionalLength=x,A.pointLength=E,A.spotLength=w,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=O,A.numPointShadows=z,A.numSpotShadows=C,A.numSpotMaps=I,A.numLightProbes=F,r.version=O2++)}function m(d,g){let _=0,v=0,x=0,E=0,w=0;const y=g.matrixWorldInverse;for(let M=0,O=d.length;M<O;M++){const z=d[M];if(z.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(z.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(z.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Fv(a){const e=new I2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function F2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Fv(a),e.set(o,[h])):c>=u.length?(h=new Fv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`,H2=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],G2=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Bv=new Mn,Dl=new ie,Ch=new ie;function V2(a,e,i){let r=new Ux;const o=new Ft,c=new Ft,u=new _n,h=new nb,m=new ib,d={},g=i.maxTextureSize,_={[as]:hi,[hi]:as,[ya]:ya},v=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:B2,fragmentShader:z2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Wi;E.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ri(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let M=this.type;this.render=function(L,F,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Ry&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mu);const N=a.getRenderTarget(),W=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),K=a.state;K.setBlending(ns),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const me=M!==this.type;me&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(j=>j.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,j=L.length;ce<j;ce++){const B=L[ce],G=B.shadow;if(G===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ne=G.getFrameExtents();o.multiply(ne),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ne.x),o.x=c.x*ne.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ne.y),o.y=c.y*ne.y,G.mapSize.y=c.y));const pe=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=pe,G.map===null||me===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ll){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Aa(o.x,o.y,{format:Er,type:ss,minFilter:fn,magFilter:fn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new No(o.x,o.y,Ea),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=rs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wn,G.map.depthTexture.magFilter=Wn}else B.isPointLight?(G.map=new Vx(o.x),G.map.depthTexture=new jE(o.x,Ca)):(G.map=new Aa(o.x,o.y),G.map.depthTexture=new No(o.x,o.y,Ca)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=rs,this.type===Mu?(G.map.depthTexture.compareFunction=pe?Fp:Ip,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wn,G.map.depthTexture.magFilter=Wn);G.camera.updateProjectionMatrix()}const ge=G.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ge;U++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,U),a.clear();else{U===0&&(a.setRenderTarget(G.map),a.clear());const Q=G.getViewport(U);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(u)}if(B.isPointLight){const Q=G.camera,ve=G.matrix,ye=B.distance||Q.far;ye!==Q.far&&(Q.far=ye,Q.updateProjectionMatrix()),Dl.setFromMatrixPosition(B.matrixWorld),Q.position.copy(Dl),Ch.copy(Q.position),Ch.add(H2[U]),Q.up.copy(G2[U]),Q.lookAt(Ch),Q.updateMatrixWorld(),ve.makeTranslation(-Dl.x,-Dl.y,-Dl.z),Bv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Bv,Q.coordinateSystem,Q.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),C(F,A,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Ll&&O(G,A),G.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,W,k)};function O(L,F){const A=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Aa(o.x,o.y,{format:Er,type:ss})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(F,null,A,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(F,null,A,x,w,null)}function z(L,F,A,N){let W=null;const k=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)W=k;else if(W=A.isPointLight===!0?m:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=W.uuid,me=F.uuid;let ce=d[K];ce===void 0&&(ce={},d[K]=ce);let j=ce[me];j===void 0&&(j=W.clone(),ce[me]=j,F.addEventListener("dispose",I)),W=j}if(W.visible=F.visible,W.wireframe=F.wireframe,N===Ll?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:_[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const K=a.properties.get(W);K.light=A}return W}function C(L,F,A,N,W){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===Ll)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const me=e.update(L),ce=L.material;if(Array.isArray(ce)){const j=me.groups;for(let B=0,G=j.length;B<G;B++){const ne=j[B],pe=ce[ne.materialIndex];if(pe&&pe.visible){const ge=z(L,pe,N,W);L.onBeforeShadow(a,L,F,A,me,ge,ne),a.renderBufferDirect(A,null,me,ge,L,ne),L.onAfterShadow(a,L,F,A,me,ge,ne)}}}else if(ce.visible){const j=z(L,ce,N,W);L.onBeforeShadow(a,L,F,A,me,j,null),a.renderBufferDirect(A,null,me,j,L,null),L.onAfterShadow(a,L,F,A,me,j,null)}}const K=L.children;for(let me=0,ce=K.length;me<ce;me++)C(K[me],F,A,N,W)}function I(L){L.target.removeEventListener("dispose",I);for(const A in d){const N=d[A],W=L.target.uuid;W in N&&(N[W].dispose(),delete N[W])}}}function k2(a,e){function i(){let Y=!1;const De=new _n;let xe=null;const Ue=new _n(0,0,0,0);return{setMask:function(Ge){xe!==Ge&&!Y&&(a.colorMask(Ge,Ge,Ge,Ge),xe=Ge)},setLocked:function(Ge){Y=Ge},setClear:function(Ge,Se,Ye,Be,en){en===!0&&(Ge*=Be,Se*=Be,Ye*=Be),De.set(Ge,Se,Ye,Be),Ue.equals(De)===!1&&(a.clearColor(Ge,Se,Ye,Be),Ue.copy(De))},reset:function(){Y=!1,xe=null,Ue.set(-1,0,0,0)}}}function r(){let Y=!1,De=!1,xe=null,Ue=null,Ge=null;return{setReversed:function(Se){if(De!==Se){const Ye=e.get("EXT_clip_control");Se?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),De=Se;const Be=Ge;Ge=null,this.setClear(Be)}},getReversed:function(){return De},setTest:function(Se){Se?Ae(a.DEPTH_TEST):qe(a.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!Y&&(a.depthMask(Se),xe=Se)},setFunc:function(Se){if(De&&(Se=rE[Se]),Ue!==Se){switch(Se){case zh:a.depthFunc(a.NEVER);break;case Hh:a.depthFunc(a.ALWAYS);break;case Gh:a.depthFunc(a.LESS);break;case Do:a.depthFunc(a.LEQUAL);break;case Vh:a.depthFunc(a.EQUAL);break;case kh:a.depthFunc(a.GEQUAL);break;case Xh:a.depthFunc(a.GREATER);break;case Wh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ue=Se}},setLocked:function(Se){Y=Se},setClear:function(Se){Ge!==Se&&(Ge=Se,De&&(Se=1-Se),a.clearDepth(Se))},reset:function(){Y=!1,xe=null,Ue=null,Ge=null,De=!1}}}function o(){let Y=!1,De=null,xe=null,Ue=null,Ge=null,Se=null,Ye=null,Be=null,en=null;return{setTest:function(zt){Y||(zt?Ae(a.STENCIL_TEST):qe(a.STENCIL_TEST))},setMask:function(zt){De!==zt&&!Y&&(a.stencilMask(zt),De=zt)},setFunc:function(zt,Bn,ei){(xe!==zt||Ue!==Bn||Ge!==ei)&&(a.stencilFunc(zt,Bn,ei),xe=zt,Ue=Bn,Ge=ei)},setOp:function(zt,Bn,ei){(Se!==zt||Ye!==Bn||Be!==ei)&&(a.stencilOp(zt,Bn,ei),Se=zt,Ye=Bn,Be=ei)},setLocked:function(zt){Y=zt},setClear:function(zt){en!==zt&&(a.clearStencil(zt),en=zt)},reset:function(){Y=!1,De=null,xe=null,Ue=null,Ge=null,Se=null,Ye=null,Be=null,en=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,E=[],w=null,y=!1,M=null,O=null,z=null,C=null,I=null,L=null,F=null,A=new Xt(0,0,0),N=0,W=!1,k=null,K=null,me=null,ce=null,j=null;const B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const pe=a.getParameter(a.VERSION);pe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(pe)[1]),G=ne>=1):pe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),G=ne>=2);let ge=null,U={};const Q=a.getParameter(a.SCISSOR_BOX),ve=a.getParameter(a.VIEWPORT),ye=new _n().fromArray(Q),Ve=new _n().fromArray(ve);function oe(Y,De,xe,Ue){const Ge=new Uint8Array(4),Se=a.createTexture();a.bindTexture(Y,Se),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<xe;Ye++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Ue,0,a.RGBA,a.UNSIGNED_BYTE,Ge):a.texImage2D(De+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ge);return Se}const Te={};Te[a.TEXTURE_2D]=oe(a.TEXTURE_2D,a.TEXTURE_2D,1),Te[a.TEXTURE_CUBE_MAP]=oe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[a.TEXTURE_2D_ARRAY]=oe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Te[a.TEXTURE_3D]=oe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ae(a.DEPTH_TEST),u.setFunc(Do),Jt(!1),tn(z_),Ae(a.CULL_FACE),_t(ns);function Ae(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function qe(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function at(Y,De){return v[Y]!==De?(a.bindFramebuffer(Y,De),v[Y]=De,Y===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=De),Y===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=De),!0):!1}function et(Y,De){let xe=E,Ue=!1;if(Y){xe=x.get(De),xe===void 0&&(xe=[],x.set(De,xe));const Ge=Y.textures;if(xe.length!==Ge.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Se=0,Ye=Ge.length;Se<Ye;Se++)xe[Se]=a.COLOR_ATTACHMENT0+Se;xe.length=Ge.length,Ue=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Ue=!0);Ue&&a.drawBuffers(xe)}function ut(Y){return w!==Y?(a.useProgram(Y),w=Y,!0):!1}const ot={[vr]:a.FUNC_ADD,[wy]:a.FUNC_SUBTRACT,[Dy]:a.FUNC_REVERSE_SUBTRACT};ot[Ly]=a.MIN,ot[Ny]=a.MAX;const gt={[Uy]:a.ZERO,[Oy]:a.ONE,[Py]:a.SRC_COLOR,[Fh]:a.SRC_ALPHA,[Gy]:a.SRC_ALPHA_SATURATE,[zy]:a.DST_COLOR,[Fy]:a.DST_ALPHA,[Iy]:a.ONE_MINUS_SRC_COLOR,[Bh]:a.ONE_MINUS_SRC_ALPHA,[Hy]:a.ONE_MINUS_DST_COLOR,[By]:a.ONE_MINUS_DST_ALPHA,[Vy]:a.CONSTANT_COLOR,[ky]:a.ONE_MINUS_CONSTANT_COLOR,[Xy]:a.CONSTANT_ALPHA,[Wy]:a.ONE_MINUS_CONSTANT_ALPHA};function _t(Y,De,xe,Ue,Ge,Se,Ye,Be,en,zt){if(Y===ns){y===!0&&(qe(a.BLEND),y=!1);return}if(y===!1&&(Ae(a.BLEND),y=!0),Y!==Cy){if(Y!==M||zt!==W){if((O!==vr||I!==vr)&&(a.blendEquation(a.FUNC_ADD),O=vr,I=vr),zt)switch(Y){case To:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ih:a.blendFunc(a.ONE,a.ONE);break;case H_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case G_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case To:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ih:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case H_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}z=null,C=null,L=null,F=null,A.set(0,0,0),N=0,M=Y,W=zt}return}Ge=Ge||De,Se=Se||xe,Ye=Ye||Ue,(De!==O||Ge!==I)&&(a.blendEquationSeparate(ot[De],ot[Ge]),O=De,I=Ge),(xe!==z||Ue!==C||Se!==L||Ye!==F)&&(a.blendFuncSeparate(gt[xe],gt[Ue],gt[Se],gt[Ye]),z=xe,C=Ue,L=Se,F=Ye),(Be.equals(A)===!1||en!==N)&&(a.blendColor(Be.r,Be.g,Be.b,en),A.copy(Be),N=en),M=Y,W=!1}function ft(Y,De){Y.side===ya?qe(a.CULL_FACE):Ae(a.CULL_FACE);let xe=Y.side===hi;De&&(xe=!xe),Jt(xe),Y.blending===To&&Y.transparent===!1?_t(ns):_t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ue=Y.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),an(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ae(a.SAMPLE_ALPHA_TO_COVERAGE):qe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(Y){k!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),k=Y)}function tn(Y){Y!==Ty?(Ae(a.CULL_FACE),Y!==K&&(Y===z_?a.cullFace(a.BACK):Y===Ay?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):qe(a.CULL_FACE),K=Y}function nn(Y){Y!==me&&(G&&a.lineWidth(Y),me=Y)}function an(Y,De,xe){Y?(Ae(a.POLYGON_OFFSET_FILL),(ce!==De||j!==xe)&&(ce=De,j=xe,u.getReversed()&&(De=-De),a.polygonOffset(De,xe))):qe(a.POLYGON_OFFSET_FILL)}function Vt(Y){Y?Ae(a.SCISSOR_TEST):qe(a.SCISSOR_TEST)}function jt(Y){Y===void 0&&(Y=a.TEXTURE0+B-1),ge!==Y&&(a.activeTexture(Y),ge=Y)}function Z(Y,De,xe){xe===void 0&&(ge===null?xe=a.TEXTURE0+B-1:xe=ge);let Ue=U[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},U[xe]=Ue),(Ue.type!==Y||Ue.texture!==De)&&(ge!==xe&&(a.activeTexture(xe),ge=xe),a.bindTexture(Y,De||Te[Y]),Ue.type=Y,Ue.texture=De)}function Bt(){const Y=U[ge];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function xt(){try{a.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function b(){try{a.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function te(){try{a.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ae(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function de(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Re(){try{a.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ne(){try{a.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ue(){try{a.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function he(){try{a.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ce(Y){return _[Y]!==void 0?_[Y]:a.getParameter(Y)}function ze(Y,De){_[Y]!==De&&(a.pixelStorei(Y,De),_[Y]=De)}function Pe(Y){ye.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),ye.copy(Y))}function Ie(Y){Ve.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Ve.copy(Y))}function Je(Y,De){let xe=d.get(De);xe===void 0&&(xe=new WeakMap,d.set(De,xe));let Ue=xe.get(Y);Ue===void 0&&(Ue=a.getUniformBlockIndex(De,Y.name),xe.set(Y,Ue))}function Ke(Y,De){const Ue=d.get(De).get(Y);m.get(De)!==Ue&&(a.uniformBlockBinding(De,Ue,Y.__bindingPointIndex),m.set(De,Ue))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},ge=null,U={},v={},x=new WeakMap,E=[],w=null,y=!1,M=null,O=null,z=null,C=null,I=null,L=null,F=null,A=new Xt(0,0,0),N=0,W=!1,k=null,K=null,me=null,ce=null,j=null,ye.set(0,0,a.canvas.width,a.canvas.height),Ve.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ae,disable:qe,bindFramebuffer:at,drawBuffers:et,useProgram:ut,setBlending:_t,setMaterial:ft,setFlipSided:Jt,setCullFace:tn,setLineWidth:nn,setPolygonOffset:an,setScissorTest:Vt,activeTexture:jt,bindTexture:Z,unbindTexture:Bt,compressedTexImage2D:xt,compressedTexImage3D:P,texImage2D:ue,texImage3D:he,pixelStorei:ze,getParameter:Ce,updateUBOMapping:Je,uniformBlockBinding:Ke,texStorage2D:Re,texStorage3D:Ne,texSubImage2D:b,texSubImage3D:te,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Pe,viewport:Ie,reset:st}}function X2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ft,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,b){return E?new OffscreenCanvas(P,b):Uu("canvas")}function y(P,b,te){let ae=1;const de=xt(P);if((de.width>te||de.height>te)&&(ae=te/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Re=Math.floor(ae*de.width),Ne=Math.floor(ae*de.height);v===void 0&&(v=w(Re,Ne));const ue=b?w(Re,Ne):v;return ue.width=Re,ue.height=Ne,ue.getContext("2d").drawImage(P,0,0,Re,Ne),rt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Re+"x"+Ne+")."),ue}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function M(P){return P.generateMipmaps}function O(P){a.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(P,b,te,ae,de,Re=!1){if(P!==null){if(a[P]!==void 0)return a[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ne;ae&&(Ne=e.get("EXT_texture_norm16"),Ne||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===a.RED&&(te===a.FLOAT&&(ue=a.R32F),te===a.HALF_FLOAT&&(ue=a.R16F),te===a.UNSIGNED_BYTE&&(ue=a.R8),te===a.UNSIGNED_SHORT&&Ne&&(ue=Ne.R16_EXT),te===a.SHORT&&Ne&&(ue=Ne.R16_SNORM_EXT)),b===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.R8UI),te===a.UNSIGNED_SHORT&&(ue=a.R16UI),te===a.UNSIGNED_INT&&(ue=a.R32UI),te===a.BYTE&&(ue=a.R8I),te===a.SHORT&&(ue=a.R16I),te===a.INT&&(ue=a.R32I)),b===a.RG&&(te===a.FLOAT&&(ue=a.RG32F),te===a.HALF_FLOAT&&(ue=a.RG16F),te===a.UNSIGNED_BYTE&&(ue=a.RG8),te===a.UNSIGNED_SHORT&&Ne&&(ue=Ne.RG16_EXT),te===a.SHORT&&Ne&&(ue=Ne.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.RG8UI),te===a.UNSIGNED_SHORT&&(ue=a.RG16UI),te===a.UNSIGNED_INT&&(ue=a.RG32UI),te===a.BYTE&&(ue=a.RG8I),te===a.SHORT&&(ue=a.RG16I),te===a.INT&&(ue=a.RG32I)),b===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.RGB8UI),te===a.UNSIGNED_SHORT&&(ue=a.RGB16UI),te===a.UNSIGNED_INT&&(ue=a.RGB32UI),te===a.BYTE&&(ue=a.RGB8I),te===a.SHORT&&(ue=a.RGB16I),te===a.INT&&(ue=a.RGB32I)),b===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(ue=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(ue=a.RGBA16UI),te===a.UNSIGNED_INT&&(ue=a.RGBA32UI),te===a.BYTE&&(ue=a.RGBA8I),te===a.SHORT&&(ue=a.RGBA16I),te===a.INT&&(ue=a.RGBA32I)),b===a.RGB&&(te===a.UNSIGNED_SHORT&&Ne&&(ue=Ne.RGB16_EXT),te===a.SHORT&&Ne&&(ue=Ne.RGB16_SNORM_EXT),te===a.UNSIGNED_INT_5_9_9_9_REV&&(ue=a.RGB9_E5),te===a.UNSIGNED_INT_10F_11F_11F_REV&&(ue=a.R11F_G11F_B10F)),b===a.RGBA){const he=Re?Lu:Ct.getTransfer(de);te===a.FLOAT&&(ue=a.RGBA32F),te===a.HALF_FLOAT&&(ue=a.RGBA16F),te===a.UNSIGNED_BYTE&&(ue=he===qt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT&&Ne&&(ue=Ne.RGBA16_EXT),te===a.SHORT&&Ne&&(ue=Ne.RGBA16_SNORM_EXT),te===a.UNSIGNED_SHORT_4_4_4_4&&(ue=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(ue=a.RGB5_A1)}return(ue===a.R16F||ue===a.R32F||ue===a.RG16F||ue===a.RG32F||ue===a.RGBA16F||ue===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(P,b){let te;return P?b===null||b===Ca||b===Hl?te=a.DEPTH24_STENCIL8:b===Ea?te=a.DEPTH32F_STENCIL8:b===zl&&(te=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ca||b===Hl?te=a.DEPTH_COMPONENT24:b===Ea?te=a.DEPTH_COMPONENT32F:b===zl&&(te=a.DEPTH_COMPONENT16),te}function L(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wn&&P.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function F(P){const b=P.target;b.removeEventListener("dispose",F),N(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function A(P){const b=P.target;b.removeEventListener("dispose",A),k(b)}function N(P){const b=r.get(P);if(b.__webglInit===void 0)return;const te=P.source,ae=x.get(te);if(ae){const de=ae[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&W(P),Object.keys(ae).length===0&&x.delete(te)}r.remove(P)}function W(P){const b=r.get(P);a.deleteTexture(b.__webglTexture);const te=P.source,ae=x.get(te);delete ae[b.__cacheKey],u.memory.textures--}function k(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let de=0;de<b.__webglFramebuffer[ae].length;de++)a.deleteFramebuffer(b.__webglFramebuffer[ae][de]);else a.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)a.deleteFramebuffer(b.__webglFramebuffer[ae]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=P.textures;for(let ae=0,de=te.length;ae<de;ae++){const Re=r.get(te[ae]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(te[ae])}r.remove(P)}let K=0;function me(){K=0}function ce(){return K}function j(P){K=P}function B(){const P=K;return P>=o.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),K+=1,P}function G(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ne(P,b){const te=r.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&te.__version!==P.version){const ae=P.image;if(ae===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(te,P,b);return}}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+b)}function pe(P,b){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){qe(te,P,b);return}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+b)}function ge(P,b){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){qe(te,P,b);return}i.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+b)}function U(P,b){const te=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&te.__version!==P.version){at(te,P,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+b)}const Q={[Yh]:a.REPEAT,[aa]:a.CLAMP_TO_EDGE,[qh]:a.MIRRORED_REPEAT},ve={[Wn]:a.NEAREST,[jy]:a.NEAREST_MIPMAP_NEAREST,[Jc]:a.NEAREST_MIPMAP_LINEAR,[fn]:a.LINEAR,[Qd]:a.LINEAR_MIPMAP_NEAREST,[Vs]:a.LINEAR_MIPMAP_LINEAR},ye={[Qy]:a.NEVER,[nE]:a.ALWAYS,[Jy]:a.LESS,[Ip]:a.LEQUAL,[$y]:a.EQUAL,[Fp]:a.GEQUAL,[eE]:a.GREATER,[tE]:a.NOTEQUAL};function Ve(P,b){if(b.type===Ea&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fn||b.magFilter===Qd||b.magFilter===Jc||b.magFilter===Vs||b.minFilter===fn||b.minFilter===Qd||b.minFilter===Jc||b.minFilter===Vs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Q[b.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Q[b.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Q[b.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ve[b.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wn||b.minFilter!==Jc&&b.minFilter!==Vs||b.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function oe(P,b){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",F));const ae=b.source;let de=x.get(ae);de===void 0&&(de={},x.set(ae,de));const Re=G(b);if(Re!==P.__cacheKey){de[Re]===void 0&&(de[Re]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,te=!0),de[Re].usedTimes++;const Ne=de[P.__cacheKey];Ne!==void 0&&(de[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&W(b)),P.__cacheKey=Re,P.__webglTexture=de[Re].texture}return te}function Te(P,b,te){return Math.floor(Math.floor(P/te)/b)}function Ae(P,b,te,ae){const Re=P.updateRanges;if(Re.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,te,ae,b.data);else{Re.sort((ze,Pe)=>ze.start-Pe.start);let Ne=0;for(let ze=1;ze<Re.length;ze++){const Pe=Re[Ne],Ie=Re[ze],Je=Pe.start+Pe.count,Ke=Te(Ie.start,b.width,4),st=Te(Pe.start,b.width,4);Ie.start<=Je+1&&Ke===st&&Te(Ie.start+Ie.count-1,b.width,4)===Ke?Pe.count=Math.max(Pe.count,Ie.start+Ie.count-Pe.start):(++Ne,Re[Ne]=Ie)}Re.length=Ne+1;const ue=i.getParameter(a.UNPACK_ROW_LENGTH),he=i.getParameter(a.UNPACK_SKIP_PIXELS),Ce=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let ze=0,Pe=Re.length;ze<Pe;ze++){const Ie=Re[ze],Je=Math.floor(Ie.start/4),Ke=Math.ceil(Ie.count/4),st=Je%b.width,Y=Math.floor(Je/b.width),De=Ke,xe=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,st),i.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,st,Y,De,xe,te,ae,b.data)}P.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,ue),i.pixelStorei(a.UNPACK_SKIP_PIXELS,he),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ce)}}function qe(P,b,te){let ae=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=a.TEXTURE_3D);const de=oe(P,b),Re=b.source;i.bindTexture(ae,P.__webglTexture,a.TEXTURE0+te);const Ne=r.get(Re);if(Re.version!==Ne.__version||de===!0){if(i.activeTexture(a.TEXTURE0+te),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const xe=Ct.getPrimaries(Ct.workingColorSpace),Ue=b.colorSpace===Gs?null:Ct.getPrimaries(b.colorSpace),Ge=b.colorSpace===Gs||xe===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let he=y(b.image,!1,o.maxTextureSize);he=Bt(b,he);const Ce=c.convert(b.format,b.colorSpace),ze=c.convert(b.type);let Pe=C(b.internalFormat,Ce,ze,b.normalized,b.colorSpace,b.isVideoTexture);Ve(ae,b);let Ie;const Je=b.mipmaps,Ke=b.isVideoTexture!==!0,st=Ne.__version===void 0||de===!0,Y=Re.dataReady,De=L(b,he);if(b.isDepthTexture)Pe=I(b.format===Mr,b.type),st&&(Ke?i.texStorage2D(a.TEXTURE_2D,1,Pe,he.width,he.height):i.texImage2D(a.TEXTURE_2D,0,Pe,he.width,he.height,0,Ce,ze,null));else if(b.isDataTexture)if(Je.length>0){Ke&&st&&i.texStorage2D(a.TEXTURE_2D,De,Pe,Je[0].width,Je[0].height);for(let xe=0,Ue=Je.length;xe<Ue;xe++)Ie=Je[xe],Ke?Y&&i.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Ce,ze,Ie.data):i.texImage2D(a.TEXTURE_2D,xe,Pe,Ie.width,Ie.height,0,Ce,ze,Ie.data);b.generateMipmaps=!1}else Ke?(st&&i.texStorage2D(a.TEXTURE_2D,De,Pe,he.width,he.height),Y&&Ae(b,he,Ce,ze)):i.texImage2D(a.TEXTURE_2D,0,Pe,he.width,he.height,0,Ce,ze,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Pe,Je[0].width,Je[0].height,he.depth);for(let xe=0,Ue=Je.length;xe<Ue;xe++)if(Ie=Je[xe],b.format!==sa)if(Ce!==null)if(Ke){if(Y)if(b.layerUpdates.size>0){const Ge=mv(Ie.width,Ie.height,b.format,b.type);for(const Se of b.layerUpdates){const Ye=Ie.data.subarray(Se*Ge/Ie.data.BYTES_PER_ELEMENT,(Se+1)*Ge/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Se,Ie.width,Ie.height,1,Ce,Ye)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,he.depth,Ce,Ie.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Pe,Ie.width,Ie.height,he.depth,0,Ie.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Y&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,he.depth,Ce,ze,Ie.data):i.texImage3D(a.TEXTURE_2D_ARRAY,xe,Pe,Ie.width,Ie.height,he.depth,0,Ce,ze,Ie.data)}else{Ke&&st&&i.texStorage2D(a.TEXTURE_2D,De,Pe,Je[0].width,Je[0].height);for(let xe=0,Ue=Je.length;xe<Ue;xe++)Ie=Je[xe],b.format!==sa?Ce!==null?Ke?Y&&i.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Ce,Ie.data):i.compressedTexImage2D(a.TEXTURE_2D,xe,Pe,Ie.width,Ie.height,0,Ie.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Y&&i.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Ce,ze,Ie.data):i.texImage2D(a.TEXTURE_2D,xe,Pe,Ie.width,Ie.height,0,Ce,ze,Ie.data)}else if(b.isDataArrayTexture)if(Ke){if(st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Pe,he.width,he.height,he.depth),Y)if(b.layerUpdates.size>0){const xe=mv(he.width,he.height,b.format,b.type);for(const Ue of b.layerUpdates){const Ge=he.data.subarray(Ue*xe/he.data.BYTES_PER_ELEMENT,(Ue+1)*xe/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ue,he.width,he.height,1,Ce,ze,Ge)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,ze,he.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,Ce,ze,he.data);else if(b.isData3DTexture)Ke?(st&&i.texStorage3D(a.TEXTURE_3D,De,Pe,he.width,he.height,he.depth),Y&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,ze,he.data)):i.texImage3D(a.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,Ce,ze,he.data);else if(b.isFramebufferTexture){if(st)if(Ke)i.texStorage2D(a.TEXTURE_2D,De,Pe,he.width,he.height);else{let xe=he.width,Ue=he.height;for(let Ge=0;Ge<De;Ge++)i.texImage2D(a.TEXTURE_2D,Ge,Pe,xe,Ue,0,Ce,ze,null),xe>>=1,Ue>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),he.parentNode!==xe){xe.appendChild(he),_.add(b),xe.onpaint=Ue=>{const Ge=Ue.changedElements;for(const Se of _)Ge.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,he);else{const Ge=a.RGBA,Se=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ge,Se,Ye,he)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Je.length>0){if(Ke&&st){const xe=xt(Je[0]);i.texStorage2D(a.TEXTURE_2D,De,Pe,xe.width,xe.height)}for(let xe=0,Ue=Je.length;xe<Ue;xe++)Ie=Je[xe],Ke?Y&&i.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ce,ze,Ie):i.texImage2D(a.TEXTURE_2D,xe,Pe,Ce,ze,Ie);b.generateMipmaps=!1}else if(Ke){if(st){const xe=xt(he);i.texStorage2D(a.TEXTURE_2D,De,Pe,xe.width,xe.height)}Y&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,ze,he)}else i.texImage2D(a.TEXTURE_2D,0,Pe,Ce,ze,he);M(b)&&O(ae),Ne.__version=Re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function at(P,b,te){if(b.image.length!==6)return;const ae=oe(P,b),de=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+te);const Re=r.get(de);if(de.version!==Re.__version||ae===!0){i.activeTexture(a.TEXTURE0+te);const Ne=Ct.getPrimaries(Ct.workingColorSpace),ue=b.colorSpace===Gs?null:Ct.getPrimaries(b.colorSpace),he=b.colorSpace===Gs||Ne===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let Se=0;Se<6;Se++)!Ce&&!ze?Pe[Se]=y(b.image[Se],!0,o.maxCubemapSize):Pe[Se]=ze?b.image[Se].image:b.image[Se],Pe[Se]=Bt(b,Pe[Se]);const Ie=Pe[0],Je=c.convert(b.format,b.colorSpace),Ke=c.convert(b.type),st=C(b.internalFormat,Je,Ke,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,De=Re.__version===void 0||ae===!0,xe=de.dataReady;let Ue=L(b,Ie);Ve(a.TEXTURE_CUBE_MAP,b);let Ge;if(Ce){Y&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,st,Ie.width,Ie.height);for(let Se=0;Se<6;Se++){Ge=Pe[Se].mipmaps;for(let Ye=0;Ye<Ge.length;Ye++){const Be=Ge[Ye];b.format!==sa?Je!==null?Y?xe&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,Be.width,Be.height,Je,Be.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,st,Be.width,Be.height,0,Be.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,Be.width,Be.height,Je,Ke,Be.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,st,Be.width,Be.height,0,Je,Ke,Be.data)}}}else{if(Ge=b.mipmaps,Y&&De){Ge.length>0&&Ue++;const Se=xt(Pe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ue,st,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ze){Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Pe[Se].width,Pe[Se].height,Je,Ke,Pe[Se].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,Pe[Se].width,Pe[Se].height,0,Je,Ke,Pe[Se].data);for(let Ye=0;Ye<Ge.length;Ye++){const en=Ge[Ye].image[Se].image;Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,en.width,en.height,Je,Ke,en.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,st,en.width,en.height,0,Je,Ke,en.data)}}else{Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Je,Ke,Pe[Se]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,Je,Ke,Pe[Se]);for(let Ye=0;Ye<Ge.length;Ye++){const Be=Ge[Ye];Y?xe&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,Je,Ke,Be.image[Se]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,st,Je,Ke,Be.image[Se])}}}M(b)&&O(a.TEXTURE_CUBE_MAP),Re.__version=de.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function et(P,b,te,ae,de,Re){const Ne=c.convert(te.format,te.colorSpace),ue=c.convert(te.type),he=C(te.internalFormat,Ne,ue,te.normalized,te.colorSpace),Ce=r.get(b),ze=r.get(te);if(ze.__renderTarget=b,!Ce.__hasExternalTextures){const Pe=Math.max(1,b.width>>Re),Ie=Math.max(1,b.height>>Re);de===a.TEXTURE_3D||de===a.TEXTURE_2D_ARRAY?i.texImage3D(de,Re,he,Pe,Ie,b.depth,0,Ne,ue,null):i.texImage2D(de,Re,he,Pe,Ie,0,Ne,ue,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),jt(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,de,ze.__webglTexture,0,Vt(b)):(de===a.TEXTURE_2D||de>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,de,ze.__webglTexture,Re),i.bindFramebuffer(a.FRAMEBUFFER,null)}function ut(P,b,te){if(a.bindRenderbuffer(a.RENDERBUFFER,P),b.depthBuffer){const ae=b.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,Re=I(b.stencilBuffer,de),Ne=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;jt(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Vt(b),Re,b.width,b.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Vt(b),Re,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Re,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ne,a.RENDERBUFFER,P)}else{const ae=b.textures;for(let de=0;de<ae.length;de++){const Re=ae[de],Ne=c.convert(Re.format,Re.colorSpace),ue=c.convert(Re.type),he=C(Re.internalFormat,Ne,ue,Re.normalized,Re.colorSpace);jt(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Vt(b),he,b.width,b.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Vt(b),he,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,he,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ot(P,b,te){const ae=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(b.depthTexture);if(de.__renderTarget=b,(!de.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(de.__webglInit===void 0&&(de.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),Ve(a.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),ze=c.convert(b.depthTexture.type);let Pe;b.depthTexture.format===rs?Pe=a.DEPTH_COMPONENT24:b.depthTexture.format===Mr&&(Pe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,b.width,b.height,0,Ce,ze,null)}}else ne(b.depthTexture,0);const Re=de.__webglTexture,Ne=Vt(b),ue=ae?a.TEXTURE_CUBE_MAP_POSITIVE_X+te:a.TEXTURE_2D,he=b.depthTexture.format===Mr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===rs)jt(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ue,Re,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,he,ue,Re,0);else if(b.depthTexture.format===Mr)jt(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ue,Re,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,he,ue,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(P){const b=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=ae}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(te)for(let ae=0;ae<6;ae++)ot(b.__webglFramebuffer[ae],P,ae);else{const ae=P.texture.mipmaps;ae&&ae.length>0?ot(b.__webglFramebuffer[0],P,0):ot(b.__webglFramebuffer,P,0)}else if(te){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=a.createRenderbuffer(),ut(b.__webglDepthbuffer[ae],P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=b.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,Re)}}else{const ae=P.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),ut(b.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,Re)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(P,b,te){const ae=r.get(P);b!==void 0&&et(ae.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&gt(P)}function ft(P){const b=P.texture,te=r.get(P),ae=r.get(b);P.addEventListener("dispose",A);const de=P.textures,Re=P.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=b.version,u.memory.textures++),Re){te.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[ue]=[];for(let he=0;he<b.mipmaps.length;he++)te.__webglFramebuffer[ue][he]=a.createFramebuffer()}else te.__webglFramebuffer[ue]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)te.__webglFramebuffer[ue]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Ne)for(let ue=0,he=de.length;ue<he;ue++){const Ce=r.get(de[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&jt(P)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ue=0;ue<de.length;ue++){const he=de[ue];te.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);const Ce=c.convert(he.format,he.colorSpace),ze=c.convert(he.type),Pe=C(he.internalFormat,Ce,ze,he.normalized,he.colorSpace,P.isXRRenderTarget===!0),Ie=Vt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Pe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,te.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),ut(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){i.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(a.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)et(te.__webglFramebuffer[ue][he],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else et(te.__webglFramebuffer[ue],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(b)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let ue=0,he=de.length;ue<he;ue++){const Ce=de[ue],ze=r.get(Ce);let Pe=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Pe,ze.__webglTexture),Ve(Pe,Ce),et(te.__webglFramebuffer,P,Ce,a.COLOR_ATTACHMENT0+ue,Pe,0),M(Ce)&&O(Pe)}i.unbindTexture()}else{let ue=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(ue,ae.__webglTexture),Ve(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)et(te.__webglFramebuffer[he],P,b,a.COLOR_ATTACHMENT0,ue,he);else et(te.__webglFramebuffer,P,b,a.COLOR_ATTACHMENT0,ue,0);M(b)&&O(ue),i.unbindTexture()}P.depthBuffer&&gt(P)}function Jt(P){const b=P.textures;for(let te=0,ae=b.length;te<ae;te++){const de=b[te];if(M(de)){const Re=z(P),Ne=r.get(de).__webglTexture;i.bindTexture(Re,Ne),O(Re),i.unbindTexture()}}}const tn=[],nn=[];function an(P){if(P.samples>0){if(jt(P)===!1){const b=P.textures,te=P.width,ae=P.height;let de=a.COLOR_BUFFER_BIT;const Re=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=r.get(P),ue=b.length>1;if(ue)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const he=P.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=a.STENCIL_BUFFER_BIT)),ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const ze=r.get(b[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ze,0)}a.blitFramebuffer(0,0,te,ae,0,0,te,ae,de,a.NEAREST),m===!0&&(tn.length=0,nn.length=0,tn.push(a.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tn.push(Re),nn.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,nn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,tn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const ze=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,ze,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Vt(P){return Math.min(o.maxSamples,P.samples)}function jt(P){const b=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(P){const b=u.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Bt(P,b){const te=P.colorSpace,ae=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Du&&te!==Gs&&(Ct.getTransfer(te)===qt?(ae!==sa||de!==ki)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",te)),b}function xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=me,this.getTextureUnits=ce,this.setTextureUnits=j,this.setTexture2D=ne,this.setTexture2DArray=pe,this.setTexture3D=ge,this.setTextureCube=U,this.rebindTextures=_t,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function W2(a,e){function i(r,o=Gs){let c;const u=Ct.getTransfer(o);if(r===ki)return a.UNSIGNED_BYTE;if(r===Lp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Np)return a.UNSIGNED_SHORT_5_5_5_1;if(r===yx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Ex)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Sx)return a.BYTE;if(r===Mx)return a.SHORT;if(r===zl)return a.UNSIGNED_SHORT;if(r===Dp)return a.INT;if(r===Ca)return a.UNSIGNED_INT;if(r===Ea)return a.FLOAT;if(r===ss)return a.HALF_FLOAT;if(r===bx)return a.ALPHA;if(r===Tx)return a.RGB;if(r===sa)return a.RGBA;if(r===rs)return a.DEPTH_COMPONENT;if(r===Mr)return a.DEPTH_STENCIL;if(r===Ax)return a.RED;if(r===Up)return a.RED_INTEGER;if(r===Er)return a.RG;if(r===Op)return a.RG_INTEGER;if(r===Pp)return a.RGBA_INTEGER;if(r===yu||r===Eu||r===bu||r===Tu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Zh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===jh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===ep||r===tp||r===np||r===Cu||r===ip)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Jh||r===$h)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ep)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===tp)return c.COMPRESSED_R11_EAC;if(r===np)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Cu)return c.COMPRESSED_RG11_EAC;if(r===ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ap)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===op)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===up)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_p)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vp||r===xp||r===Sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===vp)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mp||r===yp||r===wu||r===Ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Mp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const Y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q2=`
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

}`;class j2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ix(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Yi({vertexShader:Y2,fragmentShader:q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new ks(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z2 extends Tr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,E=null;const w=typeof XRWebGLBinding<"u",y=new j2,M={},O=i.getContextAttributes();let z=null,C=null;const I=[],L=[],F=new Ft;let A=null;const N=new Vi;N.viewport=new _n;const W=new Vi;W.viewport=new _n;const k=[N,W],K=new sb;let me=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Te=I[oe];return Te===void 0&&(Te=new ih,I[oe]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(oe){let Te=I[oe];return Te===void 0&&(Te=new ih,I[oe]=Te),Te.getGripSpace()},this.getHand=function(oe){let Te=I[oe];return Te===void 0&&(Te=new ih,I[oe]=Te),Te.getHandSpace()};function j(oe){const Te=L.indexOf(oe.inputSource);if(Te===-1)return;const Ae=I[Te];Ae!==void 0&&(Ae.update(oe.inputSource,oe.frame,d||u),Ae.dispatchEvent({type:oe.type,data:oe.inputSource}))}function B(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",G);for(let oe=0;oe<I.length;oe++){const Te=L[oe];Te!==null&&(L[oe]=null,I[oe].disconnect(Te))}me=null,ce=null,y.reset();for(const oe in M)delete M[oe];e.setRenderTarget(z),x=null,v=null,_=null,o=null,C=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",B),o.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,qe=null,at=null;O.depth&&(at=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=O.stencil?Mr:rs,qe=O.stencil?Hl:Ca);const et={colorFormat:i.RGBA8,depthFormat:at,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(et),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Aa(v.textureWidth,v.textureHeight,{format:sa,type:ki,depthTexture:new No(v.textureWidth,v.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Ae),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Aa(x.framebufferWidth,x.framebufferHeight,{format:sa,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Ve.setContext(o),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(oe){for(let Te=0;Te<oe.removed.length;Te++){const Ae=oe.removed[Te],qe=L.indexOf(Ae);qe>=0&&(L[qe]=null,I[qe].disconnect(Ae))}for(let Te=0;Te<oe.added.length;Te++){const Ae=oe.added[Te];let qe=L.indexOf(Ae);if(qe===-1){for(let et=0;et<I.length;et++)if(et>=L.length){L.push(Ae),qe=et;break}else if(L[et]===null){L[et]=Ae,qe=et;break}if(qe===-1)break}const at=I[qe];at&&at.connect(Ae)}}const ne=new ie,pe=new ie;function ge(oe,Te,Ae){ne.setFromMatrixPosition(Te.matrixWorld),pe.setFromMatrixPosition(Ae.matrixWorld);const qe=ne.distanceTo(pe),at=Te.projectionMatrix.elements,et=Ae.projectionMatrix.elements,ut=at[14]/(at[10]-1),ot=at[14]/(at[10]+1),gt=(at[9]+1)/at[5],_t=(at[9]-1)/at[5],ft=(at[8]-1)/at[0],Jt=(et[8]+1)/et[0],tn=ut*ft,nn=ut*Jt,an=qe/(-ft+Jt),Vt=an*-ft;if(Te.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Vt),oe.translateZ(an),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),at[10]===-1)oe.projectionMatrix.copy(Te.projectionMatrix),oe.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const jt=ut+an,Z=ot+an,Bt=tn-Vt,xt=nn+(qe-Vt),P=gt*ot/Z*jt,b=_t*ot/Z*jt;oe.projectionMatrix.makePerspective(Bt,xt,P,b,jt,Z),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function U(oe,Te){Te===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Te.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let Te=oe.near,Ae=oe.far;y.texture!==null&&(y.depthNear>0&&(Te=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),K.near=W.near=N.near=Te,K.far=W.far=N.far=Ae,(me!==K.near||ce!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),me=K.near,ce=K.far),K.layers.mask=oe.layers.mask|6,N.layers.mask=K.layers.mask&-5,W.layers.mask=K.layers.mask&-3;const qe=oe.parent,at=K.cameras;U(K,qe);for(let et=0;et<at.length;et++)U(at[et],qe);at.length===2?ge(K,N,W):K.projectionMatrix.copy(N.projectionMatrix),Q(oe,K,qe)};function Q(oe,Te,Ae){Ae===null?oe.matrix.copy(Te.matrixWorld):(oe.matrix.copy(Ae.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Te.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Te.projectionMatrix),oe.projectionMatrixInverse.copy(Te.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Gl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(oe){m=oe,v!==null&&(v.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(oe){return M[oe]};let ve=null;function ye(oe,Te){if(g=Te.getViewerPose(d||u),E=Te,g!==null){const Ae=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let qe=!1;Ae.length!==K.cameras.length&&(K.cameras.length=0,qe=!0);for(let ot=0;ot<Ae.length;ot++){const gt=Ae[ot];let _t=null;if(x!==null)_t=x.getViewport(gt);else{const Jt=_.getViewSubImage(v,gt);_t=Jt.viewport,ot===0&&(e.setRenderTargetTextures(C,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(C))}let ft=k[ot];ft===void 0&&(ft=new Vi,ft.layers.enable(ot),ft.viewport=new _n,k[ot]=ft),ft.matrix.fromArray(gt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(gt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(_t.x,_t.y,_t.width,_t.height),ot===0&&(K.matrix.copy(ft.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),qe===!0&&K.cameras.push(ft)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ot=_.getDepthInformation(Ae[0]);ot&&ot.isValid&&ot.texture&&y.init(ot,o.renderState)}if(at&&at.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ot=0;ot<Ae.length;ot++){const gt=Ae[ot].camera;if(gt){let _t=M[gt];_t||(_t=new Ix,M[gt]=_t);const ft=_.getCameraImage(gt);_t.sourceTexture=ft}}}}for(let Ae=0;Ae<I.length;Ae++){const qe=L[Ae],at=I[Ae];qe!==null&&at!==void 0&&at.update(qe,Te,d||u)}ve&&ve(oe,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),E=null}const Ve=new Hx;Ve.setAnimationLoop(ye),this.setAnimationLoop=function(oe){ve=oe},this.dispose=function(){}}}const K2=new Mn,qx=new ct;qx.set(-1,0,0,0,1,0,0,0,1);function Q2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Fx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,O,z,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,O,z):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===hi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===hi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const O=e.get(M),z=O.envMap,C=O.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,O,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*O,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,O){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===hi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const O=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function J2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const L=I.program;r.uniformBlockBinding(C,L)}function d(C,I){let L=o[C.id];L===void 0&&(y(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",O));const F=I.program;r.updateUBOMapping(C,F);const A=e.render.frame;c[C.id]!==A&&(v(C),c[C.id]=A)}function g(C){const I=_();C.__bindingPointIndex=I;const L=a.createBuffer(),F=C.__size,A=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,F,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,L),L}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const I=o[C.id],L=C.uniforms,F=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let A=0,N=L.length;A<N;A++){const W=L[A];if(Array.isArray(W))for(let k=0,K=W.length;k<K;k++)x(W[k],A,k,F);else x(W,A,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,I,L,F){if(w(C,I,L,F)===!0){const A=C.__offset,N=C.value;if(Array.isArray(N)){let W=0;for(let k=0;k<N.length;k++){const K=N[k],me=M(K);E(K,C.__data,W),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(W+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,C.__data)}}function E(C,I,L){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,L)}function w(C,I,L,F){const A=C.value,N=I+"_"+L;if(F[N]===void 0)return typeof A=="number"||typeof A=="boolean"?F[N]=A:ArrayBuffer.isView(A)?F[N]=A.slice():F[N]=A.clone(),!0;{const W=F[N];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return F[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(W.equals(A)===!1)return W.copy(A),!0}}return!1}function y(C){const I=C.uniforms;let L=0;const F=16;for(let N=0,W=I.length;N<W;N++){const k=Array.isArray(I[N])?I[N]:[I[N]];for(let K=0,me=k.length;K<me;K++){const ce=k[K],j=Array.isArray(ce.value)?ce.value:[ce.value];for(let B=0,G=j.length;B<G;B++){const ne=j[B],pe=M(ne),ge=L%F,U=ge%pe.boundary,Q=ge+U;L+=U,Q!==0&&F-Q<pe.storage&&(L+=F-Q),ce.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=L,L+=pe.storage}}}const A=L%F;return A>0&&(L+=F-A),C.__size=L,C.__cache={},this}function M(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),I}function O(C){const I=C.target;I.removeEventListener("dispose",O);const L=u.indexOf(I.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function z(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:d,dispose:z}}const $2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function eR(){return Sa===null&&(Sa=new kE($2,16,16,Er,ss),Sa.name="DFG_LUT",Sa.minFilter=fn,Sa.magFilter=fn,Sa.wrapS=aa,Sa.wrapT=aa,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class tR{constructor(e={}){const{canvas:i=aE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=ki}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const w=x,y=new Set([Pp,Op,Up]),M=new Set([ki,Ca,zl,Hl,Lp,Np]),O=new Uint32Array(4),z=new Int32Array(4),C=new ie;let I=null,L=null;const F=[],A=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let k=!1,K=null,me=null,ce=null,j=null;this._outputColorSpace=$n;let B=0,G=0,ne=null,pe=-1,ge=null;const U=new _n,Q=new _n;let ve=null;const ye=new Xt(0);let Ve=0,oe=i.width,Te=i.height,Ae=1,qe=null,at=null;const et=new _n(0,0,oe,Te),ut=new _n(0,0,oe,Te);let ot=!1;const gt=new Ux;let _t=!1,ft=!1;const Jt=new Mn,tn=new ie,nn=new _n,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function jt(){return ne===null?Ae:1}let Z=r;function Bt(T,H){return i.getContext(T,H)}try{const T={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wp}`),i.addEventListener("webglcontextlost",en,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Bn,!1),Z===null){const H="webgl2";if(Z=Bt(H,T),Z===null)throw Bt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Lt("WebGLRenderer: "+T.message),T}let xt,P,b,te,ae,de,Re,Ne,ue,he,Ce,ze,Pe,Ie,Je,Ke,st,Y,De,xe,Ue,Ge,Se;function Ye(){xt=new eA(Z),xt.init(),Ue=new W2(Z,xt),P=new YT(Z,xt,e,Ue),b=new k2(Z,xt),P.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),me=Z.createFramebuffer(),ce=Z.createFramebuffer(),j=Z.createFramebuffer(),te=new iA(Z),ae=new w2,de=new X2(Z,xt,b,ae,P,Ue,te),Re=new $T(W),Ne=new ob(Z),Ge=new XT(Z,Ne),ue=new tA(Z,Ne,te,Ge),he=new sA(Z,ue,Ne,Ge,te),Y=new aA(Z,P,de),Je=new qT(ae),Ce=new C2(W,Re,xt,P,Ge,Je),ze=new Q2(W,ae),Pe=new L2,Ie=new F2(xt),st=new kT(W,Re,b,he,E,m),Ke=new V2(W,he,P),Se=new J2(Z,te,P,b),De=new WT(Z,xt,te),xe=new nA(Z,xt,te),te.programs=Ce.programs,W.capabilities=P,W.extensions=xt,W.properties=ae,W.renderLists=Pe,W.shadowMap=Ke,W.state=b,W.info=te}Ye(),w!==ki&&(N=new oA(w,i.width,i.height,h,o,c));const Be=new Z2(W,Z);this.xr=Be,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const T=xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(T){T!==void 0&&(Ae=T,this.setSize(oe,Te,!1))},this.getSize=function(T){return T.set(oe,Te)},this.setSize=function(T,H,q=!0){if(Be.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,Te=H,i.width=Math.floor(T*Ae),i.height=Math.floor(H*Ae),q===!0&&(i.style.width=T+"px",i.style.height=H+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(oe*Ae,Te*Ae).floor()},this.setDrawingBufferSize=function(T,H,q){oe=T,Te=H,Ae=q,i.width=Math.floor(T*q),i.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(w===ki){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,H,q,J){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,H,q,J),b.viewport(U.copy(et).multiplyScalar(Ae).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,H,q,J){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,H,q,J),b.scissor(Q.copy(ut).multiplyScalar(Ae).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){b.setScissorTest(ot=T)},this.setOpaqueSort=function(T){qe=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,q=!0){let J=0;if(T){let $=!1;if(ne!==null){const we=ne.texture.format;$=y.has(we)}if($){const we=ne.texture.type,Fe=M.has(we),Le=st.getClearColor(),Oe=st.getClearAlpha(),He=Le.r,je=Le.g,tt=Le.b;Fe?(O[0]=He,O[1]=je,O[2]=tt,O[3]=Oe,Z.clearBufferuiv(Z.COLOR,0,O)):(z[0]=He,z[1]=je,z[2]=tt,z[3]=Oe,Z.clearBufferiv(Z.COLOR,0,z))}else J|=Z.COLOR_BUFFER_BIT}H&&(J|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(J|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&Z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),K=T},this.dispose=function(){i.removeEventListener("webglcontextlost",en,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Bn,!1),st.dispose(),Pe.dispose(),Ie.dispose(),ae.dispose(),Re.dispose(),he.dispose(),Ge.dispose(),Se.dispose(),Ce.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",dn),Be.removeEventListener("sessionend",yn),Dn.stop()};function en(T){T.preventDefault(),q_("WebGLRenderer: Context Lost."),k=!0}function zt(){q_("WebGLRenderer: Context Restored."),k=!1;const T=te.autoReset,H=Ke.enabled,q=Ke.autoUpdate,J=Ke.needsUpdate,$=Ke.type;Ye(),te.autoReset=T,Ke.enabled=H,Ke.autoUpdate=q,Ke.needsUpdate=J,Ke.type=$}function Bn(T){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ei(T){const H=T.target;H.removeEventListener("dispose",ei),ra(H)}function ra(T){oa(T),ae.remove(T)}function oa(T){const H=ae.get(T).programs;H!==void 0&&(H.forEach(function(q){Ce.releaseProgram(q)}),T.isShaderMaterial&&Ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,J,$,we){H===null&&(H=an);const Fe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Le=mi(T,H,q,J,$);b.setMaterial(J,Fe);let Oe=q.index,He=1;if(J.wireframe===!0){if(Oe=ue.getWireframeAttribute(q),Oe===void 0)return;He=2}const je=q.drawRange,tt=q.attributes.position;let Qe=je.start*He,dt=(je.start+je.count)*He;we!==null&&(Qe=Math.max(Qe,we.start*He),dt=Math.min(dt,(we.start+we.count)*He)),Oe!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Oe.count)):tt!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,tt.count));const kt=dt-Qe;if(kt<0||kt===1/0)return;Ge.setup($,J,Le,q,Oe);let Nt,wt=De;if(Oe!==null&&(Nt=Ne.get(Oe),wt=xe,wt.setIndex(Nt)),$.isMesh)J.wireframe===!0?(b.setLineWidth(J.wireframeLinewidth*jt()),wt.setMode(Z.LINES)):wt.setMode(Z.TRIANGLES);else if($.isLine){let Ut=J.linewidth;Ut===void 0&&(Ut=1),b.setLineWidth(Ut*jt()),$.isLineSegments?wt.setMode(Z.LINES):$.isLineLoop?wt.setMode(Z.LINE_LOOP):wt.setMode(Z.LINE_STRIP)}else $.isPoints?wt.setMode(Z.POINTS):$.isSprite&&wt.setMode(Z.TRIANGLES);if($.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ut=$._multiDrawStarts,ke=$._multiDrawCounts,En=$._multiDrawCount,pt=Oe?Ne.get(Oe).bytesPerElement:1,pn=ae.get(J).currentProgram.getUniforms();for(let qn=0;qn<En;qn++)pn.setValue(Z,"_gl_DrawID",qn),wt.render(Ut[qn]/pt,ke[qn])}else if($.isInstancedMesh)wt.renderInstances(Qe,kt,$.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ke=Math.min(q.instanceCount,Ut);wt.renderInstances(Qe,kt,ke)}else wt.render(Qe,kt)};function wa(T,H,q){T.transparent===!0&&T.side===ya&&T.forceSinglePass===!1?(T.side=hi,T.needsUpdate=!0,ji(T,H,q),T.side=as,T.needsUpdate=!0,ji(T,H,q),T.side=ya):ji(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),L=Ie.get(q),L.init(H),A.push(L),q.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),T!==q&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const J=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const we=$.material;if(we)if(Array.isArray(we))for(let Fe=0;Fe<we.length;Fe++){const Le=we[Fe];wa(Le,q,$),J.add(Le)}else wa(we,q,$),J.add(we)}),L=A.pop(),J},this.compileAsync=function(T,H,q=null){const J=this.compile(T,H,q);return new Promise($=>{function we(){if(J.forEach(function(Fe){ae.get(Fe).currentProgram.isReady()&&J.delete(Fe)}),J.size===0){$(T);return}setTimeout(we,10)}xt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Da=null;function pi(T){Da&&Da(T)}function dn(){Dn.stop()}function yn(){Dn.start()}const Dn=new Hx;Dn.setAnimationLoop(pi),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(T){Da=T,Be.setAnimationLoop(T),T===null?Dn.stop():Dn.start()},Be.addEventListener("sessionstart",dn),Be.addEventListener("sessionend",yn),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;K!==null&&K.renderStart(T,H);const q=Be.enabled===!0&&Be.isPresenting===!0,J=N!==null&&(ne===null||q)&&N.begin(W,ne);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(H),H=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(W,T,H,ne),L=Ie.get(T,A.length),L.init(H),L.state.textureUnits=de.getTextureUnits(),A.push(L),Jt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),gt.setFromProjectionMatrix(Jt,ba,H.reversedDepth),ft=this.localClippingEnabled,_t=Je.init(this.clippingPlanes,ft),I=Pe.get(T,F.length),I.init(),F.push(I),Be.enabled===!0&&Be.isPresenting===!0){const Fe=W.xr.getDepthSensingMesh();Fe!==null&&la(Fe,H,-1/0,W.sortObjects)}la(T,H,0,W.sortObjects),I.finish(),W.sortObjects===!0&&I.sort(qe,at,H.reversedDepth),Vt=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,Vt&&st.addToRenderList(I,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Je.beginShadows();const $=L.state.shadowsArray;if(Ke.render($,T,H),_t===!0&&Je.endShadows(),(J&&N.hasRenderPass())===!1){const Fe=I.opaque,Le=I.transmissive;if(L.setupLights(),H.isArrayCamera){const Oe=H.cameras;if(Le.length>0)for(let He=0,je=Oe.length;He<je;He++){const tt=Oe[He];Ys(Fe,Le,T,tt)}Vt&&st.render(T);for(let He=0,je=Oe.length;He<je;He++){const tt=Oe[He];Ws(I,T,tt,tt.viewport)}}else Le.length>0&&Ys(Fe,Le,T,H),Vt&&st.render(T),Ws(I,T,H)}ne!==null&&G===0&&(de.updateMultisampleRenderTarget(ne),de.updateRenderTargetMipmap(ne)),J&&N.end(W),T.isScene===!0&&T.onAfterRender(W,T,H),Ge.resetDefaultState(),pe=-1,ge=null,A.pop(),A.length>0?(L=A[A.length-1],de.setTextureUnits(L.state.textureUnits),_t===!0&&Je.setGlobalState(W.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,K!==null&&K.renderEnd()};function la(T,H,q,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)L.pushLightProbeGrid(T);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||gt.intersectsSprite(T)){J&&nn.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Jt);const Fe=he.update(T),Le=T.material;Le.visible&&I.push(T,Fe,Le,q,nn.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||gt.intersectsObject(T))){const Fe=he.update(T),Le=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),nn.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),nn.copy(Fe.boundingSphere.center)),nn.applyMatrix4(T.matrixWorld).applyMatrix4(Jt)),Array.isArray(Le)){const Oe=Fe.groups;for(let He=0,je=Oe.length;He<je;He++){const tt=Oe[He],Qe=Le[tt.materialIndex];Qe&&Qe.visible&&I.push(T,Fe,Qe,q,nn.z,tt)}}else Le.visible&&I.push(T,Fe,Le,q,nn.z,null)}}const we=T.children;for(let Fe=0,Le=we.length;Fe<Le;Fe++)la(we[Fe],H,q,J)}function Ws(T,H,q,J){const{opaque:$,transmissive:we,transparent:Fe}=T;L.setupLightsView(q),_t===!0&&Je.setGlobalState(W.clippingPlanes,q),J&&b.viewport(U.copy(J)),$.length>0&&ca($,H,q),we.length>0&&ca(we,H,q),Fe.length>0&&ca(Fe,H,q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ys(T,H,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[J.id]===void 0){const Qe=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[J.id]=new Aa(1,1,{generateMipmaps:!0,type:Qe?ss:ki,minFilter:Vs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const we=L.state.transmissionRenderTarget[J.id],Fe=J.viewport||U;we.setSize(Fe.z*W.transmissionResolutionScale,Fe.w*W.transmissionResolutionScale);const Le=W.getRenderTarget(),Oe=W.getActiveCubeFace(),He=W.getActiveMipmapLevel();W.setRenderTarget(we),W.getClearColor(ye),Ve=W.getClearAlpha(),Ve<1&&W.setClearColor(16777215,.5),W.clear(),Vt&&st.render(q);const je=W.toneMapping;W.toneMapping=Ta;const tt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),L.setupLightsView(J),_t===!0&&Je.setGlobalState(W.clippingPlanes,J),ca(T,q,J),de.updateMultisampleRenderTarget(we),de.updateRenderTargetMipmap(we),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let dt=0,kt=H.length;dt<kt;dt++){const Nt=H[dt],{object:wt,geometry:Ut,material:ke,group:En}=Nt;if(ke.side===ya&&wt.layers.test(J.layers)){const pt=ke.side;ke.side=hi,ke.needsUpdate=!0,qi(wt,q,J,Ut,ke,En),ke.side=pt,ke.needsUpdate=!0,Qe=!0}}Qe===!0&&(de.updateMultisampleRenderTarget(we),de.updateRenderTargetMipmap(we))}W.setRenderTarget(Le,Oe,He),W.setClearColor(ye,Ve),tt!==void 0&&(J.viewport=tt),W.toneMapping=je}function ca(T,H,q){const J=H.isScene===!0?H.overrideMaterial:null;for(let $=0,we=T.length;$<we;$++){const Fe=T[$],{object:Le,geometry:Oe,group:He}=Fe;let je=Fe.material;je.allowOverride===!0&&J!==null&&(je=J),Le.layers.test(q.layers)&&qi(Le,H,q,Oe,je,He)}}function qi(T,H,q,J,$,we){T.onBeforeRender(W,H,q,J,$,we),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(W,H,q,J,T,we),$.transparent===!0&&$.side===ya&&$.forceSinglePass===!1?($.side=hi,$.needsUpdate=!0,W.renderBufferDirect(q,H,J,$,T,we),$.side=as,$.needsUpdate=!0,W.renderBufferDirect(q,H,J,$,T,we),$.side=ya):W.renderBufferDirect(q,H,J,$,T,we),T.onAfterRender(W,H,q,J,$,we)}function ji(T,H,q){H.isScene!==!0&&(H=an);const J=ae.get(T),$=L.state.lights,we=L.state.shadowsArray,Fe=$.state.version,Le=Ce.getParameters(T,$.state,we,H,q,L.state.lightProbeGridArray),Oe=Ce.getProgramCacheKey(Le);let He=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=Re.get(T.envMap||J.environment,je),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",ei),He=new Map,J.programs=He);let tt=He.get(Oe);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Fe)return Di(T,Le),tt}else Le.uniforms=Ce.getUniforms(T),K!==null&&T.isNodeMaterial&&K.build(T,q,Le),T.onBeforeCompile(Le,W),tt=Ce.acquireProgram(Le,Oe),He.set(Oe,tt),J.uniforms=Le.uniforms;const Qe=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qe.clippingPlanes=Je.uniform),Di(T,Le),J.needsLights=be(T),J.lightsStateVersion=Fe,J.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=L.state.lightProbeGridArray.length>0,J.currentProgram=tt,J.uniformsList=null,tt}function wi(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Au.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Di(T,H){const q=ae.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function ua(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let q=0,J=T.length;q<J;q++){const $=T[q];if($.texture!==null&&$.boundingBox.containsPoint(C))return $}return null}function mi(T,H,q,J,$){H.isScene!==!0&&(H=an),de.resetTextureUnits();const we=H.fog,Fe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Le=ne===null?W.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ct.workingColorSpace,Oe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,He=Re.get(J.envMap||Fe,Oe),je=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qe=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,kt=!!q.morphAttributes.color;let Nt=Ta;J.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Nt=W.toneMapping);const wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ut=wt!==void 0?wt.length:0,ke=ae.get(J),En=L.state.lights;if(_t===!0&&(ft===!0||T!==ge)){const Ot=T===ge&&J.id===pe;Je.setState(J,T,Ot)}let pt=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==En.state.version||ke.outputColorSpace!==Le||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isBatchedMesh&&ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==He||J.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Je.numPlanes||ke.numIntersection!==Je.numIntersection)||ke.vertexAlphas!==je||ke.vertexTangents!==tt||ke.morphTargets!==Qe||ke.morphNormals!==dt||ke.morphColors!==kt||ke.toneMapping!==Nt||ke.morphTargetsCount!==Ut||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ke.__version=J.version);let pn=ke.currentProgram;pt===!0&&(pn=ji(J,H,$),K&&J.isNodeMaterial&&K.onUpdateProgram(J,pn,ke));let qn=!1,ti=!1,jn=!1;const Mt=pn.getUniforms(),Dt=ke.uniforms;if(b.useProgram(pn.program)&&(qn=!0,ti=!0,jn=!0),J.id!==pe&&(pe=J.id,ti=!0),ke.needsLights){const Ot=ua(L.state.lightProbeGridArray,$);ke.lightProbeGrid!==Ot&&(ke.lightProbeGrid=Ot,ti=!0)}if(qn||ge!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(Z,"projectionMatrix",T.projectionMatrix),Mt.setValue(Z,"viewMatrix",T.matrixWorldInverse);const Li=Mt.map.cameraPosition;Li!==void 0&&Li.setValue(Z,tn.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Mt.setValue(Z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Mt.setValue(Z,"isOrthographic",T.isOrthographicCamera===!0),ge!==T&&(ge=T,ti=!0,jn=!0)}if(ke.needsLights&&(En.state.directionalShadowMap.length>0&&Mt.setValue(Z,"directionalShadowMap",En.state.directionalShadowMap,de),En.state.spotShadowMap.length>0&&Mt.setValue(Z,"spotShadowMap",En.state.spotShadowMap,de),En.state.pointShadowMap.length>0&&Mt.setValue(Z,"pointShadowMap",En.state.pointShadowMap,de)),$.isSkinnedMesh){Mt.setOptional(Z,$,"bindMatrix"),Mt.setOptional(Z,$,"bindMatrixInverse");const Ot=$.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Mt.setValue(Z,"boneTexture",Ot.boneTexture,de))}$.isBatchedMesh&&(Mt.setOptional(Z,$,"batchingTexture"),Mt.setValue(Z,"batchingTexture",$._matricesTexture,de),Mt.setOptional(Z,$,"batchingIdTexture"),Mt.setValue(Z,"batchingIdTexture",$._indirectTexture,de),Mt.setOptional(Z,$,"batchingColorTexture"),$._colorsTexture!==null&&Mt.setValue(Z,"batchingColorTexture",$._colorsTexture,de));const gi=q.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Y.update($,q,pn),(ti||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,Mt.setValue(Z,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Dt.envMapIntensity.value=H.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=eR()),ti){if(Mt.setValue(Z,"toneMappingExposure",W.toneMappingExposure),ke.needsLights&&hn(Dt,jn),we&&J.fog===!0&&ze.refreshFogUniforms(Dt,we),ze.refreshMaterialUniforms(Dt,J,Ae,Te,L.state.transmissionRenderTarget[T.id]),ke.needsLights&&ke.lightProbeGrid){const Ot=ke.lightProbeGrid;Dt.probesSH.value=Ot.texture,Dt.probesMin.value.copy(Ot.boundingBox.min),Dt.probesMax.value.copy(Ot.boundingBox.max),Dt.probesResolution.value.copy(Ot.resolution)}Au.upload(Z,wi(ke),Dt,de)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Au.upload(Z,wi(ke),Dt,de),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Mt.setValue(Z,"center",$.center),Mt.setValue(Z,"modelViewMatrix",$.modelViewMatrix),Mt.setValue(Z,"normalMatrix",$.normalMatrix),Mt.setValue(Z,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){const Ot=J.uniformsGroups;for(let Li=0,La=Ot.length;Li<La;Li++){const _i=Ot[Li];Se.update(_i,pn),Se.bind(_i,pn)}}return pn}function hn(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function be(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(T,H,q){const J=ae.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ae.get(T.texture).__webglTexture=H,ae.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const q=ae.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){ne=T,B=H,G=q;let J=null,$=!1,we=!1;if(T){const Le=ae.get(T);if(Le.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Z.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(T.viewport),Q.copy(T.scissor),ve=T.scissorTest,b.viewport(U),b.scissor(Q),b.setScissorTest(ve),pe=-1;return}else if(Le.__webglFramebuffer===void 0)de.setupRenderTarget(T);else if(Le.__hasExternalTextures)de.rebindTextures(T,ae.get(T.texture).__webglTexture,ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(Le.__boundDepthTexture!==je){if(je!==null&&ae.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(we=!0);const He=ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[H])?J=He[H][q]:J=He[H],$=!0):T.samples>0&&de.useMultisampledRTT(T)===!1?J=ae.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?J=He[q]:J=He,U.copy(T.viewport),Q.copy(T.scissor),ve=T.scissorTest}else U.copy(et).multiplyScalar(Ae).floor(),Q.copy(ut).multiplyScalar(Ae).floor(),ve=ot;if(q!==0&&(J=me),b.bindFramebuffer(Z.FRAMEBUFFER,J)&&b.drawBuffers(T,J),b.viewport(U),b.scissor(Q),b.setScissorTest(ve),$){const Le=ae.get(T.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,q)}else if(we){const Le=H;for(let Oe=0;Oe<T.textures.length;Oe++){const He=ae.get(T.textures[Oe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Oe,He.__webglTexture,q,Le)}}else if(T!==null&&q!==0){const Le=ae.get(T.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Le.__webglTexture,q)}pe=-1},this.readRenderTargetPixels=function(T,H,q,J,$,we,Fe,Le=0){if(!(T&&T.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Oe=Oe[Fe]),Oe){b.bindFramebuffer(Z.FRAMEBUFFER,Oe);try{const He=T.textures[Le],je=He.format,tt=He.type;if(T.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!P.textureFormatReadable(je)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(tt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&q>=0&&q<=T.height-$&&Z.readPixels(H,q,J,$,Ue.convert(je),Ue.convert(tt),we)}finally{const He=ne!==null?ae.get(ne).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,H,q,J,$,we,Fe,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Oe=Oe[Fe]),Oe)if(H>=0&&H<=T.width-J&&q>=0&&q<=T.height-$){b.bindFramebuffer(Z.FRAMEBUFFER,Oe);const He=T.textures[Le],je=He.format,tt=He.type;if(T.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!P.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Qe),Z.bufferData(Z.PIXEL_PACK_BUFFER,we.byteLength,Z.STREAM_READ),Z.readPixels(H,q,J,$,Ue.convert(je),Ue.convert(tt),0);const dt=ne!==null?ae.get(ne).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,dt);const kt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await sE(Z,kt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Qe),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,we),Z.deleteBuffer(Qe),Z.deleteSync(kt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,q=0){const J=Math.pow(2,-q),$=Math.floor(T.image.width*J),we=Math.floor(T.image.height*J),Fe=H!==null?H.x:0,Le=H!==null?H.y:0;de.setTexture2D(T,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,q,0,0,Fe,Le,$,we),b.unbindTexture()},this.copyTextureToTexture=function(T,H,q=null,J=null,$=0,we=0){let Fe,Le,Oe,He,je,tt,Qe,dt,kt;const Nt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(q!==null)Fe=q.max.x-q.min.x,Le=q.max.y-q.min.y,Oe=q.isBox3?q.max.z-q.min.z:1,He=q.min.x,je=q.min.y,tt=q.isBox3?q.min.z:0;else{const Dt=Math.pow(2,-$);Fe=Math.floor(Nt.width*Dt),Le=Math.floor(Nt.height*Dt),T.isDataArrayTexture?Oe=Nt.depth:T.isData3DTexture?Oe=Math.floor(Nt.depth*Dt):Oe=1,He=0,je=0,tt=0}J!==null?(Qe=J.x,dt=J.y,kt=J.z):(Qe=0,dt=0,kt=0);const wt=Ue.convert(H.format),Ut=Ue.convert(H.type);let ke;H.isData3DTexture?(de.setTexture3D(H,0),ke=Z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(de.setTexture2DArray(H,0),ke=Z.TEXTURE_2D_ARRAY):(de.setTexture2D(H,0),ke=Z.TEXTURE_2D),b.activeTexture(Z.TEXTURE0),b.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(Z.UNPACK_ALIGNMENT,H.unpackAlignment);const En=b.getParameter(Z.UNPACK_ROW_LENGTH),pt=b.getParameter(Z.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(Z.UNPACK_SKIP_PIXELS),qn=b.getParameter(Z.UNPACK_SKIP_ROWS),ti=b.getParameter(Z.UNPACK_SKIP_IMAGES);b.pixelStorei(Z.UNPACK_ROW_LENGTH,Nt.width),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Nt.height),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,He),b.pixelStorei(Z.UNPACK_SKIP_ROWS,je),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,tt);const jn=T.isDataArrayTexture||T.isData3DTexture,Mt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Dt=ae.get(T),gi=ae.get(H),Ot=ae.get(Dt.__renderTarget),Li=ae.get(gi.__renderTarget);b.bindFramebuffer(Z.READ_FRAMEBUFFER,Ot.__webglFramebuffer),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let La=0;La<Oe;La++)jn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ae.get(T).__webglTexture,$,tt+La),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,we,kt+La)),Z.blitFramebuffer(He,je,Fe,Le,Qe,dt,Fe,Le,Z.DEPTH_BUFFER_BIT,Z.NEAREST);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||ae.has(T)){const Dt=ae.get(T),gi=ae.get(H);b.bindFramebuffer(Z.READ_FRAMEBUFFER,ce),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,j);for(let Ot=0;Ot<Oe;Ot++)jn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Dt.__webglTexture,$,tt+Ot):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Dt.__webglTexture,$),Mt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,gi.__webglTexture,we,kt+Ot):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,gi.__webglTexture,we),$!==0?Z.blitFramebuffer(He,je,Fe,Le,Qe,dt,Fe,Le,Z.COLOR_BUFFER_BIT,Z.NEAREST):Mt?Z.copyTexSubImage3D(ke,we,Qe,dt,kt+Ot,He,je,Fe,Le):Z.copyTexSubImage2D(ke,we,Qe,dt,He,je,Fe,Le);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?Z.texSubImage3D(ke,we,Qe,dt,kt,Fe,Le,Oe,wt,Ut,Nt.data):H.isCompressedArrayTexture?Z.compressedTexSubImage3D(ke,we,Qe,dt,kt,Fe,Le,Oe,wt,Nt.data):Z.texSubImage3D(ke,we,Qe,dt,kt,Fe,Le,Oe,wt,Ut,Nt):T.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,we,Qe,dt,Fe,Le,wt,Ut,Nt.data):T.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,we,Qe,dt,Nt.width,Nt.height,wt,Nt.data):Z.texSubImage2D(Z.TEXTURE_2D,we,Qe,dt,Fe,Le,wt,Ut,Nt);b.pixelStorei(Z.UNPACK_ROW_LENGTH,En),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(Z.UNPACK_SKIP_ROWS,qn),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,ti),we===0&&H.generateMipmaps&&Z.generateMipmap(ke),b.unbindTexture()},this.initRenderTarget=function(T){ae.get(T).__webglFramebuffer===void 0&&de.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?de.setTextureCube(T,0):T.isData3DTexture?de.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?de.setTexture2DArray(T,0):de.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){B=0,G=0,ne=null,b.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const nR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",iR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",aR="/assets/CXLMediumItalic-DYSp-DoC.otf",sR=4,rR=5,ts={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function jx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function oR(a){return jx(a)}function lR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function cR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*rR/sR);return{W:o,H:c}}function Zx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function ln(a,e,i,r,o,c,u){Zx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function vn(a,e,i,r,o,c,u,h){Zx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function Vu(a,e,i,r,o,c){ln(a,e,i,r,o,c,"#0c0e12"),vn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function ku(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return vn(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function Kx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function uR(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function fR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;ln(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),vn(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function dR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;ln(a,e,u,r,h,8*o,"#050508"),vn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),ln(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function hR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;vn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return ln(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),vn(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function Vp(a,e,i,r,o){const c=44*o;ln(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),vn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return ln(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${ts.role} · ${ts.didShort}`,e+8*o+u+8*o,i+32*o),c}function pR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),ln(a,e,i,r,c,h,m),vn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),vn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${ts.role} · ${ts.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(ts.didShort,e+u,d);const g=28*o;return ln(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),vn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function mR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),ln(a,e,i,r,c,h,m),vn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(ts.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function gR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);ln(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);ln(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function _R(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);ln(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),vn(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function vR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;ln(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),vn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return ln(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),ln(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const Ol=2,Co={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function zv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);ln(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),vn(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function xR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Co.riskScore},{label:"Rep",value:Co.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";ln(a,d,i,x,h,4*o,E),vn(a,d,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function SR(a,e,i,r,o){const c=Co.receipts,u=22*o,h=14*o+c.length*u;return ln(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),vn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function MR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),ln(a,e,i,r,c,h,m),vn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),vn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return ln(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),vn(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function yR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return ln(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),vn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function ER(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%Ol+Ol)%Ol,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];Vu(a,e,i,r,o,m);let _=ku(a,e,i,r,h,g.header,u);_=uR(a,e,_,r,h,g.segment,d+1,Ol,u);const v=i+o-h;if(d===0){_+=Vp(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=xR(a,e+h,_,r-h*2,u)+8*u);const E=[["SHARPE",Co.sharpe],["ROI",Co.roi],["RISK",Co.riskScore]];_+36*u<=v&&(_+=zv(a,e+h,_,r-h*2,E,u)+8*u),_+70*u<=v&&SR(a,e+h,_,r-h*2,u);return}_+=MR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=yR(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&zv(a,e+h,_,r-h*2,x,u)}function bR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;Vu(a,e,i,r,o,m);let d=ku(a,e,i,r,h,"COPY TRADE",u);d=Kx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const E=6*u,w=r-h*2;let y=(w-E)/2,M=Math.min(y*190/316,y*.58);const O=Math.max(64*u,v-d-28*u);M>O&&(y=y*(O/M),M=O);const z=u*(y/((w-E)/2)),C=e+h+(w-(y*2+E))/2;mR(a,C,d,y,z),pR(a,C+y+E,d,y,z),d+=M+10*u;const I=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,F=(r-h*2-L*2)/3,A=32*u;d+A<=v&&(I.forEach(([N,W],k)=>{const K=e+h+k*(F+L);ln(a,K,d,F,A,6*u,"rgba(255,255,255,0.04)"),vn(a,K,d,F,A,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,K+F/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(W,K+F/2,d+24*u)}),a.textAlign="left")}else d+=Vp(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=gR(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&_R(a,e+h,d,r-h*2,u);vR(a,e+h,_,r-h*2,u)}const TR=2,AR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function RR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function CR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Vu(a,e,i,r,o,h);let m=ku(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,E=e+r-u-x,w=e+u+g+v+_/2,y=AR,M=4*c;y.forEach((O,z)=>{if(m>=d-8*c)return;const C=z===0,I=z===y.length-1,L=RR(O.status),F=8*c,A=6*c,N=7*c,W=8*c,k=O.showActions?22*c:0,K=O.showActions?5*c:0,ce=Math.max(F+2*c+A,N+4*c+W)+K+k+M;if(m+Math.min(ce,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${F}px "DM Mono", ui-monospace, monospace`,a.fillText(O.agent,e+u+g,m+F),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${A}px "DM Mono", ui-monospace, monospace`,a.fillText(O.timeLabel,e+u+g,m+F+2*c+A),a.textAlign="left",I||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+ce),a.stroke());const j=2.4*c;a.beginPath(),a.arc(w,m+5*c,j,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(w,m+5*c,j+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const B=4*c,G=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const ne=O.statusLabel.toUpperCase(),pe=a.measureText(ne).width+B*2,ge=N+G*2;ln(a,x,m,pe,ge,3*c,L.bg),a.fillStyle=L.fg,a.fillText(ne,x+B,m+N+G*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${W}px "DM Mono", ui-monospace, monospace`;const U=m+ge+3*c+W;let Q=O.action;if(O.pnl){const ve=`${O.action} · `;a.fillText(ve,x,U);const ye=a.measureText(ve).width;a.fillStyle=O.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${W}px "DM Mono", ui-monospace, monospace`,a.fillText(O.pnl.text,x+ye,U)}else{for(;Q.length>8&&a.measureText(Q).width>E;)Q=`${Q.slice(0,-2)}…`;a.fillText(Q,x,U)}if(O.showActions&&m+ge+3*c+W+K+k<=d){const ve=m+ge+3*c+W+K,ye=(E-5*c)/2;vn(a,x,ve,ye,k,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+ye/2,ve+k*.68),ln(a,x+ye+5*c,ve,ye,k,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+ye+5*c+ye/2,ve+k*.68),a.textAlign="left"}m+=ce})}function wR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Vu(a,e,i,r,o,h);let m=ku(a,e,i,r,u,"FUND BUCKET",c);m=Kx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Vp(a,e+u,m,r-u*2,c)+8*c,m+=fR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=dR(a,e+u,m,r-u*2,c)+6*c),hR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Qx(a,e,i,r,o,c,u=0){switch(e){case"discover":ER(a,i,r,o,c,u);break;case"copy":bR(a,i,r,o,c,u);break;case"supervise":CR(a,i,r,o,c);break;case"isolate":wR(a,i,r,o,c);break}}function DR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Qx(a,e,0,0,i,r,o)}function LR(a,e,i,r,o,c=.8){const{W:u,H:h}=cR(i,r),m=document.createElement("canvas");m.width=u,m.height=h;const d=m.getContext("2d"),g=Math.min(1,Math.max(0,c)),_=d.createLinearGradient(0,0,0,h);_.addColorStop(0,`rgba(8, 10, 14, ${g})`),_.addColorStop(.55,`rgba(5, 7, 13, ${g})`),_.addColorStop(1,`rgba(3, 4, 6, ${g})`),d.fillStyle=_,d.fillRect(0,0,u,h);const v=Math.round(22*i),x=Math.round(.05*h),E=Math.round(.045*h),w=u-v*2;let y=x;const M=Math.min(34*i,u*.095);d.fillStyle="rgba(255,255,255,0.94)",d.font=`normal 400 ${M}px ${o}`,d.textBaseline="alphabetic",d.shadowColor="rgba(10, 14, 23, 0.55)",d.shadowBlur=Math.max(8,12*i),d.shadowOffsetX=0,d.shadowOffsetY=Math.max(1,1.5*i),d.fillText(a.verb,v,y+M*.85),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0,y+=Math.round(.09*h);const O=Math.min(13*i,u*.036);d.fillStyle="rgba(255,255,255,0.55)",d.font=`400 ${O}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const z=lR(d,a.description,w);d.shadowColor="rgba(10, 14, 23, 0.45)",d.shadowBlur=Math.max(4,6*i),d.shadowOffsetY=Math.max(.5,1*i),d.fillText(z[0]??a.description,v,y+O),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0,y+=Math.round(.07*h),y+=Math.round(.03*h);const C=v,I=y,L=w,F=Math.max(80*i,h-y-E);Qx(d,oR(e),C,I,L,F);const A=new Px(m);return A.colorSpace=$n,A.minFilter=Vs,A.generateMipmaps=!0,A}const Ap=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],NR="0 0 58 35",UR=58,OR=35;function PR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,UR+r*2,OR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Ap.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const IR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function kp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=IR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(PR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Hv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",FR=50,Ru=500,wh=100,Gv=168;function BR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zR(){return Hv[Math.floor(Math.random()*Hv.length)]??"?"}function Vv(a){return Array.from(a).map(e=>{const i=Math.random()*(Ru-wh),r=wh+Math.random()*(Ru-i-wh),o=Math.min(Ru,i+r);return{original:e,start:i,end:o}})}function HR(a){return Math.min(1,Math.max(0,a))}function GR({text:a,className:e,scrollerRef:i}){const r=We.useRef(null),o=We.useRef(Vv(a)),c=BR();return We.useEffect(()=>{o.current=Vv(a)},[a]),We.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(Ru,Math.max(0,x-FR));if(E===d&&d>=0)return;d=E;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let O=0;O<w.length;O++){const z=w[O],C=y[O];if(!C)continue;const I=Math.max(.001,z.end-z.start),L=HR((E-z.start)/I);if(L<1&&(M=!1),L<=0){C.textContent=z.original===" "?" ":z.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(L>=1){C.textContent=z.original===" "?" ":z.original,C.style.transform=`translateY(${-Gv}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=zR(),C.style.transform=`translateY(${-L*Gv}px)`,C.style.opacity=String(1-L),C.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const VR="Enter the agentic economy →",Pl=Ph.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),un=Pl.length,es=2.95,Bl=6.9,Pu=32,Jx=4,$x=5,Rp=2.05,kR=1,XR=es*.55,eS=.28,tS=.35,WR=eS+tS,Dh=.85,kv=300,YR=35,Xv=YR/60*1e3,qR=.1;function nS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const jR=1.35,ZR=.72,KR=.62,QR=.2,JR=14,$R=.42,e3=128,t3=12,n3=.002,i3=.0011,Wv=.12,a3=.88,iS=4,s3=32,r3=40,o3=iS-1,Yv=50,l3=-10,qv=28,c3="/Morm_IntroAnimation_1.mp4",u3=10,aS=[0,2,4,6,8,10],f3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function d3(a,e){const i=f3[a]??{in:2,out:2},r=Gt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function h3(a,e,i,r,o){const c=Math.max(1,un-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],h=aS,m=u.length-1;if(a<=u[0])return h[0];if(a>=u[m])return h[m];let d=0;for(;d<m-1&&a>=u[d+1];)d+=1;const g=u[d],_=u[d+1],v=_>g?Gt.clamp((a-g)/(_-g),0,1):1;return Gt.lerp(h[d],h[d+1],d3(d,v))}function jv(a,e){const i=Number.isFinite(a.duration)&&a.duration>0?a.duration:u3,r=Gt.clamp(e,0,Math.max(0,i-.04));if(!(Math.abs(a.currentTime-r)<1/48))try{a.currentTime=r}catch{}}const p3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,m3=`
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
`,g3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_3=`
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
`,v3='"Reckk Heading", Georgia, "Times New Roman", serif',sS="Morpheum Wordmark",Vl=`"${sS}"`,x3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function S3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(sS,`url(${aR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Vl}`);const e=document.fonts.check(`normal 152px ${Vl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function M3(){if(!(typeof document>"u"||!document.fonts))try{await S3();const a=new FontFace("Reckk Title",`url(${iR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${nR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Vl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const mr="flow-intro-hide-chrome",y3=72,E3=120,Lh=80;function b3(a){return a<=y3}const T3=280;function _r(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Nh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;_r(e)}function Sr(a){const e=Gt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function bo(a){const e=Math.max(1,a),i=Math.max(1,un*e*kR),r=Math.max(1,i/Math.max(1,un-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const A3=900,R3=1100,C3=1300,w3=1500,D3=6,L3=36,N3=50,U3=.5,O3=1024,P3=.75,I3=.8;function Xp(a){return a>=O3}function F3(a){return Xp(a)?A3:R3}function B3(a){return Xp(a)?C3:w3}function rS(a){return Math.max(2,Math.max(1,a)*.004)}function z3(a,e){const{cardPx:i,titlePx:r}=bo(e),o=Math.max(1,un-1),c=Gt.clamp(Math.round(a),0,un-1);return r+c/o*i}function H3(a){return a.offsetTop}function G3(a,e,i){return a.offsetTop+z3(e,i)}function Uh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function V3(a){const e=un-1;return Gt.clamp(Math.round(a),0,e)}function Oh(a,e,i,r){const o=rS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:V3(i)}}function k3(a,e,i,r,o,c,u){if(o)return!1;const h=i/Math.max(1,un-1),m=r+h*U3;return!(a>m||c<u*.5)}function Wp(a,e){const i=a/Math.max(1,e),r=Pu*Math.PI/180,o=2*Bl*Math.tan(r/2),c=o*i,u=Rp*Jx/$x,h=.992,m=h*o/Rp,d=h*c/u;return Gt.clamp(Math.min(m,d),.52,2.35)}function X3(a,e){const i=Wp(a,e);return(Xp(a)?i*P3:i)*I3}function Zv(a,e,i){const r=nS(a),o=Wp(a,e),c=a/Math.max(1,e),u=Pu*Math.PI/180,m=2*Bl*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function W3(a,e){const i=a/Math.max(1,un-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function Y3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function q3(a,e){const i=Gt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=Sr(Gt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function j3(a,e,i,r=0){const o=un-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=Gt.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=Sr(Gt.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function Z3(a){return new Yi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:qR}},vertexShader:g3,fragmentShader:_3,transparent:!0,depthWrite:!0,depthTest:!0,side:as})}function K3(a,e){return a>1.5&&a<e-.5}function Q3(a){return Gt.clamp(540/Math.max(a,340),.2,.55)}function J3(a,e,i){const r=[],o=JR;for(let c=0;c<o;c++){const u=Gt.clamp(a-c/Math.max(1,o-1)*$R,-.08,1.08),h=Math.sin(u*Math.PI*2*jR)*KR*i,m=Math.sin(u*Math.PI*2*ZR)*QR,d=Wv+c/Math.max(1,o-1)*(a3-Wv),g=e-d;r.push(new ie(h,m,g))}return r}function $3(a,e,i,r){const o=a.length;if(o<2)return new Wi;const c=[],u=[],h=[],m=[],d=new ie,g=new ie,_=new ie,v=new ie(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let O=0;O<=e;O++){const z=O/e*Math.PI*2,C=Math.cos(z),I=Math.sin(z),L=a[w];c.push(L.x+(C*g.x+I*_.x)*M,L.y+(C*g.y+I*_.y)*M,L.z+(C*g.z+I*_.z)*M),u.push(C*g.x+I*_.x,C*g.y+I*_.y,C*g.z+I*_.z),h.push(o===1?0:w/(o-1),O/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,O=M+1,z=M+x,C=z+1;m.push(M,z,O,O,z,C)}const E=new Wi;return E.setAttribute("position",new Xi(c,3)),E.setAttribute("normal",new Xi(u,3)),E.setAttribute("uv",new Xi(h,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Kv(a,e,i,r,o){const c={verb:a.verb,description:a.description};return LR(c,e,i,r,v3,o)}function Qv(a,e){const i=nS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${Vl}`};g();const _=I=>{h.font=`normal ${I*r}px ${Vl}`;const L=h.measureText(m),F=Math.abs(L.actualBoundingBoxLeft??0),A=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??I*r*.8),W=Math.abs(L.actualBoundingBoxDescent??I*r*.25);return{left:F,right:A,width:F+A,ascent:N,descent:W}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,E=40*r+v,w=I=>{const L=_(I);return L.width+x*2<=o&&L.ascent+L.descent+E*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,O=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,O-y.ascent,M+y.right,O+y.descent);x3.forEach(I=>z.addColorStop(I.t,I.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.shadowColor="rgba(10, 14, 23, 0.55)",h.shadowBlur=Math.max(10,16*r),h.shadowOffsetX=0,h.shadowOffsetY=Math.max(1,2*r),h.strokeText(m,M,O),h.fillStyle=z,h.fillText(m,M,O),h.shadowColor="transparent",h.shadowBlur=0,h.shadowOffsetY=0;const C=new Px(u);return C.colorSpace=$n,C.minFilter=fn,C.magFilter=fn,C.generateMipmaps=!1,C}function Jv(a,e){a.generateMipmaps=!1,a.minFilter=fn,a.magFilter=fn,a.wrapS=aa,a.wrapT=aa;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function eC({cardAlpha:a=.8}){const e=We.useRef(null),i=We.useRef(null),r=We.useRef(null),o=We.useRef(null),c=We.useRef(null),u=We.useRef(!1),h=We.useRef(!1),m=We.useRef(null),d=We.useRef(a);d.current=Math.min(1,Math.max(0,a));const g=We.useCallback(()=>{var v;if(u.current)return;u.current=!0,h.current=!1,(v=m.current)==null||v.call(m);const _=i.current;_==null||_.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(mr),Nh(),requestAnimationFrame(()=>{Nh(),requestAnimationFrame(()=>{Nh(),window.setTimeout(()=>{u.current=!1},100)})})},T3)},[]);return We.useLayoutEffect(()=>{const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=window.location.hash.replace(/^#/,"");return _||v!==""&&v!=="flow"&&v!=="hero"||document.body.classList.add(mr),()=>{document.body.classList.remove(mr)}},[]),We.useEffect(()=>{const _=v=>{if(v.key!=="Escape")return;const x=document.getElementById("hero");x&&x.getBoundingClientRect().top>8&&(v.preventDefault(),g())};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[g]),We.useEffect(()=>{const _=window.location.hash.replace(/^#/,"");_&&_!=="flow"&&_!=="hero"&&requestAnimationFrame(()=>{var v;(v=document.getElementById(_))==null||v.scrollIntoView({block:"start"})})},[]),We.useEffect(()=>{const _=r.current,v=e.current;if(!_||!v)return;const x=_,E=v;let w=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(mr);const O=c.current;O&&(O.style.height="0px");return}let M;return(async()=>{if(await M3(),w)return;const O=Math.min(window.devicePixelRatio,2),z=Math.max(320,x.clientWidth||window.innerWidth),C=Math.max(1,x.clientHeight||window.innerHeight),I=[],L=[],F=[],A=new Float64Array(un).fill(-1);Pl.forEach((be,T)=>{const H=un-1-T,q=Pl[H],J=Kv(q,H,O,z,d.current);F.push(J);const $=Z3(J);I.push($);const we=Rp,Fe=we*Jx/$x,Le=new Ri(new ks(Fe,we),$);Le.position.set(0,0,-T*es),Le.renderOrder=T,L.push(Le)});const N=Qv(O,z),W=new Ou({map:N,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:ya}),k=N.image.height/N.image.width,{w:K,h:me}=Zv(z,C,k),ce=new Ri(new ks(K,me),W);ce.position.set(0,0,-(un-1)*es+.05),ce.renderOrder=r3;const j=new IE,B=new Vi(Pu,1,.08,120),G=new tR({antialias:!0,alpha:!1,powerPreference:"high-performance"});G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.outputColorSpace=$n,G.sortObjects=!0,x.appendChild(G.domElement),Jv(N,G);const ne=new Nl;L.forEach(be=>ne.add(be)),ne.add(ce),j.add(ne);const pe=new Yi({uniforms:{uStrength:{value:0}},vertexShader:p3,fragmentShader:m3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Ih}),ge=new Ri(new Wi,pe);ge.frustumCulled=!1,ge.renderOrder=Yv,ge.visible=!1,j.add(ge);let U=null,Q=null,ve=null;const ye=o.current;if(ye){ye.muted=!0,ye.defaultMuted=!0,ye.playsInline=!0,ye.preload="auto",ye.pause(),U=new qE(ye),U.colorSpace=$n,U.minFilter=fn,U.magFilter=fn,U.generateMipmaps=!1,Q=new Ou({map:U,depthTest:!1,depthWrite:!1,toneMapped:!1}),ve=new Ri(new ks(1,1),Q),ve.frustumCulled=!1,ve.renderOrder=l3,ve.position.set(0,0,-qv),B.add(ve),j.add(B);const be=()=>{jv(ye,aS[0]),U.needsUpdate=!0};ye.readyState>=1?be():ye.addEventListener("loadedmetadata",be,{once:!0})}function Ve(){if(!ve)return;const be=qv,T=Pu*Math.PI/180,H=2*Math.tan(T/2)*be,q=H*B.aspect,J=(ye==null?void 0:ye.videoWidth)||1280,$=(ye==null?void 0:ye.videoHeight)||720,we=J/Math.max(1,$);q/Math.max(1e-6,H)>we?ve.scale.set(q,q/we,1):ve.scale.set(H*we,H,1)}const oe=0,Te=-(un-1)*es,Ae=Bl,qe=-.1*es,at=.1*es;function et(be,T){const H=be+Bl;return(Ae-H)/T}let ut=Math.max(1,x.clientHeight||window.innerHeight),ot=!1,gt=window.innerWidth,_t=!1,ft=!1;function Jt(){return Math.max(1,window.innerHeight)}function tn(be){return _t?be>E3&&(_t=!1):b3(be)&&(_t=!0),_t}function nn(){const be=c.current;if(!be)return;const{totalPx:T}=bo(ut),H=ut*WR,J=`${Math.max(Math.ceil(T+H+ut*Dh+32-kv),Math.ceil(ut*1.08))}px`;be.style.height!==J&&(be.style.height=J)}function an(){const be=Math.max(1,ut),{totalPx:T}=bo(be),H=Math.max(1,T),q=oe+qe,J=Te+at-XR,we=(q-J)/H,Fe=et(q,we),Le=et(J,we);return{ih:be,totalPx:H,scrollToWorldFactor:we,minScroll:Fe,maxScroll:Le}}let{scrollToWorldFactor:Vt,minScroll:jt,maxScroll:Z}=an();function Bt(){var Fe;const be=Math.max(320,x.clientWidth||window.innerWidth),T=Math.min(window.devicePixelRatio,2);F.forEach((Le,Oe)=>{Le.dispose();const He=un-1-Oe,je=Kv(Pl[He],He,T,be,d.current);F[Oe]=je,I[Oe].uniforms.uMap.value=je}),(Fe=W.map)==null||Fe.dispose();const H=Qv(T,be);W.map=H,W.needsUpdate=!0,Jv(H,G);const q=H.image.height/H.image.width,J=Math.max(1,x.clientHeight||ut),{w:$,h:we}=Zv(be,J,q);ce.geometry.dispose(),ce.geometry=new ks($,we)}function xt(){const be=x.clientWidth,T=x.clientHeight;if(be<2||T<2)return;B.aspect=be/T,B.updateProjectionMatrix(),G.setSize(be,T,!1),Ve(),Bt();const H=an();Vt=H.scrollToWorldFactor,jt=H.minScroll,Z=H.maxScroll,ot||nn()}function P(){ot=!1,ut=Jt(),gt=window.innerWidth,xt()}xt(),requestAnimationFrame(()=>{w||Bt()});let b=0;function te(){var zn,ha;if(w)return;b=requestAnimationFrame(te);const be=Jt(),T=document.getElementById("hero"),H=T?T.getBoundingClientRect().top:0,q=T?tn(H):!0,{totalPx:J}=bo(ut),$=E.getBoundingClientRect(),we=Math.max(1,E.offsetHeight-ut),Fe=Gt.clamp(-$.top,0,we);if(!q&&Fe<=J){if(ot=!1,Math.abs(be-ut)>Lh){ut=be,nn();const yt=an();Vt=yt.scrollToWorldFactor,jt=yt.minScroll,Z=yt.maxScroll}}else ot=!0;const Oe=ut,{cardPx:He,titlePx:je,totalPx:tt}=bo(Oe),Qe=Math.max(1,E.offsetHeight-Oe),dt=Gt.clamp(-$.top,0,Qe),kt=Math.min(dt,tt),Nt=Math.max(1,tt),wt=Oe*eS,Ut=Oe*tS,ke=wt+Ut,En=dt-tt,pt=Sr(Gt.clamp(En/Math.max(1,wt),0,1)),pn=Sr(Gt.clamp((En-wt)/Math.max(1,Ut),0,1)),qn=Gt.mapLinear(He,0,Nt,jt,Z),ti=x.clientWidth,jn=x.clientHeight,Mt=Math.max(1,je),Dt=kt<Mt,gi=Dt?Gt.clamp(kt/Mt,0,1):0,Ot=Math.max(0,kt-Mt),Li=Math.max(1,He),_i=Gt.clamp(Ot/Li,0,1)*(un-1),Zi=Wp(ti,jn),Fo=X3(ti,jn);let Na;Dt?Na=Gt.mapLinear(kt,0,Mt,Z,qn):Na=Gt.mapLinear(kt,Mt,Nt,qn,jt),Na=Gt.clamp(Na,jt,Z);const fa=W3(He,Oe),os=Y3(Mt,Oe),Bo=q3(gi,os),Ar=un-1,Wl=tt+ke;ye&&(jv(ye,h3(dt,Mt,He,tt,Wl)),U&&(U.needsUpdate=!0)),Ve();const Ua=Ae-Na*Vt;B.position.set(0,0,Ua),B.lookAt(0,0,Ua-Bl);const ri=tt+ke;let ls=0;if(Qe>ri&&dt>=ri){const yt=Math.max(1,Qe-ri);ls=Sr(Gt.clamp((dt-ri)/yt,0,1))}const qs=Math.max(1,ke+Oe*Dh),da=dt<=Nt?Gt.clamp(dt/Nt,0,1):1+Gt.clamp(En/qs,0,1)*.45;if(K3(dt,Qe)){const yt=J3(da,Ua,Q3(ti)),pa=new KE(yt,!1,"centripetal").getSpacedPoints(e3);if(pa.length>=2){const On=$3(pa,t3,n3,i3),Ni=ge.geometry.getAttribute("position"),Pn=On.getAttribute("position");if(Ni&&Pn&&Ni.count===Pn.count&&((zn=ge.geometry.getIndex())==null?void 0:zn.count)===((ha=On.getIndex())==null?void 0:ha.count)&&Ni&&Pn){Ni.array.set(Pn.array),Ni.needsUpdate=!0;const cs=ge.geometry.getAttribute("normal"),us=On.getAttribute("normal");cs&&us&&(cs.array.set(us.array),cs.needsUpdate=!0);const zo=ge.geometry.getAttribute("uv"),Dr=On.getAttribute("uv");zo&&Dr&&(zo.array.set(Dr.array),zo.needsUpdate=!0),On.dispose()}else ge.geometry.dispose(),ge.geometry=On;ge.visible=!0;const Zs=Dt||_i<Gt.clamp(fa,0,.999);ge.renderOrder=Zs?o3:Yv,pe.uniforms.uStrength.value=.36*(1-ls*.92)}else ge.visible=!1,pe.uniforms.uStrength.value=0}else ge.visible=!1,pe.uniforms.uStrength.value=0;const js=Math.floor((un-1)/2),Rr=performance.now(),Cr=Gt.clamp(fa,0,.999);for(let yt=0;yt<un;yt++){if(Dt||_i<=yt+1e-5||_i<yt+Cr){A[yt]=-1;continue}A[yt]<0&&(_i>=yt+1-1e-5?A[yt]=Rr-Xv:A[yt]=Rr)}if(L.forEach((yt,Zn)=>{const pa=-Zn*es,On=un-1-Zn,Ni=A[On];let Pn=Ni<0?0:Sr(Gt.clamp((Rr-Ni)/Xv,0,1));!Dt&&On===un-1&&pn>0&&(Pn=Math.max(Pn,pn));let{opacity:Ki}=j3(_i,On,fa,Pn);Dt&&Zn===Ar&&(Ki*=Bo.lastCardOp,Pn=0);let Zs=1,cs=0;!Dt&&On===un-1&&Ki>.02&&pt>0&&(Zs=1-.28*pt,cs=-es*.32*pt),yt.position.set(0,0,pa+cs),yt.scale.setScalar(Fo*Zs);const us=I[Zn];us.uniforms.uOpacity.value=Ki,us.uniforms.uWipe.value=Pn,us.depthWrite=Ki>=.995&&Pn<.02,yt.visible=Ki>.003&&Pn<.997,yt.renderOrder=Zn<=js?iS+Zn:s3+(Zn-js-1)}),ce.position.set(0,0,-Ar*es+.05),ce.scale.setScalar(Zi),W.opacity=Dt?Bo.titleOp:0,ce.visible=W.opacity>.003,!u.current){h.current?ft=!1:q?ft=!0:ft&&dt<tt-Oe*.25&&(ft=!1),document.body.classList.toggle(mr,!ft);const yt=i.current;yt!=null&&yt.classList.contains("flow-intro__sticky--exit")&&!q&&(yt.style.transition="none",yt.classList.remove("flow-intro__sticky--exit"),yt.offsetWidth,yt.style.transition="")}if(!ot){const yt=ke+Oe*Dh+32-kv,Zn=Math.max(Math.ceil(tt+yt),Math.ceil(Oe*1.08)),pa=c.current;if(pa){const On=`${Zn}px`;pa.style.height!==On&&(pa.style.height=On)}}const wr=1-ls*.96;i.current&&(i.current.style.setProperty("--intro-ui-opacity",String(wr)),i.current.style.setProperty("--intro-tagline-opacity","1"));const ql=String(1-ls);G.domElement.style.opacity=ql,G.render(j,B)}te();let ae=0,de=0,Re=!1,Ne="page",ue=!1,he=!1,Ce=!1,ze=0,Pe=0,Ie=0,Je=!1,Ke=!1,st=0,Y=window.scrollY,De={kind:"title"};const xe=8;function Ue(){de&&(window.clearTimeout(de),de=0)}function Ge(){ae&&(cancelAnimationFrame(ae),ae=0),Re=!1,Ne="page",h.current=!1}function Se(){Ge(),Ue(),ue=!1}m.current=Se;function Ye(){var tt;const be=Math.max(1,ut),{cardPx:T,titlePx:H,totalPx:q}=bo(be),J=E.getBoundingClientRect(),$=Math.max(1,E.offsetHeight-be),we=Gt.clamp(-J.top,0,$),Fe=document.getElementById("hero"),Le=Fe?tn(Fe.getBoundingClientRect().top):!0,Oe=((tt=i.current)==null?void 0:tt.getBoundingClientRect().bottom)??be,je=Math.max(0,Math.min(we,q)-H)/Math.max(1,T)*(un-1);return{innerH:be,cardPx:T,titlePx:H,totalPx:q,scrolledPx:we,landed:Le,stickyBottom:Oe,depthT:je}}function Be(be=Ye()){return k3(be.scrolledPx,be.titlePx,be.cardPx,be.totalPx,be.landed,be.stickyBottom,be.innerH)}function en(){return Re||Be()}function zt(be){let T=be.deltaY;return be.deltaMode===1?T*=16:be.deltaMode===2&&(T*=window.innerHeight),T}function Bn(){Ue(),ue=!0,de=window.setTimeout(()=>{de=0,ue=!1},N3)}function ei(be,T){return be.kind==="title"?H3(E):be.kind==="card"?G3(E,be.idx,T.innerH):Uh()}function ra(be){if(w||u.current||Re)return;const T=Ye(),H=be.kind==="hero";if(!H&&!Be(T))return;const q=ei(be,T);if(q==null)return;const J=window.scrollY,$=q-J;if(De=be.kind==="hero"?{kind:"card",idx:un-1}:be,Math.abs($)<rS(T.innerH)){_r(q),Bn();return}Re=!0,Ne=H?"exit":"page",h.current=H,ue=!0;const we=H?B3(window.innerWidth):F3(window.innerWidth),Fe=performance.now(),Le=He=>{if(_r(He),Re=!1,Ne="page",ae=0,!H){h.current=!1,Bn();return}h.current=!1,requestAnimationFrame(()=>{const je=Uh();je!=null&&_r(je),requestAnimationFrame(()=>{const tt=Uh();tt!=null&&_r(tt),Bn()})})},Oe=He=>{if(w||u.current){Re=!1,Ne="page",ae=0,h.current=!1;return}if(Ne==="page"&&!Be(Ye())){Ge(),ue=!1;return}const je=Math.min(1,(He-Fe)/we);_r(J+$*Sr(je)),je<1?ae=requestAnimationFrame(Oe):Le(q)};ae=requestAnimationFrame(Oe)}function oa(be,T){const H=un-1,q=T>0?1:-1,J=Oh(be.scrolledPx,be.titlePx,be.depthT,be.innerH);if(J.kind==="title")return q<0?null:{kind:"card",idx:0};const $=J.idx+q;return $<0?{kind:"title"}:$>H?q>0?{kind:"hero"}:{kind:"card",idx:H}:{kind:"card",idx:$}}function wa(be){const T=Ye();if(!Be(T)&&!(Re&&Ne==="exit"))return!1;const H=oa(T,be);return H===null?!1:(ra(H),!0)}function Da(be,T){return oa(be,T)===null}function pi(be){if(!en())return;const T=zt(be),H=Ye();if(!Be(H)&&Ne!=="exit")return;const q=oa(H,T>0?1:-1);if(q===null){(Re||ue)&&Se();return}if(Re||ue){be.preventDefault();return}if(Math.abs(T)<D3){be.preventDefault();return}be.preventDefault(),ra(q)}function dn(be){var T;if(Pe=((T=be.touches[0])==null?void 0:T.clientY)??Pe,ze=Pe,Ie=window.scrollY,he=!1,Ce=Re||Be(),Ce&&!Re){const H=Ye();De=Oh(H.scrolledPx,H.titlePx,H.depthT,H.innerH)}}function yn(be){var H;const T=((H=be.touches[0])==null?void 0:H.clientY)??ze;if(!he){if(!Ce&&(Re||Be())&&(Ce=!0,Pe=T,ze=T,Ie=window.scrollY),!Ce)return;const q=Pe-T;if(Math.abs(q)<xe){ze=T;return}const J=q>0?1:-1,$=Ye();if(!Re&&!Be($)){Ce=!1,ze=T;return}if(Da($,J)){Ce=!1,Se(),ze=T;return}Re&&Se(),he=!0,Ce=!1,Ie=window.scrollY,De=Oh($.scrolledPx,$.titlePx,$.depthT,$.innerH)}be.preventDefault(),ze=T,Re||_r(Ie)}function Dn(){const be=he,T=Ce,H=Pe-ze;if(he=!1,Ce=!1,Re)return;if(!be){T&&Se();return}if(!Be())return;if(Math.abs(H)<L3){ra(De);return}const q=H>0?1:-1,J=Ye();if(Da(J,q)){Se();return}wa(q)}function la(be){be.pointerType!=="touch"&&be.button===0&&(Je=!0,Ke=!1,st=window.scrollY,Be()&&Ge())}function Ws(be){if(be.pointerType==="touch"||!Je)return;if(Je=!1,!Ke||!Be()){Ke=!1;return}const T=Ye(),H=window.scrollY>=st?1:-1,q=oa(T,H);if(Ke=!1,q===null){Se();return}ra(q)}function Ys(be){be.pointerType!=="touch"&&(Je=!1,Ke=!1)}function ca(be){be.button===0&&(Ke||Re||ue||Be()&&(be.preventDefault(),wa(1)))}function qi(be){var J;const T=be.target;if((J=T==null?void 0:T.closest)!=null&&J.call(T,"input, textarea, select, [contenteditable=true]"))return;const H=be.key==="ArrowDown"||be.key==="ArrowRight"||be.key==="Enter"||be.key===" ",q=be.key==="ArrowUp"||be.key==="ArrowLeft";if(!(!H&&!q)){if(Re||ue){be.preventDefault();return}Be()&&(be.preventDefault(),wa(H?1:-1))}}function ji(){const be=window.scrollY,T=be-Y;Y=be,Je&&Math.abs(T)>.5&&(Ke=!0),Re&&Ne==="page"&&!Be()&&Se()}function wi(){Se(),P()}function Di(){Se();const be=Jt(),T=window.innerWidth,H=Math.abs(be-ut),q=Math.abs(T-gt)>1;if(ot){H>Lh||q?P():xt();return}ut=be,gt=T,xt()}function ua(){Se();const be=Jt();Math.abs(be-ut)<=Lh||(ot?P():(ut=be,gt=window.innerWidth,xt()))}window.addEventListener("wheel",pi,{passive:!1}),window.addEventListener("touchstart",dn,{passive:!0}),window.addEventListener("touchmove",yn,{passive:!1}),window.addEventListener("touchend",Dn,{passive:!0}),window.addEventListener("touchcancel",Dn,{passive:!0}),window.addEventListener("pointerdown",la,{passive:!0}),window.addEventListener("pointerup",Ws,{passive:!0}),window.addEventListener("pointercancel",Ys,{passive:!0}),window.addEventListener("scroll",ji,{passive:!0}),window.addEventListener("resize",Di,{passive:!0}),window.addEventListener("orientationchange",wi,{passive:!0}),x.addEventListener("click",ca),window.addEventListener("keydown",qi);const mi=window.visualViewport;mi&&mi.addEventListener("resize",ua);const hn=new ResizeObserver(xt);hn.observe(x),M=()=>{var be;Se(),m.current=null,cancelAnimationFrame(b),document.body.classList.remove(mr),window.removeEventListener("wheel",pi),window.removeEventListener("touchstart",dn),window.removeEventListener("touchmove",yn),window.removeEventListener("touchend",Dn),window.removeEventListener("touchcancel",Dn),window.removeEventListener("pointerdown",la),window.removeEventListener("pointerup",Ws),window.removeEventListener("pointercancel",Ys),window.removeEventListener("scroll",ji),window.removeEventListener("resize",Di),window.removeEventListener("orientationchange",wi),x.removeEventListener("click",ca),window.removeEventListener("keydown",qi),mi&&mi.removeEventListener("resize",ua),hn.disconnect(),I.forEach(T=>{T.dispose()}),F.forEach(T=>T.dispose()),(be=W.map)==null||be.dispose(),W.dispose(),L.forEach(T=>T.geometry.dispose()),ce.geometry.dispose(),ge.geometry.dispose(),pe.dispose(),j.remove(ge),ve&&(B.remove(ve),ve.geometry.dispose()),Q==null||Q.dispose(),U==null||U.dispose(),ye&&ye.pause(),G.dispose(),x.contains(G.domElement)&&x.removeChild(G.domElement)},w&&M()})(),()=>{var O;w=!0,(O=m.current)==null||O.call(m),m.current=null,document.body.classList.remove(mr),M==null||M()}},[]),D.jsxs("section",{ref:e,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:i,className:"flow-intro__sticky",children:[D.jsx("video",{ref:o,className:"flow-intro__bg-video",src:c3,muted:!0,playsInline:!0,preload:"auto","aria-hidden":!0}),D.jsx("div",{ref:r,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(kp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:g,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(GR,{text:VR,className:"flow-intro__tagline",scrollerRef:e})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Pl.map((_,v)=>D.jsxs("p",{children:["Step ",String(v+1).padStart(2,"0"),": ",_.verb,". ",_.description]},_.verb))})]}),D.jsx("div",{ref:c,className:"flow-intro__spacer","aria-hidden":!0})]})}const tC=280,nC=5/4,iC=3800,aC={discover:Ol,copy:TR};function sC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rC({stepIndex:a,kind:e,className:i,width:r=tC}){const o=We.useRef(null),c=e??jx(a),u=Math.round(r*nC);return We.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*x),w=Math.round(u*x);(h.width!==E||h.height!==w)&&(h.width=E,h.height=w);const y=h.getContext("2d");y&&DR(y,c,E,w,m)};g();const _=aC[c];_&&_>1&&!sC()&&(d=setInterval(()=>{m=(m+1)%_,g()},iC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const $v=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function oC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:$v.map((a,e)=>{const i=e===$v.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const lC=/^(action)$/i;function cC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>lC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function oS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:cC(e)})]})}var uC=ux();function fC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function dC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,fC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function ex(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=dC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const hC=40,pC=5,mC="typewriter-reveal",tx=1e3,gC=4e3;function nx(){return tx+Math.random()*(gC-tx)}function lS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _C({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),_=We.useRef(null),v=We.useRef(null),x=We.useRef(null),E=We.useRef("idle"),[w,y]=We.useState("idle");g.current=m;const M=We.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),O=We.useCallback(()=>{var N;M(),v.current=null,x.current=null,E.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),z=We.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(O,N)},[M,O]);We.useLayoutEffect(()=>{E.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),We.useLayoutEffect(()=>{var G,ne,pe;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const ge=x.current??nx();x.current=null,z(ge);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(lS()){(G=g.current)==null||G.call(g);return}const N=d.current;if(!N||!a){(ne=g.current)==null||ne.call(g);return}N.style.width="",N.offsetWidth;const W=Math.max(a.length/i*1e3,120),k=Math.max(a.length,1),K=N.closest(".typewriter-block"),me=(K==null?void 0:K.clientWidth)??((pe=N.parentElement)==null?void 0:pe.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ce=N.scrollWidth,j=me>0?Math.min(ce,me):ce;N.style.width="0",N.style.setProperty("--tw-duration",`${W}ms`),N.style.setProperty("--tw-target-width",`${j}px`),N.style.setProperty("--tw-steps",String(k)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,E.current="animating",y("animating");const B=ge=>{if(ge.animationName===mC){if(h){N.style.width=`${j}px`,E.current="cursor-hold",y("cursor-hold"),z(nx());return}N.style.width="",O()}};return N.addEventListener("animationend",B),()=>{N.removeEventListener("animationend",B)}},[o,u,O,h,z,i,a,c,M,r]);const C=w==="animating",I=w==="cursor-hold",L=w==="complete",A=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",I?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(C||I)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:A,children:e??a})}function Yp({text:a,children:e,className:i,speed:r=hC,cursorWidth:o=pC,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),[_,v]=We.useState([]),[x,E]=We.useState(0),[w,y]=We.useState(0),[M,O]=We.useState(!1),[z,C]=We.useState(!1),I=lS();g.current=m;const L=We.useCallback(()=>{const ce=d.current;if(!ce||!a)return v([]),E(0),C(!0),!0;const j=ce.clientWidth;if(j<1)return!1;const G=(c==="auto"||c===!0)&&!I,{lines:ne,blockHeight:pe}=ex(a,j,ce,G);let ge=pe;if(!G){const U=ex(a,j,ce,!0);ge=Math.max(pe,U.blockHeight)}return v(ne),E(ge),C(!0),!0},[a,c,I]);We.useLayoutEffect(()=>{var ce,j;if(y(0),O(!1),C(!1),v([]),E(0),I){(ce=g.current)==null||ce.call(g),C(!0);return}if(!a){(j=g.current)==null||j.call(g),C(!0);return}if(!L()){const B=new ResizeObserver(()=>{L()&&B.disconnect()});return d.current&&B.observe(d.current),()=>B.disconnect()}},[a,c,L,I]);const F=We.useCallback(ce=>{var B;const j=ce>=_.length-1;uC.flushSync(()=>{if(!j){y(ce+1);return}O(!0)}),j&&((B=g.current)==null||B.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",I?"is-static":""].filter(Boolean).join(" "),W={...!M&&!I&&x>0?{height:x,minHeight:x}:void 0},k=e??a;if(!z)return D.jsx("span",{ref:d,className:N,style:W,children:k});if(I||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:k});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:k});const K=_.length>0?_:[a],me=!!e&&K.length<=1;return D.jsxs("span",{ref:d,className:N,style:W,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:k}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:K.map((ce,j)=>D.jsx(_C,{text:ce,content:me?e:void 0,speed:r,cursorWidth:o,waiting:j>w,active:u&&j===w,completed:j<w,holdCursor:h&&j===K.length-1,onComplete:j===w?()=>F(j):void 0},`${j}-${ce}`))})]})}function vC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=We.useState(!1);return We.useLayoutEffect(()=>{if(r)return;if(vC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function xC(a){return String(a).padStart(2,"0")}function Iu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const SC=1600,MC=1500,ix=5e3,yC=7e3;function EC(){return ix+Math.random()*(yC-ix)}function bC({text:a,active:e}){const[i,r]=We.useState(!1),[o,c]=We.useState(0),u=We.useRef(null),h=`> ${a}`,m=We.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);We.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Iu()){r(!0);return}const g=window.setTimeout(()=>r(!0),MC);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=We.useCallback(()=>{Iu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},EC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Yp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function TC(){const[a,e]=We.useState(()=>new Set),[i,r]=We.useState(!1),o=We.useRef(new Map),c=We.useRef(null),u=qp(c,{amount:.35}),h=Os.steps.every(_=>a.has(`step-${_.n}`));We.useLayoutEffect(()=>{if(Iu()){e(new Set(Os.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const E=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),We.useLayoutEffect(()=>{if(Iu())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},SC);return()=>window.clearTimeout(_)},[h]);const m=We.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=We.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Os.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Os.title}),D.jsx("div",{className:"flow__chips",children:Os.chips.map(_=>D.jsx(oS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Os.steps.map((_,v)=>{const x=`step-${_.n}`,E=a.has(x);return D.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",xC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(bC,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:wn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(oC,{}):D.jsx(rC,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Yp,{text:Os.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Os.outcome})})]})})}function AC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(kp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:B_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Su.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:wn.docs,children:"Docs"}),D.jsx("a",{href:wn.manifesto,children:"Manifesto"}),D.jsx("a",{href:wn.discord,children:"Discord"}),D.jsx("a",{href:wn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:B_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const ax="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",cS=50,sx=3500,rx=4e3,RC=1400,CC=1200,wC=4500;function uS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ox(a){return/[A-Za-z0-9]/.test(a)}function DC(){return ax[Math.floor(Math.random()*ax.length)]??"?"}function LC(a){return Math.random()<.5?DC():a}function fS(a,e,i){const r=[];for(let d=0;d<a.length;d++)ox(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!ox(g)||h.has(d)?m+=g:m+=LC(g)}return m}function NC(a){return typeof a=="boolean"?{enabled:a,decryptMs:sx,pauseMs:rx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??sx,pauseMs:a.pauseMs??rx}}function Xn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=NC(e),c=r+o,[u,h]=We.useState(a);return We.useEffect(()=>{if(!i||uS()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(fS(a,v,r))};d();const g=setInterval(d,cS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function lx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??RC,o=e.stepDecryptMs??CC,c=e.holdMs??wC,u=a.join("\0"),[h,m]=We.useState(a),[d,g]=We.useState(()=>a.map(()=>!1));return We.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||uS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let E=Date.now();const w=()=>{const M=Date.now();let O=M-E;O>=x&&(E=M,O=0);const z=[],C=[];for(let I=0;I<_.length;I++){const L=_[I]??"",F=I*r,A=O>=F;if(C.push(A),!A){z.push(L);continue}const N=O-F;z.push(fS(L,N,o))}m(z),g(C)};w();const y=setInterval(w,cS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function UC(){const a=[...F_,...F_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(oS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function OC({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Us.headline,c=Xn(Us.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:NR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Ap.map(h=>D.jsx("path",{d:h,fill:"#C8F5A8"},`ghost-${h.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Ap.map(h=>D.jsx("path",{d:h,fill:"#C8F5A8"},`fill-${h.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Us.eyebrow.href,"aria-label":`${Us.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(wo,{href:Us.primaryCta.href,variant:"primary",children:Us.primaryCta.label}),D.jsx(wo,{href:Us.secondaryCta.href,variant:"secondary",children:Us.secondaryCta.label})]})]}),D.jsx(UC,{})]})}function PC(){const a=Xn(Yd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Yd.href,"aria-label":Yd.text,children:a})})}const si={decryptMs:2800,pauseMs:5200},cx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function dS(a){return String(a+1).padStart(2,"0")}function IC(a,e,i,r){return`${dS(a)}  ${e}  ·  ${i}  ·  ${r}`}function FC(a,e,i){return`${dS(a)}  ${e}  ·  ${i}`}function BC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function di({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function on({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function zC({meta:a}){const e=Xn(a.name,si),i=Xn(a.tx,si),r=Xn(a.hash,si),o=Xn(a.chain,si),c=Xn(a.verified,si),u=Xn(a.rep,si),h=Xn(a.portable,si),m=Xn(a.next,si),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,E=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,O=`verified ${c} · rep ${u} · portable ${h}`,z=`next ${a.next}`,C=`next ${m}`,I=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${h}`,F=`verified ${a.verified}`,A=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(di,{label:"tx",value:a.tx,display:i}),D.jsx(di,{label:"hash",value:a.hash,display:r}),D.jsx(di,{label:"chain",value:a.chain,display:o}),D.jsx(di,{label:"verified",value:a.verified,display:c}),D.jsx(di,{label:"rep",value:a.rep,display:u}),D.jsx(di,{label:"portable",value:a.portable,display:h}),D.jsx(di,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(on,{value:d,display:g}),D.jsx(on,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(on,{value:x,display:E}),D.jsx(on,{value:w,display:y}),D.jsx(on,{value:M,display:O}),D.jsx(on,{value:z,display:C})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(on,{value:d,display:g}),D.jsx(on,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(on,{value:x,display:E}),D.jsx(on,{value:w,display:y}),D.jsx(on,{value:F,display:A}),D.jsx(on,{value:I,display:L}),D.jsx(on,{value:z,display:C})]})]})}function HC({meta:a}){const e=Xn(a.tx,si),i=Xn(a.from,si),r=Xn(a.to,si),o=Xn(a.asset,si),c=Xn(a.amt,si),u=Xn(a.chain,si),h=Xn(a.status,si),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(di,{label:"tx",value:a.tx,display:e}),D.jsx(di,{label:"from",value:a.from,display:i}),D.jsx(di,{label:"to",value:a.to,display:r}),D.jsx(di,{label:"asset",value:a.asset,display:o}),D.jsx(di,{label:"amt",value:a.amt,display:c}),D.jsx(di,{label:"chain",value:a.chain,display:u}),D.jsx(di,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(on,{value:g,display:_}),D.jsx(on,{value:m,display:d}),D.jsx(on,{value:v,display:x}),D.jsx(on,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(on,{value:g,display:_}),D.jsx(on,{value:m,display:d}),D.jsx(on,{value:E,display:w}),D.jsx(on,{value:a.chain,display:u}),D.jsx(on,{value:y,display:M})]})]})}function GC({meta:a}){const e=We.useRef(null),i=qp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?BC(r):null,c=We.useMemo(()=>{const d=a.steps.map((g,_)=>IC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=We.useMemo(()=>{const d=a.steps.map((g,_)=>FC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=lx(c,{...cx,enabled:i}),m=lx(u,{...cx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(on,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(on,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(on,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function VC({meta:a}){return a.kind==="identity"?D.jsx(zC,{meta:a}):a.kind==="chain"?D.jsx(GC,{meta:a}):D.jsx(HC,{meta:a})}function kC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(wo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(VC,{meta:a.meta})]})}function XC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:qd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:qd.title}),D.jsx("div",{className:"personas__grid",children:qd.items.map(a=>D.jsx(kC,{persona:a},a.title))})]})})}function WC(){const[a,e]=We.useState(!1),[i,r]=We.useState(!1),[o,c]=We.useState("");return We.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),We.useEffect(()=>{const u=Su.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),We.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(kp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Su.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:wn.docs,children:"Docs"}),D.jsx(wo,{href:wn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Su.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:wn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function YC(){const a=We.useRef(null),e=qp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Yp,{text:I_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:I_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function qC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(PC,{}),D.jsx(WC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(eC,{cardAlpha:0}),D.jsx(OC,{contentOffsetY:-150,maskAlpha:.6}),D.jsx(YC,{}),D.jsx(yy,{}),D.jsx(XC,{}),D.jsx(TC,{}),D.jsx(by,{}),D.jsx(My,{})]}),D.jsx(AC,{})]})}xy.createRoot(document.getElementById("root")).render(D.jsx(We.StrictMode,{children:D.jsx(qC,{})}));
